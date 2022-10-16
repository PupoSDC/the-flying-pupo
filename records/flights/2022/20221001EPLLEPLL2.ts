import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20221001EPLLEPLL2",
    callsign: "BNI8PX",
    name: "Hour building flight to Katowice (Low approach)",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 9, 1, 13, 25).getTime(),
    arrival: new Date(2022, 9, 1, 15, 55).getTime(),
    singleEnginePistonTime: 150,
    multiEnginePistonTime: 0,
    picTime: 150,
    dualTime: 0,
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
      registration: "SP-PFD",
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
      "latitude": 51.720291,
      "longitude": 19.389755,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 252,
      "squawk": "0",
      "timestamp": 1664631156,
      "ems": null
    },
    {
      "latitude": 51.719055,
      "longitude": 19.38493,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 246,
      "squawk": "0",
      "timestamp": 1664631166,
      "ems": null
    },
    {
      "latitude": 51.717815,
      "longitude": 19.379959,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 248,
      "squawk": "0",
      "timestamp": 1664631177,
      "ems": null
    },
    {
      "latitude": 51.716557,
      "longitude": 19.374924,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 249,
      "squawk": "0",
      "timestamp": 1664631187,
      "ems": null
    },
    {
      "latitude": 51.715485,
      "longitude": 19.370346,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664631196,
      "ems": null
    },
    {
      "latitude": 51.714066,
      "longitude": 19.366001,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1664631205,
      "ems": null
    },
    {
      "latitude": 51.713253,
      "longitude": 19.364853,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664631209,
      "ems": null
    },
    {
      "latitude": 51.712006,
      "longitude": 19.363997,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1664631214,
      "ems": null
    },
    {
      "latitude": 51.710587,
      "longitude": 19.363701,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664631219,
      "ems": null
    },
    {
      "latitude": 51.709122,
      "longitude": 19.363922,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664631224,
      "ems": null
    },
    {
      "latitude": 51.707703,
      "longitude": 19.36474,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664631229,
      "ems": null
    },
    {
      "latitude": 51.706192,
      "longitude": 19.366224,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1664631234,
      "ems": null
    },
    {
      "latitude": 51.70546,
      "longitude": 19.367115,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664631238,
      "ems": null
    },
    {
      "latitude": 51.704361,
      "longitude": 19.368525,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1664631242,
      "ems": null
    },
    {
      "latitude": 51.703617,
      "longitude": 19.369736,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1664631246,
      "ems": null
    },
    {
      "latitude": 51.70285,
      "longitude": 19.371569,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664631250,
      "ems": null
    },
    {
      "latitude": 51.702404,
      "longitude": 19.373093,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664631254,
      "ems": null
    },
    {
      "latitude": 51.702026,
      "longitude": 19.374762,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664631258,
      "ems": null
    },
    {
      "latitude": 51.701614,
      "longitude": 19.376987,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664631262,
      "ems": null
    },
    {
      "latitude": 51.701294,
      "longitude": 19.378695,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664631266,
      "ems": null
    },
    {
      "latitude": 51.700882,
      "longitude": 19.380476,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664631270,
      "ems": null
    },
    {
      "latitude": 51.700405,
      "longitude": 19.382324,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664631274,
      "ems": null
    },
    {
      "latitude": 51.699844,
      "longitude": 19.384308,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664631278,
      "ems": null
    },
    {
      "latitude": 51.699005,
      "longitude": 19.388197,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664631286,
      "ems": null
    },
    {
      "latitude": 51.698215,
      "longitude": 19.392242,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664631294,
      "ems": null
    },
    {
      "latitude": 51.697769,
      "longitude": 19.3951,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664631299,
      "ems": null
    },
    {
      "latitude": 51.697586,
      "longitude": 19.396809,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664631302,
      "ems": null
    },
    {
      "latitude": 51.697449,
      "longitude": 19.398069,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664631305,
      "ems": null
    },
    {
      "latitude": 51.697098,
      "longitude": 19.399872,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664631308,
      "ems": null
    },
    {
      "latitude": 51.696491,
      "longitude": 19.403229,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664631314,
      "ems": null
    },
    {
      "latitude": 51.695656,
      "longitude": 19.408417,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664631323,
      "ems": null
    },
    {
      "latitude": 51.694675,
      "longitude": 19.414978,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664631333,
      "ems": null
    },
    {
      "latitude": 51.693977,
      "longitude": 19.42009,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664631341,
      "ems": null
    },
    {
      "latitude": 51.693512,
      "longitude": 19.423977,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664631347,
      "ems": null
    },
    {
      "latitude": 51.693329,
      "longitude": 19.425735,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664631350,
      "ems": null
    },
    {
      "latitude": 51.693146,
      "longitude": 19.428059,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664631353,
      "ems": null
    },
    {
      "latitude": 51.692631,
      "longitude": 19.431915,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664631359,
      "ems": null
    },
    {
      "latitude": 51.691883,
      "longitude": 19.435577,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664631365,
      "ems": null
    },
    {
      "latitude": 51.691746,
      "longitude": 19.436264,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664631366,
      "ems": null
    },
    {
      "latitude": 51.690998,
      "longitude": 19.43985,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664631371,
      "ems": null
    },
    {
      "latitude": 51.690811,
      "longitude": 19.440901,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664631373,
      "ems": null
    },
    {
      "latitude": 51.690674,
      "longitude": 19.441452,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 48.2,
        "kts": 26,
        "mph": 29.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664631374,
      "ems": null
    },
    {
      "latitude": 51.69017,
      "longitude": 19.443871,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664631378,
      "ems": null
    },
    {
      "latitude": 51.689835,
      "longitude": 19.445267,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664631379,
      "ems": null
    },
    {
      "latitude": 51.689419,
      "longitude": 19.447327,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664631382,
      "ems": null
    },
    {
      "latitude": 51.689072,
      "longitude": 19.448771,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664631384,
      "ems": null
    },
    {
      "latitude": 51.688438,
      "longitude": 19.451447,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664631388,
      "ems": null
    },
    {
      "latitude": 51.687698,
      "longitude": 19.453669,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664631392,
      "ems": null
    },
    {
      "latitude": 51.686737,
      "longitude": 19.456045,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664631396,
      "ems": null
    },
    {
      "latitude": 51.685638,
      "longitude": 19.458124,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664631400,
      "ems": null
    },
    {
      "latitude": 51.684448,
      "longitude": 19.460052,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1664631403,
      "ems": null
    },
    {
      "latitude": 51.683178,
      "longitude": 19.46167,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1664631407,
      "ems": null
    },
    {
      "latitude": 51.681885,
      "longitude": 19.463022,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1664631411,
      "ems": null
    },
    {
      "latitude": 51.679962,
      "longitude": 19.464878,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1664631416,
      "ems": null
    },
    {
      "latitude": 51.678497,
      "longitude": 19.46629,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1664631420,
      "ems": null
    },
    {
      "latitude": 51.67717,
      "longitude": 19.467699,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1664631424,
      "ems": null
    },
    {
      "latitude": 51.675545,
      "longitude": 19.469528,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1664631428,
      "ems": null
    },
    {
      "latitude": 51.674103,
      "longitude": 19.471262,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664631432,
      "ems": null
    },
    {
      "latitude": 51.670944,
      "longitude": 19.474751,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1664631441,
      "ems": null
    },
    {
      "latitude": 51.667446,
      "longitude": 19.477539,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664631449,
      "ems": null
    },
    {
      "latitude": 51.666233,
      "longitude": 19.478226,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664631453,
      "ems": null
    },
    {
      "latitude": 51.665398,
      "longitude": 19.478683,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664631457,
      "ems": null
    },
    {
      "latitude": 51.662476,
      "longitude": 19.480318,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664631462,
      "ems": null
    },
    {
      "latitude": 51.660694,
      "longitude": 19.481201,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664631466,
      "ems": null
    },
    {
      "latitude": 51.65897,
      "longitude": 19.482117,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664631470,
      "ems": null
    },
    {
      "latitude": 51.657436,
      "longitude": 19.483032,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664631474,
      "ems": null
    },
    {
      "latitude": 51.654968,
      "longitude": 19.484558,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664631480,
      "ems": null
    },
    {
      "latitude": 51.652363,
      "longitude": 19.486084,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664631486,
      "ems": null
    },
    {
      "latitude": 51.649933,
      "longitude": 19.487446,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664631492,
      "ems": null
    },
    {
      "latitude": 51.647568,
      "longitude": 19.488602,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664631498,
      "ems": null
    },
    {
      "latitude": 51.644989,
      "longitude": 19.490118,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664631504,
      "ems": null
    },
    {
      "latitude": 51.642727,
      "longitude": 19.49173,
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1664631510,
      "ems": null
    },
    {
      "latitude": 51.640549,
      "longitude": 19.493309,
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664631516,
      "ems": null
    },
    {
      "latitude": 51.638069,
      "longitude": 19.49501,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664631522,
      "ems": null
    },
    {
      "latitude": 51.636906,
      "longitude": 19.495773,
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664631525,
      "ems": null
    },
    {
      "latitude": 51.634598,
      "longitude": 19.497318,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664631531,
      "ems": null
    },
    {
      "latitude": 51.632484,
      "longitude": 19.498749,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664631537,
      "ems": null
    },
    {
      "latitude": 51.630157,
      "longitude": 19.500139,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664631543,
      "ems": null
    },
    {
      "latitude": 51.629177,
      "longitude": 19.500504,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664631546,
      "ems": null
    },
    {
      "latitude": 51.627922,
      "longitude": 19.500885,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664631549,
      "ems": null
    },
    {
      "latitude": 51.626862,
      "longitude": 19.501251,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664631552,
      "ems": null
    },
    {
      "latitude": 51.625828,
      "longitude": 19.501495,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664631555,
      "ems": null
    },
    {
      "latitude": 51.624847,
      "longitude": 19.501698,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664631558,
      "ems": null
    },
    {
      "latitude": 51.624149,
      "longitude": 19.501877,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664631560,
      "ems": null
    },
    {
      "latitude": 51.622475,
      "longitude": 19.502182,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664631564,
      "ems": null
    },
    {
      "latitude": 51.620911,
      "longitude": 19.502439,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664631569,
      "ems": null
    },
    {
      "latitude": 51.619495,
      "longitude": 19.502716,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664631573,
      "ems": null
    },
    {
      "latitude": 51.617073,
      "longitude": 19.50325,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664631579,
      "ems": null
    },
    {
      "latitude": 51.61441,
      "longitude": 19.503777,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664631587,
      "ems": null
    },
    {
      "latitude": 51.611023,
      "longitude": 19.504623,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664631596,
      "ems": null
    },
    {
      "latitude": 51.607864,
      "longitude": 19.505484,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664631604,
      "ems": null
    },
    {
      "latitude": 51.605576,
      "longitude": 19.506073,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664631609,
      "ems": null
    },
    {
      "latitude": 51.604019,
      "longitude": 19.506449,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664631614,
      "ems": null
    },
    {
      "latitude": 51.600677,
      "longitude": 19.507339,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664631622,
      "ems": null
    },
    {
      "latitude": 51.597523,
      "longitude": 19.508286,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664631630,
      "ems": null
    },
    {
      "latitude": 51.596375,
      "longitude": 19.508749,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664631634,
      "ems": null
    },
    {
      "latitude": 51.595055,
      "longitude": 19.50943,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664631638,
      "ems": null
    },
    {
      "latitude": 51.592915,
      "longitude": 19.510803,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664631642,
      "ems": null
    },
    {
      "latitude": 51.591248,
      "longitude": 19.512016,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664631647,
      "ems": null
    },
    {
      "latitude": 51.589748,
      "longitude": 19.513092,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664631651,
      "ems": null
    },
    {
      "latitude": 51.588593,
      "longitude": 19.513872,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664631654,
      "ems": null
    },
    {
      "latitude": 51.587311,
      "longitude": 19.514688,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664631658,
      "ems": null
    },
    {
      "latitude": 51.586166,
      "longitude": 19.515282,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664631661,
      "ems": null
    },
    {
      "latitude": 51.583878,
      "longitude": 19.51647,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664631666,
      "ems": null
    },
    {
      "latitude": 51.583557,
      "longitude": 19.516678,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664631667,
      "ems": null
    },
    {
      "latitude": 51.580437,
      "longitude": 19.519119,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1664631676,
      "ems": null
    },
    {
      "latitude": 51.578979,
      "longitude": 19.520405,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1664631680,
      "ems": null
    },
    {
      "latitude": 51.577698,
      "longitude": 19.521517,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1664631684,
      "ems": null
    },
    {
      "latitude": 51.576096,
      "longitude": 19.522928,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1664631688,
      "ems": null
    },
    {
      "latitude": 51.574951,
      "longitude": 19.524042,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "squawk": "7000",
      "timestamp": 1664631692,
      "ems": null
    },
    {
      "latitude": 51.573624,
      "longitude": 19.525303,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1664631696,
      "ems": null
    },
    {
      "latitude": 51.571472,
      "longitude": 19.527159,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1664631705,
      "ems": null
    },
    {
      "latitude": 51.567543,
      "longitude": 19.530945,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1664631714,
      "ems": null
    },
    {
      "latitude": 51.566299,
      "longitude": 19.532354,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1664631719,
      "ems": null
    },
    {
      "latitude": 51.563446,
      "longitude": 19.535522,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1664631726,
      "ems": null
    },
    {
      "latitude": 51.562515,
      "longitude": 19.536667,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664631729,
      "ems": null
    },
    {
      "latitude": 51.561493,
      "longitude": 19.537964,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1664631733,
      "ems": null
    },
    {
      "latitude": 51.560623,
      "longitude": 19.539185,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1664631736,
      "ems": null
    },
    {
      "latitude": 51.559677,
      "longitude": 19.540482,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1664631739,
      "ems": null
    },
    {
      "latitude": 51.557693,
      "longitude": 19.542524,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1664631745,
      "ems": null
    },
    {
      "latitude": 51.556549,
      "longitude": 19.543194,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664631748,
      "ems": null
    },
    {
      "latitude": 51.555252,
      "longitude": 19.54361,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664631751,
      "ems": null
    },
    {
      "latitude": 51.554214,
      "longitude": 19.543713,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664631754,
      "ems": null
    },
    {
      "latitude": 51.553802,
      "longitude": 19.543787,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664631754,
      "ems": null
    },
    {
      "latitude": 51.552135,
      "longitude": 19.543839,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664631758,
      "ems": null
    },
    {
      "latitude": 51.550922,
      "longitude": 19.543915,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664631762,
      "ems": null
    },
    {
      "latitude": 51.549248,
      "longitude": 19.543915,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664631766,
      "ems": null
    },
    {
      "latitude": 51.548309,
      "longitude": 19.543936,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664631768,
      "ems": null
    },
    {
      "latitude": 51.546799,
      "longitude": 19.543861,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664631772,
      "ems": null
    },
    {
      "latitude": 51.545563,
      "longitude": 19.543787,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664631775,
      "ems": null
    },
    {
      "latitude": 51.544739,
      "longitude": 19.543787,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664631778,
      "ems": null
    },
    {
      "latitude": 51.543182,
      "longitude": 19.543787,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664631781,
      "ems": null
    },
    {
      "latitude": 51.540543,
      "longitude": 19.543762,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664631787,
      "ems": null
    },
    {
      "latitude": 51.53801,
      "longitude": 19.543638,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664631793,
      "ems": null
    },
    {
      "latitude": 51.535538,
      "longitude": 19.543489,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664631799,
      "ems": null
    },
    {
      "latitude": 51.533386,
      "longitude": 19.543415,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664631804,
      "ems": null
    },
    {
      "latitude": 51.530952,
      "longitude": 19.543152,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1664631810,
      "ems": null
    },
    {
      "latitude": 51.529369,
      "longitude": 19.542847,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664631814,
      "ems": null
    },
    {
      "latitude": 51.528076,
      "longitude": 19.542599,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664631817,
      "ems": null
    },
    {
      "latitude": 51.525558,
      "longitude": 19.542154,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1664631823,
      "ems": null
    },
    {
      "latitude": 51.524231,
      "longitude": 19.541857,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1664631826,
      "ems": null
    },
    {
      "latitude": 51.523041,
      "longitude": 19.541634,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1664631829,
      "ems": null
    },
    {
      "latitude": 51.521759,
      "longitude": 19.541338,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1664631832,
      "ems": null
    },
    {
      "latitude": 51.520615,
      "longitude": 19.54104,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1664631835,
      "ems": null
    },
    {
      "latitude": 51.519268,
      "longitude": 19.540634,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1664631838,
      "ems": null
    },
    {
      "latitude": 51.518372,
      "longitude": 19.540373,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664631840,
      "ems": null
    },
    {
      "latitude": 51.51709,
      "longitude": 19.539852,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1664631844,
      "ems": null
    },
    {
      "latitude": 51.515682,
      "longitude": 19.539185,
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1664631847,
      "ems": null
    },
    {
      "latitude": 51.514435,
      "longitude": 19.538666,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1664631850,
      "ems": null
    },
    {
      "latitude": 51.513218,
      "longitude": 19.538116,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1664631853,
      "ems": null
    },
    {
      "latitude": 51.512054,
      "longitude": 19.537552,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1664631856,
      "ems": null
    },
    {
      "latitude": 51.510891,
      "longitude": 19.537125,
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1664631859,
      "ems": null
    },
    {
      "latitude": 51.508347,
      "longitude": 19.536215,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664631865,
      "ems": null
    },
    {
      "latitude": 51.505829,
      "longitude": 19.535324,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1664631871,
      "ems": null
    },
    {
      "latitude": 51.503448,
      "longitude": 19.534359,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1664631877,
      "ems": null
    },
    {
      "latitude": 51.501114,
      "longitude": 19.533386,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664631883,
      "ems": null
    },
    {
      "latitude": 51.499878,
      "longitude": 19.533098,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1664631886,
      "ems": null
    },
    {
      "latitude": 51.498688,
      "longitude": 19.532875,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1664631889,
      "ems": null
    },
    {
      "latitude": 51.497498,
      "longitude": 19.532801,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664631892,
      "ems": null
    },
    {
      "latitude": 51.496262,
      "longitude": 19.532875,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664631895,
      "ems": null
    },
    {
      "latitude": 51.49511,
      "longitude": 19.533005,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664631898,
      "ems": null
    },
    {
      "latitude": 51.493881,
      "longitude": 19.533173,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664631901,
      "ems": null
    },
    {
      "latitude": 51.492546,
      "longitude": 19.533463,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664631905,
      "ems": null
    },
    {
      "latitude": 51.491524,
      "longitude": 19.533615,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664631907,
      "ems": null
    },
    {
      "latitude": 51.490265,
      "longitude": 19.533915,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664631910,
      "ems": null
    },
    {
      "latitude": 51.489212,
      "longitude": 19.534063,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664631913,
      "ems": null
    },
    {
      "latitude": 51.487885,
      "longitude": 19.534359,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664631916,
      "ems": null
    },
    {
      "latitude": 51.486969,
      "longitude": 19.534508,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664631919,
      "ems": null
    },
    {
      "latitude": 51.48547,
      "longitude": 19.534912,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664631923,
      "ems": null
    },
    {
      "latitude": 51.484268,
      "longitude": 19.535175,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664631926,
      "ems": null
    },
    {
      "latitude": 51.481934,
      "longitude": 19.535622,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664631932,
      "ems": null
    },
    {
      "latitude": 51.479561,
      "longitude": 19.536057,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664631938,
      "ems": null
    },
    {
      "latitude": 51.477184,
      "longitude": 19.536591,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664631944,
      "ems": null
    },
    {
      "latitude": 51.474792,
      "longitude": 19.537254,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664631950,
      "ems": null
    },
    {
      "latitude": 51.472733,
      "longitude": 19.537775,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664631955,
      "ems": null
    },
    {
      "latitude": 51.470078,
      "longitude": 19.538145,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664631962,
      "ems": null
    },
    {
      "latitude": 51.467514,
      "longitude": 19.538591,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664631968,
      "ems": null
    },
    {
      "latitude": 51.465134,
      "longitude": 19.539036,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664631974,
      "ems": null
    },
    {
      "latitude": 51.462894,
      "longitude": 19.539566,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664631980,
      "ems": null
    },
    {
      "latitude": 51.460373,
      "longitude": 19.540075,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664631986,
      "ems": null
    },
    {
      "latitude": 51.458099,
      "longitude": 19.540558,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664631992,
      "ems": null
    },
    {
      "latitude": 51.455521,
      "longitude": 19.541189,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664631998,
      "ems": null
    },
    {
      "latitude": 51.453304,
      "longitude": 19.541702,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632004,
      "ems": null
    },
    {
      "latitude": 51.450806,
      "longitude": 19.542303,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664632010,
      "ems": null
    },
    {
      "latitude": 51.448418,
      "longitude": 19.542999,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664632016,
      "ems": null
    },
    {
      "latitude": 51.446041,
      "longitude": 19.543686,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664632022,
      "ems": null
    },
    {
      "latitude": 51.443668,
      "longitude": 19.54422,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632028,
      "ems": null
    },
    {
      "latitude": 51.4412,
      "longitude": 19.544678,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664632034,
      "ems": null
    },
    {
      "latitude": 51.438904,
      "longitude": 19.545124,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664632040,
      "ems": null
    },
    {
      "latitude": 51.436523,
      "longitude": 19.545568,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664632046,
      "ems": null
    },
    {
      "latitude": 51.432953,
      "longitude": 19.546534,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664632055,
      "ems": null
    },
    {
      "latitude": 51.430588,
      "longitude": 19.547195,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664632061,
      "ems": null
    },
    {
      "latitude": 51.428055,
      "longitude": 19.547871,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664632067,
      "ems": null
    },
    {
      "latitude": 51.425629,
      "longitude": 19.548315,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664632074,
      "ems": null
    },
    {
      "latitude": 51.423233,
      "longitude": 19.548645,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664632079,
      "ems": null
    },
    {
      "latitude": 51.422058,
      "longitude": 19.548761,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664632082,
      "ems": null
    },
    {
      "latitude": 51.420811,
      "longitude": 19.54895,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664632085,
      "ems": null
    },
    {
      "latitude": 51.41853,
      "longitude": 19.549484,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664632091,
      "ems": null
    },
    {
      "latitude": 51.416107,
      "longitude": 19.550171,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664632097,
      "ems": null
    },
    {
      "latitude": 51.413773,
      "longitude": 19.550617,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664632103,
      "ems": null
    },
    {
      "latitude": 51.411209,
      "longitude": 19.551062,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664632110,
      "ems": null
    },
    {
      "latitude": 51.408875,
      "longitude": 19.551508,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632115,
      "ems": null
    },
    {
      "latitude": 51.406448,
      "longitude": 19.552027,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632121,
      "ems": null
    },
    {
      "latitude": 51.403957,
      "longitude": 19.552612,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632127,
      "ems": null
    },
    {
      "latitude": 51.401596,
      "longitude": 19.553066,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632133,
      "ems": null
    },
    {
      "latitude": 51.399117,
      "longitude": 19.553528,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632139,
      "ems": null
    },
    {
      "latitude": 51.396603,
      "longitude": 19.554138,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664632146,
      "ems": null
    },
    {
      "latitude": 51.39418,
      "longitude": 19.554699,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664632152,
      "ems": null
    },
    {
      "latitude": 51.391754,
      "longitude": 19.555515,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664632158,
      "ems": null
    },
    {
      "latitude": 51.390457,
      "longitude": 19.555969,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664632161,
      "ems": null
    },
    {
      "latitude": 51.388039,
      "longitude": 19.556732,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664632167,
      "ems": null
    },
    {
      "latitude": 51.38562,
      "longitude": 19.557297,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664632173,
      "ems": null
    },
    {
      "latitude": 51.383381,
      "longitude": 19.5578,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632179,
      "ems": null
    },
    {
      "latitude": 51.381042,
      "longitude": 19.558262,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632185,
      "ems": null
    },
    {
      "latitude": 51.379612,
      "longitude": 19.558563,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632188,
      "ems": null
    },
    {
      "latitude": 51.378494,
      "longitude": 19.558792,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632191,
      "ems": null
    },
    {
      "latitude": 51.376099,
      "longitude": 19.559301,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664632197,
      "ems": null
    },
    {
      "latitude": 51.373653,
      "longitude": 19.559784,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664632203,
      "ems": null
    },
    {
      "latitude": 51.371185,
      "longitude": 19.560242,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632209,
      "ems": null
    },
    {
      "latitude": 51.368717,
      "longitude": 19.560928,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664632215,
      "ems": null
    },
    {
      "latitude": 51.366577,
      "longitude": 19.561604,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664632221,
      "ems": null
    },
    {
      "latitude": 51.364014,
      "longitude": 19.562197,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632227,
      "ems": null
    },
    {
      "latitude": 51.361736,
      "longitude": 19.562683,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632233,
      "ems": null
    },
    {
      "latitude": 51.359253,
      "longitude": 19.563087,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664632239,
      "ems": null
    },
    {
      "latitude": 51.356735,
      "longitude": 19.563457,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664632245,
      "ems": null
    },
    {
      "latitude": 51.354336,
      "longitude": 19.564056,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664632251,
      "ems": null
    },
    {
      "latitude": 51.353123,
      "longitude": 19.564514,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664632254,
      "ems": null
    },
    {
      "latitude": 51.351959,
      "longitude": 19.564972,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664632257,
      "ems": null
    },
    {
      "latitude": 51.350784,
      "longitude": 19.565388,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664632260,
      "ems": null
    },
    {
      "latitude": 51.348358,
      "longitude": 19.565983,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632266,
      "ems": null
    },
    {
      "latitude": 51.345886,
      "longitude": 19.566576,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664632272,
      "ems": null
    },
    {
      "latitude": 51.343231,
      "longitude": 19.567244,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664632278,
      "ems": null
    },
    {
      "latitude": 51.342045,
      "longitude": 19.56749,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664632281,
      "ems": null
    },
    {
      "latitude": 51.340836,
      "longitude": 19.567871,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664632284,
      "ems": null
    },
    {
      "latitude": 51.339577,
      "longitude": 19.568176,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664632287,
      "ems": null
    },
    {
      "latitude": 51.337154,
      "longitude": 19.56871,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664632293,
      "ems": null
    },
    {
      "latitude": 51.334808,
      "longitude": 19.568951,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664632300,
      "ems": null
    },
    {
      "latitude": 51.333572,
      "longitude": 19.569099,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1664632302,
      "ems": null
    },
    {
      "latitude": 51.332314,
      "longitude": 19.569168,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664632305,
      "ems": null
    },
    {
      "latitude": 51.331055,
      "longitude": 19.569323,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664632309,
      "ems": null
    },
    {
      "latitude": 51.329819,
      "longitude": 19.569397,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664632312,
      "ems": null
    },
    {
      "latitude": 51.328674,
      "longitude": 19.569248,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664632314,
      "ems": null
    },
    {
      "latitude": 51.327438,
      "longitude": 19.569099,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664632317,
      "ems": null
    },
    {
      "latitude": 51.326168,
      "longitude": 19.568863,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1664632320,
      "ems": null
    },
    {
      "latitude": 51.324959,
      "longitude": 19.568558,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1664632324,
      "ems": null
    },
    {
      "latitude": 51.323776,
      "longitude": 19.568357,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664632326,
      "ems": null
    },
    {
      "latitude": 51.322403,
      "longitude": 19.568134,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664632330,
      "ems": null
    },
    {
      "latitude": 51.321396,
      "longitude": 19.567987,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664632332,
      "ems": null
    },
    {
      "latitude": 51.320072,
      "longitude": 19.567795,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664632336,
      "ems": null
    },
    {
      "latitude": 51.318832,
      "longitude": 19.567616,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1664632339,
      "ems": null
    },
    {
      "latitude": 51.316441,
      "longitude": 19.567795,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632345,
      "ems": null
    },
    {
      "latitude": 51.315308,
      "longitude": 19.56806,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632348,
      "ems": null
    },
    {
      "latitude": 51.314018,
      "longitude": 19.568253,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664632351,
      "ems": null
    },
    {
      "latitude": 51.312809,
      "longitude": 19.568405,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664632354,
      "ems": null
    },
    {
      "latitude": 51.311554,
      "longitude": 19.568655,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632357,
      "ems": null
    },
    {
      "latitude": 51.310272,
      "longitude": 19.568951,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664632360,
      "ems": null
    },
    {
      "latitude": 51.309177,
      "longitude": 19.569244,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664632363,
      "ems": null
    },
    {
      "latitude": 51.307846,
      "longitude": 19.569546,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632366,
      "ems": null
    },
    {
      "latitude": 51.306572,
      "longitude": 19.569778,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664632369,
      "ems": null
    },
    {
      "latitude": 51.304276,
      "longitude": 19.570139,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664632375,
      "ems": null
    },
    {
      "latitude": 51.301666,
      "longitude": 19.570807,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664632381,
      "ems": null
    },
    {
      "latitude": 51.300518,
      "longitude": 19.571152,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664632384,
      "ems": null
    },
    {
      "latitude": 51.298191,
      "longitude": 19.571991,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664632390,
      "ems": null
    },
    {
      "latitude": 51.295773,
      "longitude": 19.572678,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664632396,
      "ems": null
    },
    {
      "latitude": 51.293198,
      "longitude": 19.573034,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664632402,
      "ems": null
    },
    {
      "latitude": 51.291023,
      "longitude": 19.573364,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664632408,
      "ems": null
    },
    {
      "latitude": 51.289581,
      "longitude": 19.573593,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664632411,
      "ems": null
    },
    {
      "latitude": 51.288418,
      "longitude": 19.573746,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664632414,
      "ems": null
    },
    {
      "latitude": 51.286182,
      "longitude": 19.574203,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664632420,
      "ems": null
    },
    {
      "latitude": 51.284866,
      "longitude": 19.574444,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664632423,
      "ems": null
    },
    {
      "latitude": 51.28241,
      "longitude": 19.574738,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664632429,
      "ems": null
    },
    {
      "latitude": 51.28006,
      "longitude": 19.575262,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664632435,
      "ems": null
    },
    {
      "latitude": 51.278828,
      "longitude": 19.575729,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664632438,
      "ems": null
    },
    {
      "latitude": 51.277679,
      "longitude": 19.576448,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664632441,
      "ems": null
    },
    {
      "latitude": 51.276535,
      "longitude": 19.577265,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664632444,
      "ems": null
    },
    {
      "latitude": 51.275574,
      "longitude": 19.578009,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664632447,
      "ems": null
    },
    {
      "latitude": 51.274338,
      "longitude": 19.579046,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1664632450,
      "ems": null
    },
    {
      "latitude": 51.273285,
      "longitude": 19.579926,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664632453,
      "ems": null
    },
    {
      "latitude": 51.272171,
      "longitude": 19.580765,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664632456,
      "ems": null
    },
    {
      "latitude": 51.271145,
      "longitude": 19.581451,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664632459,
      "ems": null
    },
    {
      "latitude": 51.269981,
      "longitude": 19.582138,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664632462,
      "ems": null
    },
    {
      "latitude": 51.268772,
      "longitude": 19.582901,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664632465,
      "ems": null
    },
    {
      "latitude": 51.266678,
      "longitude": 19.584122,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664632471,
      "ems": null
    },
    {
      "latitude": 51.265232,
      "longitude": 19.584885,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664632474,
      "ems": null
    },
    {
      "latitude": 51.264023,
      "longitude": 19.585342,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664632477,
      "ems": null
    },
    {
      "latitude": 51.262939,
      "longitude": 19.585653,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664632480,
      "ems": null
    },
    {
      "latitude": 51.261566,
      "longitude": 19.585876,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632484,
      "ems": null
    },
    {
      "latitude": 51.26033,
      "longitude": 19.586174,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664632487,
      "ems": null
    },
    {
      "latitude": 51.259277,
      "longitude": 19.586323,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632489,
      "ems": null
    },
    {
      "latitude": 51.257923,
      "longitude": 19.586639,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664632492,
      "ems": null
    },
    {
      "latitude": 51.256668,
      "longitude": 19.586916,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632496,
      "ems": null
    },
    {
      "latitude": 51.255596,
      "longitude": 19.587173,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632498,
      "ems": null
    },
    {
      "latitude": 51.254524,
      "longitude": 19.587402,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664632501,
      "ems": null
    },
    {
      "latitude": 51.253052,
      "longitude": 19.587732,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632505,
      "ems": null
    },
    {
      "latitude": 51.251999,
      "longitude": 19.587955,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632507,
      "ems": null
    },
    {
      "latitude": 51.249451,
      "longitude": 19.58847,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664632514,
      "ems": null
    },
    {
      "latitude": 51.247101,
      "longitude": 19.588846,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664632519,
      "ems": null
    },
    {
      "latitude": 51.244766,
      "longitude": 19.589291,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632525,
      "ems": null
    },
    {
      "latitude": 51.242157,
      "longitude": 19.58996,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664632531,
      "ems": null
    },
    {
      "latitude": 51.24028,
      "longitude": 19.590454,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664632536,
      "ems": null
    },
    {
      "latitude": 51.237305,
      "longitude": 19.591295,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664632544,
      "ems": null
    },
    {
      "latitude": 51.234882,
      "longitude": 19.591904,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664632550,
      "ems": null
    },
    {
      "latitude": 51.232361,
      "longitude": 19.592409,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632556,
      "ems": null
    },
    {
      "latitude": 51.229946,
      "longitude": 19.592896,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664632562,
      "ems": null
    },
    {
      "latitude": 51.227524,
      "longitude": 19.59343,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664632568,
      "ems": null
    },
    {
      "latitude": 51.22506,
      "longitude": 19.594269,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664632574,
      "ems": null
    },
    {
      "latitude": 51.222778,
      "longitude": 19.595032,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664632580,
      "ems": null
    },
    {
      "latitude": 51.220219,
      "longitude": 19.595413,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664632586,
      "ems": null
    },
    {
      "latitude": 51.21896,
      "longitude": 19.595108,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664632589,
      "ems": null
    },
    {
      "latitude": 51.217888,
      "longitude": 19.594421,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1664632592,
      "ems": null
    },
    {
      "latitude": 51.216751,
      "longitude": 19.593374,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1664632595,
      "ems": null
    },
    {
      "latitude": 51.215973,
      "longitude": 19.592409,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1664632598,
      "ems": null
    },
    {
      "latitude": 51.21492,
      "longitude": 19.590851,
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1664632601,
      "ems": null
    },
    {
      "latitude": 51.214188,
      "longitude": 19.589663,
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1664632603,
      "ems": null
    },
    {
      "latitude": 51.213318,
      "longitude": 19.588177,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1664632606,
      "ems": null
    },
    {
      "latitude": 51.212311,
      "longitude": 19.586323,
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1664632610,
      "ems": null
    },
    {
      "latitude": 51.211395,
      "longitude": 19.584911,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1664632613,
      "ems": null
    },
    {
      "latitude": 51.21048,
      "longitude": 19.583576,
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1664632616,
      "ems": null
    },
    {
      "latitude": 51.209511,
      "longitude": 19.582138,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1664632619,
      "ems": null
    },
    {
      "latitude": 51.208694,
      "longitude": 19.580755,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1664632622,
      "ems": null
    },
    {
      "latitude": 51.207779,
      "longitude": 19.579121,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1664632625,
      "ems": null
    },
    {
      "latitude": 51.206997,
      "longitude": 19.577713,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1664632628,
      "ems": null
    },
    {
      "latitude": 51.205307,
      "longitude": 19.574741,
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1664632634,
      "ems": null
    },
    {
      "latitude": 51.203506,
      "longitude": 19.571915,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1664632640,
      "ems": null
    },
    {
      "latitude": 51.201736,
      "longitude": 19.568951,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1664632646,
      "ems": null
    },
    {
      "latitude": 51.199905,
      "longitude": 19.566132,
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1664632652,
      "ems": null
    },
    {
      "latitude": 51.198059,
      "longitude": 19.563217,
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1664632658,
      "ems": null
    },
    {
      "latitude": 51.197266,
      "longitude": 19.562073,
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1664632661,
      "ems": null
    },
    {
      "latitude": 51.195328,
      "longitude": 19.559153,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1664632667,
      "ems": null
    },
    {
      "latitude": 51.194427,
      "longitude": 19.557877,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1664632670,
      "ems": null
    },
    {
      "latitude": 51.192764,
      "longitude": 19.555441,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1664632676,
      "ems": null
    },
    {
      "latitude": 51.19075,
      "longitude": 19.552471,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1664632682,
      "ems": null
    },
    {
      "latitude": 51.189011,
      "longitude": 19.549652,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1664632688,
      "ems": null
    },
    {
      "latitude": 51.18721,
      "longitude": 19.547119,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1664632694,
      "ems": null
    },
    {
      "latitude": 51.185165,
      "longitude": 19.544306,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1664632701,
      "ems": null
    },
    {
      "latitude": 51.183472,
      "longitude": 19.542154,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1664632706,
      "ems": null
    },
    {
      "latitude": 51.181438,
      "longitude": 19.539108,
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1664632712,
      "ems": null
    },
    {
      "latitude": 51.179672,
      "longitude": 19.536289,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1664632719,
      "ems": null
    },
    {
      "latitude": 51.177807,
      "longitude": 19.533539,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1664632724,
      "ems": null
    },
    {
      "latitude": 51.175781,
      "longitude": 19.530945,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1664632731,
      "ems": null
    },
    {
      "latitude": 51.173897,
      "longitude": 19.52858,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1664632736,
      "ems": null
    },
    {
      "latitude": 51.172035,
      "longitude": 19.525833,
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1664632743,
      "ems": null
    },
    {
      "latitude": 51.170151,
      "longitude": 19.523077,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1664632749,
      "ems": null
    },
    {
      "latitude": 51.168312,
      "longitude": 19.520569,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1664632754,
      "ems": null
    },
    {
      "latitude": 51.166309,
      "longitude": 19.517975,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1664632761,
      "ems": null
    },
    {
      "latitude": 51.165287,
      "longitude": 19.51683,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1664632764,
      "ems": null
    },
    {
      "latitude": 51.164169,
      "longitude": 19.515915,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1664632767,
      "ems": null
    },
    {
      "latitude": 51.162956,
      "longitude": 19.514999,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1664632770,
      "ems": null
    },
    {
      "latitude": 51.161793,
      "longitude": 19.514236,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1664632773,
      "ems": null
    },
    {
      "latitude": 51.160629,
      "longitude": 19.513474,
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1664632776,
      "ems": null
    },
    {
      "latitude": 51.159485,
      "longitude": 19.512609,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1664632779,
      "ems": null
    },
    {
      "latitude": 51.158615,
      "longitude": 19.511868,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1664632781,
      "ems": null
    },
    {
      "latitude": 51.157333,
      "longitude": 19.510679,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1664632785,
      "ems": null
    },
    {
      "latitude": 51.156097,
      "longitude": 19.509418,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1664632788,
      "ems": null
    },
    {
      "latitude": 51.154999,
      "longitude": 19.508453,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1664632791,
      "ems": null
    },
    {
      "latitude": 51.153854,
      "longitude": 19.507563,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1664632794,
      "ems": null
    },
    {
      "latitude": 51.15184,
      "longitude": 19.506077,
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1664632799,
      "ems": null
    },
    {
      "latitude": 51.150528,
      "longitude": 19.505005,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1664632803,
      "ems": null
    },
    {
      "latitude": 51.14946,
      "longitude": 19.504072,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1664632806,
      "ems": null
    },
    {
      "latitude": 51.14764,
      "longitude": 19.502335,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1664632811,
      "ems": null
    },
    {
      "latitude": 51.145157,
      "longitude": 19.49999,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1664632818,
      "ems": null
    },
    {
      "latitude": 51.143005,
      "longitude": 19.49806,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1664632824,
      "ems": null
    },
    {
      "latitude": 51.140751,
      "longitude": 19.496155,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1664632830,
      "ems": null
    },
    {
      "latitude": 51.138844,
      "longitude": 19.494553,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1664632835,
      "ems": null
    },
    {
      "latitude": 51.136642,
      "longitude": 19.492641,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1664632842,
      "ems": null
    },
    {
      "latitude": 51.134373,
      "longitude": 19.490509,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1664632848,
      "ems": null
    },
    {
      "latitude": 51.132111,
      "longitude": 19.488409,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1664632854,
      "ems": null
    },
    {
      "latitude": 51.129913,
      "longitude": 19.486406,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "squawk": "7000",
      "timestamp": 1664632860,
      "ems": null
    },
    {
      "latitude": 51.127808,
      "longitude": 19.484253,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "squawk": "7000",
      "timestamp": 1664632866,
      "ems": null
    },
    {
      "latitude": 51.125702,
      "longitude": 19.482397,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1664632872,
      "ems": null
    },
    {
      "latitude": 51.124924,
      "longitude": 19.481953,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1664632874,
      "ems": null
    },
    {
      "latitude": 51.123295,
      "longitude": 19.481201,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1664632878,
      "ems": null
    },
    {
      "latitude": 51.122086,
      "longitude": 19.480764,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1664632881,
      "ems": null
    },
    {
      "latitude": 51.120735,
      "longitude": 19.480209,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664632884,
      "ems": null
    },
    {
      "latitude": 51.119526,
      "longitude": 19.479828,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664632887,
      "ems": null
    },
    {
      "latitude": 51.118221,
      "longitude": 19.47937,
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1664632890,
      "ems": null
    },
    {
      "latitude": 51.116959,
      "longitude": 19.478909,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664632893,
      "ems": null
    },
    {
      "latitude": 51.115707,
      "longitude": 19.478455,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664632896,
      "ems": null
    },
    {
      "latitude": 51.114544,
      "longitude": 19.478149,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664632899,
      "ems": null
    },
    {
      "latitude": 51.112976,
      "longitude": 19.477646,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1664632902,
      "ems": null
    },
    {
      "latitude": 51.111702,
      "longitude": 19.477234,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664632905,
      "ems": null
    },
    {
      "latitude": 51.109051,
      "longitude": 19.476242,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664632912,
      "ems": null
    },
    {
      "latitude": 51.10677,
      "longitude": 19.475555,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664632917,
      "ems": null
    },
    {
      "latitude": 51.10524,
      "longitude": 19.475122,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1664632921,
      "ems": null
    },
    {
      "latitude": 51.102676,
      "longitude": 19.474604,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1664632927,
      "ems": null
    },
    {
      "latitude": 51.100479,
      "longitude": 19.474157,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664632932,
      "ems": null
    },
    {
      "latitude": 51.098145,
      "longitude": 19.473713,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664632938,
      "ems": null
    },
    {
      "latitude": 51.096909,
      "longitude": 19.473564,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1664632940,
      "ems": null
    },
    {
      "latitude": 51.095581,
      "longitude": 19.473415,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664632943,
      "ems": null
    },
    {
      "latitude": 51.094254,
      "longitude": 19.473341,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1664632946,
      "ems": null
    },
    {
      "latitude": 51.092941,
      "longitude": 19.473267,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1664632949,
      "ems": null
    },
    {
      "latitude": 51.092285,
      "longitude": 19.473192,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664632952,
      "ems": null
    },
    {
      "latitude": 51.090683,
      "longitude": 19.473192,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664632955,
      "ems": null
    },
    {
      "latitude": 51.089539,
      "longitude": 19.473192,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1664632957,
      "ems": null
    },
    {
      "latitude": 51.088566,
      "longitude": 19.47319,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1664632960,
      "ems": null
    },
    {
      "latitude": 51.087479,
      "longitude": 19.473192,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664632962,
      "ems": null
    },
    {
      "latitude": 51.08284,
      "longitude": 19.472809,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664632973,
      "ems": null
    },
    {
      "latitude": 51.080326,
      "longitude": 19.472427,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664632979,
      "ems": null
    },
    {
      "latitude": 51.077629,
      "longitude": 19.472122,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664632985,
      "ems": null
    },
    {
      "latitude": 51.074368,
      "longitude": 19.471893,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664632993,
      "ems": null
    },
    {
      "latitude": 51.071869,
      "longitude": 19.471634,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664632999,
      "ems": null
    },
    {
      "latitude": 51.06958,
      "longitude": 19.471411,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664633004,
      "ems": null
    },
    {
      "latitude": 51.066788,
      "longitude": 19.470966,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664633011,
      "ems": null
    },
    {
      "latitude": 51.064686,
      "longitude": 19.470596,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664633017,
      "ems": null
    },
    {
      "latitude": 51.062218,
      "longitude": 19.470139,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664633022,
      "ems": null
    },
    {
      "latitude": 51.059235,
      "longitude": 19.469481,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1664633029,
      "ems": null
    },
    {
      "latitude": 51.058136,
      "longitude": 19.469183,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664633032,
      "ems": null
    },
    {
      "latitude": 51.056446,
      "longitude": 19.468689,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664633036,
      "ems": null
    },
    {
      "latitude": 51.053791,
      "longitude": 19.46785,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1664633043,
      "ems": null
    },
    {
      "latitude": 51.053009,
      "longitude": 19.467625,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664633045,
      "ems": null
    },
    {
      "latitude": 51.052071,
      "longitude": 19.467087,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664633047,
      "ems": null
    },
    {
      "latitude": 51.050812,
      "longitude": 19.466095,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1664633051,
      "ems": null
    },
    {
      "latitude": 51.049301,
      "longitude": 19.46369,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1664633056,
      "ems": null
    },
    {
      "latitude": 51.048813,
      "longitude": 19.462051,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664633060,
      "ems": null
    },
    {
      "latitude": 51.048019,
      "longitude": 19.457855,
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664633065,
      "ems": null
    },
    {
      "latitude": 51.047184,
      "longitude": 19.454346,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1664633070,
      "ems": null
    },
    {
      "latitude": 51.046371,
      "longitude": 19.452036,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1664633074,
      "ems": null
    },
    {
      "latitude": 51.046017,
      "longitude": 19.451218,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1664633076,
      "ems": null
    },
    {
      "latitude": 51.044903,
      "longitude": 19.448929,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1664633080,
      "ems": null
    },
    {
      "latitude": 51.043922,
      "longitude": 19.447174,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1664633084,
      "ems": null
    },
    {
      "latitude": 51.04303,
      "longitude": 19.445503,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "squawk": "7000",
      "timestamp": 1664633088,
      "ems": null
    },
    {
      "latitude": 51.041828,
      "longitude": 19.44313,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1664633092,
      "ems": null
    },
    {
      "latitude": 51.041039,
      "longitude": 19.441605,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1664633096,
      "ems": null
    },
    {
      "latitude": 51.039642,
      "longitude": 19.438824,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1664633100,
      "ems": null
    },
    {
      "latitude": 51.038383,
      "longitude": 19.436569,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "squawk": "7000",
      "timestamp": 1664633104,
      "ems": null
    },
    {
      "latitude": 51.037498,
      "longitude": 19.435043,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1664633108,
      "ems": null
    },
    {
      "latitude": 51.03598,
      "longitude": 19.432217,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1664633113,
      "ems": null
    },
    {
      "latitude": 51.033543,
      "longitude": 19.427414,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1664633123,
      "ems": null
    },
    {
      "latitude": 51.03067,
      "longitude": 19.422195,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1664633133,
      "ems": null
    },
    {
      "latitude": 51.029297,
      "longitude": 19.419744,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1664633138,
      "ems": null
    },
    {
      "latitude": 51.026733,
      "longitude": 19.41507,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "squawk": "7000",
      "timestamp": 1664633148,
      "ems": null
    },
    {
      "latitude": 51.023766,
      "longitude": 19.40979,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1664633159,
      "ems": null
    },
    {
      "latitude": 51.020695,
      "longitude": 19.404221,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "squawk": "7000",
      "timestamp": 1664633170,
      "ems": null
    },
    {
      "latitude": 51.018036,
      "longitude": 19.399035,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1664633180,
      "ems": null
    },
    {
      "latitude": 51.015198,
      "longitude": 19.39369,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1664633190,
      "ems": null
    },
    {
      "latitude": 51.013962,
      "longitude": 19.391241,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "squawk": "7000",
      "timestamp": 1664633195,
      "ems": null
    },
    {
      "latitude": 51.011059,
      "longitude": 19.385757,
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1664633206,
      "ems": null
    },
    {
      "latitude": 51.008404,
      "longitude": 19.38118,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1664633215,
      "ems": null
    },
    {
      "latitude": 51.00563,
      "longitude": 19.375578,
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1664633226,
      "ems": null
    },
    {
      "latitude": 51.004486,
      "longitude": 19.37298,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1664633231,
      "ems": null
    },
    {
      "latitude": 51.003654,
      "longitude": 19.371109,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1664633234,
      "ems": null
    },
    {
      "latitude": 51.003159,
      "longitude": 19.369936,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1664633236,
      "ems": null
    },
    {
      "latitude": 51.000732,
      "longitude": 19.36511,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1664633246,
      "ems": null
    },
    {
      "latitude": 50.999142,
      "longitude": 19.361877,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1664633252,
      "ems": null
    },
    {
      "latitude": 50.996441,
      "longitude": 19.356232,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1664633263,
      "ems": null
    },
    {
      "latitude": 50.993774,
      "longitude": 19.350859,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1664633273,
      "ems": null
    },
    {
      "latitude": 50.991505,
      "longitude": 19.346542,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1664633282,
      "ems": null
    },
    {
      "latitude": 50.989922,
      "longitude": 19.343185,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1664633288,
      "ems": null
    },
    {
      "latitude": 50.988327,
      "longitude": 19.339649,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1664633295,
      "ems": null
    },
    {
      "latitude": 50.987083,
      "longitude": 19.336929,
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1664633299,
      "ems": null
    },
    {
      "latitude": 50.985489,
      "longitude": 19.333563,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1664633307,
      "ems": null
    },
    {
      "latitude": 50.98336,
      "longitude": 19.330673,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1664633312,
      "ems": null
    },
    {
      "latitude": 50.98201,
      "longitude": 19.329554,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1664633316,
      "ems": null
    },
    {
      "latitude": 50.980911,
      "longitude": 19.328812,
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1664633319,
      "ems": null
    },
    {
      "latitude": 50.979496,
      "longitude": 19.328079,
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1664633322,
      "ems": null
    },
    {
      "latitude": 50.978439,
      "longitude": 19.327549,
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1664633325,
      "ems": null
    },
    {
      "latitude": 50.977261,
      "longitude": 19.327087,
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1664633328,
      "ems": null
    },
    {
      "latitude": 50.975819,
      "longitude": 19.32663,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664633331,
      "ems": null
    },
    {
      "latitude": 50.974655,
      "longitude": 19.326324,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664633334,
      "ems": null
    },
    {
      "latitude": 50.973492,
      "longitude": 19.325943,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664633337,
      "ems": null
    },
    {
      "latitude": 50.972187,
      "longitude": 19.325409,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1664633340,
      "ems": null
    },
    {
      "latitude": 50.970978,
      "longitude": 19.324875,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1664633343,
      "ems": null
    },
    {
      "latitude": 50.969765,
      "longitude": 19.324265,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1664633346,
      "ems": null
    },
    {
      "latitude": 50.968697,
      "longitude": 19.323883,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1664633349,
      "ems": null
    },
    {
      "latitude": 50.967533,
      "longitude": 19.323425,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664633352,
      "ems": null
    },
    {
      "latitude": 50.964706,
      "longitude": 19.322502,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664633358,
      "ems": null
    },
    {
      "latitude": 50.962318,
      "longitude": 19.321671,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664633364,
      "ems": null
    },
    {
      "latitude": 50.959805,
      "longitude": 19.320831,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664633370,
      "ems": null
    },
    {
      "latitude": 50.958546,
      "longitude": 19.320526,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1664633373,
      "ems": null
    },
    {
      "latitude": 50.957565,
      "longitude": 19.320349,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664633375,
      "ems": null
    },
    {
      "latitude": 50.956146,
      "longitude": 19.320126,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664633379,
      "ems": null
    },
    {
      "latitude": 50.953426,
      "longitude": 19.319229,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1664633385,
      "ems": null
    },
    {
      "latitude": 50.951202,
      "longitude": 19.318493,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664633391,
      "ems": null
    },
    {
      "latitude": 50.950214,
      "longitude": 19.318314,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664633393,
      "ems": null
    },
    {
      "latitude": 50.949188,
      "longitude": 19.318237,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664633397,
      "ems": null
    },
    {
      "latitude": 50.947189,
      "longitude": 19.318314,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664633401,
      "ems": null
    },
    {
      "latitude": 50.946121,
      "longitude": 19.318493,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664633403,
      "ems": null
    },
    {
      "latitude": 50.944931,
      "longitude": 19.31879,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664633406,
      "ems": null
    },
    {
      "latitude": 50.943695,
      "longitude": 19.31916,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664633409,
      "ems": null
    },
    {
      "latitude": 50.943054,
      "longitude": 19.319384,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664633411,
      "ems": null
    },
    {
      "latitude": 50.94104,
      "longitude": 19.320126,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664633416,
      "ems": null
    },
    {
      "latitude": 50.939575,
      "longitude": 19.320721,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664633421,
      "ems": null
    },
    {
      "latitude": 50.938019,
      "longitude": 19.321442,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664633423,
      "ems": null
    },
    {
      "latitude": 50.937366,
      "longitude": 19.321747,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664633424,
      "ems": null
    },
    {
      "latitude": 50.935822,
      "longitude": 19.322502,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664633428,
      "ems": null
    },
    {
      "latitude": 50.934586,
      "longitude": 19.32317,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664633431,
      "ems": null
    },
    {
      "latitude": 50.93335,
      "longitude": 19.323912,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664633434,
      "ems": null
    },
    {
      "latitude": 50.932068,
      "longitude": 19.324654,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664633437,
      "ems": null
    },
    {
      "latitude": 50.930923,
      "longitude": 19.325397,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664633440,
      "ems": null
    },
    {
      "latitude": 50.930283,
      "longitude": 19.325768,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664633442,
      "ems": null
    },
    {
      "latitude": 50.928707,
      "longitude": 19.326782,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664633446,
      "ems": null
    },
    {
      "latitude": 50.92717,
      "longitude": 19.327698,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664633449,
      "ems": null
    },
    {
      "latitude": 50.926334,
      "longitude": 19.328232,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664633452,
      "ems": null
    },
    {
      "latitude": 50.923462,
      "longitude": 19.330072,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664633459,
      "ems": null
    },
    {
      "latitude": 50.921082,
      "longitude": 19.331484,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664633464,
      "ems": null
    },
    {
      "latitude": 50.918606,
      "longitude": 19.332962,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664633470,
      "ems": null
    },
    {
      "latitude": 50.916321,
      "longitude": 19.334156,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664633476,
      "ems": null
    },
    {
      "latitude": 50.913666,
      "longitude": 19.335491,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664633482,
      "ems": null
    },
    {
      "latitude": 50.911251,
      "longitude": 19.336777,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664633488,
      "ems": null
    },
    {
      "latitude": 50.908859,
      "longitude": 19.338312,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664633494,
      "ems": null
    },
    {
      "latitude": 50.905758,
      "longitude": 19.340363,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664633503,
      "ems": null
    },
    {
      "latitude": 50.903847,
      "longitude": 19.34166,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664633507,
      "ems": null
    },
    {
      "latitude": 50.900528,
      "longitude": 19.343805,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664633515,
      "ems": null
    },
    {
      "latitude": 50.897873,
      "longitude": 19.345366,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664633522,
      "ems": null
    },
    {
      "latitude": 50.895401,
      "longitude": 19.346924,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664633528,
      "ems": null
    },
    {
      "latitude": 50.893021,
      "longitude": 19.348408,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664633534,
      "ems": null
    },
    {
      "latitude": 50.890686,
      "longitude": 19.349819,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664633539,
      "ems": null
    },
    {
      "latitude": 50.88802,
      "longitude": 19.351349,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664633546,
      "ems": null
    },
    {
      "latitude": 50.885319,
      "longitude": 19.352722,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664633552,
      "ems": null
    },
    {
      "latitude": 50.882854,
      "longitude": 19.354172,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664633558,
      "ems": null
    },
    {
      "latitude": 50.880665,
      "longitude": 19.355392,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664633563,
      "ems": null
    },
    {
      "latitude": 50.878006,
      "longitude": 19.356796,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664633570,
      "ems": null
    },
    {
      "latitude": 50.876724,
      "longitude": 19.357317,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664633573,
      "ems": null
    },
    {
      "latitude": 50.87508,
      "longitude": 19.35791,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664633576,
      "ems": null
    },
    {
      "latitude": 50.873917,
      "longitude": 19.358139,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664633579,
      "ems": null
    },
    {
      "latitude": 50.872467,
      "longitude": 19.358356,
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1664633582,
      "ems": null
    },
    {
      "latitude": 50.871323,
      "longitude": 19.358356,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1664633585,
      "ems": null
    },
    {
      "latitude": 50.869724,
      "longitude": 19.358139,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664633588,
      "ems": null
    },
    {
      "latitude": 50.868439,
      "longitude": 19.357761,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664633591,
      "ems": null
    },
    {
      "latitude": 50.867165,
      "longitude": 19.3573,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1664633594,
      "ems": null
    },
    {
      "latitude": 50.86591,
      "longitude": 19.356613,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1664633597,
      "ems": null
    },
    {
      "latitude": 50.864685,
      "longitude": 19.355831,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1664633600,
      "ems": null
    },
    {
      "latitude": 50.863541,
      "longitude": 19.35494,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1664633603,
      "ems": null
    },
    {
      "latitude": 50.862648,
      "longitude": 19.354172,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1664633606,
      "ems": null
    },
    {
      "latitude": 50.861439,
      "longitude": 19.352951,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1664633609,
      "ems": null
    },
    {
      "latitude": 50.860519,
      "longitude": 19.351898,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1664633612,
      "ems": null
    },
    {
      "latitude": 50.859577,
      "longitude": 19.350662,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1664633615,
      "ems": null
    },
    {
      "latitude": 50.858833,
      "longitude": 19.349823,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1664633618,
      "ems": null
    },
    {
      "latitude": 50.857574,
      "longitude": 19.348373,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1664633621,
      "ems": null
    },
    {
      "latitude": 50.856674,
      "longitude": 19.34737,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1664633624,
      "ems": null
    },
    {
      "latitude": 50.855621,
      "longitude": 19.346237,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1664633627,
      "ems": null
    },
    {
      "latitude": 50.854549,
      "longitude": 19.345169,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1664633630,
      "ems": null
    },
    {
      "latitude": 50.853523,
      "longitude": 19.344025,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "timestamp": 1664633633,
      "ems": null
    },
    {
      "latitude": 50.851524,
      "longitude": 19.341736,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1664633639,
      "ems": null
    },
    {
      "latitude": 50.849533,
      "longitude": 19.3395,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1664633646,
      "ems": null
    },
    {
      "latitude": 50.847336,
      "longitude": 19.337126,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1664633652,
      "ems": null
    },
    {
      "latitude": 50.845093,
      "longitude": 19.334898,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1664633658,
      "ems": null
    },
    {
      "latitude": 50.842957,
      "longitude": 19.332657,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1664633663,
      "ems": null
    },
    {
      "latitude": 50.84079,
      "longitude": 19.330147,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1664633670,
      "ems": null
    },
    {
      "latitude": 50.838722,
      "longitude": 19.327774,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1664633675,
      "ems": null
    },
    {
      "latitude": 50.836578,
      "longitude": 19.325562,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1664633682,
      "ems": null
    },
    {
      "latitude": 50.834473,
      "longitude": 19.323393,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1664633687,
      "ems": null
    },
    {
      "latitude": 50.832367,
      "longitude": 19.320942,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1664633694,
      "ems": null
    },
    {
      "latitude": 50.830261,
      "longitude": 19.318493,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1664633700,
      "ems": null
    },
    {
      "latitude": 50.828247,
      "longitude": 19.316193,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1664633706,
      "ems": null
    },
    {
      "latitude": 50.826057,
      "longitude": 19.313889,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1664633712,
      "ems": null
    },
    {
      "latitude": 50.823963,
      "longitude": 19.311523,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1664633718,
      "ems": null
    },
    {
      "latitude": 50.821869,
      "longitude": 19.308929,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1664633724,
      "ems": null
    },
    {
      "latitude": 50.819962,
      "longitude": 19.306335,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1664633730,
      "ems": null
    },
    {
      "latitude": 50.818005,
      "longitude": 19.303818,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664633736,
      "ems": null
    },
    {
      "latitude": 50.815842,
      "longitude": 19.301123,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1664633742,
      "ems": null
    },
    {
      "latitude": 50.813782,
      "longitude": 19.298748,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1664633748,
      "ems": null
    },
    {
      "latitude": 50.811722,
      "longitude": 19.296417,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1664633754,
      "ems": null
    },
    {
      "latitude": 50.810715,
      "longitude": 19.295332,
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1664633757,
      "ems": null
    },
    {
      "latitude": 50.80851,
      "longitude": 19.292831,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1664633763,
      "ems": null
    },
    {
      "latitude": 50.806458,
      "longitude": 19.290434,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1664633769,
      "ems": null
    },
    {
      "latitude": 50.80455,
      "longitude": 19.288177,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1664633775,
      "ems": null
    },
    {
      "latitude": 50.802292,
      "longitude": 19.285683,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1664633781,
      "ems": null
    },
    {
      "latitude": 50.800129,
      "longitude": 19.283524,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1664633787,
      "ems": null
    },
    {
      "latitude": 50.798126,
      "longitude": 19.281387,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1664633793,
      "ems": null
    },
    {
      "latitude": 50.796032,
      "longitude": 19.279251,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1664633799,
      "ems": null
    },
    {
      "latitude": 50.794144,
      "longitude": 19.277145,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1664633805,
      "ems": null
    },
    {
      "latitude": 50.792953,
      "longitude": 19.275661,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664633808,
      "ems": null
    },
    {
      "latitude": 50.791946,
      "longitude": 19.274399,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664633811,
      "ems": null
    },
    {
      "latitude": 50.790985,
      "longitude": 19.273138,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664633814,
      "ems": null
    },
    {
      "latitude": 50.789097,
      "longitude": 19.270859,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1664633820,
      "ems": null
    },
    {
      "latitude": 50.786957,
      "longitude": 19.268461,
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1664633827,
      "ems": null
    },
    {
      "latitude": 50.784859,
      "longitude": 19.266129,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1664633832,
      "ems": null
    },
    {
      "latitude": 50.782764,
      "longitude": 19.263916,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1664633838,
      "ems": null
    },
    {
      "latitude": 50.781742,
      "longitude": 19.262848,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1664633842,
      "ems": null
    },
    {
      "latitude": 50.780766,
      "longitude": 19.261856,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1664633844,
      "ems": null
    },
    {
      "latitude": 50.778717,
      "longitude": 19.259701,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1664633850,
      "ems": null
    },
    {
      "latitude": 50.776703,
      "longitude": 19.257475,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1664633857,
      "ems": null
    },
    {
      "latitude": 50.77446,
      "longitude": 19.255098,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1664633863,
      "ems": null
    },
    {
      "latitude": 50.772385,
      "longitude": 19.252853,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1664633869,
      "ems": null
    },
    {
      "latitude": 50.770432,
      "longitude": 19.250645,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1664633874,
      "ems": null
    },
    {
      "latitude": 50.76828,
      "longitude": 19.248493,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1664633881,
      "ems": null
    },
    {
      "latitude": 50.766098,
      "longitude": 19.246445,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1664633887,
      "ems": null
    },
    {
      "latitude": 50.764984,
      "longitude": 19.245529,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1664633889,
      "ems": null
    },
    {
      "latitude": 50.763821,
      "longitude": 19.24469,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1664633893,
      "ems": null
    },
    {
      "latitude": 50.762741,
      "longitude": 19.244038,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1664633896,
      "ems": null
    },
    {
      "latitude": 50.761597,
      "longitude": 19.24337,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1664633899,
      "ems": null
    },
    {
      "latitude": 50.760468,
      "longitude": 19.242706,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1664633902,
      "ems": null
    },
    {
      "latitude": 50.759308,
      "longitude": 19.242035,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1664633905,
      "ems": null
    },
    {
      "latitude": 50.758141,
      "longitude": 19.241409,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1664633907,
      "ems": null
    },
    {
      "latitude": 50.756927,
      "longitude": 19.240847,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1664633911,
      "ems": null
    },
    {
      "latitude": 50.755764,
      "longitude": 19.240265,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1664633913,
      "ems": null
    },
    {
      "latitude": 50.754601,
      "longitude": 19.239731,
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1664633917,
      "ems": null
    },
    {
      "latitude": 50.753311,
      "longitude": 19.238991,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1664633920,
      "ems": null
    },
    {
      "latitude": 50.750923,
      "longitude": 19.237671,
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1664633926,
      "ems": null
    },
    {
      "latitude": 50.748688,
      "longitude": 19.236542,
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1664633932,
      "ems": null
    },
    {
      "latitude": 50.746269,
      "longitude": 19.235382,
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1664633938,
      "ems": null
    },
    {
      "latitude": 50.743698,
      "longitude": 19.234314,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1664633944,
      "ems": null
    },
    {
      "latitude": 50.742554,
      "longitude": 19.233868,
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1664633947,
      "ems": null
    },
    {
      "latitude": 50.740585,
      "longitude": 19.233126,
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1664633952,
      "ems": null
    },
    {
      "latitude": 50.738983,
      "longitude": 19.232458,
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1664633956,
      "ems": null
    },
    {
      "latitude": 50.736465,
      "longitude": 19.231493,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1664633962,
      "ems": null
    },
    {
      "latitude": 50.733307,
      "longitude": 19.230158,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1664633970,
      "ems": null
    },
    {
      "latitude": 50.730392,
      "longitude": 19.228897,
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1664633977,
      "ems": null
    },
    {
      "latitude": 50.727951,
      "longitude": 19.22793,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1664633983,
      "ems": null
    },
    {
      "latitude": 50.725552,
      "longitude": 19.227219,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664633989,
      "ems": null
    },
    {
      "latitude": 50.72438,
      "longitude": 19.226816,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664633992,
      "ems": null
    },
    {
      "latitude": 50.721817,
      "longitude": 19.225851,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1664633998,
      "ems": null
    },
    {
      "latitude": 50.720619,
      "longitude": 19.225235,
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1664634001,
      "ems": null
    },
    {
      "latitude": 50.719437,
      "longitude": 19.224367,
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1664634004,
      "ems": null
    },
    {
      "latitude": 50.718338,
      "longitude": 19.223328,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1664634007,
      "ems": null
    },
    {
      "latitude": 50.717312,
      "longitude": 19.222183,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1664634010,
      "ems": null
    },
    {
      "latitude": 50.71629,
      "longitude": 19.221115,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1664634013,
      "ems": null
    },
    {
      "latitude": 50.715172,
      "longitude": 19.220123,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1664634016,
      "ems": null
    },
    {
      "latitude": 50.714035,
      "longitude": 19.219318,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1664634019,
      "ems": null
    },
    {
      "latitude": 50.712799,
      "longitude": 19.218576,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1664634022,
      "ems": null
    },
    {
      "latitude": 50.7117,
      "longitude": 19.217909,
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1664634025,
      "ems": null
    },
    {
      "latitude": 50.709492,
      "longitude": 19.216537,
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1664634031,
      "ems": null
    },
    {
      "latitude": 50.708096,
      "longitude": 19.215927,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1664634034,
      "ems": null
    },
    {
      "latitude": 50.706886,
      "longitude": 19.215469,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664634037,
      "ems": null
    },
    {
      "latitude": 50.705627,
      "longitude": 19.215088,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1664634040,
      "ems": null
    },
    {
      "latitude": 50.704418,
      "longitude": 19.214706,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1664634044,
      "ems": null
    },
    {
      "latitude": 50.703232,
      "longitude": 19.21442,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1664634046,
      "ems": null
    },
    {
      "latitude": 50.701859,
      "longitude": 19.214123,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1664634049,
      "ems": null
    },
    {
      "latitude": 50.700577,
      "longitude": 19.213825,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1664634052,
      "ems": null
    },
    {
      "latitude": 50.699345,
      "longitude": 19.213486,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1664634056,
      "ems": null
    },
    {
      "latitude": 50.696823,
      "longitude": 19.212788,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1664634061,
      "ems": null
    },
    {
      "latitude": 50.695541,
      "longitude": 19.21249,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1664634064,
      "ems": null
    },
    {
      "latitude": 50.692978,
      "longitude": 19.211895,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1664634071,
      "ems": null
    },
    {
      "latitude": 50.690231,
      "longitude": 19.211376,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664634077,
      "ems": null
    },
    {
      "latitude": 50.687752,
      "longitude": 19.210892,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1664634083,
      "ems": null
    },
    {
      "latitude": 50.685379,
      "longitude": 19.210358,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1664634088,
      "ems": null
    },
    {
      "latitude": 50.682819,
      "longitude": 19.209595,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664634094,
      "ems": null
    },
    {
      "latitude": 50.680252,
      "longitude": 19.208927,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1664634101,
      "ems": null
    },
    {
      "latitude": 50.678055,
      "longitude": 19.208332,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664634106,
      "ems": null
    },
    {
      "latitude": 50.675602,
      "longitude": 19.20784,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1664634113,
      "ems": null
    },
    {
      "latitude": 50.674393,
      "longitude": 19.207739,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664634116,
      "ems": null
    },
    {
      "latitude": 50.673294,
      "longitude": 19.207813,
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1664634119,
      "ems": null
    },
    {
      "latitude": 50.672249,
      "longitude": 19.207916,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664634121,
      "ems": null
    },
    {
      "latitude": 50.670902,
      "longitude": 19.208185,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664634124,
      "ems": null
    },
    {
      "latitude": 50.669632,
      "longitude": 19.208727,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664634128,
      "ems": null
    },
    {
      "latitude": 50.668488,
      "longitude": 19.209377,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664634131,
      "ems": null
    },
    {
      "latitude": 50.667316,
      "longitude": 19.210188,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664634134,
      "ems": null
    },
    {
      "latitude": 50.666428,
      "longitude": 19.21104,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1664634137,
      "ems": null
    },
    {
      "latitude": 50.665375,
      "longitude": 19.212051,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1664634139,
      "ems": null
    },
    {
      "latitude": 50.664276,
      "longitude": 19.213282,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664634143,
      "ems": null
    },
    {
      "latitude": 50.663269,
      "longitude": 19.214582,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1664634146,
      "ems": null
    },
    {
      "latitude": 50.66238,
      "longitude": 19.215979,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664634149,
      "ems": null
    },
    {
      "latitude": 50.661545,
      "longitude": 19.217463,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664634152,
      "ems": null
    },
    {
      "latitude": 50.660797,
      "longitude": 19.219208,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664634155,
      "ems": null
    },
    {
      "latitude": 50.660286,
      "longitude": 19.220879,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664634158,
      "ems": null
    },
    {
      "latitude": 50.659821,
      "longitude": 19.223104,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664634161,
      "ems": null
    },
    {
      "latitude": 50.659607,
      "longitude": 19.225134,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664634164,
      "ems": null
    },
    {
      "latitude": 50.659607,
      "longitude": 19.227303,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664634167,
      "ems": null
    },
    {
      "latitude": 50.659866,
      "longitude": 19.229712,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664634170,
      "ems": null
    },
    {
      "latitude": 50.660294,
      "longitude": 19.231712,
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
      "timestamp": 1664634173,
      "ems": null
    },
    {
      "latitude": 50.661079,
      "longitude": 19.234091,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1664634176,
      "ems": null
    },
    {
      "latitude": 50.662056,
      "longitude": 19.236021,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1664634179,
      "ems": null
    },
    {
      "latitude": 50.663132,
      "longitude": 19.237566,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1664634182,
      "ems": null
    },
    {
      "latitude": 50.664337,
      "longitude": 19.238693,
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1664634185,
      "ems": null
    },
    {
      "latitude": 50.665649,
      "longitude": 19.23959,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1664634188,
      "ems": null
    },
    {
      "latitude": 50.667068,
      "longitude": 19.240168,
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1664634191,
      "ems": null
    },
    {
      "latitude": 50.668571,
      "longitude": 19.240475,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1664634194,
      "ems": null
    },
    {
      "latitude": 50.670044,
      "longitude": 19.24053,
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1664634197,
      "ems": null
    },
    {
      "latitude": 50.671272,
      "longitude": 19.2404,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1664634199,
      "ems": null
    },
    {
      "latitude": 50.672997,
      "longitude": 19.23996,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1664634203,
      "ems": null
    },
    {
      "latitude": 50.674252,
      "longitude": 19.239349,
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1664634206,
      "ems": null
    },
    {
      "latitude": 50.675648,
      "longitude": 19.238434,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1664634209,
      "ems": null
    },
    {
      "latitude": 50.676765,
      "longitude": 19.237289,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1664634212,
      "ems": null
    },
    {
      "latitude": 50.677917,
      "longitude": 19.235651,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664634215,
      "ems": null
    },
    {
      "latitude": 50.678787,
      "longitude": 19.233721,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664634218,
      "ems": null
    },
    {
      "latitude": 50.679337,
      "longitude": 19.232014,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664634221,
      "ems": null
    },
    {
      "latitude": 50.679794,
      "longitude": 19.229935,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664634224,
      "ems": null
    },
    {
      "latitude": 50.680073,
      "longitude": 19.227753,
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1664634227,
      "ems": null
    },
    {
      "latitude": 50.680069,
      "longitude": 19.225628,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1664634230,
      "ems": null
    },
    {
      "latitude": 50.67984,
      "longitude": 19.223404,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1664634233,
      "ems": null
    },
    {
      "latitude": 50.679474,
      "longitude": 19.221844,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664634236,
      "ems": null
    },
    {
      "latitude": 50.67897,
      "longitude": 19.219765,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664634239,
      "ems": null
    },
    {
      "latitude": 50.67844,
      "longitude": 19.217987,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1664634242,
      "ems": null
    },
    {
      "latitude": 50.677837,
      "longitude": 19.216309,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1664634245,
      "ems": null
    },
    {
      "latitude": 50.677185,
      "longitude": 19.214642,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1664634248,
      "ems": null
    },
    {
      "latitude": 50.676579,
      "longitude": 19.213104,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1664634251,
      "ems": null
    },
    {
      "latitude": 50.67588,
      "longitude": 19.211578,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1664634254,
      "ems": null
    },
    {
      "latitude": 50.675171,
      "longitude": 19.210262,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1664634257,
      "ems": null
    },
    {
      "latitude": 50.674347,
      "longitude": 19.208927,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1664634260,
      "ems": null
    },
    {
      "latitude": 50.673416,
      "longitude": 19.207687,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664634263,
      "ems": null
    },
    {
      "latitude": 50.672436,
      "longitude": 19.206467,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1664634266,
      "ems": null
    },
    {
      "latitude": 50.671551,
      "longitude": 19.205322,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1664634269,
      "ems": null
    },
    {
      "latitude": 50.67067,
      "longitude": 19.204102,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1664634273,
      "ems": null
    },
    {
      "latitude": 50.669815,
      "longitude": 19.202946,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1664634275,
      "ems": null
    },
    {
      "latitude": 50.6689,
      "longitude": 19.201801,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664634279,
      "ems": null
    },
    {
      "latitude": 50.667938,
      "longitude": 19.20056,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664634282,
      "ems": null
    },
    {
      "latitude": 50.66716,
      "longitude": 19.199621,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1664634284,
      "ems": null
    },
    {
      "latitude": 50.666245,
      "longitude": 19.198534,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1664634287,
      "ems": null
    },
    {
      "latitude": 50.665283,
      "longitude": 19.19738,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1664634290,
      "ems": null
    },
    {
      "latitude": 50.663452,
      "longitude": 19.19512,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1664634297,
      "ems": null
    },
    {
      "latitude": 50.662754,
      "longitude": 19.194155,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1664634299,
      "ems": null
    },
    {
      "latitude": 50.661869,
      "longitude": 19.192596,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1664634303,
      "ems": null
    },
    {
      "latitude": 50.661118,
      "longitude": 19.191164,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1664634306,
      "ems": null
    },
    {
      "latitude": 50.660381,
      "longitude": 19.18985,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1664634309,
      "ems": null
    },
    {
      "latitude": 50.659588,
      "longitude": 19.188438,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1664634312,
      "ems": null
    },
    {
      "latitude": 50.658829,
      "longitude": 19.187117,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1664634315,
      "ems": null
    },
    {
      "latitude": 50.658096,
      "longitude": 19.185816,
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1664634317,
      "ems": null
    },
    {
      "latitude": 50.657402,
      "longitude": 19.184578,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1664634320,
      "ems": null
    },
    {
      "latitude": 50.656517,
      "longitude": 19.182945,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1664634324,
      "ems": null
    },
    {
      "latitude": 50.654839,
      "longitude": 19.179901,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1664634330,
      "ems": null
    },
    {
      "latitude": 50.653397,
      "longitude": 19.177155,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1664634336,
      "ems": null
    },
    {
      "latitude": 50.628632,
      "longitude": 19.13373,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1664634425,
      "ems": null
    },
    {
      "latitude": 50.625885,
      "longitude": 19.130537,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1664634433,
      "ems": null
    },
    {
      "latitude": 50.623169,
      "longitude": 19.127342,
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1664634442,
      "ems": null
    },
    {
      "latitude": 50.622021,
      "longitude": 19.125267,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1664634446,
      "ems": null
    },
    {
      "latitude": 50.620903,
      "longitude": 19.123262,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1664634450,
      "ems": null
    },
    {
      "latitude": 50.619785,
      "longitude": 19.121258,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1664634454,
      "ems": null
    },
    {
      "latitude": 50.618729,
      "longitude": 19.119318,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1664634458,
      "ems": null
    },
    {
      "latitude": 50.617691,
      "longitude": 19.117548,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1664634462,
      "ems": null
    },
    {
      "latitude": 50.616852,
      "longitude": 19.116066,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1664634465,
      "ems": null
    },
    {
      "latitude": 50.61525,
      "longitude": 19.113174,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1664634471,
      "ems": null
    },
    {
      "latitude": 50.613647,
      "longitude": 19.110357,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1664634477,
      "ems": null
    },
    {
      "latitude": 50.611954,
      "longitude": 19.107466,
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1664634483,
      "ems": null
    },
    {
      "latitude": 50.610214,
      "longitude": 19.104792,
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1664634489,
      "ems": null
    },
    {
      "latitude": 50.609451,
      "longitude": 19.103741,
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1664634492,
      "ems": null
    },
    {
      "latitude": 50.608429,
      "longitude": 19.102329,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1664634496,
      "ems": null
    },
    {
      "latitude": 50.607513,
      "longitude": 19.101177,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1664634498,
      "ems": null
    },
    {
      "latitude": 50.606472,
      "longitude": 19.09988,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664634501,
      "ems": null
    },
    {
      "latitude": 50.605499,
      "longitude": 19.098648,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1664634505,
      "ems": null
    },
    {
      "latitude": 50.60463,
      "longitude": 19.097345,
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1664634508,
      "ems": null
    },
    {
      "latitude": 50.602936,
      "longitude": 19.094757,
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1664634513,
      "ems": null
    },
    {
      "latitude": 50.601196,
      "longitude": 19.092215,
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
      "heading": 223,
      "squawk": "7470",
      "timestamp": 1664634519,
      "ems": null
    },
    {
      "latitude": 50.599491,
      "longitude": 19.089487,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 225,
      "squawk": "7470",
      "timestamp": 1664634525,
      "ems": null
    },
    {
      "latitude": 50.598633,
      "longitude": 19.088095,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664634529,
      "ems": null
    },
    {
      "latitude": 50.598465,
      "longitude": 19.087854,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664634529,
      "ems": null
    },
    {
      "latitude": 50.596512,
      "longitude": 19.084661,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 225,
      "squawk": "7470",
      "timestamp": 1664634536,
      "ems": null
    },
    {
      "latitude": 50.594509,
      "longitude": 19.081322,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 227,
      "squawk": "7470",
      "timestamp": 1664634543,
      "ems": null
    },
    {
      "latitude": 50.592819,
      "longitude": 19.078337,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 228,
      "squawk": "7470",
      "timestamp": 1664634550,
      "ems": null
    },
    {
      "latitude": 50.591156,
      "longitude": 19.075384,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664634556,
      "ems": null
    },
    {
      "latitude": 50.590549,
      "longitude": 19.074196,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664634558,
      "ems": null
    },
    {
      "latitude": 50.588882,
      "longitude": 19.070965,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 230,
      "squawk": "7470",
      "timestamp": 1664634565,
      "ems": null
    },
    {
      "latitude": 50.58728,
      "longitude": 19.068001,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 230,
      "squawk": "7470",
      "timestamp": 1664634571,
      "ems": null
    },
    {
      "latitude": 50.585861,
      "longitude": 19.065182,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 231,
      "squawk": "7470",
      "timestamp": 1664634577,
      "ems": null
    },
    {
      "latitude": 50.585175,
      "longitude": 19.063808,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 233,
      "squawk": "7470",
      "timestamp": 1664634579,
      "ems": null
    },
    {
      "latitude": 50.584591,
      "longitude": 19.062468,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 237,
      "squawk": "7470",
      "timestamp": 1664634583,
      "ems": null
    },
    {
      "latitude": 50.583801,
      "longitude": 19.060484,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 238,
      "squawk": "7470",
      "timestamp": 1664634586,
      "ems": null
    },
    {
      "latitude": 50.583344,
      "longitude": 19.059183,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 240,
      "squawk": "7470",
      "timestamp": 1664634588,
      "ems": null
    },
    {
      "latitude": 50.582359,
      "longitude": 19.056232,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664634593,
      "ems": null
    },
    {
      "latitude": 50.581833,
      "longitude": 19.054558,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664634596,
      "ems": null
    },
    {
      "latitude": 50.581287,
      "longitude": 19.052965,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 243,
      "squawk": "7470",
      "timestamp": 1664634599,
      "ems": null
    },
    {
      "latitude": 50.580276,
      "longitude": 19.050148,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 240,
      "squawk": "7470",
      "timestamp": 1664634604,
      "ems": null
    },
    {
      "latitude": 50.579681,
      "longitude": 19.048559,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 239,
      "squawk": "7470",
      "timestamp": 1664634607,
      "ems": null
    },
    {
      "latitude": 50.579052,
      "longitude": 19.046804,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 242,
      "squawk": "7470",
      "timestamp": 1664634610,
      "ems": null
    },
    {
      "latitude": 50.578773,
      "longitude": 19.045839,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 244,
      "squawk": "7470",
      "timestamp": 1664634611,
      "ems": null
    },
    {
      "latitude": 50.5784,
      "longitude": 19.044367,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 245,
      "squawk": "7470",
      "timestamp": 1664634614,
      "ems": null
    },
    {
      "latitude": 50.578217,
      "longitude": 19.043354,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 245,
      "squawk": "7470",
      "timestamp": 1664634615,
      "ems": null
    },
    {
      "latitude": 50.577934,
      "longitude": 19.041162,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 259,
      "squawk": "7470",
      "timestamp": 1664634619,
      "ems": null
    },
    {
      "latitude": 50.577797,
      "longitude": 19.039307,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 262,
      "squawk": "7470",
      "timestamp": 1664634622,
      "ems": null
    },
    {
      "latitude": 50.577564,
      "longitude": 19.037376,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 259,
      "squawk": "7470",
      "timestamp": 1664634625,
      "ems": null
    },
    {
      "latitude": 50.577209,
      "longitude": 19.035477,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664634628,
      "ems": null
    },
    {
      "latitude": 50.575981,
      "longitude": 19.03233,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 229,
      "squawk": "7470",
      "timestamp": 1664634634,
      "ems": null
    },
    {
      "latitude": 50.57505,
      "longitude": 19.031067,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 218,
      "squawk": "7470",
      "timestamp": 1664634637,
      "ems": null
    },
    {
      "latitude": 50.57407,
      "longitude": 19.030102,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 207,
      "squawk": "7470",
      "timestamp": 1664634640,
      "ems": null
    },
    {
      "latitude": 50.572861,
      "longitude": 19.029333,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 200,
      "squawk": "7470",
      "timestamp": 1664634643,
      "ems": null
    },
    {
      "latitude": 50.571838,
      "longitude": 19.028839,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 196,
      "squawk": "7470",
      "timestamp": 1664634646,
      "ems": null
    },
    {
      "latitude": 50.570663,
      "longitude": 19.028465,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 189,
      "squawk": "7470",
      "timestamp": 1664634649,
      "ems": null
    },
    {
      "latitude": 50.569656,
      "longitude": 19.028248,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 185,
      "squawk": "7470",
      "timestamp": 1664634652,
      "ems": null
    },
    {
      "latitude": 50.56802,
      "longitude": 19.028246,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 179,
      "squawk": "7470",
      "timestamp": 1664634655,
      "ems": null
    },
    {
      "latitude": 50.566681,
      "longitude": 19.028393,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 175,
      "squawk": "7470",
      "timestamp": 1664634658,
      "ems": null
    },
    {
      "latitude": 50.565414,
      "longitude": 19.028618,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 171,
      "squawk": "7470",
      "timestamp": 1664634661,
      "ems": null
    },
    {
      "latitude": 50.564117,
      "longitude": 19.028971,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 169,
      "squawk": "7470",
      "timestamp": 1664634664,
      "ems": null
    },
    {
      "latitude": 50.563038,
      "longitude": 19.02936,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 167,
      "squawk": "7470",
      "timestamp": 1664634667,
      "ems": null
    },
    {
      "latitude": 50.561687,
      "longitude": 19.029804,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 165,
      "squawk": "7470",
      "timestamp": 1664634670,
      "ems": null
    },
    {
      "latitude": 50.560619,
      "longitude": 19.030325,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 164,
      "squawk": "7470",
      "timestamp": 1664634673,
      "ems": null
    },
    {
      "latitude": 50.559357,
      "longitude": 19.030849,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 164,
      "squawk": "7470",
      "timestamp": 1664634676,
      "ems": null
    },
    {
      "latitude": 50.55806,
      "longitude": 19.031439,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 164,
      "squawk": "7470",
      "timestamp": 1664634679,
      "ems": null
    },
    {
      "latitude": 50.556755,
      "longitude": 19.031958,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 165,
      "squawk": "7470",
      "timestamp": 1664634682,
      "ems": null
    },
    {
      "latitude": 50.555511,
      "longitude": 19.032368,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 167,
      "squawk": "7470",
      "timestamp": 1664634685,
      "ems": null
    },
    {
      "latitude": 50.554276,
      "longitude": 19.032801,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 168,
      "squawk": "7470",
      "timestamp": 1664634688,
      "ems": null
    },
    {
      "latitude": 50.551758,
      "longitude": 19.033669,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664634694,
      "ems": null
    },
    {
      "latitude": 50.550701,
      "longitude": 19.034185,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 161,
      "squawk": "7470",
      "timestamp": 1664634697,
      "ems": null
    },
    {
      "latitude": 50.549377,
      "longitude": 19.035042,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 155,
      "squawk": "7470",
      "timestamp": 1664634700,
      "ems": null
    },
    {
      "latitude": 50.548187,
      "longitude": 19.036041,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 149,
      "squawk": "7470",
      "timestamp": 1664634703,
      "ems": null
    },
    {
      "latitude": 50.547073,
      "longitude": 19.037153,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 146,
      "squawk": "7470",
      "timestamp": 1664634706,
      "ems": null
    },
    {
      "latitude": 50.545956,
      "longitude": 19.038342,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 145,
      "squawk": "7470",
      "timestamp": 1664634709,
      "ems": null
    },
    {
      "latitude": 50.544891,
      "longitude": 19.039524,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 145,
      "squawk": "7470",
      "timestamp": 1664634712,
      "ems": null
    },
    {
      "latitude": 50.543793,
      "longitude": 19.04068,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664634715,
      "ems": null
    },
    {
      "latitude": 50.542744,
      "longitude": 19.04183,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 146,
      "squawk": "7470",
      "timestamp": 1664634718,
      "ems": null
    },
    {
      "latitude": 50.542137,
      "longitude": 19.042425,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 147,
      "squawk": "7470",
      "timestamp": 1664634719,
      "ems": null
    },
    {
      "latitude": 50.539078,
      "longitude": 19.044945,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 154,
      "squawk": "7470",
      "timestamp": 1664634727,
      "ems": null
    },
    {
      "latitude": 50.536644,
      "longitude": 19.046284,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 162,
      "squawk": "7470",
      "timestamp": 1664634733,
      "ems": null
    },
    {
      "latitude": 50.535599,
      "longitude": 19.046679,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 165,
      "squawk": "7470",
      "timestamp": 1664634736,
      "ems": null
    },
    {
      "latitude": 50.534317,
      "longitude": 19.047113,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 169,
      "squawk": "7470",
      "timestamp": 1664634739,
      "ems": null
    },
    {
      "latitude": 50.533012,
      "longitude": 19.047398,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 173,
      "squawk": "7470",
      "timestamp": 1664634742,
      "ems": null
    },
    {
      "latitude": 50.531662,
      "longitude": 19.047323,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 182,
      "squawk": "7470",
      "timestamp": 1664634745,
      "ems": null
    },
    {
      "latitude": 50.531242,
      "longitude": 19.047323,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664634748,
      "ems": null
    },
    {
      "latitude": 50.527893,
      "longitude": 19.048288,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 162,
      "squawk": "7470",
      "timestamp": 1664634754,
      "ems": null
    },
    {
      "latitude": 50.525894,
      "longitude": 19.049643,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 153,
      "squawk": "7470",
      "timestamp": 1664634760,
      "ems": null
    },
    {
      "latitude": 50.524338,
      "longitude": 19.050943,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 149,
      "squawk": "7470",
      "timestamp": 1664634764,
      "ems": null
    },
    {
      "latitude": 50.523983,
      "longitude": 19.051332,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 149,
      "squawk": "7470",
      "timestamp": 1664634765,
      "ems": null
    },
    {
      "latitude": 50.522507,
      "longitude": 19.05275,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 146,
      "squawk": "7470",
      "timestamp": 1664634769,
      "ems": null
    },
    {
      "latitude": 50.522186,
      "longitude": 19.053112,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 146,
      "squawk": "7470",
      "timestamp": 1664634770,
      "ems": null
    },
    {
      "latitude": 50.52063,
      "longitude": 19.054773,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 145,
      "squawk": "7470",
      "timestamp": 1664634775,
      "ems": null
    },
    {
      "latitude": 50.519943,
      "longitude": 19.055569,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664634777,
      "ems": null
    },
    {
      "latitude": 50.518627,
      "longitude": 19.0569,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 145,
      "squawk": "7470",
      "timestamp": 1664634781,
      "ems": null
    },
    {
      "latitude": 50.517696,
      "longitude": 19.05794,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 145,
      "squawk": "7470",
      "timestamp": 1664634783,
      "ems": null
    },
    {
      "latitude": 50.516235,
      "longitude": 19.059473,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 145,
      "squawk": "7470",
      "timestamp": 1664634787,
      "ems": null
    },
    {
      "latitude": 50.515228,
      "longitude": 19.060612,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 144,
      "squawk": "7470",
      "timestamp": 1664634790,
      "ems": null
    },
    {
      "latitude": 50.513695,
      "longitude": 19.062319,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 143,
      "squawk": "7470",
      "timestamp": 1664634795,
      "ems": null
    },
    {
      "latitude": 50.512577,
      "longitude": 19.063654,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 143,
      "squawk": "7470",
      "timestamp": 1664634798,
      "ems": null
    },
    {
      "latitude": 50.511227,
      "longitude": 19.065289,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 143,
      "squawk": "7470",
      "timestamp": 1664634802,
      "ems": null
    },
    {
      "latitude": 50.508015,
      "longitude": 19.069221,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 139,
      "squawk": "7470",
      "timestamp": 1664634811,
      "ems": null
    },
    {
      "latitude": 50.506989,
      "longitude": 19.070707,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 137,
      "squawk": "7470",
      "timestamp": 1664634814,
      "ems": null
    },
    {
      "latitude": 50.506012,
      "longitude": 19.072191,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 135,
      "squawk": "7470",
      "timestamp": 1664634817,
      "ems": null
    },
    {
      "latitude": 50.505127,
      "longitude": 19.073603,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 133,
      "squawk": "7470",
      "timestamp": 1664634820,
      "ems": null
    },
    {
      "latitude": 50.504242,
      "longitude": 19.075161,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 130,
      "squawk": "7470",
      "timestamp": 1664634823,
      "ems": null
    },
    {
      "latitude": 50.503418,
      "longitude": 19.076891,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 124,
      "squawk": "7470",
      "timestamp": 1664634826,
      "ems": null
    },
    {
      "latitude": 50.502777,
      "longitude": 19.078699,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 117,
      "squawk": "7470",
      "timestamp": 1664634829,
      "ems": null
    },
    {
      "latitude": 50.502148,
      "longitude": 19.080505,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 119,
      "squawk": "7470",
      "timestamp": 1664634832,
      "ems": null
    },
    {
      "latitude": 50.50145,
      "longitude": 19.082169,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 126,
      "squawk": "7470",
      "timestamp": 1664634835,
      "ems": null
    },
    {
      "latitude": 50.500626,
      "longitude": 19.083757,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 129,
      "squawk": "7470",
      "timestamp": 1664634838,
      "ems": null
    },
    {
      "latitude": 50.499821,
      "longitude": 19.085701,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 119,
      "squawk": "7470",
      "timestamp": 1664634842,
      "ems": null
    },
    {
      "latitude": 50.499344,
      "longitude": 19.087444,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 108,
      "squawk": "7470",
      "timestamp": 1664634844,
      "ems": null
    },
    {
      "latitude": 50.499031,
      "longitude": 19.089487,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 101,
      "squawk": "7470",
      "timestamp": 1664634847,
      "ems": null
    },
    {
      "latitude": 50.498932,
      "longitude": 19.091782,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 92,
      "squawk": "7470",
      "timestamp": 1664634850,
      "ems": null
    },
    {
      "latitude": 50.499481,
      "longitude": 19.098141,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 76,
      "squawk": "7470",
      "timestamp": 1664634859,
      "ems": null
    },
    {
      "latitude": 50.499962,
      "longitude": 19.100473,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 70,
      "squawk": "7470",
      "timestamp": 1664634862,
      "ems": null
    },
    {
      "latitude": 50.500614,
      "longitude": 19.102701,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 62,
      "squawk": "7470",
      "timestamp": 1664634865,
      "ems": null
    },
    {
      "latitude": 50.501495,
      "longitude": 19.104853,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 54,
      "squawk": "7470",
      "timestamp": 1664634868,
      "ems": null
    },
    {
      "latitude": 50.502426,
      "longitude": 19.106413,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 46,
      "squawk": "7470",
      "timestamp": 1664634871,
      "ems": null
    },
    {
      "latitude": 50.503407,
      "longitude": 19.107748,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 38,
      "squawk": "7470",
      "timestamp": 1664634874,
      "ems": null
    },
    {
      "latitude": 50.50499,
      "longitude": 19.109159,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664634877,
      "ems": null
    },
    {
      "latitude": 50.50621,
      "longitude": 19.109995,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 21,
      "squawk": "7470",
      "timestamp": 1664634880,
      "ems": null
    },
    {
      "latitude": 50.507595,
      "longitude": 19.110643,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664634883,
      "ems": null
    },
    {
      "latitude": 50.509224,
      "longitude": 19.110867,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 4,
      "squawk": "7470",
      "timestamp": 1664634886,
      "ems": null
    },
    {
      "latitude": 50.510605,
      "longitude": 19.1105,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664634889,
      "ems": null
    },
    {
      "latitude": 50.512024,
      "longitude": 19.109562,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 332,
      "squawk": "7470",
      "timestamp": 1664634893,
      "ems": null
    },
    {
      "latitude": 50.513088,
      "longitude": 19.108343,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 323,
      "squawk": "7470",
      "timestamp": 1664634895,
      "ems": null
    },
    {
      "latitude": 50.51416,
      "longitude": 19.106562,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 310,
      "squawk": "7470",
      "timestamp": 1664634899,
      "ems": null
    },
    {
      "latitude": 50.514954,
      "longitude": 19.104935,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 305,
      "squawk": "7470",
      "timestamp": 1664634901,
      "ems": null
    },
    {
      "latitude": 50.515686,
      "longitude": 19.102983,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 299,
      "squawk": "7470",
      "timestamp": 1664634904,
      "ems": null
    },
    {
      "latitude": 50.516235,
      "longitude": 19.100672,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 286,
      "squawk": "7470",
      "timestamp": 1664634908,
      "ems": null
    },
    {
      "latitude": 50.516487,
      "longitude": 19.098692,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 282,
      "squawk": "7470",
      "timestamp": 1664634910,
      "ems": null
    },
    {
      "latitude": 50.516693,
      "longitude": 19.096695,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 279,
      "squawk": "7470",
      "timestamp": 1664634913,
      "ems": null
    },
    {
      "latitude": 50.516922,
      "longitude": 19.094528,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 278,
      "squawk": "7470",
      "timestamp": 1664634917,
      "ems": null
    },
    {
      "latitude": 50.517094,
      "longitude": 19.092901,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 277,
      "squawk": "7470",
      "timestamp": 1664634919,
      "ems": null
    },
    {
      "latitude": 50.517231,
      "longitude": 19.090824,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 277,
      "squawk": "7470",
      "timestamp": 1664634922,
      "ems": null
    },
    {
      "latitude": 50.51738,
      "longitude": 19.088745,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 276,
      "squawk": "7470",
      "timestamp": 1664634925,
      "ems": null
    },
    {
      "latitude": 50.517563,
      "longitude": 19.086504,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664634929,
      "ems": null
    },
    {
      "latitude": 50.517654,
      "longitude": 19.085131,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 276,
      "squawk": "7470",
      "timestamp": 1664634931,
      "ems": null
    },
    {
      "latitude": 50.517838,
      "longitude": 19.082529,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 276,
      "squawk": "7470",
      "timestamp": 1664634935,
      "ems": null
    },
    {
      "latitude": 50.517975,
      "longitude": 19.08065,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 276,
      "squawk": "7470",
      "timestamp": 1664634937,
      "ems": null
    },
    {
      "latitude": 50.518116,
      "longitude": 19.078575,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664634940,
      "ems": null
    },
    {
      "latitude": 50.51825,
      "longitude": 19.07653,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 274,
      "squawk": "7470",
      "timestamp": 1664634944,
      "ems": null
    },
    {
      "latitude": 50.518433,
      "longitude": 19.073061,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 274,
      "squawk": "7470",
      "timestamp": 1664634949,
      "ems": null
    },
    {
      "latitude": 50.518616,
      "longitude": 19.068724,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 273,
      "squawk": "7470",
      "timestamp": 1664634955,
      "ems": null
    },
    {
      "latitude": 50.518616,
      "longitude": 19.064459,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 264,
      "squawk": "7470",
      "timestamp": 1664634962,
      "ems": null
    },
    {
      "latitude": 50.518349,
      "longitude": 19.062689,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 255,
      "squawk": "7470",
      "timestamp": 1664634964,
      "ems": null
    },
    {
      "latitude": 50.517883,
      "longitude": 19.060982,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 244,
      "squawk": "7470",
      "timestamp": 1664634967,
      "ems": null
    },
    {
      "latitude": 50.517471,
      "longitude": 19.059834,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 234,
      "squawk": "7470",
      "timestamp": 1664634970,
      "ems": null
    },
    {
      "latitude": 50.517094,
      "longitude": 19.059126,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 229,
      "squawk": "7470",
      "timestamp": 1664634971,
      "ems": null
    },
    {
      "latitude": 50.515881,
      "longitude": 19.057642,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 234,
      "squawk": "7470",
      "timestamp": 1664634975,
      "ems": null
    },
    {
      "latitude": 50.514999,
      "longitude": 19.05687,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 204,
      "squawk": "7470",
      "timestamp": 1664634978,
      "ems": null
    },
    {
      "latitude": 50.513672,
      "longitude": 19.056147,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 195,
      "squawk": "7470",
      "timestamp": 1664634981,
      "ems": null
    },
    {
      "latitude": 50.512714,
      "longitude": 19.055861,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 190,
      "squawk": "7470",
      "timestamp": 1664634984,
      "ems": null
    },
    {
      "latitude": 50.511318,
      "longitude": 19.055712,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 182,
      "squawk": "7470",
      "timestamp": 1664634987,
      "ems": null
    },
    {
      "latitude": 50.510193,
      "longitude": 19.055786,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 175,
      "squawk": "7470",
      "timestamp": 1664634990,
      "ems": null
    },
    {
      "latitude": 50.509094,
      "longitude": 19.056076,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 168,
      "squawk": "7470",
      "timestamp": 1664634993,
      "ems": null
    },
    {
      "latitude": 50.508202,
      "longitude": 19.056528,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 164,
      "squawk": "7470",
      "timestamp": 1664634995,
      "ems": null
    },
    {
      "latitude": 50.506897,
      "longitude": 19.05727,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 158,
      "squawk": "7470",
      "timestamp": 1664634999,
      "ems": null
    },
    {
      "latitude": 50.505779,
      "longitude": 19.058086,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 153,
      "squawk": "7470",
      "timestamp": 1664635002,
      "ems": null
    },
    {
      "latitude": 50.504929,
      "longitude": 19.058893,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 149,
      "squawk": "7470",
      "timestamp": 1664635004,
      "ems": null
    },
    {
      "latitude": 50.503685,
      "longitude": 19.06024,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 143,
      "squawk": "7470",
      "timestamp": 1664635008,
      "ems": null
    },
    {
      "latitude": 50.502846,
      "longitude": 19.061354,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 138,
      "squawk": "7470",
      "timestamp": 1664635010,
      "ems": null
    },
    {
      "latitude": 50.50177,
      "longitude": 19.063013,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 133,
      "squawk": "7470",
      "timestamp": 1664635014,
      "ems": null
    },
    {
      "latitude": 50.500938,
      "longitude": 19.064545,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 128,
      "squawk": "7470",
      "timestamp": 1664635017,
      "ems": null
    },
    {
      "latitude": 50.500214,
      "longitude": 19.066195,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664635020,
      "ems": null
    },
    {
      "latitude": 50.499496,
      "longitude": 19.068035,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664635023,
      "ems": null
    },
    {
      "latitude": 50.498932,
      "longitude": 19.06988,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 114,
      "squawk": "7470",
      "timestamp": 1664635026,
      "ems": null
    },
    {
      "latitude": 50.497681,
      "longitude": 19.076571,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 100,
      "squawk": "7470",
      "timestamp": 1664635035,
      "ems": null
    },
    {
      "latitude": 50.497494,
      "longitude": 19.07865,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 98,
      "squawk": "7470",
      "timestamp": 1664635038,
      "ems": null
    },
    {
      "latitude": 50.497238,
      "longitude": 19.081083,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 98,
      "squawk": "7470",
      "timestamp": 1664635041,
      "ems": null
    },
    {
      "latitude": 50.497192,
      "longitude": 19.081661,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664635042,
      "ems": null
    },
    {
      "latitude": 50.496933,
      "longitude": 19.084217,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 99,
      "squawk": "7470",
      "timestamp": 1664635046,
      "ems": null
    },
    {
      "latitude": 50.4967,
      "longitude": 19.086517,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 98,
      "squawk": "7470",
      "timestamp": 1664635049,
      "ems": null
    },
    {
      "latitude": 50.496506,
      "longitude": 19.088455,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 98,
      "squawk": "7470",
      "timestamp": 1664635052,
      "ems": null
    },
    {
      "latitude": 50.496323,
      "longitude": 19.090624,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664635055,
      "ems": null
    },
    {
      "latitude": 50.495911,
      "longitude": 19.095055,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 97,
      "squawk": "7470",
      "timestamp": 1664635061,
      "ems": null
    },
    {
      "latitude": 50.495537,
      "longitude": 19.099285,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 96,
      "squawk": "7470",
      "timestamp": 1664635066,
      "ems": null
    },
    {
      "latitude": 50.495258,
      "longitude": 19.103666,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 95,
      "squawk": "7470",
      "timestamp": 1664635073,
      "ems": null
    },
    {
      "latitude": 50.495087,
      "longitude": 19.108261,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 88,
      "squawk": "7470",
      "timestamp": 1664635079,
      "ems": null
    },
    {
      "latitude": 50.49527,
      "longitude": 19.110357,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 79,
      "squawk": "7470",
      "timestamp": 1664635082,
      "ems": null
    },
    {
      "latitude": 50.495728,
      "longitude": 19.112814,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 72,
      "squawk": "7470",
      "timestamp": 1664635085,
      "ems": null
    },
    {
      "latitude": 50.49633,
      "longitude": 19.114948,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 63,
      "squawk": "7470",
      "timestamp": 1664635088,
      "ems": null
    },
    {
      "latitude": 50.496983,
      "longitude": 19.116657,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 55,
      "squawk": "7470",
      "timestamp": 1664635091,
      "ems": null
    },
    {
      "latitude": 50.497959,
      "longitude": 19.118586,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 49,
      "squawk": "7470",
      "timestamp": 1664635094,
      "ems": null
    },
    {
      "latitude": 50.498932,
      "longitude": 19.120041,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 42,
      "squawk": "7470",
      "timestamp": 1664635097,
      "ems": null
    },
    {
      "latitude": 50.500214,
      "longitude": 19.121559,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 32,
      "squawk": "7470",
      "timestamp": 1664635100,
      "ems": null
    },
    {
      "latitude": 50.50145,
      "longitude": 19.122595,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 28,
      "squawk": "7470",
      "timestamp": 1664635103,
      "ems": null
    },
    {
      "latitude": 50.502846,
      "longitude": 19.123411,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 20,
      "squawk": "7470",
      "timestamp": 1664635106,
      "ems": null
    },
    {
      "latitude": 50.504475,
      "longitude": 19.123932,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 9,
      "squawk": "7470",
      "timestamp": 1664635109,
      "ems": null
    },
    {
      "latitude": 50.50592,
      "longitude": 19.124079,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 2,
      "squawk": "7470",
      "timestamp": 1664635112,
      "ems": null
    },
    {
      "latitude": 50.507175,
      "longitude": 19.124004,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664635115,
      "ems": null
    },
    {
      "latitude": 50.508526,
      "longitude": 19.12356,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 346,
      "squawk": "7470",
      "timestamp": 1664635118,
      "ems": null
    },
    {
      "latitude": 50.510056,
      "longitude": 19.122644,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 336,
      "squawk": "7470",
      "timestamp": 1664635121,
      "ems": null
    },
    {
      "latitude": 50.511108,
      "longitude": 19.121777,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 330,
      "squawk": "7470",
      "timestamp": 1664635124,
      "ems": null
    },
    {
      "latitude": 50.512024,
      "longitude": 19.120836,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 325,
      "squawk": "7470",
      "timestamp": 1664635126,
      "ems": null
    },
    {
      "latitude": 50.513077,
      "longitude": 19.11939,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664635129,
      "ems": null
    },
    {
      "latitude": 50.513535,
      "longitude": 19.118525,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 313,
      "squawk": "7470",
      "timestamp": 1664635131,
      "ems": null
    },
    {
      "latitude": 50.51453,
      "longitude": 19.116211,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 297,
      "squawk": "7470",
      "timestamp": 1664635135,
      "ems": null
    },
    {
      "latitude": 50.515182,
      "longitude": 19.113464,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 286,
      "squawk": "7470",
      "timestamp": 1664635139,
      "ems": null
    },
    {
      "latitude": 50.515369,
      "longitude": 19.111832,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 278,
      "squawk": "7470",
      "timestamp": 1664635142,
      "ems": null
    },
    {
      "latitude": 50.515457,
      "longitude": 19.10985,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 273,
      "squawk": "7470",
      "timestamp": 1664635145,
      "ems": null
    },
    {
      "latitude": 50.515503,
      "longitude": 19.107899,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 269,
      "squawk": "7470",
      "timestamp": 1664635148,
      "ems": null
    },
    {
      "latitude": 50.515461,
      "longitude": 19.105892,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 268,
      "squawk": "7470",
      "timestamp": 1664635151,
      "ems": null
    },
    {
      "latitude": 50.515411,
      "longitude": 19.103851,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 268,
      "squawk": "7470",
      "timestamp": 1664635154,
      "ems": null
    },
    {
      "latitude": 50.515415,
      "longitude": 19.102329,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 269,
      "squawk": "7470",
      "timestamp": 1664635157,
      "ems": null
    },
    {
      "latitude": 50.515366,
      "longitude": 19.100164,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 267,
      "squawk": "7470",
      "timestamp": 1664635160,
      "ems": null
    },
    {
      "latitude": 50.515274,
      "longitude": 19.098431,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 264,
      "squawk": "7470",
      "timestamp": 1664635163,
      "ems": null
    },
    {
      "latitude": 50.515182,
      "longitude": 19.096539,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 263,
      "squawk": "7470",
      "timestamp": 1664635166,
      "ems": null
    },
    {
      "latitude": 50.514999,
      "longitude": 19.094599,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 262,
      "squawk": "7470",
      "timestamp": 1664635169,
      "ems": null
    },
    {
      "latitude": 50.514858,
      "longitude": 19.092829,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 262,
      "squawk": "7470",
      "timestamp": 1664635172,
      "ems": null
    },
    {
      "latitude": 50.514679,
      "longitude": 19.091059,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 260,
      "squawk": "7470",
      "timestamp": 1664635175,
      "ems": null
    },
    {
      "latitude": 50.514484,
      "longitude": 19.089264,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 260,
      "squawk": "7470",
      "timestamp": 1664635178,
      "ems": null
    },
    {
      "latitude": 50.514297,
      "longitude": 19.087408,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 261,
      "squawk": "7470",
      "timestamp": 1664635181,
      "ems": null
    },
    {
      "latitude": 50.514065,
      "longitude": 19.08548,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 260,
      "squawk": "7470",
      "timestamp": 1664635184,
      "ems": null
    },
    {
      "latitude": 50.513901,
      "longitude": 19.083757,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 260,
      "squawk": "7470",
      "timestamp": 1664635187,
      "ems": null
    },
    {
      "latitude": 50.513718,
      "longitude": 19.081951,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 260,
      "squawk": "7470",
      "timestamp": 1664635190,
      "ems": null
    },
    {
      "latitude": 50.513508,
      "longitude": 19.080133,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 259,
      "squawk": "7470",
      "timestamp": 1664635193,
      "ems": null
    },
    {
      "latitude": 50.513168,
      "longitude": 19.076458,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 264,
      "squawk": "7470",
      "timestamp": 1664635199,
      "ems": null
    },
    {
      "latitude": 50.513134,
      "longitude": 19.074345,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 268,
      "squawk": "7470",
      "timestamp": 1664635202,
      "ems": null
    },
    {
      "latitude": 50.513088,
      "longitude": 19.072638,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 267,
      "squawk": "7470",
      "timestamp": 1664635205,
      "ems": null
    },
    {
      "latitude": 50.512711,
      "longitude": 19.068651,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 257,
      "squawk": "7470",
      "timestamp": 1664635211,
      "ems": null
    },
    {
      "latitude": 50.512344,
      "longitude": 19.066917,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 252,
      "squawk": "7470",
      "timestamp": 1664635214,
      "ems": null
    },
    {
      "latitude": 50.511925,
      "longitude": 19.065214,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 245,
      "squawk": "7470",
      "timestamp": 1664635217,
      "ems": null
    },
    {
      "latitude": 50.5112,
      "longitude": 19.063303,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 237,
      "squawk": "7470",
      "timestamp": 1664635220,
      "ems": null
    },
    {
      "latitude": 50.510513,
      "longitude": 19.061857,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664635223,
      "ems": null
    },
    {
      "latitude": 50.509922,
      "longitude": 19.060833,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 226,
      "squawk": "7470",
      "timestamp": 1664635226,
      "ems": null
    },
    {
      "latitude": 50.50882,
      "longitude": 19.059256,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664635229,
      "ems": null
    },
    {
      "latitude": 50.507813,
      "longitude": 19.058243,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 208,
      "squawk": "7470",
      "timestamp": 1664635232,
      "ems": null
    },
    {
      "latitude": 50.506943,
      "longitude": 19.057737,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 201,
      "squawk": "7470",
      "timestamp": 1664635235,
      "ems": null
    },
    {
      "latitude": 50.505707,
      "longitude": 19.057232,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 189,
      "squawk": "7470",
      "timestamp": 1664635238,
      "ems": null
    },
    {
      "latitude": 50.504471,
      "longitude": 19.057087,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 182,
      "squawk": "7470",
      "timestamp": 1664635241,
      "ems": null
    },
    {
      "latitude": 50.503311,
      "longitude": 19.05727,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 170,
      "squawk": "7470",
      "timestamp": 1664635244,
      "ems": null
    },
    {
      "latitude": 50.502136,
      "longitude": 19.057882,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 158,
      "squawk": "7470",
      "timestamp": 1664635247,
      "ems": null
    },
    {
      "latitude": 50.501175,
      "longitude": 19.05875,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 149,
      "squawk": "7470",
      "timestamp": 1664635250,
      "ems": null
    },
    {
      "latitude": 50.500214,
      "longitude": 19.059906,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 139,
      "squawk": "7470",
      "timestamp": 1664635253,
      "ems": null
    },
    {
      "latitude": 50.49931,
      "longitude": 19.061428,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 130,
      "squawk": "7470",
      "timestamp": 1664635256,
      "ems": null
    },
    {
      "latitude": 50.498611,
      "longitude": 19.063061,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 122,
      "squawk": "7470",
      "timestamp": 1664635259,
      "ems": null
    },
    {
      "latitude": 50.498062,
      "longitude": 19.064676,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 115,
      "squawk": "7470",
      "timestamp": 1664635262,
      "ems": null
    },
    {
      "latitude": 50.497585,
      "longitude": 19.066624,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 110,
      "squawk": "7470",
      "timestamp": 1664635265,
      "ems": null
    },
    {
      "latitude": 50.49712,
      "longitude": 19.068777,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 108,
      "squawk": "7470",
      "timestamp": 1664635268,
      "ems": null
    },
    {
      "latitude": 50.496796,
      "longitude": 19.070484,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 107,
      "squawk": "7470",
      "timestamp": 1664635271,
      "ems": null
    },
    {
      "latitude": 50.496323,
      "longitude": 19.072483,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 110,
      "squawk": "7470",
      "timestamp": 1664635274,
      "ems": null
    },
    {
      "latitude": 50.495819,
      "longitude": 19.074493,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 110,
      "squawk": "7470",
      "timestamp": 1664635277,
      "ems": null
    },
    {
      "latitude": 50.495407,
      "longitude": 19.076385,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 108,
      "squawk": "7470",
      "timestamp": 1664635280,
      "ems": null
    },
    {
      "latitude": 50.495026,
      "longitude": 19.078352,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 107,
      "squawk": "7470",
      "timestamp": 1664635283,
      "ems": null
    },
    {
      "latitude": 50.493721,
      "longitude": 19.085033,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 106,
      "squawk": "7470",
      "timestamp": 1664635292,
      "ems": null
    },
    {
      "latitude": 50.493351,
      "longitude": 19.087112,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 105,
      "squawk": "7470",
      "timestamp": 1664635295,
      "ems": null
    },
    {
      "latitude": 50.492569,
      "longitude": 19.091782,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 103,
      "squawk": "7470",
      "timestamp": 1664635301,
      "ems": null
    },
    {
      "latitude": 50.492249,
      "longitude": 19.093948,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 102,
      "squawk": "7470",
      "timestamp": 1664635304,
      "ems": null
    },
    {
      "latitude": 50.49202,
      "longitude": 19.095901,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 101,
      "squawk": "7470",
      "timestamp": 1664635307,
      "ems": null
    },
    {
      "latitude": 50.491673,
      "longitude": 19.098692,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 100,
      "squawk": "7470",
      "timestamp": 1664635310,
      "ems": null
    },
    {
      "latitude": 50.491379,
      "longitude": 19.101177,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 100,
      "squawk": "7470",
      "timestamp": 1664635313,
      "ems": null
    },
    {
      "latitude": 50.491104,
      "longitude": 19.103634,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664635316,
      "ems": null
    },
    {
      "latitude": 50.490417,
      "longitude": 19.10849,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 105,
      "squawk": "7470",
      "timestamp": 1664635322,
      "ems": null
    },
    {
      "latitude": 50.489861,
      "longitude": 19.110718,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 114,
      "squawk": "7470",
      "timestamp": 1664635325,
      "ems": null
    },
    {
      "latitude": 50.489044,
      "longitude": 19.112886,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 125,
      "squawk": "7470",
      "timestamp": 1664635328,
      "ems": null
    },
    {
      "latitude": 50.488045,
      "longitude": 19.114578,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 135,
      "squawk": "7470",
      "timestamp": 1664635331,
      "ems": null
    },
    {
      "latitude": 50.48674,
      "longitude": 19.116137,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 145,
      "squawk": "7470",
      "timestamp": 1664635334,
      "ems": null
    },
    {
      "latitude": 50.485519,
      "longitude": 19.117079,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 156,
      "squawk": "7470",
      "timestamp": 1664635337,
      "ems": null
    },
    {
      "latitude": 50.483994,
      "longitude": 19.117695,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 167,
      "squawk": "7470",
      "timestamp": 1664635340,
      "ems": null
    },
    {
      "latitude": 50.482502,
      "longitude": 19.117844,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 179,
      "squawk": "7470",
      "timestamp": 1664635343,
      "ems": null
    },
    {
      "latitude": 50.480988,
      "longitude": 19.117584,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 186,
      "squawk": "7470",
      "timestamp": 1664635346,
      "ems": null
    },
    {
      "latitude": 50.479942,
      "longitude": 19.117176,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 186,
      "squawk": "7470",
      "timestamp": 1664635348,
      "ems": null
    },
    {
      "latitude": 50.478359,
      "longitude": 19.116062,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 204,
      "squawk": "7470",
      "timestamp": 1664635352,
      "ems": null
    },
    {
      "latitude": 50.477337,
      "longitude": 19.114874,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 218,
      "squawk": "7470",
      "timestamp": 1664635354,
      "ems": null
    },
    {
      "latitude": 50.476181,
      "longitude": 19.112597,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 238,
      "squawk": "7470",
      "timestamp": 1664635358,
      "ems": null
    },
    {
      "latitude": 50.475723,
      "longitude": 19.110285,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 261,
      "squawk": "7470",
      "timestamp": 1664635361,
      "ems": null
    },
    {
      "latitude": 50.475815,
      "longitude": 19.107538,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -1984,
        "ms": -10.1
      },
      "heading": 275,
      "squawk": "7470",
      "timestamp": 1664635364,
      "ems": null
    },
    {
      "latitude": 50.475952,
      "longitude": 19.104647,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -1856,
        "ms": -9.4
      },
      "heading": 273,
      "squawk": "7470",
      "timestamp": 1664635367,
      "ems": null
    },
    {
      "latitude": 50.475986,
      "longitude": 19.102627,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 270,
      "squawk": "7470",
      "timestamp": 1664635369,
      "ems": null
    },
    {
      "latitude": 50.475998,
      "longitude": 19.099081,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 270,
      "squawk": "7470",
      "timestamp": 1664635373,
      "ems": null
    },
    {
      "latitude": 50.475998,
      "longitude": 19.093155,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 270,
      "squawk": "7470",
      "timestamp": 1664635379,
      "ems": null
    },
    {
      "latitude": 50.475986,
      "longitude": 19.088596,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 270,
      "squawk": "7470",
      "timestamp": 1664635384,
      "ems": null
    },
    {
      "latitude": 50.475986,
      "longitude": 19.087706,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 270,
      "squawk": "7470",
      "timestamp": 1664635385,
      "ems": null
    },
    {
      "latitude": 50.475986,
      "longitude": 19.080505,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 270,
      "squawk": "7470",
      "timestamp": 1664635393,
      "ems": null
    },
    {
      "latitude": 50.475998,
      "longitude": 19.075663,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 270,
      "squawk": "7470",
      "timestamp": 1664635399,
      "ems": null
    },
    {
      "latitude": 50.476078,
      "longitude": 19.07041,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 270,
      "squawk": "7470",
      "timestamp": 1664635406,
      "ems": null
    },
    {
      "latitude": 50.476173,
      "longitude": 19.066772,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 2048,
        "ms": 10.4
      },
      "heading": 271,
      "squawk": "7470",
      "timestamp": 1664635412,
      "ems": null
    },
    {
      "latitude": 50.476181,
      "longitude": 19.063736,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 270,
      "squawk": "7470",
      "timestamp": 1664635418,
      "ems": null
    },
    {
      "latitude": 50.476364,
      "longitude": 19.060484,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 278,
      "squawk": "7470",
      "timestamp": 1664635426,
      "ems": null
    },
    {
      "latitude": 50.476871,
      "longitude": 19.058235,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 295,
      "squawk": "7470",
      "timestamp": 1664635430,
      "ems": null
    },
    {
      "latitude": 50.477242,
      "longitude": 19.057344,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 281,
      "squawk": "7470",
      "timestamp": 1664635432,
      "ems": null
    },
    {
      "latitude": 50.478104,
      "longitude": 19.055931,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 317,
      "squawk": "7470",
      "timestamp": 1664635436,
      "ems": null
    },
    {
      "latitude": 50.479057,
      "longitude": 19.054821,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 326,
      "squawk": "7470",
      "timestamp": 1664635439,
      "ems": null
    },
    {
      "latitude": 50.479706,
      "longitude": 19.054268,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 315,
      "squawk": "7470",
      "timestamp": 1664635441,
      "ems": null
    },
    {
      "latitude": 50.480576,
      "longitude": 19.05369,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664635444,
      "ems": null
    },
    {
      "latitude": 50.481201,
      "longitude": 19.053337,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664635445,
      "ems": null
    },
    {
      "latitude": 50.48259,
      "longitude": 19.052967,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664635449,
      "ems": null
    },
    {
      "latitude": 50.483852,
      "longitude": 19.052891,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 358,
      "squawk": "7470",
      "timestamp": 1664635452,
      "ems": null
    },
    {
      "latitude": 50.484512,
      "longitude": 19.052895,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 354,
      "squawk": "7470",
      "timestamp": 1664635453,
      "ems": null
    },
    {
      "latitude": 50.485703,
      "longitude": 19.052967,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 2,
      "squawk": "7470",
      "timestamp": 1664635456,
      "ems": null
    },
    {
      "latitude": 50.487392,
      "longitude": 19.053188,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 4,
      "squawk": "7470",
      "timestamp": 1664635459,
      "ems": null
    },
    {
      "latitude": 50.488632,
      "longitude": 19.053329,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 5,
      "squawk": "7470",
      "timestamp": 1664635462,
      "ems": null
    },
    {
      "latitude": 50.490143,
      "longitude": 19.053617,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 5,
      "squawk": "7470",
      "timestamp": 1664635466,
      "ems": null
    },
    {
      "latitude": 50.490837,
      "longitude": 19.053707,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 9,
      "squawk": "7470",
      "timestamp": 1664635468,
      "ems": null
    },
    {
      "latitude": 50.492386,
      "longitude": 19.054195,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 10,
      "squawk": "7470",
      "timestamp": 1664635471,
      "ems": null
    },
    {
      "latitude": 50.494125,
      "longitude": 19.05463,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 10,
      "squawk": "7470",
      "timestamp": 1664635474,
      "ems": null
    },
    {
      "latitude": 50.498566,
      "longitude": 19.055193,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 4,
      "squawk": "7470",
      "timestamp": 1664635484,
      "ems": null
    },
    {
      "latitude": 50.501175,
      "longitude": 19.055208,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664635489,
      "ems": null
    },
    {
      "latitude": 50.504379,
      "longitude": 19.055426,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 2,
      "squawk": "7470",
      "timestamp": 1664635496,
      "ems": null
    },
    {
      "latitude": 50.505432,
      "longitude": 19.055426,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 2,
      "squawk": "7470",
      "timestamp": 1664635497,
      "ems": null
    },
    {
      "latitude": 50.507309,
      "longitude": 19.055426,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 357,
      "squawk": "7470",
      "timestamp": 1664635501,
      "ems": null
    },
    {
      "latitude": 50.50927,
      "longitude": 19.055193,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 354,
      "squawk": "7470",
      "timestamp": 1664635505,
      "ems": null
    },
    {
      "latitude": 50.510109,
      "longitude": 19.055044,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664635508,
      "ems": null
    },
    {
      "latitude": 50.512115,
      "longitude": 19.054558,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664635511,
      "ems": null
    },
    {
      "latitude": 50.512894,
      "longitude": 19.054413,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664635514,
      "ems": null
    },
    {
      "latitude": 50.514996,
      "longitude": 19.054153,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 356,
      "squawk": "7470",
      "timestamp": 1664635516,
      "ems": null
    },
    {
      "latitude": 50.518387,
      "longitude": 19.054413,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 4,
      "squawk": "7470",
      "timestamp": 1664635522,
      "ems": null
    },
    {
      "latitude": 50.521236,
      "longitude": 19.054821,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 5,
      "squawk": "7470",
      "timestamp": 1664635528,
      "ems": null
    },
    {
      "latitude": 50.522911,
      "longitude": 19.055044,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 5,
      "squawk": "7470",
      "timestamp": 1664635531,
      "ems": null
    },
    {
      "latitude": 50.524261,
      "longitude": 19.055267,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 5,
      "squawk": "7470",
      "timestamp": 1664635534,
      "ems": null
    },
    {
      "latitude": 50.526169,
      "longitude": 19.055641,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 6,
      "squawk": "7470",
      "timestamp": 1664635537,
      "ems": null
    },
    {
      "latitude": 50.527473,
      "longitude": 19.055861,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 7,
      "squawk": "7470",
      "timestamp": 1664635541,
      "ems": null
    },
    {
      "latitude": 50.529099,
      "longitude": 19.056219,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 8,
      "squawk": "7470",
      "timestamp": 1664635543,
      "ems": null
    },
    {
      "latitude": 50.53093,
      "longitude": 19.056654,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 8,
      "squawk": "7470",
      "timestamp": 1664635547,
      "ems": null
    },
    {
      "latitude": 50.532127,
      "longitude": 19.0569,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 7,
      "squawk": "7470",
      "timestamp": 1664635549,
      "ems": null
    },
    {
      "latitude": 50.535507,
      "longitude": 19.05752,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 6,
      "squawk": "7470",
      "timestamp": 1664635556,
      "ems": null
    },
    {
      "latitude": 50.538738,
      "longitude": 19.05794,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 4,
      "squawk": "7470",
      "timestamp": 1664635562,
      "ems": null
    },
    {
      "latitude": 50.540646,
      "longitude": 19.058161,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 4,
      "squawk": "7470",
      "timestamp": 1664635565,
      "ems": null
    },
    {
      "latitude": 50.545761,
      "longitude": 19.058678,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 3,
      "squawk": "7470",
      "timestamp": 1664635575,
      "ems": null
    },
    {
      "latitude": 50.548828,
      "longitude": 19.058893,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664635581,
      "ems": null
    },
    {
      "latitude": 50.551758,
      "longitude": 19.058966,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664635587,
      "ems": null
    },
    {
      "latitude": 50.554844,
      "longitude": 19.059052,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664635593,
      "ems": null
    },
    {
      "latitude": 50.557732,
      "longitude": 19.0592,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664635599,
      "ems": null
    },
    {
      "latitude": 50.560944,
      "longitude": 19.059423,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 3,
      "squawk": "7470",
      "timestamp": 1664635605,
      "ems": null
    },
    {
      "latitude": 50.563934,
      "longitude": 19.059689,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 2,
      "squawk": "7470",
      "timestamp": 1664635611,
      "ems": null
    },
    {
      "latitude": 50.566902,
      "longitude": 19.059795,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664635617,
      "ems": null
    },
    {
      "latitude": 50.570663,
      "longitude": 19.059689,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 358,
      "squawk": "7470",
      "timestamp": 1664635625,
      "ems": null
    },
    {
      "latitude": 50.573318,
      "longitude": 19.059401,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 355,
      "squawk": "7470",
      "timestamp": 1664635630,
      "ems": null
    },
    {
      "latitude": 50.575195,
      "longitude": 19.059111,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 354,
      "squawk": "7470",
      "timestamp": 1664635634,
      "ems": null
    },
    {
      "latitude": 50.577003,
      "longitude": 19.058756,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664635638,
      "ems": null
    },
    {
      "latitude": 50.57933,
      "longitude": 19.058161,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664635643,
      "ems": null
    },
    {
      "latitude": 50.581799,
      "longitude": 19.057493,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664635647,
      "ems": null
    },
    {
      "latitude": 50.58329,
      "longitude": 19.057196,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664635650,
      "ems": null
    },
    {
      "latitude": 50.586182,
      "longitude": 19.057304,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 4,
      "squawk": "7470",
      "timestamp": 1664635656,
      "ems": null
    },
    {
      "latitude": 50.587898,
      "longitude": 19.057642,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 9,
      "squawk": "7470",
      "timestamp": 1664635659,
      "ems": null
    },
    {
      "latitude": 50.58934,
      "longitude": 19.0581,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 10,
      "squawk": "7470",
      "timestamp": 1664635662,
      "ems": null
    },
    {
      "latitude": 50.590576,
      "longitude": 19.05846,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 10,
      "squawk": "7470",
      "timestamp": 1664635665,
      "ems": null
    },
    {
      "latitude": 50.592133,
      "longitude": 19.05883,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 10,
      "squawk": "7470",
      "timestamp": 1664635668,
      "ems": null
    },
    {
      "latitude": 50.593765,
      "longitude": 19.059275,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 9,
      "squawk": "7470",
      "timestamp": 1664635671,
      "ems": null
    },
    {
      "latitude": 50.59552,
      "longitude": 19.059689,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 8,
      "squawk": "7470",
      "timestamp": 1664635674,
      "ems": null
    },
    {
      "latitude": 50.59671,
      "longitude": 19.059978,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 8,
      "squawk": "7470",
      "timestamp": 1664635677,
      "ems": null
    },
    {
      "latitude": 50.598465,
      "longitude": 19.060389,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 8,
      "squawk": "7470",
      "timestamp": 1664635680,
      "ems": null
    },
    {
      "latitude": 50.599915,
      "longitude": 19.060774,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 8,
      "squawk": "7470",
      "timestamp": 1664635683,
      "ems": null
    },
    {
      "latitude": 50.603027,
      "longitude": 19.061651,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 13,
      "squawk": "7470",
      "timestamp": 1664635689,
      "ems": null
    },
    {
      "latitude": 50.604378,
      "longitude": 19.062542,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 24,
      "squawk": "7470",
      "timestamp": 1664635692,
      "ems": null
    },
    {
      "latitude": 50.605682,
      "longitude": 19.063654,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 26,
      "squawk": "7470",
      "timestamp": 1664635695,
      "ems": null
    },
    {
      "latitude": 50.60701,
      "longitude": 19.064821,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 31,
      "squawk": "7470",
      "timestamp": 1664635699,
      "ems": null
    },
    {
      "latitude": 50.6082,
      "longitude": 19.06605,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 32,
      "squawk": "7470",
      "timestamp": 1664635701,
      "ems": null
    },
    {
      "latitude": 50.609436,
      "longitude": 19.067278,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 32,
      "squawk": "7470",
      "timestamp": 1664635704,
      "ems": null
    },
    {
      "latitude": 50.610443,
      "longitude": 19.068291,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 33,
      "squawk": "7470",
      "timestamp": 1664635707,
      "ems": null
    },
    {
      "latitude": 50.611954,
      "longitude": 19.069952,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 34,
      "squawk": "7470",
      "timestamp": 1664635710,
      "ems": null
    },
    {
      "latitude": 50.613224,
      "longitude": 19.071375,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 34,
      "squawk": "7470",
      "timestamp": 1664635713,
      "ems": null
    },
    {
      "latitude": 50.614201,
      "longitude": 19.072489,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 36,
      "squawk": "7470",
      "timestamp": 1664635716,
      "ems": null
    },
    {
      "latitude": 50.616074,
      "longitude": 19.074652,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 36,
      "squawk": "7470",
      "timestamp": 1664635720,
      "ems": null
    },
    {
      "latitude": 50.617085,
      "longitude": 19.075903,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 36,
      "squawk": "7470",
      "timestamp": 1664635723,
      "ems": null
    },
    {
      "latitude": 50.618156,
      "longitude": 19.077166,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 37,
      "squawk": "7470",
      "timestamp": 1664635725,
      "ems": null
    },
    {
      "latitude": 50.619461,
      "longitude": 19.078772,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 38,
      "squawk": "7470",
      "timestamp": 1664635729,
      "ems": null
    },
    {
      "latitude": 50.620514,
      "longitude": 19.080072,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 38,
      "squawk": "7470",
      "timestamp": 1664635731,
      "ems": null
    },
    {
      "latitude": 50.62188,
      "longitude": 19.081768,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 38,
      "squawk": "7470",
      "timestamp": 1664635735,
      "ems": null
    },
    {
      "latitude": 50.624348,
      "longitude": 19.084736,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 37,
      "squawk": "7470",
      "timestamp": 1664635740,
      "ems": null
    },
    {
      "latitude": 50.626862,
      "longitude": 19.08778,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 37,
      "squawk": "7470",
      "timestamp": 1664635746,
      "ems": null
    },
    {
      "latitude": 50.629166,
      "longitude": 19.090479,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 35,
      "squawk": "7470",
      "timestamp": 1664635752,
      "ems": null
    },
    {
      "latitude": 50.63203,
      "longitude": 19.093719,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 36,
      "squawk": "7470",
      "timestamp": 1664635759,
      "ems": null
    },
    {
      "latitude": 50.63443,
      "longitude": 19.096552,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 35,
      "squawk": "7470",
      "timestamp": 1664635764,
      "ems": null
    },
    {
      "latitude": 50.637241,
      "longitude": 19.09988,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 37,
      "squawk": "7470",
      "timestamp": 1664635771,
      "ems": null
    },
    {
      "latitude": 50.63974,
      "longitude": 19.102983,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 38,
      "squawk": "7470",
      "timestamp": 1664635777,
      "ems": null
    },
    {
      "latitude": 50.642166,
      "longitude": 19.106092,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 39,
      "squawk": "7470",
      "timestamp": 1664635783,
      "ems": null
    },
    {
      "latitude": 50.64325,
      "longitude": 19.107525,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 40,
      "squawk": "7470",
      "timestamp": 1664635786,
      "ems": null
    },
    {
      "latitude": 50.645737,
      "longitude": 19.110935,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 41,
      "squawk": "7470",
      "timestamp": 1664635792,
      "ems": null
    },
    {
      "latitude": 50.648163,
      "longitude": 19.114187,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 40,
      "squawk": "7470",
      "timestamp": 1664635798,
      "ems": null
    },
    {
      "latitude": 50.650604,
      "longitude": 19.117399,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 39,
      "squawk": "7470",
      "timestamp": 1664635804,
      "ems": null
    },
    {
      "latitude": 50.652969,
      "longitude": 19.120403,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 38,
      "squawk": "7470",
      "timestamp": 1664635810,
      "ems": null
    },
    {
      "latitude": 50.655396,
      "longitude": 19.12351,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 39,
      "squawk": "7470",
      "timestamp": 1664635816,
      "ems": null
    },
    {
      "latitude": 50.657772,
      "longitude": 19.12653,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 39,
      "squawk": "7470",
      "timestamp": 1664635822,
      "ems": null
    },
    {
      "latitude": 50.660339,
      "longitude": 19.129944,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 40,
      "squawk": "7470",
      "timestamp": 1664635829,
      "ems": null
    },
    {
      "latitude": 50.662663,
      "longitude": 19.133062,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 38,
      "squawk": "7470",
      "timestamp": 1664635835,
      "ems": null
    },
    {
      "latitude": 50.665146,
      "longitude": 19.135727,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664635840,
      "ems": null
    },
    {
      "latitude": 50.666519,
      "longitude": 19.136955,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 28,
      "squawk": "7470",
      "timestamp": 1664635843,
      "ems": null
    },
    {
      "latitude": 50.667923,
      "longitude": 19.138109,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664635847,
      "ems": null
    },
    {
      "latitude": 50.66922,
      "longitude": 19.139124,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664635849,
      "ems": null
    },
    {
      "latitude": 50.67062,
      "longitude": 19.140263,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664635852,
      "ems": null
    },
    {
      "latitude": 50.672066,
      "longitude": 19.141464,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 28,
      "squawk": "7470",
      "timestamp": 1664635856,
      "ems": null
    },
    {
      "latitude": 50.673248,
      "longitude": 19.142563,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 28,
      "squawk": "7470",
      "timestamp": 1664635858,
      "ems": null
    },
    {
      "latitude": 50.674763,
      "longitude": 19.143753,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 26,
      "squawk": "7470",
      "timestamp": 1664635862,
      "ems": null
    },
    {
      "latitude": 50.676178,
      "longitude": 19.144791,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 23,
      "squawk": "7470",
      "timestamp": 1664635865,
      "ems": null
    },
    {
      "latitude": 50.677597,
      "longitude": 19.145681,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 22,
      "squawk": "7470",
      "timestamp": 1664635868,
      "ems": null
    },
    {
      "latitude": 50.67886,
      "longitude": 19.146423,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 21,
      "squawk": "7470",
      "timestamp": 1664635870,
      "ems": null
    },
    {
      "latitude": 50.680443,
      "longitude": 19.147415,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664635874,
      "ems": null
    },
    {
      "latitude": 50.683136,
      "longitude": 19.149393,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664635880,
      "ems": null
    },
    {
      "latitude": 50.685799,
      "longitude": 19.151611,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664635886,
      "ems": null
    },
    {
      "latitude": 50.688492,
      "longitude": 19.153847,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 28,
      "squawk": "7470",
      "timestamp": 1664635892,
      "ems": null
    },
    {
      "latitude": 50.690002,
      "longitude": 19.155182,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 29,
      "squawk": "7470",
      "timestamp": 1664635895,
      "ems": null
    },
    {
      "latitude": 50.691376,
      "longitude": 19.15637,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 29,
      "squawk": "7470",
      "timestamp": 1664635898,
      "ems": null
    },
    {
      "latitude": 50.692642,
      "longitude": 19.157562,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664635901,
      "ems": null
    },
    {
      "latitude": 50.693893,
      "longitude": 19.158819,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 31,
      "squawk": "7470",
      "timestamp": 1664635904,
      "ems": null
    },
    {
      "latitude": 50.695313,
      "longitude": 19.160156,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 31,
      "squawk": "7470",
      "timestamp": 1664635907,
      "ems": null
    },
    {
      "latitude": 50.69664,
      "longitude": 19.161493,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 32,
      "squawk": "7470",
      "timestamp": 1664635910,
      "ems": null
    },
    {
      "latitude": 50.697922,
      "longitude": 19.162828,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 33,
      "squawk": "7470",
      "timestamp": 1664635913,
      "ems": null
    },
    {
      "latitude": 50.699299,
      "longitude": 19.164276,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 33,
      "squawk": "7470",
      "timestamp": 1664635916,
      "ems": null
    },
    {
      "latitude": 50.700508,
      "longitude": 19.165497,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 33,
      "squawk": "7470",
      "timestamp": 1664635919,
      "ems": null
    },
    {
      "latitude": 50.703232,
      "longitude": 19.168247,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 32,
      "squawk": "7470",
      "timestamp": 1664635925,
      "ems": null
    },
    {
      "latitude": 50.706188,
      "longitude": 19.171066,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664635931,
      "ems": null
    },
    {
      "latitude": 50.708748,
      "longitude": 19.173431,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664635937,
      "ems": null
    },
    {
      "latitude": 50.711334,
      "longitude": 19.175819,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 31,
      "squawk": "7470",
      "timestamp": 1664635943,
      "ems": null
    },
    {
      "latitude": 50.713577,
      "longitude": 19.178045,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 31,
      "squawk": "7470",
      "timestamp": 1664635949,
      "ems": null
    },
    {
      "latitude": 50.716194,
      "longitude": 19.180603,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 31,
      "squawk": "7470",
      "timestamp": 1664635955,
      "ems": null
    },
    {
      "latitude": 50.71899,
      "longitude": 19.183121,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 29,
      "squawk": "7470",
      "timestamp": 1664635961,
      "ems": null
    },
    {
      "latitude": 50.72155,
      "longitude": 19.185486,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664635967,
      "ems": null
    },
    {
      "latitude": 50.724106,
      "longitude": 19.187994,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 32,
      "squawk": "7470",
      "timestamp": 1664635973,
      "ems": null
    },
    {
      "latitude": 50.726715,
      "longitude": 19.190826,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 35,
      "squawk": "7470",
      "timestamp": 1664635979,
      "ems": null
    },
    {
      "latitude": 50.728161,
      "longitude": 19.192505,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 37,
      "squawk": "7470",
      "timestamp": 1664635983,
      "ems": null
    },
    {
      "latitude": 50.729416,
      "longitude": 19.194006,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 36,
      "squawk": "7470",
      "timestamp": 1664635986,
      "ems": null
    },
    {
      "latitude": 50.730675,
      "longitude": 19.195404,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 34,
      "squawk": "7470",
      "timestamp": 1664635989,
      "ems": null
    },
    {
      "latitude": 50.733215,
      "longitude": 19.197941,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 31,
      "squawk": "7470",
      "timestamp": 1664635995,
      "ems": null
    },
    {
      "latitude": 50.735935,
      "longitude": 19.200668,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 32,
      "squawk": "7470",
      "timestamp": 1664636001,
      "ems": null
    },
    {
      "latitude": 50.738495,
      "longitude": 19.203262,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 33,
      "squawk": "7470",
      "timestamp": 1664636007,
      "ems": null
    },
    {
      "latitude": 50.739845,
      "longitude": 19.204636,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 32,
      "squawk": "7470",
      "timestamp": 1664636010,
      "ems": null
    },
    {
      "latitude": 50.742172,
      "longitude": 19.207077,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 34,
      "squawk": "7470",
      "timestamp": 1664636016,
      "ems": null
    },
    {
      "latitude": 50.744797,
      "longitude": 19.210188,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 38,
      "squawk": "7470",
      "timestamp": 1664636022,
      "ems": null
    },
    {
      "latitude": 50.745708,
      "longitude": 19.211426,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 40,
      "squawk": "7470",
      "timestamp": 1664636025,
      "ems": null
    },
    {
      "latitude": 50.746994,
      "longitude": 19.213083,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 39,
      "squawk": "7470",
      "timestamp": 1664636028,
      "ems": null
    },
    {
      "latitude": 50.749573,
      "longitude": 19.215698,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664636034,
      "ems": null
    },
    {
      "latitude": 50.750931,
      "longitude": 19.216721,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664636037,
      "ems": null
    },
    {
      "latitude": 50.75246,
      "longitude": 19.217834,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 24,
      "squawk": "7470",
      "timestamp": 1664636040,
      "ems": null
    },
    {
      "latitude": 50.753723,
      "longitude": 19.218725,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 24,
      "squawk": "7470",
      "timestamp": 1664636043,
      "ems": null
    },
    {
      "latitude": 50.755188,
      "longitude": 19.219839,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 24,
      "squawk": "7470",
      "timestamp": 1664636046,
      "ems": null
    },
    {
      "latitude": 50.756607,
      "longitude": 19.220879,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664636049,
      "ems": null
    },
    {
      "latitude": 50.758091,
      "longitude": 19.221954,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 25,
      "squawk": "7470",
      "timestamp": 1664636052,
      "ems": null
    },
    {
      "latitude": 50.759674,
      "longitude": 19.223104,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 25,
      "squawk": "7470",
      "timestamp": 1664636055,
      "ems": null
    },
    {
      "latitude": 50.761024,
      "longitude": 19.224167,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 25,
      "squawk": "7470",
      "timestamp": 1664636058,
      "ems": null
    },
    {
      "latitude": 50.763866,
      "longitude": 19.226379,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 25,
      "squawk": "7470",
      "timestamp": 1664636064,
      "ems": null
    },
    {
      "latitude": 50.76675,
      "longitude": 19.228592,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 26,
      "squawk": "7470",
      "timestamp": 1664636071,
      "ems": null
    },
    {
      "latitude": 50.769497,
      "longitude": 19.230881,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 28,
      "squawk": "7470",
      "timestamp": 1664636076,
      "ems": null
    },
    {
      "latitude": 50.770844,
      "longitude": 19.232086,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664636079,
      "ems": null
    },
    {
      "latitude": 50.772079,
      "longitude": 19.233349,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 31,
      "squawk": "7470",
      "timestamp": 1664636082,
      "ems": null
    },
    {
      "latitude": 50.77359,
      "longitude": 19.234833,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 32,
      "squawk": "7470",
      "timestamp": 1664636086,
      "ems": null
    },
    {
      "latitude": 50.774944,
      "longitude": 19.236221,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 32,
      "squawk": "7470",
      "timestamp": 1664636089,
      "ems": null
    },
    {
      "latitude": 50.776295,
      "longitude": 19.237595,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 32,
      "squawk": "7470",
      "timestamp": 1664636092,
      "ems": null
    },
    {
      "latitude": 50.777664,
      "longitude": 19.238991,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 33,
      "squawk": "7470",
      "timestamp": 1664636095,
      "ems": null
    },
    {
      "latitude": 50.778854,
      "longitude": 19.240189,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 33,
      "squawk": "7470",
      "timestamp": 1664636098,
      "ems": null
    },
    {
      "latitude": 50.780205,
      "longitude": 19.241562,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 32,
      "squawk": "7470",
      "timestamp": 1664636101,
      "ems": null
    },
    {
      "latitude": 50.782928,
      "longitude": 19.244186,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664636107,
      "ems": null
    },
    {
      "latitude": 50.785629,
      "longitude": 19.24671,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664636113,
      "ems": null
    },
    {
      "latitude": 50.788513,
      "longitude": 19.24931,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 29,
      "squawk": "7470",
      "timestamp": 1664636119,
      "ems": null
    },
    {
      "latitude": 50.791168,
      "longitude": 19.251684,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 29,
      "squawk": "7470",
      "timestamp": 1664636125,
      "ems": null
    },
    {
      "latitude": 50.794079,
      "longitude": 19.254303,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 29,
      "squawk": "7470",
      "timestamp": 1664636131,
      "ems": null
    },
    {
      "latitude": 50.796936,
      "longitude": 19.256805,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 28,
      "squawk": "7470",
      "timestamp": 1664636137,
      "ems": null
    },
    {
      "latitude": 50.799618,
      "longitude": 19.259186,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 29,
      "squawk": "7470",
      "timestamp": 1664636143,
      "ems": null
    },
    {
      "latitude": 50.802383,
      "longitude": 19.261705,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664636149,
      "ems": null
    },
    {
      "latitude": 50.80497,
      "longitude": 19.264145,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664636155,
      "ems": null
    },
    {
      "latitude": 50.807877,
      "longitude": 19.266827,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 29,
      "squawk": "7470",
      "timestamp": 1664636161,
      "ems": null
    },
    {
      "latitude": 50.810623,
      "longitude": 19.269278,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 29,
      "squawk": "7470",
      "timestamp": 1664636167,
      "ems": null
    },
    {
      "latitude": 50.813507,
      "longitude": 19.271875,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 29,
      "squawk": "7470",
      "timestamp": 1664636173,
      "ems": null
    },
    {
      "latitude": 50.816254,
      "longitude": 19.274324,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664636179,
      "ems": null
    },
    {
      "latitude": 50.818954,
      "longitude": 19.27685,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664636185,
      "ems": null
    },
    {
      "latitude": 50.821609,
      "longitude": 19.279224,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664636191,
      "ems": null
    },
    {
      "latitude": 50.824291,
      "longitude": 19.281845,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 31,
      "squawk": "7470",
      "timestamp": 1664636197,
      "ems": null
    },
    {
      "latitude": 50.826942,
      "longitude": 19.284515,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 34,
      "squawk": "7470",
      "timestamp": 1664636203,
      "ems": null
    },
    {
      "latitude": 50.828106,
      "longitude": 19.285812,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 36,
      "squawk": "7470",
      "timestamp": 1664636206,
      "ems": null
    },
    {
      "latitude": 50.829269,
      "longitude": 19.287338,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 40,
      "squawk": "7470",
      "timestamp": 1664636209,
      "ems": null
    },
    {
      "latitude": 50.830399,
      "longitude": 19.289097,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 45,
      "squawk": "7470",
      "timestamp": 1664636212,
      "ems": null
    },
    {
      "latitude": 50.831318,
      "longitude": 19.290771,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 49,
      "squawk": "7470",
      "timestamp": 1664636215,
      "ems": null
    },
    {
      "latitude": 50.832249,
      "longitude": 19.292679,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 52,
      "squawk": "7470",
      "timestamp": 1664636218,
      "ems": null
    },
    {
      "latitude": 50.833134,
      "longitude": 19.29451,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 53,
      "squawk": "7470",
      "timestamp": 1664636221,
      "ems": null
    },
    {
      "latitude": 50.834015,
      "longitude": 19.296371,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 54,
      "squawk": "7470",
      "timestamp": 1664636224,
      "ems": null
    },
    {
      "latitude": 50.834976,
      "longitude": 19.298599,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 55,
      "squawk": "7470",
      "timestamp": 1664636228,
      "ems": null
    },
    {
      "latitude": 50.835743,
      "longitude": 19.300385,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 56,
      "squawk": "7470",
      "timestamp": 1664636230,
      "ems": null
    },
    {
      "latitude": 50.836674,
      "longitude": 19.302597,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 56,
      "squawk": "7470",
      "timestamp": 1664636234,
      "ems": null
    },
    {
      "latitude": 50.837418,
      "longitude": 19.304504,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 57,
      "squawk": "7470",
      "timestamp": 1664636237,
      "ems": null
    },
    {
      "latitude": 50.838257,
      "longitude": 19.306564,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 59,
      "squawk": "7470",
      "timestamp": 1664636239,
      "ems": null
    },
    {
      "latitude": 50.83905,
      "longitude": 19.308769,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 59,
      "squawk": "7470",
      "timestamp": 1664636243,
      "ems": null
    },
    {
      "latitude": 50.83984,
      "longitude": 19.31076,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 57,
      "squawk": "7470",
      "timestamp": 1664636246,
      "ems": null
    },
    {
      "latitude": 50.841705,
      "longitude": 19.31493,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 53,
      "squawk": "7470",
      "timestamp": 1664636252,
      "ems": null
    },
    {
      "latitude": 50.843517,
      "longitude": 19.318924,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 55,
      "squawk": "7470",
      "timestamp": 1664636258,
      "ems": null
    },
    {
      "latitude": 50.8451,
      "longitude": 19.322662,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 55,
      "squawk": "7470",
      "timestamp": 1664636263,
      "ems": null
    },
    {
      "latitude": 50.846786,
      "longitude": 19.326658,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 56,
      "squawk": "7470",
      "timestamp": 1664636270,
      "ems": null
    },
    {
      "latitude": 50.848618,
      "longitude": 19.330891,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 55,
      "squawk": "7470",
      "timestamp": 1664636276,
      "ems": null
    },
    {
      "latitude": 50.850266,
      "longitude": 19.334898,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 57,
      "squawk": "7470",
      "timestamp": 1664636282,
      "ems": null
    },
    {
      "latitude": 50.851959,
      "longitude": 19.339277,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 58,
      "squawk": "7470",
      "timestamp": 1664636288,
      "ems": null
    },
    {
      "latitude": 50.853432,
      "longitude": 19.343338,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 60,
      "squawk": "7470",
      "timestamp": 1664636294,
      "ems": null
    },
    {
      "latitude": 50.854156,
      "longitude": 19.34544,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 62,
      "squawk": "7470",
      "timestamp": 1664636297,
      "ems": null
    },
    {
      "latitude": 50.854889,
      "longitude": 19.347591,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 62,
      "squawk": "7470",
      "timestamp": 1664636300,
      "ems": null
    },
    {
      "latitude": 50.855572,
      "longitude": 19.349823,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 63,
      "squawk": "7470",
      "timestamp": 1664636303,
      "ems": null
    },
    {
      "latitude": 50.856354,
      "longitude": 19.352119,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 61,
      "squawk": "7470",
      "timestamp": 1664636306,
      "ems": null
    },
    {
      "latitude": 50.857948,
      "longitude": 19.356308,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 56,
      "squawk": "7470",
      "timestamp": 1664636312,
      "ems": null
    },
    {
      "latitude": 50.858784,
      "longitude": 19.358139,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 54,
      "squawk": "7470",
      "timestamp": 1664636315,
      "ems": null
    },
    {
      "latitude": 50.859764,
      "longitude": 19.360199,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 52,
      "squawk": "7470",
      "timestamp": 1664636318,
      "ems": null
    },
    {
      "latitude": 50.860649,
      "longitude": 19.361954,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 52,
      "squawk": "7470",
      "timestamp": 1664636321,
      "ems": null
    },
    {
      "latitude": 50.861664,
      "longitude": 19.364071,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 51,
      "squawk": "7470",
      "timestamp": 1664636324,
      "ems": null
    },
    {
      "latitude": 50.862511,
      "longitude": 19.365692,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 50,
      "squawk": "7470",
      "timestamp": 1664636327,
      "ems": null
    },
    {
      "latitude": 50.863441,
      "longitude": 19.367447,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 49,
      "squawk": "7470",
      "timestamp": 1664636330,
      "ems": null
    },
    {
      "latitude": 50.864502,
      "longitude": 19.369268,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 46,
      "squawk": "7470",
      "timestamp": 1664636333,
      "ems": null
    },
    {
      "latitude": 50.865582,
      "longitude": 19.370956,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 44,
      "squawk": "7470",
      "timestamp": 1664636336,
      "ems": null
    },
    {
      "latitude": 50.866653,
      "longitude": 19.372559,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 43,
      "squawk": "7470",
      "timestamp": 1664636339,
      "ems": null
    },
    {
      "latitude": 50.867752,
      "longitude": 19.374166,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 42,
      "squawk": "7470",
      "timestamp": 1664636342,
      "ems": null
    },
    {
      "latitude": 50.868896,
      "longitude": 19.375652,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 37,
      "squawk": "7470",
      "timestamp": 1664636345,
      "ems": null
    },
    {
      "latitude": 50.870178,
      "longitude": 19.376913,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 31,
      "squawk": "7470",
      "timestamp": 1664636348,
      "ems": null
    },
    {
      "latitude": 50.871635,
      "longitude": 19.378128,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 26,
      "squawk": "7470",
      "timestamp": 1664636351,
      "ems": null
    },
    {
      "latitude": 50.872982,
      "longitude": 19.379044,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664636354,
      "ems": null
    },
    {
      "latitude": 50.874252,
      "longitude": 19.379734,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 19,
      "squawk": "7470",
      "timestamp": 1664636357,
      "ems": null
    },
    {
      "latitude": 50.875778,
      "longitude": 19.380493,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664636360,
      "ems": null
    },
    {
      "latitude": 50.87722,
      "longitude": 19.381027,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 13,
      "squawk": "7470",
      "timestamp": 1664636363,
      "ems": null
    },
    {
      "latitude": 50.878601,
      "longitude": 19.381516,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 11,
      "squawk": "7470",
      "timestamp": 1664636366,
      "ems": null
    },
    {
      "latitude": 50.880066,
      "longitude": 19.381962,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 10,
      "squawk": "7470",
      "timestamp": 1664636369,
      "ems": null
    },
    {
      "latitude": 50.881596,
      "longitude": 19.382401,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 9,
      "squawk": "7470",
      "timestamp": 1664636373,
      "ems": null
    },
    {
      "latitude": 50.882996,
      "longitude": 19.382704,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 9,
      "squawk": "7470",
      "timestamp": 1664636375,
      "ems": null
    },
    {
      "latitude": 50.884529,
      "longitude": 19.383087,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 9,
      "squawk": "7470",
      "timestamp": 1664636378,
      "ems": null
    },
    {
      "latitude": 50.886017,
      "longitude": 19.383469,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 9,
      "squawk": "7470",
      "timestamp": 1664636382,
      "ems": null
    },
    {
      "latitude": 50.887367,
      "longitude": 19.38385,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 10,
      "squawk": "7470",
      "timestamp": 1664636384,
      "ems": null
    },
    {
      "latitude": 50.888905,
      "longitude": 19.384308,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 12,
      "squawk": "7470",
      "timestamp": 1664636388,
      "ems": null
    },
    {
      "latitude": 50.891693,
      "longitude": 19.385376,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 13,
      "squawk": "7470",
      "timestamp": 1664636393,
      "ems": null
    },
    {
      "latitude": 50.894623,
      "longitude": 19.386267,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 10,
      "squawk": "7470",
      "timestamp": 1664636400,
      "ems": null
    },
    {
      "latitude": 50.897655,
      "longitude": 19.387131,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 9,
      "squawk": "7470",
      "timestamp": 1664636406,
      "ems": null
    },
    {
      "latitude": 50.900299,
      "longitude": 19.387825,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 9,
      "squawk": "7470",
      "timestamp": 1664636411,
      "ems": null
    },
    {
      "latitude": 50.90464,
      "longitude": 19.388885,
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
      "heading": 8,
      "squawk": "7470",
      "timestamp": 1664636420,
      "ems": null
    },
    {
      "latitude": 50.907715,
      "longitude": 19.389606,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 8,
      "squawk": "7470",
      "timestamp": 1664636427,
      "ems": null
    },
    {
      "latitude": 50.910645,
      "longitude": 19.390259,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 8,
      "squawk": "7470",
      "timestamp": 1664636433,
      "ems": null
    },
    {
      "latitude": 50.913483,
      "longitude": 19.391092,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 11,
      "squawk": "7470",
      "timestamp": 1664636439,
      "ems": null
    },
    {
      "latitude": 50.916462,
      "longitude": 19.39209,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 12,
      "squawk": "7470",
      "timestamp": 1664636445,
      "ems": null
    },
    {
      "latitude": 50.917908,
      "longitude": 19.392624,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 14,
      "squawk": "7470",
      "timestamp": 1664636448,
      "ems": null
    },
    {
      "latitude": 50.919434,
      "longitude": 19.393318,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664636451,
      "ems": null
    },
    {
      "latitude": 50.920609,
      "longitude": 19.393921,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664636454,
      "ems": null
    },
    {
      "latitude": 50.922237,
      "longitude": 19.394836,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 20,
      "squawk": "7470",
      "timestamp": 1664636457,
      "ems": null
    },
    {
      "latitude": 50.923691,
      "longitude": 19.395695,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664636460,
      "ems": null
    },
    {
      "latitude": 50.925201,
      "longitude": 19.39666,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 21,
      "squawk": "7470",
      "timestamp": 1664636463,
      "ems": null
    },
    {
      "latitude": 50.926437,
      "longitude": 19.397402,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664636466,
      "ems": null
    },
    {
      "latitude": 50.927963,
      "longitude": 19.398422,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 22,
      "squawk": "7470",
      "timestamp": 1664636469,
      "ems": null
    },
    {
      "latitude": 50.929359,
      "longitude": 19.399338,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 23,
      "squawk": "7470",
      "timestamp": 1664636472,
      "ems": null
    },
    {
      "latitude": 50.930695,
      "longitude": 19.400297,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 23,
      "squawk": "7470",
      "timestamp": 1664636475,
      "ems": null
    },
    {
      "latitude": 50.932022,
      "longitude": 19.401262,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 24,
      "squawk": "7470",
      "timestamp": 1664636478,
      "ems": null
    },
    {
      "latitude": 50.933441,
      "longitude": 19.402374,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 26,
      "squawk": "7470",
      "timestamp": 1664636481,
      "ems": null
    },
    {
      "latitude": 50.934944,
      "longitude": 19.403534,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664636484,
      "ems": null
    },
    {
      "latitude": 50.936108,
      "longitude": 19.404526,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664636487,
      "ems": null
    },
    {
      "latitude": 50.937378,
      "longitude": 19.405567,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664636490,
      "ems": null
    },
    {
      "latitude": 50.938889,
      "longitude": 19.406755,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 26,
      "squawk": "7470",
      "timestamp": 1664636493,
      "ems": null
    },
    {
      "latitude": 50.941647,
      "longitude": 19.408264,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664636499,
      "ems": null
    },
    {
      "latitude": 50.943146,
      "longitude": 19.408686,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 9,
      "squawk": "7470",
      "timestamp": 1664636502,
      "ems": null
    },
    {
      "latitude": 50.944675,
      "longitude": 19.408951,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 4,
      "squawk": "7470",
      "timestamp": 1664636505,
      "ems": null
    },
    {
      "latitude": 50.945839,
      "longitude": 19.409027,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 3,
      "squawk": "7470",
      "timestamp": 1664636508,
      "ems": null
    },
    {
      "latitude": 50.947605,
      "longitude": 19.409256,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 4,
      "squawk": "7470",
      "timestamp": 1664636511,
      "ems": null
    },
    {
      "latitude": 50.949051,
      "longitude": 19.409428,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 4,
      "squawk": "7470",
      "timestamp": 1664636514,
      "ems": null
    },
    {
      "latitude": 50.950607,
      "longitude": 19.409576,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 3,
      "squawk": "7470",
      "timestamp": 1664636517,
      "ems": null
    },
    {
      "latitude": 50.95203,
      "longitude": 19.409714,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 3,
      "squawk": "7470",
      "timestamp": 1664636520,
      "ems": null
    },
    {
      "latitude": 50.9534,
      "longitude": 19.409798,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 2,
      "squawk": "7470",
      "timestamp": 1664636523,
      "ems": null
    },
    {
      "latitude": 50.955009,
      "longitude": 19.409943,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 2,
      "squawk": "7470",
      "timestamp": 1664636526,
      "ems": null
    },
    {
      "latitude": 50.956497,
      "longitude": 19.410019,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 2,
      "squawk": "7470",
      "timestamp": 1664636529,
      "ems": null
    },
    {
      "latitude": 50.959579,
      "longitude": 19.410244,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664636536,
      "ems": null
    },
    {
      "latitude": 50.962551,
      "longitude": 19.4104,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664636541,
      "ems": null
    },
    {
      "latitude": 50.965576,
      "longitude": 19.410467,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664636547,
      "ems": null
    },
    {
      "latitude": 50.968506,
      "longitude": 19.410542,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664636553,
      "ems": null
    },
    {
      "latitude": 50.971581,
      "longitude": 19.410629,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664636559,
      "ems": null
    },
    {
      "latitude": 50.974823,
      "longitude": 19.410688,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664636566,
      "ems": null
    },
    {
      "latitude": 50.978889,
      "longitude": 19.411011,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 3,
      "squawk": "7470",
      "timestamp": 1664636574,
      "ems": null
    },
    {
      "latitude": 50.982754,
      "longitude": 19.411392,
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
      "heading": 3,
      "squawk": "7470",
      "timestamp": 1664636581,
      "ems": null
    },
    {
      "latitude": 50.987225,
      "longitude": 19.41185,
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
      "heading": 3,
      "squawk": "7470",
      "timestamp": 1664636590,
      "ems": null
    },
    {
      "latitude": 50.992035,
      "longitude": 19.412693,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 4,
      "squawk": "7470",
      "timestamp": 1664636600,
      "ems": null
    },
    {
      "latitude": 50.994534,
      "longitude": 19.413986,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 19,
      "squawk": "7470",
      "timestamp": 1664636605,
      "ems": null
    },
    {
      "latitude": 50.996578,
      "longitude": 19.415283,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 21,
      "squawk": "7470",
      "timestamp": 1664636610,
      "ems": null
    },
    {
      "latitude": 50.998947,
      "longitude": 19.416925,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 25,
      "squawk": "7470",
      "timestamp": 1664636615,
      "ems": null
    },
    {
      "latitude": 51.001423,
      "longitude": 19.418793,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 25,
      "squawk": "7470",
      "timestamp": 1664636621,
      "ems": null
    },
    {
      "latitude": 51.003616,
      "longitude": 19.420488,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 25,
      "squawk": "7470",
      "timestamp": 1664636626,
      "ems": null
    },
    {
      "latitude": 51.005264,
      "longitude": 19.421824,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 26,
      "squawk": "7470",
      "timestamp": 1664636630,
      "ems": null
    },
    {
      "latitude": 51.006866,
      "longitude": 19.423141,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664636634,
      "ems": null
    },
    {
      "latitude": 51.009796,
      "longitude": 19.425535,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664636640,
      "ems": null
    },
    {
      "latitude": 51.013184,
      "longitude": 19.428356,
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
      "heading": 28,
      "squawk": "7470",
      "timestamp": 1664636648,
      "ems": null
    },
    {
      "latitude": 51.017109,
      "longitude": 19.431839,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 29,
      "squawk": "7470",
      "timestamp": 1664636657,
      "ems": null
    },
    {
      "latitude": 51.021515,
      "longitude": 19.435854,
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
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664636667,
      "ems": null
    },
    {
      "latitude": 51.026184,
      "longitude": 19.440308,
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
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664636678,
      "ems": null
    },
    {
      "latitude": 51.030472,
      "longitude": 19.444351,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664636688,
      "ems": null
    },
    {
      "latitude": 51.033234,
      "longitude": 19.446915,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 31,
      "squawk": "7470",
      "timestamp": 1664636694,
      "ems": null
    },
    {
      "latitude": 51.039825,
      "longitude": 19.45315,
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
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664636709,
      "ems": null
    },
    {
      "latitude": 51.043808,
      "longitude": 19.456564,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 29,
      "squawk": "7470",
      "timestamp": 1664636718,
      "ems": null
    },
    {
      "latitude": 51.046646,
      "longitude": 19.458941,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664636725,
      "ems": null
    },
    {
      "latitude": 51.048904,
      "longitude": 19.460754,
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
      "heading": 25,
      "squawk": "7470",
      "timestamp": 1664636730,
      "ems": null
    },
    {
      "latitude": 51.05365,
      "longitude": 19.464211,
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664636740,
      "ems": null
    },
    {
      "latitude": 51.057842,
      "longitude": 19.467926,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664636750,
      "ems": null
    },
    {
      "latitude": 51.062592,
      "longitude": 19.47113,
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
      "heading": 22,
      "squawk": "7470",
      "timestamp": 1664636761,
      "ems": null
    },
    {
      "latitude": 51.065292,
      "longitude": 19.472961,
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
      "heading": 22,
      "squawk": "7470",
      "timestamp": 1664636767,
      "ems": null
    },
    {
      "latitude": 51.067154,
      "longitude": 19.474157,
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
      "heading": 23,
      "squawk": "7470",
      "timestamp": 1664636772,
      "ems": null
    },
    {
      "latitude": 51.070179,
      "longitude": 19.4767,
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
      "heading": 28,
      "squawk": "7470",
      "timestamp": 1664636778,
      "ems": null
    },
    {
      "latitude": 51.071869,
      "longitude": 19.478167,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 28,
      "squawk": "7470",
      "timestamp": 1664636782,
      "ems": null
    },
    {
      "latitude": 51.076416,
      "longitude": 19.481735,
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
      "heading": 26,
      "squawk": "7470",
      "timestamp": 1664636792,
      "ems": null
    },
    {
      "latitude": 51.078606,
      "longitude": 19.48349,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 26,
      "squawk": "7470",
      "timestamp": 1664636797,
      "ems": null
    },
    {
      "latitude": 51.083084,
      "longitude": 19.487,
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
      "heading": 25,
      "squawk": "7470",
      "timestamp": 1664636807,
      "ems": null
    },
    {
      "latitude": 51.087936,
      "longitude": 19.490488,
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
      "heading": 24,
      "squawk": "7470",
      "timestamp": 1664636818,
      "ems": null
    },
    {
      "latitude": 51.09256,
      "longitude": 19.4942,
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664636828,
      "ems": null
    },
    {
      "latitude": 51.096313,
      "longitude": 19.497393,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 29,
      "squawk": "7470",
      "timestamp": 1664636837,
      "ems": null
    },
    {
      "latitude": 51.097832,
      "longitude": 19.498825,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664636842,
      "ems": null
    },
    {
      "latitude": 51.102627,
      "longitude": 19.503403,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 31,
      "squawk": "7470",
      "timestamp": 1664636852,
      "ems": null
    },
    {
      "latitude": 51.1077,
      "longitude": 19.508362,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 31,
      "squawk": "7470",
      "timestamp": 1664636863,
      "ems": null
    },
    {
      "latitude": 51.111786,
      "longitude": 19.512238,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 29,
      "squawk": "7470",
      "timestamp": 1664636873,
      "ems": null
    },
    {
      "latitude": 51.115402,
      "longitude": 19.51543,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 28,
      "squawk": "7470",
      "timestamp": 1664636881,
      "ems": null
    },
    {
      "latitude": 51.120361,
      "longitude": 19.519806,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 28,
      "squawk": "7470",
      "timestamp": 1664636892,
      "ems": null
    },
    {
      "latitude": 51.123917,
      "longitude": 19.522779,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664636900,
      "ems": null
    },
    {
      "latitude": 51.127483,
      "longitude": 19.525757,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 28,
      "squawk": "7470",
      "timestamp": 1664636910,
      "ems": null
    },
    {
      "latitude": 51.132931,
      "longitude": 19.530182,
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
      "heading": 24,
      "squawk": "7470",
      "timestamp": 1664636921,
      "ems": null
    },
    {
      "latitude": 51.136688,
      "longitude": 19.532949,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 23,
      "squawk": "7470",
      "timestamp": 1664636929,
      "ems": null
    },
    {
      "latitude": 51.1381,
      "longitude": 19.533844,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 22,
      "squawk": "7470",
      "timestamp": 1664636932,
      "ems": null
    },
    {
      "latitude": 51.138931,
      "longitude": 19.534433,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 22,
      "squawk": "7470",
      "timestamp": 1664636934,
      "ems": null
    },
    {
      "latitude": 51.141914,
      "longitude": 19.536438,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 22,
      "squawk": "7470",
      "timestamp": 1664636940,
      "ems": null
    },
    {
      "latitude": 51.146385,
      "longitude": 19.539566,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 26,
      "squawk": "7470",
      "timestamp": 1664636950,
      "ems": null
    },
    {
      "latitude": 51.148991,
      "longitude": 19.541779,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 28,
      "squawk": "7470",
      "timestamp": 1664636956,
      "ems": null
    },
    {
      "latitude": 51.150192,
      "longitude": 19.542747,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664636959,
      "ems": null
    },
    {
      "latitude": 51.152618,
      "longitude": 19.544678,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 25,
      "squawk": "7470",
      "timestamp": 1664636965,
      "ems": null
    },
    {
      "latitude": 51.155323,
      "longitude": 19.546661,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 25,
      "squawk": "7470",
      "timestamp": 1664636971,
      "ems": null
    },
    {
      "latitude": 51.15802,
      "longitude": 19.548761,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 26,
      "squawk": "7470",
      "timestamp": 1664636977,
      "ems": null
    },
    {
      "latitude": 51.160957,
      "longitude": 19.551239,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 26,
      "squawk": "7470",
      "timestamp": 1664636984,
      "ems": null
    },
    {
      "latitude": 51.162918,
      "longitude": 19.553066,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664636988,
      "ems": null
    },
    {
      "latitude": 51.16552,
      "longitude": 19.555283,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664636994,
      "ems": null
    },
    {
      "latitude": 51.168217,
      "longitude": 19.55719,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 22,
      "squawk": "7470",
      "timestamp": 1664637000,
      "ems": null
    },
    {
      "latitude": 51.171387,
      "longitude": 19.559301,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664637008,
      "ems": null
    },
    {
      "latitude": 51.174088,
      "longitude": 19.561008,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 20,
      "squawk": "7470",
      "timestamp": 1664637014,
      "ems": null
    },
    {
      "latitude": 51.175434,
      "longitude": 19.561768,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 19,
      "squawk": "7470",
      "timestamp": 1664637017,
      "ems": null
    },
    {
      "latitude": 51.176788,
      "longitude": 19.56242,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 18,
      "squawk": "7470",
      "timestamp": 1664637019,
      "ems": null
    },
    {
      "latitude": 51.178116,
      "longitude": 19.563087,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 16,
      "squawk": "7470",
      "timestamp": 1664637022,
      "ems": null
    },
    {
      "latitude": 51.179668,
      "longitude": 19.563904,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 18,
      "squawk": "7470",
      "timestamp": 1664637025,
      "ems": null
    },
    {
      "latitude": 51.182373,
      "longitude": 19.565388,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664637031,
      "ems": null
    },
    {
      "latitude": 51.185303,
      "longitude": 19.567261,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 22,
      "squawk": "7470",
      "timestamp": 1664637038,
      "ems": null
    },
    {
      "latitude": 51.188232,
      "longitude": 19.569248,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 24,
      "squawk": "7470",
      "timestamp": 1664637044,
      "ems": null
    },
    {
      "latitude": 51.189743,
      "longitude": 19.570362,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 24,
      "squawk": "7470",
      "timestamp": 1664637047,
      "ems": null
    },
    {
      "latitude": 51.190796,
      "longitude": 19.571152,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 24,
      "squawk": "7470",
      "timestamp": 1664637049,
      "ems": null
    },
    {
      "latitude": 51.192471,
      "longitude": 19.572296,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664637053,
      "ems": null
    },
    {
      "latitude": 51.196335,
      "longitude": 19.575043,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 24,
      "squawk": "7470",
      "timestamp": 1664637061,
      "ems": null
    },
    {
      "latitude": 51.198196,
      "longitude": 19.576492,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 26,
      "squawk": "7470",
      "timestamp": 1664637065,
      "ems": null
    },
    {
      "latitude": 51.200897,
      "longitude": 19.578705,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664637071,
      "ems": null
    },
    {
      "latitude": 51.203644,
      "longitude": 19.580994,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664637077,
      "ems": null
    },
    {
      "latitude": 51.206406,
      "longitude": 19.583204,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664637083,
      "ems": null
    },
    {
      "latitude": 51.209091,
      "longitude": 19.585266,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 24,
      "squawk": "7470",
      "timestamp": 1664637089,
      "ems": null
    },
    {
      "latitude": 51.212128,
      "longitude": 19.587435,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 23,
      "squawk": "7470",
      "timestamp": 1664637095,
      "ems": null
    },
    {
      "latitude": 51.213558,
      "longitude": 19.588394,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 22,
      "squawk": "7470",
      "timestamp": 1664637098,
      "ems": null
    },
    {
      "latitude": 51.21492,
      "longitude": 19.589216,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 21,
      "squawk": "7470",
      "timestamp": 1664637101,
      "ems": null
    },
    {
      "latitude": 51.216431,
      "longitude": 19.590107,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 20,
      "squawk": "7470",
      "timestamp": 1664637105,
      "ems": null
    },
    {
      "latitude": 51.217758,
      "longitude": 19.590923,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664637107,
      "ems": null
    },
    {
      "latitude": 51.219269,
      "longitude": 19.591816,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "7470",
      "timestamp": 1664637111,
      "ems": null
    },
    {
      "latitude": 51.220596,
      "longitude": 19.592484,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 18,
      "squawk": "7470",
      "timestamp": 1664637113,
      "ems": null
    },
    {
      "latitude": 51.222172,
      "longitude": 19.593353,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 18,
      "squawk": "7470",
      "timestamp": 1664637117,
      "ems": null
    },
    {
      "latitude": 51.223526,
      "longitude": 19.594042,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 17,
      "squawk": "7470",
      "timestamp": 1664637119,
      "ems": null
    },
    {
      "latitude": 51.224991,
      "longitude": 19.594563,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 11,
      "squawk": "7470",
      "timestamp": 1664637122,
      "ems": null
    },
    {
      "latitude": 51.226501,
      "longitude": 19.594879,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 4,
      "squawk": "7470",
      "timestamp": 1664637126,
      "ems": null
    },
    {
      "latitude": 51.227737,
      "longitude": 19.594933,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664637128,
      "ems": null
    },
    {
      "latitude": 51.229477,
      "longitude": 19.594858,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 356,
      "squawk": "7470",
      "timestamp": 1664637132,
      "ems": null
    },
    {
      "latitude": 51.230877,
      "longitude": 19.59465,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 354,
      "squawk": "7470",
      "timestamp": 1664637135,
      "ems": null
    },
    {
      "latitude": 51.232319,
      "longitude": 19.594345,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637138,
      "ems": null
    },
    {
      "latitude": 51.233765,
      "longitude": 19.59404,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637141,
      "ems": null
    },
    {
      "latitude": 51.235382,
      "longitude": 19.59367,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637144,
      "ems": null
    },
    {
      "latitude": 51.236893,
      "longitude": 19.5933,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664637147,
      "ems": null
    },
    {
      "latitude": 51.238186,
      "longitude": 19.592896,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664637149,
      "ems": null
    },
    {
      "latitude": 51.239822,
      "longitude": 19.592558,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664637153,
      "ems": null
    },
    {
      "latitude": 51.241287,
      "longitude": 19.592112,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664637156,
      "ems": null
    },
    {
      "latitude": 51.242657,
      "longitude": 19.591751,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664637159,
      "ems": null
    },
    {
      "latitude": 51.244099,
      "longitude": 19.591293,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 348,
      "squawk": "7470",
      "timestamp": 1664637162,
      "ems": null
    },
    {
      "latitude": 51.24559,
      "longitude": 19.590776,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 346,
      "squawk": "7470",
      "timestamp": 1664637165,
      "ems": null
    },
    {
      "latitude": 51.246937,
      "longitude": 19.590149,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 344,
      "squawk": "7470",
      "timestamp": 1664637168,
      "ems": null
    },
    {
      "latitude": 51.248383,
      "longitude": 19.589588,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 346,
      "squawk": "7470",
      "timestamp": 1664637171,
      "ems": null
    },
    {
      "latitude": 51.251175,
      "longitude": 19.588623,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 348,
      "squawk": "7470",
      "timestamp": 1664637177,
      "ems": null
    },
    {
      "latitude": 51.254013,
      "longitude": 19.587708,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 348,
      "squawk": "7470",
      "timestamp": 1664637182,
      "ems": null
    },
    {
      "latitude": 51.256805,
      "longitude": 19.586916,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664637188,
      "ems": null
    },
    {
      "latitude": 51.259827,
      "longitude": 19.5861,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664637194,
      "ems": null
    },
    {
      "latitude": 51.261429,
      "longitude": 19.585728,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637198,
      "ems": null
    },
    {
      "latitude": 51.262711,
      "longitude": 19.58543,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637200,
      "ems": null
    },
    {
      "latitude": 51.26593,
      "longitude": 19.584732,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637207,
      "ems": null
    },
    {
      "latitude": 51.267376,
      "longitude": 19.584503,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664637210,
      "ems": null
    },
    {
      "latitude": 51.270073,
      "longitude": 19.583969,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664637215,
      "ems": null
    },
    {
      "latitude": 51.273239,
      "longitude": 19.583359,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664637222,
      "ems": null
    },
    {
      "latitude": 51.276352,
      "longitude": 19.582684,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637228,
      "ems": null
    },
    {
      "latitude": 51.278687,
      "longitude": 19.582214,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637233,
      "ems": null
    },
    {
      "latitude": 51.282131,
      "longitude": 19.581528,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664637240,
      "ems": null
    },
    {
      "latitude": 51.284832,
      "longitude": 19.580994,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637246,
      "ems": null
    },
    {
      "latitude": 51.288368,
      "longitude": 19.580154,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637252,
      "ems": null
    },
    {
      "latitude": 51.291229,
      "longitude": 19.579493,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637258,
      "ems": null
    },
    {
      "latitude": 51.294296,
      "longitude": 19.578751,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637264,
      "ems": null
    },
    {
      "latitude": 51.296906,
      "longitude": 19.578156,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637269,
      "ems": null
    },
    {
      "latitude": 51.300385,
      "longitude": 19.577339,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637276,
      "ems": null
    },
    {
      "latitude": 51.303406,
      "longitude": 19.576645,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637282,
      "ems": null
    },
    {
      "latitude": 51.306061,
      "longitude": 19.576078,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637287,
      "ems": null
    },
    {
      "latitude": 51.309311,
      "longitude": 19.575262,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637294,
      "ems": null
    },
    {
      "latitude": 51.312286,
      "longitude": 19.574593,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637300,
      "ems": null
    },
    {
      "latitude": 51.315308,
      "longitude": 19.573925,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637306,
      "ems": null
    },
    {
      "latitude": 51.318348,
      "longitude": 19.573288,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664637312,
      "ems": null
    },
    {
      "latitude": 51.321304,
      "longitude": 19.572737,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637318,
      "ems": null
    },
    {
      "latitude": 51.324402,
      "longitude": 19.571991,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637324,
      "ems": null
    },
    {
      "latitude": 51.327438,
      "longitude": 19.571253,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637330,
      "ems": null
    },
    {
      "latitude": 51.330406,
      "longitude": 19.570541,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637336,
      "ems": null
    },
    {
      "latitude": 51.333294,
      "longitude": 19.569855,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637342,
      "ems": null
    },
    {
      "latitude": 51.336411,
      "longitude": 19.569025,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637348,
      "ems": null
    },
    {
      "latitude": 51.339668,
      "longitude": 19.568253,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637354,
      "ems": null
    },
    {
      "latitude": 51.342697,
      "longitude": 19.567566,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637361,
      "ems": null
    },
    {
      "latitude": 51.345749,
      "longitude": 19.566948,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664637366,
      "ems": null
    },
    {
      "latitude": 51.348816,
      "longitude": 19.566427,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664637372,
      "ems": null
    },
    {
      "latitude": 51.351822,
      "longitude": 19.565887,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 354,
      "squawk": "7470",
      "timestamp": 1664637378,
      "ems": null
    },
    {
      "latitude": 51.354893,
      "longitude": 19.56543,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664637384,
      "ems": null
    },
    {
      "latitude": 51.358017,
      "longitude": 19.56472,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637390,
      "ems": null
    },
    {
      "latitude": 51.360992,
      "longitude": 19.564053,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637396,
      "ems": null
    },
    {
      "latitude": 51.364014,
      "longitude": 19.563311,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664637402,
      "ems": null
    },
    {
      "latitude": 51.367321,
      "longitude": 19.562454,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637409,
      "ems": null
    },
    {
      "latitude": 51.370346,
      "longitude": 19.561768,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637415,
      "ems": null
    },
    {
      "latitude": 51.373444,
      "longitude": 19.561083,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637421,
      "ems": null
    },
    {
      "latitude": 51.376648,
      "longitude": 19.560341,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637427,
      "ems": null
    },
    {
      "latitude": 51.37952,
      "longitude": 19.559631,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664637433,
      "ems": null
    },
    {
      "latitude": 51.382591,
      "longitude": 19.558716,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 349,
      "squawk": "7470",
      "timestamp": 1664637439,
      "ems": null
    },
    {
      "latitude": 51.385757,
      "longitude": 19.557724,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 349,
      "squawk": "7470",
      "timestamp": 1664637445,
      "ems": null
    },
    {
      "latitude": 51.388779,
      "longitude": 19.556852,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 349,
      "squawk": "7470",
      "timestamp": 1664637451,
      "ems": null
    },
    {
      "latitude": 51.391937,
      "longitude": 19.555962,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 349,
      "squawk": "7470",
      "timestamp": 1664637457,
      "ems": null
    },
    {
      "latitude": 51.394913,
      "longitude": 19.555071,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 349,
      "squawk": "7470",
      "timestamp": 1664637463,
      "ems": null
    },
    {
      "latitude": 51.397766,
      "longitude": 19.554291,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 349,
      "squawk": "7470",
      "timestamp": 1664637469,
      "ems": null
    },
    {
      "latitude": 51.400513,
      "longitude": 19.553528,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664637474,
      "ems": null
    },
    {
      "latitude": 51.403564,
      "longitude": 19.552694,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637480,
      "ems": null
    },
    {
      "latitude": 51.407032,
      "longitude": 19.551926,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637487,
      "ems": null
    },
    {
      "latitude": 51.410057,
      "longitude": 19.551163,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664637493,
      "ems": null
    },
    {
      "latitude": 51.412811,
      "longitude": 19.550468,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637499,
      "ems": null
    },
    {
      "latitude": 51.416157,
      "longitude": 19.549942,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 354,
      "squawk": "7470",
      "timestamp": 1664637505,
      "ems": null
    },
    {
      "latitude": 51.419319,
      "longitude": 19.549332,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664637511,
      "ems": null
    },
    {
      "latitude": 51.421787,
      "longitude": 19.54895,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 354,
      "squawk": "7470",
      "timestamp": 1664637516,
      "ems": null
    },
    {
      "latitude": 51.426956,
      "longitude": 19.547806,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664637526,
      "ems": null
    },
    {
      "latitude": 51.429142,
      "longitude": 19.547272,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637531,
      "ems": null
    },
    {
      "latitude": 51.435059,
      "longitude": 19.546015,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637542,
      "ems": null
    },
    {
      "latitude": 51.438129,
      "longitude": 19.545517,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 355,
      "squawk": "7470",
      "timestamp": 1664637549,
      "ems": null
    },
    {
      "latitude": 51.441059,
      "longitude": 19.545059,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664637554,
      "ems": null
    },
    {
      "latitude": 51.443901,
      "longitude": 19.544449,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637560,
      "ems": null
    },
    {
      "latitude": 51.44664,
      "longitude": 19.543861,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637566,
      "ems": null
    },
    {
      "latitude": 51.450394,
      "longitude": 19.542971,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637573,
      "ems": null
    },
    {
      "latitude": 51.452911,
      "longitude": 19.542303,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 349,
      "squawk": "7470",
      "timestamp": 1664637578,
      "ems": null
    },
    {
      "latitude": 51.454144,
      "longitude": 19.541855,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 347,
      "squawk": "7470",
      "timestamp": 1664637581,
      "ems": null
    },
    {
      "latitude": 51.457214,
      "longitude": 19.540863,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 348,
      "squawk": "7470",
      "timestamp": 1664637587,
      "ems": null
    },
    {
      "latitude": 51.460373,
      "longitude": 19.539852,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 348,
      "squawk": "7470",
      "timestamp": 1664637593,
      "ems": null
    },
    {
      "latitude": 51.463165,
      "longitude": 19.539036,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664637598,
      "ems": null
    },
    {
      "latitude": 51.466415,
      "longitude": 19.538219,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637605,
      "ems": null
    },
    {
      "latitude": 51.469482,
      "longitude": 19.537626,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637611,
      "ems": null
    },
    {
      "latitude": 51.472504,
      "longitude": 19.537031,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637617,
      "ems": null
    },
    {
      "latitude": 51.473972,
      "longitude": 19.536743,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664637620,
      "ems": null
    },
    {
      "latitude": 51.476852,
      "longitude": 19.53614,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664637625,
      "ems": null
    },
    {
      "latitude": 51.479794,
      "longitude": 19.535599,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664637631,
      "ems": null
    },
    {
      "latitude": 51.483006,
      "longitude": 19.535065,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664637637,
      "ems": null
    },
    {
      "latitude": 51.486328,
      "longitude": 19.534433,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637644,
      "ems": null
    },
    {
      "latitude": 51.489166,
      "longitude": 19.533766,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664637649,
      "ems": null
    },
    {
      "latitude": 51.492371,
      "longitude": 19.533098,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637656,
      "ems": null
    },
    {
      "latitude": 51.495483,
      "longitude": 19.532503,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637662,
      "ems": null
    },
    {
      "latitude": 51.498184,
      "longitude": 19.531984,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664637667,
      "ems": null
    },
    {
      "latitude": 51.501846,
      "longitude": 19.531317,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 354,
      "squawk": "7470",
      "timestamp": 1664637674,
      "ems": null
    },
    {
      "latitude": 51.503448,
      "longitude": 19.531168,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 356,
      "squawk": "7470",
      "timestamp": 1664637677,
      "ems": null
    },
    {
      "latitude": 51.506744,
      "longitude": 19.530869,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 357,
      "squawk": "7470",
      "timestamp": 1664637683,
      "ems": null
    },
    {
      "latitude": 51.509911,
      "longitude": 19.530716,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 358,
      "squawk": "7470",
      "timestamp": 1664637689,
      "ems": null
    },
    {
      "latitude": 51.511505,
      "longitude": 19.530722,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 358,
      "squawk": "7470",
      "timestamp": 1664637692,
      "ems": null
    },
    {
      "latitude": 51.513062,
      "longitude": 19.530647,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 359,
      "squawk": "7470",
      "timestamp": 1664637695,
      "ems": null
    },
    {
      "latitude": 51.514706,
      "longitude": 19.530716,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664637698,
      "ems": null
    },
    {
      "latitude": 51.51622,
      "longitude": 19.530722,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664637701,
      "ems": null
    },
    {
      "latitude": 51.517776,
      "longitude": 19.530796,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664637704,
      "ems": null
    },
    {
      "latitude": 51.519333,
      "longitude": 19.53087,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 2,
      "squawk": "7470",
      "timestamp": 1664637707,
      "ems": null
    },
    {
      "latitude": 51.52071,
      "longitude": 19.531021,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 3,
      "squawk": "7470",
      "timestamp": 1664637710,
      "ems": null
    },
    {
      "latitude": 51.522308,
      "longitude": 19.531094,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 2,
      "squawk": "7470",
      "timestamp": 1664637713,
      "ems": null
    },
    {
      "latitude": 51.524002,
      "longitude": 19.531242,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 2,
      "squawk": "7470",
      "timestamp": 1664637716,
      "ems": null
    },
    {
      "latitude": 51.527134,
      "longitude": 19.531479,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 2,
      "squawk": "7470",
      "timestamp": 1664637722,
      "ems": null
    },
    {
      "latitude": 51.530228,
      "longitude": 19.531612,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 2,
      "squawk": "7470",
      "timestamp": 1664637728,
      "ems": null
    },
    {
      "latitude": 51.533096,
      "longitude": 19.531784,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 2,
      "squawk": "7470",
      "timestamp": 1664637734,
      "ems": null
    },
    {
      "latitude": 51.536354,
      "longitude": 19.532013,
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
      "heading": 2,
      "squawk": "7470",
      "timestamp": 1664637740,
      "ems": null
    },
    {
      "latitude": 51.539658,
      "longitude": 19.532282,
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
      "heading": 2,
      "squawk": "7470",
      "timestamp": 1664637746,
      "ems": null
    },
    {
      "latitude": 51.542908,
      "longitude": 19.532503,
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
      "heading": 2,
      "squawk": "7470",
      "timestamp": 1664637752,
      "ems": null
    },
    {
      "latitude": 51.545837,
      "longitude": 19.532652,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664637758,
      "ems": null
    },
    {
      "latitude": 51.549294,
      "longitude": 19.5327,
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664637764,
      "ems": null
    },
    {
      "latitude": 51.552429,
      "longitude": 19.532726,
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664637770,
      "ems": null
    },
    {
      "latitude": 51.555534,
      "longitude": 19.532852,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664637777,
      "ems": null
    },
    {
      "latitude": 51.558464,
      "longitude": 19.533081,
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
      "heading": 4,
      "squawk": "7470",
      "timestamp": 1664637782,
      "ems": null
    },
    {
      "latitude": 51.561726,
      "longitude": 19.533463,
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
      "heading": 4,
      "squawk": "7470",
      "timestamp": 1664637788,
      "ems": null
    },
    {
      "latitude": 51.565063,
      "longitude": 19.533989,
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
      "heading": 5,
      "squawk": "7470",
      "timestamp": 1664637794,
      "ems": null
    },
    {
      "latitude": 51.567451,
      "longitude": 19.534225,
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
      "heading": 4,
      "squawk": "7470",
      "timestamp": 1664637799,
      "ems": null
    },
    {
      "latitude": 51.571609,
      "longitude": 19.534063,
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
      "heading": 354,
      "squawk": "7470",
      "timestamp": 1664637807,
      "ems": null
    },
    {
      "latitude": 51.574402,
      "longitude": 19.533173,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 345,
      "squawk": "7470",
      "timestamp": 1664637812,
      "ems": null
    },
    {
      "latitude": 51.575272,
      "longitude": 19.532801,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 345,
      "squawk": "7470",
      "timestamp": 1664637814,
      "ems": null
    },
    {
      "latitude": 51.576965,
      "longitude": 19.53191,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 341,
      "squawk": "7470",
      "timestamp": 1664637817,
      "ems": null
    },
    {
      "latitude": 51.578716,
      "longitude": 19.530792,
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
      "heading": 341,
      "squawk": "7470",
      "timestamp": 1664637821,
      "ems": null
    },
    {
      "latitude": 51.579788,
      "longitude": 19.530029,
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
      "heading": 335,
      "squawk": "7470",
      "timestamp": 1664637824,
      "ems": null
    },
    {
      "latitude": 51.581589,
      "longitude": 19.528717,
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
      "heading": 334,
      "squawk": "7470",
      "timestamp": 1664637828,
      "ems": null
    },
    {
      "latitude": 51.582253,
      "longitude": 19.528198,
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
      "heading": 334,
      "squawk": "7470",
      "timestamp": 1664637830,
      "ems": null
    },
    {
      "latitude": 51.583557,
      "longitude": 19.527206,
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
      "heading": 335,
      "squawk": "7470",
      "timestamp": 1664637832,
      "ems": null
    },
    {
      "latitude": 51.58548,
      "longitude": 19.525824,
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
      "heading": 335,
      "squawk": "7470",
      "timestamp": 1664637836,
      "ems": null
    },
    {
      "latitude": 51.586899,
      "longitude": 19.524784,
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
      "heading": 335,
      "squawk": "7470",
      "timestamp": 1664637840,
      "ems": null
    },
    {
      "latitude": 51.58754,
      "longitude": 19.524338,
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
      "heading": 335,
      "squawk": "7470",
      "timestamp": 1664637841,
      "ems": null
    },
    {
      "latitude": 51.589279,
      "longitude": 19.523003,
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
      "heading": 335,
      "squawk": "7470",
      "timestamp": 1664637845,
      "ems": null
    },
    {
      "latitude": 51.590881,
      "longitude": 19.521814,
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
      "heading": 335,
      "squawk": "7470",
      "timestamp": 1664637849,
      "ems": null
    },
    {
      "latitude": 51.591568,
      "longitude": 19.521296,
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
      "heading": 335,
      "squawk": "7470",
      "timestamp": 1664637850,
      "ems": null
    },
    {
      "latitude": 51.594635,
      "longitude": 19.518993,
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
      "heading": 333,
      "squawk": "7470",
      "timestamp": 1664637858,
      "ems": null
    },
    {
      "latitude": 51.597755,
      "longitude": 19.516525,
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
      "heading": 334,
      "squawk": "7470",
      "timestamp": 1664637864,
      "ems": null
    },
    {
      "latitude": 51.600548,
      "longitude": 19.514771,
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
      "heading": 339,
      "squawk": "7470",
      "timestamp": 1664637870,
      "ems": null
    },
    {
      "latitude": 51.601479,
      "longitude": 19.514236,
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
      "heading": 341,
      "squawk": "7470",
      "timestamp": 1664637872,
      "ems": null
    },
    {
      "latitude": 51.603149,
      "longitude": 19.513351,
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
      "heading": 342,
      "squawk": "7470",
      "timestamp": 1664637876,
      "ems": null
    },
    {
      "latitude": 51.603928,
      "longitude": 19.512981,
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
      "heading": 342,
      "squawk": "7470",
      "timestamp": 1664637877,
      "ems": null
    },
    {
      "latitude": 51.605438,
      "longitude": 19.512177,
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
      "heading": 342,
      "squawk": "7470",
      "timestamp": 1664637881,
      "ems": null
    },
    {
      "latitude": 51.607269,
      "longitude": 19.511126,
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
      "heading": 340,
      "squawk": "7470",
      "timestamp": 1664637885,
      "ems": null
    },
    {
      "latitude": 51.609394,
      "longitude": 19.509811,
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
      "heading": 339,
      "squawk": "7470",
      "timestamp": 1664637889,
      "ems": null
    },
    {
      "latitude": 51.612747,
      "longitude": 19.507217,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 331,
      "squawk": "7470",
      "timestamp": 1664637897,
      "ems": null
    },
    {
      "latitude": 51.614792,
      "longitude": 19.50531,
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
      "heading": 329,
      "squawk": "7470",
      "timestamp": 1664637902,
      "ems": null
    },
    {
      "latitude": 51.61684,
      "longitude": 19.503784,
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
      "heading": 337,
      "squawk": "7470",
      "timestamp": 1664637906,
      "ems": null
    },
    {
      "latitude": 51.61972,
      "longitude": 19.502588,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 348,
      "squawk": "7470",
      "timestamp": 1664637912,
      "ems": null
    },
    {
      "latitude": 51.621311,
      "longitude": 19.502106,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664637915,
      "ems": null
    },
    {
      "latitude": 51.622055,
      "longitude": 19.501921,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664637917,
      "ems": null
    },
    {
      "latitude": 51.624664,
      "longitude": 19.501343,
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637922,
      "ems": null
    },
    {
      "latitude": 51.627228,
      "longitude": 19.500881,
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664637927,
      "ems": null
    },
    {
      "latitude": 51.629105,
      "longitude": 19.500509,
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
      "heading": 354,
      "squawk": "7470",
      "timestamp": 1664637931,
      "ems": null
    },
    {
      "latitude": 51.63176,
      "longitude": 19.49999,
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664637936,
      "ems": null
    },
    {
      "latitude": 51.636337,
      "longitude": 19.498877,
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
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664637945,
      "ems": null
    },
    {
      "latitude": 51.639652,
      "longitude": 19.497681,
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
      "heading": 343,
      "squawk": "7470",
      "timestamp": 1664637952,
      "ems": null
    },
    {
      "latitude": 51.641003,
      "longitude": 19.496918,
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
      "heading": 339,
      "squawk": "7470",
      "timestamp": 1664637955,
      "ems": null
    },
    {
      "latitude": 51.641922,
      "longitude": 19.496279,
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
      "heading": 337,
      "squawk": "7470",
      "timestamp": 1664637957,
      "ems": null
    },
    {
      "latitude": 51.643433,
      "longitude": 19.495314,
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
      "heading": 340,
      "squawk": "7470",
      "timestamp": 1664637960,
      "ems": null
    },
    {
      "latitude": 51.6465,
      "longitude": 19.494274,
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664637967,
      "ems": null
    },
    {
      "latitude": 51.649242,
      "longitude": 19.4944,
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
      "heading": 6,
      "squawk": "7470",
      "timestamp": 1664637973,
      "ems": null
    },
    {
      "latitude": 51.649708,
      "longitude": 19.494476,
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
      "heading": 8,
      "squawk": "7470",
      "timestamp": 1664637973,
      "ems": null
    },
    {
      "latitude": 51.65126,
      "longitude": 19.495165,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 16,
      "squawk": "7470",
      "timestamp": 1664637977,
      "ems": null
    },
    {
      "latitude": 51.653229,
      "longitude": 19.496428,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 24,
      "squawk": "7470",
      "timestamp": 1664637982,
      "ems": null
    },
    {
      "latitude": 51.654419,
      "longitude": 19.497467,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 27,
      "squawk": "7470",
      "timestamp": 1664637985,
      "ems": null
    },
    {
      "latitude": 51.655388,
      "longitude": 19.498215,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 25,
      "squawk": "7470",
      "timestamp": 1664637987,
      "ems": null
    },
    {
      "latitude": 51.65641,
      "longitude": 19.498901,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 25,
      "squawk": "7470",
      "timestamp": 1664637989,
      "ems": null
    },
    {
      "latitude": 51.658081,
      "longitude": 19.499544,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 7,
      "squawk": "7470",
      "timestamp": 1664637993,
      "ems": null
    },
    {
      "latitude": 51.659042,
      "longitude": 19.499693,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 5,
      "squawk": "7470",
      "timestamp": 1664637996,
      "ems": null
    },
    {
      "latitude": 51.662136,
      "longitude": 19.499054,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 347,
      "squawk": "7470",
      "timestamp": 1664638002,
      "ems": null
    },
    {
      "latitude": 51.66465,
      "longitude": 19.497681,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 347,
      "squawk": "7470",
      "timestamp": 1664638008,
      "ems": null
    },
    {
      "latitude": 51.666,
      "longitude": 19.49646,
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
      "heading": 330,
      "squawk": "7470",
      "timestamp": 1664638012,
      "ems": null
    },
    {
      "latitude": 51.667191,
      "longitude": 19.495239,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 325,
      "squawk": "7470",
      "timestamp": 1664638015,
      "ems": null
    },
    {
      "latitude": 51.667725,
      "longitude": 19.494553,
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
      "heading": 323,
      "squawk": "7470",
      "timestamp": 1664638017,
      "ems": null
    },
    {
      "latitude": 51.669167,
      "longitude": 19.492645,
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
      "heading": 318,
      "squawk": "7470",
      "timestamp": 1664638021,
      "ems": null
    },
    {
      "latitude": 51.670578,
      "longitude": 19.490562,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 316,
      "squawk": "7470",
      "timestamp": 1664638025,
      "ems": null
    },
    {
      "latitude": 51.67218,
      "longitude": 19.488039,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 313,
      "squawk": "7470",
      "timestamp": 1664638030,
      "ems": null
    },
    {
      "latitude": 51.673683,
      "longitude": 19.485092,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 308,
      "squawk": "7470",
      "timestamp": 1664638035,
      "ems": null
    },
    {
      "latitude": 51.674606,
      "longitude": 19.483139,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 306,
      "squawk": "7470",
      "timestamp": 1664638039,
      "ems": null
    },
    {
      "latitude": 51.675358,
      "longitude": 19.481506,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 305,
      "squawk": "7470",
      "timestamp": 1664638042,
      "ems": null
    },
    {
      "latitude": 51.676117,
      "longitude": 19.47965,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 303,
      "squawk": "7470",
      "timestamp": 1664638045,
      "ems": null
    },
    {
      "latitude": 51.676895,
      "longitude": 19.477795,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 303,
      "squawk": "7470",
      "timestamp": 1664638048,
      "ems": null
    },
    {
      "latitude": 51.677536,
      "longitude": 19.476162,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 302,
      "squawk": "7470",
      "timestamp": 1664638051,
      "ems": null
    },
    {
      "latitude": 51.677731,
      "longitude": 19.475632,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 302,
      "squawk": "7470",
      "timestamp": 1664638052,
      "ems": null
    },
    {
      "latitude": 51.679081,
      "longitude": 19.472275,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 302,
      "squawk": "7470",
      "timestamp": 1664638057,
      "ems": null
    },
    {
      "latitude": 51.67955,
      "longitude": 19.471113,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 302,
      "squawk": "7470",
      "timestamp": 1664638059,
      "ems": null
    },
    {
      "latitude": 51.680618,
      "longitude": 19.468384,
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
      "heading": 303,
      "squawk": "7470",
      "timestamp": 1664638063,
      "ems": null
    },
    {
      "latitude": 51.682667,
      "longitude": 19.463348,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 302,
      "squawk": "7470",
      "timestamp": 1664638071,
      "ems": null
    },
    {
      "latitude": 51.684063,
      "longitude": 19.459915,
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
      "heading": 304,
      "squawk": "7470",
      "timestamp": 1664638076,
      "ems": null
    },
    {
      "latitude": 51.686066,
      "longitude": 19.455414,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 304,
      "squawk": "7470",
      "timestamp": 1664638084,
      "ems": null
    },
    {
      "latitude": 51.688202,
      "longitude": 19.450254,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 302,
      "squawk": "7470",
      "timestamp": 1664638092,
      "ems": null
    },
    {
      "latitude": 51.690208,
      "longitude": 19.444656,
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
      "heading": 298,
      "squawk": "7470",
      "timestamp": 1664638100,
      "ems": null
    },
    {
      "latitude": 51.691132,
      "longitude": 19.44194,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 298,
      "squawk": "7470",
      "timestamp": 1664638104,
      "ems": null
    },
    {
      "latitude": 51.691772,
      "longitude": 19.439789,
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
      "heading": 297,
      "squawk": "7470",
      "timestamp": 1664638108,
      "ems": null
    },
    {
      "latitude": 51.692722,
      "longitude": 19.436569,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 293,
      "squawk": "7470",
      "timestamp": 1664638112,
      "ems": null
    },
    {
      "latitude": 51.693375,
      "longitude": 19.434052,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 292,
      "squawk": "7470",
      "timestamp": 1664638116,
      "ems": null
    },
    {
      "latitude": 51.694016,
      "longitude": 19.431177,
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
      "heading": 286,
      "squawk": "7470",
      "timestamp": 1664638120,
      "ems": null
    },
    {
      "latitude": 51.69421,
      "longitude": 19.429398,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 278,
      "squawk": "7470",
      "timestamp": 1664638122,
      "ems": null
    },
    {
      "latitude": 51.69426,
      "longitude": 19.427414,
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
      "heading": 271,
      "squawk": "7470",
      "timestamp": 1664638125,
      "ems": null
    },
    {
      "latitude": 51.693745,
      "longitude": 19.42482,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 248,
      "squawk": "7470",
      "timestamp": 1664638130,
      "ems": null
    },
    {
      "latitude": 51.69278,
      "longitude": 19.422863,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 231,
      "squawk": "7470",
      "timestamp": 1664638134,
      "ems": null
    },
    {
      "latitude": 51.691269,
      "longitude": 19.421675,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 216,
      "squawk": "7470",
      "timestamp": 1664638138,
      "ems": null
    },
    {
      "latitude": 51.689976,
      "longitude": 19.421768,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 170,
      "squawk": "7470",
      "timestamp": 1664638142,
      "ems": null
    },
    {
      "latitude": 51.688717,
      "longitude": 19.422836,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 145,
      "squawk": "7470",
      "timestamp": 1664638146,
      "ems": null
    },
    {
      "latitude": 51.687698,
      "longitude": 19.425238,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 112,
      "squawk": "7470",
      "timestamp": 1664638151,
      "ems": null
    },
    {
      "latitude": 51.68737,
      "longitude": 19.42749,
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
      "heading": 92,
      "squawk": "7470",
      "timestamp": 1664638155,
      "ems": null
    },
    {
      "latitude": 51.687695,
      "longitude": 19.431305,
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
      "heading": 74,
      "squawk": "7470",
      "timestamp": 1664638159,
      "ems": null
    },
    {
      "latitude": 51.688431,
      "longitude": 19.433552,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 57,
      "squawk": "7470",
      "timestamp": 1664638163,
      "ems": null
    },
    {
      "latitude": 51.690441,
      "longitude": 19.436493,
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
      "heading": 30,
      "squawk": "7470",
      "timestamp": 1664638168,
      "ems": null
    },
    {
      "latitude": 51.692596,
      "longitude": 19.437635,
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
      "heading": 31,
      "squawk": "7470",
      "timestamp": 1664638172,
      "ems": null
    },
    {
      "latitude": 51.694519,
      "longitude": 19.437784,
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
      "heading": 34,
      "squawk": "7470",
      "timestamp": 1664638176,
      "ems": null
    },
    {
      "latitude": 51.696213,
      "longitude": 19.437561,
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
      "heading": 354,
      "squawk": "7470",
      "timestamp": 1664638180,
      "ems": null
    },
    {
      "latitude": 51.698502,
      "longitude": 19.437189,
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
      "heading": 354,
      "squawk": "7470",
      "timestamp": 1664638185,
      "ems": null
    },
    {
      "latitude": 51.700588,
      "longitude": 19.436646,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 351,
      "squawk": "7470",
      "timestamp": 1664638190,
      "ems": null
    },
    {
      "latitude": 51.702545,
      "longitude": 19.436188,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664638194,
      "ems": null
    },
    {
      "latitude": 51.704269,
      "longitude": 19.435854,
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
      "heading": 353,
      "squawk": "7470",
      "timestamp": 1664638198,
      "ems": null
    },
    {
      "latitude": 51.706329,
      "longitude": 19.435631,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 356,
      "squawk": "7470",
      "timestamp": 1664638203,
      "ems": null
    },
    {
      "latitude": 51.709854,
      "longitude": 19.435333,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 355,
      "squawk": "7470",
      "timestamp": 1664638211,
      "ems": null
    },
    {
      "latitude": 51.712143,
      "longitude": 19.435482,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 3,
      "squawk": "7470",
      "timestamp": 1664638216,
      "ems": null
    },
    {
      "latitude": 51.713856,
      "longitude": 19.435654,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 4,
      "squawk": "7470",
      "timestamp": 1664638220,
      "ems": null
    },
    {
      "latitude": 51.715439,
      "longitude": 19.435883,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 4,
      "squawk": "7470",
      "timestamp": 1664638224,
      "ems": null
    },
    {
      "latitude": 51.717022,
      "longitude": 19.436035,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 2,
      "squawk": "7470",
      "timestamp": 1664638228,
      "ems": null
    },
    {
      "latitude": 51.718552,
      "longitude": 19.436077,
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664638231,
      "ems": null
    },
    {
      "latitude": 51.72052,
      "longitude": 19.436152,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664638235,
      "ems": null
    },
    {
      "latitude": 51.722214,
      "longitude": 19.436224,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 358,
      "squawk": "7470",
      "timestamp": 1664638239,
      "ems": null
    },
    {
      "latitude": 51.724411,
      "longitude": 19.435556,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 346,
      "squawk": "7470",
      "timestamp": 1664638244,
      "ems": null
    },
    {
      "latitude": 51.725693,
      "longitude": 19.434666,
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
      "heading": 346,
      "squawk": "7470",
      "timestamp": 1664638247,
      "ems": null
    },
    {
      "latitude": 51.727112,
      "longitude": 19.432884,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 317,
      "squawk": "7470",
      "timestamp": 1664638251,
      "ems": null
    },
    {
      "latitude": 51.728195,
      "longitude": 19.430161,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 290,
      "squawk": "7470",
      "timestamp": 1664638255,
      "ems": null
    },
    {
      "latitude": 51.728394,
      "longitude": 19.428282,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 272,
      "squawk": "7470",
      "timestamp": 1664638259,
      "ems": null
    },
    {
      "latitude": 51.728008,
      "longitude": 19.425125,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 298,
      "squawk": "7470",
      "timestamp": 1664638263,
      "ems": null
    },
    {
      "latitude": 51.727497,
      "longitude": 19.42276,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 248,
      "squawk": "7470",
      "timestamp": 1664638267,
      "ems": null
    },
    {
      "latitude": 51.726986,
      "longitude": 19.4207,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 249,
      "squawk": "7470",
      "timestamp": 1664638271,
      "ems": null
    },
    {
      "latitude": 51.726425,
      "longitude": 19.418182,
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
      "heading": 249,
      "squawk": "7470",
      "timestamp": 1664638275,
      "ems": null
    },
    {
      "latitude": 51.726151,
      "longitude": 19.416925,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 250,
      "squawk": "7470",
      "timestamp": 1664638279,
      "ems": null
    },
    {
      "latitude": 51.725555,
      "longitude": 19.414326,
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
        "fpm": -1408,
        "ms": -7.2
      },
      "heading": 252,
      "squawk": "7470",
      "timestamp": 1664638283,
      "ems": null
    },
    {
      "latitude": 51.725124,
      "longitude": 19.412079,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 251,
      "squawk": "7470",
      "timestamp": 1664638287,
      "ems": null
    },
    {
      "latitude": 51.724503,
      "longitude": 19.409649,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 246,
      "squawk": "7470",
      "timestamp": 1664638292,
      "ems": null
    },
    {
      "latitude": 51.723724,
      "longitude": 19.406458,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 249,
      "squawk": "7470",
      "timestamp": 1664638297,
      "ems": null
    },
    {
      "latitude": 51.722748,
      "longitude": 19.401627,
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
      "heading": 253,
      "squawk": "7470",
      "timestamp": 1664638306,
      "ems": null
    },
    {
      "latitude": 51.721817,
      "longitude": 19.396591,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 253,
      "squawk": "7470",
      "timestamp": 1664638317,
      "ems": null
    },
    {
      "latitude": 51.721539,
      "longitude": 19.394836,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 253,
      "squawk": "7470",
      "timestamp": 1664638321,
      "ems": null
    },
    {
      "latitude": 51.720745,
      "longitude": 19.390564,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 253,
      "squawk": "7470",
      "timestamp": 1664638329,
      "ems": null
    },
    {
      "latitude": 51.719742,
      "longitude": 19.385748,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 252,
      "squawk": "7470",
      "timestamp": 1664638338,
      "ems": null
    },
    {
      "latitude": 51.718781,
      "longitude": 19.380848,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 251,
      "squawk": "7470",
      "timestamp": 1664638347,
      "ems": null
    },
    {
      "latitude": 51.71814,
      "longitude": 19.378027,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 249,
      "squawk": "7470",
      "timestamp": 1664638352,
      "ems": null
    },
    {
      "latitude": 51.717773,
      "longitude": 19.376469,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 247,
      "squawk": "7470",
      "timestamp": 1664638356,
      "ems": null
    },
    {
      "latitude": 51.717133,
      "longitude": 19.374241,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 246,
      "squawk": "7470",
      "timestamp": 1664638360,
      "ems": null
    },
    {
      "latitude": 51.716446,
      "longitude": 19.371792,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 244,
      "squawk": "7470",
      "timestamp": 1664638364,
      "ems": null
    },
    {
      "latitude": 51.715805,
      "longitude": 19.370085,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 244,
      "squawk": "7470",
      "timestamp": 1664638368,
      "ems": null
    },
    {
      "latitude": 51.714752,
      "longitude": 19.36845,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 218,
      "squawk": "7470",
      "timestamp": 1664638372,
      "ems": null
    },
    {
      "latitude": 51.713745,
      "longitude": 19.367487,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 207,
      "squawk": "7470",
      "timestamp": 1664638376,
      "ems": null
    },
    {
      "latitude": 51.712234,
      "longitude": 19.366817,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 184,
      "squawk": "7470",
      "timestamp": 1664638381,
      "ems": null
    },
    {
      "latitude": 51.710495,
      "longitude": 19.366966,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 172,
      "squawk": "7470",
      "timestamp": 1664638386,
      "ems": null
    },
    {
      "latitude": 51.709122,
      "longitude": 19.367487,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 163,
      "squawk": "7470",
      "timestamp": 1664638390,
      "ems": null
    },
    {
      "latitude": 51.707794,
      "longitude": 19.368303,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 157,
      "squawk": "7470",
      "timestamp": 1664638394,
      "ems": null
    },
    {
      "latitude": 51.706284,
      "longitude": 19.369343,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 156,
      "squawk": "7470",
      "timestamp": 1664638398,
      "ems": null
    },
    {
      "latitude": 51.705185,
      "longitude": 19.37038,
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
      "heading": 145,
      "squawk": "7470",
      "timestamp": 1664638402,
      "ems": null
    },
    {
      "latitude": 51.70385,
      "longitude": 19.372787,
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
      "heading": 121,
      "squawk": "7470",
      "timestamp": 1664638407,
      "ems": null
    },
    {
      "latitude": 51.703171,
      "longitude": 19.376022,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 99,
      "squawk": "7470",
      "timestamp": 1664638412,
      "ems": null
    },
    {
      "latitude": 51.703079,
      "longitude": 19.377729,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 99,
      "squawk": "7470",
      "timestamp": 1664638414,
      "ems": null
    },
    {
      "latitude": 51.703197,
      "longitude": 19.380112,
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
      "heading": 84,
      "squawk": "7470",
      "timestamp": 1664638418,
      "ems": null
    },
    {
      "latitude": 51.703568,
      "longitude": 19.383545,
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
      "squawk": "7470",
      "timestamp": 1664638422,
      "ems": null
    },
    {
      "latitude": 51.70372,
      "longitude": 19.384336,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 80,
      "squawk": "7470",
      "timestamp": 1664638423,
      "ems": null
    },
    {
      "latitude": 51.704128,
      "longitude": 19.386749,
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
      "heading": 74,
      "squawk": "7470",
      "timestamp": 1664638427,
      "ems": null
    },
    {
      "latitude": 51.704636,
      "longitude": 19.389311,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 72,
      "squawk": "7470",
      "timestamp": 1664638431,
      "ems": null
    },
    {
      "latitude": 51.705276,
      "longitude": 19.392353,
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
      "heading": 70,
      "squawk": "7470",
      "timestamp": 1664638435,
      "ems": null
    },
    {
      "latitude": 51.705826,
      "longitude": 19.394953,
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
      "heading": 70,
      "squawk": "7470",
      "timestamp": 1664638439,
      "ems": null
    },
    {
      "latitude": 51.706329,
      "longitude": 19.397253,
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
      "heading": 70,
      "squawk": "7470",
      "timestamp": 1664638443,
      "ems": null
    },
    {
      "latitude": 51.706875,
      "longitude": 19.399643,
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
      "heading": 70,
      "squawk": "7470",
      "timestamp": 1664638447,
      "ems": null
    },
    {
      "latitude": 51.70752,
      "longitude": 19.402374,
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
      "heading": 69,
      "squawk": "7470",
      "timestamp": 1664638451,
      "ems": null
    },
    {
      "latitude": 51.707794,
      "longitude": 19.403637,
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
      "heading": 68,
      "squawk": "7470",
      "timestamp": 1664638453,
      "ems": null
    },
    {
      "latitude": 51.708527,
      "longitude": 19.406458,
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
      "heading": 68,
      "squawk": "7470",
      "timestamp": 1664638457,
      "ems": null
    },
    {
      "latitude": 51.709435,
      "longitude": 19.410248,
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
      "heading": 69,
      "squawk": "7470",
      "timestamp": 1664638466,
      "ems": null
    },
    {
      "latitude": 51.710922,
      "longitude": 19.41658,
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
      "heading": 69,
      "squawk": "7470",
      "timestamp": 1664638474,
      "ems": null
    },
    {
      "latitude": 51.711365,
      "longitude": 19.418633,
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
      "heading": 75,
      "squawk": "7470",
      "timestamp": 1664638478,
      "ems": null
    },
    {
      "latitude": 51.711529,
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
      "heading": 90,
      "squawk": "7470",
      "timestamp": 1664638483,
      "ems": null
    },
    {
      "latitude": 51.711182,
      "longitude": 19.424126,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 108,
      "squawk": "7470",
      "timestamp": 1664638487,
      "ems": null
    },
    {
      "latitude": 51.71032,
      "longitude": 19.426117,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 133,
      "squawk": "7470",
      "timestamp": 1664638491,
      "ems": null
    },
    {
      "latitude": 51.709534,
      "longitude": 19.427021,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 149,
      "squawk": "7470",
      "timestamp": 1664638495,
      "ems": null
    },
    {
      "latitude": 51.708271,
      "longitude": 19.427567,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 173,
      "squawk": "7470",
      "timestamp": 1664638499,
      "ems": null
    },
    {
      "latitude": 51.706642,
      "longitude": 19.426956,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 202,
      "squawk": "7470",
      "timestamp": 1664638504,
      "ems": null
    },
    {
      "latitude": 51.705551,
      "longitude": 19.425461,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 225,
      "squawk": "7470",
      "timestamp": 1664638508,
      "ems": null
    },
    {
      "latitude": 51.704918,
      "longitude": 19.423828,
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
      "heading": 244,
      "squawk": "7470",
      "timestamp": 1664638512,
      "ems": null
    },
    {
      "latitude": 51.70459,
      "longitude": 19.421528,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 261,
      "squawk": "7470",
      "timestamp": 1664638516,
      "ems": null
    },
    {
      "latitude": 51.704781,
      "longitude": 19.418564,
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
      "heading": 273,
      "squawk": "7470",
      "timestamp": 1664638521,
      "ems": null
    },
    {
      "latitude": 51.705292,
      "longitude": 19.416809,
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
      "heading": 299,
      "squawk": "7470",
      "timestamp": 1664638524,
      "ems": null
    },
    {
      "latitude": 51.706284,
      "longitude": 19.41507,
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
      "heading": 319,
      "squawk": "7470",
      "timestamp": 1664638527,
      "ems": null
    },
    {
      "latitude": 51.706829,
      "longitude": 19.41452,
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
      "heading": 324,
      "squawk": "7470",
      "timestamp": 1664638528,
      "ems": null
    },
    {
      "latitude": 51.709076,
      "longitude": 19.413733,
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
      "heading": 350,
      "squawk": "7470",
      "timestamp": 1664638533,
      "ems": null
    },
    {
      "latitude": 51.710224,
      "longitude": 19.414139,
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
      "heading": 17,
      "squawk": "7470",
      "timestamp": 1664638537,
      "ems": null
    },
    {
      "latitude": 51.71196,
      "longitude": 19.41596,
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
      "heading": 40,
      "squawk": "7470",
      "timestamp": 1664638541,
      "ems": null
    },
    {
      "latitude": 51.712833,
      "longitude": 19.417572,
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
      "heading": 50,
      "squawk": "7470",
      "timestamp": 1664638545,
      "ems": null
    },
    {
      "latitude": 51.713764,
      "longitude": 19.420319,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 62,
      "squawk": "7470",
      "timestamp": 1664638549,
      "ems": null
    },
    {
      "latitude": 51.714294,
      "longitude": 19.421972,
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
      "heading": 63,
      "squawk": "7470",
      "timestamp": 1664638553,
      "ems": null
    },
    {
      "latitude": 51.714981,
      "longitude": 19.424274,
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
      "heading": 64,
      "squawk": "7470",
      "timestamp": 1664638557,
      "ems": null
    },
    {
      "latitude": 51.715576,
      "longitude": 19.4265,
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
      "heading": 67,
      "squawk": "7470",
      "timestamp": 1664638561,
      "ems": null
    },
    {
      "latitude": 51.716125,
      "longitude": 19.428802,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 68,
      "squawk": "7470",
      "timestamp": 1664638565,
      "ems": null
    },
    {
      "latitude": 51.716629,
      "longitude": 19.43088,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 68,
      "squawk": "7470",
      "timestamp": 1664638569,
      "ems": null
    },
    {
      "latitude": 51.71727,
      "longitude": 19.433477,
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
      "heading": 67,
      "squawk": "7470",
      "timestamp": 1664638573,
      "ems": null
    },
    {
      "latitude": 51.71735,
      "longitude": 19.433746,
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
      "heading": 67,
      "squawk": "7470",
      "timestamp": 1664638574,
      "ems": null
    },
    {
      "latitude": 51.718185,
      "longitude": 19.436874,
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
      "heading": 65,
      "squawk": "7470",
      "timestamp": 1664638580,
      "ems": null
    },
    {
      "latitude": 51.71949,
      "longitude": 19.44046,
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
      "heading": 55,
      "squawk": "7470",
      "timestamp": 1664638586,
      "ems": null
    },
    {
      "latitude": 51.720978,
      "longitude": 19.442461,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 34,
      "squawk": "7470",
      "timestamp": 1664638590,
      "ems": null
    },
    {
      "latitude": 51.722443,
      "longitude": 19.443647,
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
      "heading": 20,
      "squawk": "7470",
      "timestamp": 1664638594,
      "ems": null
    },
    {
      "latitude": 51.724411,
      "longitude": 19.444391,
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
      "heading": 10,
      "squawk": "7470",
      "timestamp": 1664638598,
      "ems": null
    },
    {
      "latitude": 51.726147,
      "longitude": 19.444504,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 358,
      "squawk": "7470",
      "timestamp": 1664638602,
      "ems": null
    },
    {
      "latitude": 51.727917,
      "longitude": 19.443665,
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
      "heading": 336,
      "squawk": "7470",
      "timestamp": 1664638606,
      "ems": null
    },
    {
      "latitude": 51.729172,
      "longitude": 19.442291,
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
      "heading": 322,
      "squawk": "7470",
      "timestamp": 1664638610,
      "ems": null
    },
    {
      "latitude": 51.730225,
      "longitude": 19.440233,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 302,
      "squawk": "7470",
      "timestamp": 1664638614,
      "ems": null
    },
    {
      "latitude": 51.730682,
      "longitude": 19.437635,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 273,
      "squawk": "7470",
      "timestamp": 1664638618,
      "ems": null
    },
    {
      "latitude": 51.73027,
      "longitude": 19.434591,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 250,
      "squawk": "7470",
      "timestamp": 1664638622,
      "ems": null
    },
    {
      "latitude": 51.729778,
      "longitude": 19.432831,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 244,
      "squawk": "7470",
      "timestamp": 1664638626,
      "ems": null
    },
    {
      "latitude": 51.729359,
      "longitude": 19.431,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 250,
      "squawk": "7470",
      "timestamp": 1664638630,
      "ems": null
    },
    {
      "latitude": 51.728668,
      "longitude": 19.427912,
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
      "heading": 250,
      "squawk": "7470",
      "timestamp": 1664638634,
      "ems": null
    },
    {
      "latitude": 51.72821,
      "longitude": 19.426056,
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
      "heading": 247,
      "squawk": "7470",
      "timestamp": 1664638638,
      "ems": null
    },
    {
      "latitude": 51.72773,
      "longitude": 19.423676,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 251,
      "squawk": "7470",
      "timestamp": 1664638643,
      "ems": null
    },
    {
      "latitude": 51.727264,
      "longitude": 19.421692,
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
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 249,
      "squawk": "7470",
      "timestamp": 1664638647,
      "ems": null
    },
    {
      "latitude": 51.726059,
      "longitude": 19.416702,
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
      "heading": 249,
      "squawk": "7470",
      "timestamp": 1664638656,
      "ems": null
    },
    {
      "latitude": 51.725403,
      "longitude": 19.41391,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 249,
      "squawk": "7470",
      "timestamp": 1664638662,
      "ems": null
    },
    {
      "latitude": 51.724091,
      "longitude": 19.408537,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 250,
      "squawk": "7470",
      "timestamp": 1664638672,
      "ems": null
    },
    {
      "latitude": 51.723495,
      "longitude": 19.405567,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 251,
      "squawk": "7470",
      "timestamp": 1664638677,
      "ems": null
    },
    {
      "latitude": 51.721985,
      "longitude": 19.39859,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 250,
      "squawk": "7470",
      "timestamp": 1664638693,
      "ems": null
    },
    {
      "latitude": 51.718884,
      "longitude": 19.384766,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 250,
      "squawk": "7470",
      "timestamp": 1664638725,
      "ems": null
    },
    {
      "latitude": 51.718418,
      "longitude": 19.382401,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 252,
      "squawk": "7470",
      "timestamp": 1664638730,
      "ems": null
    },
    {
      "latitude": 51.717628,
      "longitude": 19.378586,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 250,
      "squawk": "7470",
      "timestamp": 1664638739,
      "ems": null
    },
    {
      "latitude": 51.716812,
      "longitude": 19.375057,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 250,
      "squawk": "7470",
      "timestamp": 1664638746,
      "ems": null
    },
    {
      "latitude": 51.716183,
      "longitude": 19.372406,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 248,
      "squawk": "7470",
      "timestamp": 1664638751,
      "ems": null
    },
    {
      "latitude": 51.71516,
      "longitude": 19.368057,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 248,
      "squawk": "7470",
      "timestamp": 1664638760,
      "ems": null
    },
    {
      "latitude": 51.714844,
      "longitude": 19.366596,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 249,
      "squawk": "7470",
      "timestamp": 1664638763,
      "ems": null
    },
    {
      "latitude": 51.713764,
      "longitude": 19.361954,
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
      "heading": 246,
      "squawk": "7470",
      "timestamp": 1664638774,
      "ems": null
    },
    {
      "latitude": 51.713058,
      "longitude": 19.36021,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 232,
      "squawk": "7470",
      "timestamp": 1664638778,
      "ems": null
    },
    {
      "latitude": 51.712051,
      "longitude": 19.358801,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 211,
      "squawk": "7470",
      "timestamp": 1664638782,
      "ems": null
    },
    {
      "latitude": 51.710999,
      "longitude": 19.358133,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 201,
      "squawk": "7470",
      "timestamp": 1664638787,
      "ems": null
    },
    {
      "latitude": 51.7099,
      "longitude": 19.35791,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 181,
      "squawk": "7470",
      "timestamp": 1664638791,
      "ems": null
    },
    {
      "latitude": 51.70911,
      "longitude": 19.357986,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 171,
      "squawk": "7470",
      "timestamp": 1664638795,
      "ems": null
    },
    {
      "latitude": 51.707943,
      "longitude": 19.358444,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 161,
      "squawk": "7470",
      "timestamp": 1664638799,
      "ems": null
    },
    {
      "latitude": 51.707016,
      "longitude": 19.359247,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 152,
      "squawk": "7470",
      "timestamp": 1664638803,
      "ems": null
    },
    {
      "latitude": 51.705944,
      "longitude": 19.360352,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 147,
      "squawk": "7470",
      "timestamp": 1664638807,
      "ems": null
    },
    {
      "latitude": 51.704826,
      "longitude": 19.361038,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 163,
      "squawk": "7470",
      "timestamp": 1664638812,
      "ems": null
    },
    {
      "latitude": 51.703709,
      "longitude": 19.361572,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 161,
      "squawk": "7470",
      "timestamp": 1664638816,
      "ems": null
    },
    {
      "latitude": 51.702591,
      "longitude": 19.362259,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 155,
      "squawk": "7470",
      "timestamp": 1664638820,
      "ems": null
    },
    {
      "latitude": 51.701523,
      "longitude": 19.363106,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 151,
      "squawk": "7470",
      "timestamp": 1664638824,
      "ems": null
    },
    {
      "latitude": 51.700405,
      "longitude": 19.364166,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 150,
      "squawk": "7470",
      "timestamp": 1664638828,
      "ems": null
    },
    {
      "latitude": 51.69817,
      "longitude": 19.366226,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 149,
      "squawk": "7470",
      "timestamp": 1664638836,
      "ems": null
    },
    {
      "latitude": 51.697052,
      "longitude": 19.367447,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 142,
      "squawk": "7470",
      "timestamp": 1664638840,
      "ems": null
    },
    {
      "latitude": 51.696259,
      "longitude": 19.368822,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 127,
      "squawk": "7470",
      "timestamp": 1664638844,
      "ems": null
    },
    {
      "latitude": 51.695572,
      "longitude": 19.371124,
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
      "heading": 109,
      "squawk": "7470",
      "timestamp": 1664638848,
      "ems": null
    },
    {
      "latitude": 51.695328,
      "longitude": 19.373169,
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
      "heading": 96,
      "squawk": "7470",
      "timestamp": 1664638852,
      "ems": null
    },
    {
      "latitude": 51.695389,
      "longitude": 19.375948,
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
      "heading": 85,
      "squawk": "7470",
      "timestamp": 1664638856,
      "ems": null
    },
    {
      "latitude": 51.695709,
      "longitude": 19.378399,
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
      "squawk": "7470",
      "timestamp": 1664638860,
      "ems": null
    },
    {
      "latitude": 51.696213,
      "longitude": 19.381071,
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
      "heading": 71,
      "squawk": "7470",
      "timestamp": 1664638864,
      "ems": null
    },
    {
      "latitude": 51.697006,
      "longitude": 19.38446,
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
      "heading": 69,
      "squawk": "7470",
      "timestamp": 1664638869,
      "ems": null
    },
    {
      "latitude": 51.697517,
      "longitude": 19.386673,
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
      "heading": 69,
      "squawk": "7470",
      "timestamp": 1664638873,
      "ems": null
    },
    {
      "latitude": 51.698124,
      "longitude": 19.389267,
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
      "heading": 69,
      "squawk": "7470",
      "timestamp": 1664638877,
      "ems": null
    },
    {
      "latitude": 51.698822,
      "longitude": 19.392353,
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
      "heading": 69,
      "squawk": "7470",
      "timestamp": 1664638881,
      "ems": null
    },
    {
      "latitude": 51.699326,
      "longitude": 19.394581,
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
      "heading": 70,
      "squawk": "7470",
      "timestamp": 1664638885,
      "ems": null
    },
    {
      "latitude": 51.700169,
      "longitude": 19.398193,
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
      "heading": 68,
      "squawk": "7470",
      "timestamp": 1664638890,
      "ems": null
    },
    {
      "latitude": 51.701385,
      "longitude": 19.403193,
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
      "heading": 67,
      "squawk": "7470",
      "timestamp": 1664638898,
      "ems": null
    },
    {
      "latitude": 51.702713,
      "longitude": 19.408165,
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
      "heading": 65,
      "squawk": "7470",
      "timestamp": 1664638906,
      "ems": null
    },
    {
      "latitude": 51.704266,
      "longitude": 19.413605,
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
      "heading": 65,
      "squawk": "7470",
      "timestamp": 1664638915,
      "ems": null
    },
    {
      "latitude": 51.705734,
      "longitude": 19.418558,
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
      "heading": 64,
      "squawk": "7470",
      "timestamp": 1664638923,
      "ems": null
    },
    {
      "latitude": 51.707199,
      "longitude": 19.423447,
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
      "heading": 64,
      "squawk": "7470",
      "timestamp": 1664638931,
      "ems": null
    },
    {
      "latitude": 51.708298,
      "longitude": 19.427689,
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
      "heading": 69,
      "squawk": "7470",
      "timestamp": 1664638941,
      "ems": null
    },
    {
      "latitude": 51.709213,
      "longitude": 19.432068,
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
      "heading": 72,
      "squawk": "7470",
      "timestamp": 1664638946,
      "ems": null
    },
    {
      "latitude": 51.709579,
      "longitude": 19.434072,
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
      "heading": 73,
      "squawk": "7470",
      "timestamp": 1664638950,
      "ems": null
    },
    {
      "latitude": 51.710178,
      "longitude": 19.437027,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 72,
      "squawk": "7470",
      "timestamp": 1664638955,
      "ems": null
    },
    {
      "latitude": 51.710724,
      "longitude": 19.439789,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 72,
      "squawk": "7470",
      "timestamp": 1664638960,
      "ems": null
    },
    {
      "latitude": 51.711319,
      "longitude": 19.442757,
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
      "heading": 73,
      "squawk": "7470",
      "timestamp": 1664638965,
      "ems": null
    },
    {
      "latitude": 51.712097,
      "longitude": 19.446692,
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
      "heading": 73,
      "squawk": "7470",
      "timestamp": 1664638973,
      "ems": null
    },
    {
      "latitude": 51.713013,
      "longitude": 19.451591,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 72,
      "squawk": "7470",
      "timestamp": 1664638982,
      "ems": null
    },
    {
      "latitude": 51.713516,
      "longitude": 19.454782,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 77,
      "squawk": "7470",
      "timestamp": 1664638988,
      "ems": null
    },
    {
      "latitude": 51.713516,
      "longitude": 19.457159,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 97,
      "squawk": "7470",
      "timestamp": 1664638992,
      "ems": null
    },
    {
      "latitude": 51.713436,
      "longitude": 19.457626,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 100,
      "squawk": "7470",
      "timestamp": 1664638993,
      "ems": null
    },
    {
      "latitude": 51.713058,
      "longitude": 19.459236,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 112,
      "squawk": "7470",
      "timestamp": 1664638997,
      "ems": null
    },
    {
      "latitude": 51.712921,
      "longitude": 19.459682,
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
      "heading": 117,
      "squawk": "7470",
      "timestamp": 1664638998,
      "ems": null
    },
    {
      "latitude": 51.712051,
      "longitude": 19.461315,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 137,
      "squawk": "7470",
      "timestamp": 1664639002,
      "ems": null
    },
    {
      "latitude": 51.710953,
      "longitude": 19.462503,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 147,
      "squawk": "7470",
      "timestamp": 1664639006,
      "ems": null
    },
    {
      "latitude": 51.710224,
      "longitude": 19.462814,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 165,
      "squawk": "7470",
      "timestamp": 1664639009,
      "ems": null
    },
    {
      "latitude": 51.709061,
      "longitude": 19.462814,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 188,
      "squawk": "7470",
      "timestamp": 1664639013,
      "ems": null
    },
    {
      "latitude": 51.708298,
      "longitude": 19.462355,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 203,
      "squawk": "7470",
      "timestamp": 1664639015,
      "ems": null
    },
    {
      "latitude": 51.707428,
      "longitude": 19.461315,
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
      "heading": 220,
      "squawk": "7470",
      "timestamp": 1664639019,
      "ems": null
    },
    {
      "latitude": 51.706829,
      "longitude": 19.459991,
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
      "heading": 238,
      "squawk": "7470",
      "timestamp": 1664639022,
      "ems": null
    },
    {
      "latitude": 51.706688,
      "longitude": 19.459457,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 244,
      "squawk": "7470",
      "timestamp": 1664639023,
      "ems": null
    },
    {
      "latitude": 51.706375,
      "longitude": 19.457603,
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
      "heading": 257,
      "squawk": "7470",
      "timestamp": 1664639026,
      "ems": null
    },
    {
      "latitude": 51.706268,
      "longitude": 19.455261,
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
      "heading": 265,
      "squawk": "7470",
      "timestamp": 1664639030,
      "ems": null
    },
    {
      "latitude": 51.706604,
      "longitude": 19.452778,
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
      "heading": 280,
      "squawk": "7470",
      "timestamp": 1664639034,
      "ems": null
    },
    {
      "latitude": 51.707291,
      "longitude": 19.450701,
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
      "heading": 303,
      "squawk": "7470",
      "timestamp": 1664639038,
      "ems": null
    },
    {
      "latitude": 51.708645,
      "longitude": 19.448547,
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
      "heading": 320,
      "squawk": "7470",
      "timestamp": 1664639042,
      "ems": null
    },
    {
      "latitude": 51.709488,
      "longitude": 19.447582,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 333,
      "squawk": "7470",
      "timestamp": 1664639046,
      "ems": null
    },
    {
      "latitude": 51.711437,
      "longitude": 19.446335,
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
      "heading": 342,
      "squawk": "7470",
      "timestamp": 1664639050,
      "ems": null
    },
    {
      "latitude": 51.712738,
      "longitude": 19.445953,
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
      "heading": 352,
      "squawk": "7470",
      "timestamp": 1664639054,
      "ems": null
    },
    {
      "latitude": 51.714787,
      "longitude": 19.445801,
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
      "heading": 1,
      "squawk": "7470",
      "timestamp": 1664639058,
      "ems": null
    },
    {
      "latitude": 51.716511,
      "longitude": 19.446335,
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
      "heading": 16,
      "squawk": "7470",
      "timestamp": 1664639062,
      "ems": null
    },
    {
      "latitude": 51.71759,
      "longitude": 19.447138,
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
      "heading": 16,
      "squawk": "7470",
      "timestamp": 1664639065,
      "ems": null
    },
    {
      "latitude": 51.717819,
      "longitude": 19.447359,
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
      "heading": 16,
      "squawk": "7470",
      "timestamp": 1664639065,
      "ems": null
    },
    {
      "latitude": 51.718746,
      "longitude": 19.448776,
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
      "heading": 46,
      "squawk": "7470",
      "timestamp": 1664639069,
      "ems": null
    },
    {
      "latitude": 51.719467,
      "longitude": 19.450775,
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
      "heading": 67,
      "squawk": "7470",
      "timestamp": 1664639073,
      "ems": null
    },
    {
      "latitude": 51.719788,
      "longitude": 19.453299,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "7470",
      "timestamp": 1664639078,
      "ems": null
    },
    {
      "latitude": 51.719467,
      "longitude": 19.455303,
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
      "heading": 113,
      "squawk": "7470",
      "timestamp": 1664639082,
      "ems": null
    },
    {
      "latitude": 51.718323,
      "longitude": 19.456713,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 159,
      "squawk": "7470",
      "timestamp": 1664639086,
      "ems": null
    },
    {
      "latitude": 51.717133,
      "longitude": 19.45649,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 155,
      "squawk": "7470",
      "timestamp": 1664639090,
      "ems": null
    },
    {
      "latitude": 51.716278,
      "longitude": 19.455338,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 227,
      "squawk": "7470",
      "timestamp": 1664639094,
      "ems": null
    },
    {
      "latitude": 51.715897,
      "longitude": 19.452703,
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
      "heading": 269,
      "squawk": "7470",
      "timestamp": 1664639098,
      "ems": null
    },
    {
      "latitude": 51.716171,
      "longitude": 19.450996,
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
      "heading": 288,
      "squawk": "7470",
      "timestamp": 1664639102,
      "ems": null
    },
    {
      "latitude": 51.716812,
      "longitude": 19.449364,
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
      "heading": 315,
      "squawk": "7470",
      "timestamp": 1664639106,
      "ems": null
    },
    {
      "latitude": 51.718929,
      "longitude": 19.447021,
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
      "heading": 333,
      "squawk": "7470",
      "timestamp": 1664639110,
      "ems": null
    },
    {
      "latitude": 51.720474,
      "longitude": 19.445875,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 335,
      "squawk": "7470",
      "timestamp": 1664639114,
      "ems": null
    },
    {
      "latitude": 51.721939,
      "longitude": 19.444836,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 335,
      "squawk": "7470",
      "timestamp": 1664639118,
      "ems": null
    },
    {
      "latitude": 51.723679,
      "longitude": 19.443588,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 336,
      "squawk": "7470",
      "timestamp": 1664639122,
      "ems": null
    },
    {
      "latitude": 51.725281,
      "longitude": 19.442535,
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
      "heading": 336,
      "squawk": "7470",
      "timestamp": 1664639126,
      "ems": null
    },
    {
      "latitude": 51.726753,
      "longitude": 19.441452,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 335,
      "squawk": "7470",
      "timestamp": 1664639130,
      "ems": null
    },
    {
      "latitude": 51.728195,
      "longitude": 19.440002,
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
      "heading": 322,
      "squawk": "7470",
      "timestamp": 1664639134,
      "ems": null
    },
    {
      "latitude": 51.729546,
      "longitude": 19.437408,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 301,
      "squawk": "7470",
      "timestamp": 1664639138,
      "ems": null
    },
    {
      "latitude": 51.729965,
      "longitude": 19.435272,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 283,
      "squawk": "7470",
      "timestamp": 1664639142,
      "ems": null
    },
    {
      "latitude": 51.729858,
      "longitude": 19.432661,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 258,
      "squawk": "7470",
      "timestamp": 1664639146,
      "ems": null
    },
    {
      "latitude": 51.729126,
      "longitude": 19.429855,
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
      "heading": 243,
      "squawk": "7470",
      "timestamp": 1664639151,
      "ems": null
    },
    {
      "latitude": 51.728531,
      "longitude": 19.427837,
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
      "heading": 243,
      "squawk": "7470",
      "timestamp": 1664639155,
      "ems": null
    },
    {
      "latitude": 51.727917,
      "longitude": 19.42543,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 249,
      "squawk": "7470",
      "timestamp": 1664639159,
      "ems": null
    },
    {
      "latitude": 51.727634,
      "longitude": 19.424057,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 251,
      "squawk": "7470",
      "timestamp": 1664639163,
      "ems": null
    },
    {
      "latitude": 51.727295,
      "longitude": 19.422047,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 253,
      "squawk": "7470",
      "timestamp": 1664639167,
      "ems": null
    },
    {
      "latitude": 51.726799,
      "longitude": 19.419861,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 248,
      "squawk": "7470",
      "timestamp": 1664639171,
      "ems": null
    },
    {
      "latitude": 51.726334,
      "longitude": 19.417877,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 249,
      "squawk": "7470",
      "timestamp": 1664639175,
      "ems": null
    },
    {
      "latitude": 51.726013,
      "longitude": 19.416479,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 251,
      "squawk": "7470",
      "timestamp": 1664639179,
      "ems": null
    },
    {
      "latitude": 51.725555,
      "longitude": 19.414251,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 250,
      "squawk": "7470",
      "timestamp": 1664639183,
      "ems": null
    },
    {
      "latitude": 51.724548,
      "longitude": 19.410244,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 247,
      "squawk": "7470",
      "timestamp": 1664639191,
      "ems": null
    },
    {
      "latitude": 51.723679,
      "longitude": 19.406235,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 250,
      "squawk": "7470",
      "timestamp": 1664639200,
      "ems": null
    },
    {
      "latitude": 51.722843,
      "longitude": 19.402542,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 250,
      "squawk": "7470",
      "timestamp": 1664639208,
      "ems": null
    },
    {
      "latitude": 51.721863,
      "longitude": 19.398041,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 250,
      "squawk": "7470",
      "timestamp": 1664639216,
      "ems": null
    },
    {
      "latitude": 51.718281,
      "longitude": 19.381638,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 250,
      "squawk": "7470",
      "timestamp": 1664639254,
      "ems": null
    },
    {
      "latitude": 51.717163,
      "longitude": 19.37645,
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
      "heading": 249,
      "squawk": "7470",
      "timestamp": 1664639264,
      "ems": null
    },
    {
      "latitude": 51.716034,
      "longitude": 19.371346,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 252,
      "squawk": "7470",
      "timestamp": 1664639274,
      "ems": null
    },
    {
      "latitude": 51.715622,
      "longitude": 19.369045,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 254,
      "squawk": "7470",
      "timestamp": 1664639279,
      "ems": null
    },
    {
      "latitude": 51.714973,
      "longitude": 19.364853,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 256,
      "squawk": "7470",
      "timestamp": 1664639287,
      "ems": null
    },
    {
      "latitude": 51.714275,
      "longitude": 19.360275,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 255,
      "squawk": "7470",
      "timestamp": 1664639295,
      "ems": null
    },
    {
      "latitude": 51.713562,
      "longitude": 19.355089,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 257,
      "squawk": "7470",
      "timestamp": 1664639305,
      "ems": null
    },
    {
      "latitude": 51.713699,
      "longitude": 19.352566,
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
      "heading": 270,
      "squawk": "7470",
      "timestamp": 1664639309,
      "ems": null
    },
    {
      "latitude": 51.714386,
      "longitude": 19.350412,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 300,
      "squawk": "7470",
      "timestamp": 1664639313,
      "ems": null
    },
    {
      "latitude": 51.715164,
      "longitude": 19.348928,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 314,
      "squawk": "7470",
      "timestamp": 1664639317,
      "ems": null
    },
    {
      "latitude": 51.716766,
      "longitude": 19.346849,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 324,
      "squawk": "7470",
      "timestamp": 1664639321,
      "ems": null
    },
    {
      "latitude": 51.718597,
      "longitude": 19.34544,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 336,
      "squawk": "7470",
      "timestamp": 1664639326,
      "ems": null
    },
    {
      "latitude": 51.720421,
      "longitude": 19.34433,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 339,
      "squawk": "7470",
      "timestamp": 1664639330,
      "ems": null
    },
    {
      "latitude": 51.721725,
      "longitude": 19.343491,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 338,
      "squawk": "7470",
      "timestamp": 1664639334,
      "ems": null
    },
    {
      "latitude": 51.723122,
      "longitude": 19.342499,
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
      "heading": 337,
      "squawk": "7470",
      "timestamp": 1664639338,
      "ems": null
    },
    {
      "latitude": 51.724609,
      "longitude": 19.341507,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 336,
      "squawk": "7470",
      "timestamp": 1664639342,
      "ems": null
    },
    {
      "latitude": 51.726288,
      "longitude": 19.340466,
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
      "heading": 339,
      "squawk": "7470",
      "timestamp": 1664639346,
      "ems": null
    },
    {
      "latitude": 51.727936,
      "longitude": 19.339426,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 339,
      "squawk": "7470",
      "timestamp": 1664639350,
      "ems": null
    },
    {
      "latitude": 51.729218,
      "longitude": 19.338837,
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
      "heading": 345,
      "squawk": "7470",
      "timestamp": 1664639354,
      "ems": null
    },
    {
      "latitude": 51.731277,
      "longitude": 19.338461,
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
      "heading": 356,
      "squawk": "7470",
      "timestamp": 1664639359,
      "ems": null
    },
    {
      "latitude": 51.732895,
      "longitude": 19.338684,
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
      "heading": 10,
      "squawk": "7470",
      "timestamp": 1664639363,
      "ems": null
    },
    {
      "latitude": 51.735168,
      "longitude": 19.339947,
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
      "heading": 25,
      "squawk": "7470",
      "timestamp": 1664639368,
      "ems": null
    },
    {
      "latitude": 51.7369,
      "longitude": 19.341812,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 38,
      "squawk": "7470",
      "timestamp": 1664639372,
      "ems": null
    },
    {
      "latitude": 51.738064,
      "longitude": 19.343567,
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
      "heading": 46,
      "squawk": "7470",
      "timestamp": 1664639376,
      "ems": null
    },
    {
      "latitude": 51.739273,
      "longitude": 19.346237,
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
      "heading": 58,
      "squawk": "7470",
      "timestamp": 1664639380,
      "ems": null
    },
    {
      "latitude": 51.740158,
      "longitude": 19.349289,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 67,
      "squawk": "7470",
      "timestamp": 1664639385,
      "ems": null
    },
    {
      "latitude": 51.740719,
      "longitude": 19.352036,
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
      "heading": 72,
      "squawk": "7470",
      "timestamp": 1664639389,
      "ems": null
    },
    {
      "latitude": 51.741348,
      "longitude": 19.355387,
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
      "heading": 73,
      "squawk": "7470",
      "timestamp": 1664639394,
      "ems": null
    },
    {
      "latitude": 51.741882,
      "longitude": 19.358368,
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
      "heading": 73,
      "squawk": "7470",
      "timestamp": 1664639398,
      "ems": null
    },
    {
      "latitude": 51.742485,
      "longitude": 19.361954,
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
      "heading": 74,
      "squawk": "7470",
      "timestamp": 1664639403,
      "ems": null
    },
    {
      "latitude": 51.742905,
      "longitude": 19.364517,
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
      "heading": 76,
      "squawk": "7470",
      "timestamp": 1664639407,
      "ems": null
    },
    {
      "latitude": 51.743271,
      "longitude": 19.367115,
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
      "heading": 78,
      "squawk": "7470",
      "timestamp": 1664639411,
      "ems": null
    },
    {
      "latitude": 51.743649,
      "longitude": 19.370728,
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
      "heading": 81,
      "squawk": "7470",
      "timestamp": 1664639416,
      "ems": null
    },
    {
      "latitude": 51.743958,
      "longitude": 19.373722,
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
      "heading": 77,
      "squawk": "7470",
      "timestamp": 1664639420,
      "ems": null
    },
    {
      "latitude": 51.745056,
      "longitude": 19.379511,
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
      "heading": 72,
      "squawk": "7470",
      "timestamp": 1664639428,
      "ems": null
    },
    {
      "latitude": 51.746017,
      "longitude": 19.38456,
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
      "heading": 73,
      "squawk": "7470",
      "timestamp": 1664639436,
      "ems": null
    },
    {
      "latitude": 51.747299,
      "longitude": 19.391611,
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
      "heading": 74,
      "squawk": "7470",
      "timestamp": 1664639445,
      "ems": null
    },
    {
      "latitude": 51.748215,
      "longitude": 19.397179,
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
      "heading": 74,
      "squawk": "7470",
      "timestamp": 1664639454,
      "ems": null
    },
    {
      "latitude": 51.749237,
      "longitude": 19.402847,
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
      "heading": 74,
      "squawk": "7470",
      "timestamp": 1664639463,
      "ems": null
    },
    {
      "latitude": 51.75,
      "longitude": 19.407125,
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
      "heading": 74,
      "squawk": "7470",
      "timestamp": 1664639471,
      "ems": null
    },
    {
      "latitude": 51.750916,
      "longitude": 19.4121,
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
      "heading": 72,
      "squawk": "7470",
      "timestamp": 1664639479,
      "ems": null
    },
    {
      "latitude": 51.751518,
      "longitude": 19.416428,
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
      "heading": 83,
      "squawk": "7470",
      "timestamp": 1664639487,
      "ems": null
    },
    {
      "latitude": 51.75119,
      "longitude": 19.419174,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 108,
      "squawk": "7470",
      "timestamp": 1664639492,
      "ems": null
    },
    {
      "latitude": 51.750401,
      "longitude": 19.42131,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 130,
      "squawk": "7470",
      "timestamp": 1664639496,
      "ems": null
    },
    {
      "latitude": 51.749561,
      "longitude": 19.422455,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 141,
      "squawk": "7470",
      "timestamp": 1664639500,
      "ems": null
    },
    {
      "latitude": 51.748672,
      "longitude": 19.423309,
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
      "heading": 152,
      "squawk": "7470",
      "timestamp": 1664639504,
      "ems": null
    },
    {
      "latitude": 51.74733,
      "longitude": 19.424133,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 162,
      "squawk": "7470",
      "timestamp": 1664639508,
      "ems": null
    },
    {
      "latitude": 51.746017,
      "longitude": 19.424644,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 167,
      "squawk": "7470",
      "timestamp": 1664639513,
      "ems": null
    },
    {
      "latitude": 51.744629,
      "longitude": 19.425201,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 164,
      "squawk": "7470",
      "timestamp": 1664639517,
      "ems": null
    },
    {
      "latitude": 51.742859,
      "longitude": 19.426128,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 161,
      "squawk": "7470",
      "timestamp": 1664639523,
      "ems": null
    },
    {
      "latitude": 51.741302,
      "longitude": 19.426947,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 162,
      "squawk": "7470",
      "timestamp": 1664639528,
      "ems": null
    },
    {
      "latitude": 51.739834,
      "longitude": 19.427719,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 160,
      "squawk": "7470",
      "timestamp": 1664639533,
      "ems": null
    },
    {
      "latitude": 51.73732,
      "longitude": 19.429173,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 161,
      "squawk": "7470",
      "timestamp": 1664639541,
      "ems": null
    },
    {
      "latitude": 51.734573,
      "longitude": 19.430286,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 168,
      "squawk": "7470",
      "timestamp": 1664639550,
      "ems": null
    },
    {
      "latitude": 51.733364,
      "longitude": 19.430084,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 190,
      "squawk": "7470",
      "timestamp": 1664639554,
      "ems": null
    },
    {
      "latitude": 51.731644,
      "longitude": 19.429098,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 205,
      "squawk": "7470",
      "timestamp": 1664639559,
      "ems": null
    },
    {
      "latitude": 51.730179,
      "longitude": 19.42754,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 215,
      "squawk": "7470",
      "timestamp": 1664639564,
      "ems": null
    },
    {
      "latitude": 51.72876,
      "longitude": 19.42561,
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
      "heading": 225,
      "squawk": "7470",
      "timestamp": 1664639569,
      "ems": null
    },
    {
      "latitude": 51.727798,
      "longitude": 19.423679,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 217,
      "squawk": "7470",
      "timestamp": 1664639574,
      "ems": null
    },
    {
      "latitude": 51.727123,
      "longitude": 19.421768,
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
      "heading": 243,
      "squawk": "7470",
      "timestamp": 1664639578,
      "ems": null
    },
    {
      "latitude": 51.726654,
      "longitude": 19.419968,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 251,
      "squawk": "7470",
      "timestamp": 1664639582,
      "ems": null
    },
    {
      "latitude": 51.726192,
      "longitude": 19.417572,
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
      "heading": 253,
      "squawk": "7470",
      "timestamp": 1664639586,
      "ems": null
    },
    {
      "latitude": 51.725739,
      "longitude": 19.414995,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 252,
      "squawk": "7470",
      "timestamp": 1664639591,
      "ems": null
    },
    {
      "latitude": 51.725216,
      "longitude": 19.412613,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 251,
      "squawk": "7470",
      "timestamp": 1664639595,
      "ems": null
    },
    {
      "latitude": 51.724823,
      "longitude": 19.41106,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 248,
      "squawk": "7470",
      "timestamp": 1664639599,
      "ems": null
    },
    {
      "latitude": 51.724518,
      "longitude": 19.40979,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 248,
      "squawk": "7470",
      "timestamp": 1664639601,
      "ems": null
    },
    {
      "latitude": 51.723175,
      "longitude": 19.404083,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 249,
      "squawk": "7470",
      "timestamp": 1664639612,
      "ems": null
    },
    {
      "latitude": 51.722031,
      "longitude": 19.398737,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 250,
      "squawk": "7470",
      "timestamp": 1664639624,
      "ems": null
    },
    {
      "latitude": 51.723484,
      "longitude": 19.405382,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 37,
        "kts": 20,
        "mph": 23
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 70,
      "squawk": "7470",
      "timestamp": 1664639743,
      "ems": null
    },
    {
      "latitude": 51.723503,
      "longitude": 19.406166,
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
      "heading": 109,
      "squawk": "7470",
      "timestamp": 1664639750,
      "ems": null
    },
    {
      "latitude": 51.722748,
      "longitude": 19.407196,
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
      "heading": 143,
      "squawk": "7470",
      "timestamp": 1664639767,
      "ems": null
    },
    {
      "latitude": 51.722477,
      "longitude": 19.407516,
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
      "heading": 143,
      "squawk": "7470",
      "timestamp": 1664639773,
      "ems": null
    }
  ]
};
