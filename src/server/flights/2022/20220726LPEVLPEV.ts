import { Flight } from "../../../types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220726LPEVLPEV",
    callsign: "CSDHS",
    name: "RVP140 RWY01",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 6, 26, 20, 0).getTime(),
    arrival: new Date(2022, 6, 26, 21, 0).getTime(),
    singleEnginePistonTime: 60,
    picTime: 0,
    dualTime: 60,
    nightTime: 60,
    landings: {
      day: 0,
      night: 6,
    },
  },
  aircraft: {
    model: {
      code: "P208",
      text: "Tecnam P-2008JC",
    },
    identification: {
      modes: "3D1229",
      registration: "CS-DHS",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      name: "Evora Aerodrome",
      code: "LPEV",
      position: {
        latitude: 38.5353648,
        longitude: -7.8925403,
      },
    },
    destination: {
      name: "Evora Aerodrome",
      code: "LPEV",
      position: {
        latitude: 38.5353648,
        longitude: -7.8925403,
      },
    },
  },
  track: [
    {
      "latitude": 38.527874,
      "longitude": -7.890049,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 9.3,
        "kts": 5,
        "mph": 5.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 241,
      "squawk": "0",
      "timestamp": 1658866598,
      "ems": null
    },
    {
      "latitude": 38.52808,
      "longitude": -7.890213,
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
      "heading": 241,
      "squawk": "0",
      "timestamp": 1658866613,
      "ems": null
    },
    {
      "latitude": 38.528297,
      "longitude": -7.890184,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 29.6,
        "kts": 16,
        "mph": 18.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 5,
      "squawk": "0",
      "timestamp": 1658866619,
      "ems": null
    },
    {
      "latitude": 38.528526,
      "longitude": -7.890169,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 44.4,
        "kts": 24,
        "mph": 27.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "0",
      "timestamp": 1658866621,
      "ems": null
    },
    {
      "latitude": 38.528732,
      "longitude": -7.890154,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 55.6,
        "kts": 30,
        "mph": 34.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 5,
      "squawk": "0",
      "timestamp": 1658866623,
      "ems": null
    },
    {
      "latitude": 38.528973,
      "longitude": -7.890137,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 64.8,
        "kts": 35,
        "mph": 40.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "0",
      "timestamp": 1658866624,
      "ems": null
    },
    {
      "latitude": 38.529305,
      "longitude": -7.890094,
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
      "heading": 5,
      "squawk": "0",
      "timestamp": 1658866626,
      "ems": null
    },
    {
      "latitude": 38.52951,
      "longitude": -7.890079,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "0",
      "timestamp": 1658866627,
      "ems": null
    },
    {
      "latitude": 38.529728,
      "longitude": -7.890064,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "0",
      "timestamp": 1658866628,
      "ems": null
    },
    {
      "latitude": 38.529945,
      "longitude": -7.890035,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "0",
      "timestamp": 1658866629,
      "ems": null
    },
    {
      "latitude": 38.531799,
      "longitude": -7.889832,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 5,
      "squawk": "0",
      "timestamp": 1658866636,
      "ems": null
    },
    {
      "latitude": 38.532963,
      "longitude": -7.889771,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658866640,
      "ems": null
    },
    {
      "latitude": 38.534126,
      "longitude": -7.889648,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658866644,
      "ems": null
    },
    {
      "latitude": 38.535942,
      "longitude": -7.889587,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658866650,
      "ems": null
    },
    {
      "latitude": 38.538689,
      "longitude": -7.889282,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658866660,
      "ems": null
    },
    {
      "latitude": 38.540318,
      "longitude": -7.889038,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1658866666,
      "ems": null
    },
    {
      "latitude": 38.542969,
      "longitude": -7.888721,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658866677,
      "ems": null
    },
    {
      "latitude": 38.544296,
      "longitude": -7.888482,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1658866682,
      "ems": null
    },
    {
      "latitude": 38.546631,
      "longitude": -7.888064,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1658866693,
      "ems": null
    },
    {
      "latitude": 38.548096,
      "longitude": -7.887825,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1658866698,
      "ems": null
    },
    {
      "latitude": 38.54977,
      "longitude": -7.887207,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1658866704,
      "ems": null
    },
    {
      "latitude": 38.551163,
      "longitude": -7.885915,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1658866709,
      "ems": null
    },
    {
      "latitude": 38.552097,
      "longitude": -7.884094,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1658866713,
      "ems": null
    },
    {
      "latitude": 38.552811,
      "longitude": -7.881078,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1658866719,
      "ems": null
    },
    {
      "latitude": 38.553028,
      "longitude": -7.878296,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1658866725,
      "ems": null
    },
    {
      "latitude": 38.55304,
      "longitude": -7.875107,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1658866730,
      "ems": null
    },
    {
      "latitude": 38.55304,
      "longitude": -7.874451,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1658866731,
      "ems": null
    },
    {
      "latitude": 38.552994,
      "longitude": -7.872958,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1658866733,
      "ems": null
    },
    {
      "latitude": 38.552811,
      "longitude": -7.870809,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1658866737,
      "ems": null
    },
    {
      "latitude": 38.552307,
      "longitude": -7.868719,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1658866740,
      "ems": null
    },
    {
      "latitude": 38.551723,
      "longitude": -7.86731,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1658866743,
      "ems": null
    },
    {
      "latitude": 38.55098,
      "longitude": -7.865853,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1658866745,
      "ems": null
    },
    {
      "latitude": 38.550064,
      "longitude": -7.864599,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1658866748,
      "ems": null
    },
    {
      "latitude": 38.548466,
      "longitude": -7.863037,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1658866751,
      "ems": null
    },
    {
      "latitude": 38.547394,
      "longitude": -7.862366,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1658866754,
      "ems": null
    },
    {
      "latitude": 38.54512,
      "longitude": -7.861374,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1658866758,
      "ems": null
    },
    {
      "latitude": 38.54274,
      "longitude": -7.860658,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1658866763,
      "ems": null
    },
    {
      "latitude": 38.540176,
      "longitude": -7.860121,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1658866768,
      "ems": null
    },
    {
      "latitude": 38.538116,
      "longitude": -7.859763,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1658866773,
      "ems": null
    },
    {
      "latitude": 38.535233,
      "longitude": -7.859225,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1658866778,
      "ems": null
    },
    {
      "latitude": 38.532822,
      "longitude": -7.858887,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1658866782,
      "ems": null
    },
    {
      "latitude": 38.531204,
      "longitude": -7.858628,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1658866785,
      "ems": null
    },
    {
      "latitude": 38.529518,
      "longitude": -7.858398,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1658866788,
      "ems": null
    },
    {
      "latitude": 38.528,
      "longitude": -7.85821,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1658866791,
      "ems": null
    },
    {
      "latitude": 38.52507,
      "longitude": -7.857792,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1658866798,
      "ems": null
    },
    {
      "latitude": 38.522003,
      "longitude": -7.857613,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1658866803,
      "ems": null
    },
    {
      "latitude": 38.520172,
      "longitude": -7.857553,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1658866807,
      "ems": null
    },
    {
      "latitude": 38.518753,
      "longitude": -7.857553,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1658866809,
      "ems": null
    },
    {
      "latitude": 38.517151,
      "longitude": -7.857493,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1658866813,
      "ems": null
    },
    {
      "latitude": 38.515831,
      "longitude": -7.857483,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1658866815,
      "ems": null
    },
    {
      "latitude": 38.514389,
      "longitude": -7.857483,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1658866818,
      "ems": null
    },
    {
      "latitude": 38.51318,
      "longitude": -7.857483,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1658866821,
      "ems": null
    },
    {
      "latitude": 38.511475,
      "longitude": -7.857553,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1658866825,
      "ems": null
    },
    {
      "latitude": 38.510338,
      "longitude": -7.857666,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658866828,
      "ems": null
    },
    {
      "latitude": 38.509735,
      "longitude": -7.857727,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658866829,
      "ems": null
    },
    {
      "latitude": 38.50676,
      "longitude": -7.85809,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658866836,
      "ems": null
    },
    {
      "latitude": 38.504707,
      "longitude": -7.858459,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658866841,
      "ems": null
    },
    {
      "latitude": 38.503189,
      "longitude": -7.858807,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1658866845,
      "ems": null
    },
    {
      "latitude": 38.501633,
      "longitude": -7.859165,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658866848,
      "ems": null
    },
    {
      "latitude": 38.500797,
      "longitude": -7.859375,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658866851,
      "ems": null
    },
    {
      "latitude": 38.499447,
      "longitude": -7.859619,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1658866854,
      "ems": null
    },
    {
      "latitude": 38.497604,
      "longitude": -7.859941,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658866860,
      "ems": null
    },
    {
      "latitude": 38.495087,
      "longitude": -7.860538,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658866866,
      "ems": null
    },
    {
      "latitude": 38.492889,
      "longitude": -7.860957,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1658866872,
      "ems": null
    },
    {
      "latitude": 38.490601,
      "longitude": -7.861613,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1658866879,
      "ems": null
    },
    {
      "latitude": 38.489624,
      "longitude": -7.862122,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1658866882,
      "ems": null
    },
    {
      "latitude": 38.488693,
      "longitude": -7.862732,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1658866885,
      "ems": null
    },
    {
      "latitude": 38.487995,
      "longitude": -7.863464,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1658866887,
      "ems": null
    },
    {
      "latitude": 38.487434,
      "longitude": -7.864258,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1658866890,
      "ems": null
    },
    {
      "latitude": 38.486832,
      "longitude": -7.865601,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1658866894,
      "ems": null
    },
    {
      "latitude": 38.486526,
      "longitude": -7.867166,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1658866899,
      "ems": null
    },
    {
      "latitude": 38.486343,
      "longitude": -7.86848,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1658866903,
      "ems": null
    },
    {
      "latitude": 38.486252,
      "longitude": -7.869614,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1658866905,
      "ems": null
    },
    {
      "latitude": 38.486206,
      "longitude": -7.87057,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1658866908,
      "ems": null
    },
    {
      "latitude": 38.48613,
      "longitude": -7.871643,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1658866911,
      "ems": null
    },
    {
      "latitude": 38.486115,
      "longitude": -7.872838,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1658866915,
      "ems": null
    },
    {
      "latitude": 38.48613,
      "longitude": -7.87384,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658866918,
      "ems": null
    },
    {
      "latitude": 38.48616,
      "longitude": -7.874809,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1658866921,
      "ems": null
    },
    {
      "latitude": 38.486206,
      "longitude": -7.875764,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1658866924,
      "ems": null
    },
    {
      "latitude": 38.486225,
      "longitude": -7.876709,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1658866927,
      "ems": null
    },
    {
      "latitude": 38.486298,
      "longitude": -7.877675,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1658866930,
      "ems": null
    },
    {
      "latitude": 38.486362,
      "longitude": -7.87854,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1658866933,
      "ems": null
    },
    {
      "latitude": 38.486458,
      "longitude": -7.87915,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1658866936,
      "ems": null
    },
    {
      "latitude": 38.486549,
      "longitude": -7.880127,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1658866938,
      "ems": null
    },
    {
      "latitude": 38.486645,
      "longitude": -7.880981,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1658866942,
      "ems": null
    },
    {
      "latitude": 38.486736,
      "longitude": -7.881958,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1658866945,
      "ems": null
    },
    {
      "latitude": 38.486782,
      "longitude": -7.882813,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1658866948,
      "ems": null
    },
    {
      "latitude": 38.486923,
      "longitude": -7.88385,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1658866951,
      "ems": null
    },
    {
      "latitude": 38.487064,
      "longitude": -7.884644,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1658866953,
      "ems": null
    },
    {
      "latitude": 38.487259,
      "longitude": -7.885795,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1658866957,
      "ems": null
    },
    {
      "latitude": 38.487434,
      "longitude": -7.88678,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1658866960,
      "ems": null
    },
    {
      "latitude": 38.487621,
      "longitude": -7.887634,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1658866962,
      "ems": null
    },
    {
      "latitude": 38.4879,
      "longitude": -7.888661,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1658866966,
      "ems": null
    },
    {
      "latitude": 38.488178,
      "longitude": -7.889404,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1658866968,
      "ems": null
    },
    {
      "latitude": 38.488644,
      "longitude": -7.890259,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1658866971,
      "ems": null
    },
    {
      "latitude": 38.489109,
      "longitude": -7.890991,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1658866974,
      "ems": null
    },
    {
      "latitude": 38.489777,
      "longitude": -7.891766,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1658866978,
      "ems": null
    },
    {
      "latitude": 38.490227,
      "longitude": -7.892151,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1658866980,
      "ems": null
    },
    {
      "latitude": 38.491928,
      "longitude": -7.8929,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1658866986,
      "ems": null
    },
    {
      "latitude": 38.49316,
      "longitude": -7.893311,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1658866991,
      "ems": null
    },
    {
      "latitude": 38.494583,
      "longitude": -7.893558,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1658866997,
      "ems": null
    },
    {
      "latitude": 38.496185,
      "longitude": -7.893311,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1658867002,
      "ems": null
    },
    {
      "latitude": 38.497723,
      "longitude": -7.893066,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1658867007,
      "ems": null
    },
    {
      "latitude": 38.499073,
      "longitude": -7.892822,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658867013,
      "ems": null
    },
    {
      "latitude": 38.50058,
      "longitude": -7.892602,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1658867018,
      "ems": null
    },
    {
      "latitude": 38.502045,
      "longitude": -7.892363,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658867023,
      "ems": null
    },
    {
      "latitude": 38.503494,
      "longitude": -7.892334,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1658867029,
      "ems": null
    },
    {
      "latitude": 38.50502,
      "longitude": -7.892423,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1658867034,
      "ems": null
    },
    {
      "latitude": 38.508041,
      "longitude": -7.892065,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658867045,
      "ems": null
    },
    {
      "latitude": 38.511063,
      "longitude": -7.891945,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658867056,
      "ems": null
    },
    {
      "latitude": 38.512619,
      "longitude": -7.891826,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658867061,
      "ems": null
    },
    {
      "latitude": 38.515644,
      "longitude": -7.891418,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658867072,
      "ems": null
    },
    {
      "latitude": 38.517136,
      "longitude": -7.891235,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658867078,
      "ems": null
    },
    {
      "latitude": 38.520264,
      "longitude": -7.891049,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658867088,
      "ems": null
    },
    {
      "latitude": 38.523376,
      "longitude": -7.890691,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658867098,
      "ems": null
    },
    {
      "latitude": 38.525116,
      "longitude": -7.890512,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658867104,
      "ems": null
    },
    {
      "latitude": 38.528446,
      "longitude": -7.890198,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658867115,
      "ems": null
    },
    {
      "latitude": 38.529984,
      "longitude": -7.890076,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658867120,
      "ems": null
    },
    {
      "latitude": 38.532406,
      "longitude": -7.889832,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658867130,
      "ems": null
    },
    {
      "latitude": 38.535004,
      "longitude": -7.889557,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658867139,
      "ems": null
    },
    {
      "latitude": 38.536503,
      "longitude": -7.889343,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658867145,
      "ems": null
    },
    {
      "latitude": 38.540783,
      "longitude": -7.888611,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1658867160,
      "ems": null
    },
    {
      "latitude": 38.542229,
      "longitude": -7.888306,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1658867165,
      "ems": null
    },
    {
      "latitude": 38.543381,
      "longitude": -7.888004,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1658867170,
      "ems": null
    },
    {
      "latitude": 38.544975,
      "longitude": -7.887573,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1658867176,
      "ems": null
    },
    {
      "latitude": 38.546322,
      "longitude": -7.887268,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1658867181,
      "ems": null
    },
    {
      "latitude": 38.547722,
      "longitude": -7.886902,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1658867187,
      "ems": null
    },
    {
      "latitude": 38.55056,
      "longitude": -7.886169,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1658867197,
      "ems": null
    },
    {
      "latitude": 38.553314,
      "longitude": -7.885676,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658867208,
      "ems": null
    },
    {
      "latitude": 38.554794,
      "longitude": -7.885254,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1658867213,
      "ems": null
    },
    {
      "latitude": 38.556286,
      "longitude": -7.884033,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1658867219,
      "ems": null
    },
    {
      "latitude": 38.557297,
      "longitude": -7.882332,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1658867224,
      "ems": null
    },
    {
      "latitude": 38.557709,
      "longitude": -7.881138,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1658867228,
      "ems": null
    },
    {
      "latitude": 38.558056,
      "longitude": -7.879333,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1658867231,
      "ems": null
    },
    {
      "latitude": 38.558147,
      "longitude": -7.877747,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1658867234,
      "ems": null
    },
    {
      "latitude": 38.558075,
      "longitude": -7.876003,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1658867237,
      "ems": null
    },
    {
      "latitude": 38.557961,
      "longitude": -7.87439,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1658867240,
      "ems": null
    },
    {
      "latitude": 38.557846,
      "longitude": -7.872958,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1658867243,
      "ems": null
    },
    {
      "latitude": 38.557663,
      "longitude": -7.871047,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1658867245,
      "ems": null
    },
    {
      "latitude": 38.557541,
      "longitude": -7.869446,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1658867249,
      "ems": null
    },
    {
      "latitude": 38.557404,
      "longitude": -7.867676,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1658867252,
      "ems": null
    },
    {
      "latitude": 38.557358,
      "longitude": -7.866882,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1658867253,
      "ems": null
    },
    {
      "latitude": 38.556938,
      "longitude": -7.864563,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1658867258,
      "ems": null
    },
    {
      "latitude": 38.556152,
      "longitude": -7.862569,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1658867261,
      "ems": null
    },
    {
      "latitude": 38.555695,
      "longitude": -7.861793,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1658867262,
      "ems": null
    },
    {
      "latitude": 38.554703,
      "longitude": -7.860474,
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1658867265,
      "ems": null
    },
    {
      "latitude": 38.553452,
      "longitude": -7.859344,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1658867268,
      "ems": null
    },
    {
      "latitude": 38.552307,
      "longitude": -7.858628,
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1658867271,
      "ems": null
    },
    {
      "latitude": 38.551212,
      "longitude": -7.858215,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1658867273,
      "ems": null
    },
    {
      "latitude": 38.549149,
      "longitude": -7.857792,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1658867278,
      "ems": null
    },
    {
      "latitude": 38.547115,
      "longitude": -7.857666,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1658867282,
      "ems": null
    },
    {
      "latitude": 38.545811,
      "longitude": -7.857605,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1658867285,
      "ems": null
    },
    {
      "latitude": 38.543976,
      "longitude": -7.857553,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1658867288,
      "ems": null
    },
    {
      "latitude": 38.542557,
      "longitude": -7.857493,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1658867291,
      "ems": null
    },
    {
      "latitude": 38.541111,
      "longitude": -7.857483,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1658867294,
      "ems": null
    },
    {
      "latitude": 38.539619,
      "longitude": -7.857422,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1658867297,
      "ems": null
    },
    {
      "latitude": 38.537979,
      "longitude": -7.857434,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1658867300,
      "ems": null
    },
    {
      "latitude": 38.536697,
      "longitude": -7.857374,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1658867303,
      "ems": null
    },
    {
      "latitude": 38.533493,
      "longitude": -7.857315,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1658867309,
      "ems": null
    },
    {
      "latitude": 38.530563,
      "longitude": -7.857374,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1658867315,
      "ems": null
    },
    {
      "latitude": 38.527748,
      "longitude": -7.857483,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1658867321,
      "ems": null
    },
    {
      "latitude": 38.524445,
      "longitude": -7.857605,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1658867327,
      "ems": null
    },
    {
      "latitude": 38.522907,
      "longitude": -7.857666,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1658867330,
      "ems": null
    },
    {
      "latitude": 38.521362,
      "longitude": -7.857792,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1658867333,
      "ems": null
    },
    {
      "latitude": 38.518478,
      "longitude": -7.857971,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1658867339,
      "ems": null
    },
    {
      "latitude": 38.515739,
      "longitude": -7.858093,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1658867345,
      "ems": null
    },
    {
      "latitude": 38.513271,
      "longitude": -7.858276,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1658867351,
      "ems": null
    },
    {
      "latitude": 38.510803,
      "longitude": -7.858398,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1658867357,
      "ems": null
    },
    {
      "latitude": 38.508591,
      "longitude": -7.858568,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658867363,
      "ems": null
    },
    {
      "latitude": 38.506577,
      "longitude": -7.858807,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658867369,
      "ems": null
    },
    {
      "latitude": 38.505173,
      "longitude": -7.858948,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658867372,
      "ems": null
    },
    {
      "latitude": 38.50296,
      "longitude": -7.859285,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658867378,
      "ems": null
    },
    {
      "latitude": 38.500702,
      "longitude": -7.859558,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658867384,
      "ems": null
    },
    {
      "latitude": 38.498886,
      "longitude": -7.859802,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1658867390,
      "ems": null
    },
    {
      "latitude": 38.497559,
      "longitude": -7.860121,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1658867393,
      "ems": null
    },
    {
      "latitude": 38.496468,
      "longitude": -7.860718,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1658867396,
      "ems": null
    },
    {
      "latitude": 38.496185,
      "longitude": -7.860897,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1658867398,
      "ems": null
    },
    {
      "latitude": 38.495022,
      "longitude": -7.862305,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1658867402,
      "ems": null
    },
    {
      "latitude": 38.494583,
      "longitude": -7.863225,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1658867405,
      "ems": null
    },
    {
      "latitude": 38.494137,
      "longitude": -7.864563,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1658867410,
      "ems": null
    },
    {
      "latitude": 38.493858,
      "longitude": -7.865906,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1658867414,
      "ems": null
    },
    {
      "latitude": 38.493713,
      "longitude": -7.866928,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1658867417,
      "ems": null
    },
    {
      "latitude": 38.493626,
      "longitude": -7.868042,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1658867420,
      "ems": null
    },
    {
      "latitude": 38.493576,
      "longitude": -7.868958,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1658867423,
      "ems": null
    },
    {
      "latitude": 38.49353,
      "longitude": -7.869674,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1658867426,
      "ems": null
    },
    {
      "latitude": 38.49353,
      "longitude": -7.870809,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658867429,
      "ems": null
    },
    {
      "latitude": 38.493534,
      "longitude": -7.871643,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658867432,
      "ems": null
    },
    {
      "latitude": 38.49358,
      "longitude": -7.872437,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658867435,
      "ems": null
    },
    {
      "latitude": 38.493576,
      "longitude": -7.873197,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658867438,
      "ems": null
    },
    {
      "latitude": 38.493622,
      "longitude": -7.874271,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1658867441,
      "ems": null
    },
    {
      "latitude": 38.493721,
      "longitude": -7.875366,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1658867444,
      "ems": null
    },
    {
      "latitude": 38.493805,
      "longitude": -7.876242,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1658867447,
      "ems": null
    },
    {
      "latitude": 38.493896,
      "longitude": -7.877078,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1658867450,
      "ems": null
    },
    {
      "latitude": 38.493954,
      "longitude": -7.877808,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1658867453,
      "ems": null
    },
    {
      "latitude": 38.494125,
      "longitude": -7.878869,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1658867456,
      "ems": null
    },
    {
      "latitude": 38.494232,
      "longitude": -7.879639,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1658867459,
      "ems": null
    },
    {
      "latitude": 38.4944,
      "longitude": -7.8806,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1658867462,
      "ems": null
    },
    {
      "latitude": 38.494511,
      "longitude": -7.881165,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1658867464,
      "ems": null
    },
    {
      "latitude": 38.494698,
      "longitude": -7.882019,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1658867468,
      "ems": null
    },
    {
      "latitude": 38.494839,
      "longitude": -7.883057,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1658867471,
      "ems": null
    },
    {
      "latitude": 38.494995,
      "longitude": -7.883706,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1658867474,
      "ems": null
    },
    {
      "latitude": 38.495178,
      "longitude": -7.884661,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1658867477,
      "ems": null
    },
    {
      "latitude": 38.49535,
      "longitude": -7.885864,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1658867483,
      "ems": null
    },
    {
      "latitude": 38.495907,
      "longitude": -7.888245,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1658867490,
      "ems": null
    },
    {
      "latitude": 38.496468,
      "longitude": -7.889648,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1658867495,
      "ems": null
    },
    {
      "latitude": 38.497257,
      "longitude": -7.890808,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1658867501,
      "ems": null
    },
    {
      "latitude": 38.498234,
      "longitude": -7.891663,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1658867506,
      "ems": null
    },
    {
      "latitude": 38.499493,
      "longitude": -7.892151,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1658867512,
      "ems": null
    },
    {
      "latitude": 38.500763,
      "longitude": -7.892303,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1658867517,
      "ems": null
    },
    {
      "latitude": 38.502239,
      "longitude": -7.892273,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658867522,
      "ems": null
    },
    {
      "latitude": 38.503555,
      "longitude": -7.892244,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658867527,
      "ems": null
    },
    {
      "latitude": 38.504986,
      "longitude": -7.89209,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658867533,
      "ems": null
    },
    {
      "latitude": 38.507584,
      "longitude": -7.892065,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658867543,
      "ems": null
    },
    {
      "latitude": 38.510101,
      "longitude": -7.892005,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658867554,
      "ems": null
    },
    {
      "latitude": 38.511475,
      "longitude": -7.892005,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658867559,
      "ems": null
    },
    {
      "latitude": 38.512985,
      "longitude": -7.891766,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658867565,
      "ems": null
    },
    {
      "latitude": 38.514496,
      "longitude": -7.891587,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658867570,
      "ems": null
    },
    {
      "latitude": 38.517471,
      "longitude": -7.891348,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658867581,
      "ems": null
    },
    {
      "latitude": 38.519043,
      "longitude": -7.891113,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658867586,
      "ems": null
    },
    {
      "latitude": 38.52063,
      "longitude": -7.891049,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658867592,
      "ems": null
    },
    {
      "latitude": 38.523605,
      "longitude": -7.890691,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658867602,
      "ems": null
    },
    {
      "latitude": 38.526443,
      "longitude": -7.890393,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658867613,
      "ems": null
    },
    {
      "latitude": 38.528263,
      "longitude": -7.890198,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658867618,
      "ems": null
    },
    {
      "latitude": 38.531055,
      "longitude": -7.889954,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658867629,
      "ems": null
    },
    {
      "latitude": 38.531891,
      "longitude": -7.889915,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658867633,
      "ems": null
    },
    {
      "latitude": 38.534546,
      "longitude": -7.889616,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658867644,
      "ems": null
    },
    {
      "latitude": 38.535988,
      "longitude": -7.889526,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658867649,
      "ems": null
    },
    {
      "latitude": 38.540497,
      "longitude": -7.88896,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658867664,
      "ems": null
    },
    {
      "latitude": 38.541855,
      "longitude": -7.888733,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1658867669,
      "ems": null
    },
    {
      "latitude": 38.544788,
      "longitude": -7.888306,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658867680,
      "ems": null
    },
    {
      "latitude": 38.546276,
      "longitude": -7.888123,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658867686,
      "ems": null
    },
    {
      "latitude": 38.549011,
      "longitude": -7.887706,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1658867696,
      "ems": null
    },
    {
      "latitude": 38.55043,
      "longitude": -7.887288,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1658867702,
      "ems": null
    },
    {
      "latitude": 38.551758,
      "longitude": -7.88699,
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1658867707,
      "ems": null
    },
    {
      "latitude": 38.553261,
      "longitude": -7.886536,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1658867713,
      "ems": null
    },
    {
      "latitude": 38.554459,
      "longitude": -7.886154,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1658867717,
      "ems": null
    },
    {
      "latitude": 38.555962,
      "longitude": -7.885376,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1658867723,
      "ems": null
    },
    {
      "latitude": 38.557114,
      "longitude": -7.883884,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1658867728,
      "ems": null
    },
    {
      "latitude": 38.557846,
      "longitude": -7.881855,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1658867733,
      "ems": null
    },
    {
      "latitude": 38.558147,
      "longitude": -7.880066,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1658867737,
      "ems": null
    },
    {
      "latitude": 38.558121,
      "longitude": -7.878272,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1658867740,
      "ems": null
    },
    {
      "latitude": 38.557892,
      "longitude": -7.876779,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1658867742,
      "ems": null
    },
    {
      "latitude": 38.55748,
      "longitude": -7.874988,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1658867746,
      "ems": null
    },
    {
      "latitude": 38.55703,
      "longitude": -7.873535,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1658867748,
      "ems": null
    },
    {
      "latitude": 38.55629,
      "longitude": -7.871644,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1658867752,
      "ems": null
    },
    {
      "latitude": 38.555832,
      "longitude": -7.87039,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1658867755,
      "ems": null
    },
    {
      "latitude": 38.555191,
      "longitude": -7.868838,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1658867757,
      "ems": null
    },
    {
      "latitude": 38.55423,
      "longitude": -7.866689,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1658867761,
      "ems": null
    },
    {
      "latitude": 38.553543,
      "longitude": -7.865136,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1658867764,
      "ems": null
    },
    {
      "latitude": 38.552795,
      "longitude": -7.863403,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1658867767,
      "ems": null
    },
    {
      "latitude": 38.552189,
      "longitude": -7.862122,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1658867769,
      "ems": null
    },
    {
      "latitude": 38.551437,
      "longitude": -7.860777,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1658867772,
      "ems": null
    },
    {
      "latitude": 38.551117,
      "longitude": -7.860229,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1658867773,
      "ems": null
    },
    {
      "latitude": 38.549629,
      "longitude": -7.858337,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1658867777,
      "ems": null
    },
    {
      "latitude": 38.548141,
      "longitude": -7.857076,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1658867781,
      "ems": null
    },
    {
      "latitude": 38.547409,
      "longitude": -7.856658,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1658867784,
      "ems": null
    },
    {
      "latitude": 38.545811,
      "longitude": -7.855957,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1658867786,
      "ems": null
    },
    {
      "latitude": 38.5448,
      "longitude": -7.855762,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1658867789,
      "ems": null
    },
    {
      "latitude": 38.542648,
      "longitude": -7.855702,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1658867793,
      "ems": null
    },
    {
      "latitude": 38.540634,
      "longitude": -7.855881,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658867797,
      "ems": null
    },
    {
      "latitude": 38.539341,
      "longitude": -7.856079,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658867800,
      "ems": null
    },
    {
      "latitude": 38.538071,
      "longitude": -7.85624,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658867803,
      "ems": null
    },
    {
      "latitude": 38.536549,
      "longitude": -7.856384,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658867806,
      "ems": null
    },
    {
      "latitude": 38.535198,
      "longitude": -7.856567,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658867809,
      "ems": null
    },
    {
      "latitude": 38.533813,
      "longitude": -7.856717,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658867812,
      "ems": null
    },
    {
      "latitude": 38.532394,
      "longitude": -7.856896,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658867815,
      "ems": null
    },
    {
      "latitude": 38.531567,
      "longitude": -7.856934,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658867818,
      "ems": null
    },
    {
      "latitude": 38.529922,
      "longitude": -7.857135,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658867821,
      "ems": null
    },
    {
      "latitude": 38.527424,
      "longitude": -7.857361,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1658867827,
      "ems": null
    },
    {
      "latitude": 38.52507,
      "longitude": -7.857613,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658867833,
      "ems": null
    },
    {
      "latitude": 38.522461,
      "longitude": -7.857852,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1658867839,
      "ems": null
    },
    {
      "latitude": 38.520256,
      "longitude": -7.858093,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658867845,
      "ems": null
    },
    {
      "latitude": 38.517563,
      "longitude": -7.858568,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1658867852,
      "ems": null
    },
    {
      "latitude": 38.515553,
      "longitude": -7.858948,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1658867858,
      "ems": null
    },
    {
      "latitude": 38.512939,
      "longitude": -7.859404,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1658867865,
      "ems": null
    },
    {
      "latitude": 38.511784,
      "longitude": -7.859619,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658867868,
      "ems": null
    },
    {
      "latitude": 38.511154,
      "longitude": -7.859763,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1658867871,
      "ems": null
    },
    {
      "latitude": 38.509174,
      "longitude": -7.860168,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1658867877,
      "ems": null
    },
    {
      "latitude": 38.507545,
      "longitude": -7.860779,
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1658867880,
      "ems": null
    },
    {
      "latitude": 38.506668,
      "longitude": -7.861374,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1658867883,
      "ems": null
    },
    {
      "latitude": 38.50589,
      "longitude": -7.86221,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1658867886,
      "ems": null
    },
    {
      "latitude": 38.505356,
      "longitude": -7.863037,
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1658867889,
      "ems": null
    },
    {
      "latitude": 38.50502,
      "longitude": -7.863883,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1658867891,
      "ems": null
    },
    {
      "latitude": 38.50489,
      "longitude": -7.864197,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1658867892,
      "ems": null
    },
    {
      "latitude": 38.5047,
      "longitude": -7.865077,
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1658867896,
      "ems": null
    },
    {
      "latitude": 38.504517,
      "longitude": -7.866509,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1658867900,
      "ems": null
    },
    {
      "latitude": 38.504379,
      "longitude": -7.86792,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1658867904,
      "ems": null
    },
    {
      "latitude": 38.504333,
      "longitude": -7.868838,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1658867907,
      "ems": null
    },
    {
      "latitude": 38.504288,
      "longitude": -7.869973,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1658867910,
      "ems": null
    },
    {
      "latitude": 38.504288,
      "longitude": -7.870728,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1658867913,
      "ems": null
    },
    {
      "latitude": 38.504242,
      "longitude": -7.871704,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1658867916,
      "ems": null
    },
    {
      "latitude": 38.504242,
      "longitude": -7.8726,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658867919,
      "ems": null
    },
    {
      "latitude": 38.504242,
      "longitude": -7.873674,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1658867922,
      "ems": null
    },
    {
      "latitude": 38.504242,
      "longitude": -7.874573,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1658867925,
      "ems": null
    },
    {
      "latitude": 38.504288,
      "longitude": -7.875466,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1658867928,
      "ems": null
    },
    {
      "latitude": 38.504288,
      "longitude": -7.876343,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1658867930,
      "ems": null
    },
    {
      "latitude": 38.504333,
      "longitude": -7.877319,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658867934,
      "ems": null
    },
    {
      "latitude": 38.504333,
      "longitude": -7.878479,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1658867938,
      "ems": null
    },
    {
      "latitude": 38.504379,
      "longitude": -7.878989,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1658867939,
      "ems": null
    },
    {
      "latitude": 38.504425,
      "longitude": -7.880432,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1658867944,
      "ems": null
    },
    {
      "latitude": 38.50452,
      "longitude": -7.883301,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1658867953,
      "ems": null
    },
    {
      "latitude": 38.504845,
      "longitude": -7.886475,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1658867964,
      "ems": null
    },
    {
      "latitude": 38.505112,
      "longitude": -7.887825,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "timestamp": 1658867969,
      "ems": null
    },
    {
      "latitude": 38.505589,
      "longitude": -7.889343,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1658867975,
      "ems": null
    },
    {
      "latitude": 38.50629,
      "longitude": -7.890564,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1658867980,
      "ems": null
    },
    {
      "latitude": 38.507263,
      "longitude": -7.891288,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1658867985,
      "ems": null
    },
    {
      "latitude": 38.508617,
      "longitude": -7.891663,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1658867991,
      "ems": null
    },
    {
      "latitude": 38.510056,
      "longitude": -7.891706,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1658867996,
      "ems": null
    },
    {
      "latitude": 38.511429,
      "longitude": -7.891706,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658868001,
      "ems": null
    },
    {
      "latitude": 38.512894,
      "longitude": -7.891527,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658868006,
      "ems": null
    },
    {
      "latitude": 38.514481,
      "longitude": -7.891541,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658868012,
      "ems": null
    },
    {
      "latitude": 38.516006,
      "longitude": -7.891408,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658868017,
      "ems": null
    },
    {
      "latitude": 38.519119,
      "longitude": -7.891109,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658868028,
      "ems": null
    },
    {
      "latitude": 38.52058,
      "longitude": -7.890991,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658868033,
      "ems": null
    },
    {
      "latitude": 38.523422,
      "longitude": -7.890691,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658868044,
      "ems": null
    },
    {
      "latitude": 38.524933,
      "longitude": -7.890572,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658868049,
      "ems": null
    },
    {
      "latitude": 38.52803,
      "longitude": -7.890198,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658868060,
      "ems": null
    },
    {
      "latitude": 38.529373,
      "longitude": -7.890094,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658868065,
      "ems": null
    },
    {
      "latitude": 38.531754,
      "longitude": -7.889893,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658868075,
      "ems": null
    },
    {
      "latitude": 38.53315,
      "longitude": -7.889771,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658868081,
      "ems": null
    },
    {
      "latitude": 38.534821,
      "longitude": -7.889557,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658868087,
      "ems": null
    },
    {
      "latitude": 38.536827,
      "longitude": -7.889343,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658868094,
      "ems": null
    },
    {
      "latitude": 38.540863,
      "longitude": -7.889019,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658868108,
      "ems": null
    },
    {
      "latitude": 38.543438,
      "longitude": -7.888672,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658868119,
      "ems": null
    },
    {
      "latitude": 38.544708,
      "longitude": -7.888422,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1658868124,
      "ems": null
    },
    {
      "latitude": 38.547489,
      "longitude": -7.888123,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1658868135,
      "ems": null
    },
    {
      "latitude": 38.548737,
      "longitude": -7.887885,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658868140,
      "ems": null
    },
    {
      "latitude": 38.551304,
      "longitude": -7.887634,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658868151,
      "ems": null
    },
    {
      "latitude": 38.5527,
      "longitude": -7.887573,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658868156,
      "ems": null
    },
    {
      "latitude": 38.555355,
      "longitude": -7.886902,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1658868167,
      "ems": null
    },
    {
      "latitude": 38.556705,
      "longitude": -7.885498,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1658868172,
      "ems": null
    },
    {
      "latitude": 38.557571,
      "longitude": -7.883228,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1658868177,
      "ems": null
    },
    {
      "latitude": 38.5578,
      "longitude": -7.881317,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1658868181,
      "ems": null
    },
    {
      "latitude": 38.557774,
      "longitude": -7.88031,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1658868183,
      "ems": null
    },
    {
      "latitude": 38.557571,
      "longitude": -7.877377,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1658868188,
      "ems": null
    },
    {
      "latitude": 38.557343,
      "longitude": -7.875525,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1658868191,
      "ems": null
    },
    {
      "latitude": 38.557159,
      "longitude": -7.874152,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1658868194,
      "ems": null
    },
    {
      "latitude": 38.556843,
      "longitude": -7.872314,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1658868197,
      "ems": null
    },
    {
      "latitude": 38.55661,
      "longitude": -7.870728,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1658868200,
      "ems": null
    },
    {
      "latitude": 38.556427,
      "longitude": -7.869495,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1658868203,
      "ems": null
    },
    {
      "latitude": 38.556061,
      "longitude": -7.867525,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1658868206,
      "ems": null
    },
    {
      "latitude": 38.555775,
      "longitude": -7.866089,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1658868209,
      "ems": null
    },
    {
      "latitude": 38.555447,
      "longitude": -7.864441,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1658868212,
      "ems": null
    },
    {
      "latitude": 38.555077,
      "longitude": -7.862549,
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1658868216,
      "ems": null
    },
    {
      "latitude": 38.554749,
      "longitude": -7.860962,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1658868218,
      "ems": null
    },
    {
      "latitude": 38.554237,
      "longitude": -7.859192,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1658868221,
      "ems": null
    },
    {
      "latitude": 38.553543,
      "longitude": -7.857613,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1658868225,
      "ems": null
    },
    {
      "latitude": 38.552673,
      "longitude": -7.856359,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1658868227,
      "ems": null
    },
    {
      "latitude": 38.551723,
      "longitude": -7.855347,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1658868229,
      "ems": null
    },
    {
      "latitude": 38.550236,
      "longitude": -7.854248,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1658868233,
      "ems": null
    },
    {
      "latitude": 38.548233,
      "longitude": -7.853433,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1658868237,
      "ems": null
    },
    {
      "latitude": 38.546494,
      "longitude": -7.853195,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1658868241,
      "ems": null
    },
    {
      "latitude": 38.544388,
      "longitude": -7.853374,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658868246,
      "ems": null
    },
    {
      "latitude": 38.542877,
      "longitude": -7.853577,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658868249,
      "ems": null
    },
    {
      "latitude": 38.541389,
      "longitude": -7.853821,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658868252,
      "ems": null
    },
    {
      "latitude": 38.540497,
      "longitude": -7.853911,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658868254,
      "ems": null
    },
    {
      "latitude": 38.538803,
      "longitude": -7.85415,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658868257,
      "ems": null
    },
    {
      "latitude": 38.537247,
      "longitude": -7.854389,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658868260,
      "ems": null
    },
    {
      "latitude": 38.536514,
      "longitude": -7.854508,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658868263,
      "ems": null
    },
    {
      "latitude": 38.534546,
      "longitude": -7.854797,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658868266,
      "ems": null
    },
    {
      "latitude": 38.533127,
      "longitude": -7.854986,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658868270,
      "ems": null
    },
    {
      "latitude": 38.529984,
      "longitude": -7.855286,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658868276,
      "ems": null
    },
    {
      "latitude": 38.527283,
      "longitude": -7.855591,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658868282,
      "ems": null
    },
    {
      "latitude": 38.524704,
      "longitude": -7.855822,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658868288,
      "ems": null
    },
    {
      "latitude": 38.522003,
      "longitude": -7.85612,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658868294,
      "ems": null
    },
    {
      "latitude": 38.519321,
      "longitude": -7.856445,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658868300,
      "ems": null
    },
    {
      "latitude": 38.51683,
      "longitude": -7.856717,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658868306,
      "ems": null
    },
    {
      "latitude": 38.514587,
      "longitude": -7.856956,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658868311,
      "ems": null
    },
    {
      "latitude": 38.512619,
      "longitude": -7.857195,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658868318,
      "ems": null
    },
    {
      "latitude": 38.508289,
      "longitude": -7.85791,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658868326,
      "ems": null
    },
    {
      "latitude": 38.505981,
      "longitude": -7.858329,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1658868332,
      "ems": null
    },
    {
      "latitude": 38.50452,
      "longitude": -7.858521,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658868338,
      "ems": null
    },
    {
      "latitude": 38.501308,
      "longitude": -7.858765,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1658868344,
      "ems": null
    },
    {
      "latitude": 38.498932,
      "longitude": -7.859046,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1658868350,
      "ems": null
    },
    {
      "latitude": 38.497879,
      "longitude": -7.859404,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1658868353,
      "ems": null
    },
    {
      "latitude": 38.496918,
      "longitude": -7.860061,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1658868356,
      "ems": null
    },
    {
      "latitude": 38.496418,
      "longitude": -7.860535,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1658868358,
      "ems": null
    },
    {
      "latitude": 38.495537,
      "longitude": -7.861755,
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1658868362,
      "ems": null
    },
    {
      "latitude": 38.495209,
      "longitude": -7.862549,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1658868364,
      "ems": null
    },
    {
      "latitude": 38.494858,
      "longitude": -7.863763,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1658868369,
      "ems": null
    },
    {
      "latitude": 38.494675,
      "longitude": -7.864838,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1658868373,
      "ems": null
    },
    {
      "latitude": 38.494583,
      "longitude": -7.866271,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1658868377,
      "ems": null
    },
    {
      "latitude": 38.494602,
      "longitude": -7.86731,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658868380,
      "ems": null
    },
    {
      "latitude": 38.494629,
      "longitude": -7.868122,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1658868383,
      "ems": null
    },
    {
      "latitude": 38.494602,
      "longitude": -7.868958,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1658868386,
      "ems": null
    },
    {
      "latitude": 38.494629,
      "longitude": -7.869913,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658868389,
      "ems": null
    },
    {
      "latitude": 38.494652,
      "longitude": -7.870728,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658868391,
      "ems": null
    },
    {
      "latitude": 38.494652,
      "longitude": -7.871704,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1658868395,
      "ems": null
    },
    {
      "latitude": 38.494652,
      "longitude": -7.87262,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1658868398,
      "ems": null
    },
    {
      "latitude": 38.494652,
      "longitude": -7.873413,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658868401,
      "ems": null
    },
    {
      "latitude": 38.494743,
      "longitude": -7.875122,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1658868407,
      "ems": null
    },
    {
      "latitude": 38.494812,
      "longitude": -7.877018,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1658868413,
      "ems": null
    },
    {
      "latitude": 38.49493,
      "longitude": -7.878845,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1658868419,
      "ems": null
    },
    {
      "latitude": 38.495022,
      "longitude": -7.8797,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1658868422,
      "ems": null
    },
    {
      "latitude": 38.495117,
      "longitude": -7.880493,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1658868425,
      "ems": null
    },
    {
      "latitude": 38.495255,
      "longitude": -7.88147,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1658868428,
      "ems": null
    },
    {
      "latitude": 38.495396,
      "longitude": -7.882324,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1658868431,
      "ems": null
    },
    {
      "latitude": 38.495583,
      "longitude": -7.88324,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1658868434,
      "ems": null
    },
    {
      "latitude": 38.495728,
      "longitude": -7.884064,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1658868437,
      "ems": null
    },
    {
      "latitude": 38.495911,
      "longitude": -7.8849,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1658868440,
      "ems": null
    },
    {
      "latitude": 38.496094,
      "longitude": -7.885556,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1658868442,
      "ems": null
    },
    {
      "latitude": 38.496368,
      "longitude": -7.886631,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1658868446,
      "ems": null
    },
    {
      "latitude": 38.496559,
      "longitude": -7.887329,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1658868449,
      "ems": null
    },
    {
      "latitude": 38.496746,
      "longitude": -7.887878,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1658868452,
      "ems": null
    },
    {
      "latitude": 38.497742,
      "longitude": -7.889378,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1658868458,
      "ems": null
    },
    {
      "latitude": 38.498699,
      "longitude": -7.890259,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1658868463,
      "ems": null
    },
    {
      "latitude": 38.499863,
      "longitude": -7.891174,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1658868468,
      "ems": null
    },
    {
      "latitude": 38.501076,
      "longitude": -7.891846,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1658868473,
      "ems": null
    },
    {
      "latitude": 38.50264,
      "longitude": -7.892363,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1658868479,
      "ems": null
    },
    {
      "latitude": 38.503967,
      "longitude": -7.892602,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1658868484,
      "ems": null
    },
    {
      "latitude": 38.505615,
      "longitude": -7.892602,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658868490,
      "ems": null
    },
    {
      "latitude": 38.507267,
      "longitude": -7.892395,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658868496,
      "ems": null
    },
    {
      "latitude": 38.508663,
      "longitude": -7.892212,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658868501,
      "ems": null
    },
    {
      "latitude": 38.510193,
      "longitude": -7.892005,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658868506,
      "ems": null
    },
    {
      "latitude": 38.511642,
      "longitude": -7.891846,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658868511,
      "ems": null
    },
    {
      "latitude": 38.514668,
      "longitude": -7.891663,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658868522,
      "ems": null
    },
    {
      "latitude": 38.517517,
      "longitude": -7.891408,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658868533,
      "ems": null
    },
    {
      "latitude": 38.519043,
      "longitude": -7.891235,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658868538,
      "ems": null
    },
    {
      "latitude": 38.521835,
      "longitude": -7.890869,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1658868549,
      "ems": null
    },
    {
      "latitude": 38.523331,
      "longitude": -7.890632,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658868554,
      "ems": null
    },
    {
      "latitude": 38.526398,
      "longitude": -7.890393,
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658868565,
      "ems": null
    },
    {
      "latitude": 38.527981,
      "longitude": -7.890259,
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658868570,
      "ems": null
    },
    {
      "latitude": 38.530777,
      "longitude": -7.889954,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658868581,
      "ems": null
    },
    {
      "latitude": 38.533081,
      "longitude": -7.889736,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658868592,
      "ems": null
    },
    {
      "latitude": 38.534546,
      "longitude": -7.889587,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658868598,
      "ems": null
    },
    {
      "latitude": 38.536926,
      "longitude": -7.889318,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658868606,
      "ems": null
    },
    {
      "latitude": 38.539341,
      "longitude": -7.888977,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658868615,
      "ems": null
    },
    {
      "latitude": 38.541779,
      "longitude": -7.888661,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1658868625,
      "ems": null
    },
    {
      "latitude": 38.543205,
      "longitude": -7.888367,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1658868631,
      "ems": null
    },
    {
      "latitude": 38.545811,
      "longitude": -7.887939,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658868641,
      "ems": null
    },
    {
      "latitude": 38.547043,
      "longitude": -7.887825,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658868646,
      "ems": null
    },
    {
      "latitude": 38.549629,
      "longitude": -7.887512,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658868657,
      "ems": null
    },
    {
      "latitude": 38.552216,
      "longitude": -7.887288,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658868667,
      "ems": null
    },
    {
      "latitude": 38.555027,
      "longitude": -7.88678,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1658868678,
      "ems": null
    },
    {
      "latitude": 38.555969,
      "longitude": -7.886512,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1658868682,
      "ems": null
    },
    {
      "latitude": 38.55703,
      "longitude": -7.885925,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1658868687,
      "ems": null
    },
    {
      "latitude": 38.558102,
      "longitude": -7.884399,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1658868692,
      "ems": null
    },
    {
      "latitude": 38.558899,
      "longitude": -7.882213,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1658868698,
      "ems": null
    },
    {
      "latitude": 38.559174,
      "longitude": -7.880302,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1658868701,
      "ems": null
    },
    {
      "latitude": 38.559174,
      "longitude": -7.87854,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1658868705,
      "ems": null
    },
    {
      "latitude": 38.558941,
      "longitude": -7.875916,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1658868710,
      "ems": null
    },
    {
      "latitude": 38.558754,
      "longitude": -7.873535,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1658868715,
      "ems": null
    },
    {
      "latitude": 38.558624,
      "longitude": -7.872241,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1658868718,
      "ems": null
    },
    {
      "latitude": 38.558426,
      "longitude": -7.87085,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1658868721,
      "ems": null
    },
    {
      "latitude": 38.558212,
      "longitude": -7.869674,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1658868723,
      "ems": null
    },
    {
      "latitude": 38.558147,
      "longitude": -7.869202,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1658868724,
      "ems": null
    },
    {
      "latitude": 38.557915,
      "longitude": -7.867676,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1658868727,
      "ems": null
    },
    {
      "latitude": 38.557682,
      "longitude": -7.866211,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1658868730,
      "ems": null
    },
    {
      "latitude": 38.557449,
      "longitude": -7.864868,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1658868733,
      "ems": null
    },
    {
      "latitude": 38.557076,
      "longitude": -7.862976,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1658868736,
      "ems": null
    },
    {
      "latitude": 38.556931,
      "longitude": -7.862449,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1658868738,
      "ems": null
    },
    {
      "latitude": 38.555878,
      "longitude": -7.860001,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1658868742,
      "ems": null
    },
    {
      "latitude": 38.554459,
      "longitude": -7.858031,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1658868747,
      "ems": null
    },
    {
      "latitude": 38.553955,
      "longitude": -7.857493,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1658868748,
      "ems": null
    },
    {
      "latitude": 38.552143,
      "longitude": -7.85614,
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1658868753,
      "ems": null
    },
    {
      "latitude": 38.549789,
      "longitude": -7.855284,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1658868758,
      "ems": null
    },
    {
      "latitude": 38.547535,
      "longitude": -7.854797,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1658868763,
      "ems": null
    },
    {
      "latitude": 38.54512,
      "longitude": -7.854448,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1658868769,
      "ems": null
    },
    {
      "latitude": 38.543701,
      "longitude": -7.854209,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1658868772,
      "ems": null
    },
    {
      "latitude": 38.542282,
      "longitude": -7.854031,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1658868775,
      "ems": null
    },
    {
      "latitude": 38.541016,
      "longitude": -7.853821,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1658868778,
      "ems": null
    },
    {
      "latitude": 38.539898,
      "longitude": -7.853699,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1658868780,
      "ems": null
    },
    {
      "latitude": 38.53841,
      "longitude": -7.853699,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1658868784,
      "ems": null
    },
    {
      "latitude": 38.537613,
      "longitude": -7.853672,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1658868786,
      "ems": null
    },
    {
      "latitude": 38.535851,
      "longitude": -7.853699,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1658868790,
      "ems": null
    },
    {
      "latitude": 38.534775,
      "longitude": -7.853732,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1658868792,
      "ems": null
    },
    {
      "latitude": 38.533447,
      "longitude": -7.853792,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1658868795,
      "ems": null
    },
    {
      "latitude": 38.532452,
      "longitude": -7.853821,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1658868798,
      "ems": null
    },
    {
      "latitude": 38.530914,
      "longitude": -7.853882,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1658868801,
      "ems": null
    },
    {
      "latitude": 38.529282,
      "longitude": -7.853911,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1658868805,
      "ems": null
    },
    {
      "latitude": 38.528229,
      "longitude": -7.854031,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1658868807,
      "ems": null
    },
    {
      "latitude": 38.526947,
      "longitude": -7.85409,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1658868810,
      "ems": null
    },
    {
      "latitude": 38.524212,
      "longitude": -7.85437,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658868817,
      "ems": null
    },
    {
      "latitude": 38.522953,
      "longitude": -7.854553,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658868820,
      "ems": null
    },
    {
      "latitude": 38.521957,
      "longitude": -7.854687,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658868823,
      "ems": null
    },
    {
      "latitude": 38.52063,
      "longitude": -7.854867,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1658868826,
      "ems": null
    },
    {
      "latitude": 38.519485,
      "longitude": -7.855045,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1658868829,
      "ems": null
    },
    {
      "latitude": 38.517197,
      "longitude": -7.855344,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658868835,
      "ems": null
    },
    {
      "latitude": 38.515087,
      "longitude": -7.855591,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658868841,
      "ems": null
    },
    {
      "latitude": 38.512711,
      "longitude": -7.855822,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658868847,
      "ems": null
    },
    {
      "latitude": 38.510468,
      "longitude": -7.856001,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1658868853,
      "ems": null
    },
    {
      "latitude": 38.509129,
      "longitude": -7.856018,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1658868857,
      "ems": null
    },
    {
      "latitude": 38.506104,
      "longitude": -7.856201,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1658868865,
      "ems": null
    },
    {
      "latitude": 38.505066,
      "longitude": -7.856658,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1658868868,
      "ems": null
    },
    {
      "latitude": 38.504288,
      "longitude": -7.857255,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1658868870,
      "ems": null
    },
    {
      "latitude": 38.503464,
      "longitude": -7.85827,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1658868874,
      "ems": null
    },
    {
      "latitude": 38.502983,
      "longitude": -7.859192,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1658868877,
      "ems": null
    },
    {
      "latitude": 38.502659,
      "longitude": -7.860107,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1658868880,
      "ems": null
    },
    {
      "latitude": 38.502548,
      "longitude": -7.860897,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1658868883,
      "ems": null
    },
    {
      "latitude": 38.502502,
      "longitude": -7.861852,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1658868886,
      "ems": null
    },
    {
      "latitude": 38.502502,
      "longitude": -7.862927,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1658868889,
      "ems": null
    },
    {
      "latitude": 38.502548,
      "longitude": -7.863703,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1658868892,
      "ems": null
    },
    {
      "latitude": 38.502594,
      "longitude": -7.864599,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658868895,
      "ems": null
    },
    {
      "latitude": 38.502594,
      "longitude": -7.865674,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1658868898,
      "ems": null
    },
    {
      "latitude": 38.502594,
      "longitude": -7.866629,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658868901,
      "ems": null
    },
    {
      "latitude": 38.50264,
      "longitude": -7.867405,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1658868904,
      "ems": null
    },
    {
      "latitude": 38.502609,
      "longitude": -7.868469,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1658868907,
      "ems": null
    },
    {
      "latitude": 38.50264,
      "longitude": -7.869435,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658868910,
      "ems": null
    },
    {
      "latitude": 38.502609,
      "longitude": -7.870178,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658868913,
      "ems": null
    },
    {
      "latitude": 38.502705,
      "longitude": -7.871948,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1658868918,
      "ems": null
    },
    {
      "latitude": 38.502869,
      "longitude": -7.874093,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1658868925,
      "ems": null
    },
    {
      "latitude": 38.502983,
      "longitude": -7.874939,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1658868928,
      "ems": null
    },
    {
      "latitude": 38.503029,
      "longitude": -7.875244,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1658868929,
      "ems": null
    },
    {
      "latitude": 38.50317,
      "longitude": -7.876709,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1658868934,
      "ems": null
    },
    {
      "latitude": 38.503448,
      "longitude": -7.878418,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1658868939,
      "ems": null
    },
    {
      "latitude": 38.503777,
      "longitude": -7.879761,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1658868944,
      "ems": null
    },
    {
      "latitude": 38.504147,
      "longitude": -7.88147,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1658868950,
      "ems": null
    },
    {
      "latitude": 38.504612,
      "longitude": -7.882935,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1658868955,
      "ems": null
    },
    {
      "latitude": 38.505077,
      "longitude": -7.884338,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1658868960,
      "ems": null
    },
    {
      "latitude": 38.505871,
      "longitude": -7.887634,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1658868971,
      "ems": null
    },
    {
      "latitude": 38.506485,
      "longitude": -7.889079,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1658868976,
      "ems": null
    },
    {
      "latitude": 38.507404,
      "longitude": -7.890259,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1658868981,
      "ems": null
    },
    {
      "latitude": 38.508617,
      "longitude": -7.890991,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1658868987,
      "ems": null
    },
    {
      "latitude": 38.509735,
      "longitude": -7.891288,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1658868992,
      "ems": null
    },
    {
      "latitude": 38.511269,
      "longitude": -7.891541,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1658868997,
      "ems": null
    },
    {
      "latitude": 38.512848,
      "longitude": -7.891527,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658869003,
      "ems": null
    },
    {
      "latitude": 38.514297,
      "longitude": -7.891418,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658869008,
      "ems": null
    },
    {
      "latitude": 38.515549,
      "longitude": -7.891408,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658869013,
      "ems": null
    },
    {
      "latitude": 38.516922,
      "longitude": -7.891348,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658869019,
      "ems": null
    },
    {
      "latitude": 38.518112,
      "longitude": -7.891174,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658869024,
      "ems": null
    },
    {
      "latitude": 38.520859,
      "longitude": -7.89093,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658869035,
      "ems": null
    },
    {
      "latitude": 38.522232,
      "longitude": -7.890811,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658869040,
      "ems": null
    },
    {
      "latitude": 38.524864,
      "longitude": -7.890564,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658869051,
      "ems": null
    },
    {
      "latitude": 38.527657,
      "longitude": -7.890259,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658869061,
      "ems": null
    },
    {
      "latitude": 38.530075,
      "longitude": -7.890015,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658869071,
      "ems": null
    },
    {
      "latitude": 38.531113,
      "longitude": -7.889975,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658869077,
      "ems": null
    },
    {
      "latitude": 38.532871,
      "longitude": -7.889771,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658869087,
      "ems": null
    },
    {
      "latitude": 38.535431,
      "longitude": -7.889526,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658869098,
      "ems": null
    },
    {
      "latitude": 38.537338,
      "longitude": -7.889318,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658869107,
      "ems": null
    },
    {
      "latitude": 38.539665,
      "longitude": -7.889038,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1658869115,
      "ems": null
    },
    {
      "latitude": 38.540924,
      "longitude": -7.888733,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1658869120,
      "ems": null
    },
    {
      "latitude": 38.542133,
      "longitude": -7.888367,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1658869125,
      "ems": null
    },
    {
      "latitude": 38.544788,
      "longitude": -7.887756,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1658869136,
      "ems": null
    },
    {
      "latitude": 38.545944,
      "longitude": -7.887467,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1658869141,
      "ems": null
    },
    {
      "latitude": 38.548744,
      "longitude": -7.886719,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1658869152,
      "ems": null
    },
    {
      "latitude": 38.550003,
      "longitude": -7.886353,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1658869157,
      "ems": null
    },
    {
      "latitude": 38.552563,
      "longitude": -7.885376,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1658869168,
      "ems": null
    },
    {
      "latitude": 38.553497,
      "longitude": -7.8849,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1658869173,
      "ems": null
    },
    {
      "latitude": 38.555168,
      "longitude": -7.883362,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1658869178,
      "ems": null
    },
    {
      "latitude": 38.556194,
      "longitude": -7.881348,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1658869183,
      "ems": null
    },
    {
      "latitude": 38.556519,
      "longitude": -7.878929,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1658869188,
      "ems": null
    },
    {
      "latitude": 38.556152,
      "longitude": -7.875884,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1658869193,
      "ems": null
    },
    {
      "latitude": 38.555008,
      "longitude": -7.87254,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1658869200,
      "ems": null
    },
    {
      "latitude": 38.553726,
      "longitude": -7.869812,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1658869205,
      "ems": null
    },
    {
      "latitude": 38.552654,
      "longitude": -7.867798,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1658869208,
      "ems": null
    },
    {
      "latitude": 38.551117,
      "longitude": -7.8643,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1658869215,
      "ems": null
    },
    {
      "latitude": 38.55014,
      "longitude": -7.861633,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1658869220,
      "ems": null
    },
    {
      "latitude": 38.548233,
      "longitude": -7.857361,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1658869228,
      "ems": null
    },
    {
      "latitude": 38.544937,
      "longitude": -7.854031,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1658869237,
      "ems": null
    },
    {
      "latitude": 38.544323,
      "longitude": -7.853699,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1658869238,
      "ems": null
    },
    {
      "latitude": 38.543858,
      "longitude": -7.853516,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1658869239,
      "ems": null
    },
    {
      "latitude": 38.540646,
      "longitude": -7.853333,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658869246,
      "ems": null
    },
    {
      "latitude": 38.540131,
      "longitude": -7.853433,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1658869247,
      "ems": null
    },
    {
      "latitude": 38.539261,
      "longitude": -7.853732,
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1658869250,
      "ems": null
    },
    {
      "latitude": 38.538315,
      "longitude": -7.854065,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1658869251,
      "ems": null
    },
    {
      "latitude": 38.536285,
      "longitude": -7.854568,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1658869255,
      "ems": null
    },
    {
      "latitude": 38.534958,
      "longitude": -7.854806,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658869258,
      "ems": null
    },
    {
      "latitude": 38.53299,
      "longitude": -7.855344,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1658869262,
      "ems": null
    },
    {
      "latitude": 38.531845,
      "longitude": -7.855713,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1658869264,
      "ems": null
    },
    {
      "latitude": 38.530357,
      "longitude": -7.85614,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1658869268,
      "ems": null
    },
    {
      "latitude": 38.528824,
      "longitude": -7.856538,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1658869271,
      "ems": null
    },
    {
      "latitude": 38.525848,
      "longitude": -7.857315,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1658869277,
      "ems": null
    },
    {
      "latitude": 38.524841,
      "longitude": -7.857553,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1658869280,
      "ems": null
    },
    {
      "latitude": 38.521729,
      "longitude": -7.85821,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1658869286,
      "ems": null
    },
    {
      "latitude": 38.51889,
      "longitude": -7.858807,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658869292,
      "ems": null
    },
    {
      "latitude": 38.516716,
      "longitude": -7.859253,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658869298,
      "ems": null
    },
    {
      "latitude": 38.513878,
      "longitude": -7.859863,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658869304,
      "ems": null
    },
    {
      "latitude": 38.511475,
      "longitude": -7.86036,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1658869311,
      "ems": null
    },
    {
      "latitude": 38.508224,
      "longitude": -7.860957,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1658869319,
      "ems": null
    },
    {
      "latitude": 38.506104,
      "longitude": -7.861389,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1658869325,
      "ems": null
    },
    {
      "latitude": 38.504105,
      "longitude": -7.861733,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1658869331,
      "ems": null
    },
    {
      "latitude": 38.501312,
      "longitude": -7.86233,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1658869337,
      "ems": null
    },
    {
      "latitude": 38.500145,
      "longitude": -7.862854,
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1658869340,
      "ems": null
    },
    {
      "latitude": 38.499207,
      "longitude": -7.863524,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1658869343,
      "ems": null
    },
    {
      "latitude": 38.498611,
      "longitude": -7.864061,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1658869345,
      "ems": null
    },
    {
      "latitude": 38.497723,
      "longitude": -7.865356,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1658869349,
      "ems": null
    },
    {
      "latitude": 38.497238,
      "longitude": -7.86633,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1658869352,
      "ems": null
    },
    {
      "latitude": 38.496918,
      "longitude": -7.867405,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1658869355,
      "ems": null
    },
    {
      "latitude": 38.496746,
      "longitude": -7.86853,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1658869358,
      "ems": null
    },
    {
      "latitude": 38.496689,
      "longitude": -7.869495,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1658869361,
      "ems": null
    },
    {
      "latitude": 38.496689,
      "longitude": -7.870689,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1658869364,
      "ems": null
    },
    {
      "latitude": 38.496689,
      "longitude": -7.871704,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1658869367,
      "ems": null
    },
    {
      "latitude": 38.496651,
      "longitude": -7.872437,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1658869370,
      "ems": null
    },
    {
      "latitude": 38.496689,
      "longitude": -7.873615,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658869373,
      "ems": null
    },
    {
      "latitude": 38.496746,
      "longitude": -7.874573,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1658869376,
      "ems": null
    },
    {
      "latitude": 38.49678,
      "longitude": -7.875645,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1658869379,
      "ems": null
    },
    {
      "latitude": 38.496826,
      "longitude": -7.87666,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1658869382,
      "ems": null
    },
    {
      "latitude": 38.496872,
      "longitude": -7.877794,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1658869385,
      "ems": null
    },
    {
      "latitude": 38.496918,
      "longitude": -7.87863,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1658869388,
      "ems": null
    },
    {
      "latitude": 38.497025,
      "longitude": -7.8797,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1658869392,
      "ems": null
    },
    {
      "latitude": 38.497101,
      "longitude": -7.880661,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1658869394,
      "ems": null
    },
    {
      "latitude": 38.497192,
      "longitude": -7.881496,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1658869397,
      "ems": null
    },
    {
      "latitude": 38.497303,
      "longitude": -7.882446,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1658869400,
      "ems": null
    },
    {
      "latitude": 38.497349,
      "longitude": -7.882874,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1658869403,
      "ems": null
    },
    {
      "latitude": 38.497513,
      "longitude": -7.884064,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1658869405,
      "ems": null
    },
    {
      "latitude": 38.497742,
      "longitude": -7.885079,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1658869409,
      "ems": null
    },
    {
      "latitude": 38.498016,
      "longitude": -7.886094,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1658869412,
      "ems": null
    },
    {
      "latitude": 38.498383,
      "longitude": -7.887168,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1658869416,
      "ems": null
    },
    {
      "latitude": 38.498749,
      "longitude": -7.888184,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1658869420,
      "ems": null
    },
    {
      "latitude": 38.499352,
      "longitude": -7.889587,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1658869426,
      "ems": null
    },
    {
      "latitude": 38.500145,
      "longitude": -7.890625,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1658869431,
      "ems": null
    },
    {
      "latitude": 38.501358,
      "longitude": -7.891348,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1658869437,
      "ems": null
    },
    {
      "latitude": 38.502193,
      "longitude": -7.891663,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1658869440,
      "ems": null
    },
    {
      "latitude": 38.503777,
      "longitude": -7.891968,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1658869447,
      "ems": null
    },
    {
      "latitude": 38.505123,
      "longitude": -7.89209,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1658869452,
      "ems": null
    },
    {
      "latitude": 38.506393,
      "longitude": -7.892124,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658869458,
      "ems": null
    },
    {
      "latitude": 38.507824,
      "longitude": -7.89209,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658869463,
      "ems": null
    },
    {
      "latitude": 38.509323,
      "longitude": -7.892005,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658869468,
      "ems": null
    },
    {
      "latitude": 38.510571,
      "longitude": -7.891968,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658869473,
      "ems": null
    },
    {
      "latitude": 38.513443,
      "longitude": -7.891647,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658869484,
      "ems": null
    },
    {
      "latitude": 38.515041,
      "longitude": -7.891479,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658869489,
      "ems": null
    },
    {
      "latitude": 38.518021,
      "longitude": -7.891235,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658869500,
      "ems": null
    },
    {
      "latitude": 38.519485,
      "longitude": -7.891109,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658869505,
      "ems": null
    },
    {
      "latitude": 38.522305,
      "longitude": -7.890747,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658869515,
      "ems": null
    },
    {
      "latitude": 38.523834,
      "longitude": -7.890632,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658869521,
      "ems": null
    },
    {
      "latitude": 38.526901,
      "longitude": -7.890333,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658869532,
      "ems": null
    },
    {
      "latitude": 38.529877,
      "longitude": -7.890094,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658869542,
      "ems": null
    },
    {
      "latitude": 38.532265,
      "longitude": -7.889832,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658869553,
      "ems": null
    },
    {
      "latitude": 38.53299,
      "longitude": -7.889796,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658869557,
      "ems": null
    },
    {
      "latitude": 38.534267,
      "longitude": -7.889709,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658869569,
      "ems": null
    },
    {
      "latitude": 38.5345,
      "longitude": -7.889557,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1658869574,
      "ems": null
    },
    {
      "latitude": 38.534042,
      "longitude": -7.889616,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1658869595,
      "ems": null
    },
    {
      "latitude": 38.533661,
      "longitude": -7.889648,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1658869601,
      "ems": null
    },
    {
      "latitude": 38.533356,
      "longitude": -7.889318,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1658869611,
      "ems": null
    },
    {
      "latitude": 38.533195,
      "longitude": -7.889038,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1658869616,
      "ems": null
    }
  ]
};
