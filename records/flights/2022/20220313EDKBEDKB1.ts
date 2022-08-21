import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220313EDKBEDKB1",
    callsign: "DEFCZ",
    name: "Tour Flight with Dylan",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 2, 13, 14, 30).getTime(),
    arrival: new Date(2022, 2, 13, 15, 25).getTime(),
    singleEnginePistonTime: 55,
    picTime: 55,
    dualTime: 0,
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
      modes: "3D1229",
      registration: "D-EFCZ",
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
      "latitude": 50.767868,
      "longitude": 7.168059,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 109,
      "squawk": "0",
      "timestamp": 1647181852,
      "ems": null
    },
    {
      "latitude": 50.767181,
      "longitude": 7.171251,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 107,
      "squawk": "0",
      "timestamp": 1647181860,
      "ems": null
    },
    {
      "latitude": 50.766518,
      "longitude": 7.174606,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 108,
      "squawk": "0",
      "timestamp": 1647181868,
      "ems": null
    },
    {
      "latitude": 50.766006,
      "longitude": 7.1772,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 104,
      "squawk": "0",
      "timestamp": 1647181874,
      "ems": null
    },
    {
      "latitude": 50.76582,
      "longitude": 7.178345,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 104,
      "squawk": "0",
      "timestamp": 1647181877,
      "ems": null
    },
    {
      "latitude": 50.765308,
      "longitude": 7.180634,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 113,
      "squawk": "0",
      "timestamp": 1647181882,
      "ems": null
    },
    {
      "latitude": 50.764847,
      "longitude": 7.182312,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 113,
      "squawk": "0",
      "timestamp": 1647181886,
      "ems": null
    },
    {
      "latitude": 50.764236,
      "longitude": 7.184982,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 108,
      "squawk": "0",
      "timestamp": 1647181892,
      "ems": null
    },
    {
      "latitude": 50.763519,
      "longitude": 7.188325,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1647181899,
      "ems": null
    },
    {
      "latitude": 50.762981,
      "longitude": 7.19101,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1647181904,
      "ems": null
    },
    {
      "latitude": 50.762421,
      "longitude": 7.193892,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647181911,
      "ems": null
    },
    {
      "latitude": 50.762005,
      "longitude": 7.195282,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1647181914,
      "ems": null
    },
    {
      "latitude": 50.761539,
      "longitude": 7.196274,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1647181917,
      "ems": null
    },
    {
      "latitude": 50.760887,
      "longitude": 7.197189,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1647181919,
      "ems": null
    },
    {
      "latitude": 50.760086,
      "longitude": 7.197975,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1647181923,
      "ems": null
    },
    {
      "latitude": 50.759262,
      "longitude": 7.198346,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1647181925,
      "ems": null
    },
    {
      "latitude": 50.758209,
      "longitude": 7.198494,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1647181929,
      "ems": null
    },
    {
      "latitude": 50.756973,
      "longitude": 7.198049,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1647181933,
      "ems": null
    },
    {
      "latitude": 50.755718,
      "longitude": 7.197266,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1647181937,
      "ems": null
    },
    {
      "latitude": 50.755112,
      "longitude": 7.196884,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1647181939,
      "ems": null
    },
    {
      "latitude": 50.754276,
      "longitude": 7.19635,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1647181942,
      "ems": null
    },
    {
      "latitude": 50.753494,
      "longitude": 7.195822,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1647181945,
      "ems": null
    },
    {
      "latitude": 50.752258,
      "longitude": 7.195229,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1647181948,
      "ems": null
    },
    {
      "latitude": 50.751389,
      "longitude": 7.194824,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1647181951,
      "ems": null
    },
    {
      "latitude": 50.750412,
      "longitude": 7.194443,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1647181954,
      "ems": null
    },
    {
      "latitude": 50.749054,
      "longitude": 7.193892,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1647181958,
      "ems": null
    },
    {
      "latitude": 50.747105,
      "longitude": 7.192841,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1647181964,
      "ems": null
    },
    {
      "latitude": 50.746078,
      "longitude": 7.192333,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1647181967,
      "ems": null
    },
    {
      "latitude": 50.745152,
      "longitude": 7.191849,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1647181970,
      "ems": null
    },
    {
      "latitude": 50.744175,
      "longitude": 7.191467,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1647181973,
      "ems": null
    },
    {
      "latitude": 50.743149,
      "longitude": 7.191086,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1647181976,
      "ems": null
    },
    {
      "latitude": 50.742188,
      "longitude": 7.190849,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1647181979,
      "ems": null
    },
    {
      "latitude": 50.741055,
      "longitude": 7.190552,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1647181982,
      "ems": null
    },
    {
      "latitude": 50.740215,
      "longitude": 7.190323,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1647181985,
      "ems": null
    },
    {
      "latitude": 50.739334,
      "longitude": 7.19017,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1647181988,
      "ems": null
    },
    {
      "latitude": 50.738216,
      "longitude": 7.189941,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1647181991,
      "ems": null
    },
    {
      "latitude": 50.737144,
      "longitude": 7.189789,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1647181994,
      "ems": null
    },
    {
      "latitude": 50.736099,
      "longitude": 7.189661,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1647181997,
      "ems": null
    },
    {
      "latitude": 50.735046,
      "longitude": 7.189513,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1647182000,
      "ems": null
    },
    {
      "latitude": 50.733978,
      "longitude": 7.189407,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1647182003,
      "ems": null
    },
    {
      "latitude": 50.732956,
      "longitude": 7.189331,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1647182006,
      "ems": null
    },
    {
      "latitude": 50.731976,
      "longitude": 7.189178,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1647182009,
      "ems": null
    },
    {
      "latitude": 50.729836,
      "longitude": 7.18895,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1647182015,
      "ems": null
    },
    {
      "latitude": 50.727741,
      "longitude": 7.188644,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1647182021,
      "ems": null
    },
    {
      "latitude": 50.725479,
      "longitude": 7.188325,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1647182027,
      "ems": null
    },
    {
      "latitude": 50.72332,
      "longitude": 7.18811,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1647182033,
      "ems": null
    },
    {
      "latitude": 50.721176,
      "longitude": 7.18788,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1647182039,
      "ems": null
    },
    {
      "latitude": 50.718895,
      "longitude": 7.187576,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1647182045,
      "ems": null
    },
    {
      "latitude": 50.716644,
      "longitude": 7.187285,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1647182051,
      "ems": null
    },
    {
      "latitude": 50.714333,
      "longitude": 7.186661,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1647182057,
      "ems": null
    },
    {
      "latitude": 50.714008,
      "longitude": 7.186584,
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1647182058,
      "ems": null
    },
    {
      "latitude": 50.713623,
      "longitude": 7.186395,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1647182059,
      "ems": null
    },
    {
      "latitude": 50.712204,
      "longitude": 7.185652,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1647182063,
      "ems": null
    },
    {
      "latitude": 50.711029,
      "longitude": 7.184906,
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1647182067,
      "ems": null
    },
    {
      "latitude": 50.709686,
      "longitude": 7.184168,
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1647182070,
      "ems": null
    },
    {
      "latitude": 50.708187,
      "longitude": 7.183304,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1647182074,
      "ems": null
    },
    {
      "latitude": 50.707489,
      "longitude": 7.182906,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1647182076,
      "ems": null
    },
    {
      "latitude": 50.70607,
      "longitude": 7.182089,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1647182080,
      "ems": null
    },
    {
      "latitude": 50.704884,
      "longitude": 7.181473,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1647182083,
      "ems": null
    },
    {
      "latitude": 50.704372,
      "longitude": 7.181168,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1647182085,
      "ems": null
    },
    {
      "latitude": 50.701439,
      "longitude": 7.179642,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1647182092,
      "ems": null
    },
    {
      "latitude": 50.699715,
      "longitude": 7.17865,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1647182097,
      "ems": null
    },
    {
      "latitude": 50.696968,
      "longitude": 7.1772,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1647182104,
      "ems": null
    },
    {
      "latitude": 50.695339,
      "longitude": 7.176361,
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1647182110,
      "ems": null
    },
    {
      "latitude": 50.692875,
      "longitude": 7.175064,
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1647182116,
      "ems": null
    },
    {
      "latitude": 50.689407,
      "longitude": 7.17333,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1647182125,
      "ems": null
    },
    {
      "latitude": 50.687393,
      "longitude": 7.172291,
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1647182131,
      "ems": null
    },
    {
      "latitude": 50.685005,
      "longitude": 7.171097,
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1647182139,
      "ems": null
    },
    {
      "latitude": 50.682312,
      "longitude": 7.169841,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1647182147,
      "ems": null
    },
    {
      "latitude": 50.679558,
      "longitude": 7.168884,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1647182155,
      "ems": null
    },
    {
      "latitude": 50.676998,
      "longitude": 7.168198,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1647182163,
      "ems": null
    },
    {
      "latitude": 50.675461,
      "longitude": 7.167816,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1647182167,
      "ems": null
    },
    {
      "latitude": 50.674114,
      "longitude": 7.167587,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1647182171,
      "ems": null
    },
    {
      "latitude": 50.672791,
      "longitude": 7.167466,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1647182175,
      "ems": null
    },
    {
      "latitude": 50.671833,
      "longitude": 7.167358,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1647182178,
      "ems": null
    },
    {
      "latitude": 50.670685,
      "longitude": 7.167278,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1647182181,
      "ems": null
    },
    {
      "latitude": 50.669735,
      "longitude": 7.167243,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1647182184,
      "ems": null
    },
    {
      "latitude": 50.668762,
      "longitude": 7.167133,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1647182187,
      "ems": null
    },
    {
      "latitude": 50.666897,
      "longitude": 7.166946,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1647182193,
      "ems": null
    },
    {
      "latitude": 50.666012,
      "longitude": 7.166946,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1647182196,
      "ems": null
    },
    {
      "latitude": 50.664505,
      "longitude": 7.166844,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1647182202,
      "ems": null
    },
    {
      "latitude": 50.662857,
      "longitude": 7.166772,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1647182208,
      "ems": null
    },
    {
      "latitude": 50.661942,
      "longitude": 7.166772,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1647182211,
      "ems": null
    },
    {
      "latitude": 50.66103,
      "longitude": 7.166872,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1647182214,
      "ems": null
    },
    {
      "latitude": 50.660149,
      "longitude": 7.166946,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1647182217,
      "ems": null
    },
    {
      "latitude": 50.659149,
      "longitude": 7.167061,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1647182220,
      "ems": null
    },
    {
      "latitude": 50.658234,
      "longitude": 7.167133,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1647182223,
      "ems": null
    },
    {
      "latitude": 50.656403,
      "longitude": 7.167278,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1647182229,
      "ems": null
    },
    {
      "latitude": 50.655304,
      "longitude": 7.167423,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1647182232,
      "ems": null
    },
    {
      "latitude": 50.653488,
      "longitude": 7.167391,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1647182238,
      "ems": null
    },
    {
      "latitude": 50.652328,
      "longitude": 7.166989,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1647182241,
      "ems": null
    },
    {
      "latitude": 50.651321,
      "longitude": 7.166338,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1647182244,
      "ems": null
    },
    {
      "latitude": 50.65036,
      "longitude": 7.165616,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1647182247,
      "ems": null
    },
    {
      "latitude": 50.649345,
      "longitude": 7.164867,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1647182250,
      "ems": null
    },
    {
      "latitude": 50.648182,
      "longitude": 7.164051,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1647182253,
      "ems": null
    },
    {
      "latitude": 50.647247,
      "longitude": 7.163303,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1647182256,
      "ems": null
    },
    {
      "latitude": 50.646229,
      "longitude": 7.162492,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1647182259,
      "ems": null
    },
    {
      "latitude": 50.645096,
      "longitude": 7.161568,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1647182262,
      "ems": null
    },
    {
      "latitude": 50.644043,
      "longitude": 7.160701,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1647182265,
      "ems": null
    },
    {
      "latitude": 50.642921,
      "longitude": 7.159671,
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
      "heading": 212,
      "squawk": "4451",
      "timestamp": 1647182268,
      "ems": null
    },
    {
      "latitude": 50.641937,
      "longitude": 7.158605,
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
      "heading": 216,
      "squawk": "4451",
      "timestamp": 1647182271,
      "ems": null
    },
    {
      "latitude": 50.640873,
      "longitude": 7.157296,
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
      "heading": 218,
      "squawk": "4451",
      "timestamp": 1647182274,
      "ems": null
    },
    {
      "latitude": 50.639942,
      "longitude": 7.156182,
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
      "heading": 217,
      "squawk": "4451",
      "timestamp": 1647182277,
      "ems": null
    },
    {
      "latitude": 50.638824,
      "longitude": 7.154846,
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
      "heading": 217,
      "squawk": "4451",
      "timestamp": 1647182280,
      "ems": null
    },
    {
      "latitude": 50.637863,
      "longitude": 7.153617,
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
      "heading": 218,
      "squawk": "4451",
      "timestamp": 1647182283,
      "ems": null
    },
    {
      "latitude": 50.636776,
      "longitude": 7.152322,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 218,
      "squawk": "4451",
      "timestamp": 1647182286,
      "ems": null
    },
    {
      "latitude": 50.635754,
      "longitude": 7.151061,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 217,
      "squawk": "4451",
      "timestamp": 1647182289,
      "ems": null
    },
    {
      "latitude": 50.634613,
      "longitude": 7.149642,
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
      "heading": 217,
      "squawk": "4451",
      "timestamp": 1647182292,
      "ems": null
    },
    {
      "latitude": 50.633564,
      "longitude": 7.148462,
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
      "heading": 216,
      "squawk": "4451",
      "timestamp": 1647182295,
      "ems": null
    },
    {
      "latitude": 50.631454,
      "longitude": 7.145956,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 216,
      "squawk": "4451",
      "timestamp": 1647182301,
      "ems": null
    },
    {
      "latitude": 50.629303,
      "longitude": 7.143426,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 216,
      "squawk": "4451",
      "timestamp": 1647182307,
      "ems": null
    },
    {
      "latitude": 50.626923,
      "longitude": 7.14068,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 216,
      "squawk": "4451",
      "timestamp": 1647182313,
      "ems": null
    },
    {
      "latitude": 50.624722,
      "longitude": 7.138218,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 212,
      "squawk": "4451",
      "timestamp": 1647182319,
      "ems": null
    },
    {
      "latitude": 50.623604,
      "longitude": 7.137253,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1647182322,
      "ems": null
    },
    {
      "latitude": 50.622528,
      "longitude": 7.136343,
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
      "heading": 206,
      "squawk": "4451",
      "timestamp": 1647182325,
      "ems": null
    },
    {
      "latitude": 50.621384,
      "longitude": 7.135548,
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1647182328,
      "ems": null
    },
    {
      "latitude": 50.620205,
      "longitude": 7.134878,
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
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1647182331,
      "ems": null
    },
    {
      "latitude": 50.619041,
      "longitude": 7.134284,
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1647182334,
      "ems": null
    },
    {
      "latitude": 50.617859,
      "longitude": 7.133741,
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
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1647182337,
      "ems": null
    },
    {
      "latitude": 50.61676,
      "longitude": 7.133171,
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1647182340,
      "ems": null
    },
    {
      "latitude": 50.61557,
      "longitude": 7.132585,
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1647182343,
      "ems": null
    },
    {
      "latitude": 50.614433,
      "longitude": 7.132057,
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
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1647182346,
      "ems": null
    },
    {
      "latitude": 50.613361,
      "longitude": 7.131612,
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
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1647182349,
      "ems": null
    },
    {
      "latitude": 50.612198,
      "longitude": 7.131092,
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
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1647182352,
      "ems": null
    },
    {
      "latitude": 50.610943,
      "longitude": 7.130572,
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
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1647182355,
      "ems": null
    },
    {
      "latitude": 50.609917,
      "longitude": 7.130127,
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
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1647182358,
      "ems": null
    },
    {
      "latitude": 50.607468,
      "longitude": 7.129115,
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
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1647182365,
      "ems": null
    },
    {
      "latitude": 50.604904,
      "longitude": 7.128248,
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
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1647182370,
      "ems": null
    },
    {
      "latitude": 50.603714,
      "longitude": 7.127814,
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
      "heading": 192,
      "squawk": "4451",
      "timestamp": 1647182373,
      "ems": null
    },
    {
      "latitude": 50.601398,
      "longitude": 7.127009,
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
      "heading": 190,
      "squawk": "4451",
      "timestamp": 1647182379,
      "ems": null
    },
    {
      "latitude": 50.598839,
      "longitude": 7.126044,
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
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1647182385,
      "ems": null
    },
    {
      "latitude": 50.597672,
      "longitude": 7.125357,
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
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1647182388,
      "ems": null
    },
    {
      "latitude": 50.596527,
      "longitude": 7.124634,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1647182391,
      "ems": null
    },
    {
      "latitude": 50.5952,
      "longitude": 7.123839,
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
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1647182394,
      "ems": null
    },
    {
      "latitude": 50.593948,
      "longitude": 7.123075,
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
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1647182397,
      "ems": null
    },
    {
      "latitude": 50.592499,
      "longitude": 7.122176,
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1647182401,
      "ems": null
    },
    {
      "latitude": 50.59153,
      "longitude": 7.121367,
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
      "heading": 210,
      "squawk": "4451",
      "timestamp": 1647182404,
      "ems": null
    },
    {
      "latitude": 50.590271,
      "longitude": 7.120254,
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
      "heading": 206,
      "squawk": "4451",
      "timestamp": 1647182407,
      "ems": null
    },
    {
      "latitude": 50.58897,
      "longitude": 7.119289,
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
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1647182410,
      "ems": null
    },
    {
      "latitude": 50.587898,
      "longitude": 7.118621,
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
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1647182413,
      "ems": null
    },
    {
      "latitude": 50.585243,
      "longitude": 7.117136,
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
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1647182419,
      "ems": null
    },
    {
      "latitude": 50.582886,
      "longitude": 7.115671,
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
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1647182425,
      "ems": null
    },
    {
      "latitude": 50.580276,
      "longitude": 7.114298,
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
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1647182431,
      "ems": null
    },
    {
      "latitude": 50.579098,
      "longitude": 7.113647,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1647182434,
      "ems": null
    },
    {
      "latitude": 50.578217,
      "longitude": 7.113142,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1647182437,
      "ems": null
    },
    {
      "latitude": 50.576584,
      "longitude": 7.112311,
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
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1647182440,
      "ems": null
    },
    {
      "latitude": 50.57428,
      "longitude": 7.111045,
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
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1647182446,
      "ems": null
    },
    {
      "latitude": 50.571884,
      "longitude": 7.109787,
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1647182452,
      "ems": null
    },
    {
      "latitude": 50.569336,
      "longitude": 7.108371,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1647182458,
      "ems": null
    },
    {
      "latitude": 50.566948,
      "longitude": 7.106893,
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1647182464,
      "ems": null
    },
    {
      "latitude": 50.564575,
      "longitude": 7.105259,
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1647182470,
      "ems": null
    },
    {
      "latitude": 50.562103,
      "longitude": 7.103601,
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
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1647182476,
      "ems": null
    },
    {
      "latitude": 50.560898,
      "longitude": 7.102736,
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
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1647182479,
      "ems": null
    },
    {
      "latitude": 50.558571,
      "longitude": 7.101251,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1647182485,
      "ems": null
    },
    {
      "latitude": 50.55629,
      "longitude": 7.099915,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1647182491,
      "ems": null
    },
    {
      "latitude": 50.553772,
      "longitude": 7.098324,
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
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1647182497,
      "ems": null
    },
    {
      "latitude": 50.551804,
      "longitude": 7.09724,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1647182503,
      "ems": null
    },
    {
      "latitude": 50.550293,
      "longitude": 7.096373,
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
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1647182506,
      "ems": null
    },
    {
      "latitude": 50.549011,
      "longitude": 7.095722,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1647182509,
      "ems": null
    },
    {
      "latitude": 50.547909,
      "longitude": 7.095238,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1647182511,
      "ems": null
    },
    {
      "latitude": 50.546604,
      "longitude": 7.094718,
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
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1647182515,
      "ems": null
    },
    {
      "latitude": 50.545208,
      "longitude": 7.09405,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1647182518,
      "ems": null
    },
    {
      "latitude": 50.544022,
      "longitude": 7.093554,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1647182521,
      "ems": null
    },
    {
      "latitude": 50.542835,
      "longitude": 7.09316,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 192,
      "squawk": "4451",
      "timestamp": 1647182524,
      "ems": null
    },
    {
      "latitude": 50.541531,
      "longitude": 7.092714,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 191,
      "squawk": "4451",
      "timestamp": 1647182527,
      "ems": null
    },
    {
      "latitude": 50.540543,
      "longitude": 7.092398,
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
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1647182530,
      "ems": null
    },
    {
      "latitude": 50.538227,
      "longitude": 7.091155,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1647182535,
      "ems": null
    },
    {
      "latitude": 50.536968,
      "longitude": 7.090413,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1647182539,
      "ems": null
    },
    {
      "latitude": 50.53627,
      "longitude": 7.089893,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 205,
      "squawk": "4451",
      "timestamp": 1647182542,
      "ems": null
    },
    {
      "latitude": 50.534874,
      "longitude": 7.088854,
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
      "heading": 205,
      "squawk": "4451",
      "timestamp": 1647182545,
      "ems": null
    },
    {
      "latitude": 50.533897,
      "longitude": 7.088037,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1647182548,
      "ems": null
    },
    {
      "latitude": 50.532898,
      "longitude": 7.087193,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1647182551,
      "ems": null
    },
    {
      "latitude": 50.531849,
      "longitude": 7.08633,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1647182554,
      "ems": null
    },
    {
      "latitude": 50.531204,
      "longitude": 7.085748,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 207,
      "squawk": "4451",
      "timestamp": 1647182557,
      "ems": null
    },
    {
      "latitude": 50.530079,
      "longitude": 7.084846,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 207,
      "squawk": "4451",
      "timestamp": 1647182560,
      "ems": null
    },
    {
      "latitude": 50.529099,
      "longitude": 7.084013,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 206,
      "squawk": "4451",
      "timestamp": 1647182563,
      "ems": null
    },
    {
      "latitude": 50.527008,
      "longitude": 7.082396,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 205,
      "squawk": "4451",
      "timestamp": 1647182569,
      "ems": null
    },
    {
      "latitude": 50.525005,
      "longitude": 7.081059,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1647182575,
      "ems": null
    },
    {
      "latitude": 50.523983,
      "longitude": 7.080391,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1647182578,
      "ems": null
    },
    {
      "latitude": 50.522873,
      "longitude": 7.079677,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1647182581,
      "ems": null
    },
    {
      "latitude": 50.522049,
      "longitude": 7.079171,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1647182584,
      "ems": null
    },
    {
      "latitude": 50.520908,
      "longitude": 7.078387,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1647182587,
      "ems": null
    },
    {
      "latitude": 50.518814,
      "longitude": 7.076977,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1647182593,
      "ems": null
    },
    {
      "latitude": 50.517746,
      "longitude": 7.076352,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1647182596,
      "ems": null
    },
    {
      "latitude": 50.515694,
      "longitude": 7.075121,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1647182602,
      "ems": null
    },
    {
      "latitude": 50.513535,
      "longitude": 7.074039,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1647182608,
      "ems": null
    },
    {
      "latitude": 50.511272,
      "longitude": 7.072746,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1647182614,
      "ems": null
    },
    {
      "latitude": 50.509132,
      "longitude": 7.07141,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1647182620,
      "ems": null
    },
    {
      "latitude": 50.506805,
      "longitude": 7.070281,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1647182626,
      "ems": null
    },
    {
      "latitude": 50.504383,
      "longitude": 7.069108,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1647182632,
      "ems": null
    },
    {
      "latitude": 50.502148,
      "longitude": 7.067995,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "squawk": "4451",
      "timestamp": 1647182638,
      "ems": null
    },
    {
      "latitude": 50.499634,
      "longitude": 7.066807,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1647182644,
      "ems": null
    },
    {
      "latitude": 50.498474,
      "longitude": 7.066233,
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
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1647182647,
      "ems": null
    },
    {
      "latitude": 50.496048,
      "longitude": 7.065149,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1647182653,
      "ems": null
    },
    {
      "latitude": 50.493759,
      "longitude": 7.064065,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1647182659,
      "ems": null
    },
    {
      "latitude": 50.491302,
      "longitude": 7.06265,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1647182665,
      "ems": null
    },
    {
      "latitude": 50.490326,
      "longitude": 7.061968,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1647182668,
      "ems": null
    },
    {
      "latitude": 50.488907,
      "longitude": 7.061029,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1647182671,
      "ems": null
    },
    {
      "latitude": 50.487625,
      "longitude": 7.060089,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1647182674,
      "ems": null
    },
    {
      "latitude": 50.486572,
      "longitude": 7.059366,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1647182677,
      "ems": null
    },
    {
      "latitude": 50.485199,
      "longitude": 7.058499,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1647182680,
      "ems": null
    },
    {
      "latitude": 50.484146,
      "longitude": 7.057776,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1647182683,
      "ems": null
    },
    {
      "latitude": 50.483109,
      "longitude": 7.057083,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1647182685,
      "ems": null
    },
    {
      "latitude": 50.480362,
      "longitude": 7.055376,
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
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1647182692,
      "ems": null
    },
    {
      "latitude": 50.477875,
      "longitude": 7.053873,
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
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1647182698,
      "ems": null
    },
    {
      "latitude": 50.47554,
      "longitude": 7.052355,
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
      "heading": 205,
      "squawk": "4451",
      "timestamp": 1647182704,
      "ems": null
    },
    {
      "latitude": 50.471786,
      "longitude": 7.049681,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1647182713,
      "ems": null
    },
    {
      "latitude": 50.469543,
      "longitude": 7.048163,
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1647182719,
      "ems": null
    },
    {
      "latitude": 50.46714,
      "longitude": 7.046616,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1647182725,
      "ems": null
    },
    {
      "latitude": 50.464691,
      "longitude": 7.0452,
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1647182731,
      "ems": null
    },
    {
      "latitude": 50.463837,
      "longitude": 7.044835,
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
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1647182734,
      "ems": null
    },
    {
      "latitude": 50.462254,
      "longitude": 7.044092,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1647182737,
      "ems": null
    },
    {
      "latitude": 50.460949,
      "longitude": 7.043498,
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1647182740,
      "ems": null
    },
    {
      "latitude": 50.460018,
      "longitude": 7.042979,
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
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1647182743,
      "ems": null
    },
    {
      "latitude": 50.457691,
      "longitude": 7.041643,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1647182749,
      "ems": null
    },
    {
      "latitude": 50.455124,
      "longitude": 7.040357,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1647182755,
      "ems": null
    },
    {
      "latitude": 50.452835,
      "longitude": 7.039345,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1647182761,
      "ems": null
    },
    {
      "latitude": 50.450638,
      "longitude": 7.038261,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1647182767,
      "ems": null
    },
    {
      "latitude": 50.448196,
      "longitude": 7.036818,
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
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1647182773,
      "ems": null
    },
    {
      "latitude": 50.445877,
      "longitude": 7.035442,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1647182779,
      "ems": null
    },
    {
      "latitude": 50.444565,
      "longitude": 7.03459,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1647182782,
      "ems": null
    },
    {
      "latitude": 50.443352,
      "longitude": 7.033848,
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1647182785,
      "ems": null
    },
    {
      "latitude": 50.442169,
      "longitude": 7.033057,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1647182788,
      "ems": null
    },
    {
      "latitude": 50.440979,
      "longitude": 7.03219,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 206,
      "squawk": "4451",
      "timestamp": 1647182791,
      "ems": null
    },
    {
      "latitude": 50.439743,
      "longitude": 7.031178,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1647182794,
      "ems": null
    },
    {
      "latitude": 50.438652,
      "longitude": 7.030137,
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
      "heading": 210,
      "squawk": "4451",
      "timestamp": 1647182797,
      "ems": null
    },
    {
      "latitude": 50.437489,
      "longitude": 7.029023,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 212,
      "squawk": "4451",
      "timestamp": 1647182800,
      "ems": null
    },
    {
      "latitude": 50.43631,
      "longitude": 7.027781,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 213,
      "squawk": "4451",
      "timestamp": 1647182803,
      "ems": null
    },
    {
      "latitude": 50.435257,
      "longitude": 7.026697,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 213,
      "squawk": "4451",
      "timestamp": 1647182806,
      "ems": null
    },
    {
      "latitude": 50.434044,
      "longitude": 7.025534,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 212,
      "squawk": "4451",
      "timestamp": 1647182810,
      "ems": null
    },
    {
      "latitude": 50.433151,
      "longitude": 7.024601,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 212,
      "squawk": "4451",
      "timestamp": 1647182812,
      "ems": null
    },
    {
      "latitude": 50.431778,
      "longitude": 7.023227,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 213,
      "squawk": "4451",
      "timestamp": 1647182816,
      "ems": null
    },
    {
      "latitude": 50.430645,
      "longitude": 7.022045,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 215,
      "squawk": "4451",
      "timestamp": 1647182818,
      "ems": null
    },
    {
      "latitude": 50.429714,
      "longitude": 7.021006,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 214,
      "squawk": "4451",
      "timestamp": 1647182821,
      "ems": null
    },
    {
      "latitude": 50.428455,
      "longitude": 7.01967,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 213,
      "squawk": "4451",
      "timestamp": 1647182824,
      "ems": null
    },
    {
      "latitude": 50.42627,
      "longitude": 7.017517,
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
      "heading": 211,
      "squawk": "4451",
      "timestamp": 1647182830,
      "ems": null
    },
    {
      "latitude": 50.42395,
      "longitude": 7.015349,
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
      "heading": 210,
      "squawk": "4451",
      "timestamp": 1647182836,
      "ems": null
    },
    {
      "latitude": 50.421661,
      "longitude": 7.013286,
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
      "heading": 210,
      "squawk": "4451",
      "timestamp": 1647182842,
      "ems": null
    },
    {
      "latitude": 50.419327,
      "longitude": 7.01094,
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
      "heading": 213,
      "squawk": "4451",
      "timestamp": 1647182848,
      "ems": null
    },
    {
      "latitude": 50.41745,
      "longitude": 7.008988,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 213,
      "squawk": "4451",
      "timestamp": 1647182854,
      "ems": null
    },
    {
      "latitude": 50.414932,
      "longitude": 7.006603,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "4451",
      "timestamp": 1647182861,
      "ems": null
    },
    {
      "latitude": 50.412689,
      "longitude": 7.004435,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 209,
      "squawk": "4451",
      "timestamp": 1647182867,
      "ems": null
    },
    {
      "latitude": 50.410625,
      "longitude": 7.002745,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 206,
      "squawk": "4451",
      "timestamp": 1647182872,
      "ems": null
    },
    {
      "latitude": 50.408531,
      "longitude": 7.000815,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 214,
      "squawk": "4451",
      "timestamp": 1647182879,
      "ems": null
    },
    {
      "latitude": 50.406418,
      "longitude": 6.998652,
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
      "heading": 212,
      "squawk": "4451",
      "timestamp": 1647182884,
      "ems": null
    },
    {
      "latitude": 50.404312,
      "longitude": 6.996701,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "4451",
      "timestamp": 1647182891,
      "ems": null
    },
    {
      "latitude": 50.402161,
      "longitude": 6.994894,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1647182896,
      "ems": null
    },
    {
      "latitude": 50.400105,
      "longitude": 6.993021,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "4451",
      "timestamp": 1647182902,
      "ems": null
    },
    {
      "latitude": 50.398056,
      "longitude": 6.991313,
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
      "heading": 207,
      "squawk": "4451",
      "timestamp": 1647182909,
      "ems": null
    },
    {
      "latitude": 50.397034,
      "longitude": 6.990497,
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
      "heading": 206,
      "squawk": "4451",
      "timestamp": 1647182911,
      "ems": null
    },
    {
      "latitude": 50.395824,
      "longitude": 6.98968,
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
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1647182915,
      "ems": null
    },
    {
      "latitude": 50.394798,
      "longitude": 6.988938,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1647182917,
      "ems": null
    },
    {
      "latitude": 50.393738,
      "longitude": 6.988317,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1647182920,
      "ems": null
    },
    {
      "latitude": 50.392658,
      "longitude": 6.987527,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1647182924,
      "ems": null
    },
    {
      "latitude": 50.390808,
      "longitude": 6.986148,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "squawk": "4451",
      "timestamp": 1647182929,
      "ems": null
    },
    {
      "latitude": 50.388607,
      "longitude": 6.984261,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1647182936,
      "ems": null
    },
    {
      "latitude": 50.387585,
      "longitude": 6.983296,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 211,
      "squawk": "4451",
      "timestamp": 1647182939,
      "ems": null
    },
    {
      "latitude": 50.386597,
      "longitude": 6.982317,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "4451",
      "timestamp": 1647182941,
      "ems": null
    },
    {
      "latitude": 50.385864,
      "longitude": 6.981595,
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
      "heading": 211,
      "squawk": "4451",
      "timestamp": 1647182943,
      "ems": null
    },
    {
      "latitude": 50.384766,
      "longitude": 6.980511,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 214,
      "squawk": "4451",
      "timestamp": 1647182947,
      "ems": null
    },
    {
      "latitude": 50.383621,
      "longitude": 6.979137,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 217,
      "squawk": "4451",
      "timestamp": 1647182951,
      "ems": null
    },
    {
      "latitude": 50.382835,
      "longitude": 6.978249,
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
      "heading": 213,
      "squawk": "4451",
      "timestamp": 1647182954,
      "ems": null
    },
    {
      "latitude": 50.380508,
      "longitude": 6.976689,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1647182959,
      "ems": null
    },
    {
      "latitude": 50.37941,
      "longitude": 6.976246,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1647182962,
      "ems": null
    },
    {
      "latitude": 50.378677,
      "longitude": 6.975957,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1647182965,
      "ems": null
    },
    {
      "latitude": 50.377533,
      "longitude": 6.975595,
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
      "heading": 188,
      "squawk": "4451",
      "timestamp": 1647182968,
      "ems": null
    },
    {
      "latitude": 50.376114,
      "longitude": 6.975451,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 180,
      "squawk": "4451",
      "timestamp": 1647182971,
      "ems": null
    },
    {
      "latitude": 50.374466,
      "longitude": 6.976391,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1647182976,
      "ems": null
    },
    {
      "latitude": 50.373871,
      "longitude": 6.977692,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1647182979,
      "ems": null
    },
    {
      "latitude": 50.374832,
      "longitude": 6.983257,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 58,
      "squawk": "4451",
      "timestamp": 1647182987,
      "ems": null
    },
    {
      "latitude": 50.376225,
      "longitude": 6.985226,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1647182991,
      "ems": null
    },
    {
      "latitude": 50.377487,
      "longitude": 6.986871,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1647182994,
      "ems": null
    },
    {
      "latitude": 50.37822,
      "longitude": 6.987883,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1647182998,
      "ems": null
    },
    {
      "latitude": 50.378998,
      "longitude": 6.989039,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 49,
      "squawk": "4451",
      "timestamp": 1647183000,
      "ems": null
    },
    {
      "latitude": 50.380371,
      "longitude": 6.992075,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 61,
      "squawk": "4451",
      "timestamp": 1647183005,
      "ems": null
    },
    {
      "latitude": 50.380787,
      "longitude": 6.99406,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 80,
      "squawk": "4451",
      "timestamp": 1647183009,
      "ems": null
    },
    {
      "latitude": 50.380787,
      "longitude": 6.995693,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1647183011,
      "ems": null
    },
    {
      "latitude": 50.380463,
      "longitude": 6.997697,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "squawk": "4451",
      "timestamp": 1647183015,
      "ems": null
    },
    {
      "latitude": 50.379913,
      "longitude": 6.999375,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1647183018,
      "ems": null
    },
    {
      "latitude": 50.379345,
      "longitude": 7.000741,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 125,
      "squawk": "4451",
      "timestamp": 1647183021,
      "ems": null
    },
    {
      "latitude": 50.378769,
      "longitude": 7.001832,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 131,
      "squawk": "4451",
      "timestamp": 1647183024,
      "ems": null
    },
    {
      "latitude": 50.377949,
      "longitude": 7.003116,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1647183027,
      "ems": null
    },
    {
      "latitude": 50.377075,
      "longitude": 7.004218,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1647183030,
      "ems": null
    },
    {
      "latitude": 50.376179,
      "longitude": 7.005046,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1647183033,
      "ems": null
    },
    {
      "latitude": 50.373943,
      "longitude": 7.00616,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1647183039,
      "ems": null
    },
    {
      "latitude": 50.372864,
      "longitude": 7.006314,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1647183042,
      "ems": null
    },
    {
      "latitude": 50.37236,
      "longitude": 7.006242,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 183,
      "squawk": "4451",
      "timestamp": 1647183044,
      "ems": null
    },
    {
      "latitude": 50.370407,
      "longitude": 7.005714,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1647183049,
      "ems": null
    },
    {
      "latitude": 50.369381,
      "longitude": 7.005195,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1647183052,
      "ems": null
    },
    {
      "latitude": 50.36845,
      "longitude": 7.004601,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1647183055,
      "ems": null
    },
    {
      "latitude": 50.367565,
      "longitude": 7.003932,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 207,
      "squawk": "4451",
      "timestamp": 1647183058,
      "ems": null
    },
    {
      "latitude": 50.366501,
      "longitude": 7.002989,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 209,
      "squawk": "4451",
      "timestamp": 1647183061,
      "ems": null
    },
    {
      "latitude": 50.365517,
      "longitude": 7.002077,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 210,
      "squawk": "4451",
      "timestamp": 1647183064,
      "ems": null
    },
    {
      "latitude": 50.364632,
      "longitude": 7.001112,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 215,
      "squawk": "4451",
      "timestamp": 1647183067,
      "ems": null
    },
    {
      "latitude": 50.3638,
      "longitude": 7.00017,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 216,
      "squawk": "4451",
      "timestamp": 1647183070,
      "ems": null
    },
    {
      "latitude": 50.363003,
      "longitude": 6.999256,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 218,
      "squawk": "4451",
      "timestamp": 1647183073,
      "ems": null
    },
    {
      "latitude": 50.362061,
      "longitude": 6.998074,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 218,
      "squawk": "4451",
      "timestamp": 1647183076,
      "ems": null
    },
    {
      "latitude": 50.361328,
      "longitude": 6.997135,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 218,
      "squawk": "4451",
      "timestamp": 1647183079,
      "ems": null
    },
    {
      "latitude": 50.360321,
      "longitude": 6.995833,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 219,
      "squawk": "4451",
      "timestamp": 1647183082,
      "ems": null
    },
    {
      "latitude": 50.359406,
      "longitude": 6.994605,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 219,
      "squawk": "4451",
      "timestamp": 1647183085,
      "ems": null
    },
    {
      "latitude": 50.358582,
      "longitude": 6.993593,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 218,
      "squawk": "4451",
      "timestamp": 1647183088,
      "ems": null
    },
    {
      "latitude": 50.358124,
      "longitude": 6.993015,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 219,
      "squawk": "4451",
      "timestamp": 1647183091,
      "ems": null
    },
    {
      "latitude": 50.35709,
      "longitude": 6.991684,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 220,
      "squawk": "4451",
      "timestamp": 1647183093,
      "ems": null
    },
    {
      "latitude": 50.356064,
      "longitude": 6.99034,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 220,
      "squawk": "4451",
      "timestamp": 1647183097,
      "ems": null
    },
    {
      "latitude": 50.354393,
      "longitude": 6.988418,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 214,
      "squawk": "4451",
      "timestamp": 1647183103,
      "ems": null
    },
    {
      "latitude": 50.352016,
      "longitude": 6.985894,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 215,
      "squawk": "4451",
      "timestamp": 1647183110,
      "ems": null
    },
    {
      "latitude": 50.350204,
      "longitude": 6.983474,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 222,
      "squawk": "4451",
      "timestamp": 1647183116,
      "ems": null
    },
    {
      "latitude": 50.348526,
      "longitude": 6.980921,
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
      "heading": 226,
      "squawk": "4451",
      "timestamp": 1647183122,
      "ems": null
    },
    {
      "latitude": 50.347916,
      "longitude": 6.979788,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 228,
      "squawk": "4451",
      "timestamp": 1647183125,
      "ems": null
    },
    {
      "latitude": 50.347038,
      "longitude": 6.978323,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 227,
      "squawk": "4451",
      "timestamp": 1647183128,
      "ems": null
    },
    {
      "latitude": 50.346386,
      "longitude": 6.977209,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 228,
      "squawk": "4451",
      "timestamp": 1647183131,
      "ems": null
    },
    {
      "latitude": 50.345547,
      "longitude": 6.97565,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1647183134,
      "ems": null
    },
    {
      "latitude": 50.344894,
      "longitude": 6.974537,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1647183137,
      "ems": null
    },
    {
      "latitude": 50.344196,
      "longitude": 6.973126,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 233,
      "squawk": "4451",
      "timestamp": 1647183140,
      "ems": null
    },
    {
      "latitude": 50.343544,
      "longitude": 6.971568,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1647183143,
      "ems": null
    },
    {
      "latitude": 50.343018,
      "longitude": 6.969741,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1647183146,
      "ems": null
    },
    {
      "latitude": 50.342606,
      "longitude": 6.968079,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1647183149,
      "ems": null
    },
    {
      "latitude": 50.342239,
      "longitude": 6.966272,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1647183152,
      "ems": null
    },
    {
      "latitude": 50.34201,
      "longitude": 6.964738,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1647183155,
      "ems": null
    },
    {
      "latitude": 50.341736,
      "longitude": 6.962802,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1647183158,
      "ems": null
    },
    {
      "latitude": 50.341496,
      "longitude": 6.960952,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1647183161,
      "ems": null
    },
    {
      "latitude": 50.339962,
      "longitude": 6.958131,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1647183167,
      "ems": null
    },
    {
      "latitude": 50.339123,
      "longitude": 6.957612,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1647183170,
      "ems": null
    },
    {
      "latitude": 50.338486,
      "longitude": 6.957237,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1647183172,
      "ems": null
    },
    {
      "latitude": 50.337387,
      "longitude": 6.956369,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 209,
      "squawk": "4451",
      "timestamp": 1647183176,
      "ems": null
    },
    {
      "latitude": 50.336746,
      "longitude": 6.955647,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 217,
      "squawk": "4451",
      "timestamp": 1647183179,
      "ems": null
    },
    {
      "latitude": 50.336098,
      "longitude": 6.954791,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 220,
      "squawk": "4451",
      "timestamp": 1647183182,
      "ems": null
    },
    {
      "latitude": 50.335445,
      "longitude": 6.9539,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 223,
      "squawk": "4451",
      "timestamp": 1647183185,
      "ems": null
    },
    {
      "latitude": 50.334839,
      "longitude": 6.952935,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 226,
      "squawk": "4451",
      "timestamp": 1647183188,
      "ems": null
    },
    {
      "latitude": 50.334183,
      "longitude": 6.951816,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1647183191,
      "ems": null
    },
    {
      "latitude": 50.333176,
      "longitude": 6.94972,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 233,
      "squawk": "4451",
      "timestamp": 1647183196,
      "ems": null
    },
    {
      "latitude": 50.332581,
      "longitude": 6.948202,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1647183200,
      "ems": null
    },
    {
      "latitude": 50.332138,
      "longitude": 6.946848,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1647183203,
      "ems": null
    },
    {
      "latitude": 50.331722,
      "longitude": 6.94529,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 248,
      "squawk": "4451",
      "timestamp": 1647183206,
      "ems": null
    },
    {
      "latitude": 50.331394,
      "longitude": 6.943879,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 248,
      "squawk": "4451",
      "timestamp": 1647183209,
      "ems": null
    },
    {
      "latitude": 50.331024,
      "longitude": 6.941914,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1647183213,
      "ems": null
    },
    {
      "latitude": 50.330929,
      "longitude": 6.939574,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1647183217,
      "ems": null
    },
    {
      "latitude": 50.331116,
      "longitude": 6.937346,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1647183220,
      "ems": null
    },
    {
      "latitude": 50.331581,
      "longitude": 6.935194,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 289,
      "squawk": "4451",
      "timestamp": 1647183225,
      "ems": null
    },
    {
      "latitude": 50.332535,
      "longitude": 6.932734,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1647183229,
      "ems": null
    },
    {
      "latitude": 50.332932,
      "longitude": 6.932076,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1647183230,
      "ems": null
    },
    {
      "latitude": 50.334606,
      "longitude": 6.930295,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 307,
      "squawk": "4451",
      "timestamp": 1647183235,
      "ems": null
    },
    {
      "latitude": 50.336143,
      "longitude": 6.929404,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1647183238,
      "ems": null
    },
    {
      "latitude": 50.337585,
      "longitude": 6.928884,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1647183241,
      "ems": null
    },
    {
      "latitude": 50.339031,
      "longitude": 6.928513,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1647183244,
      "ems": null
    },
    {
      "latitude": 50.340637,
      "longitude": 6.928109,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1647183247,
      "ems": null
    },
    {
      "latitude": 50.342239,
      "longitude": 6.92782,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1647183251,
      "ems": null
    },
    {
      "latitude": 50.343979,
      "longitude": 6.92753,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1647183253,
      "ems": null
    },
    {
      "latitude": 50.345673,
      "longitude": 6.927313,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1647183257,
      "ems": null
    },
    {
      "latitude": 50.347275,
      "longitude": 6.927169,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1647183260,
      "ems": null
    },
    {
      "latitude": 50.348053,
      "longitude": 6.927169,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1647183262,
      "ems": null
    },
    {
      "latitude": 50.349735,
      "longitude": 6.9274,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1647183264,
      "ems": null
    },
    {
      "latitude": 50.352402,
      "longitude": 6.928542,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1647183269,
      "ems": null
    },
    {
      "latitude": 50.3535,
      "longitude": 6.929121,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1647183272,
      "ems": null
    },
    {
      "latitude": 50.355377,
      "longitude": 6.930277,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183274,
      "ems": null
    },
    {
      "latitude": 50.356522,
      "longitude": 6.930927,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1647183276,
      "ems": null
    },
    {
      "latitude": 50.358444,
      "longitude": 6.932156,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1647183280,
      "ems": null
    },
    {
      "latitude": 50.360733,
      "longitude": 6.933674,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1647183284,
      "ems": null
    },
    {
      "latitude": 50.362305,
      "longitude": 6.934749,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1647183287,
      "ems": null
    },
    {
      "latitude": 50.363937,
      "longitude": 6.935698,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183290,
      "ems": null
    },
    {
      "latitude": 50.365585,
      "longitude": 6.93671,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1647183293,
      "ems": null
    },
    {
      "latitude": 50.369057,
      "longitude": 6.938905,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1647183299,
      "ems": null
    },
    {
      "latitude": 50.372223,
      "longitude": 6.941058,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 24,
      "squawk": "4451",
      "timestamp": 1647183305,
      "ems": null
    },
    {
      "latitude": 50.375248,
      "longitude": 6.943137,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1647183311,
      "ems": null
    },
    {
      "latitude": 50.379089,
      "longitude": 6.945673,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1647183319,
      "ems": null
    },
    {
      "latitude": 50.38414,
      "longitude": 6.948555,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183329,
      "ems": null
    },
    {
      "latitude": 50.387211,
      "longitude": 6.950411,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1647183334,
      "ems": null
    },
    {
      "latitude": 50.390213,
      "longitude": 6.95225,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1647183340,
      "ems": null
    },
    {
      "latitude": 50.394196,
      "longitude": 6.954643,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1647183348,
      "ems": null
    },
    {
      "latitude": 50.398315,
      "longitude": 6.956948,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1647183356,
      "ems": null
    },
    {
      "latitude": 50.401337,
      "longitude": 6.958683,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183361,
      "ems": null
    },
    {
      "latitude": 50.404575,
      "longitude": 6.960581,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183368,
      "ems": null
    },
    {
      "latitude": 50.407516,
      "longitude": 6.962296,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183374,
      "ems": null
    },
    {
      "latitude": 50.410538,
      "longitude": 6.964176,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1647183379,
      "ems": null
    },
    {
      "latitude": 50.414337,
      "longitude": 6.966488,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1647183386,
      "ems": null
    },
    {
      "latitude": 50.417496,
      "longitude": 6.968368,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183393,
      "ems": null
    },
    {
      "latitude": 50.420334,
      "longitude": 6.969885,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1647183399,
      "ems": null
    },
    {
      "latitude": 50.423801,
      "longitude": 6.971642,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1647183404,
      "ems": null
    },
    {
      "latitude": 50.426697,
      "longitude": 6.97321,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1647183410,
      "ems": null
    },
    {
      "latitude": 50.42976,
      "longitude": 6.97476,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1647183416,
      "ems": null
    },
    {
      "latitude": 50.433064,
      "longitude": 6.976467,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1647183422,
      "ems": null
    },
    {
      "latitude": 50.436493,
      "longitude": 6.978487,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183429,
      "ems": null
    },
    {
      "latitude": 50.439697,
      "longitude": 6.980221,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1647183434,
      "ems": null
    },
    {
      "latitude": 50.442993,
      "longitude": 6.981812,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1647183441,
      "ems": null
    },
    {
      "latitude": 50.445774,
      "longitude": 6.983222,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1647183446,
      "ems": null
    },
    {
      "latitude": 50.449173,
      "longitude": 6.985152,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183453,
      "ems": null
    },
    {
      "latitude": 50.45229,
      "longitude": 6.987156,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1647183459,
      "ems": null
    },
    {
      "latitude": 50.455086,
      "longitude": 6.988938,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1647183464,
      "ems": null
    },
    {
      "latitude": 50.456726,
      "longitude": 6.989907,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1647183468,
      "ems": null
    },
    {
      "latitude": 50.459648,
      "longitude": 6.99161,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183474,
      "ems": null
    },
    {
      "latitude": 50.462627,
      "longitude": 6.993243,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1647183480,
      "ems": null
    },
    {
      "latitude": 50.465286,
      "longitude": 6.994677,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1647183485,
      "ems": null
    },
    {
      "latitude": 50.468399,
      "longitude": 6.996412,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1647183492,
      "ems": null
    },
    {
      "latitude": 50.471191,
      "longitude": 6.99793,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183498,
      "ems": null
    },
    {
      "latitude": 50.473846,
      "longitude": 6.999664,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1647183504,
      "ems": null
    },
    {
      "latitude": 50.476685,
      "longitude": 7.001409,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183510,
      "ems": null
    },
    {
      "latitude": 50.479248,
      "longitude": 7.002844,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1647183516,
      "ems": null
    },
    {
      "latitude": 50.482361,
      "longitude": 7.004435,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1647183522,
      "ems": null
    },
    {
      "latitude": 50.48497,
      "longitude": 7.005714,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1647183528,
      "ems": null
    },
    {
      "latitude": 50.486416,
      "longitude": 7.006308,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1647183531,
      "ems": null
    },
    {
      "latitude": 50.488129,
      "longitude": 7.007037,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1647183534,
      "ems": null
    },
    {
      "latitude": 50.489136,
      "longitude": 7.007471,
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
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1647183536,
      "ems": null
    },
    {
      "latitude": 50.492569,
      "longitude": 7.008988,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 16,
      "squawk": "4451",
      "timestamp": 1647183543,
      "ems": null
    },
    {
      "latitude": 50.495586,
      "longitude": 7.010316,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1647183549,
      "ems": null
    },
    {
      "latitude": 50.49852,
      "longitude": 7.011518,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1647183555,
      "ems": null
    },
    {
      "latitude": 50.501312,
      "longitude": 7.012747,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1647183561,
      "ems": null
    },
    {
      "latitude": 50.504337,
      "longitude": 7.013954,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1647183566,
      "ems": null
    },
    {
      "latitude": 50.507446,
      "longitude": 7.015132,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1647183573,
      "ems": null
    },
    {
      "latitude": 50.510342,
      "longitude": 7.016255,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 12,
      "squawk": "4451",
      "timestamp": 1647183579,
      "ems": null
    },
    {
      "latitude": 50.513134,
      "longitude": 7.017146,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1647183584,
      "ems": null
    },
    {
      "latitude": 50.514908,
      "longitude": 7.01759,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1647183588,
      "ems": null
    },
    {
      "latitude": 50.51807,
      "longitude": 7.018482,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1647183594,
      "ems": null
    },
    {
      "latitude": 50.52063,
      "longitude": 7.019373,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 12,
      "squawk": "4451",
      "timestamp": 1647183600,
      "ems": null
    },
    {
      "latitude": 50.523422,
      "longitude": 7.020412,
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
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1647183606,
      "ems": null
    },
    {
      "latitude": 50.52589,
      "longitude": 7.021451,
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
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1647183612,
      "ems": null
    },
    {
      "latitude": 50.528503,
      "longitude": 7.022432,
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
      "heading": 13,
      "squawk": "4451",
      "timestamp": 1647183618,
      "ems": null
    },
    {
      "latitude": 50.531479,
      "longitude": 7.023661,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1647183624,
      "ems": null
    },
    {
      "latitude": 50.532898,
      "longitude": 7.024311,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 16,
      "squawk": "4451",
      "timestamp": 1647183627,
      "ems": null
    },
    {
      "latitude": 50.534134,
      "longitude": 7.024889,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1647183630,
      "ems": null
    },
    {
      "latitude": 50.535736,
      "longitude": 7.025829,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "squawk": "4451",
      "timestamp": 1647183633,
      "ems": null
    },
    {
      "latitude": 50.537109,
      "longitude": 7.026648,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1647183636,
      "ems": null
    },
    {
      "latitude": 50.53846,
      "longitude": 7.027464,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183639,
      "ems": null
    },
    {
      "latitude": 50.540089,
      "longitude": 7.028429,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1647183642,
      "ems": null
    },
    {
      "latitude": 50.541,
      "longitude": 7.029082,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1647183645,
      "ems": null
    },
    {
      "latitude": 50.542831,
      "longitude": 7.030238,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1647183648,
      "ems": null
    },
    {
      "latitude": 50.544205,
      "longitude": 7.031106,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1647183651,
      "ems": null
    },
    {
      "latitude": 50.547226,
      "longitude": 7.032912,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183657,
      "ems": null
    },
    {
      "latitude": 50.548653,
      "longitude": 7.033774,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1647183660,
      "ems": null
    },
    {
      "latitude": 50.55154,
      "longitude": 7.035852,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 24,
      "squawk": "4451",
      "timestamp": 1647183666,
      "ems": null
    },
    {
      "latitude": 50.553131,
      "longitude": 7.03696,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 25,
      "squawk": "4451",
      "timestamp": 1647183669,
      "ems": null
    },
    {
      "latitude": 50.556011,
      "longitude": 7.039193,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 27,
      "squawk": "4451",
      "timestamp": 1647183675,
      "ems": null
    },
    {
      "latitude": 50.557251,
      "longitude": 7.040357,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 30,
      "squawk": "4451",
      "timestamp": 1647183678,
      "ems": null
    },
    {
      "latitude": 50.558487,
      "longitude": 7.041803,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1647183681,
      "ems": null
    },
    {
      "latitude": 50.559586,
      "longitude": 7.043465,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 49,
      "squawk": "4451",
      "timestamp": 1647183684,
      "ems": null
    },
    {
      "latitude": 50.56041,
      "longitude": 7.045416,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 58,
      "squawk": "4451",
      "timestamp": 1647183687,
      "ems": null
    },
    {
      "latitude": 50.561085,
      "longitude": 7.047359,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 63,
      "squawk": "4451",
      "timestamp": 1647183690,
      "ems": null
    },
    {
      "latitude": 50.561455,
      "longitude": 7.048843,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 69,
      "squawk": "4451",
      "timestamp": 1647183693,
      "ems": null
    },
    {
      "latitude": 50.56234,
      "longitude": 7.051515,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 56,
      "squawk": "4451",
      "timestamp": 1647183696,
      "ems": null
    },
    {
      "latitude": 50.563412,
      "longitude": 7.053074,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1647183699,
      "ems": null
    },
    {
      "latitude": 50.564762,
      "longitude": 7.053965,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1647183702,
      "ems": null
    },
    {
      "latitude": 50.565739,
      "longitude": 7.054262,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1647183704,
      "ems": null
    },
    {
      "latitude": 50.56723,
      "longitude": 7.054163,
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1647183708,
      "ems": null
    },
    {
      "latitude": 50.569107,
      "longitude": 7.052934,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1647183711,
      "ems": null
    },
    {
      "latitude": 50.570526,
      "longitude": 7.051343,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1647183714,
      "ems": null
    },
    {
      "latitude": 50.571651,
      "longitude": 7.050105,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1647183717,
      "ems": null
    },
    {
      "latitude": 50.572815,
      "longitude": 7.04932,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1647183719,
      "ems": null
    },
    {
      "latitude": 50.574051,
      "longitude": 7.049175,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1647183722,
      "ems": null
    },
    {
      "latitude": 50.57547,
      "longitude": 7.050996,
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
      "heading": 62,
      "squawk": "4451",
      "timestamp": 1647183726,
      "ems": null
    },
    {
      "latitude": 50.57547,
      "longitude": 7.052852,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1647183729,
      "ems": null
    },
    {
      "latitude": 50.57542,
      "longitude": 7.05352,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 97,
      "squawk": "4451",
      "timestamp": 1647183730,
      "ems": null
    },
    {
      "latitude": 50.575607,
      "longitude": 7.055672,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 67,
      "squawk": "4451",
      "timestamp": 1647183734,
      "ems": null
    },
    {
      "latitude": 50.575748,
      "longitude": 7.056044,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 67,
      "squawk": "4451",
      "timestamp": 1647183735,
      "ems": null
    },
    {
      "latitude": 50.57753,
      "longitude": 7.057487,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1647183740,
      "ems": null
    },
    {
      "latitude": 50.580402,
      "longitude": 7.058196,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1647183744,
      "ems": null
    },
    {
      "latitude": 50.58165,
      "longitude": 7.058571,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1647183747,
      "ems": null
    },
    {
      "latitude": 50.583523,
      "longitude": 7.059087,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1647183750,
      "ems": null
    },
    {
      "latitude": 50.586685,
      "longitude": 7.060162,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 13,
      "squawk": "4451",
      "timestamp": 1647183756,
      "ems": null
    },
    {
      "latitude": 50.588333,
      "longitude": 7.060812,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1647183759,
      "ems": null
    },
    {
      "latitude": 50.589901,
      "longitude": 7.061611,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1647183762,
      "ems": null
    },
    {
      "latitude": 50.591667,
      "longitude": 7.062501,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1647183765,
      "ems": null
    },
    {
      "latitude": 50.593437,
      "longitude": 7.063467,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1647183768,
      "ems": null
    },
    {
      "latitude": 50.594929,
      "longitude": 7.064283,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1647183771,
      "ems": null
    },
    {
      "latitude": 50.596836,
      "longitude": 7.065322,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1647183774,
      "ems": null
    },
    {
      "latitude": 50.598312,
      "longitude": 7.066088,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1647183777,
      "ems": null
    },
    {
      "latitude": 50.600048,
      "longitude": 7.06703,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1647183780,
      "ems": null
    },
    {
      "latitude": 50.601677,
      "longitude": 7.067995,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183783,
      "ems": null
    },
    {
      "latitude": 50.603348,
      "longitude": 7.068979,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183786,
      "ems": null
    },
    {
      "latitude": 50.604843,
      "longitude": 7.069925,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1647183789,
      "ems": null
    },
    {
      "latitude": 50.608017,
      "longitude": 7.07187,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1647183795,
      "ems": null
    },
    {
      "latitude": 50.61108,
      "longitude": 7.073562,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1647183801,
      "ems": null
    },
    {
      "latitude": 50.614151,
      "longitude": 7.075195,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1647183807,
      "ems": null
    },
    {
      "latitude": 50.617039,
      "longitude": 7.07668,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1647183813,
      "ems": null
    },
    {
      "latitude": 50.620239,
      "longitude": 7.078303,
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
      "heading": 16,
      "squawk": "4451",
      "timestamp": 1647183819,
      "ems": null
    },
    {
      "latitude": 50.623215,
      "longitude": 7.079749,
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
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1647183825,
      "ems": null
    },
    {
      "latitude": 50.62619,
      "longitude": 7.081411,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1647183831,
      "ems": null
    },
    {
      "latitude": 50.629303,
      "longitude": 7.083146,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1647183837,
      "ems": null
    },
    {
      "latitude": 50.632168,
      "longitude": 7.084771,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183843,
      "ems": null
    },
    {
      "latitude": 50.634888,
      "longitude": 7.086326,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183850,
      "ems": null
    },
    {
      "latitude": 50.638229,
      "longitude": 7.088422,
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
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1647183857,
      "ems": null
    },
    {
      "latitude": 50.641479,
      "longitude": 7.090374,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647183863,
      "ems": null
    },
    {
      "latitude": 50.644272,
      "longitude": 7.09212,
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
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1647183869,
      "ems": null
    },
    {
      "latitude": 50.647202,
      "longitude": 7.094132,
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
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1647183876,
      "ems": null
    },
    {
      "latitude": 50.649906,
      "longitude": 7.096055,
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
      "heading": 24,
      "squawk": "4451",
      "timestamp": 1647183881,
      "ems": null
    },
    {
      "latitude": 50.653118,
      "longitude": 7.09843,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 24,
      "squawk": "4451",
      "timestamp": 1647183889,
      "ems": null
    },
    {
      "latitude": 50.655945,
      "longitude": 7.10042,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1647183894,
      "ems": null
    },
    {
      "latitude": 50.658749,
      "longitude": 7.10229,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1647183901,
      "ems": null
    },
    {
      "latitude": 50.661575,
      "longitude": 7.103962,
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
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1647183906,
      "ems": null
    },
    {
      "latitude": 50.662941,
      "longitude": 7.10474,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1647183910,
      "ems": null
    },
    {
      "latitude": 50.664383,
      "longitude": 7.105482,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1647183912,
      "ems": null
    },
    {
      "latitude": 50.665874,
      "longitude": 7.106298,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1647183916,
      "ems": null
    },
    {
      "latitude": 50.667252,
      "longitude": 7.106998,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1647183918,
      "ems": null
    },
    {
      "latitude": 50.668762,
      "longitude": 7.107721,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 16,
      "squawk": "4451",
      "timestamp": 1647183922,
      "ems": null
    },
    {
      "latitude": 50.670109,
      "longitude": 7.108303,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1647183925,
      "ems": null
    },
    {
      "latitude": 50.671509,
      "longitude": 7.108897,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1647183928,
      "ems": null
    },
    {
      "latitude": 50.672928,
      "longitude": 7.10949,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 13,
      "squawk": "4451",
      "timestamp": 1647183931,
      "ems": null
    },
    {
      "latitude": 50.674206,
      "longitude": 7.109909,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 13,
      "squawk": "4451",
      "timestamp": 1647183933,
      "ems": null
    },
    {
      "latitude": 50.677185,
      "longitude": 7.111124,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 16,
      "squawk": "4451",
      "timestamp": 1647183940,
      "ems": null
    },
    {
      "latitude": 50.680069,
      "longitude": 7.11246,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 16,
      "squawk": "4451",
      "timestamp": 1647183946,
      "ems": null
    },
    {
      "latitude": 50.68277,
      "longitude": 7.113571,
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
      "heading": 13,
      "squawk": "4451",
      "timestamp": 1647183951,
      "ems": null
    },
    {
      "latitude": 50.685425,
      "longitude": 7.114487,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1647183958,
      "ems": null
    },
    {
      "latitude": 50.688629,
      "longitude": 7.115578,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 12,
      "squawk": "4451",
      "timestamp": 1647183965,
      "ems": null
    },
    {
      "latitude": 50.691284,
      "longitude": 7.116468,
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
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1647183971,
      "ems": null
    },
    {
      "latitude": 50.692593,
      "longitude": 7.116852,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1647183974,
      "ems": null
    },
    {
      "latitude": 50.693943,
      "longitude": 7.117233,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1647183977,
      "ems": null
    },
    {
      "latitude": 50.695129,
      "longitude": 7.117507,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1647183980,
      "ems": null
    },
    {
      "latitude": 50.696777,
      "longitude": 7.117805,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1647183983,
      "ems": null
    },
    {
      "latitude": 50.698086,
      "longitude": 7.118073,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1647183986,
      "ems": null
    },
    {
      "latitude": 50.699753,
      "longitude": 7.118398,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1647183989,
      "ems": null
    },
    {
      "latitude": 50.702499,
      "longitude": 7.118992,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1647183995,
      "ems": null
    },
    {
      "latitude": 50.705154,
      "longitude": 7.11966,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1647184001,
      "ems": null
    },
    {
      "latitude": 50.707535,
      "longitude": 7.120402,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 12,
      "squawk": "4451",
      "timestamp": 1647184007,
      "ems": null
    },
    {
      "latitude": 50.708954,
      "longitude": 7.120996,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1647184010,
      "ems": null
    },
    {
      "latitude": 50.710419,
      "longitude": 7.121813,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1647184013,
      "ems": null
    },
    {
      "latitude": 50.711655,
      "longitude": 7.122555,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647184016,
      "ems": null
    },
    {
      "latitude": 50.712936,
      "longitude": 7.123298,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1647184019,
      "ems": null
    },
    {
      "latitude": 50.714333,
      "longitude": 7.124329,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 24,
      "squawk": "4451",
      "timestamp": 1647184022,
      "ems": null
    },
    {
      "latitude": 50.715359,
      "longitude": 7.125092,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 25,
      "squawk": "4451",
      "timestamp": 1647184025,
      "ems": null
    },
    {
      "latitude": 50.716614,
      "longitude": 7.126083,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 26,
      "squawk": "4451",
      "timestamp": 1647184028,
      "ems": null
    },
    {
      "latitude": 50.71756,
      "longitude": 7.126787,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 25,
      "squawk": "4451",
      "timestamp": 1647184031,
      "ems": null
    },
    {
      "latitude": 50.718842,
      "longitude": 7.127751,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1647184034,
      "ems": null
    },
    {
      "latitude": 50.719921,
      "longitude": 7.128525,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1647184037,
      "ems": null
    },
    {
      "latitude": 50.72113,
      "longitude": 7.129364,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1647184040,
      "ems": null
    },
    {
      "latitude": 50.723373,
      "longitude": 7.130869,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1647184046,
      "ems": null
    },
    {
      "latitude": 50.72546,
      "longitude": 7.132187,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1647184052,
      "ems": null
    },
    {
      "latitude": 50.727631,
      "longitude": 7.133542,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1647184058,
      "ems": null
    },
    {
      "latitude": 50.729927,
      "longitude": 7.134857,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1647184064,
      "ems": null
    },
    {
      "latitude": 50.732025,
      "longitude": 7.136154,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1647184070,
      "ems": null
    },
    {
      "latitude": 50.73381,
      "longitude": 7.137476,
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1647184076,
      "ems": null
    },
    {
      "latitude": 50.734909,
      "longitude": 7.138443,
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1647184079,
      "ems": null
    },
    {
      "latitude": 50.736073,
      "longitude": 7.139435,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1647184082,
      "ems": null
    },
    {
      "latitude": 50.737144,
      "longitude": 7.140274,
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
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1647184085,
      "ems": null
    },
    {
      "latitude": 50.737934,
      "longitude": 7.140884,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1647184088,
      "ems": null
    },
    {
      "latitude": 50.738892,
      "longitude": 7.141633,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1647184091,
      "ems": null
    },
    {
      "latitude": 50.740311,
      "longitude": 7.142672,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1647184094,
      "ems": null
    },
    {
      "latitude": 50.742546,
      "longitude": 7.14447,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1647184100,
      "ems": null
    },
    {
      "latitude": 50.743515,
      "longitude": 7.145864,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1647184103,
      "ems": null
    },
    {
      "latitude": 50.744064,
      "longitude": 7.147497,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1647184106,
      "ems": null
    },
    {
      "latitude": 50.744267,
      "longitude": 7.148666,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1647184108,
      "ems": null
    },
    {
      "latitude": 50.744453,
      "longitude": 7.150726,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1647184112,
      "ems": null
    },
    {
      "latitude": 50.744568,
      "longitude": 7.151654,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1647184114,
      "ems": null
    },
    {
      "latitude": 50.745197,
      "longitude": 7.153778,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1647184118,
      "ems": null
    },
    {
      "latitude": 50.745758,
      "longitude": 7.154694,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1647184120,
      "ems": null
    },
    {
      "latitude": 50.74704,
      "longitude": 7.155589,
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1647184124,
      "ems": null
    },
    {
      "latitude": 50.748505,
      "longitude": 7.155304,
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1647184128,
      "ems": null
    },
    {
      "latitude": 50.749329,
      "longitude": 7.154698,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1647184131,
      "ems": null
    },
    {
      "latitude": 50.750088,
      "longitude": 7.153397,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1647184134,
      "ems": null
    },
    {
      "latitude": 50.750656,
      "longitude": 7.151803,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1647184137,
      "ems": null
    },
    {
      "latitude": 50.751068,
      "longitude": 7.150244,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1647184140,
      "ems": null
    },
    {
      "latitude": 50.751434,
      "longitude": 7.148743,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1647184143,
      "ems": null
    },
    {
      "latitude": 50.751762,
      "longitude": 7.147446,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1647184146,
      "ems": null
    },
    {
      "latitude": 50.752182,
      "longitude": 7.145767,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1647184149,
      "ems": null
    },
    {
      "latitude": 50.752441,
      "longitude": 7.144528,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1647184152,
      "ems": null
    },
    {
      "latitude": 50.752808,
      "longitude": 7.143117,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1647184155,
      "ems": null
    },
    {
      "latitude": 50.753265,
      "longitude": 7.141484,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1647184158,
      "ems": null
    },
    {
      "latitude": 50.75367,
      "longitude": 7.140274,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1647184161,
      "ems": null
    },
    {
      "latitude": 50.754181,
      "longitude": 7.138824,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1647184164,
      "ems": null
    },
    {
      "latitude": 50.755112,
      "longitude": 7.136154,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1647184170,
      "ems": null
    },
    {
      "latitude": 50.755581,
      "longitude": 7.134857,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1647184173,
      "ems": null
    },
    {
      "latitude": 50.756104,
      "longitude": 7.133467,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1647184176,
      "ems": null
    },
    {
      "latitude": 50.75679,
      "longitude": 7.132263,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1647184179,
      "ems": null
    },
    {
      "latitude": 50.757721,
      "longitude": 7.131271,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1647184182,
      "ems": null
    },
    {
      "latitude": 50.758698,
      "longitude": 7.130585,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1647184185,
      "ems": null
    },
    {
      "latitude": 50.759724,
      "longitude": 7.130127,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1647184188,
      "ems": null
    },
    {
      "latitude": 50.760654,
      "longitude": 7.129898,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1647184191,
      "ems": null
    },
    {
      "latitude": 50.761642,
      "longitude": 7.12983,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1647184194,
      "ems": null
    },
    {
      "latitude": 50.76265,
      "longitude": 7.129756,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1647184197,
      "ems": null
    },
    {
      "latitude": 50.76384,
      "longitude": 7.12983,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1647184200,
      "ems": null
    },
    {
      "latitude": 50.764656,
      "longitude": 7.129822,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1647184203,
      "ems": null
    },
    {
      "latitude": 50.765762,
      "longitude": 7.129979,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1647184206,
      "ems": null
    },
    {
      "latitude": 50.76675,
      "longitude": 7.130051,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1647184209,
      "ems": null
    },
    {
      "latitude": 50.767685,
      "longitude": 7.130053,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1647184212,
      "ems": null
    },
    {
      "latitude": 50.768738,
      "longitude": 7.130127,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1647184215,
      "ems": null
    },
    {
      "latitude": 50.769516,
      "longitude": 7.130201,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1647184218,
      "ems": null
    },
    {
      "latitude": 50.770523,
      "longitude": 7.130424,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1647184221,
      "ems": null
    },
    {
      "latitude": 50.771313,
      "longitude": 7.130661,
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1647184224,
      "ems": null
    },
    {
      "latitude": 50.772217,
      "longitude": 7.131018,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1647184227,
      "ems": null
    },
    {
      "latitude": 50.772995,
      "longitude": 7.131537,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1647184230,
      "ems": null
    },
    {
      "latitude": 50.77364,
      "longitude": 7.132263,
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
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1647184233,
      "ems": null
    },
    {
      "latitude": 50.774185,
      "longitude": 7.133245,
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
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1647184236,
      "ems": null
    },
    {
      "latitude": 50.774597,
      "longitude": 7.134729,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1647184240,
      "ems": null
    },
    {
      "latitude": 50.774643,
      "longitude": 7.13614,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1647184243,
      "ems": null
    },
    {
      "latitude": 50.774479,
      "longitude": 7.137222,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1647184246,
      "ems": null
    },
    {
      "latitude": 50.774292,
      "longitude": 7.138214,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1647184249,
      "ems": null
    },
    {
      "latitude": 50.774002,
      "longitude": 7.13948,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647184252,
      "ems": null
    },
    {
      "latitude": 50.773819,
      "longitude": 7.140594,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1647184255,
      "ems": null
    },
    {
      "latitude": 50.77359,
      "longitude": 7.141781,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1647184258,
      "ems": null
    },
    {
      "latitude": 50.773361,
      "longitude": 7.142746,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1647184261,
      "ems": null
    },
    {
      "latitude": 50.773083,
      "longitude": 7.14386,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1647184264,
      "ems": null
    },
    {
      "latitude": 50.772903,
      "longitude": 7.144751,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647184267,
      "ems": null
    },
    {
      "latitude": 50.772663,
      "longitude": 7.145844,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1647184270,
      "ems": null
    },
    {
      "latitude": 50.772491,
      "longitude": 7.146532,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647184272,
      "ems": null
    },
    {
      "latitude": 50.772217,
      "longitude": 7.147794,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647184276,
      "ems": null
    },
    {
      "latitude": 50.771942,
      "longitude": 7.149205,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1647184280,
      "ems": null
    },
    {
      "latitude": 50.771393,
      "longitude": 7.151877,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1647184289,
      "ems": null
    },
    {
      "latitude": 50.770752,
      "longitude": 7.154549,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1647184297,
      "ems": null
    },
    {
      "latitude": 50.769917,
      "longitude": 7.157211,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1647184305,
      "ems": null
    },
    {
      "latitude": 50.769196,
      "longitude": 7.158854,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1647184309,
      "ems": null
    },
    {
      "latitude": 50.768692,
      "longitude": 7.160414,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1647184313,
      "ems": null
    },
    {
      "latitude": 50.767822,
      "longitude": 7.163696,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1647184321,
      "ems": null
    },
    {
      "latitude": 50.767124,
      "longitude": 7.16629,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647184329,
      "ems": null
    },
    {
      "latitude": 50.766846,
      "longitude": 7.168198,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1647184333,
      "ems": null
    },
    {
      "latitude": 50.766678,
      "longitude": 7.169618,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1647184337,
      "ems": null
    },
    {
      "latitude": 50.766541,
      "longitude": 7.170732,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1647184341,
      "ems": null
    },
    {
      "latitude": 50.766426,
      "longitude": 7.172241,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1647184344,
      "ems": null
    },
    {
      "latitude": 50.766312,
      "longitude": 7.173107,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1647184346,
      "ems": null
    },
    {
      "latitude": 50.766193,
      "longitude": 7.174454,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1647184350,
      "ems": null
    },
    {
      "latitude": 50.766052,
      "longitude": 7.175369,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1647184353,
      "ems": null
    },
    {
      "latitude": 50.765625,
      "longitude": 7.178081,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1647184357,
      "ems": null
    },
    {
      "latitude": 50.76535,
      "longitude": 7.17964,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1647184361,
      "ems": null
    },
    {
      "latitude": 50.764751,
      "longitude": 7.183456,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1647184369,
      "ems": null
    },
    {
      "latitude": 50.764343,
      "longitude": 7.18543,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1647184373,
      "ems": null
    },
    {
      "latitude": 50.763885,
      "longitude": 7.187285,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1647184377,
      "ems": null
    },
    {
      "latitude": 50.763584,
      "longitude": 7.188492,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1647184381,
      "ems": null
    },
    {
      "latitude": 50.763027,
      "longitude": 7.190475,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1647184385,
      "ems": null
    },
    {
      "latitude": 50.762329,
      "longitude": 7.192333,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1647184389,
      "ems": null
    },
    {
      "latitude": 50.761353,
      "longitude": 7.19429,
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1647184393,
      "ems": null
    },
    {
      "latitude": 50.760635,
      "longitude": 7.19508,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1647184396,
      "ems": null
    },
    {
      "latitude": 50.75972,
      "longitude": 7.195674,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1647184399,
      "ems": null
    },
    {
      "latitude": 50.758698,
      "longitude": 7.195816,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1647184402,
      "ems": null
    },
    {
      "latitude": 50.757534,
      "longitude": 7.195435,
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1647184406,
      "ems": null
    },
    {
      "latitude": 50.756512,
      "longitude": 7.194672,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1647184409,
      "ems": null
    },
    {
      "latitude": 50.75592,
      "longitude": 7.194041,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1647184411,
      "ems": null
    },
    {
      "latitude": 50.754787,
      "longitude": 7.19223,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1647184414,
      "ems": null
    },
    {
      "latitude": 50.754593,
      "longitude": 7.19174,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1647184416,
      "ems": null
    },
    {
      "latitude": 50.753723,
      "longitude": 7.189809,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1647184419,
      "ems": null
    },
    {
      "latitude": 50.752972,
      "longitude": 7.188187,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1647184422,
      "ems": null
    },
    {
      "latitude": 50.752365,
      "longitude": 7.186966,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1647184425,
      "ems": null
    },
    {
      "latitude": 50.751526,
      "longitude": 7.185133,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1647184428,
      "ems": null
    },
    {
      "latitude": 50.750702,
      "longitude": 7.1835,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1647184431,
      "ems": null
    },
    {
      "latitude": 50.750038,
      "longitude": 7.181931,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1647184434,
      "ems": null
    },
    {
      "latitude": 50.749481,
      "longitude": 7.180634,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1647184437,
      "ems": null
    },
    {
      "latitude": 50.748596,
      "longitude": 7.178574,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1647184440,
      "ems": null
    },
    {
      "latitude": 50.748222,
      "longitude": 7.177582,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1647184443,
      "ems": null
    },
    {
      "latitude": 50.746735,
      "longitude": 7.173996,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1647184449,
      "ems": null
    },
    {
      "latitude": 50.746124,
      "longitude": 7.171845,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1647184452,
      "ems": null
    },
    {
      "latitude": 50.74585,
      "longitude": 7.170105,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1647184455,
      "ems": null
    },
    {
      "latitude": 50.745804,
      "longitude": 7.169395,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1647184456,
      "ems": null
    },
    {
      "latitude": 50.74585,
      "longitude": 7.166501,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1647184460,
      "ems": null
    },
    {
      "latitude": 50.746407,
      "longitude": 7.163849,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1647184464,
      "ems": null
    },
    {
      "latitude": 50.74736,
      "longitude": 7.16175,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1647184468,
      "ems": null
    },
    {
      "latitude": 50.748047,
      "longitude": 7.160636,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1647184471,
      "ems": null
    },
    {
      "latitude": 50.749283,
      "longitude": 7.158632,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1647184474,
      "ems": null
    },
    {
      "latitude": 50.750134,
      "longitude": 7.157288,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1647184477,
      "ems": null
    },
    {
      "latitude": 50.750832,
      "longitude": 7.156219,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1647184480,
      "ems": null
    },
    {
      "latitude": 50.751717,
      "longitude": 7.154694,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1647184483,
      "ems": null
    },
    {
      "latitude": 50.752441,
      "longitude": 7.153361,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1647184486,
      "ems": null
    },
    {
      "latitude": 50.753128,
      "longitude": 7.1521,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1647184489,
      "ems": null
    },
    {
      "latitude": 50.753769,
      "longitude": 7.150689,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1647184492,
      "ems": null
    },
    {
      "latitude": 50.754456,
      "longitude": 7.149279,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1647184495,
      "ems": null
    },
    {
      "latitude": 50.755112,
      "longitude": 7.147827,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1647184498,
      "ems": null
    },
    {
      "latitude": 50.755672,
      "longitude": 7.146454,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1647184501,
      "ems": null
    },
    {
      "latitude": 50.756424,
      "longitude": 7.144751,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1647184504,
      "ems": null
    },
    {
      "latitude": 50.756977,
      "longitude": 7.14325,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1647184507,
      "ems": null
    },
    {
      "latitude": 50.757523,
      "longitude": 7.141856,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1647184510,
      "ems": null
    },
    {
      "latitude": 50.758118,
      "longitude": 7.140371,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1647184513,
      "ems": null
    },
    {
      "latitude": 50.759674,
      "longitude": 7.137773,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1647184519,
      "ems": null
    },
    {
      "latitude": 50.760681,
      "longitude": 7.136882,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1647184522,
      "ems": null
    },
    {
      "latitude": 50.761734,
      "longitude": 7.136288,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1647184525,
      "ems": null
    },
    {
      "latitude": 50.762794,
      "longitude": 7.135849,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1647184528,
      "ems": null
    },
    {
      "latitude": 50.763958,
      "longitude": 7.135544,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1647184530,
      "ems": null
    },
    {
      "latitude": 50.764893,
      "longitude": 7.135472,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1647184534,
      "ems": null
    },
    {
      "latitude": 50.765945,
      "longitude": 7.13562,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1647184537,
      "ems": null
    },
    {
      "latitude": 50.766998,
      "longitude": 7.135917,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1647184540,
      "ems": null
    },
    {
      "latitude": 50.768097,
      "longitude": 7.136288,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1647184543,
      "ems": null
    },
    {
      "latitude": 50.769058,
      "longitude": 7.136659,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1647184546,
      "ems": null
    },
    {
      "latitude": 50.770103,
      "longitude": 7.13707,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1647184549,
      "ems": null
    },
    {
      "latitude": 50.77108,
      "longitude": 7.137527,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1647184552,
      "ems": null
    },
    {
      "latitude": 50.771591,
      "longitude": 7.137985,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1647184554,
      "ems": null
    },
    {
      "latitude": 50.772491,
      "longitude": 7.139628,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1647184557,
      "ems": null
    },
    {
      "latitude": 50.772675,
      "longitude": 7.141039,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1647184561,
      "ems": null
    },
    {
      "latitude": 50.772804,
      "longitude": 7.142181,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1647184563,
      "ems": null
    },
    {
      "latitude": 50.772858,
      "longitude": 7.143637,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1647184567,
      "ems": null
    },
    {
      "latitude": 50.772709,
      "longitude": 7.145309,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1647184571,
      "ems": null
    },
    {
      "latitude": 50.772526,
      "longitude": 7.146301,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1647184573,
      "ems": null
    },
    {
      "latitude": 50.772293,
      "longitude": 7.147369,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647184577,
      "ems": null
    },
    {
      "latitude": 50.772034,
      "longitude": 7.148462,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647184579,
      "ems": null
    },
    {
      "latitude": 50.771805,
      "longitude": 7.149427,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1647184582,
      "ems": null
    },
    {
      "latitude": 50.77153,
      "longitude": 7.150838,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1647184586,
      "ems": null
    },
    {
      "latitude": 50.771347,
      "longitude": 7.152025,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1647184589,
      "ems": null
    },
    {
      "latitude": 50.770981,
      "longitude": 7.153733,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647184593,
      "ems": null
    },
    {
      "latitude": 50.770802,
      "longitude": 7.154388,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647184597,
      "ems": null
    },
    {
      "latitude": 50.770195,
      "longitude": 7.157364,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1647184604,
      "ems": null
    },
    {
      "latitude": 50.769928,
      "longitude": 7.158484,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1647184608,
      "ems": null
    },
    {
      "latitude": 50.769287,
      "longitude": 7.161304,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 35.2,
        "kts": 19,
        "mph": 21.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1647184623,
      "ems": null
    }
  ]
};
