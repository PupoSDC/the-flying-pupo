import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20231121LPSOLPSO",
    callsign: "RVP102",
    name: "Nav1",
    description: "Return after Takeoff due to primary flight instrument failure.",
  },
  pilotLog: {
    departure: new Date(2023, 10, 21, 12, 45).getTime(),
    arrival: new Date(2023, 10, 21, 13, 20).getTime(),
    singleEnginePistonTime: 35,
    multiEnginePistonTime: 0,
    picTime: 35,
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
      registration: "CS-DHW",
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
      "latitude": 39.213837,
      "longitude": -8.056519,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 26,
      "squawk": "0",
      "timestamp": 1700571723,
      "ems": null
    },
    {
      "latitude": 39.216396,
      "longitude": -8.055054,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 20,
      "squawk": "0",
      "timestamp": 1700571732,
      "ems": null
    },
    {
      "latitude": 39.21714,
      "longitude": -8.054749,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 19,
      "squawk": "0",
      "timestamp": 1700571735,
      "ems": null
    },
    {
      "latitude": 39.2197,
      "longitude": -8.053284,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 26,
      "squawk": "0",
      "timestamp": 1700571745,
      "ems": null
    },
    {
      "latitude": 39.222153,
      "longitude": -8.051605,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 30,
      "squawk": "0",
      "timestamp": 1700571753,
      "ems": null
    },
    {
      "latitude": 39.223938,
      "longitude": -8.050829,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 9,
      "squawk": "0",
      "timestamp": 1700571760,
      "ems": null
    },
    {
      "latitude": 39.224808,
      "longitude": -8.050829,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 359,
      "squawk": "0",
      "timestamp": 1700571763,
      "ems": null
    },
    {
      "latitude": 39.225723,
      "longitude": -8.050948,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 350,
      "squawk": "0",
      "timestamp": 1700571766,
      "ems": null
    },
    {
      "latitude": 39.226498,
      "longitude": -8.051208,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 344,
      "squawk": "0",
      "timestamp": 1700571768,
      "ems": null
    },
    {
      "latitude": 39.227371,
      "longitude": -8.051665,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 338,
      "squawk": "0",
      "timestamp": 1700571772,
      "ems": null
    },
    {
      "latitude": 39.228241,
      "longitude": -8.052083,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 337,
      "squawk": "0",
      "timestamp": 1700571775,
      "ems": null
    },
    {
      "latitude": 39.228966,
      "longitude": -8.052551,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 334,
      "squawk": "0",
      "timestamp": 1700571778,
      "ems": null
    },
    {
      "latitude": 39.229664,
      "longitude": -8.052979,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 331,
      "squawk": "0",
      "timestamp": 1700571781,
      "ems": null
    },
    {
      "latitude": 39.230408,
      "longitude": -8.053589,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 326,
      "squawk": "0",
      "timestamp": 1700571784,
      "ems": null
    },
    {
      "latitude": 39.231033,
      "longitude": -8.054292,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 317,
      "squawk": "0",
      "timestamp": 1700571787,
      "ems": null
    },
    {
      "latitude": 39.231621,
      "longitude": -8.055176,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 307,
      "squawk": "0",
      "timestamp": 1700571790,
      "ems": null
    },
    {
      "latitude": 39.232132,
      "longitude": -8.056143,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 302,
      "squawk": "0",
      "timestamp": 1700571793,
      "ems": null
    },
    {
      "latitude": 39.232597,
      "longitude": -8.05719,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1700571796,
      "ems": null
    },
    {
      "latitude": 39.233047,
      "longitude": -8.058292,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1700571799,
      "ems": null
    },
    {
      "latitude": 39.233459,
      "longitude": -8.059367,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1700571802,
      "ems": null
    },
    {
      "latitude": 39.233761,
      "longitude": -8.060608,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1700571805,
      "ems": null
    },
    {
      "latitude": 39.233917,
      "longitude": -8.061815,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1700571808,
      "ems": null
    },
    {
      "latitude": 39.233871,
      "longitude": -8.063249,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1700571811,
      "ems": null
    },
    {
      "latitude": 39.23362,
      "longitude": -8.064331,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1700571814,
      "ems": null
    },
    {
      "latitude": 39.233139,
      "longitude": -8.065577,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1700571817,
      "ems": null
    },
    {
      "latitude": 39.232452,
      "longitude": -8.066592,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1700571820,
      "ems": null
    },
    {
      "latitude": 39.231571,
      "longitude": -8.067444,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1700571823,
      "ems": null
    },
    {
      "latitude": 39.230686,
      "longitude": -8.068237,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1700571826,
      "ems": null
    },
    {
      "latitude": 39.229843,
      "longitude": -8.06898,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1700571829,
      "ems": null
    },
    {
      "latitude": 39.22892,
      "longitude": -8.069885,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1700571832,
      "ems": null
    },
    {
      "latitude": 39.227921,
      "longitude": -8.070831,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1700571835,
      "ems": null
    },
    {
      "latitude": 39.227005,
      "longitude": -8.071608,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1700571838,
      "ems": null
    },
    {
      "latitude": 39.225895,
      "longitude": -8.072388,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1700571841,
      "ems": null
    },
    {
      "latitude": 39.224682,
      "longitude": -8.073059,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1700571844,
      "ems": null
    },
    {
      "latitude": 39.22366,
      "longitude": -8.07373,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1700571847,
      "ems": null
    },
    {
      "latitude": 39.22261,
      "longitude": -8.074354,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1700571850,
      "ems": null
    },
    {
      "latitude": 39.221466,
      "longitude": -8.074951,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1700571853,
      "ems": null
    },
    {
      "latitude": 39.220352,
      "longitude": -8.075684,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1700571856,
      "ems": null
    },
    {
      "latitude": 39.219269,
      "longitude": -8.076385,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1700571859,
      "ems": null
    },
    {
      "latitude": 39.218212,
      "longitude": -8.076965,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1700571862,
      "ems": null
    },
    {
      "latitude": 39.21698,
      "longitude": -8.077579,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1700571865,
      "ems": null
    },
    {
      "latitude": 39.213417,
      "longitude": -8.079468,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1700571875,
      "ems": null
    },
    {
      "latitude": 39.20974,
      "longitude": -8.081604,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1700571884,
      "ems": null
    },
    {
      "latitude": 39.206177,
      "longitude": -8.083907,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1700571892,
      "ems": null
    },
    {
      "latitude": 39.204853,
      "longitude": -8.084717,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1700571896,
      "ems": null
    },
    {
      "latitude": 39.201126,
      "longitude": -8.087097,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1700571904,
      "ems": null
    },
    {
      "latitude": 39.197525,
      "longitude": -8.089221,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1700571913,
      "ems": null
    },
    {
      "latitude": 39.193451,
      "longitude": -8.09155,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1700571923,
      "ems": null
    },
    {
      "latitude": 39.192032,
      "longitude": -8.092267,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1700571926,
      "ems": null
    },
    {
      "latitude": 39.19075,
      "longitude": -8.092923,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1700571929,
      "ems": null
    },
    {
      "latitude": 39.189442,
      "longitude": -8.093567,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1700571932,
      "ems": null
    },
    {
      "latitude": 39.187767,
      "longitude": -8.09436,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1700571935,
      "ems": null
    },
    {
      "latitude": 39.18586,
      "longitude": -8.095276,
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1700571940,
      "ems": null
    },
    {
      "latitude": 39.185207,
      "longitude": -8.095581,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1700571941,
      "ems": null
    },
    {
      "latitude": 39.183563,
      "longitude": -8.096327,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1700571945,
      "ems": null
    },
    {
      "latitude": 39.179527,
      "longitude": -8.098328,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1700571953,
      "ems": null
    },
    {
      "latitude": 39.175003,
      "longitude": -8.100984,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1700571963,
      "ems": null
    },
    {
      "latitude": 39.170914,
      "longitude": -8.10321,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1700571971,
      "ems": null
    },
    {
      "latitude": 39.166489,
      "longitude": -8.105402,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1700571981,
      "ems": null
    },
    {
      "latitude": 39.162209,
      "longitude": -8.107422,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1700571990,
      "ems": null
    },
    {
      "latitude": 39.161041,
      "longitude": -8.10797,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1700571993,
      "ems": null
    },
    {
      "latitude": 39.156483,
      "longitude": -8.110046,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1700572002,
      "ems": null
    },
    {
      "latitude": 39.153133,
      "longitude": -8.111633,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1700572009,
      "ems": null
    },
    {
      "latitude": 39.148895,
      "longitude": -8.114014,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1700572019,
      "ems": null
    },
    {
      "latitude": 39.14764,
      "longitude": -8.11499,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1700572022,
      "ems": null
    },
    {
      "latitude": 39.146477,
      "longitude": -8.115845,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1700572025,
      "ems": null
    },
    {
      "latitude": 39.145248,
      "longitude": -8.116807,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1700572028,
      "ems": null
    },
    {
      "latitude": 39.144058,
      "longitude": -8.117762,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1700572031,
      "ems": null
    },
    {
      "latitude": 39.141632,
      "longitude": -8.118777,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1700572037,
      "ems": null
    },
    {
      "latitude": 39.139618,
      "longitude": -8.118538,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1700572041,
      "ems": null
    },
    {
      "latitude": 39.137558,
      "longitude": -8.117105,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1700572046,
      "ems": null
    },
    {
      "latitude": 39.136597,
      "longitude": -8.115791,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1700572049,
      "ems": null
    },
    {
      "latitude": 39.13586,
      "longitude": -8.114441,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1700572052,
      "ems": null
    },
    {
      "latitude": 39.13549,
      "longitude": -8.112915,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1700572055,
      "ems": null
    },
    {
      "latitude": 39.135452,
      "longitude": -8.111373,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1700572058,
      "ems": null
    },
    {
      "latitude": 39.13549,
      "longitude": -8.110962,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1700572059,
      "ems": null
    },
    {
      "latitude": 39.137909,
      "longitude": -8.102722,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1700572164,
      "ems": null
    },
    {
      "latitude": 39.137489,
      "longitude": -8.098938,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1700572170,
      "ems": null
    },
    {
      "latitude": 39.137833,
      "longitude": -8.097342,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1700572173,
      "ems": null
    },
    {
      "latitude": 39.13842,
      "longitude": -8.096069,
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1700572176,
      "ems": null
    },
    {
      "latitude": 39.139214,
      "longitude": -8.09491,
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1700572179,
      "ems": null
    },
    {
      "latitude": 39.140305,
      "longitude": -8.094058,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1700572182,
      "ems": null
    },
    {
      "latitude": 39.141403,
      "longitude": -8.093699,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1700572185,
      "ems": null
    },
    {
      "latitude": 39.142796,
      "longitude": -8.093628,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1700572189,
      "ems": null
    },
    {
      "latitude": 39.144146,
      "longitude": -8.093811,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1700572192,
      "ems": null
    },
    {
      "latitude": 39.145077,
      "longitude": -8.093933,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1700572194,
      "ems": null
    },
    {
      "latitude": 39.146667,
      "longitude": -8.093879,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1700572197,
      "ems": null
    },
    {
      "latitude": 39.147823,
      "longitude": -8.09375,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1700572200,
      "ems": null
    },
    {
      "latitude": 39.149048,
      "longitude": -8.09358,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1700572203,
      "ems": null
    },
    {
      "latitude": 39.15033,
      "longitude": -8.093282,
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
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1700572207,
      "ems": null
    },
    {
      "latitude": 39.151382,
      "longitude": -8.092804,
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
      "timestamp": 1700572209,
      "ems": null
    },
    {
      "latitude": 39.152435,
      "longitude": -8.091968,
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1700572213,
      "ems": null
    },
    {
      "latitude": 39.153366,
      "longitude": -8.091187,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1700572216,
      "ems": null
    },
    {
      "latitude": 39.154129,
      "longitude": -8.090654,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1700572218,
      "ems": null
    },
    {
      "latitude": 39.15509,
      "longitude": -8.089997,
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1700572221,
      "ems": null
    },
    {
      "latitude": 39.15596,
      "longitude": -8.08946,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1700572224,
      "ems": null
    },
    {
      "latitude": 39.15683,
      "longitude": -8.088983,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1700572227,
      "ems": null
    },
    {
      "latitude": 39.1577,
      "longitude": -8.088565,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1700572230,
      "ems": null
    },
    {
      "latitude": 39.158531,
      "longitude": -8.088135,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1700572233,
      "ems": null
    },
    {
      "latitude": 39.159439,
      "longitude": -8.087609,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1700572237,
      "ems": null
    },
    {
      "latitude": 39.16008,
      "longitude": -8.087251,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1700572239,
      "ems": null
    },
    {
      "latitude": 39.161041,
      "longitude": -8.086714,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1700572243,
      "ems": null
    },
    {
      "latitude": 39.161819,
      "longitude": -8.086236,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1700572246,
      "ems": null
    },
    {
      "latitude": 39.164211,
      "longitude": -8.084717,
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1700572255,
      "ems": null
    },
    {
      "latitude": 39.16658,
      "longitude": -8.08337,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1700572264,
      "ems": null
    },
    {
      "latitude": 39.168869,
      "longitude": -8.081937,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1700572273,
      "ems": null
    },
    {
      "latitude": 39.170403,
      "longitude": -8.081116,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1700572279,
      "ems": null
    },
    {
      "latitude": 39.171249,
      "longitude": -8.080743,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1700572282,
      "ems": null
    },
    {
      "latitude": 39.173538,
      "longitude": -8.07943,
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1700572291,
      "ems": null
    },
    {
      "latitude": 39.175991,
      "longitude": -8.077942,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1700572300,
      "ems": null
    },
    {
      "latitude": 39.17841,
      "longitude": -8.076538,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1700572309,
      "ems": null
    },
    {
      "latitude": 39.179993,
      "longitude": -8.075847,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1700572315,
      "ems": null
    },
    {
      "latitude": 39.18045,
      "longitude": -8.075608,
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1700572317,
      "ems": null
    },
    {
      "latitude": 39.182972,
      "longitude": -8.074097,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1700572327,
      "ems": null
    },
    {
      "latitude": 39.18544,
      "longitude": -8.072742,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1700572336,
      "ems": null
    },
    {
      "latitude": 39.193268,
      "longitude": -8.068383,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1700572364,
      "ems": null
    },
    {
      "latitude": 39.195786,
      "longitude": -8.066891,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1700572373,
      "ems": null
    }
  ]
};
