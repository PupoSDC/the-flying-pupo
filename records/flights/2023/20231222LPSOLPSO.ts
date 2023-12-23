import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20231222LPSOLPSO",
    callsign: "RVP101",
    name: "NAV 21",
    description: "No comms established in PLCB. Very boring flight overall",
  },
  pilotLog: {
    departure: new Date(2023, 11, 22, 8, 5).getTime(),
    arrival: new Date(2023, 11, 22, 10, 45).getTime(),
    singleEnginePistonTime: 160,
    multiEnginePistonTime: 0,
    picTime: 160,
    dualTime: 0,
    ifrTime: 0,
    nightTime: 0,
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
      modes: "48B048",
      registration: "CS-ECC",
      serialNo: "N/A",
    },
  },
  airport: {
    destination: {
      name: "Ponte de Sor",
      code: "LPSO",
      position: {
        latitude: 39.211723,
        longitude: -8.057656
      },
    },
    origin: {
      name: "Ponte de Sor",
      code: "LPSO",
      position: {
        latitude: 39.211723,
        longitude: -8.057656
      },
    },
  },
  track: [
    {
      "latitude": 39.213371,
      "longitude": -8.056702,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 27,
      "squawk": "0",
      "timestamp": 1703233094,
      "ems": null
    },
    {
      "latitude": 39.215607,
      "longitude": -8.055307,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 25,
      "squawk": "0",
      "timestamp": 1703233103,
      "ems": null
    },
    {
      "latitude": 39.217896,
      "longitude": -8.054053,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 21,
      "squawk": "0",
      "timestamp": 1703233111,
      "ems": null
    },
    {
      "latitude": 39.218678,
      "longitude": -8.05365,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 20,
      "squawk": "0",
      "timestamp": 1703233115,
      "ems": null
    },
    {
      "latitude": 39.219498,
      "longitude": -8.053277,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 21,
      "squawk": "0",
      "timestamp": 1703233117,
      "ems": null
    },
    {
      "latitude": 39.221695,
      "longitude": -8.052083,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 21,
      "squawk": "0",
      "timestamp": 1703233126,
      "ems": null
    },
    {
      "latitude": 39.222683,
      "longitude": -8.051636,
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
      "heading": 19,
      "squawk": "0",
      "timestamp": 1703233129,
      "ems": null
    },
    {
      "latitude": 39.223114,
      "longitude": -8.051426,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 18,
      "squawk": "0",
      "timestamp": 1703233133,
      "ems": null
    },
    {
      "latitude": 39.226406,
      "longitude": -8.049927,
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
        "fpm": 1408,
        "ms": 7.2
      },
      "heading": 20,
      "squawk": "3261",
      "timestamp": 1703233142,
      "ems": null
    },
    {
      "latitude": 39.227921,
      "longitude": -8.049336,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 14,
      "squawk": "3261",
      "timestamp": 1703233148,
      "ems": null
    },
    {
      "latitude": 39.228642,
      "longitude": -8.049072,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 15,
      "squawk": "3261",
      "timestamp": 1703233151,
      "ems": null
    },
    {
      "latitude": 39.229385,
      "longitude": -8.048859,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 14,
      "squawk": "3261",
      "timestamp": 1703233154,
      "ems": null
    },
    {
      "latitude": 39.23172,
      "longitude": -8.047724,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 28,
      "squawk": "3261",
      "timestamp": 1703233163,
      "ems": null
    },
    {
      "latitude": 39.232456,
      "longitude": -8.047119,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 37,
      "squawk": "3261",
      "timestamp": 1703233166,
      "ems": null
    },
    {
      "latitude": 39.233017,
      "longitude": -8.046448,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 47,
      "squawk": "3261",
      "timestamp": 1703233169,
      "ems": null
    },
    {
      "latitude": 39.233505,
      "longitude": -8.045575,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 56,
      "squawk": "3261",
      "timestamp": 1703233172,
      "ems": null
    },
    {
      "latitude": 39.233826,
      "longitude": -8.044799,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703233174,
      "ems": null
    },
    {
      "latitude": 39.234146,
      "longitude": -8.043545,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 74,
      "squawk": "3261",
      "timestamp": 1703233178,
      "ems": null
    },
    {
      "latitude": 39.234272,
      "longitude": -8.042542,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 82,
      "squawk": "3261",
      "timestamp": 1703233181,
      "ems": null
    },
    {
      "latitude": 39.234413,
      "longitude": -8.041443,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 81,
      "squawk": "3261",
      "timestamp": 1703233184,
      "ems": null
    },
    {
      "latitude": 39.23455,
      "longitude": -8.040283,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 79,
      "squawk": "3261",
      "timestamp": 1703233187,
      "ems": null
    },
    {
      "latitude": 39.23465,
      "longitude": -8.039544,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 80,
      "squawk": "3261",
      "timestamp": 1703233189,
      "ems": null
    },
    {
      "latitude": 39.234879,
      "longitude": -8.038052,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 78,
      "squawk": "3261",
      "timestamp": 1703233193,
      "ems": null
    },
    {
      "latitude": 39.235062,
      "longitude": -8.037096,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 76,
      "squawk": "3261",
      "timestamp": 1703233196,
      "ems": null
    },
    {
      "latitude": 39.235298,
      "longitude": -8.03595,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 72,
      "squawk": "3261",
      "timestamp": 1703233199,
      "ems": null
    },
    {
      "latitude": 39.235611,
      "longitude": -8.034887,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 71,
      "squawk": "3261",
      "timestamp": 1703233202,
      "ems": null
    },
    {
      "latitude": 39.235901,
      "longitude": -8.033813,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 71,
      "squawk": "3261",
      "timestamp": 1703233205,
      "ems": null
    },
    {
      "latitude": 39.236343,
      "longitude": -8.030169,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 89,
      "squawk": "3261",
      "timestamp": 1703233214,
      "ems": null
    },
    {
      "latitude": 39.236343,
      "longitude": -8.028796,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 87,
      "squawk": "3261",
      "timestamp": 1703233217,
      "ems": null
    },
    {
      "latitude": 39.236435,
      "longitude": -8.027662,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 85,
      "squawk": "3261",
      "timestamp": 1703233220,
      "ems": null
    },
    {
      "latitude": 39.236881,
      "longitude": -8.023926,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 80,
      "squawk": "3261",
      "timestamp": 1703233229,
      "ems": null
    },
    {
      "latitude": 39.237064,
      "longitude": -8.022522,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 80,
      "squawk": "3261",
      "timestamp": 1703233232,
      "ems": null
    },
    {
      "latitude": 39.237213,
      "longitude": -8.021214,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 80,
      "squawk": "3261",
      "timestamp": 1703233235,
      "ems": null
    },
    {
      "latitude": 39.237396,
      "longitude": -8.019721,
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
      "heading": 82,
      "squawk": "3261",
      "timestamp": 1703233238,
      "ems": null
    },
    {
      "latitude": 39.237625,
      "longitude": -8.017212,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 82,
      "squawk": "3261",
      "timestamp": 1703233244,
      "ems": null
    },
    {
      "latitude": 39.237762,
      "longitude": -8.015661,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "3261",
      "timestamp": 1703233247,
      "ems": null
    },
    {
      "latitude": 39.238091,
      "longitude": -8.012756,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 82,
      "squawk": "3261",
      "timestamp": 1703233253,
      "ems": null
    },
    {
      "latitude": 39.238277,
      "longitude": -8.01001,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 85,
      "squawk": "3261",
      "timestamp": 1703233259,
      "ems": null
    },
    {
      "latitude": 39.238415,
      "longitude": -8.008301,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 85,
      "squawk": "3261",
      "timestamp": 1703233263,
      "ems": null
    },
    {
      "latitude": 39.238678,
      "longitude": -8.003719,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 84,
      "squawk": "3261",
      "timestamp": 1703233271,
      "ems": null
    },
    {
      "latitude": 39.238998,
      "longitude": -7.999361,
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
      "heading": 84,
      "squawk": "3261",
      "timestamp": 1703233280,
      "ems": null
    },
    {
      "latitude": 39.23941,
      "longitude": -7.994226,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 84,
      "squawk": "3261",
      "timestamp": 1703233289,
      "ems": null
    },
    {
      "latitude": 39.239765,
      "longitude": -7.989685,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 84,
      "squawk": "3261",
      "timestamp": 1703233298,
      "ems": null
    },
    {
      "latitude": 39.240143,
      "longitude": -7.984971,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 84,
      "squawk": "3261",
      "timestamp": 1703233307,
      "ems": null
    },
    {
      "latitude": 39.240601,
      "longitude": -7.980194,
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
      "heading": 82,
      "squawk": "3261",
      "timestamp": 1703233316,
      "ems": null
    },
    {
      "latitude": 39.240967,
      "longitude": -7.975477,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 83,
      "squawk": "3261",
      "timestamp": 1703233326,
      "ems": null
    },
    {
      "latitude": 39.241348,
      "longitude": -7.971069,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "3261",
      "timestamp": 1703233335,
      "ems": null
    },
    {
      "latitude": 39.241653,
      "longitude": -7.966461,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 86,
      "squawk": "3261",
      "timestamp": 1703233344,
      "ems": null
    },
    {
      "latitude": 39.241909,
      "longitude": -7.962036,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 85,
      "squawk": "3261",
      "timestamp": 1703233353,
      "ems": null
    },
    {
      "latitude": 39.242233,
      "longitude": -7.957642,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 83,
      "squawk": "3261",
      "timestamp": 1703233362,
      "ems": null
    },
    {
      "latitude": 39.242615,
      "longitude": -7.953146,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 83,
      "squawk": "3261",
      "timestamp": 1703233371,
      "ems": null
    },
    {
      "latitude": 39.243073,
      "longitude": -7.948669,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 81,
      "squawk": "3261",
      "timestamp": 1703233380,
      "ems": null
    },
    {
      "latitude": 39.243393,
      "longitude": -7.946101,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 80,
      "squawk": "3261",
      "timestamp": 1703233386,
      "ems": null
    },
    {
      "latitude": 39.244003,
      "longitude": -7.94165,
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
      "heading": 79,
      "squawk": "3261",
      "timestamp": 1703233394,
      "ems": null
    },
    {
      "latitude": 39.244675,
      "longitude": -7.937085,
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
      "heading": 78,
      "squawk": "3261",
      "timestamp": 1703233403,
      "ems": null
    },
    {
      "latitude": 39.244949,
      "longitude": -7.935711,
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
      "heading": 77,
      "squawk": "3261",
      "timestamp": 1703233406,
      "ems": null
    },
    {
      "latitude": 39.245213,
      "longitude": -7.934082,
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
      "heading": 76,
      "squawk": "3261",
      "timestamp": 1703233410,
      "ems": null
    },
    {
      "latitude": 39.245499,
      "longitude": -7.932547,
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
      "heading": 76,
      "squawk": "3261",
      "timestamp": 1703233413,
      "ems": null
    },
    {
      "latitude": 39.246094,
      "longitude": -7.929562,
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
      "heading": 75,
      "squawk": "3261",
      "timestamp": 1703233419,
      "ems": null
    },
    {
      "latitude": 39.246422,
      "longitude": -7.928101,
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
      "heading": 71,
      "squawk": "3261",
      "timestamp": 1703233421,
      "ems": null
    },
    {
      "latitude": 39.246887,
      "longitude": -7.926758,
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
      "heading": 61,
      "squawk": "3261",
      "timestamp": 1703233425,
      "ems": null
    },
    {
      "latitude": 39.247604,
      "longitude": -7.925561,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 48,
      "squawk": "3261",
      "timestamp": 1703233428,
      "ems": null
    },
    {
      "latitude": 39.248474,
      "longitude": -7.924665,
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
      "heading": 33,
      "squawk": "3261",
      "timestamp": 1703233431,
      "ems": null
    },
    {
      "latitude": 39.249527,
      "longitude": -7.924068,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 21,
      "squawk": "3261",
      "timestamp": 1703233434,
      "ems": null
    },
    {
      "latitude": 39.250751,
      "longitude": -7.923584,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 16,
      "squawk": "3261",
      "timestamp": 1703233437,
      "ems": null
    },
    {
      "latitude": 39.251591,
      "longitude": -7.923279,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 16,
      "squawk": "3261",
      "timestamp": 1703233439,
      "ems": null
    },
    {
      "latitude": 39.2528,
      "longitude": -7.922729,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 19,
      "squawk": "3261",
      "timestamp": 1703233442,
      "ems": null
    },
    {
      "latitude": 39.254059,
      "longitude": -7.922158,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 21,
      "squawk": "3261",
      "timestamp": 1703233446,
      "ems": null
    },
    {
      "latitude": 39.25502,
      "longitude": -7.92162,
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
      "heading": 24,
      "squawk": "3261",
      "timestamp": 1703233449,
      "ems": null
    },
    {
      "latitude": 39.256073,
      "longitude": -7.920963,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "3261",
      "timestamp": 1703233452,
      "ems": null
    },
    {
      "latitude": 39.256989,
      "longitude": -7.920426,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 24,
      "squawk": "3261",
      "timestamp": 1703233455,
      "ems": null
    },
    {
      "latitude": 39.257996,
      "longitude": -7.919769,
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
      "heading": 24,
      "squawk": "3261",
      "timestamp": 1703233458,
      "ems": null
    },
    {
      "latitude": 39.259224,
      "longitude": -7.919067,
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
      "heading": 24,
      "squawk": "3261",
      "timestamp": 1703233461,
      "ems": null
    },
    {
      "latitude": 39.261337,
      "longitude": -7.917859,
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
      "heading": 25,
      "squawk": "3261",
      "timestamp": 1703233467,
      "ems": null
    },
    {
      "latitude": 39.26239,
      "longitude": -7.917202,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "3261",
      "timestamp": 1703233470,
      "ems": null
    },
    {
      "latitude": 39.263462,
      "longitude": -7.916504,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 26,
      "squawk": "3261",
      "timestamp": 1703233473,
      "ems": null
    },
    {
      "latitude": 39.264393,
      "longitude": -7.915894,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 27,
      "squawk": "3261",
      "timestamp": 1703233476,
      "ems": null
    },
    {
      "latitude": 39.265411,
      "longitude": -7.915172,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 29,
      "squawk": "3261",
      "timestamp": 1703233479,
      "ems": null
    },
    {
      "latitude": 39.268204,
      "longitude": -7.913201,
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
      "heading": 29,
      "squawk": "3261",
      "timestamp": 1703233488,
      "ems": null
    },
    {
      "latitude": 39.269279,
      "longitude": -7.912415,
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
      "heading": 29,
      "squawk": "3261",
      "timestamp": 1703233491,
      "ems": null
    },
    {
      "latitude": 39.270164,
      "longitude": -7.911804,
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
      "heading": 30,
      "squawk": "3261",
      "timestamp": 1703233494,
      "ems": null
    },
    {
      "latitude": 39.271088,
      "longitude": -7.911052,
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
      "heading": 31,
      "squawk": "3261",
      "timestamp": 1703233497,
      "ems": null
    },
    {
      "latitude": 39.272003,
      "longitude": -7.910275,
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
      "heading": 32,
      "squawk": "3261",
      "timestamp": 1703233500,
      "ems": null
    },
    {
      "latitude": 39.272919,
      "longitude": -7.909559,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 33,
      "squawk": "3261",
      "timestamp": 1703233503,
      "ems": null
    },
    {
      "latitude": 39.275749,
      "longitude": -7.907288,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 26,
      "squawk": "3261",
      "timestamp": 1703233512,
      "ems": null
    },
    {
      "latitude": 39.277817,
      "longitude": -7.906096,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "3261",
      "timestamp": 1703233518,
      "ems": null
    },
    {
      "latitude": 39.278961,
      "longitude": -7.905396,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 25,
      "squawk": "3261",
      "timestamp": 1703233521,
      "ems": null
    },
    {
      "latitude": 39.279846,
      "longitude": -7.904846,
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
      "heading": 23,
      "squawk": "3261",
      "timestamp": 1703233525,
      "ems": null
    },
    {
      "latitude": 39.281059,
      "longitude": -7.904236,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 18,
      "squawk": "3261",
      "timestamp": 1703233528,
      "ems": null
    },
    {
      "latitude": 39.281754,
      "longitude": -7.904006,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 17,
      "squawk": "3261",
      "timestamp": 1703233530,
      "ems": null
    },
    {
      "latitude": 39.283154,
      "longitude": -7.903381,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 18,
      "squawk": "3261",
      "timestamp": 1703233533,
      "ems": null
    },
    {
      "latitude": 39.284317,
      "longitude": -7.902832,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 20,
      "squawk": "3261",
      "timestamp": 1703233537,
      "ems": null
    },
    {
      "latitude": 39.285324,
      "longitude": -7.902394,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 20,
      "squawk": "3261",
      "timestamp": 1703233539,
      "ems": null
    },
    {
      "latitude": 39.286179,
      "longitude": -7.901978,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 19,
      "squawk": "3261",
      "timestamp": 1703233542,
      "ems": null
    },
    {
      "latitude": 39.287247,
      "longitude": -7.901498,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 20,
      "squawk": "3261",
      "timestamp": 1703233545,
      "ems": null
    },
    {
      "latitude": 39.289436,
      "longitude": -7.900513,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 20,
      "squawk": "3261",
      "timestamp": 1703233551,
      "ems": null
    },
    {
      "latitude": 39.292557,
      "longitude": -7.898987,
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
      "heading": 20,
      "squawk": "3261",
      "timestamp": 1703233560,
      "ems": null
    },
    {
      "latitude": 39.295761,
      "longitude": -7.897319,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 23,
      "squawk": "3261",
      "timestamp": 1703233570,
      "ems": null
    },
    {
      "latitude": 39.298508,
      "longitude": -7.895767,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "3261",
      "timestamp": 1703233577,
      "ems": null
    },
    {
      "latitude": 39.299957,
      "longitude": -7.894897,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 25,
      "squawk": "3261",
      "timestamp": 1703233582,
      "ems": null
    },
    {
      "latitude": 39.301025,
      "longitude": -7.894274,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 25,
      "squawk": "3261",
      "timestamp": 1703233585,
      "ems": null
    },
    {
      "latitude": 39.302052,
      "longitude": -7.893616,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 25,
      "squawk": "3261",
      "timestamp": 1703233588,
      "ems": null
    },
    {
      "latitude": 39.30508,
      "longitude": -7.891785,
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
      "heading": 24,
      "squawk": "3261",
      "timestamp": 1703233597,
      "ems": null
    },
    {
      "latitude": 39.308075,
      "longitude": -7.890035,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 25,
      "squawk": "3261",
      "timestamp": 1703233606,
      "ems": null
    },
    {
      "latitude": 39.310246,
      "longitude": -7.888306,
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
      "heading": 34,
      "squawk": "3261",
      "timestamp": 1703233613,
      "ems": null
    },
    {
      "latitude": 39.311188,
      "longitude": -7.887348,
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
      "heading": 39,
      "squawk": "3261",
      "timestamp": 1703233616,
      "ems": null
    },
    {
      "latitude": 39.31192,
      "longitude": -7.886475,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 44,
      "squawk": "3261",
      "timestamp": 1703233619,
      "ems": null
    },
    {
      "latitude": 39.312668,
      "longitude": -7.885437,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 48,
      "squawk": "3261",
      "timestamp": 1703233622,
      "ems": null
    },
    {
      "latitude": 39.313366,
      "longitude": -7.884399,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 51,
      "squawk": "3261",
      "timestamp": 1703233625,
      "ems": null
    },
    {
      "latitude": 39.314026,
      "longitude": -7.883228,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 53,
      "squawk": "3261",
      "timestamp": 1703233628,
      "ems": null
    },
    {
      "latitude": 39.314621,
      "longitude": -7.88208,
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
      "heading": 55,
      "squawk": "3261",
      "timestamp": 1703233631,
      "ems": null
    },
    {
      "latitude": 39.315228,
      "longitude": -7.88092,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 57,
      "squawk": "3261",
      "timestamp": 1703233634,
      "ems": null
    },
    {
      "latitude": 39.315811,
      "longitude": -7.879705,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 60,
      "squawk": "3261",
      "timestamp": 1703233637,
      "ems": null
    },
    {
      "latitude": 39.316315,
      "longitude": -7.878511,
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
      "heading": 60,
      "squawk": "3261",
      "timestamp": 1703233640,
      "ems": null
    },
    {
      "latitude": 39.31691,
      "longitude": -7.877197,
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
      "heading": 60,
      "squawk": "3261",
      "timestamp": 1703233643,
      "ems": null
    },
    {
      "latitude": 39.317505,
      "longitude": -7.875884,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 59,
      "squawk": "3261",
      "timestamp": 1703233646,
      "ems": null
    },
    {
      "latitude": 39.317974,
      "longitude": -7.874756,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 59,
      "squawk": "3261",
      "timestamp": 1703233649,
      "ems": null
    },
    {
      "latitude": 39.318531,
      "longitude": -7.873596,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 57,
      "squawk": "3261",
      "timestamp": 1703233652,
      "ems": null
    },
    {
      "latitude": 39.319138,
      "longitude": -7.872375,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 60,
      "squawk": "3261",
      "timestamp": 1703233656,
      "ems": null
    },
    {
      "latitude": 39.320675,
      "longitude": -7.868958,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 61,
      "squawk": "3261",
      "timestamp": 1703233664,
      "ems": null
    },
    {
      "latitude": 39.32114,
      "longitude": -7.867798,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 65,
      "squawk": "3261",
      "timestamp": 1703233668,
      "ems": null
    },
    {
      "latitude": 39.321533,
      "longitude": -7.866569,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 68,
      "squawk": "3261",
      "timestamp": 1703233671,
      "ems": null
    },
    {
      "latitude": 39.321884,
      "longitude": -7.865417,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 68,
      "squawk": "3261",
      "timestamp": 1703233674,
      "ems": null
    },
    {
      "latitude": 39.322266,
      "longitude": -7.864241,
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
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703233677,
      "ems": null
    },
    {
      "latitude": 39.323227,
      "longitude": -7.861852,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 63,
      "squawk": "3261",
      "timestamp": 1703233683,
      "ems": null
    },
    {
      "latitude": 39.3246,
      "longitude": -7.858389,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 63,
      "squawk": "3261",
      "timestamp": 1703233692,
      "ems": null
    },
    {
      "latitude": 39.325882,
      "longitude": -7.855105,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703233700,
      "ems": null
    },
    {
      "latitude": 39.326294,
      "longitude": -7.854031,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 63,
      "squawk": "3261",
      "timestamp": 1703233703,
      "ems": null
    },
    {
      "latitude": 39.327484,
      "longitude": -7.850806,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 65,
      "squawk": "3261",
      "timestamp": 1703233713,
      "ems": null
    },
    {
      "latitude": 39.32872,
      "longitude": -7.847522,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 63,
      "squawk": "3261",
      "timestamp": 1703233722,
      "ems": null
    },
    {
      "latitude": 39.329891,
      "longitude": -7.84436,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 65,
      "squawk": "3261",
      "timestamp": 1703233731,
      "ems": null
    },
    {
      "latitude": 39.331192,
      "longitude": -7.840835,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703233740,
      "ems": null
    },
    {
      "latitude": 39.332565,
      "longitude": -7.837312,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 62,
      "squawk": "3261",
      "timestamp": 1703233749,
      "ems": null
    },
    {
      "latitude": 39.334076,
      "longitude": -7.833491,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 63,
      "squawk": "3261",
      "timestamp": 1703233758,
      "ems": null
    },
    {
      "latitude": 39.335037,
      "longitude": -7.830983,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703233764,
      "ems": null
    },
    {
      "latitude": 39.336502,
      "longitude": -7.827087,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703233773,
      "ems": null
    },
    {
      "latitude": 39.337967,
      "longitude": -7.823281,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 63,
      "squawk": "3261",
      "timestamp": 1703233782,
      "ems": null
    },
    {
      "latitude": 39.339523,
      "longitude": -7.81934,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 63,
      "squawk": "3261",
      "timestamp": 1703233792,
      "ems": null
    },
    {
      "latitude": 39.340942,
      "longitude": -7.815518,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703233801,
      "ems": null
    },
    {
      "latitude": 39.342415,
      "longitude": -7.81189,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 62,
      "squawk": "3261",
      "timestamp": 1703233809,
      "ems": null
    },
    {
      "latitude": 39.344009,
      "longitude": -7.807995,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 62,
      "squawk": "3261",
      "timestamp": 1703233819,
      "ems": null
    },
    {
      "latitude": 39.345657,
      "longitude": -7.803995,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 61,
      "squawk": "3261",
      "timestamp": 1703233828,
      "ems": null
    },
    {
      "latitude": 39.34726,
      "longitude": -7.800054,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 62,
      "squawk": "3261",
      "timestamp": 1703233837,
      "ems": null
    },
    {
      "latitude": 39.348816,
      "longitude": -7.796054,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 63,
      "squawk": "3261",
      "timestamp": 1703233846,
      "ems": null
    },
    {
      "latitude": 39.350372,
      "longitude": -7.791931,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703233855,
      "ems": null
    },
    {
      "latitude": 39.351974,
      "longitude": -7.787575,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703233864,
      "ems": null
    },
    {
      "latitude": 39.353401,
      "longitude": -7.783569,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703233873,
      "ems": null
    },
    {
      "latitude": 39.354935,
      "longitude": -7.779602,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 63,
      "squawk": "3261",
      "timestamp": 1703233882,
      "ems": null
    },
    {
      "latitude": 39.356426,
      "longitude": -7.775574,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703233891,
      "ems": null
    },
    {
      "latitude": 39.357422,
      "longitude": -7.772887,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 65,
      "squawk": "3261",
      "timestamp": 1703233897,
      "ems": null
    },
    {
      "latitude": 39.358795,
      "longitude": -7.768887,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 65,
      "squawk": "3261",
      "timestamp": 1703233906,
      "ems": null
    },
    {
      "latitude": 39.360058,
      "longitude": -7.765198,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 67,
      "squawk": "3261",
      "timestamp": 1703233916,
      "ems": null
    },
    {
      "latitude": 39.361267,
      "longitude": -7.761414,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 65,
      "squawk": "3261",
      "timestamp": 1703233923,
      "ems": null
    },
    {
      "latitude": 39.36285,
      "longitude": -7.757629,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 60,
      "squawk": "3261",
      "timestamp": 1703233932,
      "ems": null
    },
    {
      "latitude": 39.363457,
      "longitude": -7.756287,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 59,
      "squawk": "3261",
      "timestamp": 1703233935,
      "ems": null
    },
    {
      "latitude": 39.364014,
      "longitude": -7.755066,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 58,
      "squawk": "3261",
      "timestamp": 1703233937,
      "ems": null
    },
    {
      "latitude": 39.364666,
      "longitude": -7.753723,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 58,
      "squawk": "3261",
      "timestamp": 1703233941,
      "ems": null
    },
    {
      "latitude": 39.36525,
      "longitude": -7.752526,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 57,
      "squawk": "3261",
      "timestamp": 1703233944,
      "ems": null
    },
    {
      "latitude": 39.365845,
      "longitude": -7.751332,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 57,
      "squawk": "3261",
      "timestamp": 1703233946,
      "ems": null
    },
    {
      "latitude": 39.366486,
      "longitude": -7.750078,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 57,
      "squawk": "3261",
      "timestamp": 1703233949,
      "ems": null
    },
    {
      "latitude": 39.367085,
      "longitude": -7.74884,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 57,
      "squawk": "3261",
      "timestamp": 1703233952,
      "ems": null
    },
    {
      "latitude": 39.367767,
      "longitude": -7.747511,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 55,
      "squawk": "3261",
      "timestamp": 1703233956,
      "ems": null
    },
    {
      "latitude": 39.368362,
      "longitude": -7.746436,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 54,
      "squawk": "3261",
      "timestamp": 1703233958,
      "ems": null
    },
    {
      "latitude": 39.369232,
      "longitude": -7.745122,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 47,
      "squawk": "3261",
      "timestamp": 1703233961,
      "ems": null
    },
    {
      "latitude": 39.370064,
      "longitude": -7.744019,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 43,
      "squawk": "3261",
      "timestamp": 1703233965,
      "ems": null
    },
    {
      "latitude": 39.370762,
      "longitude": -7.743225,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 41,
      "squawk": "3261",
      "timestamp": 1703233967,
      "ems": null
    },
    {
      "latitude": 39.371796,
      "longitude": -7.741898,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 44,
      "squawk": "3261",
      "timestamp": 1703233971,
      "ems": null
    },
    {
      "latitude": 39.372532,
      "longitude": -7.740845,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 49,
      "squawk": "3261",
      "timestamp": 1703233974,
      "ems": null
    },
    {
      "latitude": 39.374393,
      "longitude": -7.737,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 60,
      "squawk": "3261",
      "timestamp": 1703233983,
      "ems": null
    },
    {
      "latitude": 39.375,
      "longitude": -7.735718,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 60,
      "squawk": "3261",
      "timestamp": 1703233986,
      "ems": null
    },
    {
      "latitude": 39.375465,
      "longitude": -7.734558,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 60,
      "squawk": "3261",
      "timestamp": 1703233988,
      "ems": null
    },
    {
      "latitude": 39.37619,
      "longitude": -7.733061,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 59,
      "squawk": "3261",
      "timestamp": 1703233992,
      "ems": null
    },
    {
      "latitude": 39.37677,
      "longitude": -7.731812,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 58,
      "squawk": "3261",
      "timestamp": 1703233995,
      "ems": null
    },
    {
      "latitude": 39.37738,
      "longitude": -7.730494,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 57,
      "squawk": "3261",
      "timestamp": 1703233998,
      "ems": null
    },
    {
      "latitude": 39.378071,
      "longitude": -7.729126,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 57,
      "squawk": "3261",
      "timestamp": 1703234001,
      "ems": null
    },
    {
      "latitude": 39.378632,
      "longitude": -7.727966,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 58,
      "squawk": "3261",
      "timestamp": 1703234004,
      "ems": null
    },
    {
      "latitude": 39.380539,
      "longitude": -7.724105,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 56,
      "squawk": "3261",
      "timestamp": 1703234013,
      "ems": null
    },
    {
      "latitude": 39.382507,
      "longitude": -7.720344,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 55,
      "squawk": "3261",
      "timestamp": 1703234022,
      "ems": null
    },
    {
      "latitude": 39.384495,
      "longitude": -7.716553,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 55,
      "squawk": "3261",
      "timestamp": 1703234031,
      "ems": null
    },
    {
      "latitude": 39.386265,
      "longitude": -7.713196,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 56,
      "squawk": "3261",
      "timestamp": 1703234039,
      "ems": null
    },
    {
      "latitude": 39.388176,
      "longitude": -7.709595,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 54,
      "squawk": "3261",
      "timestamp": 1703234048,
      "ems": null
    },
    {
      "latitude": 39.389709,
      "longitude": -7.707031,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 50,
      "squawk": "3261",
      "timestamp": 1703234054,
      "ems": null
    },
    {
      "latitude": 39.390427,
      "longitude": -7.705954,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 50,
      "squawk": "3261",
      "timestamp": 1703234057,
      "ems": null
    },
    {
      "latitude": 39.392303,
      "longitude": -7.702252,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 61,
      "squawk": "3261",
      "timestamp": 1703234067,
      "ems": null
    },
    {
      "latitude": 39.392971,
      "longitude": -7.700745,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 61,
      "squawk": "3261",
      "timestamp": 1703234070,
      "ems": null
    },
    {
      "latitude": 39.393482,
      "longitude": -7.699402,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 62,
      "squawk": "3261",
      "timestamp": 1703234073,
      "ems": null
    },
    {
      "latitude": 39.393997,
      "longitude": -7.698132,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703234076,
      "ems": null
    },
    {
      "latitude": 39.394455,
      "longitude": -7.696818,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 66,
      "squawk": "3261",
      "timestamp": 1703234078,
      "ems": null
    },
    {
      "latitude": 39.394878,
      "longitude": -7.695313,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 69,
      "squawk": "3261",
      "timestamp": 1703234082,
      "ems": null
    },
    {
      "latitude": 39.395142,
      "longitude": -7.69443,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 70,
      "squawk": "3261",
      "timestamp": 1703234084,
      "ems": null
    },
    {
      "latitude": 39.395718,
      "longitude": -7.692566,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 69,
      "squawk": "3261",
      "timestamp": 1703234088,
      "ems": null
    },
    {
      "latitude": 39.396366,
      "longitude": -7.690308,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 68,
      "squawk": "3261",
      "timestamp": 1703234093,
      "ems": null
    },
    {
      "latitude": 39.39679,
      "longitude": -7.688997,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 68,
      "squawk": "3261",
      "timestamp": 1703234096,
      "ems": null
    },
    {
      "latitude": 39.396927,
      "longitude": -7.688459,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 68,
      "squawk": "3261",
      "timestamp": 1703234097,
      "ems": null
    },
    {
      "latitude": 39.397346,
      "longitude": -7.687134,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 68,
      "squawk": "3261",
      "timestamp": 1703234101,
      "ems": null
    },
    {
      "latitude": 39.398026,
      "longitude": -7.684817,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 70,
      "squawk": "3261",
      "timestamp": 1703234104,
      "ems": null
    },
    {
      "latitude": 39.398277,
      "longitude": -7.68396,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 71,
      "squawk": "3261",
      "timestamp": 1703234106,
      "ems": null
    },
    {
      "latitude": 39.399216,
      "longitude": -7.679801,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 74,
      "squawk": "3261",
      "timestamp": 1703234115,
      "ems": null
    },
    {
      "latitude": 39.39949,
      "longitude": -7.678548,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 74,
      "squawk": "3261",
      "timestamp": 1703234118,
      "ems": null
    },
    {
      "latitude": 39.400497,
      "longitude": -7.674189,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 73,
      "squawk": "3261",
      "timestamp": 1703234127,
      "ems": null
    },
    {
      "latitude": 39.400818,
      "longitude": -7.672816,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 73,
      "squawk": "3261",
      "timestamp": 1703234130,
      "ems": null
    },
    {
      "latitude": 39.401871,
      "longitude": -7.668218,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 72,
      "squawk": "3261",
      "timestamp": 1703234139,
      "ems": null
    },
    {
      "latitude": 39.402885,
      "longitude": -7.664001,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 72,
      "squawk": "3261",
      "timestamp": 1703234148,
      "ems": null
    },
    {
      "latitude": 39.404003,
      "longitude": -7.659607,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 71,
      "squawk": "3261",
      "timestamp": 1703234157,
      "ems": null
    },
    {
      "latitude": 39.404663,
      "longitude": -7.656933,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 70,
      "squawk": "3261",
      "timestamp": 1703234163,
      "ems": null
    },
    {
      "latitude": 39.405807,
      "longitude": -7.652694,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 71,
      "squawk": "3261",
      "timestamp": 1703234173,
      "ems": null
    },
    {
      "latitude": 39.407089,
      "longitude": -7.647977,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 69,
      "squawk": "3261",
      "timestamp": 1703234182,
      "ems": null
    },
    {
      "latitude": 39.408279,
      "longitude": -7.643977,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 69,
      "squawk": "3261",
      "timestamp": 1703234191,
      "ems": null
    },
    {
      "latitude": 39.409515,
      "longitude": -7.639558,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 70,
      "squawk": "3261",
      "timestamp": 1703234200,
      "ems": null
    },
    {
      "latitude": 39.410519,
      "longitude": -7.636047,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 68,
      "squawk": "3261",
      "timestamp": 1703234207,
      "ems": null
    },
    {
      "latitude": 39.410892,
      "longitude": -7.63501,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 62,
      "squawk": "3261",
      "timestamp": 1703234210,
      "ems": null
    },
    {
      "latitude": 39.411777,
      "longitude": -7.634155,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 19,
      "squawk": "3261",
      "timestamp": 1703234213,
      "ems": null
    },
    {
      "latitude": 39.412895,
      "longitude": -7.634216,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 352,
      "squawk": "3261",
      "timestamp": 1703234216,
      "ems": null
    },
    {
      "latitude": 39.413826,
      "longitude": -7.634338,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 354,
      "squawk": "3261",
      "timestamp": 1703234219,
      "ems": null
    },
    {
      "latitude": 39.415146,
      "longitude": -7.634483,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 355,
      "squawk": "3261",
      "timestamp": 1703234222,
      "ems": null
    },
    {
      "latitude": 39.41629,
      "longitude": -7.634583,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 356,
      "squawk": "3261",
      "timestamp": 1703234225,
      "ems": null
    },
    {
      "latitude": 39.417252,
      "longitude": -7.634662,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 356,
      "squawk": "3261",
      "timestamp": 1703234228,
      "ems": null
    },
    {
      "latitude": 39.418533,
      "longitude": -7.634781,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 356,
      "squawk": "3261",
      "timestamp": 1703234231,
      "ems": null
    },
    {
      "latitude": 39.419456,
      "longitude": -7.634827,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 356,
      "squawk": "3261",
      "timestamp": 1703234233,
      "ems": null
    },
    {
      "latitude": 39.421051,
      "longitude": -7.634961,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 356,
      "squawk": "3261",
      "timestamp": 1703234237,
      "ems": null
    },
    {
      "latitude": 39.42197,
      "longitude": -7.63501,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 357,
      "squawk": "3261",
      "timestamp": 1703234240,
      "ems": null
    },
    {
      "latitude": 39.42588,
      "longitude": -7.635498,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 350,
      "squawk": "3261",
      "timestamp": 1703234250,
      "ems": null
    },
    {
      "latitude": 39.427048,
      "longitude": -7.635797,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 350,
      "squawk": "3261",
      "timestamp": 1703234252,
      "ems": null
    },
    {
      "latitude": 39.428146,
      "longitude": -7.636035,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 350,
      "squawk": "3261",
      "timestamp": 1703234255,
      "ems": null
    },
    {
      "latitude": 39.429199,
      "longitude": -7.636215,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 350,
      "squawk": "3261",
      "timestamp": 1703234258,
      "ems": null
    },
    {
      "latitude": 39.430584,
      "longitude": -7.636536,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 350,
      "squawk": "3261",
      "timestamp": 1703234262,
      "ems": null
    },
    {
      "latitude": 39.431793,
      "longitude": -7.636841,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 348,
      "squawk": "3261",
      "timestamp": 1703234264,
      "ems": null
    },
    {
      "latitude": 39.433002,
      "longitude": -7.637146,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 349,
      "squawk": "3261",
      "timestamp": 1703234267,
      "ems": null
    },
    {
      "latitude": 39.433983,
      "longitude": -7.637329,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 350,
      "squawk": "3261",
      "timestamp": 1703234270,
      "ems": null
    },
    {
      "latitude": 39.435379,
      "longitude": -7.637648,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 351,
      "squawk": "3261",
      "timestamp": 1703234273,
      "ems": null
    },
    {
      "latitude": 39.439178,
      "longitude": -7.638245,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 353,
      "squawk": "3261",
      "timestamp": 1703234283,
      "ems": null
    },
    {
      "latitude": 39.44278,
      "longitude": -7.638855,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 352,
      "squawk": "3261",
      "timestamp": 1703234292,
      "ems": null
    },
    {
      "latitude": 39.446598,
      "longitude": -7.639587,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 350,
      "squawk": "3261",
      "timestamp": 1703234301,
      "ems": null
    },
    {
      "latitude": 39.450275,
      "longitude": -7.640259,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 352,
      "squawk": "3261",
      "timestamp": 1703234310,
      "ems": null
    },
    {
      "latitude": 39.45372,
      "longitude": -7.640869,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 351,
      "squawk": "3261",
      "timestamp": 1703234319,
      "ems": null
    },
    {
      "latitude": 39.457626,
      "longitude": -7.641469,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 354,
      "squawk": "3261",
      "timestamp": 1703234328,
      "ems": null
    },
    {
      "latitude": 39.46106,
      "longitude": -7.641827,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 355,
      "squawk": "3261",
      "timestamp": 1703234337,
      "ems": null
    },
    {
      "latitude": 39.464676,
      "longitude": -7.642126,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 356,
      "squawk": "3261",
      "timestamp": 1703234346,
      "ems": null
    },
    {
      "latitude": 39.466827,
      "longitude": -7.642305,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 355,
      "squawk": "3261",
      "timestamp": 1703234352,
      "ems": null
    },
    {
      "latitude": 39.469315,
      "longitude": -7.6427,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 350,
      "squawk": "3261",
      "timestamp": 1703234358,
      "ems": null
    },
    {
      "latitude": 39.472855,
      "longitude": -7.643188,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 355,
      "squawk": "3261",
      "timestamp": 1703234367,
      "ems": null
    },
    {
      "latitude": 39.476257,
      "longitude": -7.64326,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 357,
      "squawk": "3261",
      "timestamp": 1703234376,
      "ems": null
    },
    {
      "latitude": 39.477928,
      "longitude": -7.64325,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 2,
      "squawk": "3261",
      "timestamp": 1703234381,
      "ems": null
    },
    {
      "latitude": 39.480068,
      "longitude": -7.643372,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 357,
      "squawk": "3261",
      "timestamp": 1703234386,
      "ems": null
    },
    {
      "latitude": 39.481201,
      "longitude": -7.643439,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 357,
      "squawk": "3261",
      "timestamp": 1703234389,
      "ems": null
    },
    {
      "latitude": 39.484863,
      "longitude": -7.643494,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 358,
      "squawk": "3261",
      "timestamp": 1703234399,
      "ems": null
    },
    {
      "latitude": 39.488205,
      "longitude": -7.643439,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 1,
      "squawk": "3261",
      "timestamp": 1703234407,
      "ems": null
    },
    {
      "latitude": 39.491798,
      "longitude": -7.643311,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 2,
      "squawk": "3261",
      "timestamp": 1703234416,
      "ems": null
    },
    {
      "latitude": 39.492966,
      "longitude": -7.64326,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 2,
      "squawk": "3261",
      "timestamp": 1703234419,
      "ems": null
    },
    {
      "latitude": 39.496536,
      "longitude": -7.6432,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 1,
      "squawk": "3261",
      "timestamp": 1703234429,
      "ems": null
    },
    {
      "latitude": 39.499714,
      "longitude": -7.643066,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 1,
      "squawk": "3261",
      "timestamp": 1703234437,
      "ems": null
    },
    {
      "latitude": 39.503017,
      "longitude": -7.643127,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 355,
      "squawk": "3261",
      "timestamp": 1703234446,
      "ems": null
    },
    {
      "latitude": 39.504044,
      "longitude": -7.643311,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 354,
      "squawk": "3261",
      "timestamp": 1703234450,
      "ems": null
    },
    {
      "latitude": 39.505096,
      "longitude": -7.643439,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 353,
      "squawk": "3261",
      "timestamp": 1703234452,
      "ems": null
    },
    {
      "latitude": 39.506092,
      "longitude": -7.643616,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 352,
      "squawk": "3261",
      "timestamp": 1703234455,
      "ems": null
    },
    {
      "latitude": 39.506836,
      "longitude": -7.643738,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 351,
      "squawk": "3261",
      "timestamp": 1703234457,
      "ems": null
    },
    {
      "latitude": 39.508072,
      "longitude": -7.643977,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 351,
      "squawk": "3261",
      "timestamp": 1703234461,
      "ems": null
    },
    {
      "latitude": 39.509026,
      "longitude": -7.644165,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 351,
      "squawk": "3261",
      "timestamp": 1703234464,
      "ems": null
    },
    {
      "latitude": 39.510132,
      "longitude": -7.644335,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 352,
      "squawk": "3261",
      "timestamp": 1703234467,
      "ems": null
    },
    {
      "latitude": 39.510654,
      "longitude": -7.644409,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 352,
      "squawk": "3261",
      "timestamp": 1703234468,
      "ems": null
    },
    {
      "latitude": 39.512329,
      "longitude": -7.644714,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "3261",
      "timestamp": 1703234473,
      "ems": null
    },
    {
      "latitude": 39.515354,
      "longitude": -7.645264,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 352,
      "squawk": "3261",
      "timestamp": 1703234482,
      "ems": null
    },
    {
      "latitude": 39.518143,
      "longitude": -7.645648,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 355,
      "squawk": "3261",
      "timestamp": 1703234491,
      "ems": null
    },
    {
      "latitude": 39.51973,
      "longitude": -7.645752,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "squawk": "3261",
      "timestamp": 1703234494,
      "ems": null
    },
    {
      "latitude": 39.520756,
      "longitude": -7.645813,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 357,
      "squawk": "3261",
      "timestamp": 1703234497,
      "ems": null
    },
    {
      "latitude": 39.521896,
      "longitude": -7.645887,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 357,
      "squawk": "3261",
      "timestamp": 1703234500,
      "ems": null
    },
    {
      "latitude": 39.52285,
      "longitude": -7.645935,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 357,
      "squawk": "3261",
      "timestamp": 1703234503,
      "ems": null
    },
    {
      "latitude": 39.526062,
      "longitude": -7.646484,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 351,
      "squawk": "3261",
      "timestamp": 1703234512,
      "ems": null
    },
    {
      "latitude": 39.526993,
      "longitude": -7.646667,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 348,
      "squawk": "3261",
      "timestamp": 1703234515,
      "ems": null
    },
    {
      "latitude": 39.528202,
      "longitude": -7.647034,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 347,
      "squawk": "3261",
      "timestamp": 1703234518,
      "ems": null
    },
    {
      "latitude": 39.529266,
      "longitude": -7.64738,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 345,
      "squawk": "3261",
      "timestamp": 1703234521,
      "ems": null
    },
    {
      "latitude": 39.5303,
      "longitude": -7.647705,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "3261",
      "timestamp": 1703234524,
      "ems": null
    },
    {
      "latitude": 39.531464,
      "longitude": -7.648071,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 346,
      "squawk": "3261",
      "timestamp": 1703234527,
      "ems": null
    },
    {
      "latitude": 39.532471,
      "longitude": -7.648395,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 346,
      "squawk": "3261",
      "timestamp": 1703234530,
      "ems": null
    },
    {
      "latitude": 39.533386,
      "longitude": -7.648694,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 346,
      "squawk": "3261",
      "timestamp": 1703234533,
      "ems": null
    },
    {
      "latitude": 39.534626,
      "longitude": -7.649048,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 345,
      "squawk": "3261",
      "timestamp": 1703234536,
      "ems": null
    },
    {
      "latitude": 39.535793,
      "longitude": -7.649475,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 344,
      "squawk": "3261",
      "timestamp": 1703234540,
      "ems": null
    },
    {
      "latitude": 39.538834,
      "longitude": -7.650485,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 345,
      "squawk": "3261",
      "timestamp": 1703234549,
      "ems": null
    },
    {
      "latitude": 39.539886,
      "longitude": -7.650757,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 350,
      "squawk": "3261",
      "timestamp": 1703234552,
      "ems": null
    },
    {
      "latitude": 39.540913,
      "longitude": -7.65094,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 350,
      "squawk": "3261",
      "timestamp": 1703234555,
      "ems": null
    },
    {
      "latitude": 39.541992,
      "longitude": -7.651142,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 351,
      "squawk": "3261",
      "timestamp": 1703234558,
      "ems": null
    },
    {
      "latitude": 39.543007,
      "longitude": -7.651367,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 351,
      "squawk": "3261",
      "timestamp": 1703234561,
      "ems": null
    },
    {
      "latitude": 39.546112,
      "longitude": -7.652097,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 348,
      "squawk": "3261",
      "timestamp": 1703234569,
      "ems": null
    },
    {
      "latitude": 39.547195,
      "longitude": -7.652344,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 351,
      "squawk": "3261",
      "timestamp": 1703234573,
      "ems": null
    },
    {
      "latitude": 39.548313,
      "longitude": -7.652527,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 351,
      "squawk": "3261",
      "timestamp": 1703234576,
      "ems": null
    },
    {
      "latitude": 39.551201,
      "longitude": -7.653076,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 351,
      "squawk": "3261",
      "timestamp": 1703234585,
      "ems": null
    },
    {
      "latitude": 39.554459,
      "longitude": -7.653748,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 351,
      "squawk": "3261",
      "timestamp": 1703234593,
      "ems": null
    },
    {
      "latitude": 39.557739,
      "longitude": -7.654366,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 351,
      "squawk": "3261",
      "timestamp": 1703234602,
      "ems": null
    },
    {
      "latitude": 39.560944,
      "longitude": -7.654784,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 354,
      "squawk": "3261",
      "timestamp": 1703234611,
      "ems": null
    },
    {
      "latitude": 39.562683,
      "longitude": -7.655082,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 351,
      "squawk": "3261",
      "timestamp": 1703234616,
      "ems": null
    },
    {
      "latitude": 39.564972,
      "longitude": -7.655679,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "squawk": "3261",
      "timestamp": 1703234623,
      "ems": null
    },
    {
      "latitude": 39.565632,
      "longitude": -7.655884,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 347,
      "squawk": "3261",
      "timestamp": 1703234625,
      "ems": null
    },
    {
      "latitude": 39.566895,
      "longitude": -7.656217,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 346,
      "squawk": "3261",
      "timestamp": 1703234629,
      "ems": null
    },
    {
      "latitude": 39.568192,
      "longitude": -7.656616,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 346,
      "squawk": "3261",
      "timestamp": 1703234633,
      "ems": null
    },
    {
      "latitude": 39.56889,
      "longitude": -7.65686,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 346,
      "squawk": "3261",
      "timestamp": 1703234634,
      "ems": null
    },
    {
      "latitude": 39.570053,
      "longitude": -7.657227,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 344,
      "squawk": "3261",
      "timestamp": 1703234638,
      "ems": null
    },
    {
      "latitude": 39.571079,
      "longitude": -7.657654,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 342,
      "squawk": "3261",
      "timestamp": 1703234641,
      "ems": null
    },
    {
      "latitude": 39.572197,
      "longitude": -7.658081,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 342,
      "squawk": "3261",
      "timestamp": 1703234644,
      "ems": null
    },
    {
      "latitude": 39.573212,
      "longitude": -7.658486,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 342,
      "squawk": "3261",
      "timestamp": 1703234647,
      "ems": null
    },
    {
      "latitude": 39.574356,
      "longitude": -7.658963,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 342,
      "squawk": "3261",
      "timestamp": 1703234650,
      "ems": null
    },
    {
      "latitude": 39.575409,
      "longitude": -7.659441,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 342,
      "squawk": "3261",
      "timestamp": 1703234653,
      "ems": null
    },
    {
      "latitude": 39.57843,
      "longitude": -7.660336,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 349,
      "squawk": "3261",
      "timestamp": 1703234662,
      "ems": null
    },
    {
      "latitude": 39.580807,
      "longitude": -7.660767,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 355,
      "squawk": "3261",
      "timestamp": 1703234669,
      "ems": null
    },
    {
      "latitude": 39.581783,
      "longitude": -7.660828,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 359,
      "squawk": "3261",
      "timestamp": 1703234672,
      "ems": null
    },
    {
      "latitude": 39.58287,
      "longitude": -7.660755,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 1,
      "squawk": "3261",
      "timestamp": 1703234675,
      "ems": null
    },
    {
      "latitude": 39.583923,
      "longitude": -7.660695,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 2,
      "squawk": "3261",
      "timestamp": 1703234678,
      "ems": null
    },
    {
      "latitude": 39.585182,
      "longitude": -7.660706,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 2,
      "squawk": "3261",
      "timestamp": 1703234681,
      "ems": null
    },
    {
      "latitude": 39.586121,
      "longitude": -7.660695,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 359,
      "squawk": "3261",
      "timestamp": 1703234684,
      "ems": null
    },
    {
      "latitude": 39.587276,
      "longitude": -7.660767,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 357,
      "squawk": "3261",
      "timestamp": 1703234687,
      "ems": null
    },
    {
      "latitude": 39.588211,
      "longitude": -7.660767,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 357,
      "squawk": "3261",
      "timestamp": 1703234689,
      "ems": null
    },
    {
      "latitude": 39.589558,
      "longitude": -7.660828,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 358,
      "squawk": "3261",
      "timestamp": 1703234693,
      "ems": null
    },
    {
      "latitude": 39.59079,
      "longitude": -7.660874,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 360,
      "squawk": "3261",
      "timestamp": 1703234696,
      "ems": null
    },
    {
      "latitude": 39.59198,
      "longitude": -7.660828,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "3261",
      "timestamp": 1703234699,
      "ems": null
    },
    {
      "latitude": 39.595333,
      "longitude": -7.660828,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 358,
      "squawk": "3261",
      "timestamp": 1703234708,
      "ems": null
    },
    {
      "latitude": 39.598682,
      "longitude": -7.660889,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 1,
      "squawk": "3261",
      "timestamp": 1703234717,
      "ems": null
    },
    {
      "latitude": 39.5998,
      "longitude": -7.660828,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 2,
      "squawk": "3261",
      "timestamp": 1703234720,
      "ems": null
    },
    {
      "latitude": 39.603149,
      "longitude": -7.660695,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 2,
      "squawk": "3261",
      "timestamp": 1703234729,
      "ems": null
    },
    {
      "latitude": 39.605202,
      "longitude": -7.660583,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 2,
      "squawk": "3261",
      "timestamp": 1703234735,
      "ems": null
    },
    {
      "latitude": 39.6064,
      "longitude": -7.660456,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 3,
      "squawk": "3261",
      "timestamp": 1703234738,
      "ems": null
    },
    {
      "latitude": 39.607296,
      "longitude": -7.6604,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 5,
      "squawk": "3261",
      "timestamp": 1703234742,
      "ems": null
    },
    {
      "latitude": 39.610519,
      "longitude": -7.659919,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 7,
      "squawk": "3261",
      "timestamp": 1703234750,
      "ems": null
    },
    {
      "latitude": 39.611717,
      "longitude": -7.659668,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 8,
      "squawk": "3261",
      "timestamp": 1703234753,
      "ems": null
    },
    {
      "latitude": 39.612854,
      "longitude": -7.659381,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 13,
      "squawk": "3261",
      "timestamp": 1703234756,
      "ems": null
    },
    {
      "latitude": 39.613815,
      "longitude": -7.659023,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 16,
      "squawk": "3261",
      "timestamp": 1703234759,
      "ems": null
    },
    {
      "latitude": 39.614868,
      "longitude": -7.658545,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 19,
      "squawk": "3261",
      "timestamp": 1703234762,
      "ems": null
    },
    {
      "latitude": 39.615814,
      "longitude": -7.658081,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 21,
      "squawk": "3261",
      "timestamp": 1703234765,
      "ems": null
    },
    {
      "latitude": 39.61684,
      "longitude": -7.657532,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 23,
      "squawk": "3261",
      "timestamp": 1703234769,
      "ems": null
    },
    {
      "latitude": 39.617863,
      "longitude": -7.65686,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 27,
      "squawk": "3261",
      "timestamp": 1703234772,
      "ems": null
    },
    {
      "latitude": 39.618851,
      "longitude": -7.656217,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 29,
      "squawk": "3261",
      "timestamp": 1703234775,
      "ems": null
    },
    {
      "latitude": 39.619766,
      "longitude": -7.6555,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 30,
      "squawk": "3261",
      "timestamp": 1703234778,
      "ems": null
    },
    {
      "latitude": 39.620701,
      "longitude": -7.654724,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 31,
      "squawk": "3261",
      "timestamp": 1703234781,
      "ems": null
    },
    {
      "latitude": 39.621494,
      "longitude": -7.654114,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 32,
      "squawk": "3261",
      "timestamp": 1703234783,
      "ems": null
    },
    {
      "latitude": 39.622467,
      "longitude": -7.653232,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 33,
      "squawk": "3261",
      "timestamp": 1703234787,
      "ems": null
    },
    {
      "latitude": 39.623215,
      "longitude": -7.652588,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 34,
      "squawk": "3261",
      "timestamp": 1703234789,
      "ems": null
    },
    {
      "latitude": 39.624241,
      "longitude": -7.651733,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 34,
      "squawk": "3261",
      "timestamp": 1703234793,
      "ems": null
    },
    {
      "latitude": 39.625122,
      "longitude": -7.650962,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 33,
      "squawk": "3261",
      "timestamp": 1703234796,
      "ems": null
    },
    {
      "latitude": 39.626038,
      "longitude": -7.650186,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 32,
      "squawk": "3261",
      "timestamp": 1703234799,
      "ems": null
    },
    {
      "latitude": 39.626999,
      "longitude": -7.64941,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 32,
      "squawk": "3261",
      "timestamp": 1703234802,
      "ems": null
    },
    {
      "latitude": 39.629425,
      "longitude": -7.64738,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 33,
      "squawk": "3261",
      "timestamp": 1703234811,
      "ems": null
    },
    {
      "latitude": 39.632172,
      "longitude": -7.644932,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 35,
      "squawk": "3261",
      "timestamp": 1703234820,
      "ems": null
    },
    {
      "latitude": 39.633785,
      "longitude": -7.643372,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 38,
      "squawk": "3261",
      "timestamp": 1703234826,
      "ems": null
    },
    {
      "latitude": 39.634644,
      "longitude": -7.642484,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 38,
      "squawk": "3261",
      "timestamp": 1703234829,
      "ems": null
    },
    {
      "latitude": 39.63533,
      "longitude": -7.641768,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 38,
      "squawk": "3261",
      "timestamp": 1703234832,
      "ems": null
    },
    {
      "latitude": 39.636204,
      "longitude": -7.640869,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 38,
      "squawk": "3261",
      "timestamp": 1703234835,
      "ems": null
    },
    {
      "latitude": 39.637043,
      "longitude": -7.640015,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 39,
      "squawk": "3261",
      "timestamp": 1703234838,
      "ems": null
    },
    {
      "latitude": 39.637787,
      "longitude": -7.639221,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 40,
      "squawk": "3261",
      "timestamp": 1703234841,
      "ems": null
    },
    {
      "latitude": 39.638535,
      "longitude": -7.638364,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 40,
      "squawk": "3261",
      "timestamp": 1703234844,
      "ems": null
    },
    {
      "latitude": 39.639278,
      "longitude": -7.637512,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 41,
      "squawk": "3261",
      "timestamp": 1703234847,
      "ems": null
    },
    {
      "latitude": 39.641464,
      "longitude": -7.63502,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 41,
      "squawk": "3261",
      "timestamp": 1703234856,
      "ems": null
    },
    {
      "latitude": 39.643753,
      "longitude": -7.632751,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 34,
      "squawk": "3261",
      "timestamp": 1703234865,
      "ems": null
    },
    {
      "latitude": 39.64463,
      "longitude": -7.632019,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 34,
      "squawk": "3261",
      "timestamp": 1703234868,
      "ems": null
    },
    {
      "latitude": 39.645355,
      "longitude": -7.631319,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 34,
      "squawk": "3261",
      "timestamp": 1703234871,
      "ems": null
    },
    {
      "latitude": 39.646179,
      "longitude": -7.630542,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 36,
      "squawk": "3261",
      "timestamp": 1703234874,
      "ems": null
    },
    {
      "latitude": 39.646912,
      "longitude": -7.629883,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 36,
      "squawk": "3261",
      "timestamp": 1703234877,
      "ems": null
    },
    {
      "latitude": 39.647736,
      "longitude": -7.629109,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 35,
      "squawk": "3261",
      "timestamp": 1703234881,
      "ems": null
    },
    {
      "latitude": 39.650078,
      "longitude": -7.627014,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 35,
      "squawk": "3261",
      "timestamp": 1703234890,
      "ems": null
    },
    {
      "latitude": 39.652359,
      "longitude": -7.62481,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 37,
      "squawk": "3261",
      "timestamp": 1703234899,
      "ems": null
    },
    {
      "latitude": 39.654648,
      "longitude": -7.622422,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 39,
      "squawk": "3261",
      "timestamp": 1703234908,
      "ems": null
    },
    {
      "latitude": 39.656387,
      "longitude": -7.620631,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 38,
      "squawk": "3261",
      "timestamp": 1703234915,
      "ems": null
    },
    {
      "latitude": 39.659107,
      "longitude": -7.61792,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 37,
      "squawk": "3261",
      "timestamp": 1703234926,
      "ems": null
    },
    {
      "latitude": 39.661388,
      "longitude": -7.615601,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 39,
      "squawk": "3261",
      "timestamp": 1703234935,
      "ems": null
    },
    {
      "latitude": 39.66367,
      "longitude": -7.613037,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 41,
      "squawk": "3261",
      "timestamp": 1703234944,
      "ems": null
    },
    {
      "latitude": 39.665951,
      "longitude": -7.610413,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 42,
      "squawk": "3261",
      "timestamp": 1703234953,
      "ems": null
    },
    {
      "latitude": 39.666695,
      "longitude": -7.609497,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 43,
      "squawk": "3261",
      "timestamp": 1703234956,
      "ems": null
    },
    {
      "latitude": 39.667442,
      "longitude": -7.608582,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 43,
      "squawk": "3261",
      "timestamp": 1703234959,
      "ems": null
    },
    {
      "latitude": 39.669617,
      "longitude": -7.606062,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "3261",
      "timestamp": 1703234968,
      "ems": null
    },
    {
      "latitude": 39.670933,
      "longitude": -7.60437,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 46,
      "squawk": "3261",
      "timestamp": 1703234973,
      "ems": null
    },
    {
      "latitude": 39.671909,
      "longitude": -7.603088,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 46,
      "squawk": "3261",
      "timestamp": 1703234977,
      "ems": null
    },
    {
      "latitude": 39.672375,
      "longitude": -7.602417,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 46,
      "squawk": "3261",
      "timestamp": 1703234979,
      "ems": null
    },
    {
      "latitude": 39.674751,
      "longitude": -7.599304,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 45,
      "squawk": "3261",
      "timestamp": 1703234988,
      "ems": null
    },
    {
      "latitude": 39.67662,
      "longitude": -7.596807,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 44,
      "squawk": "3261",
      "timestamp": 1703234998,
      "ems": null
    },
    {
      "latitude": 39.679321,
      "longitude": -7.593344,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 44,
      "squawk": "3261",
      "timestamp": 1703235007,
      "ems": null
    },
    {
      "latitude": 39.681499,
      "longitude": -7.590637,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 45,
      "squawk": "3261",
      "timestamp": 1703235016,
      "ems": null
    },
    {
      "latitude": 39.683853,
      "longitude": -7.587731,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 43,
      "squawk": "3261",
      "timestamp": 1703235025,
      "ems": null
    },
    {
      "latitude": 39.685959,
      "longitude": -7.585343,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 37,
      "squawk": "3261",
      "timestamp": 1703235033,
      "ems": null
    },
    {
      "latitude": 39.686714,
      "longitude": -7.584656,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 32,
      "squawk": "3261",
      "timestamp": 1703235036,
      "ems": null
    },
    {
      "latitude": 39.688019,
      "longitude": -7.583801,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 22,
      "squawk": "3261",
      "timestamp": 1703235041,
      "ems": null
    },
    {
      "latitude": 39.689163,
      "longitude": -7.583313,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 16,
      "squawk": "3261",
      "timestamp": 1703235044,
      "ems": null
    },
    {
      "latitude": 39.690125,
      "longitude": -7.583074,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 9,
      "squawk": "3261",
      "timestamp": 1703235047,
      "ems": null
    },
    {
      "latitude": 39.691368,
      "longitude": -7.582825,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 7,
      "squawk": "3261",
      "timestamp": 1703235050,
      "ems": null
    },
    {
      "latitude": 39.692184,
      "longitude": -7.582656,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 7,
      "squawk": "3261",
      "timestamp": 1703235053,
      "ems": null
    },
    {
      "latitude": 39.69342,
      "longitude": -7.582417,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 9,
      "squawk": "3261",
      "timestamp": 1703235056,
      "ems": null
    },
    {
      "latitude": 39.694393,
      "longitude": -7.582214,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 9,
      "squawk": "3261",
      "timestamp": 1703235059,
      "ems": null
    },
    {
      "latitude": 39.695343,
      "longitude": -7.581999,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 10,
      "squawk": "3261",
      "timestamp": 1703235062,
      "ems": null
    },
    {
      "latitude": 39.69635,
      "longitude": -7.58182,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "3261",
      "timestamp": 1703235065,
      "ems": null
    },
    {
      "latitude": 39.696945,
      "longitude": -7.581701,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 7,
      "squawk": "3261",
      "timestamp": 1703235067,
      "ems": null
    },
    {
      "latitude": 39.697746,
      "longitude": -7.581543,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 8,
      "squawk": "3261",
      "timestamp": 1703235070,
      "ems": null
    },
    {
      "latitude": 39.699238,
      "longitude": -7.581238,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 8,
      "squawk": "3261",
      "timestamp": 1703235074,
      "ems": null
    },
    {
      "latitude": 39.701157,
      "longitude": -7.580686,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 12,
      "squawk": "3261",
      "timestamp": 1703235080,
      "ems": null
    },
    {
      "latitude": 39.704079,
      "longitude": -7.579895,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 13,
      "squawk": "3261",
      "timestamp": 1703235089,
      "ems": null
    },
    {
      "latitude": 39.705101,
      "longitude": -7.579529,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 14,
      "squawk": "3261",
      "timestamp": 1703235092,
      "ems": null
    },
    {
      "latitude": 39.706127,
      "longitude": -7.579163,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 17,
      "squawk": "3261",
      "timestamp": 1703235095,
      "ems": null
    },
    {
      "latitude": 39.707195,
      "longitude": -7.578674,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 18,
      "squawk": "3261",
      "timestamp": 1703235099,
      "ems": null
    },
    {
      "latitude": 39.707802,
      "longitude": -7.57843,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 17,
      "squawk": "3261",
      "timestamp": 1703235102,
      "ems": null
    },
    {
      "latitude": 39.708939,
      "longitude": -7.577999,
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
      "heading": 16,
      "squawk": "3261",
      "timestamp": 1703235104,
      "ems": null
    },
    {
      "latitude": 39.711853,
      "longitude": -7.577087,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 12,
      "squawk": "3261",
      "timestamp": 1703235113,
      "ems": null
    },
    {
      "latitude": 39.714321,
      "longitude": -7.576416,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 12,
      "squawk": "3261",
      "timestamp": 1703235121,
      "ems": null
    },
    {
      "latitude": 39.715256,
      "longitude": -7.576148,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 10,
      "squawk": "3261",
      "timestamp": 1703235124,
      "ems": null
    },
    {
      "latitude": 39.716263,
      "longitude": -7.575909,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 10,
      "squawk": "3261",
      "timestamp": 1703235127,
      "ems": null
    },
    {
      "latitude": 39.717438,
      "longitude": -7.575623,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "3261",
      "timestamp": 1703235131,
      "ems": null
    },
    {
      "latitude": 39.718414,
      "longitude": -7.575378,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 11,
      "squawk": "3261",
      "timestamp": 1703235134,
      "ems": null
    },
    {
      "latitude": 39.719376,
      "longitude": -7.575133,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 11,
      "squawk": "3261",
      "timestamp": 1703235136,
      "ems": null
    },
    {
      "latitude": 39.721859,
      "longitude": -7.574463,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 11,
      "squawk": "3261",
      "timestamp": 1703235144,
      "ems": null
    },
    {
      "latitude": 39.724823,
      "longitude": -7.5737,
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
      "heading": 9,
      "squawk": "3261",
      "timestamp": 1703235153,
      "ems": null
    },
    {
      "latitude": 39.727707,
      "longitude": -7.572983,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 11,
      "squawk": "3261",
      "timestamp": 1703235162,
      "ems": null
    },
    {
      "latitude": 39.730499,
      "longitude": -7.572147,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 12,
      "squawk": "3261",
      "timestamp": 1703235171,
      "ems": null
    },
    {
      "latitude": 39.733154,
      "longitude": -7.571431,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 11,
      "squawk": "3261",
      "timestamp": 1703235180,
      "ems": null
    },
    {
      "latitude": 39.736267,
      "longitude": -7.570714,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 9,
      "squawk": "3261",
      "timestamp": 1703235189,
      "ems": null
    },
    {
      "latitude": 39.738667,
      "longitude": -7.57019,
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
      "heading": 9,
      "squawk": "3261",
      "timestamp": 1703235197,
      "ems": null
    },
    {
      "latitude": 39.741924,
      "longitude": -7.56958,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 7,
      "squawk": "3261",
      "timestamp": 1703235207,
      "ems": null
    },
    {
      "latitude": 39.744484,
      "longitude": -7.56897,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 12,
      "squawk": "3261",
      "timestamp": 1703235215,
      "ems": null
    },
    {
      "latitude": 39.747093,
      "longitude": -7.568237,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 12,
      "squawk": "3261",
      "timestamp": 1703235222,
      "ems": null
    },
    {
      "latitude": 39.750118,
      "longitude": -7.567444,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 11,
      "squawk": "3261",
      "timestamp": 1703235232,
      "ems": null
    },
    {
      "latitude": 39.752956,
      "longitude": -7.566711,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 11,
      "squawk": "3261",
      "timestamp": 1703235240,
      "ems": null
    },
    {
      "latitude": 39.755985,
      "longitude": -7.565857,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 12,
      "squawk": "3261",
      "timestamp": 1703235250,
      "ems": null
    },
    {
      "latitude": 39.758835,
      "longitude": -7.564923,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 13,
      "squawk": "3261",
      "timestamp": 1703235259,
      "ems": null
    },
    {
      "latitude": 39.761673,
      "longitude": -7.564147,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 12,
      "squawk": "3261",
      "timestamp": 1703235267,
      "ems": null
    },
    {
      "latitude": 39.764736,
      "longitude": -7.563293,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 12,
      "squawk": "3261",
      "timestamp": 1703235277,
      "ems": null
    },
    {
      "latitude": 39.767063,
      "longitude": -7.562744,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 10,
      "squawk": "3261",
      "timestamp": 1703235285,
      "ems": null
    },
    {
      "latitude": 39.770416,
      "longitude": -7.561951,
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
      "heading": 13,
      "squawk": "3261",
      "timestamp": 1703235295,
      "ems": null
    },
    {
      "latitude": 39.772369,
      "longitude": -7.560974,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 21,
      "squawk": "3261",
      "timestamp": 1703235301,
      "ems": null
    },
    {
      "latitude": 39.773861,
      "longitude": -7.55957,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 40,
      "squawk": "3261",
      "timestamp": 1703235307,
      "ems": null
    },
    {
      "latitude": 39.774536,
      "longitude": -7.558773,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 28,
      "squawk": "3261",
      "timestamp": 1703235309,
      "ems": null
    },
    {
      "latitude": 39.775303,
      "longitude": -7.557678,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 28,
      "squawk": "3261",
      "timestamp": 1703235313,
      "ems": null
    },
    {
      "latitude": 39.775864,
      "longitude": -7.556802,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 48,
      "squawk": "3261",
      "timestamp": 1703235316,
      "ems": null
    },
    {
      "latitude": 39.776459,
      "longitude": -7.555966,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 48,
      "squawk": "3261",
      "timestamp": 1703235319,
      "ems": null
    },
    {
      "latitude": 39.777008,
      "longitude": -7.55513,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 49,
      "squawk": "3261",
      "timestamp": 1703235321,
      "ems": null
    },
    {
      "latitude": 39.777603,
      "longitude": -7.554235,
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
      "heading": 49,
      "squawk": "3261",
      "timestamp": 1703235324,
      "ems": null
    },
    {
      "latitude": 39.778152,
      "longitude": -7.553399,
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
      "heading": 51,
      "squawk": "3261",
      "timestamp": 1703235327,
      "ems": null
    },
    {
      "latitude": 39.779022,
      "longitude": -7.551787,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 54,
      "squawk": "3261",
      "timestamp": 1703235331,
      "ems": null
    },
    {
      "latitude": 39.779633,
      "longitude": -7.550537,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 59,
      "squawk": "3261",
      "timestamp": 1703235335,
      "ems": null
    },
    {
      "latitude": 39.780075,
      "longitude": -7.549637,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 58,
      "squawk": "3261",
      "timestamp": 1703235337,
      "ems": null
    },
    {
      "latitude": 39.780396,
      "longitude": -7.548921,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 56,
      "squawk": "3261",
      "timestamp": 1703235339,
      "ems": null
    },
    {
      "latitude": 39.781265,
      "longitude": -7.547428,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 52,
      "squawk": "3261",
      "timestamp": 1703235343,
      "ems": null
    },
    {
      "latitude": 39.783169,
      "longitude": -7.544312,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 51,
      "squawk": "3261",
      "timestamp": 1703235352,
      "ems": null
    },
    {
      "latitude": 39.785065,
      "longitude": -7.541577,
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
      "heading": 46,
      "squawk": "3261",
      "timestamp": 1703235361,
      "ems": null
    },
    {
      "latitude": 39.78587,
      "longitude": -7.540405,
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
      "heading": 46,
      "squawk": "3261",
      "timestamp": 1703235364,
      "ems": null
    },
    {
      "latitude": 39.786381,
      "longitude": -7.539734,
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
      "heading": 47,
      "squawk": "3261",
      "timestamp": 1703235367,
      "ems": null
    },
    {
      "latitude": 39.787354,
      "longitude": -7.538233,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 49,
      "squawk": "3261",
      "timestamp": 1703235371,
      "ems": null
    },
    {
      "latitude": 39.789268,
      "longitude": -7.535461,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 43,
      "squawk": "3261",
      "timestamp": 1703235380,
      "ems": null
    },
    {
      "latitude": 39.790199,
      "longitude": -7.534424,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 40,
      "squawk": "3261",
      "timestamp": 1703235383,
      "ems": null
    },
    {
      "latitude": 39.790558,
      "longitude": -7.533994,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 40,
      "squawk": "3261",
      "timestamp": 1703235385,
      "ems": null
    },
    {
      "latitude": 39.791977,
      "longitude": -7.53262,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 35,
      "squawk": "3261",
      "timestamp": 1703235390,
      "ems": null
    },
    {
      "latitude": 39.79335,
      "longitude": -7.531367,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 36,
      "squawk": "3261",
      "timestamp": 1703235395,
      "ems": null
    },
    {
      "latitude": 39.79454,
      "longitude": -7.530232,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 38,
      "squawk": "3261",
      "timestamp": 1703235399,
      "ems": null
    },
    {
      "latitude": 39.795368,
      "longitude": -7.529297,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 38,
      "squawk": "3261",
      "timestamp": 1703235403,
      "ems": null
    },
    {
      "latitude": 39.797195,
      "longitude": -7.527247,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 42,
      "squawk": "3261",
      "timestamp": 1703235410,
      "ems": null
    },
    {
      "latitude": 39.798706,
      "longitude": -7.525455,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 43,
      "squawk": "3261",
      "timestamp": 1703235416,
      "ems": null
    },
    {
      "latitude": 39.799484,
      "longitude": -7.524441,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 45,
      "squawk": "3261",
      "timestamp": 1703235419,
      "ems": null
    },
    {
      "latitude": 39.800262,
      "longitude": -7.523366,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 47,
      "squawk": "3261",
      "timestamp": 1703235422,
      "ems": null
    },
    {
      "latitude": 39.800995,
      "longitude": -7.522291,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 48,
      "squawk": "3261",
      "timestamp": 1703235425,
      "ems": null
    },
    {
      "latitude": 39.801743,
      "longitude": -7.521301,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 47,
      "squawk": "3261",
      "timestamp": 1703235429,
      "ems": null
    },
    {
      "latitude": 39.802139,
      "longitude": -7.520739,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 46,
      "squawk": "3261",
      "timestamp": 1703235431,
      "ems": null
    },
    {
      "latitude": 39.804443,
      "longitude": -7.518066,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 41,
      "squawk": "3261",
      "timestamp": 1703235439,
      "ems": null
    },
    {
      "latitude": 39.807037,
      "longitude": -7.515007,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 43,
      "squawk": "3261",
      "timestamp": 1703235449,
      "ems": null
    },
    {
      "latitude": 39.80896,
      "longitude": -7.51232,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 52,
      "squawk": "3261",
      "timestamp": 1703235457,
      "ems": null
    },
    {
      "latitude": 39.809555,
      "longitude": -7.511245,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 53,
      "squawk": "3261",
      "timestamp": 1703235460,
      "ems": null
    },
    {
      "latitude": 39.810215,
      "longitude": -7.510132,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 50,
      "squawk": "3261",
      "timestamp": 1703235464,
      "ems": null
    },
    {
      "latitude": 39.810699,
      "longitude": -7.509394,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 46,
      "squawk": "3261",
      "timestamp": 1703235466,
      "ems": null
    },
    {
      "latitude": 39.812824,
      "longitude": -7.506653,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 45,
      "squawk": "3261",
      "timestamp": 1703235475,
      "ems": null
    },
    {
      "latitude": 39.814819,
      "longitude": -7.503662,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 50,
      "squawk": "3261",
      "timestamp": 1703235485,
      "ems": null
    },
    {
      "latitude": 39.816547,
      "longitude": -7.500916,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 51,
      "squawk": "3261",
      "timestamp": 1703235494,
      "ems": null
    },
    {
      "latitude": 39.817059,
      "longitude": -7.5,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 56,
      "squawk": "3261",
      "timestamp": 1703235496,
      "ems": null
    },
    {
      "latitude": 39.817619,
      "longitude": -7.498779,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 58,
      "squawk": "3261",
      "timestamp": 1703235500,
      "ems": null
    },
    {
      "latitude": 39.81813,
      "longitude": -7.49762,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 60,
      "squawk": "3261",
      "timestamp": 1703235503,
      "ems": null
    },
    {
      "latitude": 39.818619,
      "longitude": -7.496616,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 59,
      "squawk": "3261",
      "timestamp": 1703235506,
      "ems": null
    },
    {
      "latitude": 39.819122,
      "longitude": -7.495602,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 57,
      "squawk": "3261",
      "timestamp": 1703235509,
      "ems": null
    },
    {
      "latitude": 39.819626,
      "longitude": -7.494527,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 56,
      "squawk": "3261",
      "timestamp": 1703235512,
      "ems": null
    },
    {
      "latitude": 39.820129,
      "longitude": -7.493512,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 57,
      "squawk": "3261",
      "timestamp": 1703235515,
      "ems": null
    },
    {
      "latitude": 39.820724,
      "longitude": -7.492318,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 58,
      "squawk": "3261",
      "timestamp": 1703235518,
      "ems": null
    },
    {
      "latitude": 39.821136,
      "longitude": -7.491422,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 58,
      "squawk": "3261",
      "timestamp": 1703235521,
      "ems": null
    },
    {
      "latitude": 39.822372,
      "longitude": -7.488675,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 61,
      "squawk": "3261",
      "timestamp": 1703235527,
      "ems": null
    },
    {
      "latitude": 39.823334,
      "longitude": -7.486108,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703235533,
      "ems": null
    },
    {
      "latitude": 39.824741,
      "longitude": -7.482849,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 57,
      "squawk": "3261",
      "timestamp": 1703235541,
      "ems": null
    },
    {
      "latitude": 39.826462,
      "longitude": -7.479126,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 61,
      "squawk": "3261",
      "timestamp": 1703235550,
      "ems": null
    },
    {
      "latitude": 39.82814,
      "longitude": -7.474854,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 63,
      "squawk": "3261",
      "timestamp": 1703235559,
      "ems": null
    },
    {
      "latitude": 39.829815,
      "longitude": -7.471191,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 60,
      "squawk": "3261",
      "timestamp": 1703235568,
      "ems": null
    },
    {
      "latitude": 39.831211,
      "longitude": -7.467896,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 60,
      "squawk": "3261",
      "timestamp": 1703235577,
      "ems": null
    },
    {
      "latitude": 39.832657,
      "longitude": -7.4646,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 59,
      "squawk": "3261",
      "timestamp": 1703235586,
      "ems": null
    },
    {
      "latitude": 39.833633,
      "longitude": -7.462583,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 56,
      "squawk": "3261",
      "timestamp": 1703235592,
      "ems": null
    },
    {
      "latitude": 39.833817,
      "longitude": -7.462224,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 56,
      "squawk": "3261",
      "timestamp": 1703235593,
      "ems": null
    },
    {
      "latitude": 39.834915,
      "longitude": -7.460254,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 55,
      "squawk": "3261",
      "timestamp": 1703235599,
      "ems": null
    },
    {
      "latitude": 39.835373,
      "longitude": -7.459538,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 50,
      "squawk": "3261",
      "timestamp": 1703235601,
      "ems": null
    },
    {
      "latitude": 39.835915,
      "longitude": -7.45874,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 48,
      "squawk": "3261",
      "timestamp": 1703235604,
      "ems": null
    },
    {
      "latitude": 39.836563,
      "longitude": -7.457866,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 47,
      "squawk": "3261",
      "timestamp": 1703235607,
      "ems": null
    },
    {
      "latitude": 39.837341,
      "longitude": -7.456731,
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
      "heading": 48,
      "squawk": "3261",
      "timestamp": 1703235610,
      "ems": null
    },
    {
      "latitude": 39.837982,
      "longitude": -7.455836,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 48,
      "squawk": "3261",
      "timestamp": 1703235613,
      "ems": null
    },
    {
      "latitude": 39.838669,
      "longitude": -7.454821,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 46,
      "squawk": "3261",
      "timestamp": 1703235617,
      "ems": null
    },
    {
      "latitude": 39.839264,
      "longitude": -7.453985,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 49,
      "squawk": "3261",
      "timestamp": 1703235619,
      "ems": null
    },
    {
      "latitude": 39.839859,
      "longitude": -7.45303,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 49,
      "squawk": "3261",
      "timestamp": 1703235622,
      "ems": null
    },
    {
      "latitude": 39.840477,
      "longitude": -7.452148,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 49,
      "squawk": "3261",
      "timestamp": 1703235625,
      "ems": null
    },
    {
      "latitude": 39.840912,
      "longitude": -7.451417,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 49,
      "squawk": "3261",
      "timestamp": 1703235628,
      "ems": null
    },
    {
      "latitude": 39.842697,
      "longitude": -7.44879,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 46,
      "squawk": "3261",
      "timestamp": 1703235636,
      "ems": null
    },
    {
      "latitude": 39.843704,
      "longitude": -7.447536,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 42,
      "squawk": "3261",
      "timestamp": 1703235640,
      "ems": null
    },
    {
      "latitude": 39.846085,
      "longitude": -7.443237,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 66,
      "squawk": "3261",
      "timestamp": 1703235653,
      "ems": null
    },
    {
      "latitude": 39.846359,
      "longitude": -7.441864,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 74,
      "squawk": "3261",
      "timestamp": 1703235656,
      "ems": null
    },
    {
      "latitude": 39.846527,
      "longitude": -7.441223,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 69,
      "squawk": "3261",
      "timestamp": 1703235657,
      "ems": null
    },
    {
      "latitude": 39.847275,
      "longitude": -7.439536,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 69,
      "squawk": "3261",
      "timestamp": 1703235662,
      "ems": null
    },
    {
      "latitude": 39.848667,
      "longitude": -7.437439,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 49,
      "squawk": "3261",
      "timestamp": 1703235668,
      "ems": null
    },
    {
      "latitude": 39.84938,
      "longitude": -7.436252,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 53,
      "squawk": "3261",
      "timestamp": 1703235671,
      "ems": null
    },
    {
      "latitude": 39.84993,
      "longitude": -7.435177,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 54,
      "squawk": "3261",
      "timestamp": 1703235674,
      "ems": null
    },
    {
      "latitude": 39.851044,
      "longitude": -7.433289,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 51,
      "squawk": "3261",
      "timestamp": 1703235679,
      "ems": null
    },
    {
      "latitude": 39.851742,
      "longitude": -7.432129,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 51,
      "squawk": "3261",
      "timestamp": 1703235683,
      "ems": null
    },
    {
      "latitude": 39.852722,
      "longitude": -7.4304,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 51,
      "squawk": "3261",
      "timestamp": 1703235689,
      "ems": null
    },
    {
      "latitude": 39.853317,
      "longitude": -7.429445,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 49,
      "squawk": "3261",
      "timestamp": 1703235692,
      "ems": null
    },
    {
      "latitude": 39.855103,
      "longitude": -7.426758,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 54,
      "squawk": "3261",
      "timestamp": 1703235701,
      "ems": null
    },
    {
      "latitude": 39.855652,
      "longitude": -7.425354,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 67,
      "squawk": "3261",
      "timestamp": 1703235706,
      "ems": null
    },
    {
      "latitude": 39.855789,
      "longitude": -7.424489,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 70,
      "squawk": "3261",
      "timestamp": 1703235708,
      "ems": null
    },
    {
      "latitude": 39.855793,
      "longitude": -7.422852,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 90,
      "squawk": "3261",
      "timestamp": 1703235713,
      "ems": null
    },
    {
      "latitude": 39.855606,
      "longitude": -7.421921,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 111,
      "squawk": "3261",
      "timestamp": 1703235716,
      "ems": null
    },
    {
      "latitude": 39.852951,
      "longitude": -7.418339,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 152,
      "squawk": "3261",
      "timestamp": 1703235725,
      "ems": null
    },
    {
      "latitude": 39.851974,
      "longitude": -7.417786,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 157,
      "squawk": "3261",
      "timestamp": 1703235727,
      "ems": null
    },
    {
      "latitude": 39.850159,
      "longitude": -7.417236,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 169,
      "squawk": "3261",
      "timestamp": 1703235732,
      "ems": null
    },
    {
      "latitude": 39.848808,
      "longitude": -7.416992,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 174,
      "squawk": "3261",
      "timestamp": 1703235734,
      "ems": null
    },
    {
      "latitude": 39.847412,
      "longitude": -7.416906,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 178,
      "squawk": "3261",
      "timestamp": 1703235738,
      "ems": null
    },
    {
      "latitude": 39.845921,
      "longitude": -7.417053,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 186,
      "squawk": "3261",
      "timestamp": 1703235741,
      "ems": null
    },
    {
      "latitude": 39.844574,
      "longitude": -7.417443,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 196,
      "squawk": "3261",
      "timestamp": 1703235744,
      "ems": null
    },
    {
      "latitude": 39.84343,
      "longitude": -7.4181,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 203,
      "squawk": "3261",
      "timestamp": 1703235746,
      "ems": null
    },
    {
      "latitude": 39.84201,
      "longitude": -7.419175,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 214,
      "squawk": "3261",
      "timestamp": 1703235750,
      "ems": null
    },
    {
      "latitude": 39.84082,
      "longitude": -7.420488,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 221,
      "squawk": "3261",
      "timestamp": 1703235753,
      "ems": null
    },
    {
      "latitude": 39.838985,
      "longitude": -7.42334,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 236,
      "squawk": "3261",
      "timestamp": 1703235760,
      "ems": null
    },
    {
      "latitude": 39.838242,
      "longitude": -7.424927,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 239,
      "squawk": "3261",
      "timestamp": 1703235763,
      "ems": null
    },
    {
      "latitude": 39.837799,
      "longitude": -7.425982,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 244,
      "squawk": "3261",
      "timestamp": 1703235765,
      "ems": null
    },
    {
      "latitude": 39.837078,
      "longitude": -7.428345,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 250,
      "squawk": "3261",
      "timestamp": 1703235769,
      "ems": null
    },
    {
      "latitude": 39.836655,
      "longitude": -7.429982,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 254,
      "squawk": "3261",
      "timestamp": 1703235772,
      "ems": null
    },
    {
      "latitude": 39.836472,
      "longitude": -7.431057,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 256,
      "squawk": "3261",
      "timestamp": 1703235774,
      "ems": null
    },
    {
      "latitude": 39.836102,
      "longitude": -7.434204,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 264,
      "squawk": "3261",
      "timestamp": 1703235780,
      "ems": null
    },
    {
      "latitude": 39.836052,
      "longitude": -7.435974,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "3261",
      "timestamp": 1703235783,
      "ems": null
    },
    {
      "latitude": 39.836105,
      "longitude": -7.437505,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 273,
      "squawk": "3261",
      "timestamp": 1703235786,
      "ems": null
    },
    {
      "latitude": 39.836243,
      "longitude": -7.439117,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 277,
      "squawk": "3261",
      "timestamp": 1703235789,
      "ems": null
    },
    {
      "latitude": 39.836426,
      "longitude": -7.440796,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 278,
      "squawk": "3261",
      "timestamp": 1703235792,
      "ems": null
    },
    {
      "latitude": 39.836655,
      "longitude": -7.442342,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 280,
      "squawk": "3261",
      "timestamp": 1703235795,
      "ems": null
    },
    {
      "latitude": 39.836929,
      "longitude": -7.443954,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 282,
      "squawk": "3261",
      "timestamp": 1703235798,
      "ems": null
    },
    {
      "latitude": 39.83717,
      "longitude": -7.445435,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 282,
      "squawk": "3261",
      "timestamp": 1703235801,
      "ems": null
    },
    {
      "latitude": 39.837402,
      "longitude": -7.446777,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 282,
      "squawk": "3261",
      "timestamp": 1703235803,
      "ems": null
    },
    {
      "latitude": 39.837708,
      "longitude": -7.448551,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 282,
      "squawk": "3261",
      "timestamp": 1703235807,
      "ems": null
    },
    {
      "latitude": 39.837963,
      "longitude": -7.450012,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 283,
      "squawk": "3261",
      "timestamp": 1703235810,
      "ems": null
    },
    {
      "latitude": 39.838303,
      "longitude": -7.451537,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 285,
      "squawk": "3261",
      "timestamp": 1703235813,
      "ems": null
    },
    {
      "latitude": 39.838623,
      "longitude": -7.45297,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 285,
      "squawk": "3261",
      "timestamp": 1703235816,
      "ems": null
    },
    {
      "latitude": 39.838989,
      "longitude": -7.454701,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 285,
      "squawk": "3261",
      "timestamp": 1703235819,
      "ems": null
    },
    {
      "latitude": 39.839264,
      "longitude": -7.456015,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 286,
      "squawk": "3261",
      "timestamp": 1703235822,
      "ems": null
    },
    {
      "latitude": 39.840042,
      "longitude": -7.459418,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 287,
      "squawk": "3261",
      "timestamp": 1703235828,
      "ems": null
    },
    {
      "latitude": 39.840363,
      "longitude": -7.460732,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 288,
      "squawk": "3261",
      "timestamp": 1703235831,
      "ems": null
    },
    {
      "latitude": 39.840755,
      "longitude": -7.46228,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 288,
      "squawk": "3261",
      "timestamp": 1703235834,
      "ems": null
    },
    {
      "latitude": 39.841049,
      "longitude": -7.463479,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 288,
      "squawk": "3261",
      "timestamp": 1703235837,
      "ems": null
    },
    {
      "latitude": 39.842285,
      "longitude": -7.468613,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 287,
      "squawk": "3261",
      "timestamp": 1703235846,
      "ems": null
    },
    {
      "latitude": 39.843292,
      "longitude": -7.473569,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 285,
      "squawk": "3261",
      "timestamp": 1703235856,
      "ems": null
    },
    {
      "latitude": 39.844433,
      "longitude": -7.478577,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 286,
      "squawk": "3261",
      "timestamp": 1703235864,
      "ems": null
    },
    {
      "latitude": 39.845642,
      "longitude": -7.483276,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 289,
      "squawk": "3261",
      "timestamp": 1703235873,
      "ems": null
    },
    {
      "latitude": 39.846527,
      "longitude": -7.486877,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 287,
      "squawk": "3261",
      "timestamp": 1703235881,
      "ems": null
    },
    {
      "latitude": 39.84787,
      "longitude": -7.492138,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 289,
      "squawk": "3261",
      "timestamp": 1703235892,
      "ems": null
    },
    {
      "latitude": 39.848995,
      "longitude": -7.496277,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 290,
      "squawk": "3261",
      "timestamp": 1703235897,
      "ems": null
    },
    {
      "latitude": 39.850113,
      "longitude": -7.499661,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 293,
      "squawk": "3261",
      "timestamp": 1703235904,
      "ems": null
    },
    {
      "latitude": 39.850616,
      "longitude": -7.501154,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 292,
      "squawk": "3261",
      "timestamp": 1703235907,
      "ems": null
    },
    {
      "latitude": 39.851166,
      "longitude": -7.502886,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 292,
      "squawk": "3261",
      "timestamp": 1703235910,
      "ems": null
    },
    {
      "latitude": 39.851578,
      "longitude": -7.504259,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 292,
      "squawk": "3261",
      "timestamp": 1703235913,
      "ems": null
    },
    {
      "latitude": 39.852764,
      "longitude": -7.508545,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 290,
      "squawk": "3261",
      "timestamp": 1703235922,
      "ems": null
    },
    {
      "latitude": 39.85405,
      "longitude": -7.513036,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 290,
      "squawk": "3261",
      "timestamp": 1703235931,
      "ems": null
    },
    {
      "latitude": 39.855328,
      "longitude": -7.517456,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 289,
      "squawk": "3261",
      "timestamp": 1703235940,
      "ems": null
    },
    {
      "latitude": 39.856071,
      "longitude": -7.520386,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 288,
      "squawk": "3261",
      "timestamp": 1703235946,
      "ems": null
    },
    {
      "latitude": 39.857208,
      "longitude": -7.524739,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 288,
      "squawk": "3261",
      "timestamp": 1703235955,
      "ems": null
    },
    {
      "latitude": 39.857841,
      "longitude": -7.527588,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 285,
      "squawk": "3261",
      "timestamp": 1703235961,
      "ems": null
    },
    {
      "latitude": 39.858765,
      "longitude": -7.531964,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 285,
      "squawk": "3261",
      "timestamp": 1703235970,
      "ems": null
    },
    {
      "latitude": 39.859131,
      "longitude": -7.533636,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 284,
      "squawk": "3261",
      "timestamp": 1703235974,
      "ems": null
    },
    {
      "latitude": 39.860027,
      "longitude": -7.537964,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 285,
      "squawk": "3261",
      "timestamp": 1703235983,
      "ems": null
    },
    {
      "latitude": 39.860916,
      "longitude": -7.542532,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 284,
      "squawk": "3261",
      "timestamp": 1703235992,
      "ems": null
    },
    {
      "latitude": 39.861752,
      "longitude": -7.546875,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 283,
      "squawk": "3261",
      "timestamp": 1703236001,
      "ems": null
    },
    {
      "latitude": 39.86261,
      "longitude": -7.551727,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 283,
      "squawk": "3261",
      "timestamp": 1703236010,
      "ems": null
    },
    {
      "latitude": 39.863434,
      "longitude": -7.556444,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 282,
      "squawk": "3261",
      "timestamp": 1703236019,
      "ems": null
    },
    {
      "latitude": 39.864166,
      "longitude": -7.561281,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 277,
      "squawk": "3261",
      "timestamp": 1703236028,
      "ems": null
    },
    {
      "latitude": 39.864216,
      "longitude": -7.56311,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 269,
      "squawk": "3261",
      "timestamp": 1703236031,
      "ems": null
    },
    {
      "latitude": 39.864124,
      "longitude": -7.564514,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 264,
      "squawk": "3261",
      "timestamp": 1703236034,
      "ems": null
    },
    {
      "latitude": 39.8638,
      "longitude": -7.566535,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 257,
      "squawk": "3261",
      "timestamp": 1703236037,
      "ems": null
    },
    {
      "latitude": 39.863388,
      "longitude": -7.568505,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 254,
      "squawk": "3261",
      "timestamp": 1703236040,
      "ems": null
    },
    {
      "latitude": 39.863022,
      "longitude": -7.569998,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 252,
      "squawk": "3261",
      "timestamp": 1703236043,
      "ems": null
    },
    {
      "latitude": 39.862518,
      "longitude": -7.571789,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 248,
      "squawk": "3261",
      "timestamp": 1703236046,
      "ems": null
    },
    {
      "latitude": 39.861752,
      "longitude": -7.573792,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 242,
      "squawk": "3261",
      "timestamp": 1703236049,
      "ems": null
    },
    {
      "latitude": 39.861004,
      "longitude": -7.575378,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 239,
      "squawk": "3261",
      "timestamp": 1703236052,
      "ems": null
    },
    {
      "latitude": 39.860229,
      "longitude": -7.577163,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 239,
      "squawk": "3261",
      "timestamp": 1703236055,
      "ems": null
    },
    {
      "latitude": 39.859497,
      "longitude": -7.578715,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 239,
      "squawk": "3261",
      "timestamp": 1703236058,
      "ems": null
    },
    {
      "latitude": 39.858677,
      "longitude": -7.580566,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 239,
      "squawk": "3261",
      "timestamp": 1703236061,
      "ems": null
    },
    {
      "latitude": 39.858032,
      "longitude": -7.581999,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 239,
      "squawk": "3261",
      "timestamp": 1703236065,
      "ems": null
    },
    {
      "latitude": 39.857025,
      "longitude": -7.584268,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 241,
      "squawk": "3261",
      "timestamp": 1703236068,
      "ems": null
    },
    {
      "latitude": 39.856491,
      "longitude": -7.585754,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 245,
      "squawk": "3261",
      "timestamp": 1703236071,
      "ems": null
    },
    {
      "latitude": 39.855377,
      "longitude": -7.59006,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 256,
      "squawk": "3261",
      "timestamp": 1703236077,
      "ems": null
    },
    {
      "latitude": 39.855103,
      "longitude": -7.592031,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 259,
      "squawk": "3261",
      "timestamp": 1703236080,
      "ems": null
    },
    {
      "latitude": 39.854954,
      "longitude": -7.59375,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 263,
      "squawk": "3261",
      "timestamp": 1703236083,
      "ems": null
    },
    {
      "latitude": 39.854828,
      "longitude": -7.595792,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 265,
      "squawk": "3261",
      "timestamp": 1703236086,
      "ems": null
    },
    {
      "latitude": 39.854721,
      "longitude": -7.597717,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 265,
      "squawk": "3261",
      "timestamp": 1703236089,
      "ems": null
    },
    {
      "latitude": 39.854599,
      "longitude": -7.599792,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 266,
      "squawk": "3261",
      "timestamp": 1703236092,
      "ems": null
    },
    {
      "latitude": 39.854553,
      "longitude": -7.601882,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 267,
      "squawk": "3261",
      "timestamp": 1703236095,
      "ems": null
    },
    {
      "latitude": 39.854488,
      "longitude": -7.60376,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 267,
      "squawk": "3261",
      "timestamp": 1703236097,
      "ems": null
    },
    {
      "latitude": 39.854397,
      "longitude": -7.60614,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 267,
      "squawk": "3261",
      "timestamp": 1703236101,
      "ems": null
    },
    {
      "latitude": 39.854301,
      "longitude": -7.608521,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 267,
      "squawk": "3261",
      "timestamp": 1703236104,
      "ems": null
    },
    {
      "latitude": 39.854233,
      "longitude": -7.610301,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 267,
      "squawk": "3261",
      "timestamp": 1703236107,
      "ems": null
    },
    {
      "latitude": 39.854187,
      "longitude": -7.612092,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 267,
      "squawk": "3261",
      "timestamp": 1703236109,
      "ems": null
    },
    {
      "latitude": 39.854095,
      "longitude": -7.614779,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 268,
      "squawk": "3261",
      "timestamp": 1703236113,
      "ems": null
    },
    {
      "latitude": 39.853882,
      "longitude": -7.620239,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 265,
      "squawk": "3261",
      "timestamp": 1703236121,
      "ems": null
    },
    {
      "latitude": 39.853603,
      "longitude": -7.62262,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 260,
      "squawk": "3261",
      "timestamp": 1703236125,
      "ems": null
    },
    {
      "latitude": 39.853416,
      "longitude": -7.623596,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 260,
      "squawk": "3261",
      "timestamp": 1703236126,
      "ems": null
    },
    {
      "latitude": 39.852768,
      "longitude": -7.626661,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 253,
      "squawk": "3261",
      "timestamp": 1703236130,
      "ems": null
    },
    {
      "latitude": 39.852348,
      "longitude": -7.628357,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 251,
      "squawk": "3261",
      "timestamp": 1703236133,
      "ems": null
    },
    {
      "latitude": 39.85165,
      "longitude": -7.630798,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 249,
      "squawk": "3261",
      "timestamp": 1703236136,
      "ems": null
    },
    {
      "latitude": 39.851166,
      "longitude": -7.632513,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 249,
      "squawk": "3261",
      "timestamp": 1703236139,
      "ems": null
    },
    {
      "latitude": 39.850479,
      "longitude": -7.634841,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 248,
      "squawk": "3261",
      "timestamp": 1703236142,
      "ems": null
    },
    {
      "latitude": 39.849834,
      "longitude": -7.636719,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 245,
      "squawk": "3261",
      "timestamp": 1703236145,
      "ems": null
    },
    {
      "latitude": 39.849472,
      "longitude": -7.637707,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 244,
      "squawk": "3261",
      "timestamp": 1703236147,
      "ems": null
    },
    {
      "latitude": 39.848465,
      "longitude": -7.640275,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 241,
      "squawk": "3261",
      "timestamp": 1703236151,
      "ems": null
    },
    {
      "latitude": 39.847736,
      "longitude": -7.642029,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 241,
      "squawk": "3261",
      "timestamp": 1703236154,
      "ems": null
    },
    {
      "latitude": 39.846909,
      "longitude": -7.643977,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 241,
      "squawk": "3261",
      "timestamp": 1703236157,
      "ems": null
    },
    {
      "latitude": 39.845875,
      "longitude": -7.646301,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 240,
      "squawk": "3261",
      "timestamp": 1703236161,
      "ems": null
    },
    {
      "latitude": 39.845085,
      "longitude": -7.648193,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 240,
      "squawk": "3261",
      "timestamp": 1703236163,
      "ems": null
    },
    {
      "latitude": 39.844208,
      "longitude": -7.650126,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 239,
      "squawk": "3261",
      "timestamp": 1703236166,
      "ems": null
    },
    {
      "latitude": 39.843315,
      "longitude": -7.652039,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 239,
      "squawk": "3261",
      "timestamp": 1703236170,
      "ems": null
    },
    {
      "latitude": 39.842514,
      "longitude": -7.653829,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 239,
      "squawk": "3261",
      "timestamp": 1703236172,
      "ems": null
    },
    {
      "latitude": 39.84169,
      "longitude": -7.655679,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 239,
      "squawk": "3261",
      "timestamp": 1703236175,
      "ems": null
    },
    {
      "latitude": 39.839172,
      "longitude": -7.661411,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 240,
      "squawk": "3261",
      "timestamp": 1703236185,
      "ems": null
    },
    {
      "latitude": 39.836517,
      "longitude": -7.666785,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 234,
      "squawk": "3261",
      "timestamp": 1703236194,
      "ems": null
    },
    {
      "latitude": 39.835587,
      "longitude": -7.668396,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 233,
      "squawk": "3261",
      "timestamp": 1703236197,
      "ems": null
    },
    {
      "latitude": 39.834915,
      "longitude": -7.669591,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 232,
      "squawk": "3261",
      "timestamp": 1703236199,
      "ems": null
    },
    {
      "latitude": 39.833588,
      "longitude": -7.671875,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 233,
      "squawk": "3261",
      "timestamp": 1703236203,
      "ems": null
    },
    {
      "latitude": 39.832657,
      "longitude": -7.673401,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 233,
      "squawk": "3261",
      "timestamp": 1703236206,
      "ems": null
    },
    {
      "latitude": 39.832031,
      "longitude": -7.674607,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 235,
      "squawk": "3261",
      "timestamp": 1703236208,
      "ems": null
    },
    {
      "latitude": 39.83107,
      "longitude": -7.676458,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 235,
      "squawk": "3261",
      "timestamp": 1703236211,
      "ems": null
    },
    {
      "latitude": 39.82814,
      "longitude": -7.682429,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 238,
      "squawk": "3261",
      "timestamp": 1703236221,
      "ems": null
    },
    {
      "latitude": 39.827545,
      "longitude": -7.683743,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 239,
      "squawk": "3261",
      "timestamp": 1703236223,
      "ems": null
    },
    {
      "latitude": 39.826584,
      "longitude": -7.685952,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 241,
      "squawk": "3261",
      "timestamp": 1703236227,
      "ems": null
    },
    {
      "latitude": 39.825764,
      "longitude": -7.687866,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 241,
      "squawk": "3261",
      "timestamp": 1703236230,
      "ems": null
    },
    {
      "latitude": 39.82502,
      "longitude": -7.689758,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 242,
      "squawk": "3261",
      "timestamp": 1703236233,
      "ems": null
    },
    {
      "latitude": 39.824432,
      "longitude": -7.691206,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 243,
      "squawk": "3261",
      "timestamp": 1703236235,
      "ems": null
    },
    {
      "latitude": 39.823578,
      "longitude": -7.693481,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 243,
      "squawk": "3261",
      "timestamp": 1703236239,
      "ems": null
    },
    {
      "latitude": 39.822784,
      "longitude": -7.695496,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 243,
      "squawk": "3261",
      "timestamp": 1703236242,
      "ems": null
    },
    {
      "latitude": 39.822098,
      "longitude": -7.697356,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 243,
      "squawk": "3261",
      "timestamp": 1703236245,
      "ems": null
    },
    {
      "latitude": 39.821503,
      "longitude": -7.698908,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 243,
      "squawk": "3261",
      "timestamp": 1703236247,
      "ems": null
    },
    {
      "latitude": 39.819122,
      "longitude": -7.705118,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 243,
      "squawk": "3261",
      "timestamp": 1703236257,
      "ems": null
    },
    {
      "latitude": 39.817154,
      "longitude": -7.710551,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 245,
      "squawk": "3261",
      "timestamp": 1703236265,
      "ems": null
    },
    {
      "latitude": 39.814774,
      "longitude": -7.716702,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 240,
      "squawk": "3261",
      "timestamp": 1703236275,
      "ems": null
    },
    {
      "latitude": 39.813103,
      "longitude": -7.720276,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 238,
      "squawk": "3261",
      "timestamp": 1703236281,
      "ems": null
    },
    {
      "latitude": 39.812313,
      "longitude": -7.722046,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 238,
      "squawk": "3261",
      "timestamp": 1703236283,
      "ems": null
    },
    {
      "latitude": 39.81134,
      "longitude": -7.724105,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 238,
      "squawk": "3261",
      "timestamp": 1703236287,
      "ems": null
    },
    {
      "latitude": 39.810471,
      "longitude": -7.725956,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 238,
      "squawk": "3261",
      "timestamp": 1703236290,
      "ems": null
    },
    {
      "latitude": 39.809692,
      "longitude": -7.727568,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 238,
      "squawk": "3261",
      "timestamp": 1703236292,
      "ems": null
    },
    {
      "latitude": 39.80864,
      "longitude": -7.729837,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 238,
      "squawk": "3261",
      "timestamp": 1703236296,
      "ems": null
    },
    {
      "latitude": 39.807816,
      "longitude": -7.731509,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 238,
      "squawk": "3261",
      "timestamp": 1703236299,
      "ems": null
    },
    {
      "latitude": 39.807423,
      "longitude": -7.732422,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 237,
      "squawk": "3261",
      "timestamp": 1703236302,
      "ems": null
    },
    {
      "latitude": 39.804306,
      "longitude": -7.738586,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 236,
      "squawk": "3261",
      "timestamp": 1703236311,
      "ems": null
    },
    {
      "latitude": 39.801792,
      "longitude": -7.743347,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 234,
      "squawk": "3261",
      "timestamp": 1703236319,
      "ems": null
    },
    {
      "latitude": 39.799255,
      "longitude": -7.747989,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 235,
      "squawk": "3261",
      "timestamp": 1703236328,
      "ems": null
    },
    {
      "latitude": 39.796902,
      "longitude": -7.752625,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 237,
      "squawk": "3261",
      "timestamp": 1703236336,
      "ems": null
    },
    {
      "latitude": 39.794586,
      "longitude": -7.757781,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 240,
      "squawk": "3261",
      "timestamp": 1703236344,
      "ems": null
    },
    {
      "latitude": 39.793671,
      "longitude": -7.75993,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 240,
      "squawk": "3261",
      "timestamp": 1703236348,
      "ems": null
    },
    {
      "latitude": 39.792892,
      "longitude": -7.761781,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 240,
      "squawk": "3261",
      "timestamp": 1703236351,
      "ems": null
    },
    {
      "latitude": 39.792206,
      "longitude": -7.763393,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 241,
      "squawk": "3261",
      "timestamp": 1703236354,
      "ems": null
    },
    {
      "latitude": 39.791409,
      "longitude": -7.765381,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 242,
      "squawk": "3261",
      "timestamp": 1703236357,
      "ems": null
    },
    {
      "latitude": 39.790665,
      "longitude": -7.767212,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 242,
      "squawk": "3261",
      "timestamp": 1703236360,
      "ems": null
    },
    {
      "latitude": 39.789921,
      "longitude": -7.769104,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 243,
      "squawk": "3261",
      "timestamp": 1703236363,
      "ems": null
    },
    {
      "latitude": 39.788498,
      "longitude": -7.772887,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 244,
      "squawk": "3261",
      "timestamp": 1703236369,
      "ems": null
    },
    {
      "latitude": 39.786392,
      "longitude": -7.77838,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 242,
      "squawk": "3261",
      "timestamp": 1703236378,
      "ems": null
    },
    {
      "latitude": 39.783966,
      "longitude": -7.784291,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 241,
      "squawk": "3261",
      "timestamp": 1703236387,
      "ems": null
    },
    {
      "latitude": 39.781769,
      "longitude": -7.789247,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 239,
      "squawk": "3261",
      "timestamp": 1703236396,
      "ems": null
    },
    {
      "latitude": 39.780888,
      "longitude": -7.791077,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 238,
      "squawk": "3261",
      "timestamp": 1703236399,
      "ems": null
    },
    {
      "latitude": 39.779938,
      "longitude": -7.793068,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 237,
      "squawk": "3261",
      "timestamp": 1703236402,
      "ems": null
    },
    {
      "latitude": 39.778141,
      "longitude": -7.796753,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 237,
      "squawk": "3261",
      "timestamp": 1703236409,
      "ems": null
    },
    {
      "latitude": 39.777351,
      "longitude": -7.79834,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 236,
      "squawk": "3261",
      "timestamp": 1703236411,
      "ems": null
    },
    {
      "latitude": 39.776512,
      "longitude": -7.799927,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 234,
      "squawk": "3261",
      "timestamp": 1703236415,
      "ems": null
    },
    {
      "latitude": 39.775581,
      "longitude": -7.801575,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 234,
      "squawk": "3261",
      "timestamp": 1703236417,
      "ems": null
    },
    {
      "latitude": 39.773022,
      "longitude": -7.806946,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 241,
      "squawk": "3261",
      "timestamp": 1703236426,
      "ems": null
    },
    {
      "latitude": 39.772232,
      "longitude": -7.809021,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 245,
      "squawk": "3261",
      "timestamp": 1703236430,
      "ems": null
    },
    {
      "latitude": 39.771626,
      "longitude": -7.810974,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 249,
      "squawk": "3261",
      "timestamp": 1703236433,
      "ems": null
    },
    {
      "latitude": 39.771194,
      "longitude": -7.812832,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 254,
      "squawk": "3261",
      "timestamp": 1703236436,
      "ems": null
    },
    {
      "latitude": 39.770882,
      "longitude": -7.814514,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 256,
      "squawk": "3261",
      "timestamp": 1703236438,
      "ems": null
    },
    {
      "latitude": 39.770462,
      "longitude": -7.816772,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 256,
      "squawk": "3261",
      "timestamp": 1703236442,
      "ems": null
    },
    {
      "latitude": 39.77005,
      "longitude": -7.818743,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 255,
      "squawk": "3261",
      "timestamp": 1703236445,
      "ems": null
    },
    {
      "latitude": 39.769638,
      "longitude": -7.820713,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 254,
      "squawk": "3261",
      "timestamp": 1703236448,
      "ems": null
    },
    {
      "latitude": 39.769203,
      "longitude": -7.822632,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 253,
      "squawk": "3261",
      "timestamp": 1703236451,
      "ems": null
    },
    {
      "latitude": 39.768738,
      "longitude": -7.824829,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 255,
      "squawk": "3261",
      "timestamp": 1703236454,
      "ems": null
    },
    {
      "latitude": 39.768414,
      "longitude": -7.826721,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 257,
      "squawk": "3261",
      "timestamp": 1703236457,
      "ems": null
    },
    {
      "latitude": 39.768082,
      "longitude": -7.828893,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 259,
      "squawk": "3261",
      "timestamp": 1703236460,
      "ems": null
    },
    {
      "latitude": 39.767853,
      "longitude": -7.830811,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 263,
      "squawk": "3261",
      "timestamp": 1703236463,
      "ems": null
    },
    {
      "latitude": 39.767715,
      "longitude": -7.832703,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 265,
      "squawk": "3261",
      "timestamp": 1703236466,
      "ems": null
    },
    {
      "latitude": 39.76762,
      "longitude": -7.8349,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 265,
      "squawk": "3261",
      "timestamp": 1703236469,
      "ems": null
    },
    {
      "latitude": 39.767487,
      "longitude": -7.836834,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 264,
      "squawk": "3261",
      "timestamp": 1703236472,
      "ems": null
    },
    {
      "latitude": 39.767342,
      "longitude": -7.838928,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 263,
      "squawk": "3261",
      "timestamp": 1703236475,
      "ems": null
    },
    {
      "latitude": 39.767155,
      "longitude": -7.841125,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 263,
      "squawk": "3261",
      "timestamp": 1703236478,
      "ems": null
    },
    {
      "latitude": 39.767017,
      "longitude": -7.843018,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 264,
      "squawk": "3261",
      "timestamp": 1703236481,
      "ems": null
    },
    {
      "latitude": 39.766876,
      "longitude": -7.845215,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 264,
      "squawk": "3261",
      "timestamp": 1703236484,
      "ems": null
    },
    {
      "latitude": 39.766739,
      "longitude": -7.846924,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 265,
      "squawk": "3261",
      "timestamp": 1703236487,
      "ems": null
    },
    {
      "latitude": 39.766598,
      "longitude": -7.848938,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 265,
      "squawk": "3261",
      "timestamp": 1703236490,
      "ems": null
    },
    {
      "latitude": 39.766251,
      "longitude": -7.855045,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 265,
      "squawk": "3261",
      "timestamp": 1703236499,
      "ems": null
    },
    {
      "latitude": 39.7659,
      "longitude": -7.860962,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 265,
      "squawk": "3261",
      "timestamp": 1703236508,
      "ems": null
    },
    {
      "latitude": 39.765572,
      "longitude": -7.867188,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 266,
      "squawk": "3261",
      "timestamp": 1703236517,
      "ems": null
    },
    {
      "latitude": 39.765427,
      "longitude": -7.871346,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 267,
      "squawk": "3261",
      "timestamp": 1703236523,
      "ems": null
    },
    {
      "latitude": 39.765198,
      "longitude": -7.877316,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 266,
      "squawk": "3261",
      "timestamp": 1703236532,
      "ems": null
    },
    {
      "latitude": 39.764874,
      "longitude": -7.883362,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 267,
      "squawk": "3261",
      "timestamp": 1703236542,
      "ems": null
    },
    {
      "latitude": 39.764828,
      "longitude": -7.889404,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 269,
      "squawk": "3261",
      "timestamp": 1703236551,
      "ems": null
    },
    {
      "latitude": 39.764782,
      "longitude": -7.895264,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 270,
      "squawk": "3261",
      "timestamp": 1703236560,
      "ems": null
    },
    {
      "latitude": 39.764782,
      "longitude": -7.897278,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 270,
      "squawk": "3261",
      "timestamp": 1703236563,
      "ems": null
    },
    {
      "latitude": 39.764828,
      "longitude": -7.899414,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 270,
      "squawk": "3261",
      "timestamp": 1703236566,
      "ems": null
    },
    {
      "latitude": 39.764832,
      "longitude": -7.900961,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 271,
      "squawk": "3261",
      "timestamp": 1703236568,
      "ems": null
    },
    {
      "latitude": 39.765015,
      "longitude": -7.907589,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 273,
      "squawk": "3261",
      "timestamp": 1703236578,
      "ems": null
    },
    {
      "latitude": 39.765152,
      "longitude": -7.909619,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 274,
      "squawk": "3261",
      "timestamp": 1703236581,
      "ems": null
    },
    {
      "latitude": 39.765244,
      "longitude": -7.91141,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 275,
      "squawk": "3261",
      "timestamp": 1703236583,
      "ems": null
    },
    {
      "latitude": 39.765427,
      "longitude": -7.913679,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 276,
      "squawk": "3261",
      "timestamp": 1703236587,
      "ems": null
    },
    {
      "latitude": 39.76561,
      "longitude": -7.915709,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 276,
      "squawk": "3261",
      "timestamp": 1703236590,
      "ems": null
    },
    {
      "latitude": 39.765759,
      "longitude": -7.917664,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 275,
      "squawk": "3261",
      "timestamp": 1703236593,
      "ems": null
    },
    {
      "latitude": 39.765884,
      "longitude": -7.91971,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 275,
      "squawk": "3261",
      "timestamp": 1703236596,
      "ems": null
    },
    {
      "latitude": 39.766224,
      "longitude": -7.925659,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 274,
      "squawk": "3261",
      "timestamp": 1703236605,
      "ems": null
    },
    {
      "latitude": 39.766754,
      "longitude": -7.931651,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 277,
      "squawk": "3261",
      "timestamp": 1703236614,
      "ems": null
    },
    {
      "latitude": 39.767487,
      "longitude": -7.937682,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 279,
      "squawk": "3261",
      "timestamp": 1703236623,
      "ems": null
    },
    {
      "latitude": 39.768085,
      "longitude": -7.943481,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 275,
      "squawk": "3261",
      "timestamp": 1703236632,
      "ems": null
    },
    {
      "latitude": 39.768356,
      "longitude": -7.949504,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 272,
      "squawk": "3261",
      "timestamp": 1703236641,
      "ems": null
    },
    {
      "latitude": 39.768448,
      "longitude": -7.951415,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 272,
      "squawk": "3261",
      "timestamp": 1703236644,
      "ems": null
    },
    {
      "latitude": 39.768494,
      "longitude": -7.95231,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 272,
      "squawk": "3261",
      "timestamp": 1703236646,
      "ems": null
    },
    {
      "latitude": 39.768551,
      "longitude": -7.955261,
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
      "heading": 271,
      "squawk": "3261",
      "timestamp": 1703236650,
      "ems": null
    },
    {
      "latitude": 39.7686,
      "longitude": -7.957031,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 272,
      "squawk": "3261",
      "timestamp": 1703236653,
      "ems": null
    },
    {
      "latitude": 39.768677,
      "longitude": -7.958998,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 272,
      "squawk": "3261",
      "timestamp": 1703236656,
      "ems": null
    },
    {
      "latitude": 39.768677,
      "longitude": -7.964969,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 268,
      "squawk": "3261",
      "timestamp": 1703236665,
      "ems": null
    },
    {
      "latitude": 39.768631,
      "longitude": -7.966939,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 267,
      "squawk": "3261",
      "timestamp": 1703236668,
      "ems": null
    },
    {
      "latitude": 39.7686,
      "longitude": -7.968933,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 267,
      "squawk": "3261",
      "timestamp": 1703236672,
      "ems": null
    },
    {
      "latitude": 39.768505,
      "longitude": -7.97467,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 270,
      "squawk": "3261",
      "timestamp": 1703236680,
      "ems": null
    },
    {
      "latitude": 39.768631,
      "longitude": -7.980612,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 272,
      "squawk": "3261",
      "timestamp": 1703236689,
      "ems": null
    },
    {
      "latitude": 39.768692,
      "longitude": -7.986572,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "3261",
      "timestamp": 1703236699,
      "ems": null
    },
    {
      "latitude": 39.768723,
      "longitude": -7.992255,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "3261",
      "timestamp": 1703236708,
      "ems": null
    },
    {
      "latitude": 39.768768,
      "longitude": -7.997868,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "3261",
      "timestamp": 1703236717,
      "ems": null
    },
    {
      "latitude": 39.768692,
      "longitude": -8.003845,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 267,
      "squawk": "3261",
      "timestamp": 1703236726,
      "ems": null
    },
    {
      "latitude": 39.768494,
      "longitude": -8.00963,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 267,
      "squawk": "3261",
      "timestamp": 1703236735,
      "ems": null
    },
    {
      "latitude": 39.768356,
      "longitude": -8.015482,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 269,
      "squawk": "3261",
      "timestamp": 1703236744,
      "ems": null
    },
    {
      "latitude": 39.768368,
      "longitude": -8.02124,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 270,
      "squawk": "3261",
      "timestamp": 1703236753,
      "ems": null
    },
    {
      "latitude": 39.768356,
      "longitude": -8.027124,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 270,
      "squawk": "3261",
      "timestamp": 1703236762,
      "ems": null
    },
    {
      "latitude": 39.768414,
      "longitude": -8.032898,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 270,
      "squawk": "3261",
      "timestamp": 1703236771,
      "ems": null
    },
    {
      "latitude": 39.768402,
      "longitude": -8.038947,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 270,
      "squawk": "3261",
      "timestamp": 1703236781,
      "ems": null
    },
    {
      "latitude": 39.768272,
      "longitude": -8.0448,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 266,
      "squawk": "3261",
      "timestamp": 1703236790,
      "ems": null
    },
    {
      "latitude": 39.768173,
      "longitude": -8.04653,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 265,
      "squawk": "3261",
      "timestamp": 1703236792,
      "ems": null
    },
    {
      "latitude": 39.768082,
      "longitude": -8.048262,
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
      "heading": 265,
      "squawk": "3261",
      "timestamp": 1703236795,
      "ems": null
    },
    {
      "latitude": 39.767944,
      "longitude": -8.050232,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 264,
      "squawk": "3261",
      "timestamp": 1703236798,
      "ems": null
    },
    {
      "latitude": 39.767807,
      "longitude": -8.052142,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 264,
      "squawk": "3261",
      "timestamp": 1703236801,
      "ems": null
    },
    {
      "latitude": 39.76767,
      "longitude": -8.054113,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 264,
      "squawk": "3261",
      "timestamp": 1703236805,
      "ems": null
    },
    {
      "latitude": 39.767532,
      "longitude": -8.055904,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 264,
      "squawk": "3261",
      "timestamp": 1703236807,
      "ems": null
    },
    {
      "latitude": 39.767349,
      "longitude": -8.058054,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 264,
      "squawk": "3261",
      "timestamp": 1703236811,
      "ems": null
    },
    {
      "latitude": 39.767212,
      "longitude": -8.059964,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 264,
      "squawk": "3261",
      "timestamp": 1703236814,
      "ems": null
    },
    {
      "latitude": 39.76683,
      "longitude": -8.065735,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 265,
      "squawk": "3261",
      "timestamp": 1703236823,
      "ems": null
    },
    {
      "latitude": 39.766457,
      "longitude": -8.07135,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "squawk": "3261",
      "timestamp": 1703236832,
      "ems": null
    },
    {
      "latitude": 39.766159,
      "longitude": -8.07722,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 267,
      "squawk": "3261",
      "timestamp": 1703236841,
      "ems": null
    },
    {
      "latitude": 39.766068,
      "longitude": -8.083191,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 268,
      "squawk": "3261",
      "timestamp": 1703236850,
      "ems": null
    },
    {
      "latitude": 39.765991,
      "longitude": -8.089172,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 270,
      "squawk": "3261",
      "timestamp": 1703236859,
      "ems": null
    },
    {
      "latitude": 39.765991,
      "longitude": -8.09491,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 270,
      "squawk": "3261",
      "timestamp": 1703236868,
      "ems": null
    },
    {
      "latitude": 39.765839,
      "longitude": -8.100984,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 264,
      "squawk": "3261",
      "timestamp": 1703236877,
      "ems": null
    },
    {
      "latitude": 39.76561,
      "longitude": -8.103133,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 262,
      "squawk": "3261",
      "timestamp": 1703236880,
      "ems": null
    },
    {
      "latitude": 39.765388,
      "longitude": -8.105225,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 261,
      "squawk": "3261",
      "timestamp": 1703236883,
      "ems": null
    },
    {
      "latitude": 39.765152,
      "longitude": -8.107373,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 261,
      "squawk": "3261",
      "timestamp": 1703236886,
      "ems": null
    },
    {
      "latitude": 39.764923,
      "longitude": -8.109104,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 260,
      "squawk": "3261",
      "timestamp": 1703236889,
      "ems": null
    },
    {
      "latitude": 39.764603,
      "longitude": -8.111074,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 258,
      "squawk": "3261",
      "timestamp": 1703236892,
      "ems": null
    },
    {
      "latitude": 39.764175,
      "longitude": -8.113403,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 255,
      "squawk": "3261",
      "timestamp": 1703236896,
      "ems": null
    },
    {
      "latitude": 39.76371,
      "longitude": -8.115356,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 252,
      "squawk": "3261",
      "timestamp": 1703236899,
      "ems": null
    },
    {
      "latitude": 39.763199,
      "longitude": -8.117249,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 248,
      "squawk": "3261",
      "timestamp": 1703236902,
      "ems": null
    },
    {
      "latitude": 39.762634,
      "longitude": -8.118957,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 246,
      "squawk": "3261",
      "timestamp": 1703236904,
      "ems": null
    },
    {
      "latitude": 39.761856,
      "longitude": -8.121106,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 245,
      "squawk": "3261",
      "timestamp": 1703236908,
      "ems": null
    },
    {
      "latitude": 39.761196,
      "longitude": -8.122986,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 245,
      "squawk": "3261",
      "timestamp": 1703236911,
      "ems": null
    },
    {
      "latitude": 39.760544,
      "longitude": -8.124878,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 245,
      "squawk": "3261",
      "timestamp": 1703236914,
      "ems": null
    },
    {
      "latitude": 39.759933,
      "longitude": -8.126658,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 246,
      "squawk": "3261",
      "timestamp": 1703236917,
      "ems": null
    },
    {
      "latitude": 39.759335,
      "longitude": -8.128479,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 247,
      "squawk": "3261",
      "timestamp": 1703236920,
      "ems": null
    },
    {
      "latitude": 39.758778,
      "longitude": -8.13031,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 247,
      "squawk": "3261",
      "timestamp": 1703236923,
      "ems": null
    },
    {
      "latitude": 39.758171,
      "longitude": -8.132202,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 246,
      "squawk": "3261",
      "timestamp": 1703236926,
      "ems": null
    },
    {
      "latitude": 39.757507,
      "longitude": -8.134063,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 245,
      "squawk": "3261",
      "timestamp": 1703236929,
      "ems": null
    },
    {
      "latitude": 39.755585,
      "longitude": -8.139556,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 246,
      "squawk": "3261",
      "timestamp": 1703236938,
      "ems": null
    },
    {
      "latitude": 39.753609,
      "longitude": -8.145264,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 245,
      "squawk": "3261",
      "timestamp": 1703236947,
      "ems": null
    },
    {
      "latitude": 39.75174,
      "longitude": -8.150184,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 242,
      "squawk": "3261",
      "timestamp": 1703236956,
      "ems": null
    },
    {
      "latitude": 39.751095,
      "longitude": -8.151611,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 240,
      "squawk": "3261",
      "timestamp": 1703236959,
      "ems": null
    },
    {
      "latitude": 39.750046,
      "longitude": -8.154005,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 239,
      "squawk": "3261",
      "timestamp": 1703236962,
      "ems": null
    },
    {
      "latitude": 39.749279,
      "longitude": -8.155701,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 238,
      "squawk": "3261",
      "timestamp": 1703236965,
      "ems": null
    },
    {
      "latitude": 39.748581,
      "longitude": -8.15711,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 238,
      "squawk": "3261",
      "timestamp": 1703236967,
      "ems": null
    },
    {
      "latitude": 39.747849,
      "longitude": -8.158603,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 237,
      "squawk": "3261",
      "timestamp": 1703236971,
      "ems": null
    },
    {
      "latitude": 39.746674,
      "longitude": -8.16095,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 237,
      "squawk": "3261",
      "timestamp": 1703236974,
      "ems": null
    },
    {
      "latitude": 39.745834,
      "longitude": -8.162659,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 237,
      "squawk": "3261",
      "timestamp": 1703236977,
      "ems": null
    },
    {
      "latitude": 39.745232,
      "longitude": -8.16394,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 238,
      "squawk": "3261",
      "timestamp": 1703236979,
      "ems": null
    },
    {
      "latitude": 39.744141,
      "longitude": -8.166185,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 237,
      "squawk": "3261",
      "timestamp": 1703236983,
      "ems": null
    },
    {
      "latitude": 39.742447,
      "longitude": -8.16935,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 233,
      "squawk": "3261",
      "timestamp": 1703236989,
      "ems": null
    },
    {
      "latitude": 39.741459,
      "longitude": -8.170959,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 230,
      "squawk": "3261",
      "timestamp": 1703236992,
      "ems": null
    },
    {
      "latitude": 39.740433,
      "longitude": -8.172455,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 228,
      "squawk": "3261",
      "timestamp": 1703236995,
      "ems": null
    },
    {
      "latitude": 39.739426,
      "longitude": -8.173828,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 225,
      "squawk": "3261",
      "timestamp": 1703236998,
      "ems": null
    },
    {
      "latitude": 39.738247,
      "longitude": -8.175232,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 222,
      "squawk": "3261",
      "timestamp": 1703237001,
      "ems": null
    },
    {
      "latitude": 39.737228,
      "longitude": -8.176395,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 221,
      "squawk": "3261",
      "timestamp": 1703237004,
      "ems": null
    },
    {
      "latitude": 39.736038,
      "longitude": -8.177769,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 221,
      "squawk": "3261",
      "timestamp": 1703237007,
      "ems": null
    },
    {
      "latitude": 39.735077,
      "longitude": -8.178904,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 222,
      "squawk": "3261",
      "timestamp": 1703237010,
      "ems": null
    },
    {
      "latitude": 39.73373,
      "longitude": -8.180481,
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
      "heading": 222,
      "squawk": "3261",
      "timestamp": 1703237013,
      "ems": null
    },
    {
      "latitude": 39.732567,
      "longitude": -8.181885,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 222,
      "squawk": "3261",
      "timestamp": 1703237016,
      "ems": null
    },
    {
      "latitude": 39.731636,
      "longitude": -8.182983,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 222,
      "squawk": "3261",
      "timestamp": 1703237019,
      "ems": null
    },
    {
      "latitude": 39.730499,
      "longitude": -8.184337,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 222,
      "squawk": "3261",
      "timestamp": 1703237022,
      "ems": null
    },
    {
      "latitude": 39.729542,
      "longitude": -8.185486,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 222,
      "squawk": "3261",
      "timestamp": 1703237025,
      "ems": null
    },
    {
      "latitude": 39.727112,
      "longitude": -8.188517,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 224,
      "squawk": "3261",
      "timestamp": 1703237031,
      "ems": null
    },
    {
      "latitude": 39.725967,
      "longitude": -8.190009,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 226,
      "squawk": "3261",
      "timestamp": 1703237034,
      "ems": null
    },
    {
      "latitude": 39.72496,
      "longitude": -8.191442,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 227,
      "squawk": "3261",
      "timestamp": 1703237037,
      "ems": null
    },
    {
      "latitude": 39.721939,
      "longitude": -8.195621,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 225,
      "squawk": "3261",
      "timestamp": 1703237047,
      "ems": null
    },
    {
      "latitude": 39.718597,
      "longitude": -8.199921,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 225,
      "squawk": "3261",
      "timestamp": 1703237056,
      "ems": null
    },
    {
      "latitude": 39.715389,
      "longitude": -8.204102,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 224,
      "squawk": "3261",
      "timestamp": 1703237065,
      "ems": null
    },
    {
      "latitude": 39.712097,
      "longitude": -8.208041,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 221,
      "squawk": "3261",
      "timestamp": 1703237073,
      "ems": null
    },
    {
      "latitude": 39.71109,
      "longitude": -8.209175,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 220,
      "squawk": "3261",
      "timestamp": 1703237076,
      "ems": null
    },
    {
      "latitude": 39.709763,
      "longitude": -8.210608,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 220,
      "squawk": "3261",
      "timestamp": 1703237079,
      "ems": null
    },
    {
      "latitude": 39.707756,
      "longitude": -8.21283,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 220,
      "squawk": "3261",
      "timestamp": 1703237085,
      "ems": null
    },
    {
      "latitude": 39.706127,
      "longitude": -8.214661,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 219,
      "squawk": "3261",
      "timestamp": 1703237089,
      "ems": null
    },
    {
      "latitude": 39.705002,
      "longitude": -8.215863,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 219,
      "squawk": "3261",
      "timestamp": 1703237092,
      "ems": null
    },
    {
      "latitude": 39.701378,
      "longitude": -8.219788,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 220,
      "squawk": "3261",
      "timestamp": 1703237101,
      "ems": null
    },
    {
      "latitude": 39.699005,
      "longitude": -8.222168,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 214,
      "squawk": "3261",
      "timestamp": 1703237107,
      "ems": null
    },
    {
      "latitude": 39.698166,
      "longitude": -8.2229,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 213,
      "squawk": "3261",
      "timestamp": 1703237109,
      "ems": null
    },
    {
      "latitude": 39.696442,
      "longitude": -8.224281,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "3261",
      "timestamp": 1703237113,
      "ems": null
    },
    {
      "latitude": 39.695465,
      "longitude": -8.225037,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 212,
      "squawk": "3261",
      "timestamp": 1703237115,
      "ems": null
    },
    {
      "latitude": 39.692871,
      "longitude": -8.227804,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 225,
      "squawk": "3261",
      "timestamp": 1703237122,
      "ems": null
    },
    {
      "latitude": 39.692047,
      "longitude": -8.228998,
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
      "heading": 228,
      "squawk": "3261",
      "timestamp": 1703237125,
      "ems": null
    },
    {
      "latitude": 39.690948,
      "longitude": -8.23079,
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
      "heading": 232,
      "squawk": "3261",
      "timestamp": 1703237128,
      "ems": null
    },
    {
      "latitude": 39.690308,
      "longitude": -8.232043,
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
      "heading": 235,
      "squawk": "3261",
      "timestamp": 1703237131,
      "ems": null
    },
    {
      "latitude": 39.689438,
      "longitude": -8.233954,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 241,
      "squawk": "3261",
      "timestamp": 1703237134,
      "ems": null
    },
    {
      "latitude": 39.688751,
      "longitude": -8.235626,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 242,
      "squawk": "3261",
      "timestamp": 1703237137,
      "ems": null
    },
    {
      "latitude": 39.688156,
      "longitude": -8.237119,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 242,
      "squawk": "3261",
      "timestamp": 1703237140,
      "ems": null
    },
    {
      "latitude": 39.687366,
      "longitude": -8.239014,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 242,
      "squawk": "3261",
      "timestamp": 1703237143,
      "ems": null
    },
    {
      "latitude": 39.686874,
      "longitude": -8.240224,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 242,
      "squawk": "3261",
      "timestamp": 1703237146,
      "ems": null
    },
    {
      "latitude": 39.68605,
      "longitude": -8.242373,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 242,
      "squawk": "3261",
      "timestamp": 1703237149,
      "ems": null
    },
    {
      "latitude": 39.685364,
      "longitude": -8.244045,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 243,
      "squawk": "3261",
      "timestamp": 1703237152,
      "ems": null
    },
    {
      "latitude": 39.684723,
      "longitude": -8.245776,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 243,
      "squawk": "3261",
      "timestamp": 1703237155,
      "ems": null
    },
    {
      "latitude": 39.684013,
      "longitude": -8.247559,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 243,
      "squawk": "3261",
      "timestamp": 1703237158,
      "ems": null
    },
    {
      "latitude": 39.681965,
      "longitude": -8.252686,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 242,
      "squawk": "3261",
      "timestamp": 1703237167,
      "ems": null
    },
    {
      "latitude": 39.679916,
      "longitude": -8.257659,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 241,
      "squawk": "3261",
      "timestamp": 1703237176,
      "ems": null
    },
    {
      "latitude": 39.677628,
      "longitude": -8.263032,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 240,
      "squawk": "3261",
      "timestamp": 1703237185,
      "ems": null
    },
    {
      "latitude": 39.675354,
      "longitude": -8.268188,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 239,
      "squawk": "3261",
      "timestamp": 1703237195,
      "ems": null
    },
    {
      "latitude": 39.673004,
      "longitude": -8.273302,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 239,
      "squawk": "3261",
      "timestamp": 1703237204,
      "ems": null
    },
    {
      "latitude": 39.670715,
      "longitude": -8.278437,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 239,
      "squawk": "3261",
      "timestamp": 1703237213,
      "ems": null
    },
    {
      "latitude": 39.668465,
      "longitude": -8.283203,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 238,
      "squawk": "3261",
      "timestamp": 1703237222,
      "ems": null
    },
    {
      "latitude": 39.665951,
      "longitude": -8.288391,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 237,
      "squawk": "3261",
      "timestamp": 1703237231,
      "ems": null
    },
    {
      "latitude": 39.66423,
      "longitude": -8.291626,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 234,
      "squawk": "3261",
      "timestamp": 1703237237,
      "ems": null
    },
    {
      "latitude": 39.663345,
      "longitude": -8.293213,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 235,
      "squawk": "3261",
      "timestamp": 1703237240,
      "ems": null
    },
    {
      "latitude": 39.66069,
      "longitude": -8.298141,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 235,
      "squawk": "3261",
      "timestamp": 1703237249,
      "ems": null
    },
    {
      "latitude": 39.658081,
      "longitude": -8.302917,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 234,
      "squawk": "3261",
      "timestamp": 1703237258,
      "ems": null
    },
    {
      "latitude": 39.65538,
      "longitude": -8.307754,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 233,
      "squawk": "3261",
      "timestamp": 1703237267,
      "ems": null
    },
    {
      "latitude": 39.652824,
      "longitude": -8.312378,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 235,
      "squawk": "3261",
      "timestamp": 1703237276,
      "ems": null
    },
    {
      "latitude": 39.651382,
      "longitude": -8.315491,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 242,
      "squawk": "3261",
      "timestamp": 1703237282,
      "ems": null
    },
    {
      "latitude": 39.650665,
      "longitude": -8.317725,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 248,
      "squawk": "3261",
      "timestamp": 1703237285,
      "ems": null
    },
    {
      "latitude": 39.650208,
      "longitude": -8.319576,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 254,
      "squawk": "3261",
      "timestamp": 1703237288,
      "ems": null
    },
    {
      "latitude": 39.649937,
      "longitude": -8.321472,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 261,
      "squawk": "3261",
      "timestamp": 1703237291,
      "ems": null
    },
    {
      "latitude": 39.649887,
      "longitude": -8.323398,
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
      "heading": 269,
      "squawk": "3261",
      "timestamp": 1703237295,
      "ems": null
    },
    {
      "latitude": 39.649891,
      "longitude": -8.325256,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 272,
      "squawk": "3261",
      "timestamp": 1703237297,
      "ems": null
    },
    {
      "latitude": 39.65007,
      "longitude": -8.327278,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 276,
      "squawk": "3261",
      "timestamp": 1703237300,
      "ems": null
    },
    {
      "latitude": 39.650253,
      "longitude": -8.32901,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 277,
      "squawk": "3261",
      "timestamp": 1703237303,
      "ems": null
    },
    {
      "latitude": 39.650436,
      "longitude": -8.33098,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 277,
      "squawk": "3261",
      "timestamp": 1703237306,
      "ems": null
    },
    {
      "latitude": 39.65062,
      "longitude": -8.332831,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 277,
      "squawk": "3261",
      "timestamp": 1703237309,
      "ems": null
    },
    {
      "latitude": 39.650803,
      "longitude": -8.334682,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 276,
      "squawk": "3261",
      "timestamp": 1703237312,
      "ems": null
    },
    {
      "latitude": 39.650986,
      "longitude": -8.336413,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 276,
      "squawk": "3261",
      "timestamp": 1703237315,
      "ems": null
    },
    {
      "latitude": 39.65115,
      "longitude": -8.338562,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 276,
      "squawk": "3261",
      "timestamp": 1703237319,
      "ems": null
    },
    {
      "latitude": 39.651306,
      "longitude": -8.340355,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 276,
      "squawk": "3261",
      "timestamp": 1703237322,
      "ems": null
    },
    {
      "latitude": 39.651474,
      "longitude": -8.342041,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 276,
      "squawk": "3261",
      "timestamp": 1703237324,
      "ems": null
    },
    {
      "latitude": 39.651855,
      "longitude": -8.347938,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 272,
      "squawk": "3261",
      "timestamp": 1703237334,
      "ems": null
    },
    {
      "latitude": 39.651901,
      "longitude": -8.34943,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 272,
      "squawk": "3261",
      "timestamp": 1703237336,
      "ems": null
    },
    {
      "latitude": 39.652267,
      "longitude": -8.355222,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 275,
      "squawk": "3261",
      "timestamp": 1703237346,
      "ems": null
    },
    {
      "latitude": 39.652771,
      "longitude": -8.359043,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 282,
      "squawk": "3261",
      "timestamp": 1703237352,
      "ems": null
    },
    {
      "latitude": 39.653091,
      "longitude": -8.360834,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 284,
      "squawk": "3261",
      "timestamp": 1703237355,
      "ems": null
    },
    {
      "latitude": 39.653549,
      "longitude": -8.362685,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 287,
      "squawk": "3261",
      "timestamp": 1703237358,
      "ems": null
    },
    {
      "latitude": 39.653961,
      "longitude": -8.364298,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 289,
      "squawk": "3261",
      "timestamp": 1703237361,
      "ems": null
    },
    {
      "latitude": 39.654465,
      "longitude": -8.36597,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 289,
      "squawk": "3261",
      "timestamp": 1703237364,
      "ems": null
    },
    {
      "latitude": 39.654922,
      "longitude": -8.367701,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 290,
      "squawk": "3261",
      "timestamp": 1703237367,
      "ems": null
    },
    {
      "latitude": 39.65538,
      "longitude": -8.369253,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 290,
      "squawk": "3261",
      "timestamp": 1703237370,
      "ems": null
    },
    {
      "latitude": 39.655895,
      "longitude": -8.370972,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 291,
      "squawk": "3261",
      "timestamp": 1703237373,
      "ems": null
    },
    {
      "latitude": 39.656456,
      "longitude": -8.372803,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 292,
      "squawk": "3261",
      "timestamp": 1703237376,
      "ems": null
    },
    {
      "latitude": 39.657108,
      "longitude": -8.374695,
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
      "heading": 293,
      "squawk": "3261",
      "timestamp": 1703237379,
      "ems": null
    },
    {
      "latitude": 39.657665,
      "longitude": -8.376404,
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
      "heading": 293,
      "squawk": "3261",
      "timestamp": 1703237382,
      "ems": null
    },
    {
      "latitude": 39.658173,
      "longitude": -8.378031,
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
      "heading": 293,
      "squawk": "3261",
      "timestamp": 1703237385,
      "ems": null
    },
    {
      "latitude": 39.658722,
      "longitude": -8.379703,
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
      "heading": 292,
      "squawk": "3261",
      "timestamp": 1703237388,
      "ems": null
    },
    {
      "latitude": 39.660233,
      "longitude": -8.384837,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 290,
      "squawk": "3261",
      "timestamp": 1703237397,
      "ems": null
    },
    {
      "latitude": 39.661621,
      "longitude": -8.390076,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 284,
      "squawk": "3261",
      "timestamp": 1703237406,
      "ems": null
    },
    {
      "latitude": 39.661949,
      "longitude": -8.391968,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 283,
      "squawk": "3261",
      "timestamp": 1703237409,
      "ems": null
    },
    {
      "latitude": 39.662273,
      "longitude": -8.393494,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 284,
      "squawk": "3261",
      "timestamp": 1703237412,
      "ems": null
    },
    {
      "latitude": 39.662613,
      "longitude": -8.395287,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 284,
      "squawk": "3261",
      "timestamp": 1703237415,
      "ems": null
    },
    {
      "latitude": 39.663025,
      "longitude": -8.397138,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 285,
      "squawk": "3261",
      "timestamp": 1703237418,
      "ems": null
    },
    {
      "latitude": 39.6633,
      "longitude": -8.39857,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 285,
      "squawk": "3261",
      "timestamp": 1703237421,
      "ems": null
    },
    {
      "latitude": 39.663757,
      "longitude": -8.400839,
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
      "heading": 283,
      "squawk": "3261",
      "timestamp": 1703237424,
      "ems": null
    },
    {
      "latitude": 39.664032,
      "longitude": -8.402571,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 282,
      "squawk": "3261",
      "timestamp": 1703237427,
      "ems": null
    },
    {
      "latitude": 39.664169,
      "longitude": -8.403526,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 280,
      "squawk": "3261",
      "timestamp": 1703237430,
      "ems": null
    },
    {
      "latitude": 39.665039,
      "longitude": -8.409796,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 279,
      "squawk": "3261",
      "timestamp": 1703237439,
      "ems": null
    },
    {
      "latitude": 39.665222,
      "longitude": -8.411646,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 277,
      "squawk": "3261",
      "timestamp": 1703237442,
      "ems": null
    },
    {
      "latitude": 39.665359,
      "longitude": -8.413139,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 277,
      "squawk": "3261",
      "timestamp": 1703237446,
      "ems": null
    },
    {
      "latitude": 39.665581,
      "longitude": -8.415283,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 276,
      "squawk": "3261",
      "timestamp": 1703237448,
      "ems": null
    },
    {
      "latitude": 39.66568,
      "longitude": -8.416781,
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
      "heading": 275,
      "squawk": "3261",
      "timestamp": 1703237451,
      "ems": null
    },
    {
      "latitude": 39.665813,
      "longitude": -8.418823,
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
      "heading": 275,
      "squawk": "3261",
      "timestamp": 1703237454,
      "ems": null
    },
    {
      "latitude": 39.665955,
      "longitude": -8.420722,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 275,
      "squawk": "3261",
      "timestamp": 1703237457,
      "ems": null
    },
    {
      "latitude": 39.666462,
      "longitude": -8.426392,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 276,
      "squawk": "3261",
      "timestamp": 1703237466,
      "ems": null
    },
    {
      "latitude": 39.667007,
      "longitude": -8.432186,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 278,
      "squawk": "3261",
      "timestamp": 1703237476,
      "ems": null
    },
    {
      "latitude": 39.66758,
      "longitude": -8.437927,
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
      "heading": 276,
      "squawk": "3261",
      "timestamp": 1703237485,
      "ems": null
    },
    {
      "latitude": 39.66774,
      "longitude": -8.441441,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 269,
      "squawk": "3261",
      "timestamp": 1703237491,
      "ems": null
    },
    {
      "latitude": 39.667629,
      "longitude": -8.443359,
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
      "heading": 264,
      "squawk": "3261",
      "timestamp": 1703237494,
      "ems": null
    },
    {
      "latitude": 39.667488,
      "longitude": -8.445313,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 264,
      "squawk": "3261",
      "timestamp": 1703237497,
      "ems": null
    },
    {
      "latitude": 39.667301,
      "longitude": -8.447205,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 262,
      "squawk": "3261",
      "timestamp": 1703237500,
      "ems": null
    },
    {
      "latitude": 39.667145,
      "longitude": -8.448785,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 262,
      "squawk": "3261",
      "timestamp": 1703237503,
      "ems": null
    },
    {
      "latitude": 39.666916,
      "longitude": -8.450636,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 261,
      "squawk": "3261",
      "timestamp": 1703237506,
      "ems": null
    },
    {
      "latitude": 39.666744,
      "longitude": -8.452332,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 261,
      "squawk": "3261",
      "timestamp": 1703237509,
      "ems": null
    },
    {
      "latitude": 39.666557,
      "longitude": -8.453979,
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
      "heading": 262,
      "squawk": "3261",
      "timestamp": 1703237512,
      "ems": null
    },
    {
      "latitude": 39.66637,
      "longitude": -8.455688,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "squawk": "3261",
      "timestamp": 1703237515,
      "ems": null
    },
    {
      "latitude": 39.666229,
      "longitude": -8.457153,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 262,
      "squawk": "3261",
      "timestamp": 1703237518,
      "ems": null
    },
    {
      "latitude": 39.666092,
      "longitude": -8.458679,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 262,
      "squawk": "3261",
      "timestamp": 1703237521,
      "ems": null
    },
    {
      "latitude": 39.665394,
      "longitude": -8.464722,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 260,
      "squawk": "3261",
      "timestamp": 1703237530,
      "ems": null
    },
    {
      "latitude": 39.664719,
      "longitude": -8.4701,
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
      "heading": 261,
      "squawk": "3261",
      "timestamp": 1703237539,
      "ems": null
    },
    {
      "latitude": 39.664078,
      "longitude": -8.476012,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 262,
      "squawk": "3261",
      "timestamp": 1703237548,
      "ems": null
    },
    {
      "latitude": 39.66367,
      "longitude": -8.481567,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 264,
      "squawk": "3261",
      "timestamp": 1703237558,
      "ems": null
    },
    {
      "latitude": 39.663528,
      "longitude": -8.483296,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 265,
      "squawk": "3261",
      "timestamp": 1703237560,
      "ems": null
    },
    {
      "latitude": 39.663437,
      "longitude": -8.484863,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 265,
      "squawk": "3261",
      "timestamp": 1703237564,
      "ems": null
    },
    {
      "latitude": 39.66325,
      "longitude": -8.488831,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 267,
      "squawk": "3261",
      "timestamp": 1703237570,
      "ems": null
    },
    {
      "latitude": 39.663204,
      "longitude": -8.490417,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 269,
      "squawk": "3261",
      "timestamp": 1703237572,
      "ems": null
    },
    {
      "latitude": 39.663345,
      "longitude": -8.492432,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 278,
      "squawk": "3261",
      "timestamp": 1703237575,
      "ems": null
    },
    {
      "latitude": 39.663666,
      "longitude": -8.494043,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 286,
      "squawk": "3261",
      "timestamp": 1703237579,
      "ems": null
    },
    {
      "latitude": 39.664181,
      "longitude": -8.49585,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "squawk": "3261",
      "timestamp": 1703237582,
      "ems": null
    },
    {
      "latitude": 39.664696,
      "longitude": -8.497253,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 297,
      "squawk": "3261",
      "timestamp": 1703237585,
      "ems": null
    },
    {
      "latitude": 39.665485,
      "longitude": -8.499023,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "squawk": "3261",
      "timestamp": 1703237588,
      "ems": null
    },
    {
      "latitude": 39.666183,
      "longitude": -8.500671,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 298,
      "squawk": "3261",
      "timestamp": 1703237591,
      "ems": null
    },
    {
      "latitude": 39.666836,
      "longitude": -8.502197,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 298,
      "squawk": "3261",
      "timestamp": 1703237594,
      "ems": null
    },
    {
      "latitude": 39.667393,
      "longitude": -8.503601,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 297,
      "squawk": "3261",
      "timestamp": 1703237597,
      "ems": null
    },
    {
      "latitude": 39.668095,
      "longitude": -8.505249,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 298,
      "squawk": "3261",
      "timestamp": 1703237600,
      "ems": null
    },
    {
      "latitude": 39.668701,
      "longitude": -8.506701,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 299,
      "squawk": "3261",
      "timestamp": 1703237603,
      "ems": null
    },
    {
      "latitude": 39.669304,
      "longitude": -8.507996,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 300,
      "squawk": "3261",
      "timestamp": 1703237605,
      "ems": null
    },
    {
      "latitude": 39.670074,
      "longitude": -8.509627,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 302,
      "squawk": "3261",
      "timestamp": 1703237608,
      "ems": null
    },
    {
      "latitude": 39.670853,
      "longitude": -8.51124,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 301,
      "squawk": "3261",
      "timestamp": 1703237612,
      "ems": null
    },
    {
      "latitude": 39.672958,
      "longitude": -8.515778,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 301,
      "squawk": "3261",
      "timestamp": 1703237621,
      "ems": null
    },
    {
      "latitude": 39.674423,
      "longitude": -8.518763,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 302,
      "squawk": "3261",
      "timestamp": 1703237627,
      "ems": null
    },
    {
      "latitude": 39.676666,
      "longitude": -8.52342,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 299,
      "squawk": "3261",
      "timestamp": 1703237636,
      "ems": null
    },
    {
      "latitude": 39.678986,
      "longitude": -8.527588,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 314,
      "squawk": "3261",
      "timestamp": 1703237645,
      "ems": null
    },
    {
      "latitude": 39.680099,
      "longitude": -8.528853,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 319,
      "squawk": "3261",
      "timestamp": 1703237648,
      "ems": null
    },
    {
      "latitude": 39.681126,
      "longitude": -8.529907,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 322,
      "squawk": "3261",
      "timestamp": 1703237651,
      "ems": null
    },
    {
      "latitude": 39.681976,
      "longitude": -8.530944,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 314,
      "squawk": "3261",
      "timestamp": 1703237654,
      "ems": null
    },
    {
      "latitude": 39.683487,
      "longitude": -8.534227,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 294,
      "squawk": "3261",
      "timestamp": 1703237660,
      "ems": null
    },
    {
      "latitude": 39.683899,
      "longitude": -8.535661,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 287,
      "squawk": "3261",
      "timestamp": 1703237663,
      "ems": null
    },
    {
      "latitude": 39.684387,
      "longitude": -8.537537,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 289,
      "squawk": "3261",
      "timestamp": 1703237666,
      "ems": null
    },
    {
      "latitude": 39.684952,
      "longitude": -8.539004,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 297,
      "squawk": "3261",
      "timestamp": 1703237669,
      "ems": null
    },
    {
      "latitude": 39.687469,
      "longitude": -8.542646,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 321,
      "squawk": "3261",
      "timestamp": 1703237677,
      "ems": null
    },
    {
      "latitude": 39.68895,
      "longitude": -8.543823,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 329,
      "squawk": "3261",
      "timestamp": 1703237681,
      "ems": null
    },
    {
      "latitude": 39.689758,
      "longitude": -8.544318,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "3261",
      "timestamp": 1703237683,
      "ems": null
    },
    {
      "latitude": 39.691322,
      "longitude": -8.544861,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "squawk": "3261",
      "timestamp": 1703237687,
      "ems": null
    },
    {
      "latitude": 39.692093,
      "longitude": -8.544915,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 358,
      "squawk": "3261",
      "timestamp": 1703237690,
      "ems": null
    },
    {
      "latitude": 39.693283,
      "longitude": -8.544855,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 9,
      "squawk": "3261",
      "timestamp": 1703237693,
      "ems": null
    },
    {
      "latitude": 39.694767,
      "longitude": -8.54425,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 21,
      "squawk": "3261",
      "timestamp": 1703237696,
      "ems": null
    },
    {
      "latitude": 39.695892,
      "longitude": -8.543363,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 36,
      "squawk": "3261",
      "timestamp": 1703237699,
      "ems": null
    },
    {
      "latitude": 39.696671,
      "longitude": -8.542467,
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
      "heading": 44,
      "squawk": "3261",
      "timestamp": 1703237702,
      "ems": null
    },
    {
      "latitude": 39.697403,
      "longitude": -8.541273,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 53,
      "squawk": "3261",
      "timestamp": 1703237705,
      "ems": null
    },
    {
      "latitude": 39.698074,
      "longitude": -8.539734,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 62,
      "squawk": "3261",
      "timestamp": 1703237709,
      "ems": null
    },
    {
      "latitude": 39.698456,
      "longitude": -8.538347,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 68,
      "squawk": "3261",
      "timestamp": 1703237711,
      "ems": null
    },
    {
      "latitude": 39.698677,
      "longitude": -8.537109,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 74,
      "squawk": "3261",
      "timestamp": 1703237714,
      "ems": null
    },
    {
      "latitude": 39.69873,
      "longitude": -8.536496,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 84,
      "squawk": "3261",
      "timestamp": 1703237715,
      "ems": null
    },
    {
      "latitude": 39.698444,
      "longitude": -8.533752,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 104,
      "squawk": "3261",
      "timestamp": 1703237721,
      "ems": null
    },
    {
      "latitude": 39.698399,
      "longitude": -8.533508,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 106,
      "squawk": "3261",
      "timestamp": 1703237721,
      "ems": null
    },
    {
      "latitude": 39.697842,
      "longitude": -8.532043,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 118,
      "squawk": "3261",
      "timestamp": 1703237724,
      "ems": null
    },
    {
      "latitude": 39.697083,
      "longitude": -8.530585,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 127,
      "squawk": "3261",
      "timestamp": 1703237727,
      "ems": null
    },
    {
      "latitude": 39.696209,
      "longitude": -8.529358,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 133,
      "squawk": "3261",
      "timestamp": 1703237730,
      "ems": null
    },
    {
      "latitude": 39.695278,
      "longitude": -8.528259,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "squawk": "3261",
      "timestamp": 1703237733,
      "ems": null
    },
    {
      "latitude": 39.694256,
      "longitude": -8.527161,
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
      "heading": 140,
      "squawk": "3261",
      "timestamp": 1703237736,
      "ems": null
    },
    {
      "latitude": 39.693192,
      "longitude": -8.525988,
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
      "heading": 140,
      "squawk": "3261",
      "timestamp": 1703237739,
      "ems": null
    },
    {
      "latitude": 39.692348,
      "longitude": -8.525085,
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
      "heading": 140,
      "squawk": "3261",
      "timestamp": 1703237742,
      "ems": null
    },
    {
      "latitude": 39.691231,
      "longitude": -8.524048,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703237745,
      "ems": null
    },
    {
      "latitude": 39.690205,
      "longitude": -8.523071,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 145,
      "squawk": "3261",
      "timestamp": 1703237748,
      "ems": null
    },
    {
      "latitude": 39.689072,
      "longitude": -8.522107,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 147,
      "squawk": "3261",
      "timestamp": 1703237751,
      "ems": null
    },
    {
      "latitude": 39.687923,
      "longitude": -8.52124,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 150,
      "squawk": "3261",
      "timestamp": 1703237754,
      "ems": null
    },
    {
      "latitude": 39.686829,
      "longitude": -8.520434,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 150,
      "squawk": "3261",
      "timestamp": 1703237757,
      "ems": null
    },
    {
      "latitude": 39.68573,
      "longitude": -8.519599,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 148,
      "squawk": "3261",
      "timestamp": 1703237760,
      "ems": null
    },
    {
      "latitude": 39.684586,
      "longitude": -8.518703,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 148,
      "squawk": "3261",
      "timestamp": 1703237763,
      "ems": null
    },
    {
      "latitude": 39.683395,
      "longitude": -8.517748,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 148,
      "squawk": "3261",
      "timestamp": 1703237766,
      "ems": null
    },
    {
      "latitude": 39.68243,
      "longitude": -8.516968,
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
      "heading": 149,
      "squawk": "3261",
      "timestamp": 1703237769,
      "ems": null
    },
    {
      "latitude": 39.680969,
      "longitude": -8.515897,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 148,
      "squawk": "3261",
      "timestamp": 1703237772,
      "ems": null
    },
    {
      "latitude": 39.677498,
      "longitude": -8.513245,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 150,
      "squawk": "3261",
      "timestamp": 1703237781,
      "ems": null
    },
    {
      "latitude": 39.673958,
      "longitude": -8.510315,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 137,
      "squawk": "3261",
      "timestamp": 1703237790,
      "ems": null
    },
    {
      "latitude": 39.673004,
      "longitude": -8.50903,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 133,
      "squawk": "3261",
      "timestamp": 1703237793,
      "ems": null
    },
    {
      "latitude": 39.672096,
      "longitude": -8.507751,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 132,
      "squawk": "3261",
      "timestamp": 1703237796,
      "ems": null
    },
    {
      "latitude": 39.671257,
      "longitude": -8.50647,
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
      "heading": 127,
      "squawk": "3261",
      "timestamp": 1703237800,
      "ems": null
    },
    {
      "latitude": 39.670467,
      "longitude": -8.504944,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 122,
      "squawk": "3261",
      "timestamp": 1703237802,
      "ems": null
    },
    {
      "latitude": 39.669754,
      "longitude": -8.503418,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 120,
      "squawk": "3261",
      "timestamp": 1703237805,
      "ems": null
    },
    {
      "latitude": 39.669022,
      "longitude": -8.501865,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 123,
      "squawk": "3261",
      "timestamp": 1703237809,
      "ems": null
    },
    {
      "latitude": 39.668278,
      "longitude": -8.500427,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 123,
      "squawk": "3261",
      "timestamp": 1703237812,
      "ems": null
    },
    {
      "latitude": 39.667629,
      "longitude": -8.499207,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 125,
      "squawk": "3261",
      "timestamp": 1703237815,
      "ems": null
    },
    {
      "latitude": 39.666882,
      "longitude": -8.497864,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 126,
      "squawk": "3261",
      "timestamp": 1703237817,
      "ems": null
    },
    {
      "latitude": 39.666046,
      "longitude": -8.496432,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 125,
      "squawk": "3261",
      "timestamp": 1703237821,
      "ems": null
    },
    {
      "latitude": 39.665394,
      "longitude": -8.495178,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 122,
      "squawk": "3261",
      "timestamp": 1703237824,
      "ems": null
    },
    {
      "latitude": 39.664833,
      "longitude": -8.493652,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 112,
      "squawk": "3261",
      "timestamp": 1703237827,
      "ems": null
    },
    {
      "latitude": 39.664555,
      "longitude": -8.492249,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 103,
      "squawk": "3261",
      "timestamp": 1703237830,
      "ems": null
    },
    {
      "latitude": 39.664463,
      "longitude": -8.490784,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 93,
      "squawk": "3261",
      "timestamp": 1703237833,
      "ems": null
    },
    {
      "latitude": 39.664536,
      "longitude": -8.489326,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 84,
      "squawk": "3261",
      "timestamp": 1703237836,
      "ems": null
    },
    {
      "latitude": 39.664696,
      "longitude": -8.488159,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 75,
      "squawk": "3261",
      "timestamp": 1703237838,
      "ems": null
    },
    {
      "latitude": 39.665222,
      "longitude": -8.486461,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 65,
      "squawk": "3261",
      "timestamp": 1703237842,
      "ems": null
    },
    {
      "latitude": 39.665718,
      "longitude": -8.485291,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 56,
      "squawk": "3261",
      "timestamp": 1703237845,
      "ems": null
    },
    {
      "latitude": 39.666462,
      "longitude": -8.484192,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 46,
      "squawk": "3261",
      "timestamp": 1703237848,
      "ems": null
    },
    {
      "latitude": 39.667442,
      "longitude": -8.483154,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 37,
      "squawk": "3261",
      "timestamp": 1703237851,
      "ems": null
    },
    {
      "latitude": 39.668472,
      "longitude": -8.482401,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 29,
      "squawk": "3261",
      "timestamp": 1703237854,
      "ems": null
    },
    {
      "latitude": 39.669525,
      "longitude": -8.481863,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 18,
      "squawk": "3261",
      "timestamp": 1703237857,
      "ems": null
    },
    {
      "latitude": 39.670532,
      "longitude": -8.481565,
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
      "heading": 11,
      "squawk": "3261",
      "timestamp": 1703237859,
      "ems": null
    },
    {
      "latitude": 39.671722,
      "longitude": -8.481384,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 3,
      "squawk": "3261",
      "timestamp": 1703237863,
      "ems": null
    },
    {
      "latitude": 39.672794,
      "longitude": -8.481445,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 356,
      "squawk": "3261",
      "timestamp": 1703237865,
      "ems": null
    },
    {
      "latitude": 39.674053,
      "longitude": -8.481689,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 347,
      "squawk": "3261",
      "timestamp": 1703237868,
      "ems": null
    },
    {
      "latitude": 39.674927,
      "longitude": -8.482102,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 340,
      "squawk": "3261",
      "timestamp": 1703237871,
      "ems": null
    },
    {
      "latitude": 39.676254,
      "longitude": -8.482998,
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
      "heading": 330,
      "squawk": "3261",
      "timestamp": 1703237874,
      "ems": null
    },
    {
      "latitude": 39.67717,
      "longitude": -8.483774,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 323,
      "squawk": "3261",
      "timestamp": 1703237877,
      "ems": null
    },
    {
      "latitude": 39.67836,
      "longitude": -8.485267,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 315,
      "squawk": "3261",
      "timestamp": 1703237881,
      "ems": null
    },
    {
      "latitude": 39.679138,
      "longitude": -8.486461,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 309,
      "squawk": "3261",
      "timestamp": 1703237883,
      "ems": null
    },
    {
      "latitude": 39.679825,
      "longitude": -8.48761,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 305,
      "squawk": "3261",
      "timestamp": 1703237886,
      "ems": null
    },
    {
      "latitude": 39.680569,
      "longitude": -8.48938,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 297,
      "squawk": "3261",
      "timestamp": 1703237889,
      "ems": null
    },
    {
      "latitude": 39.681198,
      "longitude": -8.490998,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 296,
      "squawk": "3261",
      "timestamp": 1703237892,
      "ems": null
    },
    {
      "latitude": 39.681828,
      "longitude": -8.492737,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 296,
      "squawk": "3261",
      "timestamp": 1703237896,
      "ems": null
    },
    {
      "latitude": 39.682243,
      "longitude": -8.493896,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 295,
      "squawk": "3261",
      "timestamp": 1703237898,
      "ems": null
    },
    {
      "latitude": 39.682846,
      "longitude": -8.495537,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 294,
      "squawk": "3261",
      "timestamp": 1703237901,
      "ems": null
    },
    {
      "latitude": 39.683502,
      "longitude": -8.497375,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 293,
      "squawk": "3261",
      "timestamp": 1703237905,
      "ems": null
    },
    {
      "latitude": 39.683945,
      "longitude": -8.498761,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 293,
      "squawk": "3261",
      "timestamp": 1703237907,
      "ems": null
    },
    {
      "latitude": 39.684574,
      "longitude": -8.500488,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 294,
      "squawk": "3261",
      "timestamp": 1703237911,
      "ems": null
    },
    {
      "latitude": 39.685272,
      "longitude": -8.502343,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "squawk": "3261",
      "timestamp": 1703237914,
      "ems": null
    },
    {
      "latitude": 39.68573,
      "longitude": -8.503418,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 298,
      "squawk": "3261",
      "timestamp": 1703237916,
      "ems": null
    },
    {
      "latitude": 39.687424,
      "longitude": -8.507419,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 298,
      "squawk": "3261",
      "timestamp": 1703237924,
      "ems": null
    },
    {
      "latitude": 39.688763,
      "longitude": -8.510559,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 299,
      "squawk": "3261",
      "timestamp": 1703237930,
      "ems": null
    },
    {
      "latitude": 39.689484,
      "longitude": -8.512136,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 299,
      "squawk": "3261",
      "timestamp": 1703237933,
      "ems": null
    },
    {
      "latitude": 39.689896,
      "longitude": -8.513091,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 299,
      "squawk": "3261",
      "timestamp": 1703237935,
      "ems": null
    },
    {
      "latitude": 39.69072,
      "longitude": -8.515001,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 299,
      "squawk": "3261",
      "timestamp": 1703237938,
      "ems": null
    },
    {
      "latitude": 39.692814,
      "longitude": -8.519836,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 301,
      "squawk": "3261",
      "timestamp": 1703237948,
      "ems": null
    },
    {
      "latitude": 39.693604,
      "longitude": -8.521331,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 303,
      "squawk": "3261",
      "timestamp": 1703237951,
      "ems": null
    },
    {
      "latitude": 39.694336,
      "longitude": -8.522823,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 304,
      "squawk": "3261",
      "timestamp": 1703237954,
      "ems": null
    },
    {
      "latitude": 39.695114,
      "longitude": -8.524256,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 305,
      "squawk": "3261",
      "timestamp": 1703237957,
      "ems": null
    },
    {
      "latitude": 39.697094,
      "longitude": -8.529053,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 288,
      "squawk": "3261",
      "timestamp": 1703237966,
      "ems": null
    },
    {
      "latitude": 39.697422,
      "longitude": -8.531006,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 280,
      "squawk": "3261",
      "timestamp": 1703237969,
      "ems": null
    },
    {
      "latitude": 39.697559,
      "longitude": -8.532654,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 274,
      "squawk": "3261",
      "timestamp": 1703237972,
      "ems": null
    },
    {
      "latitude": 39.697514,
      "longitude": -8.53479,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 265,
      "squawk": "3261",
      "timestamp": 1703237975,
      "ems": null
    },
    {
      "latitude": 39.697281,
      "longitude": -8.53656,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 258,
      "squawk": "3261",
      "timestamp": 1703237978,
      "ems": null
    },
    {
      "latitude": 39.696808,
      "longitude": -8.538407,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 252,
      "squawk": "3261",
      "timestamp": 1703237981,
      "ems": null
    },
    {
      "latitude": 39.696259,
      "longitude": -8.539978,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 241,
      "squawk": "3261",
      "timestamp": 1703237984,
      "ems": null
    },
    {
      "latitude": 39.695389,
      "longitude": -8.541572,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 232,
      "squawk": "3261",
      "timestamp": 1703237987,
      "ems": null
    },
    {
      "latitude": 39.694382,
      "longitude": -8.542885,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 221,
      "squawk": "3261",
      "timestamp": 1703237990,
      "ems": null
    },
    {
      "latitude": 39.693092,
      "longitude": -8.544067,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 212,
      "squawk": "3261",
      "timestamp": 1703237993,
      "ems": null
    },
    {
      "latitude": 39.691879,
      "longitude": -8.544861,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 205,
      "squawk": "3261",
      "timestamp": 1703237996,
      "ems": null
    },
    {
      "latitude": 39.69109,
      "longitude": -8.545227,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 198,
      "squawk": "3261",
      "timestamp": 1703237998,
      "ems": null
    },
    {
      "latitude": 39.689026,
      "longitude": -8.545871,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 189,
      "squawk": "3261",
      "timestamp": 1703238002,
      "ems": null
    },
    {
      "latitude": 39.687691,
      "longitude": -8.545959,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 182,
      "squawk": "3261",
      "timestamp": 1703238005,
      "ems": null
    },
    {
      "latitude": 39.686234,
      "longitude": -8.545811,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 173,
      "squawk": "3261",
      "timestamp": 1703238008,
      "ems": null
    },
    {
      "latitude": 39.68504,
      "longitude": -8.54541,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 161,
      "squawk": "3261",
      "timestamp": 1703238011,
      "ems": null
    },
    {
      "latitude": 39.68364,
      "longitude": -8.544617,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 151,
      "squawk": "3261",
      "timestamp": 1703238014,
      "ems": null
    },
    {
      "latitude": 39.682571,
      "longitude": -8.543579,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 141,
      "squawk": "3261",
      "timestamp": 1703238017,
      "ems": null
    },
    {
      "latitude": 39.681839,
      "longitude": -8.542646,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 131,
      "squawk": "3261",
      "timestamp": 1703238020,
      "ems": null
    },
    {
      "latitude": 39.680969,
      "longitude": -8.541034,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 122,
      "squawk": "3261",
      "timestamp": 1703238023,
      "ems": null
    },
    {
      "latitude": 39.680428,
      "longitude": -8.539673,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 113,
      "squawk": "3261",
      "timestamp": 1703238026,
      "ems": null
    },
    {
      "latitude": 39.679962,
      "longitude": -8.538109,
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
      "heading": 111,
      "squawk": "3261",
      "timestamp": 1703238029,
      "ems": null
    },
    {
      "latitude": 39.679504,
      "longitude": -8.536675,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 112,
      "squawk": "3261",
      "timestamp": 1703238032,
      "ems": null
    },
    {
      "latitude": 39.679031,
      "longitude": -8.535278,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 113,
      "squawk": "3261",
      "timestamp": 1703238035,
      "ems": null
    },
    {
      "latitude": 39.678566,
      "longitude": -8.533936,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 114,
      "squawk": "3261",
      "timestamp": 1703238038,
      "ems": null
    },
    {
      "latitude": 39.678009,
      "longitude": -8.532288,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 114,
      "squawk": "3261",
      "timestamp": 1703238041,
      "ems": null
    },
    {
      "latitude": 39.677536,
      "longitude": -8.530944,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 114,
      "squawk": "3261",
      "timestamp": 1703238044,
      "ems": null
    },
    {
      "latitude": 39.677078,
      "longitude": -8.529571,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 113,
      "squawk": "3261",
      "timestamp": 1703238047,
      "ems": null
    },
    {
      "latitude": 39.676567,
      "longitude": -8.528015,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 112,
      "squawk": "3261",
      "timestamp": 1703238050,
      "ems": null
    },
    {
      "latitude": 39.675354,
      "longitude": -8.523987,
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
      "heading": 108,
      "squawk": "3261",
      "timestamp": 1703238059,
      "ems": null
    },
    {
      "latitude": 39.67511,
      "longitude": -8.523003,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 106,
      "squawk": "3261",
      "timestamp": 1703238061,
      "ems": null
    },
    {
      "latitude": 39.674656,
      "longitude": -8.521179,
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
      "heading": 107,
      "squawk": "3261",
      "timestamp": 1703238065,
      "ems": null
    },
    {
      "latitude": 39.674332,
      "longitude": -8.519718,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 108,
      "squawk": "3261",
      "timestamp": 1703238068,
      "ems": null
    },
    {
      "latitude": 39.67392,
      "longitude": -8.518286,
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
      "heading": 109,
      "squawk": "3261",
      "timestamp": 1703238071,
      "ems": null
    },
    {
      "latitude": 39.673679,
      "longitude": -8.517273,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 108,
      "squawk": "3261",
      "timestamp": 1703238073,
      "ems": null
    },
    {
      "latitude": 39.672363,
      "longitude": -8.512494,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 109,
      "squawk": "3261",
      "timestamp": 1703238083,
      "ems": null
    },
    {
      "latitude": 39.671444,
      "longitude": -8.508972,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 109,
      "squawk": "3261",
      "timestamp": 1703238091,
      "ems": null
    },
    {
      "latitude": 39.670048,
      "longitude": -8.504089,
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
      "heading": 110,
      "squawk": "3261",
      "timestamp": 1703238101,
      "ems": null
    },
    {
      "latitude": 39.668701,
      "longitude": -8.499955,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 115,
      "squawk": "3261",
      "timestamp": 1703238110,
      "ems": null
    },
    {
      "latitude": 39.668095,
      "longitude": -8.498352,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 118,
      "squawk": "3261",
      "timestamp": 1703238113,
      "ems": null
    },
    {
      "latitude": 39.667767,
      "longitude": -8.497681,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 124,
      "squawk": "3261",
      "timestamp": 1703238115,
      "ems": null
    },
    {
      "latitude": 39.666557,
      "longitude": -8.495911,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 133,
      "squawk": "3261",
      "timestamp": 1703238119,
      "ems": null
    },
    {
      "latitude": 39.665161,
      "longitude": -8.49469,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 150,
      "squawk": "3261",
      "timestamp": 1703238123,
      "ems": null
    },
    {
      "latitude": 39.663948,
      "longitude": -8.49408,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "squawk": "3261",
      "timestamp": 1703238126,
      "ems": null
    },
    {
      "latitude": 39.662693,
      "longitude": -8.493591,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 164,
      "squawk": "3261",
      "timestamp": 1703238129,
      "ems": null
    },
    {
      "latitude": 39.661469,
      "longitude": -8.493208,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 168,
      "squawk": "3261",
      "timestamp": 1703238132,
      "ems": null
    },
    {
      "latitude": 39.660187,
      "longitude": -8.492969,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 173,
      "squawk": "3261",
      "timestamp": 1703238135,
      "ems": null
    },
    {
      "latitude": 39.658783,
      "longitude": -8.492798,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 175,
      "squawk": "3261",
      "timestamp": 1703238138,
      "ems": null
    },
    {
      "latitude": 39.657291,
      "longitude": -8.492737,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 179,
      "squawk": "3261",
      "timestamp": 1703238141,
      "ems": null
    },
    {
      "latitude": 39.655895,
      "longitude": -8.492798,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 183,
      "squawk": "3261",
      "timestamp": 1703238144,
      "ems": null
    },
    {
      "latitude": 39.654453,
      "longitude": -8.493042,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 191,
      "squawk": "3261",
      "timestamp": 1703238147,
      "ems": null
    },
    {
      "latitude": 39.652962,
      "longitude": -8.493652,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 200,
      "squawk": "3261",
      "timestamp": 1703238150,
      "ems": null
    },
    {
      "latitude": 39.651707,
      "longitude": -8.494385,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 206,
      "squawk": "3261",
      "timestamp": 1703238153,
      "ems": null
    },
    {
      "latitude": 39.650848,
      "longitude": -8.495059,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 210,
      "squawk": "3261",
      "timestamp": 1703238156,
      "ems": null
    },
    {
      "latitude": 39.649193,
      "longitude": -8.496277,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 209,
      "squawk": "3261",
      "timestamp": 1703238159,
      "ems": null
    },
    {
      "latitude": 39.647781,
      "longitude": -8.497209,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 207,
      "squawk": "3261",
      "timestamp": 1703238162,
      "ems": null
    },
    {
      "latitude": 39.646454,
      "longitude": -8.498044,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 204,
      "squawk": "3261",
      "timestamp": 1703238165,
      "ems": null
    },
    {
      "latitude": 39.645035,
      "longitude": -8.498761,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 199,
      "squawk": "3261",
      "timestamp": 1703238169,
      "ems": null
    },
    {
      "latitude": 39.643707,
      "longitude": -8.499238,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 194,
      "squawk": "3261",
      "timestamp": 1703238171,
      "ems": null
    },
    {
      "latitude": 39.640812,
      "longitude": -8.5,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 191,
      "squawk": "3261",
      "timestamp": 1703238177,
      "ems": null
    },
    {
      "latitude": 39.63937,
      "longitude": -8.500366,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 191,
      "squawk": "3261",
      "timestamp": 1703238181,
      "ems": null
    },
    {
      "latitude": 39.637848,
      "longitude": -8.500851,
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
      "heading": 193,
      "squawk": "3261",
      "timestamp": 1703238184,
      "ems": null
    },
    {
      "latitude": 39.636482,
      "longitude": -8.501282,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 194,
      "squawk": "3261",
      "timestamp": 1703238186,
      "ems": null
    },
    {
      "latitude": 39.635086,
      "longitude": -8.50177,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 195,
      "squawk": "3261",
      "timestamp": 1703238189,
      "ems": null
    },
    {
      "latitude": 39.633598,
      "longitude": -8.502258,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 195,
      "squawk": "3261",
      "timestamp": 1703238193,
      "ems": null
    },
    {
      "latitude": 39.632401,
      "longitude": -8.502702,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 194,
      "squawk": "3261",
      "timestamp": 1703238196,
      "ems": null
    },
    {
      "latitude": 39.631176,
      "longitude": -8.503113,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 194,
      "squawk": "3261",
      "timestamp": 1703238199,
      "ems": null
    },
    {
      "latitude": 39.626896,
      "longitude": -8.504578,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 195,
      "squawk": "3261",
      "timestamp": 1703238207,
      "ems": null
    },
    {
      "latitude": 39.62545,
      "longitude": -8.505127,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 196,
      "squawk": "3261",
      "timestamp": 1703238211,
      "ems": null
    },
    {
      "latitude": 39.621262,
      "longitude": -8.506531,
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
      "heading": 192,
      "squawk": "3261",
      "timestamp": 1703238220,
      "ems": null
    },
    {
      "latitude": 39.61763,
      "longitude": -8.507507,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 191,
      "squawk": "3261",
      "timestamp": 1703238228,
      "ems": null
    },
    {
      "latitude": 39.614418,
      "longitude": -8.508301,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 190,
      "squawk": "3261",
      "timestamp": 1703238235,
      "ems": null
    },
    {
      "latitude": 39.612946,
      "longitude": -8.508673,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 189,
      "squawk": "3261",
      "timestamp": 1703238238,
      "ems": null
    },
    {
      "latitude": 39.611755,
      "longitude": -8.508911,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 189,
      "squawk": "3261",
      "timestamp": 1703238241,
      "ems": null
    },
    {
      "latitude": 39.610184,
      "longitude": -8.509277,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 189,
      "squawk": "3261",
      "timestamp": 1703238244,
      "ems": null
    },
    {
      "latitude": 39.606262,
      "longitude": -8.510404,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "squawk": "3261",
      "timestamp": 1703238253,
      "ems": null
    },
    {
      "latitude": 39.602268,
      "longitude": -8.511658,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "squawk": "3261",
      "timestamp": 1703238262,
      "ems": null
    },
    {
      "latitude": 39.599335,
      "longitude": -8.512634,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 194,
      "squawk": "3261",
      "timestamp": 1703238268,
      "ems": null
    },
    {
      "latitude": 39.597931,
      "longitude": -8.513091,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 194,
      "squawk": "3261",
      "timestamp": 1703238271,
      "ems": null
    },
    {
      "latitude": 39.59375,
      "longitude": -8.514404,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 193,
      "squawk": "3261",
      "timestamp": 1703238281,
      "ems": null
    },
    {
      "latitude": 39.589783,
      "longitude": -8.515479,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 191,
      "squawk": "3261",
      "timestamp": 1703238289,
      "ems": null
    },
    {
      "latitude": 39.58588,
      "longitude": -8.516663,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 194,
      "squawk": "3261",
      "timestamp": 1703238298,
      "ems": null
    },
    {
      "latitude": 39.581459,
      "longitude": -8.518188,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 194,
      "squawk": "3261",
      "timestamp": 1703238308,
      "ems": null
    },
    {
      "latitude": 39.577549,
      "longitude": -8.519409,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 193,
      "squawk": "3261",
      "timestamp": 1703238317,
      "ems": null
    },
    {
      "latitude": 39.573452,
      "longitude": -8.520813,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 196,
      "squawk": "3261",
      "timestamp": 1703238325,
      "ems": null
    },
    {
      "latitude": 39.570148,
      "longitude": -8.522095,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 196,
      "squawk": "3261",
      "timestamp": 1703238332,
      "ems": null
    },
    {
      "latitude": 39.565933,
      "longitude": -8.523779,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 197,
      "squawk": "3261",
      "timestamp": 1703238341,
      "ems": null
    },
    {
      "latitude": 39.561951,
      "longitude": -8.525629,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "3261",
      "timestamp": 1703238350,
      "ems": null
    },
    {
      "latitude": 39.560371,
      "longitude": -8.526489,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 203,
      "squawk": "3261",
      "timestamp": 1703238353,
      "ems": null
    },
    {
      "latitude": 39.559021,
      "longitude": -8.527283,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "3261",
      "timestamp": 1703238357,
      "ems": null
    },
    {
      "latitude": 39.55806,
      "longitude": -8.528077,
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
      "heading": 211,
      "squawk": "3261",
      "timestamp": 1703238360,
      "ems": null
    },
    {
      "latitude": 39.557648,
      "longitude": -8.528436,
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
      "heading": 218,
      "squawk": "3261",
      "timestamp": 1703238362,
      "ems": null
    },
    {
      "latitude": 39.555817,
      "longitude": -8.530466,
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
      "heading": 221,
      "squawk": "3261",
      "timestamp": 1703238365,
      "ems": null
    },
    {
      "latitude": 39.554737,
      "longitude": -8.531982,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 226,
      "squawk": "3261",
      "timestamp": 1703238368,
      "ems": null
    },
    {
      "latitude": 39.554085,
      "longitude": -8.532837,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 226,
      "squawk": "3261",
      "timestamp": 1703238371,
      "ems": null
    },
    {
      "latitude": 39.55275,
      "longitude": -8.534586,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 225,
      "squawk": "3261",
      "timestamp": 1703238373,
      "ems": null
    },
    {
      "latitude": 39.551514,
      "longitude": -8.536258,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 226,
      "squawk": "3261",
      "timestamp": 1703238377,
      "ems": null
    },
    {
      "latitude": 39.550552,
      "longitude": -8.537571,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 228,
      "squawk": "3261",
      "timestamp": 1703238380,
      "ems": null
    },
    {
      "latitude": 39.5495,
      "longitude": -8.539124,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 228,
      "squawk": "3261",
      "timestamp": 1703238383,
      "ems": null
    },
    {
      "latitude": 39.548492,
      "longitude": -8.540557,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 228,
      "squawk": "3261",
      "timestamp": 1703238386,
      "ems": null
    },
    {
      "latitude": 39.54744,
      "longitude": -8.542109,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 228,
      "squawk": "3261",
      "timestamp": 1703238389,
      "ems": null
    },
    {
      "latitude": 39.546524,
      "longitude": -8.543482,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 229,
      "squawk": "3261",
      "timestamp": 1703238392,
      "ems": null
    },
    {
      "latitude": 39.545425,
      "longitude": -8.545094,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 228,
      "squawk": "3261",
      "timestamp": 1703238395,
      "ems": null
    },
    {
      "latitude": 39.542496,
      "longitude": -8.549438,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 229,
      "squawk": "3261",
      "timestamp": 1703238404,
      "ems": null
    },
    {
      "latitude": 39.539474,
      "longitude": -8.553931,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 229,
      "squawk": "3261",
      "timestamp": 1703238413,
      "ems": null
    },
    {
      "latitude": 39.536629,
      "longitude": -8.558289,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 229,
      "squawk": "3261",
      "timestamp": 1703238422,
      "ems": null
    },
    {
      "latitude": 39.533745,
      "longitude": -8.562683,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 229,
      "squawk": "3261",
      "timestamp": 1703238432,
      "ems": null
    },
    {
      "latitude": 39.530716,
      "longitude": -8.567322,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 230,
      "squawk": "3261",
      "timestamp": 1703238441,
      "ems": null
    },
    {
      "latitude": 39.527832,
      "longitude": -8.571716,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 229,
      "squawk": "3261",
      "timestamp": 1703238450,
      "ems": null
    },
    {
      "latitude": 39.524872,
      "longitude": -8.576142,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 229,
      "squawk": "3261",
      "timestamp": 1703238459,
      "ems": null
    },
    {
      "latitude": 39.521873,
      "longitude": -8.580566,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 229,
      "squawk": "3261",
      "timestamp": 1703238468,
      "ems": null
    },
    {
      "latitude": 39.519012,
      "longitude": -8.58486,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 229,
      "squawk": "3261",
      "timestamp": 1703238477,
      "ems": null
    },
    {
      "latitude": 39.516098,
      "longitude": -8.589294,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 229,
      "squawk": "3261",
      "timestamp": 1703238486,
      "ems": null
    },
    {
      "latitude": 39.51297,
      "longitude": -8.593876,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 228,
      "squawk": "3261",
      "timestamp": 1703238495,
      "ems": null
    },
    {
      "latitude": 39.509815,
      "longitude": -8.598511,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 229,
      "squawk": "3261",
      "timestamp": 1703238504,
      "ems": null
    },
    {
      "latitude": 39.50679,
      "longitude": -8.603011,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 229,
      "squawk": "3261",
      "timestamp": 1703238513,
      "ems": null
    },
    {
      "latitude": 39.503769,
      "longitude": -8.60743,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 228,
      "squawk": "3261",
      "timestamp": 1703238522,
      "ems": null
    },
    {
      "latitude": 39.501755,
      "longitude": -8.610355,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 228,
      "squawk": "3261",
      "timestamp": 1703238528,
      "ems": null
    },
    {
      "latitude": 39.498779,
      "longitude": -8.614834,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 230,
      "squawk": "3261",
      "timestamp": 1703238537,
      "ems": null
    },
    {
      "latitude": 39.495712,
      "longitude": -8.619431,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 229,
      "squawk": "3261",
      "timestamp": 1703238546,
      "ems": null
    },
    {
      "latitude": 39.492729,
      "longitude": -8.624023,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 230,
      "squawk": "3261",
      "timestamp": 1703238555,
      "ems": null
    },
    {
      "latitude": 39.48999,
      "longitude": -8.628268,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 227,
      "squawk": "3261",
      "timestamp": 1703238564,
      "ems": null
    },
    {
      "latitude": 39.488663,
      "longitude": -8.62994,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 224,
      "squawk": "3261",
      "timestamp": 1703238567,
      "ems": null
    },
    {
      "latitude": 39.487518,
      "longitude": -8.631287,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 221,
      "squawk": "3261",
      "timestamp": 1703238570,
      "ems": null
    },
    {
      "latitude": 39.486237,
      "longitude": -8.632687,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 218,
      "squawk": "3261",
      "timestamp": 1703238573,
      "ems": null
    },
    {
      "latitude": 39.484955,
      "longitude": -8.633911,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 216,
      "squawk": "3261",
      "timestamp": 1703238577,
      "ems": null
    },
    {
      "latitude": 39.483902,
      "longitude": -8.634836,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 213,
      "squawk": "3261",
      "timestamp": 1703238579,
      "ems": null
    },
    {
      "latitude": 39.482483,
      "longitude": -8.63597,
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
      "heading": 211,
      "squawk": "3261",
      "timestamp": 1703238582,
      "ems": null
    },
    {
      "latitude": 39.48114,
      "longitude": -8.637024,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "3261",
      "timestamp": 1703238586,
      "ems": null
    },
    {
      "latitude": 39.479874,
      "longitude": -8.638061,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 212,
      "squawk": "3261",
      "timestamp": 1703238589,
      "ems": null
    },
    {
      "latitude": 39.478729,
      "longitude": -8.639135,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 216,
      "squawk": "3261",
      "timestamp": 1703238592,
      "ems": null
    },
    {
      "latitude": 39.477493,
      "longitude": -8.640449,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 219,
      "squawk": "3261",
      "timestamp": 1703238595,
      "ems": null
    },
    {
      "latitude": 39.474251,
      "longitude": -8.644287,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 223,
      "squawk": "3261",
      "timestamp": 1703238604,
      "ems": null
    },
    {
      "latitude": 39.473328,
      "longitude": -8.645345,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 223,
      "squawk": "3261",
      "timestamp": 1703238607,
      "ems": null
    },
    {
      "latitude": 39.472046,
      "longitude": -8.646897,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 223,
      "squawk": "3261",
      "timestamp": 1703238610,
      "ems": null
    },
    {
      "latitude": 39.471085,
      "longitude": -8.64815,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 223,
      "squawk": "3261",
      "timestamp": 1703238613,
      "ems": null
    },
    {
      "latitude": 39.470032,
      "longitude": -8.649405,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 223,
      "squawk": "3261",
      "timestamp": 1703238616,
      "ems": null
    },
    {
      "latitude": 39.468887,
      "longitude": -8.650778,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 222,
      "squawk": "3261",
      "timestamp": 1703238619,
      "ems": null
    },
    {
      "latitude": 39.467686,
      "longitude": -8.652222,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 221,
      "squawk": "3261",
      "timestamp": 1703238622,
      "ems": null
    },
    {
      "latitude": 39.464401,
      "longitude": -8.656033,
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
      "heading": 222,
      "squawk": "3261",
      "timestamp": 1703238631,
      "ems": null
    },
    {
      "latitude": 39.461399,
      "longitude": -8.659729,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 223,
      "squawk": "3261",
      "timestamp": 1703238640,
      "ems": null
    },
    {
      "latitude": 39.458794,
      "longitude": -8.662415,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 212,
      "squawk": "3261",
      "timestamp": 1703238646,
      "ems": null
    },
    {
      "latitude": 39.457397,
      "longitude": -8.662476,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 174,
      "squawk": "3261",
      "timestamp": 1703238649,
      "ems": null
    },
    {
      "latitude": 39.456234,
      "longitude": -8.662292,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 172,
      "squawk": "3261",
      "timestamp": 1703238652,
      "ems": null
    },
    {
      "latitude": 39.454559,
      "longitude": -8.662004,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 172,
      "squawk": "3261",
      "timestamp": 1703238655,
      "ems": null
    },
    {
      "latitude": 39.453323,
      "longitude": -8.661764,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 173,
      "squawk": "3261",
      "timestamp": 1703238658,
      "ems": null
    },
    {
      "latitude": 39.451904,
      "longitude": -8.66156,
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
      "heading": 172,
      "squawk": "3261",
      "timestamp": 1703238661,
      "ems": null
    },
    {
      "latitude": 39.450623,
      "longitude": -8.661346,
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
      "heading": 172,
      "squawk": "3261",
      "timestamp": 1703238664,
      "ems": null
    },
    {
      "latitude": 39.449482,
      "longitude": -8.661133,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 171,
      "squawk": "3261",
      "timestamp": 1703238667,
      "ems": null
    },
    {
      "latitude": 39.447853,
      "longitude": -8.660828,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 171,
      "squawk": "3261",
      "timestamp": 1703238670,
      "ems": null
    },
    {
      "latitude": 39.446411,
      "longitude": -8.660583,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 172,
      "squawk": "3261",
      "timestamp": 1703238673,
      "ems": null
    },
    {
      "latitude": 39.445107,
      "longitude": -8.6604,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 173,
      "squawk": "3261",
      "timestamp": 1703238676,
      "ems": null
    },
    {
      "latitude": 39.442314,
      "longitude": -8.659973,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 173,
      "squawk": "3261",
      "timestamp": 1703238682,
      "ems": null
    },
    {
      "latitude": 39.438126,
      "longitude": -8.659485,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 175,
      "squawk": "3261",
      "timestamp": 1703238691,
      "ems": null
    },
    {
      "latitude": 39.436916,
      "longitude": -8.659424,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 176,
      "squawk": "3261",
      "timestamp": 1703238695,
      "ems": null
    },
    {
      "latitude": 39.435287,
      "longitude": -8.659316,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 177,
      "squawk": "3261",
      "timestamp": 1703238697,
      "ems": null
    },
    {
      "latitude": 39.431236,
      "longitude": -8.658997,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 177,
      "squawk": "3261",
      "timestamp": 1703238707,
      "ems": null
    },
    {
      "latitude": 39.42691,
      "longitude": -8.658719,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 176,
      "squawk": "3261",
      "timestamp": 1703238716,
      "ems": null
    },
    {
      "latitude": 39.422516,
      "longitude": -8.658421,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 177,
      "squawk": "3261",
      "timestamp": 1703238724,
      "ems": null
    },
    {
      "latitude": 39.41835,
      "longitude": -8.658301,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 178,
      "squawk": "3261",
      "timestamp": 1703238734,
      "ems": null
    },
    {
      "latitude": 39.414001,
      "longitude": -8.658241,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 179,
      "squawk": "3261",
      "timestamp": 1703238743,
      "ems": null
    },
    {
      "latitude": 39.409496,
      "longitude": -8.658142,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 179,
      "squawk": "3261",
      "timestamp": 1703238752,
      "ems": null
    },
    {
      "latitude": 39.405396,
      "longitude": -8.658182,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 180,
      "squawk": "3261",
      "timestamp": 1703238761,
      "ems": null
    },
    {
      "latitude": 39.401211,
      "longitude": -8.657959,
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
      "heading": 176,
      "squawk": "3261",
      "timestamp": 1703238770,
      "ems": null
    },
    {
      "latitude": 39.399811,
      "longitude": -8.657776,
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
      "heading": 174,
      "squawk": "3261",
      "timestamp": 1703238773,
      "ems": null
    },
    {
      "latitude": 39.395691,
      "longitude": -8.657406,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 176,
      "squawk": "3261",
      "timestamp": 1703238782,
      "ems": null
    },
    {
      "latitude": 39.391666,
      "longitude": -8.657104,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 176,
      "squawk": "3261",
      "timestamp": 1703238791,
      "ems": null
    },
    {
      "latitude": 39.38736,
      "longitude": -8.656749,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 176,
      "squawk": "3261",
      "timestamp": 1703238800,
      "ems": null
    },
    {
      "latitude": 39.383659,
      "longitude": -8.656433,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 176,
      "squawk": "3261",
      "timestamp": 1703238808,
      "ems": null
    },
    {
      "latitude": 39.379715,
      "longitude": -8.655972,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 172,
      "squawk": "3261",
      "timestamp": 1703238817,
      "ems": null
    },
    {
      "latitude": 39.375732,
      "longitude": -8.655375,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 175,
      "squawk": "3261",
      "timestamp": 1703238825,
      "ems": null
    },
    {
      "latitude": 39.372711,
      "longitude": -8.655495,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 188,
      "squawk": "3261",
      "timestamp": 1703238832,
      "ems": null
    },
    {
      "latitude": 39.371555,
      "longitude": -8.655823,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 193,
      "squawk": "3261",
      "timestamp": 1703238835,
      "ems": null
    },
    {
      "latitude": 39.370331,
      "longitude": -8.656271,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 198,
      "squawk": "3261",
      "timestamp": 1703238838,
      "ems": null
    },
    {
      "latitude": 39.3689,
      "longitude": -8.656982,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 201,
      "squawk": "3261",
      "timestamp": 1703238841,
      "ems": null
    },
    {
      "latitude": 39.367584,
      "longitude": -8.657644,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 201,
      "squawk": "3261",
      "timestamp": 1703238844,
      "ems": null
    },
    {
      "latitude": 39.366302,
      "longitude": -8.658361,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 202,
      "squawk": "3261",
      "timestamp": 1703238848,
      "ems": null
    },
    {
      "latitude": 39.36499,
      "longitude": -8.659058,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 203,
      "squawk": "3261",
      "timestamp": 1703238850,
      "ems": null
    },
    {
      "latitude": 39.363735,
      "longitude": -8.659729,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 203,
      "squawk": "3261",
      "timestamp": 1703238853,
      "ems": null
    },
    {
      "latitude": 39.362572,
      "longitude": -8.6604,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 202,
      "squawk": "3261",
      "timestamp": 1703238856,
      "ems": null
    },
    {
      "latitude": 39.361313,
      "longitude": -8.661108,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 202,
      "squawk": "3261",
      "timestamp": 1703238859,
      "ems": null
    },
    {
      "latitude": 39.359917,
      "longitude": -8.661865,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 203,
      "squawk": "3261",
      "timestamp": 1703238863,
      "ems": null
    },
    {
      "latitude": 39.359264,
      "longitude": -8.662231,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 203,
      "squawk": "3261",
      "timestamp": 1703238865,
      "ems": null
    },
    {
      "latitude": 39.355263,
      "longitude": -8.664063,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 192,
      "squawk": "3261",
      "timestamp": 1703238874,
      "ems": null
    },
    {
      "latitude": 39.35376,
      "longitude": -8.664452,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 190,
      "squawk": "3261",
      "timestamp": 1703238877,
      "ems": null
    },
    {
      "latitude": 39.352432,
      "longitude": -8.66475,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 189,
      "squawk": "3261",
      "timestamp": 1703238880,
      "ems": null
    },
    {
      "latitude": 39.351059,
      "longitude": -8.665049,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 189,
      "squawk": "3261",
      "timestamp": 1703238883,
      "ems": null
    },
    {
      "latitude": 39.349686,
      "longitude": -8.665347,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 189,
      "squawk": "3261",
      "timestamp": 1703238887,
      "ems": null
    },
    {
      "latitude": 39.348511,
      "longitude": -8.665588,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 189,
      "squawk": "3261",
      "timestamp": 1703238890,
      "ems": null
    },
    {
      "latitude": 39.34716,
      "longitude": -8.665833,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 189,
      "squawk": "3261",
      "timestamp": 1703238893,
      "ems": null
    },
    {
      "latitude": 39.346207,
      "longitude": -8.666063,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "squawk": "3261",
      "timestamp": 1703238895,
      "ems": null
    },
    {
      "latitude": 39.344696,
      "longitude": -8.666565,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 192,
      "squawk": "3261",
      "timestamp": 1703238898,
      "ems": null
    },
    {
      "latitude": 39.342224,
      "longitude": -8.667437,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 195,
      "squawk": "3261",
      "timestamp": 1703238905,
      "ems": null
    },
    {
      "latitude": 39.34108,
      "longitude": -8.667854,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 195,
      "squawk": "3261",
      "timestamp": 1703238907,
      "ems": null
    },
    {
      "latitude": 39.339573,
      "longitude": -8.668396,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 195,
      "squawk": "3261",
      "timestamp": 1703238911,
      "ems": null
    },
    {
      "latitude": 39.338318,
      "longitude": -8.668884,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 196,
      "squawk": "3261",
      "timestamp": 1703238913,
      "ems": null
    },
    {
      "latitude": 39.33696,
      "longitude": -8.669348,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "squawk": "3261",
      "timestamp": 1703238916,
      "ems": null
    },
    {
      "latitude": 39.335709,
      "longitude": -8.6698,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 195,
      "squawk": "3261",
      "timestamp": 1703238919,
      "ems": null
    },
    {
      "latitude": 39.334351,
      "longitude": -8.670243,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 194,
      "squawk": "3261",
      "timestamp": 1703238923,
      "ems": null
    },
    {
      "latitude": 39.330589,
      "longitude": -8.671387,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 192,
      "squawk": "3261",
      "timestamp": 1703238931,
      "ems": null
    },
    {
      "latitude": 39.32666,
      "longitude": -8.672571,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 194,
      "squawk": "3261",
      "timestamp": 1703238941,
      "ems": null
    },
    {
      "latitude": 39.322815,
      "longitude": -8.67395,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 195,
      "squawk": "3261",
      "timestamp": 1703238950,
      "ems": null
    },
    {
      "latitude": 39.318859,
      "longitude": -8.674988,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "3261",
      "timestamp": 1703238959,
      "ems": null
    },
    {
      "latitude": 39.314987,
      "longitude": -8.676035,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 192,
      "squawk": "3261",
      "timestamp": 1703238968,
      "ems": null
    },
    {
      "latitude": 39.310989,
      "longitude": -8.677246,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 193,
      "squawk": "3261",
      "timestamp": 1703238977,
      "ems": null
    },
    {
      "latitude": 39.307034,
      "longitude": -8.678345,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 191,
      "squawk": "3261",
      "timestamp": 1703238986,
      "ems": null
    },
    {
      "latitude": 39.302891,
      "longitude": -8.679382,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 190,
      "squawk": "3261",
      "timestamp": 1703238995,
      "ems": null
    },
    {
      "latitude": 39.299072,
      "longitude": -8.680237,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 190,
      "squawk": "3261",
      "timestamp": 1703239004,
      "ems": null
    },
    {
      "latitude": 39.295071,
      "longitude": -8.68158,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 195,
      "squawk": "3261",
      "timestamp": 1703239013,
      "ems": null
    },
    {
      "latitude": 39.291229,
      "longitude": -8.682901,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 195,
      "squawk": "3261",
      "timestamp": 1703239022,
      "ems": null
    },
    {
      "latitude": 39.289948,
      "longitude": -8.683411,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 195,
      "squawk": "3261",
      "timestamp": 1703239025,
      "ems": null
    },
    {
      "latitude": 39.286224,
      "longitude": -8.684631,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 192,
      "squawk": "3261",
      "timestamp": 1703239034,
      "ems": null
    },
    {
      "latitude": 39.282349,
      "longitude": -8.685648,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 192,
      "squawk": "3261",
      "timestamp": 1703239043,
      "ems": null
    },
    {
      "latitude": 39.278183,
      "longitude": -8.686961,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 194,
      "squawk": "3261",
      "timestamp": 1703239052,
      "ems": null
    },
    {
      "latitude": 39.274017,
      "longitude": -8.688514,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 197,
      "squawk": "3261",
      "timestamp": 1703239061,
      "ems": null
    },
    {
      "latitude": 39.272724,
      "longitude": -8.689087,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 201,
      "squawk": "3261",
      "timestamp": 1703239064,
      "ems": null
    },
    {
      "latitude": 39.27142,
      "longitude": -8.68988,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 208,
      "squawk": "3261",
      "timestamp": 1703239067,
      "ems": null
    },
    {
      "latitude": 39.270309,
      "longitude": -8.690902,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "squawk": "3261",
      "timestamp": 1703239070,
      "ems": null
    },
    {
      "latitude": 39.269485,
      "longitude": -8.691857,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 221,
      "squawk": "3261",
      "timestamp": 1703239073,
      "ems": null
    },
    {
      "latitude": 39.268394,
      "longitude": -8.693359,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 229,
      "squawk": "3261",
      "timestamp": 1703239076,
      "ems": null
    },
    {
      "latitude": 39.267792,
      "longitude": -8.694519,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 237,
      "squawk": "3261",
      "timestamp": 1703239079,
      "ems": null
    },
    {
      "latitude": 39.267105,
      "longitude": -8.696336,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 245,
      "squawk": "3261",
      "timestamp": 1703239082,
      "ems": null
    },
    {
      "latitude": 39.266628,
      "longitude": -8.698059,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 253,
      "squawk": "3261",
      "timestamp": 1703239085,
      "ems": null
    },
    {
      "latitude": 39.266373,
      "longitude": -8.699739,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 260,
      "squawk": "3261",
      "timestamp": 1703239088,
      "ems": null
    },
    {
      "latitude": 39.2663,
      "longitude": -8.701599,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 268,
      "squawk": "3261",
      "timestamp": 1703239091,
      "ems": null
    },
    {
      "latitude": 39.266392,
      "longitude": -8.703369,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 275,
      "squawk": "3261",
      "timestamp": 1703239094,
      "ems": null
    },
    {
      "latitude": 39.266693,
      "longitude": -8.705232,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 284,
      "squawk": "3261",
      "timestamp": 1703239097,
      "ems": null
    },
    {
      "latitude": 39.267059,
      "longitude": -8.706546,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 293,
      "squawk": "3261",
      "timestamp": 1703239100,
      "ems": null
    },
    {
      "latitude": 39.267654,
      "longitude": -8.708158,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 297,
      "squawk": "3261",
      "timestamp": 1703239103,
      "ems": null
    },
    {
      "latitude": 39.26857,
      "longitude": -8.709889,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 306,
      "squawk": "3261",
      "timestamp": 1703239106,
      "ems": null
    },
    {
      "latitude": 39.269558,
      "longitude": -8.711121,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 316,
      "squawk": "3261",
      "timestamp": 1703239110,
      "ems": null
    },
    {
      "latitude": 39.270584,
      "longitude": -8.712158,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 323,
      "squawk": "3261",
      "timestamp": 1703239113,
      "ems": null
    },
    {
      "latitude": 39.271702,
      "longitude": -8.713013,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 333,
      "squawk": "3261",
      "timestamp": 1703239116,
      "ems": null
    },
    {
      "latitude": 39.272911,
      "longitude": -8.713623,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 341,
      "squawk": "3261",
      "timestamp": 1703239119,
      "ems": null
    },
    {
      "latitude": 39.274166,
      "longitude": -8.713989,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 348,
      "squawk": "3261",
      "timestamp": 1703239122,
      "ems": null
    },
    {
      "latitude": 39.275253,
      "longitude": -8.714128,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 355,
      "squawk": "3261",
      "timestamp": 1703239124,
      "ems": null
    },
    {
      "latitude": 39.276627,
      "longitude": -8.714068,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 3,
      "squawk": "3261",
      "timestamp": 1703239127,
      "ems": null
    },
    {
      "latitude": 39.278,
      "longitude": -8.713711,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 14,
      "squawk": "3261",
      "timestamp": 1703239131,
      "ems": null
    },
    {
      "latitude": 39.279243,
      "longitude": -8.713135,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 22,
      "squawk": "3261",
      "timestamp": 1703239134,
      "ems": null
    },
    {
      "latitude": 39.280407,
      "longitude": -8.712341,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 30,
      "squawk": "3261",
      "timestamp": 1703239137,
      "ems": null
    },
    {
      "latitude": 39.281433,
      "longitude": -8.711322,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 38,
      "squawk": "3261",
      "timestamp": 1703239140,
      "ems": null
    },
    {
      "latitude": 39.282314,
      "longitude": -8.710144,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 48,
      "squawk": "3261",
      "timestamp": 1703239143,
      "ems": null
    },
    {
      "latitude": 39.283081,
      "longitude": -8.708695,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 56,
      "squawk": "3261",
      "timestamp": 1703239146,
      "ems": null
    },
    {
      "latitude": 39.283585,
      "longitude": -8.707202,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 67,
      "squawk": "3261",
      "timestamp": 1703239149,
      "ems": null
    },
    {
      "latitude": 39.283951,
      "longitude": -8.705709,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 74,
      "squawk": "3261",
      "timestamp": 1703239152,
      "ems": null
    },
    {
      "latitude": 39.28413,
      "longitude": -8.704285,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "3261",
      "timestamp": 1703239154,
      "ems": null
    },
    {
      "latitude": 39.284176,
      "longitude": -8.702515,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 91,
      "squawk": "3261",
      "timestamp": 1703239157,
      "ems": null
    },
    {
      "latitude": 39.283951,
      "longitude": -8.700813,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 103,
      "squawk": "3261",
      "timestamp": 1703239161,
      "ems": null
    },
    {
      "latitude": 39.283813,
      "longitude": -8.700276,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 111,
      "squawk": "3261",
      "timestamp": 1703239164,
      "ems": null
    },
    {
      "latitude": 39.282898,
      "longitude": -8.697709,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 118,
      "squawk": "3261",
      "timestamp": 1703239167,
      "ems": null
    },
    {
      "latitude": 39.282223,
      "longitude": -8.696472,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 125,
      "squawk": "3261",
      "timestamp": 1703239170,
      "ems": null
    },
    {
      "latitude": 39.28125,
      "longitude": -8.695142,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 135,
      "squawk": "3261",
      "timestamp": 1703239173,
      "ems": null
    },
    {
      "latitude": 39.280472,
      "longitude": -8.694425,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 145,
      "squawk": "3261",
      "timestamp": 1703239175,
      "ems": null
    },
    {
      "latitude": 39.279011,
      "longitude": -8.693359,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 151,
      "squawk": "3261",
      "timestamp": 1703239179,
      "ems": null
    },
    {
      "latitude": 39.277893,
      "longitude": -8.69281,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "squawk": "3261",
      "timestamp": 1703239182,
      "ems": null
    },
    {
      "latitude": 39.276535,
      "longitude": -8.692335,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 167,
      "squawk": "3261",
      "timestamp": 1703239185,
      "ems": null
    },
    {
      "latitude": 39.275284,
      "longitude": -8.692139,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 173,
      "squawk": "3261",
      "timestamp": 1703239188,
      "ems": null
    },
    {
      "latitude": 39.273933,
      "longitude": -8.692017,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 177,
      "squawk": "3261",
      "timestamp": 1703239191,
      "ems": null
    },
    {
      "latitude": 39.272644,
      "longitude": -8.692096,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 181,
      "squawk": "3261",
      "timestamp": 1703239194,
      "ems": null
    },
    {
      "latitude": 39.271317,
      "longitude": -8.692156,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 182,
      "squawk": "3261",
      "timestamp": 1703239197,
      "ems": null
    },
    {
      "latitude": 39.269989,
      "longitude": -8.692156,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 177,
      "squawk": "3261",
      "timestamp": 1703239200,
      "ems": null
    },
    {
      "latitude": 39.268394,
      "longitude": -8.691956,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 172,
      "squawk": "3261",
      "timestamp": 1703239203,
      "ems": null
    },
    {
      "latitude": 39.266998,
      "longitude": -8.691528,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 166,
      "squawk": "3261",
      "timestamp": 1703239206,
      "ems": null
    },
    {
      "latitude": 39.265778,
      "longitude": -8.690902,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 157,
      "squawk": "3261",
      "timestamp": 1703239209,
      "ems": null
    },
    {
      "latitude": 39.26458,
      "longitude": -8.690063,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 151,
      "squawk": "3261",
      "timestamp": 1703239212,
      "ems": null
    },
    {
      "latitude": 39.263626,
      "longitude": -8.688992,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 138,
      "squawk": "3261",
      "timestamp": 1703239215,
      "ems": null
    },
    {
      "latitude": 39.262997,
      "longitude": -8.68811,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 128,
      "squawk": "3261",
      "timestamp": 1703239217,
      "ems": null
    },
    {
      "latitude": 39.26207,
      "longitude": -8.686304,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 120,
      "squawk": "3261",
      "timestamp": 1703239221,
      "ems": null
    },
    {
      "latitude": 39.261475,
      "longitude": -8.684812,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 117,
      "squawk": "3261",
      "timestamp": 1703239224,
      "ems": null
    },
    {
      "latitude": 39.260948,
      "longitude": -8.683472,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 116,
      "squawk": "3261",
      "timestamp": 1703239226,
      "ems": null
    },
    {
      "latitude": 39.260387,
      "longitude": -8.681824,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 113,
      "squawk": "3261",
      "timestamp": 1703239230,
      "ems": null
    },
    {
      "latitude": 39.259918,
      "longitude": -8.680393,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 109,
      "squawk": "3261",
      "timestamp": 1703239233,
      "ems": null
    },
    {
      "latitude": 39.259689,
      "longitude": -8.679443,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 103,
      "squawk": "3261",
      "timestamp": 1703239236,
      "ems": null
    },
    {
      "latitude": 39.259365,
      "longitude": -8.677185,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 97,
      "squawk": "3261",
      "timestamp": 1703239239,
      "ems": null
    },
    {
      "latitude": 39.259277,
      "longitude": -8.676273,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 96,
      "squawk": "3261",
      "timestamp": 1703239242,
      "ems": null
    },
    {
      "latitude": 39.259094,
      "longitude": -8.673944,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 96,
      "squawk": "3261",
      "timestamp": 1703239245,
      "ems": null
    },
    {
      "latitude": 39.258945,
      "longitude": -8.672241,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 96,
      "squawk": "3261",
      "timestamp": 1703239248,
      "ems": null
    },
    {
      "latitude": 39.258804,
      "longitude": -8.670776,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 95,
      "squawk": "3261",
      "timestamp": 1703239251,
      "ems": null
    },
    {
      "latitude": 39.258667,
      "longitude": -8.669006,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 96,
      "squawk": "3261",
      "timestamp": 1703239254,
      "ems": null
    },
    {
      "latitude": 39.258526,
      "longitude": -8.66748,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 96,
      "squawk": "3261",
      "timestamp": 1703239257,
      "ems": null
    },
    {
      "latitude": 39.258389,
      "longitude": -8.665894,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 95,
      "squawk": "3261",
      "timestamp": 1703239260,
      "ems": null
    },
    {
      "latitude": 39.258339,
      "longitude": -8.664246,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 92,
      "squawk": "3261",
      "timestamp": 1703239263,
      "ems": null
    },
    {
      "latitude": 39.258293,
      "longitude": -8.662537,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 91,
      "squawk": "3261",
      "timestamp": 1703239266,
      "ems": null
    },
    {
      "latitude": 39.258293,
      "longitude": -8.66095,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 90,
      "squawk": "3261",
      "timestamp": 1703239269,
      "ems": null
    },
    {
      "latitude": 39.258293,
      "longitude": -8.659363,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 90,
      "squawk": "3261",
      "timestamp": 1703239272,
      "ems": null
    },
    {
      "latitude": 39.25827,
      "longitude": -8.657704,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 90,
      "squawk": "3261",
      "timestamp": 1703239275,
      "ems": null
    },
    {
      "latitude": 39.258316,
      "longitude": -8.656212,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 89,
      "squawk": "3261",
      "timestamp": 1703239278,
      "ems": null
    },
    {
      "latitude": 39.258293,
      "longitude": -8.654419,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 89,
      "squawk": "3261",
      "timestamp": 1703239281,
      "ems": null
    },
    {
      "latitude": 39.258362,
      "longitude": -8.652868,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 87,
      "squawk": "3261",
      "timestamp": 1703239284,
      "ems": null
    },
    {
      "latitude": 39.258389,
      "longitude": -8.651184,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 88,
      "squawk": "3261",
      "timestamp": 1703239287,
      "ems": null
    },
    {
      "latitude": 39.258434,
      "longitude": -8.649597,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 89,
      "squawk": "3261",
      "timestamp": 1703239290,
      "ems": null
    },
    {
      "latitude": 39.258408,
      "longitude": -8.646359,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 93,
      "squawk": "3261",
      "timestamp": 1703239296,
      "ems": null
    },
    {
      "latitude": 39.258224,
      "longitude": -8.644568,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 99,
      "squawk": "3261",
      "timestamp": 1703239299,
      "ems": null
    },
    {
      "latitude": 39.257904,
      "longitude": -8.642957,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 106,
      "squawk": "3261",
      "timestamp": 1703239302,
      "ems": null
    },
    {
      "latitude": 39.257504,
      "longitude": -8.641479,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 110,
      "squawk": "3261",
      "timestamp": 1703239306,
      "ems": null
    },
    {
      "latitude": 39.257034,
      "longitude": -8.639971,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 109,
      "squawk": "3261",
      "timestamp": 1703239309,
      "ems": null
    },
    {
      "latitude": 39.256664,
      "longitude": -8.638306,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 104,
      "squawk": "3261",
      "timestamp": 1703239311,
      "ems": null
    },
    {
      "latitude": 39.256432,
      "longitude": -8.636475,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 98,
      "squawk": "3261",
      "timestamp": 1703239315,
      "ems": null
    },
    {
      "latitude": 39.256302,
      "longitude": -8.635135,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 98,
      "squawk": "3261",
      "timestamp": 1703239318,
      "ems": null
    },
    {
      "latitude": 39.256058,
      "longitude": -8.633301,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 98,
      "squawk": "3261",
      "timestamp": 1703239321,
      "ems": null
    },
    {
      "latitude": 39.255547,
      "longitude": -8.628662,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 99,
      "squawk": "3261",
      "timestamp": 1703239330,
      "ems": null
    },
    {
      "latitude": 39.255314,
      "longitude": -8.627197,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 100,
      "squawk": "3261",
      "timestamp": 1703239333,
      "ems": null
    },
    {
      "latitude": 39.255127,
      "longitude": -8.625916,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 100,
      "squawk": "3261",
      "timestamp": 1703239335,
      "ems": null
    },
    {
      "latitude": 39.25499,
      "longitude": -8.624634,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 100,
      "squawk": "3261",
      "timestamp": 1703239338,
      "ems": null
    },
    {
      "latitude": 39.254333,
      "longitude": -8.619849,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 99,
      "squawk": "3261",
      "timestamp": 1703239348,
      "ems": null
    },
    {
      "latitude": 39.253731,
      "longitude": -8.615601,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 100,
      "squawk": "3261",
      "timestamp": 1703239357,
      "ems": null
    },
    {
      "latitude": 39.252987,
      "longitude": -8.611206,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 101,
      "squawk": "3261",
      "timestamp": 1703239366,
      "ems": null
    },
    {
      "latitude": 39.252289,
      "longitude": -8.607056,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 102,
      "squawk": "3261",
      "timestamp": 1703239375,
      "ems": null
    },
    {
      "latitude": 39.251545,
      "longitude": -8.602966,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 104,
      "squawk": "3261",
      "timestamp": 1703239384,
      "ems": null
    },
    {
      "latitude": 39.251217,
      "longitude": -8.601501,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 106,
      "squawk": "3261",
      "timestamp": 1703239387,
      "ems": null
    },
    {
      "latitude": 39.250984,
      "longitude": -8.600525,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 106,
      "squawk": "3261",
      "timestamp": 1703239389,
      "ems": null
    },
    {
      "latitude": 39.250008,
      "longitude": -8.596008,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 105,
      "squawk": "3261",
      "timestamp": 1703239399,
      "ems": null
    },
    {
      "latitude": 39.24968,
      "longitude": -8.594666,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 107,
      "squawk": "3261",
      "timestamp": 1703239402,
      "ems": null
    },
    {
      "latitude": 39.248657,
      "longitude": -8.590393,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 108,
      "squawk": "3261",
      "timestamp": 1703239411,
      "ems": null
    },
    {
      "latitude": 39.247513,
      "longitude": -8.585995,
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
      "heading": 109,
      "squawk": "3261",
      "timestamp": 1703239420,
      "ems": null
    },
    {
      "latitude": 39.246689,
      "longitude": -8.583248,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 112,
      "squawk": "3261",
      "timestamp": 1703239426,
      "ems": null
    },
    {
      "latitude": 39.245819,
      "longitude": -8.580383,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 110,
      "squawk": "3261",
      "timestamp": 1703239432,
      "ems": null
    },
    {
      "latitude": 39.245071,
      "longitude": -8.576965,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 102,
      "squawk": "3261",
      "timestamp": 1703239440,
      "ems": null
    },
    {
      "latitude": 39.244888,
      "longitude": -8.5755,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 98,
      "squawk": "3261",
      "timestamp": 1703239443,
      "ems": null
    },
    {
      "latitude": 39.244747,
      "longitude": -8.574097,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 97,
      "squawk": "3261",
      "timestamp": 1703239446,
      "ems": null
    },
    {
      "latitude": 39.244656,
      "longitude": -8.572876,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 95,
      "squawk": "3261",
      "timestamp": 1703239448,
      "ems": null
    },
    {
      "latitude": 39.244537,
      "longitude": -8.571306,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 95,
      "squawk": "3261",
      "timestamp": 1703239452,
      "ems": null
    },
    {
      "latitude": 39.244469,
      "longitude": -8.570129,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 97,
      "squawk": "3261",
      "timestamp": 1703239454,
      "ems": null
    },
    {
      "latitude": 39.244354,
      "longitude": -8.569217,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 98,
      "squawk": "3261",
      "timestamp": 1703239456,
      "ems": null
    },
    {
      "latitude": 39.24321,
      "longitude": -8.564978,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 113,
      "squawk": "3261",
      "timestamp": 1703239465,
      "ems": null
    },
    {
      "latitude": 39.242706,
      "longitude": -8.563544,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 114,
      "squawk": "3261",
      "timestamp": 1703239469,
      "ems": null
    },
    {
      "latitude": 39.242249,
      "longitude": -8.562231,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 114,
      "squawk": "3261",
      "timestamp": 1703239471,
      "ems": null
    },
    {
      "latitude": 39.241791,
      "longitude": -8.560858,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 111,
      "squawk": "3261",
      "timestamp": 1703239475,
      "ems": null
    },
    {
      "latitude": 39.241379,
      "longitude": -8.559364,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 111,
      "squawk": "3261",
      "timestamp": 1703239478,
      "ems": null
    },
    {
      "latitude": 39.240974,
      "longitude": -8.558105,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 112,
      "squawk": "3261",
      "timestamp": 1703239480,
      "ems": null
    },
    {
      "latitude": 39.240326,
      "longitude": -8.556618,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 120,
      "squawk": "3261",
      "timestamp": 1703239484,
      "ems": null
    },
    {
      "latitude": 39.239628,
      "longitude": -8.555359,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 128,
      "squawk": "3261",
      "timestamp": 1703239487,
      "ems": null
    },
    {
      "latitude": 39.238834,
      "longitude": -8.55426,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 132,
      "squawk": "3261",
      "timestamp": 1703239490,
      "ems": null
    },
    {
      "latitude": 39.238091,
      "longitude": -8.553223,
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
      "heading": 133,
      "squawk": "3261",
      "timestamp": 1703239493,
      "ems": null
    },
    {
      "latitude": 39.237297,
      "longitude": -8.552185,
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
      "heading": 134,
      "squawk": "3261",
      "timestamp": 1703239496,
      "ems": null
    },
    {
      "latitude": 39.236526,
      "longitude": -8.551125,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 134,
      "squawk": "3261",
      "timestamp": 1703239498,
      "ems": null
    },
    {
      "latitude": 39.235668,
      "longitude": -8.549988,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 133,
      "squawk": "3261",
      "timestamp": 1703239502,
      "ems": null
    },
    {
      "latitude": 39.234833,
      "longitude": -8.548889,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 133,
      "squawk": "3261",
      "timestamp": 1703239505,
      "ems": null
    },
    {
      "latitude": 39.234039,
      "longitude": -8.547791,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 134,
      "squawk": "3261",
      "timestamp": 1703239508,
      "ems": null
    },
    {
      "latitude": 39.233139,
      "longitude": -8.546766,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 139,
      "squawk": "3261",
      "timestamp": 1703239511,
      "ems": null
    },
    {
      "latitude": 39.232224,
      "longitude": -8.545837,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703239514,
      "ems": null
    },
    {
      "latitude": 39.231155,
      "longitude": -8.544861,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 146,
      "squawk": "3261",
      "timestamp": 1703239517,
      "ems": null
    },
    {
      "latitude": 39.230164,
      "longitude": -8.54402,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 147,
      "squawk": "3261",
      "timestamp": 1703239520,
      "ems": null
    },
    {
      "latitude": 39.229065,
      "longitude": -8.543124,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 146,
      "squawk": "3261",
      "timestamp": 1703239523,
      "ems": null
    },
    {
      "latitude": 39.228176,
      "longitude": -8.542358,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 147,
      "squawk": "3261",
      "timestamp": 1703239526,
      "ems": null
    },
    {
      "latitude": 39.227188,
      "longitude": -8.541512,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 146,
      "squawk": "3261",
      "timestamp": 1703239529,
      "ems": null
    },
    {
      "latitude": 39.226273,
      "longitude": -8.540676,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703239532,
      "ems": null
    },
    {
      "latitude": 39.225334,
      "longitude": -8.539734,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 142,
      "squawk": "3261",
      "timestamp": 1703239535,
      "ems": null
    },
    {
      "latitude": 39.224403,
      "longitude": -8.538879,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703239538,
      "ems": null
    },
    {
      "latitude": 39.22348,
      "longitude": -8.538049,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 146,
      "squawk": "3261",
      "timestamp": 1703239541,
      "ems": null
    },
    {
      "latitude": 39.222633,
      "longitude": -8.537354,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 150,
      "squawk": "3261",
      "timestamp": 1703239544,
      "ems": null
    },
    {
      "latitude": 39.221283,
      "longitude": -8.536377,
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
      "heading": 151,
      "squawk": "3261",
      "timestamp": 1703239547,
      "ems": null
    },
    {
      "latitude": 39.22023,
      "longitude": -8.53572,
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
      "heading": 152,
      "squawk": "3261",
      "timestamp": 1703239550,
      "ems": null
    },
    {
      "latitude": 39.219097,
      "longitude": -8.534973,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 152,
      "squawk": "3261",
      "timestamp": 1703239553,
      "ems": null
    },
    {
      "latitude": 39.217888,
      "longitude": -8.53418,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 152,
      "squawk": "3261",
      "timestamp": 1703239556,
      "ems": null
    },
    {
      "latitude": 39.216862,
      "longitude": -8.533508,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 152,
      "squawk": "3261",
      "timestamp": 1703239559,
      "ems": null
    },
    {
      "latitude": 39.215836,
      "longitude": -8.532854,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 153,
      "squawk": "3261",
      "timestamp": 1703239562,
      "ems": null
    },
    {
      "latitude": 39.214783,
      "longitude": -8.532197,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 154,
      "squawk": "3261",
      "timestamp": 1703239565,
      "ems": null
    },
    {
      "latitude": 39.213558,
      "longitude": -8.531433,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 154,
      "squawk": "3261",
      "timestamp": 1703239568,
      "ems": null
    },
    {
      "latitude": 39.212631,
      "longitude": -8.530884,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 154,
      "squawk": "3261",
      "timestamp": 1703239571,
      "ems": null
    },
    {
      "latitude": 39.209599,
      "longitude": -8.528809,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 153,
      "squawk": "3261",
      "timestamp": 1703239580,
      "ems": null
    },
    {
      "latitude": 39.206387,
      "longitude": -8.526978,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 156,
      "squawk": "3261",
      "timestamp": 1703239589,
      "ems": null
    },
    {
      "latitude": 39.202972,
      "longitude": -8.525152,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 157,
      "squawk": "3261",
      "timestamp": 1703239599,
      "ems": null
    },
    {
      "latitude": 39.19973,
      "longitude": -8.523315,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 154,
      "squawk": "3261",
      "timestamp": 1703239607,
      "ems": null
    },
    {
      "latitude": 39.196701,
      "longitude": -8.521211,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 146,
      "squawk": "3261",
      "timestamp": 1703239616,
      "ems": null
    },
    {
      "latitude": 39.195587,
      "longitude": -8.520142,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703239619,
      "ems": null
    },
    {
      "latitude": 39.194515,
      "longitude": -8.519104,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 142,
      "squawk": "3261",
      "timestamp": 1703239623,
      "ems": null
    },
    {
      "latitude": 39.193542,
      "longitude": -8.518166,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703239625,
      "ems": null
    },
    {
      "latitude": 39.192627,
      "longitude": -8.51727,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703239628,
      "ems": null
    },
    {
      "latitude": 39.191437,
      "longitude": -8.516195,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703239632,
      "ems": null
    },
    {
      "latitude": 39.190475,
      "longitude": -8.515241,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 142,
      "squawk": "3261",
      "timestamp": 1703239634,
      "ems": null
    },
    {
      "latitude": 39.189606,
      "longitude": -8.514404,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 141,
      "squawk": "3261",
      "timestamp": 1703239638,
      "ems": null
    },
    {
      "latitude": 39.188511,
      "longitude": -8.513184,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 140,
      "squawk": "3261",
      "timestamp": 1703239641,
      "ems": null
    },
    {
      "latitude": 39.18758,
      "longitude": -8.512207,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 139,
      "squawk": "3261",
      "timestamp": 1703239644,
      "ems": null
    },
    {
      "latitude": 39.185764,
      "longitude": -8.510132,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 136,
      "squawk": "3261",
      "timestamp": 1703239650,
      "ems": null
    },
    {
      "latitude": 39.184753,
      "longitude": -8.508851,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 136,
      "squawk": "3261",
      "timestamp": 1703239653,
      "ems": null
    },
    {
      "latitude": 39.183838,
      "longitude": -8.507776,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 138,
      "squawk": "3261",
      "timestamp": 1703239656,
      "ems": null
    },
    {
      "latitude": 39.181,
      "longitude": -8.504851,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 141,
      "squawk": "3261",
      "timestamp": 1703239665,
      "ems": null
    },
    {
      "latitude": 39.177887,
      "longitude": -8.501806,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703239674,
      "ems": null
    },
    {
      "latitude": 39.175941,
      "longitude": -8.499939,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 144,
      "squawk": "3261",
      "timestamp": 1703239680,
      "ems": null
    },
    {
      "latitude": 39.174919,
      "longitude": -8.499023,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 142,
      "squawk": "3261",
      "timestamp": 1703239683,
      "ems": null
    },
    {
      "latitude": 39.172119,
      "longitude": -8.496015,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 141,
      "squawk": "3261",
      "timestamp": 1703239692,
      "ems": null
    },
    {
      "latitude": 39.16983,
      "longitude": -8.493984,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "3261",
      "timestamp": 1703239698,
      "ems": null
    },
    {
      "latitude": 39.168869,
      "longitude": -8.493268,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 148,
      "squawk": "3261",
      "timestamp": 1703239701,
      "ems": null
    },
    {
      "latitude": 39.165607,
      "longitude": -8.490417,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 142,
      "squawk": "3261",
      "timestamp": 1703239710,
      "ems": null
    },
    {
      "latitude": 39.162643,
      "longitude": -8.487416,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 142,
      "squawk": "3261",
      "timestamp": 1703239719,
      "ems": null
    },
    {
      "latitude": 39.16058,
      "longitude": -8.485352,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 140,
      "squawk": "3261",
      "timestamp": 1703239725,
      "ems": null
    },
    {
      "latitude": 39.159622,
      "longitude": -8.484252,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 137,
      "squawk": "3261",
      "timestamp": 1703239728,
      "ems": null
    },
    {
      "latitude": 39.158672,
      "longitude": -8.483154,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 138,
      "squawk": "3261",
      "timestamp": 1703239731,
      "ems": null
    },
    {
      "latitude": 39.15564,
      "longitude": -8.48031,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 144,
      "squawk": "3261",
      "timestamp": 1703239740,
      "ems": null
    },
    {
      "latitude": 39.152527,
      "longitude": -8.477325,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 142,
      "squawk": "3261",
      "timestamp": 1703239749,
      "ems": null
    },
    {
      "latitude": 39.149639,
      "longitude": -8.474426,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 141,
      "squawk": "3261",
      "timestamp": 1703239758,
      "ems": null
    },
    {
      "latitude": 39.146576,
      "longitude": -8.471415,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 140,
      "squawk": "3261",
      "timestamp": 1703239768,
      "ems": null
    },
    {
      "latitude": 39.144707,
      "longitude": -8.469299,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 136,
      "squawk": "3261",
      "timestamp": 1703239774,
      "ems": null
    },
    {
      "latitude": 39.143963,
      "longitude": -8.468323,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 135,
      "squawk": "3261",
      "timestamp": 1703239776,
      "ems": null
    },
    {
      "latitude": 39.143005,
      "longitude": -8.467115,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 137,
      "squawk": "3261",
      "timestamp": 1703239780,
      "ems": null
    },
    {
      "latitude": 39.140076,
      "longitude": -8.464129,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703239788,
      "ems": null
    },
    {
      "latitude": 39.136978,
      "longitude": -8.461304,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703239798,
      "ems": null
    },
    {
      "latitude": 39.13504,
      "longitude": -8.459293,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 141,
      "squawk": "3261",
      "timestamp": 1703239803,
      "ems": null
    },
    {
      "latitude": 39.134186,
      "longitude": -8.458435,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "3261",
      "timestamp": 1703239806,
      "ems": null
    },
    {
      "latitude": 39.131195,
      "longitude": -8.455413,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 142,
      "squawk": "3261",
      "timestamp": 1703239815,
      "ems": null
    },
    {
      "latitude": 39.127808,
      "longitude": -8.45189,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 139,
      "squawk": "3261",
      "timestamp": 1703239825,
      "ems": null
    },
    {
      "latitude": 39.125668,
      "longitude": -8.449585,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 140,
      "squawk": "3261",
      "timestamp": 1703239832,
      "ems": null
    },
    {
      "latitude": 39.122967,
      "longitude": -8.446594,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 138,
      "squawk": "3261",
      "timestamp": 1703239841,
      "ems": null
    },
    {
      "latitude": 39.11998,
      "longitude": -8.44353,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703239850,
      "ems": null
    },
    {
      "latitude": 39.116867,
      "longitude": -8.440605,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 144,
      "squawk": "3261",
      "timestamp": 1703239859,
      "ems": null
    },
    {
      "latitude": 39.115997,
      "longitude": -8.439829,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 145,
      "squawk": "3261",
      "timestamp": 1703239862,
      "ems": null
    },
    {
      "latitude": 39.11499,
      "longitude": -8.438993,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 149,
      "squawk": "3261",
      "timestamp": 1703239865,
      "ems": null
    },
    {
      "latitude": 39.113663,
      "longitude": -8.438097,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 152,
      "squawk": "3261",
      "timestamp": 1703239868,
      "ems": null
    },
    {
      "latitude": 39.112518,
      "longitude": -8.437321,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "3261",
      "timestamp": 1703239871,
      "ems": null
    },
    {
      "latitude": 39.111465,
      "longitude": -8.436664,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 152,
      "squawk": "3261",
      "timestamp": 1703239874,
      "ems": null
    },
    {
      "latitude": 39.110306,
      "longitude": -8.435852,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 150,
      "squawk": "3261",
      "timestamp": 1703239877,
      "ems": null
    },
    {
      "latitude": 39.109047,
      "longitude": -8.434937,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 150,
      "squawk": "3261",
      "timestamp": 1703239880,
      "ems": null
    },
    {
      "latitude": 39.108162,
      "longitude": -8.434265,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 149,
      "squawk": "3261",
      "timestamp": 1703239883,
      "ems": null
    },
    {
      "latitude": 39.105183,
      "longitude": -8.431396,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 141,
      "squawk": "3261",
      "timestamp": 1703239892,
      "ems": null
    },
    {
      "latitude": 39.10437,
      "longitude": -8.430573,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 140,
      "squawk": "3261",
      "timestamp": 1703239895,
      "ems": null
    },
    {
      "latitude": 39.103367,
      "longitude": -8.429565,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 140,
      "squawk": "3261",
      "timestamp": 1703239898,
      "ems": null
    },
    {
      "latitude": 39.102219,
      "longitude": -8.428424,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703239901,
      "ems": null
    },
    {
      "latitude": 39.101257,
      "longitude": -8.427469,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703239904,
      "ems": null
    },
    {
      "latitude": 39.100201,
      "longitude": -8.426514,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703239907,
      "ems": null
    },
    {
      "latitude": 39.09713,
      "longitude": -8.423828,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 147,
      "squawk": "3261",
      "timestamp": 1703239916,
      "ems": null
    },
    {
      "latitude": 39.095966,
      "longitude": -8.422913,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 148,
      "squawk": "3261",
      "timestamp": 1703239920,
      "ems": null
    },
    {
      "latitude": 39.094986,
      "longitude": -8.422155,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 148,
      "squawk": "3261",
      "timestamp": 1703239922,
      "ems": null
    },
    {
      "latitude": 39.093826,
      "longitude": -8.421265,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 149,
      "squawk": "3261",
      "timestamp": 1703239926,
      "ems": null
    },
    {
      "latitude": 39.092697,
      "longitude": -8.420424,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 149,
      "squawk": "3261",
      "timestamp": 1703239928,
      "ems": null
    },
    {
      "latitude": 39.091461,
      "longitude": -8.419468,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 149,
      "squawk": "3261",
      "timestamp": 1703239931,
      "ems": null
    },
    {
      "latitude": 39.090271,
      "longitude": -8.418572,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 149,
      "squawk": "3261",
      "timestamp": 1703239934,
      "ems": null
    },
    {
      "latitude": 39.089355,
      "longitude": -8.417847,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 150,
      "squawk": "3261",
      "timestamp": 1703239937,
      "ems": null
    },
    {
      "latitude": 39.08812,
      "longitude": -8.416961,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 150,
      "squawk": "3261",
      "timestamp": 1703239940,
      "ems": null
    },
    {
      "latitude": 39.084641,
      "longitude": -8.414214,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 142,
      "squawk": "3261",
      "timestamp": 1703239949,
      "ems": null
    },
    {
      "latitude": 39.08363,
      "longitude": -8.413025,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 134,
      "squawk": "3261",
      "timestamp": 1703239952,
      "ems": null
    },
    {
      "latitude": 39.082993,
      "longitude": -8.412124,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 130,
      "squawk": "3261",
      "timestamp": 1703239955,
      "ems": null
    },
    {
      "latitude": 39.08194,
      "longitude": -8.410512,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 130,
      "squawk": "3261",
      "timestamp": 1703239959,
      "ems": null
    },
    {
      "latitude": 39.08107,
      "longitude": -8.409198,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 130,
      "squawk": "3261",
      "timestamp": 1703239962,
      "ems": null
    },
    {
      "latitude": 39.080246,
      "longitude": -8.408004,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 131,
      "squawk": "3261",
      "timestamp": 1703239965,
      "ems": null
    },
    {
      "latitude": 39.079376,
      "longitude": -8.406751,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 130,
      "squawk": "3261",
      "timestamp": 1703239968,
      "ems": null
    },
    {
      "latitude": 39.078693,
      "longitude": -8.405701,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 129,
      "squawk": "3261",
      "timestamp": 1703239970,
      "ems": null
    },
    {
      "latitude": 39.07782,
      "longitude": -8.404422,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 130,
      "squawk": "3261",
      "timestamp": 1703239973,
      "ems": null
    },
    {
      "latitude": 39.07695,
      "longitude": -8.403168,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 133,
      "squawk": "3261",
      "timestamp": 1703239977,
      "ems": null
    },
    {
      "latitude": 39.074318,
      "longitude": -8.399902,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 137,
      "squawk": "3261",
      "timestamp": 1703239985,
      "ems": null
    },
    {
      "latitude": 39.073296,
      "longitude": -8.398743,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 138,
      "squawk": "3261",
      "timestamp": 1703239989,
      "ems": null
    },
    {
      "latitude": 39.072643,
      "longitude": -8.39801,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 139,
      "squawk": "3261",
      "timestamp": 1703239991,
      "ems": null
    },
    {
      "latitude": 39.07132,
      "longitude": -8.3966,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "3261",
      "timestamp": 1703239995,
      "ems": null
    },
    {
      "latitude": 39.070454,
      "longitude": -8.395752,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 142,
      "squawk": "3261",
      "timestamp": 1703239997,
      "ems": null
    },
    {
      "latitude": 39.069477,
      "longitude": -8.394836,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 144,
      "squawk": "3261",
      "timestamp": 1703240000,
      "ems": null
    },
    {
      "latitude": 39.068172,
      "longitude": -8.393677,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 145,
      "squawk": "3261",
      "timestamp": 1703240004,
      "ems": null
    },
    {
      "latitude": 39.067154,
      "longitude": -8.392778,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "3261",
      "timestamp": 1703240007,
      "ems": null
    },
    {
      "latitude": 39.066193,
      "longitude": -8.391943,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 145,
      "squawk": "3261",
      "timestamp": 1703240010,
      "ems": null
    },
    {
      "latitude": 39.065002,
      "longitude": -8.390927,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 145,
      "squawk": "3261",
      "timestamp": 1703240012,
      "ems": null
    },
    {
      "latitude": 39.063892,
      "longitude": -8.389954,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 146,
      "squawk": "3261",
      "timestamp": 1703240016,
      "ems": null
    },
    {
      "latitude": 39.062897,
      "longitude": -8.389136,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 147,
      "squawk": "3261",
      "timestamp": 1703240018,
      "ems": null
    },
    {
      "latitude": 39.061661,
      "longitude": -8.388181,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "3261",
      "timestamp": 1703240022,
      "ems": null
    },
    {
      "latitude": 39.058586,
      "longitude": -8.385437,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 145,
      "squawk": "3261",
      "timestamp": 1703240031,
      "ems": null
    },
    {
      "latitude": 39.05542,
      "longitude": -8.382507,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703240040,
      "ems": null
    },
    {
      "latitude": 39.052414,
      "longitude": -8.379523,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703240049,
      "ems": null
    },
    {
      "latitude": 39.049274,
      "longitude": -8.376587,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703240058,
      "ems": null
    },
    {
      "latitude": 39.046108,
      "longitude": -8.373779,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 145,
      "squawk": "3261",
      "timestamp": 1703240067,
      "ems": null
    },
    {
      "latitude": 39.042847,
      "longitude": -8.370925,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 145,
      "squawk": "3261",
      "timestamp": 1703240076,
      "ems": null
    },
    {
      "latitude": 39.040558,
      "longitude": -8.368835,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703240082,
      "ems": null
    },
    {
      "latitude": 39.038662,
      "longitude": -8.366882,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 139,
      "squawk": "3261",
      "timestamp": 1703240088,
      "ems": null
    },
    {
      "latitude": 39.037766,
      "longitude": -8.36585,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 139,
      "squawk": "3261",
      "timestamp": 1703240091,
      "ems": null
    },
    {
      "latitude": 39.03685,
      "longitude": -8.364835,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 139,
      "squawk": "3261",
      "timestamp": 1703240094,
      "ems": null
    },
    {
      "latitude": 39.035843,
      "longitude": -8.363701,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 139,
      "squawk": "3261",
      "timestamp": 1703240097,
      "ems": null
    },
    {
      "latitude": 39.034935,
      "longitude": -8.362732,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "3261",
      "timestamp": 1703240100,
      "ems": null
    },
    {
      "latitude": 39.034012,
      "longitude": -8.36161,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 138,
      "squawk": "3261",
      "timestamp": 1703240104,
      "ems": null
    },
    {
      "latitude": 39.033051,
      "longitude": -8.360596,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "3261",
      "timestamp": 1703240106,
      "ems": null
    },
    {
      "latitude": 39.030327,
      "longitude": -8.3573,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 136,
      "squawk": "3261",
      "timestamp": 1703240116,
      "ems": null
    },
    {
      "latitude": 39.027557,
      "longitude": -8.354088,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 138,
      "squawk": "3261",
      "timestamp": 1703240124,
      "ems": null
    },
    {
      "latitude": 39.024693,
      "longitude": -8.35083,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 137,
      "squawk": "3261",
      "timestamp": 1703240133,
      "ems": null
    },
    {
      "latitude": 39.02179,
      "longitude": -8.34746,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 138,
      "squawk": "3261",
      "timestamp": 1703240142,
      "ems": null
    },
    {
      "latitude": 39.018677,
      "longitude": -8.343878,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 137,
      "squawk": "3261",
      "timestamp": 1703240152,
      "ems": null
    },
    {
      "latitude": 39.015884,
      "longitude": -8.340593,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 136,
      "squawk": "3261",
      "timestamp": 1703240161,
      "ems": null
    },
    {
      "latitude": 39.013184,
      "longitude": -8.33719,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 134,
      "squawk": "3261",
      "timestamp": 1703240170,
      "ems": null
    },
    {
      "latitude": 39.012222,
      "longitude": -8.335937,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 132,
      "squawk": "3261",
      "timestamp": 1703240173,
      "ems": null
    },
    {
      "latitude": 39.011307,
      "longitude": -8.334622,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 132,
      "squawk": "3261",
      "timestamp": 1703240176,
      "ems": null
    },
    {
      "latitude": 39.010574,
      "longitude": -8.333608,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 132,
      "squawk": "3261",
      "timestamp": 1703240179,
      "ems": null
    },
    {
      "latitude": 39.009613,
      "longitude": -8.332275,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 131,
      "squawk": "3261",
      "timestamp": 1703240182,
      "ems": null
    },
    {
      "latitude": 39.008774,
      "longitude": -8.331055,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 131,
      "squawk": "3261",
      "timestamp": 1703240185,
      "ems": null
    },
    {
      "latitude": 39.007889,
      "longitude": -8.329712,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "3261",
      "timestamp": 1703240188,
      "ems": null
    },
    {
      "latitude": 39.007141,
      "longitude": -8.328712,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "3261",
      "timestamp": 1703240191,
      "ems": null
    },
    {
      "latitude": 39.004395,
      "longitude": -8.325129,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 136,
      "squawk": "3261",
      "timestamp": 1703240200,
      "ems": null
    },
    {
      "latitude": 39.003433,
      "longitude": -8.323995,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "3261",
      "timestamp": 1703240203,
      "ems": null
    },
    {
      "latitude": 39.002537,
      "longitude": -8.322937,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 138,
      "squawk": "3261",
      "timestamp": 1703240206,
      "ems": null
    },
    {
      "latitude": 39.001602,
      "longitude": -8.321964,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 139,
      "squawk": "3261",
      "timestamp": 1703240209,
      "ems": null
    },
    {
      "latitude": 39.000721,
      "longitude": -8.320923,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 137,
      "squawk": "3261",
      "timestamp": 1703240212,
      "ems": null
    },
    {
      "latitude": 38.999908,
      "longitude": -8.319576,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 118,
      "squawk": "3261",
      "timestamp": 1703240216,
      "ems": null
    },
    {
      "latitude": 38.999649,
      "longitude": -8.318237,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 98,
      "squawk": "3261",
      "timestamp": 1703240218,
      "ems": null
    },
    {
      "latitude": 38.999771,
      "longitude": -8.31683,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 83,
      "squawk": "3261",
      "timestamp": 1703240221,
      "ems": null
    },
    {
      "latitude": 38.999836,
      "longitude": -8.315491,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 84,
      "squawk": "3261",
      "timestamp": 1703240224,
      "ems": null
    },
    {
      "latitude": 39,
      "longitude": -8.314142,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 75,
      "squawk": "3261",
      "timestamp": 1703240228,
      "ems": null
    },
    {
      "latitude": 39.000366,
      "longitude": -8.312889,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 65,
      "squawk": "3261",
      "timestamp": 1703240230,
      "ems": null
    },
    {
      "latitude": 39.000858,
      "longitude": -8.311584,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 63,
      "squawk": "3261",
      "timestamp": 1703240233,
      "ems": null
    },
    {
      "latitude": 39.001324,
      "longitude": -8.310364,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703240237,
      "ems": null
    },
    {
      "latitude": 39.00174,
      "longitude": -8.309068,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 67,
      "squawk": "3261",
      "timestamp": 1703240239,
      "ems": null
    },
    {
      "latitude": 39.002197,
      "longitude": -8.307754,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 66,
      "squawk": "3261",
      "timestamp": 1703240243,
      "ems": null
    },
    {
      "latitude": 39.002628,
      "longitude": -8.306458,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 65,
      "squawk": "3261",
      "timestamp": 1703240246,
      "ems": null
    },
    {
      "latitude": 39.003002,
      "longitude": -8.305481,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703240248,
      "ems": null
    },
    {
      "latitude": 39.003559,
      "longitude": -8.304077,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 63,
      "squawk": "3261",
      "timestamp": 1703240252,
      "ems": null
    },
    {
      "latitude": 39.004025,
      "longitude": -8.302917,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 61,
      "squawk": "3261",
      "timestamp": 1703240255,
      "ems": null
    },
    {
      "latitude": 39.00449,
      "longitude": -8.301819,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 61,
      "squawk": "3261",
      "timestamp": 1703240258,
      "ems": null
    },
    {
      "latitude": 39.005981,
      "longitude": -8.298279,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 62,
      "squawk": "3261",
      "timestamp": 1703240267,
      "ems": null
    },
    {
      "latitude": 39.007378,
      "longitude": -8.294556,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 65,
      "squawk": "3261",
      "timestamp": 1703240276,
      "ems": null
    },
    {
      "latitude": 39.008606,
      "longitude": -8.290796,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 69,
      "squawk": "3261",
      "timestamp": 1703240285,
      "ems": null
    },
    {
      "latitude": 39.008972,
      "longitude": -8.289483,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 70,
      "squawk": "3261",
      "timestamp": 1703240288,
      "ems": null
    },
    {
      "latitude": 39.009285,
      "longitude": -8.288208,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 72,
      "squawk": "3261",
      "timestamp": 1703240291,
      "ems": null
    },
    {
      "latitude": 39.009567,
      "longitude": -8.286916,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 73,
      "squawk": "3261",
      "timestamp": 1703240294,
      "ems": null
    },
    {
      "latitude": 39.009796,
      "longitude": -8.285722,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 75,
      "squawk": "3261",
      "timestamp": 1703240297,
      "ems": null
    },
    {
      "latitude": 39.010117,
      "longitude": -8.284288,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 76,
      "squawk": "3261",
      "timestamp": 1703240300,
      "ems": null
    },
    {
      "latitude": 39.010357,
      "longitude": -8.282898,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 77,
      "squawk": "3261",
      "timestamp": 1703240303,
      "ems": null
    },
    {
      "latitude": 39.010574,
      "longitude": -8.281661,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 77,
      "squawk": "3261",
      "timestamp": 1703240306,
      "ems": null
    },
    {
      "latitude": 39.010849,
      "longitude": -8.280229,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 76,
      "squawk": "3261",
      "timestamp": 1703240309,
      "ems": null
    },
    {
      "latitude": 39.010914,
      "longitude": -8.279785,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 77,
      "squawk": "3261",
      "timestamp": 1703240311,
      "ems": null
    },
    {
      "latitude": 39.011333,
      "longitude": -8.277527,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 76,
      "squawk": "3261",
      "timestamp": 1703240315,
      "ems": null
    },
    {
      "latitude": 39.01231,
      "longitude": -8.273193,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 72,
      "squawk": "3261",
      "timestamp": 1703240325,
      "ems": null
    },
    {
      "latitude": 39.012592,
      "longitude": -8.272034,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 71,
      "squawk": "3261",
      "timestamp": 1703240328,
      "ems": null
    },
    {
      "latitude": 39.013008,
      "longitude": -8.270447,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 69,
      "squawk": "3261",
      "timestamp": 1703240331,
      "ems": null
    },
    {
      "latitude": 39.013458,
      "longitude": -8.269003,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 67,
      "squawk": "3261",
      "timestamp": 1703240334,
      "ems": null
    },
    {
      "latitude": 39.013962,
      "longitude": -8.26763,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703240337,
      "ems": null
    },
    {
      "latitude": 39.0145,
      "longitude": -8.266235,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 63,
      "squawk": "3261",
      "timestamp": 1703240340,
      "ems": null
    },
    {
      "latitude": 39.014969,
      "longitude": -8.265062,
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
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703240343,
      "ems": null
    },
    {
      "latitude": 39.01543,
      "longitude": -8.263794,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703240346,
      "ems": null
    },
    {
      "latitude": 39.01593,
      "longitude": -8.262555,
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
      "heading": 63,
      "squawk": "3261",
      "timestamp": 1703240350,
      "ems": null
    },
    {
      "latitude": 39.016296,
      "longitude": -8.2616,
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
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703240352,
      "ems": null
    },
    {
      "latitude": 39.016827,
      "longitude": -8.260071,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 65,
      "squawk": "3261",
      "timestamp": 1703240356,
      "ems": null
    },
    {
      "latitude": 39.017944,
      "longitude": -8.256584,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 68,
      "squawk": "3261",
      "timestamp": 1703240364,
      "ems": null
    },
    {
      "latitude": 39.018269,
      "longitude": -8.255432,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 69,
      "squawk": "3261",
      "timestamp": 1703240367,
      "ems": null
    },
    {
      "latitude": 39.018677,
      "longitude": -8.254136,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 69,
      "squawk": "3261",
      "timestamp": 1703240370,
      "ems": null
    },
    {
      "latitude": 39.018997,
      "longitude": -8.253061,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 69,
      "squawk": "3261",
      "timestamp": 1703240373,
      "ems": null
    },
    {
      "latitude": 39.019318,
      "longitude": -8.251867,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 69,
      "squawk": "3261",
      "timestamp": 1703240376,
      "ems": null
    },
    {
      "latitude": 39.019714,
      "longitude": -8.25061,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 69,
      "squawk": "3261",
      "timestamp": 1703240380,
      "ems": null
    },
    {
      "latitude": 39.02005,
      "longitude": -8.249419,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 69,
      "squawk": "3261",
      "timestamp": 1703240383,
      "ems": null
    },
    {
      "latitude": 39.02037,
      "longitude": -8.248224,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 70,
      "squawk": "3261",
      "timestamp": 1703240386,
      "ems": null
    },
    {
      "latitude": 39.021378,
      "longitude": -8.244642,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 69,
      "squawk": "3261",
      "timestamp": 1703240395,
      "ems": null
    },
    {
      "latitude": 39.022522,
      "longitude": -8.241358,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703240403,
      "ems": null
    },
    {
      "latitude": 39.022972,
      "longitude": -8.240234,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703240407,
      "ems": null
    },
    {
      "latitude": 39.023483,
      "longitude": -8.23891,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703240410,
      "ems": null
    },
    {
      "latitude": 39.023758,
      "longitude": -8.238134,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703240413,
      "ems": null
    },
    {
      "latitude": 39.024368,
      "longitude": -8.23645,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 65,
      "squawk": "3261",
      "timestamp": 1703240416,
      "ems": null
    },
    {
      "latitude": 39.025162,
      "longitude": -8.234009,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 65,
      "squawk": "3261",
      "timestamp": 1703240422,
      "ems": null
    },
    {
      "latitude": 39.026463,
      "longitude": -8.23053,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 63,
      "squawk": "3261",
      "timestamp": 1703240431,
      "ems": null
    },
    {
      "latitude": 39.027676,
      "longitude": -8.227539,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 61,
      "squawk": "3261",
      "timestamp": 1703240439,
      "ems": null
    },
    {
      "latitude": 39.028744,
      "longitude": -8.225098,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 59,
      "squawk": "3261",
      "timestamp": 1703240446,
      "ems": null
    },
    {
      "latitude": 39.029205,
      "longitude": -8.224043,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 59,
      "squawk": "3261",
      "timestamp": 1703240449,
      "ems": null
    },
    {
      "latitude": 39.029629,
      "longitude": -8.223145,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 58,
      "squawk": "3261",
      "timestamp": 1703240452,
      "ems": null
    },
    {
      "latitude": 39.030121,
      "longitude": -8.222013,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 60,
      "squawk": "3261",
      "timestamp": 1703240455,
      "ems": null
    },
    {
      "latitude": 39.03154,
      "longitude": -8.218788,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 60,
      "squawk": "3261",
      "timestamp": 1703240464,
      "ems": null
    },
    {
      "latitude": 39.032421,
      "longitude": -8.216675,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 61,
      "squawk": "3261",
      "timestamp": 1703240470,
      "ems": null
    },
    {
      "latitude": 39.033737,
      "longitude": -8.213593,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 60,
      "squawk": "3261",
      "timestamp": 1703240479,
      "ems": null
    },
    {
      "latitude": 39.035019,
      "longitude": -8.210608,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 61,
      "squawk": "3261",
      "timestamp": 1703240488,
      "ems": null
    },
    {
      "latitude": 39.036575,
      "longitude": -8.207026,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 60,
      "squawk": "3261",
      "timestamp": 1703240498,
      "ems": null
    },
    {
      "latitude": 39.037903,
      "longitude": -8.204279,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 56,
      "squawk": "3261",
      "timestamp": 1703240506,
      "ems": null
    },
    {
      "latitude": 39.038452,
      "longitude": -8.203264,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 55,
      "squawk": "3261",
      "timestamp": 1703240509,
      "ems": null
    },
    {
      "latitude": 39.03894,
      "longitude": -8.202332,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 54,
      "squawk": "3261",
      "timestamp": 1703240511,
      "ems": null
    },
    {
      "latitude": 39.039543,
      "longitude": -8.201233,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 53,
      "squawk": "3261",
      "timestamp": 1703240514,
      "ems": null
    },
    {
      "latitude": 39.0401,
      "longitude": -8.200219,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 54,
      "squawk": "3261",
      "timestamp": 1703240518,
      "ems": null
    },
    {
      "latitude": 39.040707,
      "longitude": -8.199158,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 54,
      "squawk": "3261",
      "timestamp": 1703240521,
      "ems": null
    },
    {
      "latitude": 39.04129,
      "longitude": -8.19813,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 53,
      "squawk": "3261",
      "timestamp": 1703240524,
      "ems": null
    },
    {
      "latitude": 39.04184,
      "longitude": -8.197174,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 52,
      "squawk": "3261",
      "timestamp": 1703240527,
      "ems": null
    },
    {
      "latitude": 39.042431,
      "longitude": -8.196228,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 51,
      "squawk": "3261",
      "timestamp": 1703240530,
      "ems": null
    },
    {
      "latitude": 39.042988,
      "longitude": -8.195313,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 51,
      "squawk": "3261",
      "timestamp": 1703240533,
      "ems": null
    },
    {
      "latitude": 39.044712,
      "longitude": -8.192444,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 51,
      "squawk": "3261",
      "timestamp": 1703240542,
      "ems": null
    },
    {
      "latitude": 39.046463,
      "longitude": -8.189591,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 52,
      "squawk": "3261",
      "timestamp": 1703240551,
      "ems": null
    },
    {
      "latitude": 39.048157,
      "longitude": -8.186768,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 52,
      "squawk": "3261",
      "timestamp": 1703240560,
      "ems": null
    },
    {
      "latitude": 39.049881,
      "longitude": -8.183777,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 54,
      "squawk": "3261",
      "timestamp": 1703240569,
      "ems": null
    },
    {
      "latitude": 39.051601,
      "longitude": -8.180725,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 54,
      "squawk": "3261",
      "timestamp": 1703240578,
      "ems": null
    },
    {
      "latitude": 39.053192,
      "longitude": -8.177769,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 56,
      "squawk": "3261",
      "timestamp": 1703240587,
      "ems": null
    },
    {
      "latitude": 39.054955,
      "longitude": -8.174744,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 45,
      "squawk": "3261",
      "timestamp": 1703240596,
      "ems": null
    },
    {
      "latitude": 39.055607,
      "longitude": -8.174133,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 34,
      "squawk": "3261",
      "timestamp": 1703240599,
      "ems": null
    },
    {
      "latitude": 39.056583,
      "longitude": -8.173462,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "3261",
      "timestamp": 1703240602,
      "ems": null
    },
    {
      "latitude": 39.057449,
      "longitude": -8.172992,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 21,
      "squawk": "3261",
      "timestamp": 1703240605,
      "ems": null
    },
    {
      "latitude": 39.058319,
      "longitude": -8.172574,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 19,
      "squawk": "3261",
      "timestamp": 1703240608,
      "ems": null
    },
    {
      "latitude": 39.059235,
      "longitude": -8.17218,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 20,
      "squawk": "3261",
      "timestamp": 1703240611,
      "ems": null
    },
    {
      "latitude": 39.060074,
      "longitude": -8.171753,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 20,
      "squawk": "3261",
      "timestamp": 1703240614,
      "ems": null
    },
    {
      "latitude": 39.06102,
      "longitude": -8.17132,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 21,
      "squawk": "3261",
      "timestamp": 1703240617,
      "ems": null
    },
    {
      "latitude": 39.06189,
      "longitude": -8.170902,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 21,
      "squawk": "3261",
      "timestamp": 1703240621,
      "ems": null
    },
    {
      "latitude": 39.062866,
      "longitude": -8.170349,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 23,
      "squawk": "3261",
      "timestamp": 1703240623,
      "ems": null
    },
    {
      "latitude": 39.063766,
      "longitude": -8.169827,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 25,
      "squawk": "3261",
      "timestamp": 1703240626,
      "ems": null
    },
    {
      "latitude": 39.065475,
      "longitude": -8.168762,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 27,
      "squawk": "3261",
      "timestamp": 1703240633,
      "ems": null
    },
    {
      "latitude": 39.066311,
      "longitude": -8.168213,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 26,
      "squawk": "3261",
      "timestamp": 1703240636,
      "ems": null
    },
    {
      "latitude": 39.067062,
      "longitude": -8.167738,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 25,
      "squawk": "3261",
      "timestamp": 1703240639,
      "ems": null
    },
    {
      "latitude": 39.069523,
      "longitude": -8.166382,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 22,
      "squawk": "3261",
      "timestamp": 1703240647,
      "ems": null
    },
    {
      "latitude": 39.072052,
      "longitude": -8.164991,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 23,
      "squawk": "3261",
      "timestamp": 1703240657,
      "ems": null
    },
    {
      "latitude": 39.074551,
      "longitude": -8.163513,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 25,
      "squawk": "3261",
      "timestamp": 1703240666,
      "ems": null
    },
    {
      "latitude": 39.076996,
      "longitude": -8.162066,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 25,
      "squawk": "3261",
      "timestamp": 1703240675,
      "ems": null
    },
    {
      "latitude": 39.079422,
      "longitude": -8.160573,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 25,
      "squawk": "3261",
      "timestamp": 1703240684,
      "ems": null
    },
    {
      "latitude": 39.082123,
      "longitude": -8.159081,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 23,
      "squawk": "3261",
      "timestamp": 1703240693,
      "ems": null
    },
    {
      "latitude": 39.084641,
      "longitude": -8.157587,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 26,
      "squawk": "3261",
      "timestamp": 1703240702,
      "ems": null
    },
    {
      "latitude": 39.086975,
      "longitude": -8.155975,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 30,
      "squawk": "3261",
      "timestamp": 1703240711,
      "ems": null
    },
    {
      "latitude": 39.087799,
      "longitude": -8.155318,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 30,
      "squawk": "3261",
      "timestamp": 1703240714,
      "ems": null
    },
    {
      "latitude": 39.088577,
      "longitude": -8.154781,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 30,
      "squawk": "3261",
      "timestamp": 1703240717,
      "ems": null
    },
    {
      "latitude": 39.089355,
      "longitude": -8.154175,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 29,
      "squawk": "3261",
      "timestamp": 1703240720,
      "ems": null
    },
    {
      "latitude": 39.091736,
      "longitude": -8.152632,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 26,
      "squawk": "3261",
      "timestamp": 1703240729,
      "ems": null
    },
    {
      "latitude": 39.093292,
      "longitude": -8.151497,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 29,
      "squawk": "3261",
      "timestamp": 1703240735,
      "ems": null
    },
    {
      "latitude": 39.094803,
      "longitude": -8.150085,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "3261",
      "timestamp": 1703240741,
      "ems": null
    },
    {
      "latitude": 39.095306,
      "longitude": -8.149347,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 50,
      "squawk": "3261",
      "timestamp": 1703240744,
      "ems": null
    },
    {
      "latitude": 39.095947,
      "longitude": -8.148273,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 51,
      "squawk": "3261",
      "timestamp": 1703240747,
      "ems": null
    },
    {
      "latitude": 39.096523,
      "longitude": -8.147461,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 49,
      "squawk": "3261",
      "timestamp": 1703240750,
      "ems": null
    },
    {
      "latitude": 39.09713,
      "longitude": -8.146545,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 48,
      "squawk": "3261",
      "timestamp": 1703240753,
      "ems": null
    },
    {
      "latitude": 39.097736,
      "longitude": -8.145691,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 47,
      "squawk": "3261",
      "timestamp": 1703240756,
      "ems": null
    },
    {
      "latitude": 39.098373,
      "longitude": -8.14481,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 47,
      "squawk": "3261",
      "timestamp": 1703240760,
      "ems": null
    },
    {
      "latitude": 39.098946,
      "longitude": -8.143982,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 46,
      "squawk": "3261",
      "timestamp": 1703240762,
      "ems": null
    },
    {
      "latitude": 39.099564,
      "longitude": -8.143198,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 46,
      "squawk": "3261",
      "timestamp": 1703240765,
      "ems": null
    },
    {
      "latitude": 39.10025,
      "longitude": -8.142303,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 45,
      "squawk": "3261",
      "timestamp": 1703240768,
      "ems": null
    },
    {
      "latitude": 39.101551,
      "longitude": -8.140747,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 42,
      "squawk": "3261",
      "timestamp": 1703240774,
      "ems": null
    },
    {
      "latitude": 39.102264,
      "longitude": -8.139914,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "3261",
      "timestamp": 1703240778,
      "ems": null
    },
    {
      "latitude": 39.102764,
      "longitude": -8.139343,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 40,
      "squawk": "3261",
      "timestamp": 1703240780,
      "ems": null
    },
    {
      "latitude": 39.103592,
      "longitude": -8.138481,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 39,
      "squawk": "3261",
      "timestamp": 1703240783,
      "ems": null
    },
    {
      "latitude": 39.104279,
      "longitude": -8.137764,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 39,
      "squawk": "3261",
      "timestamp": 1703240787,
      "ems": null
    },
    {
      "latitude": 39.104919,
      "longitude": -8.137048,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 38,
      "squawk": "3261",
      "timestamp": 1703240789,
      "ems": null
    },
    {
      "latitude": 39.105652,
      "longitude": -8.136332,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 37,
      "squawk": "3261",
      "timestamp": 1703240793,
      "ems": null
    },
    {
      "latitude": 39.106247,
      "longitude": -8.135735,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 35,
      "squawk": "3261",
      "timestamp": 1703240796,
      "ems": null
    },
    {
      "latitude": 39.10709,
      "longitude": -8.13501,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 34,
      "squawk": "3261",
      "timestamp": 1703240799,
      "ems": null
    },
    {
      "latitude": 39.107697,
      "longitude": -8.13446,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 33,
      "squawk": "3261",
      "timestamp": 1703240801,
      "ems": null
    },
    {
      "latitude": 39.108536,
      "longitude": -8.133728,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 34,
      "squawk": "3261",
      "timestamp": 1703240805,
      "ems": null
    },
    {
      "latitude": 39.10928,
      "longitude": -8.133118,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 33,
      "squawk": "3261",
      "timestamp": 1703240808,
      "ems": null
    },
    {
      "latitude": 39.109978,
      "longitude": -8.132568,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 32,
      "squawk": "3261",
      "timestamp": 1703240811,
      "ems": null
    },
    {
      "latitude": 39.110817,
      "longitude": -8.131836,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 33,
      "squawk": "3261",
      "timestamp": 1703240814,
      "ems": null
    },
    {
      "latitude": 39.111237,
      "longitude": -8.131495,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 33,
      "squawk": "3261",
      "timestamp": 1703240816,
      "ems": null
    },
    {
      "latitude": 39.113564,
      "longitude": -8.129395,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 35,
      "squawk": "3261",
      "timestamp": 1703240826,
      "ems": null
    },
    {
      "latitude": 39.115799,
      "longitude": -8.12738,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 34,
      "squawk": "3261",
      "timestamp": 1703240835,
      "ems": null
    },
    {
      "latitude": 39.117519,
      "longitude": -8.125854,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 33,
      "squawk": "3261",
      "timestamp": 1703240842,
      "ems": null
    },
    {
      "latitude": 39.120033,
      "longitude": -8.123779,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 33,
      "squawk": "3261",
      "timestamp": 1703240852,
      "ems": null
    },
    {
      "latitude": 39.122177,
      "longitude": -8.122002,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 31,
      "squawk": "3261",
      "timestamp": 1703240861,
      "ems": null
    },
    {
      "latitude": 39.123104,
      "longitude": -8.121277,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 29,
      "squawk": "3261",
      "timestamp": 1703240864,
      "ems": null
    },
    {
      "latitude": 39.123825,
      "longitude": -8.120807,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 28,
      "squawk": "3261",
      "timestamp": 1703240867,
      "ems": null
    },
    {
      "latitude": 39.124687,
      "longitude": -8.120178,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 28,
      "squawk": "3261",
      "timestamp": 1703240870,
      "ems": null
    },
    {
      "latitude": 39.125526,
      "longitude": -8.119568,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 28,
      "squawk": "3261",
      "timestamp": 1703240873,
      "ems": null
    },
    {
      "latitude": 39.127533,
      "longitude": -8.11806,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 31,
      "squawk": "3261",
      "timestamp": 1703240882,
      "ems": null
    },
    {
      "latitude": 39.12981,
      "longitude": -8.116211,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 31,
      "squawk": "3261",
      "timestamp": 1703240891,
      "ems": null
    },
    {
      "latitude": 39.13195,
      "longitude": -8.114563,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 31,
      "squawk": "3261",
      "timestamp": 1703240900,
      "ems": null
    },
    {
      "latitude": 39.134079,
      "longitude": -8.112806,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 31,
      "squawk": "3261",
      "timestamp": 1703240909,
      "ems": null
    },
    {
      "latitude": 39.135582,
      "longitude": -8.111572,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 35,
      "squawk": "3261",
      "timestamp": 1703240915,
      "ems": null
    },
    {
      "latitude": 39.137558,
      "longitude": -8.109701,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 35,
      "squawk": "3261",
      "timestamp": 1703240924,
      "ems": null
    },
    {
      "latitude": 39.138329,
      "longitude": -8.109009,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 36,
      "squawk": "3261",
      "timestamp": 1703240927,
      "ems": null
    },
    {
      "latitude": 39.140213,
      "longitude": -8.107313,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 34,
      "squawk": "3261",
      "timestamp": 1703240936,
      "ems": null
    },
    {
      "latitude": 39.142284,
      "longitude": -8.105469,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 34,
      "squawk": "3261",
      "timestamp": 1703240945,
      "ems": null
    },
    {
      "latitude": 39.144653,
      "longitude": -8.103611,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 30,
      "squawk": "3261",
      "timestamp": 1703240955,
      "ems": null
    },
    {
      "latitude": 39.145405,
      "longitude": -8.103027,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 29,
      "squawk": "3261",
      "timestamp": 1703240958,
      "ems": null
    },
    {
      "latitude": 39.145824,
      "longitude": -8.102722,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 29,
      "squawk": "3261",
      "timestamp": 1703240960,
      "ems": null
    },
    {
      "latitude": 39.146255,
      "longitude": -8.102417,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 29,
      "squawk": "3261",
      "timestamp": 1703240961,
      "ems": null
    },
    {
      "latitude": 39.147171,
      "longitude": -8.10176,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 29,
      "squawk": "3261",
      "timestamp": 1703240965,
      "ems": null
    },
    {
      "latitude": 39.147919,
      "longitude": -8.101257,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 27,
      "squawk": "3261",
      "timestamp": 1703240968,
      "ems": null
    },
    {
      "latitude": 39.148636,
      "longitude": -8.100805,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 25,
      "squawk": "3261",
      "timestamp": 1703240971,
      "ems": null
    },
    {
      "latitude": 39.149361,
      "longitude": -8.100342,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 25,
      "squawk": "3261",
      "timestamp": 1703240974,
      "ems": null
    },
    {
      "latitude": 39.150238,
      "longitude": -8.09985,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 26,
      "squawk": "3261",
      "timestamp": 1703240977,
      "ems": null
    },
    {
      "latitude": 39.150925,
      "longitude": -8.099372,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 26,
      "squawk": "3261",
      "timestamp": 1703240980,
      "ems": null
    },
    {
      "latitude": 39.15303,
      "longitude": -8.097999,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 28,
      "squawk": "3261",
      "timestamp": 1703240989,
      "ems": null
    },
    {
      "latitude": 39.155228,
      "longitude": -8.096446,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 29,
      "squawk": "3261",
      "timestamp": 1703240998,
      "ems": null
    },
    {
      "latitude": 39.155914,
      "longitude": -8.095909,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 30,
      "squawk": "3261",
      "timestamp": 1703241001,
      "ems": null
    },
    {
      "latitude": 39.156601,
      "longitude": -8.095371,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 32,
      "squawk": "3261",
      "timestamp": 1703241004,
      "ems": null
    },
    {
      "latitude": 39.157288,
      "longitude": -8.094774,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 33,
      "squawk": "3261",
      "timestamp": 1703241007,
      "ems": null
    },
    {
      "latitude": 39.158066,
      "longitude": -8.094116,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 33,
      "squawk": "3261",
      "timestamp": 1703241010,
      "ems": null
    },
    {
      "latitude": 39.160172,
      "longitude": -8.092505,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 29,
      "squawk": "3261",
      "timestamp": 1703241019,
      "ems": null
    },
    {
      "latitude": 39.162117,
      "longitude": -8.091125,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 28,
      "squawk": "3261",
      "timestamp": 1703241027,
      "ems": null
    },
    {
      "latitude": 39.163834,
      "longitude": -8.089997,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 27,
      "squawk": "3261",
      "timestamp": 1703241034,
      "ems": null
    },
    {
      "latitude": 39.16452,
      "longitude": -8.08952,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 28,
      "squawk": "3261",
      "timestamp": 1703241037,
      "ems": null
    },
    {
      "latitude": 39.166809,
      "longitude": -8.087908,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 27,
      "squawk": "3261",
      "timestamp": 1703241046,
      "ems": null
    },
    {
      "latitude": 39.168823,
      "longitude": -8.086535,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 27,
      "squawk": "3261",
      "timestamp": 1703241053,
      "ems": null
    },
    {
      "latitude": 39.171112,
      "longitude": -8.084982,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 28,
      "squawk": "3261",
      "timestamp": 1703241062,
      "ems": null
    },
    {
      "latitude": 39.173492,
      "longitude": -8.08331,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 28,
      "squawk": "3261",
      "timestamp": 1703241071,
      "ems": null
    },
    {
      "latitude": 39.175709,
      "longitude": -8.081726,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 27,
      "squawk": "3261",
      "timestamp": 1703241080,
      "ems": null
    },
    {
      "latitude": 39.178036,
      "longitude": -8.080139,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 28,
      "squawk": "3261",
      "timestamp": 1703241089,
      "ems": null
    },
    {
      "latitude": 39.180313,
      "longitude": -8.078773,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 22,
      "squawk": "3261",
      "timestamp": 1703241098,
      "ems": null
    },
    {
      "latitude": 39.181137,
      "longitude": -8.078295,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 22,
      "squawk": "3261",
      "timestamp": 1703241101,
      "ems": null
    },
    {
      "latitude": 39.182236,
      "longitude": -8.077758,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 21,
      "squawk": "3261",
      "timestamp": 1703241105,
      "ems": null
    },
    {
      "latitude": 39.184044,
      "longitude": -8.076782,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 23,
      "squawk": "3261",
      "timestamp": 1703241112,
      "ems": null
    },
    {
      "latitude": 39.186447,
      "longitude": -8.075369,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 24,
      "squawk": "3261",
      "timestamp": 1703241121,
      "ems": null
    },
    {
      "latitude": 39.188789,
      "longitude": -8.073853,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 27,
      "squawk": "3261",
      "timestamp": 1703241130,
      "ems": null
    },
    {
      "latitude": 39.189651,
      "longitude": -8.073219,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 28,
      "squawk": "3261",
      "timestamp": 1703241133,
      "ems": null
    },
    {
      "latitude": 39.190422,
      "longitude": -8.072754,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 28,
      "squawk": "3261",
      "timestamp": 1703241136,
      "ems": null
    },
    {
      "latitude": 39.191116,
      "longitude": -8.072265,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 27,
      "squawk": "3261",
      "timestamp": 1703241139,
      "ems": null
    },
    {
      "latitude": 39.193306,
      "longitude": -8.070801,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 28,
      "squawk": "3261",
      "timestamp": 1703241147,
      "ems": null
    },
    {
      "latitude": 39.194183,
      "longitude": -8.070115,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 31,
      "squawk": "3261",
      "timestamp": 1703241151,
      "ems": null
    },
    {
      "latitude": 39.194843,
      "longitude": -8.06958,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 33,
      "squawk": "3261",
      "timestamp": 1703241153,
      "ems": null
    },
    {
      "latitude": 39.195877,
      "longitude": -8.068682,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 33,
      "squawk": "3261",
      "timestamp": 1703241157,
      "ems": null
    },
    {
      "latitude": 39.196655,
      "longitude": -8.068025,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 33,
      "squawk": "3261",
      "timestamp": 1703241160,
      "ems": null
    },
    {
      "latitude": 39.197449,
      "longitude": -8.067383,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 33,
      "squawk": "3261",
      "timestamp": 1703241163,
      "ems": null
    },
    {
      "latitude": 39.198578,
      "longitude": -8.066473,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 32,
      "squawk": "3261",
      "timestamp": 1703241167,
      "ems": null
    },
    {
      "latitude": 39.199356,
      "longitude": -8.065875,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 32,
      "squawk": "3261",
      "timestamp": 1703241171,
      "ems": null
    },
    {
      "latitude": 39.201687,
      "longitude": -8.063965,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 31,
      "squawk": "3261",
      "timestamp": 1703241180,
      "ems": null
    },
    {
      "latitude": 39.20322,
      "longitude": -8.062805,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 28,
      "squawk": "3261",
      "timestamp": 1703241186,
      "ems": null
    },
    {
      "latitude": 39.203842,
      "longitude": -8.062412,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 25,
      "squawk": "3261",
      "timestamp": 1703241188,
      "ems": null
    },
    {
      "latitude": 39.204712,
      "longitude": -8.061875,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "3261",
      "timestamp": 1703241191,
      "ems": null
    },
    {
      "latitude": 39.205719,
      "longitude": -8.061337,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 23,
      "squawk": "3261",
      "timestamp": 1703241194,
      "ems": null
    },
    {
      "latitude": 39.206528,
      "longitude": -8.060852,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 23,
      "squawk": "3261",
      "timestamp": 1703241198,
      "ems": null
    },
    {
      "latitude": 39.206947,
      "longitude": -8.060669,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 23,
      "squawk": "3261",
      "timestamp": 1703241199,
      "ems": null
    },
    {
      "latitude": 39.208145,
      "longitude": -8.060442,
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
      "heading": 359,
      "squawk": "3261",
      "timestamp": 1703241203,
      "ems": null
    },
    {
      "latitude": 39.209198,
      "longitude": -8.06086,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 338,
      "squawk": "3261",
      "timestamp": 1703241206,
      "ems": null
    },
    {
      "latitude": 39.209972,
      "longitude": -8.061646,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 317,
      "squawk": "3261",
      "timestamp": 1703241209,
      "ems": null
    },
    {
      "latitude": 39.21067,
      "longitude": -8.062988,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 300,
      "squawk": "3261",
      "timestamp": 1703241212,
      "ems": null
    },
    {
      "latitude": 39.211166,
      "longitude": -8.064383,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 291,
      "squawk": "3261",
      "timestamp": 1703241215,
      "ems": null
    },
    {
      "latitude": 39.211624,
      "longitude": -8.066054,
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
      "heading": 289,
      "squawk": "3261",
      "timestamp": 1703241218,
      "ems": null
    },
    {
      "latitude": 39.211975,
      "longitude": -8.067444,
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
      "heading": 290,
      "squawk": "3261",
      "timestamp": 1703241221,
      "ems": null
    },
    {
      "latitude": 39.212486,
      "longitude": -8.068909,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 295,
      "squawk": "3261",
      "timestamp": 1703241224,
      "ems": null
    },
    {
      "latitude": 39.213089,
      "longitude": -8.070294,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 300,
      "squawk": "3261",
      "timestamp": 1703241227,
      "ems": null
    },
    {
      "latitude": 39.21373,
      "longitude": -8.071608,
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
      "heading": 301,
      "squawk": "3261",
      "timestamp": 1703241230,
      "ems": null
    },
    {
      "latitude": 39.214279,
      "longitude": -8.072742,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 301,
      "squawk": "3261",
      "timestamp": 1703241234,
      "ems": null
    },
    {
      "latitude": 39.214954,
      "longitude": -8.074219,
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
      "heading": 300,
      "squawk": "3261",
      "timestamp": 1703241237,
      "ems": null
    },
    {
      "latitude": 39.216675,
      "longitude": -8.077759,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 304,
      "squawk": "3261",
      "timestamp": 1703241245,
      "ems": null
    },
    {
      "latitude": 39.217373,
      "longitude": -8.078979,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 304,
      "squawk": "3261",
      "timestamp": 1703241249,
      "ems": null
    },
    {
      "latitude": 39.218033,
      "longitude": -8.080265,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 305,
      "squawk": "3261",
      "timestamp": 1703241252,
      "ems": null
    },
    {
      "latitude": 39.218674,
      "longitude": -8.0814,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 305,
      "squawk": "3261",
      "timestamp": 1703241255,
      "ems": null
    },
    {
      "latitude": 39.220585,
      "longitude": -8.0849,
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
      "heading": 305,
      "squawk": "3261",
      "timestamp": 1703241264,
      "ems": null
    },
    {
      "latitude": 39.221329,
      "longitude": -8.086176,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 307,
      "squawk": "3261",
      "timestamp": 1703241267,
      "ems": null
    },
    {
      "latitude": 39.222076,
      "longitude": -8.087341,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 308,
      "squawk": "3261",
      "timestamp": 1703241270,
      "ems": null
    },
    {
      "latitude": 39.222633,
      "longitude": -8.088196,
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
      "heading": 308,
      "squawk": "3261",
      "timestamp": 1703241272,
      "ems": null
    },
    {
      "latitude": 39.224716,
      "longitude": -8.091968,
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
      "heading": 303,
      "squawk": "3261",
      "timestamp": 1703241282,
      "ems": null
    },
    {
      "latitude": 39.22538,
      "longitude": -8.093323,
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
      "heading": 300,
      "squawk": "3261",
      "timestamp": 1703241285,
      "ems": null
    },
    {
      "latitude": 39.227188,
      "longitude": -8.096745,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 316,
      "squawk": "3261",
      "timestamp": 1703241294,
      "ems": null
    },
    {
      "latitude": 39.228149,
      "longitude": -8.0977,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 326,
      "squawk": "3261",
      "timestamp": 1703241296,
      "ems": null
    },
    {
      "latitude": 39.229244,
      "longitude": -8.098267,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 344,
      "squawk": "3261",
      "timestamp": 1703241300,
      "ems": null
    },
    {
      "latitude": 39.230164,
      "longitude": -8.098357,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 359,
      "squawk": "3261",
      "timestamp": 1703241303,
      "ems": null
    },
    {
      "latitude": 39.23085,
      "longitude": -8.098237,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 10,
      "squawk": "3261",
      "timestamp": 1703241305,
      "ems": null
    },
    {
      "latitude": 39.231949,
      "longitude": -8.0977,
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
      "heading": 27,
      "squawk": "3261",
      "timestamp": 1703241309,
      "ems": null
    },
    {
      "latitude": 39.232552,
      "longitude": -8.097107,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 36,
      "squawk": "3261",
      "timestamp": 1703241311,
      "ems": null
    },
    {
      "latitude": 39.233002,
      "longitude": -8.096387,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 53,
      "squawk": "3261",
      "timestamp": 1703241314,
      "ems": null
    },
    {
      "latitude": 39.233574,
      "longitude": -8.094971,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 68,
      "squawk": "3261",
      "timestamp": 1703241318,
      "ems": null
    },
    {
      "latitude": 39.233761,
      "longitude": -8.09375,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 79,
      "squawk": "3261",
      "timestamp": 1703241321,
      "ems": null
    },
    {
      "latitude": 39.233688,
      "longitude": -8.092505,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 97,
      "squawk": "3261",
      "timestamp": 1703241324,
      "ems": null
    },
    {
      "latitude": 39.233414,
      "longitude": -8.091132,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 108,
      "squawk": "3261",
      "timestamp": 1703241327,
      "ems": null
    },
    {
      "latitude": 39.232819,
      "longitude": -8.08964,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 120,
      "squawk": "3261",
      "timestamp": 1703241330,
      "ems": null
    },
    {
      "latitude": 39.232178,
      "longitude": -8.088505,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 130,
      "squawk": "3261",
      "timestamp": 1703241333,
      "ems": null
    },
    {
      "latitude": 39.231201,
      "longitude": -8.087402,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 139,
      "squawk": "3261",
      "timestamp": 1703241336,
      "ems": null
    },
    {
      "latitude": 39.230072,
      "longitude": -8.086415,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 147,
      "squawk": "3261",
      "timestamp": 1703241339,
      "ems": null
    },
    {
      "latitude": 39.22879,
      "longitude": -8.085699,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 158,
      "squawk": "3261",
      "timestamp": 1703241342,
      "ems": null
    },
    {
      "latitude": 39.227371,
      "longitude": -8.085221,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 168,
      "squawk": "3261",
      "timestamp": 1703241346,
      "ems": null
    },
    {
      "latitude": 39.226639,
      "longitude": -8.085101,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 177,
      "squawk": "3261",
      "timestamp": 1703241348,
      "ems": null
    },
    {
      "latitude": 39.224625,
      "longitude": -8.085221,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 187,
      "squawk": "3261",
      "timestamp": 1703241352,
      "ems": null
    },
    {
      "latitude": 39.223381,
      "longitude": -8.085571,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 197,
      "squawk": "3261",
      "timestamp": 1703241354,
      "ems": null
    },
    {
      "latitude": 39.221935,
      "longitude": -8.086365,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 202,
      "squawk": "3261",
      "timestamp": 1703241358,
      "ems": null
    },
    {
      "latitude": 39.220867,
      "longitude": -8.086914,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 203,
      "squawk": "3261",
      "timestamp": 1703241360,
      "ems": null
    },
    {
      "latitude": 39.219936,
      "longitude": -8.087463,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 204,
      "squawk": "3261",
      "timestamp": 1703241362,
      "ems": null
    },
    {
      "latitude": 39.218262,
      "longitude": -8.088505,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 206,
      "squawk": "3261",
      "timestamp": 1703241366,
      "ems": null
    },
    {
      "latitude": 39.21719,
      "longitude": -8.089233,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 207,
      "squawk": "3261",
      "timestamp": 1703241370,
      "ems": null
    },
    {
      "latitude": 39.215561,
      "longitude": -8.090356,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 209,
      "squawk": "3261",
      "timestamp": 1703241373,
      "ems": null
    },
    {
      "latitude": 39.214554,
      "longitude": -8.091192,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 211,
      "squawk": "3261",
      "timestamp": 1703241375,
      "ems": null
    },
    {
      "latitude": 39.213093,
      "longitude": -8.092407,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 214,
      "squawk": "3261",
      "timestamp": 1703241379,
      "ems": null
    },
    {
      "latitude": 39.212067,
      "longitude": -8.093323,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 214,
      "squawk": "3261",
      "timestamp": 1703241382,
      "ems": null
    },
    {
      "latitude": 39.210949,
      "longitude": -8.094299,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 215,
      "squawk": "3261",
      "timestamp": 1703241385,
      "ems": null
    },
    {
      "latitude": 39.209976,
      "longitude": -8.095252,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 216,
      "squawk": "3261",
      "timestamp": 1703241388,
      "ems": null
    },
    {
      "latitude": 39.209152,
      "longitude": -8.096087,
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
      "heading": 217,
      "squawk": "3261",
      "timestamp": 1703241390,
      "ems": null
    },
    {
      "latitude": 39.208054,
      "longitude": -8.097162,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 217,
      "squawk": "3261",
      "timestamp": 1703241394,
      "ems": null
    },
    {
      "latitude": 39.207039,
      "longitude": -8.098145,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 216,
      "squawk": "3261",
      "timestamp": 1703241397,
      "ems": null
    },
    {
      "latitude": 39.206131,
      "longitude": -8.099013,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 215,
      "squawk": "3261",
      "timestamp": 1703241400,
      "ems": null
    },
    {
      "latitude": 39.204525,
      "longitude": -8.10022,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 205,
      "squawk": "3261",
      "timestamp": 1703241404,
      "ems": null
    },
    {
      "latitude": 39.20327,
      "longitude": -8.100708,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 190,
      "squawk": "3261",
      "timestamp": 1703241408,
      "ems": null
    },
    {
      "latitude": 39.202469,
      "longitude": -8.100805,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 182,
      "squawk": "3261",
      "timestamp": 1703241411,
      "ems": null
    },
    {
      "latitude": 39.200684,
      "longitude": -8.100507,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 168,
      "squawk": "3261",
      "timestamp": 1703241415,
      "ems": null
    },
    {
      "latitude": 39.199768,
      "longitude": -8.100088,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 162,
      "squawk": "3261",
      "timestamp": 1703241418,
      "ems": null
    },
    {
      "latitude": 39.198669,
      "longitude": -8.09967,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 161,
      "squawk": "3261",
      "timestamp": 1703241421,
      "ems": null
    },
    {
      "latitude": 39.197754,
      "longitude": -8.099253,
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
      "heading": 162,
      "squawk": "3261",
      "timestamp": 1703241424,
      "ems": null
    },
    {
      "latitude": 39.196884,
      "longitude": -8.098894,
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
      "heading": 163,
      "squawk": "3261",
      "timestamp": 1703241426,
      "ems": null
    },
    {
      "latitude": 39.196335,
      "longitude": -8.098715,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 163,
      "squawk": "3261",
      "timestamp": 1703241429,
      "ems": null
    },
    {
      "latitude": 39.194687,
      "longitude": -8.098059,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 162,
      "squawk": "3261",
      "timestamp": 1703241433,
      "ems": null
    },
    {
      "latitude": 39.193726,
      "longitude": -8.097581,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 158,
      "squawk": "3261",
      "timestamp": 1703241436,
      "ems": null
    },
    {
      "latitude": 39.193073,
      "longitude": -8.097229,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 154,
      "squawk": "3261",
      "timestamp": 1703241439,
      "ems": null
    },
    {
      "latitude": 39.192261,
      "longitude": -8.096685,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 151,
      "squawk": "3261",
      "timestamp": 1703241441,
      "ems": null
    },
    {
      "latitude": 39.191353,
      "longitude": -8.095886,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 143,
      "squawk": "3261",
      "timestamp": 1703241445,
      "ems": null
    },
    {
      "latitude": 39.190701,
      "longitude": -8.095093,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 137,
      "squawk": "3261",
      "timestamp": 1703241448,
      "ems": null
    },
    {
      "latitude": 39.190189,
      "longitude": -8.094299,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 130,
      "squawk": "3261",
      "timestamp": 1703241451,
      "ems": null
    },
    {
      "latitude": 39.189743,
      "longitude": -8.09358,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 125,
      "squawk": "3261",
      "timestamp": 1703241454,
      "ems": null
    },
    {
      "latitude": 39.189255,
      "longitude": -8.092529,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 119,
      "squawk": "3261",
      "timestamp": 1703241457,
      "ems": null
    },
    {
      "latitude": 39.188885,
      "longitude": -8.091492,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 117,
      "squawk": "3261",
      "timestamp": 1703241460,
      "ems": null
    },
    {
      "latitude": 39.188599,
      "longitude": -8.090714,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 113,
      "squawk": "3261",
      "timestamp": 1703241462,
      "ems": null
    },
    {
      "latitude": 39.188278,
      "longitude": -8.089759,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 114,
      "squawk": "3261",
      "timestamp": 1703241466,
      "ems": null
    },
    {
      "latitude": 39.188,
      "longitude": -8.088989,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 113,
      "squawk": "3261",
      "timestamp": 1703241469,
      "ems": null
    },
    {
      "latitude": 39.187408,
      "longitude": -8.087311,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 113,
      "squawk": "3261",
      "timestamp": 1703241473,
      "ems": null
    },
    {
      "latitude": 39.187088,
      "longitude": -8.086355,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 113,
      "squawk": "3261",
      "timestamp": 1703241476,
      "ems": null
    },
    {
      "latitude": 39.186768,
      "longitude": -8.08534,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 113,
      "squawk": "3261",
      "timestamp": 1703241479,
      "ems": null
    },
    {
      "latitude": 39.186447,
      "longitude": -8.084385,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 112,
      "squawk": "3261",
      "timestamp": 1703241482,
      "ems": null
    },
    {
      "latitude": 39.186184,
      "longitude": -8.083313,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 109,
      "squawk": "3261",
      "timestamp": 1703241485,
      "ems": null
    },
    {
      "latitude": 39.185905,
      "longitude": -8.082275,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 106,
      "squawk": "3261",
      "timestamp": 1703241488,
      "ems": null
    },
    {
      "latitude": 39.185715,
      "longitude": -8.081101,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 100,
      "squawk": "3261",
      "timestamp": 1703241491,
      "ems": null
    },
    {
      "latitude": 39.185673,
      "longitude": -8.080444,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 96,
      "squawk": "3261",
      "timestamp": 1703241493,
      "ems": null
    },
    {
      "latitude": 39.185627,
      "longitude": -8.079285,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 90,
      "squawk": "3261",
      "timestamp": 1703241497,
      "ems": null
    },
    {
      "latitude": 39.185627,
      "longitude": -8.078125,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 89,
      "squawk": "3261",
      "timestamp": 1703241499,
      "ems": null
    },
    {
      "latitude": 39.185715,
      "longitude": -8.076861,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 83,
      "squawk": "3261",
      "timestamp": 1703241503,
      "ems": null
    },
    {
      "latitude": 39.18586,
      "longitude": -8.075867,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 79,
      "squawk": "3261",
      "timestamp": 1703241505,
      "ems": null
    },
    {
      "latitude": 39.186092,
      "longitude": -8.074707,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 71,
      "squawk": "3261",
      "timestamp": 1703241509,
      "ems": null
    },
    {
      "latitude": 39.186462,
      "longitude": -8.073669,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 64,
      "squawk": "3261",
      "timestamp": 1703241511,
      "ems": null
    },
    {
      "latitude": 39.186996,
      "longitude": -8.072622,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 53,
      "squawk": "3261",
      "timestamp": 1703241515,
      "ems": null
    },
    {
      "latitude": 39.187626,
      "longitude": -8.071777,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 44,
      "squawk": "3261",
      "timestamp": 1703241518,
      "ems": null
    },
    {
      "latitude": 39.188511,
      "longitude": -8.070923,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 39,
      "squawk": "3261",
      "timestamp": 1703241521,
      "ems": null
    },
    {
      "latitude": 39.18924,
      "longitude": -8.070414,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 25,
      "squawk": "3261",
      "timestamp": 1703241524,
      "ems": null
    },
    {
      "latitude": 39.190247,
      "longitude": -8.069876,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 23,
      "squawk": "3261",
      "timestamp": 1703241527,
      "ems": null
    },
    {
      "latitude": 39.191071,
      "longitude": -8.069398,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 21,
      "squawk": "3261",
      "timestamp": 1703241530,
      "ems": null
    },
    {
      "latitude": 39.191818,
      "longitude": -8.069031,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 21,
      "squawk": "3261",
      "timestamp": 1703241532,
      "ems": null
    },
    {
      "latitude": 39.192982,
      "longitude": -8.068481,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 22,
      "squawk": "3261",
      "timestamp": 1703241536,
      "ems": null
    },
    {
      "latitude": 39.193584,
      "longitude": -8.068176,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 22,
      "squawk": "3261",
      "timestamp": 1703241539,
      "ems": null
    },
    {
      "latitude": 39.194641,
      "longitude": -8.067548,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 24,
      "squawk": "3261",
      "timestamp": 1703241542,
      "ems": null
    },
    {
      "latitude": 39.195831,
      "longitude": -8.066831,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 25,
      "squawk": "3261",
      "timestamp": 1703241546,
      "ems": null
    },
    {
      "latitude": 39.199078,
      "longitude": -8.065002,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 24,
      "squawk": "3261",
      "timestamp": 1703241556,
      "ems": null
    },
    {
      "latitude": 39.199722,
      "longitude": -8.064562,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 26,
      "squawk": "3261",
      "timestamp": 1703241559,
      "ems": null
    }
  ]
};