import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20220227EDKBEDKB",
    callsign: "DEFCZ",
    name: "Tour Flight with adriana :D",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 1, 27, 11, 40).getTime(),
    arrival: new Date(2022, 1, 27, 13, 40).getTime(),
    singleEnginePistonTime: 120,
    picTime: 120,
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
      "latitude": 50.766083,
      "longitude": 7.176373,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 111,
      "squawk": "0",
      "timestamp": 1645962405,
      "ems": null
    },
    {
      "latitude": 50.765354,
      "longitude": 7.17926,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 110,
      "squawk": "0",
      "timestamp": 1645962412,
      "ems": null
    },
    {
      "latitude": 50.764702,
      "longitude": 7.181549,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 117,
      "squawk": "0",
      "timestamp": 1645962418,
      "ems": null
    },
    {
      "latitude": 50.764297,
      "longitude": 7.182683,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 120,
      "squawk": "0",
      "timestamp": 1645962421,
      "ems": null
    },
    {
      "latitude": 50.763931,
      "longitude": 7.183574,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 123,
      "squawk": "0",
      "timestamp": 1645962424,
      "ems": null
    },
    {
      "latitude": 50.763351,
      "longitude": 7.184753,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 126,
      "squawk": "0",
      "timestamp": 1645962427,
      "ems": null
    },
    {
      "latitude": 50.762886,
      "longitude": 7.185822,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 128,
      "squawk": "0",
      "timestamp": 1645962430,
      "ems": null
    },
    {
      "latitude": 50.762375,
      "longitude": 7.186737,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 128,
      "squawk": "0",
      "timestamp": 1645962433,
      "ems": null
    },
    {
      "latitude": 50.761864,
      "longitude": 7.187729,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 128,
      "squawk": "0",
      "timestamp": 1645962436,
      "ems": null
    },
    {
      "latitude": 50.761414,
      "longitude": 7.188696,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 128,
      "squawk": "0",
      "timestamp": 1645962439,
      "ems": null
    },
    {
      "latitude": 50.760887,
      "longitude": 7.189713,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 131,
      "squawk": "0",
      "timestamp": 1645962442,
      "ems": null
    },
    {
      "latitude": 50.760223,
      "longitude": 7.1907,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 136,
      "squawk": "0",
      "timestamp": 1645962445,
      "ems": null
    },
    {
      "latitude": 50.759537,
      "longitude": 7.191591,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 139,
      "squawk": "0",
      "timestamp": 1645962448,
      "ems": null
    },
    {
      "latitude": 50.758896,
      "longitude": 7.192482,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1645962451,
      "ems": null
    },
    {
      "latitude": 50.758141,
      "longitude": 7.193375,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1645962454,
      "ems": null
    },
    {
      "latitude": 50.757393,
      "longitude": 7.193909,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1645962457,
      "ems": null
    },
    {
      "latitude": 50.756603,
      "longitude": 7.19429,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1645962460,
      "ems": null
    },
    {
      "latitude": 50.755783,
      "longitude": 7.194486,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1645962463,
      "ems": null
    },
    {
      "latitude": 50.754913,
      "longitude": 7.194486,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1645962466,
      "ems": null
    },
    {
      "latitude": 50.754135,
      "longitude": 7.194486,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1645962469,
      "ems": null
    },
    {
      "latitude": 50.752991,
      "longitude": 7.194337,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1645962472,
      "ems": null
    },
    {
      "latitude": 50.751251,
      "longitude": 7.193909,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1645962478,
      "ems": null
    },
    {
      "latitude": 50.750225,
      "longitude": 7.193527,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1645962481,
      "ems": null
    },
    {
      "latitude": 50.749283,
      "longitude": 7.19315,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1645962484,
      "ems": null
    },
    {
      "latitude": 50.748596,
      "longitude": 7.192779,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1645962487,
      "ems": null
    },
    {
      "latitude": 50.747314,
      "longitude": 7.192185,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1645962490,
      "ems": null
    },
    {
      "latitude": 50.74649,
      "longitude": 7.19174,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1645962493,
      "ems": null
    },
    {
      "latitude": 50.745667,
      "longitude": 7.191294,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1645962496,
      "ems": null
    },
    {
      "latitude": 50.74464,
      "longitude": 7.190552,
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1645962499,
      "ems": null
    },
    {
      "latitude": 50.743523,
      "longitude": 7.189636,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1645962502,
      "ems": null
    },
    {
      "latitude": 50.742737,
      "longitude": 7.188919,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1645962505,
      "ems": null
    },
    {
      "latitude": 50.741753,
      "longitude": 7.188034,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1645962508,
      "ems": null
    },
    {
      "latitude": 50.741055,
      "longitude": 7.187347,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1645962511,
      "ems": null
    },
    {
      "latitude": 50.740082,
      "longitude": 7.186469,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1645962514,
      "ems": null
    },
    {
      "latitude": 50.738983,
      "longitude": 7.185504,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1645962517,
      "ems": null
    },
    {
      "latitude": 50.738075,
      "longitude": 7.184677,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1645962520,
      "ems": null
    },
    {
      "latitude": 50.737244,
      "longitude": 7.183945,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1645962523,
      "ems": null
    },
    {
      "latitude": 50.736237,
      "longitude": 7.183128,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1645962526,
      "ems": null
    },
    {
      "latitude": 50.73436,
      "longitude": 7.181421,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1645962532,
      "ems": null
    },
    {
      "latitude": 50.73349,
      "longitude": 7.180456,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1645962535,
      "ems": null
    },
    {
      "latitude": 50.732674,
      "longitude": 7.179489,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1645962538,
      "ems": null
    },
    {
      "latitude": 50.731884,
      "longitude": 7.178421,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1645962541,
      "ems": null
    },
    {
      "latitude": 50.730927,
      "longitude": 7.177042,
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1645962544,
      "ems": null
    },
    {
      "latitude": 50.729977,
      "longitude": 7.175674,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1645962547,
      "ems": null
    },
    {
      "latitude": 50.729183,
      "longitude": 7.174377,
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1645962550,
      "ems": null
    },
    {
      "latitude": 50.728439,
      "longitude": 7.173386,
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1645962553,
      "ems": null
    },
    {
      "latitude": 50.727539,
      "longitude": 7.172142,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1645962556,
      "ems": null
    },
    {
      "latitude": 50.726624,
      "longitude": 7.170868,
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1645962559,
      "ems": null
    },
    {
      "latitude": 50.725834,
      "longitude": 7.169724,
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1645962562,
      "ems": null
    },
    {
      "latitude": 50.724949,
      "longitude": 7.168503,
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1645962565,
      "ems": null
    },
    {
      "latitude": 50.724106,
      "longitude": 7.167094,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1645962568,
      "ems": null
    },
    {
      "latitude": 50.722435,
      "longitude": 7.164383,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1645962574,
      "ems": null
    },
    {
      "latitude": 50.720718,
      "longitude": 7.161304,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1645962580,
      "ems": null
    },
    {
      "latitude": 50.720032,
      "longitude": 7.159968,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1645962583,
      "ems": null
    },
    {
      "latitude": 50.719315,
      "longitude": 7.158279,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1645962586,
      "ems": null
    },
    {
      "latitude": 50.718708,
      "longitude": 7.156601,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1645962589,
      "ems": null
    },
    {
      "latitude": 50.718243,
      "longitude": 7.155228,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1645962592,
      "ems": null
    },
    {
      "latitude": 50.717545,
      "longitude": 7.15332,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1645962595,
      "ems": null
    },
    {
      "latitude": 50.716965,
      "longitude": 7.151506,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1645962598,
      "ems": null
    },
    {
      "latitude": 50.716553,
      "longitude": 7.149947,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1645962601,
      "ems": null
    },
    {
      "latitude": 50.716003,
      "longitude": 7.147572,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1645962604,
      "ems": null
    },
    {
      "latitude": 50.715637,
      "longitude": 7.145419,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1645962607,
      "ems": null
    },
    {
      "latitude": 50.715363,
      "longitude": 7.143489,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1645962610,
      "ems": null
    },
    {
      "latitude": 50.71508,
      "longitude": 7.141647,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1645962613,
      "ems": null
    },
    {
      "latitude": 50.714859,
      "longitude": 7.13948,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1645962616,
      "ems": null
    },
    {
      "latitude": 50.714661,
      "longitude": 7.137375,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1645962619,
      "ems": null
    },
    {
      "latitude": 50.714382,
      "longitude": 7.135239,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1645962622,
      "ems": null
    },
    {
      "latitude": 50.714218,
      "longitude": 7.133245,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1645962625,
      "ems": null
    },
    {
      "latitude": 50.714081,
      "longitude": 7.131166,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1645962628,
      "ems": null
    },
    {
      "latitude": 50.714035,
      "longitude": 7.129014,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1645962631,
      "ems": null
    },
    {
      "latitude": 50.714081,
      "longitude": 7.126861,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1645962634,
      "ems": null
    },
    {
      "latitude": 50.714172,
      "longitude": 7.124559,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1645962637,
      "ems": null
    },
    {
      "latitude": 50.714355,
      "longitude": 7.122555,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1645962640,
      "ems": null
    },
    {
      "latitude": 50.714565,
      "longitude": 7.120209,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1645962643,
      "ems": null
    },
    {
      "latitude": 50.714848,
      "longitude": 7.117996,
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1645962646,
      "ems": null
    },
    {
      "latitude": 50.715126,
      "longitude": 7.116089,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1645962649,
      "ems": null
    },
    {
      "latitude": 50.715546,
      "longitude": 7.113647,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1645962652,
      "ems": null
    },
    {
      "latitude": 50.715912,
      "longitude": 7.111421,
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1645962655,
      "ems": null
    },
    {
      "latitude": 50.71629,
      "longitude": 7.109299,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1645962658,
      "ems": null
    },
    {
      "latitude": 50.716755,
      "longitude": 7.10701,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1645962661,
      "ems": null
    },
    {
      "latitude": 50.71722,
      "longitude": 7.104797,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1645962664,
      "ems": null
    },
    {
      "latitude": 50.717789,
      "longitude": 7.102587,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1645962667,
      "ems": null
    },
    {
      "latitude": 50.718338,
      "longitude": 7.100525,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1645962670,
      "ems": null
    },
    {
      "latitude": 50.718849,
      "longitude": 7.098389,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1645962673,
      "ems": null
    },
    {
      "latitude": 50.719299,
      "longitude": 7.096277,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1645962676,
      "ems": null
    },
    {
      "latitude": 50.719875,
      "longitude": 7.093964,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1645962679,
      "ems": null
    },
    {
      "latitude": 50.720341,
      "longitude": 7.092133,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1645962682,
      "ems": null
    },
    {
      "latitude": 50.720856,
      "longitude": 7.090264,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1645962685,
      "ems": null
    },
    {
      "latitude": 50.72155,
      "longitude": 7.08786,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1645962688,
      "ems": null
    },
    {
      "latitude": 50.722202,
      "longitude": 7.0858,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1645962691,
      "ems": null
    },
    {
      "latitude": 50.7229,
      "longitude": 7.083664,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1645962694,
      "ems": null
    },
    {
      "latitude": 50.723553,
      "longitude": 7.081757,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1645962697,
      "ems": null
    },
    {
      "latitude": 50.724201,
      "longitude": 7.079697,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1645962700,
      "ems": null
    },
    {
      "latitude": 50.724854,
      "longitude": 7.077637,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1645962703,
      "ems": null
    },
    {
      "latitude": 50.725571,
      "longitude": 7.075418,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1645962707,
      "ems": null
    },
    {
      "latitude": 50.726257,
      "longitude": 7.073339,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1645962710,
      "ems": null
    },
    {
      "latitude": 50.726852,
      "longitude": 7.071558,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1645962712,
      "ems": null
    },
    {
      "latitude": 50.727722,
      "longitude": 7.069331,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1645962716,
      "ems": null
    },
    {
      "latitude": 50.728546,
      "longitude": 7.067475,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1645962719,
      "ems": null
    },
    {
      "latitude": 50.729324,
      "longitude": 7.065659,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1645962721,
      "ems": null
    },
    {
      "latitude": 50.730194,
      "longitude": 7.063689,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1645962724,
      "ems": null
    },
    {
      "latitude": 50.731018,
      "longitude": 7.061833,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1645962728,
      "ems": null
    },
    {
      "latitude": 50.731884,
      "longitude": 7.060089,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1645962730,
      "ems": null
    },
    {
      "latitude": 50.732849,
      "longitude": 7.058196,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1645962734,
      "ems": null
    },
    {
      "latitude": 50.733932,
      "longitude": 7.056503,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1645962737,
      "ems": null
    },
    {
      "latitude": 50.73505,
      "longitude": 7.055206,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1645962739,
      "ems": null
    },
    {
      "latitude": 50.736374,
      "longitude": 7.054113,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1645962743,
      "ems": null
    },
    {
      "latitude": 50.73761,
      "longitude": 7.053223,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1645962745,
      "ems": null
    },
    {
      "latitude": 50.739075,
      "longitude": 7.052555,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1645962749,
      "ems": null
    },
    {
      "latitude": 50.740635,
      "longitude": 7.05246,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 358,
      "squawk": "7042",
      "timestamp": 1645962751,
      "ems": null
    },
    {
      "latitude": 50.74194,
      "longitude": 7.052612,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 4,
      "squawk": "7042",
      "timestamp": 1645962755,
      "ems": null
    },
    {
      "latitude": 50.74371,
      "longitude": 7.052841,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 5,
      "squawk": "7042",
      "timestamp": 1645962758,
      "ems": null
    },
    {
      "latitude": 50.745106,
      "longitude": 7.05307,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 5,
      "squawk": "7042",
      "timestamp": 1645962760,
      "ems": null
    },
    {
      "latitude": 50.746593,
      "longitude": 7.053375,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 6,
      "squawk": "7042",
      "timestamp": 1645962763,
      "ems": null
    },
    {
      "latitude": 50.748184,
      "longitude": 7.053668,
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
      "heading": 7,
      "squawk": "7042",
      "timestamp": 1645962767,
      "ems": null
    },
    {
      "latitude": 50.749695,
      "longitude": 7.054039,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 7,
      "squawk": "7042",
      "timestamp": 1645962770,
      "ems": null
    },
    {
      "latitude": 50.751156,
      "longitude": 7.054367,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 8,
      "squawk": "7042",
      "timestamp": 1645962772,
      "ems": null
    },
    {
      "latitude": 50.752625,
      "longitude": 7.054856,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 15,
      "squawk": "7042",
      "timestamp": 1645962776,
      "ems": null
    },
    {
      "latitude": 50.754044,
      "longitude": 7.055598,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 20,
      "squawk": "7042",
      "timestamp": 1645962779,
      "ems": null
    },
    {
      "latitude": 50.755486,
      "longitude": 7.05658,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 23,
      "squawk": "7042",
      "timestamp": 1645962782,
      "ems": null
    },
    {
      "latitude": 50.756744,
      "longitude": 7.057454,
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
      "heading": 23,
      "squawk": "7042",
      "timestamp": 1645962784,
      "ems": null
    },
    {
      "latitude": 50.757954,
      "longitude": 7.058334,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 24,
      "squawk": "7042",
      "timestamp": 1645962788,
      "ems": null
    },
    {
      "latitude": 50.759354,
      "longitude": 7.059309,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 24,
      "squawk": "7042",
      "timestamp": 1645962791,
      "ems": null
    },
    {
      "latitude": 50.760605,
      "longitude": 7.060242,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 26,
      "squawk": "7042",
      "timestamp": 1645962794,
      "ems": null
    },
    {
      "latitude": 50.761772,
      "longitude": 7.061234,
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
      "heading": 28,
      "squawk": "7042",
      "timestamp": 1645962797,
      "ems": null
    },
    {
      "latitude": 50.763016,
      "longitude": 7.062353,
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
      "heading": 29,
      "squawk": "7042",
      "timestamp": 1645962800,
      "ems": null
    },
    {
      "latitude": 50.764206,
      "longitude": 7.063393,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 29,
      "squawk": "7042",
      "timestamp": 1645962803,
      "ems": null
    },
    {
      "latitude": 50.765263,
      "longitude": 7.064362,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 30,
      "squawk": "7042",
      "timestamp": 1645962806,
      "ems": null
    },
    {
      "latitude": 50.766472,
      "longitude": 7.065506,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 31,
      "squawk": "7042",
      "timestamp": 1645962809,
      "ems": null
    },
    {
      "latitude": 50.767544,
      "longitude": 7.066574,
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
      "heading": 29,
      "squawk": "7042",
      "timestamp": 1645962812,
      "ems": null
    },
    {
      "latitude": 50.770195,
      "longitude": 7.068329,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 16,
      "squawk": "7042",
      "timestamp": 1645962818,
      "ems": null
    },
    {
      "latitude": 50.771484,
      "longitude": 7.068737,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 8,
      "squawk": "7042",
      "timestamp": 1645962821,
      "ems": null
    },
    {
      "latitude": 50.773083,
      "longitude": 7.06871,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 353,
      "squawk": "7042",
      "timestamp": 1645962824,
      "ems": null
    },
    {
      "latitude": 50.774525,
      "longitude": 7.068176,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 341,
      "squawk": "7042",
      "timestamp": 1645962827,
      "ems": null
    },
    {
      "latitude": 50.77565,
      "longitude": 7.067401,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 332,
      "squawk": "7042",
      "timestamp": 1645962830,
      "ems": null
    },
    {
      "latitude": 50.777252,
      "longitude": 7.06599,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 329,
      "squawk": "7042",
      "timestamp": 1645962833,
      "ems": null
    },
    {
      "latitude": 50.778435,
      "longitude": 7.064819,
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
      "heading": 328,
      "squawk": "7042",
      "timestamp": 1645962836,
      "ems": null
    },
    {
      "latitude": 50.779831,
      "longitude": 7.063522,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 329,
      "squawk": "7042",
      "timestamp": 1645962839,
      "ems": null
    },
    {
      "latitude": 50.781231,
      "longitude": 7.062225,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 330,
      "squawk": "7042",
      "timestamp": 1645962842,
      "ems": null
    },
    {
      "latitude": 50.782516,
      "longitude": 7.061091,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 330,
      "squawk": "7042",
      "timestamp": 1645962845,
      "ems": null
    },
    {
      "latitude": 50.78389,
      "longitude": 7.059978,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 331,
      "squawk": "7042",
      "timestamp": 1645962848,
      "ems": null
    },
    {
      "latitude": 50.785187,
      "longitude": 7.058868,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 332,
      "squawk": "7042",
      "timestamp": 1645962851,
      "ems": null
    },
    {
      "latitude": 50.786453,
      "longitude": 7.057825,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 332,
      "squawk": "7042",
      "timestamp": 1645962854,
      "ems": null
    },
    {
      "latitude": 50.787781,
      "longitude": 7.056786,
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
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1645962857,
      "ems": null
    },
    {
      "latitude": 50.790344,
      "longitude": 7.054856,
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1645962863,
      "ems": null
    },
    {
      "latitude": 50.791656,
      "longitude": 7.053909,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645962866,
      "ems": null
    },
    {
      "latitude": 50.792862,
      "longitude": 7.053074,
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
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645962869,
      "ems": null
    },
    {
      "latitude": 50.79417,
      "longitude": 7.052231,
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
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645962872,
      "ems": null
    },
    {
      "latitude": 50.79538,
      "longitude": 7.051367,
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
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645962875,
      "ems": null
    },
    {
      "latitude": 50.797802,
      "longitude": 7.049637,
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1645962881,
      "ems": null
    },
    {
      "latitude": 50.800407,
      "longitude": 7.047806,
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
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1645962887,
      "ems": null
    },
    {
      "latitude": 50.802887,
      "longitude": 7.046096,
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
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645962893,
      "ems": null
    },
    {
      "latitude": 50.805622,
      "longitude": 7.044144,
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1645962899,
      "ems": null
    },
    {
      "latitude": 50.808231,
      "longitude": 7.042389,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645962905,
      "ems": null
    },
    {
      "latitude": 50.811115,
      "longitude": 7.040405,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1645962911,
      "ems": null
    },
    {
      "latitude": 50.813862,
      "longitude": 7.038651,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 338,
      "squawk": "7042",
      "timestamp": 1645962917,
      "ems": null
    },
    {
      "latitude": 50.816711,
      "longitude": 7.036743,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645962923,
      "ems": null
    },
    {
      "latitude": 50.819595,
      "longitude": 7.034813,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1645962929,
      "ems": null
    },
    {
      "latitude": 50.822662,
      "longitude": 7.032809,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645962935,
      "ems": null
    },
    {
      "latitude": 50.825546,
      "longitude": 7.030945,
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
      "heading": 340,
      "squawk": "7042",
      "timestamp": 1645962941,
      "ems": null
    },
    {
      "latitude": 50.828899,
      "longitude": 7.02919,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 342,
      "squawk": "7042",
      "timestamp": 1645962947,
      "ems": null
    },
    {
      "latitude": 50.830215,
      "longitude": 7.028578,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 343,
      "squawk": "7042",
      "timestamp": 1645962950,
      "ems": null
    },
    {
      "latitude": 50.831863,
      "longitude": 7.027761,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 342,
      "squawk": "7042",
      "timestamp": 1645962953,
      "ems": null
    },
    {
      "latitude": 50.83342,
      "longitude": 7.027019,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 342,
      "squawk": "7042",
      "timestamp": 1645962956,
      "ems": null
    },
    {
      "latitude": 50.836578,
      "longitude": 7.025386,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 341,
      "squawk": "7042",
      "timestamp": 1645962962,
      "ems": null
    },
    {
      "latitude": 50.839653,
      "longitude": 7.023621,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 338,
      "squawk": "7042",
      "timestamp": 1645962968,
      "ems": null
    },
    {
      "latitude": 50.842621,
      "longitude": 7.021749,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1645962974,
      "ems": null
    },
    {
      "latitude": 50.844131,
      "longitude": 7.020709,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1645962977,
      "ems": null
    },
    {
      "latitude": 50.845459,
      "longitude": 7.019818,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645962980,
      "ems": null
    },
    {
      "latitude": 50.846962,
      "longitude": 7.018814,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1645962983,
      "ems": null
    },
    {
      "latitude": 50.848358,
      "longitude": 7.017746,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1645962986,
      "ems": null
    },
    {
      "latitude": 50.849895,
      "longitude": 7.016678,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1645962989,
      "ems": null
    },
    {
      "latitude": 50.851181,
      "longitude": 7.015736,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1645962992,
      "ems": null
    },
    {
      "latitude": 50.8526,
      "longitude": 7.014771,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1645962995,
      "ems": null
    },
    {
      "latitude": 50.855572,
      "longitude": 7.012711,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645963001,
      "ems": null
    },
    {
      "latitude": 50.858459,
      "longitude": 7.010803,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1645963007,
      "ems": null
    },
    {
      "latitude": 50.861393,
      "longitude": 7.008743,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645963013,
      "ems": null
    },
    {
      "latitude": 50.864594,
      "longitude": 7.006605,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645963019,
      "ems": null
    },
    {
      "latitude": 50.867752,
      "longitude": 7.004378,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645963025,
      "ems": null
    },
    {
      "latitude": 50.870564,
      "longitude": 7.002411,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645963031,
      "ems": null
    },
    {
      "latitude": 50.873474,
      "longitude": 7.000444,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645963037,
      "ems": null
    },
    {
      "latitude": 50.876476,
      "longitude": 6.998367,
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1645963043,
      "ems": null
    },
    {
      "latitude": 50.879288,
      "longitude": 6.996287,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1645963049,
      "ems": null
    },
    {
      "latitude": 50.882202,
      "longitude": 6.994171,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1645963055,
      "ems": null
    },
    {
      "latitude": 50.884995,
      "longitude": 6.992111,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1645963061,
      "ems": null
    },
    {
      "latitude": 50.887695,
      "longitude": 6.989975,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1645963067,
      "ems": null
    },
    {
      "latitude": 50.890442,
      "longitude": 6.988068,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645963073,
      "ems": null
    },
    {
      "latitude": 50.893112,
      "longitude": 6.986266,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645963079,
      "ems": null
    },
    {
      "latitude": 50.896072,
      "longitude": 6.984024,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1645963086,
      "ems": null
    },
    {
      "latitude": 50.898743,
      "longitude": 6.982109,
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1645963092,
      "ems": null
    },
    {
      "latitude": 50.901382,
      "longitude": 6.980209,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1645963098,
      "ems": null
    },
    {
      "latitude": 50.904079,
      "longitude": 6.977997,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 330,
      "squawk": "7042",
      "timestamp": 1645963104,
      "ems": null
    },
    {
      "latitude": 50.90657,
      "longitude": 6.975725,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 330,
      "squawk": "7042",
      "timestamp": 1645963110,
      "ems": null
    },
    {
      "latitude": 50.90934,
      "longitude": 6.973267,
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
      "heading": 330,
      "squawk": "7042",
      "timestamp": 1645963116,
      "ems": null
    },
    {
      "latitude": 50.910645,
      "longitude": 6.972046,
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
      "heading": 328,
      "squawk": "7042",
      "timestamp": 1645963119,
      "ems": null
    },
    {
      "latitude": 50.911949,
      "longitude": 6.970825,
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
      "heading": 328,
      "squawk": "7042",
      "timestamp": 1645963122,
      "ems": null
    },
    {
      "latitude": 50.913254,
      "longitude": 6.969563,
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
      "heading": 327,
      "squawk": "7042",
      "timestamp": 1645963125,
      "ems": null
    },
    {
      "latitude": 50.914509,
      "longitude": 6.968307,
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
      "heading": 326,
      "squawk": "7042",
      "timestamp": 1645963128,
      "ems": null
    },
    {
      "latitude": 50.915726,
      "longitude": 6.966965,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "7042",
      "timestamp": 1645963131,
      "ems": null
    },
    {
      "latitude": 50.918335,
      "longitude": 6.964441,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 328,
      "squawk": "7042",
      "timestamp": 1645963137,
      "ems": null
    },
    {
      "latitude": 50.921173,
      "longitude": 6.961769,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 329,
      "squawk": "7042",
      "timestamp": 1645963143,
      "ems": null
    },
    {
      "latitude": 50.923737,
      "longitude": 6.959245,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 327,
      "squawk": "7042",
      "timestamp": 1645963149,
      "ems": null
    },
    {
      "latitude": 50.926437,
      "longitude": 6.956499,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 328,
      "squawk": "7042",
      "timestamp": 1645963155,
      "ems": null
    },
    {
      "latitude": 50.928955,
      "longitude": 6.954049,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 328,
      "squawk": "7042",
      "timestamp": 1645963161,
      "ems": null
    },
    {
      "latitude": 50.931499,
      "longitude": 6.951599,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 327,
      "squawk": "7042",
      "timestamp": 1645963167,
      "ems": null
    },
    {
      "latitude": 50.933899,
      "longitude": 6.94915,
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
      "heading": 327,
      "squawk": "7042",
      "timestamp": 1645963173,
      "ems": null
    },
    {
      "latitude": 50.936462,
      "longitude": 6.946774,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "7042",
      "timestamp": 1645963179,
      "ems": null
    },
    {
      "latitude": 50.937881,
      "longitude": 6.945735,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645963182,
      "ems": null
    },
    {
      "latitude": 50.939228,
      "longitude": 6.945038,
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
      "heading": 344,
      "squawk": "7042",
      "timestamp": 1645963185,
      "ems": null
    },
    {
      "latitude": 50.940445,
      "longitude": 6.944621,
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
      "heading": 351,
      "squawk": "7042",
      "timestamp": 1645963188,
      "ems": null
    },
    {
      "latitude": 50.941975,
      "longitude": 6.944504,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 1,
      "squawk": "7042",
      "timestamp": 1645963191,
      "ems": null
    },
    {
      "latitude": 50.943325,
      "longitude": 6.944733,
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
      "heading": 10,
      "squawk": "7042",
      "timestamp": 1645963194,
      "ems": null
    },
    {
      "latitude": 50.94458,
      "longitude": 6.945343,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 19,
      "squawk": "7042",
      "timestamp": 1645963197,
      "ems": null
    },
    {
      "latitude": 50.945744,
      "longitude": 6.946259,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 29,
      "squawk": "7042",
      "timestamp": 1645963200,
      "ems": null
    },
    {
      "latitude": 50.946625,
      "longitude": 6.947145,
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
      "heading": 35,
      "squawk": "7042",
      "timestamp": 1645963203,
      "ems": null
    },
    {
      "latitude": 50.947372,
      "longitude": 6.948166,
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
      "heading": 42,
      "squawk": "7042",
      "timestamp": 1645963206,
      "ems": null
    },
    {
      "latitude": 50.948166,
      "longitude": 6.949768,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 53,
      "squawk": "7042",
      "timestamp": 1645963209,
      "ems": null
    },
    {
      "latitude": 50.94873,
      "longitude": 6.951302,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 64,
      "squawk": "7042",
      "timestamp": 1645963212,
      "ems": null
    },
    {
      "latitude": 50.949097,
      "longitude": 6.952972,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 77,
      "squawk": "7042",
      "timestamp": 1645963215,
      "ems": null
    },
    {
      "latitude": 50.949188,
      "longitude": 6.954643,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 90,
      "squawk": "7042",
      "timestamp": 1645963218,
      "ems": null
    },
    {
      "latitude": 50.949005,
      "longitude": 6.956177,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 103,
      "squawk": "7042",
      "timestamp": 1645963221,
      "ems": null
    },
    {
      "latitude": 50.94873,
      "longitude": 6.957612,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 113,
      "squawk": "7042",
      "timestamp": 1645963224,
      "ems": null
    },
    {
      "latitude": 50.948257,
      "longitude": 6.958923,
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
      "heading": 119,
      "squawk": "7042",
      "timestamp": 1645963227,
      "ems": null
    },
    {
      "latitude": 50.947655,
      "longitude": 6.960449,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 123,
      "squawk": "7042",
      "timestamp": 1645963230,
      "ems": null
    },
    {
      "latitude": 50.94714,
      "longitude": 6.961517,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 129,
      "squawk": "7042",
      "timestamp": 1645963233,
      "ems": null
    },
    {
      "latitude": 50.946396,
      "longitude": 6.962808,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 135,
      "squawk": "7042",
      "timestamp": 1645963236,
      "ems": null
    },
    {
      "latitude": 50.945652,
      "longitude": 6.963882,
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
      "heading": 140,
      "squawk": "7042",
      "timestamp": 1645963239,
      "ems": null
    },
    {
      "latitude": 50.944977,
      "longitude": 6.96459,
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
      "heading": 149,
      "squawk": "7042",
      "timestamp": 1645963242,
      "ems": null
    },
    {
      "latitude": 50.943928,
      "longitude": 6.965332,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 158,
      "squawk": "7042",
      "timestamp": 1645963245,
      "ems": null
    },
    {
      "latitude": 50.942951,
      "longitude": 6.96579,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 170,
      "squawk": "7042",
      "timestamp": 1645963248,
      "ems": null
    },
    {
      "latitude": 50.941929,
      "longitude": 6.965942,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 180,
      "squawk": "7042",
      "timestamp": 1645963251,
      "ems": null
    },
    {
      "latitude": 50.940903,
      "longitude": 6.965714,
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
      "heading": 191,
      "squawk": "7042",
      "timestamp": 1645963254,
      "ems": null
    },
    {
      "latitude": 50.93985,
      "longitude": 6.965258,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 196,
      "squawk": "7042",
      "timestamp": 1645963257,
      "ems": null
    },
    {
      "latitude": 50.938843,
      "longitude": 6.964664,
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
      "heading": 200,
      "squawk": "7042",
      "timestamp": 1645963260,
      "ems": null
    },
    {
      "latitude": 50.93779,
      "longitude": 6.963922,
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
      "heading": 203,
      "squawk": "7042",
      "timestamp": 1645963263,
      "ems": null
    },
    {
      "latitude": 50.936737,
      "longitude": 6.963105,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 208,
      "squawk": "7042",
      "timestamp": 1645963266,
      "ems": null
    },
    {
      "latitude": 50.935688,
      "longitude": 6.962051,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 213,
      "squawk": "7042",
      "timestamp": 1645963269,
      "ems": null
    },
    {
      "latitude": 50.934711,
      "longitude": 6.960907,
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
      "heading": 219,
      "squawk": "7042",
      "timestamp": 1645963272,
      "ems": null
    },
    {
      "latitude": 50.933922,
      "longitude": 6.959763,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 225,
      "squawk": "7042",
      "timestamp": 1645963275,
      "ems": null
    },
    {
      "latitude": 50.932983,
      "longitude": 6.958057,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 230,
      "squawk": "7042",
      "timestamp": 1645963278,
      "ems": null
    },
    {
      "latitude": 50.932159,
      "longitude": 6.956424,
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
      "heading": 233,
      "squawk": "7042",
      "timestamp": 1645963281,
      "ems": null
    },
    {
      "latitude": 50.931473,
      "longitude": 6.954643,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 238,
      "squawk": "7042",
      "timestamp": 1645963284,
      "ems": null
    },
    {
      "latitude": 50.930847,
      "longitude": 6.952591,
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
      "heading": 248,
      "squawk": "7042",
      "timestamp": 1645963287,
      "ems": null
    },
    {
      "latitude": 50.930511,
      "longitude": 6.950411,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 260,
      "squawk": "7042",
      "timestamp": 1645963290,
      "ems": null
    },
    {
      "latitude": 50.930428,
      "longitude": 6.948166,
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
      "heading": 270,
      "squawk": "7042",
      "timestamp": 1645963293,
      "ems": null
    },
    {
      "latitude": 50.93066,
      "longitude": 6.945877,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 282,
      "squawk": "7042",
      "timestamp": 1645963296,
      "ems": null
    },
    {
      "latitude": 50.931175,
      "longitude": 6.943817,
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
      "heading": 293,
      "squawk": "7042",
      "timestamp": 1645963299,
      "ems": null
    },
    {
      "latitude": 50.932068,
      "longitude": 6.941504,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 304,
      "squawk": "7042",
      "timestamp": 1645963302,
      "ems": null
    },
    {
      "latitude": 50.932892,
      "longitude": 6.939945,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 314,
      "squawk": "7042",
      "timestamp": 1645963305,
      "ems": null
    },
    {
      "latitude": 50.934128,
      "longitude": 6.938163,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 317,
      "squawk": "7042",
      "timestamp": 1645963308,
      "ems": null
    },
    {
      "latitude": 50.935181,
      "longitude": 6.936678,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 318,
      "squawk": "7042",
      "timestamp": 1645963311,
      "ems": null
    },
    {
      "latitude": 50.936508,
      "longitude": 6.934971,
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
      "heading": 322,
      "squawk": "7042",
      "timestamp": 1645963314,
      "ems": null
    },
    {
      "latitude": 50.937553,
      "longitude": 6.933823,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 327,
      "squawk": "7042",
      "timestamp": 1645963317,
      "ems": null
    },
    {
      "latitude": 50.939072,
      "longitude": 6.932521,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 332,
      "squawk": "7042",
      "timestamp": 1645963320,
      "ems": null
    },
    {
      "latitude": 50.94025,
      "longitude": 6.93161,
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
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1645963323,
      "ems": null
    },
    {
      "latitude": 50.941498,
      "longitude": 6.930665,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1645963326,
      "ems": null
    },
    {
      "latitude": 50.942997,
      "longitude": 6.929626,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645963329,
      "ems": null
    },
    {
      "latitude": 50.944199,
      "longitude": 6.928736,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645963332,
      "ems": null
    },
    {
      "latitude": 50.945709,
      "longitude": 6.927696,
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
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1645963335,
      "ems": null
    },
    {
      "latitude": 50.947083,
      "longitude": 6.926805,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1645963338,
      "ems": null
    },
    {
      "latitude": 50.948364,
      "longitude": 6.925989,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1645963341,
      "ems": null
    },
    {
      "latitude": 50.949829,
      "longitude": 6.925024,
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
      "heading": 339,
      "squawk": "7042",
      "timestamp": 1645963344,
      "ems": null
    },
    {
      "latitude": 50.951019,
      "longitude": 6.924282,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 338,
      "squawk": "7042",
      "timestamp": 1645963347,
      "ems": null
    },
    {
      "latitude": 50.953983,
      "longitude": 6.922073,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 331,
      "squawk": "7042",
      "timestamp": 1645963353,
      "ems": null
    },
    {
      "latitude": 50.956604,
      "longitude": 6.919754,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 331,
      "squawk": "7042",
      "timestamp": 1645963359,
      "ems": null
    },
    {
      "latitude": 50.958893,
      "longitude": 6.917898,
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
      "heading": 332,
      "squawk": "7042",
      "timestamp": 1645963365,
      "ems": null
    },
    {
      "latitude": 50.961456,
      "longitude": 6.915819,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1645963371,
      "ems": null
    },
    {
      "latitude": 50.962601,
      "longitude": 6.914928,
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
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1645963374,
      "ems": null
    },
    {
      "latitude": 50.965111,
      "longitude": 6.913071,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1645963380,
      "ems": null
    },
    {
      "latitude": 50.967716,
      "longitude": 6.911087,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1645963386,
      "ems": null
    },
    {
      "latitude": 50.969997,
      "longitude": 6.909256,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1645963392,
      "ems": null
    },
    {
      "latitude": 50.972561,
      "longitude": 6.907349,
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
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1645963398,
      "ems": null
    },
    {
      "latitude": 50.975166,
      "longitude": 6.905365,
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1645963404,
      "ems": null
    },
    {
      "latitude": 50.977726,
      "longitude": 6.90361,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1645963410,
      "ems": null
    },
    {
      "latitude": 50.98024,
      "longitude": 6.901932,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1645963416,
      "ems": null
    },
    {
      "latitude": 50.981449,
      "longitude": 6.901093,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1645963419,
      "ems": null
    },
    {
      "latitude": 50.982754,
      "longitude": 6.90033,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1645963422,
      "ems": null
    },
    {
      "latitude": 50.984344,
      "longitude": 6.899488,
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1645963425,
      "ems": null
    },
    {
      "latitude": 50.985626,
      "longitude": 6.89882,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1645963428,
      "ems": null
    },
    {
      "latitude": 50.987045,
      "longitude": 6.898078,
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
      "squawk": "7000",
      "timestamp": 1645963431,
      "ems": null
    },
    {
      "latitude": 50.988338,
      "longitude": 6.897507,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1645963434,
      "ems": null
    },
    {
      "latitude": 50.989746,
      "longitude": 6.896965,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1645963437,
      "ems": null
    },
    {
      "latitude": 50.990799,
      "longitude": 6.896519,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1645963440,
      "ems": null
    },
    {
      "latitude": 50.99231,
      "longitude": 6.895925,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1645963443,
      "ems": null
    },
    {
      "latitude": 50.993649,
      "longitude": 6.895447,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1645963446,
      "ems": null
    },
    {
      "latitude": 50.995331,
      "longitude": 6.894886,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1645963449,
      "ems": null
    },
    {
      "latitude": 50.996567,
      "longitude": 6.894441,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1645963452,
      "ems": null
    },
    {
      "latitude": 50.998116,
      "longitude": 6.893997,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1645963455,
      "ems": null
    },
    {
      "latitude": 50.999588,
      "longitude": 6.89355,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1645963458,
      "ems": null
    },
    {
      "latitude": 51.001469,
      "longitude": 6.893082,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1645963462,
      "ems": null
    },
    {
      "latitude": 51.00293,
      "longitude": 6.892659,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1645963465,
      "ems": null
    },
    {
      "latitude": 51.006031,
      "longitude": 6.891708,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1645963471,
      "ems": null
    },
    {
      "latitude": 51.009064,
      "longitude": 6.890655,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1645963477,
      "ems": null
    },
    {
      "latitude": 51.012177,
      "longitude": 6.889467,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1645963483,
      "ems": null
    },
    {
      "latitude": 51.013824,
      "longitude": 6.888725,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1645963486,
      "ems": null
    },
    {
      "latitude": 51.015244,
      "longitude": 6.888057,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1645963489,
      "ems": null
    },
    {
      "latitude": 51.016785,
      "longitude": 6.887283,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1645963492,
      "ems": null
    },
    {
      "latitude": 51.018318,
      "longitude": 6.88652,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1645963495,
      "ems": null
    },
    {
      "latitude": 51.019775,
      "longitude": 6.885533,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1645963498,
      "ems": null
    },
    {
      "latitude": 51.021378,
      "longitude": 6.884419,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1645963501,
      "ems": null
    },
    {
      "latitude": 51.022743,
      "longitude": 6.883392,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1645963504,
      "ems": null
    },
    {
      "latitude": 51.024261,
      "longitude": 6.882267,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1645963507,
      "ems": null
    },
    {
      "latitude": 51.025677,
      "longitude": 6.881104,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1645963510,
      "ems": null
    },
    {
      "latitude": 51.027256,
      "longitude": 6.879883,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1645963513,
      "ems": null
    },
    {
      "latitude": 51.028564,
      "longitude": 6.878852,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1645963516,
      "ems": null
    },
    {
      "latitude": 51.030258,
      "longitude": 6.877516,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1645963519,
      "ems": null
    },
    {
      "latitude": 51.031727,
      "longitude": 6.876373,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1645963522,
      "ems": null
    },
    {
      "latitude": 51.033051,
      "longitude": 6.875288,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1645963525,
      "ems": null
    },
    {
      "latitude": 51.03392,
      "longitude": 6.874547,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1645963528,
      "ems": null
    },
    {
      "latitude": 51.035637,
      "longitude": 6.87294,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1645963531,
      "ems": null
    },
    {
      "latitude": 51.038132,
      "longitude": 6.87076,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1645963537,
      "ems": null
    },
    {
      "latitude": 51.040512,
      "longitude": 6.868534,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1645963543,
      "ems": null
    },
    {
      "latitude": 51.042992,
      "longitude": 6.866302,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1645963549,
      "ems": null
    },
    {
      "latitude": 51.045456,
      "longitude": 6.864228,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1645963555,
      "ems": null
    },
    {
      "latitude": 51.048065,
      "longitude": 6.862106,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1645963561,
      "ems": null
    },
    {
      "latitude": 51.050812,
      "longitude": 6.860071,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1645963567,
      "ems": null
    },
    {
      "latitude": 51.052116,
      "longitude": 6.859131,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1645963570,
      "ems": null
    },
    {
      "latitude": 51.053421,
      "longitude": 6.858215,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1645963573,
      "ems": null
    },
    {
      "latitude": 51.054794,
      "longitude": 6.85725,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1645963576,
      "ems": null
    },
    {
      "latitude": 51.056355,
      "longitude": 6.856232,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1645963579,
      "ems": null
    },
    {
      "latitude": 51.057724,
      "longitude": 6.855246,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1645963582,
      "ems": null
    },
    {
      "latitude": 51.060543,
      "longitude": 6.853333,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1645963588,
      "ems": null
    },
    {
      "latitude": 51.063663,
      "longitude": 6.850967,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1645963594,
      "ems": null
    },
    {
      "latitude": 51.066502,
      "longitude": 6.848679,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1645963600,
      "ems": null
    },
    {
      "latitude": 51.069122,
      "longitude": 6.846487,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1645963606,
      "ems": null
    },
    {
      "latitude": 51.070599,
      "longitude": 6.845322,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1645963609,
      "ems": null
    },
    {
      "latitude": 51.072041,
      "longitude": 6.844025,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1645963612,
      "ems": null
    },
    {
      "latitude": 51.07338,
      "longitude": 6.842924,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1645963615,
      "ems": null
    },
    {
      "latitude": 51.076229,
      "longitude": 6.840591,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1645963621,
      "ems": null
    },
    {
      "latitude": 51.078873,
      "longitude": 6.838396,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1645963627,
      "ems": null
    },
    {
      "latitude": 51.08139,
      "longitude": 6.836391,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1645963633,
      "ems": null
    },
    {
      "latitude": 51.084003,
      "longitude": 6.834412,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1645963639,
      "ems": null
    },
    {
      "latitude": 51.087296,
      "longitude": 6.832011,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1645963645,
      "ems": null
    },
    {
      "latitude": 51.091003,
      "longitude": 6.829191,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1645963653,
      "ems": null
    },
    {
      "latitude": 51.094025,
      "longitude": 6.826815,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1645963659,
      "ems": null
    },
    {
      "latitude": 51.096901,
      "longitude": 6.824875,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1645963665,
      "ems": null
    },
    {
      "latitude": 51.099506,
      "longitude": 6.823044,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1645963671,
      "ems": null
    },
    {
      "latitude": 51.102539,
      "longitude": 6.820951,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1645963677,
      "ems": null
    },
    {
      "latitude": 51.105465,
      "longitude": 6.818771,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1645963683,
      "ems": null
    },
    {
      "latitude": 51.108353,
      "longitude": 6.816571,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1645963689,
      "ems": null
    },
    {
      "latitude": 51.111286,
      "longitude": 6.81427,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1645963695,
      "ems": null
    },
    {
      "latitude": 51.113983,
      "longitude": 6.81221,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1645963701,
      "ems": null
    },
    {
      "latitude": 51.117188,
      "longitude": 6.809668,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1645963707,
      "ems": null
    },
    {
      "latitude": 51.120083,
      "longitude": 6.807327,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1645963713,
      "ems": null
    },
    {
      "latitude": 51.123093,
      "longitude": 6.805065,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1645963719,
      "ems": null
    },
    {
      "latitude": 51.126274,
      "longitude": 6.802826,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1645963725,
      "ems": null
    },
    {
      "latitude": 51.12941,
      "longitude": 6.800611,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1645963731,
      "ems": null
    },
    {
      "latitude": 51.132431,
      "longitude": 6.798607,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1645963737,
      "ems": null
    },
    {
      "latitude": 51.134125,
      "longitude": 6.797642,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1645963740,
      "ems": null
    },
    {
      "latitude": 51.135498,
      "longitude": 6.7969,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1645963743,
      "ems": null
    },
    {
      "latitude": 51.137054,
      "longitude": 6.796083,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1645963746,
      "ems": null
    },
    {
      "latitude": 51.138794,
      "longitude": 6.795118,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1645963749,
      "ems": null
    },
    {
      "latitude": 51.140285,
      "longitude": 6.794357,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1645963752,
      "ems": null
    },
    {
      "latitude": 51.141861,
      "longitude": 6.793559,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1645963755,
      "ems": null
    },
    {
      "latitude": 51.14336,
      "longitude": 6.792755,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1645963758,
      "ems": null
    },
    {
      "latitude": 51.146244,
      "longitude": 6.790466,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1645963764,
      "ems": null
    },
    {
      "latitude": 51.147491,
      "longitude": 6.788734,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1645963767,
      "ems": null
    },
    {
      "latitude": 51.148342,
      "longitude": 6.78688,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1645963770,
      "ems": null
    },
    {
      "latitude": 51.149086,
      "longitude": 6.784286,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1645963773,
      "ems": null
    },
    {
      "latitude": 51.14946,
      "longitude": 6.782499,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1645963776,
      "ems": null
    },
    {
      "latitude": 51.150017,
      "longitude": 6.779861,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1645963779,
      "ems": null
    },
    {
      "latitude": 51.150902,
      "longitude": 6.777344,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1645963782,
      "ems": null
    },
    {
      "latitude": 51.151833,
      "longitude": 6.775665,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1645963785,
      "ems": null
    },
    {
      "latitude": 51.153133,
      "longitude": 6.774216,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1645963788,
      "ems": null
    },
    {
      "latitude": 51.154633,
      "longitude": 6.773146,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1645963791,
      "ems": null
    },
    {
      "latitude": 51.155834,
      "longitude": 6.772385,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1645963794,
      "ems": null
    },
    {
      "latitude": 51.157516,
      "longitude": 6.771586,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1645963797,
      "ems": null
    },
    {
      "latitude": 51.159279,
      "longitude": 6.770706,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1645963800,
      "ems": null
    },
    {
      "latitude": 51.16077,
      "longitude": 6.769867,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1645963803,
      "ems": null
    },
    {
      "latitude": 51.162186,
      "longitude": 6.769063,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1645963806,
      "ems": null
    },
    {
      "latitude": 51.163517,
      "longitude": 6.768265,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1645963809,
      "ems": null
    },
    {
      "latitude": 51.164585,
      "longitude": 6.767578,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1645963811,
      "ems": null
    },
    {
      "latitude": 51.166355,
      "longitude": 6.766434,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1645963815,
      "ems": null
    },
    {
      "latitude": 51.167953,
      "longitude": 6.765351,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1645963819,
      "ems": null
    },
    {
      "latitude": 51.170593,
      "longitude": 6.763535,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1645963825,
      "ems": null
    },
    {
      "latitude": 51.171337,
      "longitude": 6.763,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1645963827,
      "ems": null
    },
    {
      "latitude": 51.172394,
      "longitude": 6.762233,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1645963830,
      "ems": null
    },
    {
      "latitude": 51.176193,
      "longitude": 6.759784,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1645963836,
      "ems": null
    },
    {
      "latitude": 51.178879,
      "longitude": 6.758041,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1645963842,
      "ems": null
    },
    {
      "latitude": 51.181778,
      "longitude": 6.756072,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1645963848,
      "ems": null
    },
    {
      "latitude": 51.184113,
      "longitude": 6.754365,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1645963854,
      "ems": null
    },
    {
      "latitude": 51.187454,
      "longitude": 6.751841,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1645963860,
      "ems": null
    },
    {
      "latitude": 51.190376,
      "longitude": 6.749725,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1645963866,
      "ems": null
    },
    {
      "latitude": 51.193176,
      "longitude": 6.747832,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1645963872,
      "ems": null
    },
    {
      "latitude": 51.196014,
      "longitude": 6.746051,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1645963878,
      "ems": null
    },
    {
      "latitude": 51.19899,
      "longitude": 6.744269,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1645963884,
      "ems": null
    },
    {
      "latitude": 51.200386,
      "longitude": 6.743393,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1645963887,
      "ems": null
    },
    {
      "latitude": 51.201828,
      "longitude": 6.74263,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1645963890,
      "ems": null
    },
    {
      "latitude": 51.203133,
      "longitude": 6.741943,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1645963893,
      "ems": null
    },
    {
      "latitude": 51.204712,
      "longitude": 6.741151,
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1645963896,
      "ems": null
    },
    {
      "latitude": 51.205994,
      "longitude": 6.740706,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1645963899,
      "ems": null
    },
    {
      "latitude": 51.207741,
      "longitude": 6.740112,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1645963903,
      "ems": null
    },
    {
      "latitude": 51.208858,
      "longitude": 6.739883,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1645963905,
      "ems": null
    },
    {
      "latitude": 51.210388,
      "longitude": 6.739667,
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1645963908,
      "ems": null
    },
    {
      "latitude": 51.211349,
      "longitude": 6.739741,
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1645963912,
      "ems": null
    },
    {
      "latitude": 51.213135,
      "longitude": 6.740187,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1645963915,
      "ems": null
    },
    {
      "latitude": 51.214508,
      "longitude": 6.741077,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1645963918,
      "ems": null
    },
    {
      "latitude": 51.215698,
      "longitude": 6.742043,
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1645963921,
      "ems": null
    },
    {
      "latitude": 51.216843,
      "longitude": 6.742859,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1645963923,
      "ems": null
    },
    {
      "latitude": 51.21817,
      "longitude": 6.743824,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1645963927,
      "ems": null
    },
    {
      "latitude": 51.219379,
      "longitude": 6.744614,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1645963930,
      "ems": null
    },
    {
      "latitude": 51.220589,
      "longitude": 6.745453,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1645963932,
      "ems": null
    },
    {
      "latitude": 51.221706,
      "longitude": 6.74614,
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1645963935,
      "ems": null
    },
    {
      "latitude": 51.222931,
      "longitude": 6.747016,
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1645963938,
      "ems": null
    },
    {
      "latitude": 51.224361,
      "longitude": 6.748047,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1645963942,
      "ems": null
    },
    {
      "latitude": 51.227005,
      "longitude": 6.749763,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1645963948,
      "ems": null
    },
    {
      "latitude": 51.228378,
      "longitude": 6.750579,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1645963951,
      "ems": null
    },
    {
      "latitude": 51.231388,
      "longitude": 6.752243,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1645963957,
      "ems": null
    },
    {
      "latitude": 51.234421,
      "longitude": 6.753845,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1645963964,
      "ems": null
    },
    {
      "latitude": 51.235931,
      "longitude": 6.754662,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1645963966,
      "ems": null
    },
    {
      "latitude": 51.237259,
      "longitude": 6.755404,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1645963970,
      "ems": null
    },
    {
      "latitude": 51.238632,
      "longitude": 6.756072,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1645963973,
      "ems": null
    },
    {
      "latitude": 51.240189,
      "longitude": 6.756897,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1645963975,
      "ems": null
    },
    {
      "latitude": 51.24321,
      "longitude": 6.758299,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1645963982,
      "ems": null
    },
    {
      "latitude": 51.246101,
      "longitude": 6.759567,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1645963988,
      "ems": null
    },
    {
      "latitude": 51.247543,
      "longitude": 6.760178,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1645963991,
      "ems": null
    },
    {
      "latitude": 51.248886,
      "longitude": 6.760674,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1645963993,
      "ems": null
    },
    {
      "latitude": 51.250477,
      "longitude": 6.761246,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1645963997,
      "ems": null
    },
    {
      "latitude": 51.251816,
      "longitude": 6.76164,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1645964000,
      "ems": null
    },
    {
      "latitude": 51.253098,
      "longitude": 6.762011,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1645964003,
      "ems": null
    },
    {
      "latitude": 51.254837,
      "longitude": 6.762382,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1645964006,
      "ems": null
    },
    {
      "latitude": 51.256348,
      "longitude": 6.762753,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1645964009,
      "ems": null
    },
    {
      "latitude": 51.257736,
      "longitude": 6.763153,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1645964012,
      "ems": null
    },
    {
      "latitude": 51.259182,
      "longitude": 6.763535,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1645964015,
      "ems": null
    },
    {
      "latitude": 51.262115,
      "longitude": 6.76445,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1645964021,
      "ems": null
    },
    {
      "latitude": 51.264908,
      "longitude": 6.765722,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1645964027,
      "ems": null
    },
    {
      "latitude": 51.265961,
      "longitude": 6.766613,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1645964030,
      "ems": null
    },
    {
      "latitude": 51.266968,
      "longitude": 6.767949,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1645964033,
      "ems": null
    },
    {
      "latitude": 51.267838,
      "longitude": 6.769731,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1645964036,
      "ems": null
    },
    {
      "latitude": 51.26849,
      "longitude": 6.771393,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1645964039,
      "ems": null
    },
    {
      "latitude": 51.268936,
      "longitude": 6.772774,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1645964042,
      "ems": null
    },
    {
      "latitude": 51.269394,
      "longitude": 6.774556,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1645964045,
      "ems": null
    },
    {
      "latitude": 51.269897,
      "longitude": 6.776634,
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
        "fpm": 1984,
        "ms": 10.1
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1645964048,
      "ems": null
    },
    {
      "latitude": 51.270309,
      "longitude": 6.778267,
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
        "fpm": 1472,
        "ms": 7.5
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1645964051,
      "ems": null
    },
    {
      "latitude": 51.270676,
      "longitude": 6.77953,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1645964054,
      "ems": null
    },
    {
      "latitude": 51.271179,
      "longitude": 6.781237,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1645964057,
      "ems": null
    },
    {
      "latitude": 51.271545,
      "longitude": 6.782424,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1645964060,
      "ems": null
    },
    {
      "latitude": 51.272141,
      "longitude": 6.784206,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1645964063,
      "ems": null
    },
    {
      "latitude": 51.272507,
      "longitude": 6.785394,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1645964065,
      "ems": null
    },
    {
      "latitude": 51.273102,
      "longitude": 6.78725,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1645964069,
      "ems": null
    },
    {
      "latitude": 51.274246,
      "longitude": 6.790516,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1645964075,
      "ems": null
    },
    {
      "latitude": 51.274776,
      "longitude": 6.792145,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1645964078,
      "ems": null
    },
    {
      "latitude": 51.274963,
      "longitude": 6.792679,
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1645964080,
      "ems": null
    },
    {
      "latitude": 51.276264,
      "longitude": 6.796265,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1645964087,
      "ems": null
    },
    {
      "latitude": 51.276871,
      "longitude": 6.797867,
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1645964090,
      "ems": null
    },
    {
      "latitude": 51.2785,
      "longitude": 6.802444,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1645964099,
      "ems": null
    },
    {
      "latitude": 51.280083,
      "longitude": 6.807327,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1645964107,
      "ems": null
    },
    {
      "latitude": 51.281433,
      "longitude": 6.810855,
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1645964115,
      "ems": null
    },
    {
      "latitude": 51.283539,
      "longitude": 6.815383,
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
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1645964123,
      "ems": null
    },
    {
      "latitude": 51.284546,
      "longitude": 6.817388,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1645964127,
      "ems": null
    },
    {
      "latitude": 51.285484,
      "longitude": 6.819077,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1645964131,
      "ems": null
    },
    {
      "latitude": 51.286602,
      "longitude": 6.820908,
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1645964135,
      "ems": null
    },
    {
      "latitude": 51.287704,
      "longitude": 6.822807,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1645964139,
      "ems": null
    },
    {
      "latitude": 51.288929,
      "longitude": 6.824875,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1645964143,
      "ems": null
    },
    {
      "latitude": 51.289581,
      "longitude": 6.826073,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1645964146,
      "ems": null
    },
    {
      "latitude": 51.290405,
      "longitude": 6.827632,
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1645964149,
      "ems": null
    },
    {
      "latitude": 51.29155,
      "longitude": 6.829859,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1645964154,
      "ems": null
    },
    {
      "latitude": 51.293427,
      "longitude": 6.833273,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1645964161,
      "ems": null
    },
    {
      "latitude": 51.294888,
      "longitude": 6.835938,
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1645964167,
      "ems": null
    },
    {
      "latitude": 51.29591,
      "longitude": 6.837769,
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
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1645964173,
      "ems": null
    },
    {
      "latitude": 51.297684,
      "longitude": 6.839806,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1645964176,
      "ems": null
    },
    {
      "latitude": 51.298645,
      "longitude": 6.840325,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1645964179,
      "ems": null
    },
    {
      "latitude": 51.30024,
      "longitude": 6.840363,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1645964182,
      "ems": null
    },
    {
      "latitude": 51.302708,
      "longitude": 6.839523,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1645964186,
      "ems": null
    },
    {
      "latitude": 51.304276,
      "longitude": 6.838915,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1645964190,
      "ems": null
    },
    {
      "latitude": 51.306198,
      "longitude": 6.838173,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1645964194,
      "ems": null
    },
    {
      "latitude": 51.308388,
      "longitude": 6.837234,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1645964198,
      "ems": null
    },
    {
      "latitude": 51.310436,
      "longitude": 6.836319,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1645964202,
      "ems": null
    },
    {
      "latitude": 51.312515,
      "longitude": 6.835426,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1645964206,
      "ems": null
    },
    {
      "latitude": 51.314301,
      "longitude": 6.834488,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1645964210,
      "ems": null
    },
    {
      "latitude": 51.316223,
      "longitude": 6.833422,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1645964214,
      "ems": null
    },
    {
      "latitude": 51.318024,
      "longitude": 6.832428,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1645964218,
      "ems": null
    },
    {
      "latitude": 51.319977,
      "longitude": 6.831207,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1645964222,
      "ems": null
    },
    {
      "latitude": 51.321701,
      "longitude": 6.830215,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1645964226,
      "ems": null
    },
    {
      "latitude": 51.325657,
      "longitude": 6.827774,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1645964234,
      "ems": null
    },
    {
      "latitude": 51.329243,
      "longitude": 6.825333,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1645964242,
      "ems": null
    },
    {
      "latitude": 51.330917,
      "longitude": 6.82392,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1645964246,
      "ems": null
    },
    {
      "latitude": 51.332886,
      "longitude": 6.82199,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1645964250,
      "ems": null
    },
    {
      "latitude": 51.334442,
      "longitude": 6.820283,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1645964254,
      "ems": null
    },
    {
      "latitude": 51.336086,
      "longitude": 6.81839,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1645964258,
      "ems": null
    },
    {
      "latitude": 51.337761,
      "longitude": 6.816406,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1645964262,
      "ems": null
    },
    {
      "latitude": 51.339298,
      "longitude": 6.814499,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1645964266,
      "ems": null
    },
    {
      "latitude": 51.341034,
      "longitude": 6.81234,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1645964270,
      "ems": null
    },
    {
      "latitude": 51.342636,
      "longitude": 6.810336,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1645964274,
      "ems": null
    },
    {
      "latitude": 51.344048,
      "longitude": 6.808548,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1645964278,
      "ems": null
    },
    {
      "latitude": 51.347443,
      "longitude": 6.804249,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1645964286,
      "ems": null
    },
    {
      "latitude": 51.350739,
      "longitude": 6.80024,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "squawk": "7000",
      "timestamp": 1645964294,
      "ems": null
    },
    {
      "latitude": 51.353806,
      "longitude": 6.796529,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1645964302,
      "ems": null
    },
    {
      "latitude": 51.357193,
      "longitude": 6.792372,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1645964310,
      "ems": null
    },
    {
      "latitude": 51.360664,
      "longitude": 6.788788,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1645964318,
      "ems": null
    },
    {
      "latitude": 51.362,
      "longitude": 6.787547,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1645964321,
      "ems": null
    },
    {
      "latitude": 51.363235,
      "longitude": 6.786507,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1645964324,
      "ems": null
    },
    {
      "latitude": 51.363644,
      "longitude": 6.786118,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1645964325,
      "ems": null
    },
    {
      "latitude": 51.365692,
      "longitude": 6.784439,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1645964329,
      "ems": null
    },
    {
      "latitude": 51.366577,
      "longitude": 6.783687,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1645964333,
      "ems": null
    },
    {
      "latitude": 51.369137,
      "longitude": 6.781769,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1645964337,
      "ems": null
    },
    {
      "latitude": 51.370998,
      "longitude": 6.780472,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1645964341,
      "ems": null
    },
    {
      "latitude": 51.372803,
      "longitude": 6.779158,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1645964345,
      "ems": null
    },
    {
      "latitude": 51.374222,
      "longitude": 6.778119,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1645964348,
      "ems": null
    },
    {
      "latitude": 51.375595,
      "longitude": 6.77708,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1645964351,
      "ems": null
    },
    {
      "latitude": 51.378342,
      "longitude": 6.774927,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1645964357,
      "ems": null
    },
    {
      "latitude": 51.380768,
      "longitude": 6.772923,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1645964363,
      "ems": null
    },
    {
      "latitude": 51.383972,
      "longitude": 6.770473,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1645964369,
      "ems": null
    },
    {
      "latitude": 51.386627,
      "longitude": 6.768394,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1645964375,
      "ems": null
    },
    {
      "latitude": 51.388641,
      "longitude": 6.766739,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1645964379,
      "ems": null
    },
    {
      "latitude": 51.3918,
      "longitude": 6.763941,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1645964387,
      "ems": null
    },
    {
      "latitude": 51.395439,
      "longitude": 6.760559,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1645964395,
      "ems": null
    },
    {
      "latitude": 51.397163,
      "longitude": 6.758881,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1645964399,
      "ems": null
    },
    {
      "latitude": 51.400467,
      "longitude": 6.755524,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1645964407,
      "ems": null
    },
    {
      "latitude": 51.402283,
      "longitude": 6.753616,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1645964411,
      "ems": null
    },
    {
      "latitude": 51.403473,
      "longitude": 6.752286,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1645964414,
      "ems": null
    },
    {
      "latitude": 51.404472,
      "longitude": 6.751175,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1645964417,
      "ems": null
    },
    {
      "latitude": 51.405853,
      "longitude": 6.749614,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1645964420,
      "ems": null
    },
    {
      "latitude": 51.406952,
      "longitude": 6.748352,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1645964423,
      "ems": null
    },
    {
      "latitude": 51.408325,
      "longitude": 6.746571,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1645964426,
      "ems": null
    },
    {
      "latitude": 51.408966,
      "longitude": 6.745828,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1645964428,
      "ems": null
    },
    {
      "latitude": 51.409882,
      "longitude": 6.74464,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1645964432,
      "ems": null
    },
    {
      "latitude": 51.411732,
      "longitude": 6.742096,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1645964435,
      "ems": null
    },
    {
      "latitude": 51.412766,
      "longitude": 6.740558,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1645964438,
      "ems": null
    },
    {
      "latitude": 51.413864,
      "longitude": 6.738925,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1645964441,
      "ems": null
    },
    {
      "latitude": 51.414993,
      "longitude": 6.737213,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1645964444,
      "ems": null
    },
    {
      "latitude": 51.416016,
      "longitude": 6.735611,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1645964447,
      "ems": null
    },
    {
      "latitude": 51.417023,
      "longitude": 6.733877,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1645964450,
      "ems": null
    },
    {
      "latitude": 51.417831,
      "longitude": 6.732178,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1645964453,
      "ems": null
    },
    {
      "latitude": 51.418671,
      "longitude": 6.730347,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1645964456,
      "ems": null
    },
    {
      "latitude": 51.419357,
      "longitude": 6.728829,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1645964459,
      "ems": null
    },
    {
      "latitude": 51.420254,
      "longitude": 6.726761,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1645964462,
      "ems": null
    },
    {
      "latitude": 51.420902,
      "longitude": 6.725159,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1645964465,
      "ems": null
    },
    {
      "latitude": 51.421833,
      "longitude": 6.72287,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1645964468,
      "ems": null
    },
    {
      "latitude": 51.42244,
      "longitude": 6.721191,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1645964471,
      "ems": null
    },
    {
      "latitude": 51.423157,
      "longitude": 6.719105,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1645964474,
      "ems": null
    },
    {
      "latitude": 51.423935,
      "longitude": 6.716655,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1645964477,
      "ems": null
    },
    {
      "latitude": 51.424301,
      "longitude": 6.715012,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1645964480,
      "ems": null
    },
    {
      "latitude": 51.424713,
      "longitude": 6.712572,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1645964483,
      "ems": null
    },
    {
      "latitude": 51.424862,
      "longitude": 6.711121,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1645964485,
      "ems": null
    },
    {
      "latitude": 51.424953,
      "longitude": 6.709137,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1645964488,
      "ems": null
    },
    {
      "latitude": 51.424988,
      "longitude": 6.707821,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1645964491,
      "ems": null
    },
    {
      "latitude": 51.425034,
      "longitude": 6.705668,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1645964495,
      "ems": null
    },
    {
      "latitude": 51.424953,
      "longitude": 6.702118,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1645964498,
      "ems": null
    },
    {
      "latitude": 51.424896,
      "longitude": 6.700844,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1645964501,
      "ems": null
    },
    {
      "latitude": 51.424713,
      "longitude": 6.697948,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1645964504,
      "ems": null
    },
    {
      "latitude": 51.424622,
      "longitude": 6.69728,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1645964507,
      "ems": null
    },
    {
      "latitude": 51.424164,
      "longitude": 6.693115,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1645964511,
      "ems": null
    },
    {
      "latitude": 51.423843,
      "longitude": 6.690748,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1645964515,
      "ems": null
    },
    {
      "latitude": 51.423294,
      "longitude": 6.688373,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1645964519,
      "ems": null
    },
    {
      "latitude": 51.422516,
      "longitude": 6.685774,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1645964523,
      "ems": null
    },
    {
      "latitude": 51.421829,
      "longitude": 6.683547,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1645964527,
      "ems": null
    },
    {
      "latitude": 51.421005,
      "longitude": 6.680727,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1645964531,
      "ems": null
    },
    {
      "latitude": 51.420158,
      "longitude": 6.678085,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1645964535,
      "ems": null
    },
    {
      "latitude": 51.419506,
      "longitude": 6.67572,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1645964539,
      "ems": null
    },
    {
      "latitude": 51.418949,
      "longitude": 6.673737,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1645964543,
      "ems": null
    },
    {
      "latitude": 51.417786,
      "longitude": 6.669006,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 250,
      "squawk": "7742",
      "timestamp": 1645964549,
      "ems": null
    },
    {
      "latitude": 51.41732,
      "longitude": 6.666489,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1645964553,
      "ems": null
    },
    {
      "latitude": 51.417023,
      "longitude": 6.664841,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1645964555,
      "ems": null
    },
    {
      "latitude": 51.416656,
      "longitude": 6.662688,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 254,
      "squawk": "7742",
      "timestamp": 1645964559,
      "ems": null
    },
    {
      "latitude": 51.41629,
      "longitude": 6.660907,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 250,
      "squawk": "7742",
      "timestamp": 1645964562,
      "ems": null
    },
    {
      "latitude": 51.415878,
      "longitude": 6.659274,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1645964564,
      "ems": null
    },
    {
      "latitude": 51.415039,
      "longitude": 6.655731,
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
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1645964571,
      "ems": null
    },
    {
      "latitude": 51.414139,
      "longitude": 6.652296,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1645964576,
      "ems": null
    },
    {
      "latitude": 51.413635,
      "longitude": 6.650514,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1645964580,
      "ems": null
    },
    {
      "latitude": 51.413177,
      "longitude": 6.648712,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1645964583,
      "ems": null
    },
    {
      "latitude": 51.412857,
      "longitude": 6.647545,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1645964584,
      "ems": null
    },
    {
      "latitude": 51.412262,
      "longitude": 6.645244,
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
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1645964588,
      "ems": null
    },
    {
      "latitude": 51.411118,
      "longitude": 6.640642,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1645964596,
      "ems": null
    },
    {
      "latitude": 51.409927,
      "longitude": 6.635817,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1645964604,
      "ems": null
    },
    {
      "latitude": 51.408474,
      "longitude": 6.631165,
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
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1645964612,
      "ems": null
    },
    {
      "latitude": 51.407043,
      "longitude": 6.626537,
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
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1645964620,
      "ems": null
    },
    {
      "latitude": 51.405991,
      "longitude": 6.623123,
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
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1645964626,
      "ems": null
    },
    {
      "latitude": 51.404938,
      "longitude": 6.619337,
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
      "heading": 245,
      "squawk": "7742",
      "timestamp": 1645964633,
      "ems": null
    },
    {
      "latitude": 51.403931,
      "longitude": 6.615403,
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
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1645964638,
      "ems": null
    },
    {
      "latitude": 51.403061,
      "longitude": 6.611988,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1645964644,
      "ems": null
    },
    {
      "latitude": 51.402237,
      "longitude": 6.608963,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1645964650,
      "ems": null
    },
    {
      "latitude": 51.401211,
      "longitude": 6.605453,
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
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1645964657,
      "ems": null
    },
    {
      "latitude": 51.399811,
      "longitude": 6.601076,
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
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1645964663,
      "ems": null
    },
    {
      "latitude": 51.398941,
      "longitude": 6.598032,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1645964668,
      "ems": null
    },
    {
      "latitude": 51.397797,
      "longitude": 6.593653,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1645964676,
      "ems": null
    },
    {
      "latitude": 51.396603,
      "longitude": 6.589584,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1645964683,
      "ems": null
    },
    {
      "latitude": 51.395187,
      "longitude": 6.585116,
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
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1645964690,
      "ems": null
    },
    {
      "latitude": 51.394226,
      "longitude": 6.581479,
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
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1645964696,
      "ems": null
    },
    {
      "latitude": 51.393356,
      "longitude": 6.577841,
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
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1645964701,
      "ems": null
    },
    {
      "latitude": 51.392414,
      "longitude": 6.574249,
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
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1645964708,
      "ems": null
    },
    {
      "latitude": 51.391205,
      "longitude": 6.569676,
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
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1645964714,
      "ems": null
    },
    {
      "latitude": 51.39032,
      "longitude": 6.566391,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1645964720,
      "ems": null
    },
    {
      "latitude": 51.389282,
      "longitude": 6.56255,
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
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1645964725,
      "ems": null
    },
    {
      "latitude": 51.388046,
      "longitude": 6.55817,
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
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1645964732,
      "ems": null
    },
    {
      "latitude": 51.387222,
      "longitude": 6.555201,
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
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1645964736,
      "ems": null
    },
    {
      "latitude": 51.385757,
      "longitude": 6.550078,
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
      "heading": 245,
      "squawk": "7742",
      "timestamp": 1645964745,
      "ems": null
    },
    {
      "latitude": 51.384312,
      "longitude": 6.545105,
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
      "heading": 245,
      "squawk": "7742",
      "timestamp": 1645964753,
      "ems": null
    },
    {
      "latitude": 51.383148,
      "longitude": 6.540651,
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
      "heading": 249,
      "squawk": "7742",
      "timestamp": 1645964760,
      "ems": null
    },
    {
      "latitude": 51.382732,
      "longitude": 6.538696,
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
      "heading": 251,
      "squawk": "7742",
      "timestamp": 1645964762,
      "ems": null
    },
    {
      "latitude": 51.382324,
      "longitude": 6.536568,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 252,
      "squawk": "7742",
      "timestamp": 1645964766,
      "ems": null
    },
    {
      "latitude": 51.381615,
      "longitude": 6.533356,
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
      "heading": 249,
      "squawk": "7742",
      "timestamp": 1645964772,
      "ems": null
    },
    {
      "latitude": 51.380589,
      "longitude": 6.529541,
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
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1645964778,
      "ems": null
    },
    {
      "latitude": 51.379486,
      "longitude": 6.525508,
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
      "heading": 245,
      "squawk": "7742",
      "timestamp": 1645964783,
      "ems": null
    },
    {
      "latitude": 51.378479,
      "longitude": 6.521871,
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
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1645964789,
      "ems": null
    },
    {
      "latitude": 51.377983,
      "longitude": 6.520233,
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
      "heading": 245,
      "squawk": "7742",
      "timestamp": 1645964792,
      "ems": null
    },
    {
      "latitude": 51.377426,
      "longitude": 6.518307,
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
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1645964794,
      "ems": null
    },
    {
      "latitude": 51.377007,
      "longitude": 6.516724,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 245,
      "squawk": "7742",
      "timestamp": 1645964797,
      "ems": null
    },
    {
      "latitude": 51.375778,
      "longitude": 6.512517,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1645964804,
      "ems": null
    },
    {
      "latitude": 51.375183,
      "longitude": 6.510661,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1645964807,
      "ems": null
    },
    {
      "latitude": 51.374039,
      "longitude": 6.506876,
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
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1645964813,
      "ems": null
    },
    {
      "latitude": 51.373123,
      "longitude": 6.50309,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 249,
      "squawk": "7742",
      "timestamp": 1645964818,
      "ems": null
    },
    {
      "latitude": 51.372208,
      "longitude": 6.499156,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 249,
      "squawk": "7742",
      "timestamp": 1645964824,
      "ems": null
    },
    {
      "latitude": 51.371559,
      "longitude": 6.496353,
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
      "heading": 250,
      "squawk": "7742",
      "timestamp": 1645964828,
      "ems": null
    },
    {
      "latitude": 51.370861,
      "longitude": 6.493225,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1645964833,
      "ems": null
    },
    {
      "latitude": 51.370113,
      "longitude": 6.490326,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1645964836,
      "ems": null
    },
    {
      "latitude": 51.368858,
      "longitude": 6.485596,
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
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1645964843,
      "ems": null
    },
    {
      "latitude": 51.367649,
      "longitude": 6.4814,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 245,
      "squawk": "7742",
      "timestamp": 1645964849,
      "ems": null
    },
    {
      "latitude": 51.366486,
      "longitude": 6.477203,
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
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1645964855,
      "ems": null
    },
    {
      "latitude": 51.365459,
      "longitude": 6.473236,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1645964861,
      "ems": null
    },
    {
      "latitude": 51.364296,
      "longitude": 6.469193,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1645964867,
      "ems": null
    },
    {
      "latitude": 51.363647,
      "longitude": 6.467236,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1645964870,
      "ems": null
    },
    {
      "latitude": 51.363052,
      "longitude": 6.465677,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1645964872,
      "ems": null
    },
    {
      "latitude": 51.361736,
      "longitude": 6.461639,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1645964879,
      "ems": null
    },
    {
      "latitude": 51.36058,
      "longitude": 6.457882,
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
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1645964885,
      "ems": null
    },
    {
      "latitude": 51.359482,
      "longitude": 6.453874,
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
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1645964891,
      "ems": null
    },
    {
      "latitude": 51.358475,
      "longitude": 6.449865,
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
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1645964897,
      "ems": null
    },
    {
      "latitude": 51.358013,
      "longitude": 6.448059,
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
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1645964899,
      "ems": null
    },
    {
      "latitude": 51.357498,
      "longitude": 6.445923,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1645964903,
      "ems": null
    },
    {
      "latitude": 51.357033,
      "longitude": 6.443863,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1645964906,
      "ems": null
    },
    {
      "latitude": 51.355965,
      "longitude": 6.439972,
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
      "heading": 245,
      "squawk": "7742",
      "timestamp": 1645964912,
      "ems": null
    },
    {
      "latitude": 51.354847,
      "longitude": 6.435776,
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
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1645964918,
      "ems": null
    },
    {
      "latitude": 51.353851,
      "longitude": 6.431827,
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
      "heading": 249,
      "squawk": "7742",
      "timestamp": 1645964924,
      "ems": null
    },
    {
      "latitude": 51.352936,
      "longitude": 6.428041,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1645964930,
      "ems": null
    },
    {
      "latitude": 51.351791,
      "longitude": 6.423884,
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
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1645964936,
      "ems": null
    },
    {
      "latitude": 51.350372,
      "longitude": 6.419133,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1645964943,
      "ems": null
    },
    {
      "latitude": 51.349182,
      "longitude": 6.414902,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 245,
      "squawk": "7742",
      "timestamp": 1645964949,
      "ems": null
    },
    {
      "latitude": 51.348469,
      "longitude": 6.412201,
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
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1645964955,
      "ems": null
    },
    {
      "latitude": 51.346561,
      "longitude": 6.405182,
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
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1645964964,
      "ems": null
    },
    {
      "latitude": 51.345348,
      "longitude": 6.400909,
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
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1645964970,
      "ems": null
    },
    {
      "latitude": 51.344326,
      "longitude": 6.397095,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1645964976,
      "ems": null
    },
    {
      "latitude": 51.3433,
      "longitude": 6.392899,
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
      "heading": 257,
      "squawk": "7742",
      "timestamp": 1645964982,
      "ems": null
    },
    {
      "latitude": 51.343208,
      "longitude": 6.390381,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 268,
      "squawk": "7742",
      "timestamp": 1645964985,
      "ems": null
    },
    {
      "latitude": 51.343369,
      "longitude": 6.38803,
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
      "heading": 281,
      "squawk": "7742",
      "timestamp": 1645964988,
      "ems": null
    },
    {
      "latitude": 51.343815,
      "longitude": 6.385803,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 290,
      "squawk": "7742",
      "timestamp": 1645964991,
      "ems": null
    },
    {
      "latitude": 51.344467,
      "longitude": 6.38365,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 297,
      "squawk": "7742",
      "timestamp": 1645964994,
      "ems": null
    },
    {
      "latitude": 51.345161,
      "longitude": 6.382065,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 308,
      "squawk": "7742",
      "timestamp": 1645964997,
      "ems": null
    },
    {
      "latitude": 51.346142,
      "longitude": 6.380081,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 307,
      "squawk": "7742",
      "timestamp": 1645965000,
      "ems": null
    },
    {
      "latitude": 51.346985,
      "longitude": 6.377786,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 296,
      "squawk": "7742",
      "timestamp": 1645965003,
      "ems": null
    },
    {
      "latitude": 51.347443,
      "longitude": 6.375411,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 282,
      "squawk": "7742",
      "timestamp": 1645965006,
      "ems": null
    },
    {
      "latitude": 51.347492,
      "longitude": 6.373444,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 269,
      "squawk": "7742",
      "timestamp": 1645965009,
      "ems": null
    },
    {
      "latitude": 51.347168,
      "longitude": 6.371105,
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
      "heading": 250,
      "squawk": "7742",
      "timestamp": 1645965012,
      "ems": null
    },
    {
      "latitude": 51.346512,
      "longitude": 6.369019,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1645965015,
      "ems": null
    },
    {
      "latitude": 51.346046,
      "longitude": 6.367645,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1645965018,
      "ems": null
    },
    {
      "latitude": 51.345383,
      "longitude": 6.365761,
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
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1645965021,
      "ems": null
    },
    {
      "latitude": 51.344879,
      "longitude": 6.364202,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1645965024,
      "ems": null
    },
    {
      "latitude": 51.34428,
      "longitude": 6.361465,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1645965027,
      "ems": null
    },
    {
      "latitude": 51.343906,
      "longitude": 6.359482,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 252,
      "squawk": "7742",
      "timestamp": 1645965030,
      "ems": null
    },
    {
      "latitude": 51.34346,
      "longitude": 6.357521,
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
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1645965033,
      "ems": null
    },
    {
      "latitude": 51.34288,
      "longitude": 6.355515,
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
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1645965036,
      "ems": null
    },
    {
      "latitude": 51.342369,
      "longitude": 6.353989,
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
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1645965039,
      "ems": null
    },
    {
      "latitude": 51.341579,
      "longitude": 6.352005,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 236,
      "squawk": "7742",
      "timestamp": 1645965042,
      "ems": null
    },
    {
      "latitude": 51.340897,
      "longitude": 6.350617,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 227,
      "squawk": "7742",
      "timestamp": 1645965045,
      "ems": null
    },
    {
      "latitude": 51.340027,
      "longitude": 6.349355,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1645965048,
      "ems": null
    },
    {
      "latitude": 51.339111,
      "longitude": 6.348539,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1645965051,
      "ems": null
    },
    {
      "latitude": 51.337921,
      "longitude": 6.348019,
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
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1645965054,
      "ems": null
    },
    {
      "latitude": 51.336689,
      "longitude": 6.347961,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1645965057,
      "ems": null
    },
    {
      "latitude": 51.335575,
      "longitude": 6.348114,
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
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1645965060,
      "ems": null
    },
    {
      "latitude": 51.334671,
      "longitude": 6.348167,
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
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1645965063,
      "ems": null
    },
    {
      "latitude": 51.333572,
      "longitude": 6.348343,
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
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1645965066,
      "ems": null
    },
    {
      "latitude": 51.332474,
      "longitude": 6.348464,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1645965069,
      "ems": null
    },
    {
      "latitude": 51.331467,
      "longitude": 6.348613,
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
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1645965072,
      "ems": null
    },
    {
      "latitude": 51.330498,
      "longitude": 6.348572,
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
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1645965075,
      "ems": null
    },
    {
      "latitude": 51.329475,
      "longitude": 6.348419,
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
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1645965078,
      "ems": null
    },
    {
      "latitude": 51.328312,
      "longitude": 6.348114,
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
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1645965081,
      "ems": null
    },
    {
      "latitude": 51.326202,
      "longitude": 6.347722,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1645965087,
      "ems": null
    },
    {
      "latitude": 51.3251,
      "longitude": 6.347427,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 188,
      "squawk": "7742",
      "timestamp": 1645965090,
      "ems": null
    },
    {
      "latitude": 51.324051,
      "longitude": 6.347203,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1645965093,
      "ems": null
    },
    {
      "latitude": 51.323044,
      "longitude": 6.347054,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1645965096,
      "ems": null
    },
    {
      "latitude": 51.322075,
      "longitude": 6.346817,
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
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1645965099,
      "ems": null
    },
    {
      "latitude": 51.321003,
      "longitude": 6.346664,
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
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1645965102,
      "ems": null
    },
    {
      "latitude": 51.319931,
      "longitude": 6.34646,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1645965105,
      "ems": null
    },
    {
      "latitude": 51.31778,
      "longitude": 6.346089,
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
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1645965111,
      "ems": null
    },
    {
      "latitude": 51.31572,
      "longitude": 6.345792,
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
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1645965117,
      "ems": null
    },
    {
      "latitude": 51.313694,
      "longitude": 6.345444,
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
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1645965123,
      "ems": null
    },
    {
      "latitude": 51.311508,
      "longitude": 6.34505,
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
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1645965129,
      "ems": null
    },
    {
      "latitude": 51.308167,
      "longitude": 6.34453,
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
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1645965138,
      "ems": null
    },
    {
      "latitude": 51.305874,
      "longitude": 6.343994,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1645965144,
      "ems": null
    },
    {
      "latitude": 51.303593,
      "longitude": 6.343842,
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
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1645965150,
      "ems": null
    },
    {
      "latitude": 51.302536,
      "longitude": 6.344085,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 170,
      "squawk": "7742",
      "timestamp": 1645965153,
      "ems": null
    },
    {
      "latitude": 51.3013,
      "longitude": 6.344679,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1645965156,
      "ems": null
    },
    {
      "latitude": 51.30024,
      "longitude": 6.345291,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1645965159,
      "ems": null
    },
    {
      "latitude": 51.299122,
      "longitude": 6.346054,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1645965162,
      "ems": null
    },
    {
      "latitude": 51.297913,
      "longitude": 6.346683,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1645965166,
      "ems": null
    },
    {
      "latitude": 51.297169,
      "longitude": 6.347046,
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
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1645965168,
      "ems": null
    },
    {
      "latitude": 51.295353,
      "longitude": 6.347656,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 170,
      "squawk": "7742",
      "timestamp": 1645965172,
      "ems": null
    },
    {
      "latitude": 51.293724,
      "longitude": 6.347885,
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
      "heading": 174,
      "squawk": "7742",
      "timestamp": 1645965176,
      "ems": null
    },
    {
      "latitude": 51.291092,
      "longitude": 6.34839,
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
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1645965182,
      "ems": null
    },
    {
      "latitude": 51.289951,
      "longitude": 6.348648,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1645965185,
      "ems": null
    },
    {
      "latitude": 51.288528,
      "longitude": 6.34891,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1645965188,
      "ems": null
    },
    {
      "latitude": 51.287159,
      "longitude": 6.349182,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1645965191,
      "ems": null
    },
    {
      "latitude": 51.286274,
      "longitude": 6.349258,
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
      "heading": 174,
      "squawk": "7742",
      "timestamp": 1645965194,
      "ems": null
    },
    {
      "latitude": 51.284637,
      "longitude": 6.349578,
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
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1645965198,
      "ems": null
    },
    {
      "latitude": 51.281845,
      "longitude": 6.350246,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 170,
      "squawk": "7742",
      "timestamp": 1645965204,
      "ems": null
    },
    {
      "latitude": 51.279785,
      "longitude": 6.350766,
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
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1645965210,
      "ems": null
    },
    {
      "latitude": 51.276855,
      "longitude": 6.351434,
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
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1645965216,
      "ems": null
    },
    {
      "latitude": 51.274868,
      "longitude": 6.351776,
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
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1645965220,
      "ems": null
    },
    {
      "latitude": 51.273006,
      "longitude": 6.351776,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1645965224,
      "ems": null
    },
    {
      "latitude": 51.271774,
      "longitude": 6.351731,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1645965227,
      "ems": null
    },
    {
      "latitude": 51.270538,
      "longitude": 6.351624,
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
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1645965230,
      "ems": null
    },
    {
      "latitude": 51.269192,
      "longitude": 6.351547,
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
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1645965233,
      "ems": null
    },
    {
      "latitude": 51.267929,
      "longitude": 6.351583,
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
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1645965236,
      "ems": null
    },
    {
      "latitude": 51.266724,
      "longitude": 6.351624,
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
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1645965239,
      "ems": null
    },
    {
      "latitude": 51.265652,
      "longitude": 6.351624,
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
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1645965242,
      "ems": null
    },
    {
      "latitude": 51.264301,
      "longitude": 6.351624,
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
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1645965245,
      "ems": null
    },
    {
      "latitude": 51.263351,
      "longitude": 6.351656,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1645965248,
      "ems": null
    },
    {
      "latitude": 51.260902,
      "longitude": 6.351471,
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
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1645965254,
      "ems": null
    },
    {
      "latitude": 51.258575,
      "longitude": 6.351242,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1645965260,
      "ems": null
    },
    {
      "latitude": 51.256481,
      "longitude": 6.351395,
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
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1645965266,
      "ems": null
    },
    {
      "latitude": 51.254059,
      "longitude": 6.351656,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1645965272,
      "ems": null
    },
    {
      "latitude": 51.251873,
      "longitude": 6.351929,
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
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1645965278,
      "ems": null
    },
    {
      "latitude": 51.250809,
      "longitude": 6.352028,
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
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1645965281,
      "ems": null
    },
    {
      "latitude": 51.249664,
      "longitude": 6.352176,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1645965284,
      "ems": null
    },
    {
      "latitude": 51.247421,
      "longitude": 6.352102,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1645965290,
      "ems": null
    },
    {
      "latitude": 51.245262,
      "longitude": 6.352234,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1645965296,
      "ems": null
    },
    {
      "latitude": 51.243118,
      "longitude": 6.352622,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1645965302,
      "ems": null
    },
    {
      "latitude": 51.241024,
      "longitude": 6.352844,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1645965308,
      "ems": null
    },
    {
      "latitude": 51.238953,
      "longitude": 6.352919,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1645965315,
      "ems": null
    },
    {
      "latitude": 51.236664,
      "longitude": 6.353067,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1645965320,
      "ems": null
    },
    {
      "latitude": 51.234554,
      "longitude": 6.353302,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1645965326,
      "ems": null
    },
    {
      "latitude": 51.232273,
      "longitude": 6.353531,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1645965333,
      "ems": null
    },
    {
      "latitude": 51.230038,
      "longitude": 6.35376,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1645965339,
      "ems": null
    },
    {
      "latitude": 51.227875,
      "longitude": 6.353735,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1645965344,
      "ems": null
    },
    {
      "latitude": 51.226776,
      "longitude": 6.353512,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1645965347,
      "ems": null
    },
    {
      "latitude": 51.225384,
      "longitude": 6.353073,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1645965351,
      "ems": null
    },
    {
      "latitude": 51.22422,
      "longitude": 6.352615,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1645965354,
      "ems": null
    },
    {
      "latitude": 51.223148,
      "longitude": 6.352234,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1645965357,
      "ems": null
    },
    {
      "latitude": 51.221878,
      "longitude": 6.351879,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1645965359,
      "ems": null
    },
    {
      "latitude": 51.220688,
      "longitude": 6.351508,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1645965362,
      "ems": null
    },
    {
      "latitude": 51.219406,
      "longitude": 6.350988,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1645965366,
      "ems": null
    },
    {
      "latitude": 51.218353,
      "longitude": 6.350555,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1645965368,
      "ems": null
    },
    {
      "latitude": 51.217144,
      "longitude": 6.350098,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1645965371,
      "ems": null
    },
    {
      "latitude": 51.215881,
      "longitude": 6.349578,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1645965375,
      "ems": null
    },
    {
      "latitude": 51.215096,
      "longitude": 6.349182,
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
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1645965377,
      "ems": null
    },
    {
      "latitude": 51.213364,
      "longitude": 6.348316,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1645965381,
      "ems": null
    },
    {
      "latitude": 51.212311,
      "longitude": 6.347722,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1645965383,
      "ems": null
    },
    {
      "latitude": 51.209793,
      "longitude": 6.346535,
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1645965390,
      "ems": null
    },
    {
      "latitude": 51.208717,
      "longitude": 6.345978,
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1645965393,
      "ems": null
    },
    {
      "latitude": 51.206158,
      "longitude": 6.344833,
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
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1645965398,
      "ems": null
    },
    {
      "latitude": 51.203476,
      "longitude": 6.343639,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 195,
      "squawk": "7742",
      "timestamp": 1645965405,
      "ems": null
    },
    {
      "latitude": 51.200729,
      "longitude": 6.342378,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1645965411,
      "ems": null
    },
    {
      "latitude": 51.198151,
      "longitude": 6.341248,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 195,
      "squawk": "7742",
      "timestamp": 1645965417,
      "ems": null
    },
    {
      "latitude": 51.196011,
      "longitude": 6.340332,
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
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1645965423,
      "ems": null
    },
    {
      "latitude": 51.194939,
      "longitude": 6.339951,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1645965426,
      "ems": null
    },
    {
      "latitude": 51.192844,
      "longitude": 6.339569,
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
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1645965429,
      "ems": null
    },
    {
      "latitude": 51.191666,
      "longitude": 6.339631,
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
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1645965432,
      "ems": null
    },
    {
      "latitude": 51.19043,
      "longitude": 6.340076,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1645965435,
      "ems": null
    },
    {
      "latitude": 51.189445,
      "longitude": 6.340561,
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
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1645965438,
      "ems": null
    },
    {
      "latitude": 51.188702,
      "longitude": 6.341019,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 155,
      "squawk": "7742",
      "timestamp": 1645965440,
      "ems": null
    },
    {
      "latitude": 51.187119,
      "longitude": 6.342392,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1645965444,
      "ems": null
    },
    {
      "latitude": 51.186092,
      "longitude": 6.34346,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1645965447,
      "ems": null
    },
    {
      "latitude": 51.18512,
      "longitude": 6.344382,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1645965449,
      "ems": null
    },
    {
      "latitude": 51.18425,
      "longitude": 6.345273,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1645965453,
      "ems": null
    },
    {
      "latitude": 51.1833,
      "longitude": 6.346283,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1645965456,
      "ems": null
    },
    {
      "latitude": 51.182327,
      "longitude": 6.347277,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1645965459,
      "ems": null
    },
    {
      "latitude": 51.181393,
      "longitude": 6.348343,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 145,
      "squawk": "7742",
      "timestamp": 1645965462,
      "ems": null
    },
    {
      "latitude": 51.180508,
      "longitude": 6.349335,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 145,
      "squawk": "7742",
      "timestamp": 1645965465,
      "ems": null
    },
    {
      "latitude": 51.180042,
      "longitude": 6.349792,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1645965467,
      "ems": null
    },
    {
      "latitude": 51.178692,
      "longitude": 6.351166,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1645965471,
      "ems": null
    },
    {
      "latitude": 51.177155,
      "longitude": 6.352692,
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
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1645965476,
      "ems": null
    },
    {
      "latitude": 51.174873,
      "longitude": 6.354828,
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
      "heading": 151,
      "squawk": "7742",
      "timestamp": 1645965483,
      "ems": null
    },
    {
      "latitude": 51.173805,
      "longitude": 6.355667,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 151,
      "squawk": "7742",
      "timestamp": 1645965486,
      "ems": null
    },
    {
      "latitude": 51.171944,
      "longitude": 6.357422,
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
      "heading": 150,
      "squawk": "7742",
      "timestamp": 1645965492,
      "ems": null
    },
    {
      "latitude": 51.170013,
      "longitude": 6.359154,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1645965498,
      "ems": null
    },
    {
      "latitude": 51.168125,
      "longitude": 6.361084,
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
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1645965504,
      "ems": null
    },
    {
      "latitude": 51.167099,
      "longitude": 6.362228,
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
      "heading": 144,
      "squawk": "7742",
      "timestamp": 1645965508,
      "ems": null
    },
    {
      "latitude": 51.165527,
      "longitude": 6.364202,
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
      "heading": 140,
      "squawk": "7742",
      "timestamp": 1645965513,
      "ems": null
    },
    {
      "latitude": 51.164539,
      "longitude": 6.365509,
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
      "heading": 140,
      "squawk": "7742",
      "timestamp": 1645965517,
      "ems": null
    },
    {
      "latitude": 51.163925,
      "longitude": 6.366354,
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
      "heading": 137,
      "squawk": "7742",
      "timestamp": 1645965521,
      "ems": null
    },
    {
      "latitude": 51.162781,
      "longitude": 6.367913,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1645965523,
      "ems": null
    },
    {
      "latitude": 51.161888,
      "longitude": 6.369095,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 140,
      "squawk": "7742",
      "timestamp": 1645965526,
      "ems": null
    },
    {
      "latitude": 51.16008,
      "longitude": 6.37118,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 145,
      "squawk": "7742",
      "timestamp": 1645965533,
      "ems": null
    },
    {
      "latitude": 51.158813,
      "longitude": 6.372528,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1645965538,
      "ems": null
    },
    {
      "latitude": 51.157562,
      "longitude": 6.373778,
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
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1645965541,
      "ems": null
    },
    {
      "latitude": 51.156464,
      "longitude": 6.374817,
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
      "heading": 151,
      "squawk": "7742",
      "timestamp": 1645965545,
      "ems": null
    },
    {
      "latitude": 51.15551,
      "longitude": 6.37558,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1645965547,
      "ems": null
    },
    {
      "latitude": 51.155228,
      "longitude": 6.375856,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 152,
      "squawk": "7742",
      "timestamp": 1645965550,
      "ems": null
    },
    {
      "latitude": 51.153992,
      "longitude": 6.376895,
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
      "heading": 152,
      "squawk": "7742",
      "timestamp": 1645965553,
      "ems": null
    },
    {
      "latitude": 51.152664,
      "longitude": 6.377934,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1645965557,
      "ems": null
    },
    {
      "latitude": 51.152252,
      "longitude": 6.37825,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1645965559,
      "ems": null
    },
    {
      "latitude": 51.150806,
      "longitude": 6.379242,
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
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1645965562,
      "ems": null
    },
    {
      "latitude": 51.14978,
      "longitude": 6.379939,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1645965566,
      "ems": null
    },
    {
      "latitude": 51.149273,
      "longitude": 6.380234,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1645965568,
      "ems": null
    },
    {
      "latitude": 51.147923,
      "longitude": 6.381149,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1645965572,
      "ems": null
    },
    {
      "latitude": 51.147083,
      "longitude": 6.381607,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 159,
      "squawk": "7742",
      "timestamp": 1645965575,
      "ems": null
    },
    {
      "latitude": 51.146294,
      "longitude": 6.382141,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1645965577,
      "ems": null
    },
    {
      "latitude": 51.145203,
      "longitude": 6.38276,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 159,
      "squawk": "7742",
      "timestamp": 1645965581,
      "ems": null
    },
    {
      "latitude": 51.144562,
      "longitude": 6.383131,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1645965584,
      "ems": null
    },
    {
      "latitude": 51.143219,
      "longitude": 6.38382,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1645965587,
      "ems": null
    },
    {
      "latitude": 51.141079,
      "longitude": 6.384964,
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
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1645965592,
      "ems": null
    },
    {
      "latitude": 51.13884,
      "longitude": 6.386174,
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
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1645965599,
      "ems": null
    },
    {
      "latitude": 51.136841,
      "longitude": 6.387329,
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
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1645965605,
      "ems": null
    },
    {
      "latitude": 51.134903,
      "longitude": 6.388402,
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
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1645965610,
      "ems": null
    },
    {
      "latitude": 51.13266,
      "longitude": 6.389812,
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
      "heading": 159,
      "squawk": "7742",
      "timestamp": 1645965617,
      "ems": null
    },
    {
      "latitude": 51.130463,
      "longitude": 6.390991,
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
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1645965623,
      "ems": null
    },
    {
      "latitude": 51.128414,
      "longitude": 6.392136,
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
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1645965630,
      "ems": null
    },
    {
      "latitude": 51.126041,
      "longitude": 6.393509,
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
      "heading": 159,
      "squawk": "7742",
      "timestamp": 1645965636,
      "ems": null
    },
    {
      "latitude": 51.124054,
      "longitude": 6.394785,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1645965643,
      "ems": null
    },
    {
      "latitude": 51.123016,
      "longitude": 6.395493,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1645965645,
      "ems": null
    },
    {
      "latitude": 51.120941,
      "longitude": 6.396864,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1645965651,
      "ems": null
    },
    {
      "latitude": 51.120083,
      "longitude": 6.397476,
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
      "heading": 155,
      "squawk": "7742",
      "timestamp": 1645965654,
      "ems": null
    },
    {
      "latitude": 51.119064,
      "longitude": 6.3982,
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
      "heading": 154,
      "squawk": "7742",
      "timestamp": 1645965657,
      "ems": null
    },
    {
      "latitude": 51.118103,
      "longitude": 6.398942,
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
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1645965660,
      "ems": null
    },
    {
      "latitude": 51.116127,
      "longitude": 6.400452,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1645965666,
      "ems": null
    },
    {
      "latitude": 51.115128,
      "longitude": 6.400947,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1645965670,
      "ems": null
    },
    {
      "latitude": 51.114033,
      "longitude": 6.401443,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1645965672,
      "ems": null
    },
    {
      "latitude": 51.111969,
      "longitude": 6.402876,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1645965679,
      "ems": null
    },
    {
      "latitude": 51.111237,
      "longitude": 6.403916,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 137,
      "squawk": "7742",
      "timestamp": 1645965681,
      "ems": null
    },
    {
      "latitude": 51.110458,
      "longitude": 6.4054,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 125,
      "squawk": "7742",
      "timestamp": 1645965685,
      "ems": null
    },
    {
      "latitude": 51.109795,
      "longitude": 6.407089,
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
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1645965688,
      "ems": null
    },
    {
      "latitude": 51.109222,
      "longitude": 6.408592,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1645965690,
      "ems": null
    },
    {
      "latitude": 51.108627,
      "longitude": 6.410151,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1645965693,
      "ems": null
    },
    {
      "latitude": 51.107979,
      "longitude": 6.411667,
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
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1645965697,
      "ems": null
    },
    {
      "latitude": 51.107391,
      "longitude": 6.413269,
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
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1645965700,
      "ems": null
    },
    {
      "latitude": 51.106815,
      "longitude": 6.414795,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1645965703,
      "ems": null
    },
    {
      "latitude": 51.106293,
      "longitude": 6.416238,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1645965706,
      "ems": null
    },
    {
      "latitude": 51.105743,
      "longitude": 6.417618,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1645965708,
      "ems": null
    },
    {
      "latitude": 51.105103,
      "longitude": 6.419282,
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
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1645965712,
      "ems": null
    },
    {
      "latitude": 51.103745,
      "longitude": 6.422043,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 128,
      "squawk": "7742",
      "timestamp": 1645965718,
      "ems": null
    },
    {
      "latitude": 51.103092,
      "longitude": 6.423187,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 130,
      "squawk": "7742",
      "timestamp": 1645965720,
      "ems": null
    },
    {
      "latitude": 51.102493,
      "longitude": 6.42433,
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
      "heading": 129,
      "squawk": "7742",
      "timestamp": 1645965723,
      "ems": null
    },
    {
      "latitude": 51.101601,
      "longitude": 6.42601,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 129,
      "squawk": "7742",
      "timestamp": 1645965726,
      "ems": null
    },
    {
      "latitude": 51.101276,
      "longitude": 6.426697,
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
      "heading": 129,
      "squawk": "7742",
      "timestamp": 1645965728,
      "ems": null
    },
    {
      "latitude": 51.100388,
      "longitude": 6.428561,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 125,
      "squawk": "7742",
      "timestamp": 1645965732,
      "ems": null
    },
    {
      "latitude": 51.098648,
      "longitude": 6.432643,
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
      "heading": 126,
      "squawk": "7742",
      "timestamp": 1645965740,
      "ems": null
    },
    {
      "latitude": 51.096817,
      "longitude": 6.43643,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 127,
      "squawk": "7742",
      "timestamp": 1645965748,
      "ems": null
    },
    {
      "latitude": 51.094898,
      "longitude": 6.440048,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 132,
      "squawk": "7742",
      "timestamp": 1645965756,
      "ems": null
    },
    {
      "latitude": 51.093887,
      "longitude": 6.441774,
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
      "heading": 134,
      "squawk": "7742",
      "timestamp": 1645965760,
      "ems": null
    },
    {
      "latitude": 51.092758,
      "longitude": 6.443634,
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
      "heading": 135,
      "squawk": "7742",
      "timestamp": 1645965764,
      "ems": null
    },
    {
      "latitude": 51.091553,
      "longitude": 6.445263,
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
      "heading": 139,
      "squawk": "7742",
      "timestamp": 1645965768,
      "ems": null
    },
    {
      "latitude": 51.090382,
      "longitude": 6.446838,
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
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1645965772,
      "ems": null
    },
    {
      "latitude": 51.089264,
      "longitude": 6.448158,
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
      "heading": 143,
      "squawk": "7742",
      "timestamp": 1645965776,
      "ems": null
    },
    {
      "latitude": 51.087936,
      "longitude": 6.449494,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 151,
      "squawk": "7742",
      "timestamp": 1645965780,
      "ems": null
    },
    {
      "latitude": 51.086937,
      "longitude": 6.450195,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 155,
      "squawk": "7742",
      "timestamp": 1645965784,
      "ems": null
    },
    {
      "latitude": 51.085217,
      "longitude": 6.45134,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 159,
      "squawk": "7742",
      "timestamp": 1645965788,
      "ems": null
    },
    {
      "latitude": 51.083912,
      "longitude": 6.452179,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1645965792,
      "ems": null
    },
    {
      "latitude": 51.082489,
      "longitude": 6.45328,
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
      "heading": 154,
      "squawk": "7742",
      "timestamp": 1645965796,
      "ems": null
    },
    {
      "latitude": 51.08139,
      "longitude": 6.4538,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1645965799,
      "ems": null
    },
    {
      "latitude": 51.080421,
      "longitude": 6.453934,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1645965801,
      "ems": null
    },
    {
      "latitude": 51.079163,
      "longitude": 6.453857,
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
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1645965805,
      "ems": null
    },
    {
      "latitude": 51.077908,
      "longitude": 6.453552,
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
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1645965808,
      "ems": null
    },
    {
      "latitude": 51.077023,
      "longitude": 6.453247,
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1645965811,
      "ems": null
    },
    {
      "latitude": 51.075531,
      "longitude": 6.452389,
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
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1645965814,
      "ems": null
    },
    {
      "latitude": 51.075207,
      "longitude": 6.452179,
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1645965816,
      "ems": null
    },
    {
      "latitude": 51.07338,
      "longitude": 6.450608,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645965820,
      "ems": null
    },
    {
      "latitude": 51.072281,
      "longitude": 6.449568,
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1645965823,
      "ems": null
    },
    {
      "latitude": 51.071251,
      "longitude": 6.448517,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645965825,
      "ems": null
    },
    {
      "latitude": 51.070084,
      "longitude": 6.447416,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645965828,
      "ems": null
    },
    {
      "latitude": 51.069031,
      "longitude": 6.446302,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645965832,
      "ems": null
    },
    {
      "latitude": 51.067886,
      "longitude": 6.445263,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645965835,
      "ems": null
    },
    {
      "latitude": 51.06678,
      "longitude": 6.444016,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1645965837,
      "ems": null
    },
    {
      "latitude": 51.065781,
      "longitude": 6.442813,
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
      "heading": 219,
      "squawk": "7742",
      "timestamp": 1645965841,
      "ems": null
    },
    {
      "latitude": 51.06506,
      "longitude": 6.441879,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1645965843,
      "ems": null
    },
    {
      "latitude": 51.063709,
      "longitude": 6.440201,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 217,
      "squawk": "7742",
      "timestamp": 1645965847,
      "ems": null
    },
    {
      "latitude": 51.062637,
      "longitude": 6.438828,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1645965850,
      "ems": null
    },
    {
      "latitude": 51.061752,
      "longitude": 6.437691,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 219,
      "squawk": "7742",
      "timestamp": 1645965852,
      "ems": null
    },
    {
      "latitude": 51.059658,
      "longitude": 6.435242,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1645965859,
      "ems": null
    },
    {
      "latitude": 51.058586,
      "longitude": 6.434097,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1645965862,
      "ems": null
    },
    {
      "latitude": 51.056538,
      "longitude": 6.431808,
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1645965867,
      "ems": null
    },
    {
      "latitude": 51.055481,
      "longitude": 6.430788,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645965871,
      "ems": null
    },
    {
      "latitude": 51.05452,
      "longitude": 6.429823,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645965873,
      "ems": null
    },
    {
      "latitude": 51.053421,
      "longitude": 6.428757,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645965877,
      "ems": null
    },
    {
      "latitude": 51.052368,
      "longitude": 6.427744,
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1645965880,
      "ems": null
    },
    {
      "latitude": 51.051498,
      "longitude": 6.426779,
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1645965883,
      "ems": null
    },
    {
      "latitude": 51.049416,
      "longitude": 6.424484,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1645965889,
      "ems": null
    },
    {
      "latitude": 51.047417,
      "longitude": 6.422195,
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
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1645965895,
      "ems": null
    },
    {
      "latitude": 51.045364,
      "longitude": 6.419876,
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1645965901,
      "ems": null
    },
    {
      "latitude": 51.043304,
      "longitude": 6.417649,
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1645965907,
      "ems": null
    },
    {
      "latitude": 51.041271,
      "longitude": 6.415482,
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1645965913,
      "ems": null
    },
    {
      "latitude": 51.039127,
      "longitude": 6.413269,
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1645965919,
      "ems": null
    },
    {
      "latitude": 51.036942,
      "longitude": 6.410968,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645965925,
      "ems": null
    },
    {
      "latitude": 51.035843,
      "longitude": 6.410003,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1645965928,
      "ems": null
    },
    {
      "latitude": 51.033783,
      "longitude": 6.407999,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645965934,
      "ems": null
    },
    {
      "latitude": 51.031677,
      "longitude": 6.40592,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645965940,
      "ems": null
    },
    {
      "latitude": 51.029678,
      "longitude": 6.404114,
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1645965946,
      "ems": null
    },
    {
      "latitude": 51.027584,
      "longitude": 6.40213,
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1645965952,
      "ems": null
    },
    {
      "latitude": 51.025536,
      "longitude": 6.400375,
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1645965958,
      "ems": null
    },
    {
      "latitude": 51.023487,
      "longitude": 6.398621,
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1645965964,
      "ems": null
    },
    {
      "latitude": 51.021469,
      "longitude": 6.396567,
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1645965970,
      "ems": null
    },
    {
      "latitude": 51.019547,
      "longitude": 6.394563,
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1645965976,
      "ems": null
    },
    {
      "latitude": 51.01762,
      "longitude": 6.392517,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1645965982,
      "ems": null
    },
    {
      "latitude": 51.016708,
      "longitude": 6.391593,
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
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1645965985,
      "ems": null
    },
    {
      "latitude": 51.015518,
      "longitude": 6.390109,
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1645965988,
      "ems": null
    },
    {
      "latitude": 51.014648,
      "longitude": 6.38907,
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1645965991,
      "ems": null
    },
    {
      "latitude": 51.012733,
      "longitude": 6.387024,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645965997,
      "ems": null
    },
    {
      "latitude": 51.010574,
      "longitude": 6.384912,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645966003,
      "ems": null
    },
    {
      "latitude": 51.008404,
      "longitude": 6.382599,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1645966009,
      "ems": null
    },
    {
      "latitude": 51.006592,
      "longitude": 6.380533,
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
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1645966015,
      "ems": null
    },
    {
      "latitude": 51.004402,
      "longitude": 6.378174,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1645966021,
      "ems": null
    },
    {
      "latitude": 51.002289,
      "longitude": 6.375782,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 217,
      "squawk": "7742",
      "timestamp": 1645966027,
      "ems": null
    },
    {
      "latitude": 51.001282,
      "longitude": 6.374435,
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1645966030,
      "ems": null
    },
    {
      "latitude": 50.999187,
      "longitude": 6.371841,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1645966036,
      "ems": null
    },
    {
      "latitude": 50.998215,
      "longitude": 6.370585,
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
      "heading": 220,
      "squawk": "7742",
      "timestamp": 1645966039,
      "ems": null
    },
    {
      "latitude": 50.996254,
      "longitude": 6.368103,
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
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1645966045,
      "ems": null
    },
    {
      "latitude": 50.994251,
      "longitude": 6.365891,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1645966051,
      "ems": null
    },
    {
      "latitude": 50.992355,
      "longitude": 6.363831,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1645966057,
      "ems": null
    },
    {
      "latitude": 50.990341,
      "longitude": 6.361529,
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
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1645966063,
      "ems": null
    },
    {
      "latitude": 50.989365,
      "longitude": 6.360397,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1645966066,
      "ems": null
    },
    {
      "latitude": 50.987457,
      "longitude": 6.358115,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1645966072,
      "ems": null
    },
    {
      "latitude": 50.986588,
      "longitude": 6.357001,
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
      "heading": 219,
      "squawk": "7742",
      "timestamp": 1645966075,
      "ems": null
    },
    {
      "latitude": 50.984711,
      "longitude": 6.354752,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1645966081,
      "ems": null
    },
    {
      "latitude": 50.983547,
      "longitude": 6.353607,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1645966084,
      "ems": null
    },
    {
      "latitude": 50.982754,
      "longitude": 6.352921,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1645966086,
      "ems": null
    },
    {
      "latitude": 50.981735,
      "longitude": 6.352028,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1645966089,
      "ems": null
    },
    {
      "latitude": 50.981003,
      "longitude": 6.351359,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1645966092,
      "ems": null
    },
    {
      "latitude": 50.979584,
      "longitude": 6.350172,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1645966095,
      "ems": null
    },
    {
      "latitude": 50.97876,
      "longitude": 6.349355,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1645966098,
      "ems": null
    },
    {
      "latitude": 50.977539,
      "longitude": 6.34819,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645966101,
      "ems": null
    },
    {
      "latitude": 50.976471,
      "longitude": 6.347203,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1645966104,
      "ems": null
    },
    {
      "latitude": 50.97551,
      "longitude": 6.346312,
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1645966107,
      "ems": null
    },
    {
      "latitude": 50.973118,
      "longitude": 6.344299,
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1645966114,
      "ems": null
    },
    {
      "latitude": 50.971115,
      "longitude": 6.34285,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1645966120,
      "ems": null
    },
    {
      "latitude": 50.969067,
      "longitude": 6.341248,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1645966126,
      "ems": null
    },
    {
      "latitude": 50.966785,
      "longitude": 6.339493,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1645966132,
      "ems": null
    },
    {
      "latitude": 50.96595,
      "longitude": 6.338882,
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1645966135,
      "ems": null
    },
    {
      "latitude": 50.964798,
      "longitude": 6.338072,
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1645966138,
      "ems": null
    },
    {
      "latitude": 50.96241,
      "longitude": 6.336212,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1645966144,
      "ems": null
    },
    {
      "latitude": 50.960361,
      "longitude": 6.334686,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1645966150,
      "ems": null
    },
    {
      "latitude": 50.958206,
      "longitude": 6.333025,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1645966156,
      "ems": null
    },
    {
      "latitude": 50.955894,
      "longitude": 6.331329,
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
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1645966162,
      "ems": null
    },
    {
      "latitude": 50.953381,
      "longitude": 6.329422,
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1645966168,
      "ems": null
    },
    {
      "latitude": 50.952255,
      "longitude": 6.328348,
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1645966171,
      "ems": null
    },
    {
      "latitude": 50.951237,
      "longitude": 6.327362,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1645966174,
      "ems": null
    },
    {
      "latitude": 50.949966,
      "longitude": 6.326121,
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1645966177,
      "ems": null
    },
    {
      "latitude": 50.948914,
      "longitude": 6.325007,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1645966180,
      "ems": null
    },
    {
      "latitude": 50.947887,
      "longitude": 6.323776,
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
      "heading": 217,
      "squawk": "7742",
      "timestamp": 1645966183,
      "ems": null
    },
    {
      "latitude": 50.947189,
      "longitude": 6.322861,
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1645966186,
      "ems": null
    },
    {
      "latitude": 50.945976,
      "longitude": 6.321335,
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
      "heading": 219,
      "squawk": "7742",
      "timestamp": 1645966189,
      "ems": null
    },
    {
      "latitude": 50.944977,
      "longitude": 6.320108,
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
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1645966192,
      "ems": null
    },
    {
      "latitude": 50.943928,
      "longitude": 6.31897,
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
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1645966195,
      "ems": null
    },
    {
      "latitude": 50.942734,
      "longitude": 6.31751,
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
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1645966198,
      "ems": null
    },
    {
      "latitude": 50.941772,
      "longitude": 6.316396,
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1645966201,
      "ems": null
    },
    {
      "latitude": 50.94072,
      "longitude": 6.315135,
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1645966204,
      "ems": null
    },
    {
      "latitude": 50.939739,
      "longitude": 6.313858,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1645966207,
      "ems": null
    },
    {
      "latitude": 50.938705,
      "longitude": 6.312462,
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
      "heading": 220,
      "squawk": "7742",
      "timestamp": 1645966210,
      "ems": null
    },
    {
      "latitude": 50.936783,
      "longitude": 6.309864,
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
      "heading": 221,
      "squawk": "7742",
      "timestamp": 1645966216,
      "ems": null
    },
    {
      "latitude": 50.934814,
      "longitude": 6.307191,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1645966222,
      "ems": null
    },
    {
      "latitude": 50.932709,
      "longitude": 6.304703,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1645966228,
      "ems": null
    },
    {
      "latitude": 50.93066,
      "longitude": 6.302338,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1645966234,
      "ems": null
    },
    {
      "latitude": 50.929592,
      "longitude": 6.30127,
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1645966237,
      "ems": null
    },
    {
      "latitude": 50.928543,
      "longitude": 6.300139,
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1645966240,
      "ems": null
    },
    {
      "latitude": 50.92749,
      "longitude": 6.2991,
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1645966243,
      "ems": null
    },
    {
      "latitude": 50.926426,
      "longitude": 6.297989,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645966246,
      "ems": null
    },
    {
      "latitude": 50.925449,
      "longitude": 6.296997,
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1645966249,
      "ems": null
    },
    {
      "latitude": 50.924377,
      "longitude": 6.295929,
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1645966252,
      "ems": null
    },
    {
      "latitude": 50.922226,
      "longitude": 6.293681,
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1645966258,
      "ems": null
    },
    {
      "latitude": 50.920166,
      "longitude": 6.291306,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1645966264,
      "ems": null
    },
    {
      "latitude": 50.918152,
      "longitude": 6.28893,
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1645966270,
      "ems": null
    },
    {
      "latitude": 50.915813,
      "longitude": 6.286621,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645966276,
      "ems": null
    },
    {
      "latitude": 50.913948,
      "longitude": 6.284866,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645966281,
      "ems": null
    },
    {
      "latitude": 50.91069,
      "longitude": 6.281662,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645966290,
      "ems": null
    },
    {
      "latitude": 50.90863,
      "longitude": 6.279652,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1645966296,
      "ems": null
    },
    {
      "latitude": 50.906174,
      "longitude": 6.277084,
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1645966303,
      "ems": null
    },
    {
      "latitude": 50.903824,
      "longitude": 6.274752,
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1645966309,
      "ems": null
    },
    {
      "latitude": 50.90152,
      "longitude": 6.272354,
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1645966315,
      "ems": null
    },
    {
      "latitude": 50.899429,
      "longitude": 6.270298,
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1645966321,
      "ems": null
    },
    {
      "latitude": 50.897278,
      "longitude": 6.267923,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1645966327,
      "ems": null
    },
    {
      "latitude": 50.895142,
      "longitude": 6.265564,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1645966333,
      "ems": null
    },
    {
      "latitude": 50.892956,
      "longitude": 6.26297,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 217,
      "squawk": "7742",
      "timestamp": 1645966339,
      "ems": null
    },
    {
      "latitude": 50.89193,
      "longitude": 6.261673,
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1645966342,
      "ems": null
    },
    {
      "latitude": 50.890812,
      "longitude": 6.260223,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 219,
      "squawk": "7742",
      "timestamp": 1645966345,
      "ems": null
    },
    {
      "latitude": 50.889816,
      "longitude": 6.258941,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1645966349,
      "ems": null
    },
    {
      "latitude": 50.887833,
      "longitude": 6.256561,
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
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1645966354,
      "ems": null
    },
    {
      "latitude": 50.885559,
      "longitude": 6.254042,
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1645966361,
      "ems": null
    },
    {
      "latitude": 50.883453,
      "longitude": 6.251814,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1645966367,
      "ems": null
    },
    {
      "latitude": 50.881504,
      "longitude": 6.249619,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1645966373,
      "ems": null
    },
    {
      "latitude": 50.879562,
      "longitude": 6.247435,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 217,
      "squawk": "7742",
      "timestamp": 1645966378,
      "ems": null
    },
    {
      "latitude": 50.877548,
      "longitude": 6.244689,
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
      "heading": 220,
      "squawk": "7742",
      "timestamp": 1645966385,
      "ems": null
    },
    {
      "latitude": 50.876587,
      "longitude": 6.243352,
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
      "heading": 221,
      "squawk": "7742",
      "timestamp": 1645966388,
      "ems": null
    },
    {
      "latitude": 50.87558,
      "longitude": 6.241942,
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
      "heading": 222,
      "squawk": "7742",
      "timestamp": 1645966391,
      "ems": null
    },
    {
      "latitude": 50.874619,
      "longitude": 6.240531,
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
      "heading": 222,
      "squawk": "7742",
      "timestamp": 1645966394,
      "ems": null
    },
    {
      "latitude": 50.873634,
      "longitude": 6.23909,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 222,
      "squawk": "7742",
      "timestamp": 1645966396,
      "ems": null
    },
    {
      "latitude": 50.872749,
      "longitude": 6.237717,
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
      "heading": 224,
      "squawk": "7742",
      "timestamp": 1645966399,
      "ems": null
    },
    {
      "latitude": 50.871773,
      "longitude": 6.236267,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 222,
      "squawk": "7742",
      "timestamp": 1645966402,
      "ems": null
    },
    {
      "latitude": 50.870819,
      "longitude": 6.23489,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 223,
      "squawk": "7742",
      "timestamp": 1645966406,
      "ems": null
    },
    {
      "latitude": 50.868889,
      "longitude": 6.231995,
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
      "heading": 223,
      "squawk": "7742",
      "timestamp": 1645966411,
      "ems": null
    },
    {
      "latitude": 50.866837,
      "longitude": 6.229025,
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
      "heading": 221,
      "squawk": "7742",
      "timestamp": 1645966418,
      "ems": null
    },
    {
      "latitude": 50.864883,
      "longitude": 6.226273,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 222,
      "squawk": "7742",
      "timestamp": 1645966424,
      "ems": null
    },
    {
      "latitude": 50.862881,
      "longitude": 6.22345,
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
      "heading": 220,
      "squawk": "7742",
      "timestamp": 1645966430,
      "ems": null
    },
    {
      "latitude": 50.860786,
      "longitude": 6.220551,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 221,
      "squawk": "7742",
      "timestamp": 1645966436,
      "ems": null
    },
    {
      "latitude": 50.858784,
      "longitude": 6.217651,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 224,
      "squawk": "7742",
      "timestamp": 1645966441,
      "ems": null
    },
    {
      "latitude": 50.856598,
      "longitude": 6.214294,
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
      "heading": 224,
      "squawk": "7742",
      "timestamp": 1645966448,
      "ems": null
    },
    {
      "latitude": 50.854568,
      "longitude": 6.211135,
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
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1645966454,
      "ems": null
    },
    {
      "latitude": 50.852779,
      "longitude": 6.208267,
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
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1645966459,
      "ems": null
    },
    {
      "latitude": 50.851803,
      "longitude": 6.206665,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 226,
      "squawk": "7742",
      "timestamp": 1645966463,
      "ems": null
    },
    {
      "latitude": 50.850872,
      "longitude": 6.205063,
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
      "heading": 227,
      "squawk": "7742",
      "timestamp": 1645966466,
      "ems": null
    },
    {
      "latitude": 50.848938,
      "longitude": 6.201931,
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
      "heading": 224,
      "squawk": "7742",
      "timestamp": 1645966472,
      "ems": null
    },
    {
      "latitude": 50.847107,
      "longitude": 6.198887,
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
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1645966478,
      "ems": null
    },
    {
      "latitude": 50.846191,
      "longitude": 6.196883,
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
      "heading": 235,
      "squawk": "7742",
      "timestamp": 1645966481,
      "ems": null
    },
    {
      "latitude": 50.845322,
      "longitude": 6.194953,
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
      "heading": 235,
      "squawk": "7742",
      "timestamp": 1645966484,
      "ems": null
    },
    {
      "latitude": 50.844585,
      "longitude": 6.193237,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 235,
      "squawk": "7742",
      "timestamp": 1645966486,
      "ems": null
    },
    {
      "latitude": 50.843811,
      "longitude": 6.191464,
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
      "heading": 235,
      "squawk": "7742",
      "timestamp": 1645966489,
      "ems": null
    },
    {
      "latitude": 50.843002,
      "longitude": 6.189651,
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
      "heading": 235,
      "squawk": "7742",
      "timestamp": 1645966493,
      "ems": null
    },
    {
      "latitude": 50.842346,
      "longitude": 6.188124,
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
      "heading": 238,
      "squawk": "7742",
      "timestamp": 1645966496,
      "ems": null
    },
    {
      "latitude": 50.841476,
      "longitude": 6.185674,
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
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1645966499,
      "ems": null
    },
    {
      "latitude": 50.840836,
      "longitude": 6.183818,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1645966502,
      "ems": null
    },
    {
      "latitude": 50.840195,
      "longitude": 6.182036,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1645966505,
      "ems": null
    },
    {
      "latitude": 50.839462,
      "longitude": 6.180032,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1645966508,
      "ems": null
    },
    {
      "latitude": 50.838684,
      "longitude": 6.177805,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1645966511,
      "ems": null
    },
    {
      "latitude": 50.838135,
      "longitude": 6.176024,
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
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1645966513,
      "ems": null
    },
    {
      "latitude": 50.837448,
      "longitude": 6.173797,
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
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1645966517,
      "ems": null
    },
    {
      "latitude": 50.836811,
      "longitude": 6.171799,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1645966520,
      "ems": null
    },
    {
      "latitude": 50.836163,
      "longitude": 6.169739,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1645966523,
      "ems": null
    },
    {
      "latitude": 50.834793,
      "longitude": 6.165706,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1645966529,
      "ems": null
    },
    {
      "latitude": 50.833275,
      "longitude": 6.161575,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 238,
      "squawk": "7742",
      "timestamp": 1645966535,
      "ems": null
    },
    {
      "latitude": 50.831818,
      "longitude": 6.157689,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1645966540,
      "ems": null
    },
    {
      "latitude": 50.830765,
      "longitude": 6.155313,
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
      "heading": 234,
      "squawk": "7742",
      "timestamp": 1645966544,
      "ems": null
    },
    {
      "latitude": 50.829987,
      "longitude": 6.15368,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 232,
      "squawk": "7742",
      "timestamp": 1645966548,
      "ems": null
    },
    {
      "latitude": 50.828991,
      "longitude": 6.15181,
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
      "heading": 228,
      "squawk": "7742",
      "timestamp": 1645966550,
      "ems": null
    },
    {
      "latitude": 50.827972,
      "longitude": 6.150043,
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
      "heading": 229,
      "squawk": "7742",
      "timestamp": 1645966554,
      "ems": null
    },
    {
      "latitude": 50.827057,
      "longitude": 6.148335,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 229,
      "squawk": "7742",
      "timestamp": 1645966557,
      "ems": null
    },
    {
      "latitude": 50.826416,
      "longitude": 6.147148,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1645966559,
      "ems": null
    },
    {
      "latitude": 50.825226,
      "longitude": 6.144846,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 229,
      "squawk": "7742",
      "timestamp": 1645966563,
      "ems": null
    },
    {
      "latitude": 50.824448,
      "longitude": 6.143436,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 231,
      "squawk": "7742",
      "timestamp": 1645966565,
      "ems": null
    },
    {
      "latitude": 50.822754,
      "longitude": 6.140021,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 231,
      "squawk": "7742",
      "timestamp": 1645966571,
      "ems": null
    },
    {
      "latitude": 50.821079,
      "longitude": 6.136398,
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
      "heading": 234,
      "squawk": "7742",
      "timestamp": 1645966578,
      "ems": null
    },
    {
      "latitude": 50.820282,
      "longitude": 6.134603,
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
      "heading": 235,
      "squawk": "7742",
      "timestamp": 1645966581,
      "ems": null
    },
    {
      "latitude": 50.819595,
      "longitude": 6.133118,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 234,
      "squawk": "7742",
      "timestamp": 1645966583,
      "ems": null
    },
    {
      "latitude": 50.818817,
      "longitude": 6.13141,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 234,
      "squawk": "7742",
      "timestamp": 1645966586,
      "ems": null
    },
    {
      "latitude": 50.817032,
      "longitude": 6.128144,
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
      "heading": 228,
      "squawk": "7742",
      "timestamp": 1645966592,
      "ems": null
    },
    {
      "latitude": 50.815956,
      "longitude": 6.126404,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1645966596,
      "ems": null
    },
    {
      "latitude": 50.815201,
      "longitude": 6.125249,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1645966598,
      "ems": null
    },
    {
      "latitude": 50.813828,
      "longitude": 6.123022,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1645966602,
      "ems": null
    },
    {
      "latitude": 50.813095,
      "longitude": 6.121909,
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
      "heading": 224,
      "squawk": "7742",
      "timestamp": 1645966604,
      "ems": null
    },
    {
      "latitude": 50.812317,
      "longitude": 6.120721,
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
      "heading": 224,
      "squawk": "7742",
      "timestamp": 1645966608,
      "ems": null
    },
    {
      "latitude": 50.811115,
      "longitude": 6.118927,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 222,
      "squawk": "7742",
      "timestamp": 1645966610,
      "ems": null
    },
    {
      "latitude": 50.809998,
      "longitude": 6.117249,
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
      "heading": 223,
      "squawk": "7742",
      "timestamp": 1645966614,
      "ems": null
    },
    {
      "latitude": 50.809067,
      "longitude": 6.115723,
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
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1645966617,
      "ems": null
    },
    {
      "latitude": 50.808277,
      "longitude": 6.114502,
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
      "heading": 224,
      "squawk": "7742",
      "timestamp": 1645966619,
      "ems": null
    },
    {
      "latitude": 50.805634,
      "longitude": 6.110551,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 223,
      "squawk": "7742",
      "timestamp": 1645966628,
      "ems": null
    },
    {
      "latitude": 50.803902,
      "longitude": 6.107864,
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
      "heading": 224,
      "squawk": "7742",
      "timestamp": 1645966633,
      "ems": null
    },
    {
      "latitude": 50.801834,
      "longitude": 6.104687,
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
      "heading": 226,
      "squawk": "7742",
      "timestamp": 1645966639,
      "ems": null
    },
    {
      "latitude": 50.800362,
      "longitude": 6.10199,
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
      "heading": 226,
      "squawk": "7742",
      "timestamp": 1645966645,
      "ems": null
    },
    {
      "latitude": 50.799362,
      "longitude": 6.099713,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 235,
      "squawk": "7742",
      "timestamp": 1645966649,
      "ems": null
    },
    {
      "latitude": 50.798904,
      "longitude": 6.098526,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 239,
      "squawk": "7742",
      "timestamp": 1645966652,
      "ems": null
    },
    {
      "latitude": 50.79808,
      "longitude": 6.096039,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1645966655,
      "ems": null
    },
    {
      "latitude": 50.797478,
      "longitude": 6.093979,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1645966659,
      "ems": null
    },
    {
      "latitude": 50.797012,
      "longitude": 6.092072,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1645966661,
      "ems": null
    },
    {
      "latitude": 50.796497,
      "longitude": 6.09024,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 245,
      "squawk": "7742",
      "timestamp": 1645966664,
      "ems": null
    },
    {
      "latitude": 50.795837,
      "longitude": 6.088579,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 237,
      "squawk": "7742",
      "timestamp": 1645966668,
      "ems": null
    },
    {
      "latitude": 50.795101,
      "longitude": 6.086655,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 238,
      "squawk": "7742",
      "timestamp": 1645966671,
      "ems": null
    },
    {
      "latitude": 50.793938,
      "longitude": 6.083603,
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
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1645966677,
      "ems": null
    },
    {
      "latitude": 50.792683,
      "longitude": 6.079636,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1645966683,
      "ems": null
    },
    {
      "latitude": 50.791191,
      "longitude": 6.074295,
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
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1645966691,
      "ems": null
    },
    {
      "latitude": 50.789932,
      "longitude": 6.068758,
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
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1645966699,
      "ems": null
    },
    {
      "latitude": 50.789471,
      "longitude": 6.066208,
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
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1645966703,
      "ems": null
    },
    {
      "latitude": 50.789097,
      "longitude": 6.064224,
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
      "heading": 252,
      "squawk": "7742",
      "timestamp": 1645966705,
      "ems": null
    },
    {
      "latitude": 50.788773,
      "longitude": 6.062469,
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
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1645966708,
      "ems": null
    },
    {
      "latitude": 50.788353,
      "longitude": 6.06041,
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
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1645966711,
      "ems": null
    },
    {
      "latitude": 50.78812,
      "longitude": 6.058731,
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
      "heading": 256,
      "squawk": "7742",
      "timestamp": 1645966714,
      "ems": null
    },
    {
      "latitude": 50.787781,
      "longitude": 6.056436,
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
      "heading": 257,
      "squawk": "7742",
      "timestamp": 1645966718,
      "ems": null
    },
    {
      "latitude": 50.78756,
      "longitude": 6.054459,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 262,
      "squawk": "7742",
      "timestamp": 1645966721,
      "ems": null
    },
    {
      "latitude": 50.787415,
      "longitude": 6.052353,
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
      "heading": 266,
      "squawk": "7742",
      "timestamp": 1645966723,
      "ems": null
    },
    {
      "latitude": 50.787373,
      "longitude": 6.05011,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 267,
      "squawk": "7742",
      "timestamp": 1645966726,
      "ems": null
    },
    {
      "latitude": 50.787327,
      "longitude": 6.047974,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 267,
      "squawk": "7742",
      "timestamp": 1645966730,
      "ems": null
    },
    {
      "latitude": 50.78714,
      "longitude": 6.045747,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 260,
      "squawk": "7742",
      "timestamp": 1645966733,
      "ems": null
    },
    {
      "latitude": 50.786209,
      "longitude": 6.042099,
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
      "heading": 239,
      "squawk": "7742",
      "timestamp": 1645966739,
      "ems": null
    },
    {
      "latitude": 50.785465,
      "longitude": 6.040726,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 224,
      "squawk": "7742",
      "timestamp": 1645966741,
      "ems": null
    },
    {
      "latitude": 50.784393,
      "longitude": 6.039586,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1645966745,
      "ems": null
    },
    {
      "latitude": 50.783371,
      "longitude": 6.039047,
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
      "heading": 195,
      "squawk": "7742",
      "timestamp": 1645966747,
      "ems": null
    },
    {
      "latitude": 50.782288,
      "longitude": 6.038695,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 188,
      "squawk": "7742",
      "timestamp": 1645966750,
      "ems": null
    },
    {
      "latitude": 50.781052,
      "longitude": 6.038769,
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
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1645966754,
      "ems": null
    },
    {
      "latitude": 50.780136,
      "longitude": 6.039289,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 150,
      "squawk": "7742",
      "timestamp": 1645966756,
      "ems": null
    },
    {
      "latitude": 50.779312,
      "longitude": 6.040402,
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
      "heading": 137,
      "squawk": "7742",
      "timestamp": 1645966759,
      "ems": null
    },
    {
      "latitude": 50.779087,
      "longitude": 6.040802,
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
      "heading": 134,
      "squawk": "7742",
      "timestamp": 1645966760,
      "ems": null
    },
    {
      "latitude": 50.777985,
      "longitude": 6.042926,
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
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1645966765,
      "ems": null
    },
    {
      "latitude": 50.777271,
      "longitude": 6.044922,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1645966769,
      "ems": null
    },
    {
      "latitude": 50.776794,
      "longitude": 6.046489,
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
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1645966772,
      "ems": null
    },
    {
      "latitude": 50.776337,
      "longitude": 6.047974,
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1645966775,
      "ems": null
    },
    {
      "latitude": 50.775921,
      "longitude": 6.049576,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1645966778,
      "ems": null
    },
    {
      "latitude": 50.775505,
      "longitude": 6.051025,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1645966780,
      "ems": null
    },
    {
      "latitude": 50.775101,
      "longitude": 6.052724,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1645966783,
      "ems": null
    },
    {
      "latitude": 50.774734,
      "longitude": 6.054283,
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
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1645966786,
      "ems": null
    },
    {
      "latitude": 50.774338,
      "longitude": 6.056137,
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
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1645966790,
      "ems": null
    },
    {
      "latitude": 50.774002,
      "longitude": 6.057698,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 107,
      "squawk": "7742",
      "timestamp": 1645966793,
      "ems": null
    },
    {
      "latitude": 50.773727,
      "longitude": 6.059183,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 107,
      "squawk": "7742",
      "timestamp": 1645966796,
      "ems": null
    },
    {
      "latitude": 50.773407,
      "longitude": 6.060867,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 106,
      "squawk": "7742",
      "timestamp": 1645966798,
      "ems": null
    },
    {
      "latitude": 50.773132,
      "longitude": 6.062375,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 104,
      "squawk": "7742",
      "timestamp": 1645966802,
      "ems": null
    },
    {
      "latitude": 50.77285,
      "longitude": 6.064072,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 102,
      "squawk": "7742",
      "timestamp": 1645966804,
      "ems": null
    },
    {
      "latitude": 50.772572,
      "longitude": 6.065674,
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
      "heading": 107,
      "squawk": "7742",
      "timestamp": 1645966807,
      "ems": null
    },
    {
      "latitude": 50.771713,
      "longitude": 6.068981,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1645966814,
      "ems": null
    },
    {
      "latitude": 50.771027,
      "longitude": 6.072173,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1645966820,
      "ems": null
    },
    {
      "latitude": 50.770382,
      "longitude": 6.075058,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1645966826,
      "ems": null
    },
    {
      "latitude": 50.769779,
      "longitude": 6.078796,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 100,
      "squawk": "7742",
      "timestamp": 1645966832,
      "ems": null
    },
    {
      "latitude": 50.769424,
      "longitude": 6.08212,
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
      "heading": 97,
      "squawk": "7742",
      "timestamp": 1645966838,
      "ems": null
    },
    {
      "latitude": 50.769196,
      "longitude": 6.085015,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 97,
      "squawk": "7742",
      "timestamp": 1645966842,
      "ems": null
    },
    {
      "latitude": 50.769077,
      "longitude": 6.086884,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 95,
      "squawk": "7742",
      "timestamp": 1645966846,
      "ems": null
    },
    {
      "latitude": 50.76894,
      "longitude": 6.089249,
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
      "heading": 94,
      "squawk": "7742",
      "timestamp": 1645966850,
      "ems": null
    },
    {
      "latitude": 50.768845,
      "longitude": 6.091156,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 96,
      "squawk": "7742",
      "timestamp": 1645966853,
      "ems": null
    },
    {
      "latitude": 50.768661,
      "longitude": 6.093216,
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
      "heading": 97,
      "squawk": "7742",
      "timestamp": 1645966856,
      "ems": null
    },
    {
      "latitude": 50.768555,
      "longitude": 6.094666,
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
      "heading": 96,
      "squawk": "7742",
      "timestamp": 1645966858,
      "ems": null
    },
    {
      "latitude": 50.768143,
      "longitude": 6.098451,
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
      "heading": 100,
      "squawk": "7742",
      "timestamp": 1645966865,
      "ems": null
    },
    {
      "latitude": 50.767776,
      "longitude": 6.102066,
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
      "heading": 98,
      "squawk": "7742",
      "timestamp": 1645966871,
      "ems": null
    },
    {
      "latitude": 50.76741,
      "longitude": 6.105281,
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
      "heading": 101,
      "squawk": "7742",
      "timestamp": 1645966877,
      "ems": null
    },
    {
      "latitude": 50.76717,
      "longitude": 6.107254,
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
      "heading": 101,
      "squawk": "7742",
      "timestamp": 1645966880,
      "ems": null
    },
    {
      "latitude": 50.767033,
      "longitude": 6.10817,
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
      "heading": 101,
      "squawk": "7742",
      "timestamp": 1645966881,
      "ems": null
    },
    {
      "latitude": 50.766659,
      "longitude": 6.110611,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 104,
      "squawk": "7742",
      "timestamp": 1645966886,
      "ems": null
    },
    {
      "latitude": 50.766098,
      "longitude": 6.114349,
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
      "heading": 102,
      "squawk": "7742",
      "timestamp": 1645966894,
      "ems": null
    },
    {
      "latitude": 50.765396,
      "longitude": 6.119533,
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
      "heading": 99,
      "squawk": "7742",
      "timestamp": 1645966902,
      "ems": null
    },
    {
      "latitude": 50.765076,
      "longitude": 6.123734,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 96,
      "squawk": "7742",
      "timestamp": 1645966910,
      "ems": null
    },
    {
      "latitude": 50.764519,
      "longitude": 6.128235,
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
      "heading": 103,
      "squawk": "7742",
      "timestamp": 1645966918,
      "ems": null
    },
    {
      "latitude": 50.763702,
      "longitude": 6.132895,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 106,
      "squawk": "7742",
      "timestamp": 1645966926,
      "ems": null
    },
    {
      "latitude": 50.76329,
      "longitude": 6.135196,
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
      "heading": 106,
      "squawk": "7742",
      "timestamp": 1645966930,
      "ems": null
    },
    {
      "latitude": 50.762981,
      "longitude": 6.137466,
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
      "heading": 102,
      "squawk": "7742",
      "timestamp": 1645966934,
      "ems": null
    },
    {
      "latitude": 50.762516,
      "longitude": 6.139832,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 106,
      "squawk": "7742",
      "timestamp": 1645966938,
      "ems": null
    },
    {
      "latitude": 50.762005,
      "longitude": 6.141891,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1645966942,
      "ems": null
    },
    {
      "latitude": 50.761551,
      "longitude": 6.143659,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1645966946,
      "ems": null
    },
    {
      "latitude": 50.760361,
      "longitude": 6.148706,
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
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1645966954,
      "ems": null
    },
    {
      "latitude": 50.758804,
      "longitude": 6.155536,
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
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1645966966,
      "ems": null
    },
    {
      "latitude": 50.758373,
      "longitude": 6.157532,
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
      "heading": 107,
      "squawk": "7742",
      "timestamp": 1645966970,
      "ems": null
    },
    {
      "latitude": 50.757477,
      "longitude": 6.162217,
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
      "heading": 106,
      "squawk": "7742",
      "timestamp": 1645966978,
      "ems": null
    },
    {
      "latitude": 50.756332,
      "longitude": 6.167562,
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
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1645966986,
      "ems": null
    },
    {
      "latitude": 50.75544,
      "longitude": 6.172409,
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
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1645966994,
      "ems": null
    },
    {
      "latitude": 50.754463,
      "longitude": 6.177444,
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
      "heading": 104,
      "squawk": "7742",
      "timestamp": 1645967002,
      "ems": null
    },
    {
      "latitude": 50.754135,
      "longitude": 6.180107,
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
      "heading": 100,
      "squawk": "7742",
      "timestamp": 1645967006,
      "ems": null
    },
    {
      "latitude": 50.753952,
      "longitude": 6.182779,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 97,
      "squawk": "7742",
      "timestamp": 1645967010,
      "ems": null
    },
    {
      "latitude": 50.753723,
      "longitude": 6.184932,
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
      "heading": 99,
      "squawk": "7742",
      "timestamp": 1645967014,
      "ems": null
    },
    {
      "latitude": 50.753448,
      "longitude": 6.187456,
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
      "heading": 101,
      "squawk": "7742",
      "timestamp": 1645967018,
      "ems": null
    },
    {
      "latitude": 50.752945,
      "longitude": 6.190944,
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
      "heading": 103,
      "squawk": "7742",
      "timestamp": 1645967023,
      "ems": null
    },
    {
      "latitude": 50.752415,
      "longitude": 6.194611,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 101,
      "squawk": "7742",
      "timestamp": 1645967030,
      "ems": null
    },
    {
      "latitude": 50.752228,
      "longitude": 6.19812,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 98,
      "squawk": "7742",
      "timestamp": 1645967036,
      "ems": null
    },
    {
      "latitude": 50.752182,
      "longitude": 6.20018,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "7742",
      "timestamp": 1645967040,
      "ems": null
    },
    {
      "latitude": 50.752213,
      "longitude": 6.201782,
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
      "heading": 85,
      "squawk": "7742",
      "timestamp": 1645967043,
      "ems": null
    },
    {
      "latitude": 50.752365,
      "longitude": 6.203613,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 80,
      "squawk": "7742",
      "timestamp": 1645967045,
      "ems": null
    },
    {
      "latitude": 50.752693,
      "longitude": 6.205292,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1645967049,
      "ems": null
    },
    {
      "latitude": 50.753067,
      "longitude": 6.206741,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967051,
      "ems": null
    },
    {
      "latitude": 50.753677,
      "longitude": 6.208241,
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
      "heading": 55,
      "squawk": "7742",
      "timestamp": 1645967054,
      "ems": null
    },
    {
      "latitude": 50.754463,
      "longitude": 6.210022,
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
      "heading": 52,
      "squawk": "7742",
      "timestamp": 1645967058,
      "ems": null
    },
    {
      "latitude": 50.755161,
      "longitude": 6.211548,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 53,
      "squawk": "7742",
      "timestamp": 1645967060,
      "ems": null
    },
    {
      "latitude": 50.755814,
      "longitude": 6.212997,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 54,
      "squawk": "7742",
      "timestamp": 1645967063,
      "ems": null
    },
    {
      "latitude": 50.756649,
      "longitude": 6.214676,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 53,
      "squawk": "7742",
      "timestamp": 1645967067,
      "ems": null
    },
    {
      "latitude": 50.757294,
      "longitude": 6.216109,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 53,
      "squawk": "7742",
      "timestamp": 1645967069,
      "ems": null
    },
    {
      "latitude": 50.758045,
      "longitude": 6.217651,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 52,
      "squawk": "7742",
      "timestamp": 1645967072,
      "ems": null
    },
    {
      "latitude": 50.75885,
      "longitude": 6.219227,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 50,
      "squawk": "7742",
      "timestamp": 1645967076,
      "ems": null
    },
    {
      "latitude": 50.759491,
      "longitude": 6.220551,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 51,
      "squawk": "7742",
      "timestamp": 1645967079,
      "ems": null
    },
    {
      "latitude": 50.760281,
      "longitude": 6.222076,
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
      "heading": 52,
      "squawk": "7742",
      "timestamp": 1645967082,
      "ems": null
    },
    {
      "latitude": 50.761677,
      "longitude": 6.225052,
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
      "heading": 52,
      "squawk": "7742",
      "timestamp": 1645967088,
      "ems": null
    },
    {
      "latitude": 50.763107,
      "longitude": 6.227986,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 53,
      "squawk": "7742",
      "timestamp": 1645967094,
      "ems": null
    },
    {
      "latitude": 50.764572,
      "longitude": 6.231104,
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
      "heading": 51,
      "squawk": "7742",
      "timestamp": 1645967100,
      "ems": null
    },
    {
      "latitude": 50.766312,
      "longitude": 6.234519,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 51,
      "squawk": "7742",
      "timestamp": 1645967106,
      "ems": null
    },
    {
      "latitude": 50.767868,
      "longitude": 6.237869,
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
      "heading": 54,
      "squawk": "7742",
      "timestamp": 1645967112,
      "ems": null
    },
    {
      "latitude": 50.768967,
      "longitude": 6.240309,
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
      "heading": 56,
      "squawk": "7742",
      "timestamp": 1645967117,
      "ems": null
    },
    {
      "latitude": 50.769928,
      "longitude": 6.242684,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1645967121,
      "ems": null
    },
    {
      "latitude": 50.770569,
      "longitude": 6.244354,
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
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1645967124,
      "ems": null
    },
    {
      "latitude": 50.770847,
      "longitude": 6.245117,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1645967126,
      "ems": null
    },
    {
      "latitude": 50.771851,
      "longitude": 6.247583,
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
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1645967130,
      "ems": null
    },
    {
      "latitude": 50.772446,
      "longitude": 6.24929,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 59,
      "squawk": "7742",
      "timestamp": 1645967133,
      "ems": null
    },
    {
      "latitude": 50.772991,
      "longitude": 6.25061,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1645967136,
      "ems": null
    },
    {
      "latitude": 50.774414,
      "longitude": 6.254116,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1645967142,
      "ems": null
    },
    {
      "latitude": 50.775742,
      "longitude": 6.257456,
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
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1645967148,
      "ems": null
    },
    {
      "latitude": 50.777134,
      "longitude": 6.260757,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 55,
      "squawk": "7742",
      "timestamp": 1645967154,
      "ems": null
    },
    {
      "latitude": 50.778576,
      "longitude": 6.264038,
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
      "heading": 54,
      "squawk": "7742",
      "timestamp": 1645967160,
      "ems": null
    },
    {
      "latitude": 50.780018,
      "longitude": 6.267319,
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
      "heading": 55,
      "squawk": "7742",
      "timestamp": 1645967166,
      "ems": null
    },
    {
      "latitude": 50.781601,
      "longitude": 6.271189,
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
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1645967173,
      "ems": null
    },
    {
      "latitude": 50.78323,
      "longitude": 6.275177,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1645967180,
      "ems": null
    },
    {
      "latitude": 50.784626,
      "longitude": 6.27861,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 56,
      "squawk": "7742",
      "timestamp": 1645967186,
      "ems": null
    },
    {
      "latitude": 50.784988,
      "longitude": 6.279726,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967188,
      "ems": null
    },
    {
      "latitude": 50.785675,
      "longitude": 6.282027,
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
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1645967192,
      "ems": null
    },
    {
      "latitude": 50.78627,
      "longitude": 6.283809,
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
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967195,
      "ems": null
    },
    {
      "latitude": 50.786774,
      "longitude": 6.285293,
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
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967198,
      "ems": null
    },
    {
      "latitude": 50.78746,
      "longitude": 6.287372,
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
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967201,
      "ems": null
    },
    {
      "latitude": 50.787933,
      "longitude": 6.288834,
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
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967203,
      "ems": null
    },
    {
      "latitude": 50.789154,
      "longitude": 6.292494,
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
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967210,
      "ems": null
    },
    {
      "latitude": 50.789703,
      "longitude": 6.294174,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967212,
      "ems": null
    },
    {
      "latitude": 50.790985,
      "longitude": 6.297987,
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
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967219,
      "ems": null
    },
    {
      "latitude": 50.792168,
      "longitude": 6.301346,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967225,
      "ems": null
    },
    {
      "latitude": 50.793228,
      "longitude": 6.304519,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967231,
      "ems": null
    },
    {
      "latitude": 50.794216,
      "longitude": 6.307526,
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
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967237,
      "ems": null
    },
    {
      "latitude": 50.795151,
      "longitude": 6.310829,
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
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1645967243,
      "ems": null
    },
    {
      "latitude": 50.796066,
      "longitude": 6.313798,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1645967249,
      "ems": null
    },
    {
      "latitude": 50.796982,
      "longitude": 6.316619,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 60,
      "squawk": "7742",
      "timestamp": 1645967254,
      "ems": null
    },
    {
      "latitude": 50.79863,
      "longitude": 6.320924,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1645967261,
      "ems": null
    },
    {
      "latitude": 50.799942,
      "longitude": 6.324463,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 60,
      "squawk": "7742",
      "timestamp": 1645967267,
      "ems": null
    },
    {
      "latitude": 50.801155,
      "longitude": 6.328201,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967273,
      "ems": null
    },
    {
      "latitude": 50.802475,
      "longitude": 6.331911,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967279,
      "ems": null
    },
    {
      "latitude": 50.803757,
      "longitude": 6.335771,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967285,
      "ems": null
    },
    {
      "latitude": 50.804306,
      "longitude": 6.337775,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1645967288,
      "ems": null
    },
    {
      "latitude": 50.804878,
      "longitude": 6.339874,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1645967291,
      "ems": null
    },
    {
      "latitude": 50.805157,
      "longitude": 6.341705,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 73,
      "squawk": "7742",
      "timestamp": 1645967294,
      "ems": null
    },
    {
      "latitude": 50.805389,
      "longitude": 6.343536,
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
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1645967297,
      "ems": null
    },
    {
      "latitude": 50.805763,
      "longitude": 6.345367,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 70,
      "squawk": "7742",
      "timestamp": 1645967300,
      "ems": null
    },
    {
      "latitude": 50.806416,
      "longitude": 6.34697,
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
      "heading": 49,
      "squawk": "7742",
      "timestamp": 1645967303,
      "ems": null
    },
    {
      "latitude": 50.80806,
      "longitude": 6.347945,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 7,
      "squawk": "7742",
      "timestamp": 1645967306,
      "ems": null
    },
    {
      "latitude": 50.809113,
      "longitude": 6.348114,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1645967308,
      "ems": null
    },
    {
      "latitude": 50.809753,
      "longitude": 6.348464,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1645967310,
      "ems": null
    },
    {
      "latitude": 50.810944,
      "longitude": 6.350395,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1645967314,
      "ems": null
    },
    {
      "latitude": 50.811264,
      "longitude": 6.352102,
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
      "heading": 73,
      "squawk": "7742",
      "timestamp": 1645967317,
      "ems": null
    },
    {
      "latitude": 50.811401,
      "longitude": 6.353067,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1645967320,
      "ems": null
    },
    {
      "latitude": 50.812325,
      "longitude": 6.357422,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1645967326,
      "ems": null
    },
    {
      "latitude": 50.813736,
      "longitude": 6.361529,
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
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967332,
      "ems": null
    },
    {
      "latitude": 50.814423,
      "longitude": 6.363449,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 60,
      "squawk": "7742",
      "timestamp": 1645967336,
      "ems": null
    },
    {
      "latitude": 50.815258,
      "longitude": 6.365891,
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
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967340,
      "ems": null
    },
    {
      "latitude": 50.816711,
      "longitude": 6.370214,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967348,
      "ems": null
    },
    {
      "latitude": 50.81768,
      "longitude": 6.373215,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967352,
      "ems": null
    },
    {
      "latitude": 50.81847,
      "longitude": 6.375809,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967356,
      "ems": null
    },
    {
      "latitude": 50.820053,
      "longitude": 6.380997,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967364,
      "ems": null
    },
    {
      "latitude": 50.821701,
      "longitude": 6.386471,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1645967372,
      "ems": null
    },
    {
      "latitude": 50.823166,
      "longitude": 6.391593,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1645967380,
      "ems": null
    },
    {
      "latitude": 50.824245,
      "longitude": 6.39534,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1645967388,
      "ems": null
    },
    {
      "latitude": 50.825874,
      "longitude": 6.400986,
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
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1645967396,
      "ems": null
    },
    {
      "latitude": 50.82769,
      "longitude": 6.406555,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967403,
      "ems": null
    },
    {
      "latitude": 50.829208,
      "longitude": 6.411116,
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
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967409,
      "ems": null
    },
    {
      "latitude": 50.829712,
      "longitude": 6.412601,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967412,
      "ems": null
    },
    {
      "latitude": 50.831226,
      "longitude": 6.417007,
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
      "heading": 60,
      "squawk": "7742",
      "timestamp": 1645967419,
      "ems": null
    },
    {
      "latitude": 50.832718,
      "longitude": 6.42128,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967426,
      "ems": null
    },
    {
      "latitude": 50.834106,
      "longitude": 6.425369,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967432,
      "ems": null
    },
    {
      "latitude": 50.835114,
      "longitude": 6.42871,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1645967438,
      "ems": null
    },
    {
      "latitude": 50.836346,
      "longitude": 6.432724,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967444,
      "ems": null
    },
    {
      "latitude": 50.837418,
      "longitude": 6.436081,
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
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967450,
      "ems": null
    },
    {
      "latitude": 50.838547,
      "longitude": 6.439547,
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
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967456,
      "ems": null
    },
    {
      "latitude": 50.839737,
      "longitude": 6.44311,
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
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967462,
      "ems": null
    },
    {
      "latitude": 50.841019,
      "longitude": 6.446748,
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
      "heading": 60,
      "squawk": "7742",
      "timestamp": 1645967468,
      "ems": null
    },
    {
      "latitude": 50.842255,
      "longitude": 6.450236,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967474,
      "ems": null
    },
    {
      "latitude": 50.843609,
      "longitude": 6.454163,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967480,
      "ems": null
    },
    {
      "latitude": 50.844818,
      "longitude": 6.457672,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967486,
      "ems": null
    },
    {
      "latitude": 50.845917,
      "longitude": 6.461223,
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
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1645967492,
      "ems": null
    },
    {
      "latitude": 50.847008,
      "longitude": 6.464691,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967498,
      "ems": null
    },
    {
      "latitude": 50.84816,
      "longitude": 6.468201,
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
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967504,
      "ems": null
    },
    {
      "latitude": 50.84935,
      "longitude": 6.471838,
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
      "heading": 60,
      "squawk": "7742",
      "timestamp": 1645967511,
      "ems": null
    },
    {
      "latitude": 50.850498,
      "longitude": 6.474915,
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
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1645967516,
      "ems": null
    },
    {
      "latitude": 50.851292,
      "longitude": 6.476898,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1645967519,
      "ems": null
    },
    {
      "latitude": 50.851959,
      "longitude": 6.478519,
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
      "heading": 56,
      "squawk": "7742",
      "timestamp": 1645967522,
      "ems": null
    },
    {
      "latitude": 50.852642,
      "longitude": 6.480179,
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
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1645967525,
      "ems": null
    },
    {
      "latitude": 50.853333,
      "longitude": 6.481859,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1645967528,
      "ems": null
    },
    {
      "latitude": 50.854019,
      "longitude": 6.483567,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1645967532,
      "ems": null
    },
    {
      "latitude": 50.855293,
      "longitude": 6.487274,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967538,
      "ems": null
    },
    {
      "latitude": 50.856445,
      "longitude": 6.491212,
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
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1645967544,
      "ems": null
    },
    {
      "latitude": 50.856949,
      "longitude": 6.492994,
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
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1645967546,
      "ems": null
    },
    {
      "latitude": 50.857544,
      "longitude": 6.494998,
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
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967550,
      "ems": null
    },
    {
      "latitude": 50.858139,
      "longitude": 6.496706,
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
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967552,
      "ems": null
    },
    {
      "latitude": 50.85878,
      "longitude": 6.49871,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1645967556,
      "ems": null
    },
    {
      "latitude": 50.859299,
      "longitude": 6.500473,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1645967558,
      "ems": null
    },
    {
      "latitude": 50.859833,
      "longitude": 6.502645,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1645967562,
      "ems": null
    },
    {
      "latitude": 50.860928,
      "longitude": 6.506271,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967568,
      "ems": null
    },
    {
      "latitude": 50.862183,
      "longitude": 6.510086,
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
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967574,
      "ems": null
    },
    {
      "latitude": 50.863396,
      "longitude": 6.513748,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 60,
      "squawk": "7742",
      "timestamp": 1645967580,
      "ems": null
    },
    {
      "latitude": 50.864742,
      "longitude": 6.517258,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 59,
      "squawk": "7742",
      "timestamp": 1645967585,
      "ems": null
    },
    {
      "latitude": 50.865303,
      "longitude": 6.518936,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 60,
      "squawk": "7742",
      "timestamp": 1645967588,
      "ems": null
    },
    {
      "latitude": 50.865967,
      "longitude": 6.520905,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967592,
      "ems": null
    },
    {
      "latitude": 50.867111,
      "longitude": 6.524246,
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
      "heading": 60,
      "squawk": "7742",
      "timestamp": 1645967597,
      "ems": null
    },
    {
      "latitude": 50.868576,
      "longitude": 6.527883,
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
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1645967604,
      "ems": null
    },
    {
      "latitude": 50.86982,
      "longitude": 6.531372,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967609,
      "ems": null
    },
    {
      "latitude": 50.871094,
      "longitude": 6.535084,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967616,
      "ems": null
    },
    {
      "latitude": 50.872379,
      "longitude": 6.538849,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 60,
      "squawk": "7742",
      "timestamp": 1645967622,
      "ems": null
    },
    {
      "latitude": 50.873062,
      "longitude": 6.540651,
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
      "heading": 56,
      "squawk": "7742",
      "timestamp": 1645967625,
      "ems": null
    },
    {
      "latitude": 50.873932,
      "longitude": 6.542358,
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
      "heading": 49,
      "squawk": "7742",
      "timestamp": 1645967628,
      "ems": null
    },
    {
      "latitude": 50.874752,
      "longitude": 6.543884,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 47,
      "squawk": "7742",
      "timestamp": 1645967631,
      "ems": null
    },
    {
      "latitude": 50.875824,
      "longitude": 6.545563,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 44,
      "squawk": "7742",
      "timestamp": 1645967633,
      "ems": null
    },
    {
      "latitude": 50.876862,
      "longitude": 6.547258,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 46,
      "squawk": "7742",
      "timestamp": 1645967637,
      "ems": null
    },
    {
      "latitude": 50.877731,
      "longitude": 6.548996,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 53,
      "squawk": "7742",
      "timestamp": 1645967640,
      "ems": null
    },
    {
      "latitude": 50.878967,
      "longitude": 6.552157,
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
        "fpm": 1600,
        "ms": 8.1
      },
      "heading": 59,
      "squawk": "7742",
      "timestamp": 1645967646,
      "ems": null
    },
    {
      "latitude": 50.879921,
      "longitude": 6.554947,
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
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967652,
      "ems": null
    },
    {
      "latitude": 50.880386,
      "longitude": 6.556473,
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
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1645967655,
      "ems": null
    },
    {
      "latitude": 50.880844,
      "longitude": 6.558022,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1645967658,
      "ems": null
    },
    {
      "latitude": 50.881256,
      "longitude": 6.559506,
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
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1645967661,
      "ems": null
    },
    {
      "latitude": 50.88176,
      "longitude": 6.561213,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1645967664,
      "ems": null
    },
    {
      "latitude": 50.882294,
      "longitude": 6.562881,
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
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1645967667,
      "ems": null
    },
    {
      "latitude": 50.882767,
      "longitude": 6.564479,
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
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967670,
      "ems": null
    },
    {
      "latitude": 50.883362,
      "longitude": 6.566261,
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
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967673,
      "ems": null
    },
    {
      "latitude": 50.884251,
      "longitude": 6.569366,
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
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1645967678,
      "ems": null
    },
    {
      "latitude": 50.885239,
      "longitude": 6.572942,
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
      "heading": 68,
      "squawk": "7742",
      "timestamp": 1645967684,
      "ems": null
    },
    {
      "latitude": 50.886066,
      "longitude": 6.575928,
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
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967690,
      "ems": null
    },
    {
      "latitude": 50.887344,
      "longitude": 6.579994,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967696,
      "ems": null
    },
    {
      "latitude": 50.888031,
      "longitude": 6.582295,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967700,
      "ems": null
    },
    {
      "latitude": 50.889416,
      "longitude": 6.586533,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967708,
      "ems": null
    },
    {
      "latitude": 50.890274,
      "longitude": 6.589125,
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
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967712,
      "ems": null
    },
    {
      "latitude": 50.891605,
      "longitude": 6.593018,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967718,
      "ems": null
    },
    {
      "latitude": 50.892673,
      "longitude": 6.596527,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1645967724,
      "ems": null
    },
    {
      "latitude": 50.893845,
      "longitude": 6.600482,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1645967731,
      "ems": null
    },
    {
      "latitude": 50.894909,
      "longitude": 6.604004,
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
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1645967737,
      "ems": null
    },
    {
      "latitude": 50.895889,
      "longitude": 6.607513,
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
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1645967743,
      "ems": null
    },
    {
      "latitude": 50.897003,
      "longitude": 6.611246,
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
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1645967749,
      "ems": null
    },
    {
      "latitude": 50.897984,
      "longitude": 6.614914,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 68,
      "squawk": "7742",
      "timestamp": 1645967755,
      "ems": null
    },
    {
      "latitude": 50.898914,
      "longitude": 6.618347,
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
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1645967761,
      "ems": null
    },
    {
      "latitude": 50.899982,
      "longitude": 6.621933,
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
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967767,
      "ems": null
    },
    {
      "latitude": 50.900589,
      "longitude": 6.623688,
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
      "heading": 59,
      "squawk": "7742",
      "timestamp": 1645967770,
      "ems": null
    },
    {
      "latitude": 50.901352,
      "longitude": 6.625498,
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
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1645967773,
      "ems": null
    },
    {
      "latitude": 50.901993,
      "longitude": 6.627131,
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
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1645967776,
      "ems": null
    },
    {
      "latitude": 50.902546,
      "longitude": 6.628571,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1645967779,
      "ems": null
    },
    {
      "latitude": 50.903336,
      "longitude": 6.630478,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1645967782,
      "ems": null
    },
    {
      "latitude": 50.904079,
      "longitude": 6.632309,
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
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1645967785,
      "ems": null
    },
    {
      "latitude": 50.904686,
      "longitude": 6.633759,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 55,
      "squawk": "7742",
      "timestamp": 1645967788,
      "ems": null
    },
    {
      "latitude": 50.905472,
      "longitude": 6.635668,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1645967791,
      "ems": null
    },
    {
      "latitude": 50.906204,
      "longitude": 6.637524,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1645967794,
      "ems": null
    },
    {
      "latitude": 50.90744,
      "longitude": 6.640716,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 59,
      "squawk": "7742",
      "timestamp": 1645967800,
      "ems": null
    },
    {
      "latitude": 50.908676,
      "longitude": 6.643982,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1645967806,
      "ems": null
    },
    {
      "latitude": 50.910366,
      "longitude": 6.648331,
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
      "heading": 59,
      "squawk": "7742",
      "timestamp": 1645967812,
      "ems": null
    },
    {
      "latitude": 50.911621,
      "longitude": 6.65184,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967817,
      "ems": null
    },
    {
      "latitude": 50.912292,
      "longitude": 6.653929,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967821,
      "ems": null
    },
    {
      "latitude": 50.912888,
      "longitude": 6.655933,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1645967824,
      "ems": null
    },
    {
      "latitude": 50.913345,
      "longitude": 6.657715,
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
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1645967827,
      "ems": null
    },
    {
      "latitude": 50.913857,
      "longitude": 6.659698,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1645967830,
      "ems": null
    },
    {
      "latitude": 50.914261,
      "longitude": 6.661427,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 70,
      "squawk": "7742",
      "timestamp": 1645967833,
      "ems": null
    },
    {
      "latitude": 50.914696,
      "longitude": 6.663361,
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
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1645967836,
      "ems": null
    },
    {
      "latitude": 50.915176,
      "longitude": 6.665287,
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
      "heading": 68,
      "squawk": "7742",
      "timestamp": 1645967839,
      "ems": null
    },
    {
      "latitude": 50.91568,
      "longitude": 6.667142,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1645967842,
      "ems": null
    },
    {
      "latitude": 50.91687,
      "longitude": 6.67078,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645967848,
      "ems": null
    },
    {
      "latitude": 50.917999,
      "longitude": 6.674347,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1645967854,
      "ems": null
    },
    {
      "latitude": 50.919205,
      "longitude": 6.678054,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967860,
      "ems": null
    },
    {
      "latitude": 50.919724,
      "longitude": 6.679611,
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
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645967863,
      "ems": null
    },
    {
      "latitude": 50.920303,
      "longitude": 6.681543,
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
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967866,
      "ems": null
    },
    {
      "latitude": 50.921257,
      "longitude": 6.685028,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1645967872,
      "ems": null
    },
    {
      "latitude": 50.921677,
      "longitude": 6.686859,
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
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1645967875,
      "ems": null
    },
    {
      "latitude": 50.922188,
      "longitude": 6.688766,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1645967878,
      "ems": null
    },
    {
      "latitude": 50.923187,
      "longitude": 6.692381,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1645967884,
      "ems": null
    },
    {
      "latitude": 50.924145,
      "longitude": 6.696014,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 68,
      "squawk": "7742",
      "timestamp": 1645967890,
      "ems": null
    },
    {
      "latitude": 50.924561,
      "longitude": 6.697726,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1645967893,
      "ems": null
    },
    {
      "latitude": 50.92503,
      "longitude": 6.699677,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1645967896,
      "ems": null
    },
    {
      "latitude": 50.926025,
      "longitude": 6.703664,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1645967902,
      "ems": null
    },
    {
      "latitude": 50.927032,
      "longitude": 6.70745,
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
      "heading": 68,
      "squawk": "7742",
      "timestamp": 1645967908,
      "ems": null
    },
    {
      "latitude": 50.92804,
      "longitude": 6.711162,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645967914,
      "ems": null
    },
    {
      "latitude": 50.929173,
      "longitude": 6.714859,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1645967920,
      "ems": null
    },
    {
      "latitude": 50.930012,
      "longitude": 6.718369,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 68,
      "squawk": "7742",
      "timestamp": 1645967926,
      "ems": null
    },
    {
      "latitude": 50.930756,
      "longitude": 6.721954,
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
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1645967932,
      "ems": null
    },
    {
      "latitude": 50.931473,
      "longitude": 6.725414,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 71,
      "squawk": "7742",
      "timestamp": 1645967938,
      "ems": null
    },
    {
      "latitude": 50.931885,
      "longitude": 6.727418,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 71,
      "squawk": "7742",
      "timestamp": 1645967941,
      "ems": null
    },
    {
      "latitude": 50.932293,
      "longitude": 6.729279,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1645967944,
      "ems": null
    },
    {
      "latitude": 50.932617,
      "longitude": 6.730881,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1645967947,
      "ems": null
    },
    {
      "latitude": 50.932941,
      "longitude": 6.732712,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 73,
      "squawk": "7742",
      "timestamp": 1645967950,
      "ems": null
    },
    {
      "latitude": 50.933716,
      "longitude": 6.736698,
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
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1645967956,
      "ems": null
    },
    {
      "latitude": 50.934059,
      "longitude": 6.738586,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1645967959,
      "ems": null
    },
    {
      "latitude": 50.934711,
      "longitude": 6.742401,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1645967965,
      "ems": null
    },
    {
      "latitude": 50.935364,
      "longitude": 6.74614,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 73,
      "squawk": "7742",
      "timestamp": 1645967971,
      "ems": null
    },
    {
      "latitude": 50.936203,
      "longitude": 6.750107,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 71,
      "squawk": "7742",
      "timestamp": 1645967977,
      "ems": null
    },
    {
      "latitude": 50.936947,
      "longitude": 6.753693,
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
      "heading": 70,
      "squawk": "7742",
      "timestamp": 1645967983,
      "ems": null
    },
    {
      "latitude": 50.937469,
      "longitude": 6.755775,
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
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1645967986,
      "ems": null
    },
    {
      "latitude": 50.937923,
      "longitude": 6.757431,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1645967989,
      "ems": null
    },
    {
      "latitude": 50.938435,
      "longitude": 6.759415,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1645967992,
      "ems": null
    },
    {
      "latitude": 50.938934,
      "longitude": 6.761194,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1645967995,
      "ems": null
    },
    {
      "latitude": 50.939484,
      "longitude": 6.763347,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1645967998,
      "ems": null
    },
    {
      "latitude": 50.940033,
      "longitude": 6.765203,
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
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1645968001,
      "ems": null
    },
    {
      "latitude": 50.940445,
      "longitude": 6.766687,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1645968004,
      "ems": null
    },
    {
      "latitude": 50.941177,
      "longitude": 6.768989,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1645968007,
      "ems": null
    },
    {
      "latitude": 50.941772,
      "longitude": 6.770918,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645968010,
      "ems": null
    },
    {
      "latitude": 50.942413,
      "longitude": 6.772774,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645968013,
      "ems": null
    },
    {
      "latitude": 50.942951,
      "longitude": 6.774445,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645968016,
      "ems": null
    },
    {
      "latitude": 50.943649,
      "longitude": 6.776486,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645968019,
      "ems": null
    },
    {
      "latitude": 50.944256,
      "longitude": 6.778107,
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
      "heading": 61,
      "squawk": "7742",
      "timestamp": 1645968022,
      "ems": null
    },
    {
      "latitude": 50.945,
      "longitude": 6.780167,
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
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1645968025,
      "ems": null
    },
    {
      "latitude": 50.945618,
      "longitude": 6.781682,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1645968028,
      "ems": null
    },
    {
      "latitude": 50.94635,
      "longitude": 6.783538,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 56,
      "squawk": "7742",
      "timestamp": 1645968031,
      "ems": null
    },
    {
      "latitude": 50.946945,
      "longitude": 6.785023,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1645968034,
      "ems": null
    },
    {
      "latitude": 50.947746,
      "longitude": 6.787109,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "squawk": "7742",
      "timestamp": 1645968037,
      "ems": null
    },
    {
      "latitude": 50.949097,
      "longitude": 6.790442,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1645968043,
      "ems": null
    },
    {
      "latitude": 50.950214,
      "longitude": 6.793365,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1645968049,
      "ems": null
    },
    {
      "latitude": 50.952541,
      "longitude": 6.799469,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645968058,
      "ems": null
    },
    {
      "latitude": 50.953079,
      "longitude": 6.801131,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 62,
      "squawk": "7742",
      "timestamp": 1645968061,
      "ems": null
    },
    {
      "latitude": 50.953705,
      "longitude": 6.803207,
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
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1645968064,
      "ems": null
    },
    {
      "latitude": 50.954266,
      "longitude": 6.805038,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1645968067,
      "ems": null
    },
    {
      "latitude": 50.954773,
      "longitude": 6.806921,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1645968070,
      "ems": null
    },
    {
      "latitude": 50.955231,
      "longitude": 6.808777,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 70,
      "squawk": "7742",
      "timestamp": 1645968073,
      "ems": null
    },
    {
      "latitude": 50.955662,
      "longitude": 6.810837,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1645968076,
      "ems": null
    },
    {
      "latitude": 50.956032,
      "longitude": 6.812744,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1645968079,
      "ems": null
    },
    {
      "latitude": 50.956284,
      "longitude": 6.814418,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1645968082,
      "ems": null
    },
    {
      "latitude": 50.956593,
      "longitude": 6.816788,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1645968085,
      "ems": null
    },
    {
      "latitude": 50.956779,
      "longitude": 6.81839,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 81,
      "squawk": "7742",
      "timestamp": 1645968088,
      "ems": null
    },
    {
      "latitude": 50.956963,
      "longitude": 6.820831,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 83,
      "squawk": "7742",
      "timestamp": 1645968091,
      "ems": null
    },
    {
      "latitude": 50.957012,
      "longitude": 6.821747,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 84,
      "squawk": "7742",
      "timestamp": 1645968094,
      "ems": null
    },
    {
      "latitude": 50.957062,
      "longitude": 6.824291,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 84,
      "squawk": "7742",
      "timestamp": 1645968096,
      "ems": null
    },
    {
      "latitude": 50.957012,
      "longitude": 6.826248,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 93,
      "squawk": "7742",
      "timestamp": 1645968100,
      "ems": null
    },
    {
      "latitude": 50.956871,
      "longitude": 6.828232,
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
      "heading": 98,
      "squawk": "7742",
      "timestamp": 1645968103,
      "ems": null
    },
    {
      "latitude": 50.956638,
      "longitude": 6.829987,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 100,
      "squawk": "7742",
      "timestamp": 1645968106,
      "ems": null
    },
    {
      "latitude": 50.956451,
      "longitude": 6.831665,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 101,
      "squawk": "7742",
      "timestamp": 1645968108,
      "ems": null
    },
    {
      "latitude": 50.956219,
      "longitude": 6.83342,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 102,
      "squawk": "7742",
      "timestamp": 1645968111,
      "ems": null
    },
    {
      "latitude": 50.955963,
      "longitude": 6.835204,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 103,
      "squawk": "7742",
      "timestamp": 1645968115,
      "ems": null
    },
    {
      "latitude": 50.955688,
      "longitude": 6.836911,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 103,
      "squawk": "7742",
      "timestamp": 1645968118,
      "ems": null
    },
    {
      "latitude": 50.955475,
      "longitude": 6.838531,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 103,
      "squawk": "7742",
      "timestamp": 1645968121,
      "ems": null
    },
    {
      "latitude": 50.955231,
      "longitude": 6.840177,
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
      "heading": 101,
      "squawk": "7742",
      "timestamp": 1645968123,
      "ems": null
    },
    {
      "latitude": 50.955002,
      "longitude": 6.84181,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 102,
      "squawk": "7742",
      "timestamp": 1645968127,
      "ems": null
    },
    {
      "latitude": 50.954727,
      "longitude": 6.84374,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 103,
      "squawk": "7742",
      "timestamp": 1645968130,
      "ems": null
    },
    {
      "latitude": 50.954498,
      "longitude": 6.84515,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 106,
      "squawk": "7742",
      "timestamp": 1645968132,
      "ems": null
    },
    {
      "latitude": 50.954086,
      "longitude": 6.846784,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1645968136,
      "ems": null
    },
    {
      "latitude": 50.953472,
      "longitude": 6.84845,
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
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1645968139,
      "ems": null
    },
    {
      "latitude": 50.95282,
      "longitude": 6.849899,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 127,
      "squawk": "7742",
      "timestamp": 1645968142,
      "ems": null
    },
    {
      "latitude": 50.952168,
      "longitude": 6.851273,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 128,
      "squawk": "7742",
      "timestamp": 1645968145,
      "ems": null
    },
    {
      "latitude": 50.951569,
      "longitude": 6.852351,
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
      "heading": 131,
      "squawk": "7742",
      "timestamp": 1645968147,
      "ems": null
    },
    {
      "latitude": 50.950771,
      "longitude": 6.853714,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 132,
      "squawk": "7742",
      "timestamp": 1645968151,
      "ems": null
    },
    {
      "latitude": 50.949936,
      "longitude": 6.855087,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 137,
      "squawk": "7742",
      "timestamp": 1645968154,
      "ems": null
    },
    {
      "latitude": 50.949051,
      "longitude": 6.856232,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 142,
      "squawk": "7742",
      "timestamp": 1645968157,
      "ems": null
    },
    {
      "latitude": 50.948181,
      "longitude": 6.85725,
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
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1645968160,
      "ems": null
    },
    {
      "latitude": 50.94722,
      "longitude": 6.858141,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1645968163,
      "ems": null
    },
    {
      "latitude": 50.946209,
      "longitude": 6.858978,
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
      "heading": 152,
      "squawk": "7742",
      "timestamp": 1645968166,
      "ems": null
    },
    {
      "latitude": 50.945297,
      "longitude": 6.8597,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1645968169,
      "ems": null
    },
    {
      "latitude": 50.94416,
      "longitude": 6.860428,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1645968172,
      "ems": null
    },
    {
      "latitude": 50.943092,
      "longitude": 6.861038,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1645968175,
      "ems": null
    },
    {
      "latitude": 50.94202,
      "longitude": 6.861572,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1645968178,
      "ems": null
    },
    {
      "latitude": 50.940857,
      "longitude": 6.862001,
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
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1645968181,
      "ems": null
    },
    {
      "latitude": 50.939835,
      "longitude": 6.862488,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1645968184,
      "ems": null
    },
    {
      "latitude": 50.938568,
      "longitude": 6.862966,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1645968187,
      "ems": null
    },
    {
      "latitude": 50.937515,
      "longitude": 6.863486,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1645968190,
      "ems": null
    },
    {
      "latitude": 50.936234,
      "longitude": 6.864302,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1645968193,
      "ems": null
    },
    {
      "latitude": 50.935089,
      "longitude": 6.86497,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 159,
      "squawk": "7742",
      "timestamp": 1645968196,
      "ems": null
    },
    {
      "latitude": 50.933968,
      "longitude": 6.865616,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1645968199,
      "ems": null
    },
    {
      "latitude": 50.931564,
      "longitude": 6.867049,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1645968205,
      "ems": null
    },
    {
      "latitude": 50.930428,
      "longitude": 6.867981,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 152,
      "squawk": "7742",
      "timestamp": 1645968208,
      "ems": null
    },
    {
      "latitude": 50.929367,
      "longitude": 6.868831,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 151,
      "squawk": "7742",
      "timestamp": 1645968211,
      "ems": null
    },
    {
      "latitude": 50.928406,
      "longitude": 6.869721,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1645968214,
      "ems": null
    },
    {
      "latitude": 50.927307,
      "longitude": 6.87076,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1645968217,
      "ems": null
    },
    {
      "latitude": 50.926529,
      "longitude": 6.871503,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1645968220,
      "ems": null
    },
    {
      "latitude": 50.925247,
      "longitude": 6.872691,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1645968223,
      "ems": null
    },
    {
      "latitude": 50.924377,
      "longitude": 6.873581,
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
      "heading": 145,
      "squawk": "7742",
      "timestamp": 1645968226,
      "ems": null
    },
    {
      "latitude": 50.923447,
      "longitude": 6.874619,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 144,
      "squawk": "7742",
      "timestamp": 1645968229,
      "ems": null
    },
    {
      "latitude": 50.922546,
      "longitude": 6.87566,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 142,
      "squawk": "7742",
      "timestamp": 1645968232,
      "ems": null
    },
    {
      "latitude": 50.921677,
      "longitude": 6.876755,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 142,
      "squawk": "7742",
      "timestamp": 1645968235,
      "ems": null
    },
    {
      "latitude": 50.920761,
      "longitude": 6.877812,
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
      "heading": 143,
      "squawk": "7742",
      "timestamp": 1645968238,
      "ems": null
    },
    {
      "latitude": 50.919983,
      "longitude": 6.878703,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 144,
      "squawk": "7742",
      "timestamp": 1645968241,
      "ems": null
    },
    {
      "latitude": 50.918976,
      "longitude": 6.879807,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 144,
      "squawk": "7742",
      "timestamp": 1645968244,
      "ems": null
    },
    {
      "latitude": 50.918045,
      "longitude": 6.880875,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 144,
      "squawk": "7742",
      "timestamp": 1645968247,
      "ems": null
    },
    {
      "latitude": 50.917145,
      "longitude": 6.881896,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 142,
      "squawk": "7742",
      "timestamp": 1645968250,
      "ems": null
    },
    {
      "latitude": 50.916325,
      "longitude": 6.882935,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1645968253,
      "ems": null
    },
    {
      "latitude": 50.915627,
      "longitude": 6.88385,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 139,
      "squawk": "7742",
      "timestamp": 1645968256,
      "ems": null
    },
    {
      "latitude": 50.914555,
      "longitude": 6.885376,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1645968259,
      "ems": null
    },
    {
      "latitude": 50.91288,
      "longitude": 6.887589,
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
      "heading": 139,
      "squawk": "7742",
      "timestamp": 1645968265,
      "ems": null
    },
    {
      "latitude": 50.912064,
      "longitude": 6.888725,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1645968268,
      "ems": null
    },
    {
      "latitude": 50.910179,
      "longitude": 6.891022,
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
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1645968274,
      "ems": null
    },
    {
      "latitude": 50.909134,
      "longitude": 6.891917,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 152,
      "squawk": "7742",
      "timestamp": 1645968277,
      "ems": null
    },
    {
      "latitude": 50.908035,
      "longitude": 6.892807,
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
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1645968280,
      "ems": null
    },
    {
      "latitude": 50.906891,
      "longitude": 6.893698,
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
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1645968283,
      "ems": null
    },
    {
      "latitude": 50.905609,
      "longitude": 6.894366,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 163,
      "squawk": "7742",
      "timestamp": 1645968286,
      "ems": null
    },
    {
      "latitude": 50.904739,
      "longitude": 6.894663,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1645968289,
      "ems": null
    },
    {
      "latitude": 50.903244,
      "longitude": 6.895294,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1645968292,
      "ems": null
    },
    {
      "latitude": 50.901939,
      "longitude": 6.895828,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1645968295,
      "ems": null
    },
    {
      "latitude": 50.900986,
      "longitude": 6.89637,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1645968298,
      "ems": null
    },
    {
      "latitude": 50.89975,
      "longitude": 6.897038,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1645968301,
      "ems": null
    },
    {
      "latitude": 50.898605,
      "longitude": 6.897707,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 159,
      "squawk": "7742",
      "timestamp": 1645968304,
      "ems": null
    },
    {
      "latitude": 50.897415,
      "longitude": 6.898449,
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
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1645968307,
      "ems": null
    },
    {
      "latitude": 50.89542,
      "longitude": 6.899948,
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
      "heading": 152,
      "squawk": "7742",
      "timestamp": 1645968313,
      "ems": null
    },
    {
      "latitude": 50.894306,
      "longitude": 6.90094,
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
      "heading": 152,
      "squawk": "7742",
      "timestamp": 1645968316,
      "ems": null
    },
    {
      "latitude": 50.89328,
      "longitude": 6.901779,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 152,
      "squawk": "7742",
      "timestamp": 1645968319,
      "ems": null
    },
    {
      "latitude": 50.892334,
      "longitude": 6.90268,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1645968322,
      "ems": null
    },
    {
      "latitude": 50.891418,
      "longitude": 6.903571,
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
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1645968325,
      "ems": null
    },
    {
      "latitude": 50.890549,
      "longitude": 6.904536,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 145,
      "squawk": "7742",
      "timestamp": 1645968328,
      "ems": null
    },
    {
      "latitude": 50.889603,
      "longitude": 6.905518,
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
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1645968331,
      "ems": null
    },
    {
      "latitude": 50.888672,
      "longitude": 6.906433,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1645968334,
      "ems": null
    },
    {
      "latitude": 50.887619,
      "longitude": 6.907431,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1645968337,
      "ems": null
    },
    {
      "latitude": 50.885788,
      "longitude": 6.90899,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1645968343,
      "ems": null
    },
    {
      "latitude": 50.883736,
      "longitude": 6.910553,
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
      "heading": 154,
      "squawk": "7742",
      "timestamp": 1645968349,
      "ems": null
    },
    {
      "latitude": 50.882584,
      "longitude": 6.911366,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 154,
      "squawk": "7742",
      "timestamp": 1645968352,
      "ems": null
    },
    {
      "latitude": 50.881687,
      "longitude": 6.912003,
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
      "heading": 155,
      "squawk": "7742",
      "timestamp": 1645968355,
      "ems": null
    },
    {
      "latitude": 50.880432,
      "longitude": 6.91285,
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
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1645968358,
      "ems": null
    },
    {
      "latitude": 50.879929,
      "longitude": 6.913221,
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
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1645968360,
      "ems": null
    },
    {
      "latitude": 50.878647,
      "longitude": 6.914112,
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
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1645968364,
      "ems": null
    },
    {
      "latitude": 50.877502,
      "longitude": 6.914855,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1645968367,
      "ems": null
    },
    {
      "latitude": 50.875214,
      "longitude": 6.916562,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1645968373,
      "ems": null
    },
    {
      "latitude": 50.87331,
      "longitude": 6.91803,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 155,
      "squawk": "7742",
      "timestamp": 1645968378,
      "ems": null
    },
    {
      "latitude": 50.87196,
      "longitude": 6.919022,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 154,
      "squawk": "7742",
      "timestamp": 1645968386,
      "ems": null
    },
    {
      "latitude": 50.867981,
      "longitude": 6.92198,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 155,
      "squawk": "7742",
      "timestamp": 1645968394,
      "ems": null
    },
    {
      "latitude": 50.866379,
      "longitude": 6.923168,
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
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1645968402,
      "ems": null
    },
    {
      "latitude": 50.861996,
      "longitude": 6.92627,
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
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1645968410,
      "ems": null
    },
    {
      "latitude": 50.859856,
      "longitude": 6.927719,
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
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1645968416,
      "ems": null
    },
    {
      "latitude": 50.857864,
      "longitude": 6.929033,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1645968421,
      "ems": null
    },
    {
      "latitude": 50.856689,
      "longitude": 6.929703,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 159,
      "squawk": "7742",
      "timestamp": 1645968425,
      "ems": null
    },
    {
      "latitude": 50.85548,
      "longitude": 6.930466,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 159,
      "squawk": "7742",
      "timestamp": 1645968428,
      "ems": null
    },
    {
      "latitude": 50.85334,
      "longitude": 6.931839,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1645968434,
      "ems": null
    },
    {
      "latitude": 50.851318,
      "longitude": 6.933189,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 155,
      "squawk": "7742",
      "timestamp": 1645968440,
      "ems": null
    },
    {
      "latitude": 50.849213,
      "longitude": 6.934897,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 152,
      "squawk": "7742",
      "timestamp": 1645968446,
      "ems": null
    },
    {
      "latitude": 50.847332,
      "longitude": 6.93634,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 154,
      "squawk": "7742",
      "timestamp": 1645968452,
      "ems": null
    },
    {
      "latitude": 50.845322,
      "longitude": 6.937792,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 155,
      "squawk": "7742",
      "timestamp": 1645968458,
      "ems": null
    },
    {
      "latitude": 50.843517,
      "longitude": 6.939163,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1645968464,
      "ems": null
    },
    {
      "latitude": 50.84277,
      "longitude": 6.939697,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1645968466,
      "ems": null
    },
    {
      "latitude": 50.840836,
      "longitude": 6.941504,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1645968473,
      "ems": null
    },
    {
      "latitude": 50.839874,
      "longitude": 6.942394,
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
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1645968476,
      "ems": null
    },
    {
      "latitude": 50.838909,
      "longitude": 6.943283,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 150,
      "squawk": "7742",
      "timestamp": 1645968479,
      "ems": null
    },
    {
      "latitude": 50.837906,
      "longitude": 6.94425,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1645968482,
      "ems": null
    },
    {
      "latitude": 50.836945,
      "longitude": 6.945067,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 150,
      "squawk": "7742",
      "timestamp": 1645968485,
      "ems": null
    },
    {
      "latitude": 50.834793,
      "longitude": 6.946922,
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
      "heading": 152,
      "squawk": "7742",
      "timestamp": 1645968491,
      "ems": null
    },
    {
      "latitude": 50.83287,
      "longitude": 6.948555,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1645968497,
      "ems": null
    },
    {
      "latitude": 50.830994,
      "longitude": 6.95056,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 144,
      "squawk": "7742",
      "timestamp": 1645968503,
      "ems": null
    },
    {
      "latitude": 50.830032,
      "longitude": 6.951747,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1645968506,
      "ems": null
    },
    {
      "latitude": 50.8293,
      "longitude": 6.952713,
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
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1645968509,
      "ems": null
    },
    {
      "latitude": 50.828476,
      "longitude": 6.9539,
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
      "heading": 137,
      "squawk": "7742",
      "timestamp": 1645968512,
      "ems": null
    },
    {
      "latitude": 50.827641,
      "longitude": 6.955109,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 137,
      "squawk": "7742",
      "timestamp": 1645968515,
      "ems": null
    },
    {
      "latitude": 50.82671,
      "longitude": 6.956482,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 137,
      "squawk": "7742",
      "timestamp": 1645968518,
      "ems": null
    },
    {
      "latitude": 50.82605,
      "longitude": 6.957463,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1645968521,
      "ems": null
    },
    {
      "latitude": 50.825081,
      "longitude": 6.958694,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1645968524,
      "ems": null
    },
    {
      "latitude": 50.823303,
      "longitude": 6.960878,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1645968530,
      "ems": null
    },
    {
      "latitude": 50.821701,
      "longitude": 6.962883,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1645968536,
      "ems": null
    },
    {
      "latitude": 50.820751,
      "longitude": 6.964035,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 144,
      "squawk": "7742",
      "timestamp": 1645968539,
      "ems": null
    },
    {
      "latitude": 50.81982,
      "longitude": 6.965027,
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
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1645968542,
      "ems": null
    },
    {
      "latitude": 50.818863,
      "longitude": 6.966,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1645968545,
      "ems": null
    },
    {
      "latitude": 50.817913,
      "longitude": 6.966934,
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
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1645968548,
      "ems": null
    },
    {
      "latitude": 50.817078,
      "longitude": 6.967708,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1645968551,
      "ems": null
    },
    {
      "latitude": 50.816116,
      "longitude": 6.968598,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1645968554,
      "ems": null
    },
    {
      "latitude": 50.815212,
      "longitude": 6.969452,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1645968557,
      "ems": null
    },
    {
      "latitude": 50.814285,
      "longitude": 6.97038,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1645968560,
      "ems": null
    },
    {
      "latitude": 50.813351,
      "longitude": 6.971359,
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
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1645968563,
      "ems": null
    },
    {
      "latitude": 50.811489,
      "longitude": 6.97319,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1645968569,
      "ems": null
    },
    {
      "latitude": 50.809673,
      "longitude": 6.975021,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1645968575,
      "ems": null
    },
    {
      "latitude": 50.807625,
      "longitude": 6.977081,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1645968581,
      "ems": null
    },
    {
      "latitude": 50.805763,
      "longitude": 6.979065,
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
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1645968587,
      "ems": null
    },
    {
      "latitude": 50.804039,
      "longitude": 6.980896,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 145,
      "squawk": "7742",
      "timestamp": 1645968593,
      "ems": null
    },
    {
      "latitude": 50.802177,
      "longitude": 6.982803,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1645968599,
      "ems": null
    },
    {
      "latitude": 50.800278,
      "longitude": 6.984781,
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
      "heading": 145,
      "squawk": "7742",
      "timestamp": 1645968605,
      "ems": null
    },
    {
      "latitude": 50.799408,
      "longitude": 6.98582,
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
      "heading": 142,
      "squawk": "7742",
      "timestamp": 1645968608,
      "ems": null
    },
    {
      "latitude": 50.798492,
      "longitude": 6.986859,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1645968611,
      "ems": null
    },
    {
      "latitude": 50.797668,
      "longitude": 6.987898,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1645968614,
      "ems": null
    },
    {
      "latitude": 50.795895,
      "longitude": 6.990128,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 142,
      "squawk": "7742",
      "timestamp": 1645968620,
      "ems": null
    },
    {
      "latitude": 50.794281,
      "longitude": 6.991982,
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
      "heading": 142,
      "squawk": "7742",
      "timestamp": 1645968626,
      "ems": null
    },
    {
      "latitude": 50.793182,
      "longitude": 6.993318,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 142,
      "squawk": "7742",
      "timestamp": 1645968629,
      "ems": null
    },
    {
      "latitude": 50.792313,
      "longitude": 6.994357,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 142,
      "squawk": "7742",
      "timestamp": 1645968632,
      "ems": null
    },
    {
      "latitude": 50.790527,
      "longitude": 6.996658,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1645968638,
      "ems": null
    },
    {
      "latitude": 50.788864,
      "longitude": 6.999054,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 139,
      "squawk": "7742",
      "timestamp": 1645968644,
      "ems": null
    },
    {
      "latitude": 50.787003,
      "longitude": 7.001483,
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
      "heading": 140,
      "squawk": "7742",
      "timestamp": 1645968650,
      "ems": null
    },
    {
      "latitude": 50.785263,
      "longitude": 7.003636,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1645968656,
      "ems": null
    },
    {
      "latitude": 50.783386,
      "longitude": 7.005863,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 145,
      "squawk": "7742",
      "timestamp": 1645968662,
      "ems": null
    },
    {
      "latitude": 50.782394,
      "longitude": 7.006912,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 145,
      "squawk": "7742",
      "timestamp": 1645968665,
      "ems": null
    },
    {
      "latitude": 50.781509,
      "longitude": 7.007867,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1645968668,
      "ems": null
    },
    {
      "latitude": 50.780457,
      "longitude": 7.008832,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1645968671,
      "ems": null
    },
    {
      "latitude": 50.779495,
      "longitude": 7.009723,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 150,
      "squawk": "7742",
      "timestamp": 1645968674,
      "ems": null
    },
    {
      "latitude": 50.778622,
      "longitude": 7.010498,
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
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1645968677,
      "ems": null
    },
    {
      "latitude": 50.777573,
      "longitude": 7.011504,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 150,
      "squawk": "7742",
      "timestamp": 1645968680,
      "ems": null
    },
    {
      "latitude": 50.776619,
      "longitude": 7.012329,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1645968683,
      "ems": null
    },
    {
      "latitude": 50.775742,
      "longitude": 7.013212,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1645968686,
      "ems": null
    },
    {
      "latitude": 50.774853,
      "longitude": 7.014008,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 150,
      "squawk": "7742",
      "timestamp": 1645968689,
      "ems": null
    },
    {
      "latitude": 50.773174,
      "longitude": 7.01561,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1645968695,
      "ems": null
    },
    {
      "latitude": 50.771267,
      "longitude": 7.017441,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1645968701,
      "ems": null
    },
    {
      "latitude": 50.769516,
      "longitude": 7.019225,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1645968707,
      "ems": null
    },
    {
      "latitude": 50.767685,
      "longitude": 7.02108,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1645968713,
      "ems": null
    },
    {
      "latitude": 50.765945,
      "longitude": 7.022936,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1645968719,
      "ems": null
    },
    {
      "latitude": 50.764145,
      "longitude": 7.024765,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 145,
      "squawk": "7742",
      "timestamp": 1645968725,
      "ems": null
    },
    {
      "latitude": 50.762421,
      "longitude": 7.026648,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1645968731,
      "ems": null
    },
    {
      "latitude": 50.760422,
      "longitude": 7.028809,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 144,
      "squawk": "7742",
      "timestamp": 1645968737,
      "ems": null
    },
    {
      "latitude": 50.758606,
      "longitude": 7.030869,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 144,
      "squawk": "7742",
      "timestamp": 1645968743,
      "ems": null
    },
    {
      "latitude": 50.75679,
      "longitude": 7.032809,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 144,
      "squawk": "7742",
      "timestamp": 1645968749,
      "ems": null
    },
    {
      "latitude": 50.75502,
      "longitude": 7.034988,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 140,
      "squawk": "7742",
      "timestamp": 1645968755,
      "ems": null
    },
    {
      "latitude": 50.754135,
      "longitude": 7.036133,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1645968758,
      "ems": null
    },
    {
      "latitude": 50.75325,
      "longitude": 7.03743,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 137,
      "squawk": "7742",
      "timestamp": 1645968761,
      "ems": null
    },
    {
      "latitude": 50.752415,
      "longitude": 7.038651,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 135,
      "squawk": "7742",
      "timestamp": 1645968765,
      "ems": null
    },
    {
      "latitude": 50.751667,
      "longitude": 7.039948,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 131,
      "squawk": "7742",
      "timestamp": 1645968767,
      "ems": null
    },
    {
      "latitude": 50.750923,
      "longitude": 7.041321,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 129,
      "squawk": "7742",
      "timestamp": 1645968770,
      "ems": null
    },
    {
      "latitude": 50.750244,
      "longitude": 7.042682,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1645968773,
      "ems": null
    },
    {
      "latitude": 50.749603,
      "longitude": 7.044018,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1645968776,
      "ems": null
    },
    {
      "latitude": 50.748962,
      "longitude": 7.045503,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1645968779,
      "ems": null
    },
    {
      "latitude": 50.748318,
      "longitude": 7.046967,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1645968782,
      "ems": null
    },
    {
      "latitude": 50.747635,
      "longitude": 7.048472,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "squawk": "7000",
      "timestamp": 1645968785,
      "ems": null
    },
    {
      "latitude": 50.746948,
      "longitude": 7.050031,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1645968788,
      "ems": null
    },
    {
      "latitude": 50.746269,
      "longitude": 7.051773,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1645968792,
      "ems": null
    },
    {
      "latitude": 50.745758,
      "longitude": 7.053074,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1645968794,
      "ems": null
    },
    {
      "latitude": 50.745117,
      "longitude": 7.054856,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1645968798,
      "ems": null
    },
    {
      "latitude": 50.744476,
      "longitude": 7.056563,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1645968801,
      "ems": null
    },
    {
      "latitude": 50.744034,
      "longitude": 7.057877,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1645968803,
      "ems": null
    },
    {
      "latitude": 50.743469,
      "longitude": 7.059384,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1645968807,
      "ems": null
    },
    {
      "latitude": 50.742916,
      "longitude": 7.061005,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1645968809,
      "ems": null
    },
    {
      "latitude": 50.742325,
      "longitude": 7.062873,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1645968813,
      "ems": null
    },
    {
      "latitude": 50.741867,
      "longitude": 7.064209,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1645968815,
      "ems": null
    },
    {
      "latitude": 50.741364,
      "longitude": 7.065694,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1645968818,
      "ems": null
    },
    {
      "latitude": 50.740963,
      "longitude": 7.067261,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1645968822,
      "ems": null
    },
    {
      "latitude": 50.740631,
      "longitude": 7.068886,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1645968825,
      "ems": null
    },
    {
      "latitude": 50.740448,
      "longitude": 7.070084,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1645968828,
      "ems": null
    },
    {
      "latitude": 50.740356,
      "longitude": 7.071609,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1645968831,
      "ems": null
    },
    {
      "latitude": 50.740311,
      "longitude": 7.073117,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1645968834,
      "ems": null
    },
    {
      "latitude": 50.740356,
      "longitude": 7.074824,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1645968837,
      "ems": null
    },
    {
      "latitude": 50.740494,
      "longitude": 7.076086,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1645968839,
      "ems": null
    },
    {
      "latitude": 50.740677,
      "longitude": 7.077571,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1645968842,
      "ems": null
    },
    {
      "latitude": 50.740952,
      "longitude": 7.079278,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1645968846,
      "ems": null
    },
    {
      "latitude": 50.741146,
      "longitude": 7.080612,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1645968849,
      "ems": null
    },
    {
      "latitude": 50.741428,
      "longitude": 7.082291,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1645968851,
      "ems": null
    },
    {
      "latitude": 50.741684,
      "longitude": 7.083955,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1645968855,
      "ems": null
    },
    {
      "latitude": 50.741894,
      "longitude": 7.085495,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1645968857,
      "ems": null
    },
    {
      "latitude": 50.742172,
      "longitude": 7.087021,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1645968861,
      "ems": null
    },
    {
      "latitude": 50.742508,
      "longitude": 7.088706,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1645968864,
      "ems": null
    },
    {
      "latitude": 50.742779,
      "longitude": 7.090378,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1645968866,
      "ems": null
    },
    {
      "latitude": 50.743057,
      "longitude": 7.09212,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1645968869,
      "ems": null
    },
    {
      "latitude": 50.743614,
      "longitude": 7.095718,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1645968876,
      "ems": null
    },
    {
      "latitude": 50.74408,
      "longitude": 7.098999,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1645968882,
      "ems": null
    },
    {
      "latitude": 50.744175,
      "longitude": 7.100754,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1645968885,
      "ems": null
    },
    {
      "latitude": 50.743988,
      "longitude": 7.102585,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1645968888,
      "ems": null
    },
    {
      "latitude": 50.74371,
      "longitude": 7.103958,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1645968891,
      "ems": null
    },
    {
      "latitude": 50.74329,
      "longitude": 7.10556,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1645968894,
      "ems": null
    },
    {
      "latitude": 50.74292,
      "longitude": 7.106966,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1645968897,
      "ems": null
    },
    {
      "latitude": 50.742508,
      "longitude": 7.108377,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1645968899,
      "ems": null
    },
    {
      "latitude": 50.742142,
      "longitude": 7.109713,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1645968902,
      "ems": null
    },
    {
      "latitude": 50.741707,
      "longitude": 7.11113,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1645968905,
      "ems": null
    },
    {
      "latitude": 50.741241,
      "longitude": 7.112656,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1645968909,
      "ems": null
    },
    {
      "latitude": 50.740906,
      "longitude": 7.113945,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1645968912,
      "ems": null
    },
    {
      "latitude": 50.740631,
      "longitude": 7.115355,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1645968915,
      "ems": null
    },
    {
      "latitude": 50.74017,
      "longitude": 7.11853,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1645968921,
      "ems": null
    },
    {
      "latitude": 50.740036,
      "longitude": 7.120031,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1645968923,
      "ems": null
    },
    {
      "latitude": 50.739891,
      "longitude": 7.121658,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1645968927,
      "ems": null
    },
    {
      "latitude": 50.739761,
      "longitude": 7.123075,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1645968930,
      "ems": null
    },
    {
      "latitude": 50.73967,
      "longitude": 7.124485,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1645968933,
      "ems": null
    },
    {
      "latitude": 50.739613,
      "longitude": 7.126083,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1645968936,
      "ems": null
    },
    {
      "latitude": 50.739704,
      "longitude": 7.127609,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1645968939,
      "ems": null
    },
    {
      "latitude": 50.739845,
      "longitude": 7.128906,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1645968942,
      "ems": null
    },
    {
      "latitude": 50.740173,
      "longitude": 7.130795,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1645968945,
      "ems": null
    },
    {
      "latitude": 50.740543,
      "longitude": 7.132111,
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1645968948,
      "ems": null
    },
    {
      "latitude": 50.741043,
      "longitude": 7.133467,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1645968951,
      "ems": null
    },
    {
      "latitude": 50.741684,
      "longitude": 7.134878,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1645968954,
      "ems": null
    },
    {
      "latitude": 50.742218,
      "longitude": 7.136002,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1645968957,
      "ems": null
    },
    {
      "latitude": 50.743103,
      "longitude": 7.137699,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1645968960,
      "ems": null
    },
    {
      "latitude": 50.743835,
      "longitude": 7.139109,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1645968963,
      "ems": null
    },
    {
      "latitude": 50.744522,
      "longitude": 7.14052,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1645968966,
      "ems": null
    },
    {
      "latitude": 50.745243,
      "longitude": 7.141876,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1645968969,
      "ems": null
    },
    {
      "latitude": 50.745941,
      "longitude": 7.143097,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1645968972,
      "ems": null
    },
    {
      "latitude": 50.746765,
      "longitude": 7.144157,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1645968975,
      "ems": null
    },
    {
      "latitude": 50.747665,
      "longitude": 7.144775,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1645968978,
      "ems": null
    },
    {
      "latitude": 50.748688,
      "longitude": 7.145081,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1645968981,
      "ems": null
    },
    {
      "latitude": 50.749714,
      "longitude": 7.145081,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1645968984,
      "ems": null
    },
    {
      "latitude": 50.750793,
      "longitude": 7.144676,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1645968987,
      "ems": null
    },
    {
      "latitude": 50.751709,
      "longitude": 7.144157,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1645968990,
      "ems": null
    },
    {
      "latitude": 50.752716,
      "longitude": 7.143414,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1645968993,
      "ems": null
    },
    {
      "latitude": 50.75367,
      "longitude": 7.142639,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1645968996,
      "ems": null
    },
    {
      "latitude": 50.75473,
      "longitude": 7.141856,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1645968999,
      "ems": null
    },
    {
      "latitude": 50.755764,
      "longitude": 7.140961,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1645969002,
      "ems": null
    },
    {
      "latitude": 50.756836,
      "longitude": 7.140198,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1645969005,
      "ems": null
    },
    {
      "latitude": 50.757908,
      "longitude": 7.139435,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1645969008,
      "ems": null
    },
    {
      "latitude": 50.759026,
      "longitude": 7.138672,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1645969011,
      "ems": null
    },
    {
      "latitude": 50.760048,
      "longitude": 7.137909,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1645969014,
      "ems": null
    },
    {
      "latitude": 50.761139,
      "longitude": 7.137179,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1645969017,
      "ems": null
    },
    {
      "latitude": 50.763119,
      "longitude": 7.135849,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1645969023,
      "ems": null
    },
    {
      "latitude": 50.764145,
      "longitude": 7.135315,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1645969026,
      "ems": null
    },
    {
      "latitude": 50.765217,
      "longitude": 7.134857,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1645969029,
      "ems": null
    },
    {
      "latitude": 50.766266,
      "longitude": 7.134581,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1645969032,
      "ems": null
    },
    {
      "latitude": 50.767216,
      "longitude": 7.134476,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1645969035,
      "ems": null
    },
    {
      "latitude": 50.768234,
      "longitude": 7.134581,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1645969038,
      "ems": null
    },
    {
      "latitude": 50.76915,
      "longitude": 7.134729,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1645969041,
      "ems": null
    },
    {
      "latitude": 50.77002,
      "longitude": 7.1351,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1645969044,
      "ems": null
    },
    {
      "latitude": 50.770943,
      "longitude": 7.135773,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "timestamp": 1645969047,
      "ems": null
    },
    {
      "latitude": 50.771484,
      "longitude": 7.136363,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1645969050,
      "ems": null
    },
    {
      "latitude": 50.772263,
      "longitude": 7.137476,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1645969053,
      "ems": null
    },
    {
      "latitude": 50.772675,
      "longitude": 7.138218,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1645969055,
      "ems": null
    },
    {
      "latitude": 50.773178,
      "longitude": 7.139703,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1645969059,
      "ems": null
    },
    {
      "latitude": 50.77327,
      "longitude": 7.140808,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1645969062,
      "ems": null
    },
    {
      "latitude": 50.773224,
      "longitude": 7.142181,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1645969065,
      "ems": null
    },
    {
      "latitude": 50.773132,
      "longitude": 7.143266,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1645969068,
      "ems": null
    },
    {
      "latitude": 50.772991,
      "longitude": 7.144241,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1645969071,
      "ems": null
    },
    {
      "latitude": 50.772896,
      "longitude": 7.144928,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1645969073,
      "ems": null
    },
    {
      "latitude": 50.772583,
      "longitude": 7.146235,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1645969077,
      "ems": null
    },
    {
      "latitude": 50.772446,
      "longitude": 7.146977,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1645969079,
      "ems": null
    },
    {
      "latitude": 50.772198,
      "longitude": 7.148056,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1645969083,
      "ems": null
    },
    {
      "latitude": 50.77206,
      "longitude": 7.148666,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1645969085,
      "ems": null
    },
    {
      "latitude": 50.771759,
      "longitude": 7.150021,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "timestamp": 1645969089,
      "ems": null
    },
    {
      "latitude": 50.771576,
      "longitude": 7.150764,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1645969091,
      "ems": null
    }
  ],
};
