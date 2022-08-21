import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220703EDKBEDLW",
    callsign: "DEFCZ",
    name: "Trip into netherlands with Juli",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 6, 3, 11, 40).getTime(),
    arrival: new Date(2022, 6, 3, 14, 45).getTime(),
    singleEnginePistonTime: 185,
    picTime: 185,
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
      "latitude": 50.769871,
      "longitude": 7.158813,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 289,
      "squawk": "0",
      "timestamp": 1656848924,
      "ems": null
    },
    {
      "latitude": 50.77066,
      "longitude": 7.155143,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1656848931,
      "ems": null
    },
    {
      "latitude": 50.771267,
      "longitude": 7.151871,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1656848938,
      "ems": null
    },
    {
      "latitude": 50.771591,
      "longitude": 7.149506,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1656848943,
      "ems": null
    },
    {
      "latitude": 50.771824,
      "longitude": 7.148056,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1656848947,
      "ems": null
    },
    {
      "latitude": 50.771965,
      "longitude": 7.146606,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1656848950,
      "ems": null
    },
    {
      "latitude": 50.772079,
      "longitude": 7.145938,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1656848952,
      "ems": null
    },
    {
      "latitude": 50.772243,
      "longitude": 7.144241,
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1656848956,
      "ems": null
    },
    {
      "latitude": 50.772308,
      "longitude": 7.143192,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1656848959,
      "ems": null
    },
    {
      "latitude": 50.772308,
      "longitude": 7.141707,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1656848962,
      "ems": null
    },
    {
      "latitude": 50.772293,
      "longitude": 7.141037,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1656848965,
      "ems": null
    },
    {
      "latitude": 50.772217,
      "longitude": 7.13896,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1656848968,
      "ems": null
    },
    {
      "latitude": 50.772079,
      "longitude": 7.137402,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1656848971,
      "ems": null
    },
    {
      "latitude": 50.771851,
      "longitude": 7.135991,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1656848974,
      "ems": null
    },
    {
      "latitude": 50.771484,
      "longitude": 7.134581,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1656848977,
      "ems": null
    },
    {
      "latitude": 50.771072,
      "longitude": 7.133171,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1656848980,
      "ems": null
    },
    {
      "latitude": 50.770523,
      "longitude": 7.131882,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1656848983,
      "ems": null
    },
    {
      "latitude": 50.769974,
      "longitude": 7.130572,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1656848986,
      "ems": null
    },
    {
      "latitude": 50.769264,
      "longitude": 7.129059,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1656848989,
      "ems": null
    },
    {
      "latitude": 50.768661,
      "longitude": 7.127914,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1656848992,
      "ems": null
    },
    {
      "latitude": 50.768326,
      "longitude": 7.127306,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1656848996,
      "ems": null
    },
    {
      "latitude": 50.767216,
      "longitude": 7.125702,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1656848998,
      "ems": null
    },
    {
      "latitude": 50.766312,
      "longitude": 7.124485,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1656849002,
      "ems": null
    },
    {
      "latitude": 50.765541,
      "longitude": 7.123642,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1656849004,
      "ems": null
    },
    {
      "latitude": 50.764572,
      "longitude": 7.12263,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1656849008,
      "ems": null
    },
    {
      "latitude": 50.76384,
      "longitude": 7.121962,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1656849011,
      "ems": null
    },
    {
      "latitude": 50.763401,
      "longitude": 7.121582,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1656849012,
      "ems": null
    },
    {
      "latitude": 50.762009,
      "longitude": 7.120551,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1656849016,
      "ems": null
    },
    {
      "latitude": 50.760864,
      "longitude": 7.119809,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1656849020,
      "ems": null
    },
    {
      "latitude": 50.759811,
      "longitude": 7.119215,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1656849024,
      "ems": null
    },
    {
      "latitude": 50.758347,
      "longitude": 7.118324,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1656849028,
      "ems": null
    },
    {
      "latitude": 50.756973,
      "longitude": 7.117656,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1656849032,
      "ems": null
    },
    {
      "latitude": 50.755764,
      "longitude": 7.117004,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1656849036,
      "ems": null
    },
    {
      "latitude": 50.754414,
      "longitude": 7.116318,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1656849040,
      "ems": null
    },
    {
      "latitude": 50.752899,
      "longitude": 7.115429,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1656849044,
      "ems": null
    },
    {
      "latitude": 50.750381,
      "longitude": 7.114093,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1656849052,
      "ems": null
    },
    {
      "latitude": 50.747711,
      "longitude": 7.112732,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1656849060,
      "ems": null
    },
    {
      "latitude": 50.746124,
      "longitude": 7.111569,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1656849064,
      "ems": null
    },
    {
      "latitude": 50.745026,
      "longitude": 7.110753,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1656849068,
      "ems": null
    },
    {
      "latitude": 50.744019,
      "longitude": 7.109936,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1656849071,
      "ems": null
    },
    {
      "latitude": 50.74287,
      "longitude": 7.10907,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1656849077,
      "ems": null
    },
    {
      "latitude": 50.741287,
      "longitude": 7.108002,
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
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1656849080,
      "ems": null
    },
    {
      "latitude": 50.739426,
      "longitude": 7.106857,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1656849086,
      "ems": null
    },
    {
      "latitude": 50.738354,
      "longitude": 7.106247,
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1656849089,
      "ems": null
    },
    {
      "latitude": 50.736649,
      "longitude": 7.105482,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1656849093,
      "ems": null
    },
    {
      "latitude": 50.73547,
      "longitude": 7.105026,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1656849097,
      "ems": null
    },
    {
      "latitude": 50.733932,
      "longitude": 7.104645,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1656849101,
      "ems": null
    },
    {
      "latitude": 50.733139,
      "longitude": 7.104568,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1656849104,
      "ems": null
    },
    {
      "latitude": 50.731976,
      "longitude": 7.104568,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1656849107,
      "ems": null
    },
    {
      "latitude": 50.730675,
      "longitude": 7.104721,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1656849110,
      "ems": null
    },
    {
      "latitude": 50.72937,
      "longitude": 7.10495,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1656849113,
      "ems": null
    },
    {
      "latitude": 50.728134,
      "longitude": 7.105037,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1656849116,
      "ems": null
    },
    {
      "latitude": 50.727173,
      "longitude": 7.105185,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1656849119,
      "ems": null
    },
    {
      "latitude": 50.725834,
      "longitude": 7.105255,
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1656849122,
      "ems": null
    },
    {
      "latitude": 50.724667,
      "longitude": 7.105484,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1656849125,
      "ems": null
    },
    {
      "latitude": 50.723648,
      "longitude": 7.105779,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1656849128,
      "ems": null
    },
    {
      "latitude": 50.722137,
      "longitude": 7.106373,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1656849131,
      "ems": null
    },
    {
      "latitude": 50.721176,
      "longitude": 7.106781,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1656849134,
      "ems": null
    },
    {
      "latitude": 50.719894,
      "longitude": 7.107561,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1656849137,
      "ems": null
    },
    {
      "latitude": 50.718803,
      "longitude": 7.108383,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1656849140,
      "ems": null
    },
    {
      "latitude": 50.717777,
      "longitude": 7.109222,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1656849143,
      "ems": null
    },
    {
      "latitude": 50.716415,
      "longitude": 7.11053,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1656849146,
      "ems": null
    },
    {
      "latitude": 50.715359,
      "longitude": 7.111664,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1656849149,
      "ems": null
    },
    {
      "latitude": 50.714264,
      "longitude": 7.112905,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1656849152,
      "ems": null
    },
    {
      "latitude": 50.713264,
      "longitude": 7.114029,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1656849155,
      "ems": null
    },
    {
      "latitude": 50.712284,
      "longitude": 7.11525,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1656849158,
      "ems": null
    },
    {
      "latitude": 50.711262,
      "longitude": 7.116776,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1656849161,
      "ems": null
    },
    {
      "latitude": 50.710468,
      "longitude": 7.118073,
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1656849164,
      "ems": null
    },
    {
      "latitude": 50.709446,
      "longitude": 7.119904,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1656849167,
      "ems": null
    },
    {
      "latitude": 50.708607,
      "longitude": 7.121582,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656849170,
      "ems": null
    },
    {
      "latitude": 50.707901,
      "longitude": 7.123223,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1656849173,
      "ems": null
    },
    {
      "latitude": 50.707306,
      "longitude": 7.125005,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1656849176,
      "ems": null
    },
    {
      "latitude": 50.706802,
      "longitude": 7.126935,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1656849179,
      "ems": null
    },
    {
      "latitude": 50.70639,
      "longitude": 7.129014,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1656849182,
      "ems": null
    },
    {
      "latitude": 50.706142,
      "longitude": 7.13089,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1656849185,
      "ems": null
    },
    {
      "latitude": 50.706253,
      "longitude": 7.133245,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1656849188,
      "ems": null
    },
    {
      "latitude": 50.706558,
      "longitude": 7.134628,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1656849191,
      "ems": null
    },
    {
      "latitude": 50.707584,
      "longitude": 7.136841,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1656849194,
      "ems": null
    },
    {
      "latitude": 50.708652,
      "longitude": 7.137985,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1656849197,
      "ems": null
    },
    {
      "latitude": 50.709633,
      "longitude": 7.138519,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1656849200,
      "ems": null
    },
    {
      "latitude": 50.71106,
      "longitude": 7.138515,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1656849203,
      "ems": null
    },
    {
      "latitude": 50.711975,
      "longitude": 7.138144,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1656849206,
      "ems": null
    },
    {
      "latitude": 50.713215,
      "longitude": 7.13707,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1656849209,
      "ems": null
    },
    {
      "latitude": 50.714008,
      "longitude": 7.135849,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1656849212,
      "ems": null
    },
    {
      "latitude": 50.714661,
      "longitude": 7.134781,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1656849215,
      "ems": null
    },
    {
      "latitude": 50.715359,
      "longitude": 7.133255,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1656849218,
      "ems": null
    },
    {
      "latitude": 50.715916,
      "longitude": 7.131805,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1656849221,
      "ems": null
    },
    {
      "latitude": 50.71637,
      "longitude": 7.130424,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1656849224,
      "ems": null
    },
    {
      "latitude": 50.716827,
      "longitude": 7.129014,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1656849227,
      "ems": null
    },
    {
      "latitude": 50.717312,
      "longitude": 7.12738,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1656849230,
      "ems": null
    },
    {
      "latitude": 50.717731,
      "longitude": 7.125854,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1656849233,
      "ems": null
    },
    {
      "latitude": 50.718105,
      "longitude": 7.124405,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1656849236,
      "ems": null
    },
    {
      "latitude": 50.71843,
      "longitude": 7.122879,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1656849239,
      "ems": null
    },
    {
      "latitude": 50.718758,
      "longitude": 7.121582,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1656849242,
      "ems": null
    },
    {
      "latitude": 50.719128,
      "longitude": 7.119827,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1656849245,
      "ems": null
    },
    {
      "latitude": 50.719501,
      "longitude": 7.118225,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1656849248,
      "ems": null
    },
    {
      "latitude": 50.719734,
      "longitude": 7.117386,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1656849251,
      "ems": null
    },
    {
      "latitude": 50.720665,
      "longitude": 7.113953,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1656849257,
      "ems": null
    },
    {
      "latitude": 50.721863,
      "longitude": 7.110604,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1656849263,
      "ems": null
    },
    {
      "latitude": 50.722504,
      "longitude": 7.109119,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1656849266,
      "ems": null
    },
    {
      "latitude": 50.723133,
      "longitude": 7.107925,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1656849269,
      "ems": null
    },
    {
      "latitude": 50.723877,
      "longitude": 7.106476,
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1656849272,
      "ems": null
    },
    {
      "latitude": 50.724655,
      "longitude": 7.105185,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1656849275,
      "ems": null
    },
    {
      "latitude": 50.725601,
      "longitude": 7.103577,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1656849278,
      "ems": null
    },
    {
      "latitude": 50.726345,
      "longitude": 7.102356,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1656849281,
      "ems": null
    },
    {
      "latitude": 50.727219,
      "longitude": 7.101325,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1656849284,
      "ems": null
    },
    {
      "latitude": 50.72818,
      "longitude": 7.100286,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656849287,
      "ems": null
    },
    {
      "latitude": 50.728672,
      "longitude": 7.099915,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656849289,
      "ems": null
    },
    {
      "latitude": 50.730534,
      "longitude": 7.098389,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656849293,
      "ems": null
    },
    {
      "latitude": 50.73175,
      "longitude": 7.097539,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1656849296,
      "ems": null
    },
    {
      "latitude": 50.732941,
      "longitude": 7.096797,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1656849299,
      "ems": null
    },
    {
      "latitude": 50.734165,
      "longitude": 7.0961,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1656849302,
      "ems": null
    },
    {
      "latitude": 50.735138,
      "longitude": 7.095535,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1656849305,
      "ems": null
    },
    {
      "latitude": 50.73642,
      "longitude": 7.094718,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1656849308,
      "ems": null
    },
    {
      "latitude": 50.737473,
      "longitude": 7.093976,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656849311,
      "ems": null
    },
    {
      "latitude": 50.738525,
      "longitude": 7.09316,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656849314,
      "ems": null
    },
    {
      "latitude": 50.739578,
      "longitude": 7.092343,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656849317,
      "ems": null
    },
    {
      "latitude": 50.741684,
      "longitude": 7.09071,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656849323,
      "ems": null
    },
    {
      "latitude": 50.743652,
      "longitude": 7.089299,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656849329,
      "ems": null
    },
    {
      "latitude": 50.745663,
      "longitude": 7.08786,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656849335,
      "ems": null
    },
    {
      "latitude": 50.746407,
      "longitude": 7.087326,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656849338,
      "ems": null
    },
    {
      "latitude": 50.747635,
      "longitude": 7.086256,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656849341,
      "ems": null
    },
    {
      "latitude": 50.748276,
      "longitude": 7.085662,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656849344,
      "ems": null
    },
    {
      "latitude": 50.749466,
      "longitude": 7.084548,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656849347,
      "ems": null
    },
    {
      "latitude": 50.750244,
      "longitude": 7.083732,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656849350,
      "ems": null
    },
    {
      "latitude": 50.751019,
      "longitude": 7.082977,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656849353,
      "ems": null
    },
    {
      "latitude": 50.752121,
      "longitude": 7.081802,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656849356,
      "ems": null
    },
    {
      "latitude": 50.752945,
      "longitude": 7.080986,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656849359,
      "ems": null
    },
    {
      "latitude": 50.754929,
      "longitude": 7.079239,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656849365,
      "ems": null
    },
    {
      "latitude": 50.756836,
      "longitude": 7.077789,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656849371,
      "ems": null
    },
    {
      "latitude": 50.759079,
      "longitude": 7.076012,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656849377,
      "ems": null
    },
    {
      "latitude": 50.760189,
      "longitude": 7.075195,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656849380,
      "ems": null
    },
    {
      "latitude": 50.761139,
      "longitude": 7.074527,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656849383,
      "ems": null
    },
    {
      "latitude": 50.7621,
      "longitude": 7.073785,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656849386,
      "ems": null
    },
    {
      "latitude": 50.763199,
      "longitude": 7.072894,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656849389,
      "ems": null
    },
    {
      "latitude": 50.765167,
      "longitude": 7.071228,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656849395,
      "ems": null
    },
    {
      "latitude": 50.767365,
      "longitude": 7.069702,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1656849401,
      "ems": null
    },
    {
      "latitude": 50.768463,
      "longitude": 7.06896,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1656849404,
      "ems": null
    },
    {
      "latitude": 50.769451,
      "longitude": 7.068405,
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1656849407,
      "ems": null
    },
    {
      "latitude": 50.770523,
      "longitude": 7.067921,
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1656849410,
      "ems": null
    },
    {
      "latitude": 50.771759,
      "longitude": 7.067327,
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1656849413,
      "ems": null
    },
    {
      "latitude": 50.772804,
      "longitude": 7.066803,
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1656849416,
      "ems": null
    },
    {
      "latitude": 50.773956,
      "longitude": 7.066362,
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1656849419,
      "ems": null
    },
    {
      "latitude": 50.774826,
      "longitude": 7.066139,
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1656849422,
      "ems": null
    },
    {
      "latitude": 50.776436,
      "longitude": 7.065887,
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1656849425,
      "ems": null
    },
    {
      "latitude": 50.777504,
      "longitude": 7.06604,
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1656849428,
      "ems": null
    },
    {
      "latitude": 50.778996,
      "longitude": 7.066422,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1656849431,
      "ems": null
    },
    {
      "latitude": 50.780064,
      "longitude": 7.06665,
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1656849434,
      "ems": null
    },
    {
      "latitude": 50.781143,
      "longitude": 7.066733,
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1656849437,
      "ems": null
    },
    {
      "latitude": 50.782654,
      "longitude": 7.06651,
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1656849440,
      "ems": null
    },
    {
      "latitude": 50.784767,
      "longitude": 7.065353,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656849446,
      "ems": null
    },
    {
      "latitude": 50.785839,
      "longitude": 7.064133,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1656849449,
      "ems": null
    },
    {
      "latitude": 50.786682,
      "longitude": 7.062576,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1656849452,
      "ems": null
    },
    {
      "latitude": 50.78714,
      "longitude": 7.06124,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1656849455,
      "ems": null
    },
    {
      "latitude": 50.787422,
      "longitude": 7.059021,
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1656849458,
      "ems": null
    },
    {
      "latitude": 50.787235,
      "longitude": 7.057114,
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1656849461,
      "ems": null
    },
    {
      "latitude": 50.786682,
      "longitude": 7.055449,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1656849464,
      "ems": null
    },
    {
      "latitude": 50.78595,
      "longitude": 7.054039,
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1656849467,
      "ems": null
    },
    {
      "latitude": 50.784897,
      "longitude": 7.052703,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1656849470,
      "ems": null
    },
    {
      "latitude": 50.783745,
      "longitude": 7.051849,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1656849473,
      "ems": null
    },
    {
      "latitude": 50.782394,
      "longitude": 7.051468,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1656849476,
      "ems": null
    },
    {
      "latitude": 50.780998,
      "longitude": 7.05162,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1656849479,
      "ems": null
    },
    {
      "latitude": 50.779598,
      "longitude": 7.05246,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1656849482,
      "ems": null
    },
    {
      "latitude": 50.77853,
      "longitude": 7.053604,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1656849485,
      "ems": null
    },
    {
      "latitude": 50.777599,
      "longitude": 7.05513,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1656849488,
      "ems": null
    },
    {
      "latitude": 50.776932,
      "longitude": 7.056934,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1656849491,
      "ems": null
    },
    {
      "latitude": 50.776573,
      "longitude": 7.05864,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1656849494,
      "ems": null
    },
    {
      "latitude": 50.776482,
      "longitude": 7.059784,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1656849496,
      "ems": null
    },
    {
      "latitude": 50.776573,
      "longitude": 7.062836,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1656849499,
      "ems": null
    },
    {
      "latitude": 50.777161,
      "longitude": 7.065471,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1656849503,
      "ems": null
    },
    {
      "latitude": 50.777969,
      "longitude": 7.067184,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1656849506,
      "ems": null
    },
    {
      "latitude": 50.778992,
      "longitude": 7.068514,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1656849509,
      "ems": null
    },
    {
      "latitude": 50.78009,
      "longitude": 7.069257,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1656849512,
      "ems": null
    },
    {
      "latitude": 50.781322,
      "longitude": 7.069626,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1656849515,
      "ems": null
    },
    {
      "latitude": 50.782791,
      "longitude": 7.069405,
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1656849518,
      "ems": null
    },
    {
      "latitude": 50.784073,
      "longitude": 7.06844,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656849521,
      "ems": null
    },
    {
      "latitude": 50.784897,
      "longitude": 7.067401,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1656849524,
      "ems": null
    },
    {
      "latitude": 50.785885,
      "longitude": 7.065964,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1656849527,
      "ems": null
    },
    {
      "latitude": 50.786865,
      "longitude": 7.06458,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1656849530,
      "ems": null
    },
    {
      "latitude": 50.787735,
      "longitude": 7.063244,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1656849533,
      "ems": null
    },
    {
      "latitude": 50.788677,
      "longitude": 7.062073,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1656849536,
      "ems": null
    },
    {
      "latitude": 50.789703,
      "longitude": 7.061081,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656849539,
      "ems": null
    },
    {
      "latitude": 50.790894,
      "longitude": 7.060126,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656849542,
      "ems": null
    },
    {
      "latitude": 50.791985,
      "longitude": 7.05925,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656849545,
      "ems": null
    },
    {
      "latitude": 50.793182,
      "longitude": 7.058419,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656849548,
      "ems": null
    },
    {
      "latitude": 50.794235,
      "longitude": 7.057677,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656849551,
      "ems": null
    },
    {
      "latitude": 50.795521,
      "longitude": 7.056808,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656849554,
      "ems": null
    },
    {
      "latitude": 50.796593,
      "longitude": 7.056046,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656849557,
      "ems": null
    },
    {
      "latitude": 50.797802,
      "longitude": 7.055206,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656849560,
      "ems": null
    },
    {
      "latitude": 50.799088,
      "longitude": 7.054262,
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
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656849563,
      "ems": null
    },
    {
      "latitude": 50.800232,
      "longitude": 7.053445,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656849566,
      "ems": null
    },
    {
      "latitude": 50.801514,
      "longitude": 7.05248,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656849569,
      "ems": null
    },
    {
      "latitude": 50.804413,
      "longitude": 7.050323,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656849575,
      "ems": null
    },
    {
      "latitude": 50.807144,
      "longitude": 7.0481,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656849581,
      "ems": null
    },
    {
      "latitude": 50.808289,
      "longitude": 7.046987,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656849584,
      "ems": null
    },
    {
      "latitude": 50.809628,
      "longitude": 7.04567,
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
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656849587,
      "ems": null
    },
    {
      "latitude": 50.810883,
      "longitude": 7.044449,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656849590,
      "ems": null
    },
    {
      "latitude": 50.812042,
      "longitude": 7.043275,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656849593,
      "ems": null
    },
    {
      "latitude": 50.813187,
      "longitude": 7.042162,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656849596,
      "ems": null
    },
    {
      "latitude": 50.814236,
      "longitude": 7.041092,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656849599,
      "ems": null
    },
    {
      "latitude": 50.81498,
      "longitude": 7.040329,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656849602,
      "ems": null
    },
    {
      "latitude": 50.817627,
      "longitude": 7.038154,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656849608,
      "ems": null
    },
    {
      "latitude": 50.818798,
      "longitude": 7.03743,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1656849611,
      "ems": null
    },
    {
      "latitude": 50.81987,
      "longitude": 7.036818,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1656849614,
      "ems": null
    },
    {
      "latitude": 50.820969,
      "longitude": 7.03615,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1656849617,
      "ems": null
    },
    {
      "latitude": 50.822067,
      "longitude": 7.035555,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1656849620,
      "ems": null
    },
    {
      "latitude": 50.823032,
      "longitude": 7.035065,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1656849623,
      "ems": null
    },
    {
      "latitude": 50.824127,
      "longitude": 7.034516,
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1656849626,
      "ems": null
    },
    {
      "latitude": 50.825272,
      "longitude": 7.033848,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1656849629,
      "ems": null
    },
    {
      "latitude": 50.826324,
      "longitude": 7.033254,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1656849632,
      "ems": null
    },
    {
      "latitude": 50.82843,
      "longitude": 7.031918,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1656849638,
      "ems": null
    },
    {
      "latitude": 50.830482,
      "longitude": 7.030563,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1656849644,
      "ems": null
    },
    {
      "latitude": 50.831505,
      "longitude": 7.029877,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1656849647,
      "ems": null
    },
    {
      "latitude": 50.832485,
      "longitude": 7.029266,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656849650,
      "ems": null
    },
    {
      "latitude": 50.833466,
      "longitude": 7.028652,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656849653,
      "ems": null
    },
    {
      "latitude": 50.835571,
      "longitude": 7.027242,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656849659,
      "ems": null
    },
    {
      "latitude": 50.836487,
      "longitude": 7.02652,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656849662,
      "ems": null
    },
    {
      "latitude": 50.83754,
      "longitude": 7.025609,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656849665,
      "ems": null
    },
    {
      "latitude": 50.838409,
      "longitude": 7.024866,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656849668,
      "ems": null
    },
    {
      "latitude": 50.84024,
      "longitude": 7.023381,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656849674,
      "ems": null
    },
    {
      "latitude": 50.84156,
      "longitude": 7.0224,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656849678,
      "ems": null
    },
    {
      "latitude": 50.842438,
      "longitude": 7.0216,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656849680,
      "ems": null
    },
    {
      "latitude": 50.844406,
      "longitude": 7.020041,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656849686,
      "ems": null
    },
    {
      "latitude": 50.845566,
      "longitude": 7.019272,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1656849690,
      "ems": null
    },
    {
      "latitude": 50.846634,
      "longitude": 7.018661,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1656849692,
      "ems": null
    },
    {
      "latitude": 50.847752,
      "longitude": 7.017975,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1656849696,
      "ems": null
    },
    {
      "latitude": 50.848618,
      "longitude": 7.017369,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1656849698,
      "ems": null
    },
    {
      "latitude": 50.849754,
      "longitude": 7.016678,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1656849701,
      "ems": null
    },
    {
      "latitude": 50.850952,
      "longitude": 7.015958,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1656849704,
      "ems": null
    },
    {
      "latitude": 50.852051,
      "longitude": 7.01529,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1656849707,
      "ems": null
    },
    {
      "latitude": 50.852966,
      "longitude": 7.014696,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656849710,
      "ems": null
    },
    {
      "latitude": 50.854969,
      "longitude": 7.013168,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656849716,
      "ems": null
    },
    {
      "latitude": 50.857269,
      "longitude": 7.011653,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1656849723,
      "ems": null
    },
    {
      "latitude": 50.859482,
      "longitude": 7.01004,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656849729,
      "ems": null
    },
    {
      "latitude": 50.860649,
      "longitude": 7.009201,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656849732,
      "ems": null
    },
    {
      "latitude": 50.86171,
      "longitude": 7.008312,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656849735,
      "ems": null
    },
    {
      "latitude": 50.863907,
      "longitude": 7.006531,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656849741,
      "ems": null
    },
    {
      "latitude": 50.865967,
      "longitude": 7.004749,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656849747,
      "ems": null
    },
    {
      "latitude": 50.867165,
      "longitude": 7.003708,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656849750,
      "ems": null
    },
    {
      "latitude": 50.869305,
      "longitude": 7.001953,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656849756,
      "ems": null
    },
    {
      "latitude": 50.871506,
      "longitude": 7.000444,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656849762,
      "ems": null
    },
    {
      "latitude": 50.873566,
      "longitude": 6.998885,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656849768,
      "ems": null
    },
    {
      "latitude": 50.875809,
      "longitude": 6.997103,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656849774,
      "ems": null
    },
    {
      "latitude": 50.877914,
      "longitude": 6.99547,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656849780,
      "ems": null
    },
    {
      "latitude": 50.880013,
      "longitude": 6.993713,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656849786,
      "ems": null
    },
    {
      "latitude": 50.881165,
      "longitude": 6.992872,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656849789,
      "ems": null
    },
    {
      "latitude": 50.883316,
      "longitude": 6.990942,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656849795,
      "ems": null
    },
    {
      "latitude": 50.885376,
      "longitude": 6.989235,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656849801,
      "ems": null
    },
    {
      "latitude": 50.8876,
      "longitude": 6.987457,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656849807,
      "ems": null
    },
    {
      "latitude": 50.889744,
      "longitude": 6.985779,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656849813,
      "ems": null
    },
    {
      "latitude": 50.891743,
      "longitude": 6.983948,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656849819,
      "ems": null
    },
    {
      "latitude": 50.893608,
      "longitude": 6.982117,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656849825,
      "ems": null
    },
    {
      "latitude": 50.895607,
      "longitude": 6.980133,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656849831,
      "ems": null
    },
    {
      "latitude": 50.897751,
      "longitude": 6.978302,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656849837,
      "ems": null
    },
    {
      "latitude": 50.899799,
      "longitude": 6.976776,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656849843,
      "ems": null
    },
    {
      "latitude": 50.901993,
      "longitude": 6.975057,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656849849,
      "ems": null
    },
    {
      "latitude": 50.90387,
      "longitude": 6.973349,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656849855,
      "ems": null
    },
    {
      "latitude": 50.906067,
      "longitude": 6.971345,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656849861,
      "ems": null
    },
    {
      "latitude": 50.908039,
      "longitude": 6.969604,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656849867,
      "ems": null
    },
    {
      "latitude": 50.910271,
      "longitude": 6.967697,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656849873,
      "ems": null
    },
    {
      "latitude": 50.91246,
      "longitude": 6.965866,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656849879,
      "ems": null
    },
    {
      "latitude": 50.913483,
      "longitude": 6.965103,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1656849882,
      "ems": null
    },
    {
      "latitude": 50.914646,
      "longitude": 6.96434,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1656849885,
      "ems": null
    },
    {
      "latitude": 50.91568,
      "longitude": 6.963624,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656849888,
      "ems": null
    },
    {
      "latitude": 50.916824,
      "longitude": 6.962883,
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
      "heading": 336,
      "squawk": "7742",
      "timestamp": 1656849891,
      "ems": null
    },
    {
      "latitude": 50.917999,
      "longitude": 6.962051,
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
      "heading": 337,
      "squawk": "7742",
      "timestamp": 1656849894,
      "ems": null
    },
    {
      "latitude": 50.92028,
      "longitude": 6.960144,
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
      "heading": 328,
      "squawk": "7742",
      "timestamp": 1656849900,
      "ems": null
    },
    {
      "latitude": 50.921307,
      "longitude": 6.959152,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 325,
      "squawk": "7742",
      "timestamp": 1656849903,
      "ems": null
    },
    {
      "latitude": 50.922375,
      "longitude": 6.957932,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 325,
      "squawk": "7742",
      "timestamp": 1656849906,
      "ems": null
    },
    {
      "latitude": 50.923447,
      "longitude": 6.956711,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 325,
      "squawk": "7742",
      "timestamp": 1656849909,
      "ems": null
    },
    {
      "latitude": 50.924286,
      "longitude": 6.955831,
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
      "heading": 328,
      "squawk": "7742",
      "timestamp": 1656849912,
      "ems": null
    },
    {
      "latitude": 50.925541,
      "longitude": 6.954651,
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
      "heading": 330,
      "squawk": "7742",
      "timestamp": 1656849915,
      "ems": null
    },
    {
      "latitude": 50.927822,
      "longitude": 6.952972,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 335,
      "squawk": "7742",
      "timestamp": 1656849921,
      "ems": null
    },
    {
      "latitude": 50.930008,
      "longitude": 6.951674,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 342,
      "squawk": "7742",
      "timestamp": 1656849927,
      "ems": null
    },
    {
      "latitude": 50.931175,
      "longitude": 6.951141,
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
      "heading": 345,
      "squawk": "7742",
      "timestamp": 1656849930,
      "ems": null
    },
    {
      "latitude": 50.932709,
      "longitude": 6.950607,
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
      "heading": 348,
      "squawk": "7742",
      "timestamp": 1656849933,
      "ems": null
    },
    {
      "latitude": 50.933922,
      "longitude": 6.95015,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1656849936,
      "ems": null
    },
    {
      "latitude": 50.935181,
      "longitude": 6.949743,
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1656849939,
      "ems": null
    },
    {
      "latitude": 50.936142,
      "longitude": 6.949446,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1656849941,
      "ems": null
    },
    {
      "latitude": 50.937458,
      "longitude": 6.949005,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1656849945,
      "ems": null
    },
    {
      "latitude": 50.938763,
      "longitude": 6.948624,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1656849948,
      "ems": null
    },
    {
      "latitude": 50.940067,
      "longitude": 6.948166,
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1656849951,
      "ems": null
    },
    {
      "latitude": 50.941315,
      "longitude": 6.947962,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1656849954,
      "ems": null
    },
    {
      "latitude": 50.942551,
      "longitude": 6.947887,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1656849957,
      "ems": null
    },
    {
      "latitude": 50.943882,
      "longitude": 6.948166,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1656849960,
      "ems": null
    },
    {
      "latitude": 50.945068,
      "longitude": 6.948704,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1656849962,
      "ems": null
    },
    {
      "latitude": 50.94635,
      "longitude": 6.949692,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1656849966,
      "ems": null
    },
    {
      "latitude": 50.947468,
      "longitude": 6.950912,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1656849969,
      "ems": null
    },
    {
      "latitude": 50.948399,
      "longitude": 6.952515,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1656849972,
      "ems": null
    },
    {
      "latitude": 50.949188,
      "longitude": 6.95442,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1656849975,
      "ems": null
    },
    {
      "latitude": 50.949654,
      "longitude": 6.956253,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1656849978,
      "ems": null
    },
    {
      "latitude": 50.95015,
      "longitude": 6.958577,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1656849981,
      "ems": null
    },
    {
      "latitude": 50.950424,
      "longitude": 6.960507,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1656849984,
      "ems": null
    },
    {
      "latitude": 50.950562,
      "longitude": 6.962734,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1656849987,
      "ems": null
    },
    {
      "latitude": 50.950378,
      "longitude": 6.965406,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1656849990,
      "ems": null
    },
    {
      "latitude": 50.949982,
      "longitude": 6.967545,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1656849993,
      "ems": null
    },
    {
      "latitude": 50.949329,
      "longitude": 6.969528,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1656849996,
      "ems": null
    },
    {
      "latitude": 50.94841,
      "longitude": 6.971345,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1656849999,
      "ems": null
    },
    {
      "latitude": 50.947559,
      "longitude": 6.972504,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1656850002,
      "ems": null
    },
    {
      "latitude": 50.946213,
      "longitude": 6.973869,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1656850005,
      "ems": null
    },
    {
      "latitude": 50.945114,
      "longitude": 6.974611,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1656850008,
      "ems": null
    },
    {
      "latitude": 50.943695,
      "longitude": 6.975279,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1656850011,
      "ems": null
    },
    {
      "latitude": 50.942551,
      "longitude": 6.975576,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1656850014,
      "ems": null
    },
    {
      "latitude": 50.941086,
      "longitude": 6.97565,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1656850017,
      "ems": null
    },
    {
      "latitude": 50.939941,
      "longitude": 6.975502,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1656850020,
      "ems": null
    },
    {
      "latitude": 50.938614,
      "longitude": 6.975131,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1656850023,
      "ems": null
    },
    {
      "latitude": 50.937378,
      "longitude": 6.97476,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1656850026,
      "ems": null
    },
    {
      "latitude": 50.936527,
      "longitude": 6.974335,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1656850029,
      "ems": null
    },
    {
      "latitude": 50.935364,
      "longitude": 6.973572,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1656850032,
      "ems": null
    },
    {
      "latitude": 50.934219,
      "longitude": 6.972384,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1656850035,
      "ems": null
    },
    {
      "latitude": 50.933441,
      "longitude": 6.971122,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1656850038,
      "ems": null
    },
    {
      "latitude": 50.932663,
      "longitude": 6.969223,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1656850041,
      "ems": null
    },
    {
      "latitude": 50.932293,
      "longitude": 6.967545,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1656850044,
      "ems": null
    },
    {
      "latitude": 50.93206,
      "longitude": 6.965866,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1656850047,
      "ems": null
    },
    {
      "latitude": 50.931965,
      "longitude": 6.964111,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1656850050,
      "ems": null
    },
    {
      "latitude": 50.931965,
      "longitude": 6.962128,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1656850053,
      "ems": null
    },
    {
      "latitude": 50.932106,
      "longitude": 6.960449,
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1656850056,
      "ems": null
    },
    {
      "latitude": 50.932476,
      "longitude": 6.958771,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1656850059,
      "ems": null
    },
    {
      "latitude": 50.932938,
      "longitude": 6.957315,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1656850062,
      "ems": null
    },
    {
      "latitude": 50.93364,
      "longitude": 6.955948,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1656850065,
      "ems": null
    },
    {
      "latitude": 50.934387,
      "longitude": 6.954803,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1656850068,
      "ems": null
    },
    {
      "latitude": 50.935226,
      "longitude": 6.953826,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1656850071,
      "ems": null
    },
    {
      "latitude": 50.936096,
      "longitude": 6.952935,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656850074,
      "ems": null
    },
    {
      "latitude": 50.937012,
      "longitude": 6.95197,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656850077,
      "ems": null
    },
    {
      "latitude": 50.937786,
      "longitude": 6.951218,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656850080,
      "ems": null
    },
    {
      "latitude": 50.938763,
      "longitude": 6.950378,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656850083,
      "ems": null
    },
    {
      "latitude": 50.939785,
      "longitude": 6.949463,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656850086,
      "ems": null
    },
    {
      "latitude": 50.940624,
      "longitude": 6.948776,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656850089,
      "ems": null
    },
    {
      "latitude": 50.941589,
      "longitude": 6.947962,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656850092,
      "ems": null
    },
    {
      "latitude": 50.942596,
      "longitude": 6.947219,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656850095,
      "ems": null
    },
    {
      "latitude": 50.943558,
      "longitude": 6.946477,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656850098,
      "ems": null
    },
    {
      "latitude": 50.944427,
      "longitude": 6.945809,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656850101,
      "ems": null
    },
    {
      "latitude": 50.945187,
      "longitude": 6.945114,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656850104,
      "ems": null
    },
    {
      "latitude": 50.946304,
      "longitude": 6.944351,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656850107,
      "ems": null
    },
    {
      "latitude": 50.947281,
      "longitude": 6.943665,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656850110,
      "ems": null
    },
    {
      "latitude": 50.949188,
      "longitude": 6.942215,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656850116,
      "ems": null
    },
    {
      "latitude": 50.950195,
      "longitude": 6.941206,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1656850119,
      "ems": null
    },
    {
      "latitude": 50.950974,
      "longitude": 6.940242,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1656850122,
      "ems": null
    },
    {
      "latitude": 50.951752,
      "longitude": 6.939163,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1656850125,
      "ems": null
    },
    {
      "latitude": 50.95245,
      "longitude": 6.938095,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1656850128,
      "ems": null
    },
    {
      "latitude": 50.953053,
      "longitude": 6.937027,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1656850131,
      "ems": null
    },
    {
      "latitude": 50.953766,
      "longitude": 6.935936,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1656850134,
      "ems": null
    },
    {
      "latitude": 50.954361,
      "longitude": 6.934971,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1656850137,
      "ems": null
    },
    {
      "latitude": 50.955196,
      "longitude": 6.93367,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1656850140,
      "ems": null
    },
    {
      "latitude": 50.955894,
      "longitude": 6.932602,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1656850143,
      "ems": null
    },
    {
      "latitude": 50.956558,
      "longitude": 6.931557,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1656850146,
      "ems": null
    },
    {
      "latitude": 50.958115,
      "longitude": 6.929552,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1656850152,
      "ems": null
    },
    {
      "latitude": 50.958801,
      "longitude": 6.928736,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1656850155,
      "ems": null
    },
    {
      "latitude": 50.959763,
      "longitude": 6.927622,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1656850158,
      "ems": null
    },
    {
      "latitude": 50.960587,
      "longitude": 6.926732,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656850161,
      "ems": null
    },
    {
      "latitude": 50.961273,
      "longitude": 6.926064,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656850164,
      "ems": null
    },
    {
      "latitude": 50.962051,
      "longitude": 6.925321,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656850167,
      "ems": null
    },
    {
      "latitude": 50.962784,
      "longitude": 6.924591,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1656850170,
      "ems": null
    },
    {
      "latitude": 50.964203,
      "longitude": 6.922723,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1656850176,
      "ems": null
    },
    {
      "latitude": 50.965851,
      "longitude": 6.92057,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1656850182,
      "ems": null
    },
    {
      "latitude": 50.966553,
      "longitude": 6.919556,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1656850185,
      "ems": null
    },
    {
      "latitude": 50.967251,
      "longitude": 6.918411,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1656850188,
      "ems": null
    },
    {
      "latitude": 50.967819,
      "longitude": 6.917527,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1656850191,
      "ems": null
    },
    {
      "latitude": 50.968555,
      "longitude": 6.916275,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1656850194,
      "ems": null
    },
    {
      "latitude": 50.969395,
      "longitude": 6.915054,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1656850197,
      "ems": null
    },
    {
      "latitude": 50.970016,
      "longitude": 6.914112,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1656850200,
      "ems": null
    },
    {
      "latitude": 50.971848,
      "longitude": 6.911736,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1656850206,
      "ems": null
    },
    {
      "latitude": 50.972698,
      "longitude": 6.910858,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656850209,
      "ems": null
    },
    {
      "latitude": 50.973679,
      "longitude": 6.909881,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656850212,
      "ems": null
    },
    {
      "latitude": 50.974606,
      "longitude": 6.909027,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656850215,
      "ems": null
    },
    {
      "latitude": 50.975445,
      "longitude": 6.908188,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656850218,
      "ems": null
    },
    {
      "latitude": 50.976425,
      "longitude": 6.907208,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656850221,
      "ems": null
    },
    {
      "latitude": 50.977402,
      "longitude": 6.906204,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656850224,
      "ems": null
    },
    {
      "latitude": 50.978439,
      "longitude": 6.905278,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656850227,
      "ems": null
    },
    {
      "latitude": 50.979446,
      "longitude": 6.904462,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656850230,
      "ems": null
    },
    {
      "latitude": 50.980473,
      "longitude": 6.903687,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656850233,
      "ems": null
    },
    {
      "latitude": 50.982422,
      "longitude": 6.902012,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656850239,
      "ems": null
    },
    {
      "latitude": 50.98439,
      "longitude": 6.90023,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656850245,
      "ems": null
    },
    {
      "latitude": 50.98645,
      "longitude": 6.898375,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656850251,
      "ems": null
    },
    {
      "latitude": 50.988281,
      "longitude": 6.896445,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1656850257,
      "ems": null
    },
    {
      "latitude": 50.989334,
      "longitude": 6.895257,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1656850260,
      "ems": null
    },
    {
      "latitude": 50.990295,
      "longitude": 6.894144,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1656850263,
      "ems": null
    },
    {
      "latitude": 50.991028,
      "longitude": 6.893178,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1656850266,
      "ems": null
    },
    {
      "latitude": 50.991833,
      "longitude": 6.892242,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1656850269,
      "ems": null
    },
    {
      "latitude": 50.992813,
      "longitude": 6.8911,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1656850272,
      "ems": null
    },
    {
      "latitude": 50.99437,
      "longitude": 6.889541,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656850278,
      "ems": null
    },
    {
      "latitude": 50.996155,
      "longitude": 6.887537,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656850284,
      "ems": null
    },
    {
      "latitude": 50.997025,
      "longitude": 6.886646,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656850287,
      "ems": null
    },
    {
      "latitude": 50.99794,
      "longitude": 6.885756,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656850290,
      "ems": null
    },
    {
      "latitude": 50.99979,
      "longitude": 6.88385,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656850296,
      "ems": null
    },
    {
      "latitude": 51.000725,
      "longitude": 6.883087,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656850299,
      "ems": null
    },
    {
      "latitude": 51.001701,
      "longitude": 6.882324,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656850302,
      "ems": null
    },
    {
      "latitude": 51.002701,
      "longitude": 6.881598,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656850305,
      "ems": null
    },
    {
      "latitude": 51.003662,
      "longitude": 6.880856,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656850308,
      "ems": null
    },
    {
      "latitude": 51.004578,
      "longitude": 6.880114,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656850311,
      "ems": null
    },
    {
      "latitude": 51.006401,
      "longitude": 6.87851,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656850317,
      "ems": null
    },
    {
      "latitude": 51.007332,
      "longitude": 6.877823,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656850320,
      "ems": null
    },
    {
      "latitude": 51.008377,
      "longitude": 6.877144,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1656850323,
      "ems": null
    },
    {
      "latitude": 51.009384,
      "longitude": 6.876625,
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
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1656850326,
      "ems": null
    },
    {
      "latitude": 51.010391,
      "longitude": 6.876105,
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1656850329,
      "ems": null
    },
    {
      "latitude": 51.011196,
      "longitude": 6.87561,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1656850332,
      "ems": null
    },
    {
      "latitude": 51.013138,
      "longitude": 6.874472,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1656850338,
      "ems": null
    },
    {
      "latitude": 51.014969,
      "longitude": 6.873136,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656850344,
      "ems": null
    },
    {
      "latitude": 51.0168,
      "longitude": 6.872023,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1656850350,
      "ems": null
    },
    {
      "latitude": 51.018368,
      "longitude": 6.870956,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656850356,
      "ems": null
    },
    {
      "latitude": 51.019485,
      "longitude": 6.870041,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656850359,
      "ems": null
    },
    {
      "latitude": 51.020462,
      "longitude": 6.869202,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656850362,
      "ems": null
    },
    {
      "latitude": 51.021347,
      "longitude": 6.868439,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656850365,
      "ems": null
    },
    {
      "latitude": 51.023117,
      "longitude": 6.8669,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656850371,
      "ems": null
    },
    {
      "latitude": 51.02507,
      "longitude": 6.865692,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1656850377,
      "ems": null
    },
    {
      "latitude": 51.026047,
      "longitude": 6.865267,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1656850380,
      "ems": null
    },
    {
      "latitude": 51.027283,
      "longitude": 6.864748,
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1656850383,
      "ems": null
    },
    {
      "latitude": 51.028336,
      "longitude": 6.864228,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1656850386,
      "ems": null
    },
    {
      "latitude": 51.030609,
      "longitude": 6.862717,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656850392,
      "ems": null
    },
    {
      "latitude": 51.031769,
      "longitude": 6.861927,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656850395,
      "ems": null
    },
    {
      "latitude": 51.034054,
      "longitude": 6.860428,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1656850401,
      "ems": null
    },
    {
      "latitude": 51.03503,
      "longitude": 6.859741,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656850404,
      "ems": null
    },
    {
      "latitude": 51.036102,
      "longitude": 6.858978,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656850407,
      "ems": null
    },
    {
      "latitude": 51.037361,
      "longitude": 6.858139,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656850410,
      "ems": null
    },
    {
      "latitude": 51.038452,
      "longitude": 6.857325,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656850413,
      "ems": null
    },
    {
      "latitude": 51.040897,
      "longitude": 6.855469,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656850419,
      "ems": null
    },
    {
      "latitude": 51.042713,
      "longitude": 6.854095,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656850425,
      "ems": null
    },
    {
      "latitude": 51.043854,
      "longitude": 6.853168,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656850428,
      "ems": null
    },
    {
      "latitude": 51.045135,
      "longitude": 6.852054,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656850431,
      "ems": null
    },
    {
      "latitude": 51.046249,
      "longitude": 6.851044,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656850435,
      "ems": null
    },
    {
      "latitude": 51.048477,
      "longitude": 6.849085,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656850440,
      "ems": null
    },
    {
      "latitude": 51.050861,
      "longitude": 6.847076,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656850446,
      "ems": null
    },
    {
      "latitude": 51.052963,
      "longitude": 6.845373,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656850452,
      "ems": null
    },
    {
      "latitude": 51.053978,
      "longitude": 6.844635,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656850455,
      "ems": null
    },
    {
      "latitude": 51.054977,
      "longitude": 6.843963,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656850458,
      "ems": null
    },
    {
      "latitude": 51.055939,
      "longitude": 6.843369,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1656850461,
      "ems": null
    },
    {
      "latitude": 51.056633,
      "longitude": 6.84288,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1656850465,
      "ems": null
    },
    {
      "latitude": 51.057938,
      "longitude": 6.842041,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1656850467,
      "ems": null
    },
    {
      "latitude": 51.058914,
      "longitude": 6.841431,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1656850471,
      "ems": null
    },
    {
      "latitude": 51.059967,
      "longitude": 6.840845,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1656850474,
      "ems": null
    },
    {
      "latitude": 51.061798,
      "longitude": 6.8396,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656850480,
      "ems": null
    },
    {
      "latitude": 51.063721,
      "longitude": 6.83847,
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1656850485,
      "ems": null
    },
    {
      "latitude": 51.064777,
      "longitude": 6.837997,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1656850488,
      "ems": null
    },
    {
      "latitude": 51.065708,
      "longitude": 6.837616,
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1656850491,
      "ems": null
    },
    {
      "latitude": 51.067886,
      "longitude": 6.836465,
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1656850497,
      "ems": null
    },
    {
      "latitude": 51.070087,
      "longitude": 6.835403,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1656850504,
      "ems": null
    },
    {
      "latitude": 51.070953,
      "longitude": 6.834832,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1656850506,
      "ems": null
    },
    {
      "latitude": 51.073288,
      "longitude": 6.833422,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1656850512,
      "ems": null
    },
    {
      "latitude": 51.07457,
      "longitude": 6.832605,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1656850516,
      "ems": null
    },
    {
      "latitude": 51.075672,
      "longitude": 6.831818,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656850518,
      "ems": null
    },
    {
      "latitude": 51.076603,
      "longitude": 6.831131,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656850521,
      "ems": null
    },
    {
      "latitude": 51.077545,
      "longitude": 6.830379,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656850524,
      "ems": null
    },
    {
      "latitude": 51.078884,
      "longitude": 6.8293,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656850527,
      "ems": null
    },
    {
      "latitude": 51.081585,
      "longitude": 6.827469,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1656850536,
      "ems": null
    },
    {
      "latitude": 51.084824,
      "longitude": 6.825256,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656850544,
      "ems": null
    },
    {
      "latitude": 51.087708,
      "longitude": 6.823178,
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
      "heading": 337,
      "squawk": "6502",
      "timestamp": 1656850552,
      "ems": null
    },
    {
      "latitude": 51.090336,
      "longitude": 6.821365,
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
      "heading": 337,
      "squawk": "6502",
      "timestamp": 1656850559,
      "ems": null
    },
    {
      "latitude": 51.092617,
      "longitude": 6.819916,
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
      "heading": 338,
      "squawk": "6502",
      "timestamp": 1656850565,
      "ems": null
    },
    {
      "latitude": 51.094803,
      "longitude": 6.818575,
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
      "heading": 338,
      "squawk": "6502",
      "timestamp": 1656850571,
      "ems": null
    },
    {
      "latitude": 51.097038,
      "longitude": 6.817017,
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
      "heading": 334,
      "squawk": "6502",
      "timestamp": 1656850576,
      "ems": null
    },
    {
      "latitude": 51.099369,
      "longitude": 6.815262,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 335,
      "squawk": "6502",
      "timestamp": 1656850582,
      "ems": null
    },
    {
      "latitude": 51.101696,
      "longitude": 6.813583,
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
      "heading": 336,
      "squawk": "6502",
      "timestamp": 1656850589,
      "ems": null
    },
    {
      "latitude": 51.104004,
      "longitude": 6.812043,
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
      "heading": 336,
      "squawk": "6503",
      "timestamp": 1656850595,
      "ems": null
    },
    {
      "latitude": 51.106293,
      "longitude": 6.81041,
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
      "heading": 335,
      "squawk": "6503",
      "timestamp": 1656850601,
      "ems": null
    },
    {
      "latitude": 51.108536,
      "longitude": 6.808777,
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
      "heading": 335,
      "squawk": "6503",
      "timestamp": 1656850607,
      "ems": null
    },
    {
      "latitude": 51.110641,
      "longitude": 6.807144,
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
      "heading": 334,
      "squawk": "6503",
      "timestamp": 1656850613,
      "ems": null
    },
    {
      "latitude": 51.112976,
      "longitude": 6.805511,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "6503",
      "timestamp": 1656850619,
      "ems": null
    },
    {
      "latitude": 51.115242,
      "longitude": 6.804276,
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
      "heading": 341,
      "squawk": "6503",
      "timestamp": 1656850625,
      "ems": null
    },
    {
      "latitude": 51.117462,
      "longitude": 6.803135,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 343,
      "squawk": "6503",
      "timestamp": 1656850631,
      "ems": null
    },
    {
      "latitude": 51.118687,
      "longitude": 6.802597,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 344,
      "squawk": "6503",
      "timestamp": 1656850634,
      "ems": null
    },
    {
      "latitude": 51.119431,
      "longitude": 6.802292,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 345,
      "squawk": "6503",
      "timestamp": 1656850636,
      "ems": null
    },
    {
      "latitude": 51.120987,
      "longitude": 6.801725,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 346,
      "squawk": "6503",
      "timestamp": 1656850640,
      "ems": null
    },
    {
      "latitude": 51.12199,
      "longitude": 6.801376,
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
      "heading": 347,
      "squawk": "6503",
      "timestamp": 1656850642,
      "ems": null
    },
    {
      "latitude": 51.123203,
      "longitude": 6.800919,
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
      "heading": 347,
      "squawk": "6503",
      "timestamp": 1656850646,
      "ems": null
    },
    {
      "latitude": 51.123573,
      "longitude": 6.800842,
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
      "heading": 349,
      "squawk": "6503",
      "timestamp": 1656850647,
      "ems": null
    },
    {
      "latitude": 51.126801,
      "longitude": 6.799424,
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
      "heading": 343,
      "squawk": "6503",
      "timestamp": 1656850656,
      "ems": null
    },
    {
      "latitude": 51.129181,
      "longitude": 6.798384,
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
      "heading": 343,
      "squawk": "6503",
      "timestamp": 1656850661,
      "ems": null
    },
    {
      "latitude": 51.130047,
      "longitude": 6.797791,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 330,
      "squawk": "6503",
      "timestamp": 1656850665,
      "ems": null
    },
    {
      "latitude": 51.13121,
      "longitude": 6.796417,
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
      "heading": 320,
      "squawk": "6503",
      "timestamp": 1656850669,
      "ems": null
    },
    {
      "latitude": 51.132065,
      "longitude": 6.795267,
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
      "heading": 319,
      "squawk": "6503",
      "timestamp": 1656850673,
      "ems": null
    },
    {
      "latitude": 51.133484,
      "longitude": 6.793336,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 319,
      "squawk": "6503",
      "timestamp": 1656850677,
      "ems": null
    },
    {
      "latitude": 51.134701,
      "longitude": 6.791763,
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
      "heading": 322,
      "squawk": "6503",
      "timestamp": 1656850681,
      "ems": null
    },
    {
      "latitude": 51.135445,
      "longitude": 6.790848,
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
      "heading": 324,
      "squawk": "6503",
      "timestamp": 1656850684,
      "ems": null
    },
    {
      "latitude": 51.136414,
      "longitude": 6.789773,
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
      "heading": 325,
      "squawk": "6503",
      "timestamp": 1656850686,
      "ems": null
    },
    {
      "latitude": 51.138336,
      "longitude": 6.787918,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 330,
      "squawk": "6503",
      "timestamp": 1656850692,
      "ems": null
    },
    {
      "latitude": 51.139481,
      "longitude": 6.786952,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 331,
      "squawk": "6503",
      "timestamp": 1656850696,
      "ems": null
    },
    {
      "latitude": 51.140518,
      "longitude": 6.786118,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 334,
      "squawk": "6503",
      "timestamp": 1656850699,
      "ems": null
    },
    {
      "latitude": 51.141724,
      "longitude": 6.785319,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 338,
      "squawk": "6503",
      "timestamp": 1656850702,
      "ems": null
    },
    {
      "latitude": 51.142754,
      "longitude": 6.784744,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 340,
      "squawk": "6503",
      "timestamp": 1656850705,
      "ems": null
    },
    {
      "latitude": 51.144241,
      "longitude": 6.783909,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 340,
      "squawk": "6503",
      "timestamp": 1656850708,
      "ems": null
    },
    {
      "latitude": 51.145523,
      "longitude": 6.783167,
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
      "heading": 340,
      "squawk": "6503",
      "timestamp": 1656850711,
      "ems": null
    },
    {
      "latitude": 51.146709,
      "longitude": 6.782532,
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
      "heading": 341,
      "squawk": "6503",
      "timestamp": 1656850714,
      "ems": null
    },
    {
      "latitude": 51.147038,
      "longitude": 6.782379,
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
      "heading": 341,
      "squawk": "6503",
      "timestamp": 1656850715,
      "ems": null
    },
    {
      "latitude": 51.148621,
      "longitude": 6.78154,
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
      "heading": 341,
      "squawk": "6503",
      "timestamp": 1656850718,
      "ems": null
    },
    {
      "latitude": 51.149826,
      "longitude": 6.780866,
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
      "heading": 340,
      "squawk": "6503",
      "timestamp": 1656850721,
      "ems": null
    },
    {
      "latitude": 51.15062,
      "longitude": 6.780396,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 341,
      "squawk": "6503",
      "timestamp": 1656850723,
      "ems": null
    },
    {
      "latitude": 51.151978,
      "longitude": 6.779752,
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
      "heading": 341,
      "squawk": "6503",
      "timestamp": 1656850727,
      "ems": null
    },
    {
      "latitude": 51.154541,
      "longitude": 6.778045,
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
      "heading": 335,
      "squawk": "6503",
      "timestamp": 1656850733,
      "ems": null
    },
    {
      "latitude": 51.155743,
      "longitude": 6.777115,
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
      "heading": 333,
      "squawk": "6503",
      "timestamp": 1656850736,
      "ems": null
    },
    {
      "latitude": 51.156326,
      "longitude": 6.776709,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 335,
      "squawk": "6503",
      "timestamp": 1656850739,
      "ems": null
    },
    {
      "latitude": 51.15807,
      "longitude": 6.775436,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 336,
      "squawk": "6503",
      "timestamp": 1656850742,
      "ems": null
    },
    {
      "latitude": 51.158627,
      "longitude": 6.775055,
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
      "heading": 336,
      "squawk": "6503",
      "timestamp": 1656850745,
      "ems": null
    },
    {
      "latitude": 51.161514,
      "longitude": 6.773224,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 338,
      "squawk": "6503",
      "timestamp": 1656850751,
      "ems": null
    },
    {
      "latitude": 51.163742,
      "longitude": 6.771735,
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
      "heading": 336,
      "squawk": "6503",
      "timestamp": 1656850757,
      "ems": null
    },
    {
      "latitude": 51.166218,
      "longitude": 6.770096,
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
      "heading": 337,
      "squawk": "6503",
      "timestamp": 1656850763,
      "ems": null
    },
    {
      "latitude": 51.167358,
      "longitude": 6.769434,
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
      "heading": 339,
      "squawk": "6503",
      "timestamp": 1656850766,
      "ems": null
    },
    {
      "latitude": 51.169567,
      "longitude": 6.768188,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 341,
      "squawk": "6503",
      "timestamp": 1656850772,
      "ems": null
    },
    {
      "latitude": 51.170361,
      "longitude": 6.767731,
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
      "heading": 341,
      "squawk": "6503",
      "timestamp": 1656850775,
      "ems": null
    },
    {
      "latitude": 51.172592,
      "longitude": 6.76651,
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
      "heading": 336,
      "squawk": "6503",
      "timestamp": 1656850781,
      "ems": null
    },
    {
      "latitude": 51.1745,
      "longitude": 6.76498,
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
      "heading": 329,
      "squawk": "6503",
      "timestamp": 1656850785,
      "ems": null
    },
    {
      "latitude": 51.175415,
      "longitude": 6.764089,
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
      "heading": 329,
      "squawk": "6503",
      "timestamp": 1656850789,
      "ems": null
    },
    {
      "latitude": 51.176922,
      "longitude": 6.762466,
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
      "heading": 325,
      "squawk": "6503",
      "timestamp": 1656850793,
      "ems": null
    },
    {
      "latitude": 51.17775,
      "longitude": 6.761565,
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
      "heading": 324,
      "squawk": "6503",
      "timestamp": 1656850797,
      "ems": null
    },
    {
      "latitude": 51.179623,
      "longitude": 6.759567,
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
      "heading": 325,
      "squawk": "6503",
      "timestamp": 1656850801,
      "ems": null
    },
    {
      "latitude": 51.180462,
      "longitude": 6.758499,
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
      "heading": 323,
      "squawk": "6503",
      "timestamp": 1656850804,
      "ems": null
    },
    {
      "latitude": 51.181595,
      "longitude": 6.757112,
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
      "heading": 320,
      "squawk": "6503",
      "timestamp": 1656850807,
      "ems": null
    },
    {
      "latitude": 51.181858,
      "longitude": 6.756744,
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
      "heading": 323,
      "squawk": "6503",
      "timestamp": 1656850810,
      "ems": null
    },
    {
      "latitude": 51.184341,
      "longitude": 6.754068,
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
      "heading": 325,
      "squawk": "6503",
      "timestamp": 1656850816,
      "ems": null
    },
    {
      "latitude": 51.185715,
      "longitude": 6.752435,
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
      "heading": 322,
      "squawk": "6503",
      "timestamp": 1656850821,
      "ems": null
    },
    {
      "latitude": 51.187958,
      "longitude": 6.749763,
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
      "heading": 323,
      "squawk": "6503",
      "timestamp": 1656850828,
      "ems": null
    },
    {
      "latitude": 51.189697,
      "longitude": 6.747832,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 326,
      "squawk": "6503",
      "timestamp": 1656850834,
      "ems": null
    },
    {
      "latitude": 51.190521,
      "longitude": 6.747016,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 326,
      "squawk": "6503",
      "timestamp": 1656850837,
      "ems": null
    },
    {
      "latitude": 51.192657,
      "longitude": 6.744614,
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
      "heading": 326,
      "squawk": "6503",
      "timestamp": 1656850844,
      "ems": null
    },
    {
      "latitude": 51.193451,
      "longitude": 6.743851,
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
      "heading": 330,
      "squawk": "6503",
      "timestamp": 1656850847,
      "ems": null
    },
    {
      "latitude": 51.194473,
      "longitude": 6.742935,
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
      "heading": 331,
      "squawk": "6503",
      "timestamp": 1656850850,
      "ems": null
    },
    {
      "latitude": 51.195499,
      "longitude": 6.742096,
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
      "heading": 331,
      "squawk": "6503",
      "timestamp": 1656850853,
      "ems": null
    },
    {
      "latitude": 51.196335,
      "longitude": 6.741333,
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
      "heading": 330,
      "squawk": "6503",
      "timestamp": 1656850856,
      "ems": null
    },
    {
      "latitude": 51.198303,
      "longitude": 6.739444,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 328,
      "squawk": "6503",
      "timestamp": 1656850862,
      "ems": null
    },
    {
      "latitude": 51.200317,
      "longitude": 6.737588,
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
      "heading": 332,
      "squawk": "6503",
      "timestamp": 1656850868,
      "ems": null
    },
    {
      "latitude": 51.201279,
      "longitude": 6.736846,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 333,
      "squawk": "6503",
      "timestamp": 1656850871,
      "ems": null
    },
    {
      "latitude": 51.201736,
      "longitude": 6.73645,
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
      "heading": 336,
      "squawk": "6503",
      "timestamp": 1656850874,
      "ems": null
    },
    {
      "latitude": 51.203598,
      "longitude": 6.735229,
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
      "heading": 336,
      "squawk": "6503",
      "timestamp": 1656850877,
      "ems": null
    },
    {
      "latitude": 51.2043,
      "longitude": 6.734694,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 336,
      "squawk": "6503",
      "timestamp": 1656850880,
      "ems": null
    },
    {
      "latitude": 51.205719,
      "longitude": 6.733803,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 339,
      "squawk": "6503",
      "timestamp": 1656850883,
      "ems": null
    },
    {
      "latitude": 51.207088,
      "longitude": 6.733093,
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
      "heading": 341,
      "squawk": "6503",
      "timestamp": 1656850886,
      "ems": null
    },
    {
      "latitude": 51.209324,
      "longitude": 6.731949,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 343,
      "squawk": "6503",
      "timestamp": 1656850892,
      "ems": null
    },
    {
      "latitude": 51.210663,
      "longitude": 6.731279,
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
      "heading": 341,
      "squawk": "6503",
      "timestamp": 1656850895,
      "ems": null
    },
    {
      "latitude": 51.211929,
      "longitude": 6.730652,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 346,
      "squawk": "6503",
      "timestamp": 1656850898,
      "ems": null
    },
    {
      "latitude": 51.213181,
      "longitude": 6.730388,
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
      "heading": 354,
      "squawk": "6503",
      "timestamp": 1656850901,
      "ems": null
    },
    {
      "latitude": 51.214783,
      "longitude": 6.730462,
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
      "heading": 5,
      "squawk": "6503",
      "timestamp": 1656850904,
      "ems": null
    },
    {
      "latitude": 51.215561,
      "longitude": 6.730804,
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
      "heading": 15,
      "squawk": "6503",
      "timestamp": 1656850906,
      "ems": null
    },
    {
      "latitude": 51.2164,
      "longitude": 6.731262,
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
      "heading": 22,
      "squawk": "6503",
      "timestamp": 1656850909,
      "ems": null
    },
    {
      "latitude": 51.217941,
      "longitude": 6.732466,
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
      "heading": 27,
      "squawk": "6503",
      "timestamp": 1656850912,
      "ems": null
    },
    {
      "latitude": 51.219543,
      "longitude": 6.733877,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 28,
      "squawk": "6503",
      "timestamp": 1656850916,
      "ems": null
    },
    {
      "latitude": 51.219864,
      "longitude": 6.734099,
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
      "heading": 27,
      "squawk": "6503",
      "timestamp": 1656850919,
      "ems": null
    },
    {
      "latitude": 51.221786,
      "longitude": 6.735955,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 34,
      "squawk": "6503",
      "timestamp": 1656850922,
      "ems": null
    },
    {
      "latitude": 51.222637,
      "longitude": 6.736984,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 37,
      "squawk": "6503",
      "timestamp": 1656850925,
      "ems": null
    },
    {
      "latitude": 51.223984,
      "longitude": 6.738776,
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
      "heading": 39,
      "squawk": "6503",
      "timestamp": 1656850928,
      "ems": null
    },
    {
      "latitude": 51.225037,
      "longitude": 6.740038,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 35,
      "squawk": "6503",
      "timestamp": 1656850931,
      "ems": null
    },
    {
      "latitude": 51.225311,
      "longitude": 6.740335,
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
      "heading": 33,
      "squawk": "6503",
      "timestamp": 1656850934,
      "ems": null
    },
    {
      "latitude": 51.227573,
      "longitude": 6.74263,
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
      "heading": 32,
      "squawk": "6503",
      "timestamp": 1656850937,
      "ems": null
    },
    {
      "latitude": 51.22847,
      "longitude": 6.743527,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 30,
      "squawk": "6503",
      "timestamp": 1656850940,
      "ems": null
    },
    {
      "latitude": 51.230785,
      "longitude": 6.745682,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 30,
      "squawk": "6503",
      "timestamp": 1656850946,
      "ems": null
    },
    {
      "latitude": 51.231903,
      "longitude": 6.746644,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 28,
      "squawk": "6503",
      "timestamp": 1656850949,
      "ems": null
    },
    {
      "latitude": 51.233047,
      "longitude": 6.747684,
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
      "heading": 28,
      "squawk": "6503",
      "timestamp": 1656850952,
      "ems": null
    },
    {
      "latitude": 51.234089,
      "longitude": 6.748581,
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
      "heading": 26,
      "squawk": "6503",
      "timestamp": 1656850955,
      "ems": null
    },
    {
      "latitude": 51.23502,
      "longitude": 6.749268,
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
      "heading": 23,
      "squawk": "6503",
      "timestamp": 1656850958,
      "ems": null
    },
    {
      "latitude": 51.236298,
      "longitude": 6.750134,
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
      "heading": 22,
      "squawk": "6503",
      "timestamp": 1656850961,
      "ems": null
    },
    {
      "latitude": 51.237347,
      "longitude": 6.75087,
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
      "heading": 23,
      "squawk": "6503",
      "timestamp": 1656850964,
      "ems": null
    },
    {
      "latitude": 51.238327,
      "longitude": 6.751556,
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
      "heading": 23,
      "squawk": "6503",
      "timestamp": 1656850967,
      "ems": null
    },
    {
      "latitude": 51.23941,
      "longitude": 6.752212,
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
      "heading": 21,
      "squawk": "6503",
      "timestamp": 1656850970,
      "ems": null
    },
    {
      "latitude": 51.2407,
      "longitude": 6.753082,
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
      "heading": 20,
      "squawk": "6503",
      "timestamp": 1656850973,
      "ems": null
    },
    {
      "latitude": 51.243771,
      "longitude": 6.755447,
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
      "heading": 27,
      "squawk": "6503",
      "timestamp": 1656850982,
      "ems": null
    },
    {
      "latitude": 51.245361,
      "longitude": 6.756889,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 30,
      "squawk": "6503",
      "timestamp": 1656850986,
      "ems": null
    },
    {
      "latitude": 51.246506,
      "longitude": 6.758002,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 30,
      "squawk": "6503",
      "timestamp": 1656850990,
      "ems": null
    },
    {
      "latitude": 51.247452,
      "longitude": 6.758881,
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
      "heading": 30,
      "squawk": "6503",
      "timestamp": 1656850994,
      "ems": null
    },
    {
      "latitude": 51.248894,
      "longitude": 6.76033,
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
      "heading": 31,
      "squawk": "6503",
      "timestamp": 1656850998,
      "ems": null
    },
    {
      "latitude": 51.2509,
      "longitude": 6.762382,
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
      "heading": 32,
      "squawk": "6503",
      "timestamp": 1656851002,
      "ems": null
    },
    {
      "latitude": 51.251827,
      "longitude": 6.763229,
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
      "heading": 30,
      "squawk": "6503",
      "timestamp": 1656851006,
      "ems": null
    },
    {
      "latitude": 51.253735,
      "longitude": 6.764984,
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
      "heading": 28,
      "squawk": "6503",
      "timestamp": 1656851009,
      "ems": null
    },
    {
      "latitude": 51.256668,
      "longitude": 6.76796,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 32,
      "squawk": "6503",
      "timestamp": 1656851018,
      "ems": null
    },
    {
      "latitude": 51.259415,
      "longitude": 6.77077,
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
      "heading": 34,
      "squawk": "6503",
      "timestamp": 1656851026,
      "ems": null
    },
    {
      "latitude": 51.261929,
      "longitude": 6.773376,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 33,
      "squawk": "6503",
      "timestamp": 1656851034,
      "ems": null
    },
    {
      "latitude": 51.264908,
      "longitude": 6.776412,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 32,
      "squawk": "6503",
      "timestamp": 1656851043,
      "ems": null
    },
    {
      "latitude": 51.267334,
      "longitude": 6.778862,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 30,
      "squawk": "6503",
      "timestamp": 1656851049,
      "ems": null
    },
    {
      "latitude": 51.268398,
      "longitude": 6.779709,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 24,
      "squawk": "6503",
      "timestamp": 1656851051,
      "ems": null
    },
    {
      "latitude": 51.269943,
      "longitude": 6.780717,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 22,
      "squawk": "6503",
      "timestamp": 1656851055,
      "ems": null
    },
    {
      "latitude": 51.271145,
      "longitude": 6.78154,
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
      "heading": 21,
      "squawk": "6503",
      "timestamp": 1656851058,
      "ems": null
    },
    {
      "latitude": 51.272404,
      "longitude": 6.782227,
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
      "heading": 18,
      "squawk": "6503",
      "timestamp": 1656851061,
      "ems": null
    },
    {
      "latitude": 51.273705,
      "longitude": 6.782837,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 17,
      "squawk": "6503",
      "timestamp": 1656851064,
      "ems": null
    },
    {
      "latitude": 51.27475,
      "longitude": 6.783241,
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
      "heading": 12,
      "squawk": "6503",
      "timestamp": 1656851066,
      "ems": null
    },
    {
      "latitude": 51.276264,
      "longitude": 6.7836,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 7,
      "squawk": "6503",
      "timestamp": 1656851069,
      "ems": null
    },
    {
      "latitude": 51.277634,
      "longitude": 6.783909,
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
      "heading": 8,
      "squawk": "6503",
      "timestamp": 1656851072,
      "ems": null
    },
    {
      "latitude": 51.27919,
      "longitude": 6.78428,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 8,
      "squawk": "6503",
      "timestamp": 1656851075,
      "ems": null
    },
    {
      "latitude": 51.280472,
      "longitude": 6.784503,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 7,
      "squawk": "6503",
      "timestamp": 1656851078,
      "ems": null
    },
    {
      "latitude": 51.281807,
      "longitude": 6.784821,
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
      "heading": 7,
      "squawk": "6503",
      "timestamp": 1656851082,
      "ems": null
    },
    {
      "latitude": 51.283127,
      "longitude": 6.785097,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 7,
      "squawk": "6503",
      "timestamp": 1656851085,
      "ems": null
    },
    {
      "latitude": 51.284454,
      "longitude": 6.785319,
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
      "heading": 4,
      "squawk": "6503",
      "timestamp": 1656851088,
      "ems": null
    },
    {
      "latitude": 51.285717,
      "longitude": 6.785507,
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
      "heading": 4,
      "squawk": "6503",
      "timestamp": 1656851090,
      "ems": null
    },
    {
      "latitude": 51.287018,
      "longitude": 6.785691,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 4,
      "squawk": "6503",
      "timestamp": 1656851094,
      "ems": null
    },
    {
      "latitude": 51.288418,
      "longitude": 6.785889,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 4,
      "squawk": "6503",
      "timestamp": 1656851097,
      "ems": null
    },
    {
      "latitude": 51.291046,
      "longitude": 6.785988,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 359,
      "squawk": "6503",
      "timestamp": 1656851102,
      "ems": null
    },
    {
      "latitude": 51.291962,
      "longitude": 6.785988,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 358,
      "squawk": "6503",
      "timestamp": 1656851105,
      "ems": null
    },
    {
      "latitude": 51.293747,
      "longitude": 6.785913,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 358,
      "squawk": "6503",
      "timestamp": 1656851108,
      "ems": null
    },
    {
      "latitude": 51.294983,
      "longitude": 6.785839,
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
      "heading": 357,
      "squawk": "6503",
      "timestamp": 1656851112,
      "ems": null
    },
    {
      "latitude": 51.296402,
      "longitude": 6.785691,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 354,
      "squawk": "6503",
      "timestamp": 1656851115,
      "ems": null
    },
    {
      "latitude": 51.29768,
      "longitude": 6.785507,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 353,
      "squawk": "6503",
      "timestamp": 1656851117,
      "ems": null
    },
    {
      "latitude": 51.299168,
      "longitude": 6.785278,
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
      "heading": 355,
      "squawk": "6503",
      "timestamp": 1656851121,
      "ems": null
    },
    {
      "latitude": 51.300194,
      "longitude": 6.785126,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 356,
      "squawk": "6503",
      "timestamp": 1656851123,
      "ems": null
    },
    {
      "latitude": 51.301636,
      "longitude": 6.784973,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 355,
      "squawk": "6503",
      "timestamp": 1656851126,
      "ems": null
    },
    {
      "latitude": 51.303127,
      "longitude": 6.784592,
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
      "heading": 351,
      "squawk": "6503",
      "timestamp": 1656851130,
      "ems": null
    },
    {
      "latitude": 51.30423,
      "longitude": 6.78428,
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
      "heading": 346,
      "squawk": "6503",
      "timestamp": 1656851133,
      "ems": null
    },
    {
      "latitude": 51.305145,
      "longitude": 6.783761,
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
      "heading": 344,
      "squawk": "6503",
      "timestamp": 1656851135,
      "ems": null
    },
    {
      "latitude": 51.306702,
      "longitude": 6.782722,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 337,
      "squawk": "6503",
      "timestamp": 1656851138,
      "ems": null
    },
    {
      "latitude": 51.307709,
      "longitude": 6.782127,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 339,
      "squawk": "6503",
      "timestamp": 1656851141,
      "ems": null
    },
    {
      "latitude": 51.308304,
      "longitude": 6.781756,
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
      "heading": 340,
      "squawk": "6503",
      "timestamp": 1656851144,
      "ems": null
    },
    {
      "latitude": 51.31041,
      "longitude": 6.780495,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 338,
      "squawk": "6503",
      "timestamp": 1656851147,
      "ems": null
    },
    {
      "latitude": 51.312241,
      "longitude": 6.779307,
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
      "heading": 338,
      "squawk": "6503",
      "timestamp": 1656851151,
      "ems": null
    },
    {
      "latitude": 51.313602,
      "longitude": 6.778564,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 340,
      "squawk": "6503",
      "timestamp": 1656851155,
      "ems": null
    },
    {
      "latitude": 51.315231,
      "longitude": 6.777802,
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
      "heading": 344,
      "squawk": "6503",
      "timestamp": 1656851159,
      "ems": null
    },
    {
      "latitude": 51.318443,
      "longitude": 6.776505,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 346,
      "squawk": "6503",
      "timestamp": 1656851167,
      "ems": null
    },
    {
      "latitude": 51.319977,
      "longitude": 6.77597,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 346,
      "squawk": "6503",
      "timestamp": 1656851171,
      "ems": null
    },
    {
      "latitude": 51.321671,
      "longitude": 6.775447,
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
      "heading": 349,
      "squawk": "6503",
      "timestamp": 1656851175,
      "ems": null
    },
    {
      "latitude": 51.323284,
      "longitude": 6.774979,
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
      "heading": 349,
      "squawk": "6503",
      "timestamp": 1656851179,
      "ems": null
    },
    {
      "latitude": 51.32515,
      "longitude": 6.774407,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "6503",
      "timestamp": 1656851183,
      "ems": null
    },
    {
      "latitude": 51.326569,
      "longitude": 6.773962,
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
      "heading": 349,
      "squawk": "6503",
      "timestamp": 1656851187,
      "ems": null
    },
    {
      "latitude": 51.329941,
      "longitude": 6.772919,
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
      "heading": 347,
      "squawk": "6503",
      "timestamp": 1656851195,
      "ems": null
    },
    {
      "latitude": 51.332363,
      "longitude": 6.771927,
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
      "heading": 343,
      "squawk": "6503",
      "timestamp": 1656851200,
      "ems": null
    },
    {
      "latitude": 51.333664,
      "longitude": 6.77129,
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
      "heading": 344,
      "squawk": "6503",
      "timestamp": 1656851203,
      "ems": null
    },
    {
      "latitude": 51.335953,
      "longitude": 6.770399,
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
      "heading": 348,
      "squawk": "6503",
      "timestamp": 1656851209,
      "ems": null
    },
    {
      "latitude": 51.338013,
      "longitude": 6.769805,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 349,
      "squawk": "6503",
      "timestamp": 1656851215,
      "ems": null
    },
    {
      "latitude": 51.341301,
      "longitude": 6.768723,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 348,
      "squawk": "6503",
      "timestamp": 1656851221,
      "ems": null
    },
    {
      "latitude": 51.343369,
      "longitude": 6.768098,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 349,
      "squawk": "6503",
      "timestamp": 1656851227,
      "ems": null
    },
    {
      "latitude": 51.345108,
      "longitude": 6.767578,
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
      "heading": 349,
      "squawk": "6503",
      "timestamp": 1656851230,
      "ems": null
    },
    {
      "latitude": 51.347538,
      "longitude": 6.766815,
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
      "heading": 348,
      "squawk": "6503",
      "timestamp": 1656851237,
      "ems": null
    },
    {
      "latitude": 51.349594,
      "longitude": 6.766168,
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
      "heading": 350,
      "squawk": "6503",
      "timestamp": 1656851243,
      "ems": null
    },
    {
      "latitude": 51.352936,
      "longitude": 6.765442,
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
      "heading": 353,
      "squawk": "6503",
      "timestamp": 1656851249,
      "ems": null
    },
    {
      "latitude": 51.354893,
      "longitude": 6.76506,
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
      "heading": 351,
      "squawk": "6503",
      "timestamp": 1656851255,
      "ems": null
    },
    {
      "latitude": 51.35778,
      "longitude": 6.764297,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 350,
      "squawk": "6503",
      "timestamp": 1656851260,
      "ems": null
    },
    {
      "latitude": 51.360294,
      "longitude": 6.763611,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "6503",
      "timestamp": 1656851266,
      "ems": null
    },
    {
      "latitude": 51.362183,
      "longitude": 6.762901,
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
      "heading": 347,
      "squawk": "6503",
      "timestamp": 1656851272,
      "ems": null
    },
    {
      "latitude": 51.365273,
      "longitude": 6.761703,
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
      "heading": 345,
      "squawk": "6503",
      "timestamp": 1656851278,
      "ems": null
    },
    {
      "latitude": 51.366531,
      "longitude": 6.761194,
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
      "heading": 346,
      "squawk": "6503",
      "timestamp": 1656851281,
      "ems": null
    },
    {
      "latitude": 51.369141,
      "longitude": 6.760377,
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
      "heading": 347,
      "squawk": "6503",
      "timestamp": 1656851288,
      "ems": null
    },
    {
      "latitude": 51.371746,
      "longitude": 6.759491,
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
      "heading": 349,
      "squawk": "6503",
      "timestamp": 1656851294,
      "ems": null
    },
    {
      "latitude": 51.37421,
      "longitude": 6.758728,
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
      "heading": 348,
      "squawk": "6503",
      "timestamp": 1656851300,
      "ems": null
    },
    {
      "latitude": 51.376648,
      "longitude": 6.757928,
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
      "heading": 347,
      "squawk": "6503",
      "timestamp": 1656851306,
      "ems": null
    },
    {
      "latitude": 51.378983,
      "longitude": 6.757112,
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
      "heading": 348,
      "squawk": "6503",
      "timestamp": 1656851312,
      "ems": null
    },
    {
      "latitude": 51.381592,
      "longitude": 6.756369,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "6503",
      "timestamp": 1656851318,
      "ems": null
    },
    {
      "latitude": 51.384064,
      "longitude": 6.755701,
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
      "heading": 351,
      "squawk": "6503",
      "timestamp": 1656851324,
      "ems": null
    },
    {
      "latitude": 51.386581,
      "longitude": 6.755107,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 351,
      "squawk": "6503",
      "timestamp": 1656851330,
      "ems": null
    },
    {
      "latitude": 51.389061,
      "longitude": 6.754532,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 351,
      "squawk": "6503",
      "timestamp": 1656851336,
      "ems": null
    },
    {
      "latitude": 51.391808,
      "longitude": 6.753922,
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
      "heading": 351,
      "squawk": "6503",
      "timestamp": 1656851342,
      "ems": null
    },
    {
      "latitude": 51.393112,
      "longitude": 6.753616,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 353,
      "squawk": "6503",
      "timestamp": 1656851345,
      "ems": null
    },
    {
      "latitude": 51.395767,
      "longitude": 6.753387,
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
      "heading": 358,
      "squawk": "6503",
      "timestamp": 1656851351,
      "ems": null
    },
    {
      "latitude": 51.397068,
      "longitude": 6.753311,
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
      "heading": 357,
      "squawk": "6503",
      "timestamp": 1656851354,
      "ems": null
    },
    {
      "latitude": 51.399628,
      "longitude": 6.752954,
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
      "heading": 353,
      "squawk": "6503",
      "timestamp": 1656851360,
      "ems": null
    },
    {
      "latitude": 51.402283,
      "longitude": 6.75236,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 352,
      "squawk": "6503",
      "timestamp": 1656851366,
      "ems": null
    },
    {
      "latitude": 51.404617,
      "longitude": 6.751618,
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
      "heading": 345,
      "squawk": "6503",
      "timestamp": 1656851372,
      "ems": null
    },
    {
      "latitude": 51.40567,
      "longitude": 6.751173,
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
      "heading": 346,
      "squawk": "6503",
      "timestamp": 1656851375,
      "ems": null
    },
    {
      "latitude": 51.407227,
      "longitude": 6.750431,
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
      "heading": 342,
      "squawk": "6503",
      "timestamp": 1656851378,
      "ems": null
    },
    {
      "latitude": 51.407776,
      "longitude": 6.750134,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 340,
      "squawk": "6503",
      "timestamp": 1656851381,
      "ems": null
    },
    {
      "latitude": 51.409637,
      "longitude": 6.749115,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 341,
      "squawk": "6503",
      "timestamp": 1656851384,
      "ems": null
    },
    {
      "latitude": 51.410709,
      "longitude": 6.748581,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 342,
      "squawk": "6503",
      "timestamp": 1656851387,
      "ems": null
    },
    {
      "latitude": 51.41217,
      "longitude": 6.747981,
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
      "heading": 345,
      "squawk": "6503",
      "timestamp": 1656851390,
      "ems": null
    },
    {
      "latitude": 51.414505,
      "longitude": 6.747164,
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
      "heading": 350,
      "squawk": "6503",
      "timestamp": 1656851396,
      "ems": null
    },
    {
      "latitude": 51.417206,
      "longitude": 6.746644,
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
      "heading": 353,
      "squawk": "6503",
      "timestamp": 1656851402,
      "ems": null
    },
    {
      "latitude": 51.418343,
      "longitude": 6.746445,
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
      "heading": 355,
      "squawk": "6503",
      "timestamp": 1656851405,
      "ems": null
    },
    {
      "latitude": 51.418945,
      "longitude": 6.746422,
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
      "heading": 356,
      "squawk": "6503",
      "timestamp": 1656851408,
      "ems": null
    },
    {
      "latitude": 51.420502,
      "longitude": 6.746348,
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
      "heading": 358,
      "squawk": "6503",
      "timestamp": 1656851410,
      "ems": null
    },
    {
      "latitude": 51.421928,
      "longitude": 6.746292,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 358,
      "squawk": "6503",
      "timestamp": 1656851414,
      "ems": null
    },
    {
      "latitude": 51.423203,
      "longitude": 6.746199,
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
      "heading": 357,
      "squawk": "6503",
      "timestamp": 1656851417,
      "ems": null
    },
    {
      "latitude": 51.424442,
      "longitude": 6.746063,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 356,
      "squawk": "6503",
      "timestamp": 1656851420,
      "ems": null
    },
    {
      "latitude": 51.42691,
      "longitude": 6.745828,
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
      "heading": 357,
      "squawk": "6503",
      "timestamp": 1656851426,
      "ems": null
    },
    {
      "latitude": 51.429375,
      "longitude": 6.745758,
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
      "heading": 359,
      "squawk": "6503",
      "timestamp": 1656851432,
      "ems": null
    },
    {
      "latitude": 51.43203,
      "longitude": 6.745682,
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
      "heading": 358,
      "squawk": "6503",
      "timestamp": 1656851438,
      "ems": null
    },
    {
      "latitude": 51.434498,
      "longitude": 6.745529,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 359,
      "squawk": "6503",
      "timestamp": 1656851444,
      "ems": null
    },
    {
      "latitude": 51.435654,
      "longitude": 6.745605,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 3,
      "squawk": "6503",
      "timestamp": 1656851447,
      "ems": null
    },
    {
      "latitude": 51.436966,
      "longitude": 6.745834,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 8,
      "squawk": "6503",
      "timestamp": 1656851450,
      "ems": null
    },
    {
      "latitude": 51.438221,
      "longitude": 6.746216,
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
      "heading": 11,
      "squawk": "6503",
      "timestamp": 1656851453,
      "ems": null
    },
    {
      "latitude": 51.439545,
      "longitude": 6.746644,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1656851456,
      "ems": null
    },
    {
      "latitude": 51.440872,
      "longitude": 6.747016,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1656851459,
      "ems": null
    },
    {
      "latitude": 51.442291,
      "longitude": 6.747387,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1656851462,
      "ems": null
    },
    {
      "latitude": 51.443527,
      "longitude": 6.747832,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1656851465,
      "ems": null
    },
    {
      "latitude": 51.444855,
      "longitude": 6.748278,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1656851468,
      "ems": null
    },
    {
      "latitude": 51.44632,
      "longitude": 6.74881,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1656851472,
      "ems": null
    },
    {
      "latitude": 51.447418,
      "longitude": 6.749243,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1656851474,
      "ems": null
    },
    {
      "latitude": 51.448517,
      "longitude": 6.749763,
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1656851477,
      "ems": null
    },
    {
      "latitude": 51.449936,
      "longitude": 6.750431,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1656851480,
      "ems": null
    },
    {
      "latitude": 51.451401,
      "longitude": 6.751173,
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1656851483,
      "ems": null
    },
    {
      "latitude": 51.452045,
      "longitude": 6.751404,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1656851486,
      "ems": null
    },
    {
      "latitude": 51.453537,
      "longitude": 6.75209,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1656851489,
      "ems": null
    },
    {
      "latitude": 51.455307,
      "longitude": 6.75293,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1656851492,
      "ems": null
    },
    {
      "latitude": 51.45813,
      "longitude": 6.754068,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1656851499,
      "ems": null
    },
    {
      "latitude": 51.460327,
      "longitude": 6.754588,
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1656851504,
      "ems": null
    },
    {
      "latitude": 51.462021,
      "longitude": 6.754884,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1656851508,
      "ems": null
    },
    {
      "latitude": 51.463394,
      "longitude": 6.755256,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1656851511,
      "ems": null
    },
    {
      "latitude": 51.464245,
      "longitude": 6.755447,
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1656851514,
      "ems": null
    },
    {
      "latitude": 51.465912,
      "longitude": 6.755775,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1656851516,
      "ems": null
    },
    {
      "latitude": 51.466339,
      "longitude": 6.755829,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1656851520,
      "ems": null
    },
    {
      "latitude": 51.468945,
      "longitude": 6.756363,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1656851524,
      "ems": null
    },
    {
      "latitude": 51.472065,
      "longitude": 6.756897,
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1656851531,
      "ems": null
    },
    {
      "latitude": 51.474766,
      "longitude": 6.757278,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1656851537,
      "ems": null
    },
    {
      "latitude": 51.476021,
      "longitude": 6.757431,
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1656851540,
      "ems": null
    },
    {
      "latitude": 51.477325,
      "longitude": 6.757507,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1656851543,
      "ems": null
    },
    {
      "latitude": 51.480026,
      "longitude": 6.757813,
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1656851549,
      "ems": null
    },
    {
      "latitude": 51.482773,
      "longitude": 6.758347,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1656851555,
      "ems": null
    },
    {
      "latitude": 51.485687,
      "longitude": 6.758745,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1656851561,
      "ems": null
    },
    {
      "latitude": 51.488388,
      "longitude": 6.759041,
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1656851567,
      "ems": null
    },
    {
      "latitude": 51.491196,
      "longitude": 6.759567,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 7,
      "squawk": "7742",
      "timestamp": 1656851573,
      "ems": null
    },
    {
      "latitude": 51.493942,
      "longitude": 6.760178,
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
      "heading": 8,
      "squawk": "7742",
      "timestamp": 1656851579,
      "ems": null
    },
    {
      "latitude": 51.497528,
      "longitude": 6.760864,
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
      "heading": 7,
      "squawk": "7742",
      "timestamp": 1656851587,
      "ems": null
    },
    {
      "latitude": 51.501251,
      "longitude": 6.761627,
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
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656851595,
      "ems": null
    },
    {
      "latitude": 51.504959,
      "longitude": 6.762382,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656851603,
      "ems": null
    },
    {
      "latitude": 51.508392,
      "longitude": 6.762976,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656851610,
      "ems": null
    },
    {
      "latitude": 51.511139,
      "longitude": 6.763421,
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
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656851616,
      "ems": null
    },
    {
      "latitude": 51.513794,
      "longitude": 6.763866,
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
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1656851622,
      "ems": null
    },
    {
      "latitude": 51.515121,
      "longitude": 6.764015,
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
      "heading": 2,
      "squawk": "7742",
      "timestamp": 1656851625,
      "ems": null
    },
    {
      "latitude": 51.517872,
      "longitude": 6.764221,
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
      "heading": 2,
      "squawk": "7742",
      "timestamp": 1656851631,
      "ems": null
    },
    {
      "latitude": 51.519131,
      "longitude": 6.764297,
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1656851634,
      "ems": null
    },
    {
      "latitude": 51.521595,
      "longitude": 6.764603,
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
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1656851640,
      "ems": null
    },
    {
      "latitude": 51.524204,
      "longitude": 6.76506,
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
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656851647,
      "ems": null
    },
    {
      "latitude": 51.526485,
      "longitude": 6.765442,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1656851653,
      "ems": null
    },
    {
      "latitude": 51.528809,
      "longitude": 6.765871,
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
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656851658,
      "ems": null
    },
    {
      "latitude": 51.529358,
      "longitude": 6.766019,
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
      "heading": 8,
      "squawk": "7742",
      "timestamp": 1656851662,
      "ems": null
    },
    {
      "latitude": 51.533886,
      "longitude": 6.766815,
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
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1656851671,
      "ems": null
    },
    {
      "latitude": 51.537231,
      "longitude": 6.76743,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1656851679,
      "ems": null
    },
    {
      "latitude": 51.538239,
      "longitude": 6.767504,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1656851683,
      "ems": null
    },
    {
      "latitude": 51.541351,
      "longitude": 6.767726,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1656851689,
      "ems": null
    },
    {
      "latitude": 51.544361,
      "longitude": 6.768341,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 8,
      "squawk": "7742",
      "timestamp": 1656851695,
      "ems": null
    },
    {
      "latitude": 51.54689,
      "longitude": 6.76884,
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
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1656851702,
      "ems": null
    },
    {
      "latitude": 51.549545,
      "longitude": 6.769286,
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
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656851707,
      "ems": null
    },
    {
      "latitude": 51.552063,
      "longitude": 6.769657,
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
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1656851714,
      "ems": null
    },
    {
      "latitude": 51.554581,
      "longitude": 6.770102,
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
      "heading": 7,
      "squawk": "7742",
      "timestamp": 1656851720,
      "ems": null
    },
    {
      "latitude": 51.557114,
      "longitude": 6.77063,
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
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1656851726,
      "ems": null
    },
    {
      "latitude": 51.559582,
      "longitude": 6.770935,
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
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1656851732,
      "ems": null
    },
    {
      "latitude": 51.562317,
      "longitude": 6.771513,
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
      "heading": 8,
      "squawk": "7742",
      "timestamp": 1656851738,
      "ems": null
    },
    {
      "latitude": 51.565018,
      "longitude": 6.772106,
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
      "heading": 7,
      "squawk": "7742",
      "timestamp": 1656851744,
      "ems": null
    },
    {
      "latitude": 51.567627,
      "longitude": 6.772626,
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
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656851750,
      "ems": null
    },
    {
      "latitude": 51.570236,
      "longitude": 6.773146,
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
      "heading": 7,
      "squawk": "7742",
      "timestamp": 1656851756,
      "ems": null
    },
    {
      "latitude": 51.573128,
      "longitude": 6.773682,
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
      "heading": 8,
      "squawk": "7742",
      "timestamp": 1656851762,
      "ems": null
    },
    {
      "latitude": 51.575924,
      "longitude": 6.774292,
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
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656851768,
      "ems": null
    },
    {
      "latitude": 51.578388,
      "longitude": 6.774673,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656851774,
      "ems": null
    },
    {
      "latitude": 51.581131,
      "longitude": 6.775075,
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
      "heading": 2,
      "squawk": "7742",
      "timestamp": 1656851780,
      "ems": null
    },
    {
      "latitude": 51.584488,
      "longitude": 6.775208,
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1656851787,
      "ems": null
    },
    {
      "latitude": 51.585979,
      "longitude": 6.775208,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1656851790,
      "ems": null
    },
    {
      "latitude": 51.587265,
      "longitude": 6.775224,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1656851793,
      "ems": null
    },
    {
      "latitude": 51.589935,
      "longitude": 6.775284,
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
      "heading": 2,
      "squawk": "7742",
      "timestamp": 1656851799,
      "ems": null
    },
    {
      "latitude": 51.591385,
      "longitude": 6.775298,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1656851802,
      "ems": null
    },
    {
      "latitude": 51.592667,
      "longitude": 6.775373,
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1656851805,
      "ems": null
    },
    {
      "latitude": 51.593628,
      "longitude": 6.775373,
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1656851808,
      "ems": null
    },
    {
      "latitude": 51.5965,
      "longitude": 6.775436,
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1656851814,
      "ems": null
    },
    {
      "latitude": 51.59903,
      "longitude": 6.775595,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1656851820,
      "ems": null
    },
    {
      "latitude": 51.602188,
      "longitude": 6.775743,
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1656851828,
      "ems": null
    },
    {
      "latitude": 51.60553,
      "longitude": 6.775892,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1656851836,
      "ems": null
    },
    {
      "latitude": 51.608917,
      "longitude": 6.776189,
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1656851844,
      "ems": null
    },
    {
      "latitude": 51.610744,
      "longitude": 6.776428,
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
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656851848,
      "ems": null
    },
    {
      "latitude": 51.613861,
      "longitude": 6.777496,
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
      "heading": 14,
      "squawk": "7742",
      "timestamp": 1656851856,
      "ems": null
    },
    {
      "latitude": 51.61554,
      "longitude": 6.778107,
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
      "heading": 10,
      "squawk": "7742",
      "timestamp": 1656851860,
      "ems": null
    },
    {
      "latitude": 51.617065,
      "longitude": 6.778564,
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
      "heading": 12,
      "squawk": "7742",
      "timestamp": 1656851864,
      "ems": null
    },
    {
      "latitude": 51.618797,
      "longitude": 6.779175,
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
      "heading": 11,
      "squawk": "7742",
      "timestamp": 1656851868,
      "ems": null
    },
    {
      "latitude": 51.620846,
      "longitude": 6.779709,
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
      "heading": 11,
      "squawk": "7742",
      "timestamp": 1656851872,
      "ems": null
    },
    {
      "latitude": 51.623779,
      "longitude": 6.780243,
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
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656851880,
      "ems": null
    },
    {
      "latitude": 51.6255,
      "longitude": 6.780167,
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
      "heading": 356,
      "squawk": "7742",
      "timestamp": 1656851884,
      "ems": null
    },
    {
      "latitude": 51.626724,
      "longitude": 6.780049,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 356,
      "squawk": "7742",
      "timestamp": 1656851886,
      "ems": null
    },
    {
      "latitude": 51.628098,
      "longitude": 6.779975,
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
      "heading": 359,
      "squawk": "7742",
      "timestamp": 1656851889,
      "ems": null
    },
    {
      "latitude": 51.629379,
      "longitude": 6.780049,
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
      "heading": 359,
      "squawk": "7742",
      "timestamp": 1656851892,
      "ems": null
    },
    {
      "latitude": 51.63039,
      "longitude": 6.780167,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1656851896,
      "ems": null
    },
    {
      "latitude": 51.631691,
      "longitude": 6.780243,
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
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1656851899,
      "ems": null
    },
    {
      "latitude": 51.634857,
      "longitude": 6.781006,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 10,
      "squawk": "7742",
      "timestamp": 1656851905,
      "ems": null
    },
    {
      "latitude": 51.635834,
      "longitude": 6.781311,
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
      "heading": 10,
      "squawk": "7742",
      "timestamp": 1656851908,
      "ems": null
    },
    {
      "latitude": 51.637882,
      "longitude": 6.781845,
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
      "heading": 10,
      "squawk": "7742",
      "timestamp": 1656851912,
      "ems": null
    },
    {
      "latitude": 51.639816,
      "longitude": 6.782424,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 9,
      "squawk": "7742",
      "timestamp": 1656851916,
      "ems": null
    },
    {
      "latitude": 51.641655,
      "longitude": 6.782913,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 8,
      "squawk": "7742",
      "timestamp": 1656851920,
      "ems": null
    },
    {
      "latitude": 51.643478,
      "longitude": 6.783315,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "7742",
      "timestamp": 1656851924,
      "ems": null
    },
    {
      "latitude": 51.645145,
      "longitude": 6.783752,
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
      "heading": 9,
      "squawk": "7742",
      "timestamp": 1656851928,
      "ems": null
    },
    {
      "latitude": 51.648514,
      "longitude": 6.784726,
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
      "heading": 9,
      "squawk": "7742",
      "timestamp": 1656851936,
      "ems": null
    },
    {
      "latitude": 51.652641,
      "longitude": 6.785431,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1656851944,
      "ems": null
    },
    {
      "latitude": 51.656387,
      "longitude": 6.785913,
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
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1656851952,
      "ems": null
    },
    {
      "latitude": 51.659775,
      "longitude": 6.786359,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1656851959,
      "ems": null
    },
    {
      "latitude": 51.660835,
      "longitude": 6.786499,
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
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1656851962,
      "ems": null
    },
    {
      "latitude": 51.663395,
      "longitude": 6.787033,
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
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656851967,
      "ems": null
    },
    {
      "latitude": 51.666687,
      "longitude": 6.787843,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 8,
      "squawk": "7742",
      "timestamp": 1656851974,
      "ems": null
    },
    {
      "latitude": 51.667351,
      "longitude": 6.788025,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 9,
      "squawk": "7742",
      "timestamp": 1656851977,
      "ems": null
    },
    {
      "latitude": 51.672272,
      "longitude": 6.789105,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656851987,
      "ems": null
    },
    {
      "latitude": 51.675217,
      "longitude": 6.789474,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1656851993,
      "ems": null
    },
    {
      "latitude": 51.67543,
      "longitude": 6.789476,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1656851994,
      "ems": null
    },
    {
      "latitude": 51.67717,
      "longitude": 6.789699,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1656851998,
      "ems": null
    },
    {
      "latitude": 51.678802,
      "longitude": 6.789856,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1656852001,
      "ems": null
    },
    {
      "latitude": 51.680191,
      "longitude": 6.789996,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1656852006,
      "ems": null
    },
    {
      "latitude": 51.683762,
      "longitude": 6.790516,
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
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1656852013,
      "ems": null
    },
    {
      "latitude": 51.685593,
      "longitude": 6.790739,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1656852020,
      "ems": null
    },
    {
      "latitude": 51.688904,
      "longitude": 6.791,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1656852026,
      "ems": null
    },
    {
      "latitude": 51.691544,
      "longitude": 6.791184,
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
      "heading": 2,
      "squawk": "7742",
      "timestamp": 1656852032,
      "ems": null
    },
    {
      "latitude": 51.692768,
      "longitude": 6.791153,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 359,
      "squawk": "7742",
      "timestamp": 1656852035,
      "ems": null
    },
    {
      "latitude": 51.695282,
      "longitude": 6.791306,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1656852041,
      "ems": null
    },
    {
      "latitude": 51.697937,
      "longitude": 6.791763,
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
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1656852048,
      "ems": null
    },
    {
      "latitude": 51.701157,
      "longitude": 6.792075,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1656852056,
      "ems": null
    },
    {
      "latitude": 51.703663,
      "longitude": 6.792374,
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
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1656852062,
      "ems": null
    },
    {
      "latitude": 51.705105,
      "longitude": 6.792526,
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
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1656852065,
      "ems": null
    },
    {
      "latitude": 51.707016,
      "longitude": 6.792668,
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
      "heading": 2,
      "squawk": "7742",
      "timestamp": 1656852070,
      "ems": null
    },
    {
      "latitude": 51.710495,
      "longitude": 6.792743,
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1656852079,
      "ems": null
    },
    {
      "latitude": 51.71402,
      "longitude": 6.793262,
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
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656852087,
      "ems": null
    },
    {
      "latitude": 51.717636,
      "longitude": 6.793708,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1656852095,
      "ems": null
    },
    {
      "latitude": 51.720108,
      "longitude": 6.793931,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1656852103,
      "ems": null
    },
    {
      "latitude": 51.724796,
      "longitude": 6.794815,
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
      "heading": 7,
      "squawk": "7742",
      "timestamp": 1656852112,
      "ems": null
    },
    {
      "latitude": 51.728149,
      "longitude": 6.795425,
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
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656852120,
      "ems": null
    },
    {
      "latitude": 51.729637,
      "longitude": 6.795731,
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
      "heading": 8,
      "squawk": "7742",
      "timestamp": 1656852124,
      "ems": null
    },
    {
      "latitude": 51.734024,
      "longitude": 6.796974,
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
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656852133,
      "ems": null
    },
    {
      "latitude": 51.736542,
      "longitude": 6.797642,
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
      "heading": 10,
      "squawk": "7742",
      "timestamp": 1656852140,
      "ems": null
    },
    {
      "latitude": 51.738388,
      "longitude": 6.798019,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1656852144,
      "ems": null
    },
    {
      "latitude": 51.740204,
      "longitude": 6.798248,
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1656852150,
      "ems": null
    },
    {
      "latitude": 51.742161,
      "longitude": 6.798325,
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1656852154,
      "ems": null
    },
    {
      "latitude": 51.74469,
      "longitude": 6.798459,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1656852159,
      "ems": null
    },
    {
      "latitude": 51.74733,
      "longitude": 6.798782,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1656852167,
      "ems": null
    },
    {
      "latitude": 51.748947,
      "longitude": 6.799127,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 9,
      "squawk": "7742",
      "timestamp": 1656852175,
      "ems": null
    },
    {
      "latitude": 51.751888,
      "longitude": 6.79985,
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
      "heading": 7,
      "squawk": "7742",
      "timestamp": 1656852179,
      "ems": null
    },
    {
      "latitude": 51.754078,
      "longitude": 6.800461,
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
      "heading": 9,
      "squawk": "7742",
      "timestamp": 1656852183,
      "ems": null
    },
    {
      "latitude": 51.7565,
      "longitude": 6.801131,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 9,
      "squawk": "7742",
      "timestamp": 1656852189,
      "ems": null
    },
    {
      "latitude": 51.757462,
      "longitude": 6.801353,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 10,
      "squawk": "7742",
      "timestamp": 1656852191,
      "ems": null
    },
    {
      "latitude": 51.759979,
      "longitude": 6.802096,
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
      "heading": 10,
      "squawk": "7742",
      "timestamp": 1656852197,
      "ems": null
    },
    {
      "latitude": 51.762085,
      "longitude": 6.802902,
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
      "heading": 14,
      "squawk": "7742",
      "timestamp": 1656852203,
      "ems": null
    },
    {
      "latitude": 51.76387,
      "longitude": 6.803655,
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
      "heading": 14,
      "squawk": "7742",
      "timestamp": 1656852207,
      "ems": null
    },
    {
      "latitude": 51.765289,
      "longitude": 6.804397,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 14,
      "squawk": "7742",
      "timestamp": 1656852211,
      "ems": null
    },
    {
      "latitude": 51.766556,
      "longitude": 6.805115,
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
      "heading": 21,
      "squawk": "7742",
      "timestamp": 1656852215,
      "ems": null
    },
    {
      "latitude": 51.76767,
      "longitude": 6.805882,
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
      "heading": 19,
      "squawk": "7742",
      "timestamp": 1656852219,
      "ems": null
    },
    {
      "latitude": 51.768677,
      "longitude": 6.80655,
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
      "heading": 23,
      "squawk": "7742",
      "timestamp": 1656852221,
      "ems": null
    },
    {
      "latitude": 51.770691,
      "longitude": 6.807961,
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
      "heading": 23,
      "squawk": "7742",
      "timestamp": 1656852224,
      "ems": null
    },
    {
      "latitude": 51.771999,
      "longitude": 6.808853,
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
      "heading": 23,
      "squawk": "7742",
      "timestamp": 1656852228,
      "ems": null
    },
    {
      "latitude": 51.772793,
      "longitude": 6.809464,
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
      "heading": 24,
      "squawk": "7742",
      "timestamp": 1656852231,
      "ems": null
    },
    {
      "latitude": 51.774307,
      "longitude": 6.810558,
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
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1656852233,
      "ems": null
    },
    {
      "latitude": 51.776005,
      "longitude": 6.811981,
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
      "heading": 26,
      "squawk": "7742",
      "timestamp": 1656852238,
      "ems": null
    },
    {
      "latitude": 51.777603,
      "longitude": 6.813157,
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
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1656852242,
      "ems": null
    },
    {
      "latitude": 51.779434,
      "longitude": 6.814641,
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
      "heading": 26,
      "squawk": "7742",
      "timestamp": 1656852246,
      "ems": null
    },
    {
      "latitude": 51.782848,
      "longitude": 6.817322,
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
      "heading": 26,
      "squawk": "7742",
      "timestamp": 1656852254,
      "ems": null
    },
    {
      "latitude": 51.786072,
      "longitude": 6.819911,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1656852262,
      "ems": null
    },
    {
      "latitude": 51.788853,
      "longitude": 6.822357,
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
      "heading": 29,
      "squawk": "7742",
      "timestamp": 1656852270,
      "ems": null
    },
    {
      "latitude": 51.792297,
      "longitude": 6.825485,
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
      "heading": 30,
      "squawk": "7742",
      "timestamp": 1656852278,
      "ems": null
    },
    {
      "latitude": 51.795822,
      "longitude": 6.828671,
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
      "heading": 27,
      "squawk": "7742",
      "timestamp": 1656852287,
      "ems": null
    },
    {
      "latitude": 51.799046,
      "longitude": 6.83136,
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
      "heading": 28,
      "squawk": "7742",
      "timestamp": 1656852295,
      "ems": null
    },
    {
      "latitude": 51.802586,
      "longitude": 6.834488,
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
      "heading": 27,
      "squawk": "7742",
      "timestamp": 1656852303,
      "ems": null
    },
    {
      "latitude": 51.805481,
      "longitude": 6.836688,
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
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1656852311,
      "ems": null
    },
    {
      "latitude": 51.809006,
      "longitude": 6.83936,
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
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1656852319,
      "ems": null
    },
    {
      "latitude": 51.811802,
      "longitude": 6.841583,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 24,
      "squawk": "7742",
      "timestamp": 1656852327,
      "ems": null
    },
    {
      "latitude": 51.814636,
      "longitude": 6.843517,
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
      "heading": 22,
      "squawk": "7742",
      "timestamp": 1656852333,
      "ems": null
    },
    {
      "latitude": 51.817249,
      "longitude": 6.845169,
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
      "heading": 21,
      "squawk": "7742",
      "timestamp": 1656852340,
      "ems": null
    },
    {
      "latitude": 51.819031,
      "longitude": 6.84619,
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
      "heading": 18,
      "squawk": "7742",
      "timestamp": 1656852344,
      "ems": null
    },
    {
      "latitude": 51.821136,
      "longitude": 6.847155,
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
      "heading": 14,
      "squawk": "7742",
      "timestamp": 1656852349,
      "ems": null
    },
    {
      "latitude": 51.823162,
      "longitude": 6.847839,
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
      "heading": 9,
      "squawk": "7742",
      "timestamp": 1656852354,
      "ems": null
    },
    {
      "latitude": 51.824001,
      "longitude": 6.848068,
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
      "heading": 8,
      "squawk": "7742",
      "timestamp": 1656852357,
      "ems": null
    },
    {
      "latitude": 51.825165,
      "longitude": 6.848297,
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
      "heading": 7,
      "squawk": "7742",
      "timestamp": 1656852359,
      "ems": null
    },
    {
      "latitude": 51.826653,
      "longitude": 6.848679,
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
      "heading": 7,
      "squawk": "7742",
      "timestamp": 1656852362,
      "ems": null
    },
    {
      "latitude": 51.827911,
      "longitude": 6.848907,
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
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656852366,
      "ems": null
    },
    {
      "latitude": 51.829834,
      "longitude": 6.849308,
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
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656852370,
      "ems": null
    },
    {
      "latitude": 51.831306,
      "longitude": 6.849518,
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
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656852373,
      "ems": null
    },
    {
      "latitude": 51.831894,
      "longitude": 6.849679,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1656852377,
      "ems": null
    },
    {
      "latitude": 51.83522,
      "longitude": 6.850204,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1656852385,
      "ems": null
    },
    {
      "latitude": 51.839642,
      "longitude": 6.850433,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 357,
      "squawk": "7742",
      "timestamp": 1656852394,
      "ems": null
    },
    {
      "latitude": 51.841324,
      "longitude": 6.850124,
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
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1656852398,
      "ems": null
    },
    {
      "latitude": 51.842945,
      "longitude": 6.84967,
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
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1656852402,
      "ems": null
    },
    {
      "latitude": 51.844254,
      "longitude": 6.849308,
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
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1656852406,
      "ems": null
    },
    {
      "latitude": 51.847042,
      "longitude": 6.849594,
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
      "heading": 9,
      "squawk": "7742",
      "timestamp": 1656852413,
      "ems": null
    },
    {
      "latitude": 51.848019,
      "longitude": 6.849976,
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
      "heading": 15,
      "squawk": "7742",
      "timestamp": 1656852415,
      "ems": null
    },
    {
      "latitude": 51.848419,
      "longitude": 6.850198,
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
      "heading": 18,
      "squawk": "7742",
      "timestamp": 1656852418,
      "ems": null
    },
    {
      "latitude": 51.849747,
      "longitude": 6.851089,
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
      "heading": 18,
      "squawk": "7742",
      "timestamp": 1656852420,
      "ems": null
    },
    {
      "latitude": 51.851326,
      "longitude": 6.852646,
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
      "heading": 32,
      "squawk": "7742",
      "timestamp": 1656852424,
      "ems": null
    },
    {
      "latitude": 51.852585,
      "longitude": 6.854652,
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
      "heading": 47,
      "squawk": "7742",
      "timestamp": 1656852428,
      "ems": null
    },
    {
      "latitude": 51.853546,
      "longitude": 6.85673,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1656852432,
      "ems": null
    },
    {
      "latitude": 51.854351,
      "longitude": 6.859741,
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
      "heading": 70,
      "squawk": "7742",
      "timestamp": 1656852437,
      "ems": null
    },
    {
      "latitude": 51.854771,
      "longitude": 6.863098,
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
      "heading": 83,
      "squawk": "7742",
      "timestamp": 1656852442,
      "ems": null
    },
    {
      "latitude": 51.854736,
      "longitude": 6.865935,
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
      "heading": 83,
      "squawk": "7742",
      "timestamp": 1656852446,
      "ems": null
    },
    {
      "latitude": 51.854259,
      "longitude": 6.868896,
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
      "heading": 107,
      "squawk": "7742",
      "timestamp": 1656852450,
      "ems": null
    },
    {
      "latitude": 51.853466,
      "longitude": 6.871185,
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
      "heading": 123,
      "squawk": "7742",
      "timestamp": 1656852454,
      "ems": null
    },
    {
      "latitude": 51.852535,
      "longitude": 6.872787,
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656852458,
      "ems": null
    },
    {
      "latitude": 51.85128,
      "longitude": 6.874237,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 129,
      "squawk": "7742",
      "timestamp": 1656852462,
      "ems": null
    },
    {
      "latitude": 51.849655,
      "longitude": 6.875215,
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
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1656852466,
      "ems": null
    },
    {
      "latitude": 51.848328,
      "longitude": 6.875363,
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
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1656852470,
      "ems": null
    },
    {
      "latitude": 51.846863,
      "longitude": 6.87514,
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
      "heading": 188,
      "squawk": "7742",
      "timestamp": 1656852474,
      "ems": null
    },
    {
      "latitude": 51.8456,
      "longitude": 6.874542,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1656852478,
      "ems": null
    },
    {
      "latitude": 51.844391,
      "longitude": 6.873581,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1656852482,
      "ems": null
    },
    {
      "latitude": 51.843979,
      "longitude": 6.873062,
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
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1656852486,
      "ems": null
    },
    {
      "latitude": 51.84211,
      "longitude": 6.870041,
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
      "heading": 227,
      "squawk": "7742",
      "timestamp": 1656852491,
      "ems": null
    },
    {
      "latitude": 51.840958,
      "longitude": 6.86794,
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
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1656852496,
      "ems": null
    },
    {
      "latitude": 51.840408,
      "longitude": 6.8669,
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
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1656852498,
      "ems": null
    },
    {
      "latitude": 51.839767,
      "longitude": 6.865416,
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
      "heading": 231,
      "squawk": "7742",
      "timestamp": 1656852501,
      "ems": null
    },
    {
      "latitude": 51.839035,
      "longitude": 6.863251,
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
      "heading": 234,
      "squawk": "7742",
      "timestamp": 1656852505,
      "ems": null
    },
    {
      "latitude": 51.838432,
      "longitude": 6.861649,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 237,
      "squawk": "7742",
      "timestamp": 1656852509,
      "ems": null
    },
    {
      "latitude": 51.83725,
      "longitude": 6.859923,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 217,
      "squawk": "7742",
      "timestamp": 1656852513,
      "ems": null
    },
    {
      "latitude": 51.835602,
      "longitude": 6.858512,
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1656852518,
      "ems": null
    },
    {
      "latitude": 51.834286,
      "longitude": 6.857834,
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
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1656852522,
      "ems": null
    },
    {
      "latitude": 51.833172,
      "longitude": 6.856461,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 219,
      "squawk": "7742",
      "timestamp": 1656852526,
      "ems": null
    },
    {
      "latitude": 51.832798,
      "longitude": 6.854553,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 265,
      "squawk": "7742",
      "timestamp": 1656852530,
      "ems": null
    },
    {
      "latitude": 51.833267,
      "longitude": 6.852425,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 292,
      "squawk": "7742",
      "timestamp": 1656852534,
      "ems": null
    },
    {
      "latitude": 51.834595,
      "longitude": 6.850644,
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
      "heading": 333,
      "squawk": "7742",
      "timestamp": 1656852539,
      "ems": null
    },
    {
      "latitude": 51.836334,
      "longitude": 6.850128,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1656852544,
      "ems": null
    },
    {
      "latitude": 51.837341,
      "longitude": 6.850421,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 17,
      "squawk": "7742",
      "timestamp": 1656852548,
      "ems": null
    },
    {
      "latitude": 51.839363,
      "longitude": 6.851883,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 28,
      "squawk": "7742",
      "timestamp": 1656852553,
      "ems": null
    },
    {
      "latitude": 51.840714,
      "longitude": 6.853409,
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
      "heading": 34,
      "squawk": "7742",
      "timestamp": 1656852557,
      "ems": null
    },
    {
      "latitude": 51.842056,
      "longitude": 6.855023,
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
      "heading": 38,
      "squawk": "7742",
      "timestamp": 1656852562,
      "ems": null
    },
    {
      "latitude": 51.843384,
      "longitude": 6.856805,
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
      "heading": 39,
      "squawk": "7742",
      "timestamp": 1656852566,
      "ems": null
    },
    {
      "latitude": 51.844624,
      "longitude": 6.858292,
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
      "heading": 36,
      "squawk": "7742",
      "timestamp": 1656852570,
      "ems": null
    },
    {
      "latitude": 51.846111,
      "longitude": 6.859894,
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
      "heading": 39,
      "squawk": "7742",
      "timestamp": 1656852574,
      "ems": null
    },
    {
      "latitude": 51.847183,
      "longitude": 6.860962,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 32,
      "squawk": "7742",
      "timestamp": 1656852578,
      "ems": null
    },
    {
      "latitude": 51.848419,
      "longitude": 6.862298,
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
      "heading": 34,
      "squawk": "7742",
      "timestamp": 1656852582,
      "ems": null
    },
    {
      "latitude": 51.850433,
      "longitude": 6.86549,
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
      "heading": 52,
      "squawk": "7742",
      "timestamp": 1656852590,
      "ems": null
    },
    {
      "latitude": 51.850708,
      "longitude": 6.866232,
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
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1656852595,
      "ems": null
    },
    {
      "latitude": 51.852581,
      "longitude": 6.871033,
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
      "heading": 57,
      "squawk": "7742",
      "timestamp": 1656852600,
      "ems": null
    },
    {
      "latitude": 51.853638,
      "longitude": 6.87321,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 51,
      "squawk": "7742",
      "timestamp": 1656852604,
      "ems": null
    },
    {
      "latitude": 51.853958,
      "longitude": 6.873581,
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
      "heading": 47,
      "squawk": "7742",
      "timestamp": 1656852609,
      "ems": null
    },
    {
      "latitude": 51.856121,
      "longitude": 6.875229,
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
      "heading": 7,
      "squawk": "7742",
      "timestamp": 1656852613,
      "ems": null
    },
    {
      "latitude": 51.858307,
      "longitude": 6.875288,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1656852617,
      "ems": null
    },
    {
      "latitude": 51.859955,
      "longitude": 6.873952,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 323,
      "squawk": "7742",
      "timestamp": 1656852622,
      "ems": null
    },
    {
      "latitude": 51.860916,
      "longitude": 6.871948,
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
      "heading": 299,
      "squawk": "7742",
      "timestamp": 1656852626,
      "ems": null
    },
    {
      "latitude": 51.861519,
      "longitude": 6.870117,
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
      "heading": 299,
      "squawk": "7742",
      "timestamp": 1656852630,
      "ems": null
    },
    {
      "latitude": 51.862267,
      "longitude": 6.868362,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 305,
      "squawk": "7742",
      "timestamp": 1656852634,
      "ems": null
    },
    {
      "latitude": 51.863068,
      "longitude": 6.866603,
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
      "heading": 306,
      "squawk": "7742",
      "timestamp": 1656852638,
      "ems": null
    },
    {
      "latitude": 51.863895,
      "longitude": 6.864853,
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
      "heading": 308,
      "squawk": "7742",
      "timestamp": 1656852642,
      "ems": null
    },
    {
      "latitude": 51.864685,
      "longitude": 6.863403,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 310,
      "squawk": "7742",
      "timestamp": 1656852646,
      "ems": null
    },
    {
      "latitude": 51.865494,
      "longitude": 6.861927,
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
      "heading": 314,
      "squawk": "7742",
      "timestamp": 1656852650,
      "ems": null
    },
    {
      "latitude": 51.866177,
      "longitude": 6.860886,
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
      "heading": 317,
      "squawk": "7742",
      "timestamp": 1656852654,
      "ems": null
    },
    {
      "latitude": 51.867294,
      "longitude": 6.859283,
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
      "heading": 322,
      "squawk": "7742",
      "timestamp": 1656852656,
      "ems": null
    },
    {
      "latitude": 51.868149,
      "longitude": 6.858364,
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
      "heading": 322,
      "squawk": "7742",
      "timestamp": 1656852659,
      "ems": null
    },
    {
      "latitude": 51.869343,
      "longitude": 6.857147,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 327,
      "squawk": "7742",
      "timestamp": 1656852663,
      "ems": null
    },
    {
      "latitude": 51.870087,
      "longitude": 6.856232,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 327,
      "squawk": "7742",
      "timestamp": 1656852666,
      "ems": null
    },
    {
      "latitude": 51.870926,
      "longitude": 6.855087,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 318,
      "squawk": "7742",
      "timestamp": 1656852668,
      "ems": null
    },
    {
      "latitude": 51.871674,
      "longitude": 6.85391,
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
      "heading": 316,
      "squawk": "7742",
      "timestamp": 1656852671,
      "ems": null
    },
    {
      "latitude": 51.872818,
      "longitude": 6.851906,
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
      "heading": 313,
      "squawk": "7742",
      "timestamp": 1656852677,
      "ems": null
    },
    {
      "latitude": 51.874229,
      "longitude": 6.849594,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 314,
      "squawk": "7742",
      "timestamp": 1656852682,
      "ems": null
    },
    {
      "latitude": 51.875427,
      "longitude": 6.847526,
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
      "heading": 312,
      "squawk": "7742",
      "timestamp": 1656852687,
      "ems": null
    },
    {
      "latitude": 51.876297,
      "longitude": 6.845744,
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
      "heading": 309,
      "squawk": "7742",
      "timestamp": 1656852691,
      "ems": null
    },
    {
      "latitude": 51.876743,
      "longitude": 6.844788,
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
      "heading": 305,
      "squawk": "7742",
      "timestamp": 1656852695,
      "ems": null
    },
    {
      "latitude": 51.877899,
      "longitude": 6.841959,
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
      "heading": 302,
      "squawk": "7742",
      "timestamp": 1656852699,
      "ems": null
    },
    {
      "latitude": 51.87886,
      "longitude": 6.839509,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 302,
      "squawk": "7742",
      "timestamp": 1656852704,
      "ems": null
    },
    {
      "latitude": 51.879631,
      "longitude": 6.837311,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 302,
      "squawk": "7742",
      "timestamp": 1656852708,
      "ems": null
    },
    {
      "latitude": 51.880234,
      "longitude": 6.835403,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 296,
      "squawk": "7742",
      "timestamp": 1656852712,
      "ems": null
    },
    {
      "latitude": 51.880745,
      "longitude": 6.833801,
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
      "heading": 295,
      "squawk": "7742",
      "timestamp": 1656852716,
      "ems": null
    },
    {
      "latitude": 51.881424,
      "longitude": 6.831715,
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
      "heading": 297,
      "squawk": "7742",
      "timestamp": 1656852720,
      "ems": null
    },
    {
      "latitude": 51.882282,
      "longitude": 6.829071,
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
      "heading": 298,
      "squawk": "7742",
      "timestamp": 1656852724,
      "ems": null
    },
    {
      "latitude": 51.883255,
      "longitude": 6.826592,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 304,
      "squawk": "7742",
      "timestamp": 1656852732,
      "ems": null
    },
    {
      "latitude": 51.885681,
      "longitude": 6.821248,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 307,
      "squawk": "7742",
      "timestamp": 1656852740,
      "ems": null
    },
    {
      "latitude": 51.886612,
      "longitude": 6.819305,
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
      "heading": 308,
      "squawk": "7742",
      "timestamp": 1656852744,
      "ems": null
    },
    {
      "latitude": 51.887543,
      "longitude": 6.817322,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 305,
      "squawk": "7742",
      "timestamp": 1656852748,
      "ems": null
    },
    {
      "latitude": 51.88829,
      "longitude": 6.815458,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1656852752,
      "ems": null
    },
    {
      "latitude": 51.889824,
      "longitude": 6.811142,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1656852760,
      "ems": null
    },
    {
      "latitude": 51.890076,
      "longitude": 6.810336,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1656852762,
      "ems": null
    },
    {
      "latitude": 51.890568,
      "longitude": 6.808548,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1656852766,
      "ems": null
    },
    {
      "latitude": 51.891129,
      "longitude": 6.806401,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1656852769,
      "ems": null
    },
    {
      "latitude": 51.891357,
      "longitude": 6.805585,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1656852772,
      "ems": null
    },
    {
      "latitude": 51.891724,
      "longitude": 6.804249,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1656852777,
      "ems": null
    },
    {
      "latitude": 51.893734,
      "longitude": 6.798889,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1656852785,
      "ems": null
    },
    {
      "latitude": 51.894619,
      "longitude": 6.797555,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1656852789,
      "ems": null
    },
    {
      "latitude": 51.895645,
      "longitude": 6.795907,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1656852793,
      "ems": null
    },
    {
      "latitude": 51.896622,
      "longitude": 6.794181,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1656852797,
      "ems": null
    },
    {
      "latitude": 51.897583,
      "longitude": 6.79245,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1656852801,
      "ems": null
    },
    {
      "latitude": 51.898315,
      "longitude": 6.791229,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1656852805,
      "ems": null
    },
    {
      "latitude": 51.89946,
      "longitude": 6.789551,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1656852809,
      "ems": null
    },
    {
      "latitude": 51.901276,
      "longitude": 6.786726,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1656852817,
      "ems": null
    },
    {
      "latitude": 51.90337,
      "longitude": 6.78343,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1656852826,
      "ems": null
    },
    {
      "latitude": 51.904907,
      "longitude": 6.780777,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1656852834,
      "ems": null
    },
    {
      "latitude": 51.905746,
      "longitude": 6.779271,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1656852838,
      "ems": null
    },
    {
      "latitude": 51.907196,
      "longitude": 6.777191,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1656852846,
      "ems": null
    },
    {
      "latitude": 51.909485,
      "longitude": 6.774063,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1656852854,
      "ems": null
    },
    {
      "latitude": 51.909943,
      "longitude": 6.773376,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1656852857,
      "ems": null
    },
    {
      "latitude": 51.910542,
      "longitude": 6.772601,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1656852861,
      "ems": null
    },
    {
      "latitude": 51.911751,
      "longitude": 6.770953,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1656852865,
      "ems": null
    },
    {
      "latitude": 51.913845,
      "longitude": 6.768206,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1656852873,
      "ems": null
    },
    {
      "latitude": 51.915665,
      "longitude": 6.765366,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1656852881,
      "ems": null
    },
    {
      "latitude": 51.916592,
      "longitude": 6.763812,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1656852885,
      "ems": null
    },
    {
      "latitude": 51.918549,
      "longitude": 6.760986,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1656852893,
      "ems": null
    },
    {
      "latitude": 51.920643,
      "longitude": 6.758397,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1656852901,
      "ems": null
    },
    {
      "latitude": 51.921982,
      "longitude": 6.756821,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1656852905,
      "ems": null
    },
    {
      "latitude": 51.922737,
      "longitude": 6.755886,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1656852909,
      "ems": null
    },
    {
      "latitude": 51.923435,
      "longitude": 6.755023,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1656852911,
      "ems": null
    },
    {
      "latitude": 51.924412,
      "longitude": 6.753845,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1656852914,
      "ems": null
    },
    {
      "latitude": 51.925251,
      "longitude": 6.752747,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1656852917,
      "ems": null
    },
    {
      "latitude": 51.92688,
      "longitude": 6.750628,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1656852923,
      "ems": null
    },
    {
      "latitude": 51.928711,
      "longitude": 6.748047,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1656852929,
      "ems": null
    },
    {
      "latitude": 51.930183,
      "longitude": 6.745998,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1656852934,
      "ems": null
    },
    {
      "latitude": 51.931953,
      "longitude": 6.743644,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1656852940,
      "ems": null
    },
    {
      "latitude": 51.933426,
      "longitude": 6.741638,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1656852949,
      "ems": null
    },
    {
      "latitude": 51.936794,
      "longitude": 6.737444,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1656852957,
      "ems": null
    },
    {
      "latitude": 51.939308,
      "longitude": 6.734227,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1656852965,
      "ems": null
    },
    {
      "latitude": 51.941452,
      "longitude": 6.731245,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1656852973,
      "ems": null
    },
    {
      "latitude": 51.94368,
      "longitude": 6.727982,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1656852981,
      "ems": null
    },
    {
      "latitude": 51.945919,
      "longitude": 6.72481,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1656852989,
      "ems": null
    },
    {
      "latitude": 51.94693,
      "longitude": 6.723251,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1656852993,
      "ems": null
    },
    {
      "latitude": 51.948166,
      "longitude": 6.721115,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1656852997,
      "ems": null
    },
    {
      "latitude": 51.949127,
      "longitude": 6.719284,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1656853001,
      "ems": null
    },
    {
      "latitude": 51.949642,
      "longitude": 6.718297,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1656853005,
      "ems": null
    },
    {
      "latitude": 51.951134,
      "longitude": 6.715786,
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1656853009,
      "ems": null
    },
    {
      "latitude": 51.95224,
      "longitude": 6.713943,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1656853013,
      "ems": null
    },
    {
      "latitude": 51.954254,
      "longitude": 6.710663,
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1656853021,
      "ems": null
    },
    {
      "latitude": 51.955509,
      "longitude": 6.708958,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1656853025,
      "ems": null
    },
    {
      "latitude": 51.95668,
      "longitude": 6.707611,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1656853029,
      "ems": null
    },
    {
      "latitude": 51.958191,
      "longitude": 6.705933,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656853033,
      "ems": null
    },
    {
      "latitude": 51.959473,
      "longitude": 6.704483,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1656853037,
      "ems": null
    },
    {
      "latitude": 51.960445,
      "longitude": 6.703308,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1656853041,
      "ems": null
    },
    {
      "latitude": 51.9617,
      "longitude": 6.701817,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1656853045,
      "ems": null
    },
    {
      "latitude": 51.96389,
      "longitude": 6.69907,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1656853053,
      "ems": null
    },
    {
      "latitude": 51.965469,
      "longitude": 6.697311,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656853057,
      "ems": null
    },
    {
      "latitude": 51.967987,
      "longitude": 6.694565,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656853065,
      "ems": null
    },
    {
      "latitude": 51.970127,
      "longitude": 6.691302,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1656853073,
      "ems": null
    },
    {
      "latitude": 51.97036,
      "longitude": 6.690831,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1656853077,
      "ems": null
    },
    {
      "latitude": 51.97229,
      "longitude": 6.687317,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1656853081,
      "ems": null
    },
    {
      "latitude": 51.973198,
      "longitude": 6.685338,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1656853085,
      "ems": null
    },
    {
      "latitude": 51.974316,
      "longitude": 6.683219,
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1656853089,
      "ems": null
    },
    {
      "latitude": 51.975246,
      "longitude": 6.681571,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1656853093,
      "ems": null
    },
    {
      "latitude": 51.976227,
      "longitude": 6.679766,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1656853097,
      "ems": null
    },
    {
      "latitude": 51.9786,
      "longitude": 6.675529,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1656853105,
      "ems": null
    },
    {
      "latitude": 51.979614,
      "longitude": 6.673965,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1656853109,
      "ems": null
    },
    {
      "latitude": 51.980804,
      "longitude": 6.672287,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1656853113,
      "ems": null
    },
    {
      "latitude": 51.981949,
      "longitude": 6.670837,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1656853117,
      "ems": null
    },
    {
      "latitude": 51.983276,
      "longitude": 6.669235,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1656853121,
      "ems": null
    },
    {
      "latitude": 51.984558,
      "longitude": 6.667524,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1656853125,
      "ems": null
    },
    {
      "latitude": 51.985767,
      "longitude": 6.665798,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1656853129,
      "ems": null
    },
    {
      "latitude": 51.988094,
      "longitude": 6.662659,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1656853137,
      "ems": null
    },
    {
      "latitude": 51.990005,
      "longitude": 6.660385,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1656853142,
      "ems": null
    },
    {
      "latitude": 51.991974,
      "longitude": 6.658249,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656853148,
      "ems": null
    },
    {
      "latitude": 51.992985,
      "longitude": 6.657244,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656853152,
      "ems": null
    },
    {
      "latitude": 51.99382,
      "longitude": 6.656224,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1656853154,
      "ems": null
    },
    {
      "latitude": 51.994995,
      "longitude": 6.654892,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1656853157,
      "ems": null
    },
    {
      "latitude": 51.997036,
      "longitude": 6.6523,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1656853164,
      "ems": null
    },
    {
      "latitude": 51.99778,
      "longitude": 6.651202,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1656853167,
      "ems": null
    },
    {
      "latitude": 51.998932,
      "longitude": 6.649551,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1656853170,
      "ems": null
    },
    {
      "latitude": 51.999939,
      "longitude": 6.648254,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1656853173,
      "ems": null
    },
    {
      "latitude": 52.001633,
      "longitude": 6.646118,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1656853179,
      "ems": null
    },
    {
      "latitude": 52.002869,
      "longitude": 6.644363,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1656853182,
      "ems": null
    },
    {
      "latitude": 52.003784,
      "longitude": 6.64299,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1656853185,
      "ems": null
    },
    {
      "latitude": 52.004562,
      "longitude": 6.641693,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1656853187,
      "ems": null
    },
    {
      "latitude": 52.005459,
      "longitude": 6.640215,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1656853191,
      "ems": null
    },
    {
      "latitude": 52.007401,
      "longitude": 6.637344,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1656853197,
      "ems": null
    },
    {
      "latitude": 52.009323,
      "longitude": 6.634408,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1656853203,
      "ems": null
    },
    {
      "latitude": 52.011326,
      "longitude": 6.631661,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1656853209,
      "ems": null
    },
    {
      "latitude": 52.012115,
      "longitude": 6.63072,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1656853211,
      "ems": null
    },
    {
      "latitude": 52.013397,
      "longitude": 6.629333,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1656853215,
      "ems": null
    },
    {
      "latitude": 52.014496,
      "longitude": 6.628036,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1656853218,
      "ems": null
    },
    {
      "latitude": 52.015366,
      "longitude": 6.626968,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1656853221,
      "ems": null
    },
    {
      "latitude": 52.01696,
      "longitude": 6.62452,
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1656853226,
      "ems": null
    },
    {
      "latitude": 52.01889,
      "longitude": 6.62117,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1656853233,
      "ems": null
    },
    {
      "latitude": 52.020821,
      "longitude": 6.618478,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1656853239,
      "ems": null
    },
    {
      "latitude": 52.022869,
      "longitude": 6.61581,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1656853245,
      "ems": null
    },
    {
      "latitude": 52.024979,
      "longitude": 6.613159,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1656853251,
      "ems": null
    },
    {
      "latitude": 52.026035,
      "longitude": 6.611808,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1656853255,
      "ems": null
    },
    {
      "latitude": 52.027359,
      "longitude": 6.609955,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1656853259,
      "ems": null
    },
    {
      "latitude": 52.029831,
      "longitude": 6.606522,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1656853267,
      "ems": null
    },
    {
      "latitude": 52.03339,
      "longitude": 6.602077,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1656853277,
      "ems": null
    },
    {
      "latitude": 52.035954,
      "longitude": 6.598624,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1656853285,
      "ems": null
    },
    {
      "latitude": 52.038574,
      "longitude": 6.595612,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656853293,
      "ems": null
    },
    {
      "latitude": 52.039581,
      "longitude": 6.594779,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656853297,
      "ems": null
    },
    {
      "latitude": 52.041641,
      "longitude": 6.593399,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1656853301,
      "ems": null
    },
    {
      "latitude": 52.043308,
      "longitude": 6.592503,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1656853305,
      "ems": null
    },
    {
      "latitude": 52.04517,
      "longitude": 6.591326,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1656853309,
      "ems": null
    },
    {
      "latitude": 52.046539,
      "longitude": 6.590195,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656853313,
      "ems": null
    },
    {
      "latitude": 52.049126,
      "longitude": 6.58701,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1656853321,
      "ems": null
    },
    {
      "latitude": 52.050056,
      "longitude": 6.585126,
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1656853325,
      "ems": null
    },
    {
      "latitude": 52.051266,
      "longitude": 6.582772,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1656853329,
      "ems": null
    },
    {
      "latitude": 52.052307,
      "longitude": 6.580734,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1656853333,
      "ems": null
    },
    {
      "latitude": 52.053268,
      "longitude": 6.578827,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1656853337,
      "ems": null
    },
    {
      "latitude": 52.054321,
      "longitude": 6.576843,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1656853341,
      "ems": null
    },
    {
      "latitude": 52.055645,
      "longitude": 6.574533,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1656853345,
      "ems": null
    },
    {
      "latitude": 52.057598,
      "longitude": 6.571002,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1656853353,
      "ems": null
    },
    {
      "latitude": 52.059769,
      "longitude": 6.566849,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1656853361,
      "ems": null
    },
    {
      "latitude": 52.061138,
      "longitude": 6.564488,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1656853366,
      "ems": null
    },
    {
      "latitude": 52.063232,
      "longitude": 6.560956,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1656853374,
      "ems": null
    },
    {
      "latitude": 52.064487,
      "longitude": 6.558838,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1656853378,
      "ems": null
    },
    {
      "latitude": 52.06636,
      "longitude": 6.555634,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1656853385,
      "ems": null
    },
    {
      "latitude": 52.067825,
      "longitude": 6.553421,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1656853389,
      "ems": null
    },
    {
      "latitude": 52.069004,
      "longitude": 6.551854,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1656853393,
      "ems": null
    },
    {
      "latitude": 52.070446,
      "longitude": 6.549813,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1656853398,
      "ems": null
    },
    {
      "latitude": 52.071564,
      "longitude": 6.548322,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1656853402,
      "ems": null
    },
    {
      "latitude": 52.072495,
      "longitude": 6.547089,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1656853404,
      "ems": null
    },
    {
      "latitude": 52.07341,
      "longitude": 6.545792,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1656853407,
      "ems": null
    },
    {
      "latitude": 52.074326,
      "longitude": 6.544571,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1656853411,
      "ems": null
    },
    {
      "latitude": 52.075985,
      "longitude": 6.541888,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1656853416,
      "ems": null
    },
    {
      "latitude": 52.076294,
      "longitude": 6.541367,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1656853417,
      "ems": null
    },
    {
      "latitude": 52.07692,
      "longitude": 6.540318,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1656853421,
      "ems": null
    },
    {
      "latitude": 52.078499,
      "longitude": 6.537885,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1656853425,
      "ems": null
    },
    {
      "latitude": 52.079803,
      "longitude": 6.535767,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1656853429,
      "ems": null
    },
    {
      "latitude": 52.08197,
      "longitude": 6.532516,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1656853437,
      "ems": null
    },
    {
      "latitude": 52.084259,
      "longitude": 6.529007,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1656853445,
      "ems": null
    },
    {
      "latitude": 52.087097,
      "longitude": 6.524734,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1656853453,
      "ems": null
    },
    {
      "latitude": 52.088974,
      "longitude": 6.521955,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1656853459,
      "ems": null
    },
    {
      "latitude": 52.090744,
      "longitude": 6.519366,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1656853465,
      "ems": null
    },
    {
      "latitude": 52.092651,
      "longitude": 6.516776,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1656853471,
      "ems": null
    },
    {
      "latitude": 52.094788,
      "longitude": 6.513824,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1656853477,
      "ems": null
    },
    {
      "latitude": 52.09758,
      "longitude": 6.509628,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1656853486,
      "ems": null
    },
    {
      "latitude": 52.099541,
      "longitude": 6.507045,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1656853492,
      "ems": null
    },
    {
      "latitude": 52.100567,
      "longitude": 6.505868,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1656853495,
      "ems": null
    },
    {
      "latitude": 52.101219,
      "longitude": 6.505162,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1656853497,
      "ems": null
    },
    {
      "latitude": 52.102707,
      "longitude": 6.503592,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656853501,
      "ems": null
    },
    {
      "latitude": 52.103577,
      "longitude": 6.502762,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656853504,
      "ems": null
    },
    {
      "latitude": 52.10463,
      "longitude": 6.50177,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656853507,
      "ems": null
    },
    {
      "latitude": 52.105732,
      "longitude": 6.500767,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656853510,
      "ems": null
    },
    {
      "latitude": 52.107376,
      "longitude": 6.499557,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656853514,
      "ems": null
    },
    {
      "latitude": 52.108807,
      "longitude": 6.498413,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656853518,
      "ems": null
    },
    {
      "latitude": 52.110077,
      "longitude": 6.497345,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656853522,
      "ems": null
    },
    {
      "latitude": 52.111633,
      "longitude": 6.496201,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656853526,
      "ems": null
    },
    {
      "latitude": 52.113098,
      "longitude": 6.495056,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656853530,
      "ems": null
    },
    {
      "latitude": 52.116211,
      "longitude": 6.492615,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656853538,
      "ems": null
    },
    {
      "latitude": 52.119095,
      "longitude": 6.490252,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656853546,
      "ems": null
    },
    {
      "latitude": 52.121201,
      "longitude": 6.488419,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656853552,
      "ems": null
    },
    {
      "latitude": 52.123169,
      "longitude": 6.486664,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656853558,
      "ems": null
    },
    {
      "latitude": 52.125286,
      "longitude": 6.48468,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656853564,
      "ems": null
    },
    {
      "latitude": 52.126328,
      "longitude": 6.483612,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656853567,
      "ems": null
    },
    {
      "latitude": 52.127335,
      "longitude": 6.482544,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656853570,
      "ems": null
    },
    {
      "latitude": 52.129288,
      "longitude": 6.480521,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656853576,
      "ems": null
    },
    {
      "latitude": 52.131409,
      "longitude": 6.478348,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656853582,
      "ems": null
    },
    {
      "latitude": 52.133385,
      "longitude": 6.476127,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656853589,
      "ems": null
    },
    {
      "latitude": 52.135574,
      "longitude": 6.473851,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656853594,
      "ems": null
    },
    {
      "latitude": 52.137817,
      "longitude": 6.471634,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656853601,
      "ems": null
    },
    {
      "latitude": 52.140152,
      "longitude": 6.469574,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656853606,
      "ems": null
    },
    {
      "latitude": 52.141388,
      "longitude": 6.468506,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656853609,
      "ems": null
    },
    {
      "latitude": 52.142788,
      "longitude": 6.467338,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656853613,
      "ems": null
    },
    {
      "latitude": 52.144001,
      "longitude": 6.466317,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656853616,
      "ems": null
    },
    {
      "latitude": 52.14642,
      "longitude": 6.464042,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656853622,
      "ems": null
    },
    {
      "latitude": 52.148712,
      "longitude": 6.461945,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656853627,
      "ems": null
    },
    {
      "latitude": 52.151001,
      "longitude": 6.459503,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656853634,
      "ems": null
    },
    {
      "latitude": 52.1521,
      "longitude": 6.458392,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656853637,
      "ems": null
    },
    {
      "latitude": 52.153172,
      "longitude": 6.457214,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1656853640,
      "ems": null
    },
    {
      "latitude": 52.154102,
      "longitude": 6.456116,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656853643,
      "ems": null
    },
    {
      "latitude": 52.156429,
      "longitude": 6.453762,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656853649,
      "ems": null
    },
    {
      "latitude": 52.158554,
      "longitude": 6.451569,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656853655,
      "ems": null
    },
    {
      "latitude": 52.160713,
      "longitude": 6.449445,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656853661,
      "ems": null
    },
    {
      "latitude": 52.162628,
      "longitude": 6.447372,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656853667,
      "ems": null
    },
    {
      "latitude": 52.16481,
      "longitude": 6.445129,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656853673,
      "ems": null
    },
    {
      "latitude": 52.166809,
      "longitude": 6.443089,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656853679,
      "ems": null
    },
    {
      "latitude": 52.16954,
      "longitude": 6.440353,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656853688,
      "ems": null
    },
    {
      "latitude": 52.171417,
      "longitude": 6.438145,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656853696,
      "ems": null
    },
    {
      "latitude": 52.173615,
      "longitude": 6.436234,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656853700,
      "ems": null
    },
    {
      "latitude": 52.174862,
      "longitude": 6.43532,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656853704,
      "ems": null
    },
    {
      "latitude": 52.177517,
      "longitude": 6.432809,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656853712,
      "ems": null
    },
    {
      "latitude": 52.179199,
      "longitude": 6.430893,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656853716,
      "ems": null
    },
    {
      "latitude": 52.180298,
      "longitude": 6.429901,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656853720,
      "ems": null
    },
    {
      "latitude": 52.183617,
      "longitude": 6.427081,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656853728,
      "ems": null
    },
    {
      "latitude": 52.186596,
      "longitude": 6.424726,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656853736,
      "ems": null
    },
    {
      "latitude": 52.188354,
      "longitude": 6.42334,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656853740,
      "ems": null
    },
    {
      "latitude": 52.189545,
      "longitude": 6.422424,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656853744,
      "ems": null
    },
    {
      "latitude": 52.192833,
      "longitude": 6.419782,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656853751,
      "ems": null
    },
    {
      "latitude": 52.194553,
      "longitude": 6.41837,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656853757,
      "ems": null
    },
    {
      "latitude": 52.197601,
      "longitude": 6.41571,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656853763,
      "ems": null
    },
    {
      "latitude": 52.198792,
      "longitude": 6.414525,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656853766,
      "ems": null
    },
    {
      "latitude": 52.19989,
      "longitude": 6.413422,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656853769,
      "ems": null
    },
    {
      "latitude": 52.201073,
      "longitude": 6.412249,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656853772,
      "ems": null
    },
    {
      "latitude": 52.202145,
      "longitude": 6.41115,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656853775,
      "ems": null
    },
    {
      "latitude": 52.204891,
      "longitude": 6.408482,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656853783,
      "ems": null
    },
    {
      "latitude": 52.208267,
      "longitude": 6.405563,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656853791,
      "ems": null
    },
    {
      "latitude": 52.211502,
      "longitude": 6.402675,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656853799,
      "ems": null
    },
    {
      "latitude": 52.214664,
      "longitude": 6.399929,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656853807,
      "ems": null
    },
    {
      "latitude": 52.217693,
      "longitude": 6.397418,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656853815,
      "ems": null
    },
    {
      "latitude": 52.220486,
      "longitude": 6.394985,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656853823,
      "ems": null
    },
    {
      "latitude": 52.223511,
      "longitude": 6.392365,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656853831,
      "ems": null
    },
    {
      "latitude": 52.226532,
      "longitude": 6.389389,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656853839,
      "ems": null
    },
    {
      "latitude": 52.226864,
      "longitude": 6.389099,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656853843,
      "ems": null
    },
    {
      "latitude": 52.228397,
      "longitude": 6.387451,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656853847,
      "ems": null
    },
    {
      "latitude": 52.230865,
      "longitude": 6.384861,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656853851,
      "ems": null
    },
    {
      "latitude": 52.232029,
      "longitude": 6.383606,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656853854,
      "ems": null
    },
    {
      "latitude": 52.234314,
      "longitude": 6.381302,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1656853860,
      "ems": null
    },
    {
      "latitude": 52.235413,
      "longitude": 6.380005,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1656853863,
      "ems": null
    },
    {
      "latitude": 52.237522,
      "longitude": 6.377563,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1656853869,
      "ems": null
    },
    {
      "latitude": 52.239761,
      "longitude": 6.375351,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656853875,
      "ems": null
    },
    {
      "latitude": 52.242085,
      "longitude": 6.373012,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656853881,
      "ems": null
    },
    {
      "latitude": 52.243061,
      "longitude": 6.371835,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1656853884,
      "ems": null
    },
    {
      "latitude": 52.245483,
      "longitude": 6.369171,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656853890,
      "ems": null
    },
    {
      "latitude": 52.247452,
      "longitude": 6.36734,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656853895,
      "ems": null
    },
    {
      "latitude": 52.249969,
      "longitude": 6.365051,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656853902,
      "ems": null
    },
    {
      "latitude": 52.253357,
      "longitude": 6.362076,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656853910,
      "ems": null
    },
    {
      "latitude": 52.255051,
      "longitude": 6.360703,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656853914,
      "ems": null
    },
    {
      "latitude": 52.255875,
      "longitude": 6.35994,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656853918,
      "ems": null
    },
    {
      "latitude": 52.260006,
      "longitude": 6.356454,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656853926,
      "ems": null
    },
    {
      "latitude": 52.263794,
      "longitude": 6.353073,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656853934,
      "ems": null
    },
    {
      "latitude": 52.267223,
      "longitude": 6.350019,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656853942,
      "ems": null
    },
    {
      "latitude": 52.271694,
      "longitude": 6.34586,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656853952,
      "ems": null
    },
    {
      "latitude": 52.274826,
      "longitude": 6.343231,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656853960,
      "ems": null
    },
    {
      "latitude": 52.277664,
      "longitude": 6.340714,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656853968,
      "ems": null
    },
    {
      "latitude": 52.280724,
      "longitude": 6.338091,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656853976,
      "ems": null
    },
    {
      "latitude": 52.283562,
      "longitude": 6.335737,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656853984,
      "ems": null
    },
    {
      "latitude": 52.286316,
      "longitude": 6.333389,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656853992,
      "ems": null
    },
    {
      "latitude": 52.288742,
      "longitude": 6.3311,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656853998,
      "ems": null
    },
    {
      "latitude": 52.289795,
      "longitude": 6.330109,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656854002,
      "ems": null
    },
    {
      "latitude": 52.290848,
      "longitude": 6.328964,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656854004,
      "ems": null
    },
    {
      "latitude": 52.291897,
      "longitude": 6.327889,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656854008,
      "ems": null
    },
    {
      "latitude": 52.294037,
      "longitude": 6.325692,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656854013,
      "ems": null
    },
    {
      "latitude": 52.296227,
      "longitude": 6.323574,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656854020,
      "ems": null
    },
    {
      "latitude": 52.298367,
      "longitude": 6.321533,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656854025,
      "ems": null
    },
    {
      "latitude": 52.300598,
      "longitude": 6.319351,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656854032,
      "ems": null
    },
    {
      "latitude": 52.302841,
      "longitude": 6.317139,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656854037,
      "ems": null
    },
    {
      "latitude": 52.304901,
      "longitude": 6.315002,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656854044,
      "ems": null
    },
    {
      "latitude": 52.307373,
      "longitude": 6.31279,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656854050,
      "ems": null
    },
    {
      "latitude": 52.309772,
      "longitude": 6.310626,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 330,
      "squawk": "5251",
      "timestamp": 1656854056,
      "ems": null
    },
    {
      "latitude": 52.311905,
      "longitude": 6.308594,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 329,
      "squawk": "5251",
      "timestamp": 1656854062,
      "ems": null
    },
    {
      "latitude": 52.314331,
      "longitude": 6.306229,
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
      "heading": 328,
      "squawk": "5251",
      "timestamp": 1656854068,
      "ems": null
    },
    {
      "latitude": 52.31657,
      "longitude": 6.303955,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 326,
      "squawk": "5251",
      "timestamp": 1656854074,
      "ems": null
    },
    {
      "latitude": 52.318756,
      "longitude": 6.301522,
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
      "heading": 326,
      "squawk": "5251",
      "timestamp": 1656854080,
      "ems": null
    },
    {
      "latitude": 52.320015,
      "longitude": 6.300189,
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
      "heading": 326,
      "squawk": "5251",
      "timestamp": 1656854083,
      "ems": null
    },
    {
      "latitude": 52.322109,
      "longitude": 6.297913,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 327,
      "squawk": "5251",
      "timestamp": 1656854089,
      "ems": null
    },
    {
      "latitude": 52.324493,
      "longitude": 6.295547,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 328,
      "squawk": "5251",
      "timestamp": 1656854095,
      "ems": null
    },
    {
      "latitude": 52.326828,
      "longitude": 6.293335,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656854101,
      "ems": null
    },
    {
      "latitude": 52.327652,
      "longitude": 6.292648,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656854103,
      "ems": null
    },
    {
      "latitude": 52.328953,
      "longitude": 6.291556,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656854107,
      "ems": null
    },
    {
      "latitude": 52.329987,
      "longitude": 6.290665,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656854109,
      "ems": null
    },
    {
      "latitude": 52.331451,
      "longitude": 6.289368,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656854113,
      "ems": null
    },
    {
      "latitude": 52.33342,
      "longitude": 6.287689,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656854118,
      "ems": null
    },
    {
      "latitude": 52.336262,
      "longitude": 6.2852,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656854125,
      "ems": null
    },
    {
      "latitude": 52.338547,
      "longitude": 6.283188,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656854131,
      "ems": null
    },
    {
      "latitude": 52.34024,
      "longitude": 6.281815,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656854135,
      "ems": null
    },
    {
      "latitude": 52.343197,
      "longitude": 6.279236,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656854143,
      "ems": null
    },
    {
      "latitude": 52.346008,
      "longitude": 6.276627,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656854151,
      "ems": null
    },
    {
      "latitude": 52.349434,
      "longitude": 6.273115,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656854159,
      "ems": null
    },
    {
      "latitude": 52.350739,
      "longitude": 6.271781,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656854163,
      "ems": null
    },
    {
      "latitude": 52.35339,
      "longitude": 6.269113,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656854170,
      "ems": null
    },
    {
      "latitude": 52.353973,
      "longitude": 6.268616,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656854175,
      "ems": null
    },
    {
      "latitude": 52.357727,
      "longitude": 6.265259,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656854182,
      "ems": null
    },
    {
      "latitude": 52.360283,
      "longitude": 6.262835,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656854188,
      "ems": null
    },
    {
      "latitude": 52.36261,
      "longitude": 6.260638,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656854194,
      "ems": null
    },
    {
      "latitude": 52.364426,
      "longitude": 6.258754,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656854200,
      "ems": null
    },
    {
      "latitude": 52.365681,
      "longitude": 6.25742,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656854203,
      "ems": null
    },
    {
      "latitude": 52.368149,
      "longitude": 6.25483,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656854209,
      "ems": null
    },
    {
      "latitude": 52.370243,
      "longitude": 6.252712,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656854215,
      "ems": null
    },
    {
      "latitude": 52.372971,
      "longitude": 6.249924,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656854223,
      "ems": null
    },
    {
      "latitude": 52.375828,
      "longitude": 6.246905,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656854230,
      "ems": null
    },
    {
      "latitude": 52.377972,
      "longitude": 6.244393,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1656854236,
      "ems": null
    },
    {
      "latitude": 52.378948,
      "longitude": 6.243295,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1656854239,
      "ems": null
    },
    {
      "latitude": 52.379276,
      "longitude": 6.242824,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1656854240,
      "ems": null
    },
    {
      "latitude": 52.383045,
      "longitude": 6.238665,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656854252,
      "ems": null
    },
    {
      "latitude": 52.386292,
      "longitude": 6.235657,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656854260,
      "ems": null
    },
    {
      "latitude": 52.387985,
      "longitude": 6.234207,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656854264,
      "ems": null
    },
    {
      "latitude": 52.389542,
      "longitude": 6.232834,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656854268,
      "ems": null
    },
    {
      "latitude": 52.389748,
      "longitude": 6.232701,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656854272,
      "ems": null
    },
    {
      "latitude": 52.392471,
      "longitude": 6.230316,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656854276,
      "ems": null
    },
    {
      "latitude": 52.395676,
      "longitude": 6.227417,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656854284,
      "ems": null
    },
    {
      "latitude": 52.398361,
      "longitude": 6.224854,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656854291,
      "ems": null
    },
    {
      "latitude": 52.401527,
      "longitude": 6.22195,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656854299,
      "ems": null
    },
    {
      "latitude": 52.403946,
      "longitude": 6.219596,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656854306,
      "ems": null
    },
    {
      "latitude": 52.406136,
      "longitude": 6.217634,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656854312,
      "ems": null
    },
    {
      "latitude": 52.408321,
      "longitude": 6.215829,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656854317,
      "ems": null
    },
    {
      "latitude": 52.409637,
      "longitude": 6.214905,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1656854321,
      "ems": null
    },
    {
      "latitude": 52.410736,
      "longitude": 6.213989,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656854323,
      "ems": null
    },
    {
      "latitude": 52.413162,
      "longitude": 6.211853,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656854330,
      "ems": null
    },
    {
      "latitude": 52.415352,
      "longitude": 6.209786,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656854336,
      "ems": null
    },
    {
      "latitude": 52.416935,
      "longitude": 6.208217,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656854340,
      "ems": null
    },
    {
      "latitude": 52.417694,
      "longitude": 6.207428,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656854342,
      "ems": null
    },
    {
      "latitude": 52.419479,
      "longitude": 6.205826,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1656854347,
      "ems": null
    },
    {
      "latitude": 52.422638,
      "longitude": 6.203003,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656854356,
      "ems": null
    },
    {
      "latitude": 52.425594,
      "longitude": 6.200056,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656854364,
      "ems": null
    },
    {
      "latitude": 52.428543,
      "longitude": 6.197052,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656854372,
      "ems": null
    },
    {
      "latitude": 52.430008,
      "longitude": 6.195526,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656854376,
      "ems": null
    },
    {
      "latitude": 52.430237,
      "longitude": 6.195297,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656854376,
      "ems": null
    },
    {
      "latitude": 52.43132,
      "longitude": 6.194092,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656854380,
      "ems": null
    },
    {
      "latitude": 52.432762,
      "longitude": 6.192365,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1656854384,
      "ems": null
    },
    {
      "latitude": 52.434067,
      "longitude": 6.190717,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1656854388,
      "ems": null
    },
    {
      "latitude": 52.435417,
      "longitude": 6.188991,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1656854392,
      "ems": null
    },
    {
      "latitude": 52.436646,
      "longitude": 6.187363,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1656854396,
      "ems": null
    },
    {
      "latitude": 52.43956,
      "longitude": 6.18389,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1656854404,
      "ems": null
    },
    {
      "latitude": 52.442307,
      "longitude": 6.180908,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656854412,
      "ems": null
    },
    {
      "latitude": 52.443787,
      "longitude": 6.179428,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656854416,
      "ems": null
    },
    {
      "latitude": 52.445427,
      "longitude": 6.177769,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1656854420,
      "ems": null
    },
    {
      "latitude": 52.44696,
      "longitude": 6.1762,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656854424,
      "ems": null
    },
    {
      "latitude": 52.448044,
      "longitude": 6.175079,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656854428,
      "ems": null
    },
    {
      "latitude": 52.451523,
      "longitude": 6.17157,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656854436,
      "ems": null
    },
    {
      "latitude": 52.454876,
      "longitude": 6.168353,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1656854444,
      "ems": null
    },
    {
      "latitude": 52.458069,
      "longitude": 6.165314,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656854452,
      "ems": null
    },
    {
      "latitude": 52.461319,
      "longitude": 6.162491,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1656854460,
      "ems": null
    },
    {
      "latitude": 52.464886,
      "longitude": 6.159564,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1656854468,
      "ems": null
    },
    {
      "latitude": 52.468098,
      "longitude": 6.15666,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656854476,
      "ems": null
    },
    {
      "latitude": 52.469971,
      "longitude": 6.154938,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1656854484,
      "ems": null
    },
    {
      "latitude": 52.47261,
      "longitude": 6.151951,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1656854488,
      "ems": null
    },
    {
      "latitude": 52.473999,
      "longitude": 6.150208,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1656854492,
      "ems": null
    },
    {
      "latitude": 52.474987,
      "longitude": 6.148655,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1656854496,
      "ems": null
    },
    {
      "latitude": 52.476429,
      "longitude": 6.146066,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1656854500,
      "ems": null
    },
    {
      "latitude": 52.477524,
      "longitude": 6.143723,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1656854504,
      "ems": null
    },
    {
      "latitude": 52.478291,
      "longitude": 6.142064,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1656854508,
      "ems": null
    },
    {
      "latitude": 52.479317,
      "longitude": 6.139631,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1656854512,
      "ems": null
    },
    {
      "latitude": 52.480434,
      "longitude": 6.13712,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1656854516,
      "ems": null
    },
    {
      "latitude": 52.481461,
      "longitude": 6.134872,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1656854520,
      "ems": null
    },
    {
      "latitude": 52.482285,
      "longitude": 6.133041,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1656854524,
      "ems": null
    },
    {
      "latitude": 52.483364,
      "longitude": 6.130607,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1656854528,
      "ems": null
    },
    {
      "latitude": 52.484993,
      "longitude": 6.126997,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1656854535,
      "ems": null
    },
    {
      "latitude": 52.486439,
      "longitude": 6.123544,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1656854543,
      "ems": null
    },
    {
      "latitude": 52.488438,
      "longitude": 6.118443,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1656854551,
      "ems": null
    },
    {
      "latitude": 52.490158,
      "longitude": 6.113968,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1656854559,
      "ems": null
    },
    {
      "latitude": 52.491791,
      "longitude": 6.109497,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1656854567,
      "ems": null
    },
    {
      "latitude": 52.4935,
      "longitude": 6.104965,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1656854575,
      "ems": null
    },
    {
      "latitude": 52.494724,
      "longitude": 6.101493,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1656854581,
      "ems": null
    },
    {
      "latitude": 52.495796,
      "longitude": 6.098432,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1656854587,
      "ems": null
    },
    {
      "latitude": 52.497005,
      "longitude": 6.094979,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1656854593,
      "ems": null
    },
    {
      "latitude": 52.498123,
      "longitude": 6.091766,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1656854599,
      "ems": null
    },
    {
      "latitude": 52.499176,
      "longitude": 6.088867,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1656854604,
      "ems": null
    },
    {
      "latitude": 52.500229,
      "longitude": 6.085587,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1656854611,
      "ems": null
    },
    {
      "latitude": 52.501335,
      "longitude": 6.082267,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1656854617,
      "ems": null
    },
    {
      "latitude": 52.50238,
      "longitude": 6.079407,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1656854622,
      "ems": null
    },
    {
      "latitude": 52.503941,
      "longitude": 6.07591,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1656854630,
      "ems": null
    },
    {
      "latitude": 52.504761,
      "longitude": 6.074295,
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1656854634,
      "ems": null
    },
    {
      "latitude": 52.505585,
      "longitude": 6.072693,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1656854638,
      "ems": null
    },
    {
      "latitude": 52.506729,
      "longitude": 6.070404,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1656854642,
      "ems": null
    },
    {
      "latitude": 52.507618,
      "longitude": 6.068691,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1656854646,
      "ems": null
    },
    {
      "latitude": 52.508736,
      "longitude": 6.066494,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1656854650,
      "ems": null
    },
    {
      "latitude": 52.510506,
      "longitude": 6.062805,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1656854658,
      "ems": null
    },
    {
      "latitude": 52.512268,
      "longitude": 6.059341,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1656854666,
      "ems": null
    },
    {
      "latitude": 52.514275,
      "longitude": 6.055664,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1656854674,
      "ems": null
    },
    {
      "latitude": 52.516045,
      "longitude": 6.051976,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1656854682,
      "ems": null
    },
    {
      "latitude": 52.5168,
      "longitude": 6.050186,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1656854686,
      "ems": null
    },
    {
      "latitude": 52.517254,
      "longitude": 6.049072,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1656854690,
      "ems": null
    },
    {
      "latitude": 52.518234,
      "longitude": 6.046326,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1656854694,
      "ems": null
    },
    {
      "latitude": 52.518768,
      "longitude": 6.04454,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1656854698,
      "ems": null
    },
    {
      "latitude": 52.519535,
      "longitude": 6.042402,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1656854702,
      "ems": null
    },
    {
      "latitude": 52.520329,
      "longitude": 6.040362,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1656854706,
      "ems": null
    },
    {
      "latitude": 52.521957,
      "longitude": 6.036517,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1656854714,
      "ems": null
    },
    {
      "latitude": 52.522797,
      "longitude": 6.034851,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1656854718,
      "ems": null
    },
    {
      "latitude": 52.523773,
      "longitude": 6.032828,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1656854722,
      "ems": null
    },
    {
      "latitude": 52.524704,
      "longitude": 6.031024,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1656854726,
      "ems": null
    },
    {
      "latitude": 52.525726,
      "longitude": 6.029129,
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1656854730,
      "ems": null
    },
    {
      "latitude": 52.526505,
      "longitude": 6.027603,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1656854734,
      "ems": null
    },
    {
      "latitude": 52.528473,
      "longitude": 6.02356,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1656854742,
      "ems": null
    },
    {
      "latitude": 52.530243,
      "longitude": 6.020037,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1656854750,
      "ems": null
    },
    {
      "latitude": 52.532135,
      "longitude": 6.016388,
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1656854758,
      "ems": null
    },
    {
      "latitude": 52.534058,
      "longitude": 6.012802,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1656854766,
      "ems": null
    },
    {
      "latitude": 52.535065,
      "longitude": 6.011047,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1656854770,
      "ems": null
    },
    {
      "latitude": 52.536026,
      "longitude": 6.009369,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1656854774,
      "ems": null
    },
    {
      "latitude": 52.536995,
      "longitude": 6.007403,
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1656854778,
      "ems": null
    },
    {
      "latitude": 52.537552,
      "longitude": 6.005912,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1656854782,
      "ems": null
    },
    {
      "latitude": 52.538223,
      "longitude": 6.003571,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1656854786,
      "ems": null
    },
    {
      "latitude": 52.538406,
      "longitude": 6.003036,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1656854787,
      "ems": null
    },
    {
      "latitude": 52.539043,
      "longitude": 6.000732,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1656854791,
      "ems": null
    },
    {
      "latitude": 52.539551,
      "longitude": 5.998917,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1656854795,
      "ems": null
    },
    {
      "latitude": 52.540146,
      "longitude": 5.996628,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1656854799,
      "ems": null
    },
    {
      "latitude": 52.540695,
      "longitude": 5.994644,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1656854803,
      "ems": null
    },
    {
      "latitude": 52.541107,
      "longitude": 5.993271,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1656854805,
      "ems": null
    },
    {
      "latitude": 52.541649,
      "longitude": 5.991708,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1656854809,
      "ems": null
    },
    {
      "latitude": 52.54179,
      "longitude": 5.991158,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1656854811,
      "ems": null
    },
    {
      "latitude": 52.542671,
      "longitude": 5.988804,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1656854814,
      "ems": null
    },
    {
      "latitude": 52.543121,
      "longitude": 5.987625,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1656854816,
      "ems": null
    },
    {
      "latitude": 52.543854,
      "longitude": 5.985641,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1656854821,
      "ems": null
    },
    {
      "latitude": 52.544678,
      "longitude": 5.983734,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1656854825,
      "ems": null
    },
    {
      "latitude": 52.545456,
      "longitude": 5.981903,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1656854829,
      "ems": null
    },
    {
      "latitude": 52.546211,
      "longitude": 5.979937,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1656854833,
      "ems": null
    },
    {
      "latitude": 52.546768,
      "longitude": 5.978524,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1656854837,
      "ems": null
    },
    {
      "latitude": 52.547653,
      "longitude": 5.975856,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1656854841,
      "ems": null
    },
    {
      "latitude": 52.549026,
      "longitude": 5.971909,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1656854849,
      "ems": null
    },
    {
      "latitude": 52.549656,
      "longitude": 5.969892,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1656854853,
      "ems": null
    },
    {
      "latitude": 52.550079,
      "longitude": 5.968399,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1656854857,
      "ems": null
    },
    {
      "latitude": 52.550911,
      "longitude": 5.965812,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1656854861,
      "ems": null
    },
    {
      "latitude": 52.552078,
      "longitude": 5.962437,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1656854869,
      "ems": null
    },
    {
      "latitude": 52.553741,
      "longitude": 5.957947,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1656854877,
      "ems": null
    },
    {
      "latitude": 52.55431,
      "longitude": 5.956395,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1656854881,
      "ems": null
    },
    {
      "latitude": 52.555241,
      "longitude": 5.954197,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1656854885,
      "ems": null
    },
    {
      "latitude": 52.555893,
      "longitude": 5.952759,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1656854889,
      "ems": null
    },
    {
      "latitude": 52.55687,
      "longitude": 5.950745,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1656854893,
      "ems": null
    },
    {
      "latitude": 52.55785,
      "longitude": 5.948783,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1656854897,
      "ems": null
    },
    {
      "latitude": 52.558685,
      "longitude": 5.947135,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1656854901,
      "ems": null
    },
    {
      "latitude": 52.559509,
      "longitude": 5.945435,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1656854905,
      "ems": null
    },
    {
      "latitude": 52.560287,
      "longitude": 5.943909,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1656854909,
      "ems": null
    },
    {
      "latitude": 52.562119,
      "longitude": 5.940247,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1656854917,
      "ems": null
    },
    {
      "latitude": 52.563713,
      "longitude": 5.937012,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1656854925,
      "ems": null
    },
    {
      "latitude": 52.565437,
      "longitude": 5.933559,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1656854933,
      "ems": null
    },
    {
      "latitude": 52.567429,
      "longitude": 5.929565,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1656854941,
      "ems": null
    },
    {
      "latitude": 52.568836,
      "longitude": 5.926575,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1656854949,
      "ems": null
    },
    {
      "latitude": 52.569855,
      "longitude": 5.924149,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1656854953,
      "ems": null
    },
    {
      "latitude": 52.570633,
      "longitude": 5.922241,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1656854957,
      "ems": null
    },
    {
      "latitude": 52.571396,
      "longitude": 5.920218,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1656854961,
      "ems": null
    },
    {
      "latitude": 52.571861,
      "longitude": 5.918963,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1656854965,
      "ems": null
    },
    {
      "latitude": 52.572876,
      "longitude": 5.91629,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1656854969,
      "ems": null
    },
    {
      "latitude": 52.573563,
      "longitude": 5.914459,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1656854973,
      "ems": null
    },
    {
      "latitude": 52.574329,
      "longitude": 5.912057,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1656854977,
      "ems": null
    },
    {
      "latitude": 52.57489,
      "longitude": 5.909958,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1656854981,
      "ems": null
    },
    {
      "latitude": 52.575397,
      "longitude": 5.908212,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1656854985,
      "ems": null
    },
    {
      "latitude": 52.575863,
      "longitude": 5.906329,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1656854989,
      "ems": null
    },
    {
      "latitude": 52.576424,
      "longitude": 5.903817,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1656854993,
      "ems": null
    },
    {
      "latitude": 52.576813,
      "longitude": 5.902023,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1656854996,
      "ems": null
    },
    {
      "latitude": 52.577122,
      "longitude": 5.900443,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1656854999,
      "ems": null
    },
    {
      "latitude": 52.577362,
      "longitude": 5.899124,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1656855001,
      "ems": null
    },
    {
      "latitude": 52.577637,
      "longitude": 5.897675,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1656855005,
      "ems": null
    },
    {
      "latitude": 52.578049,
      "longitude": 5.895309,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1656855009,
      "ems": null
    },
    {
      "latitude": 52.578331,
      "longitude": 5.893616,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1656855012,
      "ems": null
    },
    {
      "latitude": 52.578472,
      "longitude": 5.892753,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1656855014,
      "ems": null
    },
    {
      "latitude": 52.57869,
      "longitude": 5.891418,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1656855018,
      "ems": null
    },
    {
      "latitude": 52.579868,
      "longitude": 5.886553,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1656855026,
      "ems": null
    },
    {
      "latitude": 52.580292,
      "longitude": 5.88501,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1656855030,
      "ems": null
    },
    {
      "latitude": 52.58094,
      "longitude": 5.882629,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1656855034,
      "ems": null
    },
    {
      "latitude": 52.581451,
      "longitude": 5.880668,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1656855038,
      "ems": null
    },
    {
      "latitude": 52.581963,
      "longitude": 5.878549,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1656855042,
      "ems": null
    },
    {
      "latitude": 52.582397,
      "longitude": 5.876694,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1656855046,
      "ems": null
    },
    {
      "latitude": 52.583313,
      "longitude": 5.872498,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1656855054,
      "ems": null
    },
    {
      "latitude": 52.583725,
      "longitude": 5.87059,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1656855058,
      "ems": null
    },
    {
      "latitude": 52.584778,
      "longitude": 5.866241,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1656855066,
      "ems": null
    },
    {
      "latitude": 52.585686,
      "longitude": 5.862383,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1656855074,
      "ems": null
    },
    {
      "latitude": 52.586479,
      "longitude": 5.858224,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1656855082,
      "ems": null
    },
    {
      "latitude": 52.586899,
      "longitude": 5.85532,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1656855086,
      "ems": null
    },
    {
      "latitude": 52.587112,
      "longitude": 5.8535,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1656855090,
      "ems": null
    },
    {
      "latitude": 52.58783,
      "longitude": 5.849984,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "timestamp": 1656855098,
      "ems": null
    },
    {
      "latitude": 52.588806,
      "longitude": 5.845718,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1656855106,
      "ems": null
    },
    {
      "latitude": 52.589172,
      "longitude": 5.844116,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1656855108,
      "ems": null
    },
    {
      "latitude": 52.589539,
      "longitude": 5.842056,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1656855111,
      "ems": null
    },
    {
      "latitude": 52.590061,
      "longitude": 5.838841,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1656855118,
      "ems": null
    },
    {
      "latitude": 52.591042,
      "longitude": 5.835702,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1656855122,
      "ems": null
    },
    {
      "latitude": 52.59211,
      "longitude": 5.833897,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1656855126,
      "ems": null
    },
    {
      "latitude": 52.593136,
      "longitude": 5.832798,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1656855130,
      "ems": null
    },
    {
      "latitude": 52.594067,
      "longitude": 5.832014,
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
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1656855132,
      "ems": null
    },
    {
      "latitude": 52.595764,
      "longitude": 5.830994,
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
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1656855135,
      "ems": null
    },
    {
      "latitude": 52.597137,
      "longitude": 5.830444,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1656855139,
      "ems": null
    },
    {
      "latitude": 52.598351,
      "longitude": 5.830052,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1656855141,
      "ems": null
    },
    {
      "latitude": 52.599606,
      "longitude": 5.829738,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1656855144,
      "ems": null
    },
    {
      "latitude": 52.600399,
      "longitude": 5.829581,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1656855147,
      "ems": null
    },
    {
      "latitude": 52.601715,
      "longitude": 5.829391,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1656855151,
      "ems": null
    },
    {
      "latitude": 52.603226,
      "longitude": 5.829773,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1656855154,
      "ems": null
    },
    {
      "latitude": 52.603844,
      "longitude": 5.830052,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1656855156,
      "ems": null
    },
    {
      "latitude": 52.605377,
      "longitude": 5.831543,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1656855159,
      "ems": null
    },
    {
      "latitude": 52.606682,
      "longitude": 5.833662,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1656855163,
      "ems": null
    },
    {
      "latitude": 52.60738,
      "longitude": 5.835624,
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1656855165,
      "ems": null
    },
    {
      "latitude": 52.607754,
      "longitude": 5.837036,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1656855167,
      "ems": null
    },
    {
      "latitude": 52.608124,
      "longitude": 5.83939,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1656855171,
      "ems": null
    },
    {
      "latitude": 52.608265,
      "longitude": 5.842372,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1656855174,
      "ems": null
    },
    {
      "latitude": 52.608124,
      "longitude": 5.844648,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1656855177,
      "ems": null
    },
    {
      "latitude": 52.607986,
      "longitude": 5.846139,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1656855181,
      "ems": null
    },
    {
      "latitude": 52.607426,
      "longitude": 5.849278,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1656855184,
      "ems": null
    },
    {
      "latitude": 52.606934,
      "longitude": 5.851288,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1656855186,
      "ems": null
    },
    {
      "latitude": 52.606541,
      "longitude": 5.853123,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1656855190,
      "ems": null
    },
    {
      "latitude": 52.605927,
      "longitude": 5.855637,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1656855193,
      "ems": null
    },
    {
      "latitude": 52.605377,
      "longitude": 5.857675,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1656855196,
      "ems": null
    },
    {
      "latitude": 52.605007,
      "longitude": 5.859244,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1656855198,
      "ems": null
    },
    {
      "latitude": 52.604496,
      "longitude": 5.861049,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1656855201,
      "ems": null
    },
    {
      "latitude": 52.603867,
      "longitude": 5.863724,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1656855204,
      "ems": null
    },
    {
      "latitude": 52.603317,
      "longitude": 5.865631,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1656855207,
      "ems": null
    },
    {
      "latitude": 52.602539,
      "longitude": 5.868149,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1656855211,
      "ems": null
    },
    {
      "latitude": 52.601933,
      "longitude": 5.869838,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1656855213,
      "ems": null
    },
    {
      "latitude": 52.601212,
      "longitude": 5.871658,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656855217,
      "ems": null
    },
    {
      "latitude": 52.60025,
      "longitude": 5.873795,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855220,
      "ems": null
    },
    {
      "latitude": 52.599518,
      "longitude": 5.87532,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656855222,
      "ems": null
    },
    {
      "latitude": 52.598862,
      "longitude": 5.876587,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656855225,
      "ems": null
    },
    {
      "latitude": 52.598053,
      "longitude": 5.878448,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855228,
      "ems": null
    },
    {
      "latitude": 52.597046,
      "longitude": 5.880814,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656855232,
      "ems": null
    },
    {
      "latitude": 52.596039,
      "longitude": 5.883331,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1656855236,
      "ems": null
    },
    {
      "latitude": 52.594112,
      "longitude": 5.888358,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1656855244,
      "ems": null
    },
    {
      "latitude": 52.593369,
      "longitude": 5.890634,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1656855248,
      "ems": null
    },
    {
      "latitude": 52.592438,
      "longitude": 5.893223,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1656855252,
      "ems": null
    },
    {
      "latitude": 52.591599,
      "longitude": 5.895421,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1656855256,
      "ems": null
    },
    {
      "latitude": 52.589783,
      "longitude": 5.900208,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1656855264,
      "ems": null
    },
    {
      "latitude": 52.587982,
      "longitude": 5.905151,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1656855272,
      "ems": null
    },
    {
      "latitude": 52.586014,
      "longitude": 5.910034,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656855280,
      "ems": null
    },
    {
      "latitude": 52.584412,
      "longitude": 5.913773,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656855286,
      "ems": null
    },
    {
      "latitude": 52.58313,
      "longitude": 5.916977,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1656855292,
      "ems": null
    },
    {
      "latitude": 52.581299,
      "longitude": 5.921707,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656855298,
      "ems": null
    },
    {
      "latitude": 52.579544,
      "longitude": 5.925869,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855304,
      "ems": null
    },
    {
      "latitude": 52.577637,
      "longitude": 5.929947,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656855310,
      "ems": null
    },
    {
      "latitude": 52.57568,
      "longitude": 5.933951,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656855317,
      "ems": null
    },
    {
      "latitude": 52.574749,
      "longitude": 5.935913,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656855320,
      "ems": null
    },
    {
      "latitude": 52.573425,
      "longitude": 5.938721,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656855324,
      "ems": null
    },
    {
      "latitude": 52.572235,
      "longitude": 5.941162,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656855330,
      "ems": null
    },
    {
      "latitude": 52.569809,
      "longitude": 5.946579,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855336,
      "ems": null
    },
    {
      "latitude": 52.567997,
      "longitude": 5.950823,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656855343,
      "ems": null
    },
    {
      "latitude": 52.566181,
      "longitude": 5.955296,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656855349,
      "ems": null
    },
    {
      "latitude": 52.565231,
      "longitude": 5.957718,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656855353,
      "ems": null
    },
    {
      "latitude": 52.563248,
      "longitude": 5.962359,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855361,
      "ems": null
    },
    {
      "latitude": 52.560364,
      "longitude": 5.969029,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855369,
      "ems": null
    },
    {
      "latitude": 52.558182,
      "longitude": 5.973892,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855377,
      "ems": null
    },
    {
      "latitude": 52.555801,
      "longitude": 5.979233,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855385,
      "ems": null
    },
    {
      "latitude": 52.553379,
      "longitude": 5.98441,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "squawk": "7000",
      "timestamp": 1656855393,
      "ems": null
    },
    {
      "latitude": 52.550961,
      "longitude": 5.989667,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855401,
      "ems": null
    },
    {
      "latitude": 52.548397,
      "longitude": 5.994925,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1656855409,
      "ems": null
    },
    {
      "latitude": 52.545959,
      "longitude": 5.99968,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656855417,
      "ems": null
    },
    {
      "latitude": 52.543396,
      "longitude": 6.005249,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656855425,
      "ems": null
    },
    {
      "latitude": 52.54137,
      "longitude": 6.010149,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "squawk": "7000",
      "timestamp": 1656855433,
      "ems": null
    },
    {
      "latitude": 52.540066,
      "longitude": 6.013131,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855437,
      "ems": null
    },
    {
      "latitude": 52.53772,
      "longitude": 6.018219,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855445,
      "ems": null
    },
    {
      "latitude": 52.535316,
      "longitude": 6.023725,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855453,
      "ems": null
    },
    {
      "latitude": 52.532757,
      "longitude": 6.029376,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855461,
      "ems": null
    },
    {
      "latitude": 52.530754,
      "longitude": 6.034162,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656855469,
      "ems": null
    },
    {
      "latitude": 52.528839,
      "longitude": 6.038666,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656855477,
      "ems": null
    },
    {
      "latitude": 52.526138,
      "longitude": 6.044922,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656855485,
      "ems": null
    },
    {
      "latitude": 52.523758,
      "longitude": 6.050415,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855493,
      "ems": null
    },
    {
      "latitude": 52.521469,
      "longitude": 6.055222,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656855501,
      "ems": null
    },
    {
      "latitude": 52.518932,
      "longitude": 6.060451,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656855509,
      "ems": null
    },
    {
      "latitude": 52.51651,
      "longitude": 6.065316,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1656855517,
      "ems": null
    },
    {
      "latitude": 52.514557,
      "longitude": 6.069336,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656855524,
      "ems": null
    },
    {
      "latitude": 52.512089,
      "longitude": 6.075047,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855532,
      "ems": null
    },
    {
      "latitude": 52.509712,
      "longitude": 6.08054,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656855540,
      "ems": null
    },
    {
      "latitude": 52.507553,
      "longitude": 6.085358,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855547,
      "ems": null
    },
    {
      "latitude": 52.505058,
      "longitude": 6.090742,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656855555,
      "ems": null
    },
    {
      "latitude": 52.502918,
      "longitude": 6.095215,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656855562,
      "ems": null
    },
    {
      "latitude": 52.502655,
      "longitude": 6.095734,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1656855565,
      "ems": null
    },
    {
      "latitude": 52.501785,
      "longitude": 6.097488,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1656855565,
      "ems": null
    },
    {
      "latitude": 52.501144,
      "longitude": 6.098709,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1656855567,
      "ems": null
    },
    {
      "latitude": 52.500458,
      "longitude": 6.100006,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1656855570,
      "ems": null
    },
    {
      "latitude": 52.4991,
      "longitude": 6.102513,
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1656855574,
      "ems": null
    },
    {
      "latitude": 52.497147,
      "longitude": 6.10675,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855580,
      "ems": null
    },
    {
      "latitude": 52.494965,
      "longitude": 6.111755,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855588,
      "ems": null
    },
    {
      "latitude": 52.493561,
      "longitude": 6.114833,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855593,
      "ems": null
    },
    {
      "latitude": 52.490982,
      "longitude": 6.120529,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "squawk": "7000",
      "timestamp": 1656855601,
      "ems": null
    },
    {
      "latitude": 52.490162,
      "longitude": 6.122445,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "squawk": "7000",
      "timestamp": 1656855604,
      "ems": null
    },
    {
      "latitude": 52.4883,
      "longitude": 6.126605,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656855611,
      "ems": null
    },
    {
      "latitude": 52.486542,
      "longitude": 6.130447,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855618,
      "ems": null
    },
    {
      "latitude": 52.483932,
      "longitude": 6.136551,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656855626,
      "ems": null
    },
    {
      "latitude": 52.481506,
      "longitude": 6.14212,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855634,
      "ems": null
    },
    {
      "latitude": 52.479492,
      "longitude": 6.146851,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656855642,
      "ems": null
    },
    {
      "latitude": 52.477203,
      "longitude": 6.152191,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855650,
      "ems": null
    },
    {
      "latitude": 52.475372,
      "longitude": 6.156158,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656855658,
      "ems": null
    },
    {
      "latitude": 52.472427,
      "longitude": 6.162467,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855666,
      "ems": null
    },
    {
      "latitude": 52.470238,
      "longitude": 6.167332,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855674,
      "ems": null
    },
    {
      "latitude": 52.467865,
      "longitude": 6.172867,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656855682,
      "ems": null
    },
    {
      "latitude": 52.465721,
      "longitude": 6.177769,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855690,
      "ems": null
    },
    {
      "latitude": 52.463608,
      "longitude": 6.182709,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656855698,
      "ems": null
    },
    {
      "latitude": 52.461411,
      "longitude": 6.188126,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656855706,
      "ems": null
    },
    {
      "latitude": 52.45903,
      "longitude": 6.193542,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855714,
      "ems": null
    },
    {
      "latitude": 52.456879,
      "longitude": 6.198643,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656855722,
      "ems": null
    },
    {
      "latitude": 52.454727,
      "longitude": 6.203766,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656855730,
      "ems": null
    },
    {
      "latitude": 52.452484,
      "longitude": 6.208878,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855738,
      "ems": null
    },
    {
      "latitude": 52.450127,
      "longitude": 6.213867,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1656855746,
      "ems": null
    },
    {
      "latitude": 52.449371,
      "longitude": 6.215363,
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1656855748,
      "ems": null
    },
    {
      "latitude": 52.447311,
      "longitude": 6.219711,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855756,
      "ems": null
    },
    {
      "latitude": 52.444977,
      "longitude": 6.224899,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855763,
      "ems": null
    },
    {
      "latitude": 52.443695,
      "longitude": 6.228027,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656855768,
      "ems": null
    },
    {
      "latitude": 52.442734,
      "longitude": 6.230316,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656855772,
      "ems": null
    },
    {
      "latitude": 52.441681,
      "longitude": 6.232986,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656855776,
      "ems": null
    },
    {
      "latitude": 52.44072,
      "longitude": 6.235352,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1656855780,
      "ems": null
    },
    {
      "latitude": 52.439838,
      "longitude": 6.237645,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1656855784,
      "ems": null
    },
    {
      "latitude": 52.437836,
      "longitude": 6.242676,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656855790,
      "ems": null
    },
    {
      "latitude": 52.436813,
      "longitude": 6.245257,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656855799,
      "ems": null
    },
    {
      "latitude": 52.433212,
      "longitude": 6.254272,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1656855808,
      "ems": null
    },
    {
      "latitude": 52.430878,
      "longitude": 6.260529,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1656855817,
      "ems": null
    },
    {
      "latitude": 52.428715,
      "longitude": 6.266366,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1656855825,
      "ems": null
    },
    {
      "latitude": 52.426575,
      "longitude": 6.272278,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855834,
      "ems": null
    },
    {
      "latitude": 52.425968,
      "longitude": 6.273507,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1656855837,
      "ems": null
    },
    {
      "latitude": 52.424377,
      "longitude": 6.276093,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1656855841,
      "ems": null
    },
    {
      "latitude": 52.42308,
      "longitude": 6.278373,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1656855845,
      "ems": null
    },
    {
      "latitude": 52.422958,
      "longitude": 6.27861,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1656855846,
      "ems": null
    },
    {
      "latitude": 52.421543,
      "longitude": 6.281512,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1656855850,
      "ems": null
    },
    {
      "latitude": 52.420612,
      "longitude": 6.283709,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656855854,
      "ems": null
    },
    {
      "latitude": 52.420395,
      "longitude": 6.284256,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1656855855,
      "ems": null
    },
    {
      "latitude": 52.418938,
      "longitude": 6.288025,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1656855861,
      "ems": null
    },
    {
      "latitude": 52.418331,
      "longitude": 6.289673,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1656855863,
      "ems": null
    },
    {
      "latitude": 52.417774,
      "longitude": 6.291242,
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
      "squawk": "7000",
      "timestamp": 1656855866,
      "ems": null
    },
    {
      "latitude": 52.417191,
      "longitude": 6.292801,
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
      "squawk": "7000",
      "timestamp": 1656855870,
      "ems": null
    },
    {
      "latitude": 52.415863,
      "longitude": 6.29631,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1656855873,
      "ems": null
    },
    {
      "latitude": 52.415585,
      "longitude": 6.296971,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1656855874,
      "ems": null
    },
    {
      "latitude": 52.414536,
      "longitude": 6.299515,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656855878,
      "ems": null
    },
    {
      "latitude": 52.412605,
      "longitude": 6.304348,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656855886,
      "ems": null
    },
    {
      "latitude": 52.41172,
      "longitude": 6.306466,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855890,
      "ems": null
    },
    {
      "latitude": 52.410461,
      "longitude": 6.309433,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855894,
      "ems": null
    },
    {
      "latitude": 52.409393,
      "longitude": 6.311881,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855898,
      "ems": null
    },
    {
      "latitude": 52.408356,
      "longitude": 6.314011,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1656855902,
      "ems": null
    },
    {
      "latitude": 52.406693,
      "longitude": 6.317217,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1656855907,
      "ems": null
    },
    {
      "latitude": 52.405197,
      "longitude": 6.320114,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1656855911,
      "ems": null
    },
    {
      "latitude": 52.404099,
      "longitude": 6.322174,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1656855915,
      "ems": null
    },
    {
      "latitude": 52.401718,
      "longitude": 6.327133,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855923,
      "ems": null
    },
    {
      "latitude": 52.399525,
      "longitude": 6.33197,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656855931,
      "ems": null
    },
    {
      "latitude": 52.397186,
      "longitude": 6.336975,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656855939,
      "ems": null
    },
    {
      "latitude": 52.394806,
      "longitude": 6.34201,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656855947,
      "ems": null
    },
    {
      "latitude": 52.392563,
      "longitude": 6.347122,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656855955,
      "ems": null
    },
    {
      "latitude": 52.3904,
      "longitude": 6.351981,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855963,
      "ems": null
    },
    {
      "latitude": 52.388077,
      "longitude": 6.357193,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656855971,
      "ems": null
    },
    {
      "latitude": 52.385883,
      "longitude": 6.362418,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855979,
      "ems": null
    },
    {
      "latitude": 52.383835,
      "longitude": 6.367126,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656855986,
      "ems": null
    },
    {
      "latitude": 52.382256,
      "longitude": 6.370815,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656855992,
      "ems": null
    },
    {
      "latitude": 52.380478,
      "longitude": 6.374664,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656855998,
      "ems": null
    },
    {
      "latitude": 52.378784,
      "longitude": 6.378326,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656856004,
      "ems": null
    },
    {
      "latitude": 52.376995,
      "longitude": 6.382194,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656856010,
      "ems": null
    },
    {
      "latitude": 52.375179,
      "longitude": 6.386117,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656856016,
      "ems": null
    },
    {
      "latitude": 52.373363,
      "longitude": 6.390355,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656856022,
      "ems": null
    },
    {
      "latitude": 52.371735,
      "longitude": 6.394357,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656856028,
      "ems": null
    },
    {
      "latitude": 52.369904,
      "longitude": 6.398544,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656856034,
      "ems": null
    },
    {
      "latitude": 52.368118,
      "longitude": 6.402588,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656856041,
      "ems": null
    },
    {
      "latitude": 52.366611,
      "longitude": 6.405892,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656856046,
      "ems": null
    },
    {
      "latitude": 52.364376,
      "longitude": 6.410444,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1656856052,
      "ems": null
    },
    {
      "latitude": 52.363358,
      "longitude": 6.412354,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1656856055,
      "ems": null
    },
    {
      "latitude": 52.362396,
      "longitude": 6.414108,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1656856058,
      "ems": null
    },
    {
      "latitude": 52.361389,
      "longitude": 6.415939,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1656856062,
      "ems": null
    },
    {
      "latitude": 52.360283,
      "longitude": 6.418056,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1656856065,
      "ems": null
    },
    {
      "latitude": 52.358604,
      "longitude": 6.42143,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1656856071,
      "ems": null
    },
    {
      "latitude": 52.355942,
      "longitude": 6.42746,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656856079,
      "ems": null
    },
    {
      "latitude": 52.353333,
      "longitude": 6.432724,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1656856087,
      "ems": null
    },
    {
      "latitude": 52.350815,
      "longitude": 6.437531,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656856095,
      "ems": null
    },
    {
      "latitude": 52.348549,
      "longitude": 6.443011,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1656856103,
      "ems": null
    },
    {
      "latitude": 52.347527,
      "longitude": 6.445522,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656856107,
      "ems": null
    },
    {
      "latitude": 52.345276,
      "longitude": 6.450806,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656856115,
      "ems": null
    },
    {
      "latitude": 52.344223,
      "longitude": 6.4534,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1656856119,
      "ems": null
    },
    {
      "latitude": 52.343803,
      "longitude": 6.454546,
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
      "squawk": "7000",
      "timestamp": 1656856120,
      "ems": null
    },
    {
      "latitude": 52.342918,
      "longitude": 6.457057,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1656856124,
      "ems": null
    },
    {
      "latitude": 52.342731,
      "longitude": 6.457528,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656856124,
      "ems": null
    },
    {
      "latitude": 52.342403,
      "longitude": 6.45847,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1656856126,
      "ems": null
    },
    {
      "latitude": 52.341568,
      "longitude": 6.460571,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656856129,
      "ems": null
    },
    {
      "latitude": 52.339508,
      "longitude": 6.465225,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656856136,
      "ems": null
    },
    {
      "latitude": 52.338043,
      "longitude": 6.468582,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656856141,
      "ems": null
    },
    {
      "latitude": 52.33733,
      "longitude": 6.470162,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656856144,
      "ems": null
    },
    {
      "latitude": 52.335709,
      "longitude": 6.473541,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656856150,
      "ems": null
    },
    {
      "latitude": 52.334164,
      "longitude": 6.476597,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656856154,
      "ems": null
    },
    {
      "latitude": 52.333328,
      "longitude": 6.478324,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656856158,
      "ems": null
    },
    {
      "latitude": 52.330719,
      "longitude": 6.483817,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "squawk": "7000",
      "timestamp": 1656856166,
      "ems": null
    },
    {
      "latitude": 52.3283,
      "longitude": 6.489153,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656856174,
      "ems": null
    },
    {
      "latitude": 52.32605,
      "longitude": 6.494446,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656856182,
      "ems": null
    },
    {
      "latitude": 52.324249,
      "longitude": 6.498413,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656856188,
      "ems": null
    },
    {
      "latitude": 52.321838,
      "longitude": 6.503601,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656856196,
      "ems": null
    },
    {
      "latitude": 52.320339,
      "longitude": 6.507045,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656856201,
      "ems": null
    },
    {
      "latitude": 52.319092,
      "longitude": 6.509628,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1656856207,
      "ems": null
    },
    {
      "latitude": 52.316521,
      "longitude": 6.514579,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1656856215,
      "ems": null
    },
    {
      "latitude": 52.313919,
      "longitude": 6.519928,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656856222,
      "ems": null
    },
    {
      "latitude": 52.312683,
      "longitude": 6.523361,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1656856227,
      "ems": null
    },
    {
      "latitude": 52.312592,
      "longitude": 6.523666,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1656856227,
      "ems": null
    },
    {
      "latitude": 52.311958,
      "longitude": 6.525643,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1656856230,
      "ems": null
    },
    {
      "latitude": 52.311447,
      "longitude": 6.527056,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1656856232,
      "ems": null
    },
    {
      "latitude": 52.310844,
      "longitude": 6.529018,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1656856235,
      "ems": null
    },
    {
      "latitude": 52.310257,
      "longitude": 6.530838,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1656856237,
      "ems": null
    },
    {
      "latitude": 52.309525,
      "longitude": 6.533051,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1656856240,
      "ems": null
    },
    {
      "latitude": 52.308933,
      "longitude": 6.534747,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1656856243,
      "ems": null
    },
    {
      "latitude": 52.308151,
      "longitude": 6.536942,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1656856246,
      "ems": null
    },
    {
      "latitude": 52.307648,
      "longitude": 6.538391,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1656856248,
      "ems": null
    },
    {
      "latitude": 52.307922,
      "longitude": 6.537628,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1656856248,
      "ems": null
    },
    {
      "latitude": 52.306698,
      "longitude": 6.54126,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1656856253,
      "ems": null
    },
    {
      "latitude": 52.305038,
      "longitude": 6.545563,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1656856258,
      "ems": null
    },
    {
      "latitude": 52.304123,
      "longitude": 6.547852,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656856261,
      "ems": null
    },
    {
      "latitude": 52.303627,
      "longitude": 6.549186,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656856263,
      "ems": null
    },
    {
      "latitude": 52.303486,
      "longitude": 6.549421,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656856264,
      "ems": null
    },
    {
      "latitude": 52.302704,
      "longitude": 6.551208,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656856266,
      "ems": null
    },
    {
      "latitude": 52.302155,
      "longitude": 6.552505,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656856268,
      "ems": null
    },
    {
      "latitude": 52.301159,
      "longitude": 6.5546,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656856272,
      "ems": null
    },
    {
      "latitude": 52.300041,
      "longitude": 6.556798,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1656856276,
      "ems": null
    },
    {
      "latitude": 52.29911,
      "longitude": 6.558524,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1656856279,
      "ems": null
    },
    {
      "latitude": 52.298126,
      "longitude": 6.560287,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1656856281,
      "ems": null
    },
    {
      "latitude": 52.297112,
      "longitude": 6.561977,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1656856284,
      "ems": null
    },
    {
      "latitude": 52.296204,
      "longitude": 6.563492,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1656856288,
      "ems": null
    },
    {
      "latitude": 52.294968,
      "longitude": 6.56543,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1656856291,
      "ems": null
    },
    {
      "latitude": 52.294178,
      "longitude": 6.566842,
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1656856293,
      "ems": null
    },
    {
      "latitude": 52.29385,
      "longitude": 6.567391,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1656856295,
      "ems": null
    },
    {
      "latitude": 52.291153,
      "longitude": 6.5721,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1656856303,
      "ems": null
    },
    {
      "latitude": 52.290127,
      "longitude": 6.573983,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1656856308,
      "ems": null
    },
    {
      "latitude": 52.287102,
      "longitude": 6.579555,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1656856316,
      "ems": null
    },
    {
      "latitude": 52.28603,
      "longitude": 6.581674,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1656856320,
      "ems": null
    },
    {
      "latitude": 52.285034,
      "longitude": 6.583939,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656856324,
      "ems": null
    },
    {
      "latitude": 52.284531,
      "longitude": 6.585083,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656856325,
      "ems": null
    },
    {
      "latitude": 52.283615,
      "longitude": 6.587219,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656856329,
      "ems": null
    },
    {
      "latitude": 52.282494,
      "longitude": 6.589835,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1656856333,
      "ems": null
    },
    {
      "latitude": 52.281784,
      "longitude": 6.591797,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1656856336,
      "ems": null
    },
    {
      "latitude": 52.280956,
      "longitude": 6.593837,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656856339,
      "ems": null
    },
    {
      "latitude": 52.28009,
      "longitude": 6.595917,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656856342,
      "ems": null
    },
    {
      "latitude": 52.279266,
      "longitude": 6.597824,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656856345,
      "ems": null
    },
    {
      "latitude": 52.278862,
      "longitude": 6.598859,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656856348,
      "ems": null
    },
    {
      "latitude": 52.276657,
      "longitude": 6.604156,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656856354,
      "ems": null
    },
    {
      "latitude": 52.274391,
      "longitude": 6.609139,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656856362,
      "ems": null
    },
    {
      "latitude": 52.271988,
      "longitude": 6.614685,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656856370,
      "ems": null
    },
    {
      "latitude": 52.269737,
      "longitude": 6.619969,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656856378,
      "ems": null
    },
    {
      "latitude": 52.26709,
      "longitude": 6.625595,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656856386,
      "ems": null
    },
    {
      "latitude": 52.265549,
      "longitude": 6.629229,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656856394,
      "ems": null
    },
    {
      "latitude": 52.262238,
      "longitude": 6.637039,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656856402,
      "ems": null
    },
    {
      "latitude": 52.259682,
      "longitude": 6.643197,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656856410,
      "ems": null
    },
    {
      "latitude": 52.257568,
      "longitude": 6.647491,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1656856418,
      "ems": null
    },
    {
      "latitude": 52.255119,
      "longitude": 6.652614,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656856426,
      "ems": null
    },
    {
      "latitude": 52.252232,
      "longitude": 6.658657,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656856434,
      "ems": null
    },
    {
      "latitude": 52.249924,
      "longitude": 6.663589,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656856442,
      "ems": null
    },
    {
      "latitude": 52.248604,
      "longitude": 6.666504,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1656856450,
      "ems": null
    },
    {
      "latitude": 52.245117,
      "longitude": 6.673584,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656856458,
      "ems": null
    },
    {
      "latitude": 52.242783,
      "longitude": 6.678589,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656856466,
      "ems": null
    },
    {
      "latitude": 52.240494,
      "longitude": 6.683502,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656856474,
      "ems": null
    },
    {
      "latitude": 52.238361,
      "longitude": 6.688633,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1656856482,
      "ems": null
    },
    {
      "latitude": 52.23608,
      "longitude": 6.693813,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656856490,
      "ems": null
    },
    {
      "latitude": 52.233753,
      "longitude": 6.698914,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656856498,
      "ems": null
    },
    {
      "latitude": 52.231613,
      "longitude": 6.703796,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1656856506,
      "ems": null
    },
    {
      "latitude": 52.229507,
      "longitude": 6.708603,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656856514,
      "ems": null
    },
    {
      "latitude": 52.227402,
      "longitude": 6.713257,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656856522,
      "ems": null
    },
    {
      "latitude": 52.225281,
      "longitude": 6.717826,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656856528,
      "ems": null
    },
    {
      "latitude": 52.223511,
      "longitude": 6.72142,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1656856534,
      "ems": null
    },
    {
      "latitude": 52.221863,
      "longitude": 6.724777,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1656856540,
      "ems": null
    },
    {
      "latitude": 52.220345,
      "longitude": 6.727792,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1656856546,
      "ems": null
    },
    {
      "latitude": 52.217972,
      "longitude": 6.732635,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1656856553,
      "ems": null
    },
    {
      "latitude": 52.215637,
      "longitude": 6.737823,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1656856561,
      "ems": null
    },
    {
      "latitude": 52.21344,
      "longitude": 6.742783,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1656856569,
      "ems": null
    },
    {
      "latitude": 52.2122,
      "longitude": 6.745998,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1656856573,
      "ems": null
    },
    {
      "latitude": 52.211288,
      "longitude": 6.748505,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1656856577,
      "ems": null
    },
    {
      "latitude": 52.210281,
      "longitude": 6.751785,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1656856581,
      "ems": null
    },
    {
      "latitude": 52.209404,
      "longitude": 6.75463,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1656856585,
      "ems": null
    },
    {
      "latitude": 52.208405,
      "longitude": 6.757736,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1656856589,
      "ems": null
    },
    {
      "latitude": 52.207581,
      "longitude": 6.760254,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "squawk": "7000",
      "timestamp": 1656856593,
      "ems": null
    },
    {
      "latitude": 52.206612,
      "longitude": 6.763419,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1656856597,
      "ems": null
    },
    {
      "latitude": 52.205704,
      "longitude": 6.76651,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1656856601,
      "ems": null
    },
    {
      "latitude": 52.204842,
      "longitude": 6.769697,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1656856605,
      "ems": null
    },
    {
      "latitude": 52.204742,
      "longitude": 6.770096,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1656856609,
      "ems": null
    },
    {
      "latitude": 52.202423,
      "longitude": 6.779114,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1656856617,
      "ems": null
    },
    {
      "latitude": 52.201584,
      "longitude": 6.782379,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1656856621,
      "ems": null
    },
    {
      "latitude": 52.199844,
      "longitude": 6.788788,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1656856629,
      "ems": null
    },
    {
      "latitude": 52.198002,
      "longitude": 6.794965,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1656856637,
      "ems": null
    },
    {
      "latitude": 52.196232,
      "longitude": 6.801322,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1656856645,
      "ems": null
    },
    {
      "latitude": 52.194649,
      "longitude": 6.806815,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1656856653,
      "ems": null
    },
    {
      "latitude": 52.192692,
      "longitude": 6.813721,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1656856661,
      "ems": null
    },
    {
      "latitude": 52.190918,
      "longitude": 6.819839,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "squawk": "7000",
      "timestamp": 1656856669,
      "ems": null
    },
    {
      "latitude": 52.189133,
      "longitude": 6.825562,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1656856677,
      "ems": null
    },
    {
      "latitude": 52.187527,
      "longitude": 6.831378,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1656856685,
      "ems": null
    },
    {
      "latitude": 52.185791,
      "longitude": 6.837463,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "squawk": "7000",
      "timestamp": 1656856693,
      "ems": null
    },
    {
      "latitude": 52.184082,
      "longitude": 6.843148,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1656856701,
      "ems": null
    },
    {
      "latitude": 52.182907,
      "longitude": 6.847305,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1656856706,
      "ems": null
    },
    {
      "latitude": 52.181351,
      "longitude": 6.852341,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1656856713,
      "ems": null
    },
    {
      "latitude": 52.17989,
      "longitude": 6.857274,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1656856719,
      "ems": null
    },
    {
      "latitude": 52.178448,
      "longitude": 6.861904,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1656856725,
      "ems": null
    },
    {
      "latitude": 52.176727,
      "longitude": 6.867523,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1656856733,
      "ems": null
    },
    {
      "latitude": 52.17477,
      "longitude": 6.873282,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1656856741,
      "ems": null
    },
    {
      "latitude": 52.172955,
      "longitude": 6.878697,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1656856749,
      "ems": null
    },
    {
      "latitude": 52.17128,
      "longitude": 6.884384,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1656856757,
      "ems": null
    },
    {
      "latitude": 52.17041,
      "longitude": 6.887512,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1656856761,
      "ems": null
    },
    {
      "latitude": 52.168533,
      "longitude": 6.893539,
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
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1656856769,
      "ems": null
    },
    {
      "latitude": 52.166763,
      "longitude": 6.899493,
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
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1656856777,
      "ems": null
    },
    {
      "latitude": 52.164993,
      "longitude": 6.90577,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656856785,
      "ems": null
    },
    {
      "latitude": 52.163269,
      "longitude": 6.912003,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656856793,
      "ems": null
    },
    {
      "latitude": 52.162014,
      "longitude": 6.916443,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656856799,
      "ems": null
    },
    {
      "latitude": 52.161163,
      "longitude": 6.919632,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656856803,
      "ems": null
    },
    {
      "latitude": 52.159698,
      "longitude": 6.925507,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656856811,
      "ems": null
    },
    {
      "latitude": 52.158051,
      "longitude": 6.931839,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656856819,
      "ems": null
    },
    {
      "latitude": 52.156288,
      "longitude": 6.938023,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1656856827,
      "ems": null
    },
    {
      "latitude": 52.155304,
      "longitude": 6.941071,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1656856831,
      "ems": null
    },
    {
      "latitude": 52.154388,
      "longitude": 6.943741,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1656856835,
      "ems": null
    },
    {
      "latitude": 52.153404,
      "longitude": 6.946577,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1656856839,
      "ems": null
    },
    {
      "latitude": 52.15303,
      "longitude": 6.947675,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1656856843,
      "ems": null
    },
    {
      "latitude": 52.152565,
      "longitude": 6.949166,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1656856843,
      "ems": null
    },
    {
      "latitude": 52.15155,
      "longitude": 6.952286,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1656856847,
      "ems": null
    },
    {
      "latitude": 52.150772,
      "longitude": 6.954651,
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
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1656856851,
      "ems": null
    },
    {
      "latitude": 52.148895,
      "longitude": 6.960754,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1656856859,
      "ems": null
    },
    {
      "latitude": 52.147163,
      "longitude": 6.966666,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1656856867,
      "ems": null
    },
    {
      "latitude": 52.145508,
      "longitude": 6.972504,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1656856875,
      "ems": null
    },
    {
      "latitude": 52.143814,
      "longitude": 6.977539,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1656856883,
      "ems": null
    },
    {
      "latitude": 52.142303,
      "longitude": 6.982346,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656856891,
      "ems": null
    },
    {
      "latitude": 52.140881,
      "longitude": 6.987775,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656856897,
      "ems": null
    },
    {
      "latitude": 52.139763,
      "longitude": 6.992013,
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656856902,
      "ems": null
    },
    {
      "latitude": 52.138412,
      "longitude": 6.996536,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1656856909,
      "ems": null
    },
    {
      "latitude": 52.137314,
      "longitude": 7.000504,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656856914,
      "ems": null
    },
    {
      "latitude": 52.135986,
      "longitude": 7.005463,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656856921,
      "ems": null
    },
    {
      "latitude": 52.13483,
      "longitude": 7.009827,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656856926,
      "ems": null
    },
    {
      "latitude": 52.133606,
      "longitude": 7.014465,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656856933,
      "ems": null
    },
    {
      "latitude": 52.132324,
      "longitude": 7.018738,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1656856939,
      "ems": null
    },
    {
      "latitude": 52.131317,
      "longitude": 7.02179,
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
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1656856943,
      "ems": null
    },
    {
      "latitude": 52.130493,
      "longitude": 7.024155,
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
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1656856947,
      "ems": null
    },
    {
      "latitude": 52.129623,
      "longitude": 7.026749,
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
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1656856951,
      "ems": null
    },
    {
      "latitude": 52.12793,
      "longitude": 7.031937,
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
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1656856959,
      "ems": null
    },
    {
      "latitude": 52.126236,
      "longitude": 7.03743,
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
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1656856967,
      "ems": null
    },
    {
      "latitude": 52.124588,
      "longitude": 7.042923,
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
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1656856975,
      "ems": null
    },
    {
      "latitude": 52.123379,
      "longitude": 7.047101,
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
      "squawk": "7742",
      "timestamp": 1656856981,
      "ems": null
    },
    {
      "latitude": 52.12207,
      "longitude": 7.051468,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1656856987,
      "ems": null
    },
    {
      "latitude": 52.120815,
      "longitude": 7.055341,
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
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1656856993,
      "ems": null
    },
    {
      "latitude": 52.11956,
      "longitude": 7.059579,
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
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1656856999,
      "ems": null
    },
    {
      "latitude": 52.118317,
      "longitude": 7.06398,
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656857005,
      "ems": null
    },
    {
      "latitude": 52.117138,
      "longitude": 7.068368,
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656857011,
      "ems": null
    },
    {
      "latitude": 52.116165,
      "longitude": 7.071991,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656857016,
      "ems": null
    },
    {
      "latitude": 52.115044,
      "longitude": 7.075902,
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656857022,
      "ems": null
    },
    {
      "latitude": 52.113739,
      "longitude": 7.080536,
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656857027,
      "ems": null
    },
    {
      "latitude": 52.112274,
      "longitude": 7.085876,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656857035,
      "ems": null
    },
    {
      "latitude": 52.110855,
      "longitude": 7.090655,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1656857043,
      "ems": null
    },
    {
      "latitude": 52.10939,
      "longitude": 7.095108,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1656857047,
      "ems": null
    },
    {
      "latitude": 52.108013,
      "longitude": 7.099287,
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
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1656857053,
      "ems": null
    },
    {
      "latitude": 52.106525,
      "longitude": 7.103838,
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
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1656857059,
      "ems": null
    },
    {
      "latitude": 52.10471,
      "longitude": 7.109724,
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
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1656857067,
      "ems": null
    },
    {
      "latitude": 52.102985,
      "longitude": 7.114825,
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
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1656857074,
      "ems": null
    },
    {
      "latitude": 52.101151,
      "longitude": 7.120361,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1656857082,
      "ems": null
    },
    {
      "latitude": 52.099823,
      "longitude": 7.124712,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1656857087,
      "ems": null
    },
    {
      "latitude": 52.098221,
      "longitude": 7.130127,
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656857095,
      "ems": null
    },
    {
      "latitude": 52.097626,
      "longitude": 7.132263,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656857098,
      "ems": null
    },
    {
      "latitude": 52.097031,
      "longitude": 7.134552,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1656857100,
      "ems": null
    },
    {
      "latitude": 52.096516,
      "longitude": 7.136876,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1656857103,
      "ems": null
    },
    {
      "latitude": 52.096096,
      "longitude": 7.138602,
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
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1656857106,
      "ems": null
    },
    {
      "latitude": 52.094879,
      "longitude": 7.14325,
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656857112,
      "ems": null
    },
    {
      "latitude": 52.093399,
      "longitude": 7.148961,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656857119,
      "ems": null
    },
    {
      "latitude": 52.09256,
      "longitude": 7.151864,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656857123,
      "ems": null
    },
    {
      "latitude": 52.09079,
      "longitude": 7.157671,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1656857131,
      "ems": null
    },
    {
      "latitude": 52.089859,
      "longitude": 7.160496,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1656857135,
      "ems": null
    },
    {
      "latitude": 52.088791,
      "longitude": 7.163315,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1656857139,
      "ems": null
    },
    {
      "latitude": 52.087811,
      "longitude": 7.166068,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1656857143,
      "ems": null
    },
    {
      "latitude": 52.087158,
      "longitude": 7.167873,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1656857145,
      "ems": null
    },
    {
      "latitude": 52.08646,
      "longitude": 7.169991,
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
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1656857148,
      "ems": null
    },
    {
      "latitude": 52.085815,
      "longitude": 7.17186,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1656857151,
      "ems": null
    },
    {
      "latitude": 52.084167,
      "longitude": 7.17659,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1656857158,
      "ems": null
    },
    {
      "latitude": 52.082691,
      "longitude": 7.180978,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1656857164,
      "ems": null
    },
    {
      "latitude": 52.082085,
      "longitude": 7.183175,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1656857167,
      "ems": null
    },
    {
      "latitude": 52.081467,
      "longitude": 7.185211,
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
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1656857170,
      "ems": null
    },
    {
      "latitude": 52.080826,
      "longitude": 7.187347,
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
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1656857173,
      "ems": null
    },
    {
      "latitude": 52.080269,
      "longitude": 7.189453,
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656857176,
      "ems": null
    },
    {
      "latitude": 52.079712,
      "longitude": 7.191415,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656857178,
      "ems": null
    },
    {
      "latitude": 52.078491,
      "longitude": 7.19574,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656857185,
      "ems": null
    },
    {
      "latitude": 52.077385,
      "longitude": 7.199733,
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656857190,
      "ems": null
    },
    {
      "latitude": 52.076218,
      "longitude": 7.203735,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1656857197,
      "ems": null
    },
    {
      "latitude": 52.074871,
      "longitude": 7.208051,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1656857203,
      "ems": null
    },
    {
      "latitude": 52.073658,
      "longitude": 7.212054,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1656857209,
      "ems": null
    },
    {
      "latitude": 52.072449,
      "longitude": 7.216034,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1656857215,
      "ems": null
    },
    {
      "latitude": 52.07103,
      "longitude": 7.219925,
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
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1656857221,
      "ems": null
    },
    {
      "latitude": 52.070251,
      "longitude": 7.221985,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1656857224,
      "ems": null
    },
    {
      "latitude": 52.069061,
      "longitude": 7.225647,
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656857230,
      "ems": null
    },
    {
      "latitude": 52.067871,
      "longitude": 7.230301,
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
      "squawk": "7742",
      "timestamp": 1656857236,
      "ems": null
    },
    {
      "latitude": 52.066677,
      "longitude": 7.234576,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656857242,
      "ems": null
    },
    {
      "latitude": 52.065559,
      "longitude": 7.238342,
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656857247,
      "ems": null
    },
    {
      "latitude": 52.06485,
      "longitude": 7.240906,
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
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1656857251,
      "ems": null
    },
    {
      "latitude": 52.064255,
      "longitude": 7.242894,
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
      "squawk": "7742",
      "timestamp": 1656857254,
      "ems": null
    },
    {
      "latitude": 52.063091,
      "longitude": 7.246739,
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
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1656857260,
      "ems": null
    },
    {
      "latitude": 52.061874,
      "longitude": 7.251205,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656857266,
      "ems": null
    },
    {
      "latitude": 52.060776,
      "longitude": 7.255402,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656857272,
      "ems": null
    },
    {
      "latitude": 52.059631,
      "longitude": 7.259445,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1656857278,
      "ems": null
    },
    {
      "latitude": 52.058483,
      "longitude": 7.263375,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1656857284,
      "ems": null
    },
    {
      "latitude": 52.057343,
      "longitude": 7.267456,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656857290,
      "ems": null
    },
    {
      "latitude": 52.056198,
      "longitude": 7.2715,
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656857296,
      "ems": null
    },
    {
      "latitude": 52.055191,
      "longitude": 7.275085,
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656857301,
      "ems": null
    },
    {
      "latitude": 52.054001,
      "longitude": 7.279434,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656857308,
      "ems": null
    },
    {
      "latitude": 52.052902,
      "longitude": 7.283783,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656857314,
      "ems": null
    },
    {
      "latitude": 52.052383,
      "longitude": 7.285976,
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
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1656857320,
      "ems": null
    },
    {
      "latitude": 52.050987,
      "longitude": 7.29194,
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
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1656857326,
      "ems": null
    },
    {
      "latitude": 52.05011,
      "longitude": 7.295761,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1656857331,
      "ems": null
    },
    {
      "latitude": 52.04908,
      "longitude": 7.298924,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1656857335,
      "ems": null
    },
    {
      "latitude": 52.048325,
      "longitude": 7.301025,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1656857338,
      "ems": null
    },
    {
      "latitude": 52.047638,
      "longitude": 7.302628,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 124,
      "squawk": "7742",
      "timestamp": 1656857341,
      "ems": null
    },
    {
      "latitude": 52.046799,
      "longitude": 7.304496,
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
      "heading": 124,
      "squawk": "7742",
      "timestamp": 1656857344,
      "ems": null
    },
    {
      "latitude": 52.045822,
      "longitude": 7.306693,
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
      "heading": 126,
      "squawk": "7742",
      "timestamp": 1656857347,
      "ems": null
    },
    {
      "latitude": 52.045258,
      "longitude": 7.307968,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 126,
      "squawk": "7742",
      "timestamp": 1656857349,
      "ems": null
    },
    {
      "latitude": 52.044388,
      "longitude": 7.309952,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 126,
      "squawk": "7742",
      "timestamp": 1656857353,
      "ems": null
    },
    {
      "latitude": 52.043728,
      "longitude": 7.311637,
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
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1656857355,
      "ems": null
    },
    {
      "latitude": 52.04274,
      "longitude": 7.314377,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1656857359,
      "ems": null
    },
    {
      "latitude": 52.041321,
      "longitude": 7.318497,
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
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1656857365,
      "ems": null
    },
    {
      "latitude": 52.039768,
      "longitude": 7.322466,
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
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1656857371,
      "ems": null
    },
    {
      "latitude": 52.03907,
      "longitude": 7.324349,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1656857374,
      "ems": null
    },
    {
      "latitude": 52.038651,
      "longitude": 7.325605,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1656857377,
      "ems": null
    },
    {
      "latitude": 52.037933,
      "longitude": 7.32811,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1656857380,
      "ems": null
    },
    {
      "latitude": 52.036331,
      "longitude": 7.33284,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1656857386,
      "ems": null
    },
    {
      "latitude": 52.034866,
      "longitude": 7.337418,
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
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1656857392,
      "ems": null
    },
    {
      "latitude": 52.034275,
      "longitude": 7.339573,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656857395,
      "ems": null
    },
    {
      "latitude": 52.033855,
      "longitude": 7.341221,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656857398,
      "ems": null
    },
    {
      "latitude": 52.033081,
      "longitude": 7.344131,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656857401,
      "ems": null
    },
    {
      "latitude": 52.031845,
      "longitude": 7.348251,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1656857407,
      "ems": null
    },
    {
      "latitude": 52.03046,
      "longitude": 7.352836,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1656857413,
      "ems": null
    },
    {
      "latitude": 52.029282,
      "longitude": 7.356873,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656857419,
      "ems": null
    },
    {
      "latitude": 52.028549,
      "longitude": 7.35982,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1656857425,
      "ems": null
    },
    {
      "latitude": 52.026779,
      "longitude": 7.366725,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656857432,
      "ems": null
    },
    {
      "latitude": 52.026268,
      "longitude": 7.368687,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656857435,
      "ems": null
    },
    {
      "latitude": 52.025711,
      "longitude": 7.370884,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656857438,
      "ems": null
    },
    {
      "latitude": 52.024521,
      "longitude": 7.375488,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656857444,
      "ems": null
    },
    {
      "latitude": 52.023335,
      "longitude": 7.37983,
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656857450,
      "ems": null
    },
    {
      "latitude": 52.022141,
      "longitude": 7.384186,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656857456,
      "ems": null
    },
    {
      "latitude": 52.020401,
      "longitude": 7.390213,
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
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1656857465,
      "ems": null
    },
    {
      "latitude": 52.019165,
      "longitude": 7.394562,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656857471,
      "ems": null
    },
    {
      "latitude": 52.018112,
      "longitude": 7.398682,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656857476,
      "ems": null
    },
    {
      "latitude": 52.016773,
      "longitude": 7.404079,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656857483,
      "ems": null
    },
    {
      "latitude": 52.01564,
      "longitude": 7.408524,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656857489,
      "ems": null
    },
    {
      "latitude": 52.014027,
      "longitude": 7.413731,
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
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1656857496,
      "ems": null
    },
    {
      "latitude": 52.013279,
      "longitude": 7.416007,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1656857499,
      "ems": null
    },
    {
      "latitude": 52.012676,
      "longitude": 7.41789,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1656857501,
      "ems": null
    },
    {
      "latitude": 52.011429,
      "longitude": 7.422562,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656857507,
      "ems": null
    },
    {
      "latitude": 52.009735,
      "longitude": 7.42897,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656857515,
      "ems": null
    },
    {
      "latitude": 52.008812,
      "longitude": 7.432643,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1656857520,
      "ems": null
    },
    {
      "latitude": 52.008392,
      "longitude": 7.434605,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1656857523,
      "ems": null
    },
    {
      "latitude": 52.008133,
      "longitude": 7.435455,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1656857524,
      "ems": null
    },
    {
      "latitude": 52.007263,
      "longitude": 7.439117,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656857528,
      "ems": null
    },
    {
      "latitude": 52.006577,
      "longitude": 7.441903,
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
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1656857532,
      "ems": null
    },
    {
      "latitude": 52.005432,
      "longitude": 7.446213,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656857537,
      "ems": null
    },
    {
      "latitude": 52.004242,
      "longitude": 7.450943,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656857543,
      "ems": null
    },
    {
      "latitude": 52.002575,
      "longitude": 7.457598,
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
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1656857552,
      "ems": null
    },
    {
      "latitude": 52.001595,
      "longitude": 7.462071,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1656857557,
      "ems": null
    },
    {
      "latitude": 52.000526,
      "longitude": 7.467015,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1656857564,
      "ems": null
    },
    {
      "latitude": 51.999313,
      "longitude": 7.472116,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656857570,
      "ems": null
    },
    {
      "latitude": 51.998615,
      "longitude": 7.474391,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1656857574,
      "ems": null
    },
    {
      "latitude": 51.997639,
      "longitude": 7.477216,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1656857578,
      "ems": null
    },
    {
      "latitude": 51.996552,
      "longitude": 7.480164,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1656857582,
      "ems": null
    },
    {
      "latitude": 51.995544,
      "longitude": 7.483063,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1656857586,
      "ems": null
    },
    {
      "latitude": 51.994675,
      "longitude": 7.485352,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1656857590,
      "ems": null
    },
    {
      "latitude": 51.993622,
      "longitude": 7.488556,
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
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1656857594,
      "ems": null
    },
    {
      "latitude": 51.992706,
      "longitude": 7.491656,
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1656857599,
      "ems": null
    },
    {
      "latitude": 51.990936,
      "longitude": 7.497541,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1656857607,
      "ems": null
    },
    {
      "latitude": 51.990326,
      "longitude": 7.499695,
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
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1656857610,
      "ems": null
    },
    {
      "latitude": 51.989864,
      "longitude": 7.501622,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1656857613,
      "ems": null
    },
    {
      "latitude": 51.98954,
      "longitude": 7.503113,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1656857615,
      "ems": null
    },
    {
      "latitude": 51.989136,
      "longitude": 7.505569,
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
      "heading": 104,
      "squawk": "7742",
      "timestamp": 1656857619,
      "ems": null
    },
    {
      "latitude": 51.988934,
      "longitude": 7.506801,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 102,
      "squawk": "7742",
      "timestamp": 1656857620,
      "ems": null
    },
    {
      "latitude": 51.988678,
      "longitude": 7.508621,
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
      "heading": 102,
      "squawk": "7742",
      "timestamp": 1656857624,
      "ems": null
    },
    {
      "latitude": 51.988235,
      "longitude": 7.511902,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 102,
      "squawk": "7742",
      "timestamp": 1656857627,
      "ems": null
    },
    {
      "latitude": 51.987957,
      "longitude": 7.514178,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 102,
      "squawk": "7742",
      "timestamp": 1656857630,
      "ems": null
    },
    {
      "latitude": 51.987816,
      "longitude": 7.515276,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 101,
      "squawk": "7742",
      "timestamp": 1656857631,
      "ems": null
    },
    {
      "latitude": 51.987537,
      "longitude": 7.517944,
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
      "heading": 99,
      "squawk": "7742",
      "timestamp": 1656857635,
      "ems": null
    },
    {
      "latitude": 51.987259,
      "longitude": 7.520691,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 98,
      "squawk": "7742",
      "timestamp": 1656857639,
      "ems": null
    },
    {
      "latitude": 51.986984,
      "longitude": 7.524033,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 98,
      "squawk": "7742",
      "timestamp": 1656857643,
      "ems": null
    },
    {
      "latitude": 51.986801,
      "longitude": 7.526016,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 97,
      "squawk": "7742",
      "timestamp": 1656857645,
      "ems": null
    },
    {
      "latitude": 51.986607,
      "longitude": 7.528774,
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
      "heading": 96,
      "squawk": "7742",
      "timestamp": 1656857649,
      "ems": null
    },
    {
      "latitude": 51.986389,
      "longitude": 7.531586,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 97,
      "squawk": "7742",
      "timestamp": 1656857653,
      "ems": null
    },
    {
      "latitude": 51.986187,
      "longitude": 7.534581,
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
      "heading": 96,
      "squawk": "7742",
      "timestamp": 1656857657,
      "ems": null
    },
    {
      "latitude": 51.985977,
      "longitude": 7.53746,
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
      "heading": 96,
      "squawk": "7742",
      "timestamp": 1656857661,
      "ems": null
    },
    {
      "latitude": 51.985794,
      "longitude": 7.540512,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 94,
      "squawk": "7742",
      "timestamp": 1656857665,
      "ems": null
    },
    {
      "latitude": 51.985474,
      "longitude": 7.546539,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 95,
      "squawk": "7742",
      "timestamp": 1656857673,
      "ems": null
    },
    {
      "latitude": 51.985165,
      "longitude": 7.553022,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 94,
      "squawk": "7742",
      "timestamp": 1656857681,
      "ems": null
    },
    {
      "latitude": 51.984833,
      "longitude": 7.559586,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 94,
      "squawk": "7742",
      "timestamp": 1656857689,
      "ems": null
    },
    {
      "latitude": 51.984375,
      "longitude": 7.565689,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 97,
      "squawk": "7742",
      "timestamp": 1656857697,
      "ems": null
    },
    {
      "latitude": 51.984001,
      "longitude": 7.572013,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 94,
      "squawk": "7742",
      "timestamp": 1656857705,
      "ems": null
    },
    {
      "latitude": 51.983582,
      "longitude": 7.578605,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 96,
      "squawk": "7742",
      "timestamp": 1656857713,
      "ems": null
    },
    {
      "latitude": 51.983185,
      "longitude": 7.585373,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 95,
      "squawk": "7742",
      "timestamp": 1656857721,
      "ems": null
    },
    {
      "latitude": 51.982773,
      "longitude": 7.592163,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 96,
      "squawk": "7742",
      "timestamp": 1656857729,
      "ems": null
    },
    {
      "latitude": 51.982323,
      "longitude": 7.598694,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 95,
      "squawk": "7742",
      "timestamp": 1656857737,
      "ems": null
    },
    {
      "latitude": 51.982086,
      "longitude": 7.604828,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 92,
      "squawk": "7742",
      "timestamp": 1656857745,
      "ems": null
    },
    {
      "latitude": 51.981949,
      "longitude": 7.612152,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 93,
      "squawk": "7742",
      "timestamp": 1656857753,
      "ems": null
    },
    {
      "latitude": 51.98167,
      "longitude": 7.617763,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 96,
      "squawk": "7742",
      "timestamp": 1656857761,
      "ems": null
    },
    {
      "latitude": 51.981079,
      "longitude": 7.625961,
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
      "heading": 95,
      "squawk": "7742",
      "timestamp": 1656857769,
      "ems": null
    },
    {
      "latitude": 51.981022,
      "longitude": 7.626866,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 96,
      "squawk": "7742",
      "timestamp": 1656857772,
      "ems": null
    },
    {
      "latitude": 51.98074,
      "longitude": 7.630947,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 97,
      "squawk": "7742",
      "timestamp": 1656857775,
      "ems": null
    },
    {
      "latitude": 51.980209,
      "longitude": 7.638016,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 97,
      "squawk": "7742",
      "timestamp": 1656857784,
      "ems": null
    },
    {
      "latitude": 51.979439,
      "longitude": 7.644208,
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
      "heading": 104,
      "squawk": "7742",
      "timestamp": 1656857792,
      "ems": null
    },
    {
      "latitude": 51.978832,
      "longitude": 7.647269,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1656857796,
      "ems": null
    },
    {
      "latitude": 51.978653,
      "longitude": 7.648087,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1656857798,
      "ems": null
    },
    {
      "latitude": 51.977966,
      "longitude": 7.651596,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1656857801,
      "ems": null
    },
    {
      "latitude": 51.977669,
      "longitude": 7.653076,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 106,
      "squawk": "7742",
      "timestamp": 1656857803,
      "ems": null
    },
    {
      "latitude": 51.977062,
      "longitude": 7.656137,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1656857807,
      "ems": null
    },
    {
      "latitude": 51.976551,
      "longitude": 7.658256,
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
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1656857811,
      "ems": null
    },
    {
      "latitude": 51.976318,
      "longitude": 7.659302,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656857811,
      "ems": null
    },
    {
      "latitude": 51.975632,
      "longitude": 7.661896,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1656857815,
      "ems": null
    },
    {
      "latitude": 51.974968,
      "longitude": 7.664455,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1656857819,
      "ems": null
    },
    {
      "latitude": 51.974083,
      "longitude": 7.667437,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1656857823,
      "ems": null
    },
    {
      "latitude": 51.973526,
      "longitude": 7.669006,
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
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1656857827,
      "ems": null
    },
    {
      "latitude": 51.972221,
      "longitude": 7.671988,
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
      "heading": 129,
      "squawk": "7742",
      "timestamp": 1656857831,
      "ems": null
    },
    {
      "latitude": 51.970917,
      "longitude": 7.674026,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 135,
      "squawk": "7742",
      "timestamp": 1656857835,
      "ems": null
    },
    {
      "latitude": 51.96994,
      "longitude": 7.675363,
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
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1656857838,
      "ems": null
    },
    {
      "latitude": 51.968903,
      "longitude": 7.676544,
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
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1656857840,
      "ems": null
    },
    {
      "latitude": 51.967758,
      "longitude": 7.677612,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1656857844,
      "ems": null
    },
    {
      "latitude": 51.967255,
      "longitude": 7.67807,
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
      "heading": 151,
      "squawk": "7742",
      "timestamp": 1656857845,
      "ems": null
    },
    {
      "latitude": 51.965469,
      "longitude": 7.67952,
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
      "heading": 154,
      "squawk": "7742",
      "timestamp": 1656857850,
      "ems": null
    },
    {
      "latitude": 51.96389,
      "longitude": 7.680542,
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
      "heading": 159,
      "squawk": "7742",
      "timestamp": 1656857854,
      "ems": null
    },
    {
      "latitude": 51.962307,
      "longitude": 7.681248,
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
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1656857858,
      "ems": null
    },
    {
      "latitude": 51.960537,
      "longitude": 7.682033,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1656857862,
      "ems": null
    },
    {
      "latitude": 51.958862,
      "longitude": 7.682661,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1656857866,
      "ems": null
    },
    {
      "latitude": 51.957138,
      "longitude": 7.683289,
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
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1656857870,
      "ems": null
    },
    {
      "latitude": 51.955368,
      "longitude": 7.683681,
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
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1656857874,
      "ems": null
    },
    {
      "latitude": 51.953835,
      "longitude": 7.683602,
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
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1656857878,
      "ems": null
    },
    {
      "latitude": 51.952789,
      "longitude": 7.683258,
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
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1656857880,
      "ems": null
    },
    {
      "latitude": 51.951691,
      "longitude": 7.682724,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1656857883,
      "ems": null
    },
    {
      "latitude": 51.950436,
      "longitude": 7.681798,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1656857887,
      "ems": null
    },
    {
      "latitude": 51.949364,
      "longitude": 7.680778,
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1656857891,
      "ems": null
    },
    {
      "latitude": 51.94812,
      "longitude": 7.679214,
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1656857895,
      "ems": null
    },
    {
      "latitude": 51.947067,
      "longitude": 7.677689,
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
      "heading": 224,
      "squawk": "7742",
      "timestamp": 1656857899,
      "ems": null
    },
    {
      "latitude": 51.946198,
      "longitude": 7.675858,
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
      "heading": 237,
      "squawk": "7742",
      "timestamp": 1656857903,
      "ems": null
    },
    {
      "latitude": 51.945694,
      "longitude": 7.673798,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 254,
      "squawk": "7742",
      "timestamp": 1656857907,
      "ems": null
    },
    {
      "latitude": 51.945511,
      "longitude": 7.671585,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 264,
      "squawk": "7742",
      "timestamp": 1656857911,
      "ems": null
    },
    {
      "latitude": 51.945374,
      "longitude": 7.669144,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 263,
      "squawk": "7742",
      "timestamp": 1656857915,
      "ems": null
    },
    {
      "latitude": 51.945316,
      "longitude": 7.667751,
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
      "heading": 267,
      "squawk": "7742",
      "timestamp": 1656857919,
      "ems": null
    },
    {
      "latitude": 51.945328,
      "longitude": 7.665482,
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
      "heading": 274,
      "squawk": "7742",
      "timestamp": 1656857923,
      "ems": null
    },
    {
      "latitude": 51.945557,
      "longitude": 7.662354,
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
      "heading": 269,
      "squawk": "7742",
      "timestamp": 1656857927,
      "ems": null
    },
    {
      "latitude": 51.945549,
      "longitude": 7.662022,
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
      "heading": 269,
      "squawk": "7742",
      "timestamp": 1656857928,
      "ems": null
    },
    {
      "latitude": 51.945831,
      "longitude": 7.659836,
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
      "heading": 281,
      "squawk": "7742",
      "timestamp": 1656857932,
      "ems": null
    },
    {
      "latitude": 51.946152,
      "longitude": 7.657623,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 285,
      "squawk": "7742",
      "timestamp": 1656857936,
      "ems": null
    },
    {
      "latitude": 51.94643,
      "longitude": 7.65598,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 285,
      "squawk": "7742",
      "timestamp": 1656857940,
      "ems": null
    },
    {
      "latitude": 51.946793,
      "longitude": 7.654037,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 285,
      "squawk": "7742",
      "timestamp": 1656857944,
      "ems": null
    },
    {
      "latitude": 51.947067,
      "longitude": 7.65213,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 285,
      "squawk": "7742",
      "timestamp": 1656857948,
      "ems": null
    },
    {
      "latitude": 51.947479,
      "longitude": 7.650146,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 285,
      "squawk": "7742",
      "timestamp": 1656857952,
      "ems": null
    },
    {
      "latitude": 51.947781,
      "longitude": 7.648368,
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
      "heading": 284,
      "squawk": "7742",
      "timestamp": 1656857956,
      "ems": null
    },
    {
      "latitude": 51.948029,
      "longitude": 7.646332,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 279,
      "squawk": "7742",
      "timestamp": 1656857960,
      "ems": null
    },
    {
      "latitude": 51.948212,
      "longitude": 7.644653,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 279,
      "squawk": "7742",
      "timestamp": 1656857964,
      "ems": null
    },
    {
      "latitude": 51.948395,
      "longitude": 7.64267,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 278,
      "squawk": "7742",
      "timestamp": 1656857968,
      "ems": null
    },
    {
      "latitude": 51.948578,
      "longitude": 7.640915,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 280,
      "squawk": "7742",
      "timestamp": 1656857972,
      "ems": null
    },
    {
      "latitude": 51.949085,
      "longitude": 7.637931,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 286,
      "squawk": "7742",
      "timestamp": 1656857978,
      "ems": null
    },
    {
      "latitude": 51.949551,
      "longitude": 7.635577,
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
      "heading": 288,
      "squawk": "7742",
      "timestamp": 1656857984,
      "ems": null
    },
    {
      "latitude": 51.950062,
      "longitude": 7.632359,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 283,
      "squawk": "7742",
      "timestamp": 1656857991,
      "ems": null
    },
    {
      "latitude": 51.950294,
      "longitude": 7.630868,
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
      "heading": 284,
      "squawk": "7742",
      "timestamp": 1656857993,
      "ems": null
    },
    {
      "latitude": 51.950638,
      "longitude": 7.627869,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 277,
      "squawk": "7742",
      "timestamp": 1656857999,
      "ems": null
    },
    {
      "latitude": 51.950809,
      "longitude": 7.625846,
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
      "heading": 279,
      "squawk": "7742",
      "timestamp": 1656858003,
      "ems": null
    },
    {
      "latitude": 51.950958,
      "longitude": 7.624664,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 280,
      "squawk": "7742",
      "timestamp": 1656858005,
      "ems": null
    },
    {
      "latitude": 51.951187,
      "longitude": 7.622757,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 282,
      "squawk": "7742",
      "timestamp": 1656858008,
      "ems": null
    },
    {
      "latitude": 51.951412,
      "longitude": 7.621137,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 281,
      "squawk": "7742",
      "timestamp": 1656858012,
      "ems": null
    },
    {
      "latitude": 51.951973,
      "longitude": 7.617135,
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
      "heading": 279,
      "squawk": "7742",
      "timestamp": 1656858019,
      "ems": null
    },
    {
      "latitude": 51.952065,
      "longitude": 7.615252,
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
      "heading": 272,
      "squawk": "7742",
      "timestamp": 1656858023,
      "ems": null
    },
    {
      "latitude": 51.95174,
      "longitude": 7.612819,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 249,
      "squawk": "7742",
      "timestamp": 1656858027,
      "ems": null
    },
    {
      "latitude": 51.950993,
      "longitude": 7.611093,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 229,
      "squawk": "7742",
      "timestamp": 1656858031,
      "ems": null
    },
    {
      "latitude": 51.949814,
      "longitude": 7.609024,
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
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1656858035,
      "ems": null
    },
    {
      "latitude": 51.948898,
      "longitude": 7.607803,
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
      "heading": 223,
      "squawk": "7742",
      "timestamp": 1656858039,
      "ems": null
    },
    {
      "latitude": 51.947662,
      "longitude": 7.606506,
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1656858043,
      "ems": null
    },
    {
      "latitude": 51.946106,
      "longitude": 7.605515,
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
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1656858047,
      "ems": null
    },
    {
      "latitude": 51.944916,
      "longitude": 7.604828,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1656858051,
      "ems": null
    },
    {
      "latitude": 51.943871,
      "longitude": 7.604344,
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
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1656858053,
      "ems": null
    },
    {
      "latitude": 51.942753,
      "longitude": 7.603951,
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
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1656858056,
      "ems": null
    },
    {
      "latitude": 51.94162,
      "longitude": 7.603607,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1656858059,
      "ems": null
    },
    {
      "latitude": 51.940754,
      "longitude": 7.603324,
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
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1656858062,
      "ems": null
    },
    {
      "latitude": 51.93956,
      "longitude": 7.603073,
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
      "squawk": "7742",
      "timestamp": 1656858066,
      "ems": null
    },
    {
      "latitude": 51.938049,
      "longitude": 7.602997,
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
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1656858069,
      "ems": null
    },
    {
      "latitude": 51.936981,
      "longitude": 7.602931,
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
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1656858071,
      "ems": null
    },
    {
      "latitude": 51.935623,
      "longitude": 7.602921,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1656858075,
      "ems": null
    },
    {
      "latitude": 51.934376,
      "longitude": 7.602853,
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
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1656858078,
      "ems": null
    },
    {
      "latitude": 51.933163,
      "longitude": 7.602775,
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
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1656858081,
      "ems": null
    },
    {
      "latitude": 51.932327,
      "longitude": 7.602768,
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
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1656858083,
      "ems": null
    },
    {
      "latitude": 51.930862,
      "longitude": 7.602768,
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
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1656858086,
      "ems": null
    },
    {
      "latitude": 51.929352,
      "longitude": 7.602768,
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
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1656858091,
      "ems": null
    },
    {
      "latitude": 51.927567,
      "longitude": 7.602768,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1656858095,
      "ems": null
    },
    {
      "latitude": 51.926056,
      "longitude": 7.602921,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1656858099,
      "ems": null
    },
    {
      "latitude": 51.923714,
      "longitude": 7.603088,
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
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1656858105,
      "ems": null
    },
    {
      "latitude": 51.921341,
      "longitude": 7.603226,
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
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1656858111,
      "ems": null
    },
    {
      "latitude": 51.918732,
      "longitude": 7.603088,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1656858117,
      "ems": null
    },
    {
      "latitude": 51.916214,
      "longitude": 7.602921,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1656858123,
      "ems": null
    },
    {
      "latitude": 51.914841,
      "longitude": 7.602844,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1656858126,
      "ems": null
    },
    {
      "latitude": 51.913651,
      "longitude": 7.602844,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1656858128,
      "ems": null
    },
    {
      "latitude": 51.910259,
      "longitude": 7.602775,
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
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1656858136,
      "ems": null
    },
    {
      "latitude": 51.906601,
      "longitude": 7.602768,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1656858144,
      "ems": null
    },
    {
      "latitude": 51.905697,
      "longitude": 7.602853,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1656858147,
      "ems": null
    },
    {
      "latitude": 51.904175,
      "longitude": 7.603226,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1656858150,
      "ems": null
    },
    {
      "latitude": 51.903698,
      "longitude": 7.603324,
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
      "heading": 170,
      "squawk": "7742",
      "timestamp": 1656858151,
      "ems": null
    },
    {
      "latitude": 51.901978,
      "longitude": 7.60376,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 170,
      "squawk": "7742",
      "timestamp": 1656858155,
      "ems": null
    },
    {
      "latitude": 51.901321,
      "longitude": 7.603951,
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
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1656858156,
      "ems": null
    },
    {
      "latitude": 51.899918,
      "longitude": 7.604218,
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
      "heading": 170,
      "squawk": "7742",
      "timestamp": 1656858160,
      "ems": null
    },
    {
      "latitude": 51.897995,
      "longitude": 7.604446,
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
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1656858164,
      "ems": null
    },
    {
      "latitude": 51.895226,
      "longitude": 7.604501,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1656858171,
      "ems": null
    },
    {
      "latitude": 51.894104,
      "longitude": 7.604446,
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
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1656858174,
      "ems": null
    },
    {
      "latitude": 51.892685,
      "longitude": 7.604321,
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
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1656858177,
      "ems": null
    },
    {
      "latitude": 51.891453,
      "longitude": 7.604218,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1656858180,
      "ems": null
    },
    {
      "latitude": 51.890259,
      "longitude": 7.604098,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1656858183,
      "ems": null
    },
    {
      "latitude": 51.888893,
      "longitude": 7.603912,
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
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1656858186,
      "ems": null
    },
    {
      "latitude": 51.887558,
      "longitude": 7.603801,
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
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1656858189,
      "ems": null
    },
    {
      "latitude": 51.886322,
      "longitude": 7.603652,
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
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1656858192,
      "ems": null
    },
    {
      "latitude": 51.884937,
      "longitude": 7.603531,
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
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1656858195,
      "ems": null
    },
    {
      "latitude": 51.883575,
      "longitude": 7.603281,
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
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1656858198,
      "ems": null
    },
    {
      "latitude": 51.882339,
      "longitude": 7.603059,
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
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1656858201,
      "ems": null
    },
    {
      "latitude": 51.879768,
      "longitude": 7.602615,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1656858207,
      "ems": null
    },
    {
      "latitude": 51.877861,
      "longitude": 7.602539,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1656858211,
      "ems": null
    },
    {
      "latitude": 51.873203,
      "longitude": 7.602081,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1656858221,
      "ems": null
    },
    {
      "latitude": 51.871216,
      "longitude": 7.601945,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1656858227,
      "ems": null
    },
    {
      "latitude": 51.867737,
      "longitude": 7.601574,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1656858234,
      "ems": null
    },
    {
      "latitude": 51.864685,
      "longitude": 7.601318,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1656858241,
      "ems": null
    },
    {
      "latitude": 51.863205,
      "longitude": 7.601277,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1656858244,
      "ems": null
    },
    {
      "latitude": 51.859268,
      "longitude": 7.60098,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1656858253,
      "ems": null
    },
    {
      "latitude": 51.855743,
      "longitude": 7.600609,
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
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1656858261,
      "ems": null
    },
    {
      "latitude": 51.852165,
      "longitude": 7.600403,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1656858269,
      "ems": null
    },
    {
      "latitude": 51.848484,
      "longitude": 7.600479,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1656858277,
      "ems": null
    },
    {
      "latitude": 51.844666,
      "longitude": 7.600461,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1656858285,
      "ems": null
    },
    {
      "latitude": 51.84127,
      "longitude": 7.600555,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1656858293,
      "ems": null
    },
    {
      "latitude": 51.837593,
      "longitude": 7.600784,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1656858300,
      "ems": null
    },
    {
      "latitude": 51.834915,
      "longitude": 7.600758,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1656858306,
      "ems": null
    },
    {
      "latitude": 51.832397,
      "longitude": 7.600832,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1656858312,
      "ems": null
    },
    {
      "latitude": 51.829819,
      "longitude": 7.600937,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1656858318,
      "ems": null
    },
    {
      "latitude": 51.827225,
      "longitude": 7.601129,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1656858324,
      "ems": null
    },
    {
      "latitude": 51.824745,
      "longitude": 7.601318,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1656858330,
      "ems": null
    },
    {
      "latitude": 51.822235,
      "longitude": 7.6015,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1656858336,
      "ems": null
    },
    {
      "latitude": 51.819763,
      "longitude": 7.601624,
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
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1656858342,
      "ems": null
    },
    {
      "latitude": 51.817806,
      "longitude": 7.601776,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1656858347,
      "ems": null
    },
    {
      "latitude": 51.813431,
      "longitude": 7.602081,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1656858357,
      "ems": null
    },
    {
      "latitude": 51.809799,
      "longitude": 7.602234,
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
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1656858365,
      "ems": null
    },
    {
      "latitude": 51.807358,
      "longitude": 7.602391,
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
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1656858370,
      "ems": null
    },
    {
      "latitude": 51.803471,
      "longitude": 7.602539,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1656858379,
      "ems": null
    },
    {
      "latitude": 51.801609,
      "longitude": 7.602539,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1656858383,
      "ems": null
    },
    {
      "latitude": 51.796692,
      "longitude": 7.602762,
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
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1656858393,
      "ems": null
    },
    {
      "latitude": 51.793762,
      "longitude": 7.603133,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 174,
      "squawk": "7742",
      "timestamp": 1656858399,
      "ems": null
    },
    {
      "latitude": 51.791061,
      "longitude": 7.60343,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1656858405,
      "ems": null
    },
    {
      "latitude": 51.788109,
      "longitude": 7.603531,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1656858411,
      "ems": null
    },
    {
      "latitude": 51.785267,
      "longitude": 7.603683,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1656858417,
      "ems": null
    },
    {
      "latitude": 51.782913,
      "longitude": 7.603727,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1656858422,
      "ems": null
    },
    {
      "latitude": 51.780987,
      "longitude": 7.603607,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1656858426,
      "ems": null
    },
    {
      "latitude": 51.779572,
      "longitude": 7.603578,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1656858429,
      "ems": null
    },
    {
      "latitude": 51.775539,
      "longitude": 7.60376,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1656858438,
      "ems": null
    },
    {
      "latitude": 51.77256,
      "longitude": 7.603989,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1656858444,
      "ems": null
    },
    {
      "latitude": 51.769814,
      "longitude": 7.604141,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1656858450,
      "ems": null
    },
    {
      "latitude": 51.767258,
      "longitude": 7.604321,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1656858456,
      "ems": null
    },
    {
      "latitude": 51.76506,
      "longitude": 7.604469,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1656858462,
      "ems": null
    },
    {
      "latitude": 51.760593,
      "longitude": 7.604675,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1656858471,
      "ems": null
    },
    {
      "latitude": 51.758175,
      "longitude": 7.60498,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1656858477,
      "ems": null
    },
    {
      "latitude": 51.755753,
      "longitude": 7.605362,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 174,
      "squawk": "7742",
      "timestamp": 1656858483,
      "ems": null
    },
    {
      "latitude": 51.752701,
      "longitude": 7.605731,
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
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1656858490,
      "ems": null
    },
    {
      "latitude": 51.750122,
      "longitude": 7.605972,
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
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1656858495,
      "ems": null
    },
    {
      "latitude": 51.747562,
      "longitude": 7.606201,
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
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1656858502,
      "ems": null
    },
    {
      "latitude": 51.744919,
      "longitude": 7.606547,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1656858507,
      "ems": null
    },
    {
      "latitude": 51.742126,
      "longitude": 7.606771,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1656858514,
      "ems": null
    },
    {
      "latitude": 51.739693,
      "longitude": 7.607193,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1656858520,
      "ems": null
    },
    {
      "latitude": 51.736759,
      "longitude": 7.607498,
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
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1656858526,
      "ems": null
    },
    {
      "latitude": 51.735535,
      "longitude": 7.607512,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1656858529,
      "ems": null
    },
    {
      "latitude": 51.734386,
      "longitude": 7.607498,
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
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1656858532,
      "ems": null
    },
    {
      "latitude": 51.73288,
      "longitude": 7.607439,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1656858535,
      "ems": null
    },
    {
      "latitude": 51.731594,
      "longitude": 7.607346,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1656858539,
      "ems": null
    },
    {
      "latitude": 51.730381,
      "longitude": 7.607269,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1656858541,
      "ems": null
    },
    {
      "latitude": 51.729126,
      "longitude": 7.607193,
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
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1656858544,
      "ems": null
    },
    {
      "latitude": 51.728706,
      "longitude": 7.607117,
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
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1656858545,
      "ems": null
    },
    {
      "latitude": 51.726929,
      "longitude": 7.607067,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1656858549,
      "ems": null
    },
    {
      "latitude": 51.725647,
      "longitude": 7.606993,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1656858552,
      "ems": null
    },
    {
      "latitude": 51.723213,
      "longitude": 7.607117,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1656858558,
      "ems": null
    },
    {
      "latitude": 51.721958,
      "longitude": 7.607269,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1656858561,
      "ems": null
    },
    {
      "latitude": 51.720612,
      "longitude": 7.607439,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1656858565,
      "ems": null
    },
    {
      "latitude": 51.719421,
      "longitude": 7.607735,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1656858568,
      "ems": null
    },
    {
      "latitude": 51.718185,
      "longitude": 7.607956,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1656858571,
      "ems": null
    },
    {
      "latitude": 51.716995,
      "longitude": 7.608181,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1656858574,
      "ems": null
    },
    {
      "latitude": 51.715805,
      "longitude": 7.608329,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1656858576,
      "ems": null
    },
    {
      "latitude": 51.714649,
      "longitude": 7.608414,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1656858579,
      "ems": null
    },
    {
      "latitude": 51.712097,
      "longitude": 7.608626,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1656858586,
      "ems": null
    },
    {
      "latitude": 51.709534,
      "longitude": 7.609071,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1656858592,
      "ems": null
    },
    {
      "latitude": 51.707108,
      "longitude": 7.609517,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1656858597,
      "ems": null
    },
    {
      "latitude": 51.70578,
      "longitude": 7.609591,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1656858601,
      "ems": null
    },
    {
      "latitude": 51.70343,
      "longitude": 7.609711,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1656858607,
      "ems": null
    },
    {
      "latitude": 51.700962,
      "longitude": 7.609863,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1656858613,
      "ems": null
    },
    {
      "latitude": 51.698685,
      "longitude": 7.610111,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1656858618,
      "ems": null
    },
    {
      "latitude": 51.697495,
      "longitude": 7.610111,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1656858621,
      "ems": null
    },
    {
      "latitude": 51.694656,
      "longitude": 7.610482,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1656858629,
      "ems": null
    },
    {
      "latitude": 51.692909,
      "longitude": 7.610931,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1656858633,
      "ems": null
    },
    {
      "latitude": 51.692303,
      "longitude": 7.61116,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1656858634,
      "ems": null
    },
    {
      "latitude": 51.691093,
      "longitude": 7.611694,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1656858638,
      "ems": null
    },
    {
      "latitude": 51.68985,
      "longitude": 7.612412,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1656858641,
      "ems": null
    },
    {
      "latitude": 51.688766,
      "longitude": 7.612991,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1656858644,
      "ems": null
    },
    {
      "latitude": 51.687653,
      "longitude": 7.613451,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1656858647,
      "ems": null
    },
    {
      "latitude": 51.686344,
      "longitude": 7.613983,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1656858650,
      "ems": null
    },
    {
      "latitude": 51.685368,
      "longitude": 7.614288,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1656858653,
      "ems": null
    },
    {
      "latitude": 51.684158,
      "longitude": 7.614822,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1656858656,
      "ems": null
    },
    {
      "latitude": 51.682991,
      "longitude": 7.61528,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1656858659,
      "ems": null
    },
    {
      "latitude": 51.680618,
      "longitude": 7.616119,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1656858665,
      "ems": null
    },
    {
      "latitude": 51.67923,
      "longitude": 7.616272,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1656858668,
      "ems": null
    },
    {
      "latitude": 51.677994,
      "longitude": 7.616346,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1656858671,
      "ems": null
    },
    {
      "latitude": 51.6768,
      "longitude": 7.616348,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1656858674,
      "ems": null
    },
    {
      "latitude": 51.675751,
      "longitude": 7.616272,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1656858677,
      "ems": null
    },
    {
      "latitude": 51.674606,
      "longitude": 7.616272,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1656858680,
      "ems": null
    },
    {
      "latitude": 51.673462,
      "longitude": 7.616124,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1656858683,
      "ems": null
    },
    {
      "latitude": 51.672379,
      "longitude": 7.616043,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1656858686,
      "ems": null
    },
    {
      "latitude": 51.671036,
      "longitude": 7.615901,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1656858689,
      "ems": null
    },
    {
      "latitude": 51.669983,
      "longitude": 7.615752,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1656858692,
      "ems": null
    },
    {
      "latitude": 51.668888,
      "longitude": 7.615662,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1656858695,
      "ems": null
    },
    {
      "latitude": 51.66777,
      "longitude": 7.615585,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1656858698,
      "ems": null
    },
    {
      "latitude": 51.666698,
      "longitude": 7.615509,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1656858701,
      "ems": null
    },
    {
      "latitude": 51.664837,
      "longitude": 7.615204,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1656858706,
      "ems": null
    },
    {
      "latitude": 51.663666,
      "longitude": 7.614936,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1656858710,
      "ems": null
    },
    {
      "latitude": 51.662521,
      "longitude": 7.614639,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1656858713,
      "ems": null
    },
    {
      "latitude": 51.661652,
      "longitude": 7.614342,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1656858716,
      "ems": null
    },
    {
      "latitude": 51.659439,
      "longitude": 7.613831,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1656858722,
      "ems": null
    },
    {
      "latitude": 51.657204,
      "longitude": 7.613449,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1656858728,
      "ems": null
    },
    {
      "latitude": 51.654831,
      "longitude": 7.613228,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1656858734,
      "ems": null
    },
    {
      "latitude": 51.653595,
      "longitude": 7.613154,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1656858737,
      "ems": null
    },
    {
      "latitude": 51.652546,
      "longitude": 7.613068,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1656858740,
      "ems": null
    },
    {
      "latitude": 51.651382,
      "longitude": 7.612991,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1656858743,
      "ems": null
    },
    {
      "latitude": 51.650391,
      "longitude": 7.613006,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1656858746,
      "ems": null
    },
    {
      "latitude": 51.648926,
      "longitude": 7.613006,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1656858749,
      "ems": null
    },
    {
      "latitude": 51.647751,
      "longitude": 7.612915,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1656858752,
      "ems": null
    },
    {
      "latitude": 51.6465,
      "longitude": 7.612932,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1656858755,
      "ems": null
    },
    {
      "latitude": 51.64389,
      "longitude": 7.612915,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1656858761,
      "ems": null
    },
    {
      "latitude": 51.641747,
      "longitude": 7.612839,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1656858767,
      "ems": null
    },
    {
      "latitude": 51.639141,
      "longitude": 7.612534,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1656858773,
      "ems": null
    },
    {
      "latitude": 51.638123,
      "longitude": 7.612338,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1656858776,
      "ems": null
    },
    {
      "latitude": 51.637093,
      "longitude": 7.612076,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1656858779,
      "ems": null
    },
    {
      "latitude": 51.635788,
      "longitude": 7.611818,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1656858782,
      "ems": null
    },
    {
      "latitude": 51.633461,
      "longitude": 7.611618,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1656858788,
      "ems": null
    },
    {
      "latitude": 51.631165,
      "longitude": 7.611892,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1656858794,
      "ems": null
    },
    {
      "latitude": 51.630108,
      "longitude": 7.612152,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1656858797,
      "ems": null
    },
    {
      "latitude": 51.628757,
      "longitude": 7.612457,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1656858800,
      "ems": null
    },
    {
      "latitude": 51.627777,
      "longitude": 7.612635,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1656858803,
      "ems": null
    },
    {
      "latitude": 51.626541,
      "longitude": 7.612783,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1656858806,
      "ems": null
    },
    {
      "latitude": 51.625175,
      "longitude": 7.612991,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1656858809,
      "ems": null
    },
    {
      "latitude": 51.624012,
      "longitude": 7.613068,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1656858812,
      "ems": null
    },
    {
      "latitude": 51.622707,
      "longitude": 7.613144,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1656858815,
      "ems": null
    },
    {
      "latitude": 51.620193,
      "longitude": 7.613373,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1656858821,
      "ems": null
    },
    {
      "latitude": 51.61768,
      "longitude": 7.613678,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1656858827,
      "ems": null
    },
    {
      "latitude": 51.615189,
      "longitude": 7.613971,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1656858833,
      "ems": null
    },
    {
      "latitude": 51.612419,
      "longitude": 7.614212,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1656858839,
      "ems": null
    },
    {
      "latitude": 51.609833,
      "longitude": 7.614639,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1656858845,
      "ems": null
    },
    {
      "latitude": 51.607452,
      "longitude": 7.615084,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1656858851,
      "ems": null
    },
    {
      "latitude": 51.604691,
      "longitude": 7.615662,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1656858857,
      "ems": null
    },
    {
      "latitude": 51.602188,
      "longitude": 7.616049,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1656858863,
      "ems": null
    },
    {
      "latitude": 51.599625,
      "longitude": 7.616495,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1656858870,
      "ems": null
    },
    {
      "latitude": 51.59729,
      "longitude": 7.616806,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1656858876,
      "ems": null
    },
    {
      "latitude": 51.594868,
      "longitude": 7.61734,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1656858881,
      "ems": null
    },
    {
      "latitude": 51.593628,
      "longitude": 7.617831,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1656858884,
      "ems": null
    },
    {
      "latitude": 51.592819,
      "longitude": 7.618484,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1656858888,
      "ems": null
    },
    {
      "latitude": 51.591564,
      "longitude": 7.620087,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1656858890,
      "ems": null
    },
    {
      "latitude": 51.590744,
      "longitude": 7.621542,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1656858893,
      "ems": null
    },
    {
      "latitude": 51.58984,
      "longitude": 7.623062,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1656858896,
      "ems": null
    },
    {
      "latitude": 51.589005,
      "longitude": 7.624664,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1656858899,
      "ems": null
    },
    {
      "latitude": 51.588165,
      "longitude": 7.62619,
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1656858903,
      "ems": null
    },
    {
      "latitude": 51.587357,
      "longitude": 7.627629,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1656858905,
      "ems": null
    },
    {
      "latitude": 51.586491,
      "longitude": 7.629013,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1656858908,
      "ems": null
    },
    {
      "latitude": 51.585434,
      "longitude": 7.630599,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1656858912,
      "ems": null
    },
    {
      "latitude": 51.584629,
      "longitude": 7.63176,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1656858914,
      "ems": null
    },
    {
      "latitude": 51.58374,
      "longitude": 7.633049,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1656858918,
      "ems": null
    },
    {
      "latitude": 51.581928,
      "longitude": 7.635498,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1656858923,
      "ems": null
    },
    {
      "latitude": 51.581039,
      "longitude": 7.636611,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1656858926,
      "ems": null
    },
    {
      "latitude": 51.580124,
      "longitude": 7.637799,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1656858929,
      "ems": null
    },
    {
      "latitude": 51.579117,
      "longitude": 7.639061,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1656858933,
      "ems": null
    },
    {
      "latitude": 51.57811,
      "longitude": 7.640228,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1656858936,
      "ems": null
    },
    {
      "latitude": 51.577194,
      "longitude": 7.641288,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1656858938,
      "ems": null
    },
    {
      "latitude": 51.576157,
      "longitude": 7.642441,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1656858941,
      "ems": null
    },
    {
      "latitude": 51.575176,
      "longitude": 7.643585,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1656858944,
      "ems": null
    },
    {
      "latitude": 51.574127,
      "longitude": 7.644703,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1656858948,
      "ems": null
    },
    {
      "latitude": 51.573257,
      "longitude": 7.645668,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1656858950,
      "ems": null
    },
    {
      "latitude": 51.571407,
      "longitude": 7.647781,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1656858956,
      "ems": null
    },
    {
      "latitude": 51.569637,
      "longitude": 7.649765,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1656858963,
      "ems": null
    },
    {
      "latitude": 51.567963,
      "longitude": 7.651749,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1656858969,
      "ems": null
    },
    {
      "latitude": 51.566238,
      "longitude": 7.653351,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1656858974,
      "ems": null
    },
    {
      "latitude": 51.564423,
      "longitude": 7.655029,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1656858981,
      "ems": null
    },
    {
      "latitude": 51.562656,
      "longitude": 7.656631,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1656858987,
      "ems": null
    },
    {
      "latitude": 51.561726,
      "longitude": 7.657394,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1656858990,
      "ems": null
    },
    {
      "latitude": 51.560886,
      "longitude": 7.658005,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1656858993,
      "ems": null
    },
    {
      "latitude": 51.559956,
      "longitude": 7.658615,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1656858996,
      "ems": null
    },
    {
      "latitude": 51.559021,
      "longitude": 7.659104,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1656858998,
      "ems": null
    },
    {
      "latitude": 51.558105,
      "longitude": 7.659549,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1656859002,
      "ems": null
    },
    {
      "latitude": 51.557114,
      "longitude": 7.659988,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1656859005,
      "ems": null
    },
    {
      "latitude": 51.556183,
      "longitude": 7.66037,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1656859008,
      "ems": null
    },
    {
      "latitude": 51.555359,
      "longitude": 7.660663,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1656859011,
      "ems": null
    },
    {
      "latitude": 51.554443,
      "longitude": 7.661034,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1656859013,
      "ems": null
    },
    {
      "latitude": 51.553345,
      "longitude": 7.661479,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1656859017,
      "ems": null
    },
    {
      "latitude": 51.552368,
      "longitude": 7.661743,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1656859020,
      "ems": null
    },
    {
      "latitude": 51.551388,
      "longitude": 7.662048,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1656859023,
      "ems": null
    },
    {
      "latitude": 51.550552,
      "longitude": 7.662296,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1656859026,
      "ems": null
    },
    {
      "latitude": 51.549316,
      "longitude": 7.662519,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1656859029,
      "ems": null
    },
    {
      "latitude": 51.548271,
      "longitude": 7.662735,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1656859032,
      "ems": null
    },
    {
      "latitude": 51.547485,
      "longitude": 7.662889,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1656859034,
      "ems": null
    },
    {
      "latitude": 51.545242,
      "longitude": 7.663409,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1656859041,
      "ems": null
    },
    {
      "latitude": 51.54332,
      "longitude": 7.664003,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1656859047,
      "ems": null
    },
    {
      "latitude": 51.542267,
      "longitude": 7.664108,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1656859050,
      "ems": null
    },
    {
      "latitude": 51.541286,
      "longitude": 7.664032,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1656859053,
      "ems": null
    },
    {
      "latitude": 51.540356,
      "longitude": 7.663803,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1656859056,
      "ems": null
    },
    {
      "latitude": 51.539288,
      "longitude": 7.663574,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1656859059,
      "ems": null
    },
    {
      "latitude": 51.538357,
      "longitude": 7.663345,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1656859062,
      "ems": null
    },
    {
      "latitude": 51.537277,
      "longitude": 7.662816,
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1656859065,
      "ems": null
    },
    {
      "latitude": 51.536541,
      "longitude": 7.662201,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1656859068,
      "ems": null
    },
    {
      "latitude": 51.535904,
      "longitude": 7.661256,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1656859071,
      "ems": null
    },
    {
      "latitude": 51.535309,
      "longitude": 7.660143,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1656859074,
      "ems": null
    },
    {
      "latitude": 51.534817,
      "longitude": 7.659225,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1656859077,
      "ems": null
    },
    {
      "latitude": 51.534397,
      "longitude": 7.658157,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1656859080,
      "ems": null
    },
    {
      "latitude": 51.534027,
      "longitude": 7.657013,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1656859083,
      "ems": null
    },
    {
      "latitude": 51.533653,
      "longitude": 7.655945,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656859086,
      "ems": null
    },
    {
      "latitude": 51.533234,
      "longitude": 7.654724,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656859089,
      "ems": null
    },
    {
      "latitude": 51.532883,
      "longitude": 7.653685,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1656859092,
      "ems": null
    },
    {
      "latitude": 51.532471,
      "longitude": 7.652497,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656859095,
      "ems": null
    },
    {
      "latitude": 51.53207,
      "longitude": 7.651291,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656859098,
      "ems": null
    },
    {
      "latitude": 51.531647,
      "longitude": 7.650196,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656859101,
      "ems": null
    },
    {
      "latitude": 51.531326,
      "longitude": 7.649231,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1656859103,
      "ems": null
    },
    {
      "latitude": 51.530815,
      "longitude": 7.647858,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656859107,
      "ems": null
    },
    {
      "latitude": 51.530045,
      "longitude": 7.645668,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1656859113,
      "ems": null
    },
    {
      "latitude": 51.529232,
      "longitude": 7.643356,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1656859119,
      "ems": null
    },
    {
      "latitude": 51.528488,
      "longitude": 7.64114,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1656859125,
      "ems": null
    },
    {
      "latitude": 51.527649,
      "longitude": 7.638931,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1656859131,
      "ems": null
    },
    {
      "latitude": 51.526886,
      "longitude": 7.636686,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656859137,
      "ems": null
    },
    {
      "latitude": 51.52602,
      "longitude": 7.634277,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656859143,
      "ems": null
    },
    {
      "latitude": 51.525238,
      "longitude": 7.631861,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656859149,
      "ems": null
    },
    {
      "latitude": 51.524342,
      "longitude": 7.629471,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656859155,
      "ems": null
    },
    {
      "latitude": 51.523922,
      "longitude": 7.628174,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1656859158,
      "ems": null
    },
    {
      "latitude": 51.523132,
      "longitude": 7.625961,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1656859164,
      "ems": null
    },
    {
      "latitude": 51.5224,
      "longitude": 7.623844,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1656859169,
      "ems": null
    },
    {
      "latitude": 51.521549,
      "longitude": 7.621384,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656859176,
      "ems": null
    },
    {
      "latitude": 51.520992,
      "longitude": 7.619781,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656859182,
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
        "kmh": 72.2,
        "kts": 39,
        "mph": 44.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1656859186,
      "ems": null
    },
    {
      "latitude": 51.519836,
      "longitude": 7.616569,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 63,
        "kts": 34,
        "mph": 39.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656859194,
      "ems": null
    },
    {
      "latitude": 51.519455,
      "longitude": 7.615356,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656859200,
      "ems": null
    },
    {
      "latitude": 51.519012,
      "longitude": 7.614119,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656859206,
      "ems": null
    },
    {
      "latitude": 51.518646,
      "longitude": 7.61308,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 50,
        "kts": 27,
        "mph": 31.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1656859212,
      "ems": null
    },
    {
      "latitude": 51.518291,
      "longitude": 7.612076,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 46.3,
        "kts": 25,
        "mph": 28.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1656859218,
      "ems": null
    },
    {
      "latitude": 51.51796,
      "longitude": 7.61115,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 42.6,
        "kts": 23,
        "mph": 26.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1656859224,
      "ems": null
    },
    {
      "latitude": 51.517639,
      "longitude": 7.610259,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 38.9,
        "kts": 21,
        "mph": 24.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1656859231,
      "ems": null
    },
    {
      "latitude": 51.517365,
      "longitude": 7.609443,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 37,
        "kts": 20,
        "mph": 23
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1656859237,
      "ems": null
    },
    {
      "latitude": 51.517128,
      "longitude": 7.608795,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 33.3,
        "kts": 18,
        "mph": 20.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1656859242,
      "ems": null
    },
    {
      "latitude": 51.516815,
      "longitude": 7.608032,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1656859248,
      "ems": null
    },
    {
      "latitude": 51.516541,
      "longitude": 7.607216,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 38.9,
        "kts": 21,
        "mph": 24.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1656859254,
      "ems": null
    },
    {
      "latitude": 51.516289,
      "longitude": 7.60643,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 31.5,
        "kts": 17,
        "mph": 19.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1656859260,
      "ems": null
    },
    {
      "latitude": 51.516083,
      "longitude": 7.606102,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1656859267,
      "ems": null
    },
    {
      "latitude": 51.515762,
      "longitude": 7.606102,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 24.1,
        "kts": 13,
        "mph": 15
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1656859271,
      "ems": null
    },
    {
      "latitude": 51.515396,
      "longitude": 7.606325,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 24.1,
        "kts": 13,
        "mph": 15
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1656859278,
      "ems": null
    },
    {
      "latitude": 51.515266,
      "longitude": 7.607117,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 24.1,
        "kts": 13,
        "mph": 15
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1656859289,
      "ems": null
    },
    {
      "latitude": 51.515305,
      "longitude": 7.607439,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1656859294,
      "ems": null
    },
    {
      "latitude": 51.515358,
      "longitude": 7.607651,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1656859299,
      "ems": null
    }
  ]
};
