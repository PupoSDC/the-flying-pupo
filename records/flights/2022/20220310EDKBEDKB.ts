import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20220310EDKBEDKB",
    callsign: "DETCY",
    name: "Tour Flight with The Ben",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 2, 10, 12, 45).getTime(),
    arrival: new Date(2022, 2, 10, 14, 50).getTime(),
    singleEnginePistonTime: 125,
    picTime: 125,
    dualTime: 0,
    landings: {
      day: 2,
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
      registration: "D-EFCY",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      name: "Bonn Hangelar",
      code: "EDKB",
      position: {
        latitude: 50.7690965,
        longitude: 7.1620958,
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
      "latitude": 50.767357,
      "longitude": 7.169876,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 111,
      "squawk": "0",
      "timestamp": 1646916782,
      "ems": null
    },
    {
      "latitude": 50.76675,
      "longitude": 7.172546,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 111,
      "squawk": "0",
      "timestamp": 1646916789,
      "ems": null
    },
    {
      "latitude": 50.766174,
      "longitude": 7.174963,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 111,
      "squawk": "0",
      "timestamp": 1646916796,
      "ems": null
    },
    {
      "latitude": 50.765682,
      "longitude": 7.177048,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 110,
      "squawk": "0",
      "timestamp": 1646916802,
      "ems": null
    },
    {
      "latitude": 50.765167,
      "longitude": 7.179184,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 110,
      "squawk": "0",
      "timestamp": 1646916808,
      "ems": null
    },
    {
      "latitude": 50.764565,
      "longitude": 7.181625,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 111,
      "squawk": "0",
      "timestamp": 1646916814,
      "ems": null
    },
    {
      "latitude": 50.763885,
      "longitude": 7.184316,
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
      "heading": 113,
      "squawk": "0",
      "timestamp": 1646916820,
      "ems": null
    },
    {
      "latitude": 50.763199,
      "longitude": 7.186617,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1646916826,
      "ems": null
    },
    {
      "latitude": 50.762516,
      "longitude": 7.18895,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1646916832,
      "ems": null
    },
    {
      "latitude": 50.762283,
      "longitude": 7.189735,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1646916835,
      "ems": null
    },
    {
      "latitude": 50.761551,
      "longitude": 7.192111,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1646916841,
      "ems": null
    },
    {
      "latitude": 50.760956,
      "longitude": 7.194263,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1646916847,
      "ems": null
    },
    {
      "latitude": 50.760189,
      "longitude": 7.196274,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1646916853,
      "ems": null
    },
    {
      "latitude": 50.759628,
      "longitude": 7.197158,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1646916856,
      "ems": null
    },
    {
      "latitude": 50.758976,
      "longitude": 7.197876,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1646916859,
      "ems": null
    },
    {
      "latitude": 50.758278,
      "longitude": 7.198334,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1646916862,
      "ems": null
    },
    {
      "latitude": 50.757477,
      "longitude": 7.198717,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1646916865,
      "ems": null
    },
    {
      "latitude": 50.75679,
      "longitude": 7.198866,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1646916868,
      "ems": null
    },
    {
      "latitude": 50.756104,
      "longitude": 7.19894,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1646916871,
      "ems": null
    },
    {
      "latitude": 50.755161,
      "longitude": 7.198792,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1646916874,
      "ems": null
    },
    {
      "latitude": 50.754414,
      "longitude": 7.198486,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1646916877,
      "ems": null
    },
    {
      "latitude": 50.753586,
      "longitude": 7.198049,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1646916880,
      "ems": null
    },
    {
      "latitude": 50.752739,
      "longitude": 7.197571,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1646916883,
      "ems": null
    },
    {
      "latitude": 50.751892,
      "longitude": 7.197158,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1646916886,
      "ems": null
    },
    {
      "latitude": 50.751068,
      "longitude": 7.196787,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1646916889,
      "ems": null
    },
    {
      "latitude": 50.750225,
      "longitude": 7.196426,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1646916892,
      "ems": null
    },
    {
      "latitude": 50.749466,
      "longitude": 7.196045,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1646916895,
      "ems": null
    },
    {
      "latitude": 50.748642,
      "longitude": 7.19574,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1646916898,
      "ems": null
    },
    {
      "latitude": 50.747807,
      "longitude": 7.195358,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1646916901,
      "ems": null
    },
    {
      "latitude": 50.746307,
      "longitude": 7.194412,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1646916907,
      "ems": null
    },
    {
      "latitude": 50.74543,
      "longitude": 7.193832,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1646916910,
      "ems": null
    },
    {
      "latitude": 50.744431,
      "longitude": 7.192853,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1646916913,
      "ems": null
    },
    {
      "latitude": 50.743614,
      "longitude": 7.191925,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1646916916,
      "ems": null
    },
    {
      "latitude": 50.742779,
      "longitude": 7.190552,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1646916919,
      "ems": null
    },
    {
      "latitude": 50.742081,
      "longitude": 7.189178,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1646916922,
      "ems": null
    },
    {
      "latitude": 50.74152,
      "longitude": 7.187958,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1646916925,
      "ems": null
    },
    {
      "latitude": 50.740768,
      "longitude": 7.186172,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1646916929,
      "ems": null
    },
    {
      "latitude": 50.740311,
      "longitude": 7.18483,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1646916931,
      "ems": null
    },
    {
      "latitude": 50.739761,
      "longitude": 7.183128,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1646916934,
      "ems": null
    },
    {
      "latitude": 50.739193,
      "longitude": 7.18132,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1646916937,
      "ems": null
    },
    {
      "latitude": 50.7388,
      "longitude": 7.179862,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1646916940,
      "ems": null
    },
    {
      "latitude": 50.738354,
      "longitude": 7.178116,
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1646916944,
      "ems": null
    },
    {
      "latitude": 50.737843,
      "longitude": 7.176361,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1646916946,
      "ems": null
    },
    {
      "latitude": 50.737381,
      "longitude": 7.174666,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1646916950,
      "ems": null
    },
    {
      "latitude": 50.736969,
      "longitude": 7.173256,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1646916953,
      "ems": null
    },
    {
      "latitude": 50.736511,
      "longitude": 7.171326,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1646916956,
      "ems": null
    },
    {
      "latitude": 50.736073,
      "longitude": 7.169647,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1646916958,
      "ems": null
    },
    {
      "latitude": 50.735687,
      "longitude": 7.167985,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1646916961,
      "ems": null
    },
    {
      "latitude": 50.735229,
      "longitude": 7.16613,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1646916965,
      "ems": null
    },
    {
      "latitude": 50.734818,
      "longitude": 7.164383,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1646916967,
      "ems": null
    },
    {
      "latitude": 50.734406,
      "longitude": 7.162418,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1646916971,
      "ems": null
    },
    {
      "latitude": 50.734085,
      "longitude": 7.160562,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1646916974,
      "ems": null
    },
    {
      "latitude": 50.733719,
      "longitude": 7.158632,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1646916977,
      "ems": null
    },
    {
      "latitude": 50.733421,
      "longitude": 7.156754,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1646916980,
      "ems": null
    },
    {
      "latitude": 50.73317,
      "longitude": 7.154772,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1646916983,
      "ems": null
    },
    {
      "latitude": 50.732956,
      "longitude": 7.152786,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1646916986,
      "ems": null
    },
    {
      "latitude": 50.732712,
      "longitude": 7.150541,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1646916989,
      "ems": null
    },
    {
      "latitude": 50.732529,
      "longitude": 7.148685,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1646916992,
      "ems": null
    },
    {
      "latitude": 50.732349,
      "longitude": 7.14653,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1646916995,
      "ems": null
    },
    {
      "latitude": 50.732208,
      "longitude": 7.144852,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1646916998,
      "ems": null
    },
    {
      "latitude": 50.731979,
      "longitude": 7.142227,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1646917001,
      "ems": null
    },
    {
      "latitude": 50.731888,
      "longitude": 7.139925,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1646917004,
      "ems": null
    },
    {
      "latitude": 50.731792,
      "longitude": 7.137756,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1646917007,
      "ems": null
    },
    {
      "latitude": 50.731705,
      "longitude": 7.135695,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1646917010,
      "ems": null
    },
    {
      "latitude": 50.731651,
      "longitude": 7.133865,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1646917013,
      "ems": null
    },
    {
      "latitude": 50.731522,
      "longitude": 7.131612,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1646917016,
      "ems": null
    },
    {
      "latitude": 50.73151,
      "longitude": 7.129593,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1646917019,
      "ems": null
    },
    {
      "latitude": 50.731522,
      "longitude": 7.127232,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1646917022,
      "ems": null
    },
    {
      "latitude": 50.731293,
      "longitude": 7.122852,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1646917028,
      "ems": null
    },
    {
      "latitude": 50.731064,
      "longitude": 7.11825,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1646917034,
      "ems": null
    },
    {
      "latitude": 50.730953,
      "longitude": 7.114029,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1646917040,
      "ems": null
    },
    {
      "latitude": 50.730927,
      "longitude": 7.112014,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1646917043,
      "ems": null
    },
    {
      "latitude": 50.730999,
      "longitude": 7.109909,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1646917045,
      "ems": null
    },
    {
      "latitude": 50.731064,
      "longitude": 7.108154,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1646917048,
      "ems": null
    },
    {
      "latitude": 50.731277,
      "longitude": 7.105331,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1646917052,
      "ems": null
    },
    {
      "latitude": 50.731373,
      "longitude": 7.103424,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1646917054,
      "ems": null
    },
    {
      "latitude": 50.731522,
      "longitude": 7.101251,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1646917058,
      "ems": null
    },
    {
      "latitude": 50.731697,
      "longitude": 7.099152,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1646917060,
      "ems": null
    },
    {
      "latitude": 50.731976,
      "longitude": 7.096939,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1646917063,
      "ems": null
    },
    {
      "latitude": 50.732208,
      "longitude": 7.095032,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1646917066,
      "ems": null
    },
    {
      "latitude": 50.732491,
      "longitude": 7.092819,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1646917069,
      "ems": null
    },
    {
      "latitude": 50.732712,
      "longitude": 7.091229,
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1646917073,
      "ems": null
    },
    {
      "latitude": 50.73317,
      "longitude": 7.088557,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1646917076,
      "ems": null
    },
    {
      "latitude": 50.733513,
      "longitude": 7.086639,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1646917079,
      "ems": null
    },
    {
      "latitude": 50.733841,
      "longitude": 7.084808,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1646917082,
      "ems": null
    },
    {
      "latitude": 50.73436,
      "longitude": 7.082396,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1646917085,
      "ems": null
    },
    {
      "latitude": 50.734955,
      "longitude": 7.080383,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1646917087,
      "ems": null
    },
    {
      "latitude": 50.735687,
      "longitude": 7.078536,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1646917091,
      "ems": null
    },
    {
      "latitude": 50.736465,
      "longitude": 7.076977,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1646917094,
      "ems": null
    },
    {
      "latitude": 50.737427,
      "longitude": 7.075418,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1646917097,
      "ems": null
    },
    {
      "latitude": 50.738571,
      "longitude": 7.073785,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1646917100,
      "ems": null
    },
    {
      "latitude": 50.739704,
      "longitude": 7.072678,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1646917103,
      "ems": null
    },
    {
      "latitude": 50.740868,
      "longitude": 7.071533,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1646917106,
      "ems": null
    },
    {
      "latitude": 50.742096,
      "longitude": 7.070518,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1646917109,
      "ems": null
    },
    {
      "latitude": 50.743336,
      "longitude": 7.069626,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1646917112,
      "ems": null
    },
    {
      "latitude": 50.744595,
      "longitude": 7.068863,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1646917115,
      "ems": null
    },
    {
      "latitude": 50.745895,
      "longitude": 7.068143,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 341,
      "squawk": "7042",
      "timestamp": 1646917118,
      "ems": null
    },
    {
      "latitude": 50.747177,
      "longitude": 7.067475,
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
      "heading": 343,
      "squawk": "7042",
      "timestamp": 1646917121,
      "ems": null
    },
    {
      "latitude": 50.748505,
      "longitude": 7.066879,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 343,
      "squawk": "7042",
      "timestamp": 1646917124,
      "ems": null
    },
    {
      "latitude": 50.749851,
      "longitude": 7.066345,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 345,
      "squawk": "7042",
      "timestamp": 1646917127,
      "ems": null
    },
    {
      "latitude": 50.751156,
      "longitude": 7.065735,
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
      "heading": 344,
      "squawk": "7042",
      "timestamp": 1646917130,
      "ems": null
    },
    {
      "latitude": 50.752506,
      "longitude": 7.065201,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 346,
      "squawk": "7042",
      "timestamp": 1646917133,
      "ems": null
    },
    {
      "latitude": 50.753765,
      "longitude": 7.064743,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 346,
      "squawk": "7042",
      "timestamp": 1646917136,
      "ems": null
    },
    {
      "latitude": 50.755253,
      "longitude": 7.064209,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 347,
      "squawk": "7042",
      "timestamp": 1646917139,
      "ems": null
    },
    {
      "latitude": 50.756332,
      "longitude": 7.063912,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 353,
      "squawk": "7042",
      "timestamp": 1646917142,
      "ems": null
    },
    {
      "latitude": 50.75798,
      "longitude": 7.063838,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 3,
      "squawk": "7042",
      "timestamp": 1646917145,
      "ems": null
    },
    {
      "latitude": 50.759258,
      "longitude": 7.064133,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 10,
      "squawk": "7042",
      "timestamp": 1646917148,
      "ems": null
    },
    {
      "latitude": 50.760498,
      "longitude": 7.064506,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 13,
      "squawk": "7042",
      "timestamp": 1646917151,
      "ems": null
    },
    {
      "latitude": 50.761631,
      "longitude": 7.064896,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 10,
      "squawk": "7042",
      "timestamp": 1646917154,
      "ems": null
    },
    {
      "latitude": 50.762749,
      "longitude": 7.065201,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 9,
      "squawk": "7042",
      "timestamp": 1646917157,
      "ems": null
    },
    {
      "latitude": 50.764004,
      "longitude": 7.065506,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 6,
      "squawk": "7042",
      "timestamp": 1646917160,
      "ems": null
    },
    {
      "latitude": 50.765305,
      "longitude": 7.065768,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 7,
      "squawk": "7042",
      "timestamp": 1646917163,
      "ems": null
    },
    {
      "latitude": 50.766632,
      "longitude": 7.065917,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 1,
      "squawk": "7042",
      "timestamp": 1646917166,
      "ems": null
    },
    {
      "latitude": 50.768005,
      "longitude": 7.065694,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 352,
      "squawk": "7042",
      "timestamp": 1646917169,
      "ems": null
    },
    {
      "latitude": 50.769314,
      "longitude": 7.065048,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 339,
      "squawk": "7042",
      "timestamp": 1646917171,
      "ems": null
    },
    {
      "latitude": 50.77071,
      "longitude": 7.063599,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 321,
      "squawk": "7042",
      "timestamp": 1646917175,
      "ems": null
    },
    {
      "latitude": 50.771667,
      "longitude": 7.061908,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 308,
      "squawk": "7042",
      "timestamp": 1646917178,
      "ems": null
    },
    {
      "latitude": 50.772446,
      "longitude": 7.060201,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 302,
      "squawk": "7042",
      "timestamp": 1646917181,
      "ems": null
    },
    {
      "latitude": 50.773361,
      "longitude": 7.0578,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 299,
      "squawk": "7042",
      "timestamp": 1646917184,
      "ems": null
    },
    {
      "latitude": 50.774059,
      "longitude": 7.055817,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 299,
      "squawk": "7042",
      "timestamp": 1646917187,
      "ems": null
    },
    {
      "latitude": 50.774826,
      "longitude": 7.053668,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 298,
      "squawk": "7042",
      "timestamp": 1646917190,
      "ems": null
    },
    {
      "latitude": 50.775558,
      "longitude": 7.051589,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 299,
      "squawk": "7042",
      "timestamp": 1646917193,
      "ems": null
    },
    {
      "latitude": 50.776386,
      "longitude": 7.049332,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 299,
      "squawk": "7042",
      "timestamp": 1646917196,
      "ems": null
    },
    {
      "latitude": 50.77718,
      "longitude": 7.047348,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 301,
      "squawk": "7042",
      "timestamp": 1646917199,
      "ems": null
    },
    {
      "latitude": 50.777924,
      "longitude": 7.045441,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 304,
      "squawk": "7042",
      "timestamp": 1646917202,
      "ems": null
    },
    {
      "latitude": 50.778763,
      "longitude": 7.043457,
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
      "heading": 301,
      "squawk": "7042",
      "timestamp": 1646917205,
      "ems": null
    },
    {
      "latitude": 50.779507,
      "longitude": 7.041473,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 300,
      "squawk": "7042",
      "timestamp": 1646917208,
      "ems": null
    },
    {
      "latitude": 50.781097,
      "longitude": 7.037411,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 302,
      "squawk": "7042",
      "timestamp": 1646917214,
      "ems": null
    },
    {
      "latitude": 50.7827,
      "longitude": 7.033551,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 305,
      "squawk": "7042",
      "timestamp": 1646917220,
      "ems": null
    },
    {
      "latitude": 50.783325,
      "longitude": 7.032242,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 313,
      "squawk": "7042",
      "timestamp": 1646917223,
      "ems": null
    },
    {
      "latitude": 50.784531,
      "longitude": 7.030508,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 320,
      "squawk": "7042",
      "timestamp": 1646917226,
      "ems": null
    },
    {
      "latitude": 50.786041,
      "longitude": 7.028652,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 323,
      "squawk": "7042",
      "timestamp": 1646917229,
      "ems": null
    },
    {
      "latitude": 50.787094,
      "longitude": 7.027464,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "7042",
      "timestamp": 1646917232,
      "ems": null
    },
    {
      "latitude": 50.788353,
      "longitude": 7.025909,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "7042",
      "timestamp": 1646917235,
      "ems": null
    },
    {
      "latitude": 50.789608,
      "longitude": 7.02446,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 323,
      "squawk": "7042",
      "timestamp": 1646917238,
      "ems": null
    },
    {
      "latitude": 50.79071,
      "longitude": 7.023159,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 323,
      "squawk": "7042",
      "timestamp": 1646917241,
      "ems": null
    },
    {
      "latitude": 50.791809,
      "longitude": 7.021971,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 324,
      "squawk": "7042",
      "timestamp": 1646917244,
      "ems": null
    },
    {
      "latitude": 50.792999,
      "longitude": 7.020635,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 325,
      "squawk": "7042",
      "timestamp": 1646917247,
      "ems": null
    },
    {
      "latitude": 50.794235,
      "longitude": 7.019373,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 327,
      "squawk": "7042",
      "timestamp": 1646917250,
      "ems": null
    },
    {
      "latitude": 50.795475,
      "longitude": 7.018204,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 329,
      "squawk": "7042",
      "timestamp": 1646917253,
      "ems": null
    },
    {
      "latitude": 50.796638,
      "longitude": 7.017136,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 329,
      "squawk": "7042",
      "timestamp": 1646917256,
      "ems": null
    },
    {
      "latitude": 50.797756,
      "longitude": 7.016068,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 328,
      "squawk": "7042",
      "timestamp": 1646917259,
      "ems": null
    },
    {
      "latitude": 50.79895,
      "longitude": 7.014919,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "7042",
      "timestamp": 1646917262,
      "ems": null
    },
    {
      "latitude": 50.800037,
      "longitude": 7.013931,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 329,
      "squawk": "7042",
      "timestamp": 1646917265,
      "ems": null
    },
    {
      "latitude": 50.802292,
      "longitude": 7.011579,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 324,
      "squawk": "7042",
      "timestamp": 1646917271,
      "ems": null
    },
    {
      "latitude": 50.804367,
      "longitude": 7.009048,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 320,
      "squawk": "7042",
      "timestamp": 1646917277,
      "ems": null
    },
    {
      "latitude": 50.805405,
      "longitude": 7.007644,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 319,
      "squawk": "7042",
      "timestamp": 1646917280,
      "ems": null
    },
    {
      "latitude": 50.806412,
      "longitude": 7.006234,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 317,
      "squawk": "7042",
      "timestamp": 1646917283,
      "ems": null
    },
    {
      "latitude": 50.807419,
      "longitude": 7.004823,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 316,
      "squawk": "7042",
      "timestamp": 1646917286,
      "ems": null
    },
    {
      "latitude": 50.808414,
      "longitude": 7.00325,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 315,
      "squawk": "7042",
      "timestamp": 1646917289,
      "ems": null
    },
    {
      "latitude": 50.809341,
      "longitude": 7.00178,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 314,
      "squawk": "7042",
      "timestamp": 1646917292,
      "ems": null
    },
    {
      "latitude": 50.810371,
      "longitude": 7.000122,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 313,
      "squawk": "7042",
      "timestamp": 1646917295,
      "ems": null
    },
    {
      "latitude": 50.811256,
      "longitude": 6.998596,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 312,
      "squawk": "7042",
      "timestamp": 1646917298,
      "ems": null
    },
    {
      "latitude": 50.812271,
      "longitude": 6.996806,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 311,
      "squawk": "7042",
      "timestamp": 1646917301,
      "ems": null
    },
    {
      "latitude": 50.813164,
      "longitude": 6.995087,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 309,
      "squawk": "7042",
      "timestamp": 1646917304,
      "ems": null
    },
    {
      "latitude": 50.813957,
      "longitude": 6.993637,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 310,
      "squawk": "7042",
      "timestamp": 1646917307,
      "ems": null
    },
    {
      "latitude": 50.81498,
      "longitude": 6.991806,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 310,
      "squawk": "7042",
      "timestamp": 1646917310,
      "ems": null
    },
    {
      "latitude": 50.815796,
      "longitude": 6.9902,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 310,
      "squawk": "7042",
      "timestamp": 1646917313,
      "ems": null
    },
    {
      "latitude": 50.816711,
      "longitude": 6.988566,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 311,
      "squawk": "7042",
      "timestamp": 1646917316,
      "ems": null
    },
    {
      "latitude": 50.818565,
      "longitude": 6.985245,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 311,
      "squawk": "7042",
      "timestamp": 1646917322,
      "ems": null
    },
    {
      "latitude": 50.820511,
      "longitude": 6.982183,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 315,
      "squawk": "7042",
      "timestamp": 1646917328,
      "ems": null
    },
    {
      "latitude": 50.821545,
      "longitude": 6.980591,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 318,
      "squawk": "7042",
      "timestamp": 1646917331,
      "ems": null
    },
    {
      "latitude": 50.822617,
      "longitude": 6.979288,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 320,
      "squawk": "7042",
      "timestamp": 1646917334,
      "ems": null
    },
    {
      "latitude": 50.823715,
      "longitude": 6.977877,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 322,
      "squawk": "7042",
      "timestamp": 1646917337,
      "ems": null
    },
    {
      "latitude": 50.824768,
      "longitude": 6.976615,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 324,
      "squawk": "7042",
      "timestamp": 1646917340,
      "ems": null
    },
    {
      "latitude": 50.826004,
      "longitude": 6.975279,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 325,
      "squawk": "7042",
      "timestamp": 1646917343,
      "ems": null
    },
    {
      "latitude": 50.827225,
      "longitude": 6.97403,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 327,
      "squawk": "7042",
      "timestamp": 1646917346,
      "ems": null
    },
    {
      "latitude": 50.82848,
      "longitude": 6.972961,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 331,
      "squawk": "7042",
      "timestamp": 1646917349,
      "ems": null
    },
    {
      "latitude": 50.829739,
      "longitude": 6.97197,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1646917352,
      "ems": null
    },
    {
      "latitude": 50.831039,
      "longitude": 6.971271,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 341,
      "squawk": "7042",
      "timestamp": 1646917355,
      "ems": null
    },
    {
      "latitude": 50.832298,
      "longitude": 6.970596,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "7042",
      "timestamp": 1646917358,
      "ems": null
    },
    {
      "latitude": 50.833649,
      "longitude": 6.970062,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "squawk": "7042",
      "timestamp": 1646917361,
      "ems": null
    },
    {
      "latitude": 50.835022,
      "longitude": 6.969563,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 347,
      "squawk": "7042",
      "timestamp": 1646917364,
      "ems": null
    },
    {
      "latitude": 50.8363,
      "longitude": 6.969147,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 348,
      "squawk": "7042",
      "timestamp": 1646917367,
      "ems": null
    },
    {
      "latitude": 50.837677,
      "longitude": 6.968672,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 349,
      "squawk": "7042",
      "timestamp": 1646917370,
      "ems": null
    },
    {
      "latitude": 50.839096,
      "longitude": 6.968301,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 349,
      "squawk": "7042",
      "timestamp": 1646917373,
      "ems": null
    },
    {
      "latitude": 50.840424,
      "longitude": 6.96793,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "7042",
      "timestamp": 1646917376,
      "ems": null
    },
    {
      "latitude": 50.841606,
      "longitude": 6.967697,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 352,
      "squawk": "7042",
      "timestamp": 1646917379,
      "ems": null
    },
    {
      "latitude": 50.843033,
      "longitude": 6.967411,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 352,
      "squawk": "7042",
      "timestamp": 1646917382,
      "ems": null
    },
    {
      "latitude": 50.844269,
      "longitude": 6.967113,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 353,
      "squawk": "7042",
      "timestamp": 1646917385,
      "ems": null
    },
    {
      "latitude": 50.845688,
      "longitude": 6.966891,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 353,
      "squawk": "7042",
      "timestamp": 1646917388,
      "ems": null
    },
    {
      "latitude": 50.847015,
      "longitude": 6.966668,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 353,
      "squawk": "7042",
      "timestamp": 1646917391,
      "ems": null
    },
    {
      "latitude": 50.848404,
      "longitude": 6.9664,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 354,
      "squawk": "7042",
      "timestamp": 1646917394,
      "ems": null
    },
    {
      "latitude": 50.849533,
      "longitude": 6.966223,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 354,
      "squawk": "7042",
      "timestamp": 1646917397,
      "ems": null
    },
    {
      "latitude": 50.852455,
      "longitude": 6.965714,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 352,
      "squawk": "7042",
      "timestamp": 1646917403,
      "ems": null
    },
    {
      "latitude": 50.855202,
      "longitude": 6.965179,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 353,
      "squawk": "7042",
      "timestamp": 1646917409,
      "ems": null
    },
    {
      "latitude": 50.857544,
      "longitude": 6.964738,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 353,
      "squawk": "7042",
      "timestamp": 1646917415,
      "ems": null
    },
    {
      "latitude": 50.860508,
      "longitude": 6.964264,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 353,
      "squawk": "7042",
      "timestamp": 1646917421,
      "ems": null
    },
    {
      "latitude": 50.863022,
      "longitude": 6.963806,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 353,
      "squawk": "7042",
      "timestamp": 1646917427,
      "ems": null
    },
    {
      "latitude": 50.865921,
      "longitude": 6.963253,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 354,
      "squawk": "7042",
      "timestamp": 1646917434,
      "ems": null
    },
    {
      "latitude": 50.868374,
      "longitude": 6.962814,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "7042",
      "timestamp": 1646917439,
      "ems": null
    },
    {
      "latitude": 50.871231,
      "longitude": 6.962214,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 353,
      "squawk": "7042",
      "timestamp": 1646917445,
      "ems": null
    },
    {
      "latitude": 50.874054,
      "longitude": 6.96167,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 353,
      "squawk": "7042",
      "timestamp": 1646917451,
      "ems": null
    },
    {
      "latitude": 50.876801,
      "longitude": 6.961212,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 354,
      "squawk": "7042",
      "timestamp": 1646917457,
      "ems": null
    },
    {
      "latitude": 50.879501,
      "longitude": 6.960754,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 353,
      "squawk": "7042",
      "timestamp": 1646917463,
      "ems": null
    },
    {
      "latitude": 50.882263,
      "longitude": 6.96021,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 351,
      "squawk": "7042",
      "timestamp": 1646917470,
      "ems": null
    },
    {
      "latitude": 50.884949,
      "longitude": 6.95961,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 352,
      "squawk": "7042",
      "timestamp": 1646917475,
      "ems": null
    },
    {
      "latitude": 50.88765,
      "longitude": 6.959,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 352,
      "squawk": "7042",
      "timestamp": 1646917482,
      "ems": null
    },
    {
      "latitude": 50.890396,
      "longitude": 6.958389,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 351,
      "squawk": "7042",
      "timestamp": 1646917488,
      "ems": null
    },
    {
      "latitude": 50.892975,
      "longitude": 6.95776,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 351,
      "squawk": "7042",
      "timestamp": 1646917494,
      "ems": null
    },
    {
      "latitude": 50.895515,
      "longitude": 6.957245,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "7042",
      "timestamp": 1646917500,
      "ems": null
    },
    {
      "latitude": 50.898376,
      "longitude": 6.956647,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 351,
      "squawk": "7042",
      "timestamp": 1646917506,
      "ems": null
    },
    {
      "latitude": 50.901196,
      "longitude": 6.955948,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 350,
      "squawk": "7042",
      "timestamp": 1646917512,
      "ems": null
    },
    {
      "latitude": 50.903988,
      "longitude": 6.955185,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 349,
      "squawk": "7042",
      "timestamp": 1646917518,
      "ems": null
    },
    {
      "latitude": 50.906643,
      "longitude": 6.954346,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 348,
      "squawk": "7042",
      "timestamp": 1646917524,
      "ems": null
    },
    {
      "latitude": 50.909481,
      "longitude": 6.953506,
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
      "heading": 351,
      "squawk": "7042",
      "timestamp": 1646917530,
      "ems": null
    },
    {
      "latitude": 50.912476,
      "longitude": 6.95301,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 354,
      "squawk": "7042",
      "timestamp": 1646917536,
      "ems": null
    },
    {
      "latitude": 50.915161,
      "longitude": 6.952591,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 354,
      "squawk": "7042",
      "timestamp": 1646917542,
      "ems": null
    },
    {
      "latitude": 50.91774,
      "longitude": 6.952193,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 355,
      "squawk": "7042",
      "timestamp": 1646917548,
      "ems": null
    },
    {
      "latitude": 50.91925,
      "longitude": 6.95197,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 354,
      "squawk": "7042",
      "timestamp": 1646917551,
      "ems": null
    },
    {
      "latitude": 50.921906,
      "longitude": 6.951451,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 351,
      "squawk": "7042",
      "timestamp": 1646917557,
      "ems": null
    },
    {
      "latitude": 50.923214,
      "longitude": 6.951065,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 348,
      "squawk": "7042",
      "timestamp": 1646917560,
      "ems": null
    },
    {
      "latitude": 50.925915,
      "longitude": 6.950302,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 353,
      "squawk": "7042",
      "timestamp": 1646917566,
      "ems": null
    },
    {
      "latitude": 50.928566,
      "longitude": 6.949997,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 356,
      "squawk": "7042",
      "timestamp": 1646917572,
      "ems": null
    },
    {
      "latitude": 50.931335,
      "longitude": 6.949669,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 354,
      "squawk": "7042",
      "timestamp": 1646917578,
      "ems": null
    },
    {
      "latitude": 50.934174,
      "longitude": 6.949298,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 356,
      "squawk": "7042",
      "timestamp": 1646917584,
      "ems": null
    },
    {
      "latitude": 50.935364,
      "longitude": 6.949158,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 355,
      "squawk": "7042",
      "timestamp": 1646917587,
      "ems": null
    },
    {
      "latitude": 50.93676,
      "longitude": 6.949005,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 355,
      "squawk": "7042",
      "timestamp": 1646917590,
      "ems": null
    },
    {
      "latitude": 50.93811,
      "longitude": 6.948776,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 355,
      "squawk": "7042",
      "timestamp": 1646917593,
      "ems": null
    },
    {
      "latitude": 50.940811,
      "longitude": 6.948333,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 356,
      "squawk": "7042",
      "timestamp": 1646917599,
      "ems": null
    },
    {
      "latitude": 50.942368,
      "longitude": 6.948555,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 10,
      "squawk": "7042",
      "timestamp": 1646917602,
      "ems": null
    },
    {
      "latitude": 50.943512,
      "longitude": 6.949298,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 26,
      "squawk": "7042",
      "timestamp": 1646917605,
      "ems": null
    },
    {
      "latitude": 50.944519,
      "longitude": 6.950337,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 39,
      "squawk": "7042",
      "timestamp": 1646917608,
      "ems": null
    },
    {
      "latitude": 50.945232,
      "longitude": 6.951523,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 52,
      "squawk": "7042",
      "timestamp": 1646917611,
      "ems": null
    },
    {
      "latitude": 50.945801,
      "longitude": 6.95301,
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
      "heading": 63,
      "squawk": "7042",
      "timestamp": 1646917614,
      "ems": null
    },
    {
      "latitude": 50.946163,
      "longitude": 6.954422,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 75,
      "squawk": "7042",
      "timestamp": 1646917617,
      "ems": null
    },
    {
      "latitude": 50.946259,
      "longitude": 6.955904,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 86,
      "squawk": "7042",
      "timestamp": 1646917620,
      "ems": null
    },
    {
      "latitude": 50.946163,
      "longitude": 6.95755,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 99,
      "squawk": "7042",
      "timestamp": 1646917623,
      "ems": null
    },
    {
      "latitude": 50.94593,
      "longitude": 6.958771,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 111,
      "squawk": "7042",
      "timestamp": 1646917626,
      "ems": null
    },
    {
      "latitude": 50.945511,
      "longitude": 6.960068,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 120,
      "squawk": "7042",
      "timestamp": 1646917629,
      "ems": null
    },
    {
      "latitude": 50.944977,
      "longitude": 6.961175,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 132,
      "squawk": "7042",
      "timestamp": 1646917632,
      "ems": null
    },
    {
      "latitude": 50.944256,
      "longitude": 6.962128,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 147,
      "squawk": "7042",
      "timestamp": 1646917635,
      "ems": null
    },
    {
      "latitude": 50.943558,
      "longitude": 6.96266,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 160,
      "squawk": "7042",
      "timestamp": 1646917638,
      "ems": null
    },
    {
      "latitude": 50.942627,
      "longitude": 6.963043,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 168,
      "squawk": "7042",
      "timestamp": 1646917641,
      "ems": null
    },
    {
      "latitude": 50.941742,
      "longitude": 6.963272,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 172,
      "squawk": "7042",
      "timestamp": 1646917644,
      "ems": null
    },
    {
      "latitude": 50.940716,
      "longitude": 6.963272,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 186,
      "squawk": "7042",
      "timestamp": 1646917647,
      "ems": null
    },
    {
      "latitude": 50.939972,
      "longitude": 6.962891,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 199,
      "squawk": "7042",
      "timestamp": 1646917650,
      "ems": null
    },
    {
      "latitude": 50.939117,
      "longitude": 6.962214,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 214,
      "squawk": "7042",
      "timestamp": 1646917653,
      "ems": null
    },
    {
      "latitude": 50.938339,
      "longitude": 6.961101,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 227,
      "squawk": "7042",
      "timestamp": 1646917656,
      "ems": null
    },
    {
      "latitude": 50.937698,
      "longitude": 6.959691,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 239,
      "squawk": "7042",
      "timestamp": 1646917659,
      "ems": null
    },
    {
      "latitude": 50.937286,
      "longitude": 6.957909,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 253,
      "squawk": "7042",
      "timestamp": 1646917662,
      "ems": null
    },
    {
      "latitude": 50.937134,
      "longitude": 6.955948,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 269,
      "squawk": "7042",
      "timestamp": 1646917665,
      "ems": null
    },
    {
      "latitude": 50.937271,
      "longitude": 6.953964,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 283,
      "squawk": "7042",
      "timestamp": 1646917668,
      "ems": null
    },
    {
      "latitude": 50.937744,
      "longitude": 6.952044,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 290,
      "squawk": "7042",
      "timestamp": 1646917671,
      "ems": null
    },
    {
      "latitude": 50.938431,
      "longitude": 6.950411,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 311,
      "squawk": "7042",
      "timestamp": 1646917674,
      "ems": null
    },
    {
      "latitude": 50.939438,
      "longitude": 6.94915,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 324,
      "squawk": "7042",
      "timestamp": 1646917677,
      "ems": null
    },
    {
      "latitude": 50.940628,
      "longitude": 6.948259,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 340,
      "squawk": "7042",
      "timestamp": 1646917680,
      "ems": null
    },
    {
      "latitude": 50.941879,
      "longitude": 6.947708,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 349,
      "squawk": "7042",
      "timestamp": 1646917683,
      "ems": null
    },
    {
      "latitude": 50.943237,
      "longitude": 6.947442,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 353,
      "squawk": "7042",
      "timestamp": 1646917686,
      "ems": null
    },
    {
      "latitude": 50.944489,
      "longitude": 6.94725,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 354,
      "squawk": "7042",
      "timestamp": 1646917689,
      "ems": null
    },
    {
      "latitude": 50.945343,
      "longitude": 6.947145,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 355,
      "squawk": "7042",
      "timestamp": 1646917692,
      "ems": null
    },
    {
      "latitude": 50.947327,
      "longitude": 6.946869,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 357,
      "squawk": "7042",
      "timestamp": 1646917695,
      "ems": null
    },
    {
      "latitude": 50.948547,
      "longitude": 6.946848,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 357,
      "squawk": "7042",
      "timestamp": 1646917698,
      "ems": null
    },
    {
      "latitude": 50.950058,
      "longitude": 6.946626,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 354,
      "squawk": "7042",
      "timestamp": 1646917701,
      "ems": null
    },
    {
      "latitude": 50.951519,
      "longitude": 6.946259,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 348,
      "squawk": "7042",
      "timestamp": 1646917704,
      "ems": null
    },
    {
      "latitude": 50.95285,
      "longitude": 6.945735,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 345,
      "squawk": "7042",
      "timestamp": 1646917707,
      "ems": null
    },
    {
      "latitude": 50.955196,
      "longitude": 6.944351,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1646917713,
      "ems": null
    },
    {
      "latitude": 50.956238,
      "longitude": 6.943508,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1646917716,
      "ems": null
    },
    {
      "latitude": 50.957428,
      "longitude": 6.942543,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1646917719,
      "ems": null
    },
    {
      "latitude": 50.958546,
      "longitude": 6.941757,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "squawk": "7042",
      "timestamp": 1646917722,
      "ems": null
    },
    {
      "latitude": 50.959763,
      "longitude": 6.940761,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1646917725,
      "ems": null
    },
    {
      "latitude": 50.960815,
      "longitude": 6.939945,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1646917728,
      "ems": null
    },
    {
      "latitude": 50.961868,
      "longitude": 6.939128,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "squawk": "7440",
      "timestamp": 1646917731,
      "ems": null
    },
    {
      "latitude": 50.963013,
      "longitude": 6.938312,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 334,
      "squawk": "7440",
      "timestamp": 1646917734,
      "ems": null
    },
    {
      "latitude": 50.963928,
      "longitude": 6.937569,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 333,
      "squawk": "7440",
      "timestamp": 1646917737,
      "ems": null
    },
    {
      "latitude": 50.965302,
      "longitude": 6.936456,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 331,
      "squawk": "7440",
      "timestamp": 1646917740,
      "ems": null
    },
    {
      "latitude": 50.967579,
      "longitude": 6.934586,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 331,
      "squawk": "7440",
      "timestamp": 1646917746,
      "ems": null
    },
    {
      "latitude": 50.969719,
      "longitude": 6.932602,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 329,
      "squawk": "7440",
      "timestamp": 1646917752,
      "ems": null
    },
    {
      "latitude": 50.972141,
      "longitude": 6.930313,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 328,
      "squawk": "7440",
      "timestamp": 1646917758,
      "ems": null
    },
    {
      "latitude": 50.973026,
      "longitude": 6.929398,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 324,
      "squawk": "7440",
      "timestamp": 1646917761,
      "ems": null
    },
    {
      "latitude": 50.974094,
      "longitude": 6.928024,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "7440",
      "timestamp": 1646917764,
      "ems": null
    },
    {
      "latitude": 50.975052,
      "longitude": 6.926805,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 321,
      "squawk": "7440",
      "timestamp": 1646917767,
      "ems": null
    },
    {
      "latitude": 50.976013,
      "longitude": 6.925618,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 322,
      "squawk": "7440",
      "timestamp": 1646917770,
      "ems": null
    },
    {
      "latitude": 50.976982,
      "longitude": 6.924438,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 323,
      "squawk": "7440",
      "timestamp": 1646917773,
      "ems": null
    },
    {
      "latitude": 50.9781,
      "longitude": 6.923065,
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
      "heading": 323,
      "squawk": "7042",
      "timestamp": 1646917776,
      "ems": null
    },
    {
      "latitude": 50.979031,
      "longitude": 6.921921,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 321,
      "squawk": "7042",
      "timestamp": 1646917779,
      "ems": null
    },
    {
      "latitude": 50.979961,
      "longitude": 6.920776,
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
      "heading": 319,
      "squawk": "7042",
      "timestamp": 1646917782,
      "ems": null
    },
    {
      "latitude": 50.980984,
      "longitude": 6.919327,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 318,
      "squawk": "7042",
      "timestamp": 1646917785,
      "ems": null
    },
    {
      "latitude": 50.981964,
      "longitude": 6.91803,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "squawk": "7042",
      "timestamp": 1646917788,
      "ems": null
    },
    {
      "latitude": 50.982925,
      "longitude": 6.916636,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 317,
      "squawk": "7042",
      "timestamp": 1646917791,
      "ems": null
    },
    {
      "latitude": 50.983963,
      "longitude": 6.915054,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 315,
      "squawk": "7042",
      "timestamp": 1646917794,
      "ems": null
    },
    {
      "latitude": 50.984848,
      "longitude": 6.913741,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "squawk": "7042",
      "timestamp": 1646917797,
      "ems": null
    },
    {
      "latitude": 50.985825,
      "longitude": 6.911926,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 311,
      "squawk": "7042",
      "timestamp": 1646917800,
      "ems": null
    },
    {
      "latitude": 50.986664,
      "longitude": 6.910553,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 313,
      "squawk": "7042",
      "timestamp": 1646917803,
      "ems": null
    },
    {
      "latitude": 50.98764,
      "longitude": 6.908951,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 314,
      "squawk": "7042",
      "timestamp": 1646917806,
      "ems": null
    },
    {
      "latitude": 50.988621,
      "longitude": 6.907272,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 311,
      "squawk": "7042",
      "timestamp": 1646917809,
      "ems": null
    },
    {
      "latitude": 50.989552,
      "longitude": 6.905594,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 310,
      "squawk": "7042",
      "timestamp": 1646917812,
      "ems": null
    },
    {
      "latitude": 50.990482,
      "longitude": 6.903839,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 311,
      "squawk": "7042",
      "timestamp": 1646917815,
      "ems": null
    },
    {
      "latitude": 50.991367,
      "longitude": 6.902084,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 309,
      "squawk": "7042",
      "timestamp": 1646917818,
      "ems": null
    },
    {
      "latitude": 50.992218,
      "longitude": 6.900453,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 309,
      "squawk": "7042",
      "timestamp": 1646917821,
      "ems": null
    },
    {
      "latitude": 50.993225,
      "longitude": 6.898375,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 306,
      "squawk": "7042",
      "timestamp": 1646917824,
      "ems": null
    },
    {
      "latitude": 50.994003,
      "longitude": 6.896742,
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
      "heading": 307,
      "squawk": "7042",
      "timestamp": 1646917827,
      "ems": null
    },
    {
      "latitude": 50.995926,
      "longitude": 6.893401,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 317,
      "squawk": "7042",
      "timestamp": 1646917833,
      "ems": null
    },
    {
      "latitude": 50.997185,
      "longitude": 6.892166,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 329,
      "squawk": "7042",
      "timestamp": 1646917836,
      "ems": null
    },
    {
      "latitude": 50.998394,
      "longitude": 6.891251,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 339,
      "squawk": "7042",
      "timestamp": 1646917839,
      "ems": null
    },
    {
      "latitude": 50.999744,
      "longitude": 6.890564,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 342,
      "squawk": "7042",
      "timestamp": 1646917842,
      "ems": null
    },
    {
      "latitude": 51.001053,
      "longitude": 6.889913,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 342,
      "squawk": "7042",
      "timestamp": 1646917845,
      "ems": null
    },
    {
      "latitude": 51.002518,
      "longitude": 6.88917,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 343,
      "squawk": "7042",
      "timestamp": 1646917848,
      "ems": null
    },
    {
      "latitude": 51.003891,
      "longitude": 6.888576,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 343,
      "squawk": "7042",
      "timestamp": 1646917851,
      "ems": null
    },
    {
      "latitude": 51.00531,
      "longitude": 6.887908,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 344,
      "squawk": "7042",
      "timestamp": 1646917854,
      "ems": null
    },
    {
      "latitude": 51.006775,
      "longitude": 6.88736,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 347,
      "squawk": "7042",
      "timestamp": 1646917857,
      "ems": null
    },
    {
      "latitude": 51.008148,
      "longitude": 6.886795,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 346,
      "squawk": "7042",
      "timestamp": 1646917860,
      "ems": null
    },
    {
      "latitude": 51.009567,
      "longitude": 6.886275,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 346,
      "squawk": "7042",
      "timestamp": 1646917863,
      "ems": null
    },
    {
      "latitude": 51.011013,
      "longitude": 6.885681,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 345,
      "squawk": "7042",
      "timestamp": 1646917866,
      "ems": null
    },
    {
      "latitude": 51.013779,
      "longitude": 6.884568,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1646917872,
      "ems": null
    },
    {
      "latitude": 51.016525,
      "longitude": 6.883306,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1646917878,
      "ems": null
    },
    {
      "latitude": 51.019318,
      "longitude": 6.882044,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1646917884,
      "ems": null
    },
    {
      "latitude": 51.022137,
      "longitude": 6.881104,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1646917890,
      "ems": null
    },
    {
      "latitude": 51.024994,
      "longitude": 6.880114,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1646917896,
      "ems": null
    },
    {
      "latitude": 51.027786,
      "longitude": 6.879223,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1646917902,
      "ems": null
    },
    {
      "latitude": 51.03075,
      "longitude": 6.878281,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1646917908,
      "ems": null
    },
    {
      "latitude": 51.032272,
      "longitude": 6.877887,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1646917911,
      "ems": null
    },
    {
      "latitude": 51.035263,
      "longitude": 6.877136,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1646917917,
      "ems": null
    },
    {
      "latitude": 51.038059,
      "longitude": 6.876297,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1646917923,
      "ems": null
    },
    {
      "latitude": 51.041039,
      "longitude": 6.87561,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1646917929,
      "ems": null
    },
    {
      "latitude": 51.043922,
      "longitude": 6.875,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1646917935,
      "ems": null
    },
    {
      "latitude": 51.047012,
      "longitude": 6.874769,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1646917942,
      "ems": null
    },
    {
      "latitude": 51.048347,
      "longitude": 6.874847,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1646917944,
      "ems": null
    },
    {
      "latitude": 51.049603,
      "longitude": 6.875076,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1646917947,
      "ems": null
    },
    {
      "latitude": 51.050766,
      "longitude": 6.875288,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1646917951,
      "ems": null
    },
    {
      "latitude": 51.052002,
      "longitude": 6.875511,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1646917953,
      "ems": null
    },
    {
      "latitude": 51.053234,
      "longitude": 6.875381,
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1646917957,
      "ems": null
    },
    {
      "latitude": 51.054428,
      "longitude": 6.874472,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1646917960,
      "ems": null
    },
    {
      "latitude": 51.055344,
      "longitude": 6.872913,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1646917962,
      "ems": null
    },
    {
      "latitude": 51.05584,
      "longitude": 6.871109,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1646917966,
      "ems": null
    },
    {
      "latitude": 51.056026,
      "longitude": 6.868744,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1646917969,
      "ems": null
    },
    {
      "latitude": 51.056076,
      "longitude": 6.866826,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1646917972,
      "ems": null
    },
    {
      "latitude": 51.056072,
      "longitude": 6.864853,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1646917974,
      "ems": null
    },
    {
      "latitude": 51.056122,
      "longitude": 6.86264,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1646917978,
      "ems": null
    },
    {
      "latitude": 51.056213,
      "longitude": 6.860886,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1646917980,
      "ems": null
    },
    {
      "latitude": 51.056355,
      "longitude": 6.858902,
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1646917984,
      "ems": null
    },
    {
      "latitude": 51.056587,
      "longitude": 6.857224,
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1646917987,
      "ems": null
    },
    {
      "latitude": 51.056957,
      "longitude": 6.855392,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1646917990,
      "ems": null
    },
    {
      "latitude": 51.057312,
      "longitude": 6.853761,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1646917993,
      "ems": null
    },
    {
      "latitude": 51.057938,
      "longitude": 6.851959,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1646917996,
      "ems": null
    },
    {
      "latitude": 51.05864,
      "longitude": 6.850495,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1646917998,
      "ems": null
    },
    {
      "latitude": 51.05928,
      "longitude": 6.849605,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1646918001,
      "ems": null
    },
    {
      "latitude": 51.060402,
      "longitude": 6.84845,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1646918004,
      "ems": null
    },
    {
      "latitude": 51.06208,
      "longitude": 6.847687,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1646918008,
      "ems": null
    },
    {
      "latitude": 51.063309,
      "longitude": 6.847674,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1646918011,
      "ems": null
    },
    {
      "latitude": 51.064453,
      "longitude": 6.84812,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1646918014,
      "ems": null
    },
    {
      "latitude": 51.06543,
      "longitude": 6.849213,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1646918017,
      "ems": null
    },
    {
      "latitude": 51.066101,
      "longitude": 6.850495,
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1646918020,
      "ems": null
    },
    {
      "latitude": 51.066422,
      "longitude": 6.85198,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1646918023,
      "ems": null
    },
    {
      "latitude": 51.06636,
      "longitude": 6.853714,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1646918026,
      "ems": null
    },
    {
      "latitude": 51.06636,
      "longitude": 6.855087,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1646918029,
      "ems": null
    },
    {
      "latitude": 51.06636,
      "longitude": 6.856689,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1646918032,
      "ems": null
    },
    {
      "latitude": 51.066376,
      "longitude": 6.858215,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1646918035,
      "ems": null
    },
    {
      "latitude": 51.06636,
      "longitude": 6.859894,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1646918038,
      "ems": null
    },
    {
      "latitude": 51.066422,
      "longitude": 6.861185,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1646918040,
      "ems": null
    },
    {
      "latitude": 51.066925,
      "longitude": 6.862818,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1646918044,
      "ems": null
    },
    {
      "latitude": 51.067841,
      "longitude": 6.863931,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1646918047,
      "ems": null
    },
    {
      "latitude": 51.068924,
      "longitude": 6.864319,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1646918050,
      "ems": null
    },
    {
      "latitude": 51.069946,
      "longitude": 6.86409,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1646918052,
      "ems": null
    },
    {
      "latitude": 51.071182,
      "longitude": 6.863189,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1646918056,
      "ems": null
    },
    {
      "latitude": 51.071995,
      "longitude": 6.861877,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1646918059,
      "ems": null
    },
    {
      "latitude": 51.072552,
      "longitude": 6.860199,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1646918062,
      "ems": null
    },
    {
      "latitude": 51.072784,
      "longitude": 6.858512,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1646918065,
      "ems": null
    },
    {
      "latitude": 51.072876,
      "longitude": 6.856434,
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1646918068,
      "ems": null
    },
    {
      "latitude": 51.073067,
      "longitude": 6.854477,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1646918071,
      "ems": null
    },
    {
      "latitude": 51.073608,
      "longitude": 6.852648,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1646918074,
      "ems": null
    },
    {
      "latitude": 51.074276,
      "longitude": 6.851273,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1646918076,
      "ems": null
    },
    {
      "latitude": 51.075764,
      "longitude": 6.849518,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1646918080,
      "ems": null
    },
    {
      "latitude": 51.076721,
      "longitude": 6.848937,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1646918083,
      "ems": null
    },
    {
      "latitude": 51.078049,
      "longitude": 6.848714,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1646918086,
      "ems": null
    },
    {
      "latitude": 51.079536,
      "longitude": 6.848984,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1646918089,
      "ems": null
    },
    {
      "latitude": 51.0807,
      "longitude": 6.849442,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1646918092,
      "ems": null
    },
    {
      "latitude": 51.082123,
      "longitude": 6.849976,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1646918096,
      "ems": null
    },
    {
      "latitude": 51.083176,
      "longitude": 6.850421,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1646918098,
      "ems": null
    },
    {
      "latitude": 51.084549,
      "longitude": 6.851015,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1646918102,
      "ems": null
    },
    {
      "latitude": 51.085648,
      "longitude": 6.851683,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1646918105,
      "ems": null
    },
    {
      "latitude": 51.086658,
      "longitude": 6.852417,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1646918108,
      "ems": null
    },
    {
      "latitude": 51.087681,
      "longitude": 6.853256,
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1646918111,
      "ems": null
    },
    {
      "latitude": 51.088577,
      "longitude": 6.853984,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1646918114,
      "ems": null
    },
    {
      "latitude": 51.08963,
      "longitude": 6.854801,
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1646918117,
      "ems": null
    },
    {
      "latitude": 51.090637,
      "longitude": 6.855766,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1646918119,
      "ems": null
    },
    {
      "latitude": 51.091267,
      "longitude": 6.856308,
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1646918123,
      "ems": null
    },
    {
      "latitude": 51.092697,
      "longitude": 6.857622,
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1646918125,
      "ems": null
    },
    {
      "latitude": 51.09375,
      "longitude": 6.858512,
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1646918128,
      "ems": null
    },
    {
      "latitude": 51.096481,
      "longitude": 6.860657,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1646918136,
      "ems": null
    },
    {
      "latitude": 51.099136,
      "longitude": 6.863022,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1646918144,
      "ems": null
    },
    {
      "latitude": 51.101349,
      "longitude": 6.865045,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1646918149,
      "ems": null
    },
    {
      "latitude": 51.102951,
      "longitude": 6.866531,
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1646918156,
      "ems": null
    },
    {
      "latitude": 51.104874,
      "longitude": 6.868311,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1646918161,
      "ems": null
    },
    {
      "latitude": 51.107468,
      "longitude": 6.870499,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1646918168,
      "ems": null
    },
    {
      "latitude": 51.109955,
      "longitude": 6.872542,
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1646918175,
      "ems": null
    },
    {
      "latitude": 51.11174,
      "longitude": 6.873804,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1646918179,
      "ems": null
    },
    {
      "latitude": 51.112885,
      "longitude": 6.874695,
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1646918182,
      "ems": null
    },
    {
      "latitude": 51.115009,
      "longitude": 6.876297,
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1646918188,
      "ems": null
    },
    {
      "latitude": 51.117096,
      "longitude": 6.878258,
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1646918194,
      "ems": null
    },
    {
      "latitude": 51.119293,
      "longitude": 6.880188,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1646918200,
      "ems": null
    },
    {
      "latitude": 51.120361,
      "longitude": 6.881104,
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1646918203,
      "ems": null
    },
    {
      "latitude": 51.121246,
      "longitude": 6.881943,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1646918206,
      "ems": null
    },
    {
      "latitude": 51.121948,
      "longitude": 6.882638,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 32,
      "squawk": "7003",
      "timestamp": 1646918208,
      "ems": null
    },
    {
      "latitude": 51.122551,
      "longitude": 6.88324,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 29,
      "squawk": "7003",
      "timestamp": 1646918211,
      "ems": null
    },
    {
      "latitude": 51.124649,
      "longitude": 6.885087,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 28,
      "squawk": "7003",
      "timestamp": 1646918218,
      "ems": null
    },
    {
      "latitude": 51.127625,
      "longitude": 6.887463,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 25,
      "squawk": "7003",
      "timestamp": 1646918224,
      "ems": null
    },
    {
      "latitude": 51.129906,
      "longitude": 6.889267,
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
      "heading": 25,
      "squawk": "7003",
      "timestamp": 1646918230,
      "ems": null
    },
    {
      "latitude": 51.132111,
      "longitude": 6.891026,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 27,
      "squawk": "7003",
      "timestamp": 1646918236,
      "ems": null
    },
    {
      "latitude": 51.134399,
      "longitude": 6.893105,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 31,
      "squawk": "7003",
      "timestamp": 1646918242,
      "ems": null
    },
    {
      "latitude": 51.135353,
      "longitude": 6.894073,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 33,
      "squawk": "7003",
      "timestamp": 1646918245,
      "ems": null
    },
    {
      "latitude": 51.136322,
      "longitude": 6.895109,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 34,
      "squawk": "7003",
      "timestamp": 1646918248,
      "ems": null
    },
    {
      "latitude": 51.13829,
      "longitude": 6.896965,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 26,
      "squawk": "7003",
      "timestamp": 1646918254,
      "ems": null
    },
    {
      "latitude": 51.140533,
      "longitude": 6.89882,
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
      "heading": 27,
      "squawk": "7003",
      "timestamp": 1646918260,
      "ems": null
    },
    {
      "latitude": 51.142799,
      "longitude": 6.900635,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 25,
      "squawk": "7003",
      "timestamp": 1646918266,
      "ems": null
    },
    {
      "latitude": 51.144894,
      "longitude": 6.902237,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 25,
      "squawk": "7003",
      "timestamp": 1646918272,
      "ems": null
    },
    {
      "latitude": 51.146061,
      "longitude": 6.903076,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 25,
      "squawk": "7003",
      "timestamp": 1646918275,
      "ems": null
    },
    {
      "latitude": 51.147217,
      "longitude": 6.904016,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 25,
      "squawk": "7003",
      "timestamp": 1646918278,
      "ems": null
    },
    {
      "latitude": 51.14827,
      "longitude": 6.904759,
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
      "heading": 24,
      "squawk": "7003",
      "timestamp": 1646918281,
      "ems": null
    },
    {
      "latitude": 51.150715,
      "longitude": 6.906586,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 26,
      "squawk": "7003",
      "timestamp": 1646918287,
      "ems": null
    },
    {
      "latitude": 51.153088,
      "longitude": 6.908569,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 27,
      "squawk": "7003",
      "timestamp": 1646918293,
      "ems": null
    },
    {
      "latitude": 51.155556,
      "longitude": 6.910477,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 26,
      "squawk": "7003",
      "timestamp": 1646918299,
      "ems": null
    },
    {
      "latitude": 51.157791,
      "longitude": 6.912256,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 25,
      "squawk": "7003",
      "timestamp": 1646918305,
      "ems": null
    },
    {
      "latitude": 51.160164,
      "longitude": 6.914139,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 27,
      "squawk": "7003",
      "timestamp": 1646918311,
      "ems": null
    },
    {
      "latitude": 51.16254,
      "longitude": 6.916046,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 26,
      "squawk": "7003",
      "timestamp": 1646918317,
      "ems": null
    },
    {
      "latitude": 51.164867,
      "longitude": 6.918106,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 29,
      "squawk": "7003",
      "timestamp": 1646918323,
      "ems": null
    },
    {
      "latitude": 51.16713,
      "longitude": 6.920273,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 34,
      "squawk": "7003",
      "timestamp": 1646918329,
      "ems": null
    },
    {
      "latitude": 51.16832,
      "longitude": 6.921535,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 34,
      "squawk": "7003",
      "timestamp": 1646918332,
      "ems": null
    },
    {
      "latitude": 51.170498,
      "longitude": 6.923523,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 26,
      "squawk": "7003",
      "timestamp": 1646918338,
      "ems": null
    },
    {
      "latitude": 51.172897,
      "longitude": 6.925469,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 26,
      "squawk": "7003",
      "timestamp": 1646918344,
      "ems": null
    },
    {
      "latitude": 51.175434,
      "longitude": 6.92749,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 26,
      "squawk": "7003",
      "timestamp": 1646918350,
      "ems": null
    },
    {
      "latitude": 51.177841,
      "longitude": 6.929404,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 27,
      "squawk": "7003",
      "timestamp": 1646918356,
      "ems": null
    },
    {
      "latitude": 51.179214,
      "longitude": 6.930592,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 28,
      "squawk": "7003",
      "timestamp": 1646918359,
      "ems": null
    },
    {
      "latitude": 51.18158,
      "longitude": 6.932602,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 26,
      "squawk": "7003",
      "timestamp": 1646918365,
      "ems": null
    },
    {
      "latitude": 51.184021,
      "longitude": 6.934526,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 28,
      "squawk": "7003",
      "timestamp": 1646918371,
      "ems": null
    },
    {
      "latitude": 51.186356,
      "longitude": 6.93653,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 27,
      "squawk": "7003",
      "timestamp": 1646918377,
      "ems": null
    },
    {
      "latitude": 51.188793,
      "longitude": 6.9384,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 25,
      "squawk": "7003",
      "timestamp": 1646918383,
      "ems": null
    },
    {
      "latitude": 51.190052,
      "longitude": 6.939163,
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
      "heading": 16,
      "squawk": "7003",
      "timestamp": 1646918386,
      "ems": null
    },
    {
      "latitude": 51.191483,
      "longitude": 6.939574,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 8,
      "squawk": "7003",
      "timestamp": 1646918390,
      "ems": null
    },
    {
      "latitude": 51.192657,
      "longitude": 6.939774,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 2,
      "squawk": "7003",
      "timestamp": 1646918392,
      "ems": null
    },
    {
      "latitude": 51.193909,
      "longitude": 6.939796,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "squawk": "7003",
      "timestamp": 1646918395,
      "ems": null
    },
    {
      "latitude": 51.195099,
      "longitude": 6.939574,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 353,
      "squawk": "7003",
      "timestamp": 1646918398,
      "ems": null
    },
    {
      "latitude": 51.196701,
      "longitude": 6.939128,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "7003",
      "timestamp": 1646918401,
      "ems": null
    },
    {
      "latitude": 51.198166,
      "longitude": 6.938609,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 346,
      "squawk": "7003",
      "timestamp": 1646918404,
      "ems": null
    },
    {
      "latitude": 51.199455,
      "longitude": 6.938095,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 346,
      "squawk": "7003",
      "timestamp": 1646918407,
      "ems": null
    },
    {
      "latitude": 51.200806,
      "longitude": 6.937637,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 347,
      "squawk": "7003",
      "timestamp": 1646918410,
      "ems": null
    },
    {
      "latitude": 51.202106,
      "longitude": 6.93718,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 347,
      "squawk": "7003",
      "timestamp": 1646918413,
      "ems": null
    },
    {
      "latitude": 51.203411,
      "longitude": 6.936646,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "squawk": "7003",
      "timestamp": 1646918416,
      "ems": null
    },
    {
      "latitude": 51.204807,
      "longitude": 6.936188,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "squawk": "7003",
      "timestamp": 1646918420,
      "ems": null
    },
    {
      "latitude": 51.206085,
      "longitude": 6.935713,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 347,
      "squawk": "7003",
      "timestamp": 1646918422,
      "ems": null
    },
    {
      "latitude": 51.207367,
      "longitude": 6.935268,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 347,
      "squawk": "7003",
      "timestamp": 1646918425,
      "ems": null
    },
    {
      "latitude": 51.208672,
      "longitude": 6.934738,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 345,
      "squawk": "7003",
      "timestamp": 1646918428,
      "ems": null
    },
    {
      "latitude": 51.21114,
      "longitude": 6.933594,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 343,
      "squawk": "7003",
      "timestamp": 1646918435,
      "ems": null
    },
    {
      "latitude": 51.212395,
      "longitude": 6.932907,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 341,
      "squawk": "7003",
      "timestamp": 1646918437,
      "ems": null
    },
    {
      "latitude": 51.213654,
      "longitude": 6.93222,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 339,
      "squawk": "7003",
      "timestamp": 1646918440,
      "ems": null
    },
    {
      "latitude": 51.214966,
      "longitude": 6.931408,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 338,
      "squawk": "7003",
      "timestamp": 1646918443,
      "ems": null
    },
    {
      "latitude": 51.216202,
      "longitude": 6.930592,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 337,
      "squawk": "7003",
      "timestamp": 1646918446,
      "ems": null
    },
    {
      "latitude": 51.217518,
      "longitude": 6.929703,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 337,
      "squawk": "7003",
      "timestamp": 1646918449,
      "ems": null
    },
    {
      "latitude": 51.218719,
      "longitude": 6.928958,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 336,
      "squawk": "7003",
      "timestamp": 1646918452,
      "ems": null
    },
    {
      "latitude": 51.21991,
      "longitude": 6.928068,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 333,
      "squawk": "7003",
      "timestamp": 1646918456,
      "ems": null
    },
    {
      "latitude": 51.221054,
      "longitude": 6.927028,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 331,
      "squawk": "7003",
      "timestamp": 1646918458,
      "ems": null
    },
    {
      "latitude": 51.222359,
      "longitude": 6.925888,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "7003",
      "timestamp": 1646918462,
      "ems": null
    },
    {
      "latitude": 51.223343,
      "longitude": 6.925024,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 331,
      "squawk": "7003",
      "timestamp": 1646918464,
      "ems": null
    },
    {
      "latitude": 51.224579,
      "longitude": 6.923911,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 330,
      "squawk": "7003",
      "timestamp": 1646918467,
      "ems": null
    },
    {
      "latitude": 51.225769,
      "longitude": 6.922723,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 325,
      "squawk": "7003",
      "timestamp": 1646918470,
      "ems": null
    },
    {
      "latitude": 51.226921,
      "longitude": 6.921387,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "7003",
      "timestamp": 1646918473,
      "ems": null
    },
    {
      "latitude": 51.228104,
      "longitude": 6.920051,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 324,
      "squawk": "7003",
      "timestamp": 1646918477,
      "ems": null
    },
    {
      "latitude": 51.229202,
      "longitude": 6.918788,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 325,
      "squawk": "7003",
      "timestamp": 1646918480,
      "ems": null
    },
    {
      "latitude": 51.230347,
      "longitude": 6.917527,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "7003",
      "timestamp": 1646918482,
      "ems": null
    },
    {
      "latitude": 51.231483,
      "longitude": 6.916122,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 322,
      "squawk": "7003",
      "timestamp": 1646918486,
      "ems": null
    },
    {
      "latitude": 51.232647,
      "longitude": 6.914749,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "7003",
      "timestamp": 1646918489,
      "ems": null
    },
    {
      "latitude": 51.233719,
      "longitude": 6.913376,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 321,
      "squawk": "7003",
      "timestamp": 1646918492,
      "ems": null
    },
    {
      "latitude": 51.234695,
      "longitude": 6.912155,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 321,
      "squawk": "7003",
      "timestamp": 1646918495,
      "ems": null
    },
    {
      "latitude": 51.235931,
      "longitude": 6.910623,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "squawk": "7003",
      "timestamp": 1646918498,
      "ems": null
    },
    {
      "latitude": 51.236931,
      "longitude": 6.909256,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 319,
      "squawk": "7003",
      "timestamp": 1646918501,
      "ems": null
    },
    {
      "latitude": 51.237946,
      "longitude": 6.907802,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 318,
      "squawk": "7003",
      "timestamp": 1646918504,
      "ems": null
    },
    {
      "latitude": 51.239025,
      "longitude": 6.906281,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 318,
      "squawk": "7003",
      "timestamp": 1646918507,
      "ems": null
    },
    {
      "latitude": 51.240093,
      "longitude": 6.904831,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 318,
      "squawk": "7003",
      "timestamp": 1646918510,
      "ems": null
    },
    {
      "latitude": 51.242237,
      "longitude": 6.901779,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 318,
      "squawk": "7003",
      "timestamp": 1646918516,
      "ems": null
    },
    {
      "latitude": 51.2444,
      "longitude": 6.898894,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 321,
      "squawk": "7003",
      "timestamp": 1646918522,
      "ems": null
    },
    {
      "latitude": 51.246658,
      "longitude": 6.896057,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 320,
      "squawk": "7003",
      "timestamp": 1646918528,
      "ems": null
    },
    {
      "latitude": 51.248886,
      "longitude": 6.892882,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 318,
      "squawk": "7003",
      "timestamp": 1646918534,
      "ems": null
    },
    {
      "latitude": 51.251175,
      "longitude": 6.889689,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 318,
      "squawk": "7003",
      "timestamp": 1646918540,
      "ems": null
    },
    {
      "latitude": 51.253326,
      "longitude": 6.886572,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 318,
      "squawk": "7003",
      "timestamp": 1646918546,
      "ems": null
    },
    {
      "latitude": 51.255596,
      "longitude": 6.883316,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 316,
      "squawk": "7003",
      "timestamp": 1646918552,
      "ems": null
    },
    {
      "latitude": 51.257786,
      "longitude": 6.880112,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 318,
      "squawk": "7003",
      "timestamp": 1646918558,
      "ems": null
    },
    {
      "latitude": 51.26025,
      "longitude": 6.876602,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 317,
      "squawk": "7003",
      "timestamp": 1646918564,
      "ems": null
    },
    {
      "latitude": 51.262627,
      "longitude": 6.873322,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 319,
      "squawk": "7003",
      "timestamp": 1646918570,
      "ems": null
    },
    {
      "latitude": 51.264908,
      "longitude": 6.870167,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 318,
      "squawk": "7003",
      "timestamp": 1646918576,
      "ems": null
    },
    {
      "latitude": 51.267235,
      "longitude": 6.866837,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 317,
      "squawk": "7003",
      "timestamp": 1646918582,
      "ems": null
    },
    {
      "latitude": 51.269348,
      "longitude": 6.863708,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 317,
      "squawk": "7003",
      "timestamp": 1646918588,
      "ems": null
    },
    {
      "latitude": 51.271656,
      "longitude": 6.860428,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 318,
      "squawk": "7003",
      "timestamp": 1646918594,
      "ems": null
    },
    {
      "latitude": 51.273972,
      "longitude": 6.85725,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 320,
      "squawk": "7003",
      "timestamp": 1646918600,
      "ems": null
    },
    {
      "latitude": 51.276215,
      "longitude": 6.85443,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 322,
      "squawk": "7003",
      "timestamp": 1646918606,
      "ems": null
    },
    {
      "latitude": 51.277634,
      "longitude": 6.852722,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 324,
      "squawk": "7003",
      "timestamp": 1646918609,
      "ems": null
    },
    {
      "latitude": 51.278732,
      "longitude": 6.851578,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 326,
      "squawk": "7003",
      "timestamp": 1646918612,
      "ems": null
    },
    {
      "latitude": 51.28027,
      "longitude": 6.849899,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 326,
      "squawk": "7003",
      "timestamp": 1646918615,
      "ems": null
    },
    {
      "latitude": 51.281479,
      "longitude": 6.848639,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 327,
      "squawk": "7003",
      "timestamp": 1646918618,
      "ems": null
    },
    {
      "latitude": 51.283016,
      "longitude": 6.847153,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 328,
      "squawk": "7003",
      "timestamp": 1646918621,
      "ems": null
    },
    {
      "latitude": 51.284409,
      "longitude": 6.845819,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 329,
      "squawk": "7003",
      "timestamp": 1646918624,
      "ems": null
    },
    {
      "latitude": 51.285782,
      "longitude": 6.844482,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 328,
      "squawk": "7003",
      "timestamp": 1646918627,
      "ems": null
    },
    {
      "latitude": 51.287067,
      "longitude": 6.843185,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 328,
      "squawk": "7003",
      "timestamp": 1646918630,
      "ems": null
    },
    {
      "latitude": 51.288391,
      "longitude": 6.841959,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 328,
      "squawk": "7003",
      "timestamp": 1646918633,
      "ems": null
    },
    {
      "latitude": 51.290634,
      "longitude": 6.839806,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 327,
      "squawk": "7003",
      "timestamp": 1646918639,
      "ems": null
    },
    {
      "latitude": 51.293816,
      "longitude": 6.836853,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 330,
      "squawk": "7003",
      "timestamp": 1646918644,
      "ems": null
    },
    {
      "latitude": 51.296329,
      "longitude": 6.834488,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 329,
      "squawk": "7003",
      "timestamp": 1646918651,
      "ems": null
    },
    {
      "latitude": 51.298752,
      "longitude": 6.832047,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 326,
      "squawk": "7003",
      "timestamp": 1646918657,
      "ems": null
    },
    {
      "latitude": 51.300613,
      "longitude": 6.829859,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 326,
      "squawk": "7003",
      "timestamp": 1646918662,
      "ems": null
    },
    {
      "latitude": 51.302101,
      "longitude": 6.827774,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 315,
      "squawk": "7003",
      "timestamp": 1646918666,
      "ems": null
    },
    {
      "latitude": 51.303085,
      "longitude": 6.825999,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 311,
      "squawk": "7003",
      "timestamp": 1646918669,
      "ems": null
    },
    {
      "latitude": 51.304012,
      "longitude": 6.824188,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 308,
      "squawk": "7003",
      "timestamp": 1646918672,
      "ems": null
    },
    {
      "latitude": 51.30471,
      "longitude": 6.822586,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 304,
      "squawk": "7003",
      "timestamp": 1646918675,
      "ems": null
    },
    {
      "latitude": 51.305557,
      "longitude": 6.820431,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 301,
      "squawk": "7003",
      "timestamp": 1646918678,
      "ems": null
    },
    {
      "latitude": 51.306519,
      "longitude": 6.817314,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 295,
      "squawk": "7003",
      "timestamp": 1646918683,
      "ems": null
    },
    {
      "latitude": 51.307114,
      "longitude": 6.81427,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 290,
      "squawk": "7003",
      "timestamp": 1646918687,
      "ems": null
    },
    {
      "latitude": 51.307205,
      "longitude": 6.810781,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -1408,
        "ms": -7.2
      },
      "heading": 273,
      "squawk": "7003",
      "timestamp": 1646918691,
      "ems": null
    },
    {
      "latitude": 51.306709,
      "longitude": 6.808701,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 254,
      "squawk": "7003",
      "timestamp": 1646918695,
      "ems": null
    },
    {
      "latitude": 51.305649,
      "longitude": 6.806327,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 249,
      "squawk": "7003",
      "timestamp": 1646918699,
      "ems": null
    },
    {
      "latitude": 51.304897,
      "longitude": 6.804886,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 232,
      "squawk": "7003",
      "timestamp": 1646918702,
      "ems": null
    },
    {
      "latitude": 51.304092,
      "longitude": 6.803135,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 232,
      "squawk": "7003",
      "timestamp": 1646918705,
      "ems": null
    },
    {
      "latitude": 51.303543,
      "longitude": 6.801799,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 235,
      "squawk": "7003",
      "timestamp": 1646918708,
      "ems": null
    },
    {
      "latitude": 51.302811,
      "longitude": 6.80024,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 235,
      "squawk": "7003",
      "timestamp": 1646918711,
      "ems": null
    },
    {
      "latitude": 51.302429,
      "longitude": 6.799622,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 228,
      "squawk": "7003",
      "timestamp": 1646918714,
      "ems": null
    },
    {
      "latitude": 51.301449,
      "longitude": 6.797714,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 231,
      "squawk": "7003",
      "timestamp": 1646918717,
      "ems": null
    },
    {
      "latitude": 51.300705,
      "longitude": 6.796112,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 233,
      "squawk": "7003",
      "timestamp": 1646918720,
      "ems": null
    },
    {
      "latitude": 51.299915,
      "longitude": 6.79451,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 232,
      "squawk": "7003",
      "timestamp": 1646918723,
      "ems": null
    },
    {
      "latitude": 51.299587,
      "longitude": 6.793823,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 232,
      "squawk": "7003",
      "timestamp": 1646918725,
      "ems": null
    },
    {
      "latitude": 51.298874,
      "longitude": 6.792297,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 232,
      "squawk": "7003",
      "timestamp": 1646918729,
      "ems": null
    },
    {
      "latitude": 51.29726,
      "longitude": 6.789017,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 232,
      "squawk": "7003",
      "timestamp": 1646918734,
      "ems": null
    },
    {
      "latitude": 51.282085,
      "longitude": 6.756668,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 236,
      "squawk": "7003",
      "timestamp": 1646918801,
      "ems": null
    },
    {
      "latitude": 51.280643,
      "longitude": 6.753006,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 238,
      "squawk": "7003",
      "timestamp": 1646918808,
      "ems": null
    },
    {
      "latitude": 51.279991,
      "longitude": 6.751328,
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
      "heading": 240,
      "squawk": "7003",
      "timestamp": 1646918814,
      "ems": null
    },
    {
      "latitude": 51.278778,
      "longitude": 6.747894,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 243,
      "squawk": "7003",
      "timestamp": 1646918820,
      "ems": null
    },
    {
      "latitude": 51.277908,
      "longitude": 6.745605,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 237,
      "squawk": "7003",
      "timestamp": 1646918826,
      "ems": null
    },
    {
      "latitude": 51.276352,
      "longitude": 6.742933,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 214,
      "squawk": "7003",
      "timestamp": 1646918834,
      "ems": null
    },
    {
      "latitude": 51.27515,
      "longitude": 6.742249,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 196,
      "squawk": "7003",
      "timestamp": 1646918838,
      "ems": null
    },
    {
      "latitude": 51.273834,
      "longitude": 6.741968,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 235,
      "squawk": "7003",
      "timestamp": 1646918842,
      "ems": null
    },
    {
      "latitude": 51.272598,
      "longitude": 6.742116,
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
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 173,
      "squawk": "7003",
      "timestamp": 1646918846,
      "ems": null
    },
    {
      "latitude": 51.271564,
      "longitude": 6.742401,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 169,
      "squawk": "7003",
      "timestamp": 1646918850,
      "ems": null
    },
    {
      "latitude": 51.270538,
      "longitude": 6.742711,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 167,
      "squawk": "7003",
      "timestamp": 1646918854,
      "ems": null
    },
    {
      "latitude": 51.269608,
      "longitude": 6.743011,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 169,
      "squawk": "7003",
      "timestamp": 1646918858,
      "ems": null
    },
    {
      "latitude": 51.269329,
      "longitude": 6.743088,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 168,
      "squawk": "7003",
      "timestamp": 1646918860,
      "ems": null
    },
    {
      "latitude": 51.267933,
      "longitude": 6.743622,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 164,
      "squawk": "7003",
      "timestamp": 1646918864,
      "ems": null
    },
    {
      "latitude": 51.267513,
      "longitude": 6.743851,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 163,
      "squawk": "7003",
      "timestamp": 1646918865,
      "ems": null
    },
    {
      "latitude": 51.266327,
      "longitude": 6.744269,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 168,
      "squawk": "7003",
      "timestamp": 1646918869,
      "ems": null
    },
    {
      "latitude": 51.266026,
      "longitude": 6.744385,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 172,
      "squawk": "7003",
      "timestamp": 1646918870,
      "ems": null
    },
    {
      "latitude": 51.265411,
      "longitude": 6.744418,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 163,
      "squawk": "7003",
      "timestamp": 1646918872,
      "ems": null
    },
    {
      "latitude": 51.264313,
      "longitude": 6.744418,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 180,
      "squawk": "7003",
      "timestamp": 1646918876,
      "ems": null
    },
    {
      "latitude": 51.263836,
      "longitude": 6.744385,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 180,
      "squawk": "7003",
      "timestamp": 1646918877,
      "ems": null
    },
    {
      "latitude": 51.262531,
      "longitude": 6.744232,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 188,
      "squawk": "7003",
      "timestamp": 1646918881,
      "ems": null
    },
    {
      "latitude": 51.262115,
      "longitude": 6.744156,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 188,
      "squawk": "7003",
      "timestamp": 1646918882,
      "ems": null
    },
    {
      "latitude": 51.261017,
      "longitude": 6.743898,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 188,
      "squawk": "7003",
      "timestamp": 1646918886,
      "ems": null
    },
    {
      "latitude": 51.26067,
      "longitude": 6.743774,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 188,
      "squawk": "7003",
      "timestamp": 1646918887,
      "ems": null
    },
    {
      "latitude": 51.260056,
      "longitude": 6.743675,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 188,
      "squawk": "7003",
      "timestamp": 1646918889,
      "ems": null
    },
    {
      "latitude": 51.258949,
      "longitude": 6.743393,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 186,
      "squawk": "7003",
      "timestamp": 1646918893,
      "ems": null
    },
    {
      "latitude": 51.25795,
      "longitude": 6.743304,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 183,
      "squawk": "7003",
      "timestamp": 1646918897,
      "ems": null
    },
    {
      "latitude": 51.256668,
      "longitude": 6.743082,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 185,
      "squawk": "7003",
      "timestamp": 1646918901,
      "ems": null
    },
    {
      "latitude": 51.254745,
      "longitude": 6.742785,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 187,
      "squawk": "7003",
      "timestamp": 1646918909,
      "ems": null
    },
    {
      "latitude": 51.252045,
      "longitude": 6.742414,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 185,
      "squawk": "7003",
      "timestamp": 1646918917,
      "ems": null
    },
    {
      "latitude": 51.249779,
      "longitude": 6.741562,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 196,
      "squawk": "7003",
      "timestamp": 1646918925,
      "ems": null
    },
    {
      "latitude": 51.248657,
      "longitude": 6.741003,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 197,
      "squawk": "7003",
      "timestamp": 1646918927,
      "ems": null
    },
    {
      "latitude": 51.247684,
      "longitude": 6.740494,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 198,
      "squawk": "7003",
      "timestamp": 1646918931,
      "ems": null
    },
    {
      "latitude": 51.246826,
      "longitude": 6.740038,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 197,
      "squawk": "7003",
      "timestamp": 1646918933,
      "ems": null
    },
    {
      "latitude": 51.246094,
      "longitude": 6.739667,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 198,
      "squawk": "7003",
      "timestamp": 1646918936,
      "ems": null
    },
    {
      "latitude": 51.245171,
      "longitude": 6.73912,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 198,
      "squawk": "7003",
      "timestamp": 1646918938,
      "ems": null
    },
    {
      "latitude": 51.244099,
      "longitude": 6.738663,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 196,
      "squawk": "7003",
      "timestamp": 1646918943,
      "ems": null
    },
    {
      "latitude": 51.24247,
      "longitude": 6.7379,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "7003",
      "timestamp": 1646918947,
      "ems": null
    },
    {
      "latitude": 51.24147,
      "longitude": 6.737514,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 195,
      "squawk": "7003",
      "timestamp": 1646918951,
      "ems": null
    },
    {
      "latitude": 51.238651,
      "longitude": 6.736298,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "7003",
      "timestamp": 1646918959,
      "ems": null
    },
    {
      "latitude": 51.235977,
      "longitude": 6.735213,
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
      "heading": 194,
      "squawk": "7003",
      "timestamp": 1646918967,
      "ems": null
    },
    {
      "latitude": 51.233486,
      "longitude": 6.734314,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 191,
      "squawk": "7003",
      "timestamp": 1646918975,
      "ems": null
    },
    {
      "latitude": 51.230484,
      "longitude": 6.733431,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 189,
      "squawk": "7003",
      "timestamp": 1646918983,
      "ems": null
    },
    {
      "latitude": 51.229385,
      "longitude": 6.733134,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 188,
      "squawk": "7003",
      "timestamp": 1646918987,
      "ems": null
    },
    {
      "latitude": 51.228928,
      "longitude": 6.73306,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 188,
      "squawk": "7003",
      "timestamp": 1646918988,
      "ems": null
    },
    {
      "latitude": 51.226593,
      "longitude": 6.732178,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 196,
      "squawk": "7003",
      "timestamp": 1646918994,
      "ems": null
    },
    {
      "latitude": 51.224545,
      "longitude": 6.731262,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 195,
      "squawk": "7003",
      "timestamp": 1646919001,
      "ems": null
    },
    {
      "latitude": 51.223846,
      "longitude": 6.730957,
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
      "heading": 196,
      "squawk": "7003",
      "timestamp": 1646919004,
      "ems": null
    },
    {
      "latitude": 51.221512,
      "longitude": 6.729868,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 195,
      "squawk": "7003",
      "timestamp": 1646919009,
      "ems": null
    },
    {
      "latitude": 51.220551,
      "longitude": 6.729423,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 194,
      "squawk": "7003",
      "timestamp": 1646919013,
      "ems": null
    },
    {
      "latitude": 51.219498,
      "longitude": 6.729052,
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
      "heading": 195,
      "squawk": "7003",
      "timestamp": 1646919016,
      "ems": null
    },
    {
      "latitude": 51.217484,
      "longitude": 6.727938,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 199,
      "squawk": "7003",
      "timestamp": 1646919022,
      "ems": null
    },
    {
      "latitude": 51.216446,
      "longitude": 6.727295,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 201,
      "squawk": "7003",
      "timestamp": 1646919025,
      "ems": null
    },
    {
      "latitude": 51.215515,
      "longitude": 6.72675,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 200,
      "squawk": "7003",
      "timestamp": 1646919027,
      "ems": null
    },
    {
      "latitude": 51.213326,
      "longitude": 6.725693,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 190,
      "squawk": "7003",
      "timestamp": 1646919034,
      "ems": null
    },
    {
      "latitude": 51.212219,
      "longitude": 6.725489,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 183,
      "squawk": "7003",
      "timestamp": 1646919037,
      "ems": null
    },
    {
      "latitude": 51.211212,
      "longitude": 6.725637,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 172,
      "squawk": "7003",
      "timestamp": 1646919040,
      "ems": null
    },
    {
      "latitude": 51.210205,
      "longitude": 6.726008,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 165,
      "squawk": "7003",
      "timestamp": 1646919043,
      "ems": null
    },
    {
      "latitude": 51.209183,
      "longitude": 6.726456,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 161,
      "squawk": "7003",
      "timestamp": 1646919046,
      "ems": null
    },
    {
      "latitude": 51.208328,
      "longitude": 6.727047,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 155,
      "squawk": "7003",
      "timestamp": 1646919049,
      "ems": null
    },
    {
      "latitude": 51.207417,
      "longitude": 6.727829,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 152,
      "squawk": "7003",
      "timestamp": 1646919052,
      "ems": null
    },
    {
      "latitude": 51.206726,
      "longitude": 6.728384,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 150,
      "squawk": "7003",
      "timestamp": 1646919055,
      "ems": null
    },
    {
      "latitude": 51.205879,
      "longitude": 6.729202,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 147,
      "squawk": "7003",
      "timestamp": 1646919057,
      "ems": null
    },
    {
      "latitude": 51.205135,
      "longitude": 6.729965,
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
      "heading": 145,
      "squawk": "7003",
      "timestamp": 1646919060,
      "ems": null
    },
    {
      "latitude": 51.204254,
      "longitude": 6.730982,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 144,
      "squawk": "7003",
      "timestamp": 1646919064,
      "ems": null
    },
    {
      "latitude": 51.203457,
      "longitude": 6.731873,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 144,
      "squawk": "7003",
      "timestamp": 1646919067,
      "ems": null
    },
    {
      "latitude": 51.202805,
      "longitude": 6.732635,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 145,
      "squawk": "7003",
      "timestamp": 1646919070,
      "ems": null
    },
    {
      "latitude": 51.201874,
      "longitude": 6.733551,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 149,
      "squawk": "7003",
      "timestamp": 1646919073,
      "ems": null
    },
    {
      "latitude": 51.200993,
      "longitude": 6.734238,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 154,
      "squawk": "7003",
      "timestamp": 1646919076,
      "ems": null
    },
    {
      "latitude": 51.199219,
      "longitude": 6.73551,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 154,
      "squawk": "7003",
      "timestamp": 1646919082,
      "ems": null
    },
    {
      "latitude": 51.197544,
      "longitude": 6.736984,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 148,
      "squawk": "7003",
      "timestamp": 1646919087,
      "ems": null
    },
    {
      "latitude": 51.195915,
      "longitude": 6.738739,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 150,
      "squawk": "7003",
      "timestamp": 1646919094,
      "ems": null
    },
    {
      "latitude": 51.194962,
      "longitude": 6.739519,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 150,
      "squawk": "7003",
      "timestamp": 1646919097,
      "ems": null
    },
    {
      "latitude": 51.193314,
      "longitude": 6.741226,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 147,
      "squawk": "7003",
      "timestamp": 1646919103,
      "ems": null
    },
    {
      "latitude": 51.192566,
      "longitude": 6.741943,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 146,
      "squawk": "7003",
      "timestamp": 1646919105,
      "ems": null
    },
    {
      "latitude": 51.191727,
      "longitude": 6.742859,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 146,
      "squawk": "7003",
      "timestamp": 1646919108,
      "ems": null
    },
    {
      "latitude": 51.190052,
      "longitude": 6.744537,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 148,
      "squawk": "7003",
      "timestamp": 1646919115,
      "ems": null
    },
    {
      "latitude": 51.188416,
      "longitude": 6.746199,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 144,
      "squawk": "7003",
      "timestamp": 1646919121,
      "ems": null
    },
    {
      "latitude": 51.187683,
      "longitude": 6.74709,
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
      "heading": 144,
      "squawk": "7003",
      "timestamp": 1646919124,
      "ems": null
    },
    {
      "latitude": 51.185898,
      "longitude": 6.748797,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 150,
      "squawk": "7003",
      "timestamp": 1646919130,
      "ems": null
    },
    {
      "latitude": 51.185024,
      "longitude": 6.749344,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 159,
      "squawk": "7003",
      "timestamp": 1646919133,
      "ems": null
    },
    {
      "latitude": 51.184433,
      "longitude": 6.749614,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 166,
      "squawk": "7003",
      "timestamp": 1646919136,
      "ems": null
    },
    {
      "latitude": 51.183243,
      "longitude": 6.75006,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 170,
      "squawk": "7003",
      "timestamp": 1646919139,
      "ems": null
    },
    {
      "latitude": 51.182045,
      "longitude": 6.750336,
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
      "heading": 170,
      "squawk": "7003",
      "timestamp": 1646919142,
      "ems": null
    },
    {
      "latitude": 51.181252,
      "longitude": 6.750565,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 171,
      "squawk": "7003",
      "timestamp": 1646919145,
      "ems": null
    },
    {
      "latitude": 51.180367,
      "longitude": 6.750717,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 173,
      "squawk": "7003",
      "timestamp": 1646919148,
      "ems": null
    },
    {
      "latitude": 51.179535,
      "longitude": 6.750876,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 173,
      "squawk": "7003",
      "timestamp": 1646919150,
      "ems": null
    },
    {
      "latitude": 51.178024,
      "longitude": 6.751173,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 172,
      "squawk": "7003",
      "timestamp": 1646919154,
      "ems": null
    },
    {
      "latitude": 51.177109,
      "longitude": 6.75148,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 169,
      "squawk": "7003",
      "timestamp": 1646919157,
      "ems": null
    },
    {
      "latitude": 51.17514,
      "longitude": 6.752806,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 150,
      "squawk": "7003",
      "timestamp": 1646919163,
      "ems": null
    },
    {
      "latitude": 51.174637,
      "longitude": 6.753325,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 149,
      "squawk": "7003",
      "timestamp": 1646919166,
      "ems": null
    },
    {
      "latitude": 51.173676,
      "longitude": 6.754142,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 153,
      "squawk": "7003",
      "timestamp": 1646919169,
      "ems": null
    },
    {
      "latitude": 51.172531,
      "longitude": 6.755033,
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
      "heading": 153,
      "squawk": "7003",
      "timestamp": 1646919172,
      "ems": null
    },
    {
      "latitude": 51.171616,
      "longitude": 6.755775,
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
      "heading": 153,
      "squawk": "7003",
      "timestamp": 1646919175,
      "ems": null
    },
    {
      "latitude": 51.1707,
      "longitude": 6.756444,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 153,
      "squawk": "7003",
      "timestamp": 1646919178,
      "ems": null
    },
    {
      "latitude": 51.169739,
      "longitude": 6.757334,
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
      "heading": 151,
      "squawk": "7003",
      "timestamp": 1646919181,
      "ems": null
    },
    {
      "latitude": 51.169418,
      "longitude": 6.757557,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 149,
      "squawk": "7003",
      "timestamp": 1646919184,
      "ems": null
    },
    {
      "latitude": 51.168358,
      "longitude": 6.758575,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 146,
      "squawk": "7003",
      "timestamp": 1646919187,
      "ems": null
    },
    {
      "latitude": 51.167267,
      "longitude": 6.759784,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 146,
      "squawk": "7003",
      "timestamp": 1646919190,
      "ems": null
    },
    {
      "latitude": 51.165756,
      "longitude": 6.761269,
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
      "heading": 151,
      "squawk": "7003",
      "timestamp": 1646919196,
      "ems": null
    },
    {
      "latitude": 51.163925,
      "longitude": 6.762827,
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
      "heading": 149,
      "squawk": "7003",
      "timestamp": 1646919202,
      "ems": null
    },
    {
      "latitude": 51.161865,
      "longitude": 6.764757,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 151,
      "squawk": "7003",
      "timestamp": 1646919208,
      "ems": null
    },
    {
      "latitude": 51.160351,
      "longitude": 6.765976,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1646919214,
      "ems": null
    },
    {
      "latitude": 51.159485,
      "longitude": 6.766687,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1646919217,
      "ems": null
    },
    {
      "latitude": 51.158661,
      "longitude": 6.767281,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1646919220,
      "ems": null
    },
    {
      "latitude": 51.157104,
      "longitude": 6.768692,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1646919226,
      "ems": null
    },
    {
      "latitude": 51.156418,
      "longitude": 6.769508,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1646919229,
      "ems": null
    },
    {
      "latitude": 51.155743,
      "longitude": 6.770325,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1646919232,
      "ems": null
    },
    {
      "latitude": 51.154999,
      "longitude": 6.77124,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1646919235,
      "ems": null
    },
    {
      "latitude": 51.154251,
      "longitude": 6.772003,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1646919238,
      "ems": null
    },
    {
      "latitude": 51.152664,
      "longitude": 6.773517,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1646919244,
      "ems": null
    },
    {
      "latitude": 51.151039,
      "longitude": 6.774902,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1646919250,
      "ems": null
    },
    {
      "latitude": 51.149414,
      "longitude": 6.776634,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1646919256,
      "ems": null
    },
    {
      "latitude": 51.148361,
      "longitude": 6.777971,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1646919262,
      "ems": null
    },
    {
      "latitude": 51.147308,
      "longitude": 6.77953,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1646919265,
      "ems": null
    },
    {
      "latitude": 51.146572,
      "longitude": 6.780624,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1646919268,
      "ems": null
    },
    {
      "latitude": 51.14592,
      "longitude": 6.781387,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1646919270,
      "ems": null
    },
    {
      "latitude": 51.144836,
      "longitude": 6.782053,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1646919274,
      "ems": null
    },
    {
      "latitude": 51.143646,
      "longitude": 6.782127,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1646919277,
      "ems": null
    },
    {
      "latitude": 51.142708,
      "longitude": 6.781998,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1646919280,
      "ems": null
    },
    {
      "latitude": 51.141724,
      "longitude": 6.781682,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1646919283,
      "ems": null
    },
    {
      "latitude": 51.141083,
      "longitude": 6.781385,
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1646919286,
      "ems": null
    },
    {
      "latitude": 51.139915,
      "longitude": 6.780624,
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1646919289,
      "ems": null
    },
    {
      "latitude": 51.138424,
      "longitude": 6.779251,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1646919294,
      "ems": null
    },
    {
      "latitude": 51.137215,
      "longitude": 6.778107,
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1646919298,
      "ems": null
    },
    {
      "latitude": 51.136322,
      "longitude": 6.777377,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1646919302,
      "ems": null
    },
    {
      "latitude": 51.134701,
      "longitude": 6.775818,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1646919306,
      "ems": null
    },
    {
      "latitude": 51.134094,
      "longitude": 6.775131,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1646919310,
      "ems": null
    },
    {
      "latitude": 51.132095,
      "longitude": 6.773224,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1646919314,
      "ems": null
    },
    {
      "latitude": 51.130791,
      "longitude": 6.771851,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1646919318,
      "ems": null
    },
    {
      "latitude": 51.12822,
      "longitude": 6.769137,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1646919326,
      "ems": null
    },
    {
      "latitude": 51.125343,
      "longitude": 6.766968,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1646919334,
      "ems": null
    },
    {
      "latitude": 51.123917,
      "longitude": 6.766316,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1646919338,
      "ems": null
    },
    {
      "latitude": 51.122452,
      "longitude": 6.765722,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1646919342,
      "ems": null
    },
    {
      "latitude": 51.120968,
      "longitude": 6.76506,
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1646919346,
      "ems": null
    },
    {
      "latitude": 51.119991,
      "longitude": 6.764603,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1646919348,
      "ems": null
    },
    {
      "latitude": 51.118927,
      "longitude": 6.764238,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1646919351,
      "ems": null
    },
    {
      "latitude": 51.11792,
      "longitude": 6.763866,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1646919354,
      "ems": null
    },
    {
      "latitude": 51.11673,
      "longitude": 6.763382,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1646919358,
      "ems": null
    },
    {
      "latitude": 51.115799,
      "longitude": 6.762772,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1646919360,
      "ems": null
    },
    {
      "latitude": 51.114853,
      "longitude": 6.762011,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1646919363,
      "ems": null
    },
    {
      "latitude": 51.1138,
      "longitude": 6.760941,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1646919367,
      "ems": null
    },
    {
      "latitude": 51.112885,
      "longitude": 6.760081,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1646919369,
      "ems": null
    },
    {
      "latitude": 51.111935,
      "longitude": 6.759109,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1646919372,
      "ems": null
    },
    {
      "latitude": 51.110962,
      "longitude": 6.758077,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1646919375,
      "ems": null
    },
    {
      "latitude": 51.109982,
      "longitude": 6.756973,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1646919379,
      "ems": null
    },
    {
      "latitude": 51.108994,
      "longitude": 6.755775,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1646919382,
      "ems": null
    },
    {
      "latitude": 51.10812,
      "longitude": 6.754684,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1646919385,
      "ems": null
    },
    {
      "latitude": 51.107281,
      "longitude": 6.75354,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1646919388,
      "ems": null
    },
    {
      "latitude": 51.106396,
      "longitude": 6.752548,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1646919390,
      "ems": null
    },
    {
      "latitude": 51.104675,
      "longitude": 6.751175,
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1646919397,
      "ems": null
    },
    {
      "latitude": 51.103836,
      "longitude": 6.750717,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1646919399,
      "ems": null
    },
    {
      "latitude": 51.102718,
      "longitude": 6.750259,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1646919403,
      "ems": null
    },
    {
      "latitude": 51.101807,
      "longitude": 6.749837,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1646919406,
      "ems": null
    },
    {
      "latitude": 51.100983,
      "longitude": 6.749243,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1646919408,
      "ems": null
    },
    {
      "latitude": 51.100067,
      "longitude": 6.7485,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1646919411,
      "ems": null
    },
    {
      "latitude": 51.099182,
      "longitude": 6.747818,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1646919414,
      "ems": null
    },
    {
      "latitude": 51.098282,
      "longitude": 6.747016,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1646919417,
      "ems": null
    },
    {
      "latitude": 51.09639,
      "longitude": 6.745148,
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1646919424,
      "ems": null
    },
    {
      "latitude": 51.095505,
      "longitude": 6.744232,
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1646919427,
      "ems": null
    },
    {
      "latitude": 51.09462,
      "longitude": 6.743379,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1646919430,
      "ems": null
    },
    {
      "latitude": 51.093842,
      "longitude": 6.742636,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1646919432,
      "ems": null
    },
    {
      "latitude": 51.092941,
      "longitude": 6.741791,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1646919435,
      "ems": null
    },
    {
      "latitude": 51.092056,
      "longitude": 6.741003,
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1646919439,
      "ems": null
    },
    {
      "latitude": 51.090546,
      "longitude": 6.739519,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1646919445,
      "ems": null
    },
    {
      "latitude": 51.08844,
      "longitude": 6.737663,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1646919450,
      "ems": null
    },
    {
      "latitude": 51.086517,
      "longitude": 6.735955,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1646919457,
      "ems": null
    },
    {
      "latitude": 51.085007,
      "longitude": 6.734619,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1646919462,
      "ems": null
    },
    {
      "latitude": 51.083084,
      "longitude": 6.732986,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1646919468,
      "ems": null
    },
    {
      "latitude": 51.081207,
      "longitude": 6.731502,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1646919474,
      "ems": null
    },
    {
      "latitude": 51.079258,
      "longitude": 6.729736,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1646919480,
      "ems": null
    },
    {
      "latitude": 51.078278,
      "longitude": 6.728745,
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1646919484,
      "ems": null
    },
    {
      "latitude": 51.076462,
      "longitude": 6.726913,
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1646919490,
      "ems": null
    },
    {
      "latitude": 51.074615,
      "longitude": 6.72534,
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1646919496,
      "ems": null
    },
    {
      "latitude": 51.072693,
      "longitude": 6.723855,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1646919502,
      "ems": null
    },
    {
      "latitude": 51.071777,
      "longitude": 6.723187,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1646919505,
      "ems": null
    },
    {
      "latitude": 51.070724,
      "longitude": 6.722519,
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
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1646919508,
      "ems": null
    },
    {
      "latitude": 51.069809,
      "longitude": 6.721851,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1646919511,
      "ems": null
    },
    {
      "latitude": 51.068874,
      "longitude": 6.721268,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1646919514,
      "ems": null
    },
    {
      "latitude": 51.067898,
      "longitude": 6.720657,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1646919517,
      "ems": null
    },
    {
      "latitude": 51.066826,
      "longitude": 6.720047,
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1646919520,
      "ems": null
    },
    {
      "latitude": 51.065945,
      "longitude": 6.719666,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1646919523,
      "ems": null
    },
    {
      "latitude": 51.064919,
      "longitude": 6.719131,
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
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1646919526,
      "ems": null
    },
    {
      "latitude": 51.063904,
      "longitude": 6.718585,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1646919529,
      "ems": null
    },
    {
      "latitude": 51.062943,
      "longitude": 6.718065,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1646919532,
      "ems": null
    },
    {
      "latitude": 51.062027,
      "longitude": 6.71762,
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
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1646919535,
      "ems": null
    },
    {
      "latitude": 51.061008,
      "longitude": 6.717224,
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
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1646919538,
      "ems": null
    },
    {
      "latitude": 51.059891,
      "longitude": 6.716766,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1646919541,
      "ems": null
    },
    {
      "latitude": 51.05896,
      "longitude": 6.716581,
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
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1646919544,
      "ems": null
    },
    {
      "latitude": 51.057888,
      "longitude": 6.716385,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1646919547,
      "ems": null
    },
    {
      "latitude": 51.056911,
      "longitude": 6.716232,
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
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1646919550,
      "ems": null
    },
    {
      "latitude": 51.055981,
      "longitude": 6.716003,
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
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1646919553,
      "ems": null
    },
    {
      "latitude": 51.055069,
      "longitude": 6.715838,
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
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1646919556,
      "ems": null
    },
    {
      "latitude": 51.053978,
      "longitude": 6.715622,
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
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1646919559,
      "ems": null
    },
    {
      "latitude": 51.053009,
      "longitude": 6.715393,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1646919562,
      "ems": null
    },
    {
      "latitude": 51.052094,
      "longitude": 6.715245,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1646919565,
      "ems": null
    },
    {
      "latitude": 51.051544,
      "longitude": 6.71517,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1646919568,
      "ems": null
    },
    {
      "latitude": 51.050396,
      "longitude": 6.715012,
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
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1646919570,
      "ems": null
    },
    {
      "latitude": 51.048157,
      "longitude": 6.714502,
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
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1646919577,
      "ems": null
    },
    {
      "latitude": 51.046097,
      "longitude": 6.713908,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1646919583,
      "ems": null
    },
    {
      "latitude": 51.044952,
      "longitude": 6.71324,
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1646919586,
      "ems": null
    },
    {
      "latitude": 51.043972,
      "longitude": 6.712494,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1646919589,
      "ems": null
    },
    {
      "latitude": 51.043121,
      "longitude": 6.71183,
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1646919592,
      "ems": null
    },
    {
      "latitude": 51.04216,
      "longitude": 6.711088,
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
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1646919595,
      "ems": null
    },
    {
      "latitude": 51.041199,
      "longitude": 6.710271,
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
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1646919598,
      "ems": null
    },
    {
      "latitude": 51.040291,
      "longitude": 6.709518,
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1646919601,
      "ems": null
    },
    {
      "latitude": 51.039413,
      "longitude": 6.708712,
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1646919604,
      "ems": null
    },
    {
      "latitude": 51.038361,
      "longitude": 6.707747,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1646919607,
      "ems": null
    },
    {
      "latitude": 51.037453,
      "longitude": 6.706924,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1646919610,
      "ems": null
    },
    {
      "latitude": 51.036522,
      "longitude": 6.706009,
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1646919613,
      "ems": null
    },
    {
      "latitude": 51.035591,
      "longitude": 6.705017,
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1646919616,
      "ems": null
    },
    {
      "latitude": 51.034607,
      "longitude": 6.703961,
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1646919619,
      "ems": null
    },
    {
      "latitude": 51.033737,
      "longitude": 6.703071,
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1646919622,
      "ems": null
    },
    {
      "latitude": 51.031914,
      "longitude": 6.701355,
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1646919628,
      "ems": null
    },
    {
      "latitude": 51.029911,
      "longitude": 6.699677,
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
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1646919634,
      "ems": null
    },
    {
      "latitude": 51.028198,
      "longitude": 6.69832,
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
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1646919640,
      "ems": null
    },
    {
      "latitude": 51.027073,
      "longitude": 6.697464,
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1646919643,
      "ems": null
    },
    {
      "latitude": 51.026142,
      "longitude": 6.696701,
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1646919646,
      "ems": null
    },
    {
      "latitude": 51.025314,
      "longitude": 6.696019,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1646919649,
      "ems": null
    },
    {
      "latitude": 51.024078,
      "longitude": 6.695128,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1646919652,
      "ems": null
    },
    {
      "latitude": 51.023209,
      "longitude": 6.694459,
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
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1646919655,
      "ems": null
    },
    {
      "latitude": 51.022137,
      "longitude": 6.693726,
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1646919658,
      "ems": null
    },
    {
      "latitude": 51.021114,
      "longitude": 6.693115,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1646919661,
      "ems": null
    },
    {
      "latitude": 51.019016,
      "longitude": 6.691818,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1646919667,
      "ems": null
    },
    {
      "latitude": 51.016785,
      "longitude": 6.690292,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1646919674,
      "ems": null
    },
    {
      "latitude": 51.015713,
      "longitude": 6.689682,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1646919677,
      "ems": null
    },
    {
      "latitude": 51.013824,
      "longitude": 6.688595,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1646919683,
      "ems": null
    },
    {
      "latitude": 51.011719,
      "longitude": 6.687334,
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1646919689,
      "ems": null
    },
    {
      "latitude": 51.009754,
      "longitude": 6.686325,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1646919695,
      "ems": null
    },
    {
      "latitude": 51.008698,
      "longitude": 6.685774,
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1646919698,
      "ems": null
    },
    {
      "latitude": 51.007919,
      "longitude": 6.685403,
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
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1646919701,
      "ems": null
    },
    {
      "latitude": 51.005859,
      "longitude": 6.68429,
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1646919707,
      "ems": null
    },
    {
      "latitude": 51.003708,
      "longitude": 6.683399,
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
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1646919713,
      "ems": null
    },
    {
      "latitude": 51.002747,
      "longitude": 6.683177,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1646919716,
      "ems": null
    },
    {
      "latitude": 51.001694,
      "longitude": 6.682879,
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
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1646919719,
      "ems": null
    },
    {
      "latitude": 51.000629,
      "longitude": 6.682587,
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
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1646919722,
      "ems": null
    },
    {
      "latitude": 50.999557,
      "longitude": 6.682205,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1646919725,
      "ems": null
    },
    {
      "latitude": 50.998535,
      "longitude": 6.6819,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1646919728,
      "ems": null
    },
    {
      "latitude": 50.997559,
      "longitude": 6.681671,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1646919731,
      "ems": null
    },
    {
      "latitude": 50.996567,
      "longitude": 6.681543,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1646919734,
      "ems": null
    },
    {
      "latitude": 50.995651,
      "longitude": 6.681469,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1646919737,
      "ems": null
    },
    {
      "latitude": 50.994999,
      "longitude": 6.681442,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1646919740,
      "ems": null
    },
    {
      "latitude": 50.993649,
      "longitude": 6.68129,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1646919743,
      "ems": null
    },
    {
      "latitude": 50.992485,
      "longitude": 6.68129,
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
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1646919746,
      "ems": null
    },
    {
      "latitude": 50.991646,
      "longitude": 6.681213,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1646919749,
      "ems": null
    },
    {
      "latitude": 50.989506,
      "longitude": 6.68045,
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
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1646919755,
      "ems": null
    },
    {
      "latitude": 50.988693,
      "longitude": 6.67991,
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
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1646919757,
      "ems": null
    },
    {
      "latitude": 50.987732,
      "longitude": 6.679019,
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1646919761,
      "ems": null
    },
    {
      "latitude": 50.986294,
      "longitude": 6.677322,
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1646919765,
      "ems": null
    },
    {
      "latitude": 50.985359,
      "longitude": 6.676331,
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
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1646919769,
      "ems": null
    },
    {
      "latitude": 50.983963,
      "longitude": 6.674728,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1646919773,
      "ems": null
    },
    {
      "latitude": 50.982834,
      "longitude": 6.673526,
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1646919777,
      "ems": null
    },
    {
      "latitude": 50.98159,
      "longitude": 6.672134,
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
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1646919781,
      "ems": null
    },
    {
      "latitude": 50.980362,
      "longitude": 6.670631,
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
      "heading": 217,
      "squawk": "7742",
      "timestamp": 1646919785,
      "ems": null
    },
    {
      "latitude": 50.979263,
      "longitude": 6.669295,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1646919789,
      "ems": null
    },
    {
      "latitude": 50.977982,
      "longitude": 6.667662,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 220,
      "squawk": "7742",
      "timestamp": 1646919793,
      "ems": null
    },
    {
      "latitude": 50.97702,
      "longitude": 6.666326,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 221,
      "squawk": "7742",
      "timestamp": 1646919797,
      "ems": null
    },
    {
      "latitude": 50.975967,
      "longitude": 6.664916,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 222,
      "squawk": "7742",
      "timestamp": 1646919801,
      "ems": null
    },
    {
      "latitude": 50.974606,
      "longitude": 6.66275,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 224,
      "squawk": "7742",
      "timestamp": 1646919805,
      "ems": null
    },
    {
      "latitude": 50.973541,
      "longitude": 6.661055,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1646919809,
      "ems": null
    },
    {
      "latitude": 50.972466,
      "longitude": 6.659164,
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
      "heading": 227,
      "squawk": "7742",
      "timestamp": 1646919813,
      "ems": null
    },
    {
      "latitude": 50.97171,
      "longitude": 6.657789,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1646919816,
      "ems": null
    },
    {
      "latitude": 50.970932,
      "longitude": 6.656304,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 229,
      "squawk": "7742",
      "timestamp": 1646919818,
      "ems": null
    },
    {
      "latitude": 50.970139,
      "longitude": 6.654892,
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
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1646919821,
      "ems": null
    },
    {
      "latitude": 50.969421,
      "longitude": 6.653483,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1646919824,
      "ems": null
    },
    {
      "latitude": 50.968597,
      "longitude": 6.651851,
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
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1646919828,
      "ems": null
    },
    {
      "latitude": 50.967819,
      "longitude": 6.650366,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 229,
      "squawk": "7742",
      "timestamp": 1646919830,
      "ems": null
    },
    {
      "latitude": 50.967159,
      "longitude": 6.64917,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1646919833,
      "ems": null
    },
    {
      "latitude": 50.966274,
      "longitude": 6.647415,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 231,
      "squawk": "7742",
      "timestamp": 1646919837,
      "ems": null
    },
    {
      "latitude": 50.964737,
      "longitude": 6.64444,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 231,
      "squawk": "7742",
      "timestamp": 1646919843,
      "ems": null
    },
    {
      "latitude": 50.963379,
      "longitude": 6.641606,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 232,
      "squawk": "7742",
      "timestamp": 1646919848,
      "ems": null
    },
    {
      "latitude": 50.961868,
      "longitude": 6.638563,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 233,
      "squawk": "7742",
      "timestamp": 1646919854,
      "ems": null
    },
    {
      "latitude": 50.960407,
      "longitude": 6.635437,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 232,
      "squawk": "7742",
      "timestamp": 1646919861,
      "ems": null
    },
    {
      "latitude": 50.958965,
      "longitude": 6.632462,
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
      "heading": 233,
      "squawk": "7742",
      "timestamp": 1646919866,
      "ems": null
    },
    {
      "latitude": 50.957611,
      "longitude": 6.629433,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 233,
      "squawk": "7742",
      "timestamp": 1646919873,
      "ems": null
    },
    {
      "latitude": 50.956192,
      "longitude": 6.626537,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 232,
      "squawk": "7742",
      "timestamp": 1646919878,
      "ems": null
    },
    {
      "latitude": 50.954681,
      "longitude": 6.623383,
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
      "heading": 233,
      "squawk": "7742",
      "timestamp": 1646919884,
      "ems": null
    },
    {
      "latitude": 50.953171,
      "longitude": 6.620005,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 234,
      "squawk": "7742",
      "timestamp": 1646919891,
      "ems": null
    },
    {
      "latitude": 50.951797,
      "longitude": 6.616898,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 234,
      "squawk": "7742",
      "timestamp": 1646919896,
      "ems": null
    },
    {
      "latitude": 50.950333,
      "longitude": 6.613695,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 233,
      "squawk": "7742",
      "timestamp": 1646919902,
      "ems": null
    },
    {
      "latitude": 50.94873,
      "longitude": 6.610207,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 234,
      "squawk": "7742",
      "timestamp": 1646919909,
      "ems": null
    },
    {
      "latitude": 50.947357,
      "longitude": 6.60694,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 237,
      "squawk": "7742",
      "timestamp": 1646919914,
      "ems": null
    },
    {
      "latitude": 50.94593,
      "longitude": 6.603394,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 237,
      "squawk": "7742",
      "timestamp": 1646919921,
      "ems": null
    },
    {
      "latitude": 50.944675,
      "longitude": 6.600189,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 239,
      "squawk": "7742",
      "timestamp": 1646919926,
      "ems": null
    },
    {
      "latitude": 50.94397,
      "longitude": 6.598329,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 238,
      "squawk": "7742",
      "timestamp": 1646919930,
      "ems": null
    },
    {
      "latitude": 50.942627,
      "longitude": 6.595001,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 236,
      "squawk": "7742",
      "timestamp": 1646919936,
      "ems": null
    },
    {
      "latitude": 50.941277,
      "longitude": 6.591797,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 236,
      "squawk": "7742",
      "timestamp": 1646919942,
      "ems": null
    },
    {
      "latitude": 50.939926,
      "longitude": 6.588669,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 234,
      "squawk": "7742",
      "timestamp": 1646919948,
      "ems": null
    },
    {
      "latitude": 50.939209,
      "longitude": 6.58712,
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
      "heading": 233,
      "squawk": "7742",
      "timestamp": 1646919950,
      "ems": null
    },
    {
      "latitude": 50.938435,
      "longitude": 6.585541,
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
      "heading": 231,
      "squawk": "7742",
      "timestamp": 1646919954,
      "ems": null
    },
    {
      "latitude": 50.937645,
      "longitude": 6.584015,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 228,
      "squawk": "7742",
      "timestamp": 1646919957,
      "ems": null
    },
    {
      "latitude": 50.93676,
      "longitude": 6.582565,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 226,
      "squawk": "7742",
      "timestamp": 1646919960,
      "ems": null
    },
    {
      "latitude": 50.936062,
      "longitude": 6.581268,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 229,
      "squawk": "7742",
      "timestamp": 1646919962,
      "ems": null
    },
    {
      "latitude": 50.935226,
      "longitude": 6.579697,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1646919965,
      "ems": null
    },
    {
      "latitude": 50.93364,
      "longitude": 6.576614,
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
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1646919971,
      "ems": null
    },
    {
      "latitude": 50.932068,
      "longitude": 6.573313,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 234,
      "squawk": "7742",
      "timestamp": 1646919978,
      "ems": null
    },
    {
      "latitude": 50.930786,
      "longitude": 6.570418,
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
      "heading": 234,
      "squawk": "7742",
      "timestamp": 1646919983,
      "ems": null
    },
    {
      "latitude": 50.930012,
      "longitude": 6.568756,
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
      "heading": 235,
      "squawk": "7742",
      "timestamp": 1646919987,
      "ems": null
    },
    {
      "latitude": 50.929321,
      "longitude": 6.566929,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1646919990,
      "ems": null
    },
    {
      "latitude": 50.928772,
      "longitude": 6.565222,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1646919993,
      "ems": null
    },
    {
      "latitude": 50.928177,
      "longitude": 6.563143,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 245,
      "squawk": "7742",
      "timestamp": 1646919996,
      "ems": null
    },
    {
      "latitude": 50.927582,
      "longitude": 6.561213,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1646919999,
      "ems": null
    },
    {
      "latitude": 50.927078,
      "longitude": 6.559654,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1646920001,
      "ems": null
    },
    {
      "latitude": 50.92638,
      "longitude": 6.557693,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1646920005,
      "ems": null
    },
    {
      "latitude": 50.924973,
      "longitude": 6.554458,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 235,
      "squawk": "7742",
      "timestamp": 1646920011,
      "ems": null
    },
    {
      "latitude": 50.923782,
      "longitude": 6.551044,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 245,
      "squawk": "7742",
      "timestamp": 1646920017,
      "ems": null
    },
    {
      "latitude": 50.92326,
      "longitude": 6.549225,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1646920019,
      "ems": null
    },
    {
      "latitude": 50.92218,
      "longitude": 6.545476,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1646920026,
      "ems": null
    },
    {
      "latitude": 50.921074,
      "longitude": 6.541748,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1646920031,
      "ems": null
    },
    {
      "latitude": 50.919891,
      "longitude": 6.538127,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1646920038,
      "ems": null
    },
    {
      "latitude": 50.919113,
      "longitude": 6.536345,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 231,
      "squawk": "7742",
      "timestamp": 1646920041,
      "ems": null
    },
    {
      "latitude": 50.918289,
      "longitude": 6.535009,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 224,
      "squawk": "7742",
      "timestamp": 1646920043,
      "ems": null
    },
    {
      "latitude": 50.917301,
      "longitude": 6.533508,
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
      "heading": 221,
      "squawk": "7742",
      "timestamp": 1646920047,
      "ems": null
    },
    {
      "latitude": 50.916458,
      "longitude": 6.532337,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 223,
      "squawk": "7742",
      "timestamp": 1646920050,
      "ems": null
    },
    {
      "latitude": 50.915531,
      "longitude": 6.530914,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 226,
      "squawk": "7742",
      "timestamp": 1646920053,
      "ems": null
    },
    {
      "latitude": 50.914696,
      "longitude": 6.529465,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 228,
      "squawk": "7742",
      "timestamp": 1646920056,
      "ems": null
    },
    {
      "latitude": 50.913895,
      "longitude": 6.527883,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1646920059,
      "ems": null
    },
    {
      "latitude": 50.913113,
      "longitude": 6.526184,
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
      "heading": 235,
      "squawk": "7742",
      "timestamp": 1646920062,
      "ems": null
    },
    {
      "latitude": 50.91243,
      "longitude": 6.524617,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 238,
      "squawk": "7742",
      "timestamp": 1646920065,
      "ems": null
    },
    {
      "latitude": 50.911854,
      "longitude": 6.522903,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1646920068,
      "ems": null
    },
    {
      "latitude": 50.911251,
      "longitude": 6.521149,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1646920071,
      "ems": null
    },
    {
      "latitude": 50.910645,
      "longitude": 6.519124,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 245,
      "squawk": "7742",
      "timestamp": 1646920074,
      "ems": null
    },
    {
      "latitude": 50.910141,
      "longitude": 6.517268,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1646920077,
      "ems": null
    },
    {
      "latitude": 50.909622,
      "longitude": 6.515656,
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
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1646920080,
      "ems": null
    },
    {
      "latitude": 50.908951,
      "longitude": 6.513779,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 237,
      "squawk": "7742",
      "timestamp": 1646920083,
      "ems": null
    },
    {
      "latitude": 50.908409,
      "longitude": 6.512451,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 235,
      "squawk": "7742",
      "timestamp": 1646920085,
      "ems": null
    },
    {
      "latitude": 50.906593,
      "longitude": 6.509705,
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
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1646920092,
      "ems": null
    },
    {
      "latitude": 50.905518,
      "longitude": 6.508954,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 198,
      "squawk": "7740",
      "timestamp": 1646920095,
      "ems": null
    },
    {
      "latitude": 50.904373,
      "longitude": 6.508657,
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
      "heading": 184,
      "squawk": "7740",
      "timestamp": 1646920098,
      "ems": null
    },
    {
      "latitude": 50.903229,
      "longitude": 6.50888,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 170,
      "squawk": "7740",
      "timestamp": 1646920101,
      "ems": null
    },
    {
      "latitude": 50.902176,
      "longitude": 6.509399,
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
      "heading": 157,
      "squawk": "7740",
      "timestamp": 1646920104,
      "ems": null
    },
    {
      "latitude": 50.901287,
      "longitude": 6.510162,
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
      "heading": 148,
      "squawk": "7740",
      "timestamp": 1646920107,
      "ems": null
    },
    {
      "latitude": 50.900391,
      "longitude": 6.511181,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 140,
      "squawk": "7740",
      "timestamp": 1646920110,
      "ems": null
    },
    {
      "latitude": 50.899704,
      "longitude": 6.512222,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 133,
      "squawk": "7740",
      "timestamp": 1646920113,
      "ems": null
    },
    {
      "latitude": 50.89896,
      "longitude": 6.513519,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 126,
      "squawk": "7740",
      "timestamp": 1646920116,
      "ems": null
    },
    {
      "latitude": 50.898376,
      "longitude": 6.515041,
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
      "heading": 121,
      "squawk": "7740",
      "timestamp": 1646920119,
      "ems": null
    },
    {
      "latitude": 50.897888,
      "longitude": 6.516571,
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
      "heading": 115,
      "squawk": "7740",
      "timestamp": 1646920122,
      "ems": null
    },
    {
      "latitude": 50.897415,
      "longitude": 6.518085,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 114,
      "squawk": "7740",
      "timestamp": 1646920125,
      "ems": null
    },
    {
      "latitude": 50.897049,
      "longitude": 6.519569,
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
      "heading": 109,
      "squawk": "7740",
      "timestamp": 1646920128,
      "ems": null
    },
    {
      "latitude": 50.896729,
      "longitude": 6.521202,
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
      "heading": 105,
      "squawk": "7740",
      "timestamp": 1646920131,
      "ems": null
    },
    {
      "latitude": 50.896492,
      "longitude": 6.522903,
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
      "heading": 100,
      "squawk": "7740",
      "timestamp": 1646920134,
      "ems": null
    },
    {
      "latitude": 50.8964,
      "longitude": 6.524582,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 92,
      "squawk": "7740",
      "timestamp": 1646920137,
      "ems": null
    },
    {
      "latitude": 50.896454,
      "longitude": 6.526399,
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
      "heading": 83,
      "squawk": "7742",
      "timestamp": 1646920140,
      "ems": null
    },
    {
      "latitude": 50.896637,
      "longitude": 6.528032,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646920143,
      "ems": null
    },
    {
      "latitude": 50.896957,
      "longitude": 6.529739,
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
      "heading": 70,
      "squawk": "7742",
      "timestamp": 1646920146,
      "ems": null
    },
    {
      "latitude": 50.897423,
      "longitude": 6.531601,
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
      "heading": 68,
      "squawk": "7742",
      "timestamp": 1646920149,
      "ems": null
    },
    {
      "latitude": 50.897827,
      "longitude": 6.533154,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1646920152,
      "ems": null
    },
    {
      "latitude": 50.89856,
      "longitude": 6.535084,
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
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1646920155,
      "ems": null
    },
    {
      "latitude": 50.8992,
      "longitude": 6.536568,
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
      "heading": 53,
      "squawk": "7742",
      "timestamp": 1646920158,
      "ems": null
    },
    {
      "latitude": 50.899982,
      "longitude": 6.538162,
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
      "heading": 51,
      "squawk": "7742",
      "timestamp": 1646920161,
      "ems": null
    },
    {
      "latitude": 50.900776,
      "longitude": 6.539612,
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
      "heading": 50,
      "squawk": "7742",
      "timestamp": 1646920164,
      "ems": null
    },
    {
      "latitude": 50.901535,
      "longitude": 6.541097,
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
      "heading": 50,
      "squawk": "7742",
      "timestamp": 1646920167,
      "ems": null
    },
    {
      "latitude": 50.902313,
      "longitude": 6.542581,
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
      "heading": 50,
      "squawk": "7742",
      "timestamp": 1646920170,
      "ems": null
    },
    {
      "latitude": 50.902863,
      "longitude": 6.543694,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 51,
      "squawk": "7742",
      "timestamp": 1646920173,
      "ems": null
    },
    {
      "latitude": 50.903755,
      "longitude": 6.545563,
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
      "heading": 53,
      "squawk": "7742",
      "timestamp": 1646920176,
      "ems": null
    },
    {
      "latitude": 50.904465,
      "longitude": 6.547035,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 54,
      "squawk": "7742",
      "timestamp": 1646920179,
      "ems": null
    },
    {
      "latitude": 50.905151,
      "longitude": 6.548691,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1646920182,
      "ems": null
    },
    {
      "latitude": 50.906502,
      "longitude": 6.552048,
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
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1646920188,
      "ems": null
    },
    {
      "latitude": 50.907108,
      "longitude": 6.55365,
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
      "heading": 60,
      "squawk": "7742",
      "timestamp": 1646920191,
      "ems": null
    },
    {
      "latitude": 50.907665,
      "longitude": 6.555328,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1646920194,
      "ems": null
    },
    {
      "latitude": 50.908131,
      "longitude": 6.557007,
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
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1646920197,
      "ems": null
    },
    {
      "latitude": 50.908737,
      "longitude": 6.558838,
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
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1646920200,
      "ems": null
    },
    {
      "latitude": 50.909271,
      "longitude": 6.560323,
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
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1646920203,
      "ems": null
    },
    {
      "latitude": 50.910553,
      "longitude": 6.563366,
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
      "heading": 55,
      "squawk": "7742",
      "timestamp": 1646920209,
      "ems": null
    },
    {
      "latitude": 50.911926,
      "longitude": 6.566707,
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
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1646920215,
      "ems": null
    },
    {
      "latitude": 50.913017,
      "longitude": 6.569824,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1646920221,
      "ems": null
    },
    {
      "latitude": 50.914124,
      "longitude": 6.572942,
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
      "heading": 60,
      "squawk": "7742",
      "timestamp": 1646920227,
      "ems": null
    },
    {
      "latitude": 50.915298,
      "longitude": 6.57608,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1646920233,
      "ems": null
    },
    {
      "latitude": 50.916557,
      "longitude": 6.579056,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 54,
      "squawk": "7742",
      "timestamp": 1646920239,
      "ems": null
    },
    {
      "latitude": 50.917786,
      "longitude": 6.58185,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 55,
      "squawk": "7742",
      "timestamp": 1646920245,
      "ems": null
    },
    {
      "latitude": 50.919071,
      "longitude": 6.585007,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1646920251,
      "ems": null
    },
    {
      "latitude": 50.920235,
      "longitude": 6.588058,
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
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1646920257,
      "ems": null
    },
    {
      "latitude": 50.921398,
      "longitude": 6.59111,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1646920263,
      "ems": null
    },
    {
      "latitude": 50.922638,
      "longitude": 6.594172,
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
      "heading": 53,
      "squawk": "7742",
      "timestamp": 1646920269,
      "ems": null
    },
    {
      "latitude": 50.923355,
      "longitude": 6.595535,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 50,
      "squawk": "7742",
      "timestamp": 1646920272,
      "ems": null
    },
    {
      "latitude": 50.924236,
      "longitude": 6.596756,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 39,
      "squawk": "7742",
      "timestamp": 1646920275,
      "ems": null
    },
    {
      "latitude": 50.925018,
      "longitude": 6.59781,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 41,
      "squawk": "7742",
      "timestamp": 1646920278,
      "ems": null
    },
    {
      "latitude": 50.925961,
      "longitude": 6.599121,
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
      "heading": 42,
      "squawk": "7742",
      "timestamp": 1646920281,
      "ems": null
    },
    {
      "latitude": 50.926937,
      "longitude": 6.600494,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 41,
      "squawk": "7742",
      "timestamp": 1646920284,
      "ems": null
    },
    {
      "latitude": 50.927822,
      "longitude": 6.601639,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 40,
      "squawk": "7742",
      "timestamp": 1646920287,
      "ems": null
    },
    {
      "latitude": 50.928497,
      "longitude": 6.602635,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 42,
      "squawk": "7742",
      "timestamp": 1646920290,
      "ems": null
    },
    {
      "latitude": 50.92923,
      "longitude": 6.603674,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "7742",
      "timestamp": 1646920293,
      "ems": null
    },
    {
      "latitude": 50.930058,
      "longitude": 6.604843,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 43,
      "squawk": "7742",
      "timestamp": 1646920296,
      "ems": null
    },
    {
      "latitude": 50.931175,
      "longitude": 6.606598,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 45,
      "squawk": "7742",
      "timestamp": 1646920299,
      "ems": null
    },
    {
      "latitude": 50.932804,
      "longitude": 6.609344,
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
      "heading": 45,
      "squawk": "7742",
      "timestamp": 1646920305,
      "ems": null
    },
    {
      "latitude": 50.933594,
      "longitude": 6.610641,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 46,
      "squawk": "7742",
      "timestamp": 1646920308,
      "ems": null
    },
    {
      "latitude": 50.934357,
      "longitude": 6.611988,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 48,
      "squawk": "7742",
      "timestamp": 1646920311,
      "ems": null
    },
    {
      "latitude": 50.935085,
      "longitude": 6.613388,
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
      "heading": 49,
      "squawk": "7742",
      "timestamp": 1646920314,
      "ems": null
    },
    {
      "latitude": 50.935684,
      "longitude": 6.614512,
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
      "heading": 49,
      "squawk": "7742",
      "timestamp": 1646920317,
      "ems": null
    },
    {
      "latitude": 50.936508,
      "longitude": 6.615922,
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
      "heading": 48,
      "squawk": "7742",
      "timestamp": 1646920320,
      "ems": null
    },
    {
      "latitude": 50.937225,
      "longitude": 6.617203,
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
      "heading": 47,
      "squawk": "7742",
      "timestamp": 1646920323,
      "ems": null
    },
    {
      "latitude": 50.938065,
      "longitude": 6.618729,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 48,
      "squawk": "7742",
      "timestamp": 1646920326,
      "ems": null
    },
    {
      "latitude": 50.939602,
      "longitude": 6.621399,
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
      "heading": 47,
      "squawk": "7742",
      "timestamp": 1646920332,
      "ems": null
    },
    {
      "latitude": 50.941044,
      "longitude": 6.624222,
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
      "heading": 54,
      "squawk": "7742",
      "timestamp": 1646920338,
      "ems": null
    },
    {
      "latitude": 50.941509,
      "longitude": 6.625748,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1646920341,
      "ems": null
    },
    {
      "latitude": 50.941833,
      "longitude": 6.627274,
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
      "heading": 71,
      "squawk": "7742",
      "timestamp": 1646920344,
      "ems": null
    },
    {
      "latitude": 50.942253,
      "longitude": 6.629028,
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
      "heading": 71,
      "squawk": "7742",
      "timestamp": 1646920347,
      "ems": null
    },
    {
      "latitude": 50.942505,
      "longitude": 6.630175,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 71,
      "squawk": "7742",
      "timestamp": 1646920350,
      "ems": null
    },
    {
      "latitude": 50.94286,
      "longitude": 6.63208,
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
      "heading": 73,
      "squawk": "7742",
      "timestamp": 1646920353,
      "ems": null
    },
    {
      "latitude": 50.943184,
      "longitude": 6.633835,
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
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646920356,
      "ems": null
    },
    {
      "latitude": 50.94342,
      "longitude": 6.635297,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1646920359,
      "ems": null
    },
    {
      "latitude": 50.943745,
      "longitude": 6.637192,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1646920363,
      "ems": null
    },
    {
      "latitude": 50.943977,
      "longitude": 6.638641,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646920365,
      "ems": null
    },
    {
      "latitude": 50.944256,
      "longitude": 6.640244,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646920368,
      "ems": null
    },
    {
      "latitude": 50.944702,
      "longitude": 6.642943,
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
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646920374,
      "ems": null
    },
    {
      "latitude": 50.945389,
      "longitude": 6.647099,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646920380,
      "ems": null
    },
    {
      "latitude": 50.945847,
      "longitude": 6.650366,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1646920386,
      "ems": null
    },
    {
      "latitude": 50.946072,
      "longitude": 6.652222,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1646920390,
      "ems": null
    },
    {
      "latitude": 50.946579,
      "longitude": 6.655488,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 73,
      "squawk": "7742",
      "timestamp": 1646920395,
      "ems": null
    },
    {
      "latitude": 50.947266,
      "longitude": 6.658606,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 71,
      "squawk": "7742",
      "timestamp": 1646920402,
      "ems": null
    },
    {
      "latitude": 50.947887,
      "longitude": 6.661911,
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
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1646920407,
      "ems": null
    },
    {
      "latitude": 50.948456,
      "longitude": 6.665509,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1646920414,
      "ems": null
    },
    {
      "latitude": 50.948864,
      "longitude": 6.668854,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1646920420,
      "ems": null
    },
    {
      "latitude": 50.949329,
      "longitude": 6.672058,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1646920425,
      "ems": null
    },
    {
      "latitude": 50.949738,
      "longitude": 6.674862,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646920432,
      "ems": null
    },
    {
      "latitude": 50.950333,
      "longitude": 6.678722,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 77,
      "squawk": "7742",
      "timestamp": 1646920437,
      "ems": null
    },
    {
      "latitude": 50.950726,
      "longitude": 6.681747,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1646920443,
      "ems": null
    },
    {
      "latitude": 50.951111,
      "longitude": 6.684884,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1646920449,
      "ems": null
    },
    {
      "latitude": 50.951431,
      "longitude": 6.688447,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 82,
      "squawk": "7742",
      "timestamp": 1646920456,
      "ems": null
    },
    {
      "latitude": 50.951569,
      "longitude": 6.689857,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 80,
      "squawk": "7742",
      "timestamp": 1646920458,
      "ems": null
    },
    {
      "latitude": 50.951889,
      "longitude": 6.693272,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 84,
      "squawk": "7742",
      "timestamp": 1646920464,
      "ems": null
    },
    {
      "latitude": 50.951981,
      "longitude": 6.695128,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 84,
      "squawk": "7742",
      "timestamp": 1646920468,
      "ems": null
    },
    {
      "latitude": 50.952301,
      "longitude": 6.69832,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 77,
      "squawk": "7742",
      "timestamp": 1646920473,
      "ems": null
    },
    {
      "latitude": 50.95282,
      "longitude": 6.70166,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 77,
      "squawk": "7742",
      "timestamp": 1646920480,
      "ems": null
    },
    {
      "latitude": 50.953217,
      "longitude": 6.704926,
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
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1646920486,
      "ems": null
    },
    {
      "latitude": 50.953705,
      "longitude": 6.708374,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1646920492,
      "ems": null
    },
    {
      "latitude": 50.953938,
      "longitude": 6.710052,
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
      "heading": 77,
      "squawk": "7742",
      "timestamp": 1646920495,
      "ems": null
    },
    {
      "latitude": 50.954132,
      "longitude": 6.711681,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1646920498,
      "ems": null
    },
    {
      "latitude": 50.954361,
      "longitude": 6.713092,
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
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646920500,
      "ems": null
    },
    {
      "latitude": 50.955002,
      "longitude": 6.716655,
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
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1646920506,
      "ems": null
    },
    {
      "latitude": 50.955612,
      "longitude": 6.720428,
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
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1646920514,
      "ems": null
    },
    {
      "latitude": 50.956284,
      "longitude": 6.725192,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646920522,
      "ems": null
    },
    {
      "latitude": 50.95697,
      "longitude": 6.729646,
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
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1646920530,
      "ems": null
    },
    {
      "latitude": 50.957703,
      "longitude": 6.734694,
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
      "heading": 77,
      "squawk": "7742",
      "timestamp": 1646920537,
      "ems": null
    },
    {
      "latitude": 50.95816,
      "longitude": 6.738182,
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
      "heading": 77,
      "squawk": "7742",
      "timestamp": 1646920543,
      "ems": null
    },
    {
      "latitude": 50.958733,
      "longitude": 6.741867,
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
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1646920549,
      "ems": null
    },
    {
      "latitude": 50.959198,
      "longitude": 6.744995,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 77,
      "squawk": "7742",
      "timestamp": 1646920555,
      "ems": null
    },
    {
      "latitude": 50.959808,
      "longitude": 6.749168,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1646920561,
      "ems": null
    },
    {
      "latitude": 50.960541,
      "longitude": 6.753103,
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
      "heading": 71,
      "squawk": "7742",
      "timestamp": 1646920567,
      "ems": null
    },
    {
      "latitude": 50.960781,
      "longitude": 6.754456,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1646920570,
      "ems": null
    },
    {
      "latitude": 50.961666,
      "longitude": 6.758881,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 73,
      "squawk": "7742",
      "timestamp": 1646920576,
      "ems": null
    },
    {
      "latitude": 50.962223,
      "longitude": 6.762161,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646920582,
      "ems": null
    },
    {
      "latitude": 50.962921,
      "longitude": 6.766242,
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
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646920588,
      "ems": null
    },
    {
      "latitude": 50.963425,
      "longitude": 6.769657,
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
      "heading": 77,
      "squawk": "7742",
      "timestamp": 1646920593,
      "ems": null
    },
    {
      "latitude": 50.96402,
      "longitude": 6.773517,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1646920600,
      "ems": null
    },
    {
      "latitude": 50.964615,
      "longitude": 6.777377,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 77,
      "squawk": "7742",
      "timestamp": 1646920606,
      "ems": null
    },
    {
      "latitude": 50.965118,
      "longitude": 6.78094,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1646920612,
      "ems": null
    },
    {
      "latitude": 50.965576,
      "longitude": 6.784503,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1646920618,
      "ems": null
    },
    {
      "latitude": 50.966087,
      "longitude": 6.788101,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1646920624,
      "ems": null
    },
    {
      "latitude": 50.96674,
      "longitude": 6.791534,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1646920630,
      "ems": null
    },
    {
      "latitude": 50.967316,
      "longitude": 6.79497,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1646920636,
      "ems": null
    },
    {
      "latitude": 50.967865,
      "longitude": 6.798088,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1646920642,
      "ems": null
    },
    {
      "latitude": 50.96851,
      "longitude": 6.801453,
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
      "heading": 73,
      "squawk": "7742",
      "timestamp": 1646920648,
      "ems": null
    },
    {
      "latitude": 50.969055,
      "longitude": 6.804694,
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
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646920654,
      "ems": null
    },
    {
      "latitude": 50.969421,
      "longitude": 6.807886,
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
      "heading": 80,
      "squawk": "7742",
      "timestamp": 1646920660,
      "ems": null
    },
    {
      "latitude": 50.969559,
      "longitude": 6.809445,
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
      "heading": 86,
      "squawk": "7742",
      "timestamp": 1646920663,
      "ems": null
    },
    {
      "latitude": 50.969513,
      "longitude": 6.811004,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 95,
      "squawk": "7742",
      "timestamp": 1646920666,
      "ems": null
    },
    {
      "latitude": 50.969345,
      "longitude": 6.812744,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 101,
      "squawk": "7742",
      "timestamp": 1646920669,
      "ems": null
    },
    {
      "latitude": 50.969112,
      "longitude": 6.814117,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 104,
      "squawk": "7742",
      "timestamp": 1646920672,
      "ems": null
    },
    {
      "latitude": 50.968742,
      "longitude": 6.81572,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1646920675,
      "ems": null
    },
    {
      "latitude": 50.968369,
      "longitude": 6.817169,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1646920678,
      "ems": null
    },
    {
      "latitude": 50.967949,
      "longitude": 6.819,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1646920681,
      "ems": null
    },
    {
      "latitude": 50.96767,
      "longitude": 6.820374,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1646920684,
      "ems": null
    },
    {
      "latitude": 50.967205,
      "longitude": 6.822281,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1646920687,
      "ems": null
    },
    {
      "latitude": 50.966766,
      "longitude": 6.823698,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1646920690,
      "ems": null
    },
    {
      "latitude": 50.96632,
      "longitude": 6.82518,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1646920693,
      "ems": null
    },
    {
      "latitude": 50.965759,
      "longitude": 6.826815,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1646920696,
      "ems": null
    },
    {
      "latitude": 50.965343,
      "longitude": 6.828232,
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
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1646920699,
      "ems": null
    },
    {
      "latitude": 50.964798,
      "longitude": 6.829933,
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
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1646920702,
      "ems": null
    },
    {
      "latitude": 50.964367,
      "longitude": 6.83136,
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
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1646920705,
      "ems": null
    },
    {
      "latitude": 50.963928,
      "longitude": 6.832754,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1646920708,
      "ems": null
    },
    {
      "latitude": 50.963482,
      "longitude": 6.834259,
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1646920711,
      "ems": null
    },
    {
      "latitude": 50.963104,
      "longitude": 6.835575,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1646920714,
      "ems": null
    },
    {
      "latitude": 50.962097,
      "longitude": 6.838692,
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
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1646920720,
      "ems": null
    },
    {
      "latitude": 50.961548,
      "longitude": 6.840028,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 124,
      "squawk": "7742",
      "timestamp": 1646920723,
      "ems": null
    },
    {
      "latitude": 50.960907,
      "longitude": 6.841439,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 124,
      "squawk": "7742",
      "timestamp": 1646920726,
      "ems": null
    },
    {
      "latitude": 50.960316,
      "longitude": 6.842728,
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
      "heading": 126,
      "squawk": "7742",
      "timestamp": 1646920729,
      "ems": null
    },
    {
      "latitude": 50.959759,
      "longitude": 6.843796,
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
      "heading": 131,
      "squawk": "7742",
      "timestamp": 1646920732,
      "ems": null
    },
    {
      "latitude": 50.95892,
      "longitude": 6.845093,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 137,
      "squawk": "7742",
      "timestamp": 1646920735,
      "ems": null
    },
    {
      "latitude": 50.958176,
      "longitude": 6.846161,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 139,
      "squawk": "7742",
      "timestamp": 1646920738,
      "ems": null
    },
    {
      "latitude": 50.957428,
      "longitude": 6.847076,
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
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1646920741,
      "ems": null
    },
    {
      "latitude": 50.956558,
      "longitude": 6.848194,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 143,
      "squawk": "7742",
      "timestamp": 1646920744,
      "ems": null
    },
    {
      "latitude": 50.955826,
      "longitude": 6.849085,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 137,
      "squawk": "7742",
      "timestamp": 1646920747,
      "ems": null
    },
    {
      "latitude": 50.954498,
      "longitude": 6.851683,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 124,
      "squawk": "7742",
      "timestamp": 1646920753,
      "ems": null
    },
    {
      "latitude": 50.953537,
      "longitude": 6.854207,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1646920759,
      "ems": null
    },
    {
      "latitude": 50.953007,
      "longitude": 6.855621,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1646920762,
      "ems": null
    },
    {
      "latitude": 50.952484,
      "longitude": 6.857102,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1646920765,
      "ems": null
    },
    {
      "latitude": 50.952026,
      "longitude": 6.858364,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1646920768,
      "ems": null
    },
    {
      "latitude": 50.951477,
      "longitude": 6.859923,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1646920771,
      "ems": null
    },
    {
      "latitude": 50.950974,
      "longitude": 6.861333,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1646920774,
      "ems": null
    },
    {
      "latitude": 50.950424,
      "longitude": 6.862669,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1646920777,
      "ems": null
    },
    {
      "latitude": 50.949982,
      "longitude": 6.863861,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1646920780,
      "ems": null
    },
    {
      "latitude": 50.948818,
      "longitude": 6.866608,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 124,
      "squawk": "7742",
      "timestamp": 1646920786,
      "ems": null
    },
    {
      "latitude": 50.948273,
      "longitude": 6.86794,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 124,
      "squawk": "7742",
      "timestamp": 1646920789,
      "ems": null
    },
    {
      "latitude": 50.947605,
      "longitude": 6.869431,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 124,
      "squawk": "7742",
      "timestamp": 1646920792,
      "ems": null
    },
    {
      "latitude": 50.947048,
      "longitude": 6.870651,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 125,
      "squawk": "7742",
      "timestamp": 1646920795,
      "ems": null
    },
    {
      "latitude": 50.946491,
      "longitude": 6.871948,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 126,
      "squawk": "7742",
      "timestamp": 1646920798,
      "ems": null
    },
    {
      "latitude": 50.946026,
      "longitude": 6.87294,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 125,
      "squawk": "7742",
      "timestamp": 1646920801,
      "ems": null
    },
    {
      "latitude": 50.945374,
      "longitude": 6.874466,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 125,
      "squawk": "7742",
      "timestamp": 1646920804,
      "ems": null
    },
    {
      "latitude": 50.944885,
      "longitude": 6.875437,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 128,
      "squawk": "7742",
      "timestamp": 1646920807,
      "ems": null
    },
    {
      "latitude": 50.94421,
      "longitude": 6.876755,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 131,
      "squawk": "7742",
      "timestamp": 1646920810,
      "ems": null
    },
    {
      "latitude": 50.943512,
      "longitude": 6.877899,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 132,
      "squawk": "7742",
      "timestamp": 1646920813,
      "ems": null
    },
    {
      "latitude": 50.942719,
      "longitude": 6.879349,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 132,
      "squawk": "7742",
      "timestamp": 1646920816,
      "ems": null
    },
    {
      "latitude": 50.942066,
      "longitude": 6.880417,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 135,
      "squawk": "7742",
      "timestamp": 1646920819,
      "ems": null
    },
    {
      "latitude": 50.941177,
      "longitude": 6.881598,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1646920822,
      "ems": null
    },
    {
      "latitude": 50.9403,
      "longitude": 6.882629,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 144,
      "squawk": "7742",
      "timestamp": 1646920825,
      "ems": null
    },
    {
      "latitude": 50.939346,
      "longitude": 6.883677,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1646920828,
      "ems": null
    },
    {
      "latitude": 50.938385,
      "longitude": 6.884568,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1646920831,
      "ems": null
    },
    {
      "latitude": 50.937366,
      "longitude": 6.885529,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1646920834,
      "ems": null
    },
    {
      "latitude": 50.936436,
      "longitude": 6.886444,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1646920837,
      "ems": null
    },
    {
      "latitude": 50.935455,
      "longitude": 6.887389,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1646920840,
      "ems": null
    },
    {
      "latitude": 50.93454,
      "longitude": 6.888279,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1646920843,
      "ems": null
    },
    {
      "latitude": 50.933533,
      "longitude": 6.88917,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1646920846,
      "ems": null
    },
    {
      "latitude": 50.932571,
      "longitude": 6.890135,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1646920849,
      "ems": null
    },
    {
      "latitude": 50.931499,
      "longitude": 6.891098,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 150,
      "squawk": "7742",
      "timestamp": 1646920852,
      "ems": null
    },
    {
      "latitude": 50.930477,
      "longitude": 6.891937,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 152,
      "squawk": "7742",
      "timestamp": 1646920855,
      "ems": null
    },
    {
      "latitude": 50.928429,
      "longitude": 6.893692,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1646920861,
      "ems": null
    },
    {
      "latitude": 50.927402,
      "longitude": 6.894379,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1646920864,
      "ems": null
    },
    {
      "latitude": 50.926254,
      "longitude": 6.895109,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1646920867,
      "ems": null
    },
    {
      "latitude": 50.92511,
      "longitude": 6.895851,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1646920870,
      "ems": null
    },
    {
      "latitude": 50.92424,
      "longitude": 6.89637,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1646920873,
      "ems": null
    },
    {
      "latitude": 50.92305,
      "longitude": 6.897113,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1646920876,
      "ems": null
    },
    {
      "latitude": 50.922089,
      "longitude": 6.897633,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1646920879,
      "ems": null
    },
    {
      "latitude": 50.921074,
      "longitude": 6.898193,
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
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1646920882,
      "ems": null
    },
    {
      "latitude": 50.92012,
      "longitude": 6.898672,
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
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1646920885,
      "ems": null
    },
    {
      "latitude": 50.919071,
      "longitude": 6.899261,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1646920888,
      "ems": null
    },
    {
      "latitude": 50.91716,
      "longitude": 6.900253,
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
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1646920894,
      "ems": null
    },
    {
      "latitude": 50.916092,
      "longitude": 6.90075,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 163,
      "squawk": "7742",
      "timestamp": 1646920897,
      "ems": null
    },
    {
      "latitude": 50.915176,
      "longitude": 6.901122,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1646920900,
      "ems": null
    },
    {
      "latitude": 50.914169,
      "longitude": 6.901567,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1646920903,
      "ems": null
    },
    {
      "latitude": 50.912292,
      "longitude": 6.902606,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1646920909,
      "ems": null
    },
    {
      "latitude": 50.910458,
      "longitude": 6.903763,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1646920915,
      "ems": null
    },
    {
      "latitude": 50.909573,
      "longitude": 6.904449,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 154,
      "squawk": "7742",
      "timestamp": 1646920918,
      "ems": null
    },
    {
      "latitude": 50.907898,
      "longitude": 6.905575,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1646920924,
      "ems": null
    },
    {
      "latitude": 50.907028,
      "longitude": 6.906169,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1646920927,
      "ems": null
    },
    {
      "latitude": 50.906174,
      "longitude": 6.906738,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1646920930,
      "ems": null
    },
    {
      "latitude": 50.90451,
      "longitude": 6.907506,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 167,
      "squawk": "7742",
      "timestamp": 1646920936,
      "ems": null
    },
    {
      "latitude": 50.903549,
      "longitude": 6.907802,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1646920939,
      "ems": null
    },
    {
      "latitude": 50.902729,
      "longitude": 6.908112,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 167,
      "squawk": "7742",
      "timestamp": 1646920942,
      "ems": null
    },
    {
      "latitude": 50.901894,
      "longitude": 6.908417,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1646920945,
      "ems": null
    },
    {
      "latitude": 50.900963,
      "longitude": 6.908875,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1646920948,
      "ems": null
    },
    {
      "latitude": 50.900169,
      "longitude": 6.90918,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "7742",
      "timestamp": 1646920951,
      "ems": null
    },
    {
      "latitude": 50.899292,
      "longitude": 6.909584,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1646920954,
      "ems": null
    },
    {
      "latitude": 50.898422,
      "longitude": 6.909955,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1646920957,
      "ems": null
    },
    {
      "latitude": 50.897507,
      "longitude": 6.910178,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1646920960,
      "ems": null
    },
    {
      "latitude": 50.896679,
      "longitude": 6.910324,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1646920963,
      "ems": null
    },
    {
      "latitude": 50.895676,
      "longitude": 6.910549,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1646920966,
      "ems": null
    },
    {
      "latitude": 50.893841,
      "longitude": 6.911163,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1646920972,
      "ems": null
    },
    {
      "latitude": 50.891884,
      "longitude": 6.911926,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 167,
      "squawk": "7742",
      "timestamp": 1646920978,
      "ems": null
    },
    {
      "latitude": 50.889977,
      "longitude": 6.912613,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1646920984,
      "ems": null
    },
    {
      "latitude": 50.888123,
      "longitude": 6.91337,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1646920990,
      "ems": null
    },
    {
      "latitude": 50.8862,
      "longitude": 6.914038,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1646920996,
      "ems": null
    },
    {
      "latitude": 50.884277,
      "longitude": 6.914632,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1646921002,
      "ems": null
    },
    {
      "latitude": 50.882389,
      "longitude": 6.915283,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 167,
      "squawk": "7742",
      "timestamp": 1646921008,
      "ems": null
    },
    {
      "latitude": 50.880478,
      "longitude": 6.915894,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1646921014,
      "ems": null
    },
    {
      "latitude": 50.877594,
      "longitude": 6.91671,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1646921023,
      "ems": null
    },
    {
      "latitude": 50.875717,
      "longitude": 6.917378,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1646921029,
      "ems": null
    },
    {
      "latitude": 50.873978,
      "longitude": 6.917898,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1646921035,
      "ems": null
    },
    {
      "latitude": 50.872009,
      "longitude": 6.918492,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1646921041,
      "ems": null
    },
    {
      "latitude": 50.870224,
      "longitude": 6.919086,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1646921047,
      "ems": null
    },
    {
      "latitude": 50.868393,
      "longitude": 6.919754,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1646921053,
      "ems": null
    },
    {
      "latitude": 50.866608,
      "longitude": 6.920471,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1646921060,
      "ems": null
    },
    {
      "latitude": 50.865738,
      "longitude": 6.920867,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1646921062,
      "ems": null
    },
    {
      "latitude": 50.863953,
      "longitude": 6.921312,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 174,
      "squawk": "7742",
      "timestamp": 1646921068,
      "ems": null
    },
    {
      "latitude": 50.86293,
      "longitude": 6.921387,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1646921071,
      "ems": null
    },
    {
      "latitude": 50.86195,
      "longitude": 6.921387,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1646921074,
      "ems": null
    },
    {
      "latitude": 50.860928,
      "longitude": 6.92131,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1646921078,
      "ems": null
    },
    {
      "latitude": 50.860062,
      "longitude": 6.921016,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1646921080,
      "ems": null
    },
    {
      "latitude": 50.858963,
      "longitude": 6.92057,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1646921084,
      "ems": null
    },
    {
      "latitude": 50.858139,
      "longitude": 6.920199,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1646921086,
      "ems": null
    },
    {
      "latitude": 50.857132,
      "longitude": 6.919828,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1646921089,
      "ems": null
    },
    {
      "latitude": 50.856079,
      "longitude": 6.919456,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1646921093,
      "ems": null
    },
    {
      "latitude": 50.855164,
      "longitude": 6.919011,
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
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1646921096,
      "ems": null
    },
    {
      "latitude": 50.854221,
      "longitude": 6.91864,
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
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1646921099,
      "ems": null
    },
    {
      "latitude": 50.853058,
      "longitude": 6.918269,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1646921102,
      "ems": null
    },
    {
      "latitude": 50.852127,
      "longitude": 6.917877,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1646921105,
      "ems": null
    },
    {
      "latitude": 50.851151,
      "longitude": 6.917572,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1646921108,
      "ems": null
    },
    {
      "latitude": 50.849258,
      "longitude": 6.91671,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1646921114,
      "ems": null
    },
    {
      "latitude": 50.847099,
      "longitude": 6.916046,
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
      "heading": 188,
      "squawk": "7742",
      "timestamp": 1646921120,
      "ems": null
    },
    {
      "latitude": 50.846008,
      "longitude": 6.915819,
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
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1646921123,
      "ems": null
    },
    {
      "latitude": 50.844959,
      "longitude": 6.915665,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1646921126,
      "ems": null
    },
    {
      "latitude": 50.843857,
      "longitude": 6.915523,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1646921129,
      "ems": null
    },
    {
      "latitude": 50.842209,
      "longitude": 6.915226,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1646921134,
      "ems": null
    },
    {
      "latitude": 50.84063,
      "longitude": 6.914902,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1646921138,
      "ems": null
    },
    {
      "latitude": 50.839001,
      "longitude": 6.914597,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1646921142,
      "ems": null
    },
    {
      "latitude": 50.837585,
      "longitude": 6.914335,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1646921146,
      "ems": null
    },
    {
      "latitude": 50.83548,
      "longitude": 6.914038,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1646921152,
      "ems": null
    },
    {
      "latitude": 50.833275,
      "longitude": 6.913528,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1646921158,
      "ems": null
    },
    {
      "latitude": 50.831226,
      "longitude": 6.912918,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 188,
      "squawk": "7742",
      "timestamp": 1646921164,
      "ems": null
    },
    {
      "latitude": 50.828842,
      "longitude": 6.912553,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1646921170,
      "ems": null
    },
    {
      "latitude": 50.826805,
      "longitude": 6.912231,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 188,
      "squawk": "7742",
      "timestamp": 1646921176,
      "ems": null
    },
    {
      "latitude": 50.825684,
      "longitude": 6.911885,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1646921179,
      "ems": null
    },
    {
      "latitude": 50.823532,
      "longitude": 6.911291,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1646921185,
      "ems": null
    },
    {
      "latitude": 50.821243,
      "longitude": 6.910846,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1646921191,
      "ems": null
    },
    {
      "latitude": 50.819,
      "longitude": 6.910623,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1646921197,
      "ems": null
    },
    {
      "latitude": 50.816704,
      "longitude": 6.9104,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1646921203,
      "ems": null
    },
    {
      "latitude": 50.815659,
      "longitude": 6.910252,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1646921206,
      "ems": null
    },
    {
      "latitude": 50.813164,
      "longitude": 6.909637,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1646921212,
      "ems": null
    },
    {
      "latitude": 50.811218,
      "longitude": 6.909064,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1646921218,
      "ems": null
    },
    {
      "latitude": 50.809906,
      "longitude": 6.908722,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 188,
      "squawk": "7742",
      "timestamp": 1646921221,
      "ems": null
    },
    {
      "latitude": 50.807716,
      "longitude": 6.90834,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1646921227,
      "ems": null
    },
    {
      "latitude": 50.80545,
      "longitude": 6.907876,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1646921233,
      "ems": null
    },
    {
      "latitude": 50.803253,
      "longitude": 6.907506,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1646921239,
      "ems": null
    },
    {
      "latitude": 50.801155,
      "longitude": 6.906433,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1646921245,
      "ems": null
    },
    {
      "latitude": 50.800175,
      "longitude": 6.905212,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 219,
      "squawk": "7742",
      "timestamp": 1646921248,
      "ems": null
    },
    {
      "latitude": 50.799339,
      "longitude": 6.903839,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1646921251,
      "ems": null
    },
    {
      "latitude": 50.798676,
      "longitude": 6.902235,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 237,
      "squawk": "7742",
      "timestamp": 1646921254,
      "ems": null
    },
    {
      "latitude": 50.798035,
      "longitude": 6.900527,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1646921257,
      "ems": null
    },
    {
      "latitude": 50.797394,
      "longitude": 6.898523,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 242,
      "squawk": "7742",
      "timestamp": 1646921260,
      "ems": null
    },
    {
      "latitude": 50.796871,
      "longitude": 6.896973,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 242,
      "squawk": "7742",
      "timestamp": 1646921263,
      "ems": null
    },
    {
      "latitude": 50.796265,
      "longitude": 6.894989,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 245,
      "squawk": "7742",
      "timestamp": 1646921266,
      "ems": null
    },
    {
      "latitude": 50.795792,
      "longitude": 6.892956,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 251,
      "squawk": "7742",
      "timestamp": 1646921269,
      "ems": null
    },
    {
      "latitude": 50.795475,
      "longitude": 6.891022,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 259,
      "squawk": "7742",
      "timestamp": 1646921272,
      "ems": null
    },
    {
      "latitude": 50.79538,
      "longitude": 6.889038,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 268,
      "squawk": "7742",
      "timestamp": 1646921275,
      "ems": null
    },
    {
      "latitude": 50.795429,
      "longitude": 6.886749,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 273,
      "squawk": "7742",
      "timestamp": 1646921278,
      "ems": null
    },
    {
      "latitude": 50.795567,
      "longitude": 6.884689,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 275,
      "squawk": "7742",
      "timestamp": 1646921281,
      "ems": null
    },
    {
      "latitude": 50.795708,
      "longitude": 6.882324,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 275,
      "squawk": "7742",
      "timestamp": 1646921284,
      "ems": null
    },
    {
      "latitude": 50.795708,
      "longitude": 6.880112,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 268,
      "squawk": "7742",
      "timestamp": 1646921288,
      "ems": null
    },
    {
      "latitude": 50.795567,
      "longitude": 6.877823,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 261,
      "squawk": "7742",
      "timestamp": 1646921291,
      "ems": null
    },
    {
      "latitude": 50.795242,
      "longitude": 6.875916,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 251,
      "squawk": "7742",
      "timestamp": 1646921293,
      "ems": null
    },
    {
      "latitude": 50.794647,
      "longitude": 6.874175,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 238,
      "squawk": "7742",
      "timestamp": 1646921296,
      "ems": null
    },
    {
      "latitude": 50.793823,
      "longitude": 6.872765,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 219,
      "squawk": "7742",
      "timestamp": 1646921300,
      "ems": null
    },
    {
      "latitude": 50.792633,
      "longitude": 6.871651,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1646921303,
      "ems": null
    },
    {
      "latitude": 50.791672,
      "longitude": 6.871206,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1646921306,
      "ems": null
    },
    {
      "latitude": 50.790482,
      "longitude": 6.870687,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1646921309,
      "ems": null
    },
    {
      "latitude": 50.789375,
      "longitude": 6.870041,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1646921312,
      "ems": null
    },
    {
      "latitude": 50.78833,
      "longitude": 6.869424,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1646921315,
      "ems": null
    },
    {
      "latitude": 50.787235,
      "longitude": 6.86882,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1646921318,
      "ems": null
    },
    {
      "latitude": 50.786087,
      "longitude": 6.868088,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1646921320,
      "ems": null
    },
    {
      "latitude": 50.784851,
      "longitude": 6.867494,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1646921324,
      "ems": null
    },
    {
      "latitude": 50.783928,
      "longitude": 6.867142,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1646921327,
      "ems": null
    },
    {
      "latitude": 50.782791,
      "longitude": 6.866826,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1646921330,
      "ems": null
    },
    {
      "latitude": 50.78183,
      "longitude": 6.866678,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1646921333,
      "ems": null
    },
    {
      "latitude": 50.780869,
      "longitude": 6.866455,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 188,
      "squawk": "7742",
      "timestamp": 1646921336,
      "ems": null
    },
    {
      "latitude": 50.779926,
      "longitude": 6.866302,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1646921338,
      "ems": null
    },
    {
      "latitude": 50.778809,
      "longitude": 6.866084,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1646921342,
      "ems": null
    },
    {
      "latitude": 50.776978,
      "longitude": 6.865045,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1646921347,
      "ems": null
    },
    {
      "latitude": 50.776016,
      "longitude": 6.864154,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1646921350,
      "ems": null
    },
    {
      "latitude": 50.775146,
      "longitude": 6.863263,
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1646921353,
      "ems": null
    },
    {
      "latitude": 50.774277,
      "longitude": 6.862372,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1646921356,
      "ems": null
    },
    {
      "latitude": 50.773407,
      "longitude": 6.861496,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1646921360,
      "ems": null
    },
    {
      "latitude": 50.772675,
      "longitude": 6.860814,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1646921363,
      "ems": null
    },
    {
      "latitude": 50.771824,
      "longitude": 6.85997,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1646921366,
      "ems": null
    },
    {
      "latitude": 50.770988,
      "longitude": 6.859207,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1646921369,
      "ems": null
    },
    {
      "latitude": 50.770195,
      "longitude": 6.858444,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1646921372,
      "ems": null
    },
    {
      "latitude": 50.76947,
      "longitude": 6.85777,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1646921375,
      "ems": null
    },
    {
      "latitude": 50.767914,
      "longitude": 6.856285,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1646921381,
      "ems": null
    },
    {
      "latitude": 50.767136,
      "longitude": 6.855691,
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1646921384,
      "ems": null
    },
    {
      "latitude": 50.766426,
      "longitude": 6.855087,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1646921387,
      "ems": null
    },
    {
      "latitude": 50.765541,
      "longitude": 6.854401,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1646921390,
      "ems": null
    },
    {
      "latitude": 50.764847,
      "longitude": 6.853836,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1646921393,
      "ems": null
    },
    {
      "latitude": 50.764114,
      "longitude": 6.853316,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1646921396,
      "ems": null
    },
    {
      "latitude": 50.763382,
      "longitude": 6.85287,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1646921399,
      "ems": null
    },
    {
      "latitude": 50.762741,
      "longitude": 6.852648,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1646921402,
      "ems": null
    },
    {
      "latitude": 50.761909,
      "longitude": 6.852417,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1646921405,
      "ems": null
    },
    {
      "latitude": 50.761166,
      "longitude": 6.852188,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1646921408,
      "ems": null
    },
    {
      "latitude": 50.760452,
      "longitude": 6.852129,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1646921411,
      "ems": null
    },
    {
      "latitude": 50.759628,
      "longitude": 6.852112,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1646921414,
      "ems": null
    },
    {
      "latitude": 50.758839,
      "longitude": 6.852112,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1646921417,
      "ems": null
    },
    {
      "latitude": 50.758045,
      "longitude": 6.852112,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1646921420,
      "ems": null
    },
    {
      "latitude": 50.757248,
      "longitude": 6.852202,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1646921423,
      "ems": null
    },
    {
      "latitude": 50.756462,
      "longitude": 6.852264,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1646921426,
      "ems": null
    },
    {
      "latitude": 50.7556,
      "longitude": 6.852277,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1646921429,
      "ems": null
    },
    {
      "latitude": 50.754742,
      "longitude": 6.852264,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1646921432,
      "ems": null
    },
    {
      "latitude": 50.753017,
      "longitude": 6.851883,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1646921438,
      "ems": null
    },
    {
      "latitude": 50.752132,
      "longitude": 6.851501,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1646921441,
      "ems": null
    },
    {
      "latitude": 50.751297,
      "longitude": 6.851163,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1646921444,
      "ems": null
    },
    {
      "latitude": 50.750412,
      "longitude": 6.850891,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1646921447,
      "ems": null
    },
    {
      "latitude": 50.749603,
      "longitude": 6.850718,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1646921450,
      "ems": null
    },
    {
      "latitude": 50.748734,
      "longitude": 6.850569,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1646921453,
      "ems": null
    },
    {
      "latitude": 50.74791,
      "longitude": 6.850421,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1646921456,
      "ems": null
    },
    {
      "latitude": 50.747105,
      "longitude": 6.850281,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1646921459,
      "ems": null
    },
    {
      "latitude": 50.745667,
      "longitude": 6.850198,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1646921465,
      "ems": null
    },
    {
      "latitude": 50.744732,
      "longitude": 6.850128,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1646921468,
      "ems": null
    },
    {
      "latitude": 50.744019,
      "longitude": 6.850124,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1646921471,
      "ems": null
    },
    {
      "latitude": 50.74324,
      "longitude": 6.850124,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1646921474,
      "ems": null
    },
    {
      "latitude": 50.742508,
      "longitude": 6.850124,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1646921477,
      "ems": null
    },
    {
      "latitude": 50.741798,
      "longitude": 6.850128,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1646921480,
      "ems": null
    },
    {
      "latitude": 50.741009,
      "longitude": 6.850204,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1646921483,
      "ems": null
    },
    {
      "latitude": 50.740128,
      "longitude": 6.850273,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1646921486,
      "ems": null
    },
    {
      "latitude": 50.738167,
      "longitude": 6.850204,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1646921492,
      "ems": null
    },
    {
      "latitude": 50.736305,
      "longitude": 6.850128,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1646921498,
      "ems": null
    },
    {
      "latitude": 50.734398,
      "longitude": 6.850281,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1646921503,
      "ems": null
    },
    {
      "latitude": 50.733421,
      "longitude": 6.850433,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1646921506,
      "ems": null
    },
    {
      "latitude": 50.731613,
      "longitude": 6.850792,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1646921513,
      "ems": null
    },
    {
      "latitude": 50.730721,
      "longitude": 6.850967,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1646921516,
      "ems": null
    },
    {
      "latitude": 50.729782,
      "longitude": 6.851163,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 170,
      "squawk": "7742",
      "timestamp": 1646921519,
      "ems": null
    },
    {
      "latitude": 50.728905,
      "longitude": 6.851501,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1646921522,
      "ems": null
    },
    {
      "latitude": 50.728088,
      "longitude": 6.851906,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1646921525,
      "ems": null
    },
    {
      "latitude": 50.727135,
      "longitude": 6.852341,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1646921528,
      "ems": null
    },
    {
      "latitude": 50.72625,
      "longitude": 6.852798,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1646921531,
      "ems": null
    },
    {
      "latitude": 50.725479,
      "longitude": 6.853168,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1646921534,
      "ems": null
    },
    {
      "latitude": 50.724518,
      "longitude": 6.853687,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 159,
      "squawk": "7742",
      "timestamp": 1646921537,
      "ems": null
    },
    {
      "latitude": 50.72369,
      "longitude": 6.854248,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 154,
      "squawk": "7742",
      "timestamp": 1646921540,
      "ems": null
    },
    {
      "latitude": 50.722778,
      "longitude": 6.854949,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 155,
      "squawk": "7742",
      "timestamp": 1646921543,
      "ems": null
    },
    {
      "latitude": 50.721909,
      "longitude": 6.855469,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1646921546,
      "ems": null
    },
    {
      "latitude": 50.719967,
      "longitude": 6.855927,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1646921551,
      "ems": null
    },
    {
      "latitude": 50.719025,
      "longitude": 6.855543,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1646921555,
      "ems": null
    },
    {
      "latitude": 50.718292,
      "longitude": 6.855011,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1646921558,
      "ems": null
    },
    {
      "latitude": 50.717377,
      "longitude": 6.854207,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1646921561,
      "ems": null
    },
    {
      "latitude": 50.716644,
      "longitude": 6.853465,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1646921564,
      "ems": null
    },
    {
      "latitude": 50.715912,
      "longitude": 6.85287,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1646921567,
      "ems": null
    },
    {
      "latitude": 50.715134,
      "longitude": 6.852277,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1646921570,
      "ems": null
    },
    {
      "latitude": 50.714355,
      "longitude": 6.851757,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1646921573,
      "ems": null
    },
    {
      "latitude": 50.71373,
      "longitude": 6.851425,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1646921576,
      "ems": null
    },
    {
      "latitude": 50.712891,
      "longitude": 6.851044,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 195,
      "squawk": "7742",
      "timestamp": 1646921579,
      "ems": null
    },
    {
      "latitude": 50.711914,
      "longitude": 6.850662,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1646921585,
      "ems": null
    },
    {
      "latitude": 50.711197,
      "longitude": 6.850421,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1646921588,
      "ems": null
    },
    {
      "latitude": 50.710052,
      "longitude": 6.85005,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 188,
      "squawk": "7742",
      "timestamp": 1646921591,
      "ems": null
    },
    {
      "latitude": 50.709446,
      "longitude": 6.849899,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1646921594,
      "ems": null
    },
    {
      "latitude": 50.708771,
      "longitude": 6.849827,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1646921597,
      "ems": null
    },
    {
      "latitude": 50.70805,
      "longitude": 6.84967,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1646921600,
      "ems": null
    },
    {
      "latitude": 50.707306,
      "longitude": 6.849518,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1646921603,
      "ems": null
    },
    {
      "latitude": 50.706619,
      "longitude": 6.849308,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1646921606,
      "ems": null
    },
    {
      "latitude": 50.705208,
      "longitude": 6.848831,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1646921612,
      "ems": null
    },
    {
      "latitude": 50.70451,
      "longitude": 6.848755,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1646921615,
      "ems": null
    },
    {
      "latitude": 50.703918,
      "longitude": 6.848714,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1646921618,
      "ems": null
    },
    {
      "latitude": 50.702499,
      "longitude": 6.848417,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1646921624,
      "ems": null
    },
    {
      "latitude": 50.701813,
      "longitude": 6.848194,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1646921627,
      "ems": null
    },
    {
      "latitude": 50.700321,
      "longitude": 6.847839,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1646921632,
      "ems": null
    },
    {
      "latitude": 50.699341,
      "longitude": 6.847823,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1646921637,
      "ems": null
    },
    {
      "latitude": 50.698414,
      "longitude": 6.847839,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1646921641,
      "ems": null
    },
    {
      "latitude": 50.697018,
      "longitude": 6.847992,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1646921645,
      "ems": null
    },
    {
      "latitude": 50.696224,
      "longitude": 6.848068,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1646921648,
      "ems": null
    },
    {
      "latitude": 50.695175,
      "longitude": 6.848194,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1646921651,
      "ems": null
    },
    {
      "latitude": 50.69413,
      "longitude": 6.848221,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1646921654,
      "ems": null
    },
    {
      "latitude": 50.692825,
      "longitude": 6.848221,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1646921657,
      "ems": null
    },
    {
      "latitude": 50.690594,
      "longitude": 6.848221,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1646921664,
      "ems": null
    },
    {
      "latitude": 50.688313,
      "longitude": 6.847992,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1646921669,
      "ems": null
    },
    {
      "latitude": 50.687347,
      "longitude": 6.847377,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1646921673,
      "ems": null
    },
    {
      "latitude": 50.68634,
      "longitude": 6.84619,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1646921675,
      "ems": null
    },
    {
      "latitude": 50.685658,
      "longitude": 6.844711,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 238,
      "squawk": "7742",
      "timestamp": 1646921679,
      "ems": null
    },
    {
      "latitude": 50.685104,
      "longitude": 6.842924,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1646921681,
      "ems": null
    },
    {
      "latitude": 50.684601,
      "longitude": 6.841142,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1646921684,
      "ems": null
    },
    {
      "latitude": 50.684143,
      "longitude": 6.839286,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1646921688,
      "ems": null
    },
    {
      "latitude": 50.683685,
      "longitude": 6.837653,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1646921691,
      "ems": null
    },
    {
      "latitude": 50.683228,
      "longitude": 6.835872,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1646921693,
      "ems": null
    },
    {
      "latitude": 50.68277,
      "longitude": 6.834312,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "squawk": "7742",
      "timestamp": 1646921696,
      "ems": null
    },
    {
      "latitude": 50.682304,
      "longitude": 6.832504,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1646921699,
      "ems": null
    },
    {
      "latitude": 50.681889,
      "longitude": 6.830826,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1646921703,
      "ems": null
    },
    {
      "latitude": 50.681396,
      "longitude": 6.829116,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1646921706,
      "ems": null
    },
    {
      "latitude": 50.680908,
      "longitude": 6.827393,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 245,
      "squawk": "7742",
      "timestamp": 1646921709,
      "ems": null
    },
    {
      "latitude": 50.680443,
      "longitude": 6.825867,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1646921711,
      "ems": null
    },
    {
      "latitude": 50.67984,
      "longitude": 6.824341,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 239,
      "squawk": "7742",
      "timestamp": 1646921715,
      "ems": null
    },
    {
      "latitude": 50.679279,
      "longitude": 6.822739,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1646921718,
      "ems": null
    },
    {
      "latitude": 50.67886,
      "longitude": 6.821442,
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
      "heading": 242,
      "squawk": "7742",
      "timestamp": 1646921720,
      "ems": null
    },
    {
      "latitude": 50.677742,
      "longitude": 6.817932,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1646921726,
      "ems": null
    },
    {
      "latitude": 50.677185,
      "longitude": 6.816423,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 234,
      "squawk": "7742",
      "timestamp": 1646921730,
      "ems": null
    },
    {
      "latitude": 50.67627,
      "longitude": 6.815161,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1646921733,
      "ems": null
    },
    {
      "latitude": 50.675369,
      "longitude": 6.814728,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1646921736,
      "ems": null
    },
    {
      "latitude": 50.674252,
      "longitude": 6.814957,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 163,
      "squawk": "7742",
      "timestamp": 1646921739,
      "ems": null
    },
    {
      "latitude": 50.673553,
      "longitude": 6.815567,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1646921742,
      "ems": null
    },
    {
      "latitude": 50.672855,
      "longitude": 6.817017,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1646921745,
      "ems": null
    },
    {
      "latitude": 50.672653,
      "longitude": 6.818724,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 93,
      "squawk": "7742",
      "timestamp": 1646921748,
      "ems": null
    },
    {
      "latitude": 50.672764,
      "longitude": 6.820374,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 80,
      "squawk": "7742",
      "timestamp": 1646921751,
      "ems": null
    },
    {
      "latitude": 50.673248,
      "longitude": 6.822139,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 56,
      "squawk": "7742",
      "timestamp": 1646921754,
      "ems": null
    },
    {
      "latitude": 50.674019,
      "longitude": 6.823425,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "7742",
      "timestamp": 1646921756,
      "ems": null
    },
    {
      "latitude": 50.675182,
      "longitude": 6.824646,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1646921760,
      "ems": null
    },
    {
      "latitude": 50.676441,
      "longitude": 6.82518,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 9,
      "squawk": "7742",
      "timestamp": 1646921763,
      "ems": null
    },
    {
      "latitude": 50.677872,
      "longitude": 6.825182,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 351,
      "squawk": "7742",
      "timestamp": 1646921766,
      "ems": null
    },
    {
      "latitude": 50.679279,
      "longitude": 6.824493,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 338,
      "squawk": "7742",
      "timestamp": 1646921768,
      "ems": null
    },
    {
      "latitude": 50.680489,
      "longitude": 6.82312,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 320,
      "squawk": "7742",
      "timestamp": 1646921772,
      "ems": null
    },
    {
      "latitude": 50.681259,
      "longitude": 6.821396,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 295,
      "squawk": "7742",
      "timestamp": 1646921775,
      "ems": null
    },
    {
      "latitude": 50.681442,
      "longitude": 6.819466,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 262,
      "squawk": "7742",
      "timestamp": 1646921778,
      "ems": null
    },
    {
      "latitude": 50.680908,
      "longitude": 6.81778,
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
      "heading": 229,
      "squawk": "7742",
      "timestamp": 1646921780,
      "ems": null
    },
    {
      "latitude": 50.679932,
      "longitude": 6.816942,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1646921783,
      "ems": null
    },
    {
      "latitude": 50.678814,
      "longitude": 6.817932,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 127,
      "squawk": "7742",
      "timestamp": 1646921787,
      "ems": null
    },
    {
      "latitude": 50.678768,
      "longitude": 6.819611,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 82,
      "squawk": "7742",
      "timestamp": 1646921790,
      "ems": null
    },
    {
      "latitude": 50.679611,
      "longitude": 6.821248,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 82,
      "squawk": "7742",
      "timestamp": 1646921794,
      "ems": null
    },
    {
      "latitude": 50.67984,
      "longitude": 6.821471,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 82,
      "squawk": "7742",
      "timestamp": 1646921794,
      "ems": null
    },
    {
      "latitude": 50.6819,
      "longitude": 6.821248,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 337,
      "squawk": "7742",
      "timestamp": 1646921798,
      "ems": null
    },
    {
      "latitude": 50.683144,
      "longitude": 6.820297,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 332,
      "squawk": "7742",
      "timestamp": 1646921801,
      "ems": null
    },
    {
      "latitude": 50.684402,
      "longitude": 6.819305,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 331,
      "squawk": "7742",
      "timestamp": 1646921804,
      "ems": null
    },
    {
      "latitude": 50.685566,
      "longitude": 6.817703,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 312,
      "squawk": "7742",
      "timestamp": 1646921808,
      "ems": null
    },
    {
      "latitude": 50.686066,
      "longitude": 6.816051,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 290,
      "squawk": "7742",
      "timestamp": 1646921810,
      "ems": null
    },
    {
      "latitude": 50.686077,
      "longitude": 6.814194,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 255,
      "squawk": "7742",
      "timestamp": 1646921814,
      "ems": null
    },
    {
      "latitude": 50.685425,
      "longitude": 6.812515,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1646921817,
      "ems": null
    },
    {
      "latitude": 50.684601,
      "longitude": 6.811375,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 220,
      "squawk": "7742",
      "timestamp": 1646921820,
      "ems": null
    },
    {
      "latitude": 50.68375,
      "longitude": 6.810303,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 219,
      "squawk": "7742",
      "timestamp": 1646921822,
      "ems": null
    },
    {
      "latitude": 50.682911,
      "longitude": 6.809235,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1646921826,
      "ems": null
    },
    {
      "latitude": 50.681992,
      "longitude": 6.808183,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1646921829,
      "ems": null
    },
    {
      "latitude": 50.681095,
      "longitude": 6.807327,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1646921832,
      "ems": null
    },
    {
      "latitude": 50.680351,
      "longitude": 6.806564,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1646921835,
      "ems": null
    },
    {
      "latitude": 50.679474,
      "longitude": 6.805808,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1646921838,
      "ems": null
    },
    {
      "latitude": 50.678581,
      "longitude": 6.805038,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1646921840,
      "ems": null
    },
    {
      "latitude": 50.677696,
      "longitude": 6.804276,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1646921844,
      "ems": null
    },
    {
      "latitude": 50.67691,
      "longitude": 6.803655,
      "altitude": {
        "feet": 3600,
        "meters": 1097
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1646921846,
      "ems": null
    },
    {
      "latitude": 50.676224,
      "longitude": 6.803135,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1646921850,
      "ems": null
    },
    {
      "latitude": 50.675446,
      "longitude": 6.802616,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1646921852,
      "ems": null
    },
    {
      "latitude": 50.67458,
      "longitude": 6.802292,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1646921856,
      "ems": null
    },
    {
      "latitude": 50.673798,
      "longitude": 6.802319,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1646921859,
      "ems": null
    },
    {
      "latitude": 50.672836,
      "longitude": 6.80269,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1646921862,
      "ems": null
    },
    {
      "latitude": 50.671967,
      "longitude": 6.803209,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1646921865,
      "ems": null
    },
    {
      "latitude": 50.671181,
      "longitude": 6.803803,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 154,
      "squawk": "7742",
      "timestamp": 1646921868,
      "ems": null
    },
    {
      "latitude": 50.670483,
      "longitude": 6.804323,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 154,
      "squawk": "7742",
      "timestamp": 1646921871,
      "ems": null
    },
    {
      "latitude": 50.66983,
      "longitude": 6.804842,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1646921874,
      "ems": null
    },
    {
      "latitude": 50.66922,
      "longitude": 6.805452,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1646921877,
      "ems": null
    },
    {
      "latitude": 50.668625,
      "longitude": 6.806175,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 140,
      "squawk": "7742",
      "timestamp": 1646921880,
      "ems": null
    },
    {
      "latitude": 50.668015,
      "longitude": 6.807069,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 133,
      "squawk": "7742",
      "timestamp": 1646921883,
      "ems": null
    },
    {
      "latitude": 50.667435,
      "longitude": 6.808054,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 130,
      "squawk": "7742",
      "timestamp": 1646921886,
      "ems": null
    },
    {
      "latitude": 50.666931,
      "longitude": 6.808994,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -1664,
        "ms": -8.5
      },
      "heading": 130,
      "squawk": "7742",
      "timestamp": 1646921889,
      "ems": null
    },
    {
      "latitude": 50.666199,
      "longitude": 6.810262,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -2304,
        "ms": -11.7
      },
      "heading": 134,
      "squawk": "7742",
      "timestamp": 1646921892,
      "ems": null
    },
    {
      "latitude": 50.665409,
      "longitude": 6.811375,
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
        "fpm": -1664,
        "ms": -8.5
      },
      "heading": 140,
      "squawk": "7742",
      "timestamp": 1646921895,
      "ems": null
    },
    {
      "latitude": 50.664322,
      "longitude": 6.812535,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1646921898,
      "ems": null
    },
    {
      "latitude": 50.663269,
      "longitude": 6.813547,
      "altitude": {
        "feet": 3600,
        "meters": 1097
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 1984,
        "ms": 10.1
      },
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1646921901,
      "ems": null
    },
    {
      "latitude": 50.661777,
      "longitude": 6.815235,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 1472,
        "ms": 7.5
      },
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1646921907,
      "ems": null
    },
    {
      "latitude": 50.661255,
      "longitude": 6.816005,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 133,
      "squawk": "7742",
      "timestamp": 1646921910,
      "ems": null
    },
    {
      "latitude": 50.660797,
      "longitude": 6.816944,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 126,
      "squawk": "7742",
      "timestamp": 1646921913,
      "ems": null
    },
    {
      "latitude": 50.660248,
      "longitude": 6.818101,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": -2048,
        "ms": -10.4
      },
      "heading": 124,
      "squawk": "7742",
      "timestamp": 1646921916,
      "ems": null
    },
    {
      "latitude": 50.658798,
      "longitude": 6.820802,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 134,
      "squawk": "7742",
      "timestamp": 1646921922,
      "ems": null
    },
    {
      "latitude": 50.657959,
      "longitude": 6.822139,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 133,
      "squawk": "7742",
      "timestamp": 1646921925,
      "ems": null
    },
    {
      "latitude": 50.657215,
      "longitude": 6.8234,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 133,
      "squawk": "7742",
      "timestamp": 1646921928,
      "ems": null
    },
    {
      "latitude": 50.656376,
      "longitude": 6.824811,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 135,
      "squawk": "7742",
      "timestamp": 1646921931,
      "ems": null
    },
    {
      "latitude": 50.655769,
      "longitude": 6.825553,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 140,
      "squawk": "7742",
      "timestamp": 1646921934,
      "ems": null
    },
    {
      "latitude": 50.654747,
      "longitude": 6.82689,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1646921937,
      "ems": null
    },
    {
      "latitude": 50.654022,
      "longitude": 6.827786,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "squawk": "7742",
      "timestamp": 1646921940,
      "ems": null
    },
    {
      "latitude": 50.653244,
      "longitude": 6.828726,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 142,
      "squawk": "7742",
      "timestamp": 1646921943,
      "ems": null
    },
    {
      "latitude": 50.652466,
      "longitude": 6.82971,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 136,
      "squawk": "7742",
      "timestamp": 1646921946,
      "ems": null
    },
    {
      "latitude": 50.651257,
      "longitude": 6.832011,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 126,
      "squawk": "7742",
      "timestamp": 1646921952,
      "ems": null
    },
    {
      "latitude": 50.650791,
      "longitude": 6.833051,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 123,
      "squawk": "7742",
      "timestamp": 1646921955,
      "ems": null
    },
    {
      "latitude": 50.650177,
      "longitude": 6.834436,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 127,
      "squawk": "7742",
      "timestamp": 1646921958,
      "ems": null
    },
    {
      "latitude": 50.648788,
      "longitude": 6.836243,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1646921964,
      "ems": null
    },
    {
      "latitude": 50.647995,
      "longitude": 6.836911,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1646921967,
      "ems": null
    },
    {
      "latitude": 50.646973,
      "longitude": 6.837282,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 167,
      "squawk": "7742",
      "timestamp": 1646921970,
      "ems": null
    },
    {
      "latitude": 50.645901,
      "longitude": 6.83743,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1646921973,
      "ems": null
    },
    {
      "latitude": 50.644867,
      "longitude": 6.837471,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1646921976,
      "ems": null
    },
    {
      "latitude": 50.643768,
      "longitude": 6.837471,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1646921979,
      "ems": null
    },
    {
      "latitude": 50.642715,
      "longitude": 6.837543,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1646921982,
      "ems": null
    },
    {
      "latitude": 50.641754,
      "longitude": 6.837543,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1646921985,
      "ems": null
    },
    {
      "latitude": 50.640736,
      "longitude": 6.837504,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1646921988,
      "ems": null
    },
    {
      "latitude": 50.639832,
      "longitude": 6.837399,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1646921991,
      "ems": null
    },
    {
      "latitude": 50.639008,
      "longitude": 6.837255,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 188,
      "squawk": "7742",
      "timestamp": 1646921994,
      "ems": null
    },
    {
      "latitude": 50.638222,
      "longitude": 6.836985,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1646921997,
      "ems": null
    },
    {
      "latitude": 50.637428,
      "longitude": 6.836688,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1646922000,
      "ems": null
    },
    {
      "latitude": 50.636627,
      "longitude": 6.83646,
      "altitude": {
        "feet": 3600,
        "meters": 1097
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1646922003,
      "ems": null
    },
    {
      "latitude": 50.635941,
      "longitude": 6.836168,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1646922006,
      "ems": null
    },
    {
      "latitude": 50.634823,
      "longitude": 6.835797,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1646922009,
      "ems": null
    },
    {
      "latitude": 50.634018,
      "longitude": 6.835448,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1646922012,
      "ems": null
    },
    {
      "latitude": 50.632874,
      "longitude": 6.835086,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 188,
      "squawk": "7742",
      "timestamp": 1646922015,
      "ems": null
    },
    {
      "latitude": 50.63105,
      "longitude": 6.835055,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1646922021,
      "ems": null
    },
    {
      "latitude": 50.630119,
      "longitude": 6.835204,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 174,
      "squawk": "7742",
      "timestamp": 1646922024,
      "ems": null
    },
    {
      "latitude": 50.629284,
      "longitude": 6.835352,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1646922027,
      "ems": null
    },
    {
      "latitude": 50.62849,
      "longitude": 6.835872,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 152,
      "squawk": "7742",
      "timestamp": 1646922030,
      "ems": null
    },
    {
      "latitude": 50.627838,
      "longitude": 6.836762,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 127,
      "squawk": "7742",
      "timestamp": 1646922033,
      "ems": null
    },
    {
      "latitude": 50.627605,
      "longitude": 6.838024,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1646922036,
      "ems": null
    },
    {
      "latitude": 50.627655,
      "longitude": 6.839495,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 84,
      "squawk": "7742",
      "timestamp": 1646922039,
      "ems": null
    },
    {
      "latitude": 50.627747,
      "longitude": 6.840796,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 82,
      "squawk": "7742",
      "timestamp": 1646922042,
      "ems": null
    },
    {
      "latitude": 50.627884,
      "longitude": 6.842386,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 83,
      "squawk": "7742",
      "timestamp": 1646922045,
      "ems": null
    },
    {
      "latitude": 50.627975,
      "longitude": 6.843832,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 83,
      "squawk": "7742",
      "timestamp": 1646922048,
      "ems": null
    },
    {
      "latitude": 50.628071,
      "longitude": 6.845076,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 85,
      "squawk": "7742",
      "timestamp": 1646922051,
      "ems": null
    },
    {
      "latitude": 50.628113,
      "longitude": 6.846723,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 87,
      "squawk": "7742",
      "timestamp": 1646922054,
      "ems": null
    },
    {
      "latitude": 50.628071,
      "longitude": 6.848194,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 93,
      "squawk": "7742",
      "timestamp": 1646922057,
      "ems": null
    },
    {
      "latitude": 50.628021,
      "longitude": 6.849614,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 93,
      "squawk": "7742",
      "timestamp": 1646922060,
      "ems": null
    },
    {
      "latitude": 50.627979,
      "longitude": 6.851237,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 90,
      "squawk": "7742",
      "timestamp": 1646922063,
      "ems": null
    },
    {
      "latitude": 50.627975,
      "longitude": 6.852939,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 92,
      "squawk": "7742",
      "timestamp": 1646922066,
      "ems": null
    },
    {
      "latitude": 50.62793,
      "longitude": 6.854674,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 91,
      "squawk": "7742",
      "timestamp": 1646922069,
      "ems": null
    },
    {
      "latitude": 50.62793,
      "longitude": 6.855686,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 90,
      "squawk": "7742",
      "timestamp": 1646922071,
      "ems": null
    },
    {
      "latitude": 50.627888,
      "longitude": 6.857473,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 94,
      "squawk": "7742",
      "timestamp": 1646922074,
      "ems": null
    },
    {
      "latitude": 50.627747,
      "longitude": 6.85918,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 97,
      "squawk": "7742",
      "timestamp": 1646922078,
      "ems": null
    },
    {
      "latitude": 50.627609,
      "longitude": 6.860673,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 96,
      "squawk": "7742",
      "timestamp": 1646922081,
      "ems": null
    },
    {
      "latitude": 50.627514,
      "longitude": 6.861927,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 97,
      "squawk": "7742",
      "timestamp": 1646922084,
      "ems": null
    },
    {
      "latitude": 50.627373,
      "longitude": 6.863411,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 99,
      "squawk": "7742",
      "timestamp": 1646922087,
      "ems": null
    },
    {
      "latitude": 50.627235,
      "longitude": 6.864674,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 100,
      "squawk": "7742",
      "timestamp": 1646922090,
      "ems": null
    },
    {
      "latitude": 50.627048,
      "longitude": 6.866307,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 99,
      "squawk": "7742",
      "timestamp": 1646922093,
      "ems": null
    },
    {
      "latitude": 50.626923,
      "longitude": 6.867684,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 97,
      "squawk": "7742",
      "timestamp": 1646922096,
      "ems": null
    },
    {
      "latitude": 50.626785,
      "longitude": 6.87043,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 92,
      "squawk": "7742",
      "timestamp": 1646922102,
      "ems": null
    },
    {
      "latitude": 50.626785,
      "longitude": 6.873466,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 86,
      "squawk": "7742",
      "timestamp": 1646922108,
      "ems": null
    },
    {
      "latitude": 50.626862,
      "longitude": 6.874769,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 84,
      "squawk": "7742",
      "timestamp": 1646922111,
      "ems": null
    },
    {
      "latitude": 50.626957,
      "longitude": 6.876254,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 82,
      "squawk": "7742",
      "timestamp": 1646922114,
      "ems": null
    },
    {
      "latitude": 50.627094,
      "longitude": 6.87759,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 84,
      "squawk": "7742",
      "timestamp": 1646922117,
      "ems": null
    },
    {
      "latitude": 50.627094,
      "longitude": 6.878852,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 87,
      "squawk": "7742",
      "timestamp": 1646922120,
      "ems": null
    },
    {
      "latitude": 50.627151,
      "longitude": 6.880188,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 89,
      "squawk": "7742",
      "timestamp": 1646922123,
      "ems": null
    },
    {
      "latitude": 50.62714,
      "longitude": 6.881598,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 90,
      "squawk": "7742",
      "timestamp": 1646922126,
      "ems": null
    },
    {
      "latitude": 50.627151,
      "longitude": 6.882646,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 89,
      "squawk": "7742",
      "timestamp": 1646922128,
      "ems": null
    },
    {
      "latitude": 50.627197,
      "longitude": 6.885681,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 88,
      "squawk": "7742",
      "timestamp": 1646922135,
      "ems": null
    },
    {
      "latitude": 50.627243,
      "longitude": 6.888283,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 89,
      "squawk": "7742",
      "timestamp": 1646922141,
      "ems": null
    },
    {
      "latitude": 50.627235,
      "longitude": 6.889616,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 89,
      "squawk": "7742",
      "timestamp": 1646922144,
      "ems": null
    },
    {
      "latitude": 50.627281,
      "longitude": 6.890877,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 90,
      "squawk": "7742",
      "timestamp": 1646922147,
      "ems": null
    },
    {
      "latitude": 50.627335,
      "longitude": 6.893632,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 81,
      "squawk": "7742",
      "timestamp": 1646922153,
      "ems": null
    },
    {
      "latitude": 50.627514,
      "longitude": 6.895034,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1646922156,
      "ems": null
    },
    {
      "latitude": 50.627747,
      "longitude": 6.896379,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646922159,
      "ems": null
    },
    {
      "latitude": 50.628025,
      "longitude": 6.897781,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 70,
      "squawk": "7742",
      "timestamp": 1646922162,
      "ems": null
    },
    {
      "latitude": 50.628399,
      "longitude": 6.899191,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1646922165,
      "ems": null
    },
    {
      "latitude": 50.628662,
      "longitude": 6.900209,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1646922168,
      "ems": null
    },
    {
      "latitude": 50.629166,
      "longitude": 6.902088,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1646922171,
      "ems": null
    },
    {
      "latitude": 50.629486,
      "longitude": 6.903534,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1646922174,
      "ems": null
    },
    {
      "latitude": 50.629841,
      "longitude": 6.904685,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1646922177,
      "ems": null
    },
    {
      "latitude": 50.63026,
      "longitude": 6.906021,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1646922180,
      "ems": null
    },
    {
      "latitude": 50.63068,
      "longitude": 6.907431,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1646922183,
      "ems": null
    },
    {
      "latitude": 50.631088,
      "longitude": 6.90881,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1646922186,
      "ems": null
    },
    {
      "latitude": 50.631424,
      "longitude": 6.909955,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1646922189,
      "ems": null
    },
    {
      "latitude": 50.631798,
      "longitude": 6.911217,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1646922192,
      "ems": null
    },
    {
      "latitude": 50.632587,
      "longitude": 6.913889,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1646922198,
      "ems": null
    },
    {
      "latitude": 50.633148,
      "longitude": 6.916616,
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
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1646922204,
      "ems": null
    },
    {
      "latitude": 50.633331,
      "longitude": 6.917845,
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
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1646922207,
      "ems": null
    },
    {
      "latitude": 50.633564,
      "longitude": 6.919456,
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
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1646922210,
      "ems": null
    },
    {
      "latitude": 50.633751,
      "longitude": 6.920644,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1646922213,
      "ems": null
    },
    {
      "latitude": 50.633926,
      "longitude": 6.92211,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1646922216,
      "ems": null
    },
    {
      "latitude": 50.634064,
      "longitude": 6.923266,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 80,
      "squawk": "7742",
      "timestamp": 1646922219,
      "ems": null
    },
    {
      "latitude": 50.634262,
      "longitude": 6.924876,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 77,
      "squawk": "7742",
      "timestamp": 1646922222,
      "ems": null
    },
    {
      "latitude": 50.634449,
      "longitude": 6.926137,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1646922225,
      "ems": null
    },
    {
      "latitude": 50.634705,
      "longitude": 6.92753,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 73,
      "squawk": "7742",
      "timestamp": 1646922228,
      "ems": null
    },
    {
      "latitude": 50.634888,
      "longitude": 6.928687,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 73,
      "squawk": "7742",
      "timestamp": 1646922231,
      "ems": null
    },
    {
      "latitude": 50.6353,
      "longitude": 6.931217,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 77,
      "squawk": "7742",
      "timestamp": 1646922236,
      "ems": null
    },
    {
      "latitude": 50.635754,
      "longitude": 6.934081,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646922243,
      "ems": null
    },
    {
      "latitude": 50.636173,
      "longitude": 6.936901,
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
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1646922249,
      "ems": null
    },
    {
      "latitude": 50.636593,
      "longitude": 6.939351,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1646922255,
      "ems": null
    },
    {
      "latitude": 50.636684,
      "longitude": 6.940687,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 82,
      "squawk": "7742",
      "timestamp": 1646922258,
      "ems": null
    },
    {
      "latitude": 50.63681,
      "longitude": 6.941914,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 80,
      "squawk": "7742",
      "timestamp": 1646922261,
      "ems": null
    },
    {
      "latitude": 50.637131,
      "longitude": 6.944299,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1646922267,
      "ems": null
    },
    {
      "latitude": 50.637241,
      "longitude": 6.945661,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 83,
      "squawk": "7742",
      "timestamp": 1646922270,
      "ems": null
    },
    {
      "latitude": 50.637314,
      "longitude": 6.946684,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 84,
      "squawk": "7742",
      "timestamp": 1646922273,
      "ems": null
    },
    {
      "latitude": 50.637405,
      "longitude": 6.94813,
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
      "heading": 83,
      "squawk": "7742",
      "timestamp": 1646922276,
      "ems": null
    },
    {
      "latitude": 50.637569,
      "longitude": 6.949521,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1646922279,
      "ems": null
    },
    {
      "latitude": 50.637863,
      "longitude": 6.952105,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 77,
      "squawk": "7742",
      "timestamp": 1646922285,
      "ems": null
    },
    {
      "latitude": 50.638222,
      "longitude": 6.954717,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 83,
      "squawk": "7742",
      "timestamp": 1646922291,
      "ems": null
    },
    {
      "latitude": 50.638176,
      "longitude": 6.956053,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 93,
      "squawk": "7742",
      "timestamp": 1646922294,
      "ems": null
    },
    {
      "latitude": 50.638126,
      "longitude": 6.957463,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 93,
      "squawk": "7742",
      "timestamp": 1646922297,
      "ems": null
    },
    {
      "latitude": 50.638092,
      "longitude": 6.958827,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "squawk": "7742",
      "timestamp": 1646922300,
      "ems": null
    },
    {
      "latitude": 50.638092,
      "longitude": 6.9602,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 90,
      "squawk": "7742",
      "timestamp": 1646922303,
      "ems": null
    },
    {
      "latitude": 50.638126,
      "longitude": 6.96162,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 90,
      "squawk": "7742",
      "timestamp": 1646922307,
      "ems": null
    },
    {
      "latitude": 50.638092,
      "longitude": 6.962947,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 93,
      "squawk": "7742",
      "timestamp": 1646922309,
      "ems": null
    },
    {
      "latitude": 50.637955,
      "longitude": 6.964103,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 100,
      "squawk": "7742",
      "timestamp": 1646922312,
      "ems": null
    },
    {
      "latitude": 50.637756,
      "longitude": 6.965258,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1646922315,
      "ems": null
    },
    {
      "latitude": 50.637497,
      "longitude": 6.966416,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1646922318,
      "ems": null
    },
    {
      "latitude": 50.637241,
      "longitude": 6.967782,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 105,
      "squawk": "7742",
      "timestamp": 1646922321,
      "ems": null
    },
    {
      "latitude": 50.637039,
      "longitude": 6.969018,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 104,
      "squawk": "7742",
      "timestamp": 1646922324,
      "ems": null
    },
    {
      "latitude": 50.636871,
      "longitude": 6.970232,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 101,
      "squawk": "7742",
      "timestamp": 1646922327,
      "ems": null
    },
    {
      "latitude": 50.636719,
      "longitude": 6.97162,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 97,
      "squawk": "7742",
      "timestamp": 1646922330,
      "ems": null
    },
    {
      "latitude": 50.636627,
      "longitude": 6.972993,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 97,
      "squawk": "7742",
      "timestamp": 1646922333,
      "ems": null
    },
    {
      "latitude": 50.63649,
      "longitude": 6.974222,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 97,
      "squawk": "7742",
      "timestamp": 1646922336,
      "ems": null
    },
    {
      "latitude": 50.63636,
      "longitude": 6.976986,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 94,
      "squawk": "7742",
      "timestamp": 1646922342,
      "ems": null
    },
    {
      "latitude": 50.636311,
      "longitude": 6.978323,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 94,
      "squawk": "7742",
      "timestamp": 1646922345,
      "ems": null
    },
    {
      "latitude": 50.636261,
      "longitude": 6.979715,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 92,
      "squawk": "7742",
      "timestamp": 1646922348,
      "ems": null
    },
    {
      "latitude": 50.636261,
      "longitude": 6.980872,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 88,
      "squawk": "7742",
      "timestamp": 1646922351,
      "ems": null
    },
    {
      "latitude": 50.636353,
      "longitude": 6.982317,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 84,
      "squawk": "7742",
      "timestamp": 1646922354,
      "ems": null
    },
    {
      "latitude": 50.636452,
      "longitude": 6.983667,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "7742",
      "timestamp": 1646922357,
      "ems": null
    },
    {
      "latitude": 50.636639,
      "longitude": 6.985003,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1646922360,
      "ems": null
    },
    {
      "latitude": 50.63681,
      "longitude": 6.986437,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1646922363,
      "ems": null
    },
    {
      "latitude": 50.637058,
      "longitude": 6.987973,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 77,
      "squawk": "7742",
      "timestamp": 1646922367,
      "ems": null
    },
    {
      "latitude": 50.637177,
      "longitude": 6.989111,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 77,
      "squawk": "7742",
      "timestamp": 1646922369,
      "ems": null
    },
    {
      "latitude": 50.637405,
      "longitude": 6.990702,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 80,
      "squawk": "7742",
      "timestamp": 1646922373,
      "ems": null
    },
    {
      "latitude": 50.637543,
      "longitude": 6.992147,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "7742",
      "timestamp": 1646922376,
      "ems": null
    },
    {
      "latitude": 50.637711,
      "longitude": 6.993614,
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
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1646922379,
      "ems": null
    },
    {
      "latitude": 50.637909,
      "longitude": 6.995039,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646922382,
      "ems": null
    },
    {
      "latitude": 50.638126,
      "longitude": 6.996212,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 71,
      "squawk": "7742",
      "timestamp": 1646922384,
      "ems": null
    },
    {
      "latitude": 50.638454,
      "longitude": 6.997623,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 71,
      "squawk": "7742",
      "timestamp": 1646922388,
      "ems": null
    },
    {
      "latitude": 50.638874,
      "longitude": 7.000444,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 80,
      "squawk": "7742",
      "timestamp": 1646922394,
      "ems": null
    },
    {
      "latitude": 50.639008,
      "longitude": 7.001905,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "7742",
      "timestamp": 1646922396,
      "ems": null
    },
    {
      "latitude": 50.639145,
      "longitude": 7.003351,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 82,
      "squawk": "7742",
      "timestamp": 1646922400,
      "ems": null
    },
    {
      "latitude": 50.639385,
      "longitude": 7.00616,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 83,
      "squawk": "7742",
      "timestamp": 1646922406,
      "ems": null
    },
    {
      "latitude": 50.639648,
      "longitude": 7.00906,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1646922411,
      "ems": null
    },
    {
      "latitude": 50.639805,
      "longitude": 7.010688,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1646922415,
      "ems": null
    },
    {
      "latitude": 50.639988,
      "longitude": 7.012172,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 81,
      "squawk": "7742",
      "timestamp": 1646922418,
      "ems": null
    },
    {
      "latitude": 50.640083,
      "longitude": 7.013583,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 81,
      "squawk": "7742",
      "timestamp": 1646922421,
      "ems": null
    },
    {
      "latitude": 50.640457,
      "longitude": 7.016404,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1646922427,
      "ems": null
    },
    {
      "latitude": 50.640656,
      "longitude": 7.017951,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 77,
      "squawk": "7742",
      "timestamp": 1646922430,
      "ems": null
    },
    {
      "latitude": 50.641014,
      "longitude": 7.021006,
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
      "heading": 81,
      "squawk": "7742",
      "timestamp": 1646922436,
      "ems": null
    },
    {
      "latitude": 50.641338,
      "longitude": 7.024124,
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
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1646922442,
      "ems": null
    },
    {
      "latitude": 50.641708,
      "longitude": 7.027058,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1646922447,
      "ems": null
    },
    {
      "latitude": 50.642036,
      "longitude": 7.030137,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1646922454,
      "ems": null
    },
    {
      "latitude": 50.642456,
      "longitude": 7.03318,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1646922460,
      "ems": null
    },
    {
      "latitude": 50.642761,
      "longitude": 7.036093,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1646922465,
      "ems": null
    },
    {
      "latitude": 50.643108,
      "longitude": 7.039119,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1646922472,
      "ems": null
    },
    {
      "latitude": 50.643341,
      "longitude": 7.042088,
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
      "heading": 83,
      "squawk": "7742",
      "timestamp": 1646922478,
      "ems": null
    },
    {
      "latitude": 50.643528,
      "longitude": 7.044909,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 84,
      "squawk": "7742",
      "timestamp": 1646922484,
      "ems": null
    },
    {
      "latitude": 50.64362,
      "longitude": 7.04669,
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
      "heading": 86,
      "squawk": "7742",
      "timestamp": 1646922487,
      "ems": null
    },
    {
      "latitude": 50.643677,
      "longitude": 7.048091,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 86,
      "squawk": "7742",
      "timestamp": 1646922490,
      "ems": null
    },
    {
      "latitude": 50.643723,
      "longitude": 7.049681,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 84,
      "squawk": "7742",
      "timestamp": 1646922493,
      "ems": null
    },
    {
      "latitude": 50.643806,
      "longitude": 7.051292,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 85,
      "squawk": "7742",
      "timestamp": 1646922496,
      "ems": null
    },
    {
      "latitude": 50.64386,
      "longitude": 7.052934,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 86,
      "squawk": "7742",
      "timestamp": 1646922499,
      "ems": null
    },
    {
      "latitude": 50.643993,
      "longitude": 7.055598,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 85,
      "squawk": "7742",
      "timestamp": 1646922505,
      "ems": null
    },
    {
      "latitude": 50.644135,
      "longitude": 7.058716,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 85,
      "squawk": "7742",
      "timestamp": 1646922511,
      "ems": null
    },
    {
      "latitude": 50.644226,
      "longitude": 7.061607,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 89,
      "squawk": "7742",
      "timestamp": 1646922517,
      "ems": null
    },
    {
      "latitude": 50.644226,
      "longitude": 7.063021,
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
      "heading": 91,
      "squawk": "7742",
      "timestamp": 1646922520,
      "ems": null
    },
    {
      "latitude": 50.644226,
      "longitude": 7.064506,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 89,
      "squawk": "7742",
      "timestamp": 1646922523,
      "ems": null
    },
    {
      "latitude": 50.644318,
      "longitude": 7.067401,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 87,
      "squawk": "7742",
      "timestamp": 1646922529,
      "ems": null
    },
    {
      "latitude": 50.644367,
      "longitude": 7.070148,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 86,
      "squawk": "7742",
      "timestamp": 1646922535,
      "ems": null
    },
    {
      "latitude": 50.644501,
      "longitude": 7.073172,
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
      "heading": 85,
      "squawk": "7742",
      "timestamp": 1646922541,
      "ems": null
    },
    {
      "latitude": 50.644691,
      "longitude": 7.076012,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 85,
      "squawk": "7742",
      "timestamp": 1646922547,
      "ems": null
    },
    {
      "latitude": 50.644737,
      "longitude": 7.077274,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 86,
      "squawk": "7742",
      "timestamp": 1646922550,
      "ems": null
    },
    {
      "latitude": 50.644878,
      "longitude": 7.080095,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 82,
      "squawk": "7742",
      "timestamp": 1646922556,
      "ems": null
    },
    {
      "latitude": 50.645004,
      "longitude": 7.081556,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 80,
      "squawk": "7742",
      "timestamp": 1646922559,
      "ems": null
    },
    {
      "latitude": 50.645187,
      "longitude": 7.083002,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1646922562,
      "ems": null
    },
    {
      "latitude": 50.645344,
      "longitude": 7.084251,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 77,
      "squawk": "7742",
      "timestamp": 1646922565,
      "ems": null
    },
    {
      "latitude": 50.645599,
      "longitude": 7.085893,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646922568,
      "ems": null
    },
    {
      "latitude": 50.645809,
      "longitude": 7.087072,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646922571,
      "ems": null
    },
    {
      "latitude": 50.646042,
      "longitude": 7.088557,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1646922574,
      "ems": null
    },
    {
      "latitude": 50.646332,
      "longitude": 7.090446,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1646922577,
      "ems": null
    },
    {
      "latitude": 50.646515,
      "longitude": 7.091675,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1646922580,
      "ems": null
    },
    {
      "latitude": 50.646786,
      "longitude": 7.093382,
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
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1646922583,
      "ems": null
    },
    {
      "latitude": 50.647156,
      "longitude": 7.096084,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1646922589,
      "ems": null
    },
    {
      "latitude": 50.647476,
      "longitude": 7.099192,
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
      "heading": 81,
      "squawk": "7742",
      "timestamp": 1646922595,
      "ems": null
    },
    {
      "latitude": 50.647614,
      "longitude": 7.100637,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "7742",
      "timestamp": 1646922598,
      "ems": null
    },
    {
      "latitude": 50.647671,
      "longitude": 7.102067,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 87,
      "squawk": "7742",
      "timestamp": 1646922601,
      "ems": null
    },
    {
      "latitude": 50.647671,
      "longitude": 7.103477,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 90,
      "squawk": "7742",
      "timestamp": 1646922604,
      "ems": null
    },
    {
      "latitude": 50.647671,
      "longitude": 7.104888,
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
      "heading": 90,
      "squawk": "7742",
      "timestamp": 1646922607,
      "ems": null
    },
    {
      "latitude": 50.647705,
      "longitude": 7.106348,
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
      "heading": 88,
      "squawk": "7742",
      "timestamp": 1646922610,
      "ems": null
    },
    {
      "latitude": 50.647762,
      "longitude": 7.107783,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 84,
      "squawk": "7742",
      "timestamp": 1646922613,
      "ems": null
    },
    {
      "latitude": 50.647842,
      "longitude": 7.109239,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 86,
      "squawk": "7742",
      "timestamp": 1646922616,
      "ems": null
    },
    {
      "latitude": 50.647888,
      "longitude": 7.110612,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 87,
      "squawk": "7742",
      "timestamp": 1646922619,
      "ems": null
    },
    {
      "latitude": 50.647903,
      "longitude": 7.111866,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 89,
      "squawk": "7742",
      "timestamp": 1646922622,
      "ems": null
    },
    {
      "latitude": 50.647903,
      "longitude": 7.113276,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 89,
      "squawk": "7742",
      "timestamp": 1646922625,
      "ems": null
    },
    {
      "latitude": 50.647934,
      "longitude": 7.114732,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 87,
      "squawk": "7742",
      "timestamp": 1646922628,
      "ems": null
    },
    {
      "latitude": 50.648117,
      "longitude": 7.117478,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 82,
      "squawk": "7742",
      "timestamp": 1646922634,
      "ems": null
    },
    {
      "latitude": 50.648228,
      "longitude": 7.118992,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 83,
      "squawk": "7742",
      "timestamp": 1646922637,
      "ems": null
    },
    {
      "latitude": 50.648369,
      "longitude": 7.121813,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 84,
      "squawk": "7742",
      "timestamp": 1646922643,
      "ems": null
    },
    {
      "latitude": 50.648529,
      "longitude": 7.124561,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 84,
      "squawk": "7742",
      "timestamp": 1646922649,
      "ems": null
    },
    {
      "latitude": 50.648697,
      "longitude": 7.127529,
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
      "heading": 85,
      "squawk": "7742",
      "timestamp": 1646922655,
      "ems": null
    },
    {
      "latitude": 50.648804,
      "longitude": 7.128971,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 81,
      "squawk": "7742",
      "timestamp": 1646922658,
      "ems": null
    },
    {
      "latitude": 50.648941,
      "longitude": 7.130416,
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
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1646922661,
      "ems": null
    },
    {
      "latitude": 50.649113,
      "longitude": 7.13176,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1646922664,
      "ems": null
    },
    {
      "latitude": 50.649395,
      "longitude": 7.133171,
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
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646922667,
      "ems": null
    },
    {
      "latitude": 50.649628,
      "longitude": 7.13468,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646922670,
      "ems": null
    },
    {
      "latitude": 50.64986,
      "longitude": 7.13614,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646922673,
      "ems": null
    },
    {
      "latitude": 50.650131,
      "longitude": 7.137716,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646922676,
      "ems": null
    },
    {
      "latitude": 50.65036,
      "longitude": 7.139162,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646922679,
      "ems": null
    },
    {
      "latitude": 50.650635,
      "longitude": 7.140896,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646922682,
      "ems": null
    },
    {
      "latitude": 50.650864,
      "longitude": 7.142198,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646922685,
      "ems": null
    },
    {
      "latitude": 50.65107,
      "longitude": 7.143563,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1646922688,
      "ems": null
    },
    {
      "latitude": 50.651535,
      "longitude": 7.146681,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1646922694,
      "ems": null
    },
    {
      "latitude": 50.651676,
      "longitude": 7.148314,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 83,
      "squawk": "7742",
      "timestamp": 1646922697,
      "ems": null
    },
    {
      "latitude": 50.651733,
      "longitude": 7.149786,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 86,
      "squawk": "7742",
      "timestamp": 1646922700,
      "ems": null
    },
    {
      "latitude": 50.651779,
      "longitude": 7.151594,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 86,
      "squawk": "7742",
      "timestamp": 1646922703,
      "ems": null
    },
    {
      "latitude": 50.651814,
      "longitude": 7.152619,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 86,
      "squawk": "7742",
      "timestamp": 1646922706,
      "ems": null
    },
    {
      "latitude": 50.652325,
      "longitude": 7.156108,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 70,
      "squawk": "7742",
      "timestamp": 1646922712,
      "ems": null
    },
    {
      "latitude": 50.653072,
      "longitude": 7.160636,
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
      "heading": 80,
      "squawk": "7742",
      "timestamp": 1646922721,
      "ems": null
    },
    {
      "latitude": 50.653305,
      "longitude": 7.162715,
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
      "heading": 77,
      "squawk": "7742",
      "timestamp": 1646922724,
      "ems": null
    },
    {
      "latitude": 50.653584,
      "longitude": 7.164422,
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
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1646922727,
      "ems": null
    },
    {
      "latitude": 50.653885,
      "longitude": 7.166049,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 73,
      "squawk": "7742",
      "timestamp": 1646922730,
      "ems": null
    },
    {
      "latitude": 50.654205,
      "longitude": 7.167712,
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
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1646922733,
      "ems": null
    },
    {
      "latitude": 50.654701,
      "longitude": 7.170806,
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
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1646922739,
      "ems": null
    },
    {
      "latitude": 50.655304,
      "longitude": 7.174,
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
      "heading": 70,
      "squawk": "7742",
      "timestamp": 1646922745,
      "ems": null
    },
    {
      "latitude": 50.65567,
      "longitude": 7.175446,
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
      "heading": 68,
      "squawk": "7742",
      "timestamp": 1646922748,
      "ems": null
    },
    {
      "latitude": 50.656189,
      "longitude": 7.177264,
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
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1646922751,
      "ems": null
    },
    {
      "latitude": 50.656586,
      "longitude": 7.178843,
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
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1646922754,
      "ems": null
    },
    {
      "latitude": 50.657074,
      "longitude": 7.180456,
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
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1646922757,
      "ems": null
    },
    {
      "latitude": 50.657585,
      "longitude": 7.181792,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 60,
      "squawk": "7742",
      "timestamp": 1646922760,
      "ems": null
    },
    {
      "latitude": 50.658237,
      "longitude": 7.183351,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 54,
      "squawk": "7742",
      "timestamp": 1646922763,
      "ems": null
    },
    {
      "latitude": 50.658936,
      "longitude": 7.184762,
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
      "heading": 49,
      "squawk": "7742",
      "timestamp": 1646922766,
      "ems": null
    },
    {
      "latitude": 50.659866,
      "longitude": 7.186246,
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
      "heading": 45,
      "squawk": "7742",
      "timestamp": 1646922769,
      "ems": null
    },
    {
      "latitude": 50.660706,
      "longitude": 7.187508,
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
      "heading": 42,
      "squawk": "7742",
      "timestamp": 1646922772,
      "ems": null
    },
    {
      "latitude": 50.661404,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 38,
      "squawk": "7742",
      "timestamp": 1646922775,
      "ems": null
    },
    {
      "latitude": 50.662613,
      "longitude": 7.189884,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 36,
      "squawk": "7742",
      "timestamp": 1646922778,
      "ems": null
    },
    {
      "latitude": 50.663177,
      "longitude": 7.190552,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 36,
      "squawk": "7742",
      "timestamp": 1646922781,
      "ems": null
    },
    {
      "latitude": 50.664551,
      "longitude": 7.192142,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 36,
      "squawk": "7742",
      "timestamp": 1646922784,
      "ems": null
    },
    {
      "latitude": 50.665455,
      "longitude": 7.19315,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 36,
      "squawk": "7742",
      "timestamp": 1646922787,
      "ems": null
    },
    {
      "latitude": 50.666431,
      "longitude": 7.194115,
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
      "heading": 31,
      "squawk": "7742",
      "timestamp": 1646922790,
      "ems": null
    },
    {
      "latitude": 50.667503,
      "longitude": 7.195006,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 21,
      "squawk": "7742",
      "timestamp": 1646922793,
      "ems": null
    },
    {
      "latitude": 50.668713,
      "longitude": 7.195525,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 15,
      "squawk": "7742",
      "timestamp": 1646922796,
      "ems": null
    },
    {
      "latitude": 50.669952,
      "longitude": 7.1959,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1646922799,
      "ems": null
    },
    {
      "latitude": 50.670776,
      "longitude": 7.1959,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 357,
      "squawk": "7742",
      "timestamp": 1646922802,
      "ems": null
    },
    {
      "latitude": 50.672424,
      "longitude": 7.195377,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 346,
      "squawk": "7742",
      "timestamp": 1646922805,
      "ems": null
    },
    {
      "latitude": 50.67374,
      "longitude": 7.194824,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 343,
      "squawk": "7742",
      "timestamp": 1646922808,
      "ems": null
    },
    {
      "latitude": 50.674988,
      "longitude": 7.194189,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 341,
      "squawk": "7742",
      "timestamp": 1646922811,
      "ems": null
    },
    {
      "latitude": 50.6763,
      "longitude": 7.193451,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 339,
      "squawk": "7742",
      "timestamp": 1646922814,
      "ems": null
    },
    {
      "latitude": 50.677326,
      "longitude": 7.192841,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 338,
      "squawk": "7742",
      "timestamp": 1646922817,
      "ems": null
    },
    {
      "latitude": 50.678909,
      "longitude": 7.191696,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 334,
      "squawk": "7742",
      "timestamp": 1646922820,
      "ems": null
    },
    {
      "latitude": 50.680023,
      "longitude": 7.190849,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 332,
      "squawk": "7742",
      "timestamp": 1646922823,
      "ems": null
    },
    {
      "latitude": 50.681168,
      "longitude": 7.189884,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 330,
      "squawk": "7742",
      "timestamp": 1646922826,
      "ems": null
    },
    {
      "latitude": 50.682354,
      "longitude": 7.188797,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 329,
      "squawk": "7742",
      "timestamp": 1646922829,
      "ems": null
    },
    {
      "latitude": 50.683422,
      "longitude": 7.187805,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1646922832,
      "ems": null
    },
    {
      "latitude": 50.684509,
      "longitude": 7.186766,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1646922835,
      "ems": null
    },
    {
      "latitude": 50.685471,
      "longitude": 7.185727,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1646922839,
      "ems": null
    },
    {
      "latitude": 50.686543,
      "longitude": 7.184525,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1646922841,
      "ems": null
    },
    {
      "latitude": 50.687668,
      "longitude": 7.183351,
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
      "timestamp": 1646922844,
      "ems": null
    },
    {
      "latitude": 50.688637,
      "longitude": 7.182236,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1646922847,
      "ems": null
    },
    {
      "latitude": 50.689613,
      "longitude": 7.181091,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1646922850,
      "ems": null
    },
    {
      "latitude": 50.69046,
      "longitude": 7.179936,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1646922853,
      "ems": null
    },
    {
      "latitude": 50.691467,
      "longitude": 7.178452,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1646922856,
      "ems": null
    },
    {
      "latitude": 50.692314,
      "longitude": 7.177124,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1646922859,
      "ems": null
    },
    {
      "latitude": 50.693153,
      "longitude": 7.175827,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1646922862,
      "ems": null
    },
    {
      "latitude": 50.693989,
      "longitude": 7.174454,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1646922865,
      "ems": null
    },
    {
      "latitude": 50.694855,
      "longitude": 7.173033,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1646922868,
      "ems": null
    },
    {
      "latitude": 50.695496,
      "longitude": 7.171994,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1646922871,
      "ems": null
    },
    {
      "latitude": 50.69632,
      "longitude": 7.170658,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1646922875,
      "ems": null
    },
    {
      "latitude": 50.697235,
      "longitude": 7.169024,
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1646922877,
      "ems": null
    },
    {
      "latitude": 50.698013,
      "longitude": 7.167763,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1646922880,
      "ems": null
    },
    {
      "latitude": 50.698738,
      "longitude": 7.16629,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1646922883,
      "ems": null
    },
    {
      "latitude": 50.69939,
      "longitude": 7.164917,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1646922886,
      "ems": null
    },
    {
      "latitude": 50.699997,
      "longitude": 7.16362,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1646922890,
      "ems": null
    },
    {
      "latitude": 50.700806,
      "longitude": 7.161824,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1646922893,
      "ems": null
    },
    {
      "latitude": 50.701447,
      "longitude": 7.160339,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1646922896,
      "ems": null
    },
    {
      "latitude": 50.702087,
      "longitude": 7.158781,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1646922899,
      "ems": null
    },
    {
      "latitude": 50.702682,
      "longitude": 7.15737,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1646922902,
      "ems": null
    },
    {
      "latitude": 50.703278,
      "longitude": 7.155737,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1646922904,
      "ems": null
    },
    {
      "latitude": 50.703918,
      "longitude": 7.154401,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1646922908,
      "ems": null
    },
    {
      "latitude": 50.704884,
      "longitude": 7.15271,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1646922911,
      "ems": null
    },
    {
      "latitude": 50.70575,
      "longitude": 7.151506,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1646922914,
      "ems": null
    },
    {
      "latitude": 50.706619,
      "longitude": 7.150169,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1646922917,
      "ems": null
    },
    {
      "latitude": 50.707584,
      "longitude": 7.148666,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1646922920,
      "ems": null
    },
    {
      "latitude": 50.708496,
      "longitude": 7.147349,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1646922923,
      "ems": null
    },
    {
      "latitude": 50.709595,
      "longitude": 7.146161,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1646922926,
      "ems": null
    },
    {
      "latitude": 50.710701,
      "longitude": 7.145386,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1646922929,
      "ems": null
    },
    {
      "latitude": 50.711792,
      "longitude": 7.144899,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1646922931,
      "ems": null
    },
    {
      "latitude": 50.713169,
      "longitude": 7.144852,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1646922935,
      "ems": null
    },
    {
      "latitude": 50.714333,
      "longitude": 7.145081,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1646922938,
      "ems": null
    },
    {
      "latitude": 50.715591,
      "longitude": 7.14527,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1646922941,
      "ems": null
    },
    {
      "latitude": 50.716801,
      "longitude": 7.145386,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1646922944,
      "ems": null
    },
    {
      "latitude": 50.71788,
      "longitude": 7.145567,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1646922947,
      "ems": null
    },
    {
      "latitude": 50.71907,
      "longitude": 7.145716,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1646922950,
      "ems": null
    },
    {
      "latitude": 50.720245,
      "longitude": 7.145844,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1646922953,
      "ems": null
    },
    {
      "latitude": 50.721451,
      "longitude": 7.145938,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1646922956,
      "ems": null
    },
    {
      "latitude": 50.722572,
      "longitude": 7.146149,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1646922959,
      "ems": null
    },
    {
      "latitude": 50.723694,
      "longitude": 7.146309,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1646922962,
      "ems": null
    },
    {
      "latitude": 50.725647,
      "longitude": 7.146606,
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1646922968,
      "ems": null
    },
    {
      "latitude": 50.726902,
      "longitude": 7.146683,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1646922971,
      "ems": null
    },
    {
      "latitude": 50.728115,
      "longitude": 7.146149,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1646922974,
      "ems": null
    },
    {
      "latitude": 50.728905,
      "longitude": 7.145309,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1646922977,
      "ems": null
    },
    {
      "latitude": 50.729645,
      "longitude": 7.143785,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1646922980,
      "ems": null
    },
    {
      "latitude": 50.730114,
      "longitude": 7.142181,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1646922983,
      "ems": null
    },
    {
      "latitude": 50.730331,
      "longitude": 7.140816,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1646922986,
      "ems": null
    },
    {
      "latitude": 50.730392,
      "longitude": 7.138977,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1646922989,
      "ems": null
    },
    {
      "latitude": 50.730209,
      "longitude": 7.137451,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1646922992,
      "ems": null
    },
    {
      "latitude": 50.729881,
      "longitude": 7.136307,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1646922995,
      "ems": null
    },
    {
      "latitude": 50.729187,
      "longitude": 7.134952,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1646922998,
      "ems": null
    },
    {
      "latitude": 50.7285,
      "longitude": 7.134135,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1646923001,
      "ems": null
    },
    {
      "latitude": 50.727768,
      "longitude": 7.133616,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1646923004,
      "ems": null
    },
    {
      "latitude": 50.726944,
      "longitude": 7.133393,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1646923007,
      "ems": null
    },
    {
      "latitude": 50.726345,
      "longitude": 7.133408,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1646923010,
      "ems": null
    },
    {
      "latitude": 50.72546,
      "longitude": 7.133789,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1646923013,
      "ems": null
    },
    {
      "latitude": 50.724899,
      "longitude": 7.134552,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1646923016,
      "ems": null
    },
    {
      "latitude": 50.724483,
      "longitude": 7.135468,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1646923019,
      "ems": null
    },
    {
      "latitude": 50.723969,
      "longitude": 7.136511,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1646923022,
      "ems": null
    },
    {
      "latitude": 50.723465,
      "longitude": 7.137402,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1646923025,
      "ems": null
    },
    {
      "latitude": 50.723007,
      "longitude": 7.138292,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1646923028,
      "ems": null
    },
    {
      "latitude": 50.722481,
      "longitude": 7.139206,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1646923031,
      "ems": null
    },
    {
      "latitude": 50.722046,
      "longitude": 7.139852,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1646923034,
      "ems": null
    },
    {
      "latitude": 50.721504,
      "longitude": 7.140884,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1646923037,
      "ems": null
    },
    {
      "latitude": 50.721085,
      "longitude": 7.141724,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1646923040,
      "ems": null
    },
    {
      "latitude": 50.720711,
      "longitude": 7.142487,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1646923043,
      "ems": null
    },
    {
      "latitude": 50.720261,
      "longitude": 7.143489,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1646923046,
      "ems": null
    },
    {
      "latitude": 50.71962,
      "longitude": 7.145419,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1646923052,
      "ems": null
    },
    {
      "latitude": 50.719437,
      "longitude": 7.146458,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1646923055,
      "ems": null
    },
    {
      "latitude": 50.719345,
      "longitude": 7.147794,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1646923058,
      "ems": null
    },
    {
      "latitude": 50.719315,
      "longitude": 7.148819,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1646923061,
      "ems": null
    },
    {
      "latitude": 50.719482,
      "longitude": 7.150244,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1646923064,
      "ems": null
    },
    {
      "latitude": 50.71978,
      "longitude": 7.151413,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1646923067,
      "ems": null
    },
    {
      "latitude": 50.720261,
      "longitude": 7.152545,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1646923070,
      "ems": null
    },
    {
      "latitude": 50.720989,
      "longitude": 7.153702,
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1646923073,
      "ems": null
    },
    {
      "latitude": 50.721725,
      "longitude": 7.154475,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1646923076,
      "ems": null
    },
    {
      "latitude": 50.722759,
      "longitude": 7.15538,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1646923079,
      "ems": null
    },
    {
      "latitude": 50.723648,
      "longitude": 7.156182,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1646923082,
      "ems": null
    },
    {
      "latitude": 50.724529,
      "longitude": 7.15683,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1646923085,
      "ems": null
    },
    {
      "latitude": 50.725479,
      "longitude": 7.157518,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "squawk": "7000",
      "timestamp": 1646923088,
      "ems": null
    },
    {
      "latitude": 50.726204,
      "longitude": 7.157898,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1646923091,
      "ems": null
    },
    {
      "latitude": 50.727413,
      "longitude": 7.158356,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1646923094,
      "ems": null
    },
    {
      "latitude": 50.728455,
      "longitude": 7.158484,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1646923097,
      "ems": null
    },
    {
      "latitude": 50.729649,
      "longitude": 7.158432,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1646923100,
      "ems": null
    },
    {
      "latitude": 50.730789,
      "longitude": 7.158113,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1646923103,
      "ems": null
    },
    {
      "latitude": 50.731796,
      "longitude": 7.157518,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1646923106,
      "ems": null
    },
    {
      "latitude": 50.732666,
      "longitude": 7.156776,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1646923109,
      "ems": null
    },
    {
      "latitude": 50.733627,
      "longitude": 7.155514,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1646923112,
      "ems": null
    },
    {
      "latitude": 50.734222,
      "longitude": 7.154104,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1646923115,
      "ems": null
    },
    {
      "latitude": 50.734589,
      "longitude": 7.152842,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1646923118,
      "ems": null
    },
    {
      "latitude": 50.73505,
      "longitude": 7.150803,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1646923121,
      "ems": null
    },
    {
      "latitude": 50.735329,
      "longitude": 7.149429,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1646923124,
      "ems": null
    },
    {
      "latitude": 50.735733,
      "longitude": 7.147645,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1646923127,
      "ems": null
    },
    {
      "latitude": 50.736168,
      "longitude": 7.145844,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1646923130,
      "ems": null
    },
    {
      "latitude": 50.736374,
      "longitude": 7.144751,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1646923133,
      "ems": null
    },
    {
      "latitude": 50.736725,
      "longitude": 7.142792,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1646923136,
      "ems": null
    },
    {
      "latitude": 50.737061,
      "longitude": 7.141039,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1646923139,
      "ems": null
    },
    {
      "latitude": 50.737331,
      "longitude": 7.13913,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1646923142,
      "ems": null
    },
    {
      "latitude": 50.737423,
      "longitude": 7.137756,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1646923145,
      "ems": null
    },
    {
      "latitude": 50.737423,
      "longitude": 7.135391,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1646923148,
      "ems": null
    },
    {
      "latitude": 50.73719,
      "longitude": 7.133713,
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1646923151,
      "ems": null
    },
    {
      "latitude": 50.736725,
      "longitude": 7.132187,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1646923154,
      "ems": null
    },
    {
      "latitude": 50.736191,
      "longitude": 7.131166,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1646923157,
      "ems": null
    },
    {
      "latitude": 50.73542,
      "longitude": 7.130356,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1646923160,
      "ems": null
    },
    {
      "latitude": 50.734631,
      "longitude": 7.129974,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1646923163,
      "ems": null
    },
    {
      "latitude": 50.733746,
      "longitude": 7.129974,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1646923166,
      "ems": null
    },
    {
      "latitude": 50.732849,
      "longitude": 7.130647,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1646923169,
      "ems": null
    },
    {
      "latitude": 50.732254,
      "longitude": 7.131612,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1646923172,
      "ems": null
    },
    {
      "latitude": 50.731934,
      "longitude": 7.133022,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1646923175,
      "ems": null
    },
    {
      "latitude": 50.731884,
      "longitude": 7.134476,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1646923178,
      "ems": null
    },
    {
      "latitude": 50.732162,
      "longitude": 7.13614,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1646923181,
      "ems": null
    },
    {
      "latitude": 50.732758,
      "longitude": 7.137699,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1646923184,
      "ems": null
    },
    {
      "latitude": 50.733307,
      "longitude": 7.139109,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1646923187,
      "ems": null
    },
    {
      "latitude": 50.733902,
      "longitude": 7.140668,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1646923190,
      "ems": null
    },
    {
      "latitude": 50.734489,
      "longitude": 7.142105,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1646923193,
      "ems": null
    },
    {
      "latitude": 50.735229,
      "longitude": 7.143563,
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1646923196,
      "ems": null
    },
    {
      "latitude": 50.736027,
      "longitude": 7.144928,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1646923199,
      "ems": null
    },
    {
      "latitude": 50.736923,
      "longitude": 7.146087,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1646923202,
      "ems": null
    },
    {
      "latitude": 50.737888,
      "longitude": 7.147217,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1646923205,
      "ems": null
    },
    {
      "latitude": 50.738846,
      "longitude": 7.148165,
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1646923208,
      "ems": null
    },
    {
      "latitude": 50.73999,
      "longitude": 7.148982,
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1646923211,
      "ems": null
    },
    {
      "latitude": 50.741135,
      "longitude": 7.149501,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1646923214,
      "ems": null
    },
    {
      "latitude": 50.74194,
      "longitude": 7.149582,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1646923217,
      "ems": null
    },
    {
      "latitude": 50.743477,
      "longitude": 7.149429,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1646923220,
      "ems": null
    },
    {
      "latitude": 50.74464,
      "longitude": 7.148972,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1646923223,
      "ems": null
    },
    {
      "latitude": 50.745708,
      "longitude": 7.148209,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1646923226,
      "ems": null
    },
    {
      "latitude": 50.746719,
      "longitude": 7.147274,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1646923229,
      "ems": null
    },
    {
      "latitude": 50.747681,
      "longitude": 7.146384,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1646923232,
      "ems": null
    },
    {
      "latitude": 50.74855,
      "longitude": 7.145419,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1646923235,
      "ems": null
    },
    {
      "latitude": 50.749466,
      "longitude": 7.144454,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1646923238,
      "ems": null
    },
    {
      "latitude": 50.750473,
      "longitude": 7.14334,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1646923241,
      "ems": null
    },
    {
      "latitude": 50.751251,
      "longitude": 7.14241,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1646923244,
      "ems": null
    },
    {
      "latitude": 50.752182,
      "longitude": 7.141266,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1646923247,
      "ems": null
    },
    {
      "latitude": 50.753082,
      "longitude": 7.140074,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1646923250,
      "ems": null
    },
    {
      "latitude": 50.753902,
      "longitude": 7.138977,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1646923253,
      "ems": null
    },
    {
      "latitude": 50.754501,
      "longitude": 7.13807,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1646923256,
      "ems": null
    },
    {
      "latitude": 50.755051,
      "longitude": 7.137253,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1646923259,
      "ems": null
    },
    {
      "latitude": 50.756279,
      "longitude": 7.135696,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1646923262,
      "ems": null
    },
    {
      "latitude": 50.758347,
      "longitude": 7.133393,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1646923268,
      "ems": null
    },
    {
      "latitude": 50.759171,
      "longitude": 7.132725,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1646923271,
      "ems": null
    },
    {
      "latitude": 50.759903,
      "longitude": 7.13228,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "timestamp": 1646923274,
      "ems": null
    },
    {
      "latitude": 50.76123,
      "longitude": 7.131537,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1646923277,
      "ems": null
    },
    {
      "latitude": 50.762421,
      "longitude": 7.131195,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1646923280,
      "ems": null
    },
    {
      "latitude": 50.763351,
      "longitude": 7.131195,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1646923283,
      "ems": null
    },
    {
      "latitude": 50.764423,
      "longitude": 7.131271,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1646923286,
      "ems": null
    },
    {
      "latitude": 50.76545,
      "longitude": 7.131653,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "squawk": "7000",
      "timestamp": 1646923289,
      "ems": null
    },
    {
      "latitude": 50.766403,
      "longitude": 7.131983,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1646923292,
      "ems": null
    },
    {
      "latitude": 50.767319,
      "longitude": 7.132503,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1646923295,
      "ems": null
    },
    {
      "latitude": 50.768143,
      "longitude": 7.133096,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1646923298,
      "ems": null
    },
    {
      "latitude": 50.769032,
      "longitude": 7.133713,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1646923301,
      "ems": null
    },
    {
      "latitude": 50.769917,
      "longitude": 7.134323,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1646923304,
      "ems": null
    },
    {
      "latitude": 50.770844,
      "longitude": 7.1351,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1646923307,
      "ems": null
    },
    {
      "latitude": 50.771358,
      "longitude": 7.135544,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1646923310,
      "ems": null
    },
    {
      "latitude": 50.772526,
      "longitude": 7.136765,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1646923313,
      "ems": null
    },
    {
      "latitude": 50.773129,
      "longitude": 7.13768,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1646923316,
      "ems": null
    },
    {
      "latitude": 50.77359,
      "longitude": 7.138812,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "squawk": "7000",
      "timestamp": 1646923319,
      "ems": null
    },
    {
      "latitude": 50.773827,
      "longitude": 7.140121,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1646923322,
      "ems": null
    },
    {
      "latitude": 50.773727,
      "longitude": 7.141188,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1646923325,
      "ems": null
    },
    {
      "latitude": 50.773453,
      "longitude": 7.142152,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1646923328,
      "ems": null
    },
    {
      "latitude": 50.773224,
      "longitude": 7.143044,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1646923331,
      "ems": null
    },
    {
      "latitude": 50.773037,
      "longitude": 7.144241,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1646923334,
      "ems": null
    },
    {
      "latitude": 50.772896,
      "longitude": 7.144775,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1646923336,
      "ems": null
    },
    {
      "latitude": 50.772629,
      "longitude": 7.146013,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1646923340,
      "ems": null
    },
    {
      "latitude": 50.77243,
      "longitude": 7.147064,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1646923343,
      "ems": null
    },
    {
      "latitude": 50.772293,
      "longitude": 7.147675,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1646923346,
      "ems": null
    },
    {
      "latitude": 50.772152,
      "longitude": 7.148438,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1646923348,
      "ems": null
    },
    {
      "latitude": 50.771713,
      "longitude": 7.150318,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1646923354,
      "ems": null
    },
    {
      "latitude": 50.770943,
      "longitude": 7.153778,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1646923364,
      "ems": null
    },
    {
      "latitude": 50.767914,
      "longitude": 7.167511,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1646923406,
      "ems": null
    },
    {
      "latitude": 50.76741,
      "longitude": 7.170138,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1646923412,
      "ems": null
    },
    {
      "latitude": 50.766846,
      "longitude": 7.172775,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1646923418,
      "ems": null
    },
    {
      "latitude": 50.766449,
      "longitude": 7.174443,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1646923423,
      "ems": null
    },
    {
      "latitude": 50.766037,
      "longitude": 7.176003,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1646923428,
      "ems": null
    },
    {
      "latitude": 50.765682,
      "longitude": 7.176895,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1646923431,
      "ems": null
    },
    {
      "latitude": 50.76535,
      "longitude": 7.177784,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1646923433,
      "ems": null
    },
    {
      "latitude": 50.765217,
      "longitude": 7.178116,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1646923434,
      "ems": null
    },
    {
      "latitude": 50.765076,
      "longitude": 7.178526,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1646923437,
      "ems": null
    },
    {
      "latitude": 50.764469,
      "longitude": 7.180252,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1646923441,
      "ems": null
    },
    {
      "latitude": 50.763748,
      "longitude": 7.183054,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1646923449,
      "ems": null
    },
    {
      "latitude": 50.763073,
      "longitude": 7.185059,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1646923453,
      "ems": null
    },
    {
      "latitude": 50.762142,
      "longitude": 7.188263,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1646923461,
      "ems": null
    },
    {
      "latitude": 50.761353,
      "longitude": 7.190857,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1646923467,
      "ems": null
    },
    {
      "latitude": 50.761024,
      "longitude": 7.192078,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1646923470,
      "ems": null
    },
    {
      "latitude": 50.760605,
      "longitude": 7.193298,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1646923472,
      "ems": null
    },
    {
      "latitude": 50.760002,
      "longitude": 7.194672,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1646923476,
      "ems": null
    },
    {
      "latitude": 50.759304,
      "longitude": 7.195663,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1646923479,
      "ems": null
    },
    {
      "latitude": 50.758438,
      "longitude": 7.196268,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1646923482,
      "ems": null
    },
    {
      "latitude": 50.757431,
      "longitude": 7.196268,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1646923484,
      "ems": null
    },
    {
      "latitude": 50.75647,
      "longitude": 7.195897,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1646923488,
      "ems": null
    },
    {
      "latitude": 50.755325,
      "longitude": 7.195229,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1646923491,
      "ems": null
    },
    {
      "latitude": 50.754322,
      "longitude": 7.194672,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1646923494,
      "ems": null
    },
    {
      "latitude": 50.753357,
      "longitude": 7.194115,
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1646923496,
      "ems": null
    },
    {
      "latitude": 50.752487,
      "longitude": 7.193595,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1646923500,
      "ems": null
    },
    {
      "latitude": 50.751389,
      "longitude": 7.192927,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1646923503,
      "ems": null
    },
    {
      "latitude": 50.750504,
      "longitude": 7.19223,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1646923506,
      "ems": null
    },
    {
      "latitude": 50.749557,
      "longitude": 7.191145,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1646923509,
      "ems": null
    },
    {
      "latitude": 50.748871,
      "longitude": 7.189735,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1646923512,
      "ems": null
    },
    {
      "latitude": 50.748459,
      "longitude": 7.188176,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1646923515,
      "ems": null
    },
    {
      "latitude": 50.748039,
      "longitude": 7.186279,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1646923518,
      "ems": null
    },
    {
      "latitude": 50.747726,
      "longitude": 7.184984,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1646923521,
      "ems": null
    },
    {
      "latitude": 50.747292,
      "longitude": 7.182999,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1646923524,
      "ems": null
    },
    {
      "latitude": 50.746857,
      "longitude": 7.18105,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1646923527,
      "ems": null
    },
    {
      "latitude": 50.746582,
      "longitude": 7.179491,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1646923530,
      "ems": null
    },
    {
      "latitude": 50.746262,
      "longitude": 7.177413,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1646923533,
      "ems": null
    },
    {
      "latitude": 50.74617,
      "longitude": 7.175705,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1646923536,
      "ems": null
    },
    {
      "latitude": 50.746223,
      "longitude": 7.17392,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1646923539,
      "ems": null
    },
    {
      "latitude": 50.746536,
      "longitude": 7.171771,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1646923542,
      "ems": null
    },
    {
      "latitude": 50.747105,
      "longitude": 7.1698,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1646923545,
      "ems": null
    },
    {
      "latitude": 50.747757,
      "longitude": 7.168121,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1646923548,
      "ems": null
    },
    {
      "latitude": 50.748363,
      "longitude": 7.166443,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1646923551,
      "ems": null
    },
    {
      "latitude": 50.748871,
      "longitude": 7.164867,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1646923554,
      "ems": null
    },
    {
      "latitude": 50.749481,
      "longitude": 7.163086,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1646923557,
      "ems": null
    },
    {
      "latitude": 50.750038,
      "longitude": 7.161102,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1646923560,
      "ems": null
    },
    {
      "latitude": 50.750427,
      "longitude": 7.159671,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1646923563,
      "ems": null
    },
    {
      "latitude": 50.750969,
      "longitude": 7.157669,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1646923566,
      "ems": null
    },
    {
      "latitude": 50.751389,
      "longitude": 7.156143,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1646923569,
      "ems": null
    },
    {
      "latitude": 50.751846,
      "longitude": 7.154549,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1646923572,
      "ems": null
    },
    {
      "latitude": 50.752853,
      "longitude": 7.151283,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1646923578,
      "ems": null
    },
    {
      "latitude": 50.753902,
      "longitude": 7.148209,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1646923584,
      "ems": null
    },
    {
      "latitude": 50.755112,
      "longitude": 7.144852,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1646923590,
      "ems": null
    },
    {
      "latitude": 50.755627,
      "longitude": 7.143478,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1646923592,
      "ems": null
    },
    {
      "latitude": 50.756184,
      "longitude": 7.141953,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1646923596,
      "ems": null
    },
    {
      "latitude": 50.756744,
      "longitude": 7.140371,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1646923599,
      "ems": null
    },
    {
      "latitude": 50.757889,
      "longitude": 7.137179,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1646923605,
      "ems": null
    },
    {
      "latitude": 50.75893,
      "longitude": 7.134476,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1646923611,
      "ems": null
    },
    {
      "latitude": 50.760498,
      "longitude": 7.131835,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1646923617,
      "ems": null
    },
    {
      "latitude": 50.761276,
      "longitude": 7.131018,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1646923620,
      "ems": null
    },
    {
      "latitude": 50.761963,
      "longitude": 7.130498,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1646923623,
      "ems": null
    },
    {
      "latitude": 50.763199,
      "longitude": 7.129904,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1646923626,
      "ems": null
    },
    {
      "latitude": 50.764389,
      "longitude": 7.129756,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1646923629,
      "ems": null
    },
    {
      "latitude": 50.765396,
      "longitude": 7.129904,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1646923632,
      "ems": null
    },
    {
      "latitude": 50.76638,
      "longitude": 7.130203,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1646923635,
      "ems": null
    },
    {
      "latitude": 50.76741,
      "longitude": 7.130647,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1646923638,
      "ems": null
    },
    {
      "latitude": 50.76828,
      "longitude": 7.131166,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1646923641,
      "ems": null
    },
    {
      "latitude": 50.769196,
      "longitude": 7.131835,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1646923644,
      "ems": null
    },
    {
      "latitude": 50.769871,
      "longitude": 7.132339,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1646923647,
      "ems": null
    },
    {
      "latitude": 50.770844,
      "longitude": 7.133171,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1646923650,
      "ems": null
    },
    {
      "latitude": 50.771591,
      "longitude": 7.133865,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1646923653,
      "ems": null
    },
    {
      "latitude": 50.772446,
      "longitude": 7.134655,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1646923656,
      "ems": null
    },
    {
      "latitude": 50.773041,
      "longitude": 7.135397,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1646923659,
      "ems": null
    },
    {
      "latitude": 50.773689,
      "longitude": 7.136765,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1646923662,
      "ems": null
    },
    {
      "latitude": 50.774002,
      "longitude": 7.137996,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1646923665,
      "ems": null
    },
    {
      "latitude": 50.774002,
      "longitude": 7.139332,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1646923668,
      "ems": null
    },
    {
      "latitude": 50.773827,
      "longitude": 7.140427,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1646923671,
      "ems": null
    },
    {
      "latitude": 50.773636,
      "longitude": 7.141484,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1646923674,
      "ems": null
    },
    {
      "latitude": 50.773453,
      "longitude": 7.142598,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1646923677,
      "ems": null
    },
    {
      "latitude": 50.773224,
      "longitude": 7.143631,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1646923680,
      "ems": null
    },
    {
      "latitude": 50.772942,
      "longitude": 7.144623,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1646923683,
      "ems": null
    },
    {
      "latitude": 50.772709,
      "longitude": 7.145844,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1646923686,
      "ems": null
    },
    {
      "latitude": 50.772537,
      "longitude": 7.146755,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1646923689,
      "ems": null
    },
    {
      "latitude": 50.772263,
      "longitude": 7.148017,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1646923692,
      "ems": null
    },
    {
      "latitude": 50.772106,
      "longitude": 7.148666,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1646923694,
      "ems": null
    },
    {
      "latitude": 50.771759,
      "longitude": 7.150095,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1646923698,
      "ems": null
    },
    {
      "latitude": 50.771221,
      "longitude": 7.152481,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1646923706,
      "ems": null
    }
  ],
};
