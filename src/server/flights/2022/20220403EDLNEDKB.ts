import { Flight } from "../../../types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220403EDLNEDKB",
    callsign: "DEFCZ",
    name: "Cross Country to EDLN",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 3, 3, 9, 45).getTime(),
    arrival: new Date(2022, 3, 3, 10, 45).getTime(),
    singleEnginePistonTime: 60,
    picTime: 60,
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
      name: "Dusseldorf Monchengladbach Airport",
      code: "EDLN",
      position: {
        latitude: 51.23035,
        longitude: 6.504494
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
      "latitude": 51.230713,
      "longitude": 6.503906,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 1664,
        "ms": 8.5
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1648980036,
      "ems": null
    },
    {
      "latitude": 51.231762,
      "longitude": 6.501923,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1648980043,
      "ems": null
    },
    {
      "latitude": 51.232738,
      "longitude": 6.499786,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648980049,
      "ems": null
    },
    {
      "latitude": 51.233486,
      "longitude": 6.49826,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648980054,
      "ems": null
    },
    {
      "latitude": 51.234554,
      "longitude": 6.495972,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648980061,
      "ems": null
    },
    {
      "latitude": 51.235016,
      "longitude": 6.49485,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648980064,
      "ems": null
    },
    {
      "latitude": 51.235519,
      "longitude": 6.493662,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648980067,
      "ems": null
    },
    {
      "latitude": 51.23595,
      "longitude": 6.492462,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1648980070,
      "ems": null
    },
    {
      "latitude": 51.236481,
      "longitude": 6.491064,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1648980073,
      "ems": null
    },
    {
      "latitude": 51.236931,
      "longitude": 6.489716,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1648980075,
      "ems": null
    },
    {
      "latitude": 51.237396,
      "longitude": 6.488169,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1648980079,
      "ems": null
    },
    {
      "latitude": 51.237907,
      "longitude": 6.48674,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1648980082,
      "ems": null
    },
    {
      "latitude": 51.238403,
      "longitude": 6.485348,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1648980085,
      "ems": null
    },
    {
      "latitude": 51.238838,
      "longitude": 6.48407,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1648980088,
      "ems": null
    },
    {
      "latitude": 51.239868,
      "longitude": 6.481563,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1648980094,
      "ems": null
    },
    {
      "latitude": 51.240601,
      "longitude": 6.480449,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1648980097,
      "ems": null
    },
    {
      "latitude": 51.241306,
      "longitude": 6.479645,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1648980100,
      "ems": null
    },
    {
      "latitude": 51.242249,
      "longitude": 6.478667,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1648980103,
      "ems": null
    },
    {
      "latitude": 51.242981,
      "longitude": 6.477851,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1648980106,
      "ems": null
    },
    {
      "latitude": 51.243958,
      "longitude": 6.476669,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1648980109,
      "ems": null
    },
    {
      "latitude": 51.244705,
      "longitude": 6.475754,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1648980112,
      "ems": null
    },
    {
      "latitude": 51.245449,
      "longitude": 6.474686,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1648980115,
      "ems": null
    },
    {
      "latitude": 51.246185,
      "longitude": 6.473619,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1648980118,
      "ems": null
    },
    {
      "latitude": 51.246891,
      "longitude": 6.472397,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1648980121,
      "ems": null
    },
    {
      "latitude": 51.248383,
      "longitude": 6.470261,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1648980127,
      "ems": null
    },
    {
      "latitude": 51.249023,
      "longitude": 6.46924,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1648980130,
      "ems": null
    },
    {
      "latitude": 51.249847,
      "longitude": 6.467904,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1648980133,
      "ems": null
    },
    {
      "latitude": 51.250568,
      "longitude": 6.466599,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1648980136,
      "ems": null
    },
    {
      "latitude": 51.252319,
      "longitude": 6.464341,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1648980142,
      "ems": null
    },
    {
      "latitude": 51.253223,
      "longitude": 6.46347,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1648980145,
      "ems": null
    },
    {
      "latitude": 51.254288,
      "longitude": 6.462708,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1648980148,
      "ems": null
    },
    {
      "latitude": 51.255432,
      "longitude": 6.462188,
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1648980151,
      "ems": null
    },
    {
      "latitude": 51.256622,
      "longitude": 6.462021,
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1648980154,
      "ems": null
    },
    {
      "latitude": 51.257832,
      "longitude": 6.46225,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1648980157,
      "ems": null
    },
    {
      "latitude": 51.258957,
      "longitude": 6.462708,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1648980160,
      "ems": null
    },
    {
      "latitude": 51.260204,
      "longitude": 6.463242,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1648980163,
      "ems": null
    },
    {
      "latitude": 51.261383,
      "longitude": 6.463673,
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1648980166,
      "ems": null
    },
    {
      "latitude": 51.262711,
      "longitude": 6.464118,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1648980169,
      "ems": null
    },
    {
      "latitude": 51.263763,
      "longitude": 6.464489,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1648980172,
      "ems": null
    },
    {
      "latitude": 51.265045,
      "longitude": 6.46486,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1648980175,
      "ems": null
    },
    {
      "latitude": 51.26635,
      "longitude": 6.465225,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1648980178,
      "ems": null
    },
    {
      "latitude": 51.267517,
      "longitude": 6.465528,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1648980181,
      "ems": null
    },
    {
      "latitude": 51.268799,
      "longitude": 6.465899,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1648980184,
      "ems": null
    },
    {
      "latitude": 51.271191,
      "longitude": 6.466599,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1648980190,
      "ems": null
    },
    {
      "latitude": 51.273834,
      "longitude": 6.467458,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1648980196,
      "ems": null
    },
    {
      "latitude": 51.276398,
      "longitude": 6.468201,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1648980202,
      "ems": null
    },
    {
      "latitude": 51.279011,
      "longitude": 6.468887,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1648980208,
      "ems": null
    },
    {
      "latitude": 51.281754,
      "longitude": 6.469759,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1648980214,
      "ems": null
    },
    {
      "latitude": 51.284271,
      "longitude": 6.47049,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1648980220,
      "ems": null
    },
    {
      "latitude": 51.286785,
      "longitude": 6.4711,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1648980226,
      "ems": null
    },
    {
      "latitude": 51.28944,
      "longitude": 6.471558,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1648980232,
      "ems": null
    },
    {
      "latitude": 51.29068,
      "longitude": 6.471764,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1648980235,
      "ems": null
    },
    {
      "latitude": 51.291962,
      "longitude": 6.471912,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1648980238,
      "ems": null
    },
    {
      "latitude": 51.293163,
      "longitude": 6.472092,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1648980241,
      "ems": null
    },
    {
      "latitude": 51.294327,
      "longitude": 6.472244,
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1648980244,
      "ems": null
    },
    {
      "latitude": 51.29567,
      "longitude": 6.472506,
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1648980247,
      "ems": null
    },
    {
      "latitude": 51.298141,
      "longitude": 6.472878,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1648980253,
      "ems": null
    },
    {
      "latitude": 51.300751,
      "longitude": 6.473397,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1648980259,
      "ems": null
    },
    {
      "latitude": 51.303314,
      "longitude": 6.473842,
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1648980266,
      "ems": null
    },
    {
      "latitude": 51.305923,
      "longitude": 6.474436,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1648980272,
      "ems": null
    },
    {
      "latitude": 51.308487,
      "longitude": 6.474807,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1648980278,
      "ems": null
    },
    {
      "latitude": 51.309597,
      "longitude": 6.474762,
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1648980281,
      "ems": null
    },
    {
      "latitude": 51.310867,
      "longitude": 6.474733,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1648980284,
      "ems": null
    },
    {
      "latitude": 51.312012,
      "longitude": 6.474585,
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1648980287,
      "ems": null
    },
    {
      "latitude": 51.313248,
      "longitude": 6.474436,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1648980290,
      "ems": null
    },
    {
      "latitude": 51.314671,
      "longitude": 6.47438,
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1648980293,
      "ems": null
    },
    {
      "latitude": 51.315788,
      "longitude": 6.47438,
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1648980296,
      "ems": null
    },
    {
      "latitude": 51.317047,
      "longitude": 6.47438,
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1648980299,
      "ems": null
    },
    {
      "latitude": 51.318237,
      "longitude": 6.474288,
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1648980302,
      "ems": null
    },
    {
      "latitude": 51.31929,
      "longitude": 6.474214,
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1648980305,
      "ems": null
    },
    {
      "latitude": 51.321888,
      "longitude": 6.473999,
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1648980311,
      "ems": null
    },
    {
      "latitude": 51.324539,
      "longitude": 6.473694,
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1648980317,
      "ems": null
    },
    {
      "latitude": 51.326889,
      "longitude": 6.473471,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1648980323,
      "ems": null
    },
    {
      "latitude": 51.328079,
      "longitude": 6.473236,
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1648980326,
      "ems": null
    },
    {
      "latitude": 51.330639,
      "longitude": 6.473083,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1648980332,
      "ems": null
    },
    {
      "latitude": 51.331989,
      "longitude": 6.473541,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1648980335,
      "ems": null
    },
    {
      "latitude": 51.333153,
      "longitude": 6.474304,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1648980338,
      "ems": null
    },
    {
      "latitude": 51.334259,
      "longitude": 6.475401,
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
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1648980341,
      "ems": null
    },
    {
      "latitude": 51.335342,
      "longitude": 6.476822,
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
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1648980344,
      "ems": null
    },
    {
      "latitude": 51.336178,
      "longitude": 6.478348,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1648980347,
      "ems": null
    },
    {
      "latitude": 51.336922,
      "longitude": 6.480179,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1648980350,
      "ems": null
    },
    {
      "latitude": 51.337574,
      "longitude": 6.481781,
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1648980353,
      "ems": null
    },
    {
      "latitude": 51.338272,
      "longitude": 6.483688,
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1648980356,
      "ems": null
    },
    {
      "latitude": 51.338787,
      "longitude": 6.485214,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1648980359,
      "ems": null
    },
    {
      "latitude": 51.339935,
      "longitude": 6.488688,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1648980363,
      "ems": null
    },
    {
      "latitude": 51.340485,
      "longitude": 6.49047,
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1648980366,
      "ems": null
    },
    {
      "latitude": 51.34108,
      "longitude": 6.492252,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1648980369,
      "ems": null
    },
    {
      "latitude": 51.341583,
      "longitude": 6.493885,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1648980372,
      "ems": null
    },
    {
      "latitude": 51.342224,
      "longitude": 6.496037,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1648980375,
      "ems": null
    },
    {
      "latitude": 51.342728,
      "longitude": 6.498042,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1648980378,
      "ems": null
    },
    {
      "latitude": 51.343163,
      "longitude": 6.499939,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1648980381,
      "ems": null
    },
    {
      "latitude": 51.343643,
      "longitude": 6.501976,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1648980384,
      "ems": null
    },
    {
      "latitude": 51.344101,
      "longitude": 6.503981,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1648980387,
      "ems": null
    },
    {
      "latitude": 51.344559,
      "longitude": 6.50589,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1648980390,
      "ems": null
    },
    {
      "latitude": 51.345062,
      "longitude": 6.507915,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1648980393,
      "ems": null
    },
    {
      "latitude": 51.345581,
      "longitude": 6.509857,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1648980396,
      "ems": null
    },
    {
      "latitude": 51.346001,
      "longitude": 6.511688,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1648980399,
      "ems": null
    },
    {
      "latitude": 51.346527,
      "longitude": 6.513705,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1648980402,
      "ems": null
    },
    {
      "latitude": 51.347443,
      "longitude": 6.517416,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1648980408,
      "ems": null
    },
    {
      "latitude": 51.348469,
      "longitude": 6.521454,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1648980414,
      "ems": null
    },
    {
      "latitude": 51.349491,
      "longitude": 6.52504,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1648980420,
      "ems": null
    },
    {
      "latitude": 51.35051,
      "longitude": 6.528848,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1648980426,
      "ems": null
    },
    {
      "latitude": 51.351494,
      "longitude": 6.532669,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1648980432,
      "ems": null
    },
    {
      "latitude": 51.352566,
      "longitude": 6.536636,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1648980438,
      "ems": null
    },
    {
      "latitude": 51.353634,
      "longitude": 6.540375,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1648980444,
      "ems": null
    },
    {
      "latitude": 51.354492,
      "longitude": 6.543769,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1648980450,
      "ems": null
    },
    {
      "latitude": 51.355545,
      "longitude": 6.548004,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1648980456,
      "ems": null
    },
    {
      "latitude": 51.356552,
      "longitude": 6.551934,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1648980462,
      "ems": null
    },
    {
      "latitude": 51.357548,
      "longitude": 6.555634,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1648980468,
      "ems": null
    },
    {
      "latitude": 51.358658,
      "longitude": 6.559283,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1648980475,
      "ems": null
    },
    {
      "latitude": 51.359779,
      "longitude": 6.563263,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1648980480,
      "ems": null
    },
    {
      "latitude": 51.36071,
      "longitude": 6.566925,
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
      "heading": 70,
      "squawk": "7003",
      "timestamp": 1648980487,
      "ems": null
    },
    {
      "latitude": 51.361496,
      "longitude": 6.570938,
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
      "heading": 72,
      "squawk": "7003",
      "timestamp": 1648980493,
      "ems": null
    },
    {
      "latitude": 51.361782,
      "longitude": 6.572647,
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
      "heading": 74,
      "squawk": "7003",
      "timestamp": 1648980495,
      "ems": null
    },
    {
      "latitude": 51.361923,
      "longitude": 6.57486,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 88,
      "squawk": "7003",
      "timestamp": 1648980499,
      "ems": null
    },
    {
      "latitude": 51.361828,
      "longitude": 6.576996,
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
      "heading": 99,
      "squawk": "7003",
      "timestamp": 1648980502,
      "ems": null
    },
    {
      "latitude": 51.361542,
      "longitude": 6.57888,
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
      "heading": 107,
      "squawk": "7003",
      "timestamp": 1648980505,
      "ems": null
    },
    {
      "latitude": 51.361038,
      "longitude": 6.580811,
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
      "heading": 112,
      "squawk": "7003",
      "timestamp": 1648980508,
      "ems": null
    },
    {
      "latitude": 51.360477,
      "longitude": 6.582565,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 120,
      "squawk": "7003",
      "timestamp": 1648980511,
      "ems": null
    },
    {
      "latitude": 51.359802,
      "longitude": 6.5843,
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
      "heading": 124,
      "squawk": "7003",
      "timestamp": 1648980513,
      "ems": null
    },
    {
      "latitude": 51.358978,
      "longitude": 6.586155,
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
      "heading": 124,
      "squawk": "7003",
      "timestamp": 1648980517,
      "ems": null
    },
    {
      "latitude": 51.358196,
      "longitude": 6.587982,
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
      "heading": 124,
      "squawk": "7003",
      "timestamp": 1648980520,
      "ems": null
    },
    {
      "latitude": 51.357422,
      "longitude": 6.589644,
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
      "heading": 124,
      "squawk": "7003",
      "timestamp": 1648980523,
      "ems": null
    },
    {
      "latitude": 51.356663,
      "longitude": 6.591492,
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
      "heading": 124,
      "squawk": "7003",
      "timestamp": 1648980526,
      "ems": null
    },
    {
      "latitude": 51.355911,
      "longitude": 6.593133,
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
      "heading": 124,
      "squawk": "7003",
      "timestamp": 1648980528,
      "ems": null
    },
    {
      "latitude": 51.355778,
      "longitude": 6.593475,
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
      "heading": 124,
      "squawk": "7003",
      "timestamp": 1648980529,
      "ems": null
    },
    {
      "latitude": 51.354996,
      "longitude": 6.595286,
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
      "heading": 126,
      "squawk": "7003",
      "timestamp": 1648980532,
      "ems": null
    },
    {
      "latitude": 51.354473,
      "longitude": 6.596298,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 127,
      "squawk": "7003",
      "timestamp": 1648980534,
      "ems": null
    },
    {
      "latitude": 51.353451,
      "longitude": 6.598434,
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
      "heading": 127,
      "squawk": "7003",
      "timestamp": 1648980538,
      "ems": null
    },
    {
      "latitude": 51.352753,
      "longitude": 6.599884,
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
      "heading": 128,
      "squawk": "7003",
      "timestamp": 1648980540,
      "ems": null
    },
    {
      "latitude": 51.351837,
      "longitude": 6.601595,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 129,
      "squawk": "7003",
      "timestamp": 1648980543,
      "ems": null
    },
    {
      "latitude": 51.350937,
      "longitude": 6.603165,
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
      "heading": 131,
      "squawk": "7003",
      "timestamp": 1648980547,
      "ems": null
    },
    {
      "latitude": 51.349274,
      "longitude": 6.606495,
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
      "heading": 128,
      "squawk": "7003",
      "timestamp": 1648980553,
      "ems": null
    },
    {
      "latitude": 51.347725,
      "longitude": 6.609726,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 126,
      "squawk": "7003",
      "timestamp": 1648980558,
      "ems": null
    },
    {
      "latitude": 51.34639,
      "longitude": 6.612656,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 125,
      "squawk": "7003",
      "timestamp": 1648980565,
      "ems": null
    },
    {
      "latitude": 51.344791,
      "longitude": 6.616058,
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
      "heading": 126,
      "squawk": "7003",
      "timestamp": 1648980570,
      "ems": null
    },
    {
      "latitude": 51.343113,
      "longitude": 6.619797,
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
      "heading": 125,
      "squawk": "7003",
      "timestamp": 1648980577,
      "ems": null
    },
    {
      "latitude": 51.341625,
      "longitude": 6.623154,
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
      "heading": 125,
      "squawk": "7003",
      "timestamp": 1648980583,
      "ems": null
    },
    {
      "latitude": 51.340256,
      "longitude": 6.626166,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 125,
      "squawk": "7003",
      "timestamp": 1648980589,
      "ems": null
    },
    {
      "latitude": 51.338608,
      "longitude": 6.629507,
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
      "heading": 128,
      "squawk": "7003",
      "timestamp": 1648980595,
      "ems": null
    },
    {
      "latitude": 51.337204,
      "longitude": 6.632309,
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
      "heading": 127,
      "squawk": "7003",
      "timestamp": 1648980600,
      "ems": null
    },
    {
      "latitude": 51.335434,
      "longitude": 6.636047,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 127,
      "squawk": "7003",
      "timestamp": 1648980607,
      "ems": null
    },
    {
      "latitude": 51.333939,
      "longitude": 6.639157,
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
      "heading": 127,
      "squawk": "7003",
      "timestamp": 1648980613,
      "ems": null
    },
    {
      "latitude": 51.332428,
      "longitude": 6.6422,
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
      "heading": 127,
      "squawk": "7003",
      "timestamp": 1648980619,
      "ems": null
    },
    {
      "latitude": 51.330872,
      "longitude": 6.645508,
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
      "heading": 125,
      "squawk": "7003",
      "timestamp": 1648980625,
      "ems": null
    },
    {
      "latitude": 51.330082,
      "longitude": 6.647415,
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
      "heading": 122,
      "squawk": "7003",
      "timestamp": 1648980628,
      "ems": null
    },
    {
      "latitude": 51.32943,
      "longitude": 6.64917,
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
      "heading": 120,
      "squawk": "7003",
      "timestamp": 1648980631,
      "ems": null
    },
    {
      "latitude": 51.328903,
      "longitude": 6.65096,
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
      "heading": 114,
      "squawk": "7003",
      "timestamp": 1648980634,
      "ems": null
    },
    {
      "latitude": 51.328583,
      "longitude": 6.652222,
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
      "heading": 109,
      "squawk": "7003",
      "timestamp": 1648980636,
      "ems": null
    },
    {
      "latitude": 51.328079,
      "longitude": 6.655045,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 106,
      "squawk": "7003",
      "timestamp": 1648980640,
      "ems": null
    },
    {
      "latitude": 51.327751,
      "longitude": 6.656723,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 105,
      "squawk": "7003",
      "timestamp": 1648980643,
      "ems": null
    },
    {
      "latitude": 51.327427,
      "longitude": 6.658707,
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
      "heading": 105,
      "squawk": "7003",
      "timestamp": 1648980645,
      "ems": null
    },
    {
      "latitude": 51.327103,
      "longitude": 6.660538,
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
      "heading": 104,
      "squawk": "7003",
      "timestamp": 1648980648,
      "ems": null
    },
    {
      "latitude": 51.326935,
      "longitude": 6.6615,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 104,
      "squawk": "7003",
      "timestamp": 1648980651,
      "ems": null
    },
    {
      "latitude": 51.32634,
      "longitude": 6.665361,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 105,
      "squawk": "7003",
      "timestamp": 1648980655,
      "ems": null
    },
    {
      "latitude": 51.326218,
      "longitude": 6.665955,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 106,
      "squawk": "7003",
      "timestamp": 1648980659,
      "ems": null
    },
    {
      "latitude": 51.32547,
      "longitude": 6.669963,
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
      "heading": 106,
      "squawk": "7003",
      "timestamp": 1648980663,
      "ems": null
    },
    {
      "latitude": 51.324448,
      "longitude": 6.674957,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 108,
      "squawk": "7003",
      "timestamp": 1648980671,
      "ems": null
    },
    {
      "latitude": 51.323181,
      "longitude": 6.680949,
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
      "heading": 108,
      "squawk": "7003",
      "timestamp": 1648980679,
      "ems": null
    },
    {
      "latitude": 51.322311,
      "longitude": 6.685181,
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
      "heading": 107,
      "squawk": "7003",
      "timestamp": 1648980685,
      "ems": null
    },
    {
      "latitude": 51.32156,
      "longitude": 6.689148,
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
      "heading": 107,
      "squawk": "7003",
      "timestamp": 1648980691,
      "ems": null
    },
    {
      "latitude": 51.320709,
      "longitude": 6.693198,
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
      "heading": 109,
      "squawk": "7003",
      "timestamp": 1648980697,
      "ems": null
    },
    {
      "latitude": 51.319839,
      "longitude": 6.697311,
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
      "heading": 108,
      "squawk": "7003",
      "timestamp": 1648980703,
      "ems": null
    },
    {
      "latitude": 51.318909,
      "longitude": 6.701584,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 108,
      "squawk": "7003",
      "timestamp": 1648980709,
      "ems": null
    },
    {
      "latitude": 51.318024,
      "longitude": 6.705627,
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
      "heading": 108,
      "squawk": "7003",
      "timestamp": 1648980715,
      "ems": null
    },
    {
      "latitude": 51.31723,
      "longitude": 6.709518,
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
      "heading": 108,
      "squawk": "7003",
      "timestamp": 1648980721,
      "ems": null
    },
    {
      "latitude": 51.316315,
      "longitude": 6.714057,
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
      "heading": 107,
      "squawk": "7003",
      "timestamp": 1648980727,
      "ems": null
    },
    {
      "latitude": 51.315742,
      "longitude": 6.716919,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 107,
      "squawk": "7003",
      "timestamp": 1648980733,
      "ems": null
    },
    {
      "latitude": 51.314804,
      "longitude": 6.722,
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
      "heading": 105,
      "squawk": "7003",
      "timestamp": 1648980739,
      "ems": null
    },
    {
      "latitude": 51.314117,
      "longitude": 6.726231,
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
      "heading": 105,
      "squawk": "7003",
      "timestamp": 1648980745,
      "ems": null
    },
    {
      "latitude": 51.313461,
      "longitude": 6.72966,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 106,
      "squawk": "7003",
      "timestamp": 1648980751,
      "ems": null
    },
    {
      "latitude": 51.312668,
      "longitude": 6.733932,
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
      "heading": 107,
      "squawk": "7003",
      "timestamp": 1648980756,
      "ems": null
    },
    {
      "latitude": 51.311966,
      "longitude": 6.737366,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 107,
      "squawk": "7003",
      "timestamp": 1648980762,
      "ems": null
    },
    {
      "latitude": 51.311367,
      "longitude": 6.741409,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 101,
      "squawk": "7003",
      "timestamp": 1648980768,
      "ems": null
    },
    {
      "latitude": 51.311142,
      "longitude": 6.74464,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 90,
      "squawk": "7003",
      "timestamp": 1648980772,
      "ems": null
    },
    {
      "latitude": 51.311367,
      "longitude": 6.746521,
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
      "heading": 74,
      "squawk": "7003",
      "timestamp": 1648980775,
      "ems": null
    },
    {
      "latitude": 51.311787,
      "longitude": 6.748276,
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
      "heading": 67,
      "squawk": "7003",
      "timestamp": 1648980778,
      "ems": null
    },
    {
      "latitude": 51.312252,
      "longitude": 6.750107,
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
      "heading": 67,
      "squawk": "7003",
      "timestamp": 1648980781,
      "ems": null
    },
    {
      "latitude": 51.312668,
      "longitude": 6.751633,
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
      "heading": 66,
      "squawk": "7003",
      "timestamp": 1648980784,
      "ems": null
    },
    {
      "latitude": 51.313156,
      "longitude": 6.753325,
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
      "heading": 64,
      "squawk": "7003",
      "timestamp": 1648980787,
      "ems": null
    },
    {
      "latitude": 51.313881,
      "longitude": 6.7556,
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
      "squawk": "7003",
      "timestamp": 1648980791,
      "ems": null
    },
    {
      "latitude": 51.314346,
      "longitude": 6.756897,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 62,
      "squawk": "7003",
      "timestamp": 1648980793,
      "ems": null
    },
    {
      "latitude": 51.314621,
      "longitude": 6.75778,
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
      "heading": 61,
      "squawk": "7003",
      "timestamp": 1648980796,
      "ems": null
    },
    {
      "latitude": 51.315445,
      "longitude": 6.760377,
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
      "heading": 65,
      "squawk": "7003",
      "timestamp": 1648980799,
      "ems": null
    },
    {
      "latitude": 51.316086,
      "longitude": 6.762679,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 67,
      "squawk": "7003",
      "timestamp": 1648980803,
      "ems": null
    },
    {
      "latitude": 51.316349,
      "longitude": 6.764069,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 75,
      "squawk": "7003",
      "timestamp": 1648980807,
      "ems": null
    },
    {
      "latitude": 51.316727,
      "longitude": 6.767949,
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
      "heading": 86,
      "squawk": "7003",
      "timestamp": 1648980810,
      "ems": null
    },
    {
      "latitude": 51.316727,
      "longitude": 6.770102,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 92,
      "squawk": "7003",
      "timestamp": 1648980813,
      "ems": null
    },
    {
      "latitude": 51.316589,
      "longitude": 6.772106,
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
      "heading": 97,
      "squawk": "7003",
      "timestamp": 1648980816,
      "ems": null
    },
    {
      "latitude": 51.316349,
      "longitude": 6.773834,
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
      "heading": 108,
      "squawk": "7003",
      "timestamp": 1648980819,
      "ems": null
    },
    {
      "latitude": 51.315628,
      "longitude": 6.776338,
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
      "heading": 117,
      "squawk": "7003",
      "timestamp": 1648980822,
      "ems": null
    },
    {
      "latitude": 51.314903,
      "longitude": 6.778107,
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
      "heading": 126,
      "squawk": "7003",
      "timestamp": 1648980825,
      "ems": null
    },
    {
      "latitude": 51.31398,
      "longitude": 6.779752,
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
      "heading": 131,
      "squawk": "7003",
      "timestamp": 1648980828,
      "ems": null
    },
    {
      "latitude": 51.313087,
      "longitude": 6.781311,
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
      "heading": 131,
      "squawk": "7003",
      "timestamp": 1648980831,
      "ems": null
    },
    {
      "latitude": 51.312149,
      "longitude": 6.783019,
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
      "heading": 131,
      "squawk": "7003",
      "timestamp": 1648980834,
      "ems": null
    },
    {
      "latitude": 51.311325,
      "longitude": 6.784577,
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
      "heading": 130,
      "squawk": "7003",
      "timestamp": 1648980837,
      "ems": null
    },
    {
      "latitude": 51.310341,
      "longitude": 6.786346,
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
      "heading": 131,
      "squawk": "7003",
      "timestamp": 1648980840,
      "ems": null
    },
    {
      "latitude": 51.309265,
      "longitude": 6.788215,
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
      "heading": 132,
      "squawk": "7003",
      "timestamp": 1648980844,
      "ems": null
    },
    {
      "latitude": 51.308533,
      "longitude": 6.789551,
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
      "heading": 132,
      "squawk": "7003",
      "timestamp": 1648980846,
      "ems": null
    },
    {
      "latitude": 51.307781,
      "longitude": 6.790771,
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
      "heading": 132,
      "squawk": "7003",
      "timestamp": 1648980850,
      "ems": null
    },
    {
      "latitude": 51.30685,
      "longitude": 6.79245,
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
      "heading": 134,
      "squawk": "7003",
      "timestamp": 1648980853,
      "ems": null
    },
    {
      "latitude": 51.305511,
      "longitude": 6.79445,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7003",
      "timestamp": 1648980855,
      "ems": null
    },
    {
      "latitude": 51.304459,
      "longitude": 6.795712,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 143,
      "squawk": "7003",
      "timestamp": 1648980859,
      "ems": null
    },
    {
      "latitude": 51.303684,
      "longitude": 6.79657,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 143,
      "squawk": "7003",
      "timestamp": 1648980862,
      "ems": null
    },
    {
      "latitude": 51.302536,
      "longitude": 6.797865,
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
      "heading": 145,
      "squawk": "7003",
      "timestamp": 1648980865,
      "ems": null
    },
    {
      "latitude": 51.301731,
      "longitude": 6.798706,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 145,
      "squawk": "7003",
      "timestamp": 1648980868,
      "ems": null
    },
    {
      "latitude": 51.300705,
      "longitude": 6.79985,
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
      "heading": 146,
      "squawk": "7003",
      "timestamp": 1648980870,
      "ems": null
    },
    {
      "latitude": 51.300148,
      "longitude": 6.800385,
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
      "heading": 146,
      "squawk": "7003",
      "timestamp": 1648980872,
      "ems": null
    },
    {
      "latitude": 51.298237,
      "longitude": 6.802292,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 147,
      "squawk": "7003",
      "timestamp": 1648980876,
      "ems": null
    },
    {
      "latitude": 51.29718,
      "longitude": 6.803358,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 147,
      "squawk": "7003",
      "timestamp": 1648980880,
      "ems": null
    },
    {
      "latitude": 51.295723,
      "longitude": 6.80481,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 147,
      "squawk": "7003",
      "timestamp": 1648980884,
      "ems": null
    },
    {
      "latitude": 51.293442,
      "longitude": 6.807175,
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
      "heading": 146,
      "squawk": "7003",
      "timestamp": 1648980890,
      "ems": null
    },
    {
      "latitude": 51.291348,
      "longitude": 6.809235,
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
      "heading": 148,
      "squawk": "7003",
      "timestamp": 1648980895,
      "ems": null
    },
    {
      "latitude": 51.288757,
      "longitude": 6.811746,
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
      "heading": 148,
      "squawk": "7003",
      "timestamp": 1648980902,
      "ems": null
    },
    {
      "latitude": 51.286274,
      "longitude": 6.814194,
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
      "heading": 149,
      "squawk": "7003",
      "timestamp": 1648980908,
      "ems": null
    },
    {
      "latitude": 51.283035,
      "longitude": 6.817314,
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
      "heading": 147,
      "squawk": "7003",
      "timestamp": 1648980916,
      "ems": null
    },
    {
      "latitude": 51.28006,
      "longitude": 6.820506,
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
      "heading": 146,
      "squawk": "7003",
      "timestamp": 1648980924,
      "ems": null
    },
    {
      "latitude": 51.276917,
      "longitude": 6.823807,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 146,
      "squawk": "7003",
      "timestamp": 1648980932,
      "ems": null
    },
    {
      "latitude": 51.273468,
      "longitude": 6.827483,
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
      "heading": 146,
      "squawk": "7003",
      "timestamp": 1648980940,
      "ems": null
    },
    {
      "latitude": 51.270218,
      "longitude": 6.831047,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 145,
      "squawk": "7003",
      "timestamp": 1648980948,
      "ems": null
    },
    {
      "latitude": 51.267334,
      "longitude": 6.834164,
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
      "heading": 145,
      "squawk": "7003",
      "timestamp": 1648980956,
      "ems": null
    },
    {
      "latitude": 51.264862,
      "longitude": 6.836985,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 143,
      "squawk": "7003",
      "timestamp": 1648980962,
      "ems": null
    },
    {
      "latitude": 51.263512,
      "longitude": 6.838684,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 141,
      "squawk": "7003",
      "timestamp": 1648980966,
      "ems": null
    },
    {
      "latitude": 51.262207,
      "longitude": 6.840363,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 140,
      "squawk": "7003",
      "timestamp": 1648980970,
      "ems": null
    },
    {
      "latitude": 51.261063,
      "longitude": 6.841884,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 140,
      "squawk": "7003",
      "timestamp": 1648980974,
      "ems": null
    },
    {
      "latitude": 51.258728,
      "longitude": 6.844779,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 144,
      "squawk": "7003",
      "timestamp": 1648980983,
      "ems": null
    },
    {
      "latitude": 51.254524,
      "longitude": 6.849518,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 144,
      "squawk": "7003",
      "timestamp": 1648980991,
      "ems": null
    },
    {
      "latitude": 51.253372,
      "longitude": 6.850866,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 146,
      "squawk": "7003",
      "timestamp": 1648980995,
      "ems": null
    },
    {
      "latitude": 51.251595,
      "longitude": 6.852722,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 146,
      "squawk": "7003",
      "timestamp": 1648980999,
      "ems": null
    },
    {
      "latitude": 51.250076,
      "longitude": 6.854207,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 148,
      "squawk": "7003",
      "timestamp": 1648981003,
      "ems": null
    },
    {
      "latitude": 51.24852,
      "longitude": 6.855617,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 149,
      "squawk": "7003",
      "timestamp": 1648981007,
      "ems": null
    },
    {
      "latitude": 51.247742,
      "longitude": 6.856285,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 149,
      "squawk": "7003",
      "timestamp": 1648981009,
      "ems": null
    },
    {
      "latitude": 51.246414,
      "longitude": 6.857325,
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
      "heading": 152,
      "squawk": "7003",
      "timestamp": 1648981012,
      "ems": null
    },
    {
      "latitude": 51.244888,
      "longitude": 6.858597,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 152,
      "squawk": "7003",
      "timestamp": 1648981016,
      "ems": null
    },
    {
      "latitude": 51.243633,
      "longitude": 6.859665,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 151,
      "squawk": "7003",
      "timestamp": 1648981019,
      "ems": null
    },
    {
      "latitude": 51.241241,
      "longitude": 6.861927,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 147,
      "squawk": "7003",
      "timestamp": 1648981025,
      "ems": null
    },
    {
      "latitude": 51.239136,
      "longitude": 6.864377,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 143,
      "squawk": "7003",
      "timestamp": 1648981031,
      "ems": null
    },
    {
      "latitude": 51.238129,
      "longitude": 6.865564,
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
      "heading": 143,
      "squawk": "7003",
      "timestamp": 1648981034,
      "ems": null
    },
    {
      "latitude": 51.237068,
      "longitude": 6.86676,
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
      "heading": 143,
      "squawk": "7003",
      "timestamp": 1648981037,
      "ems": null
    },
    {
      "latitude": 51.235859,
      "longitude": 6.86821,
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
      "heading": 142,
      "squawk": "7003",
      "timestamp": 1648981040,
      "ems": null
    },
    {
      "latitude": 51.234882,
      "longitude": 6.869507,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 141,
      "squawk": "7003",
      "timestamp": 1648981043,
      "ems": null
    },
    {
      "latitude": 51.233734,
      "longitude": 6.870909,
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
      "heading": 141,
      "squawk": "7003",
      "timestamp": 1648981046,
      "ems": null
    },
    {
      "latitude": 51.232784,
      "longitude": 6.872101,
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
      "heading": 142,
      "squawk": "7003",
      "timestamp": 1648981049,
      "ems": null
    },
    {
      "latitude": 51.231529,
      "longitude": 6.873627,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 143,
      "squawk": "7003",
      "timestamp": 1648981052,
      "ems": null
    },
    {
      "latitude": 51.229435,
      "longitude": 6.875992,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 143,
      "squawk": "7003",
      "timestamp": 1648981058,
      "ems": null
    },
    {
      "latitude": 51.227291,
      "longitude": 6.878662,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 141,
      "squawk": "7003",
      "timestamp": 1648981064,
      "ems": null
    },
    {
      "latitude": 51.225128,
      "longitude": 6.881376,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 141,
      "squawk": "7003",
      "timestamp": 1648981070,
      "ems": null
    },
    {
      "latitude": 51.223057,
      "longitude": 6.88385,
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
      "heading": 144,
      "squawk": "7003",
      "timestamp": 1648981076,
      "ems": null
    },
    {
      "latitude": 51.220917,
      "longitude": 6.886292,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 143,
      "squawk": "7003",
      "timestamp": 1648981082,
      "ems": null
    },
    {
      "latitude": 51.218674,
      "longitude": 6.888873,
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
      "heading": 145,
      "squawk": "7003",
      "timestamp": 1648981088,
      "ems": null
    },
    {
      "latitude": 51.216522,
      "longitude": 6.891174,
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
      "heading": 145,
      "squawk": "7003",
      "timestamp": 1648981094,
      "ems": null
    },
    {
      "latitude": 51.214306,
      "longitude": 6.893692,
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
      "heading": 143,
      "squawk": "7003",
      "timestamp": 1648981100,
      "ems": null
    },
    {
      "latitude": 51.212082,
      "longitude": 6.896445,
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
      "heading": 143,
      "squawk": "7003",
      "timestamp": 1648981107,
      "ems": null
    },
    {
      "latitude": 51.210068,
      "longitude": 6.89882,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 142,
      "squawk": "7003",
      "timestamp": 1648981112,
      "ems": null
    },
    {
      "latitude": 51.207962,
      "longitude": 6.901344,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 142,
      "squawk": "7003",
      "timestamp": 1648981119,
      "ems": null
    },
    {
      "latitude": 51.205902,
      "longitude": 6.903868,
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
      "heading": 144,
      "squawk": "7003",
      "timestamp": 1648981124,
      "ems": null
    },
    {
      "latitude": 51.203831,
      "longitude": 6.906281,
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
      "heading": 142,
      "squawk": "7003",
      "timestamp": 1648981130,
      "ems": null
    },
    {
      "latitude": 51.201782,
      "longitude": 6.908693,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 143,
      "squawk": "7003",
      "timestamp": 1648981136,
      "ems": null
    },
    {
      "latitude": 51.199722,
      "longitude": 6.911143,
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
      "heading": 142,
      "squawk": "7003",
      "timestamp": 1648981142,
      "ems": null
    },
    {
      "latitude": 51.197845,
      "longitude": 6.913518,
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
      "heading": 140,
      "squawk": "7003",
      "timestamp": 1648981148,
      "ems": null
    },
    {
      "latitude": 51.195683,
      "longitude": 6.916275,
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
      "heading": 143,
      "squawk": "7003",
      "timestamp": 1648981154,
      "ems": null
    },
    {
      "latitude": 51.194092,
      "longitude": 6.918195,
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
      "heading": 143,
      "squawk": "7003",
      "timestamp": 1648981160,
      "ems": null
    },
    {
      "latitude": 51.191528,
      "longitude": 6.920941,
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
      "heading": 146,
      "squawk": "7003",
      "timestamp": 1648981166,
      "ems": null
    },
    {
      "latitude": 51.189354,
      "longitude": 6.923218,
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
      "heading": 146,
      "squawk": "7003",
      "timestamp": 1648981172,
      "ems": null
    },
    {
      "latitude": 51.188232,
      "longitude": 6.92443,
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
      "heading": 146,
      "squawk": "7003",
      "timestamp": 1648981175,
      "ems": null
    },
    {
      "latitude": 51.186092,
      "longitude": 6.926727,
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
      "heading": 146,
      "squawk": "7003",
      "timestamp": 1648981182,
      "ems": null
    },
    {
      "latitude": 51.183907,
      "longitude": 6.929092,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 144,
      "squawk": "7003",
      "timestamp": 1648981188,
      "ems": null
    },
    {
      "latitude": 51.181858,
      "longitude": 6.931458,
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
      "heading": 143,
      "squawk": "7003",
      "timestamp": 1648981193,
      "ems": null
    },
    {
      "latitude": 51.179855,
      "longitude": 6.933899,
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
      "heading": 142,
      "squawk": "7003",
      "timestamp": 1648981200,
      "ems": null
    },
    {
      "latitude": 51.177612,
      "longitude": 6.93653,
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
      "heading": 144,
      "squawk": "7003",
      "timestamp": 1648981206,
      "ems": null
    },
    {
      "latitude": 51.17548,
      "longitude": 6.938934,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 144,
      "squawk": "7003",
      "timestamp": 1648981211,
      "ems": null
    },
    {
      "latitude": 51.173401,
      "longitude": 6.941355,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1648981217,
      "ems": null
    },
    {
      "latitude": 51.171158,
      "longitude": 6.94373,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1648981223,
      "ems": null
    },
    {
      "latitude": 51.169968,
      "longitude": 6.944695,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1648981227,
      "ems": null
    },
    {
      "latitude": 51.168823,
      "longitude": 6.945572,
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1648981230,
      "ems": null
    },
    {
      "latitude": 51.167519,
      "longitude": 6.946564,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1648981233,
      "ems": null
    },
    {
      "latitude": 51.166489,
      "longitude": 6.947442,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1648981235,
      "ems": null
    },
    {
      "latitude": 51.164215,
      "longitude": 6.949692,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1648981242,
      "ems": null
    },
    {
      "latitude": 51.162075,
      "longitude": 6.951904,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1648981248,
      "ems": null
    },
    {
      "latitude": 51.159885,
      "longitude": 6.954117,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1648981254,
      "ems": null
    },
    {
      "latitude": 51.158844,
      "longitude": 6.955162,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1648981256,
      "ems": null
    },
    {
      "latitude": 51.15765,
      "longitude": 6.956482,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1648981260,
      "ems": null
    },
    {
      "latitude": 51.156601,
      "longitude": 6.957612,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1648981262,
      "ems": null
    },
    {
      "latitude": 51.155502,
      "longitude": 6.958874,
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1648981265,
      "ems": null
    },
    {
      "latitude": 51.153042,
      "longitude": 6.961517,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1648981272,
      "ems": null
    },
    {
      "latitude": 51.150696,
      "longitude": 6.96407,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1648981278,
      "ems": null
    },
    {
      "latitude": 51.14827,
      "longitude": 6.966668,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1648981284,
      "ems": null
    },
    {
      "latitude": 51.145828,
      "longitude": 6.969299,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1648981290,
      "ems": null
    },
    {
      "latitude": 51.143547,
      "longitude": 6.971817,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1648981296,
      "ems": null
    },
    {
      "latitude": 51.140892,
      "longitude": 6.97464,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1648981302,
      "ems": null
    },
    {
      "latitude": 51.138428,
      "longitude": 6.977357,
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1648981308,
      "ems": null
    },
    {
      "latitude": 51.135818,
      "longitude": 6.980286,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1648981314,
      "ems": null
    },
    {
      "latitude": 51.133396,
      "longitude": 6.983032,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1648981319,
      "ems": null
    },
    {
      "latitude": 51.13065,
      "longitude": 6.986313,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1648981326,
      "ems": null
    },
    {
      "latitude": 51.128174,
      "longitude": 6.989309,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1648981332,
      "ems": null
    },
    {
      "latitude": 51.125656,
      "longitude": 6.992352,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1648981338,
      "ems": null
    },
    {
      "latitude": 51.123322,
      "longitude": 6.994951,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1648981344,
      "ems": null
    },
    {
      "latitude": 51.120712,
      "longitude": 6.998143,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1648981350,
      "ems": null
    },
    {
      "latitude": 51.118313,
      "longitude": 7.000885,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1648981356,
      "ems": null
    },
    {
      "latitude": 51.117104,
      "longitude": 7.002106,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1648981358,
      "ems": null
    },
    {
      "latitude": 51.115753,
      "longitude": 7.003403,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1648981362,
      "ems": null
    },
    {
      "latitude": 51.114441,
      "longitude": 7.004601,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1648981365,
      "ems": null
    },
    {
      "latitude": 51.113194,
      "longitude": 7.005692,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1648981368,
      "ems": null
    },
    {
      "latitude": 51.111889,
      "longitude": 7.006912,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1648981371,
      "ems": null
    },
    {
      "latitude": 51.110821,
      "longitude": 7.007904,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1648981374,
      "ems": null
    },
    {
      "latitude": 51.109634,
      "longitude": 7.00898,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1648981377,
      "ems": null
    },
    {
      "latitude": 51.107143,
      "longitude": 7.01149,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1648981382,
      "ems": null
    },
    {
      "latitude": 51.104782,
      "longitude": 7.014177,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1648981389,
      "ems": null
    },
    {
      "latitude": 51.103695,
      "longitude": 7.015457,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1648981392,
      "ems": null
    },
    {
      "latitude": 51.102394,
      "longitude": 7.016983,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1648981395,
      "ems": null
    },
    {
      "latitude": 51.101257,
      "longitude": 7.018333,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1648981398,
      "ems": null
    },
    {
      "latitude": 51.100388,
      "longitude": 7.019447,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1648981401,
      "ems": null
    },
    {
      "latitude": 51.099136,
      "longitude": 7.02095,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1648981404,
      "ems": null
    },
    {
      "latitude": 51.09811,
      "longitude": 7.022247,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1648981407,
      "ems": null
    },
    {
      "latitude": 51.095642,
      "longitude": 7.025146,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1648981413,
      "ems": null
    },
    {
      "latitude": 51.094666,
      "longitude": 7.026443,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1648981416,
      "ems": null
    },
    {
      "latitude": 51.092293,
      "longitude": 7.029648,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1648981422,
      "ems": null
    },
    {
      "latitude": 51.090103,
      "longitude": 7.0327,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1648981428,
      "ems": null
    },
    {
      "latitude": 51.087868,
      "longitude": 7.035751,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1648981434,
      "ems": null
    },
    {
      "latitude": 51.086838,
      "longitude": 7.037189,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1648981437,
      "ems": null
    },
    {
      "latitude": 51.085739,
      "longitude": 7.038822,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1648981440,
      "ems": null
    },
    {
      "latitude": 51.083542,
      "longitude": 7.041865,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1648981446,
      "ems": null
    },
    {
      "latitude": 51.081211,
      "longitude": 7.044678,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1648981452,
      "ems": null
    },
    {
      "latitude": 51.078781,
      "longitude": 7.047581,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1648981458,
      "ems": null
    },
    {
      "latitude": 51.077499,
      "longitude": 7.049066,
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1648981461,
      "ems": null
    },
    {
      "latitude": 51.076309,
      "longitude": 7.050402,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1648981464,
      "ems": null
    },
    {
      "latitude": 51.075253,
      "longitude": 7.051468,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1648981467,
      "ems": null
    },
    {
      "latitude": 51.073902,
      "longitude": 7.052841,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1648981470,
      "ems": null
    },
    {
      "latitude": 51.072647,
      "longitude": 7.054062,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1648981473,
      "ems": null
    },
    {
      "latitude": 51.071342,
      "longitude": 7.055359,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1648981476,
      "ems": null
    },
    {
      "latitude": 51.069992,
      "longitude": 7.056637,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1648981479,
      "ems": null
    },
    {
      "latitude": 51.068737,
      "longitude": 7.0578,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1648981482,
      "ems": null
    },
    {
      "latitude": 51.067387,
      "longitude": 7.059174,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1648981485,
      "ems": null
    },
    {
      "latitude": 51.064827,
      "longitude": 7.061691,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1648981491,
      "ems": null
    },
    {
      "latitude": 51.062313,
      "longitude": 7.064209,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1648981497,
      "ems": null
    },
    {
      "latitude": 51.059937,
      "longitude": 7.066498,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 149,
      "squawk": "7001",
      "timestamp": 1648981503,
      "ems": null
    },
    {
      "latitude": 51.057423,
      "longitude": 7.068939,
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
      "heading": 148,
      "squawk": "7001",
      "timestamp": 1648981509,
      "ems": null
    },
    {
      "latitude": 51.055004,
      "longitude": 7.071381,
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
      "heading": 147,
      "squawk": "7001",
      "timestamp": 1648981515,
      "ems": null
    },
    {
      "latitude": 51.052643,
      "longitude": 7.07371,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 147,
      "squawk": "7001",
      "timestamp": 1648981521,
      "ems": null
    },
    {
      "latitude": 51.050171,
      "longitude": 7.076309,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 146,
      "squawk": "7001",
      "timestamp": 1648981527,
      "ems": null
    },
    {
      "latitude": 51.047836,
      "longitude": 7.078684,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 147,
      "squawk": "7001",
      "timestamp": 1648981533,
      "ems": null
    },
    {
      "latitude": 51.045319,
      "longitude": 7.081208,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 147,
      "squawk": "7001",
      "timestamp": 1648981539,
      "ems": null
    },
    {
      "latitude": 51.042946,
      "longitude": 7.083664,
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
      "heading": 146,
      "squawk": "7001",
      "timestamp": 1648981545,
      "ems": null
    },
    {
      "latitude": 51.040524,
      "longitude": 7.086105,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1648981551,
      "ems": null
    },
    {
      "latitude": 51.03801,
      "longitude": 7.088547,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1648981557,
      "ems": null
    },
    {
      "latitude": 51.035637,
      "longitude": 7.090759,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1648981563,
      "ems": null
    },
    {
      "latitude": 51.033142,
      "longitude": 7.093234,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1648981569,
      "ems": null
    },
    {
      "latitude": 51.03075,
      "longitude": 7.095947,
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1648981575,
      "ems": null
    },
    {
      "latitude": 51.028423,
      "longitude": 7.098694,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1648981581,
      "ems": null
    },
    {
      "latitude": 51.027374,
      "longitude": 7.099989,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1648981584,
      "ems": null
    },
    {
      "latitude": 51.026047,
      "longitude": 7.101593,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1648981587,
      "ems": null
    },
    {
      "latitude": 51.024837,
      "longitude": 7.103043,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1648981590,
      "ems": null
    },
    {
      "latitude": 51.023712,
      "longitude": 7.104443,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1648981593,
      "ems": null
    },
    {
      "latitude": 51.022568,
      "longitude": 7.105927,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1648981596,
      "ems": null
    },
    {
      "latitude": 51.020229,
      "longitude": 7.108688,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1648981602,
      "ems": null
    },
    {
      "latitude": 51.01799,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1648981608,
      "ems": null
    },
    {
      "latitude": 51.015572,
      "longitude": 7.114182,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1648981614,
      "ems": null
    },
    {
      "latitude": 51.014362,
      "longitude": 7.115479,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1648981617,
      "ems": null
    },
    {
      "latitude": 51.011993,
      "longitude": 7.117953,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1648981623,
      "ems": null
    },
    {
      "latitude": 51.00975,
      "longitude": 7.120254,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1648981629,
      "ems": null
    },
    {
      "latitude": 51.008469,
      "longitude": 7.121516,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1648981632,
      "ems": null
    },
    {
      "latitude": 51.007332,
      "longitude": 7.122726,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1648981635,
      "ems": null
    },
    {
      "latitude": 51.004807,
      "longitude": 7.125154,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1648981641,
      "ems": null
    },
    {
      "latitude": 51.002304,
      "longitude": 7.12738,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1648981647,
      "ems": null
    },
    {
      "latitude": 51.001236,
      "longitude": 7.128197,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1648981650,
      "ems": null
    },
    {
      "latitude": 51.000072,
      "longitude": 7.129059,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1648981653,
      "ems": null
    },
    {
      "latitude": 50.998535,
      "longitude": 7.130356,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1648981656,
      "ems": null
    },
    {
      "latitude": 50.996113,
      "longitude": 7.132416,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1648981662,
      "ems": null
    },
    {
      "latitude": 50.993774,
      "longitude": 7.134581,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1648981668,
      "ems": null
    },
    {
      "latitude": 50.99239,
      "longitude": 7.136078,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1648981671,
      "ems": null
    },
    {
      "latitude": 50.991226,
      "longitude": 7.137451,
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1648981674,
      "ems": null
    },
    {
      "latitude": 50.990063,
      "longitude": 7.138824,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1648981677,
      "ems": null
    },
    {
      "latitude": 50.988899,
      "longitude": 7.140274,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1648981680,
      "ems": null
    },
    {
      "latitude": 50.987915,
      "longitude": 7.141633,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1648981683,
      "ems": null
    },
    {
      "latitude": 50.986633,
      "longitude": 7.143414,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1648981686,
      "ems": null
    },
    {
      "latitude": 50.985718,
      "longitude": 7.144825,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1648981689,
      "ems": null
    },
    {
      "latitude": 50.984573,
      "longitude": 7.146309,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1648981692,
      "ems": null
    },
    {
      "latitude": 50.983658,
      "longitude": 7.147497,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1648981695,
      "ems": null
    },
    {
      "latitude": 50.981171,
      "longitude": 7.150421,
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1648981701,
      "ems": null
    },
    {
      "latitude": 50.978897,
      "longitude": 7.153065,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1648981707,
      "ems": null
    },
    {
      "latitude": 50.976837,
      "longitude": 7.155589,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1648981713,
      "ems": null
    },
    {
      "latitude": 50.975555,
      "longitude": 7.156999,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1648981716,
      "ems": null
    },
    {
      "latitude": 50.974411,
      "longitude": 7.158113,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1648981719,
      "ems": null
    },
    {
      "latitude": 50.973221,
      "longitude": 7.159226,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1648981722,
      "ems": null
    },
    {
      "latitude": 50.972187,
      "longitude": 7.160187,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1648981725,
      "ems": null
    },
    {
      "latitude": 50.970978,
      "longitude": 7.161378,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1648981728,
      "ems": null
    },
    {
      "latitude": 50.969696,
      "longitude": 7.162492,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1648981731,
      "ems": null
    },
    {
      "latitude": 50.968552,
      "longitude": 7.163531,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1648981734,
      "ems": null
    },
    {
      "latitude": 50.966366,
      "longitude": 7.165833,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1648981740,
      "ems": null
    },
    {
      "latitude": 50.96402,
      "longitude": 7.168356,
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1648981746,
      "ems": null
    },
    {
      "latitude": 50.962921,
      "longitude": 7.169724,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1648981749,
      "ems": null
    },
    {
      "latitude": 50.961945,
      "longitude": 7.170868,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1648981752,
      "ems": null
    },
    {
      "latitude": 50.959709,
      "longitude": 7.173386,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1648981758,
      "ems": null
    },
    {
      "latitude": 50.958618,
      "longitude": 7.174666,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1648981761,
      "ems": null
    },
    {
      "latitude": 50.956558,
      "longitude": 7.176893,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1648981767,
      "ems": null
    },
    {
      "latitude": 50.954315,
      "longitude": 7.179194,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1648981773,
      "ems": null
    },
    {
      "latitude": 50.953217,
      "longitude": 7.180233,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1648981776,
      "ems": null
    },
    {
      "latitude": 50.952118,
      "longitude": 7.181421,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1648981779,
      "ems": null
    },
    {
      "latitude": 50.950928,
      "longitude": 7.182535,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1648981782,
      "ems": null
    },
    {
      "latitude": 50.949829,
      "longitude": 7.183574,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1648981785,
      "ems": null
    },
    {
      "latitude": 50.948685,
      "longitude": 7.184613,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1648981788,
      "ems": null
    },
    {
      "latitude": 50.946491,
      "longitude": 7.187424,
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1648981794,
      "ems": null
    },
    {
      "latitude": 50.945793,
      "longitude": 7.188873,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1648981797,
      "ems": null
    },
    {
      "latitude": 50.945114,
      "longitude": 7.1907,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1648981800,
      "ems": null
    },
    {
      "latitude": 50.944721,
      "longitude": 7.192688,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1648981803,
      "ems": null
    },
    {
      "latitude": 50.944534,
      "longitude": 7.194519,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1648981806,
      "ems": null
    },
    {
      "latitude": 50.94421,
      "longitude": 7.196503,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1648981809,
      "ems": null
    },
    {
      "latitude": 50.943558,
      "longitude": 7.198346,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1648981812,
      "ems": null
    },
    {
      "latitude": 50.942673,
      "longitude": 7.199936,
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1648981815,
      "ems": null
    },
    {
      "latitude": 50.941601,
      "longitude": 7.20108,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1648981818,
      "ems": null
    },
    {
      "latitude": 50.940113,
      "longitude": 7.201691,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1648981821,
      "ems": null
    },
    {
      "latitude": 50.938751,
      "longitude": 7.201612,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1648981825,
      "ems": null
    },
    {
      "latitude": 50.937561,
      "longitude": 7.200944,
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1648981827,
      "ems": null
    },
    {
      "latitude": 50.936386,
      "longitude": 7.199783,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1648981830,
      "ems": null
    },
    {
      "latitude": 50.935364,
      "longitude": 7.198486,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1648981833,
      "ems": null
    },
    {
      "latitude": 50.934387,
      "longitude": 7.197266,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1648981836,
      "ems": null
    },
    {
      "latitude": 50.93327,
      "longitude": 7.195969,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1648981839,
      "ems": null
    },
    {
      "latitude": 50.932159,
      "longitude": 7.19456,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1648981842,
      "ems": null
    },
    {
      "latitude": 50.931175,
      "longitude": 7.193298,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1648981846,
      "ems": null
    },
    {
      "latitude": 50.930054,
      "longitude": 7.191888,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1648981848,
      "ems": null
    },
    {
      "latitude": 50.928909,
      "longitude": 7.190403,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1648981852,
      "ems": null
    },
    {
      "latitude": 50.927914,
      "longitude": 7.189178,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1648981854,
      "ems": null
    },
    {
      "latitude": 50.926846,
      "longitude": 7.187881,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1648981857,
      "ems": null
    },
    {
      "latitude": 50.924423,
      "longitude": 7.184982,
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1648981863,
      "ems": null
    },
    {
      "latitude": 50.921951,
      "longitude": 7.182238,
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1648981869,
      "ems": null
    },
    {
      "latitude": 50.920761,
      "longitude": 7.180902,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1648981872,
      "ems": null
    },
    {
      "latitude": 50.918427,
      "longitude": 7.178081,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1648981878,
      "ems": null
    },
    {
      "latitude": 50.916275,
      "longitude": 7.175037,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1648981884,
      "ems": null
    },
    {
      "latitude": 50.915253,
      "longitude": 7.173462,
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1648981887,
      "ems": null
    },
    {
      "latitude": 50.91423,
      "longitude": 7.171936,
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1648981890,
      "ems": null
    },
    {
      "latitude": 50.913204,
      "longitude": 7.170486,
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1648981893,
      "ems": null
    },
    {
      "latitude": 50.912201,
      "longitude": 7.169024,
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1648981896,
      "ems": null
    },
    {
      "latitude": 50.911194,
      "longitude": 7.167614,
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1648981899,
      "ems": null
    },
    {
      "latitude": 50.910179,
      "longitude": 7.166214,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1648981902,
      "ems": null
    },
    {
      "latitude": 50.908039,
      "longitude": 7.163315,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1648981908,
      "ems": null
    },
    {
      "latitude": 50.906113,
      "longitude": 7.160785,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1648981915,
      "ems": null
    },
    {
      "latitude": 50.904873,
      "longitude": 7.159348,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1648981918,
      "ems": null
    },
    {
      "latitude": 50.903961,
      "longitude": 7.158261,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1648981921,
      "ems": null
    },
    {
      "latitude": 50.902771,
      "longitude": 7.156999,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1648981923,
      "ems": null
    },
    {
      "latitude": 50.901661,
      "longitude": 7.155914,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1648981926,
      "ems": null
    },
    {
      "latitude": 50.900589,
      "longitude": 7.154846,
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
        "fpm": 1984,
        "ms": 10.1
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1648981929,
      "ems": null
    },
    {
      "latitude": 50.899612,
      "longitude": 7.154007,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1648981932,
      "ems": null
    },
    {
      "latitude": 50.898586,
      "longitude": 7.153244,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1648981935,
      "ems": null
    },
    {
      "latitude": 50.897423,
      "longitude": 7.152328,
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1648981939,
      "ems": null
    },
    {
      "latitude": 50.896355,
      "longitude": 7.151566,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1648981942,
      "ems": null
    },
    {
      "latitude": 50.895187,
      "longitude": 7.150726,
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1648981944,
      "ems": null
    },
    {
      "latitude": 50.893978,
      "longitude": 7.15004,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1648981948,
      "ems": null
    },
    {
      "latitude": 50.892563,
      "longitude": 7.149353,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1648981951,
      "ems": null
    },
    {
      "latitude": 50.89151,
      "longitude": 7.148908,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1648981953,
      "ems": null
    },
    {
      "latitude": 50.890091,
      "longitude": 7.148388,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1648981956,
      "ems": null
    },
    {
      "latitude": 50.888718,
      "longitude": 7.147868,
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1648981960,
      "ems": null
    },
    {
      "latitude": 50.887207,
      "longitude": 7.147274,
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1648981963,
      "ems": null
    },
    {
      "latitude": 50.885925,
      "longitude": 7.146759,
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1648981966,
      "ems": null
    },
    {
      "latitude": 50.884506,
      "longitude": 7.146161,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1648981969,
      "ems": null
    },
    {
      "latitude": 50.883133,
      "longitude": 7.145641,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1648981972,
      "ems": null
    },
    {
      "latitude": 50.881783,
      "longitude": 7.145004,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1648981975,
      "ems": null
    },
    {
      "latitude": 50.879059,
      "longitude": 7.14386,
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1648981981,
      "ems": null
    },
    {
      "latitude": 50.876038,
      "longitude": 7.142598,
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1648981987,
      "ems": null
    },
    {
      "latitude": 50.873337,
      "longitude": 7.14141,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1648981993,
      "ems": null
    },
    {
      "latitude": 50.870655,
      "longitude": 7.140198,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1648981999,
      "ems": null
    },
    {
      "latitude": 50.867722,
      "longitude": 7.138824,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1648982005,
      "ems": null
    },
    {
      "latitude": 50.86496,
      "longitude": 7.13755,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1648982011,
      "ems": null
    },
    {
      "latitude": 50.862324,
      "longitude": 7.13623,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1648982017,
      "ems": null
    },
    {
      "latitude": 50.859787,
      "longitude": 7.134878,
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1648982023,
      "ems": null
    },
    {
      "latitude": 50.857269,
      "longitude": 7.133616,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1648982029,
      "ems": null
    },
    {
      "latitude": 50.85466,
      "longitude": 7.132576,
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1648982035,
      "ems": null
    },
    {
      "latitude": 50.852081,
      "longitude": 7.131653,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1648982041,
      "ems": null
    },
    {
      "latitude": 50.849663,
      "longitude": 7.130737,
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1648982047,
      "ems": null
    },
    {
      "latitude": 50.848263,
      "longitude": 7.130203,
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1648982050,
      "ems": null
    },
    {
      "latitude": 50.846867,
      "longitude": 7.129669,
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1648982053,
      "ems": null
    },
    {
      "latitude": 50.844269,
      "longitude": 7.128642,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1648982059,
      "ems": null
    },
    {
      "latitude": 50.841839,
      "longitude": 7.127533,
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1648982065,
      "ems": null
    },
    {
      "latitude": 50.840397,
      "longitude": 7.12677,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1648982068,
      "ems": null
    },
    {
      "latitude": 50.837769,
      "longitude": 7.125673,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1648982074,
      "ems": null
    },
    {
      "latitude": 50.835045,
      "longitude": 7.124634,
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1648982080,
      "ems": null
    },
    {
      "latitude": 50.833649,
      "longitude": 7.123871,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1648982083,
      "ems": null
    },
    {
      "latitude": 50.832458,
      "longitude": 7.123149,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1648982086,
      "ems": null
    },
    {
      "latitude": 50.831223,
      "longitude": 7.12211,
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1648982089,
      "ems": null
    },
    {
      "latitude": 50.829895,
      "longitude": 7.120848,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1648982092,
      "ems": null
    },
    {
      "latitude": 50.828712,
      "longitude": 7.119751,
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1648982095,
      "ems": null
    },
    {
      "latitude": 50.827515,
      "longitude": 7.11877,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1648982098,
      "ems": null
    },
    {
      "latitude": 50.826187,
      "longitude": 7.117656,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1648982101,
      "ems": null
    },
    {
      "latitude": 50.825176,
      "longitude": 7.116699,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1648982104,
      "ems": null
    },
    {
      "latitude": 50.823761,
      "longitude": 7.115429,
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1648982107,
      "ems": null
    },
    {
      "latitude": 50.822708,
      "longitude": 7.114538,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1648982110,
      "ems": null
    },
    {
      "latitude": 50.821499,
      "longitude": 7.113571,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1648982113,
      "ems": null
    },
    {
      "latitude": 50.818863,
      "longitude": 7.111495,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1648982119,
      "ems": null
    },
    {
      "latitude": 50.817719,
      "longitude": 7.110604,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1648982122,
      "ems": null
    },
    {
      "latitude": 50.815201,
      "longitude": 7.108748,
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1648982128,
      "ems": null
    },
    {
      "latitude": 50.814148,
      "longitude": 7.108006,
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1648982131,
      "ems": null
    },
    {
      "latitude": 50.812912,
      "longitude": 7.107189,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1648982134,
      "ems": null
    },
    {
      "latitude": 50.811584,
      "longitude": 7.106373,
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1648982137,
      "ems": null
    },
    {
      "latitude": 50.810349,
      "longitude": 7.105779,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1648982140,
      "ems": null
    },
    {
      "latitude": 50.809299,
      "longitude": 7.105255,
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1648982143,
      "ems": null
    },
    {
      "latitude": 50.807602,
      "longitude": 7.104443,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1648982146,
      "ems": null
    },
    {
      "latitude": 50.806366,
      "longitude": 7.103958,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1648982149,
      "ems": null
    },
    {
      "latitude": 50.805111,
      "longitude": 7.103348,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1648982152,
      "ems": null
    },
    {
      "latitude": 50.80426,
      "longitude": 7.102884,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1648982155,
      "ems": null
    },
    {
      "latitude": 50.801479,
      "longitude": 7.100983,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1648982161,
      "ems": null
    },
    {
      "latitude": 50.799133,
      "longitude": 7.099395,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1648982167,
      "ems": null
    },
    {
      "latitude": 50.797894,
      "longitude": 7.098312,
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1648982170,
      "ems": null
    },
    {
      "latitude": 50.796799,
      "longitude": 7.097242,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1648982173,
      "ems": null
    },
    {
      "latitude": 50.795654,
      "longitude": 7.096203,
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1648982176,
      "ems": null
    },
    {
      "latitude": 50.794418,
      "longitude": 7.095015,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1648982179,
      "ems": null
    },
    {
      "latitude": 50.793381,
      "longitude": 7.093964,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1648982182,
      "ems": null
    },
    {
      "latitude": 50.792217,
      "longitude": 7.092743,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1648982185,
      "ems": null
    },
    {
      "latitude": 50.791004,
      "longitude": 7.091522,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1648982188,
      "ems": null
    },
    {
      "latitude": 50.790073,
      "longitude": 7.09053,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1648982191,
      "ems": null
    },
    {
      "latitude": 50.788925,
      "longitude": 7.089374,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1648982194,
      "ems": null
    },
    {
      "latitude": 50.786545,
      "longitude": 7.087147,
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1648982200,
      "ems": null
    },
    {
      "latitude": 50.784348,
      "longitude": 7.08519,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1648982206,
      "ems": null
    },
    {
      "latitude": 50.781929,
      "longitude": 7.082977,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1648982212,
      "ems": null
    },
    {
      "latitude": 50.779907,
      "longitude": 7.080688,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1648982218,
      "ems": null
    },
    {
      "latitude": 50.777618,
      "longitude": 7.07809,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1648982224,
      "ems": null
    },
    {
      "latitude": 50.776482,
      "longitude": 7.076797,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1648982227,
      "ems": null
    },
    {
      "latitude": 50.77541,
      "longitude": 7.0755,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1648982230,
      "ems": null
    },
    {
      "latitude": 50.774387,
      "longitude": 7.074356,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1648982233,
      "ems": null
    },
    {
      "latitude": 50.77327,
      "longitude": 7.073042,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1648982236,
      "ems": null
    },
    {
      "latitude": 50.772171,
      "longitude": 7.071781,
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1648982239,
      "ems": null
    },
    {
      "latitude": 50.769871,
      "longitude": 7.069397,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1648982245,
      "ems": null
    },
    {
      "latitude": 50.768875,
      "longitude": 7.06844,
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1648982248,
      "ems": null
    },
    {
      "latitude": 50.767822,
      "longitude": 7.067642,
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1648982251,
      "ems": null
    },
    {
      "latitude": 50.766541,
      "longitude": 7.066956,
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1648982254,
      "ems": null
    },
    {
      "latitude": 50.765308,
      "longitude": 7.066498,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1648982257,
      "ems": null
    },
    {
      "latitude": 50.764145,
      "longitude": 7.066269,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1648982260,
      "ems": null
    },
    {
      "latitude": 50.762833,
      "longitude": 7.066213,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1648982263,
      "ems": null
    },
    {
      "latitude": 50.761734,
      "longitude": 7.066213,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1648982266,
      "ems": null
    },
    {
      "latitude": 50.760544,
      "longitude": 7.066362,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1648982269,
      "ems": null
    },
    {
      "latitude": 50.759396,
      "longitude": 7.066498,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1648982272,
      "ems": null
    },
    {
      "latitude": 50.758091,
      "longitude": 7.066879,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1648982275,
      "ems": null
    },
    {
      "latitude": 50.757065,
      "longitude": 7.067253,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1648982278,
      "ems": null
    },
    {
      "latitude": 50.755829,
      "longitude": 7.067846,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1648982281,
      "ems": null
    },
    {
      "latitude": 50.754684,
      "longitude": 7.068589,
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1648982284,
      "ems": null
    },
    {
      "latitude": 50.75367,
      "longitude": 7.069397,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1648982287,
      "ems": null
    },
    {
      "latitude": 50.752647,
      "longitude": 7.07016,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1648982290,
      "ems": null
    },
    {
      "latitude": 50.751709,
      "longitude": 7.071038,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1648982293,
      "ems": null
    },
    {
      "latitude": 50.750877,
      "longitude": 7.072067,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1648982296,
      "ems": null
    },
    {
      "latitude": 50.749947,
      "longitude": 7.073212,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1648982299,
      "ems": null
    },
    {
      "latitude": 50.749062,
      "longitude": 7.07428,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1648982302,
      "ems": null
    },
    {
      "latitude": 50.748177,
      "longitude": 7.075348,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1648982305,
      "ems": null
    },
    {
      "latitude": 50.747269,
      "longitude": 7.076606,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1648982308,
      "ems": null
    },
    {
      "latitude": 50.746445,
      "longitude": 7.077645,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1648982311,
      "ems": null
    },
    {
      "latitude": 50.745575,
      "longitude": 7.078907,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1648982314,
      "ems": null
    },
    {
      "latitude": 50.744827,
      "longitude": 7.080078,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1648982317,
      "ems": null
    },
    {
      "latitude": 50.74408,
      "longitude": 7.081223,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1648982320,
      "ems": null
    },
    {
      "latitude": 50.74324,
      "longitude": 7.082544,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1648982323,
      "ems": null
    },
    {
      "latitude": 50.742405,
      "longitude": 7.083817,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1648982326,
      "ems": null
    },
    {
      "latitude": 50.741638,
      "longitude": 7.085068,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1648982329,
      "ems": null
    },
    {
      "latitude": 50.74086,
      "longitude": 7.08633,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1648982332,
      "ems": null
    },
    {
      "latitude": 50.740124,
      "longitude": 7.087708,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1648982335,
      "ems": null
    },
    {
      "latitude": 50.739487,
      "longitude": 7.089077,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1648982338,
      "ems": null
    },
    {
      "latitude": 50.738865,
      "longitude": 7.090454,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1648982341,
      "ems": null
    },
    {
      "latitude": 50.738216,
      "longitude": 7.091904,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1648982344,
      "ems": null
    },
    {
      "latitude": 50.73793,
      "longitude": 7.09264,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1648982346,
      "ems": null
    },
    {
      "latitude": 50.73719,
      "longitude": 7.094803,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1648982350,
      "ems": null
    },
    {
      "latitude": 50.736633,
      "longitude": 7.096329,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1648982353,
      "ems": null
    },
    {
      "latitude": 50.736237,
      "longitude": 7.097539,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1648982356,
      "ems": null
    },
    {
      "latitude": 50.735748,
      "longitude": 7.099228,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1648982359,
      "ems": null
    },
    {
      "latitude": 50.735367,
      "longitude": 7.100731,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1648982362,
      "ems": null
    },
    {
      "latitude": 50.734955,
      "longitude": 7.102432,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1648982365,
      "ems": null
    },
    {
      "latitude": 50.734589,
      "longitude": 7.104146,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1648982368,
      "ems": null
    },
    {
      "latitude": 50.734268,
      "longitude": 7.105705,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1648982371,
      "ems": null
    },
    {
      "latitude": 50.733994,
      "longitude": 7.107189,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1648982374,
      "ems": null
    },
    {
      "latitude": 50.733627,
      "longitude": 7.109268,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1648982377,
      "ems": null
    },
    {
      "latitude": 50.733444,
      "longitude": 7.110753,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1648982380,
      "ems": null
    },
    {
      "latitude": 50.73328,
      "longitude": 7.112274,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1648982383,
      "ems": null
    },
    {
      "latitude": 50.733139,
      "longitude": 7.114563,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1648982386,
      "ems": null
    },
    {
      "latitude": 50.733189,
      "longitude": 7.116318,
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1648982389,
      "ems": null
    },
    {
      "latitude": 50.733307,
      "longitude": 7.117879,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1648982392,
      "ems": null
    },
    {
      "latitude": 50.733582,
      "longitude": 7.119586,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1648982395,
      "ems": null
    },
    {
      "latitude": 50.734074,
      "longitude": 7.121201,
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1648982398,
      "ems": null
    },
    {
      "latitude": 50.734772,
      "longitude": 7.12263,
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1648982401,
      "ems": null
    },
    {
      "latitude": 50.735596,
      "longitude": 7.124114,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1648982404,
      "ems": null
    },
    {
      "latitude": 50.736145,
      "longitude": 7.125005,
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
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1648982407,
      "ems": null
    },
    {
      "latitude": 50.737003,
      "longitude": 7.126465,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1648982410,
      "ems": null
    },
    {
      "latitude": 50.737656,
      "longitude": 7.127603,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1648982413,
      "ems": null
    },
    {
      "latitude": 50.738495,
      "longitude": 7.128906,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1648982416,
      "ems": null
    },
    {
      "latitude": 50.739166,
      "longitude": 7.130053,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1648982419,
      "ems": null
    },
    {
      "latitude": 50.739845,
      "longitude": 7.131119,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1648982422,
      "ems": null
    },
    {
      "latitude": 50.740585,
      "longitude": 7.132205,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1648982425,
      "ems": null
    },
    {
      "latitude": 50.741196,
      "longitude": 7.133026,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1648982428,
      "ems": null
    },
    {
      "latitude": 50.742004,
      "longitude": 7.134061,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1648982431,
      "ems": null
    },
    {
      "latitude": 50.742683,
      "longitude": 7.134857,
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1648982434,
      "ems": null
    },
    {
      "latitude": 50.743515,
      "longitude": 7.135843,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1648982437,
      "ems": null
    },
    {
      "latitude": 50.744453,
      "longitude": 7.136993,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1648982440,
      "ems": null
    },
    {
      "latitude": 50.744888,
      "longitude": 7.137476,
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1648982443,
      "ems": null
    },
    {
      "latitude": 50.746033,
      "longitude": 7.138886,
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1648982446,
      "ems": null
    },
    {
      "latitude": 50.74704,
      "longitude": 7.14,
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1648982449,
      "ems": null
    },
    {
      "latitude": 50.748272,
      "longitude": 7.142258,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1648982455,
      "ems": null
    },
    {
      "latitude": 50.748688,
      "longitude": 7.144394,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1648982458,
      "ems": null
    },
    {
      "latitude": 50.748505,
      "longitude": 7.146683,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1648982461,
      "ems": null
    },
    {
      "latitude": 50.748367,
      "longitude": 7.147349,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1648982464,
      "ems": null
    },
    {
      "latitude": 50.748001,
      "longitude": 7.149427,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1648982467,
      "ems": null
    },
    {
      "latitude": 50.747726,
      "longitude": 7.151134,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1648982470,
      "ems": null
    },
    {
      "latitude": 50.74762,
      "longitude": 7.15271,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1648982473,
      "ems": null
    },
    {
      "latitude": 50.747574,
      "longitude": 7.153854,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1648982476,
      "ems": null
    },
    {
      "latitude": 50.747524,
      "longitude": 7.155609,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1648982479,
      "ems": null
    },
    {
      "latitude": 50.747524,
      "longitude": 7.15744,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1648982482,
      "ems": null
    },
    {
      "latitude": 50.747452,
      "longitude": 7.159003,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1648982485,
      "ems": null
    },
    {
      "latitude": 50.747246,
      "longitude": 7.160263,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1648982488,
      "ems": null
    },
    {
      "latitude": 50.746994,
      "longitude": 7.161898,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1648982491,
      "ems": null
    },
    {
      "latitude": 50.746456,
      "longitude": 7.164917,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1648982497,
      "ems": null
    },
    {
      "latitude": 50.74617,
      "longitude": 7.16754,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1648982503,
      "ems": null
    },
    {
      "latitude": 50.745941,
      "longitude": 7.170944,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1648982509,
      "ems": null
    },
    {
      "latitude": 50.746082,
      "longitude": 7.17247,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1648982512,
      "ems": null
    },
    {
      "latitude": 50.746307,
      "longitude": 7.173701,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1648982515,
      "ems": null
    },
    {
      "latitude": 50.746582,
      "longitude": 7.175334,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1648982518,
      "ems": null
    },
    {
      "latitude": 50.746922,
      "longitude": 7.1772,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1648982521,
      "ems": null
    },
    {
      "latitude": 50.747177,
      "longitude": 7.178749,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1648982524,
      "ems": null
    },
    {
      "latitude": 50.747406,
      "longitude": 7.180233,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1648982527,
      "ems": null
    },
    {
      "latitude": 50.747665,
      "longitude": 7.181778,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1648982530,
      "ems": null
    },
    {
      "latitude": 50.747955,
      "longitude": 7.183351,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1648982533,
      "ems": null
    },
    {
      "latitude": 50.748131,
      "longitude": 7.184525,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1648982536,
      "ems": null
    },
    {
      "latitude": 50.748367,
      "longitude": 7.185504,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1648982539,
      "ems": null
    },
    {
      "latitude": 50.749054,
      "longitude": 7.188993,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1648982545,
      "ems": null
    },
    {
      "latitude": 50.74942,
      "longitude": 7.190477,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1648982548,
      "ems": null
    },
    {
      "latitude": 50.750088,
      "longitude": 7.193451,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1648982554,
      "ems": null
    },
    {
      "latitude": 50.750599,
      "longitude": 7.194977,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1648982557,
      "ems": null
    },
    {
      "latitude": 50.751343,
      "longitude": 7.196579,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1648982562,
      "ems": null
    },
    {
      "latitude": 50.752132,
      "longitude": 7.197723,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1648982566,
      "ems": null
    },
    {
      "latitude": 50.75325,
      "longitude": 7.199173,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1648982570,
      "ems": null
    },
    {
      "latitude": 50.754322,
      "longitude": 7.200089,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1648982574,
      "ems": null
    },
    {
      "latitude": 50.755875,
      "longitude": 7.200796,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1648982578,
      "ems": null
    },
    {
      "latitude": 50.756512,
      "longitude": 7.200851,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1648982581,
      "ems": null
    },
    {
      "latitude": 50.757614,
      "longitude": 7.20087,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1648982584,
      "ems": null
    },
    {
      "latitude": 50.758575,
      "longitude": 7.200499,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1648982587,
      "ems": null
    },
    {
      "latitude": 50.759396,
      "longitude": 7.199783,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1648982590,
      "ems": null
    },
    {
      "latitude": 50.759907,
      "longitude": 7.199173,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1648982593,
      "ems": null
    },
    {
      "latitude": 50.760933,
      "longitude": 7.1978,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1648982596,
      "ems": null
    },
    {
      "latitude": 50.761459,
      "longitude": 7.196639,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1648982599,
      "ems": null
    },
    {
      "latitude": 50.761818,
      "longitude": 7.195435,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1648982602,
      "ems": null
    },
    {
      "latitude": 50.762009,
      "longitude": 7.194486,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1648982606,
      "ems": null
    },
    {
      "latitude": 50.762375,
      "longitude": 7.192853,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1648982608,
      "ems": null
    },
    {
      "latitude": 50.762703,
      "longitude": 7.191544,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1648982611,
      "ems": null
    },
    {
      "latitude": 50.76297,
      "longitude": 7.190552,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1648982614,
      "ems": null
    },
    {
      "latitude": 50.763306,
      "longitude": 7.189026,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1648982617,
      "ems": null
    },
    {
      "latitude": 50.763611,
      "longitude": 7.187657,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1648982621,
      "ems": null
    },
    {
      "latitude": 50.763866,
      "longitude": 7.186584,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1648982623,
      "ems": null
    },
    {
      "latitude": 50.764191,
      "longitude": 7.185287,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1648982627,
      "ems": null
    },
    {
      "latitude": 50.764843,
      "longitude": 7.182007,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1648982635,
      "ems": null
    },
    {
      "latitude": 50.765495,
      "longitude": 7.179031,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1648982643,
      "ems": null
    },
    {
      "latitude": 50.766239,
      "longitude": 7.175751,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1648982652,
      "ems": null
    },
    {
      "latitude": 50.766659,
      "longitude": 7.173386,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1648982658,
      "ems": null
    },
    {
      "latitude": 50.767357,
      "longitude": 7.170334,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1648982667,
      "ems": null
    },
    {
      "latitude": 50.767731,
      "longitude": 7.168653,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1648982671,
      "ems": null
    },
    {
      "latitude": 50.768372,
      "longitude": 7.165535,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1648982684,
      "ems": null
    },
    {
      "latitude": 50.768753,
      "longitude": 7.163849,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 40.7,
        "kts": 22,
        "mph": 25.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1648982694,
      "ems": null
    }
  ]
};
