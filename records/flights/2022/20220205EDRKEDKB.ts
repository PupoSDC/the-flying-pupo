import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220205EDRKEDKB",
    callsign: "DEFCZ",
    name: "",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 1, 5, 14, 35).getTime(),
    arrival: new Date(2022, 1, 5, 15, 15).getTime(),
    singleEnginePistonTime: 40,
    picTime: 40,
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
      modes: "3D1229",
      registration: "D-EFCZ",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      name: "Koblenz",
      code: "EDRK",
      position: {
        latitude: 50.195,
        longitude: 7.317,
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
      "latitude": 50.322464,
      "longitude": 7.517178,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1644071790,
      "ems": null
    },
    {
      "latitude": 50.322281,
      "longitude": 7.512769,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1644071801,
      "ems": null
    },
    {
      "latitude": 50.322052,
      "longitude": 7.510023,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1644071807,
      "ems": null
    },
    {
      "latitude": 50.321804,
      "longitude": 7.507894,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1644071812,
      "ems": null
    },
    {
      "latitude": 50.321526,
      "longitude": 7.505592,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1644071817,
      "ems": null
    },
    {
      "latitude": 50.321152,
      "longitude": 7.503068,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1644071823,
      "ems": null
    },
    {
      "latitude": 50.320782,
      "longitude": 7.501138,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1644071828,
      "ems": null
    },
    {
      "latitude": 50.319805,
      "longitude": 7.497353,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1644071839,
      "ems": null
    },
    {
      "latitude": 50.31926,
      "longitude": 7.495278,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 247,
      "squawk": "4451",
      "timestamp": 1644071844,
      "ems": null
    },
    {
      "latitude": 50.318455,
      "longitude": 7.491043,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1644071855,
      "ems": null
    },
    {
      "latitude": 50.318069,
      "longitude": 7.488917,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1644071860,
      "ems": null
    },
    {
      "latitude": 50.317661,
      "longitude": 7.48696,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1644071865,
      "ems": null
    },
    {
      "latitude": 50.317291,
      "longitude": 7.485104,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1644071871,
      "ems": null
    },
    {
      "latitude": 50.317009,
      "longitude": 7.482803,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1644071876,
      "ems": null
    },
    {
      "latitude": 50.316963,
      "longitude": 7.481392,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1644071880,
      "ems": null
    },
    {
      "latitude": 50.317104,
      "longitude": 7.479091,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 277,
      "squawk": "4451",
      "timestamp": 1644071885,
      "ems": null
    },
    {
      "latitude": 50.317337,
      "longitude": 7.476847,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1644071891,
      "ems": null
    },
    {
      "latitude": 50.317841,
      "longitude": 7.474462,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1644071896,
      "ems": null
    },
    {
      "latitude": 50.318115,
      "longitude": 7.473739,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1644071900,
      "ems": null
    },
    {
      "latitude": 50.31934,
      "longitude": 7.471446,
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
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1644071904,
      "ems": null
    },
    {
      "latitude": 50.320919,
      "longitude": 7.469664,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1644071908,
      "ems": null
    },
    {
      "latitude": 50.322327,
      "longitude": 7.468751,
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
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1644071911,
      "ems": null
    },
    {
      "latitude": 50.324226,
      "longitude": 7.468105,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1644071916,
      "ems": null
    },
    {
      "latitude": 50.326366,
      "longitude": 7.467586,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1644071921,
      "ems": null
    },
    {
      "latitude": 50.328873,
      "longitude": 7.467089,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1644071925,
      "ems": null
    },
    {
      "latitude": 50.33107,
      "longitude": 7.466695,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1644071929,
      "ems": null
    },
    {
      "latitude": 50.333584,
      "longitude": 7.466398,
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1644071934,
      "ems": null
    },
    {
      "latitude": 50.336376,
      "longitude": 7.466249,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1644071940,
      "ems": null
    },
    {
      "latitude": 50.338943,
      "longitude": 7.466294,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1644071944,
      "ems": null
    },
    {
      "latitude": 50.341553,
      "longitude": 7.466366,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1644071949,
      "ems": null
    },
    {
      "latitude": 50.34343,
      "longitude": 7.466511,
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
      "heading": 3,
      "squawk": "4451",
      "timestamp": 1644071953,
      "ems": null
    },
    {
      "latitude": 50.345535,
      "longitude": 7.466728,
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
      "heading": 3,
      "squawk": "4451",
      "timestamp": 1644071957,
      "ems": null
    },
    {
      "latitude": 50.347363,
      "longitude": 7.466991,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1644071961,
      "ems": null
    },
    {
      "latitude": 50.349411,
      "longitude": 7.467363,
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
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1644071965,
      "ems": null
    },
    {
      "latitude": 50.351879,
      "longitude": 7.467808,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1644071969,
      "ems": null
    },
    {
      "latitude": 50.354206,
      "longitude": 7.468105,
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
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1644071974,
      "ems": null
    },
    {
      "latitude": 50.357883,
      "longitude": 7.468105,
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
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1644071982,
      "ems": null
    },
    {
      "latitude": 50.359978,
      "longitude": 7.467808,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1644071986,
      "ems": null
    },
    {
      "latitude": 50.362015,
      "longitude": 7.467234,
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1644071990,
      "ems": null
    },
    {
      "latitude": 50.363571,
      "longitude": 7.466656,
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
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1644071994,
      "ems": null
    },
    {
      "latitude": 50.365379,
      "longitude": 7.465804,
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
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1644071998,
      "ems": null
    },
    {
      "latitude": 50.366776,
      "longitude": 7.464849,
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
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1644072002,
      "ems": null
    },
    {
      "latitude": 50.368332,
      "longitude": 7.463692,
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
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1644072006,
      "ems": null
    },
    {
      "latitude": 50.369751,
      "longitude": 7.462536,
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
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1644072010,
      "ems": null
    },
    {
      "latitude": 50.371262,
      "longitude": 7.461235,
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
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1644072014,
      "ems": null
    },
    {
      "latitude": 50.372688,
      "longitude": 7.459939,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1644072018,
      "ems": null
    },
    {
      "latitude": 50.373806,
      "longitude": 7.458826,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072022,
      "ems": null
    },
    {
      "latitude": 50.374828,
      "longitude": 7.457787,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1644072025,
      "ems": null
    },
    {
      "latitude": 50.375702,
      "longitude": 7.456898,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1644072027,
      "ems": null
    },
    {
      "latitude": 50.376553,
      "longitude": 7.456005,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1644072030,
      "ems": null
    },
    {
      "latitude": 50.377625,
      "longitude": 7.454874,
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
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072033,
      "ems": null
    },
    {
      "latitude": 50.379715,
      "longitude": 7.453036,
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
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1644072039,
      "ems": null
    },
    {
      "latitude": 50.38179,
      "longitude": 7.45126,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1644072046,
      "ems": null
    },
    {
      "latitude": 50.383858,
      "longitude": 7.449547,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1644072052,
      "ems": null
    },
    {
      "latitude": 50.38586,
      "longitude": 7.447765,
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
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1644072057,
      "ems": null
    },
    {
      "latitude": 50.387024,
      "longitude": 7.4468,
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
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1644072061,
      "ems": null
    },
    {
      "latitude": 50.388794,
      "longitude": 7.445241,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1644072066,
      "ems": null
    },
    {
      "latitude": 50.390285,
      "longitude": 7.44398,
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
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1644072072,
      "ems": null
    },
    {
      "latitude": 50.392845,
      "longitude": 7.441752,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1644072078,
      "ems": null
    },
    {
      "latitude": 50.394985,
      "longitude": 7.439748,
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
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1644072085,
      "ems": null
    },
    {
      "latitude": 50.396801,
      "longitude": 7.43819,
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
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1644072090,
      "ems": null
    },
    {
      "latitude": 50.398895,
      "longitude": 7.436408,
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
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1644072097,
      "ems": null
    },
    {
      "latitude": 50.400696,
      "longitude": 7.434998,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1644072102,
      "ems": null
    },
    {
      "latitude": 50.40303,
      "longitude": 7.433046,
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
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1644072109,
      "ems": null
    },
    {
      "latitude": 50.404907,
      "longitude": 7.431384,
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
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1644072114,
      "ems": null
    },
    {
      "latitude": 50.406967,
      "longitude": 7.42936,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072121,
      "ems": null
    },
    {
      "latitude": 50.40881,
      "longitude": 7.427649,
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
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1644072126,
      "ems": null
    },
    {
      "latitude": 50.410908,
      "longitude": 7.425644,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1644072133,
      "ems": null
    },
    {
      "latitude": 50.412956,
      "longitude": 7.423789,
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
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1644072139,
      "ems": null
    },
    {
      "latitude": 50.414722,
      "longitude": 7.422007,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1644072144,
      "ems": null
    },
    {
      "latitude": 50.416763,
      "longitude": 7.419747,
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
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1644072151,
      "ems": null
    },
    {
      "latitude": 50.418682,
      "longitude": 7.417627,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1644072157,
      "ems": null
    },
    {
      "latitude": 50.419556,
      "longitude": 7.416639,
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1644072160,
      "ems": null
    },
    {
      "latitude": 50.420425,
      "longitude": 7.415627,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1644072163,
      "ems": null
    },
    {
      "latitude": 50.421429,
      "longitude": 7.414435,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1644072166,
      "ems": null
    },
    {
      "latitude": 50.422302,
      "longitude": 7.413242,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1644072169,
      "ems": null
    },
    {
      "latitude": 50.423126,
      "longitude": 7.412085,
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
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1644072172,
      "ems": null
    },
    {
      "latitude": 50.423847,
      "longitude": 7.411021,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1644072175,
      "ems": null
    },
    {
      "latitude": 50.424637,
      "longitude": 7.409845,
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
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1644072178,
      "ems": null
    },
    {
      "latitude": 50.425598,
      "longitude": 7.408472,
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
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1644072181,
      "ems": null
    },
    {
      "latitude": 50.427383,
      "longitude": 7.406158,
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
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1644072187,
      "ems": null
    },
    {
      "latitude": 50.429108,
      "longitude": 7.403894,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1644072193,
      "ems": null
    },
    {
      "latitude": 50.430878,
      "longitude": 7.401668,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1644072199,
      "ems": null
    },
    {
      "latitude": 50.431732,
      "longitude": 7.400665,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1644072202,
      "ems": null
    },
    {
      "latitude": 50.433437,
      "longitude": 7.398476,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1644072208,
      "ems": null
    },
    {
      "latitude": 50.435074,
      "longitude": 7.396473,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1644072214,
      "ems": null
    },
    {
      "latitude": 50.436722,
      "longitude": 7.394305,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1644072220,
      "ems": null
    },
    {
      "latitude": 50.438374,
      "longitude": 7.391943,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1644072226,
      "ems": null
    },
    {
      "latitude": 50.439148,
      "longitude": 7.390835,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1644072229,
      "ems": null
    },
    {
      "latitude": 50.440018,
      "longitude": 7.389534,
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
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1644072232,
      "ems": null
    },
    {
      "latitude": 50.441631,
      "longitude": 7.387044,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1644072238,
      "ems": null
    },
    {
      "latitude": 50.442329,
      "longitude": 7.38593,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1644072241,
      "ems": null
    },
    {
      "latitude": 50.443169,
      "longitude": 7.384668,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1644072244,
      "ems": null
    },
    {
      "latitude": 50.445007,
      "longitude": 7.382018,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1644072250,
      "ems": null
    },
    {
      "latitude": 50.446613,
      "longitude": 7.379695,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1644072256,
      "ems": null
    },
    {
      "latitude": 50.448288,
      "longitude": 7.377245,
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
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1644072262,
      "ems": null
    },
    {
      "latitude": 50.449963,
      "longitude": 7.375093,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1644072268,
      "ems": null
    },
    {
      "latitude": 50.451126,
      "longitude": 7.373608,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1644072271,
      "ems": null
    },
    {
      "latitude": 50.451874,
      "longitude": 7.372717,
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
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1644072274,
      "ems": null
    },
    {
      "latitude": 50.45369,
      "longitude": 7.370341,
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
      "squawk": "4451",
      "timestamp": 1644072280,
      "ems": null
    },
    {
      "latitude": 50.454575,
      "longitude": 7.369369,
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1644072283,
      "ems": null
    },
    {
      "latitude": 50.455536,
      "longitude": 7.368285,
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1644072286,
      "ems": null
    },
    {
      "latitude": 50.456341,
      "longitude": 7.367224,
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
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1644072289,
      "ems": null
    },
    {
      "latitude": 50.458157,
      "longitude": 7.364923,
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
      "squawk": "4451",
      "timestamp": 1644072295,
      "ems": null
    },
    {
      "latitude": 50.45974,
      "longitude": 7.36277,
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
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1644072301,
      "ems": null
    },
    {
      "latitude": 50.461414,
      "longitude": 7.360692,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1644072307,
      "ems": null
    },
    {
      "latitude": 50.462952,
      "longitude": 7.359058,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072313,
      "ems": null
    },
    {
      "latitude": 50.464188,
      "longitude": 7.358021,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1644072316,
      "ems": null
    },
    {
      "latitude": 50.465103,
      "longitude": 7.357226,
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
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1644072319,
      "ems": null
    },
    {
      "latitude": 50.465885,
      "longitude": 7.356608,
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
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1644072322,
      "ems": null
    },
    {
      "latitude": 50.466888,
      "longitude": 7.355708,
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
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1644072325,
      "ems": null
    },
    {
      "latitude": 50.467575,
      "longitude": 7.355058,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1644072328,
      "ems": null
    },
    {
      "latitude": 50.468723,
      "longitude": 7.354085,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1644072331,
      "ems": null
    },
    {
      "latitude": 50.469654,
      "longitude": 7.353268,
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
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1644072334,
      "ems": null
    },
    {
      "latitude": 50.471054,
      "longitude": 7.35195,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1644072340,
      "ems": null
    },
    {
      "latitude": 50.473099,
      "longitude": 7.349928,
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
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1644072346,
      "ems": null
    },
    {
      "latitude": 50.473938,
      "longitude": 7.348963,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1644072349,
      "ems": null
    },
    {
      "latitude": 50.474728,
      "longitude": 7.347998,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1644072352,
      "ems": null
    },
    {
      "latitude": 50.475567,
      "longitude": 7.346884,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1644072355,
      "ems": null
    },
    {
      "latitude": 50.476219,
      "longitude": 7.346142,
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1644072358,
      "ems": null
    },
    {
      "latitude": 50.477005,
      "longitude": 7.345228,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1644072361,
      "ems": null
    },
    {
      "latitude": 50.477966,
      "longitude": 7.344143,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1644072364,
      "ems": null
    },
    {
      "latitude": 50.479664,
      "longitude": 7.342282,
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
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1644072370,
      "ems": null
    },
    {
      "latitude": 50.4814,
      "longitude": 7.340457,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1644072376,
      "ems": null
    },
    {
      "latitude": 50.48325,
      "longitude": 7.338645,
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
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072382,
      "ems": null
    },
    {
      "latitude": 50.484924,
      "longitude": 7.337011,
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
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072388,
      "ems": null
    },
    {
      "latitude": 50.486664,
      "longitude": 7.335253,
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
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1644072394,
      "ems": null
    },
    {
      "latitude": 50.48851,
      "longitude": 7.3333,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1644072400,
      "ems": null
    },
    {
      "latitude": 50.490093,
      "longitude": 7.331815,
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
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072406,
      "ems": null
    },
    {
      "latitude": 50.492249,
      "longitude": 7.329471,
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
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1644072413,
      "ems": null
    },
    {
      "latitude": 50.493584,
      "longitude": 7.327955,
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
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1644072417,
      "ems": null
    },
    {
      "latitude": 50.495499,
      "longitude": 7.326074,
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
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072424,
      "ems": null
    },
    {
      "latitude": 50.497192,
      "longitude": 7.324411,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072430,
      "ems": null
    },
    {
      "latitude": 50.499298,
      "longitude": 7.322315,
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
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1644072436,
      "ems": null
    },
    {
      "latitude": 50.501171,
      "longitude": 7.320532,
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
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1644072442,
      "ems": null
    },
    {
      "latitude": 50.502102,
      "longitude": 7.319641,
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
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1644072445,
      "ems": null
    },
    {
      "latitude": 50.504059,
      "longitude": 7.318082,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1644072451,
      "ems": null
    },
    {
      "latitude": 50.505981,
      "longitude": 7.316389,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1644072457,
      "ems": null
    },
    {
      "latitude": 50.507874,
      "longitude": 7.314519,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072463,
      "ems": null
    },
    {
      "latitude": 50.509598,
      "longitude": 7.312812,
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
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1644072469,
      "ems": null
    },
    {
      "latitude": 50.511475,
      "longitude": 7.310895,
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
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072475,
      "ems": null
    },
    {
      "latitude": 50.513554,
      "longitude": 7.308952,
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
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1644072481,
      "ems": null
    },
    {
      "latitude": 50.515732,
      "longitude": 7.306993,
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
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1644072487,
      "ems": null
    },
    {
      "latitude": 50.5177,
      "longitude": 7.305113,
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
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072493,
      "ems": null
    },
    {
      "latitude": 50.519188,
      "longitude": 7.303681,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1644072499,
      "ems": null
    },
    {
      "latitude": 50.521545,
      "longitude": 7.301644,
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
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1644072505,
      "ems": null
    },
    {
      "latitude": 50.523605,
      "longitude": 7.299909,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1644072512,
      "ems": null
    },
    {
      "latitude": 50.525345,
      "longitude": 7.298319,
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
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1644072518,
      "ems": null
    },
    {
      "latitude": 50.527473,
      "longitude": 7.296258,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072524,
      "ems": null
    },
    {
      "latitude": 50.529236,
      "longitude": 7.294416,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1644072529,
      "ems": null
    },
    {
      "latitude": 50.531197,
      "longitude": 7.292398,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072536,
      "ems": null
    },
    {
      "latitude": 50.533108,
      "longitude": 7.290617,
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
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1644072542,
      "ems": null
    },
    {
      "latitude": 50.535004,
      "longitude": 7.289067,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1644072547,
      "ems": null
    },
    {
      "latitude": 50.536179,
      "longitude": 7.288167,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1644072551,
      "ems": null
    },
    {
      "latitude": 50.537247,
      "longitude": 7.287405,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1644072555,
      "ems": null
    },
    {
      "latitude": 50.539307,
      "longitude": 7.285887,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1644072560,
      "ems": null
    },
    {
      "latitude": 50.54023,
      "longitude": 7.285272,
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
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1644072563,
      "ems": null
    },
    {
      "latitude": 50.541206,
      "longitude": 7.284455,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1644072565,
      "ems": null
    },
    {
      "latitude": 50.543015,
      "longitude": 7.282996,
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
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1644072571,
      "ems": null
    },
    {
      "latitude": 50.545029,
      "longitude": 7.281406,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1644072578,
      "ems": null
    },
    {
      "latitude": 50.546906,
      "longitude": 7.279816,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1644072584,
      "ems": null
    },
    {
      "latitude": 50.548691,
      "longitude": 7.278298,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1644072590,
      "ems": null
    },
    {
      "latitude": 50.549538,
      "longitude": 7.277403,
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
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072593,
      "ems": null
    },
    {
      "latitude": 50.550476,
      "longitude": 7.276491,
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
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1644072596,
      "ems": null
    },
    {
      "latitude": 50.552284,
      "longitude": 7.274879,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1644072602,
      "ems": null
    },
    {
      "latitude": 50.554779,
      "longitude": 7.272805,
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
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1644072609,
      "ems": null
    },
    {
      "latitude": 50.555786,
      "longitude": 7.271865,
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
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072613,
      "ems": null
    },
    {
      "latitude": 50.556931,
      "longitude": 7.270636,
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
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1644072617,
      "ems": null
    },
    {
      "latitude": 50.559456,
      "longitude": 7.267753,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1644072625,
      "ems": null
    },
    {
      "latitude": 50.560574,
      "longitude": 7.266343,
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
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1644072629,
      "ems": null
    },
    {
      "latitude": 50.561687,
      "longitude": 7.26508,
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
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1644072633,
      "ems": null
    },
    {
      "latitude": 50.564346,
      "longitude": 7.262469,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072641,
      "ems": null
    },
    {
      "latitude": 50.567001,
      "longitude": 7.259795,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1644072649,
      "ems": null
    },
    {
      "latitude": 50.567974,
      "longitude": 7.258919,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072653,
      "ems": null
    },
    {
      "latitude": 50.570114,
      "longitude": 7.256692,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1644072659,
      "ems": null
    },
    {
      "latitude": 50.571838,
      "longitude": 7.254985,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1644072664,
      "ems": null
    },
    {
      "latitude": 50.57373,
      "longitude": 7.253,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1644072670,
      "ems": null
    },
    {
      "latitude": 50.575699,
      "longitude": 7.250832,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1644072677,
      "ems": null
    },
    {
      "latitude": 50.577301,
      "longitude": 7.249097,
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1644072683,
      "ems": null
    },
    {
      "latitude": 50.578915,
      "longitude": 7.247191,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1644072688,
      "ems": null
    },
    {
      "latitude": 50.580551,
      "longitude": 7.245411,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1644072694,
      "ems": null
    },
    {
      "latitude": 50.582172,
      "longitude": 7.243925,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1644072701,
      "ems": null
    },
    {
      "latitude": 50.584499,
      "longitude": 7.241475,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1644072707,
      "ems": null
    },
    {
      "latitude": 50.586407,
      "longitude": 7.239619,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1644072713,
      "ems": null
    },
    {
      "latitude": 50.58815,
      "longitude": 7.237677,
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
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1644072719,
      "ems": null
    },
    {
      "latitude": 50.590027,
      "longitude": 7.235798,
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
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1644072724,
      "ems": null
    },
    {
      "latitude": 50.592319,
      "longitude": 7.233681,
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
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1644072731,
      "ems": null
    },
    {
      "latitude": 50.593323,
      "longitude": 7.232835,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1644072734,
      "ems": null
    },
    {
      "latitude": 50.594368,
      "longitude": 7.232048,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1644072737,
      "ems": null
    },
    {
      "latitude": 50.595428,
      "longitude": 7.231172,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1644072740,
      "ems": null
    },
    {
      "latitude": 50.596298,
      "longitude": 7.230522,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1644072742,
      "ems": null
    },
    {
      "latitude": 50.59758,
      "longitude": 7.229746,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1644072746,
      "ems": null
    },
    {
      "latitude": 50.598724,
      "longitude": 7.229076,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1644072749,
      "ems": null
    },
    {
      "latitude": 50.599861,
      "longitude": 7.228484,
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
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1644072752,
      "ems": null
    },
    {
      "latitude": 50.601013,
      "longitude": 7.227775,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1644072755,
      "ems": null
    },
    {
      "latitude": 50.601974,
      "longitude": 7.227342,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1644072758,
      "ems": null
    },
    {
      "latitude": 50.603119,
      "longitude": 7.226763,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1644072761,
      "ems": null
    },
    {
      "latitude": 50.604218,
      "longitude": 7.226185,
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
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1644072764,
      "ems": null
    },
    {
      "latitude": 50.606052,
      "longitude": 7.224847,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1644072770,
      "ems": null
    },
    {
      "latitude": 50.606983,
      "longitude": 7.223659,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1644072773,
      "ems": null
    },
    {
      "latitude": 50.60759,
      "longitude": 7.222546,
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
      "heading": 309,
      "squawk": "4451",
      "timestamp": 1644072776,
      "ems": null
    },
    {
      "latitude": 50.608101,
      "longitude": 7.221507,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1644072779,
      "ems": null
    },
    {
      "latitude": 50.608612,
      "longitude": 7.219969,
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
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1644072782,
      "ems": null
    },
    {
      "latitude": 50.609024,
      "longitude": 7.218596,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1644072785,
      "ems": null
    },
    {
      "latitude": 50.60939,
      "longitude": 7.217295,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1644072788,
      "ems": null
    },
    {
      "latitude": 50.609711,
      "longitude": 7.216211,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1644072791,
      "ems": null
    },
    {
      "latitude": 50.610149,
      "longitude": 7.214677,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1644072794,
      "ems": null
    },
    {
      "latitude": 50.610535,
      "longitude": 7.213464,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1644072797,
      "ems": null
    },
    {
      "latitude": 50.610901,
      "longitude": 7.212307,
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
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1644072800,
      "ems": null
    },
    {
      "latitude": 50.611359,
      "longitude": 7.210862,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1644072803,
      "ems": null
    },
    {
      "latitude": 50.611778,
      "longitude": 7.209481,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1644072806,
      "ems": null
    },
    {
      "latitude": 50.612106,
      "longitude": 7.208442,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1644072809,
      "ems": null
    },
    {
      "latitude": 50.613007,
      "longitude": 7.205947,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1644072815,
      "ems": null
    },
    {
      "latitude": 50.613464,
      "longitude": 7.204718,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1644072818,
      "ems": null
    },
    {
      "latitude": 50.613968,
      "longitude": 7.203691,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1644072821,
      "ems": null
    },
    {
      "latitude": 50.614655,
      "longitude": 7.202188,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 307,
      "squawk": "4451",
      "timestamp": 1644072824,
      "ems": null
    },
    {
      "latitude": 50.615223,
      "longitude": 7.201093,
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
      "heading": 311,
      "squawk": "4451",
      "timestamp": 1644072827,
      "ems": null
    },
    {
      "latitude": 50.615688,
      "longitude": 7.200425,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1644072830,
      "ems": null
    },
    {
      "latitude": 50.61676,
      "longitude": 7.199008,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1644072833,
      "ems": null
    },
    {
      "latitude": 50.617599,
      "longitude": 7.198198,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1644072836,
      "ems": null
    },
    {
      "latitude": 50.618683,
      "longitude": 7.197346,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1644072839,
      "ems": null
    },
    {
      "latitude": 50.619553,
      "longitude": 7.196861,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1644072842,
      "ems": null
    },
    {
      "latitude": 50.620789,
      "longitude": 7.196117,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1644072845,
      "ems": null
    },
    {
      "latitude": 50.621658,
      "longitude": 7.195539,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1644072848,
      "ems": null
    },
    {
      "latitude": 50.622757,
      "longitude": 7.194816,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1644072851,
      "ems": null
    },
    {
      "latitude": 50.623672,
      "longitude": 7.194238,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1644072854,
      "ems": null
    },
    {
      "latitude": 50.624722,
      "longitude": 7.193669,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1644072857,
      "ems": null
    },
    {
      "latitude": 50.625549,
      "longitude": 7.193154,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1644072860,
      "ems": null
    },
    {
      "latitude": 50.626862,
      "longitude": 7.192408,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1644072863,
      "ems": null
    },
    {
      "latitude": 50.627838,
      "longitude": 7.191853,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1644072866,
      "ems": null
    },
    {
      "latitude": 50.629982,
      "longitude": 7.190774,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1644072872,
      "ems": null
    },
    {
      "latitude": 50.63105,
      "longitude": 7.190255,
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1644072875,
      "ems": null
    },
    {
      "latitude": 50.632122,
      "longitude": 7.189809,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1644072878,
      "ems": null
    },
    {
      "latitude": 50.634171,
      "longitude": 7.18877,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1644072884,
      "ems": null
    },
    {
      "latitude": 50.635117,
      "longitude": 7.188311,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1644072887,
      "ems": null
    },
    {
      "latitude": 50.635941,
      "longitude": 7.188102,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1644072889,
      "ems": null
    },
    {
      "latitude": 50.637428,
      "longitude": 7.188102,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1644072893,
      "ems": null
    },
    {
      "latitude": 50.638687,
      "longitude": 7.188399,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1644072896,
      "ems": null
    },
    {
      "latitude": 50.639694,
      "longitude": 7.1886,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1644072899,
      "ems": null
    },
    {
      "latitude": 50.640701,
      "longitude": 7.188817,
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1644072902,
      "ems": null
    },
    {
      "latitude": 50.641846,
      "longitude": 7.189106,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1644072905,
      "ems": null
    },
    {
      "latitude": 50.643219,
      "longitude": 7.189467,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1644072908,
      "ems": null
    },
    {
      "latitude": 50.644318,
      "longitude": 7.189809,
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1644072911,
      "ems": null
    },
    {
      "latitude": 50.645435,
      "longitude": 7.190403,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1644072914,
      "ems": null
    },
    {
      "latitude": 50.646694,
      "longitude": 7.191072,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1644072917,
      "ems": null
    },
    {
      "latitude": 50.647797,
      "longitude": 7.191636,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1644072920,
      "ems": null
    },
    {
      "latitude": 50.648895,
      "longitude": 7.192286,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1644072923,
      "ems": null
    },
    {
      "latitude": 50.650093,
      "longitude": 7.192927,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1644072926,
      "ems": null
    },
    {
      "latitude": 50.650974,
      "longitude": 7.193298,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1644072929,
      "ems": null
    },
    {
      "latitude": 50.653442,
      "longitude": 7.193744,
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1644072935,
      "ems": null
    },
    {
      "latitude": 50.654297,
      "longitude": 7.193804,
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1644072937,
      "ems": null
    },
    {
      "latitude": 50.655853,
      "longitude": 7.193804,
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
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1644072941,
      "ems": null
    },
    {
      "latitude": 50.656769,
      "longitude": 7.193804,
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1644072944,
      "ems": null
    },
    {
      "latitude": 50.6581,
      "longitude": 7.193669,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1644072947,
      "ems": null
    },
    {
      "latitude": 50.659332,
      "longitude": 7.193443,
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1644072950,
      "ems": null
    },
    {
      "latitude": 50.660385,
      "longitude": 7.193154,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1644072954,
      "ems": null
    },
    {
      "latitude": 50.661667,
      "longitude": 7.192865,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1644072956,
      "ems": null
    },
    {
      "latitude": 50.662663,
      "longitude": 7.192482,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1644072959,
      "ems": null
    },
    {
      "latitude": 50.663826,
      "longitude": 7.191962,
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1644072962,
      "ems": null
    },
    {
      "latitude": 50.664944,
      "longitude": 7.191442,
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1644072965,
      "ems": null
    },
    {
      "latitude": 50.666107,
      "longitude": 7.190774,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1644072968,
      "ems": null
    },
    {
      "latitude": 50.66716,
      "longitude": 7.19019,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1644072971,
      "ems": null
    },
    {
      "latitude": 50.668121,
      "longitude": 7.189612,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1644072974,
      "ems": null
    },
    {
      "latitude": 50.668991,
      "longitude": 7.189067,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1644072977,
      "ems": null
    },
    {
      "latitude": 50.6702,
      "longitude": 7.188251,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1644072980,
      "ems": null
    },
    {
      "latitude": 50.671181,
      "longitude": 7.187582,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1644072984,
      "ems": null
    },
    {
      "latitude": 50.672112,
      "longitude": 7.18689,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1644072987,
      "ems": null
    },
    {
      "latitude": 50.672974,
      "longitude": 7.186172,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1644072989,
      "ems": null
    },
    {
      "latitude": 50.673981,
      "longitude": 7.185356,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1644072993,
      "ems": null
    },
    {
      "latitude": 50.67458,
      "longitude": 7.18483,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1644072996,
      "ems": null
    },
    {
      "latitude": 50.675694,
      "longitude": 7.183914,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1644072999,
      "ems": null
    },
    {
      "latitude": 50.676819,
      "longitude": 7.183054,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1644073002,
      "ems": null
    },
    {
      "latitude": 50.678814,
      "longitude": 7.181549,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1644073007,
      "ems": null
    },
    {
      "latitude": 50.680893,
      "longitude": 7.180159,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1644073014,
      "ems": null
    },
    {
      "latitude": 50.681992,
      "longitude": 7.179491,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1644073017,
      "ems": null
    },
    {
      "latitude": 50.682999,
      "longitude": 7.178823,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1644073020,
      "ems": null
    },
    {
      "latitude": 50.68515,
      "longitude": 7.177339,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1644073026,
      "ems": null
    },
    {
      "latitude": 50.687286,
      "longitude": 7.175674,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1644073032,
      "ems": null
    },
    {
      "latitude": 50.689522,
      "longitude": 7.174149,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1644073038,
      "ems": null
    },
    {
      "latitude": 50.691849,
      "longitude": 7.172699,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1644073044,
      "ems": null
    },
    {
      "latitude": 50.69413,
      "longitude": 7.171173,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1644073050,
      "ems": null
    },
    {
      "latitude": 50.696411,
      "longitude": 7.169544,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1644073056,
      "ems": null
    },
    {
      "latitude": 50.698738,
      "longitude": 7.16774,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1644073062,
      "ems": null
    },
    {
      "latitude": 50.700974,
      "longitude": 7.165985,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1644073068,
      "ems": null
    },
    {
      "latitude": 50.702087,
      "longitude": 7.165016,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1644073071,
      "ems": null
    },
    {
      "latitude": 50.70314,
      "longitude": 7.164125,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1644073074,
      "ems": null
    },
    {
      "latitude": 50.704193,
      "longitude": 7.16316,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1644073077,
      "ems": null
    },
    {
      "latitude": 50.706253,
      "longitude": 7.16123,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1644073083,
      "ems": null
    },
    {
      "latitude": 50.707256,
      "longitude": 7.16011,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1644073086,
      "ems": null
    },
    {
      "latitude": 50.708267,
      "longitude": 7.158929,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1644073089,
      "ems": null
    },
    {
      "latitude": 50.709183,
      "longitude": 7.157815,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1644073092,
      "ems": null
    },
    {
      "latitude": 50.710236,
      "longitude": 7.156628,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1644073095,
      "ems": null
    },
    {
      "latitude": 50.712284,
      "longitude": 7.154541,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1644073101,
      "ems": null
    },
    {
      "latitude": 50.713215,
      "longitude": 7.153473,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1644073104,
      "ems": null
    },
    {
      "latitude": 50.714127,
      "longitude": 7.152248,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1644073107,
      "ems": null
    },
    {
      "latitude": 50.714996,
      "longitude": 7.151209,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1644073110,
      "ems": null
    },
    {
      "latitude": 50.71587,
      "longitude": 7.149963,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1644073113,
      "ems": null
    },
    {
      "latitude": 50.716736,
      "longitude": 7.148759,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1644073116,
      "ems": null
    },
    {
      "latitude": 50.717594,
      "longitude": 7.147598,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1644073119,
      "ems": null
    },
    {
      "latitude": 50.718384,
      "longitude": 7.146301,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1644073122,
      "ems": null
    },
    {
      "latitude": 50.719162,
      "longitude": 7.144973,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1644073125,
      "ems": null
    },
    {
      "latitude": 50.719826,
      "longitude": 7.143707,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1644073128,
      "ems": null
    },
    {
      "latitude": 50.72049,
      "longitude": 7.142449,
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1644073131,
      "ems": null
    },
    {
      "latitude": 50.721176,
      "longitude": 7.141266,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1644073134,
      "ems": null
    },
    {
      "latitude": 50.72192,
      "longitude": 7.140045,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1644073137,
      "ems": null
    },
    {
      "latitude": 50.722622,
      "longitude": 7.138748,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1644073139,
      "ems": null
    },
    {
      "latitude": 50.723236,
      "longitude": 7.137476,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1644073143,
      "ems": null
    },
    {
      "latitude": 50.723877,
      "longitude": 7.136002,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1644073146,
      "ems": null
    },
    {
      "latitude": 50.724342,
      "longitude": 7.134933,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1644073149,
      "ems": null
    },
    {
      "latitude": 50.72493,
      "longitude": 7.133616,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1644073152,
      "ems": null
    },
    {
      "latitude": 50.72546,
      "longitude": 7.132339,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1644073155,
      "ems": null
    },
    {
      "latitude": 50.725925,
      "longitude": 7.131195,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1644073158,
      "ems": null
    },
    {
      "latitude": 50.727173,
      "longitude": 7.129014,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1644073164,
      "ems": null
    },
    {
      "latitude": 50.72818,
      "longitude": 7.128197,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1644073167,
      "ems": null
    },
    {
      "latitude": 50.729229,
      "longitude": 7.127762,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1644073170,
      "ems": null
    },
    {
      "latitude": 50.730301,
      "longitude": 7.127686,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1644073173,
      "ems": null
    },
    {
      "latitude": 50.731659,
      "longitude": 7.127974,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1644073176,
      "ems": null
    },
    {
      "latitude": 50.732803,
      "longitude": 7.128494,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1644073179,
      "ems": null
    },
    {
      "latitude": 50.73381,
      "longitude": 7.129162,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1644073182,
      "ems": null
    },
    {
      "latitude": 50.734863,
      "longitude": 7.130127,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1644073185,
      "ems": null
    },
    {
      "latitude": 50.735962,
      "longitude": 7.131389,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1644073188,
      "ems": null
    },
    {
      "latitude": 50.73682,
      "longitude": 7.132492,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1644073191,
      "ems": null
    },
    {
      "latitude": 50.737701,
      "longitude": 7.133542,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1644073194,
      "ems": null
    },
    {
      "latitude": 50.738571,
      "longitude": 7.134655,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1644073197,
      "ems": null
    },
    {
      "latitude": 50.73938,
      "longitude": 7.135773,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1644073200,
      "ems": null
    },
    {
      "latitude": 50.740219,
      "longitude": 7.136956,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1644073203,
      "ems": null
    },
    {
      "latitude": 50.740997,
      "longitude": 7.137996,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1644073205,
      "ems": null
    },
    {
      "latitude": 50.741867,
      "longitude": 7.139035,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1644073208,
      "ems": null
    },
    {
      "latitude": 50.742779,
      "longitude": 7.140045,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1644073212,
      "ems": null
    },
    {
      "latitude": 50.744568,
      "longitude": 7.142004,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1644073217,
      "ems": null
    },
    {
      "latitude": 50.745476,
      "longitude": 7.14325,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1644073220,
      "ems": null
    },
    {
      "latitude": 50.746361,
      "longitude": 7.144928,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1644073224,
      "ems": null
    },
    {
      "latitude": 50.746902,
      "longitude": 7.146458,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1644073227,
      "ems": null
    },
    {
      "latitude": 50.747223,
      "longitude": 7.148388,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1644073230,
      "ems": null
    },
    {
      "latitude": 50.747246,
      "longitude": 7.150345,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1644073233,
      "ems": null
    },
    {
      "latitude": 50.747177,
      "longitude": 7.152174,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1644073235,
      "ems": null
    },
    {
      "latitude": 50.747154,
      "longitude": 7.154007,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1644073238,
      "ems": null
    },
    {
      "latitude": 50.747105,
      "longitude": 7.156143,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1644073242,
      "ems": null
    },
    {
      "latitude": 50.747013,
      "longitude": 7.157822,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1644073245,
      "ems": null
    },
    {
      "latitude": 50.746872,
      "longitude": 7.159805,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1644073248,
      "ems": null
    },
    {
      "latitude": 50.746689,
      "longitude": 7.161484,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1644073251,
      "ems": null
    },
    {
      "latitude": 50.746456,
      "longitude": 7.163391,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1644073254,
      "ems": null
    },
    {
      "latitude": 50.746307,
      "longitude": 7.165164,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1644073257,
      "ems": null
    },
    {
      "latitude": 50.74617,
      "longitude": 7.166872,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1644073260,
      "ems": null
    },
    {
      "latitude": 50.746262,
      "longitude": 7.168727,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1644073263,
      "ems": null
    },
    {
      "latitude": 50.746548,
      "longitude": 7.170563,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1644073266,
      "ems": null
    },
    {
      "latitude": 50.746857,
      "longitude": 7.172439,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1644073269,
      "ems": null
    },
    {
      "latitude": 50.7472,
      "longitude": 7.174377,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1644073272,
      "ems": null
    },
    {
      "latitude": 50.747452,
      "longitude": 7.176151,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1644073275,
      "ems": null
    },
    {
      "latitude": 50.747711,
      "longitude": 7.178116,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1644073278,
      "ems": null
    },
    {
      "latitude": 50.747898,
      "longitude": 7.180023,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1644073281,
      "ems": null
    },
    {
      "latitude": 50.748138,
      "longitude": 7.181941,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1644073284,
      "ems": null
    },
    {
      "latitude": 50.748363,
      "longitude": 7.183838,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1644073287,
      "ems": null
    },
    {
      "latitude": 50.74855,
      "longitude": 7.185898,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1644073290,
      "ems": null
    },
    {
      "latitude": 50.748779,
      "longitude": 7.18929,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1644073296,
      "ems": null
    },
    {
      "latitude": 50.74897,
      "longitude": 7.191544,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1644073299,
      "ems": null
    },
    {
      "latitude": 50.749649,
      "longitude": 7.195229,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1644073305,
      "ems": null
    },
    {
      "latitude": 50.750336,
      "longitude": 7.19894,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1644073311,
      "ems": null
    },
    {
      "latitude": 50.75069,
      "longitude": 7.200623,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1644073314,
      "ems": null
    },
    {
      "latitude": 50.750877,
      "longitude": 7.201462,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1644073317,
      "ems": null
    },
    {
      "latitude": 50.751572,
      "longitude": 7.203542,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1644073320,
      "ems": null
    },
    {
      "latitude": 50.752441,
      "longitude": 7.204953,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1644073323,
      "ems": null
    },
    {
      "latitude": 50.753677,
      "longitude": 7.20577,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1644073326,
      "ems": null
    },
    {
      "latitude": 50.754646,
      "longitude": 7.205887,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1644073329,
      "ems": null
    },
    {
      "latitude": 50.755112,
      "longitude": 7.205811,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1644073331,
      "ems": null
    },
    {
      "latitude": 50.756516,
      "longitude": 7.205175,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1644073335,
      "ems": null
    },
    {
      "latitude": 50.757111,
      "longitude": 7.20473,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1644073337,
      "ems": null
    },
    {
      "latitude": 50.758072,
      "longitude": 7.203765,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1644073341,
      "ems": null
    },
    {
      "latitude": 50.758698,
      "longitude": 7.202988,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1644073344,
      "ems": null
    },
    {
      "latitude": 50.759399,
      "longitude": 7.202132,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1644073347,
      "ems": null
    },
    {
      "latitude": 50.759769,
      "longitude": 7.201538,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1644073349,
      "ems": null
    },
    {
      "latitude": 50.760468,
      "longitude": 7.200317,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1644073353,
      "ems": null
    },
    {
      "latitude": 50.760864,
      "longitude": 7.199385,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1644073356,
      "ems": null
    },
    {
      "latitude": 50.76123,
      "longitude": 7.198272,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1644073359,
      "ems": null
    },
    {
      "latitude": 50.76149,
      "longitude": 7.197418,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1644073362,
      "ems": null
    },
    {
      "latitude": 50.761772,
      "longitude": 7.196198,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644073365,
      "ems": null
    },
    {
      "latitude": 50.761963,
      "longitude": 7.195229,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644073368,
      "ems": null
    },
    {
      "latitude": 50.762096,
      "longitude": 7.194595,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644073370,
      "ems": null
    },
    {
      "latitude": 50.762421,
      "longitude": 7.193076,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644073375,
      "ems": null
    },
    {
      "latitude": 50.762608,
      "longitude": 7.192154,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644073378,
      "ems": null
    },
    {
      "latitude": 50.762878,
      "longitude": 7.190849,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644073381,
      "ems": null
    },
    {
      "latitude": 50.763073,
      "longitude": 7.190018,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1644073383,
      "ems": null
    },
    {
      "latitude": 50.763306,
      "longitude": 7.18895,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644073386,
      "ems": null
    },
    {
      "latitude": 50.763866,
      "longitude": 7.186737,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1644073392,
      "ems": null
    },
    {
      "latitude": 50.764252,
      "longitude": 7.184836,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644073397,
      "ems": null
    },
    {
      "latitude": 50.764843,
      "longitude": 7.182007,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644073405,
      "ems": null
    },
    {
      "latitude": 50.765541,
      "longitude": 7.178802,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644073413,
      "ems": null
    },
    {
      "latitude": 50.766083,
      "longitude": 7.176299,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644073421,
      "ems": null
    },
    {
      "latitude": 50.76675,
      "longitude": 7.173004,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644073429,
      "ems": null
    },
    {
      "latitude": 50.767403,
      "longitude": 7.170105,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644073436,
      "ems": null
    },
    {
      "latitude": 50.768147,
      "longitude": 7.166595,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644073446,
      "ems": null
    },
    {
      "latitude": 50.768875,
      "longitude": 7.163234,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 70.4,
        "kts": 38,
        "mph": 43.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1644073457,
      "ems": null
    },
    {
      "latitude": 50.769379,
      "longitude": 7.16123,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1644073462,
      "ems": null
    },
    {
      "latitude": 50.770157,
      "longitude": 7.15737,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644073472,
      "ems": null
    },
    {
      "latitude": 50.770844,
      "longitude": 7.154401,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644073479,
      "ems": null
    },
    {
      "latitude": 50.771393,
      "longitude": 7.151951,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644073485,
      "ems": null
    },
    {
      "latitude": 50.771919,
      "longitude": 7.149582,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644073491,
      "ems": null
    },
    {
      "latitude": 50.77243,
      "longitude": 7.147293,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644073497,
      "ems": null
    },
    {
      "latitude": 50.77285,
      "longitude": 7.145386,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1644073502,
      "ems": null
    },
    {
      "latitude": 50.773041,
      "longitude": 7.14386,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1644073506,
      "ems": null
    },
    {
      "latitude": 50.772991,
      "longitude": 7.142715,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1644073509,
      "ems": null
    },
    {
      "latitude": 50.772675,
      "longitude": 7.141336,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1644073512,
      "ems": null
    },
    {
      "latitude": 50.772079,
      "longitude": 7.140445,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1644073515,
      "ems": null
    },
    {
      "latitude": 50.771126,
      "longitude": 7.139511,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1644073519,
      "ems": null
    },
    {
      "latitude": 50.770294,
      "longitude": 7.138886,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1644073522,
      "ems": null
    },
    {
      "latitude": 50.769405,
      "longitude": 7.138367,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1644073525,
      "ems": null
    },
    {
      "latitude": 50.768475,
      "longitude": 7.137985,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1644073528,
      "ems": null
    },
    {
      "latitude": 50.767548,
      "longitude": 7.137624,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1644073531,
      "ems": null
    },
    {
      "latitude": 50.766632,
      "longitude": 7.137328,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1644073534,
      "ems": null
    },
    {
      "latitude": 50.765682,
      "longitude": 7.13707,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1644073537,
      "ems": null
    },
    {
      "latitude": 50.764801,
      "longitude": 7.136882,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1644073540,
      "ems": null
    },
    {
      "latitude": 50.763821,
      "longitude": 7.136688,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1644073543,
      "ems": null
    },
    {
      "latitude": 50.762749,
      "longitude": 7.136612,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1644073546,
      "ems": null
    },
    {
      "latitude": 50.761677,
      "longitude": 7.136688,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1644073549,
      "ems": null
    },
    {
      "latitude": 50.760635,
      "longitude": 7.137031,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1644073552,
      "ems": null
    },
    {
      "latitude": 50.759583,
      "longitude": 7.137756,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1644073555,
      "ems": null
    },
    {
      "latitude": 50.758575,
      "longitude": 7.138886,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1644073558,
      "ems": null
    },
    {
      "latitude": 50.757706,
      "longitude": 7.140445,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1644073561,
      "ems": null
    },
    {
      "latitude": 50.756977,
      "longitude": 7.142105,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "timestamp": 1644073564,
      "ems": null
    },
    {
      "latitude": 50.756416,
      "longitude": 7.143936,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1644073567,
      "ems": null
    },
    {
      "latitude": 50.755966,
      "longitude": 7.145864,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1644073570,
      "ems": null
    },
    {
      "latitude": 50.755463,
      "longitude": 7.147794,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1644073573,
      "ems": null
    },
    {
      "latitude": 50.754929,
      "longitude": 7.149506,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1644073576,
      "ems": null
    },
    {
      "latitude": 50.754318,
      "longitude": 7.151283,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1644073579,
      "ems": null
    },
    {
      "latitude": 50.753769,
      "longitude": 7.152916,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1644073582,
      "ems": null
    },
    {
      "latitude": 50.753174,
      "longitude": 7.154698,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1644073586,
      "ems": null
    },
    {
      "latitude": 50.752625,
      "longitude": 7.156331,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1644073589,
      "ems": null
    },
    {
      "latitude": 50.752274,
      "longitude": 7.15744,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1644073592,
      "ems": null
    },
    {
      "latitude": 50.751389,
      "longitude": 7.160414,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1644073597,
      "ems": null
    },
    {
      "latitude": 50.750366,
      "longitude": 7.163849,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1644073604,
      "ems": null
    },
    {
      "latitude": 50.7491,
      "longitude": 7.168134,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1644073611,
      "ems": null
    },
    {
      "latitude": 50.748737,
      "longitude": 7.169647,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1644073614,
      "ems": null
    },
    {
      "latitude": 50.74855,
      "longitude": 7.171697,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1644073617,
      "ems": null
    },
    {
      "latitude": 50.74855,
      "longitude": 7.173479,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1644073620,
      "ems": null
    },
    {
      "latitude": 50.748642,
      "longitude": 7.175293,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1644073623,
      "ems": null
    },
    {
      "latitude": 50.748783,
      "longitude": 7.176895,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1644073626,
      "ems": null
    },
    {
      "latitude": 50.748917,
      "longitude": 7.178749,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1644073629,
      "ems": null
    },
    {
      "latitude": 50.748962,
      "longitude": 7.180382,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1644073632,
      "ems": null
    },
    {
      "latitude": 50.749008,
      "longitude": 7.182164,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1644073635,
      "ems": null
    },
    {
      "latitude": 50.74897,
      "longitude": 7.183914,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1644073638,
      "ems": null
    },
    {
      "latitude": 50.748875,
      "longitude": 7.185898,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1644073641,
      "ems": null
    },
    {
      "latitude": 50.748783,
      "longitude": 7.187653,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1644073644,
      "ems": null
    },
    {
      "latitude": 50.748737,
      "longitude": 7.191315,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1644073650,
      "ems": null
    },
    {
      "latitude": 50.749062,
      "longitude": 7.194138,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1644073656,
      "ems": null
    },
    {
      "latitude": 50.749832,
      "longitude": 7.196342,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1644073659,
      "ems": null
    },
    {
      "latitude": 50.750565,
      "longitude": 7.197901,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1644073662,
      "ems": null
    },
    {
      "latitude": 50.751484,
      "longitude": 7.199249,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1644073665,
      "ems": null
    },
    {
      "latitude": 50.752441,
      "longitude": 7.20035,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1644073668,
      "ems": null
    },
    {
      "latitude": 50.753437,
      "longitude": 7.20108,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1644073671,
      "ems": null
    },
    {
      "latitude": 50.754501,
      "longitude": 7.201538,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1644073674,
      "ems": null
    },
    {
      "latitude": 50.755486,
      "longitude": 7.201614,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1644073677,
      "ems": null
    },
    {
      "latitude": 50.756603,
      "longitude": 7.201538,
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1644073680,
      "ems": null
    },
    {
      "latitude": 50.757568,
      "longitude": 7.201241,
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1644073684,
      "ems": null
    },
    {
      "latitude": 50.758575,
      "longitude": 7.200796,
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1644073686,
      "ems": null
    },
    {
      "latitude": 50.759445,
      "longitude": 7.200276,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1644073689,
      "ems": null
    },
    {
      "latitude": 50.760269,
      "longitude": 7.199534,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1644073692,
      "ems": null
    },
    {
      "latitude": 50.760727,
      "longitude": 7.19894,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1644073696,
      "ems": null
    },
    {
      "latitude": 50.761307,
      "longitude": 7.197571,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1644073698,
      "ems": null
    },
    {
      "latitude": 50.761688,
      "longitude": 7.196416,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1644073701,
      "ems": null
    },
    {
      "latitude": 50.761963,
      "longitude": 7.195525,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1644073704,
      "ems": null
    },
    {
      "latitude": 50.762421,
      "longitude": 7.194115,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1644073707,
      "ems": null
    },
    {
      "latitude": 50.762653,
      "longitude": 7.193146,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1644073711,
      "ems": null
    },
    {
      "latitude": 50.762833,
      "longitude": 7.191888,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1644073714,
      "ems": null
    },
    {
      "latitude": 50.76297,
      "longitude": 7.190923,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1644073716,
      "ems": null
    },
    {
      "latitude": 50.763153,
      "longitude": 7.189809,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1644073719,
      "ems": null
    },
    {
      "latitude": 50.763245,
      "longitude": 7.189438,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644073720,
      "ems": null
    },
    {
      "latitude": 50.763634,
      "longitude": 7.188034,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1644073725,
      "ems": null
    },
    {
      "latitude": 50.763958,
      "longitude": 7.186737,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1644073729,
      "ems": null
    },
    {
      "latitude": 50.764145,
      "longitude": 7.185974,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644073731,
      "ems": null
    },
    {
      "latitude": 50.764252,
      "longitude": 7.185504,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1644073732,
      "ems": null
    },
    {
      "latitude": 50.764481,
      "longitude": 7.184242,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1644073737,
      "ems": null
    },
    {
      "latitude": 50.765217,
      "longitude": 7.181015,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1644073746,
      "ems": null
    },
    {
      "latitude": 50.765579,
      "longitude": 7.178972,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1644073751,
      "ems": null
    },
    {
      "latitude": 50.766174,
      "longitude": 7.176003,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644073759,
      "ems": null
    },
    {
      "latitude": 50.766846,
      "longitude": 7.172699,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1644073768,
      "ems": null
    },
    {
      "latitude": 50.767456,
      "longitude": 7.16999,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644073775,
      "ems": null
    },
    {
      "latitude": 50.768097,
      "longitude": 7.166872,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644073783,
      "ems": null
    },
    {
      "latitude": 50.768738,
      "longitude": 7.163977,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "timestamp": 1644073793,
      "ems": null
    },
    {
      "latitude": 50.769653,
      "longitude": 7.159894,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1644073805,
      "ems": null
    },
    {
      "latitude": 50.770195,
      "longitude": 7.157898,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1644073810,
      "ems": null
    },
    {
      "latitude": 50.770802,
      "longitude": 7.155533,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1644073816,
      "ems": null
    },
    {
      "latitude": 50.771301,
      "longitude": 7.153287,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644073822,
      "ems": null
    },
    {
      "latitude": 50.771824,
      "longitude": 7.150879,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644073828,
      "ems": null
    },
    {
      "latitude": 50.7724,
      "longitude": 7.148537,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644073835,
      "ems": null
    },
    {
      "latitude": 50.772903,
      "longitude": 7.146161,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1644073842,
      "ems": null
    },
    {
      "latitude": 50.773129,
      "longitude": 7.144318,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1644073847,
      "ems": null
    },
    {
      "latitude": 50.772903,
      "longitude": 7.142821,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1644073851,
      "ems": null
    },
    {
      "latitude": 50.772526,
      "longitude": 7.141876,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1644073854,
      "ems": null
    },
    {
      "latitude": 50.771778,
      "longitude": 7.140884,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1644073857,
      "ems": null
    },
    {
      "latitude": 50.771027,
      "longitude": 7.140371,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1644073860,
      "ems": null
    },
    {
      "latitude": 50.770294,
      "longitude": 7.14,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1644073863,
      "ems": null
    },
    {
      "latitude": 50.769836,
      "longitude": 7.139777,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1644073865,
      "ems": null
    },
    {
      "latitude": 50.768326,
      "longitude": 7.139183,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1644073870,
      "ems": null
    },
    {
      "latitude": 50.76675,
      "longitude": 7.138824,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1644073874,
      "ems": null
    },
    {
      "latitude": 50.765808,
      "longitude": 7.138589,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1644073877,
      "ems": null
    },
    {
      "latitude": 50.764702,
      "longitude": 7.13829,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1644073880,
      "ems": null
    },
    {
      "latitude": 50.76384,
      "longitude": 7.13807,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1644073883,
      "ems": null
    },
    {
      "latitude": 50.762886,
      "longitude": 7.137909,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1644073886,
      "ems": null
    },
    {
      "latitude": 50.761864,
      "longitude": 7.137909,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1644073889,
      "ems": null
    },
    {
      "latitude": 50.760887,
      "longitude": 7.137985,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1644073892,
      "ems": null
    },
    {
      "latitude": 50.759995,
      "longitude": 7.138292,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1644073895,
      "ems": null
    },
    {
      "latitude": 50.758987,
      "longitude": 7.13896,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1644073898,
      "ems": null
    },
    {
      "latitude": 50.757935,
      "longitude": 7.140223,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1644073901,
      "ems": null
    },
    {
      "latitude": 50.756836,
      "longitude": 7.142563,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1644073906,
      "ems": null
    },
    {
      "latitude": 50.756149,
      "longitude": 7.144973,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1644073910,
      "ems": null
    },
    {
      "latitude": 50.755486,
      "longitude": 7.147522,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1644073914,
      "ems": null
    },
    {
      "latitude": 50.754601,
      "longitude": 7.150497,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1644073918,
      "ems": null
    },
    {
      "latitude": 50.753998,
      "longitude": 7.152322,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1644073921,
      "ems": null
    },
    {
      "latitude": 50.753345,
      "longitude": 7.15416,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1644073924,
      "ems": null
    },
    {
      "latitude": 50.752762,
      "longitude": 7.155589,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1644073927,
      "ems": null
    },
    {
      "latitude": 50.752132,
      "longitude": 7.157288,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1644073930,
      "ems": null
    },
    {
      "latitude": 50.751114,
      "longitude": 7.159968,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1644073936,
      "ems": null
    },
    {
      "latitude": 50.750565,
      "longitude": 7.161453,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1644073939,
      "ems": null
    },
    {
      "latitude": 50.750061,
      "longitude": 7.162789,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1644073942,
      "ems": null
    },
    {
      "latitude": 50.749153,
      "longitude": 7.166061,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1644073948,
      "ems": null
    },
    {
      "latitude": 50.74892,
      "longitude": 7.167816,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1644073951,
      "ems": null
    },
    {
      "latitude": 50.748783,
      "longitude": 7.169724,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1644073954,
      "ems": null
    },
    {
      "latitude": 50.748829,
      "longitude": 7.171478,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1644073957,
      "ems": null
    },
    {
      "latitude": 50.748917,
      "longitude": 7.173256,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1644073960,
      "ems": null
    },
    {
      "latitude": 50.749016,
      "longitude": 7.175064,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1644073963,
      "ems": null
    },
    {
      "latitude": 50.749153,
      "longitude": 7.1772,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1644073966,
      "ems": null
    },
    {
      "latitude": 50.749283,
      "longitude": 7.17912,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1644073969,
      "ems": null
    },
    {
      "latitude": 50.749386,
      "longitude": 7.180939,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1644073972,
      "ems": null
    },
    {
      "latitude": 50.749557,
      "longitude": 7.182832,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1644073975,
      "ems": null
    },
    {
      "latitude": 50.74976,
      "longitude": 7.184601,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1644073978,
      "ems": null
    },
    {
      "latitude": 50.749992,
      "longitude": 7.186508,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1644073981,
      "ems": null
    },
    {
      "latitude": 50.750244,
      "longitude": 7.188102,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1644073984,
      "ems": null
    },
    {
      "latitude": 50.750645,
      "longitude": 7.18956,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1644073987,
      "ems": null
    },
    {
      "latitude": 50.751484,
      "longitude": 7.191467,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1644073990,
      "ems": null
    },
    {
      "latitude": 50.752258,
      "longitude": 7.192779,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1644073993,
      "ems": null
    },
    {
      "latitude": 50.753017,
      "longitude": 7.193909,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1644073996,
      "ems": null
    },
    {
      "latitude": 50.753998,
      "longitude": 7.195282,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1644073999,
      "ems": null
    },
    {
      "latitude": 50.754929,
      "longitude": 7.196503,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1644074002,
      "ems": null
    },
    {
      "latitude": 50.755859,
      "longitude": 7.197495,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1644074005,
      "ems": null
    },
    {
      "latitude": 50.756561,
      "longitude": 7.198198,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1644074008,
      "ems": null
    },
    {
      "latitude": 50.757935,
      "longitude": 7.198866,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1644074011,
      "ems": null
    },
    {
      "latitude": 50.758465,
      "longitude": 7.198944,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1644074014,
      "ems": null
    },
    {
      "latitude": 50.759537,
      "longitude": 7.198792,
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1644074017,
      "ems": null
    },
    {
      "latitude": 50.761002,
      "longitude": 7.197752,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1644074020,
      "ems": null
    },
    {
      "latitude": 50.761459,
      "longitude": 7.19701,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1644074023,
      "ems": null
    },
    {
      "latitude": 50.761909,
      "longitude": 7.19574,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1644074025,
      "ems": null
    },
    {
      "latitude": 50.762329,
      "longitude": 7.194443,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1644074029,
      "ems": null
    },
    {
      "latitude": 50.762512,
      "longitude": 7.193669,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1644074031,
      "ems": null
    },
    {
      "latitude": 50.762787,
      "longitude": 7.192185,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1644074035,
      "ems": null
    },
    {
      "latitude": 50.76297,
      "longitude": 7.19122,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644074037,
      "ems": null
    },
    {
      "latitude": 50.763245,
      "longitude": 7.190181,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1644074040,
      "ems": null
    },
    {
      "latitude": 50.763493,
      "longitude": 7.189102,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1644074044,
      "ems": null
    },
    {
      "latitude": 50.763634,
      "longitude": 7.188492,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644074046,
      "ems": null
    },
    {
      "latitude": 50.763958,
      "longitude": 7.187042,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644074049,
      "ems": null
    },
    {
      "latitude": 50.764252,
      "longitude": 7.185652,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1644074053,
      "ems": null
    },
    {
      "latitude": 50.764389,
      "longitude": 7.184762,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1644074055,
      "ems": null
    },
    {
      "latitude": 50.764618,
      "longitude": 7.183722,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1644074058,
      "ems": null
    },
    {
      "latitude": 50.764938,
      "longitude": 7.182238,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1644074063,
      "ems": null
    },
    {
      "latitude": 50.765495,
      "longitude": 7.179413,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1644074071,
      "ems": null
    },
    {
      "latitude": 50.766098,
      "longitude": 7.17659,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644074079,
      "ems": null
    },
    {
      "latitude": 50.766659,
      "longitude": 7.173462,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644074087,
      "ems": null
    },
    {
      "latitude": 50.76741,
      "longitude": 7.170138,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1644074095,
      "ems": null
    },
    {
      "latitude": 50.768101,
      "longitude": 7.166824,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644074105,
      "ems": null
    },
    {
      "latitude": 50.768738,
      "longitude": 7.163828,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 59.3,
        "kts": 32,
        "mph": 36.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1644074115,
      "ems": null
    },
    {
      "latitude": 50.768921,
      "longitude": 7.163086,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 38.9,
        "kts": 21,
        "mph": 24.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644074119,
      "ems": null
    },
    {
      "latitude": 50.768784,
      "longitude": 7.161973,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 33.3,
        "kts": 18,
        "mph": 20.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1644074132,
      "ems": null
    },
    {
      "latitude": 50.768509,
      "longitude": 7.161824,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 3.7,
        "kts": 2,
        "mph": 2.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1644074141,
      "ems": null
    }
  ],
};
