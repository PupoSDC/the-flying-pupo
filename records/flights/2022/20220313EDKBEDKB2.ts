import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220313EDKBEDKB2",
    callsign: "DEFCZ",
    name: "Tour Flight with Pierrick",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 2, 13, 15, 30).getTime(),
    arrival: new Date(2022, 2, 13, 16, 25).getTime(),
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
      "latitude": 50.768475,
      "longitude": 7.165375,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 107,
      "squawk": "0",
      "timestamp": 1647185192,
      "ems": null
    },
    {
      "latitude": 50.767685,
      "longitude": 7.169247,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 109,
      "squawk": "0",
      "timestamp": 1647185201,
      "ems": null
    },
    {
      "latitude": 50.766891,
      "longitude": 7.172928,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 106,
      "squawk": "0",
      "timestamp": 1647185210,
      "ems": null
    },
    {
      "latitude": 50.766174,
      "longitude": 7.176299,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 110,
      "squawk": "0",
      "timestamp": 1647185217,
      "ems": null
    },
    {
      "latitude": 50.765915,
      "longitude": 7.177277,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 112,
      "squawk": "0",
      "timestamp": 1647185220,
      "ems": null
    },
    {
      "latitude": 50.765305,
      "longitude": 7.179936,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 108,
      "squawk": "0",
      "timestamp": 1647185226,
      "ems": null
    },
    {
      "latitude": 50.764526,
      "longitude": 7.183277,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 112,
      "squawk": "0",
      "timestamp": 1647185235,
      "ems": null
    },
    {
      "latitude": 50.764252,
      "longitude": 7.184465,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1647185238,
      "ems": null
    },
    {
      "latitude": 50.763611,
      "longitude": 7.186766,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1647185244,
      "ems": null
    },
    {
      "latitude": 50.763016,
      "longitude": 7.188993,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1647185250,
      "ems": null
    },
    {
      "latitude": 50.762703,
      "longitude": 7.190018,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1647185253,
      "ems": null
    },
    {
      "latitude": 50.762283,
      "longitude": 7.191294,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1647185256,
      "ems": null
    },
    {
      "latitude": 50.761818,
      "longitude": 7.192535,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1647185259,
      "ems": null
    },
    {
      "latitude": 50.76123,
      "longitude": 7.193744,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1647185262,
      "ems": null
    },
    {
      "latitude": 50.760544,
      "longitude": 7.194783,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1647185265,
      "ems": null
    },
    {
      "latitude": 50.759811,
      "longitude": 7.195674,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1647185268,
      "ems": null
    },
    {
      "latitude": 50.759026,
      "longitude": 7.19635,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1647185271,
      "ems": null
    },
    {
      "latitude": 50.757523,
      "longitude": 7.197084,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1647185277,
      "ems": null
    },
    {
      "latitude": 50.756104,
      "longitude": 7.197158,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1647185281,
      "ems": null
    },
    {
      "latitude": 50.754879,
      "longitude": 7.196655,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1647185285,
      "ems": null
    },
    {
      "latitude": 50.753578,
      "longitude": 7.195587,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1647185289,
      "ems": null
    },
    {
      "latitude": 50.753036,
      "longitude": 7.195006,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1647185291,
      "ems": null
    },
    {
      "latitude": 50.752029,
      "longitude": 7.193298,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1647185295,
      "ems": null
    },
    {
      "latitude": 50.751801,
      "longitude": 7.192779,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1647185297,
      "ems": null
    },
    {
      "latitude": 50.751064,
      "longitude": 7.191086,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1647185299,
      "ems": null
    },
    {
      "latitude": 50.750225,
      "longitude": 7.189255,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1647185303,
      "ems": null
    },
    {
      "latitude": 50.749619,
      "longitude": 7.187881,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1647185306,
      "ems": null
    },
    {
      "latitude": 50.748825,
      "longitude": 7.186024,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1647185309,
      "ems": null
    },
    {
      "latitude": 50.748085,
      "longitude": 7.184372,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1647185312,
      "ems": null
    },
    {
      "latitude": 50.747478,
      "longitude": 7.182922,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1647185315,
      "ems": null
    },
    {
      "latitude": 50.746811,
      "longitude": 7.181421,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1647185318,
      "ems": null
    },
    {
      "latitude": 50.746037,
      "longitude": 7.179489,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1647185321,
      "ems": null
    },
    {
      "latitude": 50.745476,
      "longitude": 7.178268,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1647185323,
      "ems": null
    },
    {
      "latitude": 50.744064,
      "longitude": 7.175111,
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1647185330,
      "ems": null
    },
    {
      "latitude": 50.742599,
      "longitude": 7.172142,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1647185336,
      "ems": null
    },
    {
      "latitude": 50.741196,
      "longitude": 7.169266,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1647185342,
      "ems": null
    },
    {
      "latitude": 50.73975,
      "longitude": 7.166214,
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1647185348,
      "ems": null
    },
    {
      "latitude": 50.738342,
      "longitude": 7.163234,
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1647185354,
      "ems": null
    },
    {
      "latitude": 50.737003,
      "longitude": 7.16011,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1647185360,
      "ems": null
    },
    {
      "latitude": 50.73642,
      "longitude": 7.158335,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1647185363,
      "ems": null
    },
    {
      "latitude": 50.735886,
      "longitude": 7.156754,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1647185366,
      "ems": null
    },
    {
      "latitude": 50.735329,
      "longitude": 7.154846,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1647185368,
      "ems": null
    },
    {
      "latitude": 50.734772,
      "longitude": 7.15299,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1647185372,
      "ems": null
    },
    {
      "latitude": 50.734257,
      "longitude": 7.151108,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1647185375,
      "ems": null
    },
    {
      "latitude": 50.733856,
      "longitude": 7.149279,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1647185378,
      "ems": null
    },
    {
      "latitude": 50.733421,
      "longitude": 7.147446,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1647185381,
      "ems": null
    },
    {
      "latitude": 50.732986,
      "longitude": 7.145567,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1647185384,
      "ems": null
    },
    {
      "latitude": 50.732574,
      "longitude": 7.143489,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1647185387,
      "ems": null
    },
    {
      "latitude": 50.732208,
      "longitude": 7.141571,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1647185390,
      "ems": null
    },
    {
      "latitude": 50.731796,
      "longitude": 7.139628,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1647185393,
      "ems": null
    },
    {
      "latitude": 50.731384,
      "longitude": 7.137847,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1647185396,
      "ems": null
    },
    {
      "latitude": 50.730972,
      "longitude": 7.136065,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1647185399,
      "ems": null
    },
    {
      "latitude": 50.729965,
      "longitude": 7.132503,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1647185405,
      "ems": null
    },
    {
      "latitude": 50.729004,
      "longitude": 7.128865,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1647185411,
      "ems": null
    },
    {
      "latitude": 50.728531,
      "longitude": 7.127075,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1647185414,
      "ems": null
    },
    {
      "latitude": 50.72802,
      "longitude": 7.12532,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1647185417,
      "ems": null
    },
    {
      "latitude": 50.72731,
      "longitude": 7.121516,
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1647185423,
      "ems": null
    },
    {
      "latitude": 50.727036,
      "longitude": 7.11966,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1647185426,
      "ems": null
    },
    {
      "latitude": 50.726856,
      "longitude": 7.117538,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1647185429,
      "ems": null
    },
    {
      "latitude": 50.726807,
      "longitude": 7.115429,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1647185432,
      "ems": null
    },
    {
      "latitude": 50.726948,
      "longitude": 7.113113,
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1647185435,
      "ems": null
    },
    {
      "latitude": 50.72718,
      "longitude": 7.110901,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1647185438,
      "ems": null
    },
    {
      "latitude": 50.727554,
      "longitude": 7.108536,
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1647185441,
      "ems": null
    },
    {
      "latitude": 50.727814,
      "longitude": 7.107189,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1647185444,
      "ems": null
    },
    {
      "latitude": 50.728626,
      "longitude": 7.104416,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1647185447,
      "ems": null
    },
    {
      "latitude": 50.729462,
      "longitude": 7.102884,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1647185450,
      "ems": null
    },
    {
      "latitude": 50.730907,
      "longitude": 7.101135,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1647185453,
      "ems": null
    },
    {
      "latitude": 50.732117,
      "longitude": 7.100286,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1647185456,
      "ems": null
    },
    {
      "latitude": 50.733654,
      "longitude": 7.099686,
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1647185459,
      "ems": null
    },
    {
      "latitude": 50.734863,
      "longitude": 7.099457,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1647185462,
      "ems": null
    },
    {
      "latitude": 50.736511,
      "longitude": 7.099024,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1647185465,
      "ems": null
    },
    {
      "latitude": 50.737839,
      "longitude": 7.098653,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1647185468,
      "ems": null
    },
    {
      "latitude": 50.739258,
      "longitude": 7.098207,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1647185471,
      "ems": null
    },
    {
      "latitude": 50.740589,
      "longitude": 7.097702,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1647185474,
      "ems": null
    },
    {
      "latitude": 50.742004,
      "longitude": 7.097094,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1647185477,
      "ems": null
    },
    {
      "latitude": 50.743286,
      "longitude": 7.0965,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1647185480,
      "ems": null
    },
    {
      "latitude": 50.744568,
      "longitude": 7.095906,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1647185483,
      "ems": null
    },
    {
      "latitude": 50.745941,
      "longitude": 7.095337,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1647185486,
      "ems": null
    },
    {
      "latitude": 50.748596,
      "longitude": 7.094421,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1647185492,
      "ems": null
    },
    {
      "latitude": 50.749851,
      "longitude": 7.093887,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1647185495,
      "ems": null
    },
    {
      "latitude": 50.750977,
      "longitude": 7.093382,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1647185498,
      "ems": null
    },
    {
      "latitude": 50.75235,
      "longitude": 7.092788,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1647185501,
      "ems": null
    },
    {
      "latitude": 50.75367,
      "longitude": 7.092056,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1647185504,
      "ems": null
    },
    {
      "latitude": 50.756229,
      "longitude": 7.090683,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1647185510,
      "ems": null
    },
    {
      "latitude": 50.758839,
      "longitude": 7.089233,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1647185516,
      "ems": null
    },
    {
      "latitude": 50.760178,
      "longitude": 7.088408,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1647185519,
      "ems": null
    },
    {
      "latitude": 50.761368,
      "longitude": 7.087667,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1647185522,
      "ems": null
    },
    {
      "latitude": 50.762653,
      "longitude": 7.086868,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1647185525,
      "ems": null
    },
    {
      "latitude": 50.763794,
      "longitude": 7.086182,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1647185528,
      "ems": null
    },
    {
      "latitude": 50.765396,
      "longitude": 7.085143,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1647185531,
      "ems": null
    },
    {
      "latitude": 50.766659,
      "longitude": 7.084274,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1647185534,
      "ems": null
    },
    {
      "latitude": 50.767963,
      "longitude": 7.083206,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1647185537,
      "ems": null
    },
    {
      "latitude": 50.769196,
      "longitude": 7.082099,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1647185540,
      "ems": null
    },
    {
      "latitude": 50.770386,
      "longitude": 7.080986,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1647185543,
      "ems": null
    },
    {
      "latitude": 50.771545,
      "longitude": 7.079773,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1647185546,
      "ems": null
    },
    {
      "latitude": 50.772663,
      "longitude": 7.078476,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1647185549,
      "ems": null
    },
    {
      "latitude": 50.773968,
      "longitude": 7.077026,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1647185552,
      "ems": null
    },
    {
      "latitude": 50.774899,
      "longitude": 7.075958,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1647185555,
      "ems": null
    },
    {
      "latitude": 50.776203,
      "longitude": 7.074509,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1647185558,
      "ems": null
    },
    {
      "latitude": 50.777367,
      "longitude": 7.073288,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1647185561,
      "ems": null
    },
    {
      "latitude": 50.778442,
      "longitude": 7.072152,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1647185564,
      "ems": null
    },
    {
      "latitude": 50.779449,
      "longitude": 7.071038,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1647185567,
      "ems": null
    },
    {
      "latitude": 50.78183,
      "longitude": 7.06844,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1647185573,
      "ems": null
    },
    {
      "latitude": 50.784115,
      "longitude": 7.066116,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1647185579,
      "ems": null
    },
    {
      "latitude": 50.786816,
      "longitude": 7.063599,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1647185585,
      "ems": null
    },
    {
      "latitude": 50.788101,
      "longitude": 7.062428,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1647185588,
      "ems": null
    },
    {
      "latitude": 50.78933,
      "longitude": 7.06131,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1647185591,
      "ems": null
    },
    {
      "latitude": 50.790634,
      "longitude": 7.060318,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1647185594,
      "ems": null
    },
    {
      "latitude": 50.791843,
      "longitude": 7.059402,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1647185597,
      "ems": null
    },
    {
      "latitude": 50.793045,
      "longitude": 7.058419,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1647185600,
      "ems": null
    },
    {
      "latitude": 50.794464,
      "longitude": 7.05738,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1647185603,
      "ems": null
    },
    {
      "latitude": 50.795708,
      "longitude": 7.056427,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1647185606,
      "ems": null
    },
    {
      "latitude": 50.797058,
      "longitude": 7.055359,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1647185609,
      "ems": null
    },
    {
      "latitude": 50.798218,
      "longitude": 7.054484,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1647185612,
      "ems": null
    },
    {
      "latitude": 50.7995,
      "longitude": 7.05352,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1647185615,
      "ems": null
    },
    {
      "latitude": 50.800873,
      "longitude": 7.052612,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1647185618,
      "ems": null
    },
    {
      "latitude": 50.803436,
      "longitude": 7.050781,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1647185624,
      "ems": null
    },
    {
      "latitude": 50.806274,
      "longitude": 7.048569,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1647185630,
      "ems": null
    },
    {
      "latitude": 50.808792,
      "longitude": 7.046542,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1647185636,
      "ems": null
    },
    {
      "latitude": 50.811401,
      "longitude": 7.044463,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1647185642,
      "ems": null
    },
    {
      "latitude": 50.81424,
      "longitude": 7.042385,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1647185648,
      "ems": null
    },
    {
      "latitude": 50.816895,
      "longitude": 7.040678,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1647185654,
      "ems": null
    },
    {
      "latitude": 50.8181,
      "longitude": 7.039948,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1647185657,
      "ems": null
    },
    {
      "latitude": 50.819542,
      "longitude": 7.039108,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1647185660,
      "ems": null
    },
    {
      "latitude": 50.820877,
      "longitude": 7.038302,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1647185663,
      "ems": null
    },
    {
      "latitude": 50.822113,
      "longitude": 7.037634,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1647185666,
      "ems": null
    },
    {
      "latitude": 50.823486,
      "longitude": 7.036818,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1647185669,
      "ems": null
    },
    {
      "latitude": 50.825127,
      "longitude": 7.035904,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1647185672,
      "ems": null
    },
    {
      "latitude": 50.82629,
      "longitude": 7.035217,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1647185675,
      "ems": null
    },
    {
      "latitude": 50.829037,
      "longitude": 7.033463,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1647185681,
      "ems": null
    },
    {
      "latitude": 50.833191,
      "longitude": 7.030805,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1647185690,
      "ems": null
    },
    {
      "latitude": 50.837326,
      "longitude": 7.028503,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1647185699,
      "ems": null
    },
    {
      "latitude": 50.840195,
      "longitude": 7.02687,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1647185705,
      "ems": null
    },
    {
      "latitude": 50.843052,
      "longitude": 7.025223,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1647185711,
      "ems": null
    },
    {
      "latitude": 50.845936,
      "longitude": 7.023468,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1647185717,
      "ems": null
    },
    {
      "latitude": 50.850311,
      "longitude": 7.020721,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1647185726,
      "ems": null
    },
    {
      "latitude": 50.853199,
      "longitude": 7.01889,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1647185732,
      "ems": null
    },
    {
      "latitude": 50.856033,
      "longitude": 7.017072,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1647185738,
      "ems": null
    },
    {
      "latitude": 50.860416,
      "longitude": 7.014236,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1647185747,
      "ems": null
    },
    {
      "latitude": 50.863255,
      "longitude": 7.012253,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1647185753,
      "ems": null
    },
    {
      "latitude": 50.867294,
      "longitude": 7.009129,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1647185762,
      "ems": null
    },
    {
      "latitude": 50.868805,
      "longitude": 7.008016,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1647185765,
      "ems": null
    },
    {
      "latitude": 50.870235,
      "longitude": 7.006912,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1647185768,
      "ems": null
    },
    {
      "latitude": 50.871403,
      "longitude": 7.00592,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1647185771,
      "ems": null
    },
    {
      "latitude": 50.874344,
      "longitude": 7.003561,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1647185777,
      "ems": null
    },
    {
      "latitude": 50.87851,
      "longitude": 7.000221,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1647185786,
      "ems": null
    },
    {
      "latitude": 50.881256,
      "longitude": 6.997846,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1647185792,
      "ems": null
    },
    {
      "latitude": 50.884094,
      "longitude": 6.995396,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1647185798,
      "ems": null
    },
    {
      "latitude": 50.886841,
      "longitude": 6.992946,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1647185804,
      "ems": null
    },
    {
      "latitude": 50.889542,
      "longitude": 6.990422,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1647185810,
      "ems": null
    },
    {
      "latitude": 50.892303,
      "longitude": 6.987839,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1647185816,
      "ems": null
    },
    {
      "latitude": 50.894909,
      "longitude": 6.985397,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1647185822,
      "ems": null
    },
    {
      "latitude": 50.897827,
      "longitude": 6.982702,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1647185829,
      "ems": null
    },
    {
      "latitude": 50.900345,
      "longitude": 6.980327,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1647185835,
      "ems": null
    },
    {
      "latitude": 50.903,
      "longitude": 6.977654,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1647185841,
      "ems": null
    },
    {
      "latitude": 50.905476,
      "longitude": 6.97525,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1647185847,
      "ems": null
    },
    {
      "latitude": 50.907944,
      "longitude": 6.972904,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1647185853,
      "ems": null
    },
    {
      "latitude": 50.910507,
      "longitude": 6.970454,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1647185858,
      "ems": null
    },
    {
      "latitude": 50.913162,
      "longitude": 6.968079,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1647185865,
      "ems": null
    },
    {
      "latitude": 50.915771,
      "longitude": 6.965777,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1647185871,
      "ems": null
    },
    {
      "latitude": 50.918327,
      "longitude": 6.963272,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1647185877,
      "ems": null
    },
    {
      "latitude": 50.920898,
      "longitude": 6.960433,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1647185883,
      "ems": null
    },
    {
      "latitude": 50.923508,
      "longitude": 6.957835,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1647185889,
      "ems": null
    },
    {
      "latitude": 50.926147,
      "longitude": 6.955566,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1647185895,
      "ems": null
    },
    {
      "latitude": 50.929031,
      "longitude": 6.953125,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1647185901,
      "ems": null
    },
    {
      "latitude": 50.931686,
      "longitude": 6.950226,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1647185907,
      "ems": null
    },
    {
      "latitude": 50.93285,
      "longitude": 6.948624,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1647185910,
      "ems": null
    },
    {
      "latitude": 50.934082,
      "longitude": 6.947071,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1647185913,
      "ems": null
    },
    {
      "latitude": 50.936646,
      "longitude": 6.944547,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1647185918,
      "ems": null
    },
    {
      "latitude": 50.937969,
      "longitude": 6.943588,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1647185922,
      "ems": null
    },
    {
      "latitude": 50.939415,
      "longitude": 6.942902,
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1647185924,
      "ems": null
    },
    {
      "latitude": 50.940994,
      "longitude": 6.942394,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1647185928,
      "ems": null
    },
    {
      "latitude": 50.942368,
      "longitude": 6.94232,
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1647185930,
      "ems": null
    },
    {
      "latitude": 50.943745,
      "longitude": 6.942444,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1647185934,
      "ems": null
    },
    {
      "latitude": 50.945141,
      "longitude": 6.942902,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1647185936,
      "ems": null
    },
    {
      "latitude": 50.946396,
      "longitude": 6.943741,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1647185940,
      "ems": null
    },
    {
      "latitude": 50.94754,
      "longitude": 6.944993,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1647185942,
      "ems": null
    },
    {
      "latitude": 50.948273,
      "longitude": 6.946106,
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1647185946,
      "ems": null
    },
    {
      "latitude": 50.949097,
      "longitude": 6.948166,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1647185949,
      "ems": null
    },
    {
      "latitude": 50.949421,
      "longitude": 6.949692,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1647185952,
      "ems": null
    },
    {
      "latitude": 50.949554,
      "longitude": 6.951376,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1647185955,
      "ems": null
    },
    {
      "latitude": 50.949329,
      "longitude": 6.952972,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647185958,
      "ems": null
    },
    {
      "latitude": 50.94891,
      "longitude": 6.954269,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1647185960,
      "ems": null
    },
    {
      "latitude": 50.948257,
      "longitude": 6.955338,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1647185963,
      "ems": null
    },
    {
      "latitude": 50.947495,
      "longitude": 6.956276,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1647185966,
      "ems": null
    },
    {
      "latitude": 50.946671,
      "longitude": 6.957018,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1647185969,
      "ems": null
    },
    {
      "latitude": 50.945801,
      "longitude": 6.957538,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1647185972,
      "ems": null
    },
    {
      "latitude": 50.944839,
      "longitude": 6.958057,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1647185976,
      "ems": null
    },
    {
      "latitude": 50.943832,
      "longitude": 6.958354,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1647185979,
      "ems": null
    },
    {
      "latitude": 50.94286,
      "longitude": 6.958389,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1647185982,
      "ems": null
    },
    {
      "latitude": 50.941975,
      "longitude": 6.95816,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1647185985,
      "ems": null
    },
    {
      "latitude": 50.940811,
      "longitude": 6.95755,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1647185988,
      "ems": null
    },
    {
      "latitude": 50.939835,
      "longitude": 6.956558,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1647185991,
      "ems": null
    },
    {
      "latitude": 50.938995,
      "longitude": 6.955414,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1647185993,
      "ems": null
    },
    {
      "latitude": 50.938339,
      "longitude": 6.9539,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1647185997,
      "ems": null
    },
    {
      "latitude": 50.937744,
      "longitude": 6.951896,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1647186000,
      "ems": null
    },
    {
      "latitude": 50.937553,
      "longitude": 6.949844,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1647186003,
      "ems": null
    },
    {
      "latitude": 50.937607,
      "longitude": 6.947814,
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1647186006,
      "ems": null
    },
    {
      "latitude": 50.938202,
      "longitude": 6.945419,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1647186009,
      "ems": null
    },
    {
      "latitude": 50.939041,
      "longitude": 6.943588,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1647186012,
      "ems": null
    },
    {
      "latitude": 50.940159,
      "longitude": 6.942139,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1647186015,
      "ems": null
    },
    {
      "latitude": 50.941463,
      "longitude": 6.940994,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1647186018,
      "ems": null
    },
    {
      "latitude": 50.942734,
      "longitude": 6.940316,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1647186021,
      "ems": null
    },
    {
      "latitude": 50.944153,
      "longitude": 6.939722,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1647186024,
      "ems": null
    },
    {
      "latitude": 50.945755,
      "longitude": 6.939054,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1647186027,
      "ems": null
    },
    {
      "latitude": 50.947128,
      "longitude": 6.938386,
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1647186030,
      "ems": null
    },
    {
      "latitude": 50.948399,
      "longitude": 6.93779,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1647186033,
      "ems": null
    },
    {
      "latitude": 50.949783,
      "longitude": 6.936827,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1647186036,
      "ems": null
    },
    {
      "latitude": 50.951054,
      "longitude": 6.936035,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1647186039,
      "ems": null
    },
    {
      "latitude": 50.952347,
      "longitude": 6.935342,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1647186042,
      "ems": null
    },
    {
      "latitude": 50.953472,
      "longitude": 6.934738,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1647186045,
      "ems": null
    },
    {
      "latitude": 50.955101,
      "longitude": 6.933899,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1647186048,
      "ems": null
    },
    {
      "latitude": 50.957523,
      "longitude": 6.932602,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1647186053,
      "ems": null
    },
    {
      "latitude": 50.959011,
      "longitude": 6.931534,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1647186057,
      "ems": null
    },
    {
      "latitude": 50.960083,
      "longitude": 6.93074,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1647186060,
      "ems": null
    },
    {
      "latitude": 50.961388,
      "longitude": 6.92955,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1647186063,
      "ems": null
    },
    {
      "latitude": 50.962597,
      "longitude": 6.928406,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1647186066,
      "ems": null
    },
    {
      "latitude": 50.963806,
      "longitude": 6.927109,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1647186069,
      "ems": null
    },
    {
      "latitude": 50.96497,
      "longitude": 6.925812,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1647186072,
      "ems": null
    },
    {
      "latitude": 50.966171,
      "longitude": 6.924356,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1647186075,
      "ems": null
    },
    {
      "latitude": 50.967316,
      "longitude": 6.922872,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1647186078,
      "ems": null
    },
    {
      "latitude": 50.968506,
      "longitude": 6.921461,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1647186081,
      "ems": null
    },
    {
      "latitude": 50.969696,
      "longitude": 6.919902,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1647186084,
      "ems": null
    },
    {
      "latitude": 50.970928,
      "longitude": 6.918411,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1647186087,
      "ems": null
    },
    {
      "latitude": 50.972141,
      "longitude": 6.916962,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1647186090,
      "ems": null
    },
    {
      "latitude": 50.97345,
      "longitude": 6.915448,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1647186093,
      "ems": null
    },
    {
      "latitude": 50.975967,
      "longitude": 6.912702,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1647186099,
      "ems": null
    },
    {
      "latitude": 50.978703,
      "longitude": 6.909866,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1647186105,
      "ems": null
    },
    {
      "latitude": 50.980133,
      "longitude": 6.908396,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1647186108,
      "ems": null
    },
    {
      "latitude": 50.981449,
      "longitude": 6.907043,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1647186111,
      "ems": null
    },
    {
      "latitude": 50.982845,
      "longitude": 6.90567,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1647186114,
      "ems": null
    },
    {
      "latitude": 50.98415,
      "longitude": 6.904449,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1647186117,
      "ems": null
    },
    {
      "latitude": 50.985672,
      "longitude": 6.902977,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1647186120,
      "ems": null
    },
    {
      "latitude": 50.988327,
      "longitude": 6.900379,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1647186126,
      "ems": null
    },
    {
      "latitude": 50.990982,
      "longitude": 6.89741,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1647186132,
      "ems": null
    },
    {
      "latitude": 50.993637,
      "longitude": 6.894589,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1647186138,
      "ems": null
    },
    {
      "latitude": 50.996532,
      "longitude": 6.89209,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1647186144,
      "ems": null
    },
    {
      "latitude": 50.999222,
      "longitude": 6.88917,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1647186150,
      "ems": null
    },
    {
      "latitude": 51.000027,
      "longitude": 6.887741,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1647186153,
      "ems": null
    },
    {
      "latitude": 51.001053,
      "longitude": 6.885384,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1647186156,
      "ems": null
    },
    {
      "latitude": 51.001694,
      "longitude": 6.88338,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1647186159,
      "ems": null
    },
    {
      "latitude": 51.002243,
      "longitude": 6.88093,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1647186162,
      "ems": null
    },
    {
      "latitude": 51.002609,
      "longitude": 6.878407,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1647186165,
      "ems": null
    },
    {
      "latitude": 51.002773,
      "longitude": 6.876144,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1647186168,
      "ems": null
    },
    {
      "latitude": 51.002819,
      "longitude": 6.873856,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1647186171,
      "ems": null
    },
    {
      "latitude": 51.002678,
      "longitude": 6.871872,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1647186174,
      "ems": null
    },
    {
      "latitude": 51.002472,
      "longitude": 6.869721,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1647186177,
      "ems": null
    },
    {
      "latitude": 51.00206,
      "longitude": 6.867717,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1647186180,
      "ems": null
    },
    {
      "latitude": 51.001514,
      "longitude": 6.865845,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1647186183,
      "ems": null
    },
    {
      "latitude": 51.001007,
      "longitude": 6.864154,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1647186186,
      "ems": null
    },
    {
      "latitude": 51.000458,
      "longitude": 6.862372,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1647186189,
      "ems": null
    },
    {
      "latitude": 50.999908,
      "longitude": 6.860739,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1647186192,
      "ems": null
    },
    {
      "latitude": 50.999374,
      "longitude": 6.858826,
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1647186195,
      "ems": null
    },
    {
      "latitude": 50.998859,
      "longitude": 6.8573,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1647186198,
      "ems": null
    },
    {
      "latitude": 50.998306,
      "longitude": 6.855691,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1647186201,
      "ems": null
    },
    {
      "latitude": 50.997696,
      "longitude": 6.853943,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1647186204,
      "ems": null
    },
    {
      "latitude": 50.997139,
      "longitude": 6.852341,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1647186207,
      "ems": null
    },
    {
      "latitude": 50.996532,
      "longitude": 6.850815,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1647186210,
      "ems": null
    },
    {
      "latitude": 50.995972,
      "longitude": 6.849382,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1647186213,
      "ems": null
    },
    {
      "latitude": 50.995464,
      "longitude": 6.848068,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1647186216,
      "ems": null
    },
    {
      "latitude": 50.994781,
      "longitude": 6.846413,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1647186219,
      "ems": null
    },
    {
      "latitude": 50.994205,
      "longitude": 6.845016,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1647186222,
      "ems": null
    },
    {
      "latitude": 50.993694,
      "longitude": 6.843796,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1647186225,
      "ems": null
    },
    {
      "latitude": 50.992764,
      "longitude": 6.842499,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1647186228,
      "ems": null
    },
    {
      "latitude": 50.991787,
      "longitude": 6.841812,
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1647186231,
      "ems": null
    },
    {
      "latitude": 50.990807,
      "longitude": 6.84166,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1647186234,
      "ems": null
    },
    {
      "latitude": 50.989922,
      "longitude": 6.842117,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1647186237,
      "ems": null
    },
    {
      "latitude": 50.989086,
      "longitude": 6.84288,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1647186240,
      "ems": null
    },
    {
      "latitude": 50.988327,
      "longitude": 6.843666,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1647186243,
      "ems": null
    },
    {
      "latitude": 50.987732,
      "longitude": 6.84426,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1647186246,
      "ems": null
    },
    {
      "latitude": 50.986862,
      "longitude": 6.845299,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1647186249,
      "ems": null
    },
    {
      "latitude": 50.986107,
      "longitude": 6.846161,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1647186252,
      "ems": null
    },
    {
      "latitude": 50.985214,
      "longitude": 6.846932,
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1647186255,
      "ems": null
    },
    {
      "latitude": 50.984253,
      "longitude": 6.847452,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1647186258,
      "ems": null
    },
    {
      "latitude": 50.983219,
      "longitude": 6.847916,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1647186261,
      "ems": null
    },
    {
      "latitude": 50.982288,
      "longitude": 6.848373,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1647186264,
      "ems": null
    },
    {
      "latitude": 50.981415,
      "longitude": 6.848714,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1647186267,
      "ems": null
    },
    {
      "latitude": 50.980453,
      "longitude": 6.849159,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1647186270,
      "ems": null
    },
    {
      "latitude": 50.979584,
      "longitude": 6.84953,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1647186273,
      "ems": null
    },
    {
      "latitude": 50.978714,
      "longitude": 6.849901,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1647186276,
      "ems": null
    },
    {
      "latitude": 50.978004,
      "longitude": 6.850204,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1647186279,
      "ems": null
    },
    {
      "latitude": 50.97702,
      "longitude": 6.850718,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1647186282,
      "ems": null
    },
    {
      "latitude": 50.976105,
      "longitude": 6.851163,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1647186285,
      "ems": null
    },
    {
      "latitude": 50.974373,
      "longitude": 6.851883,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1647186291,
      "ems": null
    },
    {
      "latitude": 50.972488,
      "longitude": 6.85287,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1647186297,
      "ems": null
    },
    {
      "latitude": 50.970795,
      "longitude": 6.853613,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1647186303,
      "ems": null
    },
    {
      "latitude": 50.968964,
      "longitude": 6.85443,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1647186309,
      "ems": null
    },
    {
      "latitude": 50.966366,
      "longitude": 6.85585,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1647186318,
      "ems": null
    },
    {
      "latitude": 50.964737,
      "longitude": 6.856842,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1647186324,
      "ems": null
    },
    {
      "latitude": 50.962971,
      "longitude": 6.85791,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1647186330,
      "ems": null
    },
    {
      "latitude": 50.960266,
      "longitude": 6.859254,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1647186339,
      "ems": null
    },
    {
      "latitude": 50.958408,
      "longitude": 6.860275,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1647186345,
      "ems": null
    },
    {
      "latitude": 50.956825,
      "longitude": 6.861343,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1647186351,
      "ems": null
    },
    {
      "latitude": 50.954964,
      "longitude": 6.862564,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1647186357,
      "ems": null
    },
    {
      "latitude": 50.954216,
      "longitude": 6.863022,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1647186360,
      "ems": null
    },
    {
      "latitude": 50.953285,
      "longitude": 6.863708,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1647186363,
      "ems": null
    },
    {
      "latitude": 50.952393,
      "longitude": 6.864302,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1647186366,
      "ems": null
    },
    {
      "latitude": 50.950607,
      "longitude": 6.86549,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1647186372,
      "ems": null
    },
    {
      "latitude": 50.948723,
      "longitude": 6.86676,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1647186378,
      "ems": null
    },
    {
      "latitude": 50.947037,
      "longitude": 6.86794,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1647186384,
      "ems": null
    },
    {
      "latitude": 50.945419,
      "longitude": 6.869125,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1647186390,
      "ems": null
    },
    {
      "latitude": 50.943695,
      "longitude": 6.870499,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1647186396,
      "ems": null
    },
    {
      "latitude": 50.942963,
      "longitude": 6.87128,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1647186399,
      "ems": null
    },
    {
      "latitude": 50.94223,
      "longitude": 6.872097,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1647186402,
      "ems": null
    },
    {
      "latitude": 50.941368,
      "longitude": 6.873016,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1647186405,
      "ems": null
    },
    {
      "latitude": 50.940533,
      "longitude": 6.873856,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1647186408,
      "ems": null
    },
    {
      "latitude": 50.939739,
      "longitude": 6.874695,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1647186411,
      "ems": null
    },
    {
      "latitude": 50.939072,
      "longitude": 6.875437,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1647186414,
      "ems": null
    },
    {
      "latitude": 50.938297,
      "longitude": 6.876297,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1647186417,
      "ems": null
    },
    {
      "latitude": 50.937653,
      "longitude": 6.87707,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1647186420,
      "ems": null
    },
    {
      "latitude": 50.93692,
      "longitude": 6.877812,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1647186423,
      "ems": null
    },
    {
      "latitude": 50.935455,
      "longitude": 6.879297,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1647186429,
      "ems": null
    },
    {
      "latitude": 50.934723,
      "longitude": 6.88004,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1647186432,
      "ems": null
    },
    {
      "latitude": 50.93327,
      "longitude": 6.881332,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1647186438,
      "ems": null
    },
    {
      "latitude": 50.931454,
      "longitude": 6.883011,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1647186445,
      "ems": null
    },
    {
      "latitude": 50.930511,
      "longitude": 6.8839,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1647186448,
      "ems": null
    },
    {
      "latitude": 50.929684,
      "longitude": 6.884613,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1647186451,
      "ems": null
    },
    {
      "latitude": 50.928726,
      "longitude": 6.88531,
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1647186454,
      "ems": null
    },
    {
      "latitude": 50.926575,
      "longitude": 6.887017,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1647186460,
      "ems": null
    },
    {
      "latitude": 50.924656,
      "longitude": 6.888733,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1647186466,
      "ems": null
    },
    {
      "latitude": 50.922794,
      "longitude": 6.890259,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1647186472,
      "ems": null
    },
    {
      "latitude": 50.921677,
      "longitude": 6.891098,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1647186475,
      "ems": null
    },
    {
      "latitude": 50.920532,
      "longitude": 6.892065,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1647186478,
      "ems": null
    },
    {
      "latitude": 50.918381,
      "longitude": 6.893698,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1647186484,
      "ems": null
    },
    {
      "latitude": 50.916367,
      "longitude": 6.895406,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1647186490,
      "ems": null
    },
    {
      "latitude": 50.914135,
      "longitude": 6.897278,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1647186496,
      "ems": null
    },
    {
      "latitude": 50.913113,
      "longitude": 6.89827,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1647186499,
      "ems": null
    },
    {
      "latitude": 50.912273,
      "longitude": 6.899261,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1647186502,
      "ems": null
    },
    {
      "latitude": 50.911201,
      "longitude": 6.900482,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1647186505,
      "ems": null
    },
    {
      "latitude": 50.91032,
      "longitude": 6.901703,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1647186508,
      "ems": null
    },
    {
      "latitude": 50.909435,
      "longitude": 6.902924,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1647186511,
      "ems": null
    },
    {
      "latitude": 50.908596,
      "longitude": 6.904068,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1647186514,
      "ems": null
    },
    {
      "latitude": 50.907761,
      "longitude": 6.905204,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1647186517,
      "ems": null
    },
    {
      "latitude": 50.906845,
      "longitude": 6.906615,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1647186520,
      "ems": null
    },
    {
      "latitude": 50.906067,
      "longitude": 6.907876,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1647186523,
      "ems": null
    },
    {
      "latitude": 50.905293,
      "longitude": 6.909027,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1647186526,
      "ems": null
    },
    {
      "latitude": 50.904594,
      "longitude": 6.910172,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1647186529,
      "ems": null
    },
    {
      "latitude": 50.903755,
      "longitude": 6.911392,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1647186532,
      "ems": null
    },
    {
      "latitude": 50.902222,
      "longitude": 6.913221,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1647186538,
      "ems": null
    },
    {
      "latitude": 50.901169,
      "longitude": 6.914038,
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
      "squawk": "7000",
      "timestamp": 1647186541,
      "ems": null
    },
    {
      "latitude": 50.900311,
      "longitude": 6.91452,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1647186544,
      "ems": null
    },
    {
      "latitude": 50.899109,
      "longitude": 6.915226,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1647186547,
      "ems": null
    },
    {
      "latitude": 50.898449,
      "longitude": 6.915665,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1647186550,
      "ems": null
    },
    {
      "latitude": 50.897377,
      "longitude": 6.916351,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1647186553,
      "ems": null
    },
    {
      "latitude": 50.896271,
      "longitude": 6.917155,
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1647186556,
      "ems": null
    },
    {
      "latitude": 50.895447,
      "longitude": 6.917675,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1647186559,
      "ems": null
    },
    {
      "latitude": 50.894444,
      "longitude": 6.918259,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1647186562,
      "ems": null
    },
    {
      "latitude": 50.892395,
      "longitude": 6.919403,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1647186568,
      "ems": null
    },
    {
      "latitude": 50.890549,
      "longitude": 6.920496,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1647186574,
      "ems": null
    },
    {
      "latitude": 50.888348,
      "longitude": 6.921768,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1647186580,
      "ems": null
    },
    {
      "latitude": 50.886703,
      "longitude": 6.922648,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1647186585,
      "ems": null
    },
    {
      "latitude": 50.884277,
      "longitude": 6.923985,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1647186593,
      "ems": null
    },
    {
      "latitude": 50.883087,
      "longitude": 6.924362,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1647186597,
      "ems": null
    },
    {
      "latitude": 50.881577,
      "longitude": 6.924727,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1647186601,
      "ems": null
    },
    {
      "latitude": 50.880661,
      "longitude": 6.925098,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1647186603,
      "ems": null
    },
    {
      "latitude": 50.878647,
      "longitude": 6.926064,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1647186610,
      "ems": null
    },
    {
      "latitude": 50.876541,
      "longitude": 6.927103,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1647186616,
      "ems": null
    },
    {
      "latitude": 50.874382,
      "longitude": 6.928329,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1647186621,
      "ems": null
    },
    {
      "latitude": 50.873356,
      "longitude": 6.928787,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1647186625,
      "ems": null
    },
    {
      "latitude": 50.871353,
      "longitude": 6.92955,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1647186631,
      "ems": null
    },
    {
      "latitude": 50.869308,
      "longitude": 6.930592,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1647186637,
      "ems": null
    },
    {
      "latitude": 50.86721,
      "longitude": 6.931839,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1647186643,
      "ems": null
    },
    {
      "latitude": 50.865326,
      "longitude": 6.932967,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1647186649,
      "ems": null
    },
    {
      "latitude": 50.864365,
      "longitude": 6.933561,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1647186651,
      "ems": null
    },
    {
      "latitude": 50.863396,
      "longitude": 6.934204,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1647186655,
      "ems": null
    },
    {
      "latitude": 50.862461,
      "longitude": 6.934662,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1647186657,
      "ems": null
    },
    {
      "latitude": 50.860321,
      "longitude": 6.935806,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1647186664,
      "ems": null
    },
    {
      "latitude": 50.858459,
      "longitude": 6.936722,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1647186669,
      "ems": null
    },
    {
      "latitude": 50.856491,
      "longitude": 6.937644,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1647186675,
      "ems": null
    },
    {
      "latitude": 50.855526,
      "longitude": 6.938019,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1647186679,
      "ems": null
    },
    {
      "latitude": 50.854477,
      "longitude": 6.93846,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1647186681,
      "ems": null
    },
    {
      "latitude": 50.853432,
      "longitude": 6.938858,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1647186684,
      "ems": null
    },
    {
      "latitude": 50.8526,
      "longitude": 6.939202,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1647186688,
      "ems": null
    },
    {
      "latitude": 50.851475,
      "longitude": 6.939545,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1647186690,
      "ems": null
    },
    {
      "latitude": 50.850403,
      "longitude": 6.939945,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1647186694,
      "ems": null
    },
    {
      "latitude": 50.849396,
      "longitude": 6.940316,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1647186697,
      "ems": null
    },
    {
      "latitude": 50.848358,
      "longitude": 6.940613,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1647186699,
      "ems": null
    },
    {
      "latitude": 50.847382,
      "longitude": 6.94091,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1647186703,
      "ems": null
    },
    {
      "latitude": 50.845284,
      "longitude": 6.941528,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1647186709,
      "ems": null
    },
    {
      "latitude": 50.843216,
      "longitude": 6.942246,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1647186715,
      "ems": null
    },
    {
      "latitude": 50.841282,
      "longitude": 6.943054,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1647186721,
      "ems": null
    },
    {
      "latitude": 50.839233,
      "longitude": 6.944046,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1647186727,
      "ems": null
    },
    {
      "latitude": 50.838226,
      "longitude": 6.944547,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1647186730,
      "ems": null
    },
    {
      "latitude": 50.837231,
      "longitude": 6.945038,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1647186733,
      "ems": null
    },
    {
      "latitude": 50.836208,
      "longitude": 6.945648,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1647186736,
      "ems": null
    },
    {
      "latitude": 50.835205,
      "longitude": 6.94618,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1647186739,
      "ems": null
    },
    {
      "latitude": 50.833134,
      "longitude": 6.947098,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1647186745,
      "ems": null
    },
    {
      "latitude": 50.832092,
      "longitude": 6.947442,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1647186748,
      "ems": null
    },
    {
      "latitude": 50.831039,
      "longitude": 6.947784,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1647186751,
      "ems": null
    },
    {
      "latitude": 50.829971,
      "longitude": 6.94809,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1647186754,
      "ems": null
    },
    {
      "latitude": 50.828899,
      "longitude": 6.948395,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1647186757,
      "ems": null
    },
    {
      "latitude": 50.827736,
      "longitude": 6.948776,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1647186760,
      "ems": null
    },
    {
      "latitude": 50.826736,
      "longitude": 6.949075,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1647186763,
      "ems": null
    },
    {
      "latitude": 50.825684,
      "longitude": 6.949298,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1647186766,
      "ems": null
    },
    {
      "latitude": 50.824661,
      "longitude": 6.949539,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1647186769,
      "ems": null
    },
    {
      "latitude": 50.823578,
      "longitude": 6.949818,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1647186772,
      "ems": null
    },
    {
      "latitude": 50.821472,
      "longitude": 6.950411,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1647186778,
      "ems": null
    },
    {
      "latitude": 50.81945,
      "longitude": 6.950912,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1647186784,
      "ems": null
    },
    {
      "latitude": 50.817261,
      "longitude": 6.951451,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1647186790,
      "ems": null
    },
    {
      "latitude": 50.815071,
      "longitude": 6.952057,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1647186796,
      "ems": null
    },
    {
      "latitude": 50.813049,
      "longitude": 6.952713,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1647186802,
      "ems": null
    },
    {
      "latitude": 50.810989,
      "longitude": 6.953381,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1647186808,
      "ems": null
    },
    {
      "latitude": 50.808929,
      "longitude": 6.954197,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1647186814,
      "ems": null
    },
    {
      "latitude": 50.806961,
      "longitude": 6.954791,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1647186820,
      "ems": null
    },
    {
      "latitude": 50.80481,
      "longitude": 6.955385,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1647186826,
      "ems": null
    },
    {
      "latitude": 50.802841,
      "longitude": 6.956276,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1647186832,
      "ems": null
    },
    {
      "latitude": 50.800827,
      "longitude": 6.957092,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1647186838,
      "ems": null
    },
    {
      "latitude": 50.798641,
      "longitude": 6.957932,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1647186844,
      "ems": null
    },
    {
      "latitude": 50.796593,
      "longitude": 6.958466,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1647186850,
      "ems": null
    },
    {
      "latitude": 50.795471,
      "longitude": 6.958577,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1647186853,
      "ems": null
    },
    {
      "latitude": 50.794216,
      "longitude": 6.958618,
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1647186856,
      "ems": null
    },
    {
      "latitude": 50.793137,
      "longitude": 6.958725,
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1647186859,
      "ems": null
    },
    {
      "latitude": 50.791992,
      "longitude": 6.958725,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1647186862,
      "ems": null
    },
    {
      "latitude": 50.790756,
      "longitude": 6.958651,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1647186865,
      "ems": null
    },
    {
      "latitude": 50.789654,
      "longitude": 6.958466,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1647186868,
      "ems": null
    },
    {
      "latitude": 50.788696,
      "longitude": 6.958354,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1647186871,
      "ems": null
    },
    {
      "latitude": 50.787323,
      "longitude": 6.958206,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1647186874,
      "ems": null
    },
    {
      "latitude": 50.78627,
      "longitude": 6.958057,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1647186877,
      "ems": null
    },
    {
      "latitude": 50.785091,
      "longitude": 6.957932,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1647186880,
      "ems": null
    },
    {
      "latitude": 50.78286,
      "longitude": 6.957703,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1647186886,
      "ems": null
    },
    {
      "latitude": 50.781647,
      "longitude": 6.957626,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1647186889,
      "ems": null
    },
    {
      "latitude": 50.779358,
      "longitude": 6.957612,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1647186895,
      "ems": null
    },
    {
      "latitude": 50.778397,
      "longitude": 6.957686,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1647186898,
      "ems": null
    },
    {
      "latitude": 50.77718,
      "longitude": 6.957779,
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1647186901,
      "ems": null
    },
    {
      "latitude": 50.77597,
      "longitude": 6.957835,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1647186904,
      "ems": null
    },
    {
      "latitude": 50.774872,
      "longitude": 6.957909,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1647186907,
      "ems": null
    },
    {
      "latitude": 50.773819,
      "longitude": 6.957983,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1647186910,
      "ems": null
    },
    {
      "latitude": 50.772758,
      "longitude": 6.958084,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1647186913,
      "ems": null
    },
    {
      "latitude": 50.771667,
      "longitude": 6.958206,
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1647186916,
      "ems": null
    },
    {
      "latitude": 50.770477,
      "longitude": 6.958354,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1647186919,
      "ems": null
    },
    {
      "latitude": 50.76947,
      "longitude": 6.958577,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1647186922,
      "ems": null
    },
    {
      "latitude": 50.76828,
      "longitude": 6.9588,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1647186925,
      "ems": null
    },
    {
      "latitude": 50.767319,
      "longitude": 6.959023,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1647186928,
      "ems": null
    },
    {
      "latitude": 50.76622,
      "longitude": 6.959319,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1647186931,
      "ems": null
    },
    {
      "latitude": 50.765076,
      "longitude": 6.959686,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1647186934,
      "ems": null
    },
    {
      "latitude": 50.764004,
      "longitude": 6.959991,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1647186937,
      "ems": null
    },
    {
      "latitude": 50.762794,
      "longitude": 6.960373,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1647186940,
      "ems": null
    },
    {
      "latitude": 50.761772,
      "longitude": 6.960678,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1647186943,
      "ems": null
    },
    {
      "latitude": 50.7607,
      "longitude": 6.961136,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1647186946,
      "ems": null
    },
    {
      "latitude": 50.759445,
      "longitude": 6.961546,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1647186949,
      "ems": null
    },
    {
      "latitude": 50.758327,
      "longitude": 6.961899,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1647186952,
      "ems": null
    },
    {
      "latitude": 50.756241,
      "longitude": 6.962585,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1647186958,
      "ems": null
    },
    {
      "latitude": 50.753857,
      "longitude": 6.963272,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1647186964,
      "ems": null
    },
    {
      "latitude": 50.751617,
      "longitude": 6.963699,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1647186970,
      "ems": null
    },
    {
      "latitude": 50.750553,
      "longitude": 6.963959,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1647186973,
      "ems": null
    },
    {
      "latitude": 50.748363,
      "longitude": 6.964493,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1647186979,
      "ems": null
    },
    {
      "latitude": 50.746223,
      "longitude": 6.965179,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1647186985,
      "ems": null
    },
    {
      "latitude": 50.743244,
      "longitude": 6.966248,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1647186994,
      "ems": null
    },
    {
      "latitude": 50.742451,
      "longitude": 6.966629,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1647186997,
      "ems": null
    },
    {
      "latitude": 50.741566,
      "longitude": 6.96701,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1647187000,
      "ems": null
    },
    {
      "latitude": 50.740768,
      "longitude": 6.967411,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1647187003,
      "ems": null
    },
    {
      "latitude": 50.738914,
      "longitude": 6.968079,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1647187009,
      "ems": null
    },
    {
      "latitude": 50.737099,
      "longitude": 6.968689,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1647187015,
      "ems": null
    },
    {
      "latitude": 50.735561,
      "longitude": 6.969299,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1647187021,
      "ems": null
    },
    {
      "latitude": 50.73317,
      "longitude": 6.970603,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1647187030,
      "ems": null
    },
    {
      "latitude": 50.731522,
      "longitude": 6.971493,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1647187036,
      "ems": null
    },
    {
      "latitude": 50.729744,
      "longitude": 6.971893,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1647187042,
      "ems": null
    },
    {
      "latitude": 50.728813,
      "longitude": 6.97197,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1647187045,
      "ems": null
    },
    {
      "latitude": 50.727928,
      "longitude": 6.971893,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1647187048,
      "ems": null
    },
    {
      "latitude": 50.727089,
      "longitude": 6.971741,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1647187051,
      "ems": null
    },
    {
      "latitude": 50.726299,
      "longitude": 6.971664,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1647187054,
      "ems": null
    },
    {
      "latitude": 50.725414,
      "longitude": 6.971741,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1647187057,
      "ems": null
    },
    {
      "latitude": 50.724564,
      "longitude": 6.971716,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1647187060,
      "ems": null
    },
    {
      "latitude": 50.723648,
      "longitude": 6.971716,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1647187063,
      "ems": null
    },
    {
      "latitude": 50.722778,
      "longitude": 6.971716,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1647187066,
      "ems": null
    },
    {
      "latitude": 50.721874,
      "longitude": 6.971817,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1647187069,
      "ems": null
    },
    {
      "latitude": 50.719391,
      "longitude": 6.972087,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1647187078,
      "ems": null
    },
    {
      "latitude": 50.71843,
      "longitude": 6.972236,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1647187081,
      "ems": null
    },
    {
      "latitude": 50.717545,
      "longitude": 6.972351,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1647187084,
      "ems": null
    },
    {
      "latitude": 50.716782,
      "longitude": 6.972533,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1647187087,
      "ems": null
    },
    {
      "latitude": 50.715912,
      "longitude": 6.972755,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1647187090,
      "ems": null
    },
    {
      "latitude": 50.715031,
      "longitude": 6.972961,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1647187093,
      "ems": null
    },
    {
      "latitude": 50.714287,
      "longitude": 6.97319,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1647187096,
      "ems": null
    },
    {
      "latitude": 50.713348,
      "longitude": 6.973497,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1647187099,
      "ems": null
    },
    {
      "latitude": 50.712524,
      "longitude": 6.973869,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1647187102,
      "ems": null
    },
    {
      "latitude": 50.7117,
      "longitude": 6.974165,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1647187105,
      "ems": null
    },
    {
      "latitude": 50.710842,
      "longitude": 6.974564,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1647187108,
      "ems": null
    },
    {
      "latitude": 50.710052,
      "longitude": 6.974908,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1647187111,
      "ems": null
    },
    {
      "latitude": 50.709354,
      "longitude": 6.97525,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1647187114,
      "ems": null
    },
    {
      "latitude": 50.708542,
      "longitude": 6.975725,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1647187117,
      "ems": null
    },
    {
      "latitude": 50.707626,
      "longitude": 6.976244,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1647187120,
      "ems": null
    },
    {
      "latitude": 50.706932,
      "longitude": 6.976624,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1647187123,
      "ems": null
    },
    {
      "latitude": 50.706093,
      "longitude": 6.977158,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1647187126,
      "ems": null
    },
    {
      "latitude": 50.70451,
      "longitude": 6.978073,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1647187132,
      "ems": null
    },
    {
      "latitude": 50.703674,
      "longitude": 6.978531,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1647187135,
      "ems": null
    },
    {
      "latitude": 50.702957,
      "longitude": 6.978991,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1647187138,
      "ems": null
    },
    {
      "latitude": 50.700367,
      "longitude": 6.980438,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1647187147,
      "ems": null
    },
    {
      "latitude": 50.698608,
      "longitude": 6.981366,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1647187153,
      "ems": null
    },
    {
      "latitude": 50.696732,
      "longitude": 6.982331,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1647187159,
      "ems": null
    },
    {
      "latitude": 50.695862,
      "longitude": 6.982554,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1647187162,
      "ems": null
    },
    {
      "latitude": 50.694901,
      "longitude": 6.982628,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1647187165,
      "ems": null
    },
    {
      "latitude": 50.693939,
      "longitude": 6.982331,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1647187168,
      "ems": null
    },
    {
      "latitude": 50.693024,
      "longitude": 6.98196,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1647187171,
      "ems": null
    },
    {
      "latitude": 50.692062,
      "longitude": 6.981441,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1647187174,
      "ems": null
    },
    {
      "latitude": 50.691475,
      "longitude": 6.981125,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1647187177,
      "ems": null
    },
    {
      "latitude": 50.690174,
      "longitude": 6.980515,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1647187180,
      "ems": null
    },
    {
      "latitude": 50.689224,
      "longitude": 6.980104,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1647187183,
      "ems": null
    },
    {
      "latitude": 50.688358,
      "longitude": 6.979675,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1647187186,
      "ems": null
    },
    {
      "latitude": 50.687241,
      "longitude": 6.979218,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1647187189,
      "ems": null
    },
    {
      "latitude": 50.686157,
      "longitude": 6.978694,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1647187192,
      "ems": null
    },
    {
      "latitude": 50.683411,
      "longitude": 6.977432,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1647187201,
      "ems": null
    },
    {
      "latitude": 50.681515,
      "longitude": 6.976547,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1647187208,
      "ems": null
    },
    {
      "latitude": 50.678303,
      "longitude": 6.974945,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1647187216,
      "ems": null
    },
    {
      "latitude": 50.677505,
      "longitude": 6.974388,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1647187219,
      "ems": null
    },
    {
      "latitude": 50.676498,
      "longitude": 6.973646,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1647187222,
      "ems": null
    },
    {
      "latitude": 50.675556,
      "longitude": 6.973038,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1647187225,
      "ems": null
    },
    {
      "latitude": 50.67458,
      "longitude": 6.972351,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1647187228,
      "ems": null
    },
    {
      "latitude": 50.672531,
      "longitude": 6.971359,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1647187234,
      "ems": null
    },
    {
      "latitude": 50.671326,
      "longitude": 6.971476,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1647187237,
      "ems": null
    },
    {
      "latitude": 50.670776,
      "longitude": 6.971765,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1647187240,
      "ems": null
    },
    {
      "latitude": 50.669502,
      "longitude": 6.973126,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1647187243,
      "ems": null
    },
    {
      "latitude": 50.6689,
      "longitude": 6.974295,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1647187246,
      "ems": null
    },
    {
      "latitude": 50.668434,
      "longitude": 6.976467,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1647187249,
      "ems": null
    },
    {
      "latitude": 50.668533,
      "longitude": 6.975885,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1647187253,
      "ems": null
    },
    {
      "latitude": 50.669312,
      "longitude": 6.98145,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1647187257,
      "ems": null
    },
    {
      "latitude": 50.67062,
      "longitude": 6.982999,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1647187259,
      "ems": null
    },
    {
      "latitude": 50.6716,
      "longitude": 6.983643,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1647187262,
      "ems": null
    },
    {
      "latitude": 50.673134,
      "longitude": 6.983948,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1647187266,
      "ems": null
    },
    {
      "latitude": 50.67593,
      "longitude": 6.982956,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1647187270,
      "ems": null
    },
    {
      "latitude": 50.676956,
      "longitude": 6.981812,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1647187273,
      "ems": null
    },
    {
      "latitude": 50.678101,
      "longitude": 6.979881,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1647187276,
      "ems": null
    },
    {
      "latitude": 50.678768,
      "longitude": 6.977768,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1647187279,
      "ems": null
    },
    {
      "latitude": 50.67886,
      "longitude": 6.975784,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1647187282,
      "ems": null
    },
    {
      "latitude": 50.678513,
      "longitude": 6.974388,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1647187285,
      "ems": null
    },
    {
      "latitude": 50.677464,
      "longitude": 6.973267,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1647187288,
      "ems": null
    },
    {
      "latitude": 50.676361,
      "longitude": 6.973349,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1647187291,
      "ems": null
    },
    {
      "latitude": 50.675602,
      "longitude": 6.974106,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1647187294,
      "ems": null
    },
    {
      "latitude": 50.675034,
      "longitude": 6.975353,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1647187297,
      "ems": null
    },
    {
      "latitude": 50.674995,
      "longitude": 6.978607,
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
        "fpm": -1856,
        "ms": -9.4
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1647187301,
      "ems": null
    },
    {
      "latitude": 50.677414,
      "longitude": 6.980253,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1647187306,
      "ems": null
    },
    {
      "latitude": 50.678722,
      "longitude": 6.979065,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1647187309,
      "ems": null
    },
    {
      "latitude": 50.67952,
      "longitude": 6.977432,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1647187312,
      "ems": null
    },
    {
      "latitude": 50.67984,
      "longitude": 6.975327,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1647187315,
      "ems": null
    },
    {
      "latitude": 50.679703,
      "longitude": 6.973275,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1647187318,
      "ems": null
    },
    {
      "latitude": 50.679382,
      "longitude": 6.97179,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1647187321,
      "ems": null
    },
    {
      "latitude": 50.67897,
      "longitude": 6.970083,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1647187324,
      "ems": null
    },
    {
      "latitude": 50.678627,
      "longitude": 6.968613,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1647187327,
      "ems": null
    },
    {
      "latitude": 50.678257,
      "longitude": 6.967087,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1647187330,
      "ems": null
    },
    {
      "latitude": 50.677883,
      "longitude": 6.965561,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "squawk": "7000",
      "timestamp": 1647187333,
      "ems": null
    },
    {
      "latitude": 50.677505,
      "longitude": 6.964293,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1647187336,
      "ems": null
    },
    {
      "latitude": 50.677094,
      "longitude": 6.962891,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1647187339,
      "ems": null
    },
    {
      "latitude": 50.676765,
      "longitude": 6.961746,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1647187342,
      "ems": null
    },
    {
      "latitude": 50.676361,
      "longitude": 6.96073,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1647187345,
      "ems": null
    },
    {
      "latitude": 50.675903,
      "longitude": 6.959913,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1647187348,
      "ems": null
    },
    {
      "latitude": 50.675278,
      "longitude": 6.959229,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1647187351,
      "ems": null
    },
    {
      "latitude": 50.674622,
      "longitude": 6.958651,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1647187354,
      "ems": null
    },
    {
      "latitude": 50.673935,
      "longitude": 6.957983,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1647187357,
      "ems": null
    },
    {
      "latitude": 50.673229,
      "longitude": 6.957321,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1647187360,
      "ems": null
    },
    {
      "latitude": 50.672379,
      "longitude": 6.95687,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1647187363,
      "ems": null
    },
    {
      "latitude": 50.671459,
      "longitude": 6.956647,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1647187366,
      "ems": null
    },
    {
      "latitude": 50.670574,
      "longitude": 6.956647,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1647187369,
      "ems": null
    },
    {
      "latitude": 50.669815,
      "longitude": 6.956731,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1647187372,
      "ems": null
    },
    {
      "latitude": 50.668808,
      "longitude": 6.957165,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1647187375,
      "ems": null
    },
    {
      "latitude": 50.667892,
      "longitude": 6.957743,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1647187379,
      "ems": null
    },
    {
      "latitude": 50.666805,
      "longitude": 6.958354,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1647187382,
      "ems": null
    },
    {
      "latitude": 50.66597,
      "longitude": 6.958899,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1647187384,
      "ems": null
    },
    {
      "latitude": 50.665127,
      "longitude": 6.959542,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1647187387,
      "ems": null
    },
    {
      "latitude": 50.66415,
      "longitude": 6.960359,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1647187391,
      "ems": null
    },
    {
      "latitude": 50.663219,
      "longitude": 6.961101,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1647187393,
      "ems": null
    },
    {
      "latitude": 50.662262,
      "longitude": 6.961863,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1647187397,
      "ems": null
    },
    {
      "latitude": 50.661358,
      "longitude": 6.962585,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1647187399,
      "ems": null
    },
    {
      "latitude": 50.660385,
      "longitude": 6.963308,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1647187403,
      "ems": null
    },
    {
      "latitude": 50.659561,
      "longitude": 6.964031,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1647187405,
      "ems": null
    },
    {
      "latitude": 50.658516,
      "longitude": 6.964961,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1647187408,
      "ems": null
    },
    {
      "latitude": 50.657684,
      "longitude": 6.965765,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1647187411,
      "ems": null
    },
    {
      "latitude": 50.65675,
      "longitude": 6.966668,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1647187414,
      "ems": null
    },
    {
      "latitude": 50.655853,
      "longitude": 6.967645,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1647187417,
      "ems": null
    },
    {
      "latitude": 50.655075,
      "longitude": 6.96844,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1647187421,
      "ems": null
    },
    {
      "latitude": 50.654022,
      "longitude": 6.969524,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1647187424,
      "ems": null
    },
    {
      "latitude": 50.65321,
      "longitude": 6.970454,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1647187427,
      "ems": null
    },
    {
      "latitude": 50.652325,
      "longitude": 6.971419,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1647187429,
      "ems": null
    },
    {
      "latitude": 50.651443,
      "longitude": 6.97231,
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
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1647187433,
      "ems": null
    },
    {
      "latitude": 50.649536,
      "longitude": 6.973933,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1647187439,
      "ems": null
    },
    {
      "latitude": 50.647888,
      "longitude": 6.975451,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1647187445,
      "ems": null
    },
    {
      "latitude": 50.646057,
      "longitude": 6.977113,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1647187451,
      "ems": null
    },
    {
      "latitude": 50.644367,
      "longitude": 6.978694,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1647187456,
      "ems": null
    },
    {
      "latitude": 50.64267,
      "longitude": 6.980294,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1647187463,
      "ems": null
    },
    {
      "latitude": 50.642166,
      "longitude": 6.980944,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "squawk": "7000",
      "timestamp": 1647187465,
      "ems": null
    },
    {
      "latitude": 50.641159,
      "longitude": 6.982317,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1647187469,
      "ems": null
    },
    {
      "latitude": 50.640472,
      "longitude": 6.983474,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1647187472,
      "ems": null
    },
    {
      "latitude": 50.63974,
      "longitude": 6.984558,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1647187475,
      "ems": null
    },
    {
      "latitude": 50.639198,
      "longitude": 6.985746,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1647187477,
      "ems": null
    },
    {
      "latitude": 50.639053,
      "longitude": 6.986582,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1647187479,
      "ems": null
    },
    {
      "latitude": 50.639198,
      "longitude": 6.989235,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1647187484,
      "ems": null
    },
    {
      "latitude": 50.63974,
      "longitude": 6.991208,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1647187487,
      "ems": null
    },
    {
      "latitude": 50.640289,
      "longitude": 6.993087,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1647187489,
      "ems": null
    },
    {
      "latitude": 50.640923,
      "longitude": 6.995025,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1647187492,
      "ems": null
    },
    {
      "latitude": 50.641621,
      "longitude": 6.997103,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1647187496,
      "ems": null
    },
    {
      "latitude": 50.642269,
      "longitude": 6.998959,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1647187499,
      "ems": null
    },
    {
      "latitude": 50.642876,
      "longitude": 7.000815,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1647187502,
      "ems": null
    },
    {
      "latitude": 50.643482,
      "longitude": 7.002522,
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1647187504,
      "ems": null
    },
    {
      "latitude": 50.643761,
      "longitude": 7.003339,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1647187506,
      "ems": null
    },
    {
      "latitude": 50.644775,
      "longitude": 7.006169,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1647187511,
      "ems": null
    },
    {
      "latitude": 50.64537,
      "longitude": 7.007977,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1647187514,
      "ems": null
    },
    {
      "latitude": 50.646275,
      "longitude": 7.010836,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1647187519,
      "ems": null
    },
    {
      "latitude": 50.647614,
      "longitude": 7.015132,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "7000",
      "timestamp": 1647187525,
      "ems": null
    },
    {
      "latitude": 50.648071,
      "longitude": 7.016939,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1647187529,
      "ems": null
    },
    {
      "latitude": 50.648438,
      "longitude": 7.018818,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1647187532,
      "ems": null
    },
    {
      "latitude": 50.649536,
      "longitude": 7.022504,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1647187537,
      "ems": null
    },
    {
      "latitude": 50.650837,
      "longitude": 7.026277,
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1647187544,
      "ems": null
    },
    {
      "latitude": 50.651489,
      "longitude": 7.028058,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1647187547,
      "ems": null
    },
    {
      "latitude": 50.652145,
      "longitude": 7.02966,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1647187550,
      "ems": null
    },
    {
      "latitude": 50.652832,
      "longitude": 7.031467,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1647187553,
      "ems": null
    },
    {
      "latitude": 50.653538,
      "longitude": 7.033254,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1647187556,
      "ems": null
    },
    {
      "latitude": 50.65414,
      "longitude": 7.034962,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1647187559,
      "ems": null
    },
    {
      "latitude": 50.6548,
      "longitude": 7.037177,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1647187562,
      "ems": null
    },
    {
      "latitude": 50.655899,
      "longitude": 7.040791,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1647187568,
      "ems": null
    },
    {
      "latitude": 50.656982,
      "longitude": 7.044835,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1647187574,
      "ems": null
    },
    {
      "latitude": 50.657455,
      "longitude": 7.046935,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1647187577,
      "ems": null
    },
    {
      "latitude": 50.657772,
      "longitude": 7.048398,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1647187580,
      "ems": null
    },
    {
      "latitude": 50.658192,
      "longitude": 7.05055,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1647187583,
      "ems": null
    },
    {
      "latitude": 50.658417,
      "longitude": 7.051488,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1647187586,
      "ems": null
    },
    {
      "latitude": 50.658981,
      "longitude": 7.054336,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1647187589,
      "ems": null
    },
    {
      "latitude": 50.659451,
      "longitude": 7.056489,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1647187592,
      "ems": null
    },
    {
      "latitude": 50.659882,
      "longitude": 7.058499,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1647187595,
      "ems": null
    },
    {
      "latitude": 50.660339,
      "longitude": 7.060306,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1647187598,
      "ems": null
    },
    {
      "latitude": 50.66066,
      "longitude": 7.062113,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1647187601,
      "ems": null
    },
    {
      "latitude": 50.66098,
      "longitude": 7.064137,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1647187604,
      "ems": null
    },
    {
      "latitude": 50.661125,
      "longitude": 7.065545,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1647187607,
      "ems": null
    },
    {
      "latitude": 50.661777,
      "longitude": 7.069182,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1647187613,
      "ems": null
    },
    {
      "latitude": 50.662663,
      "longitude": 7.073414,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1647187619,
      "ems": null
    },
    {
      "latitude": 50.663452,
      "longitude": 7.076754,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1647187625,
      "ems": null
    },
    {
      "latitude": 50.664001,
      "longitude": 7.078882,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1647187628,
      "ems": null
    },
    {
      "latitude": 50.664505,
      "longitude": 7.080761,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1647187631,
      "ems": null
    },
    {
      "latitude": 50.665054,
      "longitude": 7.082712,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1647187634,
      "ems": null
    },
    {
      "latitude": 50.665546,
      "longitude": 7.084474,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1647187637,
      "ems": null
    },
    {
      "latitude": 50.666012,
      "longitude": 7.08633,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1647187640,
      "ems": null
    },
    {
      "latitude": 50.666988,
      "longitude": 7.090042,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1647187646,
      "ems": null
    },
    {
      "latitude": 50.667709,
      "longitude": 7.093771,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1647187652,
      "ems": null
    },
    {
      "latitude": 50.668076,
      "longitude": 7.09565,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1647187655,
      "ems": null
    },
    {
      "latitude": 50.668434,
      "longitude": 7.097539,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1647187658,
      "ems": null
    },
    {
      "latitude": 50.668804,
      "longitude": 7.099395,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1647187661,
      "ems": null
    },
    {
      "latitude": 50.669174,
      "longitude": 7.10136,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1647187664,
      "ems": null
    },
    {
      "latitude": 50.669456,
      "longitude": 7.103181,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1647187667,
      "ems": null
    },
    {
      "latitude": 50.669735,
      "longitude": 7.105037,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1647187670,
      "ems": null
    },
    {
      "latitude": 50.669968,
      "longitude": 7.106893,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1647187673,
      "ems": null
    },
    {
      "latitude": 50.670135,
      "longitude": 7.108949,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1647187676,
      "ems": null
    },
    {
      "latitude": 50.670296,
      "longitude": 7.11053,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1647187679,
      "ems": null
    },
    {
      "latitude": 50.670437,
      "longitude": 7.11246,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1647187682,
      "ems": null
    },
    {
      "latitude": 50.67067,
      "longitude": 7.114316,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1647187685,
      "ems": null
    },
    {
      "latitude": 50.670914,
      "longitude": 7.116322,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1647187688,
      "ems": null
    },
    {
      "latitude": 50.671085,
      "longitude": 7.118176,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1647187691,
      "ems": null
    },
    {
      "latitude": 50.671227,
      "longitude": 7.119883,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1647187694,
      "ems": null
    },
    {
      "latitude": 50.671272,
      "longitude": 7.121442,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1647187697,
      "ems": null
    },
    {
      "latitude": 50.671371,
      "longitude": 7.123549,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1647187700,
      "ems": null
    },
    {
      "latitude": 50.671463,
      "longitude": 7.125501,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1647187703,
      "ems": null
    },
    {
      "latitude": 50.671509,
      "longitude": 7.12738,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1647187706,
      "ems": null
    },
    {
      "latitude": 50.671509,
      "longitude": 7.129014,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1647187709,
      "ems": null
    },
    {
      "latitude": 50.671459,
      "longitude": 7.131166,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1647187712,
      "ems": null
    },
    {
      "latitude": 50.671463,
      "longitude": 7.132946,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1647187715,
      "ems": null
    },
    {
      "latitude": 50.671459,
      "longitude": 7.134729,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1647187718,
      "ems": null
    },
    {
      "latitude": 50.671459,
      "longitude": 7.136288,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1647187721,
      "ems": null
    },
    {
      "latitude": 50.6716,
      "longitude": 7.140274,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1647187727,
      "ems": null
    },
    {
      "latitude": 50.671833,
      "longitude": 7.144012,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1647187733,
      "ems": null
    },
    {
      "latitude": 50.67197,
      "longitude": 7.147217,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1647187739,
      "ems": null
    },
    {
      "latitude": 50.672104,
      "longitude": 7.14913,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1647187742,
      "ems": null
    },
    {
      "latitude": 50.672249,
      "longitude": 7.15271,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1647187748,
      "ems": null
    },
    {
      "latitude": 50.672298,
      "longitude": 7.156296,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1647187754,
      "ems": null
    },
    {
      "latitude": 50.672203,
      "longitude": 7.157822,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1647187757,
      "ems": null
    },
    {
      "latitude": 50.67197,
      "longitude": 7.1595,
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1647187760,
      "ems": null
    },
    {
      "latitude": 50.671646,
      "longitude": 7.161082,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1647187763,
      "ems": null
    },
    {
      "latitude": 50.671326,
      "longitude": 7.16258,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1647187766,
      "ems": null
    },
    {
      "latitude": 50.670948,
      "longitude": 7.164051,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1647187769,
      "ems": null
    },
    {
      "latitude": 50.670547,
      "longitude": 7.165399,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1647187772,
      "ems": null
    },
    {
      "latitude": 50.670109,
      "longitude": 7.166872,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1647187775,
      "ems": null
    },
    {
      "latitude": 50.669689,
      "longitude": 7.168208,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1647187778,
      "ems": null
    },
    {
      "latitude": 50.669128,
      "longitude": 7.169591,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1647187781,
      "ems": null
    },
    {
      "latitude": 50.668579,
      "longitude": 7.171037,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1647187784,
      "ems": null
    },
    {
      "latitude": 50.66806,
      "longitude": 7.172291,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1647187787,
      "ems": null
    },
    {
      "latitude": 50.667454,
      "longitude": 7.173553,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1647187790,
      "ems": null
    },
    {
      "latitude": 50.666851,
      "longitude": 7.174815,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1647187793,
      "ems": null
    },
    {
      "latitude": 50.666199,
      "longitude": 7.176096,
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1647187796,
      "ems": null
    },
    {
      "latitude": 50.665642,
      "longitude": 7.177042,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1647187799,
      "ems": null
    },
    {
      "latitude": 50.664944,
      "longitude": 7.178378,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1647187802,
      "ems": null
    },
    {
      "latitude": 50.664322,
      "longitude": 7.179421,
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1647187805,
      "ems": null
    },
    {
      "latitude": 50.663498,
      "longitude": 7.180722,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1647187808,
      "ems": null
    },
    {
      "latitude": 50.662811,
      "longitude": 7.181806,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1647187811,
      "ems": null
    },
    {
      "latitude": 50.662056,
      "longitude": 7.18298,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1647187814,
      "ems": null
    },
    {
      "latitude": 50.661346,
      "longitude": 7.183974,
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1647187817,
      "ems": null
    },
    {
      "latitude": 50.659496,
      "longitude": 7.18788,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1647187826,
      "ems": null
    },
    {
      "latitude": 50.659058,
      "longitude": 7.189467,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1647187829,
      "ems": null
    },
    {
      "latitude": 50.65889,
      "longitude": 7.190923,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1647187832,
      "ems": null
    },
    {
      "latitude": 50.659012,
      "longitude": 7.192865,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1647187835,
      "ems": null
    },
    {
      "latitude": 50.659698,
      "longitude": 7.195178,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1647187839,
      "ems": null
    },
    {
      "latitude": 50.65979,
      "longitude": 7.195395,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1647187841,
      "ems": null
    },
    {
      "latitude": 50.661301,
      "longitude": 7.197201,
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1647187845,
      "ems": null
    },
    {
      "latitude": 50.663635,
      "longitude": 7.19778,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1647187849,
      "ems": null
    },
    {
      "latitude": 50.664989,
      "longitude": 7.197307,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1647187853,
      "ems": null
    },
    {
      "latitude": 50.666477,
      "longitude": 7.19649,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1647187857,
      "ems": null
    },
    {
      "latitude": 50.668671,
      "longitude": 7.194961,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1647187861,
      "ems": null
    },
    {
      "latitude": 50.670483,
      "longitude": 7.193521,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1647187865,
      "ems": null
    },
    {
      "latitude": 50.672287,
      "longitude": 7.192037,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1647187869,
      "ems": null
    },
    {
      "latitude": 50.674026,
      "longitude": 7.190403,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1647187873,
      "ems": null
    },
    {
      "latitude": 50.675369,
      "longitude": 7.189102,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1647187877,
      "ems": null
    },
    {
      "latitude": 50.677414,
      "longitude": 7.187137,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1647187881,
      "ems": null
    },
    {
      "latitude": 50.67897,
      "longitude": 7.185652,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1647187885,
      "ems": null
    },
    {
      "latitude": 50.680984,
      "longitude": 7.183648,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1647187889,
      "ems": null
    },
    {
      "latitude": 50.684681,
      "longitude": 7.180099,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1647187897,
      "ems": null
    },
    {
      "latitude": 50.688034,
      "longitude": 7.176967,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1647187905,
      "ems": null
    },
    {
      "latitude": 50.691292,
      "longitude": 7.173538,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1647187913,
      "ems": null
    },
    {
      "latitude": 50.694271,
      "longitude": 7.17041,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1647187921,
      "ems": null
    },
    {
      "latitude": 50.697006,
      "longitude": 7.167614,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1647187929,
      "ems": null
    },
    {
      "latitude": 50.699902,
      "longitude": 7.164154,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1647187937,
      "ems": null
    },
    {
      "latitude": 50.702789,
      "longitude": 7.160645,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1647187943,
      "ems": null
    },
    {
      "latitude": 50.703861,
      "longitude": 7.159348,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1647187947,
      "ems": null
    },
    {
      "latitude": 50.704788,
      "longitude": 7.158113,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1647187950,
      "ems": null
    },
    {
      "latitude": 50.705795,
      "longitude": 7.156628,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1647187953,
      "ems": null
    },
    {
      "latitude": 50.707947,
      "longitude": 7.153658,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1647187959,
      "ems": null
    },
    {
      "latitude": 50.710144,
      "longitude": 7.150726,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1647187965,
      "ems": null
    },
    {
      "latitude": 50.711166,
      "longitude": 7.149277,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1647187968,
      "ems": null
    },
    {
      "latitude": 50.712158,
      "longitude": 7.147943,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1647187971,
      "ems": null
    },
    {
      "latitude": 50.71312,
      "longitude": 7.146458,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1647187974,
      "ems": null
    },
    {
      "latitude": 50.71368,
      "longitude": 7.145538,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1647187977,
      "ems": null
    },
    {
      "latitude": 50.716011,
      "longitude": 7.142105,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1647187983,
      "ems": null
    },
    {
      "latitude": 50.718109,
      "longitude": 7.13948,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1647187989,
      "ems": null
    },
    {
      "latitude": 50.719299,
      "longitude": 7.138441,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1647187992,
      "ems": null
    },
    {
      "latitude": 50.719875,
      "longitude": 7.138062,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1647187995,
      "ems": null
    },
    {
      "latitude": 50.721783,
      "longitude": 7.137527,
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1647187998,
      "ems": null
    },
    {
      "latitude": 50.723099,
      "longitude": 7.137921,
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1647188001,
      "ems": null
    },
    {
      "latitude": 50.724014,
      "longitude": 7.138441,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1647188004,
      "ems": null
    },
    {
      "latitude": 50.725159,
      "longitude": 7.139257,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1647188007,
      "ems": null
    },
    {
      "latitude": 50.726017,
      "longitude": 7.139969,
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1647188010,
      "ems": null
    },
    {
      "latitude": 50.726902,
      "longitude": 7.140884,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1647188013,
      "ems": null
    },
    {
      "latitude": 50.727859,
      "longitude": 7.14193,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1647188016,
      "ems": null
    },
    {
      "latitude": 50.728592,
      "longitude": 7.142969,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1647188019,
      "ems": null
    },
    {
      "latitude": 50.729324,
      "longitude": 7.144083,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1647188021,
      "ems": null
    },
    {
      "latitude": 50.730022,
      "longitude": 7.145157,
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1647188025,
      "ems": null
    },
    {
      "latitude": 50.730812,
      "longitude": 7.146378,
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
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1647188028,
      "ems": null
    },
    {
      "latitude": 50.731606,
      "longitude": 7.147598,
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
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1647188031,
      "ems": null
    },
    {
      "latitude": 50.7323,
      "longitude": 7.148685,
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
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1647188034,
      "ems": null
    },
    {
      "latitude": 50.733124,
      "longitude": 7.149873,
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1647188037,
      "ems": null
    },
    {
      "latitude": 50.733887,
      "longitude": 7.150955,
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
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1647188040,
      "ems": null
    },
    {
      "latitude": 50.734631,
      "longitude": 7.152023,
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1647188043,
      "ems": null
    },
    {
      "latitude": 50.735367,
      "longitude": 7.153065,
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1647188046,
      "ems": null
    },
    {
      "latitude": 50.73682,
      "longitude": 7.155457,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1647188051,
      "ems": null
    },
    {
      "latitude": 50.738159,
      "longitude": 7.157444,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1647188058,
      "ems": null
    },
    {
      "latitude": 50.739395,
      "longitude": 7.158038,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1647188061,
      "ems": null
    },
    {
      "latitude": 50.740498,
      "longitude": 7.158051,
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1647188064,
      "ems": null
    },
    {
      "latitude": 50.741684,
      "longitude": 7.157593,
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1647188067,
      "ems": null
    },
    {
      "latitude": 50.742729,
      "longitude": 7.15683,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1647188070,
      "ems": null
    },
    {
      "latitude": 50.743835,
      "longitude": 7.155737,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1647188073,
      "ems": null
    },
    {
      "latitude": 50.744659,
      "longitude": 7.154698,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1647188076,
      "ems": null
    },
    {
      "latitude": 50.745525,
      "longitude": 7.153244,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1647188079,
      "ems": null
    },
    {
      "latitude": 50.746262,
      "longitude": 7.151729,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1647188082,
      "ems": null
    },
    {
      "latitude": 50.746994,
      "longitude": 7.150392,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1647188085,
      "ems": null
    },
    {
      "latitude": 50.747711,
      "longitude": 7.148972,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1647188088,
      "ems": null
    },
    {
      "latitude": 50.748413,
      "longitude": 7.14772,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1647188091,
      "ems": null
    },
    {
      "latitude": 50.749062,
      "longitude": 7.146454,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1647188094,
      "ems": null
    },
    {
      "latitude": 50.74976,
      "longitude": 7.145081,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1647188097,
      "ems": null
    },
    {
      "latitude": 50.750504,
      "longitude": 7.143555,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1647188100,
      "ems": null
    },
    {
      "latitude": 50.751202,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1647188103,
      "ems": null
    },
    {
      "latitude": 50.752693,
      "longitude": 7.139664,
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1647188109,
      "ems": null
    },
    {
      "latitude": 50.753448,
      "longitude": 7.138515,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1647188112,
      "ems": null
    },
    {
      "latitude": 50.754089,
      "longitude": 7.137527,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1647188115,
      "ems": null
    },
    {
      "latitude": 50.75502,
      "longitude": 7.13623,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1647188118,
      "ems": null
    },
    {
      "latitude": 50.755997,
      "longitude": 7.135239,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1647188121,
      "ems": null
    },
    {
      "latitude": 50.756973,
      "longitude": 7.134581,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1647188124,
      "ems": null
    },
    {
      "latitude": 50.75798,
      "longitude": 7.134061,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1647188127,
      "ems": null
    },
    {
      "latitude": 50.759026,
      "longitude": 7.133636,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1647188130,
      "ems": null
    },
    {
      "latitude": 50.760002,
      "longitude": 7.133102,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1647188133,
      "ems": null
    },
    {
      "latitude": 50.761074,
      "longitude": 7.132492,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1647188136,
      "ems": null
    },
    {
      "latitude": 50.761963,
      "longitude": 7.131908,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1647188139,
      "ems": null
    },
    {
      "latitude": 50.763027,
      "longitude": 7.131271,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1647188142,
      "ems": null
    },
    {
      "latitude": 50.764069,
      "longitude": 7.130795,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1647188145,
      "ems": null
    },
    {
      "latitude": 50.765213,
      "longitude": 7.13035,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1647188148,
      "ems": null
    },
    {
      "latitude": 50.766193,
      "longitude": 7.130051,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1647188151,
      "ems": null
    },
    {
      "latitude": 50.76717,
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1647188154,
      "ems": null
    },
    {
      "latitude": 50.768147,
      "longitude": 7.13028,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1647188157,
      "ems": null
    },
    {
      "latitude": 50.769104,
      "longitude": 7.130869,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1647188160,
      "ems": null
    },
    {
      "latitude": 50.769928,
      "longitude": 7.131612,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1647188163,
      "ems": null
    },
    {
      "latitude": 50.77066,
      "longitude": 7.132503,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1647188166,
      "ems": null
    },
    {
      "latitude": 50.771358,
      "longitude": 7.133408,
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
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1647188169,
      "ems": null
    },
    {
      "latitude": 50.772011,
      "longitude": 7.134476,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1647188172,
      "ems": null
    },
    {
      "latitude": 50.77272,
      "longitude": 7.135546,
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1647188175,
      "ems": null
    },
    {
      "latitude": 50.773083,
      "longitude": 7.136307,
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1647188177,
      "ems": null
    },
    {
      "latitude": 50.773544,
      "longitude": 7.13755,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1647188181,
      "ems": null
    },
    {
      "latitude": 50.773819,
      "longitude": 7.138738,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1647188184,
      "ems": null
    },
    {
      "latitude": 50.773773,
      "longitude": 7.140074,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1647188187,
      "ems": null
    },
    {
      "latitude": 50.773544,
      "longitude": 7.141262,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1647188190,
      "ems": null
    },
    {
      "latitude": 50.773315,
      "longitude": 7.14241,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1647188193,
      "ems": null
    },
    {
      "latitude": 50.773129,
      "longitude": 7.143478,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1647188196,
      "ems": null
    },
    {
      "latitude": 50.772949,
      "longitude": 7.14438,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1647188199,
      "ems": null
    },
    {
      "latitude": 50.772709,
      "longitude": 7.145462,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647188202,
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
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647188205,
      "ems": null
    },
    {
      "latitude": 50.772217,
      "longitude": 7.147645,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647188208,
      "ems": null
    },
    {
      "latitude": 50.771988,
      "longitude": 7.148759,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1647188211,
      "ems": null
    },
    {
      "latitude": 50.771778,
      "longitude": 7.149734,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1647188213,
      "ems": null
    },
    {
      "latitude": 50.771591,
      "longitude": 7.15065,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647188216,
      "ems": null
    },
    {
      "latitude": 50.771027,
      "longitude": 7.153287,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647188223,
      "ems": null
    },
    {
      "latitude": 50.770615,
      "longitude": 7.15538,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1647188228,
      "ems": null
    },
    {
      "latitude": 50.769974,
      "longitude": 7.158261,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647188236,
      "ems": null
    },
    {
      "latitude": 50.769424,
      "longitude": 7.160859,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1647188246,
      "ems": null
    },
    {
      "latitude": 50.769173,
      "longitude": 7.162094,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 53.7,
        "kts": 29,
        "mph": 33.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1647188252,
      "ems": null
    },
    {
      "latitude": 50.768707,
      "longitude": 7.164078,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 53.7,
        "kts": 29,
        "mph": 33.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647188261,
      "ems": null
    },
    {
      "latitude": 50.767639,
      "longitude": 7.167837,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1647188287,
      "ems": null
    },
    {
      "latitude": 50.76741,
      "longitude": 7.167837,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1647188291,
      "ems": null
    }
  ]
};
