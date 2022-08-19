import { Flight } from "../../../types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220612EDKBEDKB",
    callsign: "DEFCZ",
    name: "Trip into belgium with Adriana",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 5, 12, 11, 25).getTime(),
    arrival: new Date(2022, 5, 12, 15, 35).getTime(),
    singleEnginePistonTime: 250,
    picTime: 250,
    dualTime: 0,
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
      "latitude": 50.759907,
      "longitude": 7.115784,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 243,
      "squawk": "0",
      "timestamp": 1655034008,
      "ems": null
    },
    {
      "latitude": 50.759125,
      "longitude": 7.113276,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 244,
      "squawk": "0",
      "timestamp": 1655034015,
      "ems": null
    },
    {
      "latitude": 50.758652,
      "longitude": 7.111664,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 247,
      "squawk": "0",
      "timestamp": 1655034018,
      "ems": null
    },
    {
      "latitude": 50.757797,
      "longitude": 7.108377,
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
      "heading": 250,
      "squawk": "0",
      "timestamp": 1655034024,
      "ems": null
    },
    {
      "latitude": 50.757614,
      "longitude": 7.107115,
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
      "heading": 250,
      "squawk": "0",
      "timestamp": 1655034027,
      "ems": null
    },
    {
      "latitude": 50.757488,
      "longitude": 7.105637,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 263,
      "squawk": "0",
      "timestamp": 1655034030,
      "ems": null
    },
    {
      "latitude": 50.757385,
      "longitude": 7.103552,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 265,
      "squawk": "0",
      "timestamp": 1655034033,
      "ems": null
    },
    {
      "latitude": 50.757339,
      "longitude": 7.102513,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 266,
      "squawk": "0",
      "timestamp": 1655034036,
      "ems": null
    },
    {
      "latitude": 50.757294,
      "longitude": 7.101325,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 268,
      "squawk": "0",
      "timestamp": 1655034039,
      "ems": null
    },
    {
      "latitude": 50.757294,
      "longitude": 7.09843,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 270,
      "squawk": "0",
      "timestamp": 1655034043,
      "ems": null
    },
    {
      "latitude": 50.757248,
      "longitude": 7.096129,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 268,
      "squawk": "0",
      "timestamp": 1655034047,
      "ems": null
    },
    {
      "latitude": 50.75721,
      "longitude": 7.094116,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 267,
      "squawk": "0",
      "timestamp": 1655034050,
      "ems": null
    },
    {
      "latitude": 50.75716,
      "longitude": 7.09259,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1655034053,
      "ems": null
    },
    {
      "latitude": 50.757114,
      "longitude": 7.090836,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1655034056,
      "ems": null
    },
    {
      "latitude": 50.756927,
      "longitude": 7.087402,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1655034062,
      "ems": null
    },
    {
      "latitude": 50.756836,
      "longitude": 7.084274,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1655034068,
      "ems": null
    },
    {
      "latitude": 50.756744,
      "longitude": 7.080994,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1655034074,
      "ems": null
    },
    {
      "latitude": 50.756695,
      "longitude": 7.077713,
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
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1655034080,
      "ems": null
    },
    {
      "latitude": 50.756699,
      "longitude": 7.075938,
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
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1655034083,
      "ems": null
    },
    {
      "latitude": 50.75679,
      "longitude": 7.074432,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1655034086,
      "ems": null
    },
    {
      "latitude": 50.756882,
      "longitude": 7.073265,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1655034089,
      "ems": null
    },
    {
      "latitude": 50.756977,
      "longitude": 7.071762,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1655034092,
      "ems": null
    },
    {
      "latitude": 50.757019,
      "longitude": 7.07089,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1655034095,
      "ems": null
    },
    {
      "latitude": 50.757156,
      "longitude": 7.068886,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1655034098,
      "ems": null
    },
    {
      "latitude": 50.757294,
      "longitude": 7.066881,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1655034102,
      "ems": null
    },
    {
      "latitude": 50.757393,
      "longitude": 7.065811,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1655034104,
      "ems": null
    },
    {
      "latitude": 50.757568,
      "longitude": 7.064061,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1655034107,
      "ems": null
    },
    {
      "latitude": 50.757721,
      "longitude": 7.062531,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1655034110,
      "ems": null
    },
    {
      "latitude": 50.757858,
      "longitude": 7.061005,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1655034113,
      "ems": null
    },
    {
      "latitude": 50.758118,
      "longitude": 7.057899,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1655034119,
      "ems": null
    },
    {
      "latitude": 50.758278,
      "longitude": 7.054367,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1655034125,
      "ems": null
    },
    {
      "latitude": 50.758511,
      "longitude": 7.051163,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1655034131,
      "ems": null
    },
    {
      "latitude": 50.75853,
      "longitude": 7.049734,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1655034134,
      "ems": null
    },
    {
      "latitude": 50.758621,
      "longitude": 7.047655,
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1655034138,
      "ems": null
    },
    {
      "latitude": 50.758667,
      "longitude": 7.046022,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1655034140,
      "ems": null
    },
    {
      "latitude": 50.758698,
      "longitude": 7.04422,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1655034143,
      "ems": null
    },
    {
      "latitude": 50.758743,
      "longitude": 7.042465,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1655034147,
      "ems": null
    },
    {
      "latitude": 50.758896,
      "longitude": 7.039193,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1655034152,
      "ems": null
    },
    {
      "latitude": 50.759071,
      "longitude": 7.035599,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1655034159,
      "ems": null
    },
    {
      "latitude": 50.759163,
      "longitude": 7.032623,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1655034164,
      "ems": null
    },
    {
      "latitude": 50.759163,
      "longitude": 7.029343,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1655034170,
      "ems": null
    },
    {
      "latitude": 50.759258,
      "longitude": 7.025986,
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1655034176,
      "ems": null
    },
    {
      "latitude": 50.759441,
      "longitude": 7.022705,
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1655034183,
      "ems": null
    },
    {
      "latitude": 50.759491,
      "longitude": 7.021303,
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034186,
      "ems": null
    },
    {
      "latitude": 50.759491,
      "longitude": 7.018037,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1655034192,
      "ems": null
    },
    {
      "latitude": 50.759441,
      "longitude": 7.014389,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034198,
      "ems": null
    },
    {
      "latitude": 50.759399,
      "longitude": 7.011208,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655034204,
      "ems": null
    },
    {
      "latitude": 50.759308,
      "longitude": 7.009574,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1655034207,
      "ems": null
    },
    {
      "latitude": 50.759163,
      "longitude": 7.007904,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1655034210,
      "ems": null
    },
    {
      "latitude": 50.759033,
      "longitude": 7.006382,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655034213,
      "ems": null
    },
    {
      "latitude": 50.758942,
      "longitude": 7.004823,
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
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655034216,
      "ems": null
    },
    {
      "latitude": 50.75885,
      "longitude": 7.003191,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655034219,
      "ems": null
    },
    {
      "latitude": 50.758713,
      "longitude": 7.001631,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655034222,
      "ems": null
    },
    {
      "latitude": 50.758621,
      "longitude": 6.998365,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1655034228,
      "ems": null
    },
    {
      "latitude": 50.758621,
      "longitude": 6.994876,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034234,
      "ems": null
    },
    {
      "latitude": 50.758667,
      "longitude": 6.993095,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655034237,
      "ems": null
    },
    {
      "latitude": 50.758743,
      "longitude": 6.991348,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1655034240,
      "ems": null
    },
    {
      "latitude": 50.758804,
      "longitude": 6.989606,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1655034243,
      "ems": null
    },
    {
      "latitude": 50.75885,
      "longitude": 6.988121,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655034246,
      "ems": null
    },
    {
      "latitude": 50.758884,
      "longitude": 6.986618,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655034249,
      "ems": null
    },
    {
      "latitude": 50.758942,
      "longitude": 6.984632,
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
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1655034252,
      "ems": null
    },
    {
      "latitude": 50.758987,
      "longitude": 6.982777,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1655034255,
      "ems": null
    },
    {
      "latitude": 50.759117,
      "longitude": 6.980972,
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
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1655034257,
      "ems": null
    },
    {
      "latitude": 50.759033,
      "longitude": 6.977283,
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1655034264,
      "ems": null
    },
    {
      "latitude": 50.758976,
      "longitude": 6.975555,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1655034267,
      "ems": null
    },
    {
      "latitude": 50.75893,
      "longitude": 6.973801,
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
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655034270,
      "ems": null
    },
    {
      "latitude": 50.759026,
      "longitude": 6.970367,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655034276,
      "ems": null
    },
    {
      "latitude": 50.759071,
      "longitude": 6.96701,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1655034282,
      "ems": null
    },
    {
      "latitude": 50.759171,
      "longitude": 6.963773,
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
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1655034287,
      "ems": null
    },
    {
      "latitude": 50.759262,
      "longitude": 6.961843,
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
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1655034291,
      "ems": null
    },
    {
      "latitude": 50.75935,
      "longitude": 6.96022,
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
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1655034294,
      "ems": null
    },
    {
      "latitude": 50.759441,
      "longitude": 6.958542,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 276,
      "squawk": "4451",
      "timestamp": 1655034297,
      "ems": null
    },
    {
      "latitude": 50.759583,
      "longitude": 6.956944,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 278,
      "squawk": "4451",
      "timestamp": 1655034300,
      "ems": null
    },
    {
      "latitude": 50.759811,
      "longitude": 6.955236,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 282,
      "squawk": "4451",
      "timestamp": 1655034303,
      "ems": null
    },
    {
      "latitude": 50.76004,
      "longitude": 6.953529,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1655034306,
      "ems": null
    },
    {
      "latitude": 50.760269,
      "longitude": 6.950189,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1655034312,
      "ems": null
    },
    {
      "latitude": 50.760468,
      "longitude": 6.946793,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1655034318,
      "ems": null
    },
    {
      "latitude": 50.76059,
      "longitude": 6.943359,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1655034324,
      "ems": null
    },
    {
      "latitude": 50.760635,
      "longitude": 6.941429,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034327,
      "ems": null
    },
    {
      "latitude": 50.760635,
      "longitude": 6.939648,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1655034330,
      "ems": null
    },
    {
      "latitude": 50.760681,
      "longitude": 6.938015,
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034333,
      "ems": null
    },
    {
      "latitude": 50.760635,
      "longitude": 6.936159,
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
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1655034336,
      "ems": null
    },
    {
      "latitude": 50.76059,
      "longitude": 6.933932,
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
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1655034339,
      "ems": null
    },
    {
      "latitude": 50.76059,
      "longitude": 6.932076,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1655034342,
      "ems": null
    },
    {
      "latitude": 50.760544,
      "longitude": 6.93022,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034345,
      "ems": null
    },
    {
      "latitude": 50.760605,
      "longitude": 6.926651,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034351,
      "ems": null
    },
    {
      "latitude": 50.760654,
      "longitude": 6.92276,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1655034357,
      "ems": null
    },
    {
      "latitude": 50.760773,
      "longitude": 6.919234,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1655034362,
      "ems": null
    },
    {
      "latitude": 50.760864,
      "longitude": 6.91723,
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
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1655034366,
      "ems": null
    },
    {
      "latitude": 50.760933,
      "longitude": 6.915512,
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
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1655034369,
      "ems": null
    },
    {
      "latitude": 50.761093,
      "longitude": 6.911811,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655034375,
      "ems": null
    },
    {
      "latitude": 50.76112,
      "longitude": 6.908417,
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034381,
      "ems": null
    },
    {
      "latitude": 50.761166,
      "longitude": 6.904678,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655034387,
      "ems": null
    },
    {
      "latitude": 50.761257,
      "longitude": 6.90155,
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034393,
      "ems": null
    },
    {
      "latitude": 50.761307,
      "longitude": 6.898422,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655034399,
      "ems": null
    },
    {
      "latitude": 50.761414,
      "longitude": 6.894663,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1655034405,
      "ems": null
    },
    {
      "latitude": 50.761398,
      "longitude": 6.891632,
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
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655034411,
      "ems": null
    },
    {
      "latitude": 50.761398,
      "longitude": 6.88797,
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034417,
      "ems": null
    },
    {
      "latitude": 50.761459,
      "longitude": 6.884716,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034423,
      "ems": null
    },
    {
      "latitude": 50.761459,
      "longitude": 6.88145,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034429,
      "ems": null
    },
    {
      "latitude": 50.761444,
      "longitude": 6.879959,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1655034432,
      "ems": null
    },
    {
      "latitude": 50.761398,
      "longitude": 6.876907,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1655034438,
      "ems": null
    },
    {
      "latitude": 50.761368,
      "longitude": 6.873284,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1655034444,
      "ems": null
    },
    {
      "latitude": 50.761353,
      "longitude": 6.870651,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1655034450,
      "ems": null
    },
    {
      "latitude": 50.761276,
      "longitude": 6.866752,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655034456,
      "ems": null
    },
    {
      "latitude": 50.761257,
      "longitude": 6.863174,
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034462,
      "ems": null
    },
    {
      "latitude": 50.76123,
      "longitude": 6.859923,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034468,
      "ems": null
    },
    {
      "latitude": 50.761276,
      "longitude": 6.856805,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034474,
      "ems": null
    },
    {
      "latitude": 50.761257,
      "longitude": 6.853409,
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034480,
      "ems": null
    },
    {
      "latitude": 50.76123,
      "longitude": 6.849976,
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
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655034486,
      "ems": null
    },
    {
      "latitude": 50.761185,
      "longitude": 6.846413,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655034492,
      "ems": null
    },
    {
      "latitude": 50.76112,
      "longitude": 6.842957,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 265,
      "squawk": "4451",
      "timestamp": 1655034498,
      "ems": null
    },
    {
      "latitude": 50.761002,
      "longitude": 6.841142,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655034501,
      "ems": null
    },
    {
      "latitude": 50.76091,
      "longitude": 6.839435,
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655034504,
      "ems": null
    },
    {
      "latitude": 50.760773,
      "longitude": 6.83602,
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
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655034510,
      "ems": null
    },
    {
      "latitude": 50.760681,
      "longitude": 6.832605,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655034516,
      "ems": null
    },
    {
      "latitude": 50.760498,
      "longitude": 6.831047,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655034519,
      "ems": null
    },
    {
      "latitude": 50.760269,
      "longitude": 6.829265,
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
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655034522,
      "ems": null
    },
    {
      "latitude": 50.759995,
      "longitude": 6.827409,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655034525,
      "ems": null
    },
    {
      "latitude": 50.759628,
      "longitude": 6.825562,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655034528,
      "ems": null
    },
    {
      "latitude": 50.759396,
      "longitude": 6.823883,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655034531,
      "ems": null
    },
    {
      "latitude": 50.759304,
      "longitude": 6.820374,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1655034537,
      "ems": null
    },
    {
      "latitude": 50.75935,
      "longitude": 6.818619,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655034540,
      "ems": null
    },
    {
      "latitude": 50.759396,
      "longitude": 6.816864,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655034543,
      "ems": null
    },
    {
      "latitude": 50.759396,
      "longitude": 6.815186,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034546,
      "ems": null
    },
    {
      "latitude": 50.759399,
      "longitude": 6.813379,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655034549,
      "ems": null
    },
    {
      "latitude": 50.759354,
      "longitude": 6.811449,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655034552,
      "ems": null
    },
    {
      "latitude": 50.759354,
      "longitude": 6.809593,
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034555,
      "ems": null
    },
    {
      "latitude": 50.759399,
      "longitude": 6.807441,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034558,
      "ems": null
    },
    {
      "latitude": 50.759396,
      "longitude": 6.80603,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655034561,
      "ems": null
    },
    {
      "latitude": 50.759308,
      "longitude": 6.80217,
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
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655034567,
      "ems": null
    },
    {
      "latitude": 50.75935,
      "longitude": 6.798172,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1655034573,
      "ems": null
    },
    {
      "latitude": 50.759445,
      "longitude": 6.794747,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655034579,
      "ems": null
    },
    {
      "latitude": 50.759583,
      "longitude": 6.791184,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1655034585,
      "ems": null
    },
    {
      "latitude": 50.759769,
      "longitude": 6.787491,
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
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1655034591,
      "ems": null
    },
    {
      "latitude": 50.759861,
      "longitude": 6.785965,
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
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1655034594,
      "ems": null
    },
    {
      "latitude": 50.760048,
      "longitude": 6.78215,
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
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1655034600,
      "ems": null
    },
    {
      "latitude": 50.760269,
      "longitude": 6.778564,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1655034606,
      "ems": null
    },
    {
      "latitude": 50.760559,
      "longitude": 6.775131,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 277,
      "squawk": "4451",
      "timestamp": 1655034612,
      "ems": null
    },
    {
      "latitude": 50.760727,
      "longitude": 6.771735,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1655034618,
      "ems": null
    },
    {
      "latitude": 50.761074,
      "longitude": 6.768494,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1655034624,
      "ems": null
    },
    {
      "latitude": 50.761257,
      "longitude": 6.766891,
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
      "heading": 279,
      "squawk": "4451",
      "timestamp": 1655034627,
      "ems": null
    },
    {
      "latitude": 50.761444,
      "longitude": 6.764221,
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
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1655034633,
      "ems": null
    },
    {
      "latitude": 50.761688,
      "longitude": 6.760229,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1655034639,
      "ems": null
    },
    {
      "latitude": 50.761864,
      "longitude": 6.756592,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655034645,
      "ems": null
    },
    {
      "latitude": 50.761917,
      "longitude": 6.754736,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655034648,
      "ems": null
    },
    {
      "latitude": 50.761955,
      "longitude": 6.753082,
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034651,
      "ems": null
    },
    {
      "latitude": 50.761917,
      "longitude": 6.751247,
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034654,
      "ems": null
    },
    {
      "latitude": 50.761963,
      "longitude": 6.74954,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1655034657,
      "ems": null
    },
    {
      "latitude": 50.762005,
      "longitude": 6.74675,
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
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1655034663,
      "ems": null
    },
    {
      "latitude": 50.762283,
      "longitude": 6.743156,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1655034669,
      "ems": null
    },
    {
      "latitude": 50.762466,
      "longitude": 6.74182,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1655034672,
      "ems": null
    },
    {
      "latitude": 50.762608,
      "longitude": 6.740036,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 278,
      "squawk": "4451",
      "timestamp": 1655034675,
      "ems": null
    },
    {
      "latitude": 50.762749,
      "longitude": 6.738586,
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
      "heading": 277,
      "squawk": "4451",
      "timestamp": 1655034678,
      "ems": null
    },
    {
      "latitude": 50.762878,
      "longitude": 6.736995,
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
      "heading": 277,
      "squawk": "4451",
      "timestamp": 1655034681,
      "ems": null
    },
    {
      "latitude": 50.762936,
      "longitude": 6.733932,
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034687,
      "ems": null
    },
    {
      "latitude": 50.76297,
      "longitude": 6.730759,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655034693,
      "ems": null
    },
    {
      "latitude": 50.762924,
      "longitude": 6.7292,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1655034696,
      "ems": null
    },
    {
      "latitude": 50.76284,
      "longitude": 6.728134,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655034699,
      "ems": null
    },
    {
      "latitude": 50.762787,
      "longitude": 6.72675,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655034702,
      "ems": null
    },
    {
      "latitude": 50.762695,
      "longitude": 6.724969,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655034705,
      "ems": null
    },
    {
      "latitude": 50.762558,
      "longitude": 6.723336,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655034708,
      "ems": null
    },
    {
      "latitude": 50.76247,
      "longitude": 6.722107,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655034711,
      "ems": null
    },
    {
      "latitude": 50.762329,
      "longitude": 6.720657,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655034714,
      "ems": null
    },
    {
      "latitude": 50.762238,
      "longitude": 6.717606,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655034720,
      "ems": null
    },
    {
      "latitude": 50.762283,
      "longitude": 6.714172,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034726,
      "ems": null
    },
    {
      "latitude": 50.762283,
      "longitude": 6.712498,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1655034729,
      "ems": null
    },
    {
      "latitude": 50.762329,
      "longitude": 6.710739,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655034732,
      "ems": null
    },
    {
      "latitude": 50.762375,
      "longitude": 6.709084,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1655034735,
      "ems": null
    },
    {
      "latitude": 50.762512,
      "longitude": 6.707153,
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
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1655034738,
      "ems": null
    },
    {
      "latitude": 50.762604,
      "longitude": 6.705446,
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
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1655034741,
      "ems": null
    },
    {
      "latitude": 50.762695,
      "longitude": 6.704036,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1655034744,
      "ems": null
    },
    {
      "latitude": 50.76284,
      "longitude": 6.700058,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655034750,
      "ems": null
    },
    {
      "latitude": 50.76297,
      "longitude": 6.696612,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1655034756,
      "ems": null
    },
    {
      "latitude": 50.763153,
      "longitude": 6.692084,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1655034764,
      "ems": null
    },
    {
      "latitude": 50.763401,
      "longitude": 6.687012,
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
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1655034772,
      "ems": null
    },
    {
      "latitude": 50.763428,
      "longitude": 6.683325,
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655034778,
      "ems": null
    },
    {
      "latitude": 50.763474,
      "longitude": 6.679613,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1655034784,
      "ems": null
    },
    {
      "latitude": 50.763493,
      "longitude": 6.675568,
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
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655034790,
      "ems": null
    },
    {
      "latitude": 50.763447,
      "longitude": 6.673584,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655034793,
      "ems": null
    },
    {
      "latitude": 50.763351,
      "longitude": 6.671829,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655034796,
      "ems": null
    },
    {
      "latitude": 50.763199,
      "longitude": 6.669963,
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655034799,
      "ems": null
    },
    {
      "latitude": 50.763016,
      "longitude": 6.668033,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655034802,
      "ems": null
    },
    {
      "latitude": 50.762703,
      "longitude": 6.666107,
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
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1655034805,
      "ems": null
    },
    {
      "latitude": 50.762421,
      "longitude": 6.664124,
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
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655034808,
      "ems": null
    },
    {
      "latitude": 50.762051,
      "longitude": 6.662216,
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
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655034811,
      "ems": null
    },
    {
      "latitude": 50.76178,
      "longitude": 6.660313,
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
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1655034814,
      "ems": null
    },
    {
      "latitude": 50.76149,
      "longitude": 6.658401,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1655034817,
      "ems": null
    },
    {
      "latitude": 50.761166,
      "longitude": 6.656189,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1655034820,
      "ems": null
    },
    {
      "latitude": 50.760933,
      "longitude": 6.65451,
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
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1655034823,
      "ems": null
    },
    {
      "latitude": 50.76059,
      "longitude": 6.65237,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1655034826,
      "ems": null
    },
    {
      "latitude": 50.760326,
      "longitude": 6.650696,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1655034829,
      "ems": null
    },
    {
      "latitude": 50.759724,
      "longitude": 6.646729,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655034835,
      "ems": null
    },
    {
      "latitude": 50.759079,
      "longitude": 6.642943,
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
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655034841,
      "ems": null
    },
    {
      "latitude": 50.75853,
      "longitude": 6.639231,
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
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655034847,
      "ems": null
    },
    {
      "latitude": 50.758026,
      "longitude": 6.635445,
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
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1655034853,
      "ems": null
    },
    {
      "latitude": 50.757568,
      "longitude": 6.631808,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655034859,
      "ems": null
    },
    {
      "latitude": 50.757114,
      "longitude": 6.628189,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655034864,
      "ems": null
    },
    {
      "latitude": 50.756977,
      "longitude": 6.626205,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1655034868,
      "ems": null
    },
    {
      "latitude": 50.756699,
      "longitude": 6.623865,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655034871,
      "ems": null
    },
    {
      "latitude": 50.756104,
      "longitude": 6.619931,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655034877,
      "ems": null
    },
    {
      "latitude": 50.755829,
      "longitude": 6.618224,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1655034880,
      "ems": null
    },
    {
      "latitude": 50.755486,
      "longitude": 6.616287,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655034882,
      "ems": null
    },
    {
      "latitude": 50.755066,
      "longitude": 6.614075,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655034886,
      "ems": null
    },
    {
      "latitude": 50.754696,
      "longitude": 6.612167,
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
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655034889,
      "ems": null
    },
    {
      "latitude": 50.754318,
      "longitude": 6.610355,
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
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655034892,
      "ems": null
    },
    {
      "latitude": 50.753948,
      "longitude": 6.608429,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655034895,
      "ems": null
    },
    {
      "latitude": 50.753578,
      "longitude": 6.606522,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655034898,
      "ems": null
    },
    {
      "latitude": 50.75325,
      "longitude": 6.604614,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655034901,
      "ems": null
    },
    {
      "latitude": 50.752926,
      "longitude": 6.603241,
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
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655034904,
      "ems": null
    },
    {
      "latitude": 50.752041,
      "longitude": 6.598816,
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
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655034910,
      "ems": null
    },
    {
      "latitude": 50.751389,
      "longitude": 6.595306,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1655034916,
      "ems": null
    },
    {
      "latitude": 50.751205,
      "longitude": 6.593578,
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655034919,
      "ems": null
    },
    {
      "latitude": 50.750931,
      "longitude": 6.591277,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655034922,
      "ems": null
    },
    {
      "latitude": 50.750702,
      "longitude": 6.589347,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655034925,
      "ems": null
    },
    {
      "latitude": 50.750519,
      "longitude": 6.58764,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655034928,
      "ems": null
    },
    {
      "latitude": 50.75032,
      "longitude": 6.585693,
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
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655034931,
      "ems": null
    },
    {
      "latitude": 50.750061,
      "longitude": 6.583557,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655034934,
      "ems": null
    },
    {
      "latitude": 50.749851,
      "longitude": 6.581573,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655034937,
      "ems": null
    },
    {
      "latitude": 50.749649,
      "longitude": 6.579697,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655034940,
      "ems": null
    },
    {
      "latitude": 50.749466,
      "longitude": 6.577841,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655034943,
      "ems": null
    },
    {
      "latitude": 50.748917,
      "longitude": 6.573684,
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
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655034949,
      "ems": null
    },
    {
      "latitude": 50.748413,
      "longitude": 6.569899,
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
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655034955,
      "ems": null
    },
    {
      "latitude": 50.747807,
      "longitude": 6.566086,
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
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655034961,
      "ems": null
    },
    {
      "latitude": 50.747223,
      "longitude": 6.562327,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1655034967,
      "ems": null
    },
    {
      "latitude": 50.746872,
      "longitude": 6.558762,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655034973,
      "ems": null
    },
    {
      "latitude": 50.746536,
      "longitude": 6.555423,
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655034979,
      "ems": null
    },
    {
      "latitude": 50.746223,
      "longitude": 6.5522,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655034985,
      "ems": null
    },
    {
      "latitude": 50.74585,
      "longitude": 6.548767,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655034991,
      "ems": null
    },
    {
      "latitude": 50.745712,
      "longitude": 6.547184,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1655034994,
      "ems": null
    },
    {
      "latitude": 50.745476,
      "longitude": 6.543732,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1655035000,
      "ems": null
    },
    {
      "latitude": 50.745529,
      "longitude": 6.542061,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655035003,
      "ems": null
    },
    {
      "latitude": 50.745617,
      "longitude": 6.54068,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 277,
      "squawk": "4451",
      "timestamp": 1655035006,
      "ems": null
    },
    {
      "latitude": 50.745712,
      "longitude": 6.539166,
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
      "heading": 277,
      "squawk": "4451",
      "timestamp": 1655035008,
      "ems": null
    },
    {
      "latitude": 50.745895,
      "longitude": 6.537236,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 277,
      "squawk": "4451",
      "timestamp": 1655035012,
      "ems": null
    },
    {
      "latitude": 50.746082,
      "longitude": 6.535187,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1655035015,
      "ems": null
    },
    {
      "latitude": 50.746269,
      "longitude": 6.533508,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 279,
      "squawk": "4451",
      "timestamp": 1655035018,
      "ems": null
    },
    {
      "latitude": 50.746536,
      "longitude": 6.531446,
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
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1655035021,
      "ems": null
    },
    {
      "latitude": 50.746674,
      "longitude": 6.529665,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 276,
      "squawk": "4451",
      "timestamp": 1655035024,
      "ems": null
    },
    {
      "latitude": 50.746765,
      "longitude": 6.527586,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1655035027,
      "ems": null
    },
    {
      "latitude": 50.746735,
      "longitude": 6.523743,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1655035033,
      "ems": null
    },
    {
      "latitude": 50.746593,
      "longitude": 6.521912,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655035036,
      "ems": null
    },
    {
      "latitude": 50.746399,
      "longitude": 6.519569,
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655035039,
      "ems": null
    },
    {
      "latitude": 50.746216,
      "longitude": 6.517639,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655035042,
      "ems": null
    },
    {
      "latitude": 50.746037,
      "longitude": 6.515503,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035045,
      "ems": null
    },
    {
      "latitude": 50.745804,
      "longitude": 6.513259,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655035048,
      "ems": null
    },
    {
      "latitude": 50.745617,
      "longitude": 6.511383,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655035051,
      "ems": null
    },
    {
      "latitude": 50.745384,
      "longitude": 6.509247,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655035054,
      "ems": null
    },
    {
      "latitude": 50.745163,
      "longitude": 6.507246,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655035057,
      "ems": null
    },
    {
      "latitude": 50.744919,
      "longitude": 6.504822,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1655035060,
      "ems": null
    },
    {
      "latitude": 50.744499,
      "longitude": 6.500397,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035066,
      "ems": null
    },
    {
      "latitude": 50.744064,
      "longitude": 6.496112,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1655035072,
      "ems": null
    },
    {
      "latitude": 50.743744,
      "longitude": 6.491509,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655035078,
      "ems": null
    },
    {
      "latitude": 50.743469,
      "longitude": 6.487427,
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
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655035084,
      "ems": null
    },
    {
      "latitude": 50.743149,
      "longitude": 6.483459,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655035090,
      "ems": null
    },
    {
      "latitude": 50.742783,
      "longitude": 6.47941,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655035096,
      "ems": null
    },
    {
      "latitude": 50.742264,
      "longitude": 6.475449,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655035102,
      "ems": null
    },
    {
      "latitude": 50.741867,
      "longitude": 6.471615,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1655035108,
      "ems": null
    },
    {
      "latitude": 50.741566,
      "longitude": 6.467896,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1655035114,
      "ems": null
    },
    {
      "latitude": 50.741333,
      "longitude": 6.464691,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 265,
      "squawk": "4451",
      "timestamp": 1655035120,
      "ems": null
    },
    {
      "latitude": 50.741009,
      "longitude": 6.460571,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1655035126,
      "ems": null
    },
    {
      "latitude": 50.740635,
      "longitude": 6.456833,
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655035132,
      "ems": null
    },
    {
      "latitude": 50.740215,
      "longitude": 6.452408,
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
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1655035139,
      "ems": null
    },
    {
      "latitude": 50.739944,
      "longitude": 6.448678,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655035145,
      "ems": null
    },
    {
      "latitude": 50.739487,
      "longitude": 6.444001,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035153,
      "ems": null
    },
    {
      "latitude": 50.739147,
      "longitude": 6.440964,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655035159,
      "ems": null
    },
    {
      "latitude": 50.738495,
      "longitude": 6.435623,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655035166,
      "ems": null
    },
    {
      "latitude": 50.738068,
      "longitude": 6.433311,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655035170,
      "ems": null
    },
    {
      "latitude": 50.737564,
      "longitude": 6.430817,
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
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655035174,
      "ems": null
    },
    {
      "latitude": 50.737015,
      "longitude": 6.428338,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655035178,
      "ems": null
    },
    {
      "latitude": 50.736649,
      "longitude": 6.426631,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655035182,
      "ems": null
    },
    {
      "latitude": 50.736027,
      "longitude": 6.423569,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655035186,
      "ems": null
    },
    {
      "latitude": 50.73587,
      "longitude": 6.422919,
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
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655035189,
      "ems": null
    },
    {
      "latitude": 50.735283,
      "longitude": 6.420135,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655035192,
      "ems": null
    },
    {
      "latitude": 50.734268,
      "longitude": 6.415719,
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
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655035200,
      "ems": null
    },
    {
      "latitude": 50.733673,
      "longitude": 6.413121,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655035206,
      "ems": null
    },
    {
      "latitude": 50.73262,
      "longitude": 6.408815,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 248,
      "squawk": "4451",
      "timestamp": 1655035213,
      "ems": null
    },
    {
      "latitude": 50.731659,
      "longitude": 6.404807,
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
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655035219,
      "ems": null
    },
    {
      "latitude": 50.731045,
      "longitude": 6.401443,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1655035225,
      "ems": null
    },
    {
      "latitude": 50.730835,
      "longitude": 6.399981,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655035228,
      "ems": null
    },
    {
      "latitude": 50.730534,
      "longitude": 6.398087,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1655035231,
      "ems": null
    },
    {
      "latitude": 50.730377,
      "longitude": 6.396938,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655035234,
      "ems": null
    },
    {
      "latitude": 50.730347,
      "longitude": 6.394958,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655035237,
      "ems": null
    },
    {
      "latitude": 50.730423,
      "longitude": 6.393078,
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
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1655035240,
      "ems": null
    },
    {
      "latitude": 50.73056,
      "longitude": 6.391371,
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
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1655035243,
      "ems": null
    },
    {
      "latitude": 50.730579,
      "longitude": 6.389923,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655035246,
      "ems": null
    },
    {
      "latitude": 50.730606,
      "longitude": 6.388179,
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
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655035249,
      "ems": null
    },
    {
      "latitude": 50.730606,
      "longitude": 6.386471,
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
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655035252,
      "ems": null
    },
    {
      "latitude": 50.73056,
      "longitude": 6.38469,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1655035255,
      "ems": null
    },
    {
      "latitude": 50.730534,
      "longitude": 6.382828,
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
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655035258,
      "ems": null
    },
    {
      "latitude": 50.730488,
      "longitude": 6.381073,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655035261,
      "ems": null
    },
    {
      "latitude": 50.730469,
      "longitude": 6.379419,
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
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1655035264,
      "ems": null
    },
    {
      "latitude": 50.730469,
      "longitude": 6.37593,
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655035270,
      "ems": null
    },
    {
      "latitude": 50.730442,
      "longitude": 6.374283,
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
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1655035273,
      "ems": null
    },
    {
      "latitude": 50.730392,
      "longitude": 6.372375,
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
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655035276,
      "ems": null
    },
    {
      "latitude": 50.730331,
      "longitude": 6.368581,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655035283,
      "ems": null
    },
    {
      "latitude": 50.730255,
      "longitude": 6.364975,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655035288,
      "ems": null
    },
    {
      "latitude": 50.730301,
      "longitude": 6.361923,
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
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1655035294,
      "ems": null
    },
    {
      "latitude": 50.730331,
      "longitude": 6.358783,
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
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655035300,
      "ems": null
    },
    {
      "latitude": 50.730194,
      "longitude": 6.354774,
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
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655035306,
      "ems": null
    },
    {
      "latitude": 50.730148,
      "longitude": 6.351285,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655035312,
      "ems": null
    },
    {
      "latitude": 50.730068,
      "longitude": 6.348801,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655035318,
      "ems": null
    },
    {
      "latitude": 50.730148,
      "longitude": 6.344975,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1655035324,
      "ems": null
    },
    {
      "latitude": 50.730301,
      "longitude": 6.341934,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1655035330,
      "ems": null
    },
    {
      "latitude": 50.730377,
      "longitude": 6.340002,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655035333,
      "ems": null
    },
    {
      "latitude": 50.730194,
      "longitude": 6.336662,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035339,
      "ems": null
    },
    {
      "latitude": 50.729977,
      "longitude": 6.334991,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655035342,
      "ems": null
    },
    {
      "latitude": 50.72979,
      "longitude": 6.333618,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1655035345,
      "ems": null
    },
    {
      "latitude": 50.729603,
      "longitude": 6.332321,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1655035347,
      "ems": null
    },
    {
      "latitude": 50.72937,
      "longitude": 6.330129,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1655035351,
      "ems": null
    },
    {
      "latitude": 50.729187,
      "longitude": 6.327605,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655035356,
      "ems": null
    },
    {
      "latitude": 50.729092,
      "longitude": 6.325989,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655035359,
      "ems": null
    },
    {
      "latitude": 50.729046,
      "longitude": 6.32515,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655035360,
      "ems": null
    },
    {
      "latitude": 50.728905,
      "longitude": 6.323471,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655035363,
      "ems": null
    },
    {
      "latitude": 50.728813,
      "longitude": 6.322632,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035365,
      "ems": null
    },
    {
      "latitude": 50.728409,
      "longitude": 6.318549,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655035373,
      "ems": null
    },
    {
      "latitude": 50.728207,
      "longitude": 6.314926,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 263,
      "squawk": "4471",
      "timestamp": 1655035379,
      "ems": null
    },
    {
      "latitude": 50.727814,
      "longitude": 6.310755,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 261,
      "squawk": "4471",
      "timestamp": 1655035386,
      "ems": null
    },
    {
      "latitude": 50.7276,
      "longitude": 6.307373,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 266,
      "squawk": "4471",
      "timestamp": 1655035392,
      "ems": null
    },
    {
      "latitude": 50.727539,
      "longitude": 6.305707,
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
      "heading": 265,
      "squawk": "4471",
      "timestamp": 1655035395,
      "ems": null
    },
    {
      "latitude": 50.727127,
      "longitude": 6.301253,
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
      "heading": 259,
      "squawk": "4471",
      "timestamp": 1655035402,
      "ems": null
    },
    {
      "latitude": 50.726715,
      "longitude": 6.29769,
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
      "heading": 260,
      "squawk": "4471",
      "timestamp": 1655035408,
      "ems": null
    },
    {
      "latitude": 50.726437,
      "longitude": 6.294861,
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
      "heading": 260,
      "squawk": "4471",
      "timestamp": 1655035413,
      "ems": null
    },
    {
      "latitude": 50.726074,
      "longitude": 6.290712,
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
      "heading": 260,
      "squawk": "4471",
      "timestamp": 1655035420,
      "ems": null
    },
    {
      "latitude": 50.725845,
      "longitude": 6.288857,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655035423,
      "ems": null
    },
    {
      "latitude": 50.725647,
      "longitude": 6.287308,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655035426,
      "ems": null
    },
    {
      "latitude": 50.725319,
      "longitude": 6.284027,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035432,
      "ems": null
    },
    {
      "latitude": 50.72493,
      "longitude": 6.280765,
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655035438,
      "ems": null
    },
    {
      "latitude": 50.724518,
      "longitude": 6.276088,
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
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655035446,
      "ems": null
    },
    {
      "latitude": 50.724342,
      "longitude": 6.273651,
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655035450,
      "ems": null
    },
    {
      "latitude": 50.724197,
      "longitude": 6.27208,
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655035453,
      "ems": null
    },
    {
      "latitude": 50.723598,
      "longitude": 6.266479,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655035462,
      "ems": null
    },
    {
      "latitude": 50.723457,
      "longitude": 6.264496,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655035466,
      "ems": null
    },
    {
      "latitude": 50.723419,
      "longitude": 6.262207,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655035469,
      "ems": null
    },
    {
      "latitude": 50.723373,
      "longitude": 6.260128,
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1655035472,
      "ems": null
    },
    {
      "latitude": 50.723328,
      "longitude": 6.258495,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655035474,
      "ems": null
    },
    {
      "latitude": 50.72332,
      "longitude": 6.256714,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1655035477,
      "ems": null
    },
    {
      "latitude": 50.722946,
      "longitude": 6.253052,
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
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655035483,
      "ems": null
    },
    {
      "latitude": 50.722481,
      "longitude": 6.248932,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035490,
      "ems": null
    },
    {
      "latitude": 50.72234,
      "longitude": 6.247711,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655035492,
      "ems": null
    },
    {
      "latitude": 50.722137,
      "longitude": 6.245505,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655035496,
      "ems": null
    },
    {
      "latitude": 50.721909,
      "longitude": 6.242313,
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
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655035501,
      "ems": null
    },
    {
      "latitude": 50.721771,
      "longitude": 6.240383,
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655035504,
      "ems": null
    },
    {
      "latitude": 50.72155,
      "longitude": 6.23642,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 265,
      "squawk": "4451",
      "timestamp": 1655035511,
      "ems": null
    },
    {
      "latitude": 50.721455,
      "longitude": 6.234512,
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
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655035514,
      "ems": null
    },
    {
      "latitude": 50.721313,
      "longitude": 6.233034,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655035516,
      "ems": null
    },
    {
      "latitude": 50.721039,
      "longitude": 6.230698,
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655035521,
      "ems": null
    },
    {
      "latitude": 50.720581,
      "longitude": 6.225908,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655035529,
      "ems": null
    },
    {
      "latitude": 50.720261,
      "longitude": 6.222939,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655035534,
      "ems": null
    },
    {
      "latitude": 50.719894,
      "longitude": 6.219672,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655035542,
      "ems": null
    },
    {
      "latitude": 50.719345,
      "longitude": 6.214253,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035550,
      "ems": null
    },
    {
      "latitude": 50.71907,
      "longitude": 6.209577,
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655035558,
      "ems": null
    },
    {
      "latitude": 50.718803,
      "longitude": 6.204987,
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655035566,
      "ems": null
    },
    {
      "latitude": 50.718708,
      "longitude": 6.202469,
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
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655035570,
      "ems": null
    },
    {
      "latitude": 50.718616,
      "longitude": 6.200256,
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1655035574,
      "ems": null
    },
    {
      "latitude": 50.718338,
      "longitude": 6.195473,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655035582,
      "ems": null
    },
    {
      "latitude": 50.717827,
      "longitude": 6.191483,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655035587,
      "ems": null
    },
    {
      "latitude": 50.717148,
      "longitude": 6.186193,
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655035595,
      "ems": null
    },
    {
      "latitude": 50.716873,
      "longitude": 6.183521,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035599,
      "ems": null
    },
    {
      "latitude": 50.716599,
      "longitude": 6.180923,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035603,
      "ems": null
    },
    {
      "latitude": 50.716194,
      "longitude": 6.177063,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 1664,
        "ms": 8.5
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655035611,
      "ems": null
    },
    {
      "latitude": 50.715637,
      "longitude": 6.173477,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655035619,
      "ems": null
    },
    {
      "latitude": 50.715363,
      "longitude": 6.17209,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655035622,
      "ems": null
    },
    {
      "latitude": 50.715088,
      "longitude": 6.170753,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655035625,
      "ems": null
    },
    {
      "latitude": 50.714813,
      "longitude": 6.169491,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 248,
      "squawk": "4451",
      "timestamp": 1655035628,
      "ems": null
    },
    {
      "latitude": 50.714493,
      "longitude": 6.168303,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 248,
      "squawk": "4451",
      "timestamp": 1655035631,
      "ems": null
    },
    {
      "latitude": 50.714172,
      "longitude": 6.166967,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655035634,
      "ems": null
    },
    {
      "latitude": 50.713963,
      "longitude": 6.165543,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655035637,
      "ems": null
    },
    {
      "latitude": 50.713497,
      "longitude": 6.163025,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655035643,
      "ems": null
    },
    {
      "latitude": 50.713032,
      "longitude": 6.160355,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655035650,
      "ems": null
    },
    {
      "latitude": 50.712845,
      "longitude": 6.159058,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655035653,
      "ems": null
    },
    {
      "latitude": 50.712704,
      "longitude": 6.158218,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035654,
      "ems": null
    },
    {
      "latitude": 50.71257,
      "longitude": 6.156946,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655035658,
      "ems": null
    },
    {
      "latitude": 50.712425,
      "longitude": 6.155319,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655035661,
      "ems": null
    },
    {
      "latitude": 50.712379,
      "longitude": 6.153946,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655035664,
      "ems": null
    },
    {
      "latitude": 50.712284,
      "longitude": 6.152649,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655035667,
      "ems": null
    },
    {
      "latitude": 50.712296,
      "longitude": 6.150933,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655035670,
      "ems": null
    },
    {
      "latitude": 50.712284,
      "longitude": 6.148987,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655035673,
      "ems": null
    },
    {
      "latitude": 50.712204,
      "longitude": 6.147073,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 265,
      "squawk": "4451",
      "timestamp": 1655035676,
      "ems": null
    },
    {
      "latitude": 50.711868,
      "longitude": 6.143341,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655035682,
      "ems": null
    },
    {
      "latitude": 50.711681,
      "longitude": 6.141129,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655035686,
      "ems": null
    },
    {
      "latitude": 50.711517,
      "longitude": 6.13772,
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1655035690,
      "ems": null
    },
    {
      "latitude": 50.711472,
      "longitude": 6.135716,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1655035694,
      "ems": null
    },
    {
      "latitude": 50.711353,
      "longitude": 6.12999,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655035702,
      "ems": null
    },
    {
      "latitude": 50.711472,
      "longitude": 6.128144,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 279,
      "squawk": "4451",
      "timestamp": 1655035705,
      "ems": null
    },
    {
      "latitude": 50.711655,
      "longitude": 6.12614,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 277,
      "squawk": "4451",
      "timestamp": 1655035708,
      "ems": null
    },
    {
      "latitude": 50.711773,
      "longitude": 6.124496,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1655035710,
      "ems": null
    },
    {
      "latitude": 50.711884,
      "longitude": 6.122577,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1655035713,
      "ems": null
    },
    {
      "latitude": 50.7117,
      "longitude": 6.118642,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035720,
      "ems": null
    },
    {
      "latitude": 50.711517,
      "longitude": 6.117158,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035723,
      "ems": null
    },
    {
      "latitude": 50.711353,
      "longitude": 6.115341,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1655035726,
      "ems": null
    },
    {
      "latitude": 50.711243,
      "longitude": 6.113743,
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
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655035729,
      "ems": null
    },
    {
      "latitude": 50.711151,
      "longitude": 6.11263,
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
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1655035731,
      "ems": null
    },
    {
      "latitude": 50.711014,
      "longitude": 6.111219,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655035736,
      "ems": null
    },
    {
      "latitude": 50.710648,
      "longitude": 6.108547,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655035740,
      "ems": null
    },
    {
      "latitude": 50.710236,
      "longitude": 6.10611,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1655035744,
      "ems": null
    },
    {
      "latitude": 50.709679,
      "longitude": 6.101379,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035752,
      "ems": null
    },
    {
      "latitude": 50.709045,
      "longitude": 6.09667,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655035760,
      "ems": null
    },
    {
      "latitude": 50.708633,
      "longitude": 6.094295,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655035764,
      "ems": null
    },
    {
      "latitude": 50.707817,
      "longitude": 6.090164,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655035772,
      "ems": null
    },
    {
      "latitude": 50.707397,
      "longitude": 6.088133,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655035776,
      "ems": null
    },
    {
      "latitude": 50.706932,
      "longitude": 6.085739,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655035780,
      "ems": null
    },
    {
      "latitude": 50.706665,
      "longitude": 6.083159,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655035785,
      "ems": null
    },
    {
      "latitude": 50.706619,
      "longitude": 6.08123,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 265,
      "squawk": "4451",
      "timestamp": 1655035789,
      "ems": null
    },
    {
      "latitude": 50.706528,
      "longitude": 6.079374,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 265,
      "squawk": "4451",
      "timestamp": 1655035793,
      "ems": null
    },
    {
      "latitude": 50.706375,
      "longitude": 6.077118,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655035797,
      "ems": null
    },
    {
      "latitude": 50.706345,
      "longitude": 6.076553,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1655035801,
      "ems": null
    },
    {
      "latitude": 50.706047,
      "longitude": 6.073074,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655035805,
      "ems": null
    },
    {
      "latitude": 50.705841,
      "longitude": 6.071134,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035808,
      "ems": null
    },
    {
      "latitude": 50.705704,
      "longitude": 6.069872,
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655035811,
      "ems": null
    },
    {
      "latitude": 50.70549,
      "longitude": 6.06781,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655035816,
      "ems": null
    },
    {
      "latitude": 50.7052,
      "longitude": 6.065269,
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655035820,
      "ems": null
    },
    {
      "latitude": 50.704697,
      "longitude": 6.06037,
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655035828,
      "ems": null
    },
    {
      "latitude": 50.704468,
      "longitude": 6.05562,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655035836,
      "ems": null
    },
    {
      "latitude": 50.704185,
      "longitude": 6.051331,
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
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655035844,
      "ems": null
    },
    {
      "latitude": 50.704102,
      "longitude": 6.049087,
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
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655035848,
      "ems": null
    },
    {
      "latitude": 50.704044,
      "longitude": 6.046906,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655035852,
      "ems": null
    },
    {
      "latitude": 50.703953,
      "longitude": 6.041946,
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
      "heading": 265,
      "squawk": "4451",
      "timestamp": 1655035860,
      "ems": null
    },
    {
      "latitude": 50.703552,
      "longitude": 6.037804,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655035868,
      "ems": null
    },
    {
      "latitude": 50.703396,
      "longitude": 6.035919,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655035872,
      "ems": null
    },
    {
      "latitude": 50.703003,
      "longitude": 6.032682,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035876,
      "ems": null
    },
    {
      "latitude": 50.702744,
      "longitude": 6.03035,
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655035880,
      "ems": null
    },
    {
      "latitude": 50.702461,
      "longitude": 6.027908,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1655035884,
      "ems": null
    },
    {
      "latitude": 50.702091,
      "longitude": 6.025085,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655035888,
      "ems": null
    },
    {
      "latitude": 50.701859,
      "longitude": 6.022957,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035892,
      "ems": null
    },
    {
      "latitude": 50.701309,
      "longitude": 6.017687,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035900,
      "ems": null
    },
    {
      "latitude": 50.700714,
      "longitude": 6.011971,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655035909,
      "ems": null
    },
    {
      "latitude": 50.700165,
      "longitude": 6.006701,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655035917,
      "ems": null
    },
    {
      "latitude": 50.699532,
      "longitude": 6.001358,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655035926,
      "ems": null
    },
    {
      "latitude": 50.698837,
      "longitude": 5.996457,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1655035934,
      "ems": null
    },
    {
      "latitude": 50.698086,
      "longitude": 5.990372,
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655035943,
      "ems": null
    },
    {
      "latitude": 50.697601,
      "longitude": 5.984877,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1655035952,
      "ems": null
    },
    {
      "latitude": 50.697483,
      "longitude": 5.983047,
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
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655035956,
      "ems": null
    },
    {
      "latitude": 50.697418,
      "longitude": 5.982056,
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
      "heading": 265,
      "squawk": "4451",
      "timestamp": 1655035959,
      "ems": null
    },
    {
      "latitude": 50.697327,
      "longitude": 5.979086,
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
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655035961,
      "ems": null
    },
    {
      "latitude": 50.697342,
      "longitude": 5.976334,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655035966,
      "ems": null
    },
    {
      "latitude": 50.697372,
      "longitude": 5.973816,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655035970,
      "ems": null
    },
    {
      "latitude": 50.697342,
      "longitude": 5.971298,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655035974,
      "ems": null
    },
    {
      "latitude": 50.697342,
      "longitude": 5.969696,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655035976,
      "ems": null
    },
    {
      "latitude": 50.697342,
      "longitude": 5.967712,
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655035979,
      "ems": null
    },
    {
      "latitude": 50.697327,
      "longitude": 5.965873,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1655035982,
      "ems": null
    },
    {
      "latitude": 50.697296,
      "longitude": 5.964355,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1655035986,
      "ems": null
    },
    {
      "latitude": 50.697342,
      "longitude": 5.96199,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655035989,
      "ems": null
    },
    {
      "latitude": 50.697418,
      "longitude": 5.960157,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655035992,
      "ems": null
    },
    {
      "latitude": 50.697464,
      "longitude": 5.95652,
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
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655035998,
      "ems": null
    },
    {
      "latitude": 50.697433,
      "longitude": 5.952911,
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655036004,
      "ems": null
    },
    {
      "latitude": 50.697418,
      "longitude": 5.949171,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655036010,
      "ems": null
    },
    {
      "latitude": 50.697372,
      "longitude": 5.944049,
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
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655036018,
      "ems": null
    },
    {
      "latitude": 50.697433,
      "longitude": 5.939484,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655036026,
      "ems": null
    },
    {
      "latitude": 50.697388,
      "longitude": 5.934753,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1655036034,
      "ems": null
    },
    {
      "latitude": 50.69751,
      "longitude": 5.931726,
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
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1655036039,
      "ems": null
    },
    {
      "latitude": 50.697666,
      "longitude": 5.930023,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 278,
      "squawk": "4451",
      "timestamp": 1655036043,
      "ems": null
    },
    {
      "latitude": 50.697948,
      "longitude": 5.927811,
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
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1655036046,
      "ems": null
    },
    {
      "latitude": 50.698151,
      "longitude": 5.92653,
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
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1655036048,
      "ems": null
    },
    {
      "latitude": 50.698425,
      "longitude": 5.924897,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1655036051,
      "ems": null
    },
    {
      "latitude": 50.698784,
      "longitude": 5.922852,
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
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1655036054,
      "ems": null
    },
    {
      "latitude": 50.699112,
      "longitude": 5.920815,
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
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1655036058,
      "ems": null
    },
    {
      "latitude": 50.699432,
      "longitude": 5.919181,
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
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1655036061,
      "ems": null
    },
    {
      "latitude": 50.699669,
      "longitude": 5.917664,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1655036063,
      "ems": null
    },
    {
      "latitude": 50.69989,
      "longitude": 5.91636,
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
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1655036065,
      "ems": null
    },
    {
      "latitude": 50.700348,
      "longitude": 5.913614,
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
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1655036070,
      "ems": null
    },
    {
      "latitude": 50.700741,
      "longitude": 5.911331,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1655036074,
      "ems": null
    },
    {
      "latitude": 50.701492,
      "longitude": 5.906785,
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
      "heading": 282,
      "squawk": "4451",
      "timestamp": 1655036082,
      "ems": null
    },
    {
      "latitude": 50.702087,
      "longitude": 5.902405,
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
      "heading": 279,
      "squawk": "4451",
      "timestamp": 1655036090,
      "ems": null
    },
    {
      "latitude": 50.702278,
      "longitude": 5.900116,
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
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1655036094,
      "ems": null
    },
    {
      "latitude": 50.702511,
      "longitude": 5.896912,
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
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1655036099,
      "ems": null
    },
    {
      "latitude": 50.702637,
      "longitude": 5.895353,
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
      "heading": 278,
      "squawk": "4451",
      "timestamp": 1655036103,
      "ems": null
    },
    {
      "latitude": 50.70282,
      "longitude": 5.893274,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 278,
      "squawk": "4451",
      "timestamp": 1655036106,
      "ems": null
    },
    {
      "latitude": 50.702976,
      "longitude": 5.891495,
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
      "heading": 277,
      "squawk": "4451",
      "timestamp": 1655036109,
      "ems": null
    },
    {
      "latitude": 50.70314,
      "longitude": 5.889711,
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
      "heading": 277,
      "squawk": "4451",
      "timestamp": 1655036112,
      "ems": null
    },
    {
      "latitude": 50.703442,
      "longitude": 5.886383,
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
      "heading": 279,
      "squawk": "4451",
      "timestamp": 1655036118,
      "ems": null
    },
    {
      "latitude": 50.70369,
      "longitude": 5.88303,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1655036124,
      "ems": null
    },
    {
      "latitude": 50.703953,
      "longitude": 5.880051,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1655036130,
      "ems": null
    },
    {
      "latitude": 50.70414,
      "longitude": 5.878983,
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
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655036133,
      "ems": null
    },
    {
      "latitude": 50.704651,
      "longitude": 5.877151,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655036136,
      "ems": null
    },
    {
      "latitude": 50.705154,
      "longitude": 5.875681,
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
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655036139,
      "ems": null
    },
    {
      "latitude": 50.70549,
      "longitude": 5.874557,
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
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655036142,
      "ems": null
    },
    {
      "latitude": 50.706001,
      "longitude": 5.872726,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655036145,
      "ems": null
    },
    {
      "latitude": 50.70628,
      "longitude": 5.871658,
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
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655036147,
      "ems": null
    },
    {
      "latitude": 50.706757,
      "longitude": 5.870039,
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
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655036151,
      "ems": null
    },
    {
      "latitude": 50.707169,
      "longitude": 5.868555,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655036154,
      "ems": null
    },
    {
      "latitude": 50.707306,
      "longitude": 5.868149,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655036155,
      "ems": null
    },
    {
      "latitude": 50.708282,
      "longitude": 5.864334,
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
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655036163,
      "ems": null
    },
    {
      "latitude": 50.708817,
      "longitude": 5.862319,
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
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1655036167,
      "ems": null
    },
    {
      "latitude": 50.709503,
      "longitude": 5.857791,
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
      "heading": 279,
      "squawk": "4451",
      "timestamp": 1655036175,
      "ems": null
    },
    {
      "latitude": 50.709961,
      "longitude": 5.855268,
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
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1655036180,
      "ems": null
    },
    {
      "latitude": 50.710831,
      "longitude": 5.85163,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655036187,
      "ems": null
    },
    {
      "latitude": 50.711609,
      "longitude": 5.848364,
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
      "heading": 290,
      "squawk": "4451",
      "timestamp": 1655036193,
      "ems": null
    },
    {
      "latitude": 50.712238,
      "longitude": 5.845413,
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
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1655036199,
      "ems": null
    },
    {
      "latitude": 50.712566,
      "longitude": 5.843964,
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
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1655036202,
      "ems": null
    },
    {
      "latitude": 50.712799,
      "longitude": 5.842796,
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
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1655036205,
      "ems": null
    },
    {
      "latitude": 50.713169,
      "longitude": 5.840988,
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
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1655036208,
      "ems": null
    },
    {
      "latitude": 50.71376,
      "longitude": 5.83812,
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
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1655036214,
      "ems": null
    },
    {
      "latitude": 50.714355,
      "longitude": 5.835225,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1655036220,
      "ems": null
    },
    {
      "latitude": 50.714893,
      "longitude": 5.832367,
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
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1655036226,
      "ems": null
    },
    {
      "latitude": 50.715263,
      "longitude": 5.830841,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655036229,
      "ems": null
    },
    {
      "latitude": 50.715729,
      "longitude": 5.829544,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655036232,
      "ems": null
    },
    {
      "latitude": 50.716244,
      "longitude": 5.828094,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655036235,
      "ems": null
    },
    {
      "latitude": 50.716736,
      "longitude": 5.826614,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655036238,
      "ems": null
    },
    {
      "latitude": 50.717266,
      "longitude": 5.825195,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655036241,
      "ems": null
    },
    {
      "latitude": 50.717731,
      "longitude": 5.823975,
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
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655036244,
      "ems": null
    },
    {
      "latitude": 50.718243,
      "longitude": 5.822601,
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
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655036247,
      "ems": null
    },
    {
      "latitude": 50.718384,
      "longitude": 5.822372,
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655036248,
      "ems": null
    },
    {
      "latitude": 50.719345,
      "longitude": 5.820156,
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
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655036252,
      "ems": null
    },
    {
      "latitude": 50.720058,
      "longitude": 5.818634,
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
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655036256,
      "ems": null
    },
    {
      "latitude": 50.720993,
      "longitude": 5.815479,
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
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1655036262,
      "ems": null
    },
    {
      "latitude": 50.721317,
      "longitude": 5.813675,
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
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1655036265,
      "ems": null
    },
    {
      "latitude": 50.721588,
      "longitude": 5.812213,
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
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1655036268,
      "ems": null
    },
    {
      "latitude": 50.72192,
      "longitude": 5.810089,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1655036271,
      "ems": null
    },
    {
      "latitude": 50.722229,
      "longitude": 5.808353,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1655036274,
      "ems": null
    },
    {
      "latitude": 50.722527,
      "longitude": 5.806656,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1655036277,
      "ems": null
    },
    {
      "latitude": 50.722855,
      "longitude": 5.804825,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1655036280,
      "ems": null
    },
    {
      "latitude": 50.723133,
      "longitude": 5.802917,
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
      "heading": 283,
      "squawk": "4451",
      "timestamp": 1655036283,
      "ems": null
    },
    {
      "latitude": 50.723366,
      "longitude": 5.801468,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 283,
      "squawk": "4451",
      "timestamp": 1655036286,
      "ems": null
    },
    {
      "latitude": 50.72369,
      "longitude": 5.799332,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 283,
      "squawk": "4451",
      "timestamp": 1655036289,
      "ems": null
    },
    {
      "latitude": 50.72411,
      "longitude": 5.796127,
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
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1655036295,
      "ems": null
    },
    {
      "latitude": 50.724747,
      "longitude": 5.792171,
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
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1655036301,
      "ems": null
    },
    {
      "latitude": 50.725433,
      "longitude": 5.788756,
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
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1655036307,
      "ems": null
    },
    {
      "latitude": 50.726112,
      "longitude": 5.785217,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1655036313,
      "ems": null
    },
    {
      "latitude": 50.726669,
      "longitude": 5.782001,
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
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1655036319,
      "ems": null
    },
    {
      "latitude": 50.727367,
      "longitude": 5.778275,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1655036325,
      "ems": null
    },
    {
      "latitude": 50.728065,
      "longitude": 5.774612,
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
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1655036331,
      "ems": null
    },
    {
      "latitude": 50.728672,
      "longitude": 5.771637,
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
      "heading": 289,
      "squawk": "4451",
      "timestamp": 1655036337,
      "ems": null
    },
    {
      "latitude": 50.729462,
      "longitude": 5.768051,
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
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1655036343,
      "ems": null
    },
    {
      "latitude": 50.730114,
      "longitude": 5.764694,
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
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1655036349,
      "ems": null
    },
    {
      "latitude": 50.730789,
      "longitude": 5.761587,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 289,
      "squawk": "4451",
      "timestamp": 1655036355,
      "ems": null
    },
    {
      "latitude": 50.73156,
      "longitude": 5.757828,
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
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1655036361,
      "ems": null
    },
    {
      "latitude": 50.732117,
      "longitude": 5.754683,
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
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1655036367,
      "ems": null
    },
    {
      "latitude": 50.732674,
      "longitude": 5.751495,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 283,
      "squawk": "4451",
      "timestamp": 1655036373,
      "ems": null
    },
    {
      "latitude": 50.732815,
      "longitude": 5.750656,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 282,
      "squawk": "4451",
      "timestamp": 1655036376,
      "ems": null
    },
    {
      "latitude": 50.733536,
      "longitude": 5.746666,
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
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1655036382,
      "ems": null
    },
    {
      "latitude": 50.734257,
      "longitude": 5.743332,
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
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655036388,
      "ems": null
    },
    {
      "latitude": 50.734676,
      "longitude": 5.74173,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655036391,
      "ems": null
    },
    {
      "latitude": 50.735092,
      "longitude": 5.740134,
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
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655036394,
      "ems": null
    },
    {
      "latitude": 50.73587,
      "longitude": 5.736867,
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
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1655036400,
      "ems": null
    },
    {
      "latitude": 50.736191,
      "longitude": 5.735234,
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
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1655036403,
      "ems": null
    },
    {
      "latitude": 50.736557,
      "longitude": 5.733453,
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
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1655036407,
      "ems": null
    },
    {
      "latitude": 50.737286,
      "longitude": 5.729904,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1655036412,
      "ems": null
    },
    {
      "latitude": 50.737934,
      "longitude": 5.726471,
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
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1655036419,
      "ems": null
    },
    {
      "latitude": 50.738262,
      "longitude": 5.724716,
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
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1655036422,
      "ems": null
    },
    {
      "latitude": 50.738632,
      "longitude": 5.722809,
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
      "heading": 289,
      "squawk": "4451",
      "timestamp": 1655036427,
      "ems": null
    },
    {
      "latitude": 50.739471,
      "longitude": 5.718994,
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
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1655036433,
      "ems": null
    },
    {
      "latitude": 50.740311,
      "longitude": 5.71534,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 289,
      "squawk": "4451",
      "timestamp": 1655036439,
      "ems": null
    },
    {
      "latitude": 50.741146,
      "longitude": 5.711365,
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
      "heading": 289,
      "squawk": "4451",
      "timestamp": 1655036448,
      "ems": null
    },
    {
      "latitude": 50.741753,
      "longitude": 5.708084,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1655036454,
      "ems": null
    },
    {
      "latitude": 50.742004,
      "longitude": 5.706507,
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
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1655036457,
      "ems": null
    },
    {
      "latitude": 50.742599,
      "longitude": 5.703166,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1655036463,
      "ems": null
    },
    {
      "latitude": 50.743515,
      "longitude": 5.699677,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655036470,
      "ems": null
    },
    {
      "latitude": 50.744125,
      "longitude": 5.698166,
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655036473,
      "ems": null
    },
    {
      "latitude": 50.744614,
      "longitude": 5.696782,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655036475,
      "ems": null
    },
    {
      "latitude": 50.745293,
      "longitude": 5.694885,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655036478,
      "ems": null
    },
    {
      "latitude": 50.745895,
      "longitude": 5.693071,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655036482,
      "ems": null
    },
    {
      "latitude": 50.746399,
      "longitude": 5.691289,
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
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655036485,
      "ems": null
    },
    {
      "latitude": 50.746811,
      "longitude": 5.68973,
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
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655036487,
      "ems": null
    },
    {
      "latitude": 50.747478,
      "longitude": 5.686722,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 290,
      "squawk": "4451",
      "timestamp": 1655036493,
      "ems": null
    },
    {
      "latitude": 50.748367,
      "longitude": 5.682456,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1655036499,
      "ems": null
    },
    {
      "latitude": 50.748642,
      "longitude": 5.680771,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1655036503,
      "ems": null
    },
    {
      "latitude": 50.749008,
      "longitude": 5.678596,
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
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1655036505,
      "ems": null
    },
    {
      "latitude": 50.749466,
      "longitude": 5.676072,
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
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1655036509,
      "ems": null
    },
    {
      "latitude": 50.749805,
      "longitude": 5.67421,
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
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1655036512,
      "ems": null
    },
    {
      "latitude": 50.750134,
      "longitude": 5.672607,
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
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1655036514,
      "ems": null
    },
    {
      "latitude": 50.751022,
      "longitude": 5.669242,
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
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1655036521,
      "ems": null
    },
    {
      "latitude": 50.751617,
      "longitude": 5.666644,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655036526,
      "ems": null
    },
    {
      "latitude": 50.752132,
      "longitude": 5.664749,
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
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655036529,
      "ems": null
    },
    {
      "latitude": 50.752647,
      "longitude": 5.662842,
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
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655036533,
      "ems": null
    },
    {
      "latitude": 50.752945,
      "longitude": 5.661522,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 290,
      "squawk": "4451",
      "timestamp": 1655036537,
      "ems": null
    },
    {
      "latitude": 50.753586,
      "longitude": 5.658479,
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
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1655036542,
      "ems": null
    },
    {
      "latitude": 50.753902,
      "longitude": 5.656891,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1655036546,
      "ems": null
    },
    {
      "latitude": 50.754833,
      "longitude": 5.652542,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1655036554,
      "ems": null
    },
    {
      "latitude": 50.755325,
      "longitude": 5.65113,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655036558,
      "ems": null
    },
    {
      "latitude": 50.756046,
      "longitude": 5.649185,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655036562,
      "ems": null
    },
    {
      "latitude": 50.75679,
      "longitude": 5.647125,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655036566,
      "ems": null
    },
    {
      "latitude": 50.757256,
      "longitude": 5.645676,
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
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655036569,
      "ems": null
    },
    {
      "latitude": 50.757675,
      "longitude": 5.644455,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655036572,
      "ems": null
    },
    {
      "latitude": 50.757954,
      "longitude": 5.643616,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655036574,
      "ems": null
    },
    {
      "latitude": 50.758743,
      "longitude": 5.641403,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655036578,
      "ems": null
    },
    {
      "latitude": 50.75885,
      "longitude": 5.641109,
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
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655036580,
      "ems": null
    },
    {
      "latitude": 50.759628,
      "longitude": 5.638504,
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
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655036583,
      "ems": null
    },
    {
      "latitude": 50.759907,
      "longitude": 5.637436,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655036587,
      "ems": null
    },
    {
      "latitude": 50.760605,
      "longitude": 5.635147,
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
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655036592,
      "ems": null
    },
    {
      "latitude": 50.761276,
      "longitude": 5.632572,
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
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655036595,
      "ems": null
    },
    {
      "latitude": 50.762562,
      "longitude": 5.628738,
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655036603,
      "ems": null
    },
    {
      "latitude": 50.762981,
      "longitude": 5.62767,
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655036606,
      "ems": null
    },
    {
      "latitude": 50.763771,
      "longitude": 5.626144,
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
      "heading": 309,
      "squawk": "4451",
      "timestamp": 1655036608,
      "ems": null
    },
    {
      "latitude": 50.764286,
      "longitude": 5.625229,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 312,
      "squawk": "4451",
      "timestamp": 1655036612,
      "ems": null
    },
    {
      "latitude": 50.765354,
      "longitude": 5.623322,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 311,
      "squawk": "4451",
      "timestamp": 1655036615,
      "ems": null
    },
    {
      "latitude": 50.765991,
      "longitude": 5.622253,
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
      "heading": 309,
      "squawk": "4451",
      "timestamp": 1655036618,
      "ems": null
    },
    {
      "latitude": 50.766815,
      "longitude": 5.620546,
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
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1655036621,
      "ems": null
    },
    {
      "latitude": 50.766937,
      "longitude": 5.62027,
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
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1655036623,
      "ems": null
    },
    {
      "latitude": 50.767822,
      "longitude": 5.61821,
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
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655036625,
      "ems": null
    },
    {
      "latitude": 50.76852,
      "longitude": 5.616684,
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
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655036629,
      "ems": null
    },
    {
      "latitude": 50.769638,
      "longitude": 5.61409,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655036634,
      "ems": null
    },
    {
      "latitude": 50.770382,
      "longitude": 5.612259,
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655036637,
      "ems": null
    },
    {
      "latitude": 50.770893,
      "longitude": 5.610962,
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
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655036640,
      "ems": null
    },
    {
      "latitude": 50.771118,
      "longitude": 5.610376,
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
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655036643,
      "ems": null
    },
    {
      "latitude": 50.772125,
      "longitude": 5.607407,
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
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655036647,
      "ems": null
    },
    {
      "latitude": 50.772709,
      "longitude": 5.605545,
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
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655036651,
      "ems": null
    },
    {
      "latitude": 50.773457,
      "longitude": 5.603256,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655036655,
      "ems": null
    },
    {
      "latitude": 50.774002,
      "longitude": 5.601171,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1655036659,
      "ems": null
    },
    {
      "latitude": 50.774292,
      "longitude": 5.599976,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1655036663,
      "ems": null
    },
    {
      "latitude": 50.775085,
      "longitude": 5.596848,
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
      "heading": 290,
      "squawk": "4451",
      "timestamp": 1655036667,
      "ems": null
    },
    {
      "latitude": 50.77565,
      "longitude": 5.594194,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1655036671,
      "ems": null
    },
    {
      "latitude": 50.776062,
      "longitude": 5.592117,
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
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1655036675,
      "ems": null
    },
    {
      "latitude": 50.776527,
      "longitude": 5.589676,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1655036679,
      "ems": null
    },
    {
      "latitude": 50.776852,
      "longitude": 5.587463,
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
      "heading": 283,
      "squawk": "4451",
      "timestamp": 1655036683,
      "ems": null
    },
    {
      "latitude": 50.777134,
      "longitude": 5.585938,
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
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1655036686,
      "ems": null
    },
    {
      "latitude": 50.777832,
      "longitude": 5.582886,
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
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655036692,
      "ems": null
    },
    {
      "latitude": 50.77853,
      "longitude": 5.580521,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655036697,
      "ems": null
    },
    {
      "latitude": 50.779087,
      "longitude": 5.578384,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1655036700,
      "ems": null
    },
    {
      "latitude": 50.779221,
      "longitude": 5.577788,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 283,
      "squawk": "4451",
      "timestamp": 1655036704,
      "ems": null
    },
    {
      "latitude": 50.779587,
      "longitude": 5.575191,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1655036707,
      "ems": null
    },
    {
      "latitude": 50.780064,
      "longitude": 5.571671,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 283,
      "squawk": "4451",
      "timestamp": 1655036712,
      "ems": null
    },
    {
      "latitude": 50.780533,
      "longitude": 5.568924,
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
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1655036719,
      "ems": null
    },
    {
      "latitude": 50.780716,
      "longitude": 5.567169,
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
      "heading": 278,
      "squawk": "4451",
      "timestamp": 1655036722,
      "ems": null
    },
    {
      "latitude": 50.780903,
      "longitude": 5.564728,
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
      "heading": 277,
      "squawk": "4451",
      "timestamp": 1655036725,
      "ems": null
    },
    {
      "latitude": 50.781006,
      "longitude": 5.56361,
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
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1655036728,
      "ems": null
    },
    {
      "latitude": 50.78109,
      "longitude": 5.561447,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655036731,
      "ems": null
    },
    {
      "latitude": 50.781097,
      "longitude": 5.559602,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655036733,
      "ems": null
    },
    {
      "latitude": 50.781181,
      "longitude": 5.557861,
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
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1655036737,
      "ems": null
    },
    {
      "latitude": 50.781277,
      "longitude": 5.555573,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1655036740,
      "ems": null
    },
    {
      "latitude": 50.781322,
      "longitude": 5.553894,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655036743,
      "ems": null
    },
    {
      "latitude": 50.781326,
      "longitude": 5.552178,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1655036745,
      "ems": null
    },
    {
      "latitude": 50.781368,
      "longitude": 5.550003,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655036749,
      "ems": null
    },
    {
      "latitude": 50.781414,
      "longitude": 5.548477,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655036752,
      "ems": null
    },
    {
      "latitude": 50.781509,
      "longitude": 5.547104,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655036754,
      "ems": null
    },
    {
      "latitude": 50.781647,
      "longitude": 5.54306,
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
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1655036760,
      "ems": null
    },
    {
      "latitude": 50.781693,
      "longitude": 5.539559,
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
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1655036767,
      "ems": null
    },
    {
      "latitude": 50.781788,
      "longitude": 5.53566,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655036774,
      "ems": null
    },
    {
      "latitude": 50.781834,
      "longitude": 5.531235,
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655036780,
      "ems": null
    },
    {
      "latitude": 50.781876,
      "longitude": 5.526346,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1655036788,
      "ems": null
    },
    {
      "latitude": 50.781929,
      "longitude": 5.523682,
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
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1655036794,
      "ems": null
    },
    {
      "latitude": 50.782013,
      "longitude": 5.520036,
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
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1655036798,
      "ems": null
    },
    {
      "latitude": 50.782059,
      "longitude": 5.516918,
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655036803,
      "ems": null
    },
    {
      "latitude": 50.782021,
      "longitude": 5.510788,
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1655036813,
      "ems": null
    },
    {
      "latitude": 50.782112,
      "longitude": 5.507355,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655036819,
      "ems": null
    },
    {
      "latitude": 50.782196,
      "longitude": 5.503408,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1655036825,
      "ems": null
    },
    {
      "latitude": 50.782207,
      "longitude": 5.499725,
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
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655036831,
      "ems": null
    },
    {
      "latitude": 50.782059,
      "longitude": 5.495762,
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1655036837,
      "ems": null
    },
    {
      "latitude": 50.781975,
      "longitude": 5.493774,
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
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1655036840,
      "ems": null
    },
    {
      "latitude": 50.781788,
      "longitude": 5.49202,
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
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1655036843,
      "ems": null
    },
    {
      "latitude": 50.781647,
      "longitude": 5.490189,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655036846,
      "ems": null
    },
    {
      "latitude": 50.781418,
      "longitude": 5.488413,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655036849,
      "ems": null
    },
    {
      "latitude": 50.781181,
      "longitude": 5.486526,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1655036852,
      "ems": null
    },
    {
      "latitude": 50.780869,
      "longitude": 5.484776,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655036855,
      "ems": null
    },
    {
      "latitude": 50.780624,
      "longitude": 5.483475,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655036858,
      "ems": null
    },
    {
      "latitude": 50.780182,
      "longitude": 5.481361,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655036861,
      "ems": null
    },
    {
      "latitude": 50.779861,
      "longitude": 5.479579,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655036864,
      "ems": null
    },
    {
      "latitude": 50.779633,
      "longitude": 5.478466,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655036867,
      "ems": null
    },
    {
      "latitude": 50.779228,
      "longitude": 5.476151,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655036870,
      "ems": null
    },
    {
      "latitude": 50.778992,
      "longitude": 5.474606,
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
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655036873,
      "ems": null
    },
    {
      "latitude": 50.77858,
      "longitude": 5.472379,
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
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655036876,
      "ems": null
    },
    {
      "latitude": 50.778297,
      "longitude": 5.471115,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655036878,
      "ems": null
    },
    {
      "latitude": 50.777271,
      "longitude": 5.466843,
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
      "heading": 248,
      "squawk": "4451",
      "timestamp": 1655036885,
      "ems": null
    },
    {
      "latitude": 50.776428,
      "longitude": 5.463026,
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
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655036891,
      "ems": null
    },
    {
      "latitude": 50.775738,
      "longitude": 5.45929,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655036897,
      "ems": null
    },
    {
      "latitude": 50.775131,
      "longitude": 5.455856,
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
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655036903,
      "ems": null
    },
    {
      "latitude": 50.774872,
      "longitude": 5.454192,
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
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1655036906,
      "ems": null
    },
    {
      "latitude": 50.774597,
      "longitude": 5.452262,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1655036909,
      "ems": null
    },
    {
      "latitude": 50.774414,
      "longitude": 5.451,
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
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655036912,
      "ems": null
    },
    {
      "latitude": 50.774059,
      "longitude": 5.448685,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1655036915,
      "ems": null
    },
    {
      "latitude": 50.773819,
      "longitude": 5.447215,
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
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1655036918,
      "ems": null
    },
    {
      "latitude": 50.773132,
      "longitude": 5.443355,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655036924,
      "ems": null
    },
    {
      "latitude": 50.771896,
      "longitude": 5.437342,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1655036935,
      "ems": null
    },
    {
      "latitude": 50.770988,
      "longitude": 5.4319,
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
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655036944,
      "ems": null
    },
    {
      "latitude": 50.769928,
      "longitude": 5.426801,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655036952,
      "ems": null
    },
    {
      "latitude": 50.769333,
      "longitude": 5.424351,
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
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655036957,
      "ems": null
    },
    {
      "latitude": 50.769032,
      "longitude": 5.423126,
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
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655036959,
      "ems": null
    },
    {
      "latitude": 50.768379,
      "longitude": 5.420303,
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
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655036963,
      "ems": null
    },
    {
      "latitude": 50.767963,
      "longitude": 5.418396,
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
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655036966,
      "ems": null
    },
    {
      "latitude": 50.767181,
      "longitude": 5.414775,
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
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655036973,
      "ems": null
    },
    {
      "latitude": 50.766449,
      "longitude": 5.411286,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655036978,
      "ems": null
    },
    {
      "latitude": 50.765915,
      "longitude": 5.408859,
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
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655036985,
      "ems": null
    },
    {
      "latitude": 50.764893,
      "longitude": 5.404308,
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
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655036991,
      "ems": null
    },
    {
      "latitude": 50.764004,
      "longitude": 5.40062,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 248,
      "squawk": "4451",
      "timestamp": 1655036997,
      "ems": null
    },
    {
      "latitude": 50.763214,
      "longitude": 5.397339,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655037003,
      "ems": null
    },
    {
      "latitude": 50.762329,
      "longitude": 5.393753,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1655037009,
      "ems": null
    },
    {
      "latitude": 50.761772,
      "longitude": 5.391846,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037012,
      "ems": null
    },
    {
      "latitude": 50.761322,
      "longitude": 5.390427,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655037014,
      "ems": null
    },
    {
      "latitude": 50.7607,
      "longitude": 5.388489,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1655037018,
      "ems": null
    },
    {
      "latitude": 50.760269,
      "longitude": 5.386938,
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
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037020,
      "ems": null
    },
    {
      "latitude": 50.759308,
      "longitude": 5.383598,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1655037027,
      "ems": null
    },
    {
      "latitude": 50.758511,
      "longitude": 5.380554,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655037033,
      "ems": null
    },
    {
      "latitude": 50.757721,
      "longitude": 5.377502,
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
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1655037039,
      "ems": null
    },
    {
      "latitude": 50.756882,
      "longitude": 5.374603,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1655037045,
      "ems": null
    },
    {
      "latitude": 50.756058,
      "longitude": 5.371869,
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
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655037051,
      "ems": null
    },
    {
      "latitude": 50.755161,
      "longitude": 5.368958,
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
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037057,
      "ems": null
    },
    {
      "latitude": 50.754509,
      "longitude": 5.36644,
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
      "heading": 247,
      "squawk": "4451",
      "timestamp": 1655037062,
      "ems": null
    },
    {
      "latitude": 50.753494,
      "longitude": 5.362664,
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
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1655037069,
      "ems": null
    },
    {
      "latitude": 50.752579,
      "longitude": 5.359621,
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
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037075,
      "ems": null
    },
    {
      "latitude": 50.751617,
      "longitude": 5.356503,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037081,
      "ems": null
    },
    {
      "latitude": 50.750656,
      "longitude": 5.353311,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1655037087,
      "ems": null
    },
    {
      "latitude": 50.750198,
      "longitude": 5.351975,
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
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1655037089,
      "ems": null
    },
    {
      "latitude": 50.749649,
      "longitude": 5.350416,
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
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1655037093,
      "ems": null
    },
    {
      "latitude": 50.749153,
      "longitude": 5.348816,
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
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655037096,
      "ems": null
    },
    {
      "latitude": 50.74823,
      "longitude": 5.345368,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 248,
      "squawk": "4451",
      "timestamp": 1655037102,
      "ems": null
    },
    {
      "latitude": 50.747406,
      "longitude": 5.34225,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1655037108,
      "ems": null
    },
    {
      "latitude": 50.746536,
      "longitude": 5.338836,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 248,
      "squawk": "4451",
      "timestamp": 1655037113,
      "ems": null
    },
    {
      "latitude": 50.746033,
      "longitude": 5.336832,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 248,
      "squawk": "4451",
      "timestamp": 1655037117,
      "ems": null
    },
    {
      "latitude": 50.745197,
      "longitude": 5.333862,
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
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037123,
      "ems": null
    },
    {
      "latitude": 50.744293,
      "longitude": 5.330596,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655037129,
      "ems": null
    },
    {
      "latitude": 50.743515,
      "longitude": 5.327181,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655037135,
      "ems": null
    },
    {
      "latitude": 50.742783,
      "longitude": 5.323767,
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
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655037141,
      "ems": null
    },
    {
      "latitude": 50.741985,
      "longitude": 5.320663,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 248,
      "squawk": "4451",
      "timestamp": 1655037147,
      "ems": null
    },
    {
      "latitude": 50.741146,
      "longitude": 5.317383,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 248,
      "squawk": "4451",
      "timestamp": 1655037153,
      "ems": null
    },
    {
      "latitude": 50.740265,
      "longitude": 5.313894,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655037159,
      "ems": null
    },
    {
      "latitude": 50.739395,
      "longitude": 5.310554,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037165,
      "ems": null
    },
    {
      "latitude": 50.738937,
      "longitude": 5.308995,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1655037168,
      "ems": null
    },
    {
      "latitude": 50.738205,
      "longitude": 5.305803,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655037174,
      "ems": null
    },
    {
      "latitude": 50.737423,
      "longitude": 5.302505,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655037180,
      "ems": null
    },
    {
      "latitude": 50.736725,
      "longitude": 5.299377,
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
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655037186,
      "ems": null
    },
    {
      "latitude": 50.736557,
      "longitude": 5.29786,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655037189,
      "ems": null
    },
    {
      "latitude": 50.73642,
      "longitude": 5.296227,
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655037192,
      "ems": null
    },
    {
      "latitude": 50.736305,
      "longitude": 5.295258,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1655037195,
      "ems": null
    },
    {
      "latitude": 50.735935,
      "longitude": 5.292892,
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
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655037198,
      "ems": null
    },
    {
      "latitude": 50.735641,
      "longitude": 5.291253,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655037201,
      "ems": null
    },
    {
      "latitude": 50.734863,
      "longitude": 5.288061,
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
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037207,
      "ems": null
    },
    {
      "latitude": 50.734589,
      "longitude": 5.28717,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1655037210,
      "ems": null
    },
    {
      "latitude": 50.733673,
      "longitude": 5.284572,
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
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1655037213,
      "ems": null
    },
    {
      "latitude": 50.733078,
      "longitude": 5.282939,
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
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1655037216,
      "ems": null
    },
    {
      "latitude": 50.732483,
      "longitude": 5.281084,
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
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1655037219,
      "ems": null
    },
    {
      "latitude": 50.731976,
      "longitude": 5.279617,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1655037222,
      "ems": null
    },
    {
      "latitude": 50.731277,
      "longitude": 5.27771,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1655037225,
      "ems": null
    },
    {
      "latitude": 50.730625,
      "longitude": 5.276031,
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
      "heading": 238,
      "squawk": "4451",
      "timestamp": 1655037228,
      "ems": null
    },
    {
      "latitude": 50.730148,
      "longitude": 5.274848,
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
      "heading": 236,
      "squawk": "4451",
      "timestamp": 1655037230,
      "ems": null
    },
    {
      "latitude": 50.729462,
      "longitude": 5.273132,
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
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1655037234,
      "ems": null
    },
    {
      "latitude": 50.728821,
      "longitude": 5.271062,
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
      "heading": 247,
      "squawk": "4451",
      "timestamp": 1655037237,
      "ems": null
    },
    {
      "latitude": 50.728409,
      "longitude": 5.269206,
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
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655037240,
      "ems": null
    },
    {
      "latitude": 50.727997,
      "longitude": 5.267425,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655037243,
      "ems": null
    },
    {
      "latitude": 50.727585,
      "longitude": 5.265346,
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
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655037246,
      "ems": null
    },
    {
      "latitude": 50.72723,
      "longitude": 5.263901,
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
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655037249,
      "ems": null
    },
    {
      "latitude": 50.726715,
      "longitude": 5.261841,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 247,
      "squawk": "4451",
      "timestamp": 1655037252,
      "ems": null
    },
    {
      "latitude": 50.726345,
      "longitude": 5.26062,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1655037254,
      "ems": null
    },
    {
      "latitude": 50.725845,
      "longitude": 5.258666,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1655037258,
      "ems": null
    },
    {
      "latitude": 50.725159,
      "longitude": 5.25629,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037261,
      "ems": null
    },
    {
      "latitude": 50.723969,
      "longitude": 5.252686,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1655037267,
      "ems": null
    },
    {
      "latitude": 50.72319,
      "longitude": 5.250277,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655037270,
      "ems": null
    },
    {
      "latitude": 50.722713,
      "longitude": 5.248642,
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
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037273,
      "ems": null
    },
    {
      "latitude": 50.722366,
      "longitude": 5.247457,
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
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1655037276,
      "ems": null
    },
    {
      "latitude": 50.72113,
      "longitude": 5.24231,
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
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655037283,
      "ems": null
    },
    {
      "latitude": 50.720757,
      "longitude": 5.240784,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655037286,
      "ems": null
    },
    {
      "latitude": 50.720432,
      "longitude": 5.23941,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655037289,
      "ems": null
    },
    {
      "latitude": 50.719849,
      "longitude": 5.236693,
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
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655037292,
      "ems": null
    },
    {
      "latitude": 50.719482,
      "longitude": 5.23506,
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
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655037294,
      "ems": null
    },
    {
      "latitude": 50.719025,
      "longitude": 5.233055,
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
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655037298,
      "ems": null
    },
    {
      "latitude": 50.718613,
      "longitude": 5.2312,
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
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655037301,
      "ems": null
    },
    {
      "latitude": 50.718155,
      "longitude": 5.229047,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655037304,
      "ems": null
    },
    {
      "latitude": 50.717407,
      "longitude": 5.225525,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655037310,
      "ems": null
    },
    {
      "latitude": 50.716644,
      "longitude": 5.221772,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655037316,
      "ems": null
    },
    {
      "latitude": 50.715958,
      "longitude": 5.218729,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655037322,
      "ems": null
    },
    {
      "latitude": 50.715408,
      "longitude": 5.216427,
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
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655037328,
      "ems": null
    },
    {
      "latitude": 50.71452,
      "longitude": 5.211792,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1655037334,
      "ems": null
    },
    {
      "latitude": 50.713589,
      "longitude": 5.206833,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655037343,
      "ems": null
    },
    {
      "latitude": 50.713028,
      "longitude": 5.204179,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655037348,
      "ems": null
    },
    {
      "latitude": 50.712524,
      "longitude": 5.201804,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655037355,
      "ems": null
    },
    {
      "latitude": 50.71138,
      "longitude": 5.196904,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655037364,
      "ems": null
    },
    {
      "latitude": 50.710785,
      "longitude": 5.194009,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655037370,
      "ems": null
    },
    {
      "latitude": 50.710052,
      "longitude": 5.19043,
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
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655037376,
      "ems": null
    },
    {
      "latitude": 50.709503,
      "longitude": 5.187625,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655037382,
      "ems": null
    },
    {
      "latitude": 50.708725,
      "longitude": 5.184359,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655037388,
      "ems": null
    },
    {
      "latitude": 50.708096,
      "longitude": 5.181122,
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
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655037394,
      "ems": null
    },
    {
      "latitude": 50.707855,
      "longitude": 5.179386,
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655037397,
      "ems": null
    },
    {
      "latitude": 50.707718,
      "longitude": 5.177752,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655037400,
      "ems": null
    },
    {
      "latitude": 50.70763,
      "longitude": 5.176773,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655037403,
      "ems": null
    },
    {
      "latitude": 50.707539,
      "longitude": 5.175323,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1655037406,
      "ems": null
    },
    {
      "latitude": 50.706894,
      "longitude": 5.17174,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655037412,
      "ems": null
    },
    {
      "latitude": 50.706654,
      "longitude": 5.170212,
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
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1655037415,
      "ems": null
    },
    {
      "latitude": 50.70607,
      "longitude": 5.167212,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655037421,
      "ems": null
    },
    {
      "latitude": 50.705658,
      "longitude": 5.165578,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655037424,
      "ems": null
    },
    {
      "latitude": 50.705292,
      "longitude": 5.164094,
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
      "squawk": "4451",
      "timestamp": 1655037427,
      "ems": null
    },
    {
      "latitude": 50.704975,
      "longitude": 5.162506,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655037430,
      "ems": null
    },
    {
      "latitude": 50.704742,
      "longitude": 5.16105,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655037433,
      "ems": null
    },
    {
      "latitude": 50.704697,
      "longitude": 5.159149,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1655037436,
      "ems": null
    },
    {
      "latitude": 50.704742,
      "longitude": 5.157394,
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
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1655037439,
      "ems": null
    },
    {
      "latitude": 50.704792,
      "longitude": 5.15564,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655037442,
      "ems": null
    },
    {
      "latitude": 50.704605,
      "longitude": 5.154114,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655037445,
      "ems": null
    },
    {
      "latitude": 50.704185,
      "longitude": 5.152359,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1655037448,
      "ems": null
    },
    {
      "latitude": 50.70372,
      "longitude": 5.150833,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655037451,
      "ems": null
    },
    {
      "latitude": 50.703186,
      "longitude": 5.149248,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1655037454,
      "ems": null
    },
    {
      "latitude": 50.702637,
      "longitude": 5.147688,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1655037457,
      "ems": null
    },
    {
      "latitude": 50.702042,
      "longitude": 5.14613,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 238,
      "squawk": "4451",
      "timestamp": 1655037460,
      "ems": null
    },
    {
      "latitude": 50.701584,
      "longitude": 5.144942,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 237,
      "squawk": "4451",
      "timestamp": 1655037463,
      "ems": null
    },
    {
      "latitude": 50.700832,
      "longitude": 5.143051,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1655037466,
      "ems": null
    },
    {
      "latitude": 50.700302,
      "longitude": 5.141453,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1655037469,
      "ems": null
    },
    {
      "latitude": 50.699856,
      "longitude": 5.140152,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1655037472,
      "ems": null
    },
    {
      "latitude": 50.699203,
      "longitude": 5.13841,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1655037475,
      "ems": null
    },
    {
      "latitude": 50.6987,
      "longitude": 5.137147,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1655037478,
      "ems": null
    },
    {
      "latitude": 50.697784,
      "longitude": 5.13455,
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
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1655037484,
      "ems": null
    },
    {
      "latitude": 50.696594,
      "longitude": 5.131061,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1655037490,
      "ems": null
    },
    {
      "latitude": 50.695496,
      "longitude": 5.128017,
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
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1655037496,
      "ems": null
    },
    {
      "latitude": 50.694443,
      "longitude": 5.124825,
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
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655037502,
      "ems": null
    },
    {
      "latitude": 50.693893,
      "longitude": 5.123118,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037505,
      "ems": null
    },
    {
      "latitude": 50.692825,
      "longitude": 5.119781,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1655037511,
      "ems": null
    },
    {
      "latitude": 50.691757,
      "longitude": 5.11673,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1655037517,
      "ems": null
    },
    {
      "latitude": 50.690685,
      "longitude": 5.11322,
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
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037524,
      "ems": null
    },
    {
      "latitude": 50.689663,
      "longitude": 5.110016,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655037529,
      "ems": null
    },
    {
      "latitude": 50.688675,
      "longitude": 5.106638,
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
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037535,
      "ems": null
    },
    {
      "latitude": 50.687622,
      "longitude": 5.103224,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037541,
      "ems": null
    },
    {
      "latitude": 50.686615,
      "longitude": 5.099735,
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
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1655037548,
      "ems": null
    },
    {
      "latitude": 50.685658,
      "longitude": 5.096359,
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
      "heading": 247,
      "squawk": "4451",
      "timestamp": 1655037553,
      "ems": null
    },
    {
      "latitude": 50.684772,
      "longitude": 5.092773,
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
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655037560,
      "ems": null
    },
    {
      "latitude": 50.684326,
      "longitude": 5.090827,
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
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655037563,
      "ems": null
    },
    {
      "latitude": 50.683868,
      "longitude": 5.088897,
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
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655037565,
      "ems": null
    },
    {
      "latitude": 50.682724,
      "longitude": 5.085334,
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
      "heading": 237,
      "squawk": "4451",
      "timestamp": 1655037572,
      "ems": null
    },
    {
      "latitude": 50.682037,
      "longitude": 5.083701,
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
      "heading": 236,
      "squawk": "4451",
      "timestamp": 1655037575,
      "ems": null
    },
    {
      "latitude": 50.681561,
      "longitude": 5.082626,
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
      "heading": 237,
      "squawk": "4451",
      "timestamp": 1655037577,
      "ems": null
    },
    {
      "latitude": 50.680862,
      "longitude": 5.080795,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1655037580,
      "ems": null
    },
    {
      "latitude": 50.680344,
      "longitude": 5.079247,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655037583,
      "ems": null
    },
    {
      "latitude": 50.679382,
      "longitude": 5.075758,
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
      "heading": 248,
      "squawk": "4451",
      "timestamp": 1655037590,
      "ems": null
    },
    {
      "latitude": 50.678581,
      "longitude": 5.072632,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1655037596,
      "ems": null
    },
    {
      "latitude": 50.677837,
      "longitude": 5.070038,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1655037601,
      "ems": null
    },
    {
      "latitude": 50.677231,
      "longitude": 5.068038,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1655037604,
      "ems": null
    },
    {
      "latitude": 50.676819,
      "longitude": 5.066479,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 247,
      "squawk": "4451",
      "timestamp": 1655037607,
      "ems": null
    },
    {
      "latitude": 50.676395,
      "longitude": 5.06485,
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
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1655037611,
      "ems": null
    },
    {
      "latitude": 50.675583,
      "longitude": 5.061951,
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
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1655037616,
      "ems": null
    },
    {
      "latitude": 50.674667,
      "longitude": 5.058833,
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
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037623,
      "ems": null
    },
    {
      "latitude": 50.673649,
      "longitude": 5.055542,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655037628,
      "ems": null
    },
    {
      "latitude": 50.672653,
      "longitude": 5.052375,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655037635,
      "ems": null
    },
    {
      "latitude": 50.671783,
      "longitude": 5.049362,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 247,
      "squawk": "4451",
      "timestamp": 1655037640,
      "ems": null
    },
    {
      "latitude": 50.670902,
      "longitude": 5.045991,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655037647,
      "ems": null
    },
    {
      "latitude": 50.670593,
      "longitude": 5.044604,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655037649,
      "ems": null
    },
    {
      "latitude": 50.670227,
      "longitude": 5.042869,
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
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655037653,
      "ems": null
    },
    {
      "latitude": 50.669922,
      "longitude": 5.041314,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655037656,
      "ems": null
    },
    {
      "latitude": 50.669643,
      "longitude": 5.039681,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655037659,
      "ems": null
    },
    {
      "latitude": 50.669357,
      "longitude": 5.038243,
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
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1655037661,
      "ems": null
    },
    {
      "latitude": 50.669037,
      "longitude": 5.036341,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1655037664,
      "ems": null
    },
    {
      "latitude": 50.668667,
      "longitude": 5.034559,
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
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655037667,
      "ems": null
    },
    {
      "latitude": 50.667828,
      "longitude": 5.031367,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1655037674,
      "ems": null
    },
    {
      "latitude": 50.667343,
      "longitude": 5.029787,
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
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655037677,
      "ems": null
    },
    {
      "latitude": 50.666897,
      "longitude": 5.028324,
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
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1655037679,
      "ems": null
    },
    {
      "latitude": 50.666428,
      "longitude": 5.026679,
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
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1655037683,
      "ems": null
    },
    {
      "latitude": 50.665966,
      "longitude": 5.025206,
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
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037686,
      "ems": null
    },
    {
      "latitude": 50.665421,
      "longitude": 5.023426,
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
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655037689,
      "ems": null
    },
    {
      "latitude": 50.664963,
      "longitude": 5.022053,
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
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1655037692,
      "ems": null
    },
    {
      "latitude": 50.664459,
      "longitude": 5.020607,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1655037694,
      "ems": null
    },
    {
      "latitude": 50.663818,
      "longitude": 5.018656,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1655037698,
      "ems": null
    },
    {
      "latitude": 50.662708,
      "longitude": 5.015184,
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
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037704,
      "ems": null
    },
    {
      "latitude": 50.661777,
      "longitude": 5.011919,
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
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1655037710,
      "ems": null
    },
    {
      "latitude": 50.66066,
      "longitude": 5.008355,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1655037716,
      "ems": null
    },
    {
      "latitude": 50.659836,
      "longitude": 5.005501,
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
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655037721,
      "ems": null
    },
    {
      "latitude": 50.659355,
      "longitude": 5.003307,
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
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655037725,
      "ems": null
    },
    {
      "latitude": 50.659012,
      "longitude": 5.00167,
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
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655037728,
      "ems": null
    },
    {
      "latitude": 50.658703,
      "longitude": 5.000115,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655037731,
      "ems": null
    },
    {
      "latitude": 50.658333,
      "longitude": 4.998408,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655037734,
      "ems": null
    },
    {
      "latitude": 50.658005,
      "longitude": 4.996701,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655037737,
      "ems": null
    },
    {
      "latitude": 50.657684,
      "longitude": 4.995093,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655037740,
      "ems": null
    },
    {
      "latitude": 50.657318,
      "longitude": 4.993575,
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
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655037743,
      "ems": null
    },
    {
      "latitude": 50.656517,
      "longitude": 4.99054,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655037749,
      "ems": null
    },
    {
      "latitude": 50.656002,
      "longitude": 4.988906,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655037752,
      "ems": null
    },
    {
      "latitude": 50.655624,
      "longitude": 4.987504,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1655037755,
      "ems": null
    },
    {
      "latitude": 50.655167,
      "longitude": 4.985937,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1655037758,
      "ems": null
    },
    {
      "latitude": 50.654709,
      "longitude": 4.984324,
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
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037761,
      "ems": null
    },
    {
      "latitude": 50.654205,
      "longitude": 4.982661,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655037764,
      "ems": null
    },
    {
      "latitude": 50.653675,
      "longitude": 4.981112,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655037767,
      "ems": null
    },
    {
      "latitude": 50.65321,
      "longitude": 4.979628,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655037770,
      "ems": null
    },
    {
      "latitude": 50.65242,
      "longitude": 4.97659,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 247,
      "squawk": "4451",
      "timestamp": 1655037776,
      "ems": null
    },
    {
      "latitude": 50.651814,
      "longitude": 4.974208,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655037781,
      "ems": null
    },
    {
      "latitude": 50.651443,
      "longitude": 4.972501,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655037785,
      "ems": null
    },
    {
      "latitude": 50.651115,
      "longitude": 4.970274,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1655037788,
      "ems": null
    },
    {
      "latitude": 50.650909,
      "longitude": 4.968711,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655037791,
      "ems": null
    },
    {
      "latitude": 50.650772,
      "longitude": 4.967266,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655037794,
      "ems": null
    },
    {
      "latitude": 50.650463,
      "longitude": 4.965301,
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
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1655037797,
      "ems": null
    },
    {
      "latitude": 50.649582,
      "longitude": 4.962206,
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
      "heading": 237,
      "squawk": "4451",
      "timestamp": 1655037803,
      "ems": null
    },
    {
      "latitude": 50.648941,
      "longitude": 4.960761,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 233,
      "squawk": "4451",
      "timestamp": 1655037806,
      "ems": null
    },
    {
      "latitude": 50.648277,
      "longitude": 4.959214,
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
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1655037809,
      "ems": null
    },
    {
      "latitude": 50.647625,
      "longitude": 4.957803,
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
      "heading": 236,
      "squawk": "4451",
      "timestamp": 1655037812,
      "ems": null
    },
    {
      "latitude": 50.647064,
      "longitude": 4.956424,
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
      "heading": 236,
      "squawk": "4451",
      "timestamp": 1655037815,
      "ems": null
    },
    {
      "latitude": 50.646416,
      "longitude": 4.954908,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1655037818,
      "ems": null
    },
    {
      "latitude": 50.645782,
      "longitude": 4.953461,
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
      "heading": 234,
      "squawk": "4451",
      "timestamp": 1655037821,
      "ems": null
    },
    {
      "latitude": 50.645096,
      "longitude": 4.951943,
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
      "heading": 234,
      "squawk": "4451",
      "timestamp": 1655037824,
      "ems": null
    },
    {
      "latitude": 50.644455,
      "longitude": 4.950497,
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
      "heading": 234,
      "squawk": "4451",
      "timestamp": 1655037827,
      "ems": null
    },
    {
      "latitude": 50.643806,
      "longitude": 4.949118,
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
      "heading": 233,
      "squawk": "4451",
      "timestamp": 1655037830,
      "ems": null
    },
    {
      "latitude": 50.642643,
      "longitude": 4.946669,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 233,
      "squawk": "4451",
      "timestamp": 1655037835,
      "ems": null
    },
    {
      "latitude": 50.641525,
      "longitude": 4.944367,
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
      "heading": 234,
      "squawk": "4451",
      "timestamp": 1655037842,
      "ems": null
    },
    {
      "latitude": 50.639942,
      "longitude": 4.94073,
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
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1655037848,
      "ems": null
    },
    {
      "latitude": 50.638733,
      "longitude": 4.937776,
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
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1655037854,
      "ems": null
    },
    {
      "latitude": 50.638275,
      "longitude": 4.936403,
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
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1655037857,
      "ems": null
    },
    {
      "latitude": 50.637726,
      "longitude": 4.934885,
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
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1655037860,
      "ems": null
    },
    {
      "latitude": 50.637241,
      "longitude": 4.933455,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1655037863,
      "ems": null
    },
    {
      "latitude": 50.636719,
      "longitude": 4.931994,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1655037866,
      "ems": null
    },
    {
      "latitude": 50.636219,
      "longitude": 4.930486,
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
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1655037869,
      "ems": null
    },
    {
      "latitude": 50.635712,
      "longitude": 4.929103,
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
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1655037872,
      "ems": null
    },
    {
      "latitude": 50.6353,
      "longitude": 4.927585,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 247,
      "squawk": "4451",
      "timestamp": 1655037875,
      "ems": null
    },
    {
      "latitude": 50.634964,
      "longitude": 4.92618,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655037878,
      "ems": null
    },
    {
      "latitude": 50.634613,
      "longitude": 4.924694,
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
      "heading": 248,
      "squawk": "4451",
      "timestamp": 1655037881,
      "ems": null
    },
    {
      "latitude": 50.634216,
      "longitude": 4.923285,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1655037884,
      "ems": null
    },
    {
      "latitude": 50.633286,
      "longitude": 4.920429,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1655037890,
      "ems": null
    },
    {
      "latitude": 50.632278,
      "longitude": 4.917249,
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
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655037896,
      "ems": null
    },
    {
      "latitude": 50.63118,
      "longitude": 4.914286,
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
      "heading": 237,
      "squawk": "4451",
      "timestamp": 1655037902,
      "ems": null
    },
    {
      "latitude": 50.630585,
      "longitude": 4.912893,
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
      "heading": 234,
      "squawk": "4451",
      "timestamp": 1655037905,
      "ems": null
    },
    {
      "latitude": 50.629944,
      "longitude": 4.911467,
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
      "heading": 233,
      "squawk": "4451",
      "timestamp": 1655037908,
      "ems": null
    },
    {
      "latitude": 50.62933,
      "longitude": 4.910146,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 232,
      "squawk": "4451",
      "timestamp": 1655037911,
      "ems": null
    },
    {
      "latitude": 50.628677,
      "longitude": 4.908885,
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
      "heading": 232,
      "squawk": "4451",
      "timestamp": 1655037914,
      "ems": null
    },
    {
      "latitude": 50.628071,
      "longitude": 4.907474,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1655037917,
      "ems": null
    },
    {
      "latitude": 50.627373,
      "longitude": 4.905915,
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
      "heading": 236,
      "squawk": "4451",
      "timestamp": 1655037920,
      "ems": null
    },
    {
      "latitude": 50.626785,
      "longitude": 4.904384,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 237,
      "squawk": "4451",
      "timestamp": 1655037923,
      "ems": null
    },
    {
      "latitude": 50.625549,
      "longitude": 4.901348,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 237,
      "squawk": "4451",
      "timestamp": 1655037929,
      "ems": null
    },
    {
      "latitude": 50.624176,
      "longitude": 4.89824,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 233,
      "squawk": "4451",
      "timestamp": 1655037935,
      "ems": null
    },
    {
      "latitude": 50.622627,
      "longitude": 4.895003,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 232,
      "squawk": "4451",
      "timestamp": 1655037941,
      "ems": null
    },
    {
      "latitude": 50.621136,
      "longitude": 4.891811,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1655037947,
      "ems": null
    },
    {
      "latitude": 50.61969,
      "longitude": 4.888483,
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
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1655037953,
      "ems": null
    },
    {
      "latitude": 50.618389,
      "longitude": 4.885279,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 238,
      "squawk": "4451",
      "timestamp": 1655037959,
      "ems": null
    },
    {
      "latitude": 50.617691,
      "longitude": 4.883497,
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
      "heading": 238,
      "squawk": "4451",
      "timestamp": 1655037962,
      "ems": null
    },
    {
      "latitude": 50.617085,
      "longitude": 4.881938,
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
      "heading": 237,
      "squawk": "4451",
      "timestamp": 1655037965,
      "ems": null
    },
    {
      "latitude": 50.616386,
      "longitude": 4.880083,
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
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1655037968,
      "ems": null
    },
    {
      "latitude": 50.615738,
      "longitude": 4.878449,
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
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1655037971,
      "ems": null
    },
    {
      "latitude": 50.615223,
      "longitude": 4.877039,
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
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1655037974,
      "ems": null
    },
    {
      "latitude": 50.614517,
      "longitude": 4.875183,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1655037977,
      "ems": null
    },
    {
      "latitude": 50.613968,
      "longitude": 4.873624,
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
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1655037980,
      "ems": null
    },
    {
      "latitude": 50.612823,
      "longitude": 4.870413,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1655037986,
      "ems": null
    },
    {
      "latitude": 50.611591,
      "longitude": 4.867314,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 236,
      "squawk": "4451",
      "timestamp": 1655037992,
      "ems": null
    },
    {
      "latitude": 50.610382,
      "longitude": 4.864345,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1655037998,
      "ems": null
    },
    {
      "latitude": 50.60994,
      "longitude": 4.862968,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655038001,
      "ems": null
    },
    {
      "latitude": 50.609482,
      "longitude": 4.861378,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1655038004,
      "ems": null
    },
    {
      "latitude": 50.608978,
      "longitude": 4.859715,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1655038007,
      "ems": null
    },
    {
      "latitude": 50.608101,
      "longitude": 4.856773,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655038013,
      "ems": null
    },
    {
      "latitude": 50.607544,
      "longitude": 4.854844,
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
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1655038016,
      "ems": null
    },
    {
      "latitude": 50.607056,
      "longitude": 4.853283,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1655038019,
      "ems": null
    },
    {
      "latitude": 50.606564,
      "longitude": 4.851577,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1655038022,
      "ems": null
    },
    {
      "latitude": 50.606194,
      "longitude": 4.850167,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 248,
      "squawk": "4451",
      "timestamp": 1655038025,
      "ems": null
    },
    {
      "latitude": 50.60582,
      "longitude": 4.84844,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655038028,
      "ems": null
    },
    {
      "latitude": 50.604935,
      "longitude": 4.845119,
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
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1655038035,
      "ems": null
    },
    {
      "latitude": 50.603989,
      "longitude": 4.842152,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655038040,
      "ems": null
    },
    {
      "latitude": 50.602936,
      "longitude": 4.839044,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1655038047,
      "ems": null
    },
    {
      "latitude": 50.601864,
      "longitude": 4.835766,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1655038052,
      "ems": null
    },
    {
      "latitude": 50.60083,
      "longitude": 4.832539,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655038059,
      "ems": null
    },
    {
      "latitude": 50.600327,
      "longitude": 4.831015,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1655038062,
      "ems": null
    },
    {
      "latitude": 50.599258,
      "longitude": 4.827971,
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
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1655038068,
      "ems": null
    },
    {
      "latitude": 50.598083,
      "longitude": 4.824805,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1655038073,
      "ems": null
    },
    {
      "latitude": 50.597115,
      "longitude": 4.821513,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1655038080,
      "ems": null
    },
    {
      "latitude": 50.596161,
      "longitude": 4.818155,
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
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1655038085,
      "ems": null
    },
    {
      "latitude": 50.5952,
      "longitude": 4.815047,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1655038091,
      "ems": null
    },
    {
      "latitude": 50.594181,
      "longitude": 4.811863,
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
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1655038097,
      "ems": null
    },
    {
      "latitude": 50.593231,
      "longitude": 4.808759,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 247,
      "squawk": "4451",
      "timestamp": 1655038103,
      "ems": null
    },
    {
      "latitude": 50.592831,
      "longitude": 4.807112,
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
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655038107,
      "ems": null
    },
    {
      "latitude": 50.592407,
      "longitude": 4.80529,
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
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655038110,
      "ems": null
    },
    {
      "latitude": 50.592087,
      "longitude": 4.803627,
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
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655038112,
      "ems": null
    },
    {
      "latitude": 50.591717,
      "longitude": 4.801768,
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
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655038116,
      "ems": null
    },
    {
      "latitude": 50.591354,
      "longitude": 4.800231,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655038119,
      "ems": null
    },
    {
      "latitude": 50.590923,
      "longitude": 4.798279,
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
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655038122,
      "ems": null
    },
    {
      "latitude": 50.590576,
      "longitude": 4.796617,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655038124,
      "ems": null
    },
    {
      "latitude": 50.590256,
      "longitude": 4.794809,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655038127,
      "ems": null
    },
    {
      "latitude": 50.589901,
      "longitude": 4.793008,
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
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655038130,
      "ems": null
    },
    {
      "latitude": 50.589203,
      "longitude": 4.789445,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655038137,
      "ems": null
    },
    {
      "latitude": 50.588596,
      "longitude": 4.785956,
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
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1655038143,
      "ems": null
    },
    {
      "latitude": 50.587875,
      "longitude": 4.782667,
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
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655038148,
      "ems": null
    },
    {
      "latitude": 50.587097,
      "longitude": 4.779342,
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
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1655038154,
      "ems": null
    },
    {
      "latitude": 50.586411,
      "longitude": 4.7758,
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
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655038161,
      "ems": null
    },
    {
      "latitude": 50.585632,
      "longitude": 4.772114,
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
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655038167,
      "ems": null
    },
    {
      "latitude": 50.584991,
      "longitude": 4.768789,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655038172,
      "ems": null
    },
    {
      "latitude": 50.584351,
      "longitude": 4.765175,
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
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655038179,
      "ems": null
    },
    {
      "latitude": 50.58371,
      "longitude": 4.76146,
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
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1655038185,
      "ems": null
    },
    {
      "latitude": 50.583023,
      "longitude": 4.757875,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655038191,
      "ems": null
    },
    {
      "latitude": 50.582336,
      "longitude": 4.754767,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1655038197,
      "ems": null
    },
    {
      "latitude": 50.58165,
      "longitude": 4.751225,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1655038203,
      "ems": null
    },
    {
      "latitude": 50.580917,
      "longitude": 4.747612,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655038209,
      "ems": null
    },
    {
      "latitude": 50.580311,
      "longitude": 4.744312,
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
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1655038214,
      "ems": null
    },
    {
      "latitude": 50.580048,
      "longitude": 4.742335,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655038218,
      "ems": null
    },
    {
      "latitude": 50.579819,
      "longitude": 4.740312,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655038221,
      "ems": null
    },
    {
      "latitude": 50.579563,
      "longitude": 4.738448,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655038224,
      "ems": null
    },
    {
      "latitude": 50.579315,
      "longitude": 4.736553,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1655038227,
      "ems": null
    },
    {
      "latitude": 50.579086,
      "longitude": 4.734818,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655038230,
      "ems": null
    },
    {
      "latitude": 50.578903,
      "longitude": 4.733011,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1655038233,
      "ems": null
    },
    {
      "latitude": 50.578682,
      "longitude": 4.731247,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655038236,
      "ems": null
    },
    {
      "latitude": 50.578449,
      "longitude": 4.729243,
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
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655038239,
      "ems": null
    },
    {
      "latitude": 50.578217,
      "longitude": 4.727387,
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1655038242,
      "ems": null
    },
    {
      "latitude": 50.577843,
      "longitude": 4.72375,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655038248,
      "ems": null
    },
    {
      "latitude": 50.57753,
      "longitude": 4.720507,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655038253,
      "ems": null
    },
    {
      "latitude": 50.577072,
      "longitude": 4.716749,
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
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1655038260,
      "ems": null
    },
    {
      "latitude": 50.576523,
      "longitude": 4.71299,
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
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1655038266,
      "ems": null
    },
    {
      "latitude": 50.576168,
      "longitude": 4.709795,
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655038271,
      "ems": null
    },
    {
      "latitude": 50.575935,
      "longitude": 4.706008,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1655038278,
      "ems": null
    },
    {
      "latitude": 50.575886,
      "longitude": 4.704672,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1655038281,
      "ems": null
    },
    {
      "latitude": 50.575974,
      "longitude": 4.702582,
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
      "heading": 276,
      "squawk": "4451",
      "timestamp": 1655038284,
      "ems": null
    },
    {
      "latitude": 50.576111,
      "longitude": 4.701064,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 279,
      "squawk": "4451",
      "timestamp": 1655038287,
      "ems": null
    },
    {
      "latitude": 50.576294,
      "longitude": 4.699546,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1655038290,
      "ems": null
    },
    {
      "latitude": 50.576523,
      "longitude": 4.697956,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1655038293,
      "ems": null
    },
    {
      "latitude": 50.576725,
      "longitude": 4.696358,
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
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1655038296,
      "ems": null
    },
    {
      "latitude": 50.576912,
      "longitude": 4.694725,
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
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1655038299,
      "ems": null
    },
    {
      "latitude": 50.577118,
      "longitude": 4.693186,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1655038302,
      "ems": null
    },
    {
      "latitude": 50.577301,
      "longitude": 4.691596,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1655038305,
      "ems": null
    },
    {
      "latitude": 50.577484,
      "longitude": 4.690295,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 282,
      "squawk": "4451",
      "timestamp": 1655038308,
      "ems": null
    },
    {
      "latitude": 50.577805,
      "longitude": 4.688199,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1655038311,
      "ems": null
    },
    {
      "latitude": 50.578121,
      "longitude": 4.686485,
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
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1655038314,
      "ems": null
    },
    {
      "latitude": 50.578629,
      "longitude": 4.683067,
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
      "heading": 283,
      "squawk": "4451",
      "timestamp": 1655038320,
      "ems": null
    },
    {
      "latitude": 50.578903,
      "longitude": 4.681477,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1655038323,
      "ems": null
    },
    {
      "latitude": 50.579239,
      "longitude": 4.679805,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1655038326,
      "ems": null
    },
    {
      "latitude": 50.5798,
      "longitude": 4.676464,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 283,
      "squawk": "4451",
      "timestamp": 1655038332,
      "ems": null
    },
    {
      "latitude": 50.580124,
      "longitude": 4.67394,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1655038337,
      "ems": null
    },
    {
      "latitude": 50.580826,
      "longitude": 4.66984,
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
      "heading": 290,
      "squawk": "4451",
      "timestamp": 1655038344,
      "ems": null
    },
    {
      "latitude": 50.581329,
      "longitude": 4.668322,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655038347,
      "ems": null
    },
    {
      "latitude": 50.581924,
      "longitude": 4.666876,
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
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655038350,
      "ems": null
    },
    {
      "latitude": 50.582611,
      "longitude": 4.665287,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655038353,
      "ems": null
    },
    {
      "latitude": 50.583252,
      "longitude": 4.663696,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655038356,
      "ems": null
    },
    {
      "latitude": 50.583893,
      "longitude": 4.662138,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655038359,
      "ems": null
    },
    {
      "latitude": 50.584312,
      "longitude": 4.661024,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655038362,
      "ems": null
    },
    {
      "latitude": 50.584873,
      "longitude": 4.659539,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655038365,
      "ems": null
    },
    {
      "latitude": 50.585632,
      "longitude": 4.657263,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655038368,
      "ems": null
    },
    {
      "latitude": 50.586182,
      "longitude": 4.655601,
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
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655038371,
      "ems": null
    },
    {
      "latitude": 50.586735,
      "longitude": 4.653898,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655038374,
      "ems": null
    },
    {
      "latitude": 50.587875,
      "longitude": 4.650686,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655038380,
      "ems": null
    },
    {
      "latitude": 50.588223,
      "longitude": 4.649518,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655038383,
      "ems": null
    },
    {
      "latitude": 50.588737,
      "longitude": 4.647439,
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
      "heading": 290,
      "squawk": "4451",
      "timestamp": 1655038386,
      "ems": null
    },
    {
      "latitude": 50.589111,
      "longitude": 4.645988,
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
      "heading": 290,
      "squawk": "4451",
      "timestamp": 1655038389,
      "ems": null
    },
    {
      "latitude": 50.58934,
      "longitude": 4.644904,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 289,
      "squawk": "4451",
      "timestamp": 1655038392,
      "ems": null
    },
    {
      "latitude": 50.589947,
      "longitude": 4.642466,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 290,
      "squawk": "4451",
      "timestamp": 1655038395,
      "ems": null
    },
    {
      "latitude": 50.590393,
      "longitude": 4.640567,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 290,
      "squawk": "4451",
      "timestamp": 1655038398,
      "ems": null
    },
    {
      "latitude": 50.590668,
      "longitude": 4.63941,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655038401,
      "ems": null
    },
    {
      "latitude": 50.591263,
      "longitude": 4.637025,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655038404,
      "ems": null
    },
    {
      "latitude": 50.591667,
      "longitude": 4.635414,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655038407,
      "ems": null
    },
    {
      "latitude": 50.592785,
      "longitude": 4.631925,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655038413,
      "ems": null
    },
    {
      "latitude": 50.593597,
      "longitude": 4.629581,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655038418,
      "ems": null
    },
    {
      "latitude": 50.594284,
      "longitude": 4.627702,
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
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655038422,
      "ems": null
    },
    {
      "latitude": 50.595207,
      "longitude": 4.625021,
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655038427,
      "ems": null
    },
    {
      "latitude": 50.596207,
      "longitude": 4.622498,
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655038431,
      "ems": null
    },
    {
      "latitude": 50.596836,
      "longitude": 4.621087,
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
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1655038434,
      "ems": null
    },
    {
      "latitude": 50.597397,
      "longitude": 4.619895,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 307,
      "squawk": "4451",
      "timestamp": 1655038437,
      "ems": null
    },
    {
      "latitude": 50.598267,
      "longitude": 4.618161,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1655038440,
      "ems": null
    },
    {
      "latitude": 50.59845,
      "longitude": 4.617727,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1655038441,
      "ems": null
    },
    {
      "latitude": 50.599537,
      "longitude": 4.61552,
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
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1655038446,
      "ems": null
    },
    {
      "latitude": 50.600655,
      "longitude": 4.613219,
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
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1655038450,
      "ems": null
    },
    {
      "latitude": 50.601444,
      "longitude": 4.61166,
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
      "heading": 309,
      "squawk": "4451",
      "timestamp": 1655038454,
      "ems": null
    },
    {
      "latitude": 50.60257,
      "longitude": 4.609632,
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
      "heading": 309,
      "squawk": "4451",
      "timestamp": 1655038458,
      "ems": null
    },
    {
      "latitude": 50.603989,
      "longitude": 4.606596,
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
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1655038464,
      "ems": null
    },
    {
      "latitude": 50.604984,
      "longitude": 4.604385,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655038469,
      "ems": null
    },
    {
      "latitude": 50.605728,
      "longitude": 4.602332,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655038473,
      "ems": null
    },
    {
      "latitude": 50.606007,
      "longitude": 4.601564,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655038476,
      "ems": null
    },
    {
      "latitude": 50.606846,
      "longitude": 4.599189,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655038479,
      "ems": null
    },
    {
      "latitude": 50.607544,
      "longitude": 4.597036,
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
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655038484,
      "ems": null
    },
    {
      "latitude": 50.608429,
      "longitude": 4.594512,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655038488,
      "ems": null
    },
    {
      "latitude": 50.609962,
      "longitude": 4.590949,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1655038496,
      "ems": null
    },
    {
      "latitude": 50.611034,
      "longitude": 4.588648,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 307,
      "squawk": "4451",
      "timestamp": 1655038501,
      "ems": null
    },
    {
      "latitude": 50.611954,
      "longitude": 4.58672,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1655038505,
      "ems": null
    },
    {
      "latitude": 50.612961,
      "longitude": 4.584551,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655038510,
      "ems": null
    },
    {
      "latitude": 50.613556,
      "longitude": 4.583106,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1655038515,
      "ems": null
    },
    {
      "latitude": 50.614471,
      "longitude": 4.580215,
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
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655038519,
      "ems": null
    },
    {
      "latitude": 50.615112,
      "longitude": 4.578119,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655038523,
      "ems": null
    },
    {
      "latitude": 50.615753,
      "longitude": 4.576167,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655038527,
      "ems": null
    },
    {
      "latitude": 50.617126,
      "longitude": 4.572698,
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
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655038535,
      "ems": null
    },
    {
      "latitude": 50.618435,
      "longitude": 4.569422,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655038543,
      "ems": null
    },
    {
      "latitude": 50.620159,
      "longitude": 4.564226,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655038552,
      "ems": null
    },
    {
      "latitude": 50.621601,
      "longitude": 4.559474,
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
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655038560,
      "ems": null
    },
    {
      "latitude": 50.622757,
      "longitude": 4.556507,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655038568,
      "ems": null
    },
    {
      "latitude": 50.624069,
      "longitude": 4.553313,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655038572,
      "ems": null
    },
    {
      "latitude": 50.625187,
      "longitude": 4.550493,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655038576,
      "ems": null
    },
    {
      "latitude": 50.626862,
      "longitude": 4.545519,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655038584,
      "ems": null
    },
    {
      "latitude": 50.627934,
      "longitude": 4.542253,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655038589,
      "ems": null
    },
    {
      "latitude": 50.629562,
      "longitude": 4.537873,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655038597,
      "ems": null
    },
    {
      "latitude": 50.631226,
      "longitude": 4.533451,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655038605,
      "ems": null
    },
    {
      "latitude": 50.632874,
      "longitude": 4.528463,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655038614,
      "ems": null
    },
    {
      "latitude": 50.634476,
      "longitude": 4.524054,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655038622,
      "ems": null
    },
    {
      "latitude": 50.635895,
      "longitude": 4.519909,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655038630,
      "ems": null
    },
    {
      "latitude": 50.637222,
      "longitude": 4.515887,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655038638,
      "ems": null
    },
    {
      "latitude": 50.638966,
      "longitude": 4.511075,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655038647,
      "ems": null
    },
    {
      "latitude": 50.640015,
      "longitude": 4.508225,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655038653,
      "ems": null
    },
    {
      "latitude": 50.640968,
      "longitude": 4.505434,
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
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655038659,
      "ems": null
    },
    {
      "latitude": 50.641899,
      "longitude": 4.502539,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655038665,
      "ems": null
    },
    {
      "latitude": 50.642349,
      "longitude": 4.500998,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655038667,
      "ems": null
    },
    {
      "latitude": 50.642971,
      "longitude": 4.498901,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655038671,
      "ems": null
    },
    {
      "latitude": 50.643448,
      "longitude": 4.497311,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655038674,
      "ems": null
    },
    {
      "latitude": 50.64455,
      "longitude": 4.494225,
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655038680,
      "ems": null
    },
    {
      "latitude": 50.645248,
      "longitude": 4.492369,
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
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655038685,
      "ems": null
    },
    {
      "latitude": 50.646275,
      "longitude": 4.489994,
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655038689,
      "ems": null
    },
    {
      "latitude": 50.646927,
      "longitude": 4.488421,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655038692,
      "ems": null
    },
    {
      "latitude": 50.647484,
      "longitude": 4.486876,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655038695,
      "ems": null
    },
    {
      "latitude": 50.648647,
      "longitude": 4.483684,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655038702,
      "ems": null
    },
    {
      "latitude": 50.649811,
      "longitude": 4.480566,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655038708,
      "ems": null
    },
    {
      "latitude": 50.650818,
      "longitude": 4.477724,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655038713,
      "ems": null
    },
    {
      "latitude": 50.651302,
      "longitude": 4.476261,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655038717,
      "ems": null
    },
    {
      "latitude": 50.652233,
      "longitude": 4.473737,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655038723,
      "ems": null
    },
    {
      "latitude": 50.653675,
      "longitude": 4.469728,
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655038729,
      "ems": null
    },
    {
      "latitude": 50.654934,
      "longitude": 4.466388,
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655038735,
      "ems": null
    },
    {
      "latitude": 50.65567,
      "longitude": 4.464352,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655038741,
      "ems": null
    },
    {
      "latitude": 50.656937,
      "longitude": 4.460895,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655038747,
      "ems": null
    },
    {
      "latitude": 50.657818,
      "longitude": 4.458371,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655038752,
      "ems": null
    },
    {
      "latitude": 50.659214,
      "longitude": 4.45555,
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
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1655038756,
      "ems": null
    },
    {
      "latitude": 50.660202,
      "longitude": 4.453727,
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
      "heading": 309,
      "squawk": "4451",
      "timestamp": 1655038760,
      "ems": null
    },
    {
      "latitude": 50.661163,
      "longitude": 4.451776,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1655038764,
      "ems": null
    },
    {
      "latitude": 50.662079,
      "longitude": 4.449896,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 307,
      "squawk": "4451",
      "timestamp": 1655038768,
      "ems": null
    },
    {
      "latitude": 50.66238,
      "longitude": 4.449166,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1655038770,
      "ems": null
    },
    {
      "latitude": 50.664047,
      "longitude": 4.445054,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655038778,
      "ems": null
    },
    {
      "latitude": 50.664825,
      "longitude": 4.442741,
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
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655038782,
      "ems": null
    },
    {
      "latitude": 50.665329,
      "longitude": 4.441296,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655038785,
      "ems": null
    },
    {
      "latitude": 50.665924,
      "longitude": 4.439488,
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
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655038788,
      "ems": null
    },
    {
      "latitude": 50.666428,
      "longitude": 4.437971,
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655038791,
      "ems": null
    },
    {
      "latitude": 50.667023,
      "longitude": 4.436308,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655038794,
      "ems": null
    },
    {
      "latitude": 50.667618,
      "longitude": 4.43479,
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655038797,
      "ems": null
    },
    {
      "latitude": 50.668808,
      "longitude": 4.431755,
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655038803,
      "ems": null
    },
    {
      "latitude": 50.669502,
      "longitude": 4.42994,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655038806,
      "ems": null
    },
    {
      "latitude": 50.670822,
      "longitude": 4.426695,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1655038812,
      "ems": null
    },
    {
      "latitude": 50.6716,
      "longitude": 4.425115,
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
      "heading": 309,
      "squawk": "4451",
      "timestamp": 1655038815,
      "ems": null
    },
    {
      "latitude": 50.67247,
      "longitude": 4.423556,
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
      "heading": 311,
      "squawk": "4451",
      "timestamp": 1655038818,
      "ems": null
    },
    {
      "latitude": 50.673248,
      "longitude": 4.422071,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1655038821,
      "ems": null
    },
    {
      "latitude": 50.674026,
      "longitude": 4.420587,
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
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1655038824,
      "ems": null
    },
    {
      "latitude": 50.67485,
      "longitude": 4.419102,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 311,
      "squawk": "4451",
      "timestamp": 1655038827,
      "ems": null
    },
    {
      "latitude": 50.675694,
      "longitude": 4.417648,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1655038830,
      "ems": null
    },
    {
      "latitude": 50.676579,
      "longitude": 4.416351,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1655038833,
      "ems": null
    },
    {
      "latitude": 50.677742,
      "longitude": 4.414902,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1655038836,
      "ems": null
    },
    {
      "latitude": 50.678604,
      "longitude": 4.413906,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655038839,
      "ems": null
    },
    {
      "latitude": 50.679745,
      "longitude": 4.412689,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1655038842,
      "ems": null
    },
    {
      "latitude": 50.680908,
      "longitude": 4.411926,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1655038845,
      "ems": null
    },
    {
      "latitude": 50.682358,
      "longitude": 4.411604,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1655038848,
      "ems": null
    },
    {
      "latitude": 50.68364,
      "longitude": 4.411901,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 12,
      "squawk": "4451",
      "timestamp": 1655038851,
      "ems": null
    },
    {
      "latitude": 50.684868,
      "longitude": 4.412537,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1655038854,
      "ems": null
    },
    {
      "latitude": 50.686214,
      "longitude": 4.412613,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1655038857,
      "ems": null
    },
    {
      "latitude": 50.687382,
      "longitude": 4.411926,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1655038860,
      "ems": null
    },
    {
      "latitude": 50.688217,
      "longitude": 4.410477,
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
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1655038863,
      "ems": null
    },
    {
      "latitude": 50.688538,
      "longitude": 4.409081,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 289,
      "squawk": "4451",
      "timestamp": 1655038866,
      "ems": null
    },
    {
      "latitude": 50.688591,
      "longitude": 4.406815,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1655038870,
      "ems": null
    },
    {
      "latitude": 50.688446,
      "longitude": 4.405889,
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
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655038873,
      "ems": null
    },
    {
      "latitude": 50.687714,
      "longitude": 4.40381,
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
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655038876,
      "ems": null
    },
    {
      "latitude": 50.687531,
      "longitude": 4.403439,
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
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1655038877,
      "ems": null
    },
    {
      "latitude": 50.686661,
      "longitude": 4.402103,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 222,
      "squawk": "4451",
      "timestamp": 1655038881,
      "ems": null
    },
    {
      "latitude": 50.685844,
      "longitude": 4.40094,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 221,
      "squawk": "4451",
      "timestamp": 1655038885,
      "ems": null
    },
    {
      "latitude": 50.684921,
      "longitude": 4.399579,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 226,
      "squawk": "4451",
      "timestamp": 1655038889,
      "ems": null
    },
    {
      "latitude": 50.684448,
      "longitude": 4.398346,
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
      "heading": 248,
      "squawk": "4451",
      "timestamp": 1655038893,
      "ems": null
    },
    {
      "latitude": 50.68483,
      "longitude": 4.394309,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655038901,
      "ems": null
    },
    {
      "latitude": 50.685837,
      "longitude": 4.392527,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1655038906,
      "ems": null
    },
    {
      "latitude": 50.686707,
      "longitude": 4.391191,
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
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1655038910,
      "ems": null
    },
    {
      "latitude": 50.687382,
      "longitude": 4.390106,
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
      "heading": 314,
      "squawk": "4451",
      "timestamp": 1655038914,
      "ems": null
    },
    {
      "latitude": 50.688446,
      "longitude": 4.388296,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1655038918,
      "ems": null
    },
    {
      "latitude": 50.689499,
      "longitude": 4.38644,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 314,
      "squawk": "4451",
      "timestamp": 1655038923,
      "ems": null
    },
    {
      "latitude": 50.690323,
      "longitude": 4.385178,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1655038927,
      "ems": null
    },
    {
      "latitude": 50.691879,
      "longitude": 4.382432,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1655038935,
      "ems": null
    },
    {
      "latitude": 50.692921,
      "longitude": 4.380875,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1655038941,
      "ems": null
    },
    {
      "latitude": 50.694031,
      "longitude": 4.379611,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1655038945,
      "ems": null
    },
    {
      "latitude": 50.694828,
      "longitude": 4.378738,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1655038948,
      "ems": null
    },
    {
      "latitude": 50.695541,
      "longitude": 4.377903,
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
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655038950,
      "ems": null
    },
    {
      "latitude": 50.69632,
      "longitude": 4.376907,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1655038953,
      "ems": null
    },
    {
      "latitude": 50.697155,
      "longitude": 4.375992,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655038956,
      "ems": null
    },
    {
      "latitude": 50.698181,
      "longitude": 4.374847,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655038960,
      "ems": null
    },
    {
      "latitude": 50.699066,
      "longitude": 4.373856,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1655038963,
      "ems": null
    },
    {
      "latitude": 50.699936,
      "longitude": 4.372856,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655038966,
      "ems": null
    },
    {
      "latitude": 50.700832,
      "longitude": 4.371796,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1655038969,
      "ems": null
    },
    {
      "latitude": 50.702637,
      "longitude": 4.369812,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1655038975,
      "ems": null
    },
    {
      "latitude": 50.704372,
      "longitude": 4.367905,
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1655038981,
      "ems": null
    },
    {
      "latitude": 50.70628,
      "longitude": 4.365845,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1655038986,
      "ems": null
    },
    {
      "latitude": 50.708176,
      "longitude": 4.363948,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1655038992,
      "ems": null
    },
    {
      "latitude": 50.709229,
      "longitude": 4.363131,
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
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1655038995,
      "ems": null
    },
    {
      "latitude": 50.710281,
      "longitude": 4.362315,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1655038998,
      "ems": null
    },
    {
      "latitude": 50.711449,
      "longitude": 4.361572,
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
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1655039002,
      "ems": null
    },
    {
      "latitude": 50.712433,
      "longitude": 4.360979,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1655039004,
      "ems": null
    },
    {
      "latitude": 50.71368,
      "longitude": 4.360275,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1655039008,
      "ems": null
    },
    {
      "latitude": 50.714615,
      "longitude": 4.359741,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1655039011,
      "ems": null
    },
    {
      "latitude": 50.71582,
      "longitude": 4.3589,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1655039014,
      "ems": null
    },
    {
      "latitude": 50.716755,
      "longitude": 4.358139,
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
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1655039017,
      "ems": null
    },
    {
      "latitude": 50.718475,
      "longitude": 4.356613,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1655039022,
      "ems": null
    },
    {
      "latitude": 50.719574,
      "longitude": 4.355559,
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
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1655039025,
      "ems": null
    },
    {
      "latitude": 50.720215,
      "longitude": 4.354966,
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
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1655039029,
      "ems": null
    },
    {
      "latitude": 50.721268,
      "longitude": 4.354001,
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
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1655039032,
      "ems": null
    },
    {
      "latitude": 50.72197,
      "longitude": 4.353485,
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
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1655039033,
      "ems": null
    },
    {
      "latitude": 50.724655,
      "longitude": 4.352071,
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
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1655039040,
      "ems": null
    },
    {
      "latitude": 50.72588,
      "longitude": 4.351501,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1655039044,
      "ems": null
    },
    {
      "latitude": 50.726902,
      "longitude": 4.351044,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1655039046,
      "ems": null
    },
    {
      "latitude": 50.727539,
      "longitude": 4.35066,
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
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1655039049,
      "ems": null
    },
    {
      "latitude": 50.728764,
      "longitude": 4.349976,
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
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1655039052,
      "ems": null
    },
    {
      "latitude": 50.729828,
      "longitude": 4.349398,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1655039056,
      "ems": null
    },
    {
      "latitude": 50.730579,
      "longitude": 4.34906,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1655039059,
      "ems": null
    },
    {
      "latitude": 50.731934,
      "longitude": 4.348433,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1655039061,
      "ems": null
    },
    {
      "latitude": 50.733002,
      "longitude": 4.347916,
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
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1655039064,
      "ems": null
    },
    {
      "latitude": 50.735229,
      "longitude": 4.3468,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1655039070,
      "ems": null
    },
    {
      "latitude": 50.737106,
      "longitude": 4.345761,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1655039076,
      "ems": null
    },
    {
      "latitude": 50.738617,
      "longitude": 4.345315,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1655039079,
      "ems": null
    },
    {
      "latitude": 50.739567,
      "longitude": 4.345093,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1655039082,
      "ems": null
    },
    {
      "latitude": 50.74086,
      "longitude": 4.344722,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1655039086,
      "ems": null
    },
    {
      "latitude": 50.741985,
      "longitude": 4.344406,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1655039089,
      "ems": null
    },
    {
      "latitude": 50.742828,
      "longitude": 4.344054,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1655039092,
      "ems": null
    },
    {
      "latitude": 50.744034,
      "longitude": 4.343643,
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1655039095,
      "ems": null
    },
    {
      "latitude": 50.745106,
      "longitude": 4.343338,
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1655039098,
      "ems": null
    },
    {
      "latitude": 50.746078,
      "longitude": 4.34294,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1655039100,
      "ems": null
    },
    {
      "latitude": 50.748276,
      "longitude": 4.342049,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1655039107,
      "ems": null
    },
    {
      "latitude": 50.749832,
      "longitude": 4.341455,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1655039112,
      "ems": null
    },
    {
      "latitude": 50.751297,
      "longitude": 4.34082,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1655039116,
      "ems": null
    },
    {
      "latitude": 50.752396,
      "longitude": 4.340268,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1655039119,
      "ems": null
    },
    {
      "latitude": 50.753448,
      "longitude": 4.339674,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1655039122,
      "ems": null
    },
    {
      "latitude": 50.754135,
      "longitude": 4.339294,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1655039124,
      "ems": null
    },
    {
      "latitude": 50.755554,
      "longitude": 4.338041,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655039129,
      "ems": null
    },
    {
      "latitude": 50.756279,
      "longitude": 4.336929,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 309,
      "squawk": "4451",
      "timestamp": 1655039133,
      "ems": null
    },
    {
      "latitude": 50.757023,
      "longitude": 4.33548,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1655039137,
      "ems": null
    },
    {
      "latitude": 50.758186,
      "longitude": 4.333115,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1655039141,
      "ems": null
    },
    {
      "latitude": 50.758698,
      "longitude": 4.331894,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655039145,
      "ems": null
    },
    {
      "latitude": 50.759396,
      "longitude": 4.330368,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655039149,
      "ems": null
    },
    {
      "latitude": 50.759995,
      "longitude": 4.328984,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1655039153,
      "ems": null
    },
    {
      "latitude": 50.760727,
      "longitude": 4.327277,
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
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655039157,
      "ems": null
    },
    {
      "latitude": 50.761368,
      "longitude": 4.325718,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655039161,
      "ems": null
    },
    {
      "latitude": 50.761909,
      "longitude": 4.324341,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655039165,
      "ems": null
    },
    {
      "latitude": 50.763428,
      "longitude": 4.320893,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655039173,
      "ems": null
    },
    {
      "latitude": 50.76461,
      "longitude": 4.317932,
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
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655039181,
      "ems": null
    },
    {
      "latitude": 50.765682,
      "longitude": 4.314957,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655039189,
      "ems": null
    },
    {
      "latitude": 50.766285,
      "longitude": 4.313049,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655039193,
      "ems": null
    },
    {
      "latitude": 50.766846,
      "longitude": 4.311295,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655039197,
      "ems": null
    },
    {
      "latitude": 50.767456,
      "longitude": 4.309387,
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
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655039201,
      "ems": null
    },
    {
      "latitude": 50.767548,
      "longitude": 4.309165,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655039203,
      "ems": null
    },
    {
      "latitude": 50.768509,
      "longitude": 4.306195,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655039209,
      "ems": null
    },
    {
      "latitude": 50.769592,
      "longitude": 4.303131,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655039215,
      "ems": null
    },
    {
      "latitude": 50.770065,
      "longitude": 4.30189,
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
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655039218,
      "ems": null
    },
    {
      "latitude": 50.770981,
      "longitude": 4.299663,
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655039222,
      "ems": null
    },
    {
      "latitude": 50.771641,
      "longitude": 4.297867,
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
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655039226,
      "ems": null
    },
    {
      "latitude": 50.772354,
      "longitude": 4.2961,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655039230,
      "ems": null
    },
    {
      "latitude": 50.772991,
      "longitude": 4.294662,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1655039233,
      "ems": null
    },
    {
      "latitude": 50.773407,
      "longitude": 4.293798,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1655039235,
      "ems": null
    },
    {
      "latitude": 50.774105,
      "longitude": 4.292297,
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
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1655039239,
      "ems": null
    },
    {
      "latitude": 50.775318,
      "longitude": 4.289474,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655039245,
      "ems": null
    },
    {
      "latitude": 50.775833,
      "longitude": 4.288454,
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
      "heading": 307,
      "squawk": "4451",
      "timestamp": 1655039247,
      "ems": null
    },
    {
      "latitude": 50.777206,
      "longitude": 4.285707,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1655039254,
      "ems": null
    },
    {
      "latitude": 50.778763,
      "longitude": 4.283524,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1655039261,
      "ems": null
    },
    {
      "latitude": 50.779495,
      "longitude": 4.282589,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1655039264,
      "ems": null
    },
    {
      "latitude": 50.780624,
      "longitude": 4.281158,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655039268,
      "ems": null
    },
    {
      "latitude": 50.781509,
      "longitude": 4.28014,
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
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655039272,
      "ems": null
    },
    {
      "latitude": 50.782379,
      "longitude": 4.279027,
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
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655039276,
      "ems": null
    },
    {
      "latitude": 50.783432,
      "longitude": 4.277839,
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
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655039280,
      "ems": null
    },
    {
      "latitude": 50.784489,
      "longitude": 4.276657,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1655039284,
      "ems": null
    },
    {
      "latitude": 50.785309,
      "longitude": 4.275908,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1655039288,
      "ems": null
    },
    {
      "latitude": 50.786636,
      "longitude": 4.274647,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1655039292,
      "ems": null
    },
    {
      "latitude": 50.787781,
      "longitude": 4.273459,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1655039296,
      "ems": null
    },
    {
      "latitude": 50.788677,
      "longitude": 4.272537,
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
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1655039300,
      "ems": null
    },
    {
      "latitude": 50.789936,
      "longitude": 4.271393,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1655039304,
      "ems": null
    },
    {
      "latitude": 50.792355,
      "longitude": 4.268951,
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
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655039312,
      "ems": null
    },
    {
      "latitude": 50.794636,
      "longitude": 4.266281,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655039320,
      "ems": null
    },
    {
      "latitude": 50.795883,
      "longitude": 4.264699,
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
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1655039324,
      "ems": null
    },
    {
      "latitude": 50.796844,
      "longitude": 4.263438,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1655039328,
      "ems": null
    },
    {
      "latitude": 50.797943,
      "longitude": 4.261856,
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
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1655039332,
      "ems": null
    },
    {
      "latitude": 50.798996,
      "longitude": 4.260394,
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
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1655039336,
      "ems": null
    },
    {
      "latitude": 50.801331,
      "longitude": 4.257499,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1655039344,
      "ems": null
    },
    {
      "latitude": 50.803711,
      "longitude": 4.254307,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655039352,
      "ems": null
    },
    {
      "latitude": 50.805862,
      "longitude": 4.251561,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1655039360,
      "ems": null
    },
    {
      "latitude": 50.808277,
      "longitude": 4.248581,
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
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1655039368,
      "ems": null
    },
    {
      "latitude": 50.809906,
      "longitude": 4.246979,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1655039372,
      "ems": null
    },
    {
      "latitude": 50.811211,
      "longitude": 4.245453,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655039378,
      "ems": null
    },
    {
      "latitude": 50.813873,
      "longitude": 4.242356,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655039386,
      "ems": null
    },
    {
      "latitude": 50.815155,
      "longitude": 4.240945,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1655039390,
      "ems": null
    },
    {
      "latitude": 50.817539,
      "longitude": 4.23851,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1655039398,
      "ems": null
    },
    {
      "latitude": 50.820007,
      "longitude": 4.235916,
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
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1655039406,
      "ems": null
    },
    {
      "latitude": 50.822243,
      "longitude": 4.233398,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655039414,
      "ems": null
    },
    {
      "latitude": 50.823303,
      "longitude": 4.231963,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1655039418,
      "ems": null
    },
    {
      "latitude": 50.824356,
      "longitude": 4.230404,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1655039422,
      "ems": null
    },
    {
      "latitude": 50.825455,
      "longitude": 4.228549,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1655039426,
      "ems": null
    },
    {
      "latitude": 50.826244,
      "longitude": 4.226761,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655039430,
      "ems": null
    },
    {
      "latitude": 50.826664,
      "longitude": 4.225693,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655039434,
      "ems": null
    },
    {
      "latitude": 50.827377,
      "longitude": 4.223946,
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
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655039438,
      "ems": null
    },
    {
      "latitude": 50.828064,
      "longitude": 4.221942,
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
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655039442,
      "ems": null
    },
    {
      "latitude": 50.828571,
      "longitude": 4.220123,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655039446,
      "ems": null
    },
    {
      "latitude": 50.829071,
      "longitude": 4.218453,
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
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655039450,
      "ems": null
    },
    {
      "latitude": 50.829529,
      "longitude": 4.21682,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1655039454,
      "ems": null
    },
    {
      "latitude": 50.829987,
      "longitude": 4.214964,
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
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655039458,
      "ems": null
    },
    {
      "latitude": 50.830528,
      "longitude": 4.212952,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655039462,
      "ems": null
    },
    {
      "latitude": 50.831738,
      "longitude": 4.209671,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655039470,
      "ems": null
    },
    {
      "latitude": 50.832962,
      "longitude": 4.206131,
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
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655039477,
      "ems": null
    },
    {
      "latitude": 50.833416,
      "longitude": 4.204788,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655039480,
      "ems": null
    },
    {
      "latitude": 50.83429,
      "longitude": 4.201973,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655039486,
      "ems": null
    },
    {
      "latitude": 50.835205,
      "longitude": 4.199376,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655039492,
      "ems": null
    },
    {
      "latitude": 50.836021,
      "longitude": 4.197311,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655039498,
      "ems": null
    },
    {
      "latitude": 50.837082,
      "longitude": 4.194179,
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
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655039504,
      "ems": null
    },
    {
      "latitude": 50.838024,
      "longitude": 4.19136,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655039511,
      "ems": null
    },
    {
      "latitude": 50.838913,
      "longitude": 4.188686,
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
      "squawk": "4451",
      "timestamp": 1655039516,
      "ems": null
    },
    {
      "latitude": 50.839699,
      "longitude": 4.186325,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655039522,
      "ems": null
    },
    {
      "latitude": 50.840744,
      "longitude": 4.18297,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655039529,
      "ems": null
    },
    {
      "latitude": 50.841003,
      "longitude": 4.1819,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1655039531,
      "ems": null
    },
    {
      "latitude": 50.841702,
      "longitude": 4.179382,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655039537,
      "ems": null
    },
    {
      "latitude": 50.842865,
      "longitude": 4.175949,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655039544,
      "ems": null
    },
    {
      "latitude": 50.843842,
      "longitude": 4.173203,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655039550,
      "ems": null
    },
    {
      "latitude": 50.844772,
      "longitude": 4.17038,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655039556,
      "ems": null
    },
    {
      "latitude": 50.845333,
      "longitude": 4.168854,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655039558,
      "ems": null
    },
    {
      "latitude": 50.845825,
      "longitude": 4.167456,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655039561,
      "ems": null
    },
    {
      "latitude": 50.846355,
      "longitude": 4.165955,
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655039565,
      "ems": null
    },
    {
      "latitude": 50.847427,
      "longitude": 4.163055,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655039570,
      "ems": null
    },
    {
      "latitude": 50.847885,
      "longitude": 4.161369,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655039574,
      "ems": null
    },
    {
      "latitude": 50.848263,
      "longitude": 4.159927,
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
      "heading": 289,
      "squawk": "4451",
      "timestamp": 1655039576,
      "ems": null
    },
    {
      "latitude": 50.848591,
      "longitude": 4.158325,
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
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1655039579,
      "ems": null
    },
    {
      "latitude": 50.848915,
      "longitude": 4.15657,
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
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1655039583,
      "ems": null
    },
    {
      "latitude": 50.849213,
      "longitude": 4.154836,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1655039586,
      "ems": null
    },
    {
      "latitude": 50.849533,
      "longitude": 4.153129,
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
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1655039589,
      "ems": null
    },
    {
      "latitude": 50.849854,
      "longitude": 4.151644,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 289,
      "squawk": "4451",
      "timestamp": 1655039591,
      "ems": null
    },
    {
      "latitude": 50.85022,
      "longitude": 4.149857,
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
      "heading": 290,
      "squawk": "4451",
      "timestamp": 1655039594,
      "ems": null
    },
    {
      "latitude": 50.850685,
      "longitude": 4.148026,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1655039598,
      "ems": null
    },
    {
      "latitude": 50.851757,
      "longitude": 4.144669,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655039604,
      "ems": null
    },
    {
      "latitude": 50.852371,
      "longitude": 4.143034,
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
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655039607,
      "ems": null
    },
    {
      "latitude": 50.853012,
      "longitude": 4.141326,
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
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655039610,
      "ems": null
    },
    {
      "latitude": 50.853607,
      "longitude": 4.139767,
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655039612,
      "ems": null
    },
    {
      "latitude": 50.85434,
      "longitude": 4.13806,
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
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655039616,
      "ems": null
    },
    {
      "latitude": 50.85498,
      "longitude": 4.136427,
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
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655039619,
      "ems": null
    },
    {
      "latitude": 50.855667,
      "longitude": 4.134794,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655039622,
      "ems": null
    },
    {
      "latitude": 50.856262,
      "longitude": 4.133383,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655039624,
      "ems": null
    },
    {
      "latitude": 50.856968,
      "longitude": 4.131622,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655039628,
      "ems": null
    },
    {
      "latitude": 50.857635,
      "longitude": 4.12982,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655039631,
      "ems": null
    },
    {
      "latitude": 50.858738,
      "longitude": 4.126816,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655039636,
      "ems": null
    },
    {
      "latitude": 50.859344,
      "longitude": 4.124908,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655039640,
      "ems": null
    },
    {
      "latitude": 50.859856,
      "longitude": 4.123154,
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
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655039643,
      "ems": null
    },
    {
      "latitude": 50.860336,
      "longitude": 4.121581,
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
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655039646,
      "ems": null
    },
    {
      "latitude": 50.860882,
      "longitude": 4.119873,
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
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655039649,
      "ems": null
    },
    {
      "latitude": 50.861439,
      "longitude": 4.118271,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655039652,
      "ems": null
    },
    {
      "latitude": 50.862579,
      "longitude": 4.115122,
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
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655039658,
      "ems": null
    },
    {
      "latitude": 50.863861,
      "longitude": 4.112167,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1655039664,
      "ems": null
    },
    {
      "latitude": 50.864502,
      "longitude": 4.110817,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1655039667,
      "ems": null
    },
    {
      "latitude": 50.865162,
      "longitude": 4.10965,
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
      "heading": 312,
      "squawk": "4451",
      "timestamp": 1655039670,
      "ems": null
    },
    {
      "latitude": 50.866001,
      "longitude": 4.108124,
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
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1655039673,
      "ems": null
    },
    {
      "latitude": 50.866745,
      "longitude": 4.10666,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1655039676,
      "ems": null
    },
    {
      "latitude": 50.867386,
      "longitude": 4.105175,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1655039679,
      "ems": null
    },
    {
      "latitude": 50.868095,
      "longitude": 4.103622,
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
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1655039682,
      "ems": null
    },
    {
      "latitude": 50.868748,
      "longitude": 4.102249,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1655039685,
      "ems": null
    },
    {
      "latitude": 50.869957,
      "longitude": 4.099503,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655039691,
      "ems": null
    },
    {
      "latitude": 50.870468,
      "longitude": 4.098129,
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
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655039694,
      "ems": null
    },
    {
      "latitude": 50.871094,
      "longitude": 4.096564,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655039697,
      "ems": null
    },
    {
      "latitude": 50.871506,
      "longitude": 4.095302,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655039700,
      "ems": null
    },
    {
      "latitude": 50.87196,
      "longitude": 4.093628,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 290,
      "squawk": "4451",
      "timestamp": 1655039703,
      "ems": null
    },
    {
      "latitude": 50.87233,
      "longitude": 4.09211,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655039706,
      "ems": null
    },
    {
      "latitude": 50.872787,
      "longitude": 4.090329,
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
      "heading": 289,
      "squawk": "4451",
      "timestamp": 1655039709,
      "ems": null
    },
    {
      "latitude": 50.873108,
      "longitude": 4.088696,
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
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1655039712,
      "ems": null
    },
    {
      "latitude": 50.873356,
      "longitude": 4.08699,
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
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1655039715,
      "ems": null
    },
    {
      "latitude": 50.873611,
      "longitude": 4.085578,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1655039718,
      "ems": null
    },
    {
      "latitude": 50.873886,
      "longitude": 4.083797,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1655039721,
      "ems": null
    },
    {
      "latitude": 50.874252,
      "longitude": 4.081866,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1655039724,
      "ems": null
    },
    {
      "latitude": 50.874573,
      "longitude": 4.080456,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655039727,
      "ems": null
    },
    {
      "latitude": 50.87558,
      "longitude": 4.077264,
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
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655039733,
      "ems": null
    },
    {
      "latitude": 50.87645,
      "longitude": 4.07422,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655039739,
      "ems": null
    },
    {
      "latitude": 50.877079,
      "longitude": 4.072266,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655039744,
      "ems": null
    },
    {
      "latitude": 50.878006,
      "longitude": 4.069544,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655039748,
      "ems": null
    },
    {
      "latitude": 50.878784,
      "longitude": 4.067465,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655039752,
      "ems": null
    },
    {
      "latitude": 50.879642,
      "longitude": 4.065247,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655039756,
      "ems": null
    },
    {
      "latitude": 50.880711,
      "longitude": 4.062653,
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
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655039760,
      "ems": null
    },
    {
      "latitude": 50.881851,
      "longitude": 4.059374,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655039766,
      "ems": null
    },
    {
      "latitude": 50.8829,
      "longitude": 4.056168,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655039772,
      "ems": null
    },
    {
      "latitude": 50.883923,
      "longitude": 4.053116,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655039778,
      "ems": null
    },
    {
      "latitude": 50.885086,
      "longitude": 4.049606,
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
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655039784,
      "ems": null
    },
    {
      "latitude": 50.885651,
      "longitude": 4.047646,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655039787,
      "ems": null
    },
    {
      "latitude": 50.886658,
      "longitude": 4.044602,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655039793,
      "ems": null
    },
    {
      "latitude": 50.887756,
      "longitude": 4.041113,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655039799,
      "ems": null
    },
    {
      "latitude": 50.888813,
      "longitude": 4.03801,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655039805,
      "ems": null
    },
    {
      "latitude": 50.889511,
      "longitude": 4.036407,
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
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1655039808,
      "ems": null
    },
    {
      "latitude": 50.889954,
      "longitude": 4.035397,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655039810,
      "ems": null
    },
    {
      "latitude": 50.890022,
      "longitude": 4.03511,
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
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655039814,
      "ems": null
    },
    {
      "latitude": 50.891373,
      "longitude": 4.031754,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655039818,
      "ems": null
    },
    {
      "latitude": 50.892197,
      "longitude": 4.029756,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655039822,
      "ems": null
    },
    {
      "latitude": 50.892883,
      "longitude": 4.028197,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655039826,
      "ems": null
    },
    {
      "latitude": 50.893799,
      "longitude": 4.026044,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655039830,
      "ems": null
    },
    {
      "latitude": 50.894585,
      "longitude": 4.024048,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655039834,
      "ems": null
    },
    {
      "latitude": 50.896179,
      "longitude": 4.019883,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655039842,
      "ems": null
    },
    {
      "latitude": 50.897919,
      "longitude": 4.015726,
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655039850,
      "ems": null
    },
    {
      "latitude": 50.89896,
      "longitude": 4.012985,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655039856,
      "ems": null
    },
    {
      "latitude": 50.899567,
      "longitude": 4.01123,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655039859,
      "ems": null
    },
    {
      "latitude": 50.900589,
      "longitude": 4.008331,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655039865,
      "ems": null
    },
    {
      "latitude": 50.900963,
      "longitude": 4.007187,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655039868,
      "ems": null
    },
    {
      "latitude": 50.901535,
      "longitude": 4.005036,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 289,
      "squawk": "4451",
      "timestamp": 1655039871,
      "ems": null
    },
    {
      "latitude": 50.901855,
      "longitude": 4.003478,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1655039874,
      "ems": null
    },
    {
      "latitude": 50.902222,
      "longitude": 4.001918,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 290,
      "squawk": "4451",
      "timestamp": 1655039877,
      "ems": null
    },
    {
      "latitude": 50.902264,
      "longitude": 4.001694,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655039880,
      "ems": null
    },
    {
      "latitude": 50.904282,
      "longitude": 3.995683,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655039889,
      "ems": null
    },
    {
      "latitude": 50.905476,
      "longitude": 3.992462,
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
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655039895,
      "ems": null
    },
    {
      "latitude": 50.90657,
      "longitude": 3.989448,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655039901,
      "ems": null
    },
    {
      "latitude": 50.907166,
      "longitude": 3.987592,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655039904,
      "ems": null
    },
    {
      "latitude": 50.907619,
      "longitude": 3.986282,
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655039907,
      "ems": null
    },
    {
      "latitude": 50.908318,
      "longitude": 3.984528,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655039910,
      "ems": null
    },
    {
      "latitude": 50.90897,
      "longitude": 3.982925,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655039913,
      "ems": null
    },
    {
      "latitude": 50.909683,
      "longitude": 3.981431,
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
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1655039916,
      "ems": null
    },
    {
      "latitude": 50.910324,
      "longitude": 3.979946,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655039919,
      "ems": null
    },
    {
      "latitude": 50.911469,
      "longitude": 3.976977,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655039925,
      "ems": null
    },
    {
      "latitude": 50.912369,
      "longitude": 3.974304,
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
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655039931,
      "ems": null
    },
    {
      "latitude": 50.913391,
      "longitude": 3.9711,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655039937,
      "ems": null
    },
    {
      "latitude": 50.913757,
      "longitude": 3.969776,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655039940,
      "ems": null
    },
    {
      "latitude": 50.914352,
      "longitude": 3.967846,
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
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655039943,
      "ems": null
    },
    {
      "latitude": 50.914948,
      "longitude": 3.966287,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655039946,
      "ems": null
    },
    {
      "latitude": 50.916229,
      "longitude": 3.963392,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 309,
      "squawk": "4451",
      "timestamp": 1655039952,
      "ems": null
    },
    {
      "latitude": 50.916916,
      "longitude": 3.961907,
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
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655039955,
      "ems": null
    },
    {
      "latitude": 50.917999,
      "longitude": 3.958511,
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
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655039962,
      "ems": null
    },
    {
      "latitude": 50.918373,
      "longitude": 3.957062,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655039964,
      "ems": null
    },
    {
      "latitude": 50.918793,
      "longitude": 3.955307,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 290,
      "squawk": "4451",
      "timestamp": 1655039967,
      "ems": null
    },
    {
      "latitude": 50.919163,
      "longitude": 3.953552,
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
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1655039970,
      "ems": null
    },
    {
      "latitude": 50.919571,
      "longitude": 3.951812,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1655039973,
      "ems": null
    },
    {
      "latitude": 50.919956,
      "longitude": 3.950119,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 290,
      "squawk": "4451",
      "timestamp": 1655039976,
      "ems": null
    },
    {
      "latitude": 50.920235,
      "longitude": 3.948822,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 289,
      "squawk": "4451",
      "timestamp": 1655039979,
      "ems": null
    },
    {
      "latitude": 50.9207,
      "longitude": 3.946838,
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
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655039982,
      "ems": null
    },
    {
      "latitude": 50.921165,
      "longitude": 3.945236,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655039985,
      "ems": null
    },
    {
      "latitude": 50.922237,
      "longitude": 3.941956,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655039992,
      "ems": null
    },
    {
      "latitude": 50.923141,
      "longitude": 3.93897,
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
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655039997,
      "ems": null
    },
    {
      "latitude": 50.923538,
      "longitude": 3.937683,
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
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040000,
      "ems": null
    },
    {
      "latitude": 50.924149,
      "longitude": 3.935852,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655040003,
      "ems": null
    },
    {
      "latitude": 50.924698,
      "longitude": 3.934219,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655040006,
      "ems": null
    },
    {
      "latitude": 50.925495,
      "longitude": 3.931122,
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
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655040012,
      "ems": null
    },
    {
      "latitude": 50.926392,
      "longitude": 3.927909,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040018,
      "ems": null
    },
    {
      "latitude": 50.927307,
      "longitude": 3.924792,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655040024,
      "ems": null
    },
    {
      "latitude": 50.928268,
      "longitude": 3.921451,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655040031,
      "ems": null
    },
    {
      "latitude": 50.929173,
      "longitude": 3.918686,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655040036,
      "ems": null
    },
    {
      "latitude": 50.929497,
      "longitude": 3.91777,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040040,
      "ems": null
    },
    {
      "latitude": 50.930149,
      "longitude": 3.916016,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655040042,
      "ems": null
    },
    {
      "latitude": 50.93108,
      "longitude": 3.913116,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040048,
      "ems": null
    },
    {
      "latitude": 50.931828,
      "longitude": 3.910675,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040055,
      "ems": null
    },
    {
      "latitude": 50.932941,
      "longitude": 3.906937,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040061,
      "ems": null
    },
    {
      "latitude": 50.933968,
      "longitude": 3.903503,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040067,
      "ems": null
    },
    {
      "latitude": 50.93504,
      "longitude": 3.90007,
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
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040072,
      "ems": null
    },
    {
      "latitude": 50.936234,
      "longitude": 3.896509,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040079,
      "ems": null
    },
    {
      "latitude": 50.937553,
      "longitude": 3.892975,
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
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655040085,
      "ems": null
    },
    {
      "latitude": 50.937786,
      "longitude": 3.892441,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655040088,
      "ems": null
    },
    {
      "latitude": 50.9389,
      "longitude": 3.889618,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655040090,
      "ems": null
    },
    {
      "latitude": 50.939621,
      "longitude": 3.887676,
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655040094,
      "ems": null
    },
    {
      "latitude": 50.940903,
      "longitude": 3.884201,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655040100,
      "ems": null
    },
    {
      "latitude": 50.942093,
      "longitude": 3.880624,
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
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655040106,
      "ems": null
    },
    {
      "latitude": 50.943192,
      "longitude": 3.877357,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040112,
      "ems": null
    },
    {
      "latitude": 50.944393,
      "longitude": 3.873901,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040117,
      "ems": null
    },
    {
      "latitude": 50.945511,
      "longitude": 3.870392,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040124,
      "ems": null
    },
    {
      "latitude": 50.94677,
      "longitude": 3.866806,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655040130,
      "ems": null
    },
    {
      "latitude": 50.947979,
      "longitude": 3.863449,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655040136,
      "ems": null
    },
    {
      "latitude": 50.949142,
      "longitude": 3.860061,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040142,
      "ems": null
    },
    {
      "latitude": 50.950169,
      "longitude": 3.856812,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040148,
      "ems": null
    },
    {
      "latitude": 50.951248,
      "longitude": 3.85338,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040154,
      "ems": null
    },
    {
      "latitude": 50.952309,
      "longitude": 3.850327,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040160,
      "ems": null
    },
    {
      "latitude": 50.953445,
      "longitude": 3.846996,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040165,
      "ems": null
    },
    {
      "latitude": 50.954449,
      "longitude": 3.843918,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040171,
      "ems": null
    },
    {
      "latitude": 50.955662,
      "longitude": 3.840408,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040178,
      "ems": null
    },
    {
      "latitude": 50.956604,
      "longitude": 3.837272,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655040183,
      "ems": null
    },
    {
      "latitude": 50.957565,
      "longitude": 3.833857,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655040190,
      "ems": null
    },
    {
      "latitude": 50.95808,
      "longitude": 3.832016,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655040193,
      "ems": null
    },
    {
      "latitude": 50.958527,
      "longitude": 3.830294,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1655040196,
      "ems": null
    },
    {
      "latitude": 50.95892,
      "longitude": 3.828659,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655040199,
      "ems": null
    },
    {
      "latitude": 50.959385,
      "longitude": 3.826981,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655040202,
      "ems": null
    },
    {
      "latitude": 50.959808,
      "longitude": 3.825543,
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
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655040204,
      "ems": null
    },
    {
      "latitude": 50.960861,
      "longitude": 3.8225,
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655040211,
      "ems": null
    },
    {
      "latitude": 50.961479,
      "longitude": 3.820801,
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
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655040214,
      "ems": null
    },
    {
      "latitude": 50.962051,
      "longitude": 3.819382,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655040217,
      "ems": null
    },
    {
      "latitude": 50.962555,
      "longitude": 3.817972,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655040220,
      "ems": null
    },
    {
      "latitude": 50.963104,
      "longitude": 3.816561,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655040223,
      "ems": null
    },
    {
      "latitude": 50.963619,
      "longitude": 3.815079,
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655040226,
      "ems": null
    },
    {
      "latitude": 50.964157,
      "longitude": 3.813666,
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655040229,
      "ems": null
    },
    {
      "latitude": 50.964691,
      "longitude": 3.81218,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655040232,
      "ems": null
    },
    {
      "latitude": 50.965805,
      "longitude": 3.809212,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655040238,
      "ems": null
    },
    {
      "latitude": 50.966785,
      "longitude": 3.807068,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1655040243,
      "ems": null
    },
    {
      "latitude": 50.967716,
      "longitude": 3.804779,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655040250,
      "ems": null
    },
    {
      "latitude": 50.968601,
      "longitude": 3.802414,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040256,
      "ems": null
    },
    {
      "latitude": 50.969467,
      "longitude": 3.799933,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655040262,
      "ems": null
    },
    {
      "latitude": 50.970184,
      "longitude": 3.797531,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655040268,
      "ems": null
    },
    {
      "latitude": 50.970463,
      "longitude": 3.79631,
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
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1655040271,
      "ems": null
    },
    {
      "latitude": 50.970882,
      "longitude": 3.79509,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655040274,
      "ems": null
    },
    {
      "latitude": 50.971344,
      "longitude": 3.793772,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040277,
      "ems": null
    },
    {
      "latitude": 50.972168,
      "longitude": 3.791248,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040283,
      "ems": null
    },
    {
      "latitude": 50.973083,
      "longitude": 3.788427,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040289,
      "ems": null
    },
    {
      "latitude": 50.973907,
      "longitude": 3.785858,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655040295,
      "ems": null
    },
    {
      "latitude": 50.97464,
      "longitude": 3.783677,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040300,
      "ems": null
    },
    {
      "latitude": 50.975693,
      "longitude": 3.780485,
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655040307,
      "ems": null
    },
    {
      "latitude": 50.976749,
      "longitude": 3.777695,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040313,
      "ems": null
    },
    {
      "latitude": 50.977753,
      "longitude": 3.775066,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655040319,
      "ems": null
    },
    {
      "latitude": 50.978378,
      "longitude": 3.773575,
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655040322,
      "ems": null
    },
    {
      "latitude": 50.978897,
      "longitude": 3.772319,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655040325,
      "ems": null
    },
    {
      "latitude": 50.979858,
      "longitude": 3.769721,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655040331,
      "ems": null
    },
    {
      "latitude": 50.981312,
      "longitude": 3.765106,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040340,
      "ems": null
    },
    {
      "latitude": 50.981781,
      "longitude": 3.76356,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655040343,
      "ems": null
    },
    {
      "latitude": 50.982193,
      "longitude": 3.762001,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655040346,
      "ems": null
    },
    {
      "latitude": 50.982708,
      "longitude": 3.7603,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040349,
      "ems": null
    },
    {
      "latitude": 50.983265,
      "longitude": 3.758698,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655040352,
      "ems": null
    },
    {
      "latitude": 50.984291,
      "longitude": 3.755569,
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
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655040358,
      "ems": null
    },
    {
      "latitude": 50.985313,
      "longitude": 3.752365,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040364,
      "ems": null
    },
    {
      "latitude": 50.986359,
      "longitude": 3.749307,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655040369,
      "ems": null
    },
    {
      "latitude": 50.987827,
      "longitude": 3.744354,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040379,
      "ems": null
    },
    {
      "latitude": 50.988804,
      "longitude": 3.741226,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655040385,
      "ems": null
    },
    {
      "latitude": 50.989971,
      "longitude": 3.73703,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655040391,
      "ems": null
    },
    {
      "latitude": 50.991074,
      "longitude": 3.73409,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655040397,
      "ems": null
    },
    {
      "latitude": 50.992203,
      "longitude": 3.73085,
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
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040403,
      "ems": null
    },
    {
      "latitude": 50.993408,
      "longitude": 3.726963,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040409,
      "ems": null
    },
    {
      "latitude": 50.994671,
      "longitude": 3.723221,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040415,
      "ems": null
    },
    {
      "latitude": 50.995743,
      "longitude": 3.719864,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040421,
      "ems": null
    },
    {
      "latitude": 50.996292,
      "longitude": 3.718204,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040424,
      "ems": null
    },
    {
      "latitude": 50.997417,
      "longitude": 3.714676,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655040430,
      "ems": null
    },
    {
      "latitude": 50.998627,
      "longitude": 3.711152,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655040436,
      "ems": null
    },
    {
      "latitude": 50.99979,
      "longitude": 3.707733,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655040442,
      "ems": null
    },
    {
      "latitude": 51.001049,
      "longitude": 3.704453,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655040448,
      "ems": null
    },
    {
      "latitude": 51.00174,
      "longitude": 3.702838,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655040451,
      "ems": null
    },
    {
      "latitude": 51.002354,
      "longitude": 3.701401,
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
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655040454,
      "ems": null
    },
    {
      "latitude": 51.004028,
      "longitude": 3.696825,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655040463,
      "ems": null
    },
    {
      "latitude": 51.005192,
      "longitude": 3.693619,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655040469,
      "ems": null
    },
    {
      "latitude": 51.006401,
      "longitude": 3.690491,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655040475,
      "ems": null
    },
    {
      "latitude": 51.007599,
      "longitude": 3.68762,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655040481,
      "ems": null
    },
    {
      "latitude": 51.008102,
      "longitude": 3.686136,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655040484,
      "ems": null
    },
    {
      "latitude": 51.00845,
      "longitude": 3.684921,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655040487,
      "ems": null
    },
    {
      "latitude": 51.008972,
      "longitude": 3.683167,
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
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655040490,
      "ems": null
    },
    {
      "latitude": 51.009338,
      "longitude": 3.68183,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655040493,
      "ems": null
    },
    {
      "latitude": 51.009895,
      "longitude": 3.679886,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655040496,
      "ems": null
    },
    {
      "latitude": 51.0103,
      "longitude": 3.678341,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655040499,
      "ems": null
    },
    {
      "latitude": 51.010639,
      "longitude": 3.677139,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655040502,
      "ems": null
    },
    {
      "latitude": 51.011246,
      "longitude": 3.675156,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040505,
      "ems": null
    },
    {
      "latitude": 51.011711,
      "longitude": 3.67363,
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
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040508,
      "ems": null
    },
    {
      "latitude": 51.012733,
      "longitude": 3.670502,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040514,
      "ems": null
    },
    {
      "latitude": 51.013199,
      "longitude": 3.669281,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655040517,
      "ems": null
    },
    {
      "latitude": 51.013779,
      "longitude": 3.667652,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655040520,
      "ems": null
    },
    {
      "latitude": 51.01442,
      "longitude": 3.665945,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655040523,
      "ems": null
    },
    {
      "latitude": 51.014923,
      "longitude": 3.664474,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655040526,
      "ems": null
    },
    {
      "latitude": 51.016251,
      "longitude": 3.660006,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655040535,
      "ems": null
    },
    {
      "latitude": 51.017258,
      "longitude": 3.656517,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040541,
      "ems": null
    },
    {
      "latitude": 51.018723,
      "longitude": 3.651915,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040550,
      "ems": null
    },
    {
      "latitude": 51.019203,
      "longitude": 3.650284,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040553,
      "ems": null
    },
    {
      "latitude": 51.019577,
      "longitude": 3.649063,
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
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655040556,
      "ems": null
    },
    {
      "latitude": 51.020554,
      "longitude": 3.645605,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655040562,
      "ems": null
    },
    {
      "latitude": 51.021423,
      "longitude": 3.642042,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1655040568,
      "ems": null
    },
    {
      "latitude": 51.021858,
      "longitude": 3.640366,
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
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1655040571,
      "ems": null
    },
    {
      "latitude": 51.022339,
      "longitude": 3.638479,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1655040574,
      "ems": null
    },
    {
      "latitude": 51.0233,
      "longitude": 3.635139,
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
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040580,
      "ems": null
    },
    {
      "latitude": 51.024326,
      "longitude": 3.631973,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040586,
      "ems": null
    },
    {
      "latitude": 51.025303,
      "longitude": 3.628693,
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
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040592,
      "ems": null
    },
    {
      "latitude": 51.026276,
      "longitude": 3.62534,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040598,
      "ems": null
    },
    {
      "latitude": 51.026791,
      "longitude": 3.623886,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655040602,
      "ems": null
    },
    {
      "latitude": 51.027351,
      "longitude": 3.62236,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655040604,
      "ems": null
    },
    {
      "latitude": 51.027863,
      "longitude": 3.621063,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655040607,
      "ems": null
    },
    {
      "latitude": 51.029167,
      "longitude": 3.617401,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655040614,
      "ems": null
    },
    {
      "latitude": 51.02977,
      "longitude": 3.615952,
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655040616,
      "ems": null
    },
    {
      "latitude": 51.030396,
      "longitude": 3.614502,
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
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1655040619,
      "ems": null
    },
    {
      "latitude": 51.030937,
      "longitude": 3.613281,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1655040622,
      "ems": null
    },
    {
      "latitude": 51.031586,
      "longitude": 3.611755,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655040625,
      "ems": null
    },
    {
      "latitude": 51.032333,
      "longitude": 3.610077,
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
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655040628,
      "ems": null
    },
    {
      "latitude": 51.033451,
      "longitude": 3.607254,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655040634,
      "ems": null
    },
    {
      "latitude": 51.034424,
      "longitude": 3.604406,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655040640,
      "ems": null
    },
    {
      "latitude": 51.034973,
      "longitude": 3.602402,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1655040644,
      "ems": null
    },
    {
      "latitude": 51.035431,
      "longitude": 3.600695,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040647,
      "ems": null
    },
    {
      "latitude": 51.03598,
      "longitude": 3.599062,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655040649,
      "ems": null
    },
    {
      "latitude": 51.037262,
      "longitude": 3.595721,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655040655,
      "ems": null
    },
    {
      "latitude": 51.038616,
      "longitude": 3.592224,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655040662,
      "ems": null
    },
    {
      "latitude": 51.03978,
      "longitude": 3.588892,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040667,
      "ems": null
    },
    {
      "latitude": 51.040989,
      "longitude": 3.585129,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040674,
      "ems": null
    },
    {
      "latitude": 51.042156,
      "longitude": 3.581543,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040679,
      "ems": null
    },
    {
      "latitude": 51.042713,
      "longitude": 3.579712,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040682,
      "ems": null
    },
    {
      "latitude": 51.043259,
      "longitude": 3.577757,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655040686,
      "ems": null
    },
    {
      "latitude": 51.043644,
      "longitude": 3.576431,
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
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040689,
      "ems": null
    },
    {
      "latitude": 51.044266,
      "longitude": 3.574194,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655040692,
      "ems": null
    },
    {
      "latitude": 51.044998,
      "longitude": 3.571522,
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
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1655040697,
      "ems": null
    },
    {
      "latitude": 51.046463,
      "longitude": 3.566771,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655040705,
      "ems": null
    },
    {
      "latitude": 51.047974,
      "longitude": 3.561946,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040712,
      "ems": null
    },
    {
      "latitude": 51.048981,
      "longitude": 3.558605,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040718,
      "ems": null
    },
    {
      "latitude": 51.049557,
      "longitude": 3.556976,
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655040721,
      "ems": null
    },
    {
      "latitude": 51.050354,
      "longitude": 3.554968,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655040724,
      "ems": null
    },
    {
      "latitude": 51.050999,
      "longitude": 3.553314,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655040727,
      "ems": null
    },
    {
      "latitude": 51.051697,
      "longitude": 3.551636,
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655040730,
      "ems": null
    },
    {
      "latitude": 51.05246,
      "longitude": 3.549846,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1655040734,
      "ems": null
    },
    {
      "latitude": 51.053604,
      "longitude": 3.546431,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655040740,
      "ems": null
    },
    {
      "latitude": 51.054794,
      "longitude": 3.542868,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655040745,
      "ems": null
    },
    {
      "latitude": 51.055847,
      "longitude": 3.539528,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040752,
      "ems": null
    },
    {
      "latitude": 51.056446,
      "longitude": 3.537521,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040754,
      "ems": null
    },
    {
      "latitude": 51.057003,
      "longitude": 3.53569,
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
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655040757,
      "ems": null
    },
    {
      "latitude": 51.057541,
      "longitude": 3.533738,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655040761,
      "ems": null
    },
    {
      "latitude": 51.058044,
      "longitude": 3.53203,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040763,
      "ems": null
    },
    {
      "latitude": 51.059052,
      "longitude": 3.528615,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655040769,
      "ems": null
    },
    {
      "latitude": 51.060169,
      "longitude": 3.52478,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1655040776,
      "ems": null
    },
    {
      "latitude": 51.061195,
      "longitude": 3.521729,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040781,
      "ems": null
    },
    {
      "latitude": 51.06245,
      "longitude": 3.51799,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040788,
      "ems": null
    },
    {
      "latitude": 51.063492,
      "longitude": 3.51466,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655040794,
      "ems": null
    },
    {
      "latitude": 51.064728,
      "longitude": 3.511097,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1655040800,
      "ems": null
    },
    {
      "latitude": 51.065872,
      "longitude": 3.507682,
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
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1655040806,
      "ems": null
    },
    {
      "latitude": 51.066734,
      "longitude": 3.504868,
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
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040811,
      "ems": null
    },
    {
      "latitude": 51.068085,
      "longitude": 3.501053,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1655040818,
      "ems": null
    },
    {
      "latitude": 51.069202,
      "longitude": 3.497772,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655040824,
      "ems": null
    },
    {
      "latitude": 51.069527,
      "longitude": 3.496628,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655040825,
      "ems": null
    },
    {
      "latitude": 51.070179,
      "longitude": 3.493881,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 289,
      "squawk": "4451",
      "timestamp": 1655040830,
      "ems": null
    },
    {
      "latitude": 51.070587,
      "longitude": 3.492019,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1655040833,
      "ems": null
    },
    {
      "latitude": 51.070969,
      "longitude": 3.490372,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655040835,
      "ems": null
    },
    {
      "latitude": 51.071915,
      "longitude": 3.487343,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1655040841,
      "ems": null
    },
    {
      "latitude": 51.073517,
      "longitude": 3.483186,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655040848,
      "ems": null
    },
    {
      "latitude": 51.074883,
      "longitude": 3.479996,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655040854,
      "ems": null
    },
    {
      "latitude": 51.075485,
      "longitude": 3.478509,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655040857,
      "ems": null
    },
    {
      "latitude": 51.076279,
      "longitude": 3.476944,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1655040860,
      "ems": null
    },
    {
      "latitude": 51.076538,
      "longitude": 3.476356,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1655040862,
      "ems": null
    },
    {
      "latitude": 51.077728,
      "longitude": 3.474129,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1655040865,
      "ems": null
    },
    {
      "latitude": 51.078884,
      "longitude": 3.471909,
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
      "heading": 309,
      "squawk": "4451",
      "timestamp": 1655040869,
      "ems": null
    },
    {
      "latitude": 51.080338,
      "longitude": 3.468562,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655040875,
      "ems": null
    },
    {
      "latitude": 51.081894,
      "longitude": 3.465073,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1655040881,
      "ems": null
    },
    {
      "latitude": 51.083073,
      "longitude": 3.462219,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1655040887,
      "ems": null
    },
    {
      "latitude": 51.083958,
      "longitude": 3.460007,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655040890,
      "ems": null
    },
    {
      "latitude": 51.084915,
      "longitude": 3.457798,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655040893,
      "ems": null
    },
    {
      "latitude": 51.085495,
      "longitude": 3.456421,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1655040895,
      "ems": null
    },
    {
      "latitude": 51.087158,
      "longitude": 3.452379,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1655040903,
      "ems": null
    },
    {
      "latitude": 51.089592,
      "longitude": 3.447647,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1655040911,
      "ems": null
    },
    {
      "latitude": 51.090942,
      "longitude": 3.445053,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1655040915,
      "ems": null
    },
    {
      "latitude": 51.09201,
      "longitude": 3.442878,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1655040919,
      "ems": null
    },
    {
      "latitude": 51.09288,
      "longitude": 3.441393,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 311,
      "squawk": "4451",
      "timestamp": 1655040922,
      "ems": null
    },
    {
      "latitude": 51.093594,
      "longitude": 3.440323,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1655040925,
      "ems": null
    },
    {
      "latitude": 51.0942,
      "longitude": 3.439407,
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
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1655040927,
      "ems": null
    },
    {
      "latitude": 51.095627,
      "longitude": 3.437162,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1655040931,
      "ems": null
    },
    {
      "latitude": 51.097691,
      "longitude": 3.434143,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1655040938,
      "ems": null
    },
    {
      "latitude": 51.098667,
      "longitude": 3.432846,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1655040941,
      "ems": null
    },
    {
      "latitude": 51.099461,
      "longitude": 3.431778,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1655040944,
      "ems": null
    },
    {
      "latitude": 51.100204,
      "longitude": 3.430786,
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
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1655040947,
      "ems": null
    },
    {
      "latitude": 51.101414,
      "longitude": 3.429184,
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
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1655040950,
      "ems": null
    },
    {
      "latitude": 51.102814,
      "longitude": 3.427363,
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
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1655040954,
      "ems": null
    },
    {
      "latitude": 51.104023,
      "longitude": 3.42598,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1655040958,
      "ems": null
    },
    {
      "latitude": 51.104782,
      "longitude": 3.425062,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655040961,
      "ems": null
    },
    {
      "latitude": 51.10812,
      "longitude": 3.420944,
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
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1655040972,
      "ems": null
    },
    {
      "latitude": 51.110958,
      "longitude": 3.417206,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1655040982,
      "ems": null
    },
    {
      "latitude": 51.111694,
      "longitude": 3.416154,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1655040985,
      "ems": null
    },
    {
      "latitude": 51.115009,
      "longitude": 3.412628,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1655040995,
      "ems": null
    },
    {
      "latitude": 51.115585,
      "longitude": 3.412146,
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
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1655040998,
      "ems": null
    },
    {
      "latitude": 51.117245,
      "longitude": 3.411179,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1655041001,
      "ems": null
    },
    {
      "latitude": 51.117615,
      "longitude": 3.41095,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1655041002,
      "ems": null
    },
    {
      "latitude": 51.119019,
      "longitude": 3.410067,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1655041006,
      "ems": null
    },
    {
      "latitude": 51.12027,
      "longitude": 3.409195,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1655041009,
      "ems": null
    },
    {
      "latitude": 51.121014,
      "longitude": 3.408661,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1655041012,
      "ems": null
    },
    {
      "latitude": 51.122318,
      "longitude": 3.40744,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1655041015,
      "ems": null
    },
    {
      "latitude": 51.123093,
      "longitude": 3.406727,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1655041018,
      "ems": null
    },
    {
      "latitude": 51.125015,
      "longitude": 3.404648,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1655041024,
      "ems": null
    },
    {
      "latitude": 51.125702,
      "longitude": 3.40398,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1655041027,
      "ems": null
    },
    {
      "latitude": 51.12674,
      "longitude": 3.402863,
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
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1655041030,
      "ems": null
    },
    {
      "latitude": 51.127258,
      "longitude": 3.402273,
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1655041033,
      "ems": null
    },
    {
      "latitude": 51.128601,
      "longitude": 3.40065,
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
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655041036,
      "ems": null
    },
    {
      "latitude": 51.129272,
      "longitude": 3.399823,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1655041039,
      "ems": null
    },
    {
      "latitude": 51.13028,
      "longitude": 3.39859,
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1655041042,
      "ems": null
    },
    {
      "latitude": 51.130791,
      "longitude": 3.398056,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655041044,
      "ems": null
    },
    {
      "latitude": 51.133072,
      "longitude": 3.395386,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1655041051,
      "ems": null
    },
    {
      "latitude": 51.133862,
      "longitude": 3.394394,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655041054,
      "ems": null
    },
    {
      "latitude": 51.134609,
      "longitude": 3.393478,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655041057,
      "ems": null
    },
    {
      "latitude": 51.136654,
      "longitude": 3.391037,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655041063,
      "ems": null
    },
    {
      "latitude": 51.138332,
      "longitude": 3.38913,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1655041069,
      "ems": null
    },
    {
      "latitude": 51.140533,
      "longitude": 3.386461,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655041076,
      "ems": null
    },
    {
      "latitude": 51.141964,
      "longitude": 3.384705,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1655041081,
      "ems": null
    },
    {
      "latitude": 51.143738,
      "longitude": 3.382527,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655041087,
      "ems": null
    },
    {
      "latitude": 51.145432,
      "longitude": 3.380671,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1655041093,
      "ems": null
    },
    {
      "latitude": 51.146759,
      "longitude": 3.379211,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655041098,
      "ems": null
    },
    {
      "latitude": 51.149414,
      "longitude": 3.37644,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1655041105,
      "ems": null
    },
    {
      "latitude": 51.150604,
      "longitude": 3.375327,
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
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1655041111,
      "ems": null
    },
    {
      "latitude": 51.152809,
      "longitude": 3.37326,
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
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1655041115,
      "ems": null
    },
    {
      "latitude": 51.155277,
      "longitude": 3.370438,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1655041123,
      "ems": null
    },
    {
      "latitude": 51.156555,
      "longitude": 3.368943,
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
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655041131,
      "ems": null
    },
    {
      "latitude": 51.160309,
      "longitude": 3.364712,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1655041139,
      "ems": null
    },
    {
      "latitude": 51.161327,
      "longitude": 3.363419,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655041143,
      "ems": null
    },
    {
      "latitude": 51.162781,
      "longitude": 3.361594,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1655041151,
      "ems": null
    },
    {
      "latitude": 51.165798,
      "longitude": 3.357544,
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
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1655041159,
      "ems": null
    },
    {
      "latitude": 51.166542,
      "longitude": 3.3564,
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
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1655041163,
      "ems": null
    },
    {
      "latitude": 51.16777,
      "longitude": 3.354542,
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
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1655041171,
      "ems": null
    },
    {
      "latitude": 51.170517,
      "longitude": 3.351201,
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
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655041178,
      "ems": null
    },
    {
      "latitude": 51.171524,
      "longitude": 3.350067,
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
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655041181,
      "ems": null
    },
    {
      "latitude": 51.171894,
      "longitude": 3.349686,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1655041186,
      "ems": null
    },
    {
      "latitude": 51.174736,
      "longitude": 3.34671,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1655041190,
      "ems": null
    },
    {
      "latitude": 51.175854,
      "longitude": 3.345795,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1655041194,
      "ems": null
    },
    {
      "latitude": 51.176971,
      "longitude": 3.344892,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1655041198,
      "ems": null
    },
    {
      "latitude": 51.178692,
      "longitude": 3.344116,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1655041202,
      "ems": null
    },
    {
      "latitude": 51.179718,
      "longitude": 3.343735,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1655041205,
      "ems": null
    },
    {
      "latitude": 51.18074,
      "longitude": 3.343201,
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
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1655041208,
      "ems": null
    },
    {
      "latitude": 51.18132,
      "longitude": 3.342962,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1655041211,
      "ems": null
    },
    {
      "latitude": 51.182602,
      "longitude": 3.342294,
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
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1655041214,
      "ems": null
    },
    {
      "latitude": 51.183701,
      "longitude": 3.3417,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1655041217,
      "ems": null
    },
    {
      "latitude": 51.184753,
      "longitude": 3.341106,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1655041220,
      "ems": null
    },
    {
      "latitude": 51.185627,
      "longitude": 3.340683,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1655041223,
      "ems": null
    },
    {
      "latitude": 51.187675,
      "longitude": 3.339462,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1655041229,
      "ems": null
    },
    {
      "latitude": 51.188839,
      "longitude": 3.338699,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1655041232,
      "ems": null
    },
    {
      "latitude": 51.190155,
      "longitude": 3.337914,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1655041235,
      "ems": null
    },
    {
      "latitude": 51.190983,
      "longitude": 3.337326,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1655041240,
      "ems": null
    },
    {
      "latitude": 51.19289,
      "longitude": 3.335953,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1655041244,
      "ems": null
    },
    {
      "latitude": 51.195786,
      "longitude": 3.333979,
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
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1655041252,
      "ems": null
    },
    {
      "latitude": 51.196846,
      "longitude": 3.33313,
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
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1655041255,
      "ems": null
    },
    {
      "latitude": 51.197544,
      "longitude": 3.33252,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1655041257,
      "ems": null
    },
    {
      "latitude": 51.199036,
      "longitude": 3.33107,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1655041262,
      "ems": null
    },
    {
      "latitude": 51.200363,
      "longitude": 3.329674,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1655041266,
      "ems": null
    },
    {
      "latitude": 51.201187,
      "longitude": 3.328857,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655041270,
      "ems": null
    },
    {
      "latitude": 51.202835,
      "longitude": 3.326927,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1655041274,
      "ems": null
    },
    {
      "latitude": 51.203133,
      "longitude": 3.326569,
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
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655041277,
      "ems": null
    },
    {
      "latitude": 51.204849,
      "longitude": 3.324626,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655041280,
      "ems": null
    },
    {
      "latitude": 51.20681,
      "longitude": 3.322296,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1655041286,
      "ems": null
    },
    {
      "latitude": 51.209198,
      "longitude": 3.319653,
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
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655041294,
      "ems": null
    },
    {
      "latitude": 51.211792,
      "longitude": 3.31665,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1655041302,
      "ems": null
    },
    {
      "latitude": 51.21426,
      "longitude": 3.313446,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1655041310,
      "ems": null
    },
    {
      "latitude": 51.215839,
      "longitude": 3.311234,
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
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1655041316,
      "ems": null
    },
    {
      "latitude": 51.216614,
      "longitude": 3.310077,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1655041319,
      "ems": null
    },
    {
      "latitude": 51.217518,
      "longitude": 3.30864,
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
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1655041322,
      "ems": null
    },
    {
      "latitude": 51.218307,
      "longitude": 3.307419,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1655041325,
      "ems": null
    },
    {
      "latitude": 51.220505,
      "longitude": 3.304287,
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
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1655041333,
      "ems": null
    },
    {
      "latitude": 51.22229,
      "longitude": 3.301688,
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
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1655041340,
      "ems": null
    },
    {
      "latitude": 51.223938,
      "longitude": 3.299239,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1655041347,
      "ems": null
    },
    {
      "latitude": 51.225662,
      "longitude": 3.297119,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655041352,
      "ems": null
    },
    {
      "latitude": 51.226547,
      "longitude": 3.296127,
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1655041354,
      "ems": null
    },
    {
      "latitude": 51.228409,
      "longitude": 3.293762,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1655041361,
      "ems": null
    },
    {
      "latitude": 51.230133,
      "longitude": 3.291397,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1655041367,
      "ems": null
    },
    {
      "latitude": 51.23167,
      "longitude": 3.289032,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 314,
      "squawk": "4451",
      "timestamp": 1655041373,
      "ems": null
    },
    {
      "latitude": 51.232319,
      "longitude": 3.287964,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1655041376,
      "ems": null
    },
    {
      "latitude": 51.233185,
      "longitude": 3.286694,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1655041379,
      "ems": null
    },
    {
      "latitude": 51.233902,
      "longitude": 3.285599,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 313,
      "squawk": "4451",
      "timestamp": 1655041381,
      "ems": null
    },
    {
      "latitude": 51.234695,
      "longitude": 3.284244,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1655041385,
      "ems": null
    },
    {
      "latitude": 51.236279,
      "longitude": 3.282013,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1655041391,
      "ems": null
    },
    {
      "latitude": 51.237946,
      "longitude": 3.279938,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1655041397,
      "ems": null
    },
    {
      "latitude": 51.23877,
      "longitude": 3.279048,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1655041400,
      "ems": null
    },
    {
      "latitude": 51.239491,
      "longitude": 3.278351,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1655041402,
      "ems": null
    },
    {
      "latitude": 51.240463,
      "longitude": 3.277415,
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
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1655041406,
      "ems": null
    },
    {
      "latitude": 51.241287,
      "longitude": 3.276598,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1655041409,
      "ems": null
    },
    {
      "latitude": 51.241959,
      "longitude": 3.275833,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1655041412,
      "ems": null
    },
    {
      "latitude": 51.242752,
      "longitude": 3.274965,
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
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655041414,
      "ems": null
    },
    {
      "latitude": 51.244492,
      "longitude": 3.272738,
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
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1655041421,
      "ems": null
    },
    {
      "latitude": 51.246101,
      "longitude": 3.270645,
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
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1655041427,
      "ems": null
    },
    {
      "latitude": 51.246826,
      "longitude": 3.26962,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1655041430,
      "ems": null
    },
    {
      "latitude": 51.247467,
      "longitude": 3.268655,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1655041432,
      "ems": null
    },
    {
      "latitude": 51.248241,
      "longitude": 3.267517,
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
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1655041436,
      "ems": null
    },
    {
      "latitude": 51.248985,
      "longitude": 3.266373,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1655041439,
      "ems": null
    },
    {
      "latitude": 51.249729,
      "longitude": 3.265305,
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
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1655041442,
      "ems": null
    },
    {
      "latitude": 51.250614,
      "longitude": 3.264084,
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
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1655041445,
      "ems": null
    },
    {
      "latitude": 51.251312,
      "longitude": 3.262863,
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
      "heading": 313,
      "squawk": "4451",
      "timestamp": 1655041448,
      "ems": null
    },
    {
      "latitude": 51.251999,
      "longitude": 3.261826,
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
      "heading": 313,
      "squawk": "4451",
      "timestamp": 1655041451,
      "ems": null
    },
    {
      "latitude": 51.252731,
      "longitude": 3.26049,
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
      "heading": 312,
      "squawk": "4451",
      "timestamp": 1655041454,
      "ems": null
    },
    {
      "latitude": 51.253456,
      "longitude": 3.259277,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 312,
      "squawk": "4451",
      "timestamp": 1655041457,
      "ems": null
    },
    {
      "latitude": 51.254108,
      "longitude": 3.258209,
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
      "heading": 314,
      "squawk": "4451",
      "timestamp": 1655041460,
      "ems": null
    },
    {
      "latitude": 51.255661,
      "longitude": 3.255813,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1655041466,
      "ems": null
    },
    {
      "latitude": 51.256805,
      "longitude": 3.254106,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1655041472,
      "ems": null
    },
    {
      "latitude": 51.259274,
      "longitude": 3.250351,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1655041480,
      "ems": null
    },
    {
      "latitude": 51.260834,
      "longitude": 3.247945,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1655041486,
      "ems": null
    },
    {
      "latitude": 51.26239,
      "longitude": 3.245272,
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
      "heading": 312,
      "squawk": "4451",
      "timestamp": 1655041493,
      "ems": null
    },
    {
      "latitude": 51.263809,
      "longitude": 3.242823,
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
      "heading": 312,
      "squawk": "4451",
      "timestamp": 1655041499,
      "ems": null
    },
    {
      "latitude": 51.265373,
      "longitude": 3.24028,
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
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1655041505,
      "ems": null
    },
    {
      "latitude": 51.266922,
      "longitude": 3.237775,
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
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1655041511,
      "ems": null
    },
    {
      "latitude": 51.26849,
      "longitude": 3.235474,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1655041517,
      "ems": null
    },
    {
      "latitude": 51.269257,
      "longitude": 3.23436,
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
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1655041520,
      "ems": null
    },
    {
      "latitude": 51.270912,
      "longitude": 3.231888,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1655041526,
      "ems": null
    },
    {
      "latitude": 51.271683,
      "longitude": 3.230871,
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
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1655041529,
      "ems": null
    },
    {
      "latitude": 51.272449,
      "longitude": 3.229752,
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
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1655041532,
      "ems": null
    },
    {
      "latitude": 51.27388,
      "longitude": 3.227753,
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
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1655041537,
      "ems": null
    },
    {
      "latitude": 51.275707,
      "longitude": 3.225403,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1655041544,
      "ems": null
    },
    {
      "latitude": 51.276405,
      "longitude": 3.22464,
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1655041547,
      "ems": null
    },
    {
      "latitude": 51.277149,
      "longitude": 3.223724,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655041549,
      "ems": null
    },
    {
      "latitude": 51.279106,
      "longitude": 3.22113,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1655041556,
      "ems": null
    },
    {
      "latitude": 51.281845,
      "longitude": 3.217806,
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1655041565,
      "ems": null
    },
    {
      "latitude": 51.284134,
      "longitude": 3.214466,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 312,
      "squawk": "4451",
      "timestamp": 1655041573,
      "ems": null
    },
    {
      "latitude": 51.285156,
      "longitude": 3.212585,
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
      "heading": 312,
      "squawk": "4451",
      "timestamp": 1655041577,
      "ems": null
    },
    {
      "latitude": 51.286552,
      "longitude": 3.210297,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1655041585,
      "ems": null
    },
    {
      "latitude": 51.288231,
      "longitude": 3.207397,
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
      "heading": 311,
      "squawk": "4451",
      "timestamp": 1655041589,
      "ems": null
    },
    {
      "latitude": 51.289207,
      "longitude": 3.205643,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 311,
      "squawk": "4451",
      "timestamp": 1655041593,
      "ems": null
    },
    {
      "latitude": 51.290279,
      "longitude": 3.203659,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 311,
      "squawk": "4451",
      "timestamp": 1655041597,
      "ems": null
    },
    {
      "latitude": 51.292007,
      "longitude": 3.200511,
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
      "heading": 311,
      "squawk": "4451",
      "timestamp": 1655041605,
      "ems": null
    },
    {
      "latitude": 51.293976,
      "longitude": 3.197096,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 311,
      "squawk": "4451",
      "timestamp": 1655041613,
      "ems": null
    },
    {
      "latitude": 51.295586,
      "longitude": 3.194122,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1655041622,
      "ems": null
    },
    {
      "latitude": 51.297043,
      "longitude": 3.191528,
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
      "heading": 312,
      "squawk": "4451",
      "timestamp": 1655041628,
      "ems": null
    },
    {
      "latitude": 51.298965,
      "longitude": 3.188114,
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
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1655041634,
      "ems": null
    },
    {
      "latitude": 51.300381,
      "longitude": 3.185501,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 312,
      "squawk": "4451",
      "timestamp": 1655041640,
      "ems": null
    },
    {
      "latitude": 51.301216,
      "longitude": 3.184204,
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
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1655041644,
      "ems": null
    },
    {
      "latitude": 51.302475,
      "longitude": 3.182449,
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
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1655041648,
      "ems": null
    },
    {
      "latitude": 51.303497,
      "longitude": 3.181136,
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
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1655041652,
      "ems": null
    },
    {
      "latitude": 51.30378,
      "longitude": 3.180695,
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
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1655041656,
      "ems": null
    },
    {
      "latitude": 51.305786,
      "longitude": 3.178092,
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
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1655041660,
      "ems": null
    },
    {
      "latitude": 51.306747,
      "longitude": 3.176979,
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
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1655041664,
      "ems": null
    },
    {
      "latitude": 51.308167,
      "longitude": 3.175643,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1655041668,
      "ems": null
    },
    {
      "latitude": 51.309494,
      "longitude": 3.174455,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1655041672,
      "ems": null
    },
    {
      "latitude": 51.311234,
      "longitude": 3.17297,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1655041677,
      "ems": null
    },
    {
      "latitude": 51.312424,
      "longitude": 3.171931,
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
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1655041681,
      "ems": null
    },
    {
      "latitude": 51.31374,
      "longitude": 3.1707,
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
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1655041685,
      "ems": null
    },
    {
      "latitude": 51.316452,
      "longitude": 3.167774,
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
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655041694,
      "ems": null
    },
    {
      "latitude": 51.317417,
      "longitude": 3.16658,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655041698,
      "ems": null
    },
    {
      "latitude": 51.318813,
      "longitude": 3.165054,
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
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1655041702,
      "ems": null
    },
    {
      "latitude": 51.320068,
      "longitude": 3.163469,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1655041706,
      "ems": null
    },
    {
      "latitude": 51.321049,
      "longitude": 3.162003,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 311,
      "squawk": "4451",
      "timestamp": 1655041710,
      "ems": null
    },
    {
      "latitude": 51.321842,
      "longitude": 3.160324,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1655041714,
      "ems": null
    },
    {
      "latitude": 51.322678,
      "longitude": 3.15753,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1655041718,
      "ems": null
    },
    {
      "latitude": 51.323189,
      "longitude": 3.155289,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 290,
      "squawk": "4451",
      "timestamp": 1655041722,
      "ems": null
    },
    {
      "latitude": 51.323704,
      "longitude": 3.153305,
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
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1655041726,
      "ems": null
    },
    {
      "latitude": 51.324509,
      "longitude": 3.150478,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1655041731,
      "ems": null
    },
    {
      "latitude": 51.325287,
      "longitude": 3.147736,
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
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1655041737,
      "ems": null
    },
    {
      "latitude": 51.326019,
      "longitude": 3.144985,
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
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1655041742,
      "ems": null
    },
    {
      "latitude": 51.326477,
      "longitude": 3.142313,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1655041747,
      "ems": null
    },
    {
      "latitude": 51.326752,
      "longitude": 3.139863,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 277,
      "squawk": "4451",
      "timestamp": 1655041751,
      "ems": null
    },
    {
      "latitude": 51.32682,
      "longitude": 3.138123,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 277,
      "squawk": "4451",
      "timestamp": 1655041753,
      "ems": null
    },
    {
      "latitude": 51.32682,
      "longitude": 3.13591,
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
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1655041757,
      "ems": null
    },
    {
      "latitude": 51.32682,
      "longitude": 3.1353,
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
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1655041758,
      "ems": null
    },
    {
      "latitude": 51.326633,
      "longitude": 3.132782,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1655041762,
      "ems": null
    },
    {
      "latitude": 51.326168,
      "longitude": 3.129807,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655041768,
      "ems": null
    },
    {
      "latitude": 51.325424,
      "longitude": 3.126984,
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
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1655041773,
      "ems": null
    },
    {
      "latitude": 51.324051,
      "longitude": 3.124423,
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
      "heading": 234,
      "squawk": "4451",
      "timestamp": 1655041778,
      "ems": null
    },
    {
      "latitude": 51.322266,
      "longitude": 3.123012,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 205,
      "squawk": "4451",
      "timestamp": 1655041783,
      "ems": null
    },
    {
      "latitude": 51.319931,
      "longitude": 3.122864,
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
      "heading": 171,
      "squawk": "4451",
      "timestamp": 1655041789,
      "ems": null
    },
    {
      "latitude": 51.318192,
      "longitude": 3.123755,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1655041794,
      "ems": null
    },
    {
      "latitude": 51.31765,
      "longitude": 3.124161,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1655041798,
      "ems": null
    },
    {
      "latitude": 51.314163,
      "longitude": 3.127912,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1655041804,
      "ems": null
    },
    {
      "latitude": 51.312698,
      "longitude": 3.129767,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1655041809,
      "ems": null
    },
    {
      "latitude": 51.311039,
      "longitude": 3.132172,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655041814,
      "ems": null
    },
    {
      "latitude": 51.309952,
      "longitude": 3.133924,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1655041818,
      "ems": null
    },
    {
      "latitude": 51.308575,
      "longitude": 3.136139,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1655041822,
      "ems": null
    },
    {
      "latitude": 51.307316,
      "longitude": 3.138123,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655041826,
      "ems": null
    },
    {
      "latitude": 51.305969,
      "longitude": 3.14016,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655041830,
      "ems": null
    },
    {
      "latitude": 51.303265,
      "longitude": 3.144226,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655041838,
      "ems": null
    },
    {
      "latitude": 51.300247,
      "longitude": 3.148919,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 134,
      "squawk": "4451",
      "timestamp": 1655041847,
      "ems": null
    },
    {
      "latitude": 51.29805,
      "longitude": 3.152482,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 133,
      "squawk": "4451",
      "timestamp": 1655041854,
      "ems": null
    },
    {
      "latitude": 51.295441,
      "longitude": 3.156342,
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655041862,
      "ems": null
    },
    {
      "latitude": 51.292606,
      "longitude": 3.160095,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1655041870,
      "ems": null
    },
    {
      "latitude": 51.290726,
      "longitude": 3.162207,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1655041874,
      "ems": null
    },
    {
      "latitude": 51.288883,
      "longitude": 3.164291,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1655041879,
      "ems": null
    },
    {
      "latitude": 51.286835,
      "longitude": 3.166735,
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
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1655041885,
      "ems": null
    },
    {
      "latitude": 51.283859,
      "longitude": 3.170224,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1655041893,
      "ems": null
    },
    {
      "latitude": 51.282364,
      "longitude": 3.172073,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1655041897,
      "ems": null
    },
    {
      "latitude": 51.280609,
      "longitude": 3.174381,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1655041902,
      "ems": null
    },
    {
      "latitude": 51.279198,
      "longitude": 3.17627,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655041906,
      "ems": null
    },
    {
      "latitude": 51.277897,
      "longitude": 3.178177,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655041910,
      "ems": null
    },
    {
      "latitude": 51.276218,
      "longitude": 3.180542,
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
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1655041914,
      "ems": null
    },
    {
      "latitude": 51.275333,
      "longitude": 3.181839,
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
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655041918,
      "ems": null
    },
    {
      "latitude": 51.27375,
      "longitude": 3.184357,
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
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1655041922,
      "ems": null
    },
    {
      "latitude": 51.272404,
      "longitude": 3.186417,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1655041926,
      "ems": null
    },
    {
      "latitude": 51.270996,
      "longitude": 3.188708,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 134,
      "squawk": "4451",
      "timestamp": 1655041930,
      "ems": null
    },
    {
      "latitude": 51.268257,
      "longitude": 3.192902,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1655041938,
      "ems": null
    },
    {
      "latitude": 51.265457,
      "longitude": 3.196725,
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
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1655041946,
      "ems": null
    },
    {
      "latitude": 51.263092,
      "longitude": 3.199768,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1655041952,
      "ems": null
    },
    {
      "latitude": 51.261322,
      "longitude": 3.202133,
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655041958,
      "ems": null
    },
    {
      "latitude": 51.259048,
      "longitude": 3.205335,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655041964,
      "ems": null
    },
    {
      "latitude": 51.256947,
      "longitude": 3.208237,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655041970,
      "ems": null
    },
    {
      "latitude": 51.255157,
      "longitude": 3.21068,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655041976,
      "ems": null
    },
    {
      "latitude": 51.252228,
      "longitude": 3.214763,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655041982,
      "ems": null
    },
    {
      "latitude": 51.250305,
      "longitude": 3.217435,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655041988,
      "ems": null
    },
    {
      "latitude": 51.247742,
      "longitude": 3.221221,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1655041995,
      "ems": null
    },
    {
      "latitude": 51.245682,
      "longitude": 3.224116,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655042000,
      "ems": null
    },
    {
      "latitude": 51.242516,
      "longitude": 3.22876,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655042009,
      "ems": null
    },
    {
      "latitude": 51.239685,
      "longitude": 3.233098,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1655042017,
      "ems": null
    },
    {
      "latitude": 51.236881,
      "longitude": 3.23761,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 134,
      "squawk": "4451",
      "timestamp": 1655042025,
      "ems": null
    },
    {
      "latitude": 51.234329,
      "longitude": 3.241338,
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655042032,
      "ems": null
    },
    {
      "latitude": 51.231342,
      "longitude": 3.245392,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655042040,
      "ems": null
    },
    {
      "latitude": 51.229477,
      "longitude": 3.247945,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1655042045,
      "ems": null
    },
    {
      "latitude": 51.227013,
      "longitude": 3.251343,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1655042052,
      "ems": null
    },
    {
      "latitude": 51.22501,
      "longitude": 3.254089,
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
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1655042057,
      "ems": null
    },
    {
      "latitude": 51.222683,
      "longitude": 3.257141,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1655042064,
      "ems": null
    },
    {
      "latitude": 51.220402,
      "longitude": 3.259811,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1655042070,
      "ems": null
    },
    {
      "latitude": 51.218307,
      "longitude": 3.262717,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1655042076,
      "ems": null
    },
    {
      "latitude": 51.216354,
      "longitude": 3.265457,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1655042082,
      "ems": null
    },
    {
      "latitude": 51.213932,
      "longitude": 3.268967,
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
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1655042088,
      "ems": null
    },
    {
      "latitude": 51.21167,
      "longitude": 3.272144,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655042094,
      "ems": null
    },
    {
      "latitude": 51.210533,
      "longitude": 3.273773,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655042097,
      "ems": null
    },
    {
      "latitude": 51.207504,
      "longitude": 3.277786,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1655042105,
      "ems": null
    },
    {
      "latitude": 51.205135,
      "longitude": 3.280945,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1655042111,
      "ems": null
    },
    {
      "latitude": 51.2029,
      "longitude": 3.284149,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1655042117,
      "ems": null
    },
    {
      "latitude": 51.2005,
      "longitude": 3.28751,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1655042124,
      "ems": null
    },
    {
      "latitude": 51.197159,
      "longitude": 3.291741,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1655042133,
      "ems": null
    },
    {
      "latitude": 51.195171,
      "longitude": 3.294601,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655042138,
      "ems": null
    },
    {
      "latitude": 51.193031,
      "longitude": 3.297882,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655042144,
      "ems": null
    },
    {
      "latitude": 51.189724,
      "longitude": 3.302765,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655042154,
      "ems": null
    },
    {
      "latitude": 51.187729,
      "longitude": 3.305549,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655042159,
      "ems": null
    },
    {
      "latitude": 51.185532,
      "longitude": 3.308666,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655042165,
      "ems": null
    },
    {
      "latitude": 51.182789,
      "longitude": 3.312378,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655042173,
      "ems": null
    },
    {
      "latitude": 51.181019,
      "longitude": 3.315125,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1655042178,
      "ems": null
    },
    {
      "latitude": 51.178986,
      "longitude": 3.318316,
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
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655042185,
      "ems": null
    },
    {
      "latitude": 51.176239,
      "longitude": 3.322325,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655042194,
      "ems": null
    },
    {
      "latitude": 51.174873,
      "longitude": 3.32428,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655042198,
      "ems": null
    },
    {
      "latitude": 51.172825,
      "longitude": 3.32695,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1655042205,
      "ems": null
    },
    {
      "latitude": 51.170883,
      "longitude": 3.3296,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1655042211,
      "ems": null
    },
    {
      "latitude": 51.169052,
      "longitude": 3.332049,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655042218,
      "ems": null
    },
    {
      "latitude": 51.167587,
      "longitude": 3.334054,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1655042223,
      "ems": null
    },
    {
      "latitude": 51.165379,
      "longitude": 3.337021,
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
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1655042230,
      "ems": null
    },
    {
      "latitude": 51.163605,
      "longitude": 3.339547,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1655042235,
      "ems": null
    },
    {
      "latitude": 51.160725,
      "longitude": 3.343658,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655042244,
      "ems": null
    },
    {
      "latitude": 51.158535,
      "longitude": 3.346863,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655042250,
      "ems": null
    },
    {
      "latitude": 51.156281,
      "longitude": 3.350013,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655042256,
      "ems": null
    },
    {
      "latitude": 51.154083,
      "longitude": 3.353131,
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
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1655042262,
      "ems": null
    },
    {
      "latitude": 51.151886,
      "longitude": 3.356249,
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
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655042268,
      "ems": null
    },
    {
      "latitude": 51.150375,
      "longitude": 3.35855,
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
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655042274,
      "ems": null
    },
    {
      "latitude": 51.14806,
      "longitude": 3.361893,
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655042280,
      "ems": null
    },
    {
      "latitude": 51.145248,
      "longitude": 3.365751,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1655042286,
      "ems": null
    },
    {
      "latitude": 51.143265,
      "longitude": 3.368378,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1655042292,
      "ems": null
    },
    {
      "latitude": 51.140076,
      "longitude": 3.372357,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1655042300,
      "ems": null
    },
    {
      "latitude": 51.138985,
      "longitude": 3.373642,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1655042303,
      "ems": null
    },
    {
      "latitude": 51.136936,
      "longitude": 3.376083,
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
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1655042309,
      "ems": null
    },
    {
      "latitude": 51.134747,
      "longitude": 3.378983,
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
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1655042315,
      "ems": null
    },
    {
      "latitude": 51.132477,
      "longitude": 3.381933,
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
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1655042321,
      "ems": null
    },
    {
      "latitude": 51.130093,
      "longitude": 3.385239,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1655042327,
      "ems": null
    },
    {
      "latitude": 51.128998,
      "longitude": 3.386981,
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
      "heading": 134,
      "squawk": "4451",
      "timestamp": 1655042330,
      "ems": null
    },
    {
      "latitude": 51.127949,
      "longitude": 3.388672,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 133,
      "squawk": "4451",
      "timestamp": 1655042333,
      "ems": null
    },
    {
      "latitude": 51.127029,
      "longitude": 3.390247,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 131,
      "squawk": "4451",
      "timestamp": 1655042336,
      "ems": null
    },
    {
      "latitude": 51.12595,
      "longitude": 3.392258,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 131,
      "squawk": "4451",
      "timestamp": 1655042339,
      "ems": null
    },
    {
      "latitude": 51.124786,
      "longitude": 3.394699,
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
      "heading": 125,
      "squawk": "4451",
      "timestamp": 1655042343,
      "ems": null
    },
    {
      "latitude": 51.124039,
      "longitude": 3.396606,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1655042346,
      "ems": null
    },
    {
      "latitude": 51.123184,
      "longitude": 3.398784,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1655042349,
      "ems": null
    },
    {
      "latitude": 51.12236,
      "longitude": 3.400937,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1655042352,
      "ems": null
    },
    {
      "latitude": 51.121342,
      "longitude": 3.403244,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 126,
      "squawk": "4451",
      "timestamp": 1655042355,
      "ems": null
    },
    {
      "latitude": 51.120502,
      "longitude": 3.404999,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 125,
      "squawk": "4451",
      "timestamp": 1655042358,
      "ems": null
    },
    {
      "latitude": 51.119522,
      "longitude": 3.40732,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 124,
      "squawk": "4451",
      "timestamp": 1655042361,
      "ems": null
    },
    {
      "latitude": 51.118687,
      "longitude": 3.409424,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1655042364,
      "ems": null
    },
    {
      "latitude": 51.11808,
      "longitude": 3.410873,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1655042367,
      "ems": null
    },
    {
      "latitude": 51.116081,
      "longitude": 3.416138,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655042373,
      "ems": null
    },
    {
      "latitude": 51.114544,
      "longitude": 3.420715,
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
        "fpm": -1920,
        "ms": -9.8
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655042379,
      "ems": null
    },
    {
      "latitude": 51.1138,
      "longitude": 3.423233,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655042382,
      "ems": null
    },
    {
      "latitude": 51.113251,
      "longitude": 3.425062,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1655042385,
      "ems": null
    },
    {
      "latitude": 51.112335,
      "longitude": 3.428106,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655042388,
      "ems": null
    },
    {
      "latitude": 51.111557,
      "longitude": 3.430926,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655042391,
      "ems": null
    },
    {
      "latitude": 51.110867,
      "longitude": 3.433228,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1655042394,
      "ems": null
    },
    {
      "latitude": 51.11026,
      "longitude": 3.435287,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655042397,
      "ems": null
    },
    {
      "latitude": 51.108673,
      "longitude": 3.439834,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1655042403,
      "ems": null
    },
    {
      "latitude": 51.107002,
      "longitude": 3.444061,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1655042409,
      "ems": null
    },
    {
      "latitude": 51.106293,
      "longitude": 3.445995,
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
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1655042412,
      "ems": null
    },
    {
      "latitude": 51.10556,
      "longitude": 3.448,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655042415,
      "ems": null
    },
    {
      "latitude": 51.104767,
      "longitude": 3.450165,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655042418,
      "ems": null
    },
    {
      "latitude": 51.103409,
      "longitude": 3.453864,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655042424,
      "ems": null
    },
    {
      "latitude": 51.102066,
      "longitude": 3.457794,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655042430,
      "ems": null
    },
    {
      "latitude": 51.100891,
      "longitude": 3.461584,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 112,
      "squawk": "4451",
      "timestamp": 1655042436,
      "ems": null
    },
    {
      "latitude": 51.100437,
      "longitude": 3.463287,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1655042439,
      "ems": null
    },
    {
      "latitude": 51.099834,
      "longitude": 3.465881,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 110,
      "squawk": "4451",
      "timestamp": 1655042442,
      "ems": null
    },
    {
      "latitude": 51.099472,
      "longitude": 3.467523,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 109,
      "squawk": "4451",
      "timestamp": 1655042445,
      "ems": null
    },
    {
      "latitude": 51.099014,
      "longitude": 3.469601,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 108,
      "squawk": "4451",
      "timestamp": 1655042448,
      "ems": null
    },
    {
      "latitude": 51.098648,
      "longitude": 3.471606,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1655042451,
      "ems": null
    },
    {
      "latitude": 51.098343,
      "longitude": 3.473587,
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
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655042454,
      "ems": null
    },
    {
      "latitude": 51.098007,
      "longitude": 3.47554,
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
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1655042457,
      "ems": null
    },
    {
      "latitude": 51.097645,
      "longitude": 3.477402,
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
      "heading": 109,
      "squawk": "4451",
      "timestamp": 1655042460,
      "ems": null
    },
    {
      "latitude": 51.09668,
      "longitude": 3.480959,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655042466,
      "ems": null
    },
    {
      "latitude": 51.09597,
      "longitude": 3.4832,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655042469,
      "ems": null
    },
    {
      "latitude": 51.095318,
      "longitude": 3.485107,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655042472,
      "ems": null
    },
    {
      "latitude": 51.094711,
      "longitude": 3.486749,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655042475,
      "ems": null
    },
    {
      "latitude": 51.09407,
      "longitude": 3.488679,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655042478,
      "ems": null
    },
    {
      "latitude": 51.093456,
      "longitude": 3.490524,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655042481,
      "ems": null
    },
    {
      "latitude": 51.092743,
      "longitude": 3.492687,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655042484,
      "ems": null
    },
    {
      "latitude": 51.09206,
      "longitude": 3.49472,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655042487,
      "ems": null
    },
    {
      "latitude": 51.09137,
      "longitude": 3.496696,
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
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655042490,
      "ems": null
    },
    {
      "latitude": 51.090729,
      "longitude": 3.498477,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655042493,
      "ems": null
    },
    {
      "latitude": 51.089355,
      "longitude": 3.502412,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655042499,
      "ems": null
    },
    {
      "latitude": 51.08812,
      "longitude": 3.506346,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655042505,
      "ems": null
    },
    {
      "latitude": 51.086983,
      "longitude": 3.510132,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1655042511,
      "ems": null
    },
    {
      "latitude": 51.085693,
      "longitude": 3.513844,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1655042517,
      "ems": null
    },
    {
      "latitude": 51.084469,
      "longitude": 3.517532,
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
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655042524,
      "ems": null
    },
    {
      "latitude": 51.082855,
      "longitude": 3.523122,
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
      "heading": 113,
      "squawk": "4451",
      "timestamp": 1655042530,
      "ems": null
    },
    {
      "latitude": 51.081894,
      "longitude": 3.526685,
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
      "heading": 113,
      "squawk": "4451",
      "timestamp": 1655042535,
      "ems": null
    },
    {
      "latitude": 51.080978,
      "longitude": 3.529816,
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
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655042540,
      "ems": null
    },
    {
      "latitude": 51.079491,
      "longitude": 3.535004,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655042548,
      "ems": null
    },
    {
      "latitude": 51.07893,
      "longitude": 3.537064,
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
      "heading": 113,
      "squawk": "4451",
      "timestamp": 1655042550,
      "ems": null
    },
    {
      "latitude": 51.077637,
      "longitude": 3.542052,
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
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655042557,
      "ems": null
    },
    {
      "latitude": 51.076279,
      "longitude": 3.546448,
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
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1655042563,
      "ems": null
    },
    {
      "latitude": 51.074982,
      "longitude": 3.550514,
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
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655042569,
      "ems": null
    },
    {
      "latitude": 51.073532,
      "longitude": 3.555145,
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
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655042575,
      "ems": null
    },
    {
      "latitude": 51.072189,
      "longitude": 3.559199,
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
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655042581,
      "ems": null
    },
    {
      "latitude": 51.07077,
      "longitude": 3.563505,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1655042587,
      "ems": null
    },
    {
      "latitude": 51.069435,
      "longitude": 3.568192,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 113,
      "squawk": "4451",
      "timestamp": 1655042593,
      "ems": null
    },
    {
      "latitude": 51.068924,
      "longitude": 3.570328,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 110,
      "squawk": "4451",
      "timestamp": 1655042596,
      "ems": null
    },
    {
      "latitude": 51.068317,
      "longitude": 3.572845,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 109,
      "squawk": "4451",
      "timestamp": 1655042599,
      "ems": null
    },
    {
      "latitude": 51.067749,
      "longitude": 3.575382,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 109,
      "squawk": "4451",
      "timestamp": 1655042603,
      "ems": null
    },
    {
      "latitude": 51.067013,
      "longitude": 3.578491,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 112,
      "squawk": "4451",
      "timestamp": 1655042607,
      "ems": null
    },
    {
      "latitude": 51.066223,
      "longitude": 3.58139,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "4451",
      "timestamp": 1655042611,
      "ems": null
    },
    {
      "latitude": 51.065475,
      "longitude": 3.584442,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1655042615,
      "ems": null
    },
    {
      "latitude": 51.064777,
      "longitude": 3.587494,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 108,
      "squawk": "4451",
      "timestamp": 1655042619,
      "ems": null
    },
    {
      "latitude": 51.063721,
      "longitude": 3.592975,
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
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1655042626,
      "ems": null
    },
    {
      "latitude": 51.062778,
      "longitude": 3.598022,
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
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1655042632,
      "ems": null
    },
    {
      "latitude": 51.062347,
      "longitude": 3.600398,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1655042635,
      "ems": null
    },
    {
      "latitude": 51.062027,
      "longitude": 3.602254,
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
      "heading": 107,
      "squawk": "4451",
      "timestamp": 1655042638,
      "ems": null
    },
    {
      "latitude": 51.061428,
      "longitude": 3.605118,
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
      "heading": 107,
      "squawk": "4451",
      "timestamp": 1655042641,
      "ems": null
    },
    {
      "latitude": 51.060452,
      "longitude": 3.609619,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 109,
      "squawk": "4451",
      "timestamp": 1655042647,
      "ems": null
    },
    {
      "latitude": 51.059601,
      "longitude": 3.613537,
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
      "heading": 109,
      "squawk": "4451",
      "timestamp": 1655042653,
      "ems": null
    },
    {
      "latitude": 51.058403,
      "longitude": 3.618774,
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
      "heading": 110,
      "squawk": "4451",
      "timestamp": 1655042659,
      "ems": null
    },
    {
      "latitude": 51.057861,
      "longitude": 3.621109,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1655042662,
      "ems": null
    },
    {
      "latitude": 51.056168,
      "longitude": 3.627864,
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
      "heading": 112,
      "squawk": "4451",
      "timestamp": 1655042671,
      "ems": null
    },
    {
      "latitude": 51.054676,
      "longitude": 3.634109,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 109,
      "squawk": "4451",
      "timestamp": 1655042680,
      "ems": null
    },
    {
      "latitude": 51.054337,
      "longitude": 3.6364,
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
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1655042683,
      "ems": null
    },
    {
      "latitude": 51.054062,
      "longitude": 3.638776,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 99,
      "squawk": "4451",
      "timestamp": 1655042686,
      "ems": null
    },
    {
      "latitude": 51.053932,
      "longitude": 3.64006,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 97,
      "squawk": "4451",
      "timestamp": 1655042688,
      "ems": null
    },
    {
      "latitude": 51.053699,
      "longitude": 3.643265,
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
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1655042692,
      "ems": null
    },
    {
      "latitude": 51.053558,
      "longitude": 3.645325,
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
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1655042694,
      "ems": null
    },
    {
      "latitude": 51.053421,
      "longitude": 3.647238,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 95,
      "squawk": "4451",
      "timestamp": 1655042698,
      "ems": null
    },
    {
      "latitude": 51.053329,
      "longitude": 3.648797,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 95,
      "squawk": "4451",
      "timestamp": 1655042699,
      "ems": null
    },
    {
      "latitude": 51.053146,
      "longitude": 3.652435,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 95,
      "squawk": "4451",
      "timestamp": 1655042702,
      "ems": null
    },
    {
      "latitude": 51.052917,
      "longitude": 3.655998,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 94,
      "squawk": "4451",
      "timestamp": 1655042707,
      "ems": null
    },
    {
      "latitude": 51.052872,
      "longitude": 3.656517,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 94,
      "squawk": "4451",
      "timestamp": 1655042711,
      "ems": null
    },
    {
      "latitude": 51.052628,
      "longitude": 3.662567,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 93,
      "squawk": "4451",
      "timestamp": 1655042715,
      "ems": null
    },
    {
      "latitude": 51.052303,
      "longitude": 3.669357,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 95,
      "squawk": "4451",
      "timestamp": 1655042723,
      "ems": null
    },
    {
      "latitude": 51.051975,
      "longitude": 3.672714,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655042727,
      "ems": null
    },
    {
      "latitude": 51.051315,
      "longitude": 3.676263,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 109,
      "squawk": "4451",
      "timestamp": 1655042731,
      "ems": null
    },
    {
      "latitude": 51.050907,
      "longitude": 3.677597,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655042734,
      "ems": null
    },
    {
      "latitude": 51.049789,
      "longitude": 3.680115,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 127,
      "squawk": "4451",
      "timestamp": 1655042737,
      "ems": null
    },
    {
      "latitude": 51.048843,
      "longitude": 3.681756,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 133,
      "squawk": "4451",
      "timestamp": 1655042740,
      "ems": null
    },
    {
      "latitude": 51.047695,
      "longitude": 3.683548,
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
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655042743,
      "ems": null
    },
    {
      "latitude": 51.046902,
      "longitude": 3.684692,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655042746,
      "ems": null
    },
    {
      "latitude": 51.045738,
      "longitude": 3.686447,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1655042749,
      "ems": null
    },
    {
      "latitude": 51.044621,
      "longitude": 3.688202,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1655042752,
      "ems": null
    },
    {
      "latitude": 51.043877,
      "longitude": 3.689346,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1655042755,
      "ems": null
    },
    {
      "latitude": 51.042664,
      "longitude": 3.691184,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 134,
      "squawk": "4451",
      "timestamp": 1655042758,
      "ems": null
    },
    {
      "latitude": 51.041656,
      "longitude": 3.692891,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 133,
      "squawk": "4451",
      "timestamp": 1655042761,
      "ems": null
    },
    {
      "latitude": 51.040756,
      "longitude": 3.694458,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 131,
      "squawk": "4451",
      "timestamp": 1655042764,
      "ems": null
    },
    {
      "latitude": 51.038803,
      "longitude": 3.69812,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 130,
      "squawk": "4451",
      "timestamp": 1655042770,
      "ems": null
    },
    {
      "latitude": 51.038452,
      "longitude": 3.698829,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 130,
      "squawk": "4451",
      "timestamp": 1655042773,
      "ems": null
    },
    {
      "latitude": 51.036987,
      "longitude": 3.701553,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 128,
      "squawk": "4451",
      "timestamp": 1655042776,
      "ems": null
    },
    {
      "latitude": 51.036072,
      "longitude": 3.703432,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 128,
      "squawk": "4451",
      "timestamp": 1655042779,
      "ems": null
    },
    {
      "latitude": 51.03545,
      "longitude": 3.704758,
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
      "heading": 127,
      "squawk": "4451",
      "timestamp": 1655042782,
      "ems": null
    },
    {
      "latitude": 51.034424,
      "longitude": 3.706846,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 127,
      "squawk": "4451",
      "timestamp": 1655042785,
      "ems": null
    },
    {
      "latitude": 51.033401,
      "longitude": 3.70903,
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
      "heading": 125,
      "squawk": "4451",
      "timestamp": 1655042788,
      "ems": null
    },
    {
      "latitude": 51.032547,
      "longitude": 3.710929,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 125,
      "squawk": "4451",
      "timestamp": 1655042791,
      "ems": null
    },
    {
      "latitude": 51.031769,
      "longitude": 3.712711,
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
      "heading": 125,
      "squawk": "4451",
      "timestamp": 1655042794,
      "ems": null
    },
    {
      "latitude": 51.030853,
      "longitude": 3.714789,
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
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1655042797,
      "ems": null
    },
    {
      "latitude": 51.030075,
      "longitude": 3.716645,
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
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1655042800,
      "ems": null
    },
    {
      "latitude": 51.029259,
      "longitude": 3.718719,
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
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1655042803,
      "ems": null
    },
    {
      "latitude": 51.028793,
      "longitude": 3.72006,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655042807,
      "ems": null
    },
    {
      "latitude": 51.027695,
      "longitude": 3.723177,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655042809,
      "ems": null
    },
    {
      "latitude": 51.026932,
      "longitude": 3.725204,
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
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655042812,
      "ems": null
    },
    {
      "latitude": 51.026142,
      "longitude": 3.727264,
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
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1655042815,
      "ems": null
    },
    {
      "latitude": 51.024464,
      "longitude": 3.731537,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 124,
      "squawk": "4451",
      "timestamp": 1655042822,
      "ems": null
    },
    {
      "latitude": 51.022697,
      "longitude": 3.735657,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1655042828,
      "ems": null
    },
    {
      "latitude": 51.021469,
      "longitude": 3.738766,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1655042833,
      "ems": null
    },
    {
      "latitude": 51.019577,
      "longitude": 3.743362,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1655042839,
      "ems": null
    },
    {
      "latitude": 51.017574,
      "longitude": 3.748093,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1655042846,
      "ems": null
    },
    {
      "latitude": 51.01593,
      "longitude": 3.751905,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 124,
      "squawk": "4451",
      "timestamp": 1655042851,
      "ems": null
    },
    {
      "latitude": 51.014595,
      "longitude": 3.755035,
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
      "squawk": "4451",
      "timestamp": 1655042857,
      "ems": null
    },
    {
      "latitude": 51.01236,
      "longitude": 3.760665,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1655042863,
      "ems": null
    },
    {
      "latitude": 51.010777,
      "longitude": 3.764877,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655042869,
      "ems": null
    },
    {
      "latitude": 51.009197,
      "longitude": 3.769073,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1655042875,
      "ems": null
    },
    {
      "latitude": 51.007553,
      "longitude": 3.77321,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1655042881,
      "ems": null
    },
    {
      "latitude": 51.005844,
      "longitude": 3.777618,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1655042887,
      "ems": null
    },
    {
      "latitude": 51.004486,
      "longitude": 3.780856,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 124,
      "squawk": "4451",
      "timestamp": 1655042894,
      "ems": null
    },
    {
      "latitude": 51.002518,
      "longitude": 3.78531,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 125,
      "squawk": "4451",
      "timestamp": 1655042900,
      "ems": null
    },
    {
      "latitude": 51.001602,
      "longitude": 3.787165,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 128,
      "squawk": "4451",
      "timestamp": 1655042902,
      "ems": null
    },
    {
      "latitude": 51.000538,
      "longitude": 3.789215,
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
      "heading": 129,
      "squawk": "4451",
      "timestamp": 1655042906,
      "ems": null
    },
    {
      "latitude": 50.99968,
      "longitude": 3.791026,
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
      "heading": 127,
      "squawk": "4451",
      "timestamp": 1655042908,
      "ems": null
    },
    {
      "latitude": 50.997978,
      "longitude": 3.794861,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1655042915,
      "ems": null
    },
    {
      "latitude": 50.996338,
      "longitude": 3.799191,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655042920,
      "ems": null
    },
    {
      "latitude": 50.995602,
      "longitude": 3.80127,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655042924,
      "ems": null
    },
    {
      "latitude": 50.994873,
      "longitude": 3.803571,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655042927,
      "ems": null
    },
    {
      "latitude": 50.99416,
      "longitude": 3.805847,
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
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655042930,
      "ems": null
    },
    {
      "latitude": 50.993408,
      "longitude": 3.808247,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655042933,
      "ems": null
    },
    {
      "latitude": 50.992813,
      "longitude": 3.810177,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1655042935,
      "ems": null
    },
    {
      "latitude": 50.992111,
      "longitude": 3.812561,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655042939,
      "ems": null
    },
    {
      "latitude": 50.991531,
      "longitude": 3.814631,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "4451",
      "timestamp": 1655042942,
      "ems": null
    },
    {
      "latitude": 50.990948,
      "longitude": 3.816833,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "4451",
      "timestamp": 1655042945,
      "ems": null
    },
    {
      "latitude": 50.990341,
      "longitude": 3.818937,
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
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1655042948,
      "ems": null
    },
    {
      "latitude": 50.988968,
      "longitude": 3.823168,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655042954,
      "ems": null
    },
    {
      "latitude": 50.98764,
      "longitude": 3.827177,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655042960,
      "ems": null
    },
    {
      "latitude": 50.986107,
      "longitude": 3.831787,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655042966,
      "ems": null
    },
    {
      "latitude": 50.984665,
      "longitude": 3.836084,
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
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655042972,
      "ems": null
    },
    {
      "latitude": 50.98336,
      "longitude": 3.840256,
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
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655042980,
      "ems": null
    },
    {
      "latitude": 50.981079,
      "longitude": 3.848114,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 113,
      "squawk": "4451",
      "timestamp": 1655042988,
      "ems": null
    },
    {
      "latitude": 50.97963,
      "longitude": 3.853083,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655042995,
      "ems": null
    },
    {
      "latitude": 50.978424,
      "longitude": 3.857422,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 113,
      "squawk": "4451",
      "timestamp": 1655043001,
      "ems": null
    },
    {
      "latitude": 50.976936,
      "longitude": 3.862381,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655043007,
      "ems": null
    },
    {
      "latitude": 50.976013,
      "longitude": 3.864886,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1655043010,
      "ems": null
    },
    {
      "latitude": 50.975235,
      "longitude": 3.866965,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1655043013,
      "ems": null
    },
    {
      "latitude": 50.974327,
      "longitude": 3.869171,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1655043017,
      "ems": null
    },
    {
      "latitude": 50.97377,
      "longitude": 3.870602,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1655043019,
      "ems": null
    },
    {
      "latitude": 50.972698,
      "longitude": 3.873367,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655043023,
      "ems": null
    },
    {
      "latitude": 50.972046,
      "longitude": 3.875198,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655043025,
      "ems": null
    },
    {
      "latitude": 50.971161,
      "longitude": 3.877487,
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
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655043029,
      "ems": null
    },
    {
      "latitude": 50.970512,
      "longitude": 3.879318,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655043031,
      "ems": null
    },
    {
      "latitude": 50.969765,
      "longitude": 3.881378,
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
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655043035,
      "ems": null
    },
    {
      "latitude": 50.968323,
      "longitude": 3.885374,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655043040,
      "ems": null
    },
    {
      "latitude": 50.966904,
      "longitude": 3.889606,
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
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655043047,
      "ems": null
    },
    {
      "latitude": 50.966415,
      "longitude": 3.89122,
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
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655043049,
      "ems": null
    },
    {
      "latitude": 50.965164,
      "longitude": 3.894505,
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
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1655043055,
      "ems": null
    },
    {
      "latitude": 50.963573,
      "longitude": 3.898773,
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
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655043062,
      "ems": null
    },
    {
      "latitude": 50.962234,
      "longitude": 3.902448,
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
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655043068,
      "ems": null
    },
    {
      "latitude": 50.960907,
      "longitude": 3.906234,
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
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655043074,
      "ems": null
    },
    {
      "latitude": 50.959663,
      "longitude": 3.909912,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655043080,
      "ems": null
    },
    {
      "latitude": 50.958481,
      "longitude": 3.913879,
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
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655043086,
      "ems": null
    },
    {
      "latitude": 50.957886,
      "longitude": 3.915735,
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
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655043089,
      "ems": null
    },
    {
      "latitude": 50.95665,
      "longitude": 3.919521,
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
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655043095,
      "ems": null
    },
    {
      "latitude": 50.955379,
      "longitude": 3.923264,
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
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655043100,
      "ems": null
    },
    {
      "latitude": 50.953983,
      "longitude": 3.927002,
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
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655043107,
      "ems": null
    },
    {
      "latitude": 50.952576,
      "longitude": 3.93073,
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
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655043113,
      "ems": null
    },
    {
      "latitude": 50.951145,
      "longitude": 3.934708,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655043119,
      "ems": null
    },
    {
      "latitude": 50.949795,
      "longitude": 3.938675,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655043125,
      "ems": null
    },
    {
      "latitude": 50.948353,
      "longitude": 3.942795,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655043131,
      "ems": null
    },
    {
      "latitude": 50.946957,
      "longitude": 3.946838,
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
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655043137,
      "ems": null
    },
    {
      "latitude": 50.945526,
      "longitude": 3.951144,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655043143,
      "ems": null
    },
    {
      "latitude": 50.943649,
      "longitude": 3.956604,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655043151,
      "ems": null
    },
    {
      "latitude": 50.941833,
      "longitude": 3.962097,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655043159,
      "ems": null
    },
    {
      "latitude": 50.939926,
      "longitude": 3.967972,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655043167,
      "ems": null
    },
    {
      "latitude": 50.938568,
      "longitude": 3.972152,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655043173,
      "ems": null
    },
    {
      "latitude": 50.937195,
      "longitude": 3.976308,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655043179,
      "ems": null
    },
    {
      "latitude": 50.935135,
      "longitude": 3.98247,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655043187,
      "ems": null
    },
    {
      "latitude": 50.933689,
      "longitude": 3.986435,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655043192,
      "ems": null
    },
    {
      "latitude": 50.931545,
      "longitude": 3.992081,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655043200,
      "ems": null
    },
    {
      "latitude": 50.929127,
      "longitude": 3.999023,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655043209,
      "ems": null
    },
    {
      "latitude": 50.927444,
      "longitude": 4.003997,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655043215,
      "ems": null
    },
    {
      "latitude": 50.925842,
      "longitude": 4.008971,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655043221,
      "ems": null
    },
    {
      "latitude": 50.925156,
      "longitude": 4.011049,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655043224,
      "ems": null
    },
    {
      "latitude": 50.924332,
      "longitude": 4.01387,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1655043227,
      "ems": null
    },
    {
      "latitude": 50.922749,
      "longitude": 4.01886,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655043233,
      "ems": null
    },
    {
      "latitude": 50.921356,
      "longitude": 4.023446,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655043239,
      "ems": null
    },
    {
      "latitude": 50.919937,
      "longitude": 4.027825,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655043245,
      "ems": null
    },
    {
      "latitude": 50.918564,
      "longitude": 4.032057,
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
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655043251,
      "ems": null
    },
    {
      "latitude": 50.91716,
      "longitude": 4.035873,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655043257,
      "ems": null
    },
    {
      "latitude": 50.915817,
      "longitude": 4.039851,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655043263,
      "ems": null
    },
    {
      "latitude": 50.914509,
      "longitude": 4.043579,
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
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655043269,
      "ems": null
    },
    {
      "latitude": 50.913254,
      "longitude": 4.047571,
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
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655043275,
      "ems": null
    },
    {
      "latitude": 50.912018,
      "longitude": 4.051431,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655043281,
      "ems": null
    },
    {
      "latitude": 50.910828,
      "longitude": 4.05544,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655043287,
      "ems": null
    },
    {
      "latitude": 50.909592,
      "longitude": 4.059226,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655043293,
      "ems": null
    },
    {
      "latitude": 50.908504,
      "longitude": 4.062958,
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
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655043299,
      "ems": null
    },
    {
      "latitude": 50.906689,
      "longitude": 4.068604,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655043308,
      "ems": null
    },
    {
      "latitude": 50.905151,
      "longitude": 4.073868,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655043317,
      "ems": null
    },
    {
      "latitude": 50.903824,
      "longitude": 4.078674,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655043325,
      "ems": null
    },
    {
      "latitude": 50.90213,
      "longitude": 4.083722,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655043333,
      "ems": null
    },
    {
      "latitude": 50.900356,
      "longitude": 4.088745,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1655043341,
      "ems": null
    },
    {
      "latitude": 50.89856,
      "longitude": 4.093595,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655043348,
      "ems": null
    },
    {
      "latitude": 50.896774,
      "longitude": 4.098791,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655043356,
      "ems": null
    },
    {
      "latitude": 50.895126,
      "longitude": 4.103542,
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
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655043364,
      "ems": null
    },
    {
      "latitude": 50.893375,
      "longitude": 4.10881,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1655043372,
      "ems": null
    },
    {
      "latitude": 50.89114,
      "longitude": 4.115067,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1655043380,
      "ems": null
    },
    {
      "latitude": 50.889633,
      "longitude": 4.11876,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1655043386,
      "ems": null
    },
    {
      "latitude": 50.888077,
      "longitude": 4.122768,
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
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655043392,
      "ems": null
    },
    {
      "latitude": 50.886669,
      "longitude": 4.126816,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655043398,
      "ems": null
    },
    {
      "latitude": 50.885239,
      "longitude": 4.130637,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655043404,
      "ems": null
    },
    {
      "latitude": 50.883865,
      "longitude": 4.134422,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655043410,
      "ems": null
    },
    {
      "latitude": 50.882492,
      "longitude": 4.138357,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655043416,
      "ems": null
    },
    {
      "latitude": 50.881851,
      "longitude": 4.140287,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655043419,
      "ems": null
    },
    {
      "latitude": 50.880661,
      "longitude": 4.144221,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1655043425,
      "ems": null
    },
    {
      "latitude": 50.879379,
      "longitude": 4.148304,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655043431,
      "ems": null
    },
    {
      "latitude": 50.878052,
      "longitude": 4.152164,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655043437,
      "ems": null
    },
    {
      "latitude": 50.876614,
      "longitude": 4.156189,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655043444,
      "ems": null
    },
    {
      "latitude": 50.875259,
      "longitude": 4.159661,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1655043449,
      "ems": null
    },
    {
      "latitude": 50.874332,
      "longitude": 4.161835,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1655043453,
      "ems": null
    },
    {
      "latitude": 50.873589,
      "longitude": 4.163742,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1655043455,
      "ems": null
    },
    {
      "latitude": 50.872971,
      "longitude": 4.165154,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 124,
      "squawk": "4451",
      "timestamp": 1655043458,
      "ems": null
    },
    {
      "latitude": 50.871819,
      "longitude": 4.167404,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 131,
      "squawk": "4451",
      "timestamp": 1655043462,
      "ems": null
    },
    {
      "latitude": 50.871029,
      "longitude": 4.168777,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1655043464,
      "ems": null
    },
    {
      "latitude": 50.869949,
      "longitude": 4.170277,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1655043467,
      "ems": null
    },
    {
      "latitude": 50.868889,
      "longitude": 4.1716,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1655043470,
      "ems": null
    },
    {
      "latitude": 50.867771,
      "longitude": 4.172745,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1655043474,
      "ems": null
    },
    {
      "latitude": 50.866425,
      "longitude": 4.174137,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1655043477,
      "ems": null
    },
    {
      "latitude": 50.865536,
      "longitude": 4.175262,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1655043480,
      "ems": null
    },
    {
      "latitude": 50.864277,
      "longitude": 4.177094,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1655043483,
      "ems": null
    },
    {
      "latitude": 50.863255,
      "longitude": 4.178619,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1655043486,
      "ems": null
    },
    {
      "latitude": 50.862278,
      "longitude": 4.179916,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1655043488,
      "ems": null
    },
    {
      "latitude": 50.861801,
      "longitude": 4.180521,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1655043490,
      "ems": null
    },
    {
      "latitude": 50.860794,
      "longitude": 4.181708,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1655043492,
      "ems": null
    },
    {
      "latitude": 50.859112,
      "longitude": 4.183426,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1655043497,
      "ems": null
    },
    {
      "latitude": 50.856674,
      "longitude": 4.185939,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1655043506,
      "ems": null
    },
    {
      "latitude": 50.85347,
      "longitude": 4.189874,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1655043513,
      "ems": null
    },
    {
      "latitude": 50.851044,
      "longitude": 4.19314,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655043519,
      "ems": null
    },
    {
      "latitude": 50.849945,
      "longitude": 4.194699,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655043521,
      "ems": null
    },
    {
      "latitude": 50.849754,
      "longitude": 4.194946,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655043523,
      "ems": null
    },
    {
      "latitude": 50.847939,
      "longitude": 4.197464,
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655043527,
      "ems": null
    },
    {
      "latitude": 50.846729,
      "longitude": 4.199142,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655043531,
      "ems": null
    },
    {
      "latitude": 50.844864,
      "longitude": 4.201825,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1655043539,
      "ems": null
    },
    {
      "latitude": 50.840958,
      "longitude": 4.206696,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1655043548,
      "ems": null
    },
    {
      "latitude": 50.838303,
      "longitude": 4.2099,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1655043554,
      "ems": null
    },
    {
      "latitude": 50.835835,
      "longitude": 4.213104,
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
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1655043561,
      "ems": null
    },
    {
      "latitude": 50.833649,
      "longitude": 4.215781,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1655043566,
      "ems": null
    },
    {
      "latitude": 50.830444,
      "longitude": 4.219789,
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
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1655043576,
      "ems": null
    },
    {
      "latitude": 50.829071,
      "longitude": 4.221497,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1655043580,
      "ems": null
    },
    {
      "latitude": 50.826199,
      "longitude": 4.224854,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1655043588,
      "ems": null
    },
    {
      "latitude": 50.823578,
      "longitude": 4.228251,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1655043596,
      "ems": null
    },
    {
      "latitude": 50.821171,
      "longitude": 4.231567,
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
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1655043603,
      "ems": null
    },
    {
      "latitude": 50.81987,
      "longitude": 4.233522,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655043609,
      "ems": null
    },
    {
      "latitude": 50.818378,
      "longitude": 4.235764,
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
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1655043611,
      "ems": null
    },
    {
      "latitude": 50.817215,
      "longitude": 4.237531,
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
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655043615,
      "ems": null
    },
    {
      "latitude": 50.814468,
      "longitude": 4.241104,
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
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1655043623,
      "ems": null
    },
    {
      "latitude": 50.812042,
      "longitude": 4.244063,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1655043630,
      "ems": null
    },
    {
      "latitude": 50.809753,
      "longitude": 4.246884,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1655043636,
      "ems": null
    },
    {
      "latitude": 50.809162,
      "longitude": 4.247437,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1655043639,
      "ems": null
    },
    {
      "latitude": 50.807625,
      "longitude": 4.249039,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1655043642,
      "ems": null
    },
    {
      "latitude": 50.806648,
      "longitude": 4.250031,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1655043644,
      "ems": null
    },
    {
      "latitude": 50.805176,
      "longitude": 4.251561,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1655043648,
      "ems": null
    },
    {
      "latitude": 50.802177,
      "longitude": 4.254532,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1655043656,
      "ems": null
    },
    {
      "latitude": 50.800735,
      "longitude": 4.255981,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1655043660,
      "ems": null
    },
    {
      "latitude": 50.797394,
      "longitude": 4.259429,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1655043668,
      "ems": null
    },
    {
      "latitude": 50.795055,
      "longitude": 4.262161,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1655043675,
      "ems": null
    },
    {
      "latitude": 50.793274,
      "longitude": 4.264699,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1655043680,
      "ems": null
    },
    {
      "latitude": 50.791935,
      "longitude": 4.266739,
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
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1655043684,
      "ems": null
    },
    {
      "latitude": 50.790802,
      "longitude": 4.268486,
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
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655043687,
      "ems": null
    },
    {
      "latitude": 50.789658,
      "longitude": 4.270193,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1655043691,
      "ems": null
    },
    {
      "latitude": 50.788071,
      "longitude": 4.272614,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1655043695,
      "ems": null
    },
    {
      "latitude": 50.786499,
      "longitude": 4.275092,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 134,
      "squawk": "4451",
      "timestamp": 1655043699,
      "ems": null
    },
    {
      "latitude": 50.784943,
      "longitude": 4.277764,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 132,
      "squawk": "4451",
      "timestamp": 1655043707,
      "ems": null
    },
    {
      "latitude": 50.780811,
      "longitude": 4.283905,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1655043715,
      "ems": null
    },
    {
      "latitude": 50.777847,
      "longitude": 4.288157,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1655043723,
      "ems": null
    },
    {
      "latitude": 50.775829,
      "longitude": 4.291382,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 133,
      "squawk": "4451",
      "timestamp": 1655043729,
      "ems": null
    },
    {
      "latitude": 50.774014,
      "longitude": 4.294357,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 133,
      "squawk": "4451",
      "timestamp": 1655043735,
      "ems": null
    },
    {
      "latitude": 50.773087,
      "longitude": 4.295951,
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
      "heading": 133,
      "squawk": "4451",
      "timestamp": 1655043738,
      "ems": null
    },
    {
      "latitude": 50.771988,
      "longitude": 4.297733,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 132,
      "squawk": "4451",
      "timestamp": 1655043741,
      "ems": null
    },
    {
      "latitude": 50.770111,
      "longitude": 4.301073,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 132,
      "squawk": "4451",
      "timestamp": 1655043747,
      "ems": null
    },
    {
      "latitude": 50.769379,
      "longitude": 4.302484,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 129,
      "squawk": "4451",
      "timestamp": 1655043750,
      "ems": null
    },
    {
      "latitude": 50.768326,
      "longitude": 4.30471,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 127,
      "squawk": "4451",
      "timestamp": 1655043753,
      "ems": null
    },
    {
      "latitude": 50.767033,
      "longitude": 4.307251,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 127,
      "squawk": "4451",
      "timestamp": 1655043757,
      "ems": null
    },
    {
      "latitude": 50.766098,
      "longitude": 4.309082,
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
      "heading": 128,
      "squawk": "4451",
      "timestamp": 1655043761,
      "ems": null
    },
    {
      "latitude": 50.763538,
      "longitude": 4.313812,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 130,
      "squawk": "4451",
      "timestamp": 1655043769,
      "ems": null
    },
    {
      "latitude": 50.760654,
      "longitude": 4.318924,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 131,
      "squawk": "4451",
      "timestamp": 1655043777,
      "ems": null
    },
    {
      "latitude": 50.758327,
      "longitude": 4.323959,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655043785,
      "ems": null
    },
    {
      "latitude": 50.757477,
      "longitude": 4.326386,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655043789,
      "ems": null
    },
    {
      "latitude": 50.756744,
      "longitude": 4.328613,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655043793,
      "ems": null
    },
    {
      "latitude": 50.756012,
      "longitude": 4.330989,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1655043797,
      "ems": null
    },
    {
      "latitude": 50.755344,
      "longitude": 4.33342,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 112,
      "squawk": "4451",
      "timestamp": 1655043801,
      "ems": null
    },
    {
      "latitude": 50.754684,
      "longitude": 4.336111,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1655043805,
      "ems": null
    },
    {
      "latitude": 50.754135,
      "longitude": 4.338189,
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
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1655043809,
      "ems": null
    },
    {
      "latitude": 50.753403,
      "longitude": 4.341233,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 109,
      "squawk": "4451",
      "timestamp": 1655043813,
      "ems": null
    },
    {
      "latitude": 50.752808,
      "longitude": 4.343905,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 108,
      "squawk": "4451",
      "timestamp": 1655043817,
      "ems": null
    },
    {
      "latitude": 50.752121,
      "longitude": 4.3468,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 108,
      "squawk": "4451",
      "timestamp": 1655043821,
      "ems": null
    },
    {
      "latitude": 50.751663,
      "longitude": 4.349175,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 107,
      "squawk": "4451",
      "timestamp": 1655043825,
      "ems": null
    },
    {
      "latitude": 50.751068,
      "longitude": 4.351996,
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
      "heading": 107,
      "squawk": "4451",
      "timestamp": 1655043829,
      "ems": null
    },
    {
      "latitude": 50.749878,
      "longitude": 4.357118,
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
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1655043837,
      "ems": null
    },
    {
      "latitude": 50.748596,
      "longitude": 4.362717,
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
      "heading": 108,
      "squawk": "4451",
      "timestamp": 1655043845,
      "ems": null
    },
    {
      "latitude": 50.747433,
      "longitude": 4.367981,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 110,
      "squawk": "4451",
      "timestamp": 1655043853,
      "ems": null
    },
    {
      "latitude": 50.746582,
      "longitude": 4.371668,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 110,
      "squawk": "4451",
      "timestamp": 1655043857,
      "ems": null
    },
    {
      "latitude": 50.744919,
      "longitude": 4.379654,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 107,
      "squawk": "4451",
      "timestamp": 1655043868,
      "ems": null
    },
    {
      "latitude": 50.744797,
      "longitude": 4.380279,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1655043869,
      "ems": null
    },
    {
      "latitude": 50.744339,
      "longitude": 4.383842,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1655043873,
      "ems": null
    },
    {
      "latitude": 50.744125,
      "longitude": 4.385986,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1655043877,
      "ems": null
    },
    {
      "latitude": 50.744019,
      "longitude": 4.387628,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 94,
      "squawk": "4451",
      "timestamp": 1655043881,
      "ems": null
    },
    {
      "latitude": 50.74379,
      "longitude": 4.392378,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 94,
      "squawk": "4451",
      "timestamp": 1655043885,
      "ems": null
    },
    {
      "latitude": 50.74366,
      "longitude": 4.394913,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 94,
      "squawk": "4451",
      "timestamp": 1655043889,
      "ems": null
    },
    {
      "latitude": 50.743561,
      "longitude": 4.398391,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 94,
      "squawk": "4451",
      "timestamp": 1655043893,
      "ems": null
    },
    {
      "latitude": 50.743149,
      "longitude": 4.401169,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 110,
      "squawk": "4451",
      "timestamp": 1655043897,
      "ems": null
    },
    {
      "latitude": 50.742126,
      "longitude": 4.403915,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655043901,
      "ems": null
    },
    {
      "latitude": 50.740311,
      "longitude": 4.406052,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1655043905,
      "ems": null
    },
    {
      "latitude": 50.738682,
      "longitude": 4.406738,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 173,
      "squawk": "4451",
      "timestamp": 1655043909,
      "ems": null
    },
    {
      "latitude": 50.736633,
      "longitude": 4.406433,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 191,
      "squawk": "4451",
      "timestamp": 1655043913,
      "ems": null
    },
    {
      "latitude": 50.735374,
      "longitude": 4.405441,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1655043916,
      "ems": null
    },
    {
      "latitude": 50.734039,
      "longitude": 4.403365,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 233,
      "squawk": "4451",
      "timestamp": 1655043920,
      "ems": null
    },
    {
      "latitude": 50.733902,
      "longitude": 4.402919,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1655043924,
      "ems": null
    },
    {
      "latitude": 50.733467,
      "longitude": 4.399567,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655043927,
      "ems": null
    },
    {
      "latitude": 50.733536,
      "longitude": 4.398243,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1655043928,
      "ems": null
    },
    {
      "latitude": 50.733856,
      "longitude": 4.395719,
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
      "heading": 282,
      "squawk": "4451",
      "timestamp": 1655043932,
      "ems": null
    },
    {
      "latitude": 50.734165,
      "longitude": 4.393616,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1655043936,
      "ems": null
    },
    {
      "latitude": 50.734451,
      "longitude": 4.391265,
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
      "heading": 282,
      "squawk": "4451",
      "timestamp": 1655043939,
      "ems": null
    },
    {
      "latitude": 50.734772,
      "longitude": 4.389114,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1655043943,
      "ems": null
    },
    {
      "latitude": 50.735001,
      "longitude": 4.385846,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1655043947,
      "ems": null
    },
    {
      "latitude": 50.733978,
      "longitude": 4.381256,
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
      "heading": 231,
      "squawk": "4451",
      "timestamp": 1655043955,
      "ems": null
    },
    {
      "latitude": 50.732758,
      "longitude": 4.379759,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1655043959,
      "ems": null
    },
    {
      "latitude": 50.731888,
      "longitude": 4.379313,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 189,
      "squawk": "4451",
      "timestamp": 1655043963,
      "ems": null
    },
    {
      "latitude": 50.729836,
      "longitude": 4.379272,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1655043967,
      "ems": null
    },
    {
      "latitude": 50.728348,
      "longitude": 4.379654,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1655043971,
      "ems": null
    },
    {
      "latitude": 50.72718,
      "longitude": 4.380035,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1655043975,
      "ems": null
    },
    {
      "latitude": 50.724621,
      "longitude": 4.380951,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1655043980,
      "ems": null
    },
    {
      "latitude": 50.723099,
      "longitude": 4.381541,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1655043984,
      "ems": null
    },
    {
      "latitude": 50.721783,
      "longitude": 4.382095,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1655043988,
      "ems": null
    },
    {
      "latitude": 50.720123,
      "longitude": 4.382802,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1655043992,
      "ems": null
    },
    {
      "latitude": 50.718246,
      "longitude": 4.383693,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1655043996,
      "ems": null
    },
    {
      "latitude": 50.71669,
      "longitude": 4.38451,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1655044000,
      "ems": null
    },
    {
      "latitude": 50.714905,
      "longitude": 4.385475,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1655044004,
      "ems": null
    },
    {
      "latitude": 50.713394,
      "longitude": 4.386366,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1655044008,
      "ems": null
    },
    {
      "latitude": 50.711494,
      "longitude": 4.387512,
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
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1655044012,
      "ems": null
    },
    {
      "latitude": 50.710236,
      "longitude": 4.388296,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1655044015,
      "ems": null
    },
    {
      "latitude": 50.707764,
      "longitude": 4.389706,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1655044021,
      "ems": null
    },
    {
      "latitude": 50.705441,
      "longitude": 4.391174,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1655044027,
      "ems": null
    },
    {
      "latitude": 50.704193,
      "longitude": 4.392082,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1655044030,
      "ems": null
    },
    {
      "latitude": 50.701584,
      "longitude": 4.393789,
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
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1655044036,
      "ems": null
    },
    {
      "latitude": 50.699066,
      "longitude": 4.395523,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1655044042,
      "ems": null
    },
    {
      "latitude": 50.696644,
      "longitude": 4.397125,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1655044048,
      "ems": null
    },
    {
      "latitude": 50.69577,
      "longitude": 4.397871,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1655044051,
      "ems": null
    },
    {
      "latitude": 50.694363,
      "longitude": 4.399033,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1655044054,
      "ems": null
    },
    {
      "latitude": 50.691662,
      "longitude": 4.401398,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1655044060,
      "ems": null
    },
    {
      "latitude": 50.69046,
      "longitude": 4.402474,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1655044063,
      "ems": null
    },
    {
      "latitude": 50.689133,
      "longitude": 4.403662,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1655044066,
      "ems": null
    },
    {
      "latitude": 50.688171,
      "longitude": 4.404479,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1655044069,
      "ems": null
    },
    {
      "latitude": 50.686821,
      "longitude": 4.40567,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1655044072,
      "ems": null
    },
    {
      "latitude": 50.685745,
      "longitude": 4.406631,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1655044075,
      "ems": null
    },
    {
      "latitude": 50.682083,
      "longitude": 4.409675,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1655044084,
      "ems": null
    },
    {
      "latitude": 50.679428,
      "longitude": 4.411456,
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
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1655044090,
      "ems": null
    },
    {
      "latitude": 50.678303,
      "longitude": 4.412003,
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
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1655044093,
      "ems": null
    },
    {
      "latitude": 50.676952,
      "longitude": 4.412613,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1655044096,
      "ems": null
    },
    {
      "latitude": 50.675674,
      "longitude": 4.413386,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1655044099,
      "ems": null
    },
    {
      "latitude": 50.674667,
      "longitude": 4.414128,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1655044102,
      "ems": null
    },
    {
      "latitude": 50.67239,
      "longitude": 4.415817,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1655044108,
      "ems": null
    },
    {
      "latitude": 50.670273,
      "longitude": 4.417444,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1655044114,
      "ems": null
    },
    {
      "latitude": 50.668304,
      "longitude": 4.419178,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1655044120,
      "ems": null
    },
    {
      "latitude": 50.667503,
      "longitude": 4.420364,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 131,
      "squawk": "4451",
      "timestamp": 1655044123,
      "ems": null
    },
    {
      "latitude": 50.666885,
      "longitude": 4.42178,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1655044126,
      "ems": null
    },
    {
      "latitude": 50.666199,
      "longitude": 4.423587,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1655044129,
      "ems": null
    },
    {
      "latitude": 50.66592,
      "longitude": 4.424298,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655044131,
      "ems": null
    },
    {
      "latitude": 50.665237,
      "longitude": 4.426117,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655044134,
      "ems": null
    },
    {
      "latitude": 50.665054,
      "longitude": 4.426695,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655044137,
      "ems": null
    },
    {
      "latitude": 50.664242,
      "longitude": 4.429272,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1655044140,
      "ems": null
    },
    {
      "latitude": 50.664001,
      "longitude": 4.430237,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 112,
      "squawk": "4451",
      "timestamp": 1655044142,
      "ems": null
    },
    {
      "latitude": 50.663177,
      "longitude": 4.433345,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655044146,
      "ems": null
    },
    {
      "latitude": 50.662613,
      "longitude": 4.434914,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655044149,
      "ems": null
    },
    {
      "latitude": 50.661915,
      "longitude": 4.437066,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655044152,
      "ems": null
    },
    {
      "latitude": 50.66066,
      "longitude": 4.440703,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655044158,
      "ems": null
    },
    {
      "latitude": 50.659214,
      "longitude": 4.444786,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655044164,
      "ems": null
    },
    {
      "latitude": 50.656906,
      "longitude": 4.451342,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655044174,
      "ems": null
    },
    {
      "latitude": 50.655071,
      "longitude": 4.456812,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655044182,
      "ems": null
    },
    {
      "latitude": 50.653255,
      "longitude": 4.46186,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655044189,
      "ems": null
    },
    {
      "latitude": 50.651489,
      "longitude": 4.466685,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655044195,
      "ems": null
    },
    {
      "latitude": 50.650509,
      "longitude": 4.46958,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1655044200,
      "ems": null
    },
    {
      "latitude": 50.64888,
      "longitude": 4.474925,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655044207,
      "ems": null
    },
    {
      "latitude": 50.647717,
      "longitude": 4.478785,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655044213,
      "ems": null
    },
    {
      "latitude": 50.646461,
      "longitude": 4.482793,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655044218,
      "ems": null
    },
    {
      "latitude": 50.645111,
      "longitude": 4.486727,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655044224,
      "ems": null
    },
    {
      "latitude": 50.643631,
      "longitude": 4.491023,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655044230,
      "ems": null
    },
    {
      "latitude": 50.641891,
      "longitude": 4.496082,
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
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655044238,
      "ems": null
    },
    {
      "latitude": 50.640594,
      "longitude": 4.49994,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655044244,
      "ems": null
    },
    {
      "latitude": 50.639282,
      "longitude": 4.503816,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655044250,
      "ems": null
    },
    {
      "latitude": 50.637989,
      "longitude": 4.507809,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655044255,
      "ems": null
    },
    {
      "latitude": 50.636776,
      "longitude": 4.511521,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655044261,
      "ems": null
    },
    {
      "latitude": 50.635208,
      "longitude": 4.515453,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1655044267,
      "ems": null
    },
    {
      "latitude": 50.633652,
      "longitude": 4.519356,
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
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1655044273,
      "ems": null
    },
    {
      "latitude": 50.632866,
      "longitude": 4.521097,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 126,
      "squawk": "4451",
      "timestamp": 1655044277,
      "ems": null
    },
    {
      "latitude": 50.63203,
      "longitude": 4.522878,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 128,
      "squawk": "4451",
      "timestamp": 1655044280,
      "ems": null
    },
    {
      "latitude": 50.631134,
      "longitude": 4.524632,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 127,
      "squawk": "4451",
      "timestamp": 1655044283,
      "ems": null
    },
    {
      "latitude": 50.630215,
      "longitude": 4.52659,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 125,
      "squawk": "4451",
      "timestamp": 1655044286,
      "ems": null
    },
    {
      "latitude": 50.628891,
      "longitude": 4.530198,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655044292,
      "ems": null
    },
    {
      "latitude": 50.628433,
      "longitude": 4.531933,
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
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655044294,
      "ems": null
    },
    {
      "latitude": 50.627888,
      "longitude": 4.533939,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 112,
      "squawk": "4451",
      "timestamp": 1655044297,
      "ems": null
    },
    {
      "latitude": 50.627335,
      "longitude": 4.535908,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 113,
      "squawk": "4451",
      "timestamp": 1655044300,
      "ems": null
    },
    {
      "latitude": 50.626816,
      "longitude": 4.537799,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655044303,
      "ems": null
    },
    {
      "latitude": 50.626163,
      "longitude": 4.539952,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655044307,
      "ems": null
    },
    {
      "latitude": 50.625641,
      "longitude": 4.541762,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "4451",
      "timestamp": 1655044310,
      "ems": null
    },
    {
      "latitude": 50.625141,
      "longitude": 4.543812,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1655044313,
      "ems": null
    },
    {
      "latitude": 50.624725,
      "longitude": 4.545449,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 112,
      "squawk": "4451",
      "timestamp": 1655044315,
      "ems": null
    },
    {
      "latitude": 50.623558,
      "longitude": 4.549156,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655044321,
      "ems": null
    },
    {
      "latitude": 50.622208,
      "longitude": 4.553183,
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
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1655044328,
      "ems": null
    },
    {
      "latitude": 50.620903,
      "longitude": 4.557173,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655044333,
      "ems": null
    },
    {
      "latitude": 50.619553,
      "longitude": 4.560988,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655044340,
      "ems": null
    },
    {
      "latitude": 50.618866,
      "longitude": 4.562868,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655044342,
      "ems": null
    },
    {
      "latitude": 50.617599,
      "longitude": 4.566972,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655044348,
      "ems": null
    },
    {
      "latitude": 50.616348,
      "longitude": 4.571035,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655044354,
      "ems": null
    },
    {
      "latitude": 50.615318,
      "longitude": 4.574247,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1655044360,
      "ems": null
    },
    {
      "latitude": 50.613407,
      "longitude": 4.580408,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655044369,
      "ems": null
    },
    {
      "latitude": 50.611824,
      "longitude": 4.58605,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655044378,
      "ems": null
    },
    {
      "latitude": 50.610123,
      "longitude": 4.591056,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655044386,
      "ems": null
    },
    {
      "latitude": 50.608379,
      "longitude": 4.595997,
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
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655044394,
      "ems": null
    },
    {
      "latitude": 50.60717,
      "longitude": 4.599189,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655044399,
      "ems": null
    },
    {
      "latitude": 50.606461,
      "longitude": 4.601103,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655044403,
      "ems": null
    },
    {
      "latitude": 50.604904,
      "longitude": 4.605295,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655044411,
      "ems": null
    },
    {
      "latitude": 50.602249,
      "longitude": 4.612523,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655044419,
      "ems": null
    },
    {
      "latitude": 50.600189,
      "longitude": 4.618266,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1655044427,
      "ems": null
    },
    {
      "latitude": 50.598587,
      "longitude": 4.62257,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655044436,
      "ems": null
    },
    {
      "latitude": 50.59586,
      "longitude": 4.629772,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655044445,
      "ems": null
    },
    {
      "latitude": 50.593948,
      "longitude": 4.635043,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1655044454,
      "ems": null
    },
    {
      "latitude": 50.591629,
      "longitude": 4.641507,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1655044463,
      "ems": null
    },
    {
      "latitude": 50.589947,
      "longitude": 4.646846,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 113,
      "squawk": "4451",
      "timestamp": 1655044471,
      "ems": null
    },
    {
      "latitude": 50.589523,
      "longitude": 4.648518,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 109,
      "squawk": "4451",
      "timestamp": 1655044474,
      "ems": null
    },
    {
      "latitude": 50.589249,
      "longitude": 4.649891,
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
      "heading": 109,
      "squawk": "4451",
      "timestamp": 1655044477,
      "ems": null
    },
    {
      "latitude": 50.588596,
      "longitude": 4.65271,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 109,
      "squawk": "4451",
      "timestamp": 1655044480,
      "ems": null
    },
    {
      "latitude": 50.588177,
      "longitude": 4.65464,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 110,
      "squawk": "4451",
      "timestamp": 1655044483,
      "ems": null
    },
    {
      "latitude": 50.587524,
      "longitude": 4.65709,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 110,
      "squawk": "4451",
      "timestamp": 1655044486,
      "ems": null
    },
    {
      "latitude": 50.586361,
      "longitude": 4.660875,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1655044492,
      "ems": null
    },
    {
      "latitude": 50.584919,
      "longitude": 4.665627,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1655044500,
      "ems": null
    },
    {
      "latitude": 50.584126,
      "longitude": 4.668299,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1655044504,
      "ems": null
    },
    {
      "latitude": 50.583427,
      "longitude": 4.6706,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1655044507,
      "ems": null
    },
    {
      "latitude": 50.581879,
      "longitude": 4.676779,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 107,
      "squawk": "4451",
      "timestamp": 1655044516,
      "ems": null
    },
    {
      "latitude": 50.581429,
      "longitude": 4.679062,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1655044519,
      "ems": null
    },
    {
      "latitude": 50.580917,
      "longitude": 4.681911,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1655044522,
      "ems": null
    },
    {
      "latitude": 50.580505,
      "longitude": 4.684007,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1655044525,
      "ems": null
    },
    {
      "latitude": 50.580078,
      "longitude": 4.686263,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1655044528,
      "ems": null
    },
    {
      "latitude": 50.579819,
      "longitude": 4.687837,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1655044530,
      "ems": null
    },
    {
      "latitude": 50.579472,
      "longitude": 4.6899,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1655044533,
      "ems": null
    },
    {
      "latitude": 50.578949,
      "longitude": 4.692752,
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
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1655044537,
      "ems": null
    },
    {
      "latitude": 50.578537,
      "longitude": 4.694921,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1655044540,
      "ems": null
    },
    {
      "latitude": 50.577984,
      "longitude": 4.698214,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1655044546,
      "ems": null
    },
    {
      "latitude": 50.577026,
      "longitude": 4.703666,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1655044552,
      "ems": null
    },
    {
      "latitude": 50.576477,
      "longitude": 4.707569,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655044557,
      "ems": null
    },
    {
      "latitude": 50.576027,
      "longitude": 4.710982,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655044562,
      "ems": null
    },
    {
      "latitude": 50.574875,
      "longitude": 4.717472,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 107,
      "squawk": "4451",
      "timestamp": 1655044571,
      "ems": null
    },
    {
      "latitude": 50.573887,
      "longitude": 4.72323,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655044579,
      "ems": null
    },
    {
      "latitude": 50.573189,
      "longitude": 4.729021,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 98,
      "squawk": "4451",
      "timestamp": 1655044588,
      "ems": null
    },
    {
      "latitude": 50.572956,
      "longitude": 4.732064,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1655044592,
      "ems": null
    },
    {
      "latitude": 50.572769,
      "longitude": 4.734457,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1655044596,
      "ems": null
    },
    {
      "latitude": 50.572582,
      "longitude": 4.737483,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1655044600,
      "ems": null
    },
    {
      "latitude": 50.572357,
      "longitude": 4.739806,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 99,
      "squawk": "4451",
      "timestamp": 1655044604,
      "ems": null
    },
    {
      "latitude": 50.57156,
      "longitude": 4.7455,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655044612,
      "ems": null
    },
    {
      "latitude": 50.57135,
      "longitude": 4.747106,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655044615,
      "ems": null
    },
    {
      "latitude": 50.570847,
      "longitude": 4.751081,
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
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1655044621,
      "ems": null
    },
    {
      "latitude": 50.570526,
      "longitude": 4.753466,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655044624,
      "ems": null
    },
    {
      "latitude": 50.570255,
      "longitude": 4.755595,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655044627,
      "ems": null
    },
    {
      "latitude": 50.569656,
      "longitude": 4.759754,
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
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655044633,
      "ems": null
    },
    {
      "latitude": 50.569016,
      "longitude": 4.764019,
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
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1655044639,
      "ems": null
    },
    {
      "latitude": 50.568531,
      "longitude": 4.766433,
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
      "heading": 107,
      "squawk": "4451",
      "timestamp": 1655044643,
      "ems": null
    },
    {
      "latitude": 50.56778,
      "longitude": 4.770163,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 107,
      "squawk": "4451",
      "timestamp": 1655044648,
      "ems": null
    },
    {
      "latitude": 50.567276,
      "longitude": 4.772521,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 107,
      "squawk": "4451",
      "timestamp": 1655044652,
      "ems": null
    },
    {
      "latitude": 50.566204,
      "longitude": 4.778385,
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
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1655044660,
      "ems": null
    },
    {
      "latitude": 50.565079,
      "longitude": 4.785052,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1655044669,
      "ems": null
    },
    {
      "latitude": 50.564163,
      "longitude": 4.790256,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1655044676,
      "ems": null
    },
    {
      "latitude": 50.563969,
      "longitude": 4.791524,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655044678,
      "ems": null
    },
    {
      "latitude": 50.563568,
      "longitude": 4.794303,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655044681,
      "ems": null
    },
    {
      "latitude": 50.562992,
      "longitude": 4.798056,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655044686,
      "ems": null
    },
    {
      "latitude": 50.562653,
      "longitude": 4.801025,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 98,
      "squawk": "4451",
      "timestamp": 1655044690,
      "ems": null
    },
    {
      "latitude": 50.562469,
      "longitude": 4.803699,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 93,
      "squawk": "4451",
      "timestamp": 1655044694,
      "ems": null
    },
    {
      "latitude": 50.562386,
      "longitude": 4.805776,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 92,
      "squawk": "4451",
      "timestamp": 1655044696,
      "ems": null
    },
    {
      "latitude": 50.56234,
      "longitude": 4.808374,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 92,
      "squawk": "4451",
      "timestamp": 1655044700,
      "ems": null
    },
    {
      "latitude": 50.562294,
      "longitude": 4.810453,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 92,
      "squawk": "4451",
      "timestamp": 1655044702,
      "ems": null
    },
    {
      "latitude": 50.562202,
      "longitude": 4.81268,
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
      "heading": 94,
      "squawk": "4451",
      "timestamp": 1655044705,
      "ems": null
    },
    {
      "latitude": 50.562103,
      "longitude": 4.814614,
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
      "heading": 94,
      "squawk": "4451",
      "timestamp": 1655044708,
      "ems": null
    },
    {
      "latitude": 50.561966,
      "longitude": 4.817071,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1655044711,
      "ems": null
    },
    {
      "latitude": 50.561455,
      "longitude": 4.821513,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655044717,
      "ems": null
    },
    {
      "latitude": 50.56073,
      "longitude": 4.826178,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1655044724,
      "ems": null
    },
    {
      "latitude": 50.560318,
      "longitude": 4.828058,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 112,
      "squawk": "4451",
      "timestamp": 1655044726,
      "ems": null
    },
    {
      "latitude": 50.559631,
      "longitude": 4.830081,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655044729,
      "ems": null
    },
    {
      "latitude": 50.558853,
      "longitude": 4.831961,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 124,
      "squawk": "4451",
      "timestamp": 1655044733,
      "ems": null
    },
    {
      "latitude": 50.558075,
      "longitude": 4.833695,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 125,
      "squawk": "4451",
      "timestamp": 1655044736,
      "ems": null
    },
    {
      "latitude": 50.557343,
      "longitude": 4.835213,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 126,
      "squawk": "4451",
      "timestamp": 1655044739,
      "ems": null
    },
    {
      "latitude": 50.556747,
      "longitude": 4.836514,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 124,
      "squawk": "4451",
      "timestamp": 1655044741,
      "ems": null
    },
    {
      "latitude": 50.556107,
      "longitude": 4.838032,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1655044744,
      "ems": null
    },
    {
      "latitude": 50.555511,
      "longitude": 4.839694,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1655044748,
      "ems": null
    },
    {
      "latitude": 50.554939,
      "longitude": 4.841259,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1655044751,
      "ems": null
    },
    {
      "latitude": 50.554138,
      "longitude": 4.844609,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 108,
      "squawk": "4451",
      "timestamp": 1655044757,
      "ems": null
    },
    {
      "latitude": 50.553818,
      "longitude": 4.846272,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1655044760,
      "ems": null
    },
    {
      "latitude": 50.553635,
      "longitude": 4.847792,
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
      "heading": 98,
      "squawk": "4451",
      "timestamp": 1655044762,
      "ems": null
    },
    {
      "latitude": 50.553543,
      "longitude": 4.849669,
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
      "heading": 92,
      "squawk": "4451",
      "timestamp": 1655044766,
      "ems": null
    },
    {
      "latitude": 50.553543,
      "longitude": 4.851503,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 89,
      "squawk": "4451",
      "timestamp": 1655044769,
      "ems": null
    },
    {
      "latitude": 50.553497,
      "longitude": 4.853427,
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
      "heading": 91,
      "squawk": "4451",
      "timestamp": 1655044772,
      "ems": null
    },
    {
      "latitude": 50.553452,
      "longitude": 4.855162,
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
      "heading": 93,
      "squawk": "4451",
      "timestamp": 1655044774,
      "ems": null
    },
    {
      "latitude": 50.553406,
      "longitude": 4.85733,
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
      "heading": 91,
      "squawk": "4451",
      "timestamp": 1655044778,
      "ems": null
    },
    {
      "latitude": 50.553356,
      "longitude": 4.859223,
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
      "heading": 95,
      "squawk": "4451",
      "timestamp": 1655044781,
      "ems": null
    },
    {
      "latitude": 50.553123,
      "longitude": 4.861525,
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
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655044784,
      "ems": null
    },
    {
      "latitude": 50.552307,
      "longitude": 4.866004,
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
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1655044790,
      "ems": null
    },
    {
      "latitude": 50.551941,
      "longitude": 4.868172,
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
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655044793,
      "ems": null
    },
    {
      "latitude": 50.551682,
      "longitude": 4.870358,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1655044796,
      "ems": null
    },
    {
      "latitude": 50.551392,
      "longitude": 4.872653,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1655044799,
      "ems": null
    },
    {
      "latitude": 50.551163,
      "longitude": 4.874677,
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
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1655044801,
      "ems": null
    },
    {
      "latitude": 50.550842,
      "longitude": 4.877207,
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
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655044805,
      "ems": null
    },
    {
      "latitude": 50.550476,
      "longitude": 4.879736,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655044808,
      "ems": null
    },
    {
      "latitude": 50.550144,
      "longitude": 4.881938,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655044811,
      "ems": null
    },
    {
      "latitude": 50.549538,
      "longitude": 4.886615,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655044817,
      "ems": null
    },
    {
      "latitude": 50.548935,
      "longitude": 4.891217,
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
      "heading": 99,
      "squawk": "4451",
      "timestamp": 1655044823,
      "ems": null
    },
    {
      "latitude": 50.548462,
      "longitude": 4.895999,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 99,
      "squawk": "4451",
      "timestamp": 1655044829,
      "ems": null
    },
    {
      "latitude": 50.547913,
      "longitude": 4.900336,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655044835,
      "ems": null
    },
    {
      "latitude": 50.547318,
      "longitude": 4.904817,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655044840,
      "ems": null
    },
    {
      "latitude": 50.546513,
      "longitude": 4.909627,
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
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655044847,
      "ems": null
    },
    {
      "latitude": 50.545906,
      "longitude": 4.914378,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1655044853,
      "ems": null
    },
    {
      "latitude": 50.545303,
      "longitude": 4.918831,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1655044859,
      "ems": null
    },
    {
      "latitude": 50.544571,
      "longitude": 4.923248,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1655044865,
      "ems": null
    },
    {
      "latitude": 50.543858,
      "longitude": 4.927888,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655044871,
      "ems": null
    },
    {
      "latitude": 50.543198,
      "longitude": 4.931488,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1655044877,
      "ems": null
    },
    {
      "latitude": 50.542324,
      "longitude": 4.936276,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1655044883,
      "ems": null
    },
    {
      "latitude": 50.541641,
      "longitude": 4.939511,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 108,
      "squawk": "4451",
      "timestamp": 1655044886,
      "ems": null
    },
    {
      "latitude": 50.540833,
      "longitude": 4.943848,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655044892,
      "ems": null
    },
    {
      "latitude": 50.539623,
      "longitude": 4.953646,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655044904,
      "ems": null
    },
    {
      "latitude": 50.539066,
      "longitude": 4.958026,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655044910,
      "ems": null
    },
    {
      "latitude": 50.538738,
      "longitude": 4.960773,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655044913,
      "ems": null
    },
    {
      "latitude": 50.538414,
      "longitude": 4.963074,
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
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655044916,
      "ems": null
    },
    {
      "latitude": 50.53775,
      "longitude": 4.967266,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655044922,
      "ems": null
    },
    {
      "latitude": 50.536968,
      "longitude": 4.972501,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655044928,
      "ems": null
    },
    {
      "latitude": 50.536366,
      "longitude": 4.977178,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655044934,
      "ems": null
    },
    {
      "latitude": 50.5359,
      "longitude": 4.981186,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1655044939,
      "ems": null
    },
    {
      "latitude": 50.535248,
      "longitude": 4.986531,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655044946,
      "ems": null
    },
    {
      "latitude": 50.534592,
      "longitude": 4.991479,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655044952,
      "ems": null
    },
    {
      "latitude": 50.533989,
      "longitude": 4.995662,
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
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655044958,
      "ems": null
    },
    {
      "latitude": 50.533478,
      "longitude": 4.999299,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1655044963,
      "ems": null
    },
    {
      "latitude": 50.533154,
      "longitude": 5.003456,
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
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1655044969,
      "ems": null
    },
    {
      "latitude": 50.532944,
      "longitude": 5.006369,
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
      "heading": 95,
      "squawk": "4451",
      "timestamp": 1655044973,
      "ems": null
    },
    {
      "latitude": 50.532532,
      "longitude": 5.010633,
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
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655044979,
      "ems": null
    },
    {
      "latitude": 50.531895,
      "longitude": 5.014888,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655044985,
      "ems": null
    },
    {
      "latitude": 50.531292,
      "longitude": 5.018599,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1655044990,
      "ems": null
    },
    {
      "latitude": 50.530884,
      "longitude": 5.021113,
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
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1655044994,
      "ems": null
    },
    {
      "latitude": 50.530453,
      "longitude": 5.023499,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1655044997,
      "ems": null
    },
    {
      "latitude": 50.530033,
      "longitude": 5.025725,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1655045000,
      "ems": null
    },
    {
      "latitude": 50.529613,
      "longitude": 5.027953,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1655045003,
      "ems": null
    },
    {
      "latitude": 50.528915,
      "longitude": 5.032461,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655045009,
      "ems": null
    },
    {
      "latitude": 50.52832,
      "longitude": 5.036581,
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
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655045014,
      "ems": null
    },
    {
      "latitude": 50.527706,
      "longitude": 5.041389,
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
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655045021,
      "ems": null
    },
    {
      "latitude": 50.527405,
      "longitude": 5.043664,
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
      "heading": 99,
      "squawk": "4451",
      "timestamp": 1655045024,
      "ems": null
    },
    {
      "latitude": 50.527241,
      "longitude": 5.045546,
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
      "heading": 99,
      "squawk": "4451",
      "timestamp": 1655045027,
      "ems": null
    },
    {
      "latitude": 50.526993,
      "longitude": 5.047856,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 99,
      "squawk": "4451",
      "timestamp": 1655045030,
      "ems": null
    },
    {
      "latitude": 50.526352,
      "longitude": 5.052627,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655045036,
      "ems": null
    },
    {
      "latitude": 50.525253,
      "longitude": 5.059349,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1655045045,
      "ems": null
    },
    {
      "latitude": 50.524567,
      "longitude": 5.063468,
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
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1655045051,
      "ems": null
    },
    {
      "latitude": 50.524166,
      "longitude": 5.065811,
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
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1655045054,
      "ems": null
    },
    {
      "latitude": 50.523834,
      "longitude": 5.067805,
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
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1655045057,
      "ems": null
    },
    {
      "latitude": 50.523144,
      "longitude": 5.072195,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655045063,
      "ems": null
    },
    {
      "latitude": 50.522644,
      "longitude": 5.076262,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655045069,
      "ems": null
    },
    {
      "latitude": 50.52198,
      "longitude": 5.081177,
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
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655045075,
      "ems": null
    },
    {
      "latitude": 50.521408,
      "longitude": 5.085514,
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
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655045081,
      "ems": null
    },
    {
      "latitude": 50.520863,
      "longitude": 5.089565,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655045087,
      "ems": null
    },
    {
      "latitude": 50.520035,
      "longitude": 5.094621,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1655045093,
      "ems": null
    },
    {
      "latitude": 50.519302,
      "longitude": 5.098957,
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
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1655045099,
      "ems": null
    },
    {
      "latitude": 50.518208,
      "longitude": 5.105896,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655045108,
      "ems": null
    },
    {
      "latitude": 50.517471,
      "longitude": 5.110377,
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
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655045114,
      "ems": null
    },
    {
      "latitude": 50.516811,
      "longitude": 5.114804,
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
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655045120,
      "ems": null
    },
    {
      "latitude": 50.516113,
      "longitude": 5.119926,
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
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655045126,
      "ems": null
    },
    {
      "latitude": 50.515503,
      "longitude": 5.124544,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655045132,
      "ems": null
    },
    {
      "latitude": 50.514812,
      "longitude": 5.129427,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655045138,
      "ems": null
    },
    {
      "latitude": 50.514084,
      "longitude": 5.133651,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1655045144,
      "ems": null
    },
    {
      "latitude": 50.513786,
      "longitude": 5.134995,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 107,
      "squawk": "4451",
      "timestamp": 1655045145,
      "ems": null
    },
    {
      "latitude": 50.512894,
      "longitude": 5.139288,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1655045153,
      "ems": null
    },
    {
      "latitude": 50.511978,
      "longitude": 5.145504,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1655045159,
      "ems": null
    },
    {
      "latitude": 50.511337,
      "longitude": 5.150058,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655045165,
      "ems": null
    },
    {
      "latitude": 50.510715,
      "longitude": 5.154889,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1655045170,
      "ems": null
    },
    {
      "latitude": 50.510529,
      "longitude": 5.1563,
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
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655045173,
      "ems": null
    },
    {
      "latitude": 50.509178,
      "longitude": 5.164391,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1655045183,
      "ems": null
    },
    {
      "latitude": 50.508408,
      "longitude": 5.168995,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655045189,
      "ems": null
    },
    {
      "latitude": 50.508015,
      "longitude": 5.171591,
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
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655045193,
      "ems": null
    },
    {
      "latitude": 50.50713,
      "longitude": 5.177901,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655045202,
      "ems": null
    },
    {
      "latitude": 50.506245,
      "longitude": 5.184136,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655045210,
      "ems": null
    },
    {
      "latitude": 50.505798,
      "longitude": 5.187137,
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
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655045214,
      "ems": null
    },
    {
      "latitude": 50.504974,
      "longitude": 5.193498,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655045222,
      "ems": null
    },
    {
      "latitude": 50.504383,
      "longitude": 5.198241,
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
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655045229,
      "ems": null
    },
    {
      "latitude": 50.503174,
      "longitude": 5.207891,
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
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1655045241,
      "ems": null
    },
    {
      "latitude": 50.502228,
      "longitude": 5.21547,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655045252,
      "ems": null
    },
    {
      "latitude": 50.500938,
      "longitude": 5.223108,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 107,
      "squawk": "4451",
      "timestamp": 1655045261,
      "ems": null
    },
    {
      "latitude": 50.500488,
      "longitude": 5.225372,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1655045265,
      "ems": null
    },
    {
      "latitude": 50.499573,
      "longitude": 5.231082,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1655045272,
      "ems": null
    },
    {
      "latitude": 50.498474,
      "longitude": 5.239178,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1655045283,
      "ems": null
    },
    {
      "latitude": 50.497284,
      "longitude": 5.247056,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1655045293,
      "ems": null
    },
    {
      "latitude": 50.496552,
      "longitude": 5.251031,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 107,
      "squawk": "4451",
      "timestamp": 1655045298,
      "ems": null
    },
    {
      "latitude": 50.495678,
      "longitude": 5.254879,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1655045303,
      "ems": null
    },
    {
      "latitude": 50.494934,
      "longitude": 5.257849,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1655045308,
      "ems": null
    },
    {
      "latitude": 50.493896,
      "longitude": 5.262234,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 108,
      "squawk": "4451",
      "timestamp": 1655045313,
      "ems": null
    },
    {
      "latitude": 50.49321,
      "longitude": 5.266459,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1655045319,
      "ems": null
    },
    {
      "latitude": 50.492558,
      "longitude": 5.270394,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1655045324,
      "ems": null
    },
    {
      "latitude": 50.491859,
      "longitude": 5.274403,
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
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1655045330,
      "ems": null
    },
    {
      "latitude": 50.491394,
      "longitude": 5.277446,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1655045335,
      "ems": null
    },
    {
      "latitude": 50.490974,
      "longitude": 5.282197,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1655045340,
      "ems": null
    },
    {
      "latitude": 50.490742,
      "longitude": 5.285983,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 95,
      "squawk": "4451",
      "timestamp": 1655045345,
      "ems": null
    },
    {
      "latitude": 50.490463,
      "longitude": 5.28962,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 97,
      "squawk": "4451",
      "timestamp": 1655045350,
      "ems": null
    },
    {
      "latitude": 50.490234,
      "longitude": 5.293242,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 93,
      "squawk": "4451",
      "timestamp": 1655045355,
      "ems": null
    },
    {
      "latitude": 50.490326,
      "longitude": 5.297934,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 91,
      "squawk": "4451",
      "timestamp": 1655045360,
      "ems": null
    },
    {
      "latitude": 50.490509,
      "longitude": 5.301482,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 84,
      "squawk": "4451",
      "timestamp": 1655045365,
      "ems": null
    },
    {
      "latitude": 50.490784,
      "longitude": 5.304879,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 80,
      "squawk": "4451",
      "timestamp": 1655045369,
      "ems": null
    },
    {
      "latitude": 50.491348,
      "longitude": 5.308623,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 77,
      "squawk": "4451",
      "timestamp": 1655045375,
      "ems": null
    },
    {
      "latitude": 50.492111,
      "longitude": 5.314058,
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
      "heading": 78,
      "squawk": "4451",
      "timestamp": 1655045381,
      "ems": null
    },
    {
      "latitude": 50.492512,
      "longitude": 5.317828,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "4451",
      "timestamp": 1655045387,
      "ems": null
    },
    {
      "latitude": 50.493118,
      "longitude": 5.325845,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 83,
      "squawk": "4451",
      "timestamp": 1655045397,
      "ems": null
    },
    {
      "latitude": 50.493439,
      "longitude": 5.329887,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 82,
      "squawk": "4451",
      "timestamp": 1655045402,
      "ems": null
    },
    {
      "latitude": 50.493713,
      "longitude": 5.33285,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 82,
      "squawk": "4451",
      "timestamp": 1655045407,
      "ems": null
    },
    {
      "latitude": 50.494701,
      "longitude": 5.341582,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 78,
      "squawk": "4451",
      "timestamp": 1655045418,
      "ems": null
    },
    {
      "latitude": 50.495636,
      "longitude": 5.349257,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 77,
      "squawk": "4451",
      "timestamp": 1655045428,
      "ems": null
    },
    {
      "latitude": 50.496098,
      "longitude": 5.353385,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 83,
      "squawk": "4451",
      "timestamp": 1655045433,
      "ems": null
    },
    {
      "latitude": 50.495911,
      "longitude": 5.357097,
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
      "heading": 97,
      "squawk": "4451",
      "timestamp": 1655045438,
      "ems": null
    },
    {
      "latitude": 50.495586,
      "longitude": 5.36118,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 97,
      "squawk": "4451",
      "timestamp": 1655045443,
      "ems": null
    },
    {
      "latitude": 50.495304,
      "longitude": 5.36504,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 95,
      "squawk": "4451",
      "timestamp": 1655045449,
      "ems": null
    },
    {
      "latitude": 50.495132,
      "longitude": 5.368701,
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
      "heading": 92,
      "squawk": "4451",
      "timestamp": 1655045454,
      "ems": null
    },
    {
      "latitude": 50.495178,
      "longitude": 5.371664,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 84,
      "squawk": "4451",
      "timestamp": 1655045459,
      "ems": null
    },
    {
      "latitude": 50.495819,
      "longitude": 5.376145,
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
      "heading": 74,
      "squawk": "4451",
      "timestamp": 1655045464,
      "ems": null
    },
    {
      "latitude": 50.49646,
      "longitude": 5.379687,
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
      "heading": 74,
      "squawk": "4451",
      "timestamp": 1655045470,
      "ems": null
    },
    {
      "latitude": 50.497028,
      "longitude": 5.38293,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 73,
      "squawk": "4451",
      "timestamp": 1655045475,
      "ems": null
    },
    {
      "latitude": 50.497726,
      "longitude": 5.386641,
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
      "heading": 73,
      "squawk": "4451",
      "timestamp": 1655045480,
      "ems": null
    },
    {
      "latitude": 50.498425,
      "longitude": 5.390204,
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
      "heading": 72,
      "squawk": "4451",
      "timestamp": 1655045485,
      "ems": null
    },
    {
      "latitude": 50.500149,
      "longitude": 5.397182,
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
      "heading": 62,
      "squawk": "4451",
      "timestamp": 1655045495,
      "ems": null
    },
    {
      "latitude": 50.501358,
      "longitude": 5.400523,
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
      "heading": 60,
      "squawk": "4451",
      "timestamp": 1655045500,
      "ems": null
    },
    {
      "latitude": 50.502457,
      "longitude": 5.403611,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 60,
      "squawk": "4451",
      "timestamp": 1655045506,
      "ems": null
    },
    {
      "latitude": 50.503731,
      "longitude": 5.407129,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 60,
      "squawk": "4451",
      "timestamp": 1655045511,
      "ems": null
    },
    {
      "latitude": 50.504894,
      "longitude": 5.41047,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 62,
      "squawk": "4451",
      "timestamp": 1655045516,
      "ems": null
    },
    {
      "latitude": 50.505405,
      "longitude": 5.412177,
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
      "heading": 64,
      "squawk": "4451",
      "timestamp": 1655045520,
      "ems": null
    },
    {
      "latitude": 50.506897,
      "longitude": 5.417521,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 66,
      "squawk": "4451",
      "timestamp": 1655045526,
      "ems": null
    },
    {
      "latitude": 50.507828,
      "longitude": 5.421456,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 71,
      "squawk": "4451",
      "timestamp": 1655045532,
      "ems": null
    },
    {
      "latitude": 50.508362,
      "longitude": 5.425005,
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
      "heading": 80,
      "squawk": "4451",
      "timestamp": 1655045537,
      "ems": null
    },
    {
      "latitude": 50.508526,
      "longitude": 5.427394,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 75,
      "squawk": "4451",
      "timestamp": 1655045541,
      "ems": null
    },
    {
      "latitude": 50.508682,
      "longitude": 5.430788,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 75,
      "squawk": "4451",
      "timestamp": 1655045545,
      "ems": null
    },
    {
      "latitude": 50.509094,
      "longitude": 5.435486,
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
      "heading": 80,
      "squawk": "4451",
      "timestamp": 1655045553,
      "ems": null
    },
    {
      "latitude": 50.509411,
      "longitude": 5.4389,
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
      "heading": 82,
      "squawk": "4451",
      "timestamp": 1655045558,
      "ems": null
    },
    {
      "latitude": 50.51001,
      "longitude": 5.445099,
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
      "heading": 80,
      "squawk": "4451",
      "timestamp": 1655045568,
      "ems": null
    },
    {
      "latitude": 50.510899,
      "longitude": 5.451,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 72,
      "squawk": "4451",
      "timestamp": 1655045579,
      "ems": null
    },
    {
      "latitude": 50.511459,
      "longitude": 5.453821,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 72,
      "squawk": "4451",
      "timestamp": 1655045584,
      "ems": null
    },
    {
      "latitude": 50.512112,
      "longitude": 5.456716,
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
      },
};