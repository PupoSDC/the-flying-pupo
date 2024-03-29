import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20240111LPSOLPCO",
    callsign: "RVP110",
    name: "NAV 1",
    description: "",
  },
  pilotLog: {
    departure: new Date(2024, 0, 11, 15, 0).getTime(),
    arrival: new Date(2024, 0, 11, 16, 20).getTime(),
    singleEnginePistonTime: 80,
    multiEnginePistonTime: 0,
    picTime: 80,
    dualTime: 0,
    ifrTime: 0,
    nightTime: 0,
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
      modes: "48B048",
      registration: "CS-DHS",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      name: "Ponte de Sor",
      code: "LPSO",
      position: {
        latitude: 39.211723,
        longitude: -8.057656,
      },
    },
    destination: {
      name: "Coimbra",
      code: "LPCO",
      position: {
        latitude: 40.1572,
        longitude: -8.47,
      },
    },
  },
  track: [
    {
      "latitude": 39.204758,
      "longitude": -8.061035,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 200,
      "squawk": "0",
      "timestamp": 1704985702,
      "ems": null
    },
    {
      "latitude": 39.202148,
      "longitude": -8.062531,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 204,
      "squawk": "0",
      "timestamp": 1704985711,
      "ems": null
    },
    {
      "latitude": 39.19931,
      "longitude": -8.064323,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 205,
      "squawk": "0",
      "timestamp": 1704985721,
      "ems": null
    },
    {
      "latitude": 39.196751,
      "longitude": -8.065918,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 204,
      "squawk": "0",
      "timestamp": 1704985729,
      "ems": null
    },
    {
      "latitude": 39.194138,
      "longitude": -8.067726,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 211,
      "squawk": "0",
      "timestamp": 1704985738,
      "ems": null
    },
    {
      "latitude": 39.191391,
      "longitude": -8.069876,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1704985747,
      "ems": null
    },
    {
      "latitude": 39.190746,
      "longitude": -8.070923,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1704985750,
      "ems": null
    },
    {
      "latitude": 39.190475,
      "longitude": -8.071966,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1704985752,
      "ems": null
    },
    {
      "latitude": 39.19043,
      "longitude": -8.073339,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1704985755,
      "ems": null
    },
    {
      "latitude": 39.19075,
      "longitude": -8.074832,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1704985759,
      "ems": null
    },
    {
      "latitude": 39.191345,
      "longitude": -8.076324,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1704985762,
      "ems": null
    },
    {
      "latitude": 39.19191,
      "longitude": -8.077698,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1704985765,
      "ems": null
    },
    {
      "latitude": 39.192535,
      "longitude": -8.078833,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1704985768,
      "ems": null
    },
    {
      "latitude": 39.193359,
      "longitude": -8.079787,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1704985771,
      "ems": null
    },
    {
      "latitude": 39.194275,
      "longitude": -8.080564,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1704985774,
      "ems": null
    },
    {
      "latitude": 39.195168,
      "longitude": -8.080994,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1704985777,
      "ems": null
    },
    {
      "latitude": 39.196243,
      "longitude": -8.08134,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1704985780,
      "ems": null
    },
    {
      "latitude": 39.197021,
      "longitude": -8.0814,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1704985782,
      "ems": null
    },
    {
      "latitude": 39.198349,
      "longitude": -8.08134,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1704985786,
      "ems": null
    },
    {
      "latitude": 39.199448,
      "longitude": -8.081161,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1704985789,
      "ems": null
    },
    {
      "latitude": 39.200523,
      "longitude": -8.080872,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1704985792,
      "ems": null
    },
    {
      "latitude": 39.2015,
      "longitude": -8.080505,
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
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1704985794,
      "ems": null
    },
    {
      "latitude": 39.202385,
      "longitude": -8.080139,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1704985797,
      "ems": null
    },
    {
      "latitude": 39.203613,
      "longitude": -8.079608,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1704985801,
      "ems": null
    },
    {
      "latitude": 39.204758,
      "longitude": -8.079102,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1704985804,
      "ems": null
    },
    {
      "latitude": 39.205551,
      "longitude": -8.078735,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1704985806,
      "ems": null
    },
    {
      "latitude": 39.206589,
      "longitude": -8.078176,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1704985809,
      "ems": null
    },
    {
      "latitude": 39.207596,
      "longitude": -8.077698,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1704985813,
      "ems": null
    },
    {
      "latitude": 39.208668,
      "longitude": -8.077209,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1704985816,
      "ems": null
    },
    {
      "latitude": 39.209518,
      "longitude": -8.076742,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1704985819,
      "ems": null
    },
    {
      "latitude": 39.210663,
      "longitude": -8.076264,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1704985822,
      "ems": null
    },
    {
      "latitude": 39.211716,
      "longitude": -8.075727,
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1704985825,
      "ems": null
    },
    {
      "latitude": 39.212814,
      "longitude": -8.07513,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1704985828,
      "ems": null
    },
    {
      "latitude": 39.213696,
      "longitude": -8.074646,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1704985830,
      "ems": null
    },
    {
      "latitude": 39.217117,
      "longitude": -8.072622,
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1704985840,
      "ems": null
    },
    {
      "latitude": 39.218124,
      "longitude": -8.072025,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1704985843,
      "ems": null
    },
    {
      "latitude": 39.221649,
      "longitude": -8.070055,
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1704985852,
      "ems": null
    },
    {
      "latitude": 39.22282,
      "longitude": -8.069397,
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1704985855,
      "ems": null
    },
    {
      "latitude": 39.22403,
      "longitude": -8.068563,
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1704985858,
      "ems": null
    },
    {
      "latitude": 39.227196,
      "longitude": -8.066589,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1704985867,
      "ems": null
    },
    {
      "latitude": 39.230896,
      "longitude": -8.064025,
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1704985877,
      "ems": null
    },
    {
      "latitude": 39.231945,
      "longitude": -8.062805,
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
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1704985880,
      "ems": null
    },
    {
      "latitude": 39.23259,
      "longitude": -8.061577,
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1704985883,
      "ems": null
    },
    {
      "latitude": 39.233276,
      "longitude": -8.059905,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1704985886,
      "ems": null
    },
    {
      "latitude": 39.233688,
      "longitude": -8.058532,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1704985889,
      "ems": null
    },
    {
      "latitude": 39.233994,
      "longitude": -8.056946,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1704985892,
      "ems": null
    },
    {
      "latitude": 39.234226,
      "longitude": -8.055359,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1704985895,
      "ems": null
    },
    {
      "latitude": 39.234459,
      "longitude": -8.053711,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1704985898,
      "ems": null
    },
    {
      "latitude": 39.234604,
      "longitude": -8.052142,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1704985901,
      "ems": null
    },
    {
      "latitude": 39.234741,
      "longitude": -8.050591,
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1704985904,
      "ems": null
    },
    {
      "latitude": 39.234833,
      "longitude": -8.048889,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1704985907,
      "ems": null
    },
    {
      "latitude": 39.234924,
      "longitude": -8.047068,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1704985910,
      "ems": null
    },
    {
      "latitude": 39.234924,
      "longitude": -8.045217,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1704985913,
      "ems": null
    },
    {
      "latitude": 39.234924,
      "longitude": -8.043762,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1704985916,
      "ems": null
    },
    {
      "latitude": 39.234924,
      "longitude": -8.041931,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1704985919,
      "ems": null
    },
    {
      "latitude": 39.234924,
      "longitude": -8.039962,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1704985922,
      "ems": null
    },
    {
      "latitude": 39.234924,
      "longitude": -8.038231,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1704985925,
      "ems": null
    },
    {
      "latitude": 39.234879,
      "longitude": -8.036499,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1704985928,
      "ems": null
    },
    {
      "latitude": 39.234879,
      "longitude": -8.034851,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1704985931,
      "ems": null
    },
    {
      "latitude": 39.234924,
      "longitude": -8.029513,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1704985940,
      "ems": null
    },
    {
      "latitude": 39.235016,
      "longitude": -8.024139,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1704985949,
      "ems": null
    },
    {
      "latitude": 39.235153,
      "longitude": -8.022408,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1704985953,
      "ems": null
    },
    {
      "latitude": 39.23539,
      "longitude": -8.02063,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1704985955,
      "ems": null
    },
    {
      "latitude": 39.235748,
      "longitude": -8.018885,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1704985959,
      "ems": null
    },
    {
      "latitude": 39.236134,
      "longitude": -8.017212,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1704985962,
      "ems": null
    },
    {
      "latitude": 39.236572,
      "longitude": -8.015541,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1704985965,
      "ems": null
    },
    {
      "latitude": 39.237019,
      "longitude": -8.013916,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1704985968,
      "ems": null
    },
    {
      "latitude": 39.23753,
      "longitude": -8.012207,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1704985971,
      "ems": null
    },
    {
      "latitude": 39.237995,
      "longitude": -8.010559,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1704985974,
      "ems": null
    },
    {
      "latitude": 39.238495,
      "longitude": -8.008914,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1704985977,
      "ems": null
    },
    {
      "latitude": 39.238998,
      "longitude": -8.007421,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1704985980,
      "ems": null
    },
    {
      "latitude": 39.239548,
      "longitude": -8.005809,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1704985983,
      "ems": null
    },
    {
      "latitude": 39.240044,
      "longitude": -8.004517,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1704985985,
      "ems": null
    },
    {
      "latitude": 39.240742,
      "longitude": -8.002625,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1704985989,
      "ems": null
    },
    {
      "latitude": 39.241348,
      "longitude": -8.001038,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1704985992,
      "ems": null
    },
    {
      "latitude": 39.241909,
      "longitude": -7.999512,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1704985995,
      "ems": null
    },
    {
      "latitude": 39.242512,
      "longitude": -7.997986,
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1704985998,
      "ems": null
    },
    {
      "latitude": 39.243118,
      "longitude": -7.996582,
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1704986000,
      "ems": null
    },
    {
      "latitude": 39.243759,
      "longitude": -7.994882,
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1704986004,
      "ems": null
    },
    {
      "latitude": 39.244446,
      "longitude": -7.99327,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1704986007,
      "ems": null
    },
    {
      "latitude": 39.245121,
      "longitude": -7.991699,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1704986010,
      "ems": null
    },
    {
      "latitude": 39.245773,
      "longitude": -7.990285,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1704986013,
      "ems": null
    },
    {
      "latitude": 39.246368,
      "longitude": -7.988912,
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1704986016,
      "ems": null
    },
    {
      "latitude": 39.247074,
      "longitude": -7.987366,
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1704986019,
      "ems": null
    },
    {
      "latitude": 39.247696,
      "longitude": -7.985986,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1704986022,
      "ems": null
    },
    {
      "latitude": 39.248425,
      "longitude": -7.984558,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1704986025,
      "ems": null
    },
    {
      "latitude": 39.249168,
      "longitude": -7.983154,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1704986028,
      "ems": null
    },
    {
      "latitude": 39.250992,
      "longitude": -7.978642,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1704986037,
      "ems": null
    },
    {
      "latitude": 39.251495,
      "longitude": -7.976807,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1704986040,
      "ems": null
    },
    {
      "latitude": 39.251816,
      "longitude": -7.975238,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1704986043,
      "ems": null
    },
    {
      "latitude": 39.252102,
      "longitude": -7.973633,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1704986046,
      "ems": null
    },
    {
      "latitude": 39.252319,
      "longitude": -7.972253,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1704986049,
      "ems": null
    },
    {
      "latitude": 39.252594,
      "longitude": -7.970521,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1704986052,
      "ems": null
    },
    {
      "latitude": 39.252777,
      "longitude": -7.968969,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1704986055,
      "ems": null
    },
    {
      "latitude": 39.252941,
      "longitude": -7.967529,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1704986058,
      "ems": null
    },
    {
      "latitude": 39.253078,
      "longitude": -7.966003,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1704986061,
      "ems": null
    },
    {
      "latitude": 39.253189,
      "longitude": -7.96455,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1704986064,
      "ems": null
    },
    {
      "latitude": 39.253361,
      "longitude": -7.962952,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1704986067,
      "ems": null
    },
    {
      "latitude": 39.253498,
      "longitude": -7.961487,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1704986070,
      "ems": null
    },
    {
      "latitude": 39.253784,
      "longitude": -7.958281,
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1704986077,
      "ems": null
    },
    {
      "latitude": 39.253876,
      "longitude": -7.956789,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1704986079,
      "ems": null
    },
    {
      "latitude": 39.253918,
      "longitude": -7.955078,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1704986083,
      "ems": null
    },
    {
      "latitude": 39.253967,
      "longitude": -7.953505,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1704986086,
      "ems": null
    },
    {
      "latitude": 39.254013,
      "longitude": -7.952012,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1704986089,
      "ems": null
    },
    {
      "latitude": 39.254059,
      "longitude": -7.950221,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1704986092,
      "ems": null
    },
    {
      "latitude": 39.254105,
      "longitude": -7.948668,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1704986094,
      "ems": null
    },
    {
      "latitude": 39.254196,
      "longitude": -7.945374,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1704986100,
      "ems": null
    },
    {
      "latitude": 39.254196,
      "longitude": -7.943533,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1704986104,
      "ems": null
    },
    {
      "latitude": 39.254196,
      "longitude": -7.942518,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1704986105,
      "ems": null
    },
    {
      "latitude": 39.254105,
      "longitude": -7.937324,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1704986115,
      "ems": null
    },
    {
      "latitude": 39.254337,
      "longitude": -7.934021,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1704986120,
      "ems": null
    },
    {
      "latitude": 39.254662,
      "longitude": -7.932434,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1704986124,
      "ems": null
    },
    {
      "latitude": 39.255112,
      "longitude": -7.930935,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1704986126,
      "ems": null
    },
    {
      "latitude": 39.255661,
      "longitude": -7.929621,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1704986129,
      "ems": null
    },
    {
      "latitude": 39.256256,
      "longitude": -7.928427,
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1704986132,
      "ems": null
    },
    {
      "latitude": 39.257271,
      "longitude": -7.926758,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1704986136,
      "ems": null
    },
    {
      "latitude": 39.258015,
      "longitude": -7.92572,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1704986138,
      "ems": null
    },
    {
      "latitude": 39.258911,
      "longitude": -7.924606,
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1704986141,
      "ems": null
    },
    {
      "latitude": 39.26001,
      "longitude": -7.923471,
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
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1704986145,
      "ems": null
    },
    {
      "latitude": 39.260994,
      "longitude": -7.922546,
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1704986147,
      "ems": null
    },
    {
      "latitude": 39.262016,
      "longitude": -7.92157,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1704986150,
      "ems": null
    },
    {
      "latitude": 39.263077,
      "longitude": -7.920605,
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1704986154,
      "ems": null
    },
    {
      "latitude": 39.263927,
      "longitude": -7.9198,
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1704986156,
      "ems": null
    },
    {
      "latitude": 39.265137,
      "longitude": -7.918754,
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
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1704986160,
      "ems": null
    },
    {
      "latitude": 39.266159,
      "longitude": -7.917847,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1704986163,
      "ems": null
    },
    {
      "latitude": 39.267197,
      "longitude": -7.916963,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1704986166,
      "ems": null
    },
    {
      "latitude": 39.268341,
      "longitude": -7.916068,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1704986169,
      "ems": null
    },
    {
      "latitude": 39.269375,
      "longitude": -7.915283,
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
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1704986172,
      "ems": null
    },
    {
      "latitude": 39.270309,
      "longitude": -7.914515,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1704986174,
      "ems": null
    },
    {
      "latitude": 39.273422,
      "longitude": -7.911987,
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
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1704986184,
      "ems": null
    },
    {
      "latitude": 39.276356,
      "longitude": -7.909668,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1704986193,
      "ems": null
    },
    {
      "latitude": 39.279419,
      "longitude": -7.907469,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1704986202,
      "ems": null
    },
    {
      "latitude": 39.282639,
      "longitude": -7.905151,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1704986210,
      "ems": null
    },
    {
      "latitude": 39.283813,
      "longitude": -7.904365,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1704986214,
      "ems": null
    },
    {
      "latitude": 39.285004,
      "longitude": -7.903708,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1704986217,
      "ems": null
    },
    {
      "latitude": 39.285828,
      "longitude": -7.90323,
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1704986219,
      "ems": null
    },
    {
      "latitude": 39.287155,
      "longitude": -7.902693,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1704986223,
      "ems": null
    },
    {
      "latitude": 39.288132,
      "longitude": -7.902344,
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
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1704986225,
      "ems": null
    },
    {
      "latitude": 39.289398,
      "longitude": -7.901976,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1704986229,
      "ems": null
    },
    {
      "latitude": 39.290508,
      "longitude": -7.901611,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1704986231,
      "ems": null
    },
    {
      "latitude": 39.291641,
      "longitude": -7.90132,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1704986234,
      "ems": null
    },
    {
      "latitude": 39.293068,
      "longitude": -7.901001,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1704986238,
      "ems": null
    },
    {
      "latitude": 39.294231,
      "longitude": -7.900757,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1704986241,
      "ems": null
    },
    {
      "latitude": 39.295395,
      "longitude": -7.900543,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1704986243,
      "ems": null
    },
    {
      "latitude": 39.296001,
      "longitude": -7.900391,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1704986245,
      "ems": null
    },
    {
      "latitude": 39.297546,
      "longitude": -7.900125,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1704986249,
      "ems": null
    },
    {
      "latitude": 39.298828,
      "longitude": -7.899887,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1704986252,
      "ems": null
    },
    {
      "latitude": 39.300156,
      "longitude": -7.899588,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1704986255,
      "ems": null
    },
    {
      "latitude": 39.303635,
      "longitude": -7.898743,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1704986264,
      "ems": null
    },
    {
      "latitude": 39.307846,
      "longitude": -7.897737,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1704986273,
      "ems": null
    },
    {
      "latitude": 39.311687,
      "longitude": -7.896912,
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1704986282,
      "ems": null
    },
    {
      "latitude": 39.315693,
      "longitude": -7.896118,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1704986291,
      "ems": null
    },
    {
      "latitude": 39.318283,
      "longitude": -7.895707,
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1704986297,
      "ems": null
    },
    {
      "latitude": 39.319244,
      "longitude": -7.895587,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1704986299,
      "ems": null
    },
    {
      "latitude": 39.320534,
      "longitude": -7.895569,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1704986303,
      "ems": null
    },
    {
      "latitude": 39.321976,
      "longitude": -7.895569,
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1704986306,
      "ems": null
    },
    {
      "latitude": 39.323326,
      "longitude": -7.895691,
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1704986309,
      "ems": null
    },
    {
      "latitude": 39.324142,
      "longitude": -7.895767,
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1704986312,
      "ems": null
    },
    {
      "latitude": 39.325935,
      "longitude": -7.896057,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1704986315,
      "ems": null
    },
    {
      "latitude": 39.327099,
      "longitude": -7.896301,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1704986318,
      "ems": null
    },
    {
      "latitude": 39.328308,
      "longitude": -7.896603,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1704986321,
      "ems": null
    },
    {
      "latitude": 39.329517,
      "longitude": -7.896912,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1704986324,
      "ems": null
    },
    {
      "latitude": 39.330589,
      "longitude": -7.897156,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1704986327,
      "ems": null
    },
    {
      "latitude": 39.33194,
      "longitude": -7.897522,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1704986330,
      "ems": null
    },
    {
      "latitude": 39.333298,
      "longitude": -7.897856,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1704986333,
      "ems": null
    },
    {
      "latitude": 39.334671,
      "longitude": -7.898155,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1704986336,
      "ems": null
    },
    {
      "latitude": 39.335617,
      "longitude": -7.898376,
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1704986339,
      "ems": null
    },
    {
      "latitude": 39.339249,
      "longitude": -7.899292,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1704986347,
      "ems": null
    },
    {
      "latitude": 39.343277,
      "longitude": -7.900424,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1704986357,
      "ems": null
    },
    {
      "latitude": 39.346977,
      "longitude": -7.901428,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1704986366,
      "ems": null
    },
    {
      "latitude": 39.350098,
      "longitude": -7.902275,
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
      "heading": 350,
      "squawk": "3213",
      "timestamp": 1704986374,
      "ems": null
    },
    {
      "latitude": 39.352753,
      "longitude": -7.903051,
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
      "heading": 343,
      "squawk": "3213",
      "timestamp": 1704986381,
      "ems": null
    },
    {
      "latitude": 39.35368,
      "longitude": -7.903503,
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
      "heading": 336,
      "squawk": "3213",
      "timestamp": 1704986383,
      "ems": null
    },
    {
      "latitude": 39.354984,
      "longitude": -7.904419,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 330,
      "squawk": "3213",
      "timestamp": 1704986387,
      "ems": null
    },
    {
      "latitude": 39.355682,
      "longitude": -7.904962,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 327,
      "squawk": "3213",
      "timestamp": 1704986389,
      "ems": null
    },
    {
      "latitude": 39.356564,
      "longitude": -7.905701,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 326,
      "squawk": "3213",
      "timestamp": 1704986391,
      "ems": null
    },
    {
      "latitude": 39.358337,
      "longitude": -7.907111,
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
      "heading": 329,
      "squawk": "3213",
      "timestamp": 1704986396,
      "ems": null
    },
    {
      "latitude": 39.359592,
      "longitude": -7.90802,
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
      "heading": 329,
      "squawk": "3213",
      "timestamp": 1704986399,
      "ems": null
    },
    {
      "latitude": 39.360569,
      "longitude": -7.908752,
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
      "heading": 330,
      "squawk": "3213",
      "timestamp": 1704986402,
      "ems": null
    },
    {
      "latitude": 39.361679,
      "longitude": -7.909678,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 325,
      "squawk": "3213",
      "timestamp": 1704986405,
      "ems": null
    },
    {
      "latitude": 39.362869,
      "longitude": -7.910753,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 323,
      "squawk": "3213",
      "timestamp": 1704986409,
      "ems": null
    },
    {
      "latitude": 39.363781,
      "longitude": -7.911743,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 321,
      "squawk": "3213",
      "timestamp": 1704986411,
      "ems": null
    },
    {
      "latitude": 39.364758,
      "longitude": -7.912781,
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
      "heading": 319,
      "squawk": "3213",
      "timestamp": 1704986415,
      "ems": null
    },
    {
      "latitude": 39.365688,
      "longitude": -7.913879,
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
      "squawk": "3213",
      "timestamp": 1704986417,
      "ems": null
    },
    {
      "latitude": 39.366714,
      "longitude": -7.914993,
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
      "heading": 318,
      "squawk": "3213",
      "timestamp": 1704986421,
      "ems": null
    },
    {
      "latitude": 39.367645,
      "longitude": -7.916138,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 316,
      "squawk": "3213",
      "timestamp": 1704986424,
      "ems": null
    },
    {
      "latitude": 39.368454,
      "longitude": -7.917142,
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
      "heading": 314,
      "squawk": "3213",
      "timestamp": 1704986426,
      "ems": null
    },
    {
      "latitude": 39.369507,
      "longitude": -7.91864,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 312,
      "squawk": "3213",
      "timestamp": 1704986430,
      "ems": null
    },
    {
      "latitude": 39.370377,
      "longitude": -7.919888,
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
      "heading": 312,
      "squawk": "3213",
      "timestamp": 1704986432,
      "ems": null
    },
    {
      "latitude": 39.371323,
      "longitude": -7.921265,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 310,
      "squawk": "3213",
      "timestamp": 1704986435,
      "ems": null
    },
    {
      "latitude": 39.372253,
      "longitude": -7.922695,
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
      "heading": 309,
      "squawk": "3213",
      "timestamp": 1704986439,
      "ems": null
    },
    {
      "latitude": 39.372952,
      "longitude": -7.923889,
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
      "heading": 305,
      "squawk": "3213",
      "timestamp": 1704986441,
      "ems": null
    },
    {
      "latitude": 39.373672,
      "longitude": -7.925382,
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
      "heading": 300,
      "squawk": "3213",
      "timestamp": 1704986445,
      "ems": null
    },
    {
      "latitude": 39.374268,
      "longitude": -7.926875,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 297,
      "squawk": "3213",
      "timestamp": 1704986448,
      "ems": null
    },
    {
      "latitude": 39.374771,
      "longitude": -7.928128,
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
      "heading": 295,
      "squawk": "3213",
      "timestamp": 1704986450,
      "ems": null
    },
    {
      "latitude": 39.375458,
      "longitude": -7.930099,
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
      "heading": 292,
      "squawk": "3213",
      "timestamp": 1704986454,
      "ems": null
    },
    {
      "latitude": 39.376007,
      "longitude": -7.93189,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 291,
      "squawk": "3213",
      "timestamp": 1704986457,
      "ems": null
    },
    {
      "latitude": 39.376328,
      "longitude": -7.932965,
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
      "heading": 291,
      "squawk": "3213",
      "timestamp": 1704986459,
      "ems": null
    },
    {
      "latitude": 39.376831,
      "longitude": -7.934517,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 292,
      "squawk": "3213",
      "timestamp": 1704986462,
      "ems": null
    },
    {
      "latitude": 39.377235,
      "longitude": -7.935486,
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
      "heading": 298,
      "squawk": "3213",
      "timestamp": 1704986464,
      "ems": null
    },
    {
      "latitude": 39.379375,
      "longitude": -7.938538,
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
      "heading": 317,
      "squawk": "3213",
      "timestamp": 1704986471,
      "ems": null
    },
    {
      "latitude": 39.380447,
      "longitude": -7.939772,
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
      "heading": 317,
      "squawk": "3213",
      "timestamp": 1704986475,
      "ems": null
    },
    {
      "latitude": 39.381134,
      "longitude": -7.940608,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 316,
      "squawk": "3213",
      "timestamp": 1704986477,
      "ems": null
    },
    {
      "latitude": 39.382309,
      "longitude": -7.942017,
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
      "heading": 317,
      "squawk": "3213",
      "timestamp": 1704986480,
      "ems": null
    },
    {
      "latitude": 39.383331,
      "longitude": -7.943175,
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
      "heading": 318,
      "squawk": "3213",
      "timestamp": 1704986483,
      "ems": null
    },
    {
      "latitude": 39.384403,
      "longitude": -7.944397,
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
      "heading": 318,
      "squawk": "3213",
      "timestamp": 1704986487,
      "ems": null
    },
    {
      "latitude": 39.385208,
      "longitude": -7.945324,
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
      "heading": 318,
      "squawk": "3213",
      "timestamp": 1704986489,
      "ems": null
    },
    {
      "latitude": 39.386311,
      "longitude": -7.946594,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 318,
      "squawk": "3213",
      "timestamp": 1704986493,
      "ems": null
    },
    {
      "latitude": 39.38715,
      "longitude": -7.94751,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 319,
      "squawk": "3213",
      "timestamp": 1704986495,
      "ems": null
    },
    {
      "latitude": 39.388138,
      "longitude": -7.948549,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 320,
      "squawk": "3213",
      "timestamp": 1704986499,
      "ems": null
    },
    {
      "latitude": 39.390736,
      "longitude": -7.951355,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 320,
      "squawk": "3213",
      "timestamp": 1704986507,
      "ems": null
    },
    {
      "latitude": 39.393715,
      "longitude": -7.954407,
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
      "heading": 320,
      "squawk": "3213",
      "timestamp": 1704986517,
      "ems": null
    },
    {
      "latitude": 39.396648,
      "longitude": -7.957642,
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
      "heading": 318,
      "squawk": "3213",
      "timestamp": 1704986526,
      "ems": null
    },
    {
      "latitude": 39.399395,
      "longitude": -7.960693,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 319,
      "squawk": "3213",
      "timestamp": 1704986535,
      "ems": null
    },
    {
      "latitude": 39.401955,
      "longitude": -7.963745,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 312,
      "squawk": "3213",
      "timestamp": 1704986544,
      "ems": null
    },
    {
      "latitude": 39.40279,
      "longitude": -7.96521,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 305,
      "squawk": "3213",
      "timestamp": 1704986547,
      "ems": null
    },
    {
      "latitude": 39.403244,
      "longitude": -7.966103,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 304,
      "squawk": "3213",
      "timestamp": 1704986549,
      "ems": null
    },
    {
      "latitude": 39.404068,
      "longitude": -7.967596,
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
      "heading": 304,
      "squawk": "3213",
      "timestamp": 1704986553,
      "ems": null
    },
    {
      "latitude": 39.40419,
      "longitude": -7.967834,
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
      "heading": 304,
      "squawk": "3213",
      "timestamp": 1704986553,
      "ems": null
    },
    {
      "latitude": 39.40498,
      "longitude": -7.969421,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 303,
      "squawk": "3213",
      "timestamp": 1704986557,
      "ems": null
    },
    {
      "latitude": 39.405632,
      "longitude": -7.970764,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 302,
      "squawk": "3213",
      "timestamp": 1704986560,
      "ems": null
    },
    {
      "latitude": 39.406284,
      "longitude": -7.971985,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 302,
      "squawk": "3213",
      "timestamp": 1704986563,
      "ems": null
    },
    {
      "latitude": 39.406952,
      "longitude": -7.973328,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 302,
      "squawk": "3213",
      "timestamp": 1704986566,
      "ems": null
    },
    {
      "latitude": 39.407639,
      "longitude": -7.974761,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 302,
      "squawk": "3213",
      "timestamp": 1704986569,
      "ems": null
    },
    {
      "latitude": 39.409683,
      "longitude": -7.978943,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 301,
      "squawk": "3213",
      "timestamp": 1704986578,
      "ems": null
    },
    {
      "latitude": 39.411667,
      "longitude": -7.983359,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 299,
      "squawk": "3213",
      "timestamp": 1704986587,
      "ems": null
    },
    {
      "latitude": 39.413593,
      "longitude": -7.987793,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 299,
      "squawk": "3213",
      "timestamp": 1704986596,
      "ems": null
    },
    {
      "latitude": 39.415825,
      "longitude": -7.99231,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 302,
      "squawk": "3213",
      "timestamp": 1704986605,
      "ems": null
    },
    {
      "latitude": 39.418015,
      "longitude": -7.997009,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "3213",
      "timestamp": 1704986614,
      "ems": null
    },
    {
      "latitude": 39.419998,
      "longitude": -8.00163,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 299,
      "squawk": "3213",
      "timestamp": 1704986623,
      "ems": null
    },
    {
      "latitude": 39.420685,
      "longitude": -8.003361,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 297,
      "squawk": "3213",
      "timestamp": 1704986626,
      "ems": null
    },
    {
      "latitude": 39.421555,
      "longitude": -8.00569,
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
      "heading": 294,
      "squawk": "3213",
      "timestamp": 1704986630,
      "ems": null
    },
    {
      "latitude": 39.422112,
      "longitude": -8.007202,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 294,
      "squawk": "3213",
      "timestamp": 1704986633,
      "ems": null
    },
    {
      "latitude": 39.422745,
      "longitude": -8.008914,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 297,
      "squawk": "3213",
      "timestamp": 1704986636,
      "ems": null
    },
    {
      "latitude": 39.424438,
      "longitude": -8.012207,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704986642,
      "ems": null
    },
    {
      "latitude": 39.425182,
      "longitude": -8.013489,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704986645,
      "ems": null
    },
    {
      "latitude": 39.426208,
      "longitude": -8.015198,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704986648,
      "ems": null
    },
    {
      "latitude": 39.427002,
      "longitude": -8.016676,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704986651,
      "ems": null
    },
    {
      "latitude": 39.427837,
      "longitude": -8.018127,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 305,
      "squawk": "3213",
      "timestamp": 1704986654,
      "ems": null
    },
    {
      "latitude": 39.428768,
      "longitude": -8.019714,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704986657,
      "ems": null
    },
    {
      "latitude": 39.429611,
      "longitude": -8.021214,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704986660,
      "ems": null
    },
    {
      "latitude": 39.430538,
      "longitude": -8.022766,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704986663,
      "ems": null
    },
    {
      "latitude": 39.431374,
      "longitude": -8.02417,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704986666,
      "ems": null
    },
    {
      "latitude": 39.432259,
      "longitude": -8.025635,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 308,
      "squawk": "3213",
      "timestamp": 1704986669,
      "ems": null
    },
    {
      "latitude": 39.435192,
      "longitude": -8.030273,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 308,
      "squawk": "3213",
      "timestamp": 1704986678,
      "ems": null
    },
    {
      "latitude": 39.437759,
      "longitude": -8.034589,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704986687,
      "ems": null
    },
    {
      "latitude": 39.439476,
      "longitude": -8.037476,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 305,
      "squawk": "3213",
      "timestamp": 1704986693,
      "ems": null
    },
    {
      "latitude": 39.44194,
      "longitude": -8.042114,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 304,
      "squawk": "3213",
      "timestamp": 1704986703,
      "ems": null
    },
    {
      "latitude": 39.444351,
      "longitude": -8.04653,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 305,
      "squawk": "3213",
      "timestamp": 1704986711,
      "ems": null
    },
    {
      "latitude": 39.446869,
      "longitude": -8.051127,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 304,
      "squawk": "3213",
      "timestamp": 1704986721,
      "ems": null
    },
    {
      "latitude": 39.449249,
      "longitude": -8.055546,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704986730,
      "ems": null
    },
    {
      "latitude": 39.45195,
      "longitude": -8.060263,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704986739,
      "ems": null
    },
    {
      "latitude": 39.454422,
      "longitude": -8.064801,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 302,
      "squawk": "3213",
      "timestamp": 1704986748,
      "ems": null
    },
    {
      "latitude": 39.456841,
      "longitude": -8.069702,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 303,
      "squawk": "3213",
      "timestamp": 1704986757,
      "ems": null
    },
    {
      "latitude": 39.459503,
      "longitude": -8.074473,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704986766,
      "ems": null
    },
    {
      "latitude": 39.462101,
      "longitude": -8.079041,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 303,
      "squawk": "3213",
      "timestamp": 1704986775,
      "ems": null
    },
    {
      "latitude": 39.464584,
      "longitude": -8.083728,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704986784,
      "ems": null
    },
    {
      "latitude": 39.467194,
      "longitude": -8.088087,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 310,
      "squawk": "3213",
      "timestamp": 1704986793,
      "ems": null
    },
    {
      "latitude": 39.470398,
      "longitude": -8.092744,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 311,
      "squawk": "3213",
      "timestamp": 1704986802,
      "ems": null
    },
    {
      "latitude": 39.472961,
      "longitude": -8.097521,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 300,
      "squawk": "3213",
      "timestamp": 1704986811,
      "ems": null
    },
    {
      "latitude": 39.47369,
      "longitude": -8.099182,
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
      "heading": 299,
      "squawk": "3213",
      "timestamp": 1704986814,
      "ems": null
    },
    {
      "latitude": 39.474426,
      "longitude": -8.100984,
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
      "heading": 298,
      "squawk": "3213",
      "timestamp": 1704986817,
      "ems": null
    },
    {
      "latitude": 39.475159,
      "longitude": -8.102715,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 297,
      "squawk": "3213",
      "timestamp": 1704986820,
      "ems": null
    },
    {
      "latitude": 39.47588,
      "longitude": -8.104675,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 294,
      "squawk": "3213",
      "timestamp": 1704986823,
      "ems": null
    },
    {
      "latitude": 39.47644,
      "longitude": -8.106358,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 293,
      "squawk": "3213",
      "timestamp": 1704986826,
      "ems": null
    },
    {
      "latitude": 39.477043,
      "longitude": -8.108154,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 292,
      "squawk": "3213",
      "timestamp": 1704986829,
      "ems": null
    },
    {
      "latitude": 39.4776,
      "longitude": -8.109985,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 291,
      "squawk": "3213",
      "timestamp": 1704986832,
      "ems": null
    },
    {
      "latitude": 39.478207,
      "longitude": -8.112061,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 289,
      "squawk": "3213",
      "timestamp": 1704986835,
      "ems": null
    },
    {
      "latitude": 39.478683,
      "longitude": -8.114,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 287,
      "squawk": "3213",
      "timestamp": 1704986839,
      "ems": null
    },
    {
      "latitude": 39.479046,
      "longitude": -8.115662,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 285,
      "squawk": "3213",
      "timestamp": 1704986841,
      "ems": null
    },
    {
      "latitude": 39.479416,
      "longitude": -8.117463,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 284,
      "squawk": "3213",
      "timestamp": 1704986844,
      "ems": null
    },
    {
      "latitude": 39.479881,
      "longitude": -8.119751,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 284,
      "squawk": "3213",
      "timestamp": 1704986848,
      "ems": null
    },
    {
      "latitude": 39.480301,
      "longitude": -8.121643,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 285,
      "squawk": "3213",
      "timestamp": 1704986851,
      "ems": null
    },
    {
      "latitude": 39.480789,
      "longitude": -8.123733,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 288,
      "squawk": "3213",
      "timestamp": 1704986854,
      "ems": null
    },
    {
      "latitude": 39.482208,
      "longitude": -8.127316,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 302,
      "squawk": "3213",
      "timestamp": 1704986860,
      "ems": null
    },
    {
      "latitude": 39.483124,
      "longitude": -8.128927,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704986863,
      "ems": null
    },
    {
      "latitude": 39.483978,
      "longitude": -8.130432,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704986866,
      "ems": null
    },
    {
      "latitude": 39.48505,
      "longitude": -8.132263,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704986869,
      "ems": null
    },
    {
      "latitude": 39.48587,
      "longitude": -8.133704,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704986872,
      "ems": null
    },
    {
      "latitude": 39.48682,
      "longitude": -8.135193,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704986875,
      "ems": null
    },
    {
      "latitude": 39.487843,
      "longitude": -8.136963,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704986878,
      "ems": null
    },
    {
      "latitude": 39.488682,
      "longitude": -8.138428,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704986881,
      "ems": null
    },
    {
      "latitude": 39.489704,
      "longitude": -8.140137,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704986884,
      "ems": null
    },
    {
      "latitude": 39.490448,
      "longitude": -8.141357,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704986886,
      "ems": null
    },
    {
      "latitude": 39.491287,
      "longitude": -8.1427,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704986889,
      "ems": null
    },
    {
      "latitude": 39.494408,
      "longitude": -8.147949,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704986899,
      "ems": null
    },
    {
      "latitude": 39.497105,
      "longitude": -8.152344,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 309,
      "squawk": "3213",
      "timestamp": 1704986908,
      "ems": null
    },
    {
      "latitude": 39.500038,
      "longitude": -8.156921,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 309,
      "squawk": "3213",
      "timestamp": 1704986917,
      "ems": null
    },
    {
      "latitude": 39.502739,
      "longitude": -8.161133,
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
      "heading": 309,
      "squawk": "3213",
      "timestamp": 1704986926,
      "ems": null
    },
    {
      "latitude": 39.5056,
      "longitude": -8.165409,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 312,
      "squawk": "3213",
      "timestamp": 1704986935,
      "ems": null
    },
    {
      "latitude": 39.508511,
      "longitude": -8.169556,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 312,
      "squawk": "3213",
      "timestamp": 1704986944,
      "ems": null
    },
    {
      "latitude": 39.511257,
      "longitude": -8.173706,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 308,
      "squawk": "3213",
      "timestamp": 1704986954,
      "ems": null
    },
    {
      "latitude": 39.512886,
      "longitude": -8.176575,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 305,
      "squawk": "3213",
      "timestamp": 1704986959,
      "ems": null
    },
    {
      "latitude": 39.513657,
      "longitude": -8.177948,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 305,
      "squawk": "3213",
      "timestamp": 1704986962,
      "ems": null
    },
    {
      "latitude": 39.514389,
      "longitude": -8.179321,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 303,
      "squawk": "3213",
      "timestamp": 1704986965,
      "ems": null
    },
    {
      "latitude": 39.515121,
      "longitude": -8.180874,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "3213",
      "timestamp": 1704986968,
      "ems": null
    },
    {
      "latitude": 39.5159,
      "longitude": -8.182546,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 299,
      "squawk": "3213",
      "timestamp": 1704986971,
      "ems": null
    },
    {
      "latitude": 39.516613,
      "longitude": -8.184143,
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
      "heading": 299,
      "squawk": "3213",
      "timestamp": 1704986974,
      "ems": null
    },
    {
      "latitude": 39.517265,
      "longitude": -8.185669,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 299,
      "squawk": "3213",
      "timestamp": 1704986977,
      "ems": null
    },
    {
      "latitude": 39.517914,
      "longitude": -8.187256,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 298,
      "squawk": "3213",
      "timestamp": 1704986981,
      "ems": null
    },
    {
      "latitude": 39.51852,
      "longitude": -8.188599,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 299,
      "squawk": "3213",
      "timestamp": 1704986983,
      "ems": null
    },
    {
      "latitude": 39.519127,
      "longitude": -8.189941,
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
      "heading": 300,
      "squawk": "3213",
      "timestamp": 1704986986,
      "ems": null
    },
    {
      "latitude": 39.521255,
      "longitude": -8.19401,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704986996,
      "ems": null
    },
    {
      "latitude": 39.521896,
      "longitude": -8.195024,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704986998,
      "ems": null
    },
    {
      "latitude": 39.52272,
      "longitude": -8.196398,
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
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704987002,
      "ems": null
    },
    {
      "latitude": 39.523407,
      "longitude": -8.197592,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704987005,
      "ems": null
    },
    {
      "latitude": 39.524059,
      "longitude": -8.19873,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704987008,
      "ems": null
    },
    {
      "latitude": 39.524712,
      "longitude": -8.199951,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 304,
      "squawk": "3213",
      "timestamp": 1704987011,
      "ems": null
    },
    {
      "latitude": 39.526566,
      "longitude": -8.203921,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 300,
      "squawk": "3213",
      "timestamp": 1704987020,
      "ems": null
    },
    {
      "latitude": 39.527084,
      "longitude": -8.205078,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 300,
      "squawk": "3213",
      "timestamp": 1704987023,
      "ems": null
    },
    {
      "latitude": 39.529037,
      "longitude": -8.208817,
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
      "heading": 304,
      "squawk": "3213",
      "timestamp": 1704987032,
      "ems": null
    },
    {
      "latitude": 39.531189,
      "longitude": -8.212698,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 305,
      "squawk": "3213",
      "timestamp": 1704987041,
      "ems": null
    },
    {
      "latitude": 39.532532,
      "longitude": -8.21521,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 303,
      "squawk": "3213",
      "timestamp": 1704987047,
      "ems": null
    },
    {
      "latitude": 39.53476,
      "longitude": -8.219505,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 303,
      "squawk": "3213",
      "timestamp": 1704987056,
      "ems": null
    },
    {
      "latitude": 39.537003,
      "longitude": -8.223999,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 302,
      "squawk": "3213",
      "timestamp": 1704987065,
      "ems": null
    },
    {
      "latitude": 39.539284,
      "longitude": -8.228394,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704987074,
      "ems": null
    },
    {
      "latitude": 39.540169,
      "longitude": -8.229858,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 308,
      "squawk": "3213",
      "timestamp": 1704987078,
      "ems": null
    },
    {
      "latitude": 39.54158,
      "longitude": -8.23282,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 298,
      "squawk": "3213",
      "timestamp": 1704987083,
      "ems": null
    },
    {
      "latitude": 39.542263,
      "longitude": -8.234619,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 297,
      "squawk": "3213",
      "timestamp": 1704987086,
      "ems": null
    },
    {
      "latitude": 39.542961,
      "longitude": -8.236328,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 297,
      "squawk": "3213",
      "timestamp": 1704987089,
      "ems": null
    },
    {
      "latitude": 39.545242,
      "longitude": -8.241272,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 302,
      "squawk": "3213",
      "timestamp": 1704987099,
      "ems": null
    },
    {
      "latitude": 39.546871,
      "longitude": -8.244568,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 303,
      "squawk": "3213",
      "timestamp": 1704987105,
      "ems": null
    },
    {
      "latitude": 39.547623,
      "longitude": -8.245955,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 303,
      "squawk": "3213",
      "timestamp": 1704987108,
      "ems": null
    },
    {
      "latitude": 39.549225,
      "longitude": -8.249121,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 303,
      "squawk": "3213",
      "timestamp": 1704987114,
      "ems": null
    },
    {
      "latitude": 39.550003,
      "longitude": -8.250672,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "squawk": "3213",
      "timestamp": 1704987117,
      "ems": null
    },
    {
      "latitude": 39.552292,
      "longitude": -8.255629,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 301,
      "squawk": "3213",
      "timestamp": 1704987126,
      "ems": null
    },
    {
      "latitude": 39.55455,
      "longitude": -8.260376,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 301,
      "squawk": "3213",
      "timestamp": 1704987135,
      "ems": null
    },
    {
      "latitude": 39.556778,
      "longitude": -8.265242,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 300,
      "squawk": "3213",
      "timestamp": 1704987144,
      "ems": null
    },
    {
      "latitude": 39.559067,
      "longitude": -8.27002,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 303,
      "squawk": "3213",
      "timestamp": 1704987153,
      "ems": null
    },
    {
      "latitude": 39.561489,
      "longitude": -8.274536,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 305,
      "squawk": "3213",
      "timestamp": 1704987162,
      "ems": null
    },
    {
      "latitude": 39.563782,
      "longitude": -8.278975,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 302,
      "squawk": "3213",
      "timestamp": 1704987171,
      "ems": null
    },
    {
      "latitude": 39.566071,
      "longitude": -8.283691,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 303,
      "squawk": "3213",
      "timestamp": 1704987180,
      "ems": null
    },
    {
      "latitude": 39.567493,
      "longitude": -8.28656,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 299,
      "squawk": "3213",
      "timestamp": 1704987186,
      "ems": null
    },
    {
      "latitude": 39.568192,
      "longitude": -8.288391,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 296,
      "squawk": "3213",
      "timestamp": 1704987189,
      "ems": null
    },
    {
      "latitude": 39.568771,
      "longitude": -8.289842,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 297,
      "squawk": "3213",
      "timestamp": 1704987192,
      "ems": null
    },
    {
      "latitude": 39.570877,
      "longitude": -8.294678,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 300,
      "squawk": "3213",
      "timestamp": 1704987201,
      "ems": null
    },
    {
      "latitude": 39.573128,
      "longitude": -8.2995,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 301,
      "squawk": "3213",
      "timestamp": 1704987211,
      "ems": null
    },
    {
      "latitude": 39.575317,
      "longitude": -8.304231,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 302,
      "squawk": "3213",
      "timestamp": 1704987220,
      "ems": null
    },
    {
      "latitude": 39.576199,
      "longitude": -8.305969,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 302,
      "squawk": "3213",
      "timestamp": 1704987223,
      "ems": null
    },
    {
      "latitude": 39.578293,
      "longitude": -8.310425,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 301,
      "squawk": "3213",
      "timestamp": 1704987232,
      "ems": null
    },
    {
      "latitude": 39.580582,
      "longitude": -8.314919,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 304,
      "squawk": "3213",
      "timestamp": 1704987241,
      "ems": null
    },
    {
      "latitude": 39.581406,
      "longitude": -8.316352,
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
      "heading": 308,
      "squawk": "3213",
      "timestamp": 1704987244,
      "ems": null
    },
    {
      "latitude": 39.582298,
      "longitude": -8.317688,
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
      "heading": 311,
      "squawk": "3213",
      "timestamp": 1704987247,
      "ems": null
    },
    {
      "latitude": 39.583282,
      "longitude": -8.319038,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 312,
      "squawk": "3213",
      "timestamp": 1704987250,
      "ems": null
    },
    {
      "latitude": 39.58416,
      "longitude": -8.320374,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 310,
      "squawk": "3213",
      "timestamp": 1704987253,
      "ems": null
    },
    {
      "latitude": 39.585159,
      "longitude": -8.322024,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704987256,
      "ems": null
    },
    {
      "latitude": 39.585983,
      "longitude": -8.323457,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 305,
      "squawk": "3213",
      "timestamp": 1704987259,
      "ems": null
    },
    {
      "latitude": 39.588135,
      "longitude": -8.327995,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 300,
      "squawk": "3213",
      "timestamp": 1704987268,
      "ems": null
    },
    {
      "latitude": 39.588814,
      "longitude": -8.329529,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 296,
      "squawk": "3213",
      "timestamp": 1704987271,
      "ems": null
    },
    {
      "latitude": 39.589466,
      "longitude": -8.331299,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 295,
      "squawk": "3213",
      "timestamp": 1704987274,
      "ems": null
    },
    {
      "latitude": 39.590012,
      "longitude": -8.332831,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 294,
      "squawk": "3213",
      "timestamp": 1704987277,
      "ems": null
    },
    {
      "latitude": 39.590652,
      "longitude": -8.334682,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 294,
      "squawk": "3213",
      "timestamp": 1704987280,
      "ems": null
    },
    {
      "latitude": 39.591236,
      "longitude": -8.336365,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 294,
      "squawk": "3213",
      "timestamp": 1704987283,
      "ems": null
    },
    {
      "latitude": 39.591797,
      "longitude": -8.338145,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 292,
      "squawk": "3213",
      "timestamp": 1704987286,
      "ems": null
    },
    {
      "latitude": 39.592346,
      "longitude": -8.339996,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 289,
      "squawk": "3213",
      "timestamp": 1704987289,
      "ems": null
    },
    {
      "latitude": 39.592758,
      "longitude": -8.341668,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 287,
      "squawk": "3213",
      "timestamp": 1704987292,
      "ems": null
    },
    {
      "latitude": 39.593216,
      "longitude": -8.343579,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 287,
      "squawk": "3213",
      "timestamp": 1704987295,
      "ems": null
    },
    {
      "latitude": 39.593704,
      "longitude": -8.345398,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 287,
      "squawk": "3213",
      "timestamp": 1704987298,
      "ems": null
    },
    {
      "latitude": 39.594131,
      "longitude": -8.347221,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 288,
      "squawk": "3213",
      "timestamp": 1704987301,
      "ems": null
    },
    {
      "latitude": 39.594498,
      "longitude": -8.348773,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 286,
      "squawk": "3213",
      "timestamp": 1704987304,
      "ems": null
    },
    {
      "latitude": 39.594959,
      "longitude": -8.350891,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 284,
      "squawk": "3213",
      "timestamp": 1704987308,
      "ems": null
    },
    {
      "latitude": 39.595284,
      "longitude": -8.352661,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 284,
      "squawk": "3213",
      "timestamp": 1704987310,
      "ems": null
    },
    {
      "latitude": 39.595516,
      "longitude": -8.353455,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "3213",
      "timestamp": 1704987312,
      "ems": null
    },
    {
      "latitude": 39.596924,
      "longitude": -8.358924,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 286,
      "squawk": "3213",
      "timestamp": 1704987322,
      "ems": null
    },
    {
      "latitude": 39.597286,
      "longitude": -8.360352,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 293,
      "squawk": "3213",
      "timestamp": 1704987325,
      "ems": null
    },
    {
      "latitude": 39.597656,
      "longitude": -8.361432,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 293,
      "squawk": "3213",
      "timestamp": 1704987326,
      "ems": null
    },
    {
      "latitude": 39.598495,
      "longitude": -8.363586,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 297,
      "squawk": "3213",
      "timestamp": 1704987330,
      "ems": null
    },
    {
      "latitude": 39.599121,
      "longitude": -8.364954,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 298,
      "squawk": "3213",
      "timestamp": 1704987333,
      "ems": null
    },
    {
      "latitude": 39.599808,
      "longitude": -8.366447,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 301,
      "squawk": "3213",
      "timestamp": 1704987336,
      "ems": null
    },
    {
      "latitude": 39.600494,
      "longitude": -8.36788,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 300,
      "squawk": "3213",
      "timestamp": 1704987339,
      "ems": null
    },
    {
      "latitude": 39.600677,
      "longitude": -8.368418,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 300,
      "squawk": "3213",
      "timestamp": 1704987341,
      "ems": null
    },
    {
      "latitude": 39.601711,
      "longitude": -8.370544,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 301,
      "squawk": "3213",
      "timestamp": 1704987345,
      "ems": null
    },
    {
      "latitude": 39.602501,
      "longitude": -8.372314,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 301,
      "squawk": "3213",
      "timestamp": 1704987348,
      "ems": null
    },
    {
      "latitude": 39.603199,
      "longitude": -8.373779,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 301,
      "squawk": "3213",
      "timestamp": 1704987351,
      "ems": null
    },
    {
      "latitude": 39.603897,
      "longitude": -8.375244,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 305,
      "squawk": "3213",
      "timestamp": 1704987354,
      "ems": null
    },
    {
      "latitude": 39.604752,
      "longitude": -8.376657,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 308,
      "squawk": "3213",
      "timestamp": 1704987357,
      "ems": null
    },
    {
      "latitude": 39.605392,
      "longitude": -8.377672,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 308,
      "squawk": "3213",
      "timestamp": 1704987360,
      "ems": null
    },
    {
      "latitude": 39.606037,
      "longitude": -8.378845,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 308,
      "squawk": "3213",
      "timestamp": 1704987362,
      "ems": null
    },
    {
      "latitude": 39.60767,
      "longitude": -8.381653,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 308,
      "squawk": "3213",
      "timestamp": 1704987369,
      "ems": null
    },
    {
      "latitude": 39.608276,
      "longitude": -8.382688,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 309,
      "squawk": "3213",
      "timestamp": 1704987372,
      "ems": null
    },
    {
      "latitude": 39.609238,
      "longitude": -8.38418,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 308,
      "squawk": "3213",
      "timestamp": 1704987376,
      "ems": null
    },
    {
      "latitude": 39.60997,
      "longitude": -8.385494,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704987378,
      "ems": null
    },
    {
      "latitude": 39.610474,
      "longitude": -8.38639,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704987380,
      "ems": null
    },
    {
      "latitude": 39.612808,
      "longitude": -8.390629,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 304,
      "squawk": "3213",
      "timestamp": 1704987390,
      "ems": null
    },
    {
      "latitude": 39.613113,
      "longitude": -8.391296,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 302,
      "squawk": "3213",
      "timestamp": 1704987391,
      "ems": null
    },
    {
      "latitude": 39.614548,
      "longitude": -8.394331,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 301,
      "squawk": "3213",
      "timestamp": 1704987398,
      "ems": null
    },
    {
      "latitude": 39.61528,
      "longitude": -8.395943,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 300,
      "squawk": "3213",
      "timestamp": 1704987401,
      "ems": null
    },
    {
      "latitude": 39.61591,
      "longitude": -8.3974,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 300,
      "squawk": "3213",
      "timestamp": 1704987404,
      "ems": null
    },
    {
      "latitude": 39.617397,
      "longitude": -8.400513,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "squawk": "3213",
      "timestamp": 1704987410,
      "ems": null
    },
    {
      "latitude": 39.618118,
      "longitude": -8.401974,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 300,
      "squawk": "3213",
      "timestamp": 1704987414,
      "ems": null
    },
    {
      "latitude": 39.618759,
      "longitude": -8.403526,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 299,
      "squawk": "3213",
      "timestamp": 1704987416,
      "ems": null
    },
    {
      "latitude": 39.6194,
      "longitude": -8.405151,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 297,
      "squawk": "3213",
      "timestamp": 1704987419,
      "ems": null
    },
    {
      "latitude": 39.621586,
      "longitude": -8.410034,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 301,
      "squawk": "3213",
      "timestamp": 1704987429,
      "ems": null
    },
    {
      "latitude": 39.623962,
      "longitude": -8.414612,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 303,
      "squawk": "3213",
      "timestamp": 1704987438,
      "ems": null
    },
    {
      "latitude": 39.625637,
      "longitude": -8.417603,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704987443,
      "ems": null
    },
    {
      "latitude": 39.626709,
      "longitude": -8.41925,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 309,
      "squawk": "3213",
      "timestamp": 1704987447,
      "ems": null
    },
    {
      "latitude": 39.62764,
      "longitude": -8.420782,
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
      "heading": 308,
      "squawk": "3213",
      "timestamp": 1704987450,
      "ems": null
    },
    {
      "latitude": 39.628571,
      "longitude": -8.422302,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704987453,
      "ems": null
    },
    {
      "latitude": 39.629379,
      "longitude": -8.423707,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704987456,
      "ems": null
    },
    {
      "latitude": 39.631969,
      "longitude": -8.428162,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 308,
      "squawk": "3213",
      "timestamp": 1704987465,
      "ems": null
    },
    {
      "latitude": 39.633041,
      "longitude": -8.429797,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 1408,
        "ms": 7.2
      },
      "heading": 310,
      "squawk": "3213",
      "timestamp": 1704987468,
      "ems": null
    },
    {
      "latitude": 39.633865,
      "longitude": -8.430992,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 310,
      "squawk": "3213",
      "timestamp": 1704987471,
      "ems": null
    },
    {
      "latitude": 39.636475,
      "longitude": -8.434933,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 311,
      "squawk": "3213",
      "timestamp": 1704987480,
      "ems": null
    },
    {
      "latitude": 39.638031,
      "longitude": -8.437321,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 311,
      "squawk": "3213",
      "timestamp": 1704987486,
      "ems": null
    },
    {
      "latitude": 39.639038,
      "longitude": -8.438694,
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
      "heading": 315,
      "squawk": "3213",
      "timestamp": 1704987489,
      "ems": null
    },
    {
      "latitude": 39.639999,
      "longitude": -8.439948,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 315,
      "squawk": "3213",
      "timestamp": 1704987492,
      "ems": null
    },
    {
      "latitude": 39.64286,
      "longitude": -8.443665,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 317,
      "squawk": "3213",
      "timestamp": 1704987501,
      "ems": null
    },
    {
      "latitude": 39.643845,
      "longitude": -8.444844,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 317,
      "squawk": "3213",
      "timestamp": 1704987504,
      "ems": null
    },
    {
      "latitude": 39.646446,
      "longitude": -8.448547,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 308,
      "squawk": "3213",
      "timestamp": 1704987513,
      "ems": null
    },
    {
      "latitude": 39.648167,
      "longitude": -8.451294,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 308,
      "squawk": "3213",
      "timestamp": 1704987519,
      "ems": null
    },
    {
      "latitude": 39.648926,
      "longitude": -8.452546,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704987522,
      "ems": null
    },
    {
      "latitude": 39.649704,
      "longitude": -8.453857,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704987525,
      "ems": null
    },
    {
      "latitude": 39.650448,
      "longitude": -8.4552,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704987528,
      "ems": null
    },
    {
      "latitude": 39.651196,
      "longitude": -8.45636,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704987531,
      "ems": null
    },
    {
      "latitude": 39.651947,
      "longitude": -8.457562,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 308,
      "squawk": "3213",
      "timestamp": 1704987534,
      "ems": null
    },
    {
      "latitude": 39.65366,
      "longitude": -8.460571,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 303,
      "squawk": "3213",
      "timestamp": 1704987541,
      "ems": null
    },
    {
      "latitude": 39.654266,
      "longitude": -8.462036,
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
      "heading": 296,
      "squawk": "3213",
      "timestamp": 1704987544,
      "ems": null
    },
    {
      "latitude": 39.654732,
      "longitude": -8.463562,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 290,
      "squawk": "3213",
      "timestamp": 1704987547,
      "ems": null
    },
    {
      "latitude": 39.655151,
      "longitude": -8.465149,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 287,
      "squawk": "3213",
      "timestamp": 1704987550,
      "ems": null
    },
    {
      "latitude": 39.655525,
      "longitude": -8.466797,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 286,
      "squawk": "3213",
      "timestamp": 1704987553,
      "ems": null
    },
    {
      "latitude": 39.655895,
      "longitude": -8.468445,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 286,
      "squawk": "3213",
      "timestamp": 1704987556,
      "ems": null
    },
    {
      "latitude": 39.656223,
      "longitude": -8.469849,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 286,
      "squawk": "3213",
      "timestamp": 1704987558,
      "ems": null
    },
    {
      "latitude": 39.656616,
      "longitude": -8.471594,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 286,
      "squawk": "3213",
      "timestamp": 1704987561,
      "ems": null
    },
    {
      "latitude": 39.657013,
      "longitude": -8.473389,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 284,
      "squawk": "3213",
      "timestamp": 1704987565,
      "ems": null
    },
    {
      "latitude": 39.657291,
      "longitude": -8.475037,
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
      "heading": 282,
      "squawk": "3213",
      "timestamp": 1704987568,
      "ems": null
    },
    {
      "latitude": 39.657574,
      "longitude": -8.476685,
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
      "heading": 282,
      "squawk": "3213",
      "timestamp": 1704987571,
      "ems": null
    },
    {
      "latitude": 39.657898,
      "longitude": -8.478455,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 282,
      "squawk": "3213",
      "timestamp": 1704987574,
      "ems": null
    },
    {
      "latitude": 39.658951,
      "longitude": -8.481385,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 304,
      "squawk": "3213",
      "timestamp": 1704987580,
      "ems": null
    },
    {
      "latitude": 39.659821,
      "longitude": -8.482639,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 314,
      "squawk": "3213",
      "timestamp": 1704987583,
      "ems": null
    },
    {
      "latitude": 39.660786,
      "longitude": -8.483643,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 322,
      "squawk": "3213",
      "timestamp": 1704987586,
      "ems": null
    },
    {
      "latitude": 39.661995,
      "longitude": -8.484619,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 332,
      "squawk": "3213",
      "timestamp": 1704987589,
      "ems": null
    },
    {
      "latitude": 39.6633,
      "longitude": -8.485413,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 334,
      "squawk": "3213",
      "timestamp": 1704987592,
      "ems": null
    },
    {
      "latitude": 39.664322,
      "longitude": -8.486023,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 335,
      "squawk": "3213",
      "timestamp": 1704987595,
      "ems": null
    },
    {
      "latitude": 39.665718,
      "longitude": -8.486755,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 340,
      "squawk": "3213",
      "timestamp": 1704987598,
      "ems": null
    },
    {
      "latitude": 39.666824,
      "longitude": -8.487118,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 348,
      "squawk": "3213",
      "timestamp": 1704987601,
      "ems": null
    },
    {
      "latitude": 39.66814,
      "longitude": -8.487305,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 355,
      "squawk": "3213",
      "timestamp": 1704987604,
      "ems": null
    },
    {
      "latitude": 39.669441,
      "longitude": -8.487366,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 358,
      "squawk": "3213",
      "timestamp": 1704987607,
      "ems": null
    },
    {
      "latitude": 39.670559,
      "longitude": -8.487366,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "3213",
      "timestamp": 1704987610,
      "ems": null
    },
    {
      "latitude": 39.672005,
      "longitude": -8.487244,
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
      "heading": 5,
      "squawk": "3213",
      "timestamp": 1704987613,
      "ems": null
    },
    {
      "latitude": 39.673416,
      "longitude": -8.486999,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 8,
      "squawk": "3213",
      "timestamp": 1704987616,
      "ems": null
    },
    {
      "latitude": 39.674606,
      "longitude": -8.4867,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 10,
      "squawk": "3213",
      "timestamp": 1704987619,
      "ems": null
    },
    {
      "latitude": 39.675842,
      "longitude": -8.486341,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 12,
      "squawk": "3213",
      "timestamp": 1704987622,
      "ems": null
    },
    {
      "latitude": 39.67717,
      "longitude": -8.485962,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 12,
      "squawk": "3213",
      "timestamp": 1704987625,
      "ems": null
    },
    {
      "latitude": 39.678406,
      "longitude": -8.485565,
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
      "heading": 14,
      "squawk": "3213",
      "timestamp": 1704987628,
      "ems": null
    },
    {
      "latitude": 39.679596,
      "longitude": -8.485087,
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
      "heading": 17,
      "squawk": "3213",
      "timestamp": 1704987631,
      "ems": null
    },
    {
      "latitude": 39.68066,
      "longitude": -8.484619,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 20,
      "squawk": "3213",
      "timestamp": 1704987634,
      "ems": null
    },
    {
      "latitude": 39.681793,
      "longitude": -8.484073,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 21,
      "squawk": "3213",
      "timestamp": 1704987637,
      "ems": null
    },
    {
      "latitude": 39.683167,
      "longitude": -8.483416,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 20,
      "squawk": "3213",
      "timestamp": 1704987640,
      "ems": null
    },
    {
      "latitude": 39.684357,
      "longitude": -8.482759,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 21,
      "squawk": "3213",
      "timestamp": 1704987643,
      "ems": null
    },
    {
      "latitude": 39.685547,
      "longitude": -8.482222,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 19,
      "squawk": "3213",
      "timestamp": 1704987646,
      "ems": null
    },
    {
      "latitude": 39.686737,
      "longitude": -8.481684,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 17,
      "squawk": "3213",
      "timestamp": 1704987649,
      "ems": null
    },
    {
      "latitude": 39.690437,
      "longitude": -8.480286,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 16,
      "squawk": "3213",
      "timestamp": 1704987658,
      "ems": null
    },
    {
      "latitude": 39.69421,
      "longitude": -8.478699,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 18,
      "squawk": "3213",
      "timestamp": 1704987668,
      "ems": null
    },
    {
      "latitude": 39.696579,
      "longitude": -8.477803,
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
      "heading": 16,
      "squawk": "3213",
      "timestamp": 1704987674,
      "ems": null
    },
    {
      "latitude": 39.700169,
      "longitude": -8.476379,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 17,
      "squawk": "3213",
      "timestamp": 1704987683,
      "ems": null
    },
    {
      "latitude": 39.703846,
      "longitude": -8.474792,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 16,
      "squawk": "3213",
      "timestamp": 1704987692,
      "ems": null
    },
    {
      "latitude": 39.705093,
      "longitude": -8.474519,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "3213",
      "timestamp": 1704987695,
      "ems": null
    },
    {
      "latitude": 39.706329,
      "longitude": -8.47446,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 7,
      "squawk": "3213",
      "timestamp": 1704987698,
      "ems": null
    },
    {
      "latitude": 39.707478,
      "longitude": -8.474548,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 356,
      "squawk": "3213",
      "timestamp": 1704987701,
      "ems": null
    },
    {
      "latitude": 39.708874,
      "longitude": -8.474731,
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
      "heading": 350,
      "squawk": "3213",
      "timestamp": 1704987704,
      "ems": null
    },
    {
      "latitude": 39.710129,
      "longitude": -8.475098,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 346,
      "squawk": "3213",
      "timestamp": 1704987707,
      "ems": null
    },
    {
      "latitude": 39.711365,
      "longitude": -8.475534,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 342,
      "squawk": "3213",
      "timestamp": 1704987710,
      "ems": null
    },
    {
      "latitude": 39.712692,
      "longitude": -8.476071,
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
      "heading": 341,
      "squawk": "3213",
      "timestamp": 1704987713,
      "ems": null
    },
    {
      "latitude": 39.713806,
      "longitude": -8.476685,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 336,
      "squawk": "3213",
      "timestamp": 1704987716,
      "ems": null
    },
    {
      "latitude": 39.715065,
      "longitude": -8.4776,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 329,
      "squawk": "3213",
      "timestamp": 1704987719,
      "ems": null
    },
    {
      "latitude": 39.71608,
      "longitude": -8.47846,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 326,
      "squawk": "3213",
      "timestamp": 1704987722,
      "ems": null
    },
    {
      "latitude": 39.717361,
      "longitude": -8.479594,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "3213",
      "timestamp": 1704987725,
      "ems": null
    },
    {
      "latitude": 39.718506,
      "longitude": -8.480669,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 324,
      "squawk": "3213",
      "timestamp": 1704987728,
      "ems": null
    },
    {
      "latitude": 39.719627,
      "longitude": -8.481689,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 323,
      "squawk": "3213",
      "timestamp": 1704987731,
      "ems": null
    },
    {
      "latitude": 39.720703,
      "longitude": -8.482699,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 323,
      "squawk": "3213",
      "timestamp": 1704987734,
      "ems": null
    },
    {
      "latitude": 39.721893,
      "longitude": -8.483893,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 321,
      "squawk": "3213",
      "timestamp": 1704987737,
      "ems": null
    },
    {
      "latitude": 39.722977,
      "longitude": -8.485107,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "squawk": "3213",
      "timestamp": 1704987740,
      "ems": null
    },
    {
      "latitude": 39.723999,
      "longitude": -8.486281,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 318,
      "squawk": "3213",
      "timestamp": 1704987743,
      "ems": null
    },
    {
      "latitude": 39.725071,
      "longitude": -8.487549,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 317,
      "squawk": "3213",
      "timestamp": 1704987746,
      "ems": null
    },
    {
      "latitude": 39.726105,
      "longitude": -8.488729,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 317,
      "squawk": "3213",
      "timestamp": 1704987750,
      "ems": null
    },
    {
      "latitude": 39.727119,
      "longitude": -8.48999,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 317,
      "squawk": "3213",
      "timestamp": 1704987752,
      "ems": null
    },
    {
      "latitude": 39.728119,
      "longitude": -8.491178,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 317,
      "squawk": "3213",
      "timestamp": 1704987755,
      "ems": null
    },
    {
      "latitude": 39.729263,
      "longitude": -8.492493,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 318,
      "squawk": "3213",
      "timestamp": 1704987758,
      "ems": null
    },
    {
      "latitude": 39.730331,
      "longitude": -8.493774,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 317,
      "squawk": "3213",
      "timestamp": 1704987762,
      "ems": null
    },
    {
      "latitude": 39.731186,
      "longitude": -8.49482,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 316,
      "squawk": "3213",
      "timestamp": 1704987764,
      "ems": null
    },
    {
      "latitude": 39.732243,
      "longitude": -8.496094,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 316,
      "squawk": "3213",
      "timestamp": 1704987767,
      "ems": null
    },
    {
      "latitude": 39.735489,
      "longitude": -8.500194,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 315,
      "squawk": "3213",
      "timestamp": 1704987777,
      "ems": null
    },
    {
      "latitude": 39.738464,
      "longitude": -8.504134,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 314,
      "squawk": "3213",
      "timestamp": 1704987786,
      "ems": null
    },
    {
      "latitude": 39.74144,
      "longitude": -8.507956,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 316,
      "squawk": "3213",
      "timestamp": 1704987795,
      "ems": null
    },
    {
      "latitude": 39.744553,
      "longitude": -8.511837,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 315,
      "squawk": "3213",
      "timestamp": 1704987804,
      "ems": null
    },
    {
      "latitude": 39.747482,
      "longitude": -8.515539,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 315,
      "squawk": "3213",
      "timestamp": 1704987813,
      "ems": null
    },
    {
      "latitude": 39.750412,
      "longitude": -8.519061,
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
      "heading": 318,
      "squawk": "3213",
      "timestamp": 1704987822,
      "ems": null
    },
    {
      "latitude": 39.752472,
      "longitude": -8.521211,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "3213",
      "timestamp": 1704987828,
      "ems": null
    },
    {
      "latitude": 39.753654,
      "longitude": -8.522095,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 329,
      "squawk": "3213",
      "timestamp": 1704987831,
      "ems": null
    },
    {
      "latitude": 39.754868,
      "longitude": -8.522888,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 335,
      "squawk": "3213",
      "timestamp": 1704987834,
      "ems": null
    },
    {
      "latitude": 39.756077,
      "longitude": -8.523621,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 336,
      "squawk": "3213",
      "timestamp": 1704987837,
      "ems": null
    },
    {
      "latitude": 39.757462,
      "longitude": -8.524376,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 335,
      "squawk": "3213",
      "timestamp": 1704987840,
      "ems": null
    },
    {
      "latitude": 39.758499,
      "longitude": -8.525024,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 335,
      "squawk": "3213",
      "timestamp": 1704987843,
      "ems": null
    },
    {
      "latitude": 39.759979,
      "longitude": -8.525868,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 336,
      "squawk": "3213",
      "timestamp": 1704987846,
      "ems": null
    },
    {
      "latitude": 39.761078,
      "longitude": -8.526465,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 336,
      "squawk": "3213",
      "timestamp": 1704987849,
      "ems": null
    },
    {
      "latitude": 39.762497,
      "longitude": -8.527301,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "3213",
      "timestamp": 1704987852,
      "ems": null
    },
    {
      "latitude": 39.763805,
      "longitude": -8.528015,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 337,
      "squawk": "3213",
      "timestamp": 1704987855,
      "ems": null
    },
    {
      "latitude": 39.764969,
      "longitude": -8.528674,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 336,
      "squawk": "3213",
      "timestamp": 1704987858,
      "ems": null
    },
    {
      "latitude": 39.768723,
      "longitude": -8.531003,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704987867,
      "ems": null
    },
    {
      "latitude": 39.772511,
      "longitude": -8.533569,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 332,
      "squawk": "3213",
      "timestamp": 1704987877,
      "ems": null
    },
    {
      "latitude": 39.77372,
      "longitude": -8.534363,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 331,
      "squawk": "3213",
      "timestamp": 1704987880,
      "ems": null
    },
    {
      "latitude": 39.774765,
      "longitude": -8.535123,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 331,
      "squawk": "3213",
      "timestamp": 1704987883,
      "ems": null
    },
    {
      "latitude": 39.775814,
      "longitude": -8.535828,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 332,
      "squawk": "3213",
      "timestamp": 1704987885,
      "ems": null
    },
    {
      "latitude": 39.778473,
      "longitude": -8.537272,
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
      "heading": 340,
      "squawk": "3213",
      "timestamp": 1704987892,
      "ems": null
    },
    {
      "latitude": 39.779678,
      "longitude": -8.537781,
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
      "heading": 343,
      "squawk": "3213",
      "timestamp": 1704987895,
      "ems": null
    },
    {
      "latitude": 39.781029,
      "longitude": -8.538208,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 345,
      "squawk": "3213",
      "timestamp": 1704987898,
      "ems": null
    },
    {
      "latitude": 39.782284,
      "longitude": -8.538696,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 343,
      "squawk": "3213",
      "timestamp": 1704987901,
      "ems": null
    },
    {
      "latitude": 39.783543,
      "longitude": -8.539185,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 342,
      "squawk": "3213",
      "timestamp": 1704987904,
      "ems": null
    },
    {
      "latitude": 39.784752,
      "longitude": -8.539673,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 342,
      "squawk": "3213",
      "timestamp": 1704987907,
      "ems": null
    },
    {
      "latitude": 39.78598,
      "longitude": -8.540198,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 341,
      "squawk": "3213",
      "timestamp": 1704987910,
      "ems": null
    },
    {
      "latitude": 39.787399,
      "longitude": -8.540795,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 342,
      "squawk": "3213",
      "timestamp": 1704987913,
      "ems": null
    },
    {
      "latitude": 39.788616,
      "longitude": -8.541199,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 344,
      "squawk": "3213",
      "timestamp": 1704987916,
      "ems": null
    },
    {
      "latitude": 39.789921,
      "longitude": -8.541687,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 343,
      "squawk": "3213",
      "timestamp": 1704987919,
      "ems": null
    },
    {
      "latitude": 39.793808,
      "longitude": -8.543183,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 344,
      "squawk": "3213",
      "timestamp": 1704987928,
      "ems": null
    },
    {
      "latitude": 39.797699,
      "longitude": -8.544557,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "3213",
      "timestamp": 1704987937,
      "ems": null
    },
    {
      "latitude": 39.801559,
      "longitude": -8.546143,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 340,
      "squawk": "3213",
      "timestamp": 1704987946,
      "ems": null
    },
    {
      "latitude": 39.805435,
      "longitude": -8.547722,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 343,
      "squawk": "3213",
      "timestamp": 1704987955,
      "ems": null
    },
    {
      "latitude": 39.809418,
      "longitude": -8.549394,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 342,
      "squawk": "3213",
      "timestamp": 1704987964,
      "ems": null
    },
    {
      "latitude": 39.812031,
      "longitude": -8.550354,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 344,
      "squawk": "3213",
      "timestamp": 1704987970,
      "ems": null
    },
    {
      "latitude": 39.815964,
      "longitude": -8.551722,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 345,
      "squawk": "3213",
      "timestamp": 1704987979,
      "ems": null
    },
    {
      "latitude": 39.820129,
      "longitude": -8.553215,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 343,
      "squawk": "3213",
      "timestamp": 1704987989,
      "ems": null
    },
    {
      "latitude": 39.823883,
      "longitude": -8.554647,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 343,
      "squawk": "3213",
      "timestamp": 1704987998,
      "ems": null
    },
    {
      "latitude": 39.827866,
      "longitude": -8.55626,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 342,
      "squawk": "3213",
      "timestamp": 1704988007,
      "ems": null
    },
    {
      "latitude": 39.832031,
      "longitude": -8.557753,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 347,
      "squawk": "3213",
      "timestamp": 1704988016,
      "ems": null
    },
    {
      "latitude": 39.83596,
      "longitude": -8.559021,
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
      "heading": 345,
      "squawk": "3213",
      "timestamp": 1704988025,
      "ems": null
    },
    {
      "latitude": 39.839729,
      "longitude": -8.560486,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 340,
      "squawk": "3213",
      "timestamp": 1704988034,
      "ems": null
    },
    {
      "latitude": 39.843796,
      "longitude": -8.56235,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 341,
      "squawk": "3213",
      "timestamp": 1704988043,
      "ems": null
    },
    {
      "latitude": 39.845085,
      "longitude": -8.562866,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 342,
      "squawk": "3213",
      "timestamp": 1704988046,
      "ems": null
    },
    {
      "latitude": 39.849014,
      "longitude": -8.56444,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 343,
      "squawk": "3213",
      "timestamp": 1704988055,
      "ems": null
    },
    {
      "latitude": 39.852951,
      "longitude": -8.565857,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 345,
      "squawk": "3213",
      "timestamp": 1704988064,
      "ems": null
    },
    {
      "latitude": 39.854187,
      "longitude": -8.566291,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 345,
      "squawk": "3213",
      "timestamp": 1704988067,
      "ems": null
    },
    {
      "latitude": 39.858444,
      "longitude": -8.56781,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 345,
      "squawk": "3213",
      "timestamp": 1704988076,
      "ems": null
    },
    {
      "latitude": 39.860962,
      "longitude": -8.56862,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 345,
      "squawk": "3213",
      "timestamp": 1704988082,
      "ems": null
    },
    {
      "latitude": 39.864868,
      "longitude": -8.569885,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 345,
      "squawk": "3213",
      "timestamp": 1704988091,
      "ems": null
    },
    {
      "latitude": 39.868607,
      "longitude": -8.571068,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 349,
      "squawk": "3213",
      "timestamp": 1704988100,
      "ems": null
    },
    {
      "latitude": 39.870316,
      "longitude": -8.571411,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "squawk": "3213",
      "timestamp": 1704988104,
      "ems": null
    },
    {
      "latitude": 39.871399,
      "longitude": -8.571546,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 355,
      "squawk": "3213",
      "timestamp": 1704988106,
      "ems": null
    },
    {
      "latitude": 39.872738,
      "longitude": -8.571594,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 357,
      "squawk": "3213",
      "timestamp": 1704988109,
      "ems": null
    },
    {
      "latitude": 39.874191,
      "longitude": -8.571665,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 358,
      "squawk": "3213",
      "timestamp": 1704988113,
      "ems": null
    },
    {
      "latitude": 39.875622,
      "longitude": -8.571655,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 359,
      "squawk": "3213",
      "timestamp": 1704988116,
      "ems": null
    },
    {
      "latitude": 39.87674,
      "longitude": -8.571655,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 359,
      "squawk": "3213",
      "timestamp": 1704988118,
      "ems": null
    },
    {
      "latitude": 39.878036,
      "longitude": -8.571605,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 1,
      "squawk": "3213",
      "timestamp": 1704988122,
      "ems": null
    },
    {
      "latitude": 39.879501,
      "longitude": -8.571546,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 2,
      "squawk": "3213",
      "timestamp": 1704988125,
      "ems": null
    },
    {
      "latitude": 39.880829,
      "longitude": -8.571486,
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
      "heading": 2,
      "squawk": "3213",
      "timestamp": 1704988128,
      "ems": null
    },
    {
      "latitude": 39.882095,
      "longitude": -8.571472,
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
      "heading": 359,
      "squawk": "3213",
      "timestamp": 1704988131,
      "ems": null
    },
    {
      "latitude": 39.886185,
      "longitude": -8.571724,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 358,
      "squawk": "3213",
      "timestamp": 1704988140,
      "ems": null
    },
    {
      "latitude": 39.890396,
      "longitude": -8.571546,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 3,
      "squawk": "3213",
      "timestamp": 1704988149,
      "ems": null
    },
    {
      "latitude": 39.891731,
      "longitude": -8.571289,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 10,
      "squawk": "3213",
      "timestamp": 1704988152,
      "ems": null
    },
    {
      "latitude": 39.893219,
      "longitude": -8.570801,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 16,
      "squawk": "3213",
      "timestamp": 1704988155,
      "ems": null
    },
    {
      "latitude": 39.894516,
      "longitude": -8.570292,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 14,
      "squawk": "3213",
      "timestamp": 1704988158,
      "ems": null
    },
    {
      "latitude": 39.896061,
      "longitude": -8.569946,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 6,
      "squawk": "3213",
      "timestamp": 1704988161,
      "ems": null
    },
    {
      "latitude": 39.899277,
      "longitude": -8.570649,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 342,
      "squawk": "3213",
      "timestamp": 1704988167,
      "ems": null
    },
    {
      "latitude": 39.900787,
      "longitude": -8.571306,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 339,
      "squawk": "3213",
      "timestamp": 1704988170,
      "ems": null
    },
    {
      "latitude": 39.902203,
      "longitude": -8.572021,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 339,
      "squawk": "3213",
      "timestamp": 1704988173,
      "ems": null
    },
    {
      "latitude": 39.903717,
      "longitude": -8.57274,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 340,
      "squawk": "3213",
      "timestamp": 1704988176,
      "ems": null
    },
    {
      "latitude": 39.905323,
      "longitude": -8.573547,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 338,
      "squawk": "3213",
      "timestamp": 1704988179,
      "ems": null
    },
    {
      "latitude": 39.906628,
      "longitude": -8.57428,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 335,
      "squawk": "3213",
      "timestamp": 1704988182,
      "ems": null
    },
    {
      "latitude": 39.90802,
      "longitude": -8.575247,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 330,
      "squawk": "3213",
      "timestamp": 1704988185,
      "ems": null
    },
    {
      "latitude": 39.909348,
      "longitude": -8.576382,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 325,
      "squawk": "3213",
      "timestamp": 1704988188,
      "ems": null
    },
    {
      "latitude": 39.9104,
      "longitude": -8.577456,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 319,
      "squawk": "3213",
      "timestamp": 1704988191,
      "ems": null
    },
    {
      "latitude": 39.911545,
      "longitude": -8.578889,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 314,
      "squawk": "3213",
      "timestamp": 1704988195,
      "ems": null
    },
    {
      "latitude": 39.912354,
      "longitude": -8.580017,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 311,
      "squawk": "3213",
      "timestamp": 1704988197,
      "ems": null
    },
    {
      "latitude": 39.913376,
      "longitude": -8.581576,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 310,
      "squawk": "3213",
      "timestamp": 1704988201,
      "ems": null
    },
    {
      "latitude": 39.914215,
      "longitude": -8.582825,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 312,
      "squawk": "3213",
      "timestamp": 1704988204,
      "ems": null
    },
    {
      "latitude": 39.915115,
      "longitude": -8.584024,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 314,
      "squawk": "3213",
      "timestamp": 1704988206,
      "ems": null
    },
    {
      "latitude": 39.916168,
      "longitude": -8.585388,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 318,
      "squawk": "3213",
      "timestamp": 1704988210,
      "ems": null
    },
    {
      "latitude": 39.91713,
      "longitude": -8.586293,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 323,
      "squawk": "3213",
      "timestamp": 1704988212,
      "ems": null
    },
    {
      "latitude": 39.919693,
      "longitude": -8.588025,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 339,
      "squawk": "3213",
      "timestamp": 1704988219,
      "ems": null
    },
    {
      "latitude": 39.920883,
      "longitude": -8.588502,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 343,
      "squawk": "3213",
      "timestamp": 1704988221,
      "ems": null
    },
    {
      "latitude": 39.922256,
      "longitude": -8.588921,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 347,
      "squawk": "3213",
      "timestamp": 1704988225,
      "ems": null
    },
    {
      "latitude": 39.923584,
      "longitude": -8.589294,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 349,
      "squawk": "3213",
      "timestamp": 1704988228,
      "ems": null
    },
    {
      "latitude": 39.924828,
      "longitude": -8.589561,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 348,
      "squawk": "3213",
      "timestamp": 1704988231,
      "ems": null
    },
    {
      "latitude": 39.926086,
      "longitude": -8.589935,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 346,
      "squawk": "3213",
      "timestamp": 1704988234,
      "ems": null
    },
    {
      "latitude": 39.92725,
      "longitude": -8.59031,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 345,
      "squawk": "3213",
      "timestamp": 1704988237,
      "ems": null
    },
    {
      "latitude": 39.928528,
      "longitude": -8.590759,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 345,
      "squawk": "3213",
      "timestamp": 1704988240,
      "ems": null
    },
    {
      "latitude": 39.929764,
      "longitude": -8.591248,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 343,
      "squawk": "3213",
      "timestamp": 1704988243,
      "ems": null
    },
    {
      "latitude": 39.931065,
      "longitude": -8.591745,
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
      "heading": 342,
      "squawk": "3213",
      "timestamp": 1704988246,
      "ems": null
    },
    {
      "latitude": 39.934845,
      "longitude": -8.593445,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 339,
      "squawk": "3213",
      "timestamp": 1704988255,
      "ems": null
    },
    {
      "latitude": 39.936001,
      "longitude": -8.593993,
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
      "heading": 340,
      "squawk": "3213",
      "timestamp": 1704988258,
      "ems": null
    },
    {
      "latitude": 39.937443,
      "longitude": -8.594617,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 340,
      "squawk": "3213",
      "timestamp": 1704988261,
      "ems": null
    },
    {
      "latitude": 39.941071,
      "longitude": -8.596191,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 339,
      "squawk": "3213",
      "timestamp": 1704988270,
      "ems": null
    },
    {
      "latitude": 39.945034,
      "longitude": -8.597988,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 341,
      "squawk": "3213",
      "timestamp": 1704988279,
      "ems": null
    },
    {
      "latitude": 39.94899,
      "longitude": -8.599548,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 344,
      "squawk": "3213",
      "timestamp": 1704988288,
      "ems": null
    },
    {
      "latitude": 39.95311,
      "longitude": -8.601196,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 341,
      "squawk": "3213",
      "timestamp": 1704988297,
      "ems": null
    },
    {
      "latitude": 39.957134,
      "longitude": -8.602857,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 344,
      "squawk": "3213",
      "timestamp": 1704988306,
      "ems": null
    },
    {
      "latitude": 39.95993,
      "longitude": -8.603638,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 349,
      "squawk": "3213",
      "timestamp": 1704988312,
      "ems": null
    },
    {
      "latitude": 39.961395,
      "longitude": -8.603943,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 352,
      "squawk": "3213",
      "timestamp": 1704988316,
      "ems": null
    },
    {
      "latitude": 39.962769,
      "longitude": -8.604126,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 354,
      "squawk": "3213",
      "timestamp": 1704988319,
      "ems": null
    },
    {
      "latitude": 39.964188,
      "longitude": -8.604248,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 357,
      "squawk": "3213",
      "timestamp": 1704988322,
      "ems": null
    },
    {
      "latitude": 39.965515,
      "longitude": -8.604309,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 358,
      "squawk": "3213",
      "timestamp": 1704988324,
      "ems": null
    },
    {
      "latitude": 39.966679,
      "longitude": -8.604417,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 352,
      "squawk": "3213",
      "timestamp": 1704988328,
      "ems": null
    },
    {
      "latitude": 39.968307,
      "longitude": -8.604792,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 349,
      "squawk": "3213",
      "timestamp": 1704988330,
      "ems": null
    },
    {
      "latitude": 39.972519,
      "longitude": -8.60614,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 345,
      "squawk": "3213",
      "timestamp": 1704988340,
      "ems": null
    },
    {
      "latitude": 39.975082,
      "longitude": -8.606995,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 345,
      "squawk": "3213",
      "timestamp": 1704988345,
      "ems": null
    },
    {
      "latitude": 39.976364,
      "longitude": -8.607422,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 344,
      "squawk": "3213",
      "timestamp": 1704988349,
      "ems": null
    },
    {
      "latitude": 39.977852,
      "longitude": -8.607975,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 343,
      "squawk": "3213",
      "timestamp": 1704988352,
      "ems": null
    },
    {
      "latitude": 39.979248,
      "longitude": -8.608521,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 343,
      "squawk": "3213",
      "timestamp": 1704988355,
      "ems": null
    },
    {
      "latitude": 39.980457,
      "longitude": -8.609036,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 342,
      "squawk": "3213",
      "timestamp": 1704988358,
      "ems": null
    },
    {
      "latitude": 39.981762,
      "longitude": -8.609598,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 341,
      "squawk": "3213",
      "timestamp": 1704988361,
      "ems": null
    },
    {
      "latitude": 39.986115,
      "longitude": -8.61145,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 341,
      "squawk": "3213",
      "timestamp": 1704988370,
      "ems": null
    },
    {
      "latitude": 39.987442,
      "longitude": -8.612,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 340,
      "squawk": "3213",
      "timestamp": 1704988373,
      "ems": null
    },
    {
      "latitude": 39.98877,
      "longitude": -8.61261,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "3213",
      "timestamp": 1704988376,
      "ems": null
    },
    {
      "latitude": 39.992748,
      "longitude": -8.614155,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 345,
      "squawk": "3213",
      "timestamp": 1704988385,
      "ems": null
    },
    {
      "latitude": 39.994053,
      "longitude": -8.61453,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 348,
      "squawk": "3213",
      "timestamp": 1704988388,
      "ems": null
    },
    {
      "latitude": 39.995132,
      "longitude": -8.614807,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 348,
      "squawk": "3213",
      "timestamp": 1704988390,
      "ems": null
    },
    {
      "latitude": 39.996552,
      "longitude": -8.615173,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 348,
      "squawk": "3213",
      "timestamp": 1704988394,
      "ems": null
    },
    {
      "latitude": 39.997971,
      "longitude": -8.615601,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 347,
      "squawk": "3213",
      "timestamp": 1704988397,
      "ems": null
    },
    {
      "latitude": 39.999218,
      "longitude": -8.615966,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 346,
      "squawk": "3213",
      "timestamp": 1704988400,
      "ems": null
    },
    {
      "latitude": 40.000534,
      "longitude": -8.616333,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 347,
      "squawk": "3213",
      "timestamp": 1704988403,
      "ems": null
    },
    {
      "latitude": 40.001816,
      "longitude": -8.616699,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 347,
      "squawk": "3213",
      "timestamp": 1704988406,
      "ems": null
    },
    {
      "latitude": 40.003128,
      "longitude": -8.617089,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 347,
      "squawk": "3213",
      "timestamp": 1704988409,
      "ems": null
    },
    {
      "latitude": 40.004341,
      "longitude": -8.617401,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "3213",
      "timestamp": 1704988412,
      "ems": null
    },
    {
      "latitude": 40.008343,
      "longitude": -8.618587,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 345,
      "squawk": "3213",
      "timestamp": 1704988421,
      "ems": null
    },
    {
      "latitude": 40.010742,
      "longitude": -8.619507,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 340,
      "squawk": "3213",
      "timestamp": 1704988427,
      "ems": null
    },
    {
      "latitude": 40.011974,
      "longitude": -8.62021,
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
      "heading": 336,
      "squawk": "3213",
      "timestamp": 1704988430,
      "ems": null
    },
    {
      "latitude": 40.013092,
      "longitude": -8.620896,
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
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704988433,
      "ems": null
    },
    {
      "latitude": 40.014496,
      "longitude": -8.621765,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 335,
      "squawk": "3213",
      "timestamp": 1704988436,
      "ems": null
    },
    {
      "latitude": 40.015465,
      "longitude": -8.622333,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 336,
      "squawk": "3213",
      "timestamp": 1704988439,
      "ems": null
    },
    {
      "latitude": 40.016628,
      "longitude": -8.622956,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 336,
      "squawk": "3213",
      "timestamp": 1704988442,
      "ems": null
    },
    {
      "latitude": 40.017975,
      "longitude": -8.623779,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 334,
      "squawk": "3213",
      "timestamp": 1704988445,
      "ems": null
    },
    {
      "latitude": 40.019096,
      "longitude": -8.624517,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 334,
      "squawk": "3213",
      "timestamp": 1704988448,
      "ems": null
    },
    {
      "latitude": 40.02026,
      "longitude": -8.625204,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 334,
      "squawk": "3213",
      "timestamp": 1704988451,
      "ems": null
    },
    {
      "latitude": 40.021362,
      "longitude": -8.625854,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 335,
      "squawk": "3213",
      "timestamp": 1704988454,
      "ems": null
    },
    {
      "latitude": 40.025055,
      "longitude": -8.627826,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 337,
      "squawk": "3213",
      "timestamp": 1704988463,
      "ems": null
    },
    {
      "latitude": 40.028641,
      "longitude": -8.630136,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 329,
      "squawk": "3213",
      "timestamp": 1704988472,
      "ems": null
    },
    {
      "latitude": 40.029831,
      "longitude": -8.631104,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 327,
      "squawk": "3213",
      "timestamp": 1704988475,
      "ems": null
    },
    {
      "latitude": 40.03244,
      "longitude": -8.632568,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 343,
      "squawk": "3213",
      "timestamp": 1704988481,
      "ems": null
    },
    {
      "latitude": 40.033722,
      "longitude": -8.632874,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 350,
      "squawk": "3213",
      "timestamp": 1704988484,
      "ems": null
    },
    {
      "latitude": 40.03511,
      "longitude": -8.633069,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 356,
      "squawk": "3213",
      "timestamp": 1704988487,
      "ems": null
    },
    {
      "latitude": 40.036461,
      "longitude": -8.633007,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 2,
      "squawk": "3213",
      "timestamp": 1704988490,
      "ems": null
    },
    {
      "latitude": 40.037659,
      "longitude": -8.632874,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "3213",
      "timestamp": 1704988493,
      "ems": null
    },
    {
      "latitude": 40.039124,
      "longitude": -8.632446,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 14,
      "squawk": "3213",
      "timestamp": 1704988496,
      "ems": null
    },
    {
      "latitude": 40.040405,
      "longitude": -8.631897,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 19,
      "squawk": "3213",
      "timestamp": 1704988499,
      "ems": null
    },
    {
      "latitude": 40.041397,
      "longitude": -8.631321,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 24,
      "squawk": "3213",
      "timestamp": 1704988502,
      "ems": null
    },
    {
      "latitude": 40.042603,
      "longitude": -8.630493,
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
      "heading": 28,
      "squawk": "3213",
      "timestamp": 1704988505,
      "ems": null
    },
    {
      "latitude": 40.043839,
      "longitude": -8.629517,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 33,
      "squawk": "3213",
      "timestamp": 1704988508,
      "ems": null
    },
    {
      "latitude": 40.044983,
      "longitude": -8.628479,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 36,
      "squawk": "3213",
      "timestamp": 1704988511,
      "ems": null
    },
    {
      "latitude": 40.04591,
      "longitude": -8.627576,
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
      "heading": 38,
      "squawk": "3213",
      "timestamp": 1704988514,
      "ems": null
    },
    {
      "latitude": 40.047028,
      "longitude": -8.626328,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 39,
      "squawk": "3213",
      "timestamp": 1704988518,
      "ems": null
    },
    {
      "latitude": 40.048004,
      "longitude": -8.625204,
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
      "heading": 43,
      "squawk": "3213",
      "timestamp": 1704988520,
      "ems": null
    },
    {
      "latitude": 40.048828,
      "longitude": -8.624023,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 46,
      "squawk": "3213",
      "timestamp": 1704988523,
      "ems": null
    },
    {
      "latitude": 40.049683,
      "longitude": -8.622894,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 47,
      "squawk": "3213",
      "timestamp": 1704988526,
      "ems": null
    },
    {
      "latitude": 40.050613,
      "longitude": -8.621583,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 47,
      "squawk": "3213",
      "timestamp": 1704988529,
      "ems": null
    },
    {
      "latitude": 40.051483,
      "longitude": -8.6203,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 47,
      "squawk": "3213",
      "timestamp": 1704988533,
      "ems": null
    },
    {
      "latitude": 40.052334,
      "longitude": -8.619149,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 47,
      "squawk": "3213",
      "timestamp": 1704988536,
      "ems": null
    },
    {
      "latitude": 40.05294,
      "longitude": -8.618213,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 47,
      "squawk": "3213",
      "timestamp": 1704988538,
      "ems": null
    },
    {
      "latitude": 40.054058,
      "longitude": -8.61659,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 48,
      "squawk": "3213",
      "timestamp": 1704988541,
      "ems": null
    },
    {
      "latitude": 40.054779,
      "longitude": -8.61554,
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
      "heading": 49,
      "squawk": "3213",
      "timestamp": 1704988544,
      "ems": null
    },
    {
      "latitude": 40.055779,
      "longitude": -8.613968,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 51,
      "squawk": "3213",
      "timestamp": 1704988548,
      "ems": null
    },
    {
      "latitude": 40.056526,
      "longitude": -8.612657,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 52,
      "squawk": "3213",
      "timestamp": 1704988550,
      "ems": null
    },
    {
      "latitude": 40.057343,
      "longitude": -8.611145,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 55,
      "squawk": "3213",
      "timestamp": 1704988553,
      "ems": null
    },
    {
      "latitude": 40.058109,
      "longitude": -8.609661,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 58,
      "squawk": "3213",
      "timestamp": 1704988557,
      "ems": null
    },
    {
      "latitude": 40.058807,
      "longitude": -8.608093,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 60,
      "squawk": "3213",
      "timestamp": 1704988560,
      "ems": null
    },
    {
      "latitude": 40.059402,
      "longitude": -8.606567,
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
      "heading": 63,
      "squawk": "3213",
      "timestamp": 1704988563,
      "ems": null
    },
    {
      "latitude": 40.059971,
      "longitude": -8.60498,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 66,
      "squawk": "3213",
      "timestamp": 1704988566,
      "ems": null
    },
    {
      "latitude": 40.060455,
      "longitude": -8.603394,
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
      "heading": 69,
      "squawk": "3213",
      "timestamp": 1704988569,
      "ems": null
    },
    {
      "latitude": 40.060902,
      "longitude": -8.601858,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 70,
      "squawk": "3213",
      "timestamp": 1704988572,
      "ems": null
    },
    {
      "latitude": 40.061367,
      "longitude": -8.600297,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 67,
      "squawk": "3213",
      "timestamp": 1704988575,
      "ems": null
    },
    {
      "latitude": 40.061832,
      "longitude": -8.598924,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 65,
      "squawk": "3213",
      "timestamp": 1704988578,
      "ems": null
    },
    {
      "latitude": 40.062378,
      "longitude": -8.597412,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 64,
      "squawk": "3213",
      "timestamp": 1704988580,
      "ems": null
    },
    {
      "latitude": 40.062973,
      "longitude": -8.595886,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 62,
      "squawk": "3213",
      "timestamp": 1704988584,
      "ems": null
    },
    {
      "latitude": 40.064941,
      "longitude": -8.591736,
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
      "heading": 54,
      "squawk": "3213",
      "timestamp": 1704988593,
      "ems": null
    },
    {
      "latitude": 40.065647,
      "longitude": -8.59056,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 52,
      "squawk": "3213",
      "timestamp": 1704988596,
      "ems": null
    },
    {
      "latitude": 40.066315,
      "longitude": -8.589417,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 51,
      "squawk": "3213",
      "timestamp": 1704988598,
      "ems": null
    },
    {
      "latitude": 40.067184,
      "longitude": -8.588074,
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
      "heading": 50,
      "squawk": "3213",
      "timestamp": 1704988602,
      "ems": null
    },
    {
      "latitude": 40.067963,
      "longitude": -8.586853,
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
      "heading": 49,
      "squawk": "3213",
      "timestamp": 1704988605,
      "ems": null
    },
    {
      "latitude": 40.068768,
      "longitude": -8.58569,
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
      "heading": 47,
      "squawk": "3213",
      "timestamp": 1704988608,
      "ems": null
    },
    {
      "latitude": 40.069561,
      "longitude": -8.584692,
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
      "heading": 45,
      "squawk": "3213",
      "timestamp": 1704988611,
      "ems": null
    },
    {
      "latitude": 40.070442,
      "longitude": -8.583506,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 45,
      "squawk": "3213",
      "timestamp": 1704988614,
      "ems": null
    },
    {
      "latitude": 40.071213,
      "longitude": -8.58252,
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
      "heading": 44,
      "squawk": "3213",
      "timestamp": 1704988617,
      "ems": null
    },
    {
      "latitude": 40.072121,
      "longitude": -8.581384,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 43,
      "squawk": "3213",
      "timestamp": 1704988620,
      "ems": null
    },
    {
      "latitude": 40.073044,
      "longitude": -8.580261,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 43,
      "squawk": "3213",
      "timestamp": 1704988623,
      "ems": null
    },
    {
      "latitude": 40.073959,
      "longitude": -8.579102,
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
      "heading": 43,
      "squawk": "3213",
      "timestamp": 1704988626,
      "ems": null
    },
    {
      "latitude": 40.074821,
      "longitude": -8.578075,
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
      "heading": 42,
      "squawk": "3213",
      "timestamp": 1704988629,
      "ems": null
    },
    {
      "latitude": 40.075611,
      "longitude": -8.577139,
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
      "heading": 42,
      "squawk": "3213",
      "timestamp": 1704988632,
      "ems": null
    },
    {
      "latitude": 40.076496,
      "longitude": -8.576077,
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
      "heading": 41,
      "squawk": "3213",
      "timestamp": 1704988635,
      "ems": null
    },
    {
      "latitude": 40.077393,
      "longitude": -8.575012,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 42,
      "squawk": "3213",
      "timestamp": 1704988638,
      "ems": null
    },
    {
      "latitude": 40.080082,
      "longitude": -8.571771,
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
      "heading": 44,
      "squawk": "3213",
      "timestamp": 1704988647,
      "ems": null
    },
    {
      "latitude": 40.082932,
      "longitude": -8.568237,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "3213",
      "timestamp": 1704988656,
      "ems": null
    },
    {
      "latitude": 40.085587,
      "longitude": -8.565063,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "3213",
      "timestamp": 1704988665,
      "ems": null
    },
    {
      "latitude": 40.088413,
      "longitude": -8.561908,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 41,
      "squawk": "3213",
      "timestamp": 1704988674,
      "ems": null
    },
    {
      "latitude": 40.090988,
      "longitude": -8.558716,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 46,
      "squawk": "3213",
      "timestamp": 1704988683,
      "ems": null
    },
    {
      "latitude": 40.093781,
      "longitude": -8.555176,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 38,
      "squawk": "3213",
      "timestamp": 1704988692,
      "ems": null
    },
    {
      "latitude": 40.09671,
      "longitude": -8.552124,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 39,
      "squawk": "3213",
      "timestamp": 1704988701,
      "ems": null
    },
    {
      "latitude": 40.099354,
      "longitude": -8.549236,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 40,
      "squawk": "3213",
      "timestamp": 1704988710,
      "ems": null
    },
    {
      "latitude": 40.100285,
      "longitude": -8.548175,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 40,
      "squawk": "3213",
      "timestamp": 1704988713,
      "ems": null
    },
    {
      "latitude": 40.101929,
      "longitude": -8.546387,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 40,
      "squawk": "3213",
      "timestamp": 1704988719,
      "ems": null
    },
    {
      "latitude": 40.104492,
      "longitude": -8.543518,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 40,
      "squawk": "3213",
      "timestamp": 1704988728,
      "ems": null
    },
    {
      "latitude": 40.107193,
      "longitude": -8.54071,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 34,
      "squawk": "3213",
      "timestamp": 1704988737,
      "ems": null
    },
    {
      "latitude": 40.10815,
      "longitude": -8.539997,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 27,
      "squawk": "3213",
      "timestamp": 1704988740,
      "ems": null
    },
    {
      "latitude": 40.109207,
      "longitude": -8.539368,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 24,
      "squawk": "3213",
      "timestamp": 1704988743,
      "ems": null
    },
    {
      "latitude": 40.110153,
      "longitude": -8.538749,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 25,
      "squawk": "3213",
      "timestamp": 1704988746,
      "ems": null
    },
    {
      "latitude": 40.111225,
      "longitude": -8.538062,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 27,
      "squawk": "3213",
      "timestamp": 1704988750,
      "ems": null
    },
    {
      "latitude": 40.111969,
      "longitude": -8.537563,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 27,
      "squawk": "3213",
      "timestamp": 1704988752,
      "ems": null
    },
    {
      "latitude": 40.113007,
      "longitude": -8.536865,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 26,
      "squawk": "3213",
      "timestamp": 1704988755,
      "ems": null
    },
    {
      "latitude": 40.114243,
      "longitude": -8.536133,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 25,
      "squawk": "3213",
      "timestamp": 1704988758,
      "ems": null
    },
    {
      "latitude": 40.11525,
      "longitude": -8.535461,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 25,
      "squawk": "3213",
      "timestamp": 1704988761,
      "ems": null
    },
    {
      "latitude": 40.116253,
      "longitude": -8.534817,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 26,
      "squawk": "3213",
      "timestamp": 1704988765,
      "ems": null
    },
    {
      "latitude": 40.119324,
      "longitude": -8.532757,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 27,
      "squawk": "3213",
      "timestamp": 1704988774,
      "ems": null
    },
    {
      "latitude": 40.121201,
      "longitude": -8.531311,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 35,
      "squawk": "3213",
      "timestamp": 1704988780,
      "ems": null
    },
    {
      "latitude": 40.122162,
      "longitude": -8.530322,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 41,
      "squawk": "3213",
      "timestamp": 1704988783,
      "ems": null
    },
    {
      "latitude": 40.12286,
      "longitude": -8.529386,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 45,
      "squawk": "3213",
      "timestamp": 1704988785,
      "ems": null
    },
    {
      "latitude": 40.123562,
      "longitude": -8.528387,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 46,
      "squawk": "3213",
      "timestamp": 1704988788,
      "ems": null
    },
    {
      "latitude": 40.124313,
      "longitude": -8.527405,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 46,
      "squawk": "3213",
      "timestamp": 1704988791,
      "ems": null
    },
    {
      "latitude": 40.125046,
      "longitude": -8.526367,
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
      "heading": 46,
      "squawk": "3213",
      "timestamp": 1704988794,
      "ems": null
    },
    {
      "latitude": 40.125793,
      "longitude": -8.525391,
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
      "heading": 48,
      "squawk": "3213",
      "timestamp": 1704988798,
      "ems": null
    },
    {
      "latitude": 40.126373,
      "longitude": -8.524353,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 52,
      "squawk": "3213",
      "timestamp": 1704988800,
      "ems": null
    },
    {
      "latitude": 40.127106,
      "longitude": -8.523193,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 52,
      "squawk": "3213",
      "timestamp": 1704988804,
      "ems": null
    },
    {
      "latitude": 40.127655,
      "longitude": -8.522217,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 52,
      "squawk": "3213",
      "timestamp": 1704988807,
      "ems": null
    },
    {
      "latitude": 40.128403,
      "longitude": -8.520959,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 52,
      "squawk": "3213",
      "timestamp": 1704988810,
      "ems": null
    },
    {
      "latitude": 40.129028,
      "longitude": -8.519897,
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
      "heading": 52,
      "squawk": "3213",
      "timestamp": 1704988813,
      "ems": null
    },
    {
      "latitude": 40.129658,
      "longitude": -8.518836,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 52,
      "squawk": "3213",
      "timestamp": 1704988816,
      "ems": null
    },
    {
      "latitude": 40.130356,
      "longitude": -8.5177,
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
      "heading": 51,
      "squawk": "3213",
      "timestamp": 1704988819,
      "ems": null
    },
    {
      "latitude": 40.1325,
      "longitude": -8.514466,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 49,
      "squawk": "3213",
      "timestamp": 1704988827,
      "ems": null
    },
    {
      "latitude": 40.133289,
      "longitude": -8.513281,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 47,
      "squawk": "3213",
      "timestamp": 1704988831,
      "ems": null
    },
    {
      "latitude": 40.134079,
      "longitude": -8.512219,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 46,
      "squawk": "3213",
      "timestamp": 1704988834,
      "ems": null
    },
    {
      "latitude": 40.134842,
      "longitude": -8.51123,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 45,
      "squawk": "3213",
      "timestamp": 1704988837,
      "ems": null
    },
    {
      "latitude": 40.135666,
      "longitude": -8.510132,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 45,
      "squawk": "3213",
      "timestamp": 1704988840,
      "ems": null
    },
    {
      "latitude": 40.136398,
      "longitude": -8.509216,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 45,
      "squawk": "3213",
      "timestamp": 1704988843,
      "ems": null
    },
    {
      "latitude": 40.137177,
      "longitude": -8.508179,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 45,
      "squawk": "3213",
      "timestamp": 1704988846,
      "ems": null
    },
    {
      "latitude": 40.137955,
      "longitude": -8.507141,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 45,
      "squawk": "3213",
      "timestamp": 1704988849,
      "ems": null
    },
    {
      "latitude": 40.138641,
      "longitude": -8.506227,
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
      "heading": 45,
      "squawk": "3213",
      "timestamp": 1704988852,
      "ems": null
    },
    {
      "latitude": 40.14069,
      "longitude": -8.50348,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 46,
      "squawk": "3213",
      "timestamp": 1704988861,
      "ems": null
    },
    {
      "latitude": 40.142601,
      "longitude": -8.500546,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 58,
      "squawk": "3213",
      "timestamp": 1704988870,
      "ems": null
    },
    {
      "latitude": 40.142879,
      "longitude": -8.499548,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 73,
      "squawk": "3213",
      "timestamp": 1704988873,
      "ems": null
    },
    {
      "latitude": 40.142899,
      "longitude": -8.498169,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 94,
      "squawk": "3213",
      "timestamp": 1704988876,
      "ems": null
    },
    {
      "latitude": 40.142551,
      "longitude": -8.496988,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 118,
      "squawk": "3213",
      "timestamp": 1704988879,
      "ems": null
    },
    {
      "latitude": 40.142029,
      "longitude": -8.496216,
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
      "heading": 133,
      "squawk": "3213",
      "timestamp": 1704988881,
      "ems": null
    },
    {
      "latitude": 40.141109,
      "longitude": -8.495365,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 147,
      "squawk": "3213",
      "timestamp": 1704988885,
      "ems": null
    },
    {
      "latitude": 40.140224,
      "longitude": -8.494741,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 152,
      "squawk": "3213",
      "timestamp": 1704988888,
      "ems": null
    },
    {
      "latitude": 40.139389,
      "longitude": -8.494117,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 151,
      "squawk": "3213",
      "timestamp": 1704988891,
      "ems": null
    },
    {
      "latitude": 40.138596,
      "longitude": -8.493555,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 153,
      "squawk": "3213",
      "timestamp": 1704988894,
      "ems": null
    },
    {
      "latitude": 40.137806,
      "longitude": -8.493056,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 152,
      "squawk": "3213",
      "timestamp": 1704988897,
      "ems": null
    },
    {
      "latitude": 40.137085,
      "longitude": -8.492554,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 151,
      "squawk": "3213",
      "timestamp": 1704988900,
      "ems": null
    },
    {
      "latitude": 40.136353,
      "longitude": -8.492065,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 153,
      "squawk": "3213",
      "timestamp": 1704988903,
      "ems": null
    },
    {
      "latitude": 40.13562,
      "longitude": -8.491516,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 151,
      "squawk": "3213",
      "timestamp": 1704988906,
      "ems": null
    },
    {
      "latitude": 40.134731,
      "longitude": -8.490933,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 153,
      "squawk": "3213",
      "timestamp": 1704988909,
      "ems": null
    },
    {
      "latitude": 40.133942,
      "longitude": -8.490434,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 153,
      "squawk": "3213",
      "timestamp": 1704988912,
      "ems": null
    },
    {
      "latitude": 40.133148,
      "longitude": -8.489872,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 153,
      "squawk": "3213",
      "timestamp": 1704988915,
      "ems": null
    },
    {
      "latitude": 40.13166,
      "longitude": -8.488811,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 146,
      "squawk": "3213",
      "timestamp": 1704988921,
      "ems": null
    },
    {
      "latitude": 40.131149,
      "longitude": -8.488125,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 135,
      "squawk": "3213",
      "timestamp": 1704988924,
      "ems": null
    },
    {
      "latitude": 40.130814,
      "longitude": -8.486877,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 102,
      "squawk": "3213",
      "timestamp": 1704988927,
      "ems": null
    },
    {
      "latitude": 40.130814,
      "longitude": -8.485718,
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
      "heading": 83,
      "squawk": "3213",
      "timestamp": 1704988930,
      "ems": null
    },
    {
      "latitude": 40.130962,
      "longitude": -8.484817,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 74,
      "squawk": "3213",
      "timestamp": 1704988933,
      "ems": null
    },
    {
      "latitude": 40.131428,
      "longitude": -8.483567,
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
      "heading": 61,
      "squawk": "3213",
      "timestamp": 1704988936,
      "ems": null
    },
    {
      "latitude": 40.131866,
      "longitude": -8.482605,
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
      "heading": 59,
      "squawk": "3213",
      "timestamp": 1704988939,
      "ems": null
    },
    {
      "latitude": 40.132278,
      "longitude": -8.481628,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 61,
      "squawk": "3213",
      "timestamp": 1704988942,
      "ems": null
    },
    {
      "latitude": 40.132736,
      "longitude": -8.48053,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 60,
      "squawk": "3213",
      "timestamp": 1704988945,
      "ems": null
    },
    {
      "latitude": 40.133198,
      "longitude": -8.47951,
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
      "heading": 60,
      "squawk": "3213",
      "timestamp": 1704988949,
      "ems": null
    },
    {
      "latitude": 40.133514,
      "longitude": -8.478638,
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
      "heading": 62,
      "squawk": "3213",
      "timestamp": 1704988951,
      "ems": null
    },
    {
      "latitude": 40.133926,
      "longitude": -8.477661,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 62,
      "squawk": "3213",
      "timestamp": 1704988954,
      "ems": null
    },
    {
      "latitude": 40.13422,
      "longitude": -8.476889,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 61,
      "squawk": "3213",
      "timestamp": 1704988957,
      "ems": null
    },
    {
      "latitude": 40.13475,
      "longitude": -8.475708,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 60,
      "squawk": "3213",
      "timestamp": 1704988960,
      "ems": null
    },
    {
      "latitude": 40.135117,
      "longitude": -8.474854,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 61,
      "squawk": "3213",
      "timestamp": 1704988963,
      "ems": null
    },
    {
      "latitude": 40.136444,
      "longitude": -8.471863,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 57,
      "squawk": "3213",
      "timestamp": 1704988973,
      "ems": null
    },
    {
      "latitude": 40.137772,
      "longitude": -8.469177,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 55,
      "squawk": "3213",
      "timestamp": 1704988981,
      "ems": null
    },
    {
      "latitude": 40.138321,
      "longitude": -8.468201,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 53,
      "squawk": "3213",
      "timestamp": 1704988985,
      "ems": null
    },
    {
      "latitude": 40.138783,
      "longitude": -8.467401,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 52,
      "squawk": "3213",
      "timestamp": 1704988987,
      "ems": null
    },
    {
      "latitude": 40.139328,
      "longitude": -8.466553,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 49,
      "squawk": "3213",
      "timestamp": 1704988991,
      "ems": null
    },
    {
      "latitude": 40.139969,
      "longitude": -8.465698,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 46,
      "squawk": "3213",
      "timestamp": 1704988993,
      "ems": null
    },
    {
      "latitude": 40.140598,
      "longitude": -8.464904,
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
      "heading": 41,
      "squawk": "3213",
      "timestamp": 1704988997,
      "ems": null
    },
    {
      "latitude": 40.141296,
      "longitude": -8.464217,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 35,
      "squawk": "3213",
      "timestamp": 1704988999,
      "ems": null
    },
    {
      "latitude": 40.142086,
      "longitude": -8.463593,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 28,
      "squawk": "3213",
      "timestamp": 1704989003,
      "ems": null
    },
    {
      "latitude": 40.142834,
      "longitude": -8.463156,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 18,
      "squawk": "3213",
      "timestamp": 1704989006,
      "ems": null
    },
    {
      "latitude": 40.143719,
      "longitude": -8.462844,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 13,
      "squawk": "3213",
      "timestamp": 1704989009,
      "ems": null
    },
    {
      "latitude": 40.14473,
      "longitude": -8.462708,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 6,
      "squawk": "3213",
      "timestamp": 1704989012,
      "ems": null
    },
    {
      "latitude": 40.145672,
      "longitude": -8.462781,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 354,
      "squawk": "3213",
      "timestamp": 1704989015,
      "ems": null
    },
    {
      "latitude": 40.146557,
      "longitude": -8.463031,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 347,
      "squawk": "3213",
      "timestamp": 1704989018,
      "ems": null
    },
    {
      "latitude": 40.147339,
      "longitude": -8.463379,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 337,
      "squawk": "3213",
      "timestamp": 1704989021,
      "ems": null
    },
    {
      "latitude": 40.148186,
      "longitude": -8.463904,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 332,
      "squawk": "3213",
      "timestamp": 1704989024,
      "ems": null
    },
    {
      "latitude": 40.149162,
      "longitude": -8.464654,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 330,
      "squawk": "3213",
      "timestamp": 1704989027,
      "ems": null
    },
    {
      "latitude": 40.149857,
      "longitude": -8.465149,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 331,
      "squawk": "3213",
      "timestamp": 1704989030,
      "ems": null
    },
    {
      "latitude": 40.150887,
      "longitude": -8.465777,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 336,
      "squawk": "3213",
      "timestamp": 1704989033,
      "ems": null
    },
    {
      "latitude": 40.151726,
      "longitude": -8.466277,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 335,
      "squawk": "3213",
      "timestamp": 1704989036,
      "ems": null
    },
    {
      "latitude": 40.152561,
      "longitude": -8.466839,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 331,
      "squawk": "3213",
      "timestamp": 1704989039,
      "ems": null
    },
    {
      "latitude": 40.153446,
      "longitude": -8.467401,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989042,
      "ems": null
    },
    {
      "latitude": 40.154251,
      "longitude": -8.467896,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989045,
      "ems": null
    },
    {
      "latitude": 40.155075,
      "longitude": -8.468399,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 334,
      "squawk": "3213",
      "timestamp": 1704989048,
      "ems": null
    },
    {
      "latitude": 40.157227,
      "longitude": -8.469849,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989056,
      "ems": null
    },
    {
      "latitude": 40.159515,
      "longitude": -8.471375,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989066,
      "ems": null
    },
    {
      "latitude": 40.162292,
      "longitude": -8.473206,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 331,
      "squawk": "3213",
      "timestamp": 1704989075,
      "ems": null
    },
    {
      "latitude": 40.164806,
      "longitude": -8.474891,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 332,
      "squawk": "3213",
      "timestamp": 1704989084,
      "ems": null
    },
    {
      "latitude": 40.167526,
      "longitude": -8.476807,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 330,
      "squawk": "3213",
      "timestamp": 1704989093,
      "ems": null
    },
    {
      "latitude": 40.168343,
      "longitude": -8.477637,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 318,
      "squawk": "3213",
      "timestamp": 1704989096,
      "ems": null
    },
    {
      "latitude": 40.1689,
      "longitude": -8.478516,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 310,
      "squawk": "3213",
      "timestamp": 1704989099,
      "ems": null
    },
    {
      "latitude": 40.169506,
      "longitude": -8.479885,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 295,
      "squawk": "3213",
      "timestamp": 1704989102,
      "ems": null
    },
    {
      "latitude": 40.169861,
      "longitude": -8.481384,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 283,
      "squawk": "3213",
      "timestamp": 1704989105,
      "ems": null
    },
    {
      "latitude": 40.169926,
      "longitude": -8.482944,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 270,
      "squawk": "3213",
      "timestamp": 1704989108,
      "ems": null
    },
    {
      "latitude": 40.169739,
      "longitude": -8.484442,
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
      "heading": 256,
      "squawk": "3213",
      "timestamp": 1704989111,
      "ems": null
    },
    {
      "latitude": 40.169319,
      "longitude": -8.485877,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 244,
      "squawk": "3213",
      "timestamp": 1704989114,
      "ems": null
    },
    {
      "latitude": 40.168716,
      "longitude": -8.487183,
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
      "heading": 237,
      "squawk": "3213",
      "timestamp": 1704989117,
      "ems": null
    },
    {
      "latitude": 40.16803,
      "longitude": -8.488525,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 236,
      "squawk": "3213",
      "timestamp": 1704989120,
      "ems": null
    },
    {
      "latitude": 40.16748,
      "longitude": -8.489624,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 236,
      "squawk": "3213",
      "timestamp": 1704989123,
      "ems": null
    },
    {
      "latitude": 40.166473,
      "longitude": -8.491089,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 222,
      "squawk": "3213",
      "timestamp": 1704989126,
      "ems": null
    },
    {
      "latitude": 40.165409,
      "longitude": -8.491932,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 207,
      "squawk": "3213",
      "timestamp": 1704989129,
      "ems": null
    },
    {
      "latitude": 40.164246,
      "longitude": -8.49237,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 192,
      "squawk": "3213",
      "timestamp": 1704989132,
      "ems": null
    },
    {
      "latitude": 40.163036,
      "longitude": -8.492494,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 179,
      "squawk": "3213",
      "timestamp": 1704989135,
      "ems": null
    },
    {
      "latitude": 40.162106,
      "longitude": -8.49237,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 173,
      "squawk": "3213",
      "timestamp": 1704989138,
      "ems": null
    },
    {
      "latitude": 40.160751,
      "longitude": -8.492004,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 166,
      "squawk": "3213",
      "timestamp": 1704989141,
      "ems": null
    },
    {
      "latitude": 40.159744,
      "longitude": -8.491638,
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
      "heading": 163,
      "squawk": "3213",
      "timestamp": 1704989144,
      "ems": null
    },
    {
      "latitude": 40.158661,
      "longitude": -8.491245,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 163,
      "squawk": "3213",
      "timestamp": 1704989147,
      "ems": null
    },
    {
      "latitude": 40.157589,
      "longitude": -8.490808,
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
      "heading": 163,
      "squawk": "3213",
      "timestamp": 1704989150,
      "ems": null
    },
    {
      "latitude": 40.156567,
      "longitude": -8.490372,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 161,
      "squawk": "3213",
      "timestamp": 1704989153,
      "ems": null
    },
    {
      "latitude": 40.15554,
      "longitude": -8.489935,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 161,
      "squawk": "3213",
      "timestamp": 1704989156,
      "ems": null
    },
    {
      "latitude": 40.154423,
      "longitude": -8.489435,
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
      "heading": 161,
      "squawk": "3213",
      "timestamp": 1704989159,
      "ems": null
    },
    {
      "latitude": 40.1534,
      "longitude": -8.488936,
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
      "heading": 160,
      "squawk": "3213",
      "timestamp": 1704989162,
      "ems": null
    },
    {
      "latitude": 40.152328,
      "longitude": -8.488437,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 159,
      "squawk": "3213",
      "timestamp": 1704989165,
      "ems": null
    },
    {
      "latitude": 40.151211,
      "longitude": -8.487875,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 159,
      "squawk": "3213",
      "timestamp": 1704989168,
      "ems": null
    },
    {
      "latitude": 40.149948,
      "longitude": -8.487305,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 161,
      "squawk": "3213",
      "timestamp": 1704989172,
      "ems": null
    },
    {
      "latitude": 40.146606,
      "longitude": -8.485962,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 164,
      "squawk": "3213",
      "timestamp": 1704989180,
      "ems": null
    },
    {
      "latitude": 40.142971,
      "longitude": -8.484567,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 162,
      "squawk": "3213",
      "timestamp": 1704989190,
      "ems": null
    },
    {
      "latitude": 40.139435,
      "longitude": -8.483006,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 161,
      "squawk": "3213",
      "timestamp": 1704989199,
      "ems": null
    },
    {
      "latitude": 40.135849,
      "longitude": -8.481445,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 161,
      "squawk": "3213",
      "timestamp": 1704989208,
      "ems": null
    },
    {
      "latitude": 40.13475,
      "longitude": -8.480957,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 159,
      "squawk": "3213",
      "timestamp": 1704989210,
      "ems": null
    },
    {
      "latitude": 40.133698,
      "longitude": -8.480408,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 156,
      "squawk": "3213",
      "timestamp": 1704989213,
      "ems": null
    },
    {
      "latitude": 40.132683,
      "longitude": -8.479822,
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
      "heading": 158,
      "squawk": "3213",
      "timestamp": 1704989217,
      "ems": null
    },
    {
      "latitude": 40.131802,
      "longitude": -8.479074,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 140,
      "squawk": "3213",
      "timestamp": 1704989220,
      "ems": null
    },
    {
      "latitude": 40.131241,
      "longitude": -8.478012,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 120,
      "squawk": "3213",
      "timestamp": 1704989223,
      "ems": null
    },
    {
      "latitude": 40.130962,
      "longitude": -8.476951,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 104,
      "squawk": "3213",
      "timestamp": 1704989226,
      "ems": null
    },
    {
      "latitude": 40.130917,
      "longitude": -8.475515,
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
      "heading": 88,
      "squawk": "3213",
      "timestamp": 1704989229,
      "ems": null
    },
    {
      "latitude": 40.131042,
      "longitude": -8.474426,
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
      "heading": 78,
      "squawk": "3213",
      "timestamp": 1704989232,
      "ems": null
    },
    {
      "latitude": 40.131317,
      "longitude": -8.473328,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 70,
      "squawk": "3213",
      "timestamp": 1704989235,
      "ems": null
    },
    {
      "latitude": 40.131615,
      "longitude": -8.472269,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 69,
      "squawk": "3213",
      "timestamp": 1704989237,
      "ems": null
    },
    {
      "latitude": 40.131912,
      "longitude": -8.471191,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 70,
      "squawk": "3213",
      "timestamp": 1704989240,
      "ems": null
    },
    {
      "latitude": 40.132187,
      "longitude": -8.470154,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 70,
      "squawk": "3213",
      "timestamp": 1704989243,
      "ems": null
    },
    {
      "latitude": 40.132545,
      "longitude": -8.469024,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 67,
      "squawk": "3213",
      "timestamp": 1704989247,
      "ems": null
    },
    {
      "latitude": 40.132919,
      "longitude": -8.467957,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 65,
      "squawk": "3213",
      "timestamp": 1704989250,
      "ems": null
    },
    {
      "latitude": 40.133286,
      "longitude": -8.466919,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 64,
      "squawk": "3213",
      "timestamp": 1704989253,
      "ems": null
    },
    {
      "latitude": 40.133652,
      "longitude": -8.466003,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 63,
      "squawk": "3213",
      "timestamp": 1704989256,
      "ems": null
    },
    {
      "latitude": 40.134079,
      "longitude": -8.464966,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 58,
      "squawk": "3213",
      "timestamp": 1704989259,
      "ems": null
    },
    {
      "latitude": 40.134594,
      "longitude": -8.464092,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 51,
      "squawk": "3213",
      "timestamp": 1704989262,
      "ems": null
    },
    {
      "latitude": 40.135254,
      "longitude": -8.463196,
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
      "heading": 43,
      "squawk": "3213",
      "timestamp": 1704989265,
      "ems": null
    },
    {
      "latitude": 40.135941,
      "longitude": -8.462524,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 34,
      "squawk": "3213",
      "timestamp": 1704989268,
      "ems": null
    },
    {
      "latitude": 40.136642,
      "longitude": -8.462032,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 28,
      "squawk": "3213",
      "timestamp": 1704989271,
      "ems": null
    },
    {
      "latitude": 40.137527,
      "longitude": -8.461595,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 19,
      "squawk": "3213",
      "timestamp": 1704989274,
      "ems": null
    },
    {
      "latitude": 40.138317,
      "longitude": -8.461283,
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
      "heading": 11,
      "squawk": "3213",
      "timestamp": 1704989277,
      "ems": null
    },
    {
      "latitude": 40.139061,
      "longitude": -8.461158,
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
      "heading": 6,
      "squawk": "3213",
      "timestamp": 1704989280,
      "ems": null
    },
    {
      "latitude": 40.140152,
      "longitude": -8.461121,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 6,
      "squawk": "3213",
      "timestamp": 1704989283,
      "ems": null
    },
    {
      "latitude": 40.140972,
      "longitude": -8.461158,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 358,
      "squawk": "3213",
      "timestamp": 1704989285,
      "ems": null
    },
    {
      "latitude": 40.142086,
      "longitude": -8.461096,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 358,
      "squawk": "3213",
      "timestamp": 1704989289,
      "ems": null
    },
    {
      "latitude": 40.143021,
      "longitude": -8.461158,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 356,
      "squawk": "3213",
      "timestamp": 1704989292,
      "ems": null
    },
    {
      "latitude": 40.144135,
      "longitude": -8.461426,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 345,
      "squawk": "3213",
      "timestamp": 1704989295,
      "ems": null
    },
    {
      "latitude": 40.144821,
      "longitude": -8.461853,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989298,
      "ems": null
    },
    {
      "latitude": 40.145645,
      "longitude": -8.462463,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 330,
      "squawk": "3213",
      "timestamp": 1704989301,
      "ems": null
    },
    {
      "latitude": 40.14637,
      "longitude": -8.462968,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 332,
      "squawk": "3213",
      "timestamp": 1704989304,
      "ems": null
    },
    {
      "latitude": 40.147255,
      "longitude": -8.463531,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989307,
      "ems": null
    },
    {
      "latitude": 40.148026,
      "longitude": -8.46405,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989310,
      "ems": null
    },
    {
      "latitude": 40.148941,
      "longitude": -8.4646,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989313,
      "ems": null
    },
    {
      "latitude": 40.149765,
      "longitude": -8.465088,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 334,
      "squawk": "3213",
      "timestamp": 1704989316,
      "ems": null
    },
    {
      "latitude": 40.150543,
      "longitude": -8.465576,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 335,
      "squawk": "3213",
      "timestamp": 1704989319,
      "ems": null
    },
    {
      "latitude": 40.151398,
      "longitude": -8.466089,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 334,
      "squawk": "3213",
      "timestamp": 1704989322,
      "ems": null
    },
    {
      "latitude": 40.151909,
      "longitude": -8.466464,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989325,
      "ems": null
    },
    {
      "latitude": 40.154705,
      "longitude": -8.468212,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 334,
      "squawk": "3213",
      "timestamp": 1704989334,
      "ems": null
    },
    {
      "latitude": 40.156937,
      "longitude": -8.469647,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "3213",
      "timestamp": 1704989343,
      "ems": null
    },
    {
      "latitude": 40.158875,
      "longitude": -8.470947,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989352,
      "ems": null
    },
    {
      "latitude": 40.161175,
      "longitude": -8.472457,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989361,
      "ems": null
    },
    {
      "latitude": 40.163544,
      "longitude": -8.47406,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989370,
      "ems": null
    },
    {
      "latitude": 40.16597,
      "longitude": -8.475708,
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
      "heading": 330,
      "squawk": "3213",
      "timestamp": 1704989379,
      "ems": null
    },
    {
      "latitude": 40.168488,
      "longitude": -8.477783,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 322,
      "squawk": "3213",
      "timestamp": 1704989389,
      "ems": null
    },
    {
      "latitude": 40.169083,
      "longitude": -8.478699,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 307,
      "squawk": "3213",
      "timestamp": 1704989391,
      "ems": null
    },
    {
      "latitude": 40.169647,
      "longitude": -8.480197,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 290,
      "squawk": "3213",
      "timestamp": 1704989395,
      "ems": null
    },
    {
      "latitude": 40.169861,
      "longitude": -8.481506,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 280,
      "squawk": "3213",
      "timestamp": 1704989398,
      "ems": null
    },
    {
      "latitude": 40.16988,
      "longitude": -8.483006,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 268,
      "squawk": "3213",
      "timestamp": 1704989401,
      "ems": null
    },
    {
      "latitude": 40.169647,
      "longitude": -8.484379,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 252,
      "squawk": "3213",
      "timestamp": 1704989404,
      "ems": null
    },
    {
      "latitude": 40.169128,
      "longitude": -8.485779,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 242,
      "squawk": "3213",
      "timestamp": 1704989407,
      "ems": null
    },
    {
      "latitude": 40.168625,
      "longitude": -8.487,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 239,
      "squawk": "3213",
      "timestamp": 1704989409,
      "ems": null
    },
    {
      "latitude": 40.167938,
      "longitude": -8.488342,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 236,
      "squawk": "3213",
      "timestamp": 1704989413,
      "ems": null
    },
    {
      "latitude": 40.167271,
      "longitude": -8.48956,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 233,
      "squawk": "3213",
      "timestamp": 1704989416,
      "ems": null
    },
    {
      "latitude": 40.166527,
      "longitude": -8.490746,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 230,
      "squawk": "3213",
      "timestamp": 1704989419,
      "ems": null
    },
    {
      "latitude": 40.165737,
      "longitude": -8.491745,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 218,
      "squawk": "3213",
      "timestamp": 1704989422,
      "ems": null
    },
    {
      "latitude": 40.164761,
      "longitude": -8.492307,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 200,
      "squawk": "3213",
      "timestamp": 1704989425,
      "ems": null
    },
    {
      "latitude": 40.163643,
      "longitude": -8.492432,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 184,
      "squawk": "3213",
      "timestamp": 1704989428,
      "ems": null
    },
    {
      "latitude": 40.162525,
      "longitude": -8.492307,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 171,
      "squawk": "3213",
      "timestamp": 1704989431,
      "ems": null
    },
    {
      "latitude": 40.161438,
      "longitude": -8.492004,
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
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 168,
      "squawk": "3213",
      "timestamp": 1704989434,
      "ems": null
    },
    {
      "latitude": 40.160522,
      "longitude": -8.491683,
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
      "heading": 165,
      "squawk": "3213",
      "timestamp": 1704989437,
      "ems": null
    },
    {
      "latitude": 40.159653,
      "longitude": -8.491394,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 165,
      "squawk": "3213",
      "timestamp": 1704989439,
      "ems": null
    },
    {
      "latitude": 40.158417,
      "longitude": -8.490967,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 163,
      "squawk": "3213",
      "timestamp": 1704989443,
      "ems": null
    },
    {
      "latitude": 40.157543,
      "longitude": -8.490622,
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
      "heading": 163,
      "squawk": "3213",
      "timestamp": 1704989445,
      "ems": null
    },
    {
      "latitude": 40.156471,
      "longitude": -8.490185,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 162,
      "squawk": "3213",
      "timestamp": 1704989449,
      "ems": null
    },
    {
      "latitude": 40.155441,
      "longitude": -8.489746,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 161,
      "squawk": "3213",
      "timestamp": 1704989451,
      "ems": null
    },
    {
      "latitude": 40.154377,
      "longitude": -8.489248,
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
      "heading": 160,
      "squawk": "3213",
      "timestamp": 1704989455,
      "ems": null
    },
    {
      "latitude": 40.153355,
      "longitude": -8.488811,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 160,
      "squawk": "3213",
      "timestamp": 1704989457,
      "ems": null
    },
    {
      "latitude": 40.152283,
      "longitude": -8.488312,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 161,
      "squawk": "3213",
      "timestamp": 1704989460,
      "ems": null
    },
    {
      "latitude": 40.151138,
      "longitude": -8.487793,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 160,
      "squawk": "3213",
      "timestamp": 1704989463,
      "ems": null
    },
    {
      "latitude": 40.15004,
      "longitude": -8.487244,
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
      "heading": 160,
      "squawk": "3213",
      "timestamp": 1704989466,
      "ems": null
    },
    {
      "latitude": 40.146561,
      "longitude": -8.485718,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 160,
      "squawk": "3213",
      "timestamp": 1704989476,
      "ems": null
    },
    {
      "latitude": 40.143265,
      "longitude": -8.484497,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 167,
      "squawk": "3213",
      "timestamp": 1704989484,
      "ems": null
    },
    {
      "latitude": 40.14212,
      "longitude": -8.484131,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 168,
      "squawk": "3213",
      "timestamp": 1704989488,
      "ems": null
    },
    {
      "latitude": 40.141205,
      "longitude": -8.48388,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 168,
      "squawk": "3213",
      "timestamp": 1704989491,
      "ems": null
    },
    {
      "latitude": 40.140274,
      "longitude": -8.48363,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 166,
      "squawk": "3213",
      "timestamp": 1704989494,
      "ems": null
    },
    {
      "latitude": 40.139511,
      "longitude": -8.483398,
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
      "heading": 166,
      "squawk": "3213",
      "timestamp": 1704989496,
      "ems": null
    },
    {
      "latitude": 40.136673,
      "longitude": -8.4823,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 159,
      "squawk": "3213",
      "timestamp": 1704989506,
      "ems": null
    },
    {
      "latitude": 40.135803,
      "longitude": -8.481757,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "3213",
      "timestamp": 1704989509,
      "ems": null
    },
    {
      "latitude": 40.135162,
      "longitude": -8.48114,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 138,
      "squawk": "3213",
      "timestamp": 1704989512,
      "ems": null
    },
    {
      "latitude": 40.134659,
      "longitude": -8.480164,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 120,
      "squawk": "3213",
      "timestamp": 1704989515,
      "ems": null
    },
    {
      "latitude": 40.13443,
      "longitude": -8.479004,
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
      "heading": 99,
      "squawk": "3213",
      "timestamp": 1704989518,
      "ems": null
    },
    {
      "latitude": 40.134453,
      "longitude": -8.477825,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 83,
      "squawk": "3213",
      "timestamp": 1704989521,
      "ems": null
    },
    {
      "latitude": 40.13464,
      "longitude": -8.476764,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 78,
      "squawk": "3213",
      "timestamp": 1704989524,
      "ems": null
    },
    {
      "latitude": 40.134781,
      "longitude": -8.475702,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 78,
      "squawk": "3213",
      "timestamp": 1704989527,
      "ems": null
    },
    {
      "latitude": 40.134964,
      "longitude": -8.474641,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 77,
      "squawk": "3213",
      "timestamp": 1704989530,
      "ems": null
    },
    {
      "latitude": 40.135151,
      "longitude": -8.473642,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 75,
      "squawk": "3213",
      "timestamp": 1704989533,
      "ems": null
    },
    {
      "latitude": 40.135345,
      "longitude": -8.472595,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 76,
      "squawk": "3213",
      "timestamp": 1704989536,
      "ems": null
    },
    {
      "latitude": 40.135529,
      "longitude": -8.471558,
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
      "heading": 76,
      "squawk": "3213",
      "timestamp": 1704989539,
      "ems": null
    },
    {
      "latitude": 40.135712,
      "longitude": -8.470584,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 75,
      "squawk": "3213",
      "timestamp": 1704989542,
      "ems": null
    },
    {
      "latitude": 40.135895,
      "longitude": -8.469647,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 76,
      "squawk": "3213",
      "timestamp": 1704989545,
      "ems": null
    },
    {
      "latitude": 40.136036,
      "longitude": -8.468711,
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
      "heading": 76,
      "squawk": "3213",
      "timestamp": 1704989548,
      "ems": null
    },
    {
      "latitude": 40.136269,
      "longitude": -8.467712,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 73,
      "squawk": "3213",
      "timestamp": 1704989551,
      "ems": null
    },
    {
      "latitude": 40.136536,
      "longitude": -8.466736,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 66,
      "squawk": "3213",
      "timestamp": 1704989554,
      "ems": null
    },
    {
      "latitude": 40.136967,
      "longitude": -8.465714,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 61,
      "squawk": "3213",
      "timestamp": 1704989557,
      "ems": null
    },
    {
      "latitude": 40.137222,
      "longitude": -8.465149,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 61,
      "squawk": "3213",
      "timestamp": 1704989560,
      "ems": null
    },
    {
      "latitude": 40.137772,
      "longitude": -8.463928,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 55,
      "squawk": "3213",
      "timestamp": 1704989564,
      "ems": null
    },
    {
      "latitude": 40.138229,
      "longitude": -8.463196,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 52,
      "squawk": "3213",
      "timestamp": 1704989566,
      "ems": null
    },
    {
      "latitude": 40.138691,
      "longitude": -8.462469,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 47,
      "squawk": "3213",
      "timestamp": 1704989569,
      "ems": null
    },
    {
      "latitude": 40.139389,
      "longitude": -8.461782,
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
      "heading": 31,
      "squawk": "3213",
      "timestamp": 1704989572,
      "ems": null
    },
    {
      "latitude": 40.140198,
      "longitude": -8.461365,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 19,
      "squawk": "3213",
      "timestamp": 1704989575,
      "ems": null
    },
    {
      "latitude": 40.140972,
      "longitude": -8.461158,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 9,
      "squawk": "3213",
      "timestamp": 1704989578,
      "ems": null
    },
    {
      "latitude": 40.141937,
      "longitude": -8.461121,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 9,
      "squawk": "3213",
      "timestamp": 1704989582,
      "ems": null
    },
    {
      "latitude": 40.142788,
      "longitude": -8.461221,
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
      "heading": 355,
      "squawk": "3213",
      "timestamp": 1704989585,
      "ems": null
    },
    {
      "latitude": 40.143585,
      "longitude": -8.461365,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 349,
      "squawk": "3213",
      "timestamp": 1704989588,
      "ems": null
    },
    {
      "latitude": 40.144455,
      "longitude": -8.46167,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 342,
      "squawk": "3213",
      "timestamp": 1704989591,
      "ems": null
    },
    {
      "latitude": 40.145206,
      "longitude": -8.462032,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 336,
      "squawk": "3213",
      "timestamp": 1704989594,
      "ems": null
    },
    {
      "latitude": 40.145905,
      "longitude": -8.462469,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989597,
      "ems": null
    },
    {
      "latitude": 40.146744,
      "longitude": -8.463074,
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
      "heading": 330,
      "squawk": "3213",
      "timestamp": 1704989600,
      "ems": null
    },
    {
      "latitude": 40.147533,
      "longitude": -8.463593,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 332,
      "squawk": "3213",
      "timestamp": 1704989603,
      "ems": null
    },
    {
      "latitude": 40.148254,
      "longitude": -8.464111,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 334,
      "squawk": "3213",
      "timestamp": 1704989606,
      "ems": null
    },
    {
      "latitude": 40.149033,
      "longitude": -8.464539,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 336,
      "squawk": "3213",
      "timestamp": 1704989609,
      "ems": null
    },
    {
      "latitude": 40.149765,
      "longitude": -8.464966,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989612,
      "ems": null
    },
    {
      "latitude": 40.150589,
      "longitude": -8.465515,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 331,
      "squawk": "3213",
      "timestamp": 1704989615,
      "ems": null
    },
    {
      "latitude": 40.151306,
      "longitude": -8.466027,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 331,
      "squawk": "3213",
      "timestamp": 1704989618,
      "ems": null
    },
    {
      "latitude": 40.15205,
      "longitude": -8.466526,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989621,
      "ems": null
    },
    {
      "latitude": 40.154022,
      "longitude": -8.467773,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 334,
      "squawk": "3213",
      "timestamp": 1704989629,
      "ems": null
    },
    {
      "latitude": 40.156403,
      "longitude": -8.469299,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989639,
      "ems": null
    },
    {
      "latitude": 40.158508,
      "longitude": -8.470703,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 332,
      "squawk": "3213",
      "timestamp": 1704989648,
      "ems": null
    },
    {
      "latitude": 40.160942,
      "longitude": -8.472269,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989657,
      "ems": null
    },
    {
      "latitude": 40.16341,
      "longitude": -8.473954,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 331,
      "squawk": "3213",
      "timestamp": 1704989666,
      "ems": null
    },
    {
      "latitude": 40.165691,
      "longitude": -8.47564,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 330,
      "squawk": "3213",
      "timestamp": 1704989675,
      "ems": null
    },
    {
      "latitude": 40.168297,
      "longitude": -8.477825,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 318,
      "squawk": "3213",
      "timestamp": 1704989684,
      "ems": null
    },
    {
      "latitude": 40.168991,
      "longitude": -8.478882,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704989687,
      "ems": null
    },
    {
      "latitude": 40.169506,
      "longitude": -8.480134,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 293,
      "squawk": "3213",
      "timestamp": 1704989690,
      "ems": null
    },
    {
      "latitude": 40.169739,
      "longitude": -8.481195,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 283,
      "squawk": "3213",
      "timestamp": 1704989692,
      "ems": null
    },
    {
      "latitude": 40.169785,
      "longitude": -8.482944,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 267,
      "squawk": "3213",
      "timestamp": 1704989696,
      "ems": null
    },
    {
      "latitude": 40.169552,
      "longitude": -8.484254,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 255,
      "squawk": "3213",
      "timestamp": 1704989699,
      "ems": null
    },
    {
      "latitude": 40.169041,
      "longitude": -8.485627,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 237,
      "squawk": "3213",
      "timestamp": 1704989702,
      "ems": null
    },
    {
      "latitude": 40.168297,
      "longitude": -8.486752,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 226,
      "squawk": "3213",
      "timestamp": 1704989705,
      "ems": null
    },
    {
      "latitude": 40.167507,
      "longitude": -8.48775,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 225,
      "squawk": "3213",
      "timestamp": 1704989708,
      "ems": null
    },
    {
      "latitude": 40.166748,
      "longitude": -8.48877,
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
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 226,
      "squawk": "3213",
      "timestamp": 1704989711,
      "ems": null
    },
    {
      "latitude": 40.165878,
      "longitude": -8.489746,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 221,
      "squawk": "3213",
      "timestamp": 1704989714,
      "ems": null
    },
    {
      "latitude": 40.164898,
      "longitude": -8.490247,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 196,
      "squawk": "3213",
      "timestamp": 1704989717,
      "ems": null
    },
    {
      "latitude": 40.163956,
      "longitude": -8.490417,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 183,
      "squawk": "3213",
      "timestamp": 1704989720,
      "ems": null
    },
    {
      "latitude": 40.162857,
      "longitude": -8.490234,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 172,
      "squawk": "3213",
      "timestamp": 1704989723,
      "ems": null
    },
    {
      "latitude": 40.161777,
      "longitude": -8.49006,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 171,
      "squawk": "3213",
      "timestamp": 1704989726,
      "ems": null
    },
    {
      "latitude": 40.160755,
      "longitude": -8.48981,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 169,
      "squawk": "3213",
      "timestamp": 1704989729,
      "ems": null
    },
    {
      "latitude": 40.159824,
      "longitude": -8.48956,
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
      "heading": 169,
      "squawk": "3213",
      "timestamp": 1704989732,
      "ems": null
    },
    {
      "latitude": 40.158615,
      "longitude": -8.489185,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 166,
      "squawk": "3213",
      "timestamp": 1704989735,
      "ems": null
    },
    {
      "latitude": 40.157684,
      "longitude": -8.488892,
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
      "heading": 165,
      "squawk": "3213",
      "timestamp": 1704989738,
      "ems": null
    },
    {
      "latitude": 40.156658,
      "longitude": -8.488374,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 157,
      "squawk": "3213",
      "timestamp": 1704989741,
      "ems": null
    },
    {
      "latitude": 40.155586,
      "longitude": -8.487812,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 156,
      "squawk": "3213",
      "timestamp": 1704989745,
      "ems": null
    },
    {
      "latitude": 40.154564,
      "longitude": -8.487188,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 156,
      "squawk": "3213",
      "timestamp": 1704989748,
      "ems": null
    },
    {
      "latitude": 40.153725,
      "longitude": -8.486752,
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
      "heading": 157,
      "squawk": "3213",
      "timestamp": 1704989750,
      "ems": null
    },
    {
      "latitude": 40.152603,
      "longitude": -8.486145,
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
      "heading": 159,
      "squawk": "3213",
      "timestamp": 1704989753,
      "ems": null
    },
    {
      "latitude": 40.151443,
      "longitude": -8.485627,
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
      "heading": 160,
      "squawk": "3213",
      "timestamp": 1704989757,
      "ems": null
    },
    {
      "latitude": 40.150421,
      "longitude": -8.485128,
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
      "heading": 161,
      "squawk": "3213",
      "timestamp": 1704989760,
      "ems": null
    },
    {
      "latitude": 40.149307,
      "longitude": -8.48468,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 162,
      "squawk": "3213",
      "timestamp": 1704989763,
      "ems": null
    },
    {
      "latitude": 40.148346,
      "longitude": -8.484253,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 158,
      "squawk": "3213",
      "timestamp": 1704989765,
      "ems": null
    },
    {
      "latitude": 40.147476,
      "longitude": -8.483765,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 156,
      "squawk": "3213",
      "timestamp": 1704989768,
      "ems": null
    },
    {
      "latitude": 40.144684,
      "longitude": -8.481995,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 153,
      "squawk": "3213",
      "timestamp": 1704989777,
      "ems": null
    },
    {
      "latitude": 40.142029,
      "longitude": -8.480347,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 157,
      "squawk": "3213",
      "timestamp": 1704989786,
      "ems": null
    },
    {
      "latitude": 40.139389,
      "longitude": -8.479011,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 161,
      "squawk": "3213",
      "timestamp": 1704989795,
      "ems": null
    },
    {
      "latitude": 40.137806,
      "longitude": -8.478262,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 159,
      "squawk": "3213",
      "timestamp": 1704989801,
      "ems": null
    },
    {
      "latitude": 40.135384,
      "longitude": -8.476577,
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
      "heading": 138,
      "squawk": "3213",
      "timestamp": 1704989811,
      "ems": null
    },
    {
      "latitude": 40.134918,
      "longitude": -8.475765,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 123,
      "squawk": "3213",
      "timestamp": 1704989814,
      "ems": null
    },
    {
      "latitude": 40.134521,
      "longitude": -8.474731,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 115,
      "squawk": "3213",
      "timestamp": 1704989816,
      "ems": null
    },
    {
      "latitude": 40.134361,
      "longitude": -8.473642,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 99,
      "squawk": "3213",
      "timestamp": 1704989820,
      "ems": null
    },
    {
      "latitude": 40.134453,
      "longitude": -8.472581,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 80,
      "squawk": "3213",
      "timestamp": 1704989823,
      "ems": null
    },
    {
      "latitude": 40.134659,
      "longitude": -8.471436,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 73,
      "squawk": "3213",
      "timestamp": 1704989826,
      "ems": null
    },
    {
      "latitude": 40.134979,
      "longitude": -8.470398,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 68,
      "squawk": "3213",
      "timestamp": 1704989829,
      "ems": null
    },
    {
      "latitude": 40.135338,
      "longitude": -8.46946,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 61,
      "squawk": "3213",
      "timestamp": 1704989832,
      "ems": null
    },
    {
      "latitude": 40.135803,
      "longitude": -8.468506,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 59,
      "squawk": "3213",
      "timestamp": 1704989835,
      "ems": null
    },
    {
      "latitude": 40.136269,
      "longitude": -8.467525,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 58,
      "squawk": "3213",
      "timestamp": 1704989838,
      "ems": null
    },
    {
      "latitude": 40.136765,
      "longitude": -8.466492,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 55,
      "squawk": "3213",
      "timestamp": 1704989841,
      "ems": null
    },
    {
      "latitude": 40.137177,
      "longitude": -8.465698,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 56,
      "squawk": "3213",
      "timestamp": 1704989844,
      "ems": null
    },
    {
      "latitude": 40.13768,
      "longitude": -8.464722,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 56,
      "squawk": "3213",
      "timestamp": 1704989847,
      "ems": null
    },
    {
      "latitude": 40.138046,
      "longitude": -8.463989,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 54,
      "squawk": "3213",
      "timestamp": 1704989849,
      "ems": null
    },
    {
      "latitude": 40.138737,
      "longitude": -8.463093,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 39,
      "squawk": "3213",
      "timestamp": 1704989853,
      "ems": null
    },
    {
      "latitude": 40.139435,
      "longitude": -8.462531,
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
      "heading": 28,
      "squawk": "3213",
      "timestamp": 1704989856,
      "ems": null
    },
    {
      "latitude": 40.140289,
      "longitude": -8.462097,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 19,
      "squawk": "3213",
      "timestamp": 1704989859,
      "ems": null
    },
    {
      "latitude": 40.141205,
      "longitude": -8.461782,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 13,
      "squawk": "3213",
      "timestamp": 1704989862,
      "ems": null
    },
    {
      "latitude": 40.141994,
      "longitude": -8.461595,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 10,
      "squawk": "3213",
      "timestamp": 1704989865,
      "ems": null
    },
    {
      "latitude": 40.142899,
      "longitude": -8.461548,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 1,
      "squawk": "3213",
      "timestamp": 1704989867,
      "ems": null
    },
    {
      "latitude": 40.143997,
      "longitude": -8.461731,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 351,
      "squawk": "3213",
      "timestamp": 1704989871,
      "ems": null
    },
    {
      "latitude": 40.144958,
      "longitude": -8.462036,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 344,
      "squawk": "3213",
      "timestamp": 1704989874,
      "ems": null
    },
    {
      "latitude": 40.145905,
      "longitude": -8.462469,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 337,
      "squawk": "3213",
      "timestamp": 1704989877,
      "ems": null
    },
    {
      "latitude": 40.146835,
      "longitude": -8.463031,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989880,
      "ems": null
    },
    {
      "latitude": 40.147488,
      "longitude": -8.463468,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 331,
      "squawk": "3213",
      "timestamp": 1704989883,
      "ems": null
    },
    {
      "latitude": 40.148418,
      "longitude": -8.464154,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 331,
      "squawk": "3213",
      "timestamp": 1704989886,
      "ems": null
    },
    {
      "latitude": 40.149303,
      "longitude": -8.464779,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 332,
      "squawk": "3213",
      "timestamp": 1704989889,
      "ems": null
    },
    {
      "latitude": 40.150223,
      "longitude": -8.465393,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 334,
      "squawk": "3213",
      "timestamp": 1704989892,
      "ems": null
    },
    {
      "latitude": 40.15123,
      "longitude": -8.465942,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 335,
      "squawk": "3213",
      "timestamp": 1704989895,
      "ems": null
    },
  ],
};
