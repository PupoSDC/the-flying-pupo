import { Flight } from "../../../types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220703EDLWEDKB",
    callsign: "DEFCZ",
    name: "w/ Juli",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 6, 3, 15, 0).getTime(),
    arrival: new Date(2022, 6, 3, 15, 55).getTime(),
    singleEnginePistonTime: 55,
    picTime: 55,
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
    destination: {
      name: "Bonn Hangelar",
      code: "EDKB",
      position: {
        latitude: 50.7690965,
        longitude: 7.1620958,
      },
    },
    origin: {
      "name": "Dortmund Airport",
      "code": "EDLW",
      "position": {
        "latitude": 51.518311,
        "longitude": 7.612242,
       
      }
    }
  },
  track: [
    {
      "latitude": 51.522057,
      "longitude": 7.622823,
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
      "heading": 219,
      "squawk": "0",
      "timestamp": 1656861140,
      "ems": null
    },
    {
      "latitude": 51.521931,
      "longitude": 7.62247,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 241,
      "squawk": "0",
      "timestamp": 1656861158,
      "ems": null
    },
    {
      "latitude": 51.521816,
      "longitude": 7.622128,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 51.9,
        "kts": 28,
        "mph": 32.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 241,
      "squawk": "0",
      "timestamp": 1656861160,
      "ems": null
    },
    {
      "latitude": 51.521667,
      "longitude": 7.621728,
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
      "heading": 239,
      "squawk": "0",
      "timestamp": 1656861162,
      "ems": null
    },
    {
      "latitude": 51.521458,
      "longitude": 7.621136,
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
      "heading": 241,
      "squawk": "0",
      "timestamp": 1656861165,
      "ems": null
    },
    {
      "latitude": 51.521305,
      "longitude": 7.620716,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 241,
      "squawk": "0",
      "timestamp": 1656861166,
      "ems": null
    },
    {
      "latitude": 51.520523,
      "longitude": 7.618499,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 239,
      "squawk": "0",
      "timestamp": 1656861173,
      "ems": null
    },
    {
      "latitude": 51.519455,
      "longitude": 7.615585,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1656861179,
      "ems": null
    },
    {
      "latitude": 51.518478,
      "longitude": 7.612762,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1656861186,
      "ems": null
    },
    {
      "latitude": 51.517452,
      "longitude": 7.610016,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656861192,
      "ems": null
    },
    {
      "latitude": 51.516335,
      "longitude": 7.606583,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1656861199,
      "ems": null
    },
    {
      "latitude": 51.515404,
      "longitude": 7.603836,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656861206,
      "ems": null
    },
    {
      "latitude": 51.514572,
      "longitude": 7.6015,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1656861212,
      "ems": null
    },
    {
      "latitude": 51.51384,
      "longitude": 7.599199,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656861218,
      "ems": null
    },
    {
      "latitude": 51.513062,
      "longitude": 7.596898,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1656861224,
      "ems": null
    },
    {
      "latitude": 51.5121,
      "longitude": 7.594522,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1656861231,
      "ems": null
    },
    {
      "latitude": 51.511185,
      "longitude": 7.592221,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1656861236,
      "ems": null
    },
    {
      "latitude": 51.51059,
      "longitude": 7.590959,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1656861240,
      "ems": null
    },
    {
      "latitude": 51.510086,
      "longitude": 7.58992,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1656861243,
      "ems": null
    },
    {
      "latitude": 51.509537,
      "longitude": 7.588732,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1656861246,
      "ems": null
    },
    {
      "latitude": 51.508987,
      "longitude": 7.587767,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1656861249,
      "ems": null
    },
    {
      "latitude": 51.508347,
      "longitude": 7.586579,
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1656861252,
      "ems": null
    },
    {
      "latitude": 51.507725,
      "longitude": 7.585526,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1656861255,
      "ems": null
    },
    {
      "latitude": 51.507118,
      "longitude": 7.584534,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1656861257,
      "ems": null
    },
    {
      "latitude": 51.50642,
      "longitude": 7.583542,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1656861260,
      "ems": null
    },
    {
      "latitude": 51.505737,
      "longitude": 7.582645,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1656861263,
      "ems": null
    },
    {
      "latitude": 51.504883,
      "longitude": 7.581787,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1656861266,
      "ems": null
    },
    {
      "latitude": 51.503998,
      "longitude": 7.581329,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1656861269,
      "ems": null
    },
    {
      "latitude": 51.503067,
      "longitude": 7.5811,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1656861273,
      "ems": null
    },
    {
      "latitude": 51.502075,
      "longitude": 7.581086,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1656861276,
      "ems": null
    },
    {
      "latitude": 51.501068,
      "longitude": 7.581234,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1656861278,
      "ems": null
    },
    {
      "latitude": 51.499996,
      "longitude": 7.581711,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1656861282,
      "ems": null
    },
    {
      "latitude": 51.499008,
      "longitude": 7.582348,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1656861285,
      "ems": null
    },
    {
      "latitude": 51.498001,
      "longitude": 7.583313,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1656861288,
      "ems": null
    },
    {
      "latitude": 51.497204,
      "longitude": 7.584229,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1656861291,
      "ems": null
    },
    {
      "latitude": 51.496307,
      "longitude": 7.585392,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1656861294,
      "ems": null
    },
    {
      "latitude": 51.495392,
      "longitude": 7.586579,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1656861297,
      "ems": null
    },
    {
      "latitude": 51.494503,
      "longitude": 7.587738,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1656861300,
      "ems": null
    },
    {
      "latitude": 51.493664,
      "longitude": 7.588882,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1656861303,
      "ems": null
    },
    {
      "latitude": 51.492828,
      "longitude": 7.58992,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1656861306,
      "ems": null
    },
    {
      "latitude": 51.491848,
      "longitude": 7.590942,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1656861309,
      "ems": null
    },
    {
      "latitude": 51.490814,
      "longitude": 7.591924,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1656861312,
      "ems": null
    },
    {
      "latitude": 51.488918,
      "longitude": 7.593689,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1656861318,
      "ems": null
    },
    {
      "latitude": 51.488022,
      "longitude": 7.594448,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1656861321,
      "ems": null
    },
    {
      "latitude": 51.486916,
      "longitude": 7.59552,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1656861324,
      "ems": null
    },
    {
      "latitude": 51.485916,
      "longitude": 7.596452,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1656861327,
      "ems": null
    },
    {
      "latitude": 51.484909,
      "longitude": 7.597417,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1656861330,
      "ems": null
    },
    {
      "latitude": 51.483841,
      "longitude": 7.598343,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1656861333,
      "ems": null
    },
    {
      "latitude": 51.482758,
      "longitude": 7.599347,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1656861336,
      "ems": null
    },
    {
      "latitude": 51.480743,
      "longitude": 7.601203,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1656861342,
      "ems": null
    },
    {
      "latitude": 51.478546,
      "longitude": 7.603281,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1656861348,
      "ems": null
    },
    {
      "latitude": 51.476116,
      "longitude": 7.605591,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1656861354,
      "ems": null
    },
    {
      "latitude": 51.473877,
      "longitude": 7.608032,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1656861360,
      "ems": null
    },
    {
      "latitude": 51.472733,
      "longitude": 7.609294,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1656861363,
      "ems": null
    },
    {
      "latitude": 51.470535,
      "longitude": 7.611595,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1656861369,
      "ems": null
    },
    {
      "latitude": 51.468246,
      "longitude": 7.613896,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1656861375,
      "ems": null
    },
    {
      "latitude": 51.466003,
      "longitude": 7.616198,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1656861381,
      "ems": null
    },
    {
      "latitude": 51.463638,
      "longitude": 7.618484,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1656861387,
      "ems": null
    },
    {
      "latitude": 51.46138,
      "longitude": 7.6208,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1656861393,
      "ems": null
    },
    {
      "latitude": 51.459595,
      "longitude": 7.622581,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1656861398,
      "ems": null
    },
    {
      "latitude": 51.457169,
      "longitude": 7.625198,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1656861404,
      "ems": null
    },
    {
      "latitude": 51.454651,
      "longitude": 7.627555,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1656861411,
      "ems": null
    },
    {
      "latitude": 51.451767,
      "longitude": 7.630386,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1656861419,
      "ems": null
    },
    {
      "latitude": 51.449524,
      "longitude": 7.632826,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1656861425,
      "ems": null
    },
    {
      "latitude": 51.447205,
      "longitude": 7.63504,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1656861431,
      "ems": null
    },
    {
      "latitude": 51.444901,
      "longitude": 7.637206,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1656861437,
      "ems": null
    },
    {
      "latitude": 51.44199,
      "longitude": 7.639542,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1656861444,
      "ems": null
    },
    {
      "latitude": 51.441711,
      "longitude": 7.639771,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1656861445,
      "ems": null
    },
    {
      "latitude": 51.440315,
      "longitude": 7.640533,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1656861449,
      "ems": null
    },
    {
      "latitude": 51.43895,
      "longitude": 7.641214,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1656861452,
      "ems": null
    },
    {
      "latitude": 51.437756,
      "longitude": 7.641678,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1656861455,
      "ems": null
    },
    {
      "latitude": 51.436523,
      "longitude": 7.64203,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1656861458,
      "ems": null
    },
    {
      "latitude": 51.435242,
      "longitude": 7.642105,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1656861461,
      "ems": null
    },
    {
      "latitude": 51.433937,
      "longitude": 7.641907,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1656861464,
      "ems": null
    },
    {
      "latitude": 51.432678,
      "longitude": 7.641511,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1656861467,
      "ems": null
    },
    {
      "latitude": 51.431519,
      "longitude": 7.641068,
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1656861470,
      "ems": null
    },
    {
      "latitude": 51.430481,
      "longitude": 7.640471,
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1656861473,
      "ems": null
    },
    {
      "latitude": 51.42947,
      "longitude": 7.639694,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1656861476,
      "ems": null
    },
    {
      "latitude": 51.428444,
      "longitude": 7.638779,
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1656861479,
      "ems": null
    },
    {
      "latitude": 51.42728,
      "longitude": 7.637711,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1656861482,
      "ems": null
    },
    {
      "latitude": 51.42635,
      "longitude": 7.636871,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656861485,
      "ems": null
    },
    {
      "latitude": 51.425327,
      "longitude": 7.635727,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1656861488,
      "ems": null
    },
    {
      "latitude": 51.424397,
      "longitude": 7.634735,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1656861491,
      "ems": null
    },
    {
      "latitude": 51.423386,
      "longitude": 7.633642,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1656861494,
      "ems": null
    },
    {
      "latitude": 51.422531,
      "longitude": 7.632751,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1656861497,
      "ems": null
    },
    {
      "latitude": 51.421463,
      "longitude": 7.631683,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1656861500,
      "ems": null
    },
    {
      "latitude": 51.42041,
      "longitude": 7.63045,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1656861503,
      "ems": null
    },
    {
      "latitude": 51.419403,
      "longitude": 7.629411,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1656861506,
      "ems": null
    },
    {
      "latitude": 51.417526,
      "longitude": 7.627407,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1656861512,
      "ems": null
    },
    {
      "latitude": 51.415558,
      "longitude": 7.625254,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1656861518,
      "ems": null
    },
    {
      "latitude": 51.413727,
      "longitude": 7.623324,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656861524,
      "ems": null
    },
    {
      "latitude": 51.411804,
      "longitude": 7.621394,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656861530,
      "ems": null
    },
    {
      "latitude": 51.409916,
      "longitude": 7.619553,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1656861536,
      "ems": null
    },
    {
      "latitude": 51.408054,
      "longitude": 7.617493,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1656861542,
      "ems": null
    },
    {
      "latitude": 51.406265,
      "longitude": 7.615604,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1656861548,
      "ems": null
    },
    {
      "latitude": 51.403885,
      "longitude": 7.613228,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656861555,
      "ems": null
    },
    {
      "latitude": 51.401352,
      "longitude": 7.610703,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656861563,
      "ems": null
    },
    {
      "latitude": 51.399258,
      "longitude": 7.608719,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1656861569,
      "ems": null
    },
    {
      "latitude": 51.398392,
      "longitude": 7.607735,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1656861572,
      "ems": null
    },
    {
      "latitude": 51.397522,
      "longitude": 7.606547,
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1656861575,
      "ems": null
    },
    {
      "latitude": 51.396744,
      "longitude": 7.605438,
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1656861578,
      "ems": null
    },
    {
      "latitude": 51.395813,
      "longitude": 7.604065,
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1656861581,
      "ems": null
    },
    {
      "latitude": 51.394974,
      "longitude": 7.602844,
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1656861584,
      "ems": null
    },
    {
      "latitude": 51.394184,
      "longitude": 7.601624,
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1656861587,
      "ems": null
    },
    {
      "latitude": 51.393299,
      "longitude": 7.60025,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1656861590,
      "ems": null
    },
    {
      "latitude": 51.392441,
      "longitude": 7.598902,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1656861593,
      "ems": null
    },
    {
      "latitude": 51.391663,
      "longitude": 7.59764,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1656861596,
      "ems": null
    },
    {
      "latitude": 51.389759,
      "longitude": 7.594833,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1656861602,
      "ems": null
    },
    {
      "latitude": 51.38768,
      "longitude": 7.592221,
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
      "squawk": "7000",
      "timestamp": 1656861608,
      "ems": null
    },
    {
      "latitude": 51.386734,
      "longitude": 7.591171,
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
      "squawk": "7000",
      "timestamp": 1656861611,
      "ems": null
    },
    {
      "latitude": 51.385571,
      "longitude": 7.589874,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1656861614,
      "ems": null
    },
    {
      "latitude": 51.384499,
      "longitude": 7.588806,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1656861617,
      "ems": null
    },
    {
      "latitude": 51.383522,
      "longitude": 7.587814,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656861619,
      "ems": null
    },
    {
      "latitude": 51.382172,
      "longitude": 7.586441,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1656861623,
      "ems": null
    },
    {
      "latitude": 51.380814,
      "longitude": 7.585169,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656861627,
      "ems": null
    },
    {
      "latitude": 51.38031,
      "longitude": 7.584686,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656861631,
      "ems": null
    },
    {
      "latitude": 51.377792,
      "longitude": 7.582348,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1656861635,
      "ems": null
    },
    {
      "latitude": 51.375458,
      "longitude": 7.580418,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1656861641,
      "ems": null
    },
    {
      "latitude": 51.372253,
      "longitude": 7.577597,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1656861650,
      "ems": null
    },
    {
      "latitude": 51.370209,
      "longitude": 7.575912,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1656861656,
      "ems": null
    },
    {
      "latitude": 51.367275,
      "longitude": 7.573318,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1656861664,
      "ems": null
    },
    {
      "latitude": 51.364883,
      "longitude": 7.571584,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1656861670,
      "ems": null
    },
    {
      "latitude": 51.362991,
      "longitude": 7.569962,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1656861675,
      "ems": null
    },
    {
      "latitude": 51.360199,
      "longitude": 7.567749,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1656861682,
      "ems": null
    },
    {
      "latitude": 51.357925,
      "longitude": 7.565943,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1656861688,
      "ems": null
    },
    {
      "latitude": 51.355682,
      "longitude": 7.564161,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1656861694,
      "ems": null
    },
    {
      "latitude": 51.354519,
      "longitude": 7.563095,
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1656861697,
      "ems": null
    },
    {
      "latitude": 51.352425,
      "longitude": 7.561111,
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1656861703,
      "ems": null
    },
    {
      "latitude": 51.350285,
      "longitude": 7.55928,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1656861709,
      "ems": null
    },
    {
      "latitude": 51.348083,
      "longitude": 7.557406,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1656861715,
      "ems": null
    },
    {
      "latitude": 51.34586,
      "longitude": 7.555313,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1656861721,
      "ems": null
    },
    {
      "latitude": 51.343506,
      "longitude": 7.553175,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1656861727,
      "ems": null
    },
    {
      "latitude": 51.340603,
      "longitude": 7.550583,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1656861735,
      "ems": null
    },
    {
      "latitude": 51.338242,
      "longitude": 7.548498,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1656861741,
      "ems": null
    },
    {
      "latitude": 51.335861,
      "longitude": 7.546642,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1656861747,
      "ems": null
    },
    {
      "latitude": 51.333572,
      "longitude": 7.544708,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1656861752,
      "ems": null
    },
    {
      "latitude": 51.331421,
      "longitude": 7.542708,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1656861758,
      "ems": null
    },
    {
      "latitude": 51.328171,
      "longitude": 7.539597,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1656861767,
      "ems": null
    },
    {
      "latitude": 51.325241,
      "longitude": 7.536844,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1656861775,
      "ems": null
    },
    {
      "latitude": 51.32341,
      "longitude": 7.535211,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1656861780,
      "ems": null
    },
    {
      "latitude": 51.321991,
      "longitude": 7.5338,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1656861784,
      "ems": null
    },
    {
      "latitude": 51.320118,
      "longitude": 7.531967,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656861789,
      "ems": null
    },
    {
      "latitude": 51.317368,
      "longitude": 7.529272,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656861795,
      "ems": null
    },
    {
      "latitude": 51.315262,
      "longitude": 7.527194,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656861801,
      "ems": null
    },
    {
      "latitude": 51.312744,
      "longitude": 7.524596,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1656861809,
      "ems": null
    },
    {
      "latitude": 51.309921,
      "longitude": 7.521744,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656861816,
      "ems": null
    },
    {
      "latitude": 51.306702,
      "longitude": 7.518806,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1656861824,
      "ems": null
    },
    {
      "latitude": 51.30373,
      "longitude": 7.515945,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656861832,
      "ems": null
    },
    {
      "latitude": 51.301392,
      "longitude": 7.513609,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1656861838,
      "ems": null
    },
    {
      "latitude": 51.299332,
      "longitude": 7.511754,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "squawk": "7000",
      "timestamp": 1656861843,
      "ems": null
    },
    {
      "latitude": 51.296188,
      "longitude": 7.508545,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1656861852,
      "ems": null
    },
    {
      "latitude": 51.293209,
      "longitude": 7.505264,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1656861860,
      "ems": null
    },
    {
      "latitude": 51.290791,
      "longitude": 7.50267,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1656861868,
      "ems": null
    },
    {
      "latitude": 51.287979,
      "longitude": 7.500099,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1656861874,
      "ems": null
    },
    {
      "latitude": 51.285599,
      "longitude": 7.497946,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "squawk": "7000",
      "timestamp": 1656861880,
      "ems": null
    },
    {
      "latitude": 51.283401,
      "longitude": 7.496016,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1656861886,
      "ems": null
    },
    {
      "latitude": 51.282829,
      "longitude": 7.495499,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1656861888,
      "ems": null
    },
    {
      "latitude": 51.28027,
      "longitude": 7.492828,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1656861894,
      "ems": null
    },
    {
      "latitude": 51.277897,
      "longitude": 7.490616,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1656861901,
      "ems": null
    },
    {
      "latitude": 51.275711,
      "longitude": 7.488667,
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1656861907,
      "ems": null
    },
    {
      "latitude": 51.27417,
      "longitude": 7.487106,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656861912,
      "ems": null
    },
    {
      "latitude": 51.271957,
      "longitude": 7.48503,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1656861919,
      "ems": null
    },
    {
      "latitude": 51.269051,
      "longitude": 7.482452,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1656861925,
      "ems": null
    },
    {
      "latitude": 51.267517,
      "longitude": 7.481244,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1656861931,
      "ems": null
    },
    {
      "latitude": 51.26326,
      "longitude": 7.477384,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1656861941,
      "ems": null
    },
    {
      "latitude": 51.260998,
      "longitude": 7.475281,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1656861947,
      "ems": null
    },
    {
      "latitude": 51.259041,
      "longitude": 7.473221,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1656861954,
      "ems": null
    },
    {
      "latitude": 51.257767,
      "longitude": 7.471742,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1656861957,
      "ems": null
    },
    {
      "latitude": 51.254654,
      "longitude": 7.468922,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656861965,
      "ems": null
    },
    {
      "latitude": 51.252384,
      "longitude": 7.466583,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1656861973,
      "ems": null
    },
    {
      "latitude": 51.248707,
      "longitude": 7.462921,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656861981,
      "ems": null
    },
    {
      "latitude": 51.246799,
      "longitude": 7.461166,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1656861986,
      "ems": null
    },
    {
      "latitude": 51.244629,
      "longitude": 7.459049,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1656861992,
      "ems": null
    },
    {
      "latitude": 51.242249,
      "longitude": 7.456302,
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1656861999,
      "ems": null
    },
    {
      "latitude": 51.240608,
      "longitude": 7.454605,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656862004,
      "ems": null
    },
    {
      "latitude": 51.237396,
      "longitude": 7.451477,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1656862013,
      "ems": null
    },
    {
      "latitude": 51.234329,
      "longitude": 7.448359,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1656862021,
      "ems": null
    },
    {
      "latitude": 51.231621,
      "longitude": 7.445221,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1656862029,
      "ems": null
    },
    {
      "latitude": 51.23027,
      "longitude": 7.443695,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1656862033,
      "ems": null
    },
    {
      "latitude": 51.227341,
      "longitude": 7.440948,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1656862041,
      "ems": null
    },
    {
      "latitude": 51.22422,
      "longitude": 7.438278,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1656862049,
      "ems": null
    },
    {
      "latitude": 51.222885,
      "longitude": 7.43715,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1656862053,
      "ems": null
    },
    {
      "latitude": 51.22197,
      "longitude": 7.436408,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1656862056,
      "ems": null
    },
    {
      "latitude": 51.220596,
      "longitude": 7.435369,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1656862059,
      "ems": null
    },
    {
      "latitude": 51.219452,
      "longitude": 7.434404,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1656862062,
      "ems": null
    },
    {
      "latitude": 51.217285,
      "longitude": 7.432556,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1656862067,
      "ems": null
    },
    {
      "latitude": 51.215191,
      "longitude": 7.430954,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1656862074,
      "ems": null
    },
    {
      "latitude": 51.211899,
      "longitude": 7.428614,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1656862081,
      "ems": null
    },
    {
      "latitude": 51.20937,
      "longitude": 7.426834,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1656862087,
      "ems": null
    },
    {
      "latitude": 51.206909,
      "longitude": 7.42505,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1656862094,
      "ems": null
    },
    {
      "latitude": 51.205273,
      "longitude": 7.423706,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1656862099,
      "ems": null
    },
    {
      "latitude": 51.203644,
      "longitude": 7.421951,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1656862102,
      "ems": null
    },
    {
      "latitude": 51.202667,
      "longitude": 7.420807,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "squawk": "7000",
      "timestamp": 1656862105,
      "ems": null
    },
    {
      "latitude": 51.201508,
      "longitude": 7.419483,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "squawk": "7000",
      "timestamp": 1656862109,
      "ems": null
    },
    {
      "latitude": 51.200527,
      "longitude": 7.418442,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1656862111,
      "ems": null
    },
    {
      "latitude": 51.199966,
      "longitude": 7.417831,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1656862114,
      "ems": null
    },
    {
      "latitude": 51.198383,
      "longitude": 7.416077,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1656862117,
      "ems": null
    },
    {
      "latitude": 51.197174,
      "longitude": 7.414856,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656862120,
      "ems": null
    },
    {
      "latitude": 51.195602,
      "longitude": 7.413396,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656862125,
      "ems": null
    },
    {
      "latitude": 51.192444,
      "longitude": 7.41013,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1656862133,
      "ems": null
    },
    {
      "latitude": 51.189167,
      "longitude": 7.406845,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1656862142,
      "ems": null
    },
    {
      "latitude": 51.187775,
      "longitude": 7.405602,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1656862146,
      "ems": null
    },
    {
      "latitude": 51.186375,
      "longitude": 7.404099,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1656862150,
      "ems": null
    },
    {
      "latitude": 51.185444,
      "longitude": 7.402649,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1656862154,
      "ems": null
    },
    {
      "latitude": 51.184708,
      "longitude": 7.401296,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1656862156,
      "ems": null
    },
    {
      "latitude": 51.183975,
      "longitude": 7.399812,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1656862159,
      "ems": null
    },
    {
      "latitude": 51.183533,
      "longitude": 7.398911,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1656862163,
      "ems": null
    },
    {
      "latitude": 51.18251,
      "longitude": 7.397003,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1656862165,
      "ems": null
    },
    {
      "latitude": 51.181641,
      "longitude": 7.395209,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1656862169,
      "ems": null
    },
    {
      "latitude": 51.181412,
      "longitude": 7.39469,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1656862170,
      "ems": null
    },
    {
      "latitude": 51.181,
      "longitude": 7.393873,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1656862173,
      "ems": null
    },
    {
      "latitude": 51.180038,
      "longitude": 7.391795,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1656862175,
      "ems": null
    },
    {
      "latitude": 51.179298,
      "longitude": 7.390137,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1656862178,
      "ems": null
    },
    {
      "latitude": 51.178757,
      "longitude": 7.388825,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1656862180,
      "ems": null
    },
    {
      "latitude": 51.178024,
      "longitude": 7.387044,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1656862184,
      "ems": null
    },
    {
      "latitude": 51.177437,
      "longitude": 7.385406,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1656862186,
      "ems": null
    },
    {
      "latitude": 51.176697,
      "longitude": 7.383555,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1656862190,
      "ems": null
    },
    {
      "latitude": 51.176506,
      "longitude": 7.383118,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1656862191,
      "ems": null
    },
    {
      "latitude": 51.175781,
      "longitude": 7.381402,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1656862194,
      "ems": null
    },
    {
      "latitude": 51.1745,
      "longitude": 7.378358,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1656862199,
      "ems": null
    },
    {
      "latitude": 51.172874,
      "longitude": 7.375107,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1656862206,
      "ems": null
    },
    {
      "latitude": 51.170975,
      "longitude": 7.371233,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1656862213,
      "ems": null
    },
    {
      "latitude": 51.1698,
      "longitude": 7.369232,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1656862217,
      "ems": null
    },
    {
      "latitude": 51.168869,
      "longitude": 7.367706,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1656862221,
      "ems": null
    },
    {
      "latitude": 51.167751,
      "longitude": 7.365875,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1656862225,
      "ems": null
    },
    {
      "latitude": 51.166214,
      "longitude": 7.363141,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1656862230,
      "ems": null
    },
    {
      "latitude": 51.163788,
      "longitude": 7.358761,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1656862239,
      "ems": null
    },
    {
      "latitude": 51.162827,
      "longitude": 7.357277,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1656862242,
      "ems": null
    },
    {
      "latitude": 51.161839,
      "longitude": 7.35611,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1656862244,
      "ems": null
    },
    {
      "latitude": 51.160725,
      "longitude": 7.35466,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1656862248,
      "ems": null
    },
    {
      "latitude": 51.159744,
      "longitude": 7.353287,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1656862251,
      "ems": null
    },
    {
      "latitude": 51.158798,
      "longitude": 7.352006,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1656862254,
      "ems": null
    },
    {
      "latitude": 51.157791,
      "longitude": 7.35054,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1656862257,
      "ems": null
    },
    {
      "latitude": 51.15588,
      "longitude": 7.347641,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1656862263,
      "ems": null
    },
    {
      "latitude": 51.154018,
      "longitude": 7.344666,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1656862269,
      "ems": null
    },
    {
      "latitude": 51.153168,
      "longitude": 7.343247,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1656862272,
      "ems": null
    },
    {
      "latitude": 51.152115,
      "longitude": 7.341539,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1656862275,
      "ems": null
    },
    {
      "latitude": 51.151321,
      "longitude": 7.340164,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1656862278,
      "ems": null
    },
    {
      "latitude": 51.150295,
      "longitude": 7.338562,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1656862281,
      "ems": null
    },
    {
      "latitude": 51.148407,
      "longitude": 7.335378,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1656862287,
      "ems": null
    },
    {
      "latitude": 51.146805,
      "longitude": 7.332483,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1656862293,
      "ems": null
    },
    {
      "latitude": 51.145889,
      "longitude": 7.330702,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1656862296,
      "ems": null
    },
    {
      "latitude": 51.144291,
      "longitude": 7.327728,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1656862302,
      "ems": null
    },
    {
      "latitude": 51.142593,
      "longitude": 7.324763,
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1656862308,
      "ems": null
    },
    {
      "latitude": 51.140854,
      "longitude": 7.321794,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1656862314,
      "ems": null
    },
    {
      "latitude": 51.139168,
      "longitude": 7.318878,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1656862320,
      "ems": null
    },
    {
      "latitude": 51.137493,
      "longitude": 7.316055,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1656862326,
      "ems": null
    },
    {
      "latitude": 51.136421,
      "longitude": 7.314377,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1656862329,
      "ems": null
    },
    {
      "latitude": 51.135406,
      "longitude": 7.312886,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1656862332,
      "ems": null
    },
    {
      "latitude": 51.134399,
      "longitude": 7.311401,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1656862335,
      "ems": null
    },
    {
      "latitude": 51.133438,
      "longitude": 7.31014,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1656862338,
      "ems": null
    },
    {
      "latitude": 51.132339,
      "longitude": 7.308655,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1656862341,
      "ems": null
    },
    {
      "latitude": 51.13121,
      "longitude": 7.307129,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1656862344,
      "ems": null
    },
    {
      "latitude": 51.130325,
      "longitude": 7.305908,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1656862347,
      "ems": null
    },
    {
      "latitude": 51.12941,
      "longitude": 7.304795,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1656862349,
      "ems": null
    },
    {
      "latitude": 51.127949,
      "longitude": 7.303391,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1656862354,
      "ems": null
    },
    {
      "latitude": 51.12595,
      "longitude": 7.301788,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1656862358,
      "ems": null
    },
    {
      "latitude": 51.124191,
      "longitude": 7.300712,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1656862362,
      "ems": null
    },
    {
      "latitude": 51.122131,
      "longitude": 7.299652,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1656862366,
      "ems": null
    },
    {
      "latitude": 51.120667,
      "longitude": 7.29893,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1656862370,
      "ems": null
    },
    {
      "latitude": 51.118652,
      "longitude": 7.297966,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1656862374,
      "ems": null
    },
    {
      "latitude": 51.116638,
      "longitude": 7.297134,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1656862378,
      "ems": null
    },
    {
      "latitude": 51.114914,
      "longitude": 7.296448,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1656862382,
      "ems": null
    },
    {
      "latitude": 51.113194,
      "longitude": 7.295837,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1656862386,
      "ems": null
    },
    {
      "latitude": 51.111511,
      "longitude": 7.295293,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1656862390,
      "ems": null
    },
    {
      "latitude": 51.109314,
      "longitude": 7.294625,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1656862394,
      "ems": null
    },
    {
      "latitude": 51.107483,
      "longitude": 7.294179,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1656862398,
      "ems": null
    },
    {
      "latitude": 51.10611,
      "longitude": 7.293808,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1656862401,
      "ems": null
    },
    {
      "latitude": 51.104874,
      "longitude": 7.293437,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1656862404,
      "ems": null
    },
    {
      "latitude": 51.103638,
      "longitude": 7.293214,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1656862407,
      "ems": null
    },
    {
      "latitude": 51.101944,
      "longitude": 7.292769,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1656862410,
      "ems": null
    },
    {
      "latitude": 51.099369,
      "longitude": 7.292099,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1656862416,
      "ems": null
    },
    {
      "latitude": 51.096714,
      "longitude": 7.291336,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1656862422,
      "ems": null
    },
    {
      "latitude": 51.094059,
      "longitude": 7.290497,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 190,
      "squawk": "7040",
      "timestamp": 1656862428,
      "ems": null
    },
    {
      "latitude": 51.091499,
      "longitude": 7.289734,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 191,
      "squawk": "7040",
      "timestamp": 1656862434,
      "ems": null
    },
    {
      "latitude": 51.088623,
      "longitude": 7.288835,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 191,
      "squawk": "7040",
      "timestamp": 1656862440,
      "ems": null
    },
    {
      "latitude": 51.086102,
      "longitude": 7.287979,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 191,
      "squawk": "7040",
      "timestamp": 1656862446,
      "ems": null
    },
    {
      "latitude": 51.083447,
      "longitude": 7.287064,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 191,
      "squawk": "7040",
      "timestamp": 1656862452,
      "ems": null
    },
    {
      "latitude": 51.080704,
      "longitude": 7.286311,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 189,
      "squawk": "7040",
      "timestamp": 1656862458,
      "ems": null
    },
    {
      "latitude": 51.077953,
      "longitude": 7.285538,
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
      "heading": 188,
      "squawk": "7040",
      "timestamp": 1656862464,
      "ems": null
    },
    {
      "latitude": 51.075161,
      "longitude": 7.284927,
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
      "heading": 187,
      "squawk": "7040",
      "timestamp": 1656862470,
      "ems": null
    },
    {
      "latitude": 51.072319,
      "longitude": 7.284164,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 190,
      "squawk": "7040",
      "timestamp": 1656862476,
      "ems": null
    },
    {
      "latitude": 51.069622,
      "longitude": 7.283173,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 195,
      "squawk": "7040",
      "timestamp": 1656862482,
      "ems": null
    },
    {
      "latitude": 51.068272,
      "longitude": 7.282486,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 197,
      "squawk": "7040",
      "timestamp": 1656862485,
      "ems": null
    },
    {
      "latitude": 51.066921,
      "longitude": 7.281799,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 200,
      "squawk": "7040",
      "timestamp": 1656862488,
      "ems": null
    },
    {
      "latitude": 51.065552,
      "longitude": 7.280966,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 200,
      "squawk": "7040",
      "timestamp": 1656862491,
      "ems": null
    },
    {
      "latitude": 51.064266,
      "longitude": 7.280197,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 201,
      "squawk": "7040",
      "timestamp": 1656862494,
      "ems": null
    },
    {
      "latitude": 51.062962,
      "longitude": 7.279434,
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
      "heading": 200,
      "squawk": "7040",
      "timestamp": 1656862497,
      "ems": null
    },
    {
      "latitude": 51.061707,
      "longitude": 7.278665,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 200,
      "squawk": "7040",
      "timestamp": 1656862500,
      "ems": null
    },
    {
      "latitude": 51.060265,
      "longitude": 7.277756,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 202,
      "squawk": "7040",
      "timestamp": 1656862503,
      "ems": null
    },
    {
      "latitude": 51.059147,
      "longitude": 7.276993,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "7040",
      "timestamp": 1656862506,
      "ems": null
    },
    {
      "latitude": 51.057816,
      "longitude": 7.275993,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "7040",
      "timestamp": 1656862509,
      "ems": null
    },
    {
      "latitude": 51.056633,
      "longitude": 7.275085,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 204,
      "squawk": "7040",
      "timestamp": 1656862512,
      "ems": null
    },
    {
      "latitude": 51.055191,
      "longitude": 7.274017,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "7040",
      "timestamp": 1656862515,
      "ems": null
    },
    {
      "latitude": 51.052628,
      "longitude": 7.272186,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 205,
      "squawk": "7040",
      "timestamp": 1656862521,
      "ems": null
    },
    {
      "latitude": 51.050125,
      "longitude": 7.270277,
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
      "heading": 206,
      "squawk": "7040",
      "timestamp": 1656862527,
      "ems": null
    },
    {
      "latitude": 51.048904,
      "longitude": 7.269287,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 206,
      "squawk": "7040",
      "timestamp": 1656862530,
      "ems": null
    },
    {
      "latitude": 51.046482,
      "longitude": 7.267303,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 208,
      "squawk": "7040",
      "timestamp": 1656862536,
      "ems": null
    },
    {
      "latitude": 51.044205,
      "longitude": 7.265396,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 206,
      "squawk": "7040",
      "timestamp": 1656862542,
      "ems": null
    },
    {
      "latitude": 51.041885,
      "longitude": 7.263522,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 207,
      "squawk": "7040",
      "timestamp": 1656862548,
      "ems": null
    },
    {
      "latitude": 51.039501,
      "longitude": 7.261429,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 209,
      "squawk": "7040",
      "timestamp": 1656862554,
      "ems": null
    },
    {
      "latitude": 51.037079,
      "longitude": 7.259365,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 207,
      "squawk": "7040",
      "timestamp": 1656862560,
      "ems": null
    },
    {
      "latitude": 51.034752,
      "longitude": 7.257462,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 207,
      "squawk": "7040",
      "timestamp": 1656862566,
      "ems": null
    },
    {
      "latitude": 51.032471,
      "longitude": 7.255554,
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
      "heading": 208,
      "squawk": "7040",
      "timestamp": 1656862572,
      "ems": null
    },
    {
      "latitude": 51.03035,
      "longitude": 7.253649,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 210,
      "squawk": "7040",
      "timestamp": 1656862578,
      "ems": null
    },
    {
      "latitude": 51.028049,
      "longitude": 7.251587,
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
      "heading": 208,
      "squawk": "7040",
      "timestamp": 1656862584,
      "ems": null
    },
    {
      "latitude": 51.025818,
      "longitude": 7.249492,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "squawk": "7040",
      "timestamp": 1656862590,
      "ems": null
    },
    {
      "latitude": 51.023487,
      "longitude": 7.247467,
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
      "heading": 207,
      "squawk": "7040",
      "timestamp": 1656862596,
      "ems": null
    },
    {
      "latitude": 51.021057,
      "longitude": 7.245335,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "7040",
      "timestamp": 1656862602,
      "ems": null
    },
    {
      "latitude": 51.019043,
      "longitude": 7.243479,
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
      "heading": 210,
      "squawk": "7040",
      "timestamp": 1656862608,
      "ems": null
    },
    {
      "latitude": 51.015804,
      "longitude": 7.240677,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 207,
      "squawk": "7040",
      "timestamp": 1656862617,
      "ems": null
    },
    {
      "latitude": 51.012955,
      "longitude": 7.238431,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 206,
      "squawk": "7040",
      "timestamp": 1656862623,
      "ems": null
    },
    {
      "latitude": 51.010895,
      "longitude": 7.236724,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 207,
      "squawk": "7040",
      "timestamp": 1656862629,
      "ems": null
    },
    {
      "latitude": 51.009109,
      "longitude": 7.23524,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 207,
      "squawk": "7040",
      "timestamp": 1656862635,
      "ems": null
    },
    {
      "latitude": 51.005997,
      "longitude": 7.232567,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 208,
      "squawk": "7040",
      "timestamp": 1656862641,
      "ems": null
    },
    {
      "latitude": 51.003563,
      "longitude": 7.23053,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 207,
      "squawk": "7040",
      "timestamp": 1656862647,
      "ems": null
    },
    {
      "latitude": 51.001099,
      "longitude": 7.228707,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 203,
      "squawk": "7040",
      "timestamp": 1656862654,
      "ems": null
    },
    {
      "latitude": 50.998581,
      "longitude": 7.227222,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 199,
      "squawk": "7040",
      "timestamp": 1656862660,
      "ems": null
    },
    {
      "latitude": 50.997482,
      "longitude": 7.226628,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 196,
      "squawk": "7040",
      "timestamp": 1656862662,
      "ems": null
    },
    {
      "latitude": 50.996487,
      "longitude": 7.226181,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 197,
      "squawk": "7040",
      "timestamp": 1656862665,
      "ems": null
    },
    {
      "latitude": 50.994919,
      "longitude": 7.225292,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 200,
      "squawk": "7040",
      "timestamp": 1656862668,
      "ems": null
    },
    {
      "latitude": 50.992493,
      "longitude": 7.223288,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 212,
      "squawk": "7040",
      "timestamp": 1656862674,
      "ems": null
    },
    {
      "latitude": 50.991505,
      "longitude": 7.22229,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 215,
      "squawk": "7040",
      "timestamp": 1656862678,
      "ems": null
    },
    {
      "latitude": 50.990662,
      "longitude": 7.221284,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 215,
      "squawk": "7040",
      "timestamp": 1656862680,
      "ems": null
    },
    {
      "latitude": 50.989334,
      "longitude": 7.219725,
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
      "heading": 216,
      "squawk": "7040",
      "timestamp": 1656862684,
      "ems": null
    },
    {
      "latitude": 50.98851,
      "longitude": 7.21876,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 215,
      "squawk": "7040",
      "timestamp": 1656862686,
      "ems": null
    },
    {
      "latitude": 50.987686,
      "longitude": 7.217795,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 216,
      "squawk": "7040",
      "timestamp": 1656862689,
      "ems": null
    },
    {
      "latitude": 50.986572,
      "longitude": 7.216492,
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
      "heading": 217,
      "squawk": "7040",
      "timestamp": 1656862693,
      "ems": null
    },
    {
      "latitude": 50.985535,
      "longitude": 7.215271,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 215,
      "squawk": "7040",
      "timestamp": 1656862695,
      "ems": null
    },
    {
      "latitude": 50.984428,
      "longitude": 7.21405,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 215,
      "squawk": "7040",
      "timestamp": 1656862698,
      "ems": null
    },
    {
      "latitude": 50.983429,
      "longitude": 7.212895,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 215,
      "squawk": "7040",
      "timestamp": 1656862702,
      "ems": null
    },
    {
      "latitude": 50.981312,
      "longitude": 7.210388,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 218,
      "squawk": "7040",
      "timestamp": 1656862708,
      "ems": null
    },
    {
      "latitude": 50.979401,
      "longitude": 7.208023,
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
      "heading": 215,
      "squawk": "7040",
      "timestamp": 1656862714,
      "ems": null
    },
    {
      "latitude": 50.977249,
      "longitude": 7.205695,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 214,
      "squawk": "7040",
      "timestamp": 1656862719,
      "ems": null
    },
    {
      "latitude": 50.975098,
      "longitude": 7.20332,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 214,
      "squawk": "7040",
      "timestamp": 1656862726,
      "ems": null
    },
    {
      "latitude": 50.972946,
      "longitude": 7.201093,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 213,
      "squawk": "7040",
      "timestamp": 1656862731,
      "ems": null
    },
    {
      "latitude": 50.970657,
      "longitude": 7.198717,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 213,
      "squawk": "7040",
      "timestamp": 1656862737,
      "ems": null
    },
    {
      "latitude": 50.969395,
      "longitude": 7.197418,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 211,
      "squawk": "7040",
      "timestamp": 1656862741,
      "ems": null
    },
    {
      "latitude": 50.967113,
      "longitude": 7.195282,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 210,
      "squawk": "7040",
      "timestamp": 1656862746,
      "ems": null
    },
    {
      "latitude": 50.965996,
      "longitude": 7.194214,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 209,
      "squawk": "7040",
      "timestamp": 1656862750,
      "ems": null
    },
    {
      "latitude": 50.964787,
      "longitude": 7.193222,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 208,
      "squawk": "7040",
      "timestamp": 1656862752,
      "ems": null
    },
    {
      "latitude": 50.962505,
      "longitude": 7.191238,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 208,
      "squawk": "7040",
      "timestamp": 1656862758,
      "ems": null
    },
    {
      "latitude": 50.961292,
      "longitude": 7.190247,
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
      "heading": 207,
      "squawk": "7040",
      "timestamp": 1656862762,
      "ems": null
    },
    {
      "latitude": 50.960083,
      "longitude": 7.189216,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "7040",
      "timestamp": 1656862765,
      "ems": null
    },
    {
      "latitude": 50.957802,
      "longitude": 7.187195,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 209,
      "squawk": "7040",
      "timestamp": 1656862771,
      "ems": null
    },
    {
      "latitude": 50.955429,
      "longitude": 7.184982,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 211,
      "squawk": "7040",
      "timestamp": 1656862777,
      "ems": null
    },
    {
      "latitude": 50.953217,
      "longitude": 7.182906,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 210,
      "squawk": "7040",
      "timestamp": 1656862783,
      "ems": null
    },
    {
      "latitude": 50.950882,
      "longitude": 7.180604,
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
      "heading": 210,
      "squawk": "7040",
      "timestamp": 1656862789,
      "ems": null
    },
    {
      "latitude": 50.948593,
      "longitude": 7.1786,
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
      "heading": 207,
      "squawk": "7040",
      "timestamp": 1656862795,
      "ems": null
    },
    {
      "latitude": 50.947266,
      "longitude": 7.17771,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 201,
      "squawk": "7040",
      "timestamp": 1656862798,
      "ems": null
    },
    {
      "latitude": 50.946072,
      "longitude": 7.1772,
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
      "heading": 193,
      "squawk": "7040",
      "timestamp": 1656862801,
      "ems": null
    },
    {
      "latitude": 50.944675,
      "longitude": 7.176666,
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
      "heading": 192,
      "squawk": "7040",
      "timestamp": 1656862804,
      "ems": null
    },
    {
      "latitude": 50.94342,
      "longitude": 7.176225,
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
      "heading": 193,
      "squawk": "7040",
      "timestamp": 1656862807,
      "ems": null
    },
    {
      "latitude": 50.94202,
      "longitude": 7.175674,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 192,
      "squawk": "7040",
      "timestamp": 1656862810,
      "ems": null
    },
    {
      "latitude": 50.940628,
      "longitude": 7.175186,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 193,
      "squawk": "7040",
      "timestamp": 1656862813,
      "ems": null
    },
    {
      "latitude": 50.939274,
      "longitude": 7.174606,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "7040",
      "timestamp": 1656862816,
      "ems": null
    },
    {
      "latitude": 50.937973,
      "longitude": 7.174072,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 196,
      "squawk": "7040",
      "timestamp": 1656862819,
      "ems": null
    },
    {
      "latitude": 50.936668,
      "longitude": 7.173462,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 196,
      "squawk": "7040",
      "timestamp": 1656862822,
      "ems": null
    },
    {
      "latitude": 50.935547,
      "longitude": 7.172959,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 196,
      "squawk": "7040",
      "timestamp": 1656862825,
      "ems": null
    },
    {
      "latitude": 50.932755,
      "longitude": 7.171548,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 197,
      "squawk": "7040",
      "timestamp": 1656862831,
      "ems": null
    },
    {
      "latitude": 50.931313,
      "longitude": 7.170715,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 199,
      "squawk": "7040",
      "timestamp": 1656862834,
      "ems": null
    },
    {
      "latitude": 50.930099,
      "longitude": 7.170064,
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
      "heading": 199,
      "squawk": "7040",
      "timestamp": 1656862837,
      "ems": null
    },
    {
      "latitude": 50.928848,
      "longitude": 7.169342,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 200,
      "squawk": "7040",
      "timestamp": 1656862840,
      "ems": null
    },
    {
      "latitude": 50.927399,
      "longitude": 7.168431,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 201,
      "squawk": "7040",
      "timestamp": 1656862843,
      "ems": null
    },
    {
      "latitude": 50.926117,
      "longitude": 7.16754,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 203,
      "squawk": "7040",
      "timestamp": 1656862846,
      "ems": null
    },
    {
      "latitude": 50.924835,
      "longitude": 7.166649,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 204,
      "squawk": "7040",
      "timestamp": 1656862849,
      "ems": null
    },
    {
      "latitude": 50.923553,
      "longitude": 7.165833,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 202,
      "squawk": "7040",
      "timestamp": 1656862852,
      "ems": null
    },
    {
      "latitude": 50.922283,
      "longitude": 7.164917,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 201,
      "squawk": "7040",
      "timestamp": 1656862855,
      "ems": null
    },
    {
      "latitude": 50.919724,
      "longitude": 7.163391,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 202,
      "squawk": "7040",
      "timestamp": 1656862861,
      "ems": null
    },
    {
      "latitude": 50.917465,
      "longitude": 7.161898,
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
      "heading": 200,
      "squawk": "7040",
      "timestamp": 1656862867,
      "ems": null
    },
    {
      "latitude": 50.915359,
      "longitude": 7.160636,
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
      "heading": 200,
      "squawk": "7040",
      "timestamp": 1656862873,
      "ems": null
    },
    {
      "latitude": 50.913017,
      "longitude": 7.159195,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 199,
      "squawk": "7040",
      "timestamp": 1656862879,
      "ems": null
    },
    {
      "latitude": 50.910736,
      "longitude": 7.15789,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 201,
      "squawk": "7040",
      "timestamp": 1656862885,
      "ems": null
    },
    {
      "latitude": 50.908401,
      "longitude": 7.156405,
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
      "heading": 200,
      "squawk": "7040",
      "timestamp": 1656862891,
      "ems": null
    },
    {
      "latitude": 50.906021,
      "longitude": 7.155069,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 199,
      "squawk": "7040",
      "timestamp": 1656862897,
      "ems": null
    },
    {
      "latitude": 50.904594,
      "longitude": 7.154388,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 193,
      "squawk": "7040",
      "timestamp": 1656862900,
      "ems": null
    },
    {
      "latitude": 50.903427,
      "longitude": 7.154236,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 181,
      "squawk": "7040",
      "timestamp": 1656862903,
      "ems": null
    },
    {
      "latitude": 50.901985,
      "longitude": 7.154465,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 168,
      "squawk": "7040",
      "timestamp": 1656862906,
      "ems": null
    },
    {
      "latitude": 50.90073,
      "longitude": 7.155151,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 155,
      "squawk": "7040",
      "timestamp": 1656862909,
      "ems": null
    },
    {
      "latitude": 50.899334,
      "longitude": 7.156525,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 144,
      "squawk": "7040",
      "timestamp": 1656862912,
      "ems": null
    },
    {
      "latitude": 50.898422,
      "longitude": 7.157741,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 140,
      "squawk": "7040",
      "timestamp": 1656862915,
      "ems": null
    },
    {
      "latitude": 50.897099,
      "longitude": 7.159348,
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
      "heading": 141,
      "squawk": "7040",
      "timestamp": 1656862918,
      "ems": null
    },
    {
      "latitude": 50.896133,
      "longitude": 7.16071,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 140,
      "squawk": "7040",
      "timestamp": 1656862921,
      "ems": null
    },
    {
      "latitude": 50.89505,
      "longitude": 7.162094,
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
      "heading": 140,
      "squawk": "7040",
      "timestamp": 1656862924,
      "ems": null
    },
    {
      "latitude": 50.893799,
      "longitude": 7.16368,
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
      "heading": 140,
      "squawk": "7040",
      "timestamp": 1656862927,
      "ems": null
    },
    {
      "latitude": 50.892769,
      "longitude": 7.16507,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 140,
      "squawk": "7040",
      "timestamp": 1656862930,
      "ems": null
    },
    {
      "latitude": 50.891693,
      "longitude": 7.166501,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 140,
      "squawk": "7040",
      "timestamp": 1656862933,
      "ems": null
    },
    {
      "latitude": 50.890347,
      "longitude": 7.168274,
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
      "heading": 139,
      "squawk": "7040",
      "timestamp": 1656862936,
      "ems": null
    },
    {
      "latitude": 50.889324,
      "longitude": 7.169647,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 138,
      "squawk": "7040",
      "timestamp": 1656862939,
      "ems": null
    },
    {
      "latitude": 50.888161,
      "longitude": 7.171326,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 139,
      "squawk": "7040",
      "timestamp": 1656862942,
      "ems": null
    },
    {
      "latitude": 50.886063,
      "longitude": 7.174147,
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
      "heading": 138,
      "squawk": "7040",
      "timestamp": 1656862948,
      "ems": null
    },
    {
      "latitude": 50.88382,
      "longitude": 7.177339,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 137,
      "squawk": "7040",
      "timestamp": 1656862954,
      "ems": null
    },
    {
      "latitude": 50.881504,
      "longitude": 7.180634,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 139,
      "squawk": "7040",
      "timestamp": 1656862960,
      "ems": null
    },
    {
      "latitude": 50.879128,
      "longitude": 7.18338,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 144,
      "squawk": "7040",
      "timestamp": 1656862966,
      "ems": null
    },
    {
      "latitude": 50.877918,
      "longitude": 7.18483,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 143,
      "squawk": "7040",
      "timestamp": 1656862969,
      "ems": null
    },
    {
      "latitude": 50.875351,
      "longitude": 7.187657,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 146,
      "squawk": "7040",
      "timestamp": 1656862975,
      "ems": null
    },
    {
      "latitude": 50.874573,
      "longitude": 7.188473,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 145,
      "squawk": "7040",
      "timestamp": 1656862978,
      "ems": null
    },
    {
      "latitude": 50.87289,
      "longitude": 7.190247,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 147,
      "squawk": "7040",
      "timestamp": 1656862981,
      "ems": null
    },
    {
      "latitude": 50.87146,
      "longitude": 7.191591,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 149,
      "squawk": "7040",
      "timestamp": 1656862984,
      "ems": null
    },
    {
      "latitude": 50.870235,
      "longitude": 7.192688,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 151,
      "squawk": "7040",
      "timestamp": 1656862987,
      "ems": null
    },
    {
      "latitude": 50.868942,
      "longitude": 7.193744,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 152,
      "squawk": "7040",
      "timestamp": 1656862990,
      "ems": null
    },
    {
      "latitude": 50.867538,
      "longitude": 7.194824,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 157,
      "squawk": "7040",
      "timestamp": 1656862993,
      "ems": null
    },
    {
      "latitude": 50.866013,
      "longitude": 7.1956,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 161,
      "squawk": "7040",
      "timestamp": 1656862996,
      "ems": null
    },
    {
      "latitude": 50.864639,
      "longitude": 7.196193,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 166,
      "squawk": "7040",
      "timestamp": 1656862999,
      "ems": null
    },
    {
      "latitude": 50.8629,
      "longitude": 7.196787,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 168,
      "squawk": "7040",
      "timestamp": 1656863002,
      "ems": null
    },
    {
      "latitude": 50.861389,
      "longitude": 7.197233,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 171,
      "squawk": "7040",
      "timestamp": 1656863005,
      "ems": null
    },
    {
      "latitude": 50.859924,
      "longitude": 7.197455,
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
      "heading": 176,
      "squawk": "7040",
      "timestamp": 1656863008,
      "ems": null
    },
    {
      "latitude": 50.858692,
      "longitude": 7.197266,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 186,
      "squawk": "7040",
      "timestamp": 1656863011,
      "ems": null
    },
    {
      "latitude": 50.857452,
      "longitude": 7.196713,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 199,
      "squawk": "7040",
      "timestamp": 1656863014,
      "ems": null
    },
    {
      "latitude": 50.856354,
      "longitude": 7.196045,
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
      "heading": 204,
      "squawk": "7040",
      "timestamp": 1656863017,
      "ems": null
    },
    {
      "latitude": 50.855389,
      "longitude": 7.195282,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 208,
      "squawk": "7040",
      "timestamp": 1656863020,
      "ems": null
    },
    {
      "latitude": 50.853943,
      "longitude": 7.193909,
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
      "heading": 212,
      "squawk": "7040",
      "timestamp": 1656863023,
      "ems": null
    },
    {
      "latitude": 50.852966,
      "longitude": 7.192764,
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
      "heading": 216,
      "squawk": "7040",
      "timestamp": 1656863026,
      "ems": null
    },
    {
      "latitude": 50.851944,
      "longitude": 7.19162,
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
      "heading": 215,
      "squawk": "7040",
      "timestamp": 1656863029,
      "ems": null
    },
    {
      "latitude": 50.851105,
      "longitude": 7.190704,
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
      "heading": 215,
      "squawk": "7040",
      "timestamp": 1656863032,
      "ems": null
    },
    {
      "latitude": 50.849895,
      "longitude": 7.189331,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 215,
      "squawk": "7040",
      "timestamp": 1656863035,
      "ems": null
    },
    {
      "latitude": 50.848869,
      "longitude": 7.188187,
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
      "heading": 218,
      "squawk": "7040",
      "timestamp": 1656863038,
      "ems": null
    },
    {
      "latitude": 50.847984,
      "longitude": 7.187042,
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
      "heading": 217,
      "squawk": "7040",
      "timestamp": 1656863041,
      "ems": null
    },
    {
      "latitude": 50.847015,
      "longitude": 7.185875,
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
      "heading": 217,
      "squawk": "7040",
      "timestamp": 1656863044,
      "ems": null
    },
    {
      "latitude": 50.84589,
      "longitude": 7.184448,
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
      "heading": 219,
      "squawk": "7040",
      "timestamp": 1656863047,
      "ems": null
    },
    {
      "latitude": 50.8451,
      "longitude": 7.18338,
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
      "heading": 220,
      "squawk": "7040",
      "timestamp": 1656863050,
      "ems": null
    },
    {
      "latitude": 50.844131,
      "longitude": 7.182089,
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
      "heading": 220,
      "squawk": "7040",
      "timestamp": 1656863053,
      "ems": null
    },
    {
      "latitude": 50.842209,
      "longitude": 7.179565,
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
      "heading": 219,
      "squawk": "7040",
      "timestamp": 1656863059,
      "ems": null
    },
    {
      "latitude": 50.840351,
      "longitude": 7.177048,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 221,
      "squawk": "7040",
      "timestamp": 1656863065,
      "ems": null
    },
    {
      "latitude": 50.839653,
      "longitude": 7.17598,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 224,
      "squawk": "7040",
      "timestamp": 1656863068,
      "ems": null
    },
    {
      "latitude": 50.838593,
      "longitude": 7.174369,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 224,
      "squawk": "7040",
      "timestamp": 1656863071,
      "ems": null
    },
    {
      "latitude": 50.837769,
      "longitude": 7.173107,
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
      "heading": 222,
      "squawk": "7040",
      "timestamp": 1656863074,
      "ems": null
    },
    {
      "latitude": 50.835983,
      "longitude": 7.170509,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 222,
      "squawk": "7040",
      "timestamp": 1656863080,
      "ems": null
    },
    {
      "latitude": 50.83416,
      "longitude": 7.167969,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 222,
      "squawk": "7040",
      "timestamp": 1656863086,
      "ems": null
    },
    {
      "latitude": 50.83239,
      "longitude": 7.165375,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 224,
      "squawk": "7040",
      "timestamp": 1656863092,
      "ems": null
    },
    {
      "latitude": 50.830582,
      "longitude": 7.162715,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 222,
      "squawk": "7040",
      "timestamp": 1656863098,
      "ems": null
    },
    {
      "latitude": 50.828842,
      "longitude": 7.160191,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 221,
      "squawk": "7040",
      "timestamp": 1656863104,
      "ems": null
    },
    {
      "latitude": 50.826874,
      "longitude": 7.157518,
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
      "heading": 220,
      "squawk": "7040",
      "timestamp": 1656863110,
      "ems": null
    },
    {
      "latitude": 50.824997,
      "longitude": 7.154921,
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
      "heading": 221,
      "squawk": "7040",
      "timestamp": 1656863116,
      "ems": null
    },
    {
      "latitude": 50.823078,
      "longitude": 7.152405,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 219,
      "squawk": "7040",
      "timestamp": 1656863122,
      "ems": null
    },
    {
      "latitude": 50.821217,
      "longitude": 7.149734,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 223,
      "squawk": "7040",
      "timestamp": 1656863128,
      "ems": null
    },
    {
      "latitude": 50.819412,
      "longitude": 7.147052,
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
      "heading": 222,
      "squawk": "7040",
      "timestamp": 1656863134,
      "ems": null
    },
    {
      "latitude": 50.81749,
      "longitude": 7.144305,
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
      "heading": 223,
      "squawk": "7040",
      "timestamp": 1656863140,
      "ems": null
    },
    {
      "latitude": 50.815586,
      "longitude": 7.141418,
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
      "heading": 222,
      "squawk": "7040",
      "timestamp": 1656863146,
      "ems": null
    },
    {
      "latitude": 50.81377,
      "longitude": 7.138824,
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
      "heading": 221,
      "squawk": "7040",
      "timestamp": 1656863152,
      "ems": null
    },
    {
      "latitude": 50.811859,
      "longitude": 7.13614,
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
      "heading": 221,
      "squawk": "7040",
      "timestamp": 1656863158,
      "ems": null
    },
    {
      "latitude": 50.809952,
      "longitude": 7.13356,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 220,
      "squawk": "7040",
      "timestamp": 1656863164,
      "ems": null
    },
    {
      "latitude": 50.807968,
      "longitude": 7.130869,
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
      "heading": 221,
      "squawk": "7040",
      "timestamp": 1656863170,
      "ems": null
    },
    {
      "latitude": 50.806183,
      "longitude": 7.128494,
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
      "heading": 219,
      "squawk": "7040",
      "timestamp": 1656863176,
      "ems": null
    },
    {
      "latitude": 50.805019,
      "longitude": 7.126999,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 217,
      "squawk": "7040",
      "timestamp": 1656863179,
      "ems": null
    },
    {
      "latitude": 50.802979,
      "longitude": 7.124337,
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
      "heading": 220,
      "squawk": "7040",
      "timestamp": 1656863185,
      "ems": null
    },
    {
      "latitude": 50.800873,
      "longitude": 7.12159,
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
      "heading": 220,
      "squawk": "7040",
      "timestamp": 1656863191,
      "ems": null
    },
    {
      "latitude": 50.798813,
      "longitude": 7.11877,
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
      "squawk": "7040",
      "timestamp": 1656863197,
      "ems": null
    },
    {
      "latitude": 50.796871,
      "longitude": 7.116013,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 224,
      "squawk": "7040",
      "timestamp": 1656863203,
      "ems": null
    },
    {
      "latitude": 50.795975,
      "longitude": 7.114538,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 227,
      "squawk": "7040",
      "timestamp": 1656863206,
      "ems": null
    },
    {
      "latitude": 50.79501,
      "longitude": 7.112885,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 226,
      "squawk": "7040",
      "timestamp": 1656863209,
      "ems": null
    },
    {
      "latitude": 50.794125,
      "longitude": 7.111435,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 226,
      "squawk": "7040",
      "timestamp": 1656863212,
      "ems": null
    },
    {
      "latitude": 50.793194,
      "longitude": 7.109909,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 225,
      "squawk": "7040",
      "timestamp": 1656863215,
      "ems": null
    },
    {
      "latitude": 50.792313,
      "longitude": 7.108525,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 225,
      "squawk": "7040",
      "timestamp": 1656863218,
      "ems": null
    },
    {
      "latitude": 50.79147,
      "longitude": 7.107162,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1656863221,
      "ems": null
    },
    {
      "latitude": 50.790634,
      "longitude": 7.105789,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1656863224,
      "ems": null
    },
    {
      "latitude": 50.789658,
      "longitude": 7.104072,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1656863227,
      "ems": null
    },
    {
      "latitude": 50.788879,
      "longitude": 7.102513,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1656863230,
      "ems": null
    },
    {
      "latitude": 50.787323,
      "longitude": 7.099692,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1656863236,
      "ems": null
    },
    {
      "latitude": 50.785606,
      "longitude": 7.096329,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1656863242,
      "ems": null
    },
    {
      "latitude": 50.784805,
      "longitude": 7.094718,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1656863245,
      "ems": null
    },
    {
      "latitude": 50.783157,
      "longitude": 7.091749,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1656863251,
      "ems": null
    },
    {
      "latitude": 50.782425,
      "longitude": 7.090339,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1656863254,
      "ems": null
    },
    {
      "latitude": 50.780914,
      "longitude": 7.087815,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1656863260,
      "ems": null
    },
    {
      "latitude": 50.779999,
      "longitude": 7.086924,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1656863263,
      "ems": null
    },
    {
      "latitude": 50.779182,
      "longitude": 7.086334,
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1656863266,
      "ems": null
    },
    {
      "latitude": 50.778065,
      "longitude": 7.085724,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1656863269,
      "ems": null
    },
    {
      "latitude": 50.776932,
      "longitude": 7.085514,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1656863272,
      "ems": null
    },
    {
      "latitude": 50.775833,
      "longitude": 7.085588,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1656863275,
      "ems": null
    },
    {
      "latitude": 50.77478,
      "longitude": 7.086033,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1656863278,
      "ems": null
    },
    {
      "latitude": 50.773865,
      "longitude": 7.086627,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1656863281,
      "ems": null
    },
    {
      "latitude": 50.77272,
      "longitude": 7.08774,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1656863284,
      "ems": null
    },
    {
      "latitude": 50.771732,
      "longitude": 7.088852,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1656863287,
      "ems": null
    },
    {
      "latitude": 50.770802,
      "longitude": 7.089996,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1656863290,
      "ems": null
    },
    {
      "latitude": 50.770065,
      "longitude": 7.090932,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1656863293,
      "ems": null
    },
    {
      "latitude": 50.769104,
      "longitude": 7.092195,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1656863296,
      "ems": null
    },
    {
      "latitude": 50.768143,
      "longitude": 7.093531,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1656863299,
      "ems": null
    },
    {
      "latitude": 50.76717,
      "longitude": 7.094727,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1656863302,
      "ems": null
    },
    {
      "latitude": 50.766285,
      "longitude": 7.095947,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1656863305,
      "ems": null
    },
    {
      "latitude": 50.765308,
      "longitude": 7.097244,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1656863308,
      "ems": null
    },
    {
      "latitude": 50.764526,
      "longitude": 7.09843,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1656863311,
      "ems": null
    },
    {
      "latitude": 50.763584,
      "longitude": 7.099915,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1656863315,
      "ems": null
    },
    {
      "latitude": 50.762787,
      "longitude": 7.101102,
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1656863317,
      "ems": null
    },
    {
      "latitude": 50.762142,
      "longitude": 7.102356,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1656863320,
      "ems": null
    },
    {
      "latitude": 50.761185,
      "longitude": 7.104146,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1656863323,
      "ems": null
    },
    {
      "latitude": 50.760605,
      "longitude": 7.105255,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656863326,
      "ems": null
    },
    {
      "latitude": 50.759861,
      "longitude": 7.106934,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1656863329,
      "ems": null
    },
    {
      "latitude": 50.759262,
      "longitude": 7.108822,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1656863333,
      "ems": null
    },
    {
      "latitude": 50.758884,
      "longitude": 7.110596,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1656863336,
      "ems": null
    },
    {
      "latitude": 50.758419,
      "longitude": 7.11235,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1656863338,
      "ems": null
    },
    {
      "latitude": 50.757954,
      "longitude": 7.113953,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1656863341,
      "ems": null
    },
    {
      "latitude": 50.757523,
      "longitude": 7.115578,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1656863344,
      "ems": null
    },
    {
      "latitude": 50.757023,
      "longitude": 7.117157,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1656863347,
      "ems": null
    },
    {
      "latitude": 50.756462,
      "longitude": 7.119064,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1656863350,
      "ems": null
    },
    {
      "latitude": 50.755966,
      "longitude": 7.120774,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1656863354,
      "ems": null
    },
    {
      "latitude": 50.75544,
      "longitude": 7.122269,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1656863356,
      "ems": null
    },
    {
      "latitude": 50.754913,
      "longitude": 7.123966,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1656863360,
      "ems": null
    },
    {
      "latitude": 50.754368,
      "longitude": 7.125549,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1656863363,
      "ems": null
    },
    {
      "latitude": 50.753391,
      "longitude": 7.12883,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1656863369,
      "ems": null
    },
    {
      "latitude": 50.752365,
      "longitude": 7.132187,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1656863375,
      "ems": null
    },
    {
      "latitude": 50.75153,
      "longitude": 7.135544,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1656863381,
      "ems": null
    },
    {
      "latitude": 50.751297,
      "longitude": 7.136993,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1656863384,
      "ems": null
    },
    {
      "latitude": 50.751019,
      "longitude": 7.138672,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1656863387,
      "ems": null
    },
    {
      "latitude": 50.750736,
      "longitude": 7.14035,
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1656863390,
      "ems": null
    },
    {
      "latitude": 50.750519,
      "longitude": 7.142227,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1656863393,
      "ems": null
    },
    {
      "latitude": 50.75032,
      "longitude": 7.143631,
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1656863396,
      "ems": null
    },
    {
      "latitude": 50.750061,
      "longitude": 7.145419,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1656863399,
      "ems": null
    },
    {
      "latitude": 50.749786,
      "longitude": 7.147052,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1656863402,
      "ems": null
    },
    {
      "latitude": 50.749512,
      "longitude": 7.148685,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1656863405,
      "ems": null
    },
    {
      "latitude": 50.749203,
      "longitude": 7.150192,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1656863408,
      "ems": null
    },
    {
      "latitude": 50.748829,
      "longitude": 7.151794,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1656863411,
      "ems": null
    },
    {
      "latitude": 50.748409,
      "longitude": 7.153397,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1656863414,
      "ems": null
    },
    {
      "latitude": 50.748039,
      "longitude": 7.155075,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1656863417,
      "ems": null
    },
    {
      "latitude": 50.747635,
      "longitude": 7.156628,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1656863420,
      "ems": null
    },
    {
      "latitude": 50.747131,
      "longitude": 7.158409,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1656863423,
      "ems": null
    },
    {
      "latitude": 50.74678,
      "longitude": 7.159882,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1656863426,
      "ems": null
    },
    {
      "latitude": 50.746174,
      "longitude": 7.16301,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1656863432,
      "ems": null
    },
    {
      "latitude": 50.745575,
      "longitude": 7.16613,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1656863438,
      "ems": null
    },
    {
      "latitude": 50.745392,
      "longitude": 7.167837,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1656863440,
      "ems": null
    },
    {
      "latitude": 50.74543,
      "longitude": 7.169418,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1656863444,
      "ems": null
    },
    {
      "latitude": 50.745571,
      "longitude": 7.170868,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1656863447,
      "ems": null
    },
    {
      "latitude": 50.745758,
      "longitude": 7.172811,
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
      "timestamp": 1656863449,
      "ems": null
    },
    {
      "latitude": 50.74585,
      "longitude": 7.174518,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1656863453,
      "ems": null
    },
    {
      "latitude": 50.745991,
      "longitude": 7.176285,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1656863456,
      "ems": null
    },
    {
      "latitude": 50.746124,
      "longitude": 7.177858,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1656863459,
      "ems": null
    },
    {
      "latitude": 50.746315,
      "longitude": 7.179565,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1656863462,
      "ems": null
    },
    {
      "latitude": 50.74649,
      "longitude": 7.181199,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1656863465,
      "ems": null
    },
    {
      "latitude": 50.746689,
      "longitude": 7.182922,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1656863468,
      "ems": null
    },
    {
      "latitude": 50.746811,
      "longitude": 7.183871,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1656863471,
      "ems": null
    },
    {
      "latitude": 50.747105,
      "longitude": 7.187653,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1656863477,
      "ems": null
    },
    {
      "latitude": 50.747177,
      "longitude": 7.18929,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1656863480,
      "ems": null
    },
    {
      "latitude": 50.747387,
      "longitude": 7.192535,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1656863486,
      "ems": null
    },
    {
      "latitude": 50.747589,
      "longitude": 7.194115,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1656863489,
      "ems": null
    },
    {
      "latitude": 50.747864,
      "longitude": 7.195154,
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1656863492,
      "ems": null
    },
    {
      "latitude": 50.748505,
      "longitude": 7.19635,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1656863495,
      "ems": null
    },
    {
      "latitude": 50.749203,
      "longitude": 7.197266,
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
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1656863498,
      "ems": null
    },
    {
      "latitude": 50.749924,
      "longitude": 7.197975,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1656863501,
      "ems": null
    },
    {
      "latitude": 50.750599,
      "longitude": 7.198486,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1656863504,
      "ems": null
    },
    {
      "latitude": 50.751297,
      "longitude": 7.198868,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1656863507,
      "ems": null
    },
    {
      "latitude": 50.752274,
      "longitude": 7.199249,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1656863510,
      "ems": null
    },
    {
      "latitude": 50.753036,
      "longitude": 7.19946,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1656863513,
      "ems": null
    },
    {
      "latitude": 50.753765,
      "longitude": 7.199631,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1656863516,
      "ems": null
    },
    {
      "latitude": 50.754646,
      "longitude": 7.199936,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1656863519,
      "ems": null
    },
    {
      "latitude": 50.755394,
      "longitude": 7.200317,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1656863522,
      "ems": null
    },
    {
      "latitude": 50.756241,
      "longitude": 7.200647,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1656863525,
      "ems": null
    },
    {
      "latitude": 50.756977,
      "longitude": 7.200928,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1656863528,
      "ems": null
    },
    {
      "latitude": 50.757751,
      "longitude": 7.201018,
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1656863531,
      "ems": null
    },
    {
      "latitude": 50.75853,
      "longitude": 7.200944,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1656863534,
      "ems": null
    },
    {
      "latitude": 50.759216,
      "longitude": 7.200573,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656863537,
      "ems": null
    },
    {
      "latitude": 50.759857,
      "longitude": 7.199831,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1656863540,
      "ems": null
    },
    {
      "latitude": 50.760372,
      "longitude": 7.198944,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1656863543,
      "ems": null
    },
    {
      "latitude": 50.760838,
      "longitude": 7.198029,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1656863546,
      "ems": null
    },
    {
      "latitude": 50.76123,
      "longitude": 7.197307,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1656863549,
      "ems": null
    },
    {
      "latitude": 50.761772,
      "longitude": 7.196121,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1656863552,
      "ems": null
    },
    {
      "latitude": 50.762054,
      "longitude": 7.195006,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1656863555,
      "ems": null
    },
    {
      "latitude": 50.762238,
      "longitude": 7.193756,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1656863558,
      "ems": null
    },
    {
      "latitude": 50.762375,
      "longitude": 7.19315,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1656863559,
      "ems": null
    },
    {
      "latitude": 50.762833,
      "longitude": 7.191368,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1656863564,
      "ems": null
    },
    {
      "latitude": 50.763214,
      "longitude": 7.189789,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1656863568,
      "ems": null
    },
    {
      "latitude": 50.763474,
      "longitude": 7.188473,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1656863572,
      "ems": null
    },
    {
      "latitude": 50.763657,
      "longitude": 7.187657,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1656863574,
      "ems": null
    },
    {
      "latitude": 50.763931,
      "longitude": 7.186395,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1656863578,
      "ems": null
    },
    {
      "latitude": 50.764702,
      "longitude": 7.182999,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1656863588,
      "ems": null
    },
    {
      "latitude": 50.7654,
      "longitude": 7.179489,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1656863599,
      "ems": null
    },
    {
      "latitude": 50.766052,
      "longitude": 7.176437,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1656863608,
      "ems": null
    },
    {
      "latitude": 50.766472,
      "longitude": 7.174454,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1656863613,
      "ems": null
    },
    {
      "latitude": 50.766705,
      "longitude": 7.173233,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1656863617,
      "ems": null
    },
    {
      "latitude": 50.767403,
      "longitude": 7.170105,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1656863625,
      "ems": null
    },
    {
      "latitude": 50.767963,
      "longitude": 7.167435,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1656863634,
      "ems": null
    },
    {
      "latitude": 50.768661,
      "longitude": 7.164383,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "timestamp": 1656863645,
      "ems": null
    },
    {
      "latitude": 50.768986,
      "longitude": 7.162781,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1656863655,
      "ems": null
    },
    {
      "latitude": 50.769032,
      "longitude": 7.162476,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 14.8,
        "kts": 8,
        "mph": 9.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1656863660,
      "ems": null
    },
    {
      "latitude": 50.76894,
      "longitude": 7.16217,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 14.8,
        "kts": 8,
        "mph": 9.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1656863665,
      "ems": null
    },
    {
      "latitude": 50.768475,
      "longitude": 7.161789,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 0,
        "kts": 0,
        "mph": 0
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1656863680,
      "ems": null
    },
    {
      "latitude": 50.768829,
      "longitude": 7.163606,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 7.4,
        "kts": 4,
        "mph": 4.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1656863687,
      "ems": null
    }
  ]
};
