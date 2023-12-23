import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20231223LPCOLPSO",
    callsign: "RVP103",
    name: "NAV 15",
    description: "",
  },
  pilotLog: {
    departure: new Date(2023, 11, 23, 9, 45).getTime(),
    arrival: new Date(2023, 11, 23, 11, 45).getTime(),
    singleEnginePistonTime: 120,
    multiEnginePistonTime: 0,
    picTime: 120,
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
      registration: "CS-DHS",
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
      "latitude": 40.158875,
      "longitude": -8.470886,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 153,
      "squawk": "3260",
      "timestamp": 1703325076,
      "ems": null
    },
    {
      "latitude": 40.158234,
      "longitude": -8.47052,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 154,
      "squawk": "3260",
      "timestamp": 1703325078,
      "ems": null
    },
    {
      "latitude": 40.155807,
      "longitude": -8.469116,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 156,
      "squawk": "3260",
      "timestamp": 1703325087,
      "ems": null
    },
    {
      "latitude": 40.153446,
      "longitude": -8.467587,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 155,
      "squawk": "3260",
      "timestamp": 1703325097,
      "ems": null
    },
    {
      "latitude": 40.152702,
      "longitude": -8.467213,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 157,
      "squawk": "3260",
      "timestamp": 1703325100,
      "ems": null
    },
    {
      "latitude": 40.151863,
      "longitude": -8.466776,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 160,
      "squawk": "3260",
      "timestamp": 1703325103,
      "ems": null
    },
    {
      "latitude": 40.151028,
      "longitude": -8.466401,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 158,
      "squawk": "3260",
      "timestamp": 1703325106,
      "ems": null
    },
    {
      "latitude": 40.148758,
      "longitude": -8.46521,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 157,
      "squawk": "3260",
      "timestamp": 1703325114,
      "ems": null
    },
    {
      "latitude": 40.147629,
      "longitude": -8.464654,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 160,
      "squawk": "3260",
      "timestamp": 1703325118,
      "ems": null
    },
    {
      "latitude": 40.146648,
      "longitude": -8.464279,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 164,
      "squawk": "3260",
      "timestamp": 1703325121,
      "ems": null
    },
    {
      "latitude": 40.145645,
      "longitude": -8.463989,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 170,
      "squawk": "3260",
      "timestamp": 1703325123,
      "ems": null
    },
    {
      "latitude": 40.144554,
      "longitude": -8.463904,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 177,
      "squawk": "3260",
      "timestamp": 1703325127,
      "ems": null
    },
    {
      "latitude": 40.143585,
      "longitude": -8.463928,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 182,
      "squawk": "3260",
      "timestamp": 1703325129,
      "ems": null
    },
    {
      "latitude": 40.142319,
      "longitude": -8.464279,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 195,
      "squawk": "3260",
      "timestamp": 1703325133,
      "ems": null
    },
    {
      "latitude": 40.141434,
      "longitude": -8.464783,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703325136,
      "ems": null
    },
    {
      "latitude": 40.140507,
      "longitude": -8.465528,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 217,
      "squawk": "3260",
      "timestamp": 1703325139,
      "ems": null
    },
    {
      "latitude": 40.139713,
      "longitude": -8.466651,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 228,
      "squawk": "3260",
      "timestamp": 1703325142,
      "ems": null
    },
    {
      "latitude": 40.139099,
      "longitude": -8.467834,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 240,
      "squawk": "3260",
      "timestamp": 1703325145,
      "ems": null
    },
    {
      "latitude": 40.138824,
      "longitude": -8.46875,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 250,
      "squawk": "3260",
      "timestamp": 1703325147,
      "ems": null
    },
    {
      "latitude": 40.138641,
      "longitude": -8.469897,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 264,
      "squawk": "3260",
      "timestamp": 1703325150,
      "ems": null
    },
    {
      "latitude": 40.138737,
      "longitude": -8.471957,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 276,
      "squawk": "3260",
      "timestamp": 1703325154,
      "ems": null
    },
    {
      "latitude": 40.139053,
      "longitude": -8.473267,
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
      "heading": 290,
      "squawk": "3260",
      "timestamp": 1703325157,
      "ems": null
    },
    {
      "latitude": 40.139557,
      "longitude": -8.474548,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 299,
      "squawk": "3260",
      "timestamp": 1703325160,
      "ems": null
    },
    {
      "latitude": 40.140133,
      "longitude": -8.47564,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 308,
      "squawk": "3260",
      "timestamp": 1703325163,
      "ems": null
    },
    {
      "latitude": 40.140747,
      "longitude": -8.476501,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 316,
      "squawk": "3260",
      "timestamp": 1703325166,
      "ems": null
    },
    {
      "latitude": 40.14167,
      "longitude": -8.477575,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 321,
      "squawk": "3260",
      "timestamp": 1703325169,
      "ems": null
    },
    {
      "latitude": 40.142532,
      "longitude": -8.478271,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 329,
      "squawk": "3260",
      "timestamp": 1703325172,
      "ems": null
    },
    {
      "latitude": 40.143486,
      "longitude": -8.478949,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 333,
      "squawk": "3260",
      "timestamp": 1703325175,
      "ems": null
    },
    {
      "latitude": 40.144547,
      "longitude": -8.479553,
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
      "heading": 336,
      "squawk": "3260",
      "timestamp": 1703325178,
      "ems": null
    },
    {
      "latitude": 40.145599,
      "longitude": -8.480103,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 337,
      "squawk": "3260",
      "timestamp": 1703325181,
      "ems": null
    },
    {
      "latitude": 40.146744,
      "longitude": -8.480713,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 338,
      "squawk": "3260",
      "timestamp": 1703325184,
      "ems": null
    },
    {
      "latitude": 40.147812,
      "longitude": -8.481195,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 339,
      "squawk": "3260",
      "timestamp": 1703325187,
      "ems": null
    },
    {
      "latitude": 40.148838,
      "longitude": -8.481757,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 339,
      "squawk": "3260",
      "timestamp": 1703325190,
      "ems": null
    },
    {
      "latitude": 40.149307,
      "longitude": -8.481995,
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
      "heading": 338,
      "squawk": "3260",
      "timestamp": 1703325192,
      "ems": null
    },
    {
      "latitude": 40.150955,
      "longitude": -8.482788,
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
      "heading": 339,
      "squawk": "3260",
      "timestamp": 1703325196,
      "ems": null
    },
    {
      "latitude": 40.152008,
      "longitude": -8.483276,
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
      "heading": 339,
      "squawk": "3260",
      "timestamp": 1703325199,
      "ems": null
    },
    {
      "latitude": 40.153214,
      "longitude": -8.483817,
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
      "heading": 342,
      "squawk": "3260",
      "timestamp": 1703325202,
      "ems": null
    },
    {
      "latitude": 40.154343,
      "longitude": -8.484314,
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
      "heading": 342,
      "squawk": "3260",
      "timestamp": 1703325205,
      "ems": null
    },
    {
      "latitude": 40.15554,
      "longitude": -8.484817,
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
      "heading": 341,
      "squawk": "3260",
      "timestamp": 1703325208,
      "ems": null
    },
    {
      "latitude": 40.159172,
      "longitude": -8.48619,
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
      "heading": 349,
      "squawk": "3260",
      "timestamp": 1703325217,
      "ems": null
    },
    {
      "latitude": 40.160477,
      "longitude": -8.486377,
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
      "heading": 358,
      "squawk": "3260",
      "timestamp": 1703325220,
      "ems": null
    },
    {
      "latitude": 40.161732,
      "longitude": -8.486314,
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
      "heading": 4,
      "squawk": "3260",
      "timestamp": 1703325223,
      "ems": null
    },
    {
      "latitude": 40.163082,
      "longitude": -8.48594,
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
      "heading": 14,
      "squawk": "3260",
      "timestamp": 1703325226,
      "ems": null
    },
    {
      "latitude": 40.164139,
      "longitude": -8.485352,
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
      "heading": 23,
      "squawk": "3260",
      "timestamp": 1703325229,
      "ems": null
    },
    {
      "latitude": 40.165363,
      "longitude": -8.484504,
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
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703325232,
      "ems": null
    },
    {
      "latitude": 40.166248,
      "longitude": -8.48363,
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
      "heading": 39,
      "squawk": "3260",
      "timestamp": 1703325235,
      "ems": null
    },
    {
      "latitude": 40.167297,
      "longitude": -8.482239,
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
      "heading": 45,
      "squawk": "3260",
      "timestamp": 1703325238,
      "ems": null
    },
    {
      "latitude": 40.168076,
      "longitude": -8.481079,
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
      "heading": 50,
      "squawk": "3260",
      "timestamp": 1703325241,
      "ems": null
    },
    {
      "latitude": 40.168854,
      "longitude": -8.479736,
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
      "heading": 53,
      "squawk": "3260",
      "timestamp": 1703325244,
      "ems": null
    },
    {
      "latitude": 40.169552,
      "longitude": -8.478387,
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
      "heading": 56,
      "squawk": "3260",
      "timestamp": 1703325247,
      "ems": null
    },
    {
      "latitude": 40.170273,
      "longitude": -8.476929,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 59,
      "squawk": "3260",
      "timestamp": 1703325250,
      "ems": null
    },
    {
      "latitude": 40.170868,
      "longitude": -8.475464,
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
      "heading": 60,
      "squawk": "3260",
      "timestamp": 1703325253,
      "ems": null
    },
    {
      "latitude": 40.171509,
      "longitude": -8.47406,
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
      "heading": 60,
      "squawk": "3260",
      "timestamp": 1703325256,
      "ems": null
    },
    {
      "latitude": 40.172066,
      "longitude": -8.472769,
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
      "heading": 60,
      "squawk": "3260",
      "timestamp": 1703325259,
      "ems": null
    },
    {
      "latitude": 40.172745,
      "longitude": -8.471191,
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
      "heading": 60,
      "squawk": "3260",
      "timestamp": 1703325262,
      "ems": null
    },
    {
      "latitude": 40.173431,
      "longitude": -8.469666,
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
      "heading": 59,
      "squawk": "3260",
      "timestamp": 1703325265,
      "ems": null
    },
    {
      "latitude": 40.174068,
      "longitude": -8.468337,
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
      "heading": 57,
      "squawk": "3260",
      "timestamp": 1703325268,
      "ems": null
    },
    {
      "latitude": 40.174812,
      "longitude": -8.466901,
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
      "heading": 55,
      "squawk": "3260",
      "timestamp": 1703325272,
      "ems": null
    },
    {
      "latitude": 40.17691,
      "longitude": -8.462906,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 54,
      "squawk": "3260",
      "timestamp": 1703325280,
      "ems": null
    },
    {
      "latitude": 40.177689,
      "longitude": -8.461548,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 54,
      "squawk": "3260",
      "timestamp": 1703325283,
      "ems": null
    },
    {
      "latitude": 40.178375,
      "longitude": -8.460266,
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
      "heading": 54,
      "squawk": "3260",
      "timestamp": 1703325286,
      "ems": null
    },
    {
      "latitude": 40.180206,
      "longitude": -8.45636,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 60,
      "squawk": "3260",
      "timestamp": 1703325295,
      "ems": null
    },
    {
      "latitude": 40.181396,
      "longitude": -8.453552,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 62,
      "squawk": "3260",
      "timestamp": 1703325302,
      "ems": null
    },
    {
      "latitude": 40.181889,
      "longitude": -8.452356,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 62,
      "squawk": "3260",
      "timestamp": 1703325304,
      "ems": null
    },
    {
      "latitude": 40.182495,
      "longitude": -8.450928,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 60,
      "squawk": "3260",
      "timestamp": 1703325308,
      "ems": null
    },
    {
      "latitude": 40.183052,
      "longitude": -8.449673,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 60,
      "squawk": "3260",
      "timestamp": 1703325311,
      "ems": null
    },
    {
      "latitude": 40.183613,
      "longitude": -8.448299,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 60,
      "squawk": "3260",
      "timestamp": 1703325314,
      "ems": null
    },
    {
      "latitude": 40.185379,
      "longitude": -8.444397,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 60,
      "squawk": "3260",
      "timestamp": 1703325323,
      "ems": null
    },
    {
      "latitude": 40.187057,
      "longitude": -8.440558,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 59,
      "squawk": "3260",
      "timestamp": 1703325332,
      "ems": null
    },
    {
      "latitude": 40.189106,
      "longitude": -8.436127,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 58,
      "squawk": "3260",
      "timestamp": 1703325341,
      "ems": null
    },
    {
      "latitude": 40.191422,
      "longitude": -8.431519,
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
      "heading": 55,
      "squawk": "3260",
      "timestamp": 1703325350,
      "ems": null
    },
    {
      "latitude": 40.193668,
      "longitude": -8.42695,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 58,
      "squawk": "3260",
      "timestamp": 1703325359,
      "ems": null
    },
    {
      "latitude": 40.195908,
      "longitude": -8.422058,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 60,
      "squawk": "3260",
      "timestamp": 1703325368,
      "ems": null
    },
    {
      "latitude": 40.19809,
      "longitude": -8.417462,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 56,
      "squawk": "3260",
      "timestamp": 1703325377,
      "ems": null
    },
    {
      "latitude": 40.200325,
      "longitude": -8.413031,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 55,
      "squawk": "3260",
      "timestamp": 1703325386,
      "ems": null
    },
    {
      "latitude": 40.202511,
      "longitude": -8.408099,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 66,
      "squawk": "3260",
      "timestamp": 1703325395,
      "ems": null
    },
    {
      "latitude": 40.202885,
      "longitude": -8.406414,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 78,
      "squawk": "3260",
      "timestamp": 1703325398,
      "ems": null
    },
    {
      "latitude": 40.20293,
      "longitude": -8.404354,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 92,
      "squawk": "3260",
      "timestamp": 1703325401,
      "ems": null
    },
    {
      "latitude": 40.202652,
      "longitude": -8.402606,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "squawk": "3260",
      "timestamp": 1703325404,
      "ems": null
    },
    {
      "latitude": 40.202,
      "longitude": -8.400983,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703325407,
      "ems": null
    },
    {
      "latitude": 40.201023,
      "longitude": -8.399548,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 135,
      "squawk": "3260",
      "timestamp": 1703325410,
      "ems": null
    },
    {
      "latitude": 40.199997,
      "longitude": -8.398486,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 143,
      "squawk": "3260",
      "timestamp": 1703325413,
      "ems": null
    },
    {
      "latitude": 40.198929,
      "longitude": -8.39755,
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
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 145,
      "squawk": "3260",
      "timestamp": 1703325416,
      "ems": null
    },
    {
      "latitude": 40.198013,
      "longitude": -8.396667,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 145,
      "squawk": "3260",
      "timestamp": 1703325419,
      "ems": null
    },
    {
      "latitude": 40.197052,
      "longitude": -8.395813,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 144,
      "squawk": "3260",
      "timestamp": 1703325422,
      "ems": null
    },
    {
      "latitude": 40.196182,
      "longitude": -8.394958,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 144,
      "squawk": "3260",
      "timestamp": 1703325425,
      "ems": null
    },
    {
      "latitude": 40.195129,
      "longitude": -8.393982,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 144,
      "squawk": "3260",
      "timestamp": 1703325428,
      "ems": null
    },
    {
      "latitude": 40.194214,
      "longitude": -8.393127,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 141,
      "squawk": "3260",
      "timestamp": 1703325431,
      "ems": null
    },
    {
      "latitude": 40.193344,
      "longitude": -8.392151,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 138,
      "squawk": "3260",
      "timestamp": 1703325434,
      "ems": null
    },
    {
      "latitude": 40.191757,
      "longitude": -8.390183,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 135,
      "squawk": "3260",
      "timestamp": 1703325440,
      "ems": null
    },
    {
      "latitude": 40.190968,
      "longitude": -8.389185,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 136,
      "squawk": "3260",
      "timestamp": 1703325444,
      "ems": null
    },
    {
      "latitude": 40.190186,
      "longitude": -8.388184,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 135,
      "squawk": "3260",
      "timestamp": 1703325446,
      "ems": null
    },
    {
      "latitude": 40.189339,
      "longitude": -8.387063,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 133,
      "squawk": "3260",
      "timestamp": 1703325450,
      "ems": null
    },
    {
      "latitude": 40.188538,
      "longitude": -8.385864,
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
      "heading": 131,
      "squawk": "3260",
      "timestamp": 1703325453,
      "ems": null
    },
    {
      "latitude": 40.187759,
      "longitude": -8.384705,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 129,
      "squawk": "3260",
      "timestamp": 1703325455,
      "ems": null
    },
    {
      "latitude": 40.187027,
      "longitude": -8.383484,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 127,
      "squawk": "3260",
      "timestamp": 1703325458,
      "ems": null
    },
    {
      "latitude": 40.186295,
      "longitude": -8.382263,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 127,
      "squawk": "3260",
      "timestamp": 1703325461,
      "ems": null
    },
    {
      "latitude": 40.184589,
      "longitude": -8.380134,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 144,
      "squawk": "3260",
      "timestamp": 1703325468,
      "ems": null
    },
    {
      "latitude": 40.18375,
      "longitude": -8.379447,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 149,
      "squawk": "3260",
      "timestamp": 1703325470,
      "ems": null
    },
    {
      "latitude": 40.182632,
      "longitude": -8.378601,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 148,
      "squawk": "3260",
      "timestamp": 1703325473,
      "ems": null
    },
    {
      "latitude": 40.181671,
      "longitude": -8.377808,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 146,
      "squawk": "3260",
      "timestamp": 1703325476,
      "ems": null
    },
    {
      "latitude": 40.180866,
      "longitude": -8.377075,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 141,
      "squawk": "3260",
      "timestamp": 1703325480,
      "ems": null
    },
    {
      "latitude": 40.178493,
      "longitude": -8.373455,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 123,
      "squawk": "3260",
      "timestamp": 1703325489,
      "ems": null
    },
    {
      "latitude": 40.177887,
      "longitude": -8.372144,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 119,
      "squawk": "3260",
      "timestamp": 1703325492,
      "ems": null
    },
    {
      "latitude": 40.177322,
      "longitude": -8.37085,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 118,
      "squawk": "3260",
      "timestamp": 1703325495,
      "ems": null
    },
    {
      "latitude": 40.176727,
      "longitude": -8.369385,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 117,
      "squawk": "3260",
      "timestamp": 1703325498,
      "ems": null
    },
    {
      "latitude": 40.17627,
      "longitude": -8.368164,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 117,
      "squawk": "3260",
      "timestamp": 1703325500,
      "ems": null
    },
    {
      "latitude": 40.175697,
      "longitude": -8.366776,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 117,
      "squawk": "3260",
      "timestamp": 1703325503,
      "ems": null
    },
    {
      "latitude": 40.175095,
      "longitude": -8.365402,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703325506,
      "ems": null
    },
    {
      "latitude": 40.174397,
      "longitude": -8.363967,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 122,
      "squawk": "3260",
      "timestamp": 1703325510,
      "ems": null
    },
    {
      "latitude": 40.173752,
      "longitude": -8.36261,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 122,
      "squawk": "3260",
      "timestamp": 1703325513,
      "ems": null
    },
    {
      "latitude": 40.173111,
      "longitude": -8.361267,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 122,
      "squawk": "3260",
      "timestamp": 1703325516,
      "ems": null
    },
    {
      "latitude": 40.171188,
      "longitude": -8.357056,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 119,
      "squawk": "3260",
      "timestamp": 1703325525,
      "ems": null
    },
    {
      "latitude": 40.169312,
      "longitude": -8.352783,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703325534,
      "ems": null
    },
    {
      "latitude": 40.167206,
      "longitude": -8.348206,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703325543,
      "ems": null
    },
    {
      "latitude": 40.164898,
      "longitude": -8.34343,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703325552,
      "ems": null
    },
    {
      "latitude": 40.162766,
      "longitude": -8.338745,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703325561,
      "ems": null
    },
    {
      "latitude": 40.160614,
      "longitude": -8.334253,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703325570,
      "ems": null
    },
    {
      "latitude": 40.159286,
      "longitude": -8.330994,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 116,
      "squawk": "3260",
      "timestamp": 1703325576,
      "ems": null
    },
    {
      "latitude": 40.158707,
      "longitude": -8.329385,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 114,
      "squawk": "3260",
      "timestamp": 1703325579,
      "ems": null
    },
    {
      "latitude": 40.15815,
      "longitude": -8.327824,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 115,
      "squawk": "3260",
      "timestamp": 1703325582,
      "ems": null
    },
    {
      "latitude": 40.156147,
      "longitude": -8.322892,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "squawk": "3260",
      "timestamp": 1703325591,
      "ems": null
    },
    {
      "latitude": 40.154007,
      "longitude": -8.318149,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703325600,
      "ems": null
    },
    {
      "latitude": 40.152008,
      "longitude": -8.31366,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 119,
      "squawk": "3260",
      "timestamp": 1703325609,
      "ems": null
    },
    {
      "latitude": 40.150467,
      "longitude": -8.310221,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703325615,
      "ems": null
    },
    {
      "latitude": 40.148392,
      "longitude": -8.305725,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703325624,
      "ems": null
    },
    {
      "latitude": 40.146046,
      "longitude": -8.300858,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 123,
      "squawk": "3260",
      "timestamp": 1703325634,
      "ems": null
    },
    {
      "latitude": 40.145233,
      "longitude": -8.299377,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703325636,
      "ems": null
    },
    {
      "latitude": 40.144409,
      "longitude": -8.297913,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703325639,
      "ems": null
    },
    {
      "latitude": 40.143623,
      "longitude": -8.296426,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 126,
      "squawk": "3260",
      "timestamp": 1703325643,
      "ems": null
    },
    {
      "latitude": 40.142788,
      "longitude": -8.29499,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "squawk": "3260",
      "timestamp": 1703325645,
      "ems": null
    },
    {
      "latitude": 40.140411,
      "longitude": -8.290371,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 123,
      "squawk": "3260",
      "timestamp": 1703325655,
      "ems": null
    },
    {
      "latitude": 40.138046,
      "longitude": -8.285889,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "squawk": "3260",
      "timestamp": 1703325663,
      "ems": null
    },
    {
      "latitude": 40.13562,
      "longitude": -8.281372,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703325672,
      "ems": null
    },
    {
      "latitude": 40.13324,
      "longitude": -8.276672,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703325682,
      "ems": null
    },
    {
      "latitude": 40.131054,
      "longitude": -8.272143,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703325691,
      "ems": null
    },
    {
      "latitude": 40.130356,
      "longitude": -8.270645,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 119,
      "squawk": "3260",
      "timestamp": 1703325694,
      "ems": null
    },
    {
      "latitude": 40.129807,
      "longitude": -8.269165,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3260",
      "timestamp": 1703325697,
      "ems": null
    },
    {
      "latitude": 40.129395,
      "longitude": -8.267944,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 113,
      "squawk": "3260",
      "timestamp": 1703325699,
      "ems": null
    },
    {
      "latitude": 40.128937,
      "longitude": -8.266418,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 110,
      "squawk": "3260",
      "timestamp": 1703325703,
      "ems": null
    },
    {
      "latitude": 40.128525,
      "longitude": -8.265076,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 110,
      "squawk": "3260",
      "timestamp": 1703325706,
      "ems": null
    },
    {
      "latitude": 40.128216,
      "longitude": -8.263841,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 108,
      "squawk": "3260",
      "timestamp": 1703325709,
      "ems": null
    },
    {
      "latitude": 40.127888,
      "longitude": -8.26253,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 106,
      "squawk": "3260",
      "timestamp": 1703325712,
      "ems": null
    },
    {
      "latitude": 40.127609,
      "longitude": -8.261108,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 103,
      "squawk": "3260",
      "timestamp": 1703325715,
      "ems": null
    },
    {
      "latitude": 40.127426,
      "longitude": -8.259888,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 100,
      "squawk": "3260",
      "timestamp": 1703325718,
      "ems": null
    },
    {
      "latitude": 40.127239,
      "longitude": -8.258535,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 99,
      "squawk": "3260",
      "timestamp": 1703325721,
      "ems": null
    },
    {
      "latitude": 40.127106,
      "longitude": -8.257202,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 97,
      "squawk": "3260",
      "timestamp": 1703325724,
      "ems": null
    },
    {
      "latitude": 40.127014,
      "longitude": -8.256165,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 94,
      "squawk": "3260",
      "timestamp": 1703325727,
      "ems": null
    },
    {
      "latitude": 40.126968,
      "longitude": -8.254639,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 93,
      "squawk": "3260",
      "timestamp": 1703325730,
      "ems": null
    },
    {
      "latitude": 40.126923,
      "longitude": -8.253296,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 92,
      "squawk": "3260",
      "timestamp": 1703325733,
      "ems": null
    },
    {
      "latitude": 40.126865,
      "longitude": -8.252231,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 90,
      "squawk": "3260",
      "timestamp": 1703325736,
      "ems": null
    },
    {
      "latitude": 40.126911,
      "longitude": -8.250919,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 88,
      "squawk": "3260",
      "timestamp": 1703325739,
      "ems": null
    },
    {
      "latitude": 40.126923,
      "longitude": -8.249634,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 87,
      "squawk": "3260",
      "timestamp": 1703325742,
      "ems": null
    },
    {
      "latitude": 40.127007,
      "longitude": -8.248361,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 85,
      "squawk": "3260",
      "timestamp": 1703325745,
      "ems": null
    },
    {
      "latitude": 40.12706,
      "longitude": -8.247253,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 84,
      "squawk": "3260",
      "timestamp": 1703325748,
      "ems": null
    },
    {
      "latitude": 40.12719,
      "longitude": -8.245864,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 84,
      "squawk": "3260",
      "timestamp": 1703325751,
      "ems": null
    },
    {
      "latitude": 40.127243,
      "longitude": -8.244751,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 84,
      "squawk": "3260",
      "timestamp": 1703325754,
      "ems": null
    },
    {
      "latitude": 40.127335,
      "longitude": -8.24353,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 85,
      "squawk": "3260",
      "timestamp": 1703325757,
      "ems": null
    },
    {
      "latitude": 40.127377,
      "longitude": -8.239808,
      "altitude": {
        "feet": 4200,
        "meters": 1280
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 88,
      "squawk": "3260",
      "timestamp": 1703325766,
      "ems": null
    },
    {
      "latitude": 40.127563,
      "longitude": -8.236206,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 85,
      "squawk": "3260",
      "timestamp": 1703325775,
      "ems": null
    },
    {
      "latitude": 40.127705,
      "longitude": -8.232505,
      "altitude": {
        "feet": 4300,
        "meters": 1311
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
      "heading": 84,
      "squawk": "3260",
      "timestamp": 1703325784,
      "ems": null
    },
    {
      "latitude": 40.127838,
      "longitude": -8.231262,
      "altitude": {
        "feet": 4300,
        "meters": 1311
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
      "heading": 79,
      "squawk": "3260",
      "timestamp": 1703325787,
      "ems": null
    },
    {
      "latitude": 40.128067,
      "longitude": -8.230103,
      "altitude": {
        "feet": 4400,
        "meters": 1341
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
      "heading": 74,
      "squawk": "3260",
      "timestamp": 1703325790,
      "ems": null
    },
    {
      "latitude": 40.128433,
      "longitude": -8.228882,
      "altitude": {
        "feet": 4400,
        "meters": 1341
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
      "heading": 68,
      "squawk": "3260",
      "timestamp": 1703325793,
      "ems": null
    },
    {
      "latitude": 40.128708,
      "longitude": -8.227905,
      "altitude": {
        "feet": 4400,
        "meters": 1341
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 68,
      "squawk": "3260",
      "timestamp": 1703325796,
      "ems": null
    },
    {
      "latitude": 40.12912,
      "longitude": -8.226624,
      "altitude": {
        "feet": 4400,
        "meters": 1341
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
      "heading": 67,
      "squawk": "3260",
      "timestamp": 1703325799,
      "ems": null
    },
    {
      "latitude": 40.12944,
      "longitude": -8.225586,
      "altitude": {
        "feet": 4500,
        "meters": 1372
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 67,
      "squawk": "3260",
      "timestamp": 1703325802,
      "ems": null
    },
    {
      "latitude": 40.129761,
      "longitude": -8.224426,
      "altitude": {
        "feet": 4500,
        "meters": 1372
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
      "heading": 70,
      "squawk": "3260",
      "timestamp": 1703325805,
      "ems": null
    },
    {
      "latitude": 40.130077,
      "longitude": -8.223142,
      "altitude": {
        "feet": 4500,
        "meters": 1372
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
      "heading": 73,
      "squawk": "3260",
      "timestamp": 1703325808,
      "ems": null
    },
    {
      "latitude": 40.130356,
      "longitude": -8.221863,
      "altitude": {
        "feet": 4600,
        "meters": 1402
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
      "heading": 74,
      "squawk": "3260",
      "timestamp": 1703325811,
      "ems": null
    },
    {
      "latitude": 40.130589,
      "longitude": -8.220707,
      "altitude": {
        "feet": 4600,
        "meters": 1402
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
      "heading": 74,
      "squawk": "3260",
      "timestamp": 1703325814,
      "ems": null
    },
    {
      "latitude": 40.130997,
      "longitude": -8.218384,
      "altitude": {
        "feet": 4600,
        "meters": 1402
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
      "heading": 78,
      "squawk": "3260",
      "timestamp": 1703325820,
      "ems": null
    },
    {
      "latitude": 40.13118,
      "longitude": -8.217163,
      "altitude": {
        "feet": 4700,
        "meters": 1433
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
      "heading": 80,
      "squawk": "3260",
      "timestamp": 1703325823,
      "ems": null
    },
    {
      "latitude": 40.131332,
      "longitude": -8.216088,
      "altitude": {
        "feet": 4700,
        "meters": 1433
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
      "heading": 81,
      "squawk": "3260",
      "timestamp": 1703325826,
      "ems": null
    },
    {
      "latitude": 40.131474,
      "longitude": -8.21484,
      "altitude": {
        "feet": 4700,
        "meters": 1433
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
      "heading": 81,
      "squawk": "3260",
      "timestamp": 1703325829,
      "ems": null
    },
    {
      "latitude": 40.131592,
      "longitude": -8.213684,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 81,
      "squawk": "3260",
      "timestamp": 1703325832,
      "ems": null
    },
    {
      "latitude": 40.131729,
      "longitude": -8.212341,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 82,
      "squawk": "3260",
      "timestamp": 1703325835,
      "ems": null
    },
    {
      "latitude": 40.131821,
      "longitude": -8.211182,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 84,
      "squawk": "3260",
      "timestamp": 1703325838,
      "ems": null
    },
    {
      "latitude": 40.131893,
      "longitude": -8.210033,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 85,
      "squawk": "3260",
      "timestamp": 1703325841,
      "ems": null
    },
    {
      "latitude": 40.131912,
      "longitude": -8.208801,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 90,
      "squawk": "3260",
      "timestamp": 1703325844,
      "ems": null
    },
    {
      "latitude": 40.131847,
      "longitude": -8.207536,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 93,
      "squawk": "3260",
      "timestamp": 1703325847,
      "ems": null
    },
    {
      "latitude": 40.131775,
      "longitude": -8.20636,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 94,
      "squawk": "3260",
      "timestamp": 1703325850,
      "ems": null
    },
    {
      "latitude": 40.131706,
      "longitude": -8.205039,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 94,
      "squawk": "3260",
      "timestamp": 1703325854,
      "ems": null
    },
    {
      "latitude": 40.131615,
      "longitude": -8.203916,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 93,
      "squawk": "3260",
      "timestamp": 1703325856,
      "ems": null
    },
    {
      "latitude": 40.131546,
      "longitude": -8.202209,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 92,
      "squawk": "3260",
      "timestamp": 1703325860,
      "ems": null
    },
    {
      "latitude": 40.131474,
      "longitude": -8.200857,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 92,
      "squawk": "3260",
      "timestamp": 1703325863,
      "ems": null
    },
    {
      "latitude": 40.131409,
      "longitude": -8.199524,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 93,
      "squawk": "3260",
      "timestamp": 1703325865,
      "ems": null
    },
    {
      "latitude": 40.131317,
      "longitude": -8.197998,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 94,
      "squawk": "3260",
      "timestamp": 1703325868,
      "ems": null
    },
    {
      "latitude": 40.131195,
      "longitude": -8.196425,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 96,
      "squawk": "3260",
      "timestamp": 1703325872,
      "ems": null
    },
    {
      "latitude": 40.131054,
      "longitude": -8.194927,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 96,
      "squawk": "3260",
      "timestamp": 1703325875,
      "ems": null
    },
    {
      "latitude": 40.130905,
      "longitude": -8.193359,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 98,
      "squawk": "3260",
      "timestamp": 1703325878,
      "ems": null
    },
    {
      "latitude": 40.130722,
      "longitude": -8.191833,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 99,
      "squawk": "3260",
      "timestamp": 1703325881,
      "ems": null
    },
    {
      "latitude": 40.129852,
      "longitude": -8.183533,
      "altitude": {
        "feet": 5100,
        "meters": 1554
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
      "heading": 98,
      "squawk": "3260",
      "timestamp": 1703325896,
      "ems": null
    },
    {
      "latitude": 40.128937,
      "longitude": -8.175171,
      "altitude": {
        "feet": 5100,
        "meters": 1554
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
      "heading": 98,
      "squawk": "3260",
      "timestamp": 1703325911,
      "ems": null
    },
    {
      "latitude": 40.12775,
      "longitude": -8.1669,
      "altitude": {
        "feet": 5200,
        "meters": 1585
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
      "heading": 100,
      "squawk": "3260",
      "timestamp": 1703325926,
      "ems": null
    },
    {
      "latitude": 40.126446,
      "longitude": -8.158972,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 104,
      "squawk": "3260",
      "timestamp": 1703325941,
      "ems": null
    },
    {
      "latitude": 40.124958,
      "longitude": -8.153229,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 114,
      "squawk": "3260",
      "timestamp": 1703325953,
      "ems": null
    },
    {
      "latitude": 40.124359,
      "longitude": -8.151733,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703325956,
      "ems": null
    },
    {
      "latitude": 40.123535,
      "longitude": -8.150208,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 124,
      "squawk": "3260",
      "timestamp": 1703325959,
      "ems": null
    },
    {
      "latitude": 40.122955,
      "longitude": -8.149047,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 123,
      "squawk": "3260",
      "timestamp": 1703325962,
      "ems": null
    },
    {
      "latitude": 40.122162,
      "longitude": -8.1474,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703325965,
      "ems": null
    },
    {
      "latitude": 40.121513,
      "longitude": -8.145988,
      "altitude": {
        "feet": 5500,
        "meters": 1676
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 122,
      "squawk": "3260",
      "timestamp": 1703325968,
      "ems": null
    },
    {
      "latitude": 40.120766,
      "longitude": -8.144489,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 122,
      "squawk": "3260",
      "timestamp": 1703325971,
      "ems": null
    },
    {
      "latitude": 40.120102,
      "longitude": -8.143066,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703325974,
      "ems": null
    },
    {
      "latitude": 40.119465,
      "longitude": -8.141806,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703325977,
      "ems": null
    },
    {
      "latitude": 40.118683,
      "longitude": -8.140137,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703325980,
      "ems": null
    },
    {
      "latitude": 40.114994,
      "longitude": -8.132816,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 124,
      "squawk": "3260",
      "timestamp": 1703325995,
      "ems": null
    },
    {
      "latitude": 40.112202,
      "longitude": -8.127074,
      "altitude": {
        "feet": 5600,
        "meters": 1707
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
      "heading": 118,
      "squawk": "3260",
      "timestamp": 1703326007,
      "ems": null
    },
    {
      "latitude": 40.108978,
      "longitude": -8.119202,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "squawk": "3260",
      "timestamp": 1703326022,
      "ems": null
    },
    {
      "latitude": 40.105591,
      "longitude": -8.11145,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703326037,
      "ems": null
    },
    {
      "latitude": 40.102055,
      "longitude": -8.103603,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703326052,
      "ems": null
    },
    {
      "latitude": 40.098221,
      "longitude": -8.095581,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "squawk": "3260",
      "timestamp": 1703326068,
      "ems": null
    },
    {
      "latitude": 40.094372,
      "longitude": -8.087873,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703326083,
      "ems": null
    },
    {
      "latitude": 40.090897,
      "longitude": -8.079956,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703326098,
      "ems": null
    },
    {
      "latitude": 40.089622,
      "longitude": -8.076699,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "squawk": "3260",
      "timestamp": 1703326104,
      "ems": null
    },
    {
      "latitude": 40.089111,
      "longitude": -8.075012,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 109,
      "squawk": "3260",
      "timestamp": 1703326107,
      "ems": null
    },
    {
      "latitude": 40.088654,
      "longitude": -8.073303,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 108,
      "squawk": "3260",
      "timestamp": 1703326110,
      "ems": null
    },
    {
      "latitude": 40.088287,
      "longitude": -8.071838,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 108,
      "squawk": "3260",
      "timestamp": 1703326112,
      "ems": null
    },
    {
      "latitude": 40.086365,
      "longitude": -8.064963,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 110,
      "squawk": "3260",
      "timestamp": 1703326125,
      "ems": null
    },
    {
      "latitude": 40.083851,
      "longitude": -8.056599,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 112,
      "squawk": "3260",
      "timestamp": 1703326140,
      "ems": null
    },
    {
      "latitude": 40.081284,
      "longitude": -8.048645,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 112,
      "squawk": "3260",
      "timestamp": 1703326154,
      "ems": null
    },
    {
      "latitude": 40.078499,
      "longitude": -8.040369,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 113,
      "squawk": "3260",
      "timestamp": 1703326170,
      "ems": null
    },
    {
      "latitude": 40.075611,
      "longitude": -8.032004,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 114,
      "squawk": "3260",
      "timestamp": 1703326185,
      "ems": null
    },
    {
      "latitude": 40.073143,
      "longitude": -8.023952,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 111,
      "squawk": "3260",
      "timestamp": 1703326200,
      "ems": null
    },
    {
      "latitude": 40.070343,
      "longitude": -8.015869,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "squawk": "3260",
      "timestamp": 1703326215,
      "ems": null
    },
    {
      "latitude": 40.068161,
      "longitude": -8.009158,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 112,
      "squawk": "3260",
      "timestamp": 1703326227,
      "ems": null
    },
    {
      "latitude": 40.065262,
      "longitude": -8.001038,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 116,
      "squawk": "3260",
      "timestamp": 1703326243,
      "ems": null
    },
    {
      "latitude": 40.062103,
      "longitude": -7.992676,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 115,
      "squawk": "3260",
      "timestamp": 1703326258,
      "ems": null
    },
    {
      "latitude": 40.059177,
      "longitude": -7.984751,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 115,
      "squawk": "3260",
      "timestamp": 1703326272,
      "ems": null
    },
    {
      "latitude": 40.056431,
      "longitude": -7.976449,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 112,
      "squawk": "3260",
      "timestamp": 1703326288,
      "ems": null
    },
    {
      "latitude": 40.05378,
      "longitude": -7.968209,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 113,
      "squawk": "3260",
      "timestamp": 1703326303,
      "ems": null
    },
    {
      "latitude": 40.051033,
      "longitude": -7.960281,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "squawk": "3260",
      "timestamp": 1703326317,
      "ems": null
    },
    {
      "latitude": 40.048141,
      "longitude": -7.952087,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 114,
      "squawk": "3260",
      "timestamp": 1703326333,
      "ems": null
    },
    {
      "latitude": 40.045303,
      "longitude": -7.944031,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 113,
      "squawk": "3260",
      "timestamp": 1703326347,
      "ems": null
    },
    {
      "latitude": 40.042465,
      "longitude": -7.935913,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 114,
      "squawk": "3260",
      "timestamp": 1703326363,
      "ems": null
    },
    {
      "latitude": 40.040497,
      "longitude": -7.931152,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703326372,
      "ems": null
    },
    {
      "latitude": 40.039627,
      "longitude": -7.929757,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "squawk": "3260",
      "timestamp": 1703326375,
      "ems": null
    },
    {
      "latitude": 40.038788,
      "longitude": -7.928696,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 135,
      "squawk": "3260",
      "timestamp": 1703326378,
      "ems": null
    },
    {
      "latitude": 40.037842,
      "longitude": -7.927612,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 138,
      "squawk": "3260",
      "timestamp": 1703326381,
      "ems": null
    },
    {
      "latitude": 40.036739,
      "longitude": -7.926448,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 141,
      "squawk": "3260",
      "timestamp": 1703326384,
      "ems": null
    },
    {
      "latitude": 40.035576,
      "longitude": -7.925262,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 144,
      "squawk": "3260",
      "timestamp": 1703326387,
      "ems": null
    },
    {
      "latitude": 40.034409,
      "longitude": -7.924255,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 145,
      "squawk": "3260",
      "timestamp": 1703326390,
      "ems": null
    },
    {
      "latitude": 40.033295,
      "longitude": -7.923265,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 145,
      "squawk": "3260",
      "timestamp": 1703326393,
      "ems": null
    },
    {
      "latitude": 40.03212,
      "longitude": -7.92218,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 144,
      "squawk": "3260",
      "timestamp": 1703326396,
      "ems": null
    },
    {
      "latitude": 40.030975,
      "longitude": -7.921082,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 143,
      "squawk": "3260",
      "timestamp": 1703326399,
      "ems": null
    },
    {
      "latitude": 40.03038,
      "longitude": -7.920471,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 144,
      "squawk": "3260",
      "timestamp": 1703326402,
      "ems": null
    },
    {
      "latitude": 40.028641,
      "longitude": -7.918895,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 145,
      "squawk": "3260",
      "timestamp": 1703326405,
      "ems": null
    },
    {
      "latitude": 40.027431,
      "longitude": -7.917897,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 146,
      "squawk": "3260",
      "timestamp": 1703326408,
      "ems": null
    },
    {
      "latitude": 40.024498,
      "longitude": -7.9149,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 133,
      "squawk": "3260",
      "timestamp": 1703326417,
      "ems": null
    },
    {
      "latitude": 40.02338,
      "longitude": -7.913153,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 128,
      "squawk": "3260",
      "timestamp": 1703326420,
      "ems": null
    },
    {
      "latitude": 40.022449,
      "longitude": -7.911654,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 128,
      "squawk": "3260",
      "timestamp": 1703326423,
      "ems": null
    },
    {
      "latitude": 40.021637,
      "longitude": -7.910278,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 129,
      "squawk": "3260",
      "timestamp": 1703326426,
      "ems": null
    },
    {
      "latitude": 40.020767,
      "longitude": -7.908875,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 128,
      "squawk": "3260",
      "timestamp": 1703326429,
      "ems": null
    },
    {
      "latitude": 40.020172,
      "longitude": -7.907959,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 128,
      "squawk": "3260",
      "timestamp": 1703326432,
      "ems": null
    },
    {
      "latitude": 40.019073,
      "longitude": -7.906189,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 128,
      "squawk": "3260",
      "timestamp": 1703326435,
      "ems": null
    },
    {
      "latitude": 40.018341,
      "longitude": -7.905029,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 127,
      "squawk": "3260",
      "timestamp": 1703326438,
      "ems": null
    },
    {
      "latitude": 40.01738,
      "longitude": -7.90332,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 127,
      "squawk": "3260",
      "timestamp": 1703326441,
      "ems": null
    },
    {
      "latitude": 40.013397,
      "longitude": -7.896179,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 126,
      "squawk": "3260",
      "timestamp": 1703326456,
      "ems": null
    },
    {
      "latitude": 40.009041,
      "longitude": -7.889307,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 130,
      "squawk": "3260",
      "timestamp": 1703326471,
      "ems": null
    },
    {
      "latitude": 40.004471,
      "longitude": -7.88269,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 132,
      "squawk": "3260",
      "timestamp": 1703326487,
      "ems": null
    },
    {
      "latitude": 40.000534,
      "longitude": -7.87561,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703326501,
      "ems": null
    },
    {
      "latitude": 39.996552,
      "longitude": -7.868591,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 131,
      "squawk": "3260",
      "timestamp": 1703326517,
      "ems": null
    },
    {
      "latitude": 39.992935,
      "longitude": -7.863586,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 134,
      "squawk": "3260",
      "timestamp": 1703326528,
      "ems": null
    },
    {
      "latitude": 39.991909,
      "longitude": -7.862278,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 135,
      "squawk": "3260",
      "timestamp": 1703326532,
      "ems": null
    },
    {
      "latitude": 39.990887,
      "longitude": -7.860905,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 135,
      "squawk": "3260",
      "timestamp": 1703326535,
      "ems": null
    },
    {
      "latitude": 39.98996,
      "longitude": -7.859741,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 135,
      "squawk": "3260",
      "timestamp": 1703326538,
      "ems": null
    },
    {
      "latitude": 39.984928,
      "longitude": -7.853415,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 136,
      "squawk": "3260",
      "timestamp": 1703326553,
      "ems": null
    },
    {
      "latitude": 39.980179,
      "longitude": -7.847359,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 134,
      "squawk": "3260",
      "timestamp": 1703326568,
      "ems": null
    },
    {
      "latitude": 39.975128,
      "longitude": -7.840759,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 134,
      "squawk": "3260",
      "timestamp": 1703326583,
      "ems": null
    },
    {
      "latitude": 39.970497,
      "longitude": -7.834313,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 131,
      "squawk": "3260",
      "timestamp": 1703326598,
      "ems": null
    },
    {
      "latitude": 39.96579,
      "longitude": -7.827637,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 134,
      "squawk": "3260",
      "timestamp": 1703326613,
      "ems": null
    },
    {
      "latitude": 39.961258,
      "longitude": -7.82196,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 136,
      "squawk": "3260",
      "timestamp": 1703326626,
      "ems": null
    },
    {
      "latitude": 39.956066,
      "longitude": -7.815773,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "squawk": "3260",
      "timestamp": 1703326641,
      "ems": null
    },
    {
      "latitude": 39.951084,
      "longitude": -7.809407,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 133,
      "squawk": "3260",
      "timestamp": 1703326657,
      "ems": null
    },
    {
      "latitude": 39.946476,
      "longitude": -7.802727,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 130,
      "squawk": "3260",
      "timestamp": 1703326672,
      "ems": null
    },
    {
      "latitude": 39.942287,
      "longitude": -7.796236,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 130,
      "squawk": "3260",
      "timestamp": 1703326686,
      "ems": null
    },
    {
      "latitude": 39.937592,
      "longitude": -7.789307,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 130,
      "squawk": "3260",
      "timestamp": 1703326702,
      "ems": null
    },
    {
      "latitude": 39.93372,
      "longitude": -7.783377,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 137,
      "squawk": "3260",
      "timestamp": 1703326717,
      "ems": null
    },
    {
      "latitude": 39.929855,
      "longitude": -7.779319,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 143,
      "squawk": "3260",
      "timestamp": 1703326726,
      "ems": null
    },
    {
      "latitude": 39.928925,
      "longitude": -7.778445,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 144,
      "squawk": "3260",
      "timestamp": 1703326729,
      "ems": null
    },
    {
      "latitude": 39.927795,
      "longitude": -7.777466,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 146,
      "squawk": "3260",
      "timestamp": 1703326732,
      "ems": null
    },
    {
      "latitude": 39.926598,
      "longitude": -7.77651,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 148,
      "squawk": "3260",
      "timestamp": 1703326735,
      "ems": null
    },
    {
      "latitude": 39.926239,
      "longitude": -7.776245,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 149,
      "squawk": "3260",
      "timestamp": 1703326736,
      "ems": null
    },
    {
      "latitude": 39.924866,
      "longitude": -7.775208,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 150,
      "squawk": "3260",
      "timestamp": 1703326740,
      "ems": null
    },
    {
      "latitude": 39.922989,
      "longitude": -7.773926,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 152,
      "squawk": "3260",
      "timestamp": 1703326744,
      "ems": null
    },
    {
      "latitude": 39.921753,
      "longitude": -7.773126,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 154,
      "squawk": "3260",
      "timestamp": 1703326747,
      "ems": null
    },
    {
      "latitude": 39.920547,
      "longitude": -7.7724,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 157,
      "squawk": "3260",
      "timestamp": 1703326750,
      "ems": null
    },
    {
      "latitude": 39.919289,
      "longitude": -7.77179,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 160,
      "squawk": "3260",
      "timestamp": 1703326753,
      "ems": null
    },
    {
      "latitude": 39.917984,
      "longitude": -7.77124,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 160,
      "squawk": "3260",
      "timestamp": 1703326756,
      "ems": null
    },
    {
      "latitude": 39.916821,
      "longitude": -7.770691,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 160,
      "squawk": "3260",
      "timestamp": 1703326759,
      "ems": null
    },
    {
      "latitude": 39.915424,
      "longitude": -7.77002,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 159,
      "squawk": "3260",
      "timestamp": 1703326762,
      "ems": null
    },
    {
      "latitude": 39.9142,
      "longitude": -7.769424,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 159,
      "squawk": "3260",
      "timestamp": 1703326764,
      "ems": null
    },
    {
      "latitude": 39.912773,
      "longitude": -7.768799,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 161,
      "squawk": "3260",
      "timestamp": 1703326768,
      "ems": null
    },
    {
      "latitude": 39.911469,
      "longitude": -7.76825,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 163,
      "squawk": "3260",
      "timestamp": 1703326771,
      "ems": null
    },
    {
      "latitude": 39.910305,
      "longitude": -7.767822,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 165,
      "squawk": "3260",
      "timestamp": 1703326774,
      "ems": null
    },
    {
      "latitude": 39.908768,
      "longitude": -7.767395,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 167,
      "squawk": "3260",
      "timestamp": 1703326777,
      "ems": null
    },
    {
      "latitude": 39.902206,
      "longitude": -7.765423,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 166,
      "squawk": "3260",
      "timestamp": 1703326792,
      "ems": null
    },
    {
      "latitude": 39.895386,
      "longitude": -7.762975,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 163,
      "squawk": "3260",
      "timestamp": 1703326807,
      "ems": null
    },
    {
      "latitude": 39.889076,
      "longitude": -7.760376,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 160,
      "squawk": "3260",
      "timestamp": 1703326822,
      "ems": null
    },
    {
      "latitude": 39.882698,
      "longitude": -7.757263,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 159,
      "squawk": "3260",
      "timestamp": 1703326837,
      "ems": null
    },
    {
      "latitude": 39.877533,
      "longitude": -7.754883,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 160,
      "squawk": "3260",
      "timestamp": 1703326849,
      "ems": null
    },
    {
      "latitude": 39.870895,
      "longitude": -7.751929,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 162,
      "squawk": "3260",
      "timestamp": 1703326864,
      "ems": null
    },
    {
      "latitude": 39.864395,
      "longitude": -7.749183,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 160,
      "squawk": "3260",
      "timestamp": 1703326879,
      "ems": null
    },
    {
      "latitude": 39.858444,
      "longitude": -7.746436,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 160,
      "squawk": "3260",
      "timestamp": 1703326892,
      "ems": null
    },
    {
      "latitude": 39.852161,
      "longitude": -7.743408,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 158,
      "squawk": "3260",
      "timestamp": 1703326907,
      "ems": null
    },
    {
      "latitude": 39.84581,
      "longitude": -7.740047,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 158,
      "squawk": "3260",
      "timestamp": 1703326923,
      "ems": null
    },
    {
      "latitude": 39.840729,
      "longitude": -7.737719,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 161,
      "squawk": "3260",
      "timestamp": 1703326935,
      "ems": null
    },
    {
      "latitude": 39.834656,
      "longitude": -7.735107,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 161,
      "squawk": "3260",
      "timestamp": 1703326951,
      "ems": null
    },
    {
      "latitude": 39.828606,
      "longitude": -7.732422,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 160,
      "squawk": "3260",
      "timestamp": 1703326965,
      "ems": null
    },
    {
      "latitude": 39.822227,
      "longitude": -7.729309,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 159,
      "squawk": "3260",
      "timestamp": 1703326981,
      "ems": null
    },
    {
      "latitude": 39.815872,
      "longitude": -7.726254,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 157,
      "squawk": "3260",
      "timestamp": 1703326996,
      "ems": null
    },
    {
      "latitude": 39.809799,
      "longitude": -7.7229,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 154,
      "squawk": "3260",
      "timestamp": 1703327011,
      "ems": null
    },
    {
      "latitude": 39.80505,
      "longitude": -7.71991,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 155,
      "squawk": "3260",
      "timestamp": 1703327023,
      "ems": null
    },
    {
      "latitude": 39.799255,
      "longitude": -7.71688,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 159,
      "squawk": "3260",
      "timestamp": 1703327037,
      "ems": null
    },
    {
      "latitude": 39.792759,
      "longitude": -7.71405,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 165,
      "squawk": "3260",
      "timestamp": 1703327053,
      "ems": null
    },
    {
      "latitude": 39.789825,
      "longitude": -7.713135,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 167,
      "squawk": "3260",
      "timestamp": 1703327059,
      "ems": null
    },
    {
      "latitude": 39.788452,
      "longitude": -7.71276,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 168,
      "squawk": "3260",
      "timestamp": 1703327062,
      "ems": null
    },
    {
      "latitude": 39.784927,
      "longitude": -7.711805,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 168,
      "squawk": "3260",
      "timestamp": 1703327070,
      "ems": null
    },
    {
      "latitude": 39.777771,
      "longitude": -7.709656,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 167,
      "squawk": "3260",
      "timestamp": 1703327086,
      "ems": null
    },
    {
      "latitude": 39.771114,
      "longitude": -7.707886,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 169,
      "squawk": "3260",
      "timestamp": 1703327101,
      "ems": null
    },
    {
      "latitude": 39.764736,
      "longitude": -7.706604,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 171,
      "squawk": "3260",
      "timestamp": 1703327116,
      "ems": null
    },
    {
      "latitude": 39.757645,
      "longitude": -7.705237,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 167,
      "squawk": "3260",
      "timestamp": 1703327132,
      "ems": null
    },
    {
      "latitude": 39.751095,
      "longitude": -7.703369,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 167,
      "squawk": "3260",
      "timestamp": 1703327147,
      "ems": null
    },
    {
      "latitude": 39.746021,
      "longitude": -7.701721,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 165,
      "squawk": "3260",
      "timestamp": 1703327159,
      "ems": null
    },
    {
      "latitude": 39.7397,
      "longitude": -7.699446,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 163,
      "squawk": "3260",
      "timestamp": 1703327174,
      "ems": null
    },
    {
      "latitude": 39.734528,
      "longitude": -7.697475,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 163,
      "squawk": "3260",
      "timestamp": 1703327186,
      "ems": null
    },
    {
      "latitude": 39.728146,
      "longitude": -7.695007,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 163,
      "squawk": "3260",
      "timestamp": 1703327201,
      "ems": null
    },
    {
      "latitude": 39.721802,
      "longitude": -7.6924,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 162,
      "squawk": "3260",
      "timestamp": 1703327217,
      "ems": null
    },
    {
      "latitude": 39.715485,
      "longitude": -7.689575,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 159,
      "squawk": "3260",
      "timestamp": 1703327232,
      "ems": null
    },
    {
      "latitude": 39.709305,
      "longitude": -7.686131,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 156,
      "squawk": "3260",
      "timestamp": 1703327247,
      "ems": null
    },
    {
      "latitude": 39.703472,
      "longitude": -7.682739,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 153,
      "squawk": "3260",
      "timestamp": 1703327262,
      "ems": null
    },
    {
      "latitude": 39.697678,
      "longitude": -7.679085,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 156,
      "squawk": "3260",
      "timestamp": 1703327277,
      "ems": null
    },
    {
      "latitude": 39.693184,
      "longitude": -7.677246,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "squawk": "3260",
      "timestamp": 1703327289,
      "ems": null
    },
    {
      "latitude": 39.69136,
      "longitude": -7.676637,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 165,
      "squawk": "3260",
      "timestamp": 1703327292,
      "ems": null
    },
    {
      "latitude": 39.690205,
      "longitude": -7.67627,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 167,
      "squawk": "3260",
      "timestamp": 1703327295,
      "ems": null
    },
    {
      "latitude": 39.688705,
      "longitude": -7.67592,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 170,
      "squawk": "3260",
      "timestamp": 1703327298,
      "ems": null
    },
    {
      "latitude": 39.687504,
      "longitude": -7.675659,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 171,
      "squawk": "3260",
      "timestamp": 1703327301,
      "ems": null
    },
    {
      "latitude": 39.686016,
      "longitude": -7.675293,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 167,
      "squawk": "3260",
      "timestamp": 1703327304,
      "ems": null
    },
    {
      "latitude": 39.681335,
      "longitude": -7.673532,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 163,
      "squawk": "3260",
      "timestamp": 1703327316,
      "ems": null
    },
    {
      "latitude": 39.674984,
      "longitude": -7.671753,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 170,
      "squawk": "3260",
      "timestamp": 1703327331,
      "ems": null
    },
    {
      "latitude": 39.672592,
      "longitude": -7.671383,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 173,
      "squawk": "3260",
      "timestamp": 1703327337,
      "ems": null
    },
    {
      "latitude": 39.671127,
      "longitude": -7.671204,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 175,
      "squawk": "3260",
      "timestamp": 1703327340,
      "ems": null
    },
    {
      "latitude": 39.669724,
      "longitude": -7.671021,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 175,
      "squawk": "3260",
      "timestamp": 1703327343,
      "ems": null
    },
    {
      "latitude": 39.668472,
      "longitude": -7.670905,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 175,
      "squawk": "3260",
      "timestamp": 1703327346,
      "ems": null
    },
    {
      "latitude": 39.661789,
      "longitude": -7.66995,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 173,
      "squawk": "3260",
      "timestamp": 1703327362,
      "ems": null
    },
    {
      "latitude": 39.65543,
      "longitude": -7.668884,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 171,
      "squawk": "3260",
      "timestamp": 1703327377,
      "ems": null
    },
    {
      "latitude": 39.649284,
      "longitude": -7.667603,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 170,
      "squawk": "3260",
      "timestamp": 1703327392,
      "ems": null
    },
    {
      "latitude": 39.64328,
      "longitude": -7.666687,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 178,
      "squawk": "3260",
      "timestamp": 1703327406,
      "ems": null
    },
    {
      "latitude": 39.642654,
      "longitude": -7.666785,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 181,
      "squawk": "3260",
      "timestamp": 1703327407,
      "ems": null
    },
    {
      "latitude": 39.641327,
      "longitude": -7.667236,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 199,
      "squawk": "3260",
      "timestamp": 1703327411,
      "ems": null
    },
    {
      "latitude": 39.640274,
      "longitude": -7.66792,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703327413,
      "ems": null
    },
    {
      "latitude": 39.63913,
      "longitude": -7.669114,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 220,
      "squawk": "3260",
      "timestamp": 1703327417,
      "ems": null
    },
    {
      "latitude": 39.638214,
      "longitude": -7.670547,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 232,
      "squawk": "3260",
      "timestamp": 1703327420,
      "ems": null
    },
    {
      "latitude": 39.637665,
      "longitude": -7.671681,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 241,
      "squawk": "3260",
      "timestamp": 1703327423,
      "ems": null
    },
    {
      "latitude": 39.637089,
      "longitude": -7.673462,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 249,
      "squawk": "3260",
      "timestamp": 1703327426,
      "ems": null
    },
    {
      "latitude": 39.636703,
      "longitude": -7.675144,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 255,
      "squawk": "3260",
      "timestamp": 1703327429,
      "ems": null
    },
    {
      "latitude": 39.636391,
      "longitude": -7.67688,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 256,
      "squawk": "3260",
      "timestamp": 1703327432,
      "ems": null
    },
    {
      "latitude": 39.635971,
      "longitude": -7.678488,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 250,
      "squawk": "3260",
      "timestamp": 1703327435,
      "ems": null
    },
    {
      "latitude": 39.635559,
      "longitude": -7.679623,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "squawk": "3260",
      "timestamp": 1703327437,
      "ems": null
    },
    {
      "latitude": 39.634808,
      "longitude": -7.681702,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 243,
      "squawk": "3260",
      "timestamp": 1703327441,
      "ems": null
    },
    {
      "latitude": 39.634186,
      "longitude": -7.683324,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 244,
      "squawk": "3260",
      "timestamp": 1703327444,
      "ems": null
    },
    {
      "latitude": 39.633644,
      "longitude": -7.684875,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 245,
      "squawk": "3260",
      "timestamp": 1703327447,
      "ems": null
    },
    {
      "latitude": 39.633133,
      "longitude": -7.68625,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 244,
      "squawk": "3260",
      "timestamp": 1703327450,
      "ems": null
    },
    {
      "latitude": 39.631176,
      "longitude": -7.691101,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 241,
      "squawk": "3260",
      "timestamp": 1703327459,
      "ems": null
    },
    {
      "latitude": 39.630524,
      "longitude": -7.692698,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 240,
      "squawk": "3260",
      "timestamp": 1703327462,
      "ems": null
    },
    {
      "latitude": 39.627266,
      "longitude": -7.699829,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 245,
      "squawk": "3260",
      "timestamp": 1703327477,
      "ems": null
    },
    {
      "latitude": 39.625313,
      "longitude": -7.706055,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 253,
      "squawk": "3260",
      "timestamp": 1703327490,
      "ems": null
    },
    {
      "latitude": 39.624893,
      "longitude": -7.707825,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 251,
      "squawk": "3260",
      "timestamp": 1703327492,
      "ems": null
    },
    {
      "latitude": 39.624435,
      "longitude": -7.709476,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 250,
      "squawk": "3260",
      "timestamp": 1703327495,
      "ems": null
    },
    {
      "latitude": 39.623962,
      "longitude": -7.711121,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 250,
      "squawk": "3260",
      "timestamp": 1703327499,
      "ems": null
    },
    {
      "latitude": 39.62352,
      "longitude": -7.712641,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 248,
      "squawk": "3260",
      "timestamp": 1703327501,
      "ems": null
    },
    {
      "latitude": 39.622982,
      "longitude": -7.714355,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 248,
      "squawk": "3260",
      "timestamp": 1703327505,
      "ems": null
    },
    {
      "latitude": 39.620544,
      "longitude": -7.722373,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 248,
      "squawk": "3260",
      "timestamp": 1703327520,
      "ems": null
    },
    {
      "latitude": 39.618256,
      "longitude": -7.730255,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 247,
      "squawk": "3260",
      "timestamp": 1703327535,
      "ems": null
    },
    {
      "latitude": 39.61586,
      "longitude": -7.737671,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 247,
      "squawk": "3260",
      "timestamp": 1703327549,
      "ems": null
    },
    {
      "latitude": 39.6133,
      "longitude": -7.745728,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 247,
      "squawk": "3260",
      "timestamp": 1703327564,
      "ems": null
    },
    {
      "latitude": 39.610748,
      "longitude": -7.753064,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 243,
      "squawk": "3260",
      "timestamp": 1703327578,
      "ems": null
    },
    {
      "latitude": 39.607773,
      "longitude": -7.760647,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "squawk": "3260",
      "timestamp": 1703327593,
      "ems": null
    },
    {
      "latitude": 39.605392,
      "longitude": -7.768767,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 252,
      "squawk": "3260",
      "timestamp": 1703327608,
      "ems": null
    },
    {
      "latitude": 39.605072,
      "longitude": -7.77014,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 252,
      "squawk": "3260",
      "timestamp": 1703327610,
      "ems": null
    },
    {
      "latitude": 39.603477,
      "longitude": -7.776978,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 253,
      "squawk": "3260",
      "timestamp": 1703327623,
      "ems": null
    },
    {
      "latitude": 39.601429,
      "longitude": -7.7854,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 251,
      "squawk": "3260",
      "timestamp": 1703327639,
      "ems": null
    },
    {
      "latitude": 39.59935,
      "longitude": -7.793427,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 250,
      "squawk": "3260",
      "timestamp": 1703327654,
      "ems": null
    },
    {
      "latitude": 39.597054,
      "longitude": -7.801392,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 249,
      "squawk": "3260",
      "timestamp": 1703327669,
      "ems": null
    },
    {
      "latitude": 39.594913,
      "longitude": -7.808899,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 252,
      "squawk": "3260",
      "timestamp": 1703327684,
      "ems": null
    },
    {
      "latitude": 39.592896,
      "longitude": -7.816772,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 250,
      "squawk": "3260",
      "timestamp": 1703327699,
      "ems": null
    },
    {
      "latitude": 39.590305,
      "longitude": -7.825256,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 247,
      "squawk": "3260",
      "timestamp": 1703327714,
      "ems": null
    },
    {
      "latitude": 39.588116,
      "longitude": -7.832336,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 249,
      "squawk": "3260",
      "timestamp": 1703327728,
      "ems": null
    },
    {
      "latitude": 39.585976,
      "longitude": -7.840454,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "squawk": "3260",
      "timestamp": 1703327744,
      "ems": null
    },
    {
      "latitude": 39.583786,
      "longitude": -7.848511,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 250,
      "squawk": "3260",
      "timestamp": 1703327759,
      "ems": null
    },
    {
      "latitude": 39.581589,
      "longitude": -7.856419,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 250,
      "squawk": "3260",
      "timestamp": 1703327773,
      "ems": null
    },
    {
      "latitude": 39.579319,
      "longitude": -7.86438,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 250,
      "squawk": "3260",
      "timestamp": 1703327788,
      "ems": null
    },
    {
      "latitude": 39.577011,
      "longitude": -7.872241,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 248,
      "squawk": "3260",
      "timestamp": 1703327803,
      "ems": null
    },
    {
      "latitude": 39.574585,
      "longitude": -7.880302,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 247,
      "squawk": "3260",
      "timestamp": 1703327819,
      "ems": null
    },
    {
      "latitude": 39.571884,
      "longitude": -7.888482,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 246,
      "squawk": "3260",
      "timestamp": 1703327834,
      "ems": null
    },
    {
      "latitude": 39.56955,
      "longitude": -7.896662,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 249,
      "squawk": "3260",
      "timestamp": 1703327849,
      "ems": null
    },
    {
      "latitude": 39.567123,
      "longitude": -7.905081,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "squawk": "3260",
      "timestamp": 1703327864,
      "ems": null
    },
    {
      "latitude": 39.565247,
      "longitude": -7.913082,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 264,
      "squawk": "3260",
      "timestamp": 1703327878,
      "ems": null
    },
    {
      "latitude": 39.565445,
      "longitude": -7.915344,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 280,
      "squawk": "3260",
      "timestamp": 1703327882,
      "ems": null
    },
    {
      "latitude": 39.565887,
      "longitude": -7.916903,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 289,
      "squawk": "3260",
      "timestamp": 1703327885,
      "ems": null
    },
    {
      "latitude": 39.566528,
      "longitude": -7.918456,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 301,
      "squawk": "3260",
      "timestamp": 1703327888,
      "ems": null
    },
    {
      "latitude": 39.567352,
      "longitude": -7.919829,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 308,
      "squawk": "3260",
      "timestamp": 1703327891,
      "ems": null
    },
    {
      "latitude": 39.568378,
      "longitude": -7.921021,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 320,
      "squawk": "3260",
      "timestamp": 1703327894,
      "ems": null
    },
    {
      "latitude": 39.569458,
      "longitude": -7.921859,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "squawk": "3260",
      "timestamp": 1703327897,
      "ems": null
    },
    {
      "latitude": 39.569916,
      "longitude": -7.92218,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "squawk": "3260",
      "timestamp": 1703327898,
      "ems": null
    },
    {
      "latitude": 39.571655,
      "longitude": -7.922814,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 347,
      "squawk": "3260",
      "timestamp": 1703327902,
      "ems": null
    },
    {
      "latitude": 39.572845,
      "longitude": -7.922934,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703327905,
      "ems": null
    },
    {
      "latitude": 39.574173,
      "longitude": -7.922874,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 3,
      "squawk": "3260",
      "timestamp": 1703327908,
      "ems": null
    },
    {
      "latitude": 39.575455,
      "longitude": -7.922791,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 3,
      "squawk": "3260",
      "timestamp": 1703327911,
      "ems": null
    },
    {
      "latitude": 39.577057,
      "longitude": -7.922695,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 3,
      "squawk": "3260",
      "timestamp": 1703327914,
      "ems": null
    },
    {
      "latitude": 39.578201,
      "longitude": -7.922635,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 2,
      "squawk": "3260",
      "timestamp": 1703327917,
      "ems": null
    },
    {
      "latitude": 39.579597,
      "longitude": -7.922546,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703327920,
      "ems": null
    },
    {
      "latitude": 39.580948,
      "longitude": -7.922546,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703327923,
      "ems": null
    },
    {
      "latitude": 39.582485,
      "longitude": -7.922424,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 2,
      "squawk": "3260",
      "timestamp": 1703327927,
      "ems": null
    },
    {
      "latitude": 39.583786,
      "longitude": -7.922337,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 2,
      "squawk": "3260",
      "timestamp": 1703327930,
      "ems": null
    },
    {
      "latitude": 39.584885,
      "longitude": -7.922277,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 2,
      "squawk": "3260",
      "timestamp": 1703327933,
      "ems": null
    },
    {
      "latitude": 39.591339,
      "longitude": -7.922098,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703327948,
      "ems": null
    },
    {
      "latitude": 39.597847,
      "longitude": -7.921814,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 3,
      "squawk": "3260",
      "timestamp": 1703327963,
      "ems": null
    },
    {
      "latitude": 39.604084,
      "longitude": -7.921204,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 9,
      "squawk": "3260",
      "timestamp": 1703327978,
      "ems": null
    },
    {
      "latitude": 39.605301,
      "longitude": -7.920665,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 21,
      "squawk": "3260",
      "timestamp": 1703327981,
      "ems": null
    },
    {
      "latitude": 39.6064,
      "longitude": -7.919769,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 39,
      "squawk": "3260",
      "timestamp": 1703327984,
      "ems": null
    },
    {
      "latitude": 39.607296,
      "longitude": -7.918457,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 51,
      "squawk": "3260",
      "timestamp": 1703327987,
      "ems": null
    },
    {
      "latitude": 39.607948,
      "longitude": -7.917175,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 60,
      "squawk": "3260",
      "timestamp": 1703327990,
      "ems": null
    },
    {
      "latitude": 39.608414,
      "longitude": -7.91571,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 68,
      "squawk": "3260",
      "timestamp": 1703327993,
      "ems": null
    },
    {
      "latitude": 39.608688,
      "longitude": -7.914157,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 79,
      "squawk": "3260",
      "timestamp": 1703327996,
      "ems": null
    },
    {
      "latitude": 39.60878,
      "longitude": -7.912784,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 92,
      "squawk": "3260",
      "timestamp": 1703327999,
      "ems": null
    },
    {
      "latitude": 39.608601,
      "longitude": -7.91095,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 94,
      "squawk": "3260",
      "timestamp": 1703328002,
      "ems": null
    },
    {
      "latitude": 39.608086,
      "longitude": -7.909241,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 114,
      "squawk": "3260",
      "timestamp": 1703328005,
      "ems": null
    },
    {
      "latitude": 39.607109,
      "longitude": -7.90741,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 128,
      "squawk": "3260",
      "timestamp": 1703328009,
      "ems": null
    },
    {
      "latitude": 39.606308,
      "longitude": -7.906574,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "squawk": "3260",
      "timestamp": 1703328011,
      "ems": null
    },
    {
      "latitude": 39.60498,
      "longitude": -7.905559,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "squawk": "3260",
      "timestamp": 1703328014,
      "ems": null
    },
    {
      "latitude": 39.603699,
      "longitude": -7.904962,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 160,
      "squawk": "3260",
      "timestamp": 1703328017,
      "ems": null
    },
    {
      "latitude": 39.602222,
      "longitude": -7.90448,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 168,
      "squawk": "3260",
      "timestamp": 1703328021,
      "ems": null
    },
    {
      "latitude": 39.601135,
      "longitude": -7.904305,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 173,
      "squawk": "3260",
      "timestamp": 1703328024,
      "ems": null
    },
    {
      "latitude": 39.5998,
      "longitude": -7.904236,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 180,
      "squawk": "3260",
      "timestamp": 1703328026,
      "ems": null
    },
    {
      "latitude": 39.598545,
      "longitude": -7.904419,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 188,
      "squawk": "3260",
      "timestamp": 1703328029,
      "ems": null
    },
    {
      "latitude": 39.597244,
      "longitude": -7.904842,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "squawk": "3260",
      "timestamp": 1703328032,
      "ems": null
    },
    {
      "latitude": 39.596077,
      "longitude": -7.905457,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "squawk": "3260",
      "timestamp": 1703328035,
      "ems": null
    },
    {
      "latitude": 39.594818,
      "longitude": -7.906216,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "squawk": "3260",
      "timestamp": 1703328039,
      "ems": null
    },
    {
      "latitude": 39.593655,
      "longitude": -7.90686,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "squawk": "3260",
      "timestamp": 1703328041,
      "ems": null
    },
    {
      "latitude": 39.592346,
      "longitude": -7.907589,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "squawk": "3260",
      "timestamp": 1703328045,
      "ems": null
    },
    {
      "latitude": 39.59111,
      "longitude": -7.908365,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703328048,
      "ems": null
    },
    {
      "latitude": 39.58992,
      "longitude": -7.909141,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703328051,
      "ems": null
    },
    {
      "latitude": 39.58873,
      "longitude": -7.909977,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "squawk": "3260",
      "timestamp": 1703328054,
      "ems": null
    },
    {
      "latitude": 39.587494,
      "longitude": -7.910873,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703328057,
      "ems": null
    },
    {
      "latitude": 39.586304,
      "longitude": -7.911768,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703328060,
      "ems": null
    },
    {
      "latitude": 39.585182,
      "longitude": -7.912659,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703328063,
      "ems": null
    },
    {
      "latitude": 39.582901,
      "longitude": -7.91394,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 194,
      "squawk": "3260",
      "timestamp": 1703328069,
      "ems": null
    },
    {
      "latitude": 39.581497,
      "longitude": -7.914217,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 184,
      "squawk": "3260",
      "timestamp": 1703328072,
      "ems": null
    },
    {
      "latitude": 39.580399,
      "longitude": -7.914276,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 183,
      "squawk": "3260",
      "timestamp": 1703328075,
      "ems": null
    },
    {
      "latitude": 39.578945,
      "longitude": -7.914429,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 183,
      "squawk": "3260",
      "timestamp": 1703328078,
      "ems": null
    },
    {
      "latitude": 39.577736,
      "longitude": -7.91449,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 183,
      "squawk": "3260",
      "timestamp": 1703328081,
      "ems": null
    },
    {
      "latitude": 39.576279,
      "longitude": -7.914634,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 184,
      "squawk": "3260",
      "timestamp": 1703328084,
      "ems": null
    },
    {
      "latitude": 39.57486,
      "longitude": -7.914754,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 184,
      "squawk": "3260",
      "timestamp": 1703328087,
      "ems": null
    },
    {
      "latitude": 39.573624,
      "longitude": -7.914873,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 184,
      "squawk": "3260",
      "timestamp": 1703328090,
      "ems": null
    },
    {
      "latitude": 39.57225,
      "longitude": -7.915052,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 184,
      "squawk": "3260",
      "timestamp": 1703328093,
      "ems": null
    },
    {
      "latitude": 39.570969,
      "longitude": -7.915172,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 184,
      "squawk": "3260",
      "timestamp": 1703328096,
      "ems": null
    },
    {
      "latitude": 39.564701,
      "longitude": -7.916077,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 186,
      "squawk": "3260",
      "timestamp": 1703328111,
      "ems": null
    },
    {
      "latitude": 39.562,
      "longitude": -7.916687,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 194,
      "squawk": "3260",
      "timestamp": 1703328117,
      "ems": null
    },
    {
      "latitude": 39.560852,
      "longitude": -7.917262,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703328121,
      "ems": null
    },
    {
      "latitude": 39.559811,
      "longitude": -7.918091,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 213,
      "squawk": "3260",
      "timestamp": 1703328123,
      "ems": null
    },
    {
      "latitude": 39.558743,
      "longitude": -7.919312,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 224,
      "squawk": "3260",
      "timestamp": 1703328127,
      "ems": null
    },
    {
      "latitude": 39.557922,
      "longitude": -7.920665,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 235,
      "squawk": "3260",
      "timestamp": 1703328130,
      "ems": null
    },
    {
      "latitude": 39.557392,
      "longitude": -7.922058,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 245,
      "squawk": "3260",
      "timestamp": 1703328133,
      "ems": null
    },
    {
      "latitude": 39.557007,
      "longitude": -7.92365,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 256,
      "squawk": "3260",
      "timestamp": 1703328136,
      "ems": null
    },
    {
      "latitude": 39.556786,
      "longitude": -7.925232,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 263,
      "squawk": "3260",
      "timestamp": 1703328139,
      "ems": null
    },
    {
      "latitude": 39.556831,
      "longitude": -7.92688,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 274,
      "squawk": "3260",
      "timestamp": 1703328142,
      "ems": null
    },
    {
      "latitude": 39.557007,
      "longitude": -7.928367,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 282,
      "squawk": "3260",
      "timestamp": 1703328145,
      "ems": null
    },
    {
      "latitude": 39.557465,
      "longitude": -7.930218,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 289,
      "squawk": "3260",
      "timestamp": 1703328148,
      "ems": null
    },
    {
      "latitude": 39.557999,
      "longitude": -7.931641,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 297,
      "squawk": "3260",
      "timestamp": 1703328151,
      "ems": null
    },
    {
      "latitude": 39.55888,
      "longitude": -7.933228,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 308,
      "squawk": "3260",
      "timestamp": 1703328154,
      "ems": null
    },
    {
      "latitude": 39.559708,
      "longitude": -7.934338,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 315,
      "squawk": "3260",
      "timestamp": 1703328157,
      "ems": null
    },
    {
      "latitude": 39.560806,
      "longitude": -7.935413,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 324,
      "squawk": "3260",
      "timestamp": 1703328160,
      "ems": null
    },
    {
      "latitude": 39.561909,
      "longitude": -7.936157,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 334,
      "squawk": "3260",
      "timestamp": 1703328163,
      "ems": null
    },
    {
      "latitude": 39.563187,
      "longitude": -7.936727,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 343,
      "squawk": "3260",
      "timestamp": 1703328166,
      "ems": null
    },
    {
      "latitude": 39.56456,
      "longitude": -7.937025,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703328169,
      "ems": null
    },
    {
      "latitude": 39.56575,
      "longitude": -7.937085,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 358,
      "squawk": "3260",
      "timestamp": 1703328172,
      "ems": null
    },
    {
      "latitude": 39.567123,
      "longitude": -7.937025,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 2,
      "squawk": "3260",
      "timestamp": 1703328175,
      "ems": null
    },
    {
      "latitude": 39.568268,
      "longitude": -7.936965,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 3,
      "squawk": "3260",
      "timestamp": 1703328178,
      "ems": null
    },
    {
      "latitude": 39.569355,
      "longitude": -7.936829,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 3,
      "squawk": "3260",
      "timestamp": 1703328181,
      "ems": null
    },
    {
      "latitude": 39.570923,
      "longitude": -7.936727,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "squawk": "3260",
      "timestamp": 1703328184,
      "ems": null
    },
    {
      "latitude": 39.57225,
      "longitude": -7.936607,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "squawk": "3260",
      "timestamp": 1703328187,
      "ems": null
    },
    {
      "latitude": 39.573311,
      "longitude": -7.936523,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "squawk": "3260",
      "timestamp": 1703328189,
      "ems": null
    },
    {
      "latitude": 39.574814,
      "longitude": -7.936428,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 2,
      "squawk": "3260",
      "timestamp": 1703328193,
      "ems": null
    },
    {
      "latitude": 39.576057,
      "longitude": -7.936401,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703328196,
      "ems": null
    },
    {
      "latitude": 39.58255,
      "longitude": -7.93613,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "squawk": "3260",
      "timestamp": 1703328211,
      "ems": null
    },
    {
      "latitude": 39.587814,
      "longitude": -7.936189,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 359,
      "squawk": "3260",
      "timestamp": 1703328223,
      "ems": null
    },
    {
      "latitude": 39.594177,
      "longitude": -7.936189,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 360,
      "squawk": "3260",
      "timestamp": 1703328238,
      "ems": null
    },
    {
      "latitude": 39.600498,
      "longitude": -7.935913,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 2,
      "squawk": "3260",
      "timestamp": 1703328254,
      "ems": null
    },
    {
      "latitude": 39.605434,
      "longitude": -7.935303,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 14,
      "squawk": "3260",
      "timestamp": 1703328266,
      "ems": null
    },
    {
      "latitude": 39.606503,
      "longitude": -7.934753,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 27,
      "squawk": "3260",
      "timestamp": 1703328268,
      "ems": null
    },
    {
      "latitude": 39.60762,
      "longitude": -7.933777,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 36,
      "squawk": "3260",
      "timestamp": 1703328272,
      "ems": null
    },
    {
      "latitude": 39.608414,
      "longitude": -7.932922,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "squawk": "3260",
      "timestamp": 1703328274,
      "ems": null
    },
    {
      "latitude": 39.609283,
      "longitude": -7.931472,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 54,
      "squawk": "3260",
      "timestamp": 1703328278,
      "ems": null
    },
    {
      "latitude": 39.609901,
      "longitude": -7.930176,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "squawk": "3260",
      "timestamp": 1703328281,
      "ems": null
    },
    {
      "latitude": 39.610336,
      "longitude": -7.928726,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 69,
      "squawk": "3260",
      "timestamp": 1703328284,
      "ems": null
    },
    {
      "latitude": 39.6106,
      "longitude": -7.927063,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 79,
      "squawk": "3260",
      "timestamp": 1703328287,
      "ems": null
    },
    {
      "latitude": 39.610695,
      "longitude": -7.925476,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 89,
      "squawk": "3260",
      "timestamp": 1703328290,
      "ems": null
    },
    {
      "latitude": 39.610565,
      "longitude": -7.923949,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 98,
      "squawk": "3260",
      "timestamp": 1703328293,
      "ems": null
    },
    {
      "latitude": 39.610184,
      "longitude": -7.922302,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 108,
      "squawk": "3260",
      "timestamp": 1703328296,
      "ems": null
    },
    {
      "latitude": 39.60965,
      "longitude": -7.920784,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 118,
      "squawk": "3260",
      "timestamp": 1703328299,
      "ems": null
    },
    {
      "latitude": 39.608917,
      "longitude": -7.91953,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 128,
      "squawk": "3260",
      "timestamp": 1703328302,
      "ems": null
    },
    {
      "latitude": 39.607864,
      "longitude": -7.918277,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 139,
      "squawk": "3260",
      "timestamp": 1703328305,
      "ems": null
    },
    {
      "latitude": 39.606689,
      "longitude": -7.917419,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 152,
      "squawk": "3260",
      "timestamp": 1703328308,
      "ems": null
    },
    {
      "latitude": 39.605621,
      "longitude": -7.916809,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 160,
      "squawk": "3260",
      "timestamp": 1703328311,
      "ems": null
    },
    {
      "latitude": 39.604294,
      "longitude": -7.916366,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 167,
      "squawk": "3260",
      "timestamp": 1703328314,
      "ems": null
    },
    {
      "latitude": 39.602875,
      "longitude": -7.916127,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 175,
      "squawk": "3260",
      "timestamp": 1703328317,
      "ems": null
    },
    {
      "latitude": 39.601547,
      "longitude": -7.916068,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 178,
      "squawk": "3260",
      "timestamp": 1703328320,
      "ems": null
    },
    {
      "latitude": 39.600357,
      "longitude": -7.916008,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 179,
      "squawk": "3260",
      "timestamp": 1703328323,
      "ems": null
    },
    {
      "latitude": 39.598846,
      "longitude": -7.916008,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 180,
      "squawk": "3260",
      "timestamp": 1703328326,
      "ems": null
    },
    {
      "latitude": 39.59761,
      "longitude": -7.916068,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 181,
      "squawk": "3260",
      "timestamp": 1703328329,
      "ems": null
    },
    {
      "latitude": 39.596588,
      "longitude": -7.916077,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 181,
      "squawk": "3260",
      "timestamp": 1703328331,
      "ems": null
    },
    {
      "latitude": 39.594772,
      "longitude": -7.916187,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 182,
      "squawk": "3260",
      "timestamp": 1703328335,
      "ems": null
    },
    {
      "latitude": 39.593536,
      "longitude": -7.916246,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 182,
      "squawk": "3260",
      "timestamp": 1703328338,
      "ems": null
    },
    {
      "latitude": 39.592209,
      "longitude": -7.916366,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 182,
      "squawk": "3260",
      "timestamp": 1703328341,
      "ems": null
    },
    {
      "latitude": 39.590908,
      "longitude": -7.916443,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 183,
      "squawk": "3260",
      "timestamp": 1703328344,
      "ems": null
    },
    {
      "latitude": 39.584297,
      "longitude": -7.917114,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 184,
      "squawk": "3260",
      "timestamp": 1703328359,
      "ems": null
    },
    {
      "latitude": 39.578899,
      "longitude": -7.916992,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "squawk": "3260",
      "timestamp": 1703328371,
      "ems": null
    },
    {
      "latitude": 39.577652,
      "longitude": -7.916784,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 173,
      "squawk": "3260",
      "timestamp": 1703328374,
      "ems": null
    },
    {
      "latitude": 39.57629,
      "longitude": -7.916626,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 174,
      "squawk": "3260",
      "timestamp": 1703328377,
      "ems": null
    },
    {
      "latitude": 39.575035,
      "longitude": -7.916443,
      "altitude": {
        "feet": 5500,
        "meters": 1676
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
      "heading": 174,
      "squawk": "3260",
      "timestamp": 1703328380,
      "ems": null
    },
    {
      "latitude": 39.573639,
      "longitude": -7.916321,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 174,
      "squawk": "3260",
      "timestamp": 1703328384,
      "ems": null
    },
    {
      "latitude": 39.57238,
      "longitude": -7.916138,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 174,
      "squawk": "3260",
      "timestamp": 1703328386,
      "ems": null
    },
    {
      "latitude": 39.571079,
      "longitude": -7.916016,
      "altitude": {
        "feet": 5400,
        "meters": 1646
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
      "heading": 174,
      "squawk": "3260",
      "timestamp": 1703328389,
      "ems": null
    },
    {
      "latitude": 39.564468,
      "longitude": -7.915231,
      "altitude": {
        "feet": 5300,
        "meters": 1615
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
      "heading": 175,
      "squawk": "3260",
      "timestamp": 1703328405,
      "ems": null
    },
    {
      "latitude": 39.560715,
      "longitude": -7.915411,
      "altitude": {
        "feet": 5300,
        "meters": 1615
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
      "heading": 191,
      "squawk": "3260",
      "timestamp": 1703328413,
      "ems": null
    },
    {
      "latitude": 39.559341,
      "longitude": -7.916008,
      "altitude": {
        "feet": 5300,
        "meters": 1615
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
      "heading": 202,
      "squawk": "3260",
      "timestamp": 1703328417,
      "ems": null
    },
    {
      "latitude": 39.55838,
      "longitude": -7.916784,
      "altitude": {
        "feet": 5200,
        "meters": 1585
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703328419,
      "ems": null
    },
    {
      "latitude": 39.557327,
      "longitude": -7.917859,
      "altitude": {
        "feet": 5200,
        "meters": 1585
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
      "heading": 222,
      "squawk": "3260",
      "timestamp": 1703328423,
      "ems": null
    },
    {
      "latitude": 39.55632,
      "longitude": -7.919312,
      "altitude": {
        "feet": 5200,
        "meters": 1585
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
      "heading": 232,
      "squawk": "3260",
      "timestamp": 1703328426,
      "ems": null
    },
    {
      "latitude": 39.555717,
      "longitude": -7.920593,
      "altitude": {
        "feet": 5200,
        "meters": 1585
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 239,
      "squawk": "3260",
      "timestamp": 1703328429,
      "ems": null
    },
    {
      "latitude": 39.555111,
      "longitude": -7.922363,
      "altitude": {
        "feet": 5100,
        "meters": 1554
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
      "squawk": "3260",
      "timestamp": 1703328432,
      "ems": null
    },
    {
      "latitude": 39.554737,
      "longitude": -7.924133,
      "altitude": {
        "feet": 5100,
        "meters": 1554
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
      "heading": 257,
      "squawk": "3260",
      "timestamp": 1703328435,
      "ems": null
    },
    {
      "latitude": 39.5546,
      "longitude": -7.925842,
      "altitude": {
        "feet": 5100,
        "meters": 1554
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
      "heading": 265,
      "squawk": "3260",
      "timestamp": 1703328438,
      "ems": null
    },
    {
      "latitude": 39.554646,
      "longitude": -7.927307,
      "altitude": {
        "feet": 5100,
        "meters": 1554
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 274,
      "squawk": "3260",
      "timestamp": 1703328441,
      "ems": null
    },
    {
      "latitude": 39.554947,
      "longitude": -7.929143,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 284,
      "squawk": "3260",
      "timestamp": 1703328444,
      "ems": null
    },
    {
      "latitude": 39.55545,
      "longitude": -7.930756,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703328447,
      "ems": null
    },
    {
      "latitude": 39.556137,
      "longitude": -7.932248,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 304,
      "squawk": "3260",
      "timestamp": 1703328450,
      "ems": null
    },
    {
      "latitude": 39.557064,
      "longitude": -7.933533,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 313,
      "squawk": "3260",
      "timestamp": 1703328453,
      "ems": null
    },
    {
      "latitude": 39.558044,
      "longitude": -7.934631,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 323,
      "squawk": "3260",
      "timestamp": 1703328456,
      "ems": null
    },
    {
      "latitude": 39.559208,
      "longitude": -7.935425,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 334,
      "squawk": "3260",
      "timestamp": 1703328459,
      "ems": null
    },
    {
      "latitude": 39.560417,
      "longitude": -7.936035,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 341,
      "squawk": "3260",
      "timestamp": 1703328462,
      "ems": null
    },
    {
      "latitude": 39.561581,
      "longitude": -7.936401,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 348,
      "squawk": "3260",
      "timestamp": 1703328465,
      "ems": null
    },
    {
      "latitude": 39.563004,
      "longitude": -7.936607,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703328468,
      "ems": null
    },
    {
      "latitude": 39.564377,
      "longitude": -7.936607,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 360,
      "squawk": "3260",
      "timestamp": 1703328471,
      "ems": null
    },
    {
      "latitude": 39.565723,
      "longitude": -7.936584,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 2,
      "squawk": "3260",
      "timestamp": 1703328475,
      "ems": null
    },
    {
      "latitude": 39.56694,
      "longitude": -7.936488,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 3,
      "squawk": "3260",
      "timestamp": 1703328477,
      "ems": null
    },
    {
      "latitude": 39.56813,
      "longitude": -7.936428,
      "altitude": {
        "feet": 4700,
        "meters": 1433
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
      "heading": 2,
      "squawk": "3260",
      "timestamp": 1703328480,
      "ems": null
    },
    {
      "latitude": 39.56945,
      "longitude": -7.936401,
      "altitude": {
        "feet": 4700,
        "meters": 1433
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
      "heading": 2,
      "squawk": "3260",
      "timestamp": 1703328483,
      "ems": null
    },
    {
      "latitude": 39.570694,
      "longitude": -7.936368,
      "altitude": {
        "feet": 4700,
        "meters": 1433
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
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703328486,
      "ems": null
    },
    {
      "latitude": 39.57201,
      "longitude": -7.93634,
      "altitude": {
        "feet": 4700,
        "meters": 1433
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
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703328490,
      "ems": null
    },
    {
      "latitude": 39.573265,
      "longitude": -7.93634,
      "altitude": {
        "feet": 4600,
        "meters": 1402
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
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703328492,
      "ems": null
    },
    {
      "latitude": 39.574631,
      "longitude": -7.936249,
      "altitude": {
        "feet": 4600,
        "meters": 1402
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
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703328496,
      "ems": null
    },
    {
      "latitude": 39.575779,
      "longitude": -7.936157,
      "altitude": {
        "feet": 4600,
        "meters": 1402
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
      "heading": 2,
      "squawk": "3260",
      "timestamp": 1703328498,
      "ems": null
    },
    {
      "latitude": 39.57962,
      "longitude": -7.93601,
      "altitude": {
        "feet": 4500,
        "meters": 1372
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
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703328508,
      "ems": null
    },
    {
      "latitude": 39.58342,
      "longitude": -7.935771,
      "altitude": {
        "feet": 4400,
        "meters": 1341
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
      "heading": 3,
      "squawk": "3260",
      "timestamp": 1703328517,
      "ems": null
    },
    {
      "latitude": 39.587044,
      "longitude": -7.935547,
      "altitude": {
        "feet": 4400,
        "meters": 1341
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
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703328526,
      "ems": null
    },
    {
      "latitude": 39.590675,
      "longitude": -7.935364,
      "altitude": {
        "feet": 4300,
        "meters": 1311
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
      "heading": 5,
      "squawk": "3260",
      "timestamp": 1703328535,
      "ems": null
    },
    {
      "latitude": 39.591843,
      "longitude": -7.934995,
      "altitude": {
        "feet": 4300,
        "meters": 1311
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 17,
      "squawk": "3260",
      "timestamp": 1703328538,
      "ems": null
    },
    {
      "latitude": 39.593079,
      "longitude": -7.934159,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 30,
      "squawk": "3260",
      "timestamp": 1703328541,
      "ems": null
    },
    {
      "latitude": 39.593994,
      "longitude": -7.933204,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 42,
      "squawk": "3260",
      "timestamp": 1703328544,
      "ems": null
    },
    {
      "latitude": 39.594818,
      "longitude": -7.932129,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 47,
      "squawk": "3260",
      "timestamp": 1703328547,
      "ems": null
    },
    {
      "latitude": 39.595516,
      "longitude": -7.930847,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 56,
      "squawk": "3260",
      "timestamp": 1703328550,
      "ems": null
    },
    {
      "latitude": 39.595936,
      "longitude": -7.92981,
      "altitude": {
        "feet": 4100,
        "meters": 1250
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 63,
      "squawk": "3260",
      "timestamp": 1703328552,
      "ems": null
    },
    {
      "latitude": 39.596558,
      "longitude": -7.927591,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 73,
      "squawk": "3260",
      "timestamp": 1703328556,
      "ems": null
    },
    {
      "latitude": 39.596786,
      "longitude": -7.926039,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 81,
      "squawk": "3260",
      "timestamp": 1703328559,
      "ems": null
    },
    {
      "latitude": 39.596832,
      "longitude": -7.924188,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 91,
      "squawk": "3260",
      "timestamp": 1703328562,
      "ems": null
    },
    {
      "latitude": 39.596729,
      "longitude": -7.922668,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 98,
      "squawk": "3260",
      "timestamp": 1703328565,
      "ems": null
    },
    {
      "latitude": 39.596329,
      "longitude": -7.920844,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 106,
      "squawk": "3260",
      "timestamp": 1703328568,
      "ems": null
    },
    {
      "latitude": 39.595844,
      "longitude": -7.919434,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 114,
      "squawk": "3260",
      "timestamp": 1703328571,
      "ems": null
    },
    {
      "latitude": 39.595425,
      "longitude": -7.918396,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 118,
      "squawk": "3260",
      "timestamp": 1703328573,
      "ems": null
    },
    {
      "latitude": 39.594315,
      "longitude": -7.916485,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 130,
      "squawk": "3260",
      "timestamp": 1703328577,
      "ems": null
    },
    {
      "latitude": 39.593307,
      "longitude": -7.915172,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 137,
      "squawk": "3260",
      "timestamp": 1703328580,
      "ems": null
    },
    {
      "latitude": 39.592213,
      "longitude": -7.914124,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 145,
      "squawk": "3260",
      "timestamp": 1703328583,
      "ems": null
    },
    {
      "latitude": 39.591141,
      "longitude": -7.913452,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 156,
      "squawk": "3260",
      "timestamp": 1703328586,
      "ems": null
    },
    {
      "latitude": 39.589554,
      "longitude": -7.912962,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 168,
      "squawk": "3260",
      "timestamp": 1703328589,
      "ems": null
    },
    {
      "latitude": 39.588211,
      "longitude": -7.912781,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 177,
      "squawk": "3260",
      "timestamp": 1703328592,
      "ems": null
    },
    {
      "latitude": 39.586624,
      "longitude": -7.912843,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 183,
      "squawk": "3260",
      "timestamp": 1703328595,
      "ems": null
    },
    {
      "latitude": 39.585297,
      "longitude": -7.913022,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 188,
      "squawk": "3260",
      "timestamp": 1703328598,
      "ems": null
    },
    {
      "latitude": 39.583832,
      "longitude": -7.913381,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 189,
      "squawk": "3260",
      "timestamp": 1703328601,
      "ems": null
    },
    {
      "latitude": 39.582485,
      "longitude": -7.913635,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 189,
      "squawk": "3260",
      "timestamp": 1703328604,
      "ems": null
    },
    {
      "latitude": 39.581318,
      "longitude": -7.913879,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 189,
      "squawk": "3260",
      "timestamp": 1703328607,
      "ems": null
    },
    {
      "latitude": 39.579803,
      "longitude": -7.914217,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 188,
      "squawk": "3260",
      "timestamp": 1703328610,
      "ems": null
    },
    {
      "latitude": 39.57843,
      "longitude": -7.914395,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 186,
      "squawk": "3260",
      "timestamp": 1703328613,
      "ems": null
    },
    {
      "latitude": 39.577129,
      "longitude": -7.91449,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 181,
      "squawk": "3260",
      "timestamp": 1703328616,
      "ems": null
    },
    {
      "latitude": 39.573257,
      "longitude": -7.914515,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 179,
      "squawk": "3260",
      "timestamp": 1703328625,
      "ems": null
    },
    {
      "latitude": 39.571449,
      "longitude": -7.91449,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 180,
      "squawk": "3260",
      "timestamp": 1703328629,
      "ems": null
    },
    {
      "latitude": 39.570053,
      "longitude": -7.914515,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 181,
      "squawk": "3260",
      "timestamp": 1703328632,
      "ems": null
    },
    {
      "latitude": 39.569,
      "longitude": -7.914575,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 181,
      "squawk": "3260",
      "timestamp": 1703328634,
      "ems": null
    },
    {
      "latitude": 39.567493,
      "longitude": -7.914612,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 181,
      "squawk": "3260",
      "timestamp": 1703328637,
      "ems": null
    },
    {
      "latitude": 39.566189,
      "longitude": -7.914673,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 181,
      "squawk": "3260",
      "timestamp": 1703328640,
      "ems": null
    },
    {
      "latitude": 39.564793,
      "longitude": -7.914673,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 180,
      "squawk": "3260",
      "timestamp": 1703328644,
      "ems": null
    },
    {
      "latitude": 39.56076,
      "longitude": -7.914455,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 173,
      "squawk": "3260",
      "timestamp": 1703328653,
      "ems": null
    },
    {
      "latitude": 39.559765,
      "longitude": -7.914246,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 167,
      "squawk": "3260",
      "timestamp": 1703328656,
      "ems": null
    },
    {
      "latitude": 39.558289,
      "longitude": -7.91362,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 159,
      "squawk": "3260",
      "timestamp": 1703328659,
      "ems": null
    },
    {
      "latitude": 39.557098,
      "longitude": -7.912903,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 151,
      "squawk": "3260",
      "timestamp": 1703328662,
      "ems": null
    },
    {
      "latitude": 39.555901,
      "longitude": -7.911804,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 142,
      "squawk": "3260",
      "timestamp": 1703328665,
      "ems": null
    },
    {
      "latitude": 39.554924,
      "longitude": -7.910645,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 135,
      "squawk": "3260",
      "timestamp": 1703328668,
      "ems": null
    },
    {
      "latitude": 39.554134,
      "longitude": -7.909546,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 131,
      "squawk": "3260",
      "timestamp": 1703328671,
      "ems": null
    },
    {
      "latitude": 39.553249,
      "longitude": -7.90802,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703328674,
      "ems": null
    },
    {
      "latitude": 39.552551,
      "longitude": -7.906555,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703328677,
      "ems": null
    },
    {
      "latitude": 39.552063,
      "longitude": -7.90538,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 117,
      "squawk": "3260",
      "timestamp": 1703328680,
      "ems": null
    },
    {
      "latitude": 39.551376,
      "longitude": -7.903588,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 116,
      "squawk": "3260",
      "timestamp": 1703328683,
      "ems": null
    },
    {
      "latitude": 39.55106,
      "longitude": -7.902771,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 115,
      "squawk": "3260",
      "timestamp": 1703328685,
      "ems": null
    },
    {
      "latitude": 39.550232,
      "longitude": -7.900424,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 114,
      "squawk": "3260",
      "timestamp": 1703328689,
      "ems": null
    },
    {
      "latitude": 39.549683,
      "longitude": -7.898812,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 112,
      "squawk": "3260",
      "timestamp": 1703328692,
      "ems": null
    },
    {
      "latitude": 39.549179,
      "longitude": -7.89714,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 111,
      "squawk": "3260",
      "timestamp": 1703328695,
      "ems": null
    },
    {
      "latitude": 39.548824,
      "longitude": -7.895874,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 110,
      "squawk": "3260",
      "timestamp": 1703328697,
      "ems": null
    },
    {
      "latitude": 39.548267,
      "longitude": -7.893982,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 110,
      "squawk": "3260",
      "timestamp": 1703328701,
      "ems": null
    },
    {
      "latitude": 39.547802,
      "longitude": -7.892273,
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
      "heading": 109,
      "squawk": "3260",
      "timestamp": 1703328704,
      "ems": null
    },
    {
      "latitude": 39.547428,
      "longitude": -7.890869,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 108,
      "squawk": "3260",
      "timestamp": 1703328707,
      "ems": null
    },
    {
      "latitude": 39.546982,
      "longitude": -7.889258,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 109,
      "squawk": "3260",
      "timestamp": 1703328710,
      "ems": null
    },
    {
      "latitude": 39.545471,
      "longitude": -7.884661,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 114,
      "squawk": "3260",
      "timestamp": 1703328719,
      "ems": null
    },
    {
      "latitude": 39.544312,
      "longitude": -7.881653,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 116,
      "squawk": "3260",
      "timestamp": 1703328725,
      "ems": null
    },
    {
      "latitude": 39.543751,
      "longitude": -7.880127,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 115,
      "squawk": "3260",
      "timestamp": 1703328728,
      "ems": null
    },
    {
      "latitude": 39.542038,
      "longitude": -7.875167,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "3260",
      "timestamp": 1703328737,
      "ems": null
    },
    {
      "latitude": 39.541489,
      "longitude": -7.873674,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 115,
      "squawk": "3260",
      "timestamp": 1703328740,
      "ems": null
    },
    {
      "latitude": 39.539703,
      "longitude": -7.868896,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 114,
      "squawk": "3260",
      "timestamp": 1703328749,
      "ems": null
    },
    {
      "latitude": 39.538025,
      "longitude": -7.863953,
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
      "heading": 112,
      "squawk": "3260",
      "timestamp": 1703328758,
      "ems": null
    },
    {
      "latitude": 39.536957,
      "longitude": -7.860479,
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
      "heading": 112,
      "squawk": "3260",
      "timestamp": 1703328764,
      "ems": null
    },
    {
      "latitude": 39.535324,
      "longitude": -7.855591,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 114,
      "squawk": "3260",
      "timestamp": 1703328774,
      "ems": null
    },
    {
      "latitude": 39.534676,
      "longitude": -7.854126,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703328777,
      "ems": null
    },
    {
      "latitude": 39.534027,
      "longitude": -7.852836,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 124,
      "squawk": "3260",
      "timestamp": 1703328779,
      "ems": null
    },
    {
      "latitude": 39.533138,
      "longitude": -7.851257,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "3260",
      "timestamp": 1703328783,
      "ems": null
    },
    {
      "latitude": 39.532379,
      "longitude": -7.84997,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "3260",
      "timestamp": 1703328786,
      "ems": null
    },
    {
      "latitude": 39.531834,
      "longitude": -7.848999,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "3260",
      "timestamp": 1703328789,
      "ems": null
    },
    {
      "latitude": 39.530716,
      "longitude": -7.847046,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 126,
      "squawk": "3260",
      "timestamp": 1703328792,
      "ems": null
    },
    {
      "latitude": 39.530182,
      "longitude": -7.846089,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 126,
      "squawk": "3260",
      "timestamp": 1703328794,
      "ems": null
    },
    {
      "latitude": 39.529221,
      "longitude": -7.844357,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703328798,
      "ems": null
    },
    {
      "latitude": 39.528534,
      "longitude": -7.843163,
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
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703328801,
      "ems": null
    },
    {
      "latitude": 39.527645,
      "longitude": -7.841553,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703328804,
      "ems": null
    },
    {
      "latitude": 39.526947,
      "longitude": -7.840271,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703328807,
      "ems": null
    },
    {
      "latitude": 39.524712,
      "longitude": -7.836121,
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
      "heading": 123,
      "squawk": "3260",
      "timestamp": 1703328816,
      "ems": null
    },
    {
      "latitude": 39.524105,
      "longitude": -7.834839,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703328818,
      "ems": null
    },
    {
      "latitude": 39.523315,
      "longitude": -7.833133,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703328822,
      "ems": null
    },
    {
      "latitude": 39.52272,
      "longitude": -7.831879,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703328825,
      "ems": null
    },
    {
      "latitude": 39.520477,
      "longitude": -7.827401,
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
      "heading": 126,
      "squawk": "3260",
      "timestamp": 1703328834,
      "ems": null
    },
    {
      "latitude": 39.518234,
      "longitude": -7.823221,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 122,
      "squawk": "3260",
      "timestamp": 1703328843,
      "ems": null
    },
    {
      "latitude": 39.516037,
      "longitude": -7.818862,
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
      "heading": 124,
      "squawk": "3260",
      "timestamp": 1703328852,
      "ems": null
    },
    {
      "latitude": 39.513702,
      "longitude": -7.814504,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 124,
      "squawk": "3260",
      "timestamp": 1703328861,
      "ems": null
    },
    {
      "latitude": 39.511414,
      "longitude": -7.810145,
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
      "heading": 123,
      "squawk": "3260",
      "timestamp": 1703328870,
      "ems": null
    },
    {
      "latitude": 39.509956,
      "longitude": -7.80719,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 123,
      "squawk": "3260",
      "timestamp": 1703328876,
      "ems": null
    },
    {
      "latitude": 39.507721,
      "longitude": -7.802673,
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
      "heading": 122,
      "squawk": "3260",
      "timestamp": 1703328886,
      "ems": null
    },
    {
      "latitude": 39.505486,
      "longitude": -7.798218,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 122,
      "squawk": "3260",
      "timestamp": 1703328895,
      "ems": null
    },
    {
      "latitude": 39.503716,
      "longitude": -7.794617,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 123,
      "squawk": "3260",
      "timestamp": 1703328902,
      "ems": null
    },
    {
      "latitude": 39.501343,
      "longitude": -7.790023,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 123,
      "squawk": "3260",
      "timestamp": 1703328911,
      "ems": null
    },
    {
      "latitude": 39.4991,
      "longitude": -7.785665,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 123,
      "squawk": "3260",
      "timestamp": 1703328920,
      "ems": null
    },
    {
      "latitude": 39.497726,
      "longitude": -7.782858,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703328925,
      "ems": null
    },
    {
      "latitude": 39.497154,
      "longitude": -7.781494,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 118,
      "squawk": "3260",
      "timestamp": 1703328929,
      "ems": null
    },
    {
      "latitude": 39.49464,
      "longitude": -7.776123,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 122,
      "squawk": "3260",
      "timestamp": 1703328938,
      "ems": null
    },
    {
      "latitude": 39.492188,
      "longitude": -7.771335,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 124,
      "squawk": "3260",
      "timestamp": 1703328948,
      "ems": null
    },
    {
      "latitude": 39.489807,
      "longitude": -7.766856,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 124,
      "squawk": "3260",
      "timestamp": 1703328956,
      "ems": null
    },
    {
      "latitude": 39.488983,
      "longitude": -7.765364,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703328959,
      "ems": null
    },
    {
      "latitude": 39.488068,
      "longitude": -7.763811,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 126,
      "squawk": "3260",
      "timestamp": 1703328963,
      "ems": null
    },
    {
      "latitude": 39.48719,
      "longitude": -7.762329,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 127,
      "squawk": "3260",
      "timestamp": 1703328966,
      "ems": null
    },
    {
      "latitude": 39.486374,
      "longitude": -7.761005,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 128,
      "squawk": "3260",
      "timestamp": 1703328969,
      "ems": null
    },
    {
      "latitude": 39.485516,
      "longitude": -7.759583,
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
      "heading": 128,
      "squawk": "3260",
      "timestamp": 1703328972,
      "ems": null
    },
    {
      "latitude": 39.48468,
      "longitude": -7.758199,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 128,
      "squawk": "3260",
      "timestamp": 1703328975,
      "ems": null
    },
    {
      "latitude": 39.482582,
      "longitude": -7.754883,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 131,
      "squawk": "3260",
      "timestamp": 1703328983,
      "ems": null
    },
    {
      "latitude": 39.481476,
      "longitude": -7.753243,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 131,
      "squawk": "3260",
      "timestamp": 1703328986,
      "ems": null
    },
    {
      "latitude": 39.480347,
      "longitude": -7.751709,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 132,
      "squawk": "3260",
      "timestamp": 1703328990,
      "ems": null
    },
    {
      "latitude": 39.479553,
      "longitude": -7.750616,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 132,
      "squawk": "3260",
      "timestamp": 1703328992,
      "ems": null
    },
    {
      "latitude": 39.47858,
      "longitude": -7.749207,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 132,
      "squawk": "3260",
      "timestamp": 1703328996,
      "ems": null
    },
    {
      "latitude": 39.476166,
      "longitude": -7.745302,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 123,
      "squawk": "3260",
      "timestamp": 1703329005,
      "ems": null
    },
    {
      "latitude": 39.475662,
      "longitude": -7.744107,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 119,
      "squawk": "3260",
      "timestamp": 1703329007,
      "ems": null
    },
    {
      "latitude": 39.474899,
      "longitude": -7.742371,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 119,
      "squawk": "3260",
      "timestamp": 1703329011,
      "ems": null
    },
    {
      "latitude": 39.474197,
      "longitude": -7.740823,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 119,
      "squawk": "3260",
      "timestamp": 1703329014,
      "ems": null
    },
    {
      "latitude": 39.473511,
      "longitude": -7.739331,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703329017,
      "ems": null
    },
    {
      "latitude": 39.472778,
      "longitude": -7.737838,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 124,
      "squawk": "3260",
      "timestamp": 1703329020,
      "ems": null
    },
    {
      "latitude": 39.47192,
      "longitude": -7.736328,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703329023,
      "ems": null
    },
    {
      "latitude": 39.47113,
      "longitude": -7.734863,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703329026,
      "ems": null
    },
    {
      "latitude": 39.470619,
      "longitude": -7.733887,
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
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703329028,
      "ems": null
    },
    {
      "latitude": 39.468616,
      "longitude": -7.730347,
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
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703329035,
      "ems": null
    },
    {
      "latitude": 39.46788,
      "longitude": -7.729001,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "3260",
      "timestamp": 1703329038,
      "ems": null
    },
    {
      "latitude": 39.467033,
      "longitude": -7.727478,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 126,
      "squawk": "3260",
      "timestamp": 1703329041,
      "ems": null
    },
    {
      "latitude": 39.466194,
      "longitude": -7.726013,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "3260",
      "timestamp": 1703329044,
      "ems": null
    },
    {
      "latitude": 39.465591,
      "longitude": -7.725001,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "3260",
      "timestamp": 1703329046,
      "ems": null
    },
    {
      "latitude": 39.462891,
      "longitude": -7.720105,
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
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703329056,
      "ems": null
    },
    {
      "latitude": 39.46051,
      "longitude": -7.715567,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 123,
      "squawk": "3260",
      "timestamp": 1703329065,
      "ems": null
    },
    {
      "latitude": 39.458282,
      "longitude": -7.711365,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703329074,
      "ems": null
    },
    {
      "latitude": 39.456528,
      "longitude": -7.708223,
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
      "heading": 126,
      "squawk": "3260",
      "timestamp": 1703329080,
      "ems": null
    },
    {
      "latitude": 39.454094,
      "longitude": -7.704041,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 126,
      "squawk": "3260",
      "timestamp": 1703329089,
      "ems": null
    },
    {
      "latitude": 39.451393,
      "longitude": -7.699585,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 129,
      "squawk": "3260",
      "timestamp": 1703329098,
      "ems": null
    },
    {
      "latitude": 39.450714,
      "longitude": -7.69855,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 130,
      "squawk": "3260",
      "timestamp": 1703329100,
      "ems": null
    },
    {
      "latitude": 39.447666,
      "longitude": -7.693787,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 129,
      "squawk": "3260",
      "timestamp": 1703329111,
      "ems": null
    },
    {
      "latitude": 39.445084,
      "longitude": -7.689773,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 129,
      "squawk": "3260",
      "timestamp": 1703329120,
      "ems": null
    },
    {
      "latitude": 39.442642,
      "longitude": -7.685852,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 128,
      "squawk": "3260",
      "timestamp": 1703329128,
      "ems": null
    },
    {
      "latitude": 39.44014,
      "longitude": -7.681891,
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
      "heading": 129,
      "squawk": "3260",
      "timestamp": 1703329137,
      "ems": null
    },
    {
      "latitude": 39.437668,
      "longitude": -7.678309,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 132,
      "squawk": "3260",
      "timestamp": 1703329145,
      "ems": null
    },
    {
      "latitude": 39.435013,
      "longitude": -7.673711,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703329154,
      "ems": null
    },
    {
      "latitude": 39.43417,
      "longitude": -7.671936,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 119,
      "squawk": "3260",
      "timestamp": 1703329158,
      "ems": null
    },
    {
      "latitude": 39.433517,
      "longitude": -7.670471,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703329161,
      "ems": null
    },
    {
      "latitude": 39.43277,
      "longitude": -7.668815,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703329164,
      "ems": null
    },
    {
      "latitude": 39.43222,
      "longitude": -7.667621,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703329166,
      "ems": null
    },
    {
      "latitude": 39.431351,
      "longitude": -7.66571,
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
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703329170,
      "ems": null
    },
    {
      "latitude": 39.430618,
      "longitude": -7.664098,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703329173,
      "ems": null
    },
    {
      "latitude": 39.42984,
      "longitude": -7.662426,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 121,
      "squawk": "3260",
      "timestamp": 1703329176,
      "ems": null
    },
    {
      "latitude": 39.429108,
      "longitude": -7.660994,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "3260",
      "timestamp": 1703329179,
      "ems": null
    },
    {
      "latitude": 39.426727,
      "longitude": -7.656277,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 123,
      "squawk": "3260",
      "timestamp": 1703329188,
      "ems": null
    },
    {
      "latitude": 39.424988,
      "longitude": -7.65347,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "3260",
      "timestamp": 1703329194,
      "ems": null
    },
    {
      "latitude": 39.423431,
      "longitude": -7.653172,
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
      "heading": 178,
      "squawk": "3260",
      "timestamp": 1703329198,
      "ems": null
    },
    {
      "latitude": 39.422714,
      "longitude": -7.653564,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 196,
      "squawk": "3260",
      "timestamp": 1703329199,
      "ems": null
    },
    {
      "latitude": 39.421829,
      "longitude": -7.654366,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 217,
      "squawk": "3260",
      "timestamp": 1703329203,
      "ems": null
    },
    {
      "latitude": 39.420437,
      "longitude": -7.655701,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 216,
      "squawk": "3260",
      "timestamp": 1703329206,
      "ems": null
    },
    {
      "latitude": 39.419502,
      "longitude": -7.656433,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "3260",
      "timestamp": 1703329208,
      "ems": null
    },
    {
      "latitude": 39.41806,
      "longitude": -7.657349,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703329212,
      "ems": null
    },
    {
      "latitude": 39.416851,
      "longitude": -7.658081,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703329215,
      "ems": null
    },
    {
      "latitude": 39.415592,
      "longitude": -7.658752,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 202,
      "squawk": "3260",
      "timestamp": 1703329218,
      "ems": null
    },
    {
      "latitude": 39.414459,
      "longitude": -7.659322,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 202,
      "squawk": "3260",
      "timestamp": 1703329220,
      "ems": null
    },
    {
      "latitude": 39.412766,
      "longitude": -7.659919,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 195,
      "squawk": "3260",
      "timestamp": 1703329224,
      "ems": null
    },
    {
      "latitude": 39.412033,
      "longitude": -7.660217,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 199,
      "squawk": "3260",
      "timestamp": 1703329227,
      "ems": null
    },
    {
      "latitude": 39.410339,
      "longitude": -7.661053,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 201,
      "squawk": "3260",
      "timestamp": 1703329230,
      "ems": null
    },
    {
      "latitude": 39.408966,
      "longitude": -7.66177,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 202,
      "squawk": "3260",
      "timestamp": 1703329233,
      "ems": null
    },
    {
      "latitude": 39.407585,
      "longitude": -7.662537,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703329236,
      "ems": null
    },
    {
      "latitude": 39.403702,
      "longitude": -7.665113,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703329246,
      "ems": null
    },
    {
      "latitude": 39.402466,
      "longitude": -7.666009,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703329249,
      "ems": null
    },
    {
      "latitude": 39.40123,
      "longitude": -7.666785,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703329251,
      "ems": null
    },
    {
      "latitude": 39.399994,
      "longitude": -7.667562,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703329254,
      "ems": null
    },
    {
      "latitude": 39.397018,
      "longitude": -7.66925,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 202,
      "squawk": "3260",
      "timestamp": 1703329262,
      "ems": null
    },
    {
      "latitude": 39.393906,
      "longitude": -7.670846,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 201,
      "squawk": "3260",
      "timestamp": 1703329269,
      "ems": null
    },
    {
      "latitude": 39.393173,
      "longitude": -7.671204,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 201,
      "squawk": "3260",
      "timestamp": 1703329270,
      "ems": null
    },
    {
      "latitude": 39.3918,
      "longitude": -7.67192,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 200,
      "squawk": "3260",
      "timestamp": 1703329274,
      "ems": null
    },
    {
      "latitude": 39.390427,
      "longitude": -7.672637,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 202,
      "squawk": "3260",
      "timestamp": 1703329277,
      "ems": null
    },
    {
      "latitude": 39.386032,
      "longitude": -7.675204,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703329288,
      "ems": null
    },
    {
      "latitude": 39.38269,
      "longitude": -7.677175,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703329296,
      "ems": null
    },
    {
      "latitude": 39.378845,
      "longitude": -7.679563,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703329305,
      "ems": null
    },
    {
      "latitude": 39.375183,
      "longitude": -7.681951,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703329313,
      "ems": null
    },
    {
      "latitude": 39.371231,
      "longitude": -7.684509,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703329322,
      "ems": null
    },
    {
      "latitude": 39.36755,
      "longitude": -7.686829,
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
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703329331,
      "ems": null
    },
    {
      "latitude": 39.363876,
      "longitude": -7.689056,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703329340,
      "ems": null
    },
    {
      "latitude": 39.360382,
      "longitude": -7.691345,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703329348,
      "ems": null
    },
    {
      "latitude": 39.356369,
      "longitude": -7.694072,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703329358,
      "ems": null
    },
    {
      "latitude": 39.352608,
      "longitude": -7.696594,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703329367,
      "ems": null
    },
    {
      "latitude": 39.348862,
      "longitude": -7.699386,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703329376,
      "ems": null
    },
    {
      "latitude": 39.345161,
      "longitude": -7.702209,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703329385,
      "ems": null
    },
    {
      "latitude": 39.341263,
      "longitude": -7.704939,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703329395,
      "ems": null
    },
    {
      "latitude": 39.3372,
      "longitude": -7.707703,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703329404,
      "ems": null
    },
    {
      "latitude": 39.333435,
      "longitude": -7.710253,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703329412,
      "ems": null
    },
    {
      "latitude": 39.329453,
      "longitude": -7.71294,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703329422,
      "ems": null
    },
    {
      "latitude": 39.325745,
      "longitude": -7.715507,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703329431,
      "ems": null
    },
    {
      "latitude": 39.321793,
      "longitude": -7.718262,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703329440,
      "ems": null
    },
    {
      "latitude": 39.318066,
      "longitude": -7.721069,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703329449,
      "ems": null
    },
    {
      "latitude": 39.314854,
      "longitude": -7.723694,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703329457,
      "ems": null
    },
    {
      "latitude": 39.311096,
      "longitude": -7.726493,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703329467,
      "ems": null
    },
    {
      "latitude": 39.309494,
      "longitude": -7.727449,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703329470,
      "ems": null
    },
    {
      "latitude": 39.307964,
      "longitude": -7.728333,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703329473,
      "ems": null
    },
    {
      "latitude": 39.306885,
      "longitude": -7.728941,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 202,
      "squawk": "3260",
      "timestamp": 1703329476,
      "ems": null
    },
    {
      "latitude": 39.305496,
      "longitude": -7.729614,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 201,
      "squawk": "3260",
      "timestamp": 1703329479,
      "ems": null
    },
    {
      "latitude": 39.304184,
      "longitude": -7.730196,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 198,
      "squawk": "3260",
      "timestamp": 1703329482,
      "ems": null
    },
    {
      "latitude": 39.302811,
      "longitude": -7.730852,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 200,
      "squawk": "3260",
      "timestamp": 1703329485,
      "ems": null
    },
    {
      "latitude": 39.302193,
      "longitude": -7.73114,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 201,
      "squawk": "3260",
      "timestamp": 1703329487,
      "ems": null
    },
    {
      "latitude": 39.299911,
      "longitude": -7.732361,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703329491,
      "ems": null
    },
    {
      "latitude": 39.298607,
      "longitude": -7.733093,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703329494,
      "ems": null
    },
    {
      "latitude": 39.294708,
      "longitude": -7.73539,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703329503,
      "ems": null
    },
    {
      "latitude": 39.293427,
      "longitude": -7.736166,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703329506,
      "ems": null
    },
    {
      "latitude": 39.292191,
      "longitude": -7.737002,
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
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703329509,
      "ems": null
    },
    {
      "latitude": 39.291046,
      "longitude": -7.737838,
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
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703329512,
      "ems": null
    },
    {
      "latitude": 39.28981,
      "longitude": -7.738674,
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
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703329515,
      "ems": null
    },
    {
      "latitude": 39.288574,
      "longitude": -7.73951,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703329518,
      "ems": null
    },
    {
      "latitude": 39.284595,
      "longitude": -7.741699,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 201,
      "squawk": "3260",
      "timestamp": 1703329527,
      "ems": null
    },
    {
      "latitude": 39.280884,
      "longitude": -7.744167,
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
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703329536,
      "ems": null
    },
    {
      "latitude": 39.277241,
      "longitude": -7.74707,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703329545,
      "ems": null
    },
    {
      "latitude": 39.276031,
      "longitude": -7.748047,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703329548,
      "ems": null
    },
    {
      "latitude": 39.274841,
      "longitude": -7.749003,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703329551,
      "ems": null
    },
    {
      "latitude": 39.271362,
      "longitude": -7.751631,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703329560,
      "ems": null
    },
    {
      "latitude": 39.267742,
      "longitude": -7.754333,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703329569,
      "ems": null
    },
    {
      "latitude": 39.264175,
      "longitude": -7.757124,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703329578,
      "ems": null
    },
    {
      "latitude": 39.260925,
      "longitude": -7.75999,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 216,
      "squawk": "3260",
      "timestamp": 1703329587,
      "ems": null
    },
    {
      "latitude": 39.259644,
      "longitude": -7.761169,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 215,
      "squawk": "3260",
      "timestamp": 1703329590,
      "ems": null
    },
    {
      "latitude": 39.256165,
      "longitude": -7.764229,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 213,
      "squawk": "3260",
      "timestamp": 1703329599,
      "ems": null
    },
    {
      "latitude": 39.25264,
      "longitude": -7.767095,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "3260",
      "timestamp": 1703329608,
      "ems": null
    },
    {
      "latitude": 39.248932,
      "longitude": -7.769961,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703329617,
      "ems": null
    },
    {
      "latitude": 39.247772,
      "longitude": -7.770813,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703329620,
      "ems": null
    },
    {
      "latitude": 39.244003,
      "longitude": -7.773621,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703329629,
      "ems": null
    },
    {
      "latitude": 39.240189,
      "longitude": -7.776529,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703329639,
      "ems": null
    },
    {
      "latitude": 39.236462,
      "longitude": -7.779358,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703329648,
      "ems": null
    },
    {
      "latitude": 39.232819,
      "longitude": -7.782022,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703329657,
      "ems": null
    },
    {
      "latitude": 39.229057,
      "longitude": -7.784729,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703329665,
      "ems": null
    },
    {
      "latitude": 39.226501,
      "longitude": -7.786321,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703329671,
      "ems": null
    },
    {
      "latitude": 39.225037,
      "longitude": -7.787217,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703329675,
      "ems": null
    },
    {
      "latitude": 39.221237,
      "longitude": -7.789725,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703329684,
      "ems": null
    },
    {
      "latitude": 39.217468,
      "longitude": -7.792603,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703329693,
      "ems": null
    },
    {
      "latitude": 39.21365,
      "longitude": -7.795532,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "3260",
      "timestamp": 1703329702,
      "ems": null
    },
    {
      "latitude": 39.212494,
      "longitude": -7.796472,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 211,
      "squawk": "3260",
      "timestamp": 1703329705,
      "ems": null
    },
    {
      "latitude": 39.211277,
      "longitude": -7.797424,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "3260",
      "timestamp": 1703329708,
      "ems": null
    },
    {
      "latitude": 39.207642,
      "longitude": -7.800293,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 211,
      "squawk": "3260",
      "timestamp": 1703329717,
      "ems": null
    },
    {
      "latitude": 39.203735,
      "longitude": -7.803162,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703329726,
      "ems": null
    },
    {
      "latitude": 39.200008,
      "longitude": -7.805786,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703329735,
      "ems": null
    },
    {
      "latitude": 39.198761,
      "longitude": -7.806503,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703329738,
      "ems": null
    },
    {
      "latitude": 39.197342,
      "longitude": -7.807219,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 199,
      "squawk": "3260",
      "timestamp": 1703329741,
      "ems": null
    },
    {
      "latitude": 39.196098,
      "longitude": -7.807678,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 195,
      "squawk": "3260",
      "timestamp": 1703329744,
      "ems": null
    },
    {
      "latitude": 39.194565,
      "longitude": -7.808289,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 196,
      "squawk": "3260",
      "timestamp": 1703329747,
      "ems": null
    },
    {
      "latitude": 39.193401,
      "longitude": -7.808716,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 198,
      "squawk": "3260",
      "timestamp": 1703329750,
      "ems": null
    },
    {
      "latitude": 39.192001,
      "longitude": -7.809387,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 201,
      "squawk": "3260",
      "timestamp": 1703329753,
      "ems": null
    },
    {
      "latitude": 39.190842,
      "longitude": -7.810025,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 202,
      "squawk": "3260",
      "timestamp": 1703329756,
      "ems": null
    },
    {
      "latitude": 39.189331,
      "longitude": -7.810802,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 201,
      "squawk": "3260",
      "timestamp": 1703329759,
      "ems": null
    },
    {
      "latitude": 39.186676,
      "longitude": -7.812056,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 197,
      "squawk": "3260",
      "timestamp": 1703329766,
      "ems": null
    },
    {
      "latitude": 39.182419,
      "longitude": -7.813727,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 200,
      "squawk": "3260",
      "timestamp": 1703329774,
      "ems": null
    },
    {
      "latitude": 39.181297,
      "longitude": -7.814331,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703329777,
      "ems": null
    },
    {
      "latitude": 39.179901,
      "longitude": -7.815308,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703329780,
      "ems": null
    },
    {
      "latitude": 39.178711,
      "longitude": -7.816175,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703329783,
      "ems": null
    },
    {
      "latitude": 39.177387,
      "longitude": -7.8172,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703329787,
      "ems": null
    },
    {
      "latitude": 39.176361,
      "longitude": -7.817932,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703329789,
      "ems": null
    },
    {
      "latitude": 39.175152,
      "longitude": -7.818848,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703329792,
      "ems": null
    },
    {
      "latitude": 39.173721,
      "longitude": -7.819818,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703329796,
      "ems": null
    },
    {
      "latitude": 39.172543,
      "longitude": -7.820618,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703329799,
      "ems": null
    },
    {
      "latitude": 39.171341,
      "longitude": -7.82143,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703329802,
      "ems": null
    },
    {
      "latitude": 39.167564,
      "longitude": -7.823608,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 199,
      "squawk": "3260",
      "timestamp": 1703329811,
      "ems": null
    },
    {
      "latitude": 39.166214,
      "longitude": -7.824057,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 191,
      "squawk": "3260",
      "timestamp": 1703329814,
      "ems": null
    },
    {
      "latitude": 39.164932,
      "longitude": -7.824475,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 198,
      "squawk": "3260",
      "timestamp": 1703329817,
      "ems": null
    },
    {
      "latitude": 39.162918,
      "longitude": -7.826266,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 231,
      "squawk": "3260",
      "timestamp": 1703329823,
      "ems": null
    },
    {
      "latitude": 39.162117,
      "longitude": -7.828064,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 244,
      "squawk": "3260",
      "timestamp": 1703329826,
      "ems": null
    },
    {
      "latitude": 39.161774,
      "longitude": -7.829729,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 259,
      "squawk": "3260",
      "timestamp": 1703329829,
      "ems": null
    },
    {
      "latitude": 39.161606,
      "longitude": -7.831177,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 263,
      "squawk": "3260",
      "timestamp": 1703329832,
      "ems": null
    },
    {
      "latitude": 39.161545,
      "longitude": -7.832894,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 266,
      "squawk": "3260",
      "timestamp": 1703329835,
      "ems": null
    },
    {
      "latitude": 39.161453,
      "longitude": -7.834506,
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
      "heading": 266,
      "squawk": "3260",
      "timestamp": 1703329838,
      "ems": null
    },
    {
      "latitude": 39.161324,
      "longitude": -7.836182,
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
      "heading": 264,
      "squawk": "3260",
      "timestamp": 1703329841,
      "ems": null
    },
    {
      "latitude": 39.161232,
      "longitude": -7.837646,
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
      "heading": 264,
      "squawk": "3260",
      "timestamp": 1703329844,
      "ems": null
    },
    {
      "latitude": 39.161087,
      "longitude": -7.839342,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 264,
      "squawk": "3260",
      "timestamp": 1703329847,
      "ems": null
    },
    {
      "latitude": 39.16095,
      "longitude": -7.840954,
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
      "heading": 262,
      "squawk": "3260",
      "timestamp": 1703329850,
      "ems": null
    },
    {
      "latitude": 39.160721,
      "longitude": -7.842773,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 258,
      "squawk": "3260",
      "timestamp": 1703329853,
      "ems": null
    },
    {
      "latitude": 39.160442,
      "longitude": -7.844299,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 255,
      "squawk": "3260",
      "timestamp": 1703329856,
      "ems": null
    },
    {
      "latitude": 39.159927,
      "longitude": -7.846069,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 248,
      "squawk": "3260",
      "timestamp": 1703329859,
      "ems": null
    },
    {
      "latitude": 39.15921,
      "longitude": -7.847702,
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
      "heading": 235,
      "squawk": "3260",
      "timestamp": 1703329862,
      "ems": null
    },
    {
      "latitude": 39.158253,
      "longitude": -7.84906,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 224,
      "squawk": "3260",
      "timestamp": 1703329865,
      "ems": null
    },
    {
      "latitude": 39.157196,
      "longitude": -7.85009,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 215,
      "squawk": "3260",
      "timestamp": 1703329868,
      "ems": null
    },
    {
      "latitude": 39.155823,
      "longitude": -7.851344,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 215,
      "squawk": "3260",
      "timestamp": 1703329871,
      "ems": null
    },
    {
      "latitude": 39.154633,
      "longitude": -7.852538,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 217,
      "squawk": "3260",
      "timestamp": 1703329874,
      "ems": null
    },
    {
      "latitude": 39.153305,
      "longitude": -7.853911,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 219,
      "squawk": "3260",
      "timestamp": 1703329877,
      "ems": null
    },
    {
      "latitude": 39.152298,
      "longitude": -7.854926,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 218,
      "squawk": "3260",
      "timestamp": 1703329880,
      "ems": null
    },
    {
      "latitude": 39.151016,
      "longitude": -7.856061,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703329883,
      "ems": null
    },
    {
      "latitude": 39.149689,
      "longitude": -7.857135,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703329886,
      "ems": null
    },
    {
      "latitude": 39.148636,
      "longitude": -7.858031,
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
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703329889,
      "ems": null
    },
    {
      "latitude": 39.147266,
      "longitude": -7.85907,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 211,
      "squawk": "3260",
      "timestamp": 1703329892,
      "ems": null
    },
    {
      "latitude": 39.146057,
      "longitude": -7.859985,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703329895,
      "ems": null
    },
    {
      "latitude": 39.144836,
      "longitude": -7.860837,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703329898,
      "ems": null
    },
    {
      "latitude": 39.143784,
      "longitude": -7.861554,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703329901,
      "ems": null
    },
    {
      "latitude": 39.142517,
      "longitude": -7.862305,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703329904,
      "ems": null
    },
    {
      "latitude": 39.141174,
      "longitude": -7.863106,
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
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703329907,
      "ems": null
    },
    {
      "latitude": 39.139938,
      "longitude": -7.863883,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703329910,
      "ems": null
    },
    {
      "latitude": 39.138653,
      "longitude": -7.864624,
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
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703329913,
      "ems": null
    },
    {
      "latitude": 39.137444,
      "longitude": -7.865417,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703329916,
      "ems": null
    },
    {
      "latitude": 39.133896,
      "longitude": -7.867883,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703329925,
      "ems": null
    },
    {
      "latitude": 39.130276,
      "longitude": -7.870605,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 211,
      "squawk": "3260",
      "timestamp": 1703329935,
      "ems": null
    },
    {
      "latitude": 39.129135,
      "longitude": -7.871525,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703329937,
      "ems": null
    },
    {
      "latitude": 39.127991,
      "longitude": -7.87254,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 213,
      "squawk": "3260",
      "timestamp": 1703329941,
      "ems": null
    },
    {
      "latitude": 39.126831,
      "longitude": -7.873535,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 215,
      "squawk": "3260",
      "timestamp": 1703329944,
      "ems": null
    },
    {
      "latitude": 39.125713,
      "longitude": -7.874573,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 216,
      "squawk": "3260",
      "timestamp": 1703329947,
      "ems": null
    },
    {
      "latitude": 39.124557,
      "longitude": -7.875705,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 216,
      "squawk": "3260",
      "timestamp": 1703329950,
      "ems": null
    },
    {
      "latitude": 39.123505,
      "longitude": -7.8766,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 213,
      "squawk": "3260",
      "timestamp": 1703329952,
      "ems": null
    },
    {
      "latitude": 39.119614,
      "longitude": -7.879639,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703329961,
      "ems": null
    },
    {
      "latitude": 39.115425,
      "longitude": -7.882874,
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
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703329971,
      "ems": null
    },
    {
      "latitude": 39.11412,
      "longitude": -7.883789,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703329974,
      "ems": null
    },
    {
      "latitude": 39.11277,
      "longitude": -7.884644,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703329977,
      "ems": null
    },
    {
      "latitude": 39.111607,
      "longitude": -7.885315,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703329980,
      "ems": null
    },
    {
      "latitude": 39.110092,
      "longitude": -7.886213,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703329983,
      "ems": null
    },
    {
      "latitude": 39.108906,
      "longitude": -7.886902,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703329986,
      "ems": null
    },
    {
      "latitude": 39.107483,
      "longitude": -7.887706,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703329989,
      "ems": null
    },
    {
      "latitude": 39.106155,
      "longitude": -7.888482,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703329992,
      "ems": null
    },
    {
      "latitude": 39.104599,
      "longitude": -7.889318,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703329995,
      "ems": null
    },
    {
      "latitude": 39.103226,
      "longitude": -7.890094,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703329998,
      "ems": null
    },
    {
      "latitude": 39.099197,
      "longitude": -7.892423,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703330007,
      "ems": null
    },
    {
      "latitude": 39.095169,
      "longitude": -7.894811,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703330016,
      "ems": null
    },
    {
      "latitude": 39.092426,
      "longitude": -7.896362,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703330022,
      "ems": null
    },
    {
      "latitude": 39.088425,
      "longitude": -7.898743,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703330031,
      "ems": null
    },
    {
      "latitude": 39.084412,
      "longitude": -7.901379,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703330040,
      "ems": null
    },
    {
      "latitude": 39.080521,
      "longitude": -7.904006,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703330049,
      "ems": null
    },
    {
      "latitude": 39.07663,
      "longitude": -7.906693,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703330058,
      "ems": null
    },
    {
      "latitude": 39.072643,
      "longitude": -7.909302,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703330067,
      "ems": null
    },
    {
      "latitude": 39.068848,
      "longitude": -7.911888,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703330077,
      "ems": null
    },
    {
      "latitude": 39.065193,
      "longitude": -7.91449,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703330085,
      "ems": null
    },
    {
      "latitude": 39.061249,
      "longitude": -7.917321,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703330095,
      "ems": null
    },
    {
      "latitude": 39.057419,
      "longitude": -7.920105,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703330104,
      "ems": null
    },
    {
      "latitude": 39.05365,
      "longitude": -7.922635,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703330113,
      "ems": null
    },
    {
      "latitude": 39.050114,
      "longitude": -7.925293,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 211,
      "squawk": "3260",
      "timestamp": 1703330121,
      "ems": null
    },
    {
      "latitude": 39.046234,
      "longitude": -7.928487,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703330131,
      "ems": null
    },
    {
      "latitude": 39.042206,
      "longitude": -7.931353,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703330140,
      "ems": null
    },
    {
      "latitude": 39.03838,
      "longitude": -7.933716,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703330149,
      "ems": null
    },
    {
      "latitude": 39.036987,
      "longitude": -7.934637,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703330152,
      "ems": null
    },
    {
      "latitude": 39.035728,
      "longitude": -7.935425,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703330155,
      "ems": null
    },
    {
      "latitude": 39.034378,
      "longitude": -7.936279,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703330158,
      "ems": null
    },
    {
      "latitude": 39.03056,
      "longitude": -7.93866,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703330167,
      "ems": null
    },
    {
      "latitude": 39.02774,
      "longitude": -7.940249,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 200,
      "squawk": "3260",
      "timestamp": 1703330173,
      "ems": null
    },
    {
      "latitude": 39.026371,
      "longitude": -7.940857,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "3260",
      "timestamp": 1703330176,
      "ems": null
    },
    {
      "latitude": 39.024834,
      "longitude": -7.941589,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 200,
      "squawk": "3260",
      "timestamp": 1703330179,
      "ems": null
    },
    {
      "latitude": 39.02092,
      "longitude": -7.944011,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703330188,
      "ems": null
    },
    {
      "latitude": 39.01841,
      "longitude": -7.945862,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703330194,
      "ems": null
    },
    {
      "latitude": 39.017155,
      "longitude": -7.946777,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703330197,
      "ems": null
    },
    {
      "latitude": 39.014687,
      "longitude": -7.948486,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703330203,
      "ems": null
    },
    {
      "latitude": 39.013367,
      "longitude": -7.949325,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703330206,
      "ems": null
    },
    {
      "latitude": 39.012131,
      "longitude": -7.950161,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703330209,
      "ems": null
    },
    {
      "latitude": 39.010849,
      "longitude": -7.951056,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703330212,
      "ems": null
    },
    {
      "latitude": 39.007282,
      "longitude": -7.953552,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703330221,
      "ems": null
    },
    {
      "latitude": 39.003235,
      "longitude": -7.956543,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703330231,
      "ems": null
    },
    {
      "latitude": 38.999557,
      "longitude": -7.959229,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703330240,
      "ems": null
    },
    {
      "latitude": 38.996017,
      "longitude": -7.962102,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 214,
      "squawk": "3260",
      "timestamp": 1703330249,
      "ems": null
    },
    {
      "latitude": 38.994919,
      "longitude": -7.963118,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 215,
      "squawk": "3260",
      "timestamp": 1703330252,
      "ems": null
    },
    {
      "latitude": 38.993683,
      "longitude": -7.964252,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 215,
      "squawk": "3260",
      "timestamp": 1703330255,
      "ems": null
    },
    {
      "latitude": 38.992435,
      "longitude": -7.965393,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 216,
      "squawk": "3260",
      "timestamp": 1703330258,
      "ems": null
    },
    {
      "latitude": 38.991348,
      "longitude": -7.966521,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 217,
      "squawk": "3260",
      "timestamp": 1703330261,
      "ems": null
    },
    {
      "latitude": 38.990112,
      "longitude": -7.967715,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 217,
      "squawk": "3260",
      "timestamp": 1703330264,
      "ems": null
    },
    {
      "latitude": 38.988876,
      "longitude": -7.968909,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 215,
      "squawk": "3260",
      "timestamp": 1703330267,
      "ems": null
    },
    {
      "latitude": 38.985405,
      "longitude": -7.971985,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 214,
      "squawk": "3260",
      "timestamp": 1703330276,
      "ems": null
    },
    {
      "latitude": 38.981819,
      "longitude": -7.974976,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703330285,
      "ems": null
    },
    {
      "latitude": 38.980637,
      "longitude": -7.975955,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 211,
      "squawk": "3260",
      "timestamp": 1703330288,
      "ems": null
    },
    {
      "latitude": 38.979633,
      "longitude": -7.976746,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703330290,
      "ems": null
    },
    {
      "latitude": 38.978374,
      "longitude": -7.977722,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703330293,
      "ems": null
    },
    {
      "latitude": 38.974464,
      "longitude": -7.980896,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703330303,
      "ems": null
    },
    {
      "latitude": 38.971485,
      "longitude": -7.983337,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703330312,
      "ems": null
    },
    {
      "latitude": 38.966969,
      "longitude": -7.986816,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703330321,
      "ems": null
    },
    {
      "latitude": 38.964569,
      "longitude": -7.988673,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "3260",
      "timestamp": 1703330327,
      "ems": null
    },
    {
      "latitude": 38.96077,
      "longitude": -7.991718,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703330337,
      "ems": null
    },
    {
      "latitude": 38.9571,
      "longitude": -7.994751,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703330346,
      "ems": null
    },
    {
      "latitude": 38.953445,
      "longitude": -7.997509,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703330355,
      "ems": null
    },
    {
      "latitude": 38.949509,
      "longitude": -8.000614,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703330364,
      "ems": null
    },
    {
      "latitude": 38.945976,
      "longitude": -8.003601,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 214,
      "squawk": "3260",
      "timestamp": 1703330373,
      "ems": null
    },
    {
      "latitude": 38.944717,
      "longitude": -8.004761,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 215,
      "squawk": "3260",
      "timestamp": 1703330376,
      "ems": null
    },
    {
      "latitude": 38.943462,
      "longitude": -8.005981,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 216,
      "squawk": "3260",
      "timestamp": 1703330379,
      "ems": null
    },
    {
      "latitude": 38.942413,
      "longitude": -8.007003,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 218,
      "squawk": "3260",
      "timestamp": 1703330382,
      "ems": null
    },
    {
      "latitude": 38.941223,
      "longitude": -8.008317,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 221,
      "squawk": "3260",
      "timestamp": 1703330385,
      "ems": null
    },
    {
      "latitude": 38.940201,
      "longitude": -8.009583,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 226,
      "squawk": "3260",
      "timestamp": 1703330388,
      "ems": null
    },
    {
      "latitude": 38.93927,
      "longitude": -8.011047,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 232,
      "squawk": "3260",
      "timestamp": 1703330391,
      "ems": null
    },
    {
      "latitude": 38.938435,
      "longitude": -8.012939,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 241,
      "squawk": "3260",
      "timestamp": 1703330394,
      "ems": null
    },
    {
      "latitude": 38.937927,
      "longitude": -8.014646,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 251,
      "squawk": "3260",
      "timestamp": 1703330397,
      "ems": null
    },
    {
      "latitude": 38.937687,
      "longitude": -8.016296,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 261,
      "squawk": "3260",
      "timestamp": 1703330400,
      "ems": null
    },
    {
      "latitude": 38.937687,
      "longitude": -8.01825,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 273,
      "squawk": "3260",
      "timestamp": 1703330403,
      "ems": null
    },
    {
      "latitude": 38.938015,
      "longitude": -8.020386,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 285,
      "squawk": "3260",
      "timestamp": 1703330406,
      "ems": null
    },
    {
      "latitude": 38.938522,
      "longitude": -8.02205,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 292,
      "squawk": "3260",
      "timestamp": 1703330409,
      "ems": null
    },
    {
      "latitude": 38.939346,
      "longitude": -8.02396,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 301,
      "squawk": "3260",
      "timestamp": 1703330412,
      "ems": null
    },
    {
      "latitude": 38.940125,
      "longitude": -8.025333,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 307,
      "squawk": "3260",
      "timestamp": 1703330415,
      "ems": null
    },
    {
      "latitude": 38.94104,
      "longitude": -8.026672,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 311,
      "squawk": "3260",
      "timestamp": 1703330418,
      "ems": null
    },
    {
      "latitude": 38.942062,
      "longitude": -8.028198,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 311,
      "squawk": "3260",
      "timestamp": 1703330421,
      "ems": null
    },
    {
      "latitude": 38.943146,
      "longitude": -8.029693,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 313,
      "squawk": "3260",
      "timestamp": 1703330424,
      "ems": null
    },
    {
      "latitude": 38.944199,
      "longitude": -8.031125,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 313,
      "squawk": "3260",
      "timestamp": 1703330427,
      "ems": null
    },
    {
      "latitude": 38.945278,
      "longitude": -8.032532,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 314,
      "squawk": "3260",
      "timestamp": 1703330430,
      "ems": null
    },
    {
      "latitude": 38.946301,
      "longitude": -8.033875,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 315,
      "squawk": "3260",
      "timestamp": 1703330433,
      "ems": null
    },
    {
      "latitude": 38.947277,
      "longitude": -8.035095,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 315,
      "squawk": "3260",
      "timestamp": 1703330436,
      "ems": null
    },
    {
      "latitude": 38.948456,
      "longitude": -8.036559,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 316,
      "squawk": "3260",
      "timestamp": 1703330439,
      "ems": null
    },
    {
      "latitude": 38.949604,
      "longitude": -8.037903,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 316,
      "squawk": "3260",
      "timestamp": 1703330442,
      "ems": null
    },
    {
      "latitude": 38.952667,
      "longitude": -8.041813,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 314,
      "squawk": "3260",
      "timestamp": 1703330451,
      "ems": null
    },
    {
      "latitude": 38.955963,
      "longitude": -8.045933,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 316,
      "squawk": "3260",
      "timestamp": 1703330461,
      "ems": null
    },
    {
      "latitude": 38.958961,
      "longitude": -8.049622,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 316,
      "squawk": "3260",
      "timestamp": 1703330469,
      "ems": null
    },
    {
      "latitude": 38.962173,
      "longitude": -8.053528,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 316,
      "squawk": "3260",
      "timestamp": 1703330479,
      "ems": null
    },
    {
      "latitude": 38.965061,
      "longitude": -8.057129,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 315,
      "squawk": "3260",
      "timestamp": 1703330487,
      "ems": null
    },
    {
      "latitude": 38.96814,
      "longitude": -8.06092,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 316,
      "squawk": "3260",
      "timestamp": 1703330497,
      "ems": null
    },
    {
      "latitude": 38.971069,
      "longitude": -8.064443,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 316,
      "squawk": "3260",
      "timestamp": 1703330505,
      "ems": null
    },
    {
      "latitude": 38.973999,
      "longitude": -8.068145,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 315,
      "squawk": "3260",
      "timestamp": 1703330515,
      "ems": null
    },
    {
      "latitude": 38.97702,
      "longitude": -8.071846,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 316,
      "squawk": "3260",
      "timestamp": 1703330524,
      "ems": null
    },
    {
      "latitude": 38.979858,
      "longitude": -8.075429,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 315,
      "squawk": "3260",
      "timestamp": 1703330533,
      "ems": null
    },
    {
      "latitude": 38.982845,
      "longitude": -8.079163,
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
      "heading": 315,
      "squawk": "3260",
      "timestamp": 1703330542,
      "ems": null
    },
    {
      "latitude": 38.985718,
      "longitude": -8.082713,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 315,
      "squawk": "3260",
      "timestamp": 1703330551,
      "ems": null
    },
    {
      "latitude": 38.988804,
      "longitude": -8.086426,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 318,
      "squawk": "3260",
      "timestamp": 1703330560,
      "ems": null
    },
    {
      "latitude": 38.991852,
      "longitude": -8.089878,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 317,
      "squawk": "3260",
      "timestamp": 1703330569,
      "ems": null
    },
    {
      "latitude": 38.994949,
      "longitude": -8.093506,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 317,
      "squawk": "3260",
      "timestamp": 1703330578,
      "ems": null
    },
    {
      "latitude": 38.997894,
      "longitude": -8.097043,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 316,
      "squawk": "3260",
      "timestamp": 1703330587,
      "ems": null
    },
    {
      "latitude": 39.000858,
      "longitude": -8.100647,
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
      "heading": 316,
      "squawk": "3260",
      "timestamp": 1703330596,
      "ems": null
    },
    {
      "latitude": 39.003708,
      "longitude": -8.104149,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 316,
      "squawk": "3260",
      "timestamp": 1703330605,
      "ems": null
    },
    {
      "latitude": 39.006817,
      "longitude": -8.107849,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 317,
      "squawk": "3260",
      "timestamp": 1703330614,
      "ems": null
    },
    {
      "latitude": 39.008926,
      "longitude": -8.110298,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 317,
      "squawk": "3260",
      "timestamp": 1703330620,
      "ems": null
    },
    {
      "latitude": 39.012085,
      "longitude": -8.11424,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 314,
      "squawk": "3260",
      "timestamp": 1703330629,
      "ems": null
    },
    {
      "latitude": 39.01268,
      "longitude": -8.115135,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 311,
      "squawk": "3260",
      "timestamp": 1703330632,
      "ems": null
    },
    {
      "latitude": 39.013893,
      "longitude": -8.116882,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 310,
      "squawk": "3260",
      "timestamp": 1703330635,
      "ems": null
    },
    {
      "latitude": 39.014832,
      "longitude": -8.118299,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 309,
      "squawk": "3260",
      "timestamp": 1703330639,
      "ems": null
    },
    {
      "latitude": 39.015747,
      "longitude": -8.119733,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 308,
      "squawk": "3260",
      "timestamp": 1703330642,
      "ems": null
    },
    {
      "latitude": 39.016594,
      "longitude": -8.121094,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 308,
      "squawk": "3260",
      "timestamp": 1703330645,
      "ems": null
    },
    {
      "latitude": 39.017395,
      "longitude": -8.122359,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 308,
      "squawk": "3260",
      "timestamp": 1703330647,
      "ems": null
    },
    {
      "latitude": 39.018356,
      "longitude": -8.123912,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 308,
      "squawk": "3260",
      "timestamp": 1703330650,
      "ems": null
    },
    {
      "latitude": 39.019249,
      "longitude": -8.125427,
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
      "heading": 307,
      "squawk": "3260",
      "timestamp": 1703330653,
      "ems": null
    },
    {
      "latitude": 39.02005,
      "longitude": -8.126838,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 305,
      "squawk": "3260",
      "timestamp": 1703330656,
      "ems": null
    },
    {
      "latitude": 39.02092,
      "longitude": -8.128449,
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
      "heading": 305,
      "squawk": "3260",
      "timestamp": 1703330660,
      "ems": null
    },
    {
      "latitude": 39.021763,
      "longitude": -8.129944,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 305,
      "squawk": "3260",
      "timestamp": 1703330663,
      "ems": null
    },
    {
      "latitude": 39.022552,
      "longitude": -8.131409,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 305,
      "squawk": "3260",
      "timestamp": 1703330666,
      "ems": null
    },
    {
      "latitude": 39.025131,
      "longitude": -8.135913,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 306,
      "squawk": "3260",
      "timestamp": 1703330675,
      "ems": null
    },
    {
      "latitude": 39.027908,
      "longitude": -8.140442,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 307,
      "squawk": "3260",
      "timestamp": 1703330684,
      "ems": null
    },
    {
      "latitude": 39.030746,
      "longitude": -8.145142,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 307,
      "squawk": "3260",
      "timestamp": 1703330693,
      "ems": null
    },
    {
      "latitude": 39.033401,
      "longitude": -8.149475,
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
      "heading": 308,
      "squawk": "3260",
      "timestamp": 1703330702,
      "ems": null
    },
    {
      "latitude": 39.036194,
      "longitude": -8.153748,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 310,
      "squawk": "3260",
      "timestamp": 1703330711,
      "ems": null
    },
    {
      "latitude": 39.038242,
      "longitude": -8.156738,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 313,
      "squawk": "3260",
      "timestamp": 1703330717,
      "ems": null
    },
    {
      "latitude": 39.03923,
      "longitude": -8.158006,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "squawk": "3260",
      "timestamp": 1703330720,
      "ems": null
    },
    {
      "latitude": 39.040375,
      "longitude": -8.159319,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 318,
      "squawk": "3260",
      "timestamp": 1703330723,
      "ems": null
    },
    {
      "latitude": 39.041454,
      "longitude": -8.160461,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 324,
      "squawk": "3260",
      "timestamp": 1703330726,
      "ems": null
    },
    {
      "latitude": 39.042618,
      "longitude": -8.161349,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 332,
      "squawk": "3260",
      "timestamp": 1703330729,
      "ems": null
    },
    {
      "latitude": 39.043808,
      "longitude": -8.161886,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 341,
      "squawk": "3260",
      "timestamp": 1703330732,
      "ems": null
    },
    {
      "latitude": 39.045227,
      "longitude": -8.162305,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 352,
      "squawk": "3260",
      "timestamp": 1703330735,
      "ems": null
    },
    {
      "latitude": 39.046482,
      "longitude": -8.162415,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703330738,
      "ems": null
    },
    {
      "latitude": 39.047745,
      "longitude": -8.162245,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 6,
      "squawk": "3260",
      "timestamp": 1703330741,
      "ems": null
    },
    {
      "latitude": 39.049072,
      "longitude": -8.161946,
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
      "heading": 12,
      "squawk": "3260",
      "timestamp": 1703330744,
      "ems": null
    },
    {
      "latitude": 39.050217,
      "longitude": -8.161588,
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
      "heading": 14,
      "squawk": "3260",
      "timestamp": 1703330747,
      "ems": null
    },
    {
      "latitude": 39.051498,
      "longitude": -8.16111,
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
      "heading": 16,
      "squawk": "3260",
      "timestamp": 1703330750,
      "ems": null
    },
    {
      "latitude": 39.052719,
      "longitude": -8.160583,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 18,
      "squawk": "3260",
      "timestamp": 1703330753,
      "ems": null
    },
    {
      "latitude": 39.054016,
      "longitude": -8.159976,
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
      "heading": 20,
      "squawk": "3260",
      "timestamp": 1703330756,
      "ems": null
    },
    {
      "latitude": 39.055069,
      "longitude": -8.159498,
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
      "heading": 17,
      "squawk": "3260",
      "timestamp": 1703330759,
      "ems": null
    },
    {
      "latitude": 39.056305,
      "longitude": -8.159081,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 15,
      "squawk": "3260",
      "timestamp": 1703330762,
      "ems": null
    },
    {
      "latitude": 39.057514,
      "longitude": -8.158691,
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
      "heading": 13,
      "squawk": "3260",
      "timestamp": 1703330765,
      "ems": null
    },
    {
      "latitude": 39.05896,
      "longitude": -8.158185,
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
      "heading": 15,
      "squawk": "3260",
      "timestamp": 1703330768,
      "ems": null
    },
    {
      "latitude": 39.062679,
      "longitude": -8.15686,
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
      "heading": 14,
      "squawk": "3260",
      "timestamp": 1703330777,
      "ems": null
    },
    {
      "latitude": 39.065186,
      "longitude": -8.156035,
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
      "heading": 15,
      "squawk": "3260",
      "timestamp": 1703330784,
      "ems": null
    },
    {
      "latitude": 39.068733,
      "longitude": -8.154602,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 18,
      "squawk": "3260",
      "timestamp": 1703330792,
      "ems": null
    },
    {
      "latitude": 39.069901,
      "longitude": -8.154124,
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
      "heading": 19,
      "squawk": "3260",
      "timestamp": 1703330795,
      "ems": null
    },
    {
      "latitude": 39.071106,
      "longitude": -8.153564,
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
      "heading": 20,
      "squawk": "3260",
      "timestamp": 1703330798,
      "ems": null
    },
    {
      "latitude": 39.072281,
      "longitude": -8.15293,
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
      "heading": 20,
      "squawk": "3260",
      "timestamp": 1703330801,
      "ems": null
    },
    {
      "latitude": 39.073471,
      "longitude": -8.152333,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 22,
      "squawk": "3260",
      "timestamp": 1703330805,
      "ems": null
    },
    {
      "latitude": 39.074661,
      "longitude": -8.151736,
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
      "heading": 23,
      "squawk": "3260",
      "timestamp": 1703330808,
      "ems": null
    },
    {
      "latitude": 39.075806,
      "longitude": -8.151079,
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
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703330811,
      "ems": null
    },
    {
      "latitude": 39.076927,
      "longitude": -8.150391,
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
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703330813,
      "ems": null
    },
    {
      "latitude": 39.078232,
      "longitude": -8.149646,
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
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703330817,
      "ems": null
    },
    {
      "latitude": 39.079239,
      "longitude": -8.149049,
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
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703330819,
      "ems": null
    },
    {
      "latitude": 39.080475,
      "longitude": -8.148273,
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
      "heading": 25,
      "squawk": "3260",
      "timestamp": 1703330823,
      "ems": null
    },
    {
      "latitude": 39.08144,
      "longitude": -8.147705,
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
      "heading": 26,
      "squawk": "3260",
      "timestamp": 1703330825,
      "ems": null
    },
    {
      "latitude": 39.082809,
      "longitude": -8.14678,
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
      "heading": 26,
      "squawk": "3260",
      "timestamp": 1703330829,
      "ems": null
    },
    {
      "latitude": 39.084,
      "longitude": -8.146004,
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
      "heading": 26,
      "squawk": "3260",
      "timestamp": 1703330832,
      "ems": null
    },
    {
      "latitude": 39.087387,
      "longitude": -8.143914,
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
      "heading": 26,
      "squawk": "3260",
      "timestamp": 1703330841,
      "ems": null
    },
    {
      "latitude": 39.090797,
      "longitude": -8.141785,
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
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703330849,
      "ems": null
    },
    {
      "latitude": 39.094437,
      "longitude": -8.139556,
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
      "heading": 26,
      "squawk": "3260",
      "timestamp": 1703330859,
      "ems": null
    },
    {
      "latitude": 39.097961,
      "longitude": -8.137406,
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
      "heading": 26,
      "squawk": "3260",
      "timestamp": 1703330868,
      "ems": null
    },
    {
      "latitude": 39.10146,
      "longitude": -8.135193,
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
      "heading": 26,
      "squawk": "3260",
      "timestamp": 1703330877,
      "ems": null
    },
    {
      "latitude": 39.105183,
      "longitude": -8.132874,
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
      "heading": 26,
      "squawk": "3260",
      "timestamp": 1703330886,
      "ems": null
    },
    {
      "latitude": 39.108444,
      "longitude": -8.130838,
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
      "heading": 25,
      "squawk": "3260",
      "timestamp": 1703330895,
      "ems": null
    },
    {
      "latitude": 39.111748,
      "longitude": -8.128784,
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
      "heading": 25,
      "squawk": "3260",
      "timestamp": 1703330904,
      "ems": null
    },
    {
      "latitude": 39.115173,
      "longitude": -8.126539,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 27,
      "squawk": "3260",
      "timestamp": 1703330913,
      "ems": null
    },
    {
      "latitude": 39.118404,
      "longitude": -8.12439,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 27,
      "squawk": "3260",
      "timestamp": 1703330922,
      "ems": null
    },
    {
      "latitude": 39.121582,
      "longitude": -8.12218,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 28,
      "squawk": "3260",
      "timestamp": 1703330931,
      "ems": null
    },
    {
      "latitude": 39.124828,
      "longitude": -8.119873,
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
      "heading": 30,
      "squawk": "3260",
      "timestamp": 1703330940,
      "ems": null
    },
    {
      "latitude": 39.128036,
      "longitude": -8.117344,
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
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703330949,
      "ems": null
    },
    {
      "latitude": 39.129112,
      "longitude": -8.116455,
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
      "heading": 32,
      "squawk": "3260",
      "timestamp": 1703330952,
      "ems": null
    },
    {
      "latitude": 39.13018,
      "longitude": -8.115601,
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
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703330955,
      "ems": null
    },
    {
      "latitude": 39.131104,
      "longitude": -8.114777,
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
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703330958,
      "ems": null
    },
    {
      "latitude": 39.134373,
      "longitude": -8.112061,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 32,
      "squawk": "3260",
      "timestamp": 1703330967,
      "ems": null
    },
    {
      "latitude": 39.137558,
      "longitude": -8.109403,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703330977,
      "ems": null
    },
    {
      "latitude": 39.140396,
      "longitude": -8.107015,
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
      "heading": 32,
      "squawk": "3260",
      "timestamp": 1703330985,
      "ems": null
    },
    {
      "latitude": 39.143372,
      "longitude": -8.104686,
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
      "heading": 29,
      "squawk": "3260",
      "timestamp": 1703330993,
      "ems": null
    },
    {
      "latitude": 39.146893,
      "longitude": -8.102234,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 27,
      "squawk": "3260",
      "timestamp": 1703331003,
      "ems": null
    },
    {
      "latitude": 39.147995,
      "longitude": -8.101521,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 26,
      "squawk": "3260",
      "timestamp": 1703331006,
      "ems": null
    },
    {
      "latitude": 39.149094,
      "longitude": -8.100805,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 26,
      "squawk": "3260",
      "timestamp": 1703331009,
      "ems": null
    },
    {
      "latitude": 39.150192,
      "longitude": -8.100088,
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
      "heading": 27,
      "squawk": "3260",
      "timestamp": 1703331012,
      "ems": null
    },
    {
      "latitude": 39.153316,
      "longitude": -8.097961,
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
      "heading": 27,
      "squawk": "3260",
      "timestamp": 1703331020,
      "ems": null
    },
    {
      "latitude": 39.156509,
      "longitude": -8.095849,
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
      "heading": 26,
      "squawk": "3260",
      "timestamp": 1703331029,
      "ems": null
    },
    {
      "latitude": 39.160114,
      "longitude": -8.093445,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 29,
      "squawk": "3260",
      "timestamp": 1703331039,
      "ems": null
    },
    {
      "latitude": 39.163284,
      "longitude": -8.090894,
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
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703331048,
      "ems": null
    },
    {
      "latitude": 39.163971,
      "longitude": -8.090296,
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
      "heading": 32,
      "squawk": "3260",
      "timestamp": 1703331050,
      "ems": null
    },
    {
      "latitude": 39.165329,
      "longitude": -8.089172,
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
      "heading": 32,
      "squawk": "3260",
      "timestamp": 1703331053,
      "ems": null
    },
    {
      "latitude": 39.165981,
      "longitude": -8.088684,
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
      "heading": 32,
      "squawk": "3260",
      "timestamp": 1703331056,
      "ems": null
    },
    {
      "latitude": 39.167469,
      "longitude": -8.087463,
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
      "heading": 32,
      "squawk": "3260",
      "timestamp": 1703331059,
      "ems": null
    },
    {
      "latitude": 39.168274,
      "longitude": -8.086833,
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
      "heading": 32,
      "squawk": "3260",
      "timestamp": 1703331062,
      "ems": null
    },
    {
      "latitude": 39.169418,
      "longitude": -8.085938,
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
      "heading": 32,
      "squawk": "3260",
      "timestamp": 1703331065,
      "ems": null
    },
    {
      "latitude": 39.172256,
      "longitude": -8.083669,
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
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703331073,
      "ems": null
    },
    {
      "latitude": 39.175552,
      "longitude": -8.081161,
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
      "heading": 29,
      "squawk": "3260",
      "timestamp": 1703331082,
      "ems": null
    },
    {
      "latitude": 39.178619,
      "longitude": -8.078952,
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
      "heading": 29,
      "squawk": "3260",
      "timestamp": 1703331091,
      "ems": null
    },
    {
      "latitude": 39.18219,
      "longitude": -8.076324,
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
      "heading": 28,
      "squawk": "3260",
      "timestamp": 1703331100,
      "ems": null
    },
    {
      "latitude": 39.18544,
      "longitude": -8.073914,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703331109,
      "ems": null
    },
    {
      "latitude": 39.188789,
      "longitude": -8.07135,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703331118,
      "ems": null
    },
    {
      "latitude": 39.192032,
      "longitude": -8.068861,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703331127,
      "ems": null
    },
    {
      "latitude": 39.195374,
      "longitude": -8.066413,
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
      "heading": 29,
      "squawk": "3260",
      "timestamp": 1703331137,
      "ems": null
    },
    {
      "latitude": 39.198662,
      "longitude": -8.064087,
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
      "heading": 27,
      "squawk": "3260",
      "timestamp": 1703331145,
      "ems": null
    },
    {
      "latitude": 39.200912,
      "longitude": -8.062592,
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
      "heading": 26,
      "squawk": "3260",
      "timestamp": 1703331151,
      "ems": null
    },
    {
      "latitude": 39.202103,
      "longitude": -8.061875,
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
      "heading": 25,
      "squawk": "3260",
      "timestamp": 1703331155,
      "ems": null
    },
    {
      "latitude": 39.20311,
      "longitude": -8.061278,
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
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703331158,
      "ems": null
    },
    {
      "latitude": 39.204437,
      "longitude": -8.060502,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 22,
      "squawk": "3260",
      "timestamp": 1703331161,
      "ems": null
    },
    {
      "latitude": 39.205627,
      "longitude": -8.060024,
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
      "heading": 12,
      "squawk": "3260",
      "timestamp": 1703331164,
      "ems": null
    },
    {
      "latitude": 39.206852,
      "longitude": -8.059937,
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
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703331166,
      "ems": null
    },
    {
      "latitude": 39.208015,
      "longitude": -8.06012,
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
      "heading": 348,
      "squawk": "3260",
      "timestamp": 1703331169,
      "ems": null
    },
    {
      "latitude": 39.209335,
      "longitude": -8.060801,
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
      "heading": 334,
      "squawk": "3260",
      "timestamp": 1703331173,
      "ems": null
    },
    {
      "latitude": 39.210434,
      "longitude": -8.061636,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 329,
      "squawk": "3260",
      "timestamp": 1703331176,
      "ems": null
    },
    {
      "latitude": 39.211441,
      "longitude": -8.062472,
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
      "heading": 326,
      "squawk": "3260",
      "timestamp": 1703331179,
      "ems": null
    },
    {
      "latitude": 39.212532,
      "longitude": -8.063416,
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
      "heading": 325,
      "squawk": "3260",
      "timestamp": 1703331182,
      "ems": null
    },
    {
      "latitude": 39.213276,
      "longitude": -8.064087,
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
      "heading": 324,
      "squawk": "3260",
      "timestamp": 1703331184,
      "ems": null
    },
    {
      "latitude": 39.214256,
      "longitude": -8.065125,
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
      "heading": 316,
      "squawk": "3260",
      "timestamp": 1703331188,
      "ems": null
    },
    {
      "latitude": 39.21524,
      "longitude": -8.066473,
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
      "heading": 309,
      "squawk": "3260",
      "timestamp": 1703331191,
      "ems": null
    },
    {
      "latitude": 39.216022,
      "longitude": -8.06781,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 304,
      "squawk": "3260",
      "timestamp": 1703331194,
      "ems": null
    },
    {
      "latitude": 39.216675,
      "longitude": -8.069214,
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
      "heading": 300,
      "squawk": "3260",
      "timestamp": 1703331197,
      "ems": null
    },
    {
      "latitude": 39.217281,
      "longitude": -8.070618,
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
      "heading": 299,
      "squawk": "3260",
      "timestamp": 1703331200,
      "ems": null
    },
    {
      "latitude": 39.217712,
      "longitude": -8.071608,
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
      "heading": 298,
      "squawk": "3260",
      "timestamp": 1703331202,
      "ems": null
    },
    {
      "latitude": 39.218491,
      "longitude": -8.073486,
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
      "heading": 297,
      "squawk": "3260",
      "timestamp": 1703331206,
      "ems": null
    },
    {
      "latitude": 39.218903,
      "longitude": -8.074533,
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
      "heading": 297,
      "squawk": "3260",
      "timestamp": 1703331208,
      "ems": null
    },
    {
      "latitude": 39.2197,
      "longitude": -8.076538,
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
      "heading": 297,
      "squawk": "3260",
      "timestamp": 1703331212,
      "ems": null
    },
    {
      "latitude": 39.220322,
      "longitude": -8.078056,
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
      "heading": 296,
      "squawk": "3260",
      "timestamp": 1703331215,
      "ems": null
    },
    {
      "latitude": 39.220818,
      "longitude": -8.079346,
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
      "heading": 296,
      "squawk": "3260",
      "timestamp": 1703331218,
      "ems": null
    },
    {
      "latitude": 39.221378,
      "longitude": -8.08075,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 295,
      "squawk": "3260",
      "timestamp": 1703331221,
      "ems": null
    },
    {
      "latitude": 39.221924,
      "longitude": -8.082235,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 297,
      "squawk": "3260",
      "timestamp": 1703331224,
      "ems": null
    },
    {
      "latitude": 39.223705,
      "longitude": -8.086365,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 298,
      "squawk": "3260",
      "timestamp": 1703331233,
      "ems": null
    },
    {
      "latitude": 39.224869,
      "longitude": -8.088745,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 303,
      "squawk": "3260",
      "timestamp": 1703331239,
      "ems": null
    },
    {
      "latitude": 39.225449,
      "longitude": -8.089938,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 302,
      "squawk": "3260",
      "timestamp": 1703331242,
      "ems": null
    },
    {
      "latitude": 39.226089,
      "longitude": -8.091192,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 303,
      "squawk": "3260",
      "timestamp": 1703331245,
      "ems": null
    },
    {
      "latitude": 39.22673,
      "longitude": -8.092468,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 303,
      "squawk": "3260",
      "timestamp": 1703331248,
      "ems": null
    },
    {
      "latitude": 39.227188,
      "longitude": -8.093401,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 302,
      "squawk": "3260",
      "timestamp": 1703331251,
      "ems": null
    },
    {
      "latitude": 39.22892,
      "longitude": -8.097473,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 297,
      "squawk": "3260",
      "timestamp": 1703331260,
      "ems": null
    },
    {
      "latitude": 39.230164,
      "longitude": -8.100327,
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
      "heading": 302,
      "squawk": "3260",
      "timestamp": 1703331266,
      "ems": null
    },
    {
      "latitude": 39.230988,
      "longitude": -8.101641,
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
      "heading": 309,
      "squawk": "3260",
      "timestamp": 1703331269,
      "ems": null
    },
    {
      "latitude": 39.231991,
      "longitude": -8.102783,
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
      "heading": 322,
      "squawk": "3260",
      "timestamp": 1703331272,
      "ems": null
    },
    {
      "latitude": 39.232819,
      "longitude": -8.103432,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 331,
      "squawk": "3260",
      "timestamp": 1703331275,
      "ems": null
    },
    {
      "latitude": 39.234055,
      "longitude": -8.104029,
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
      "heading": 344,
      "squawk": "3260",
      "timestamp": 1703331278,
      "ems": null
    },
    {
      "latitude": 39.235245,
      "longitude": -8.104208,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703331282,
      "ems": null
    },
    {
      "latitude": 39.236435,
      "longitude": -8.104089,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 7,
      "squawk": "3260",
      "timestamp": 1703331284,
      "ems": null
    },
    {
      "latitude": 39.237625,
      "longitude": -8.103638,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 20,
      "squawk": "3260",
      "timestamp": 1703331287,
      "ems": null
    },
    {
      "latitude": 39.238541,
      "longitude": -8.103014,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703331290,
      "ems": null
    },
    {
      "latitude": 39.239548,
      "longitude": -8.10176,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 48,
      "squawk": "3260",
      "timestamp": 1703331293,
      "ems": null
    },
    {
      "latitude": 39.240189,
      "longitude": -8.100447,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 63,
      "squawk": "3260",
      "timestamp": 1703331296,
      "ems": null
    },
    {
      "latitude": 39.240463,
      "longitude": -8.098877,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 84,
      "squawk": "3260",
      "timestamp": 1703331300,
      "ems": null
    },
    {
      "latitude": 39.240463,
      "longitude": -8.097879,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 93,
      "squawk": "3260",
      "timestamp": 1703331301,
      "ems": null
    },
    {
      "latitude": 39.240005,
      "longitude": -8.096087,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 114,
      "squawk": "3260",
      "timestamp": 1703331305,
      "ems": null
    },
    {
      "latitude": 39.239182,
      "longitude": -8.094714,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 131,
      "squawk": "3260",
      "timestamp": 1703331308,
      "ems": null
    },
    {
      "latitude": 39.238174,
      "longitude": -8.093939,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 153,
      "squawk": "3260",
      "timestamp": 1703331311,
      "ems": null
    },
    {
      "latitude": 39.236973,
      "longitude": -8.093628,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 172,
      "squawk": "3260",
      "timestamp": 1703331315,
      "ems": null
    },
    {
      "latitude": 39.236275,
      "longitude": -8.093628,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 183,
      "squawk": "3260",
      "timestamp": 1703331316,
      "ems": null
    },
    {
      "latitude": 39.235622,
      "longitude": -8.09375,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 198,
      "squawk": "3260",
      "timestamp": 1703331320,
      "ems": null
    },
    {
      "latitude": 39.23378,
      "longitude": -8.095073,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 221,
      "squawk": "3260",
      "timestamp": 1703331324,
      "ems": null
    },
    {
      "latitude": 39.233002,
      "longitude": -8.096327,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 234,
      "squawk": "3260",
      "timestamp": 1703331327,
      "ems": null
    },
    {
      "latitude": 39.232456,
      "longitude": -8.097839,
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
      "heading": 249,
      "squawk": "3260",
      "timestamp": 1703331330,
      "ems": null
    },
    {
      "latitude": 39.232224,
      "longitude": -8.099426,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 264,
      "squawk": "3260",
      "timestamp": 1703331333,
      "ems": null
    },
    {
      "latitude": 39.232224,
      "longitude": -8.101013,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 273,
      "squawk": "3260",
      "timestamp": 1703331336,
      "ems": null
    },
    {
      "latitude": 39.232452,
      "longitude": -8.102417,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 285,
      "squawk": "3260",
      "timestamp": 1703331338,
      "ems": null
    },
    {
      "latitude": 39.233063,
      "longitude": -8.103943,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 299,
      "squawk": "3260",
      "timestamp": 1703331342,
      "ems": null
    },
    {
      "latitude": 39.233734,
      "longitude": -8.104984,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 312,
      "squawk": "3260",
      "timestamp": 1703331344,
      "ems": null
    },
    {
      "latitude": 39.234692,
      "longitude": -8.106018,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 324,
      "squawk": "3260",
      "timestamp": 1703331347,
      "ems": null
    },
    {
      "latitude": 39.235886,
      "longitude": -8.106656,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 338,
      "squawk": "3260",
      "timestamp": 1703331351,
      "ems": null
    },
    {
      "latitude": 39.236526,
      "longitude": -8.106835,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 345,
      "squawk": "3260",
      "timestamp": 1703331352,
      "ems": null
    },
    {
      "latitude": 39.238174,
      "longitude": -8.106775,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 8,
      "squawk": "3260",
      "timestamp": 1703331356,
      "ems": null
    },
    {
      "latitude": 39.238953,
      "longitude": -8.106477,
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
      "heading": 15,
      "squawk": "3260",
      "timestamp": 1703331358,
      "ems": null
    },
    {
      "latitude": 39.240185,
      "longitude": -8.10553,
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
      "heading": 36,
      "squawk": "3260",
      "timestamp": 1703331362,
      "ems": null
    },
    {
      "latitude": 39.24107,
      "longitude": -8.104126,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 55,
      "squawk": "3260",
      "timestamp": 1703331365,
      "ems": null
    },
    {
      "latitude": 39.241379,
      "longitude": -8.103312,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 66,
      "squawk": "3260",
      "timestamp": 1703331368,
      "ems": null
    },
    {
      "latitude": 39.241516,
      "longitude": -8.100984,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "3260",
      "timestamp": 1703331371,
      "ems": null
    },
    {
      "latitude": 39.24115,
      "longitude": -8.099372,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 111,
      "squawk": "3260",
      "timestamp": 1703331375,
      "ems": null
    },
    {
      "latitude": 39.240509,
      "longitude": -8.098118,
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
      "heading": 126,
      "squawk": "3260",
      "timestamp": 1703331377,
      "ems": null
    },
    {
      "latitude": 39.239548,
      "longitude": -8.097043,
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
      "heading": 141,
      "squawk": "3260",
      "timestamp": 1703331381,
      "ems": null
    },
    {
      "latitude": 39.238415,
      "longitude": -8.096252,
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
      "heading": 157,
      "squawk": "3260",
      "timestamp": 1703331384,
      "ems": null
    },
    {
      "latitude": 39.237251,
      "longitude": -8.095947,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 171,
      "squawk": "3260",
      "timestamp": 1703331387,
      "ems": null
    },
    {
      "latitude": 39.236275,
      "longitude": -8.095886,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 180,
      "squawk": "3260",
      "timestamp": 1703331390,
      "ems": null
    },
    {
      "latitude": 39.235062,
      "longitude": -8.096148,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 192,
      "squawk": "3260",
      "timestamp": 1703331393,
      "ems": null
    },
    {
      "latitude": 39.234009,
      "longitude": -8.096685,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 201,
      "squawk": "3260",
      "timestamp": 1703331396,
      "ems": null
    },
    {
      "latitude": 39.233063,
      "longitude": -8.097473,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 215,
      "squawk": "3260",
      "timestamp": 1703331399,
      "ems": null
    },
    {
      "latitude": 39.232178,
      "longitude": -8.098596,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 227,
      "squawk": "3260",
      "timestamp": 1703331402,
      "ems": null
    },
    {
      "latitude": 39.231628,
      "longitude": -8.099551,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 234,
      "squawk": "3260",
      "timestamp": 1703331405,
      "ems": null
    },
    {
      "latitude": 39.231033,
      "longitude": -8.101044,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 243,
      "squawk": "3260",
      "timestamp": 1703331408,
      "ems": null
    },
    {
      "latitude": 39.230782,
      "longitude": -8.102112,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 255,
      "squawk": "3260",
      "timestamp": 1703331410,
      "ems": null
    },
    {
      "latitude": 39.230621,
      "longitude": -8.103671,
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
      "heading": 264,
      "squawk": "3260",
      "timestamp": 1703331414,
      "ems": null
    },
    {
      "latitude": 39.230576,
      "longitude": -8.105283,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 268,
      "squawk": "3260",
      "timestamp": 1703331417,
      "ems": null
    },
    {
      "latitude": 39.230621,
      "longitude": -8.106835,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 271,
      "squawk": "3260",
      "timestamp": 1703331420,
      "ems": null
    },
    {
      "latitude": 39.230736,
      "longitude": -8.108459,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 274,
      "squawk": "3260",
      "timestamp": 1703331423,
      "ems": null
    },
    {
      "latitude": 39.230896,
      "longitude": -8.11006,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 280,
      "squawk": "3260",
      "timestamp": 1703331426,
      "ems": null
    },
    {
      "latitude": 39.231201,
      "longitude": -8.111206,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 290,
      "squawk": "3260",
      "timestamp": 1703331428,
      "ems": null
    },
    {
      "latitude": 39.231945,
      "longitude": -8.113037,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 299,
      "squawk": "3260",
      "timestamp": 1703331432,
      "ems": null
    },
    {
      "latitude": 39.232643,
      "longitude": -8.114258,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 309,
      "squawk": "3260",
      "timestamp": 1703331435,
      "ems": null
    },
    {
      "latitude": 39.233528,
      "longitude": -8.115112,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 329,
      "squawk": "3260",
      "timestamp": 1703331438,
      "ems": null
    },
    {
      "latitude": 39.234413,
      "longitude": -8.115479,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 349,
      "squawk": "3260",
      "timestamp": 1703331441,
      "ems": null
    },
    {
      "latitude": 39.235901,
      "longitude": -8.115356,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "3260",
      "timestamp": 1703331444,
      "ems": null
    },
    {
      "latitude": 39.236938,
      "longitude": -8.114777,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 28,
      "squawk": "3260",
      "timestamp": 1703331447,
      "ems": null
    },
    {
      "latitude": 39.237946,
      "longitude": -8.113702,
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
      "heading": 46,
      "squawk": "3260",
      "timestamp": 1703331451,
      "ems": null
    },
    {
      "latitude": 39.238556,
      "longitude": -8.112488,
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
      "heading": 60,
      "squawk": "3260",
      "timestamp": 1703331453,
      "ems": null
    },
    {
      "latitude": 39.238976,
      "longitude": -8.111023,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 73,
      "squawk": "3260",
      "timestamp": 1703331456,
      "ems": null
    },
    {
      "latitude": 39.239182,
      "longitude": -8.109522,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 83,
      "squawk": "3260",
      "timestamp": 1703331460,
      "ems": null
    },
    {
      "latitude": 39.239136,
      "longitude": -8.10797,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 93,
      "squawk": "3260",
      "timestamp": 1703331463,
      "ems": null
    },
    {
      "latitude": 39.238907,
      "longitude": -8.106477,
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
      "heading": 104,
      "squawk": "3260",
      "timestamp": 1703331466,
      "ems": null
    },
    {
      "latitude": 39.238495,
      "longitude": -8.105044,
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
      "heading": 113,
      "squawk": "3260",
      "timestamp": 1703331469,
      "ems": null
    },
    {
      "latitude": 39.237858,
      "longitude": -8.10376,
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
      "heading": 126,
      "squawk": "3260",
      "timestamp": 1703331471,
      "ems": null
    },
    {
      "latitude": 39.23703,
      "longitude": -8.102536,
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
      "heading": 135,
      "squawk": "3260",
      "timestamp": 1703331475,
      "ems": null
    },
    {
      "latitude": 39.236179,
      "longitude": -8.101685,
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
      "heading": 142,
      "squawk": "3260",
      "timestamp": 1703331477,
      "ems": null
    },
    {
      "latitude": 39.235435,
      "longitude": -8.101074,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 151,
      "squawk": "3260",
      "timestamp": 1703331479,
      "ems": null
    },
    {
      "latitude": 39.233917,
      "longitude": -8.100267,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 161,
      "squawk": "3260",
      "timestamp": 1703331484,
      "ems": null
    },
    {
      "latitude": 39.232689,
      "longitude": -8.100037,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 175,
      "squawk": "3260",
      "timestamp": 1703331487,
      "ems": null
    },
    {
      "latitude": 39.231537,
      "longitude": -8.100207,
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
      "heading": 190,
      "squawk": "3260",
      "timestamp": 1703331490,
      "ems": null
    },
    {
      "latitude": 39.230438,
      "longitude": -8.100626,
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
      "heading": 196,
      "squawk": "3260",
      "timestamp": 1703331492,
      "ems": null
    },
    {
      "latitude": 39.229385,
      "longitude": -8.101342,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 211,
      "squawk": "3260",
      "timestamp": 1703331495,
      "ems": null
    },
    {
      "latitude": 39.228455,
      "longitude": -8.102478,
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
      "heading": 229,
      "squawk": "3260",
      "timestamp": 1703331498,
      "ems": null
    },
    {
      "latitude": 39.227894,
      "longitude": -8.103699,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 248,
      "squawk": "3260",
      "timestamp": 1703331502,
      "ems": null
    },
    {
      "latitude": 39.2276,
      "longitude": -8.105462,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 262,
      "squawk": "3260",
      "timestamp": 1703331505,
      "ems": null
    },
    {
      "latitude": 39.227692,
      "longitude": -8.106835,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 282,
      "squawk": "3260",
      "timestamp": 1703331508,
      "ems": null
    },
    {
      "latitude": 39.228313,
      "longitude": -8.108459,
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
      "heading": 302,
      "squawk": "3260",
      "timestamp": 1703331511,
      "ems": null
    },
    {
      "latitude": 39.229153,
      "longitude": -8.109436,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 324,
      "squawk": "3260",
      "timestamp": 1703331514,
      "ems": null
    },
    {
      "latitude": 39.230453,
      "longitude": -8.110046,
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
      "heading": 345,
      "squawk": "3260",
      "timestamp": 1703331517,
      "ems": null
    },
    {
      "latitude": 39.231628,
      "longitude": -8.11,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 4,
      "squawk": "3260",
      "timestamp": 1703331520,
      "ems": null
    },
    {
      "latitude": 39.232773,
      "longitude": -8.109463,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 27,
      "squawk": "3260",
      "timestamp": 1703331523,
      "ems": null
    },
    {
      "latitude": 39.233528,
      "longitude": -8.108582,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 43,
      "squawk": "3260",
      "timestamp": 1703331526,
      "ems": null
    },
    {
      "latitude": 39.234085,
      "longitude": -8.107361,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 64,
      "squawk": "3260",
      "timestamp": 1703331529,
      "ems": null
    },
    {
      "latitude": 39.234283,
      "longitude": -8.10588,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 86,
      "squawk": "3260",
      "timestamp": 1703331532,
      "ems": null
    },
    {
      "latitude": 39.234055,
      "longitude": -8.104387,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 109,
      "squawk": "3260",
      "timestamp": 1703331535,
      "ems": null
    },
    {
      "latitude": 39.233368,
      "longitude": -8.103312,
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
      "heading": 135,
      "squawk": "3260",
      "timestamp": 1703331538,
      "ems": null
    },
    {
      "latitude": 39.232319,
      "longitude": -8.102539,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 156,
      "squawk": "3260",
      "timestamp": 1703331541,
      "ems": null
    },
    {
      "latitude": 39.231033,
      "longitude": -8.102417,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 182,
      "squawk": "3260",
      "timestamp": 1703331544,
      "ems": null
    },
    {
      "latitude": 39.229889,
      "longitude": -8.102895,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703331547,
      "ems": null
    },
    {
      "latitude": 39.229153,
      "longitude": -8.103577,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 221,
      "squawk": "3260",
      "timestamp": 1703331550,
      "ems": null
    },
    {
      "latitude": 39.228409,
      "longitude": -8.104736,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 235,
      "squawk": "3260",
      "timestamp": 1703331553,
      "ems": null
    },
    {
      "latitude": 39.228035,
      "longitude": -8.105896,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 249,
      "squawk": "3260",
      "timestamp": 1703331556,
      "ems": null
    },
    {
      "latitude": 39.227875,
      "longitude": -8.107552,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 267,
      "squawk": "3260",
      "timestamp": 1703331559,
      "ems": null
    },
    {
      "latitude": 39.227989,
      "longitude": -8.108948,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 280,
      "squawk": "3260",
      "timestamp": 1703331562,
      "ems": null
    },
    {
      "latitude": 39.228313,
      "longitude": -8.110168,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 291,
      "squawk": "3260",
      "timestamp": 1703331565,
      "ems": null
    },
    {
      "latitude": 39.22892,
      "longitude": -8.111511,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 303,
      "squawk": "3260",
      "timestamp": 1703331568,
      "ems": null
    },
    {
      "latitude": 39.229664,
      "longitude": -8.112549,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 314,
      "squawk": "3260",
      "timestamp": 1703331571,
      "ems": null
    },
    {
      "latitude": 39.230621,
      "longitude": -8.113523,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 325,
      "squawk": "3260",
      "timestamp": 1703331574,
      "ems": null
    },
    {
      "latitude": 39.231712,
      "longitude": -8.114197,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 337,
      "squawk": "3260",
      "timestamp": 1703331577,
      "ems": null
    },
    {
      "latitude": 39.233017,
      "longitude": -8.114502,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703331580,
      "ems": null
    },
    {
      "latitude": 39.234192,
      "longitude": -8.11424,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 15,
      "squawk": "3260",
      "timestamp": 1703331583,
      "ems": null
    },
    {
      "latitude": 39.235291,
      "longitude": -8.113583,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 28,
      "squawk": "3260",
      "timestamp": 1703331586,
      "ems": null
    },
    {
      "latitude": 39.23632,
      "longitude": -8.112549,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 42,
      "squawk": "3260",
      "timestamp": 1703331589,
      "ems": null
    },
    {
      "latitude": 39.237122,
      "longitude": -8.111254,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 54,
      "squawk": "3260",
      "timestamp": 1703331592,
      "ems": null
    },
    {
      "latitude": 39.237671,
      "longitude": -8.109863,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 64,
      "squawk": "3260",
      "timestamp": 1703331595,
      "ems": null
    },
    {
      "latitude": 39.238083,
      "longitude": -8.108328,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 73,
      "squawk": "3260",
      "timestamp": 1703331598,
      "ems": null
    },
    {
      "latitude": 39.238323,
      "longitude": -8.10675,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 81,
      "squawk": "3260",
      "timestamp": 1703331601,
      "ems": null
    },
    {
      "latitude": 39.238461,
      "longitude": -8.105042,
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
      "heading": 85,
      "squawk": "3260",
      "timestamp": 1703331604,
      "ems": null
    },
    {
      "latitude": 39.23851,
      "longitude": -8.10376,
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
      "heading": 88,
      "squawk": "3260",
      "timestamp": 1703331607,
      "ems": null
    },
    {
      "latitude": 39.238461,
      "longitude": -8.102112,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 91,
      "squawk": "3260",
      "timestamp": 1703331610,
      "ems": null
    },
    {
      "latitude": 39.238403,
      "longitude": -8.100387,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 93,
      "squawk": "3260",
      "timestamp": 1703331613,
      "ems": null
    },
    {
      "latitude": 39.238277,
      "longitude": -8.09906,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 95,
      "squawk": "3260",
      "timestamp": 1703331617,
      "ems": null
    },
    {
      "latitude": 39.238174,
      "longitude": -8.097819,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 98,
      "squawk": "3260",
      "timestamp": 1703331620,
      "ems": null
    },
    {
      "latitude": 39.237949,
      "longitude": -8.095764,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 99,
      "squawk": "3260",
      "timestamp": 1703331622,
      "ems": null
    },
    {
      "latitude": 39.237762,
      "longitude": -8.094476,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 100,
      "squawk": "3260",
      "timestamp": 1703331625,
      "ems": null
    },
    {
      "latitude": 39.237442,
      "longitude": -8.092804,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 104,
      "squawk": "3260",
      "timestamp": 1703331628,
      "ems": null
    },
    {
      "latitude": 39.237122,
      "longitude": -8.091311,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 108,
      "squawk": "3260",
      "timestamp": 1703331631,
      "ems": null
    },
    {
      "latitude": 39.236755,
      "longitude": -8.090237,
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
      "heading": 116,
      "squawk": "3260",
      "timestamp": 1703331634,
      "ems": null
    },
    {
      "latitude": 39.236088,
      "longitude": -8.088867,
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
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703331637,
      "ems": null
    },
    {
      "latitude": 39.235153,
      "longitude": -8.087669,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 140,
      "squawk": "3260",
      "timestamp": 1703331641,
      "ems": null
    },
    {
      "latitude": 39.234375,
      "longitude": -8.087072,
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
      "heading": 151,
      "squawk": "3260",
      "timestamp": 1703331643,
      "ems": null
    },
    {
      "latitude": 39.233276,
      "longitude": -8.086535,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 161,
      "squawk": "3260",
      "timestamp": 1703331647,
      "ems": null
    },
    {
      "latitude": 39.232361,
      "longitude": -8.086236,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 166,
      "squawk": "3260",
      "timestamp": 1703331650,
      "ems": null
    },
    {
      "latitude": 39.231293,
      "longitude": -8.085938,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 168,
      "squawk": "3260",
      "timestamp": 1703331653,
      "ems": null
    },
    {
      "latitude": 39.230209,
      "longitude": -8.085758,
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
      "heading": 175,
      "squawk": "3260",
      "timestamp": 1703331656,
      "ems": null
    },
    {
      "latitude": 39.229107,
      "longitude": -8.085815,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 182,
      "squawk": "3260",
      "timestamp": 1703331659,
      "ems": null
    },
    {
      "latitude": 39.228081,
      "longitude": -8.085999,
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
      "heading": 190,
      "squawk": "3260",
      "timestamp": 1703331662,
      "ems": null
    },
    {
      "latitude": 39.227242,
      "longitude": -8.086243,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 194,
      "squawk": "3260",
      "timestamp": 1703331664,
      "ems": null
    },
    {
      "latitude": 39.226452,
      "longitude": -8.086548,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 195,
      "squawk": "3260",
      "timestamp": 1703331666,
      "ems": null
    },
    {
      "latitude": 39.22459,
      "longitude": -8.087402,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 201,
      "squawk": "3260",
      "timestamp": 1703331672,
      "ems": null
    },
    {
      "latitude": 39.223614,
      "longitude": -8.087891,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 202,
      "squawk": "3260",
      "timestamp": 1703331674,
      "ems": null
    },
    {
      "latitude": 39.222519,
      "longitude": -8.088446,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703331678,
      "ems": null
    },
    {
      "latitude": 39.221512,
      "longitude": -8.089043,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703331681,
      "ems": null
    },
    {
      "latitude": 39.220448,
      "longitude": -8.089722,
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
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703331684,
      "ems": null
    },
    {
      "latitude": 39.219467,
      "longitude": -8.090332,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703331687,
      "ems": null
    },
    {
      "latitude": 39.218536,
      "longitude": -8.090894,
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
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703331690,
      "ems": null
    },
    {
      "latitude": 39.217575,
      "longitude": -8.091491,
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
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703331693,
      "ems": null
    },
    {
      "latitude": 39.21677,
      "longitude": -8.09198,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703331695,
      "ems": null
    },
    {
      "latitude": 39.215927,
      "longitude": -8.092566,
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
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703331698,
      "ems": null
    },
    {
      "latitude": 39.214859,
      "longitude": -8.093323,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703331702,
      "ems": null
    },
    {
      "latitude": 39.213821,
      "longitude": -8.094117,
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
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703331705,
      "ems": null
    },
    {
      "latitude": 39.213043,
      "longitude": -8.094666,
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
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703331707,
      "ems": null
    },
    {
      "latitude": 39.212173,
      "longitude": -8.095371,
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
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703331710,
      "ems": null
    },
    {
      "latitude": 39.211121,
      "longitude": -8.096208,
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
      "heading": 213,
      "squawk": "3260",
      "timestamp": 1703331714,
      "ems": null
    },
    {
      "latitude": 39.210526,
      "longitude": -8.096745,
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
      "heading": 213,
      "squawk": "3260",
      "timestamp": 1703331716,
      "ems": null
    },
    {
      "latitude": 39.209518,
      "longitude": -8.097521,
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
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703331719,
      "ems": null
    },
    {
      "latitude": 39.208557,
      "longitude": -8.098357,
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
      "heading": 213,
      "squawk": "3260",
      "timestamp": 1703331723,
      "ems": null
    },
    {
      "latitude": 39.207825,
      "longitude": -8.099013,
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
      "heading": 215,
      "squawk": "3260",
      "timestamp": 1703331725,
      "ems": null
    },
    {
      "latitude": 39.206863,
      "longitude": -8.099909,
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
      "heading": 216,
      "squawk": "3260",
      "timestamp": 1703331729,
      "ems": null
    },
    {
      "latitude": 39.206017,
      "longitude": -8.100708,
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
      "heading": 215,
      "squawk": "3260",
      "timestamp": 1703331732,
      "ems": null
    },
    {
      "latitude": 39.203316,
      "longitude": -8.102966,
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
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703331741,
      "ems": null
    },
    {
      "latitude": 39.201462,
      "longitude": -8.104268,
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
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703331747,
      "ems": null
    },
    {
      "latitude": 39.200912,
      "longitude": -8.104506,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 201,
      "squawk": "3260",
      "timestamp": 1703331749,
      "ems": null
    },
    {
      "latitude": 39.199543,
      "longitude": -8.104797,
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
      "heading": 190,
      "squawk": "3260",
      "timestamp": 1703331753,
      "ems": null
    },
    {
      "latitude": 39.198566,
      "longitude": -8.104614,
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
      "heading": 166,
      "squawk": "3260",
      "timestamp": 1703331756,
      "ems": null
    },
    {
      "latitude": 39.197525,
      "longitude": -8.104029,
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
      "heading": 148,
      "squawk": "3260",
      "timestamp": 1703331760,
      "ems": null
    },
    {
      "latitude": 39.196655,
      "longitude": -8.103193,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 140,
      "squawk": "3260",
      "timestamp": 1703331762,
      "ems": null
    },
    {
      "latitude": 39.195923,
      "longitude": -8.102179,
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
      "heading": 131,
      "squawk": "3260",
      "timestamp": 1703331766,
      "ems": null
    },
    {
      "latitude": 39.19545,
      "longitude": -8.10144,
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
      "heading": 128,
      "squawk": "3260",
      "timestamp": 1703331768,
      "ems": null
    },
    {
      "latitude": 39.194824,
      "longitude": -8.100387,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 128,
      "squawk": "3260",
      "timestamp": 1703331771,
      "ems": null
    },
    {
      "latitude": 39.194183,
      "longitude": -8.099193,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 122,
      "squawk": "3260",
      "timestamp": 1703331775,
      "ems": null
    },
    {
      "latitude": 39.193867,
      "longitude": -8.09845,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703331776,
      "ems": null
    },
    {
      "latitude": 39.19326,
      "longitude": -8.097107,
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
      "heading": 119,
      "squawk": "3260",
      "timestamp": 1703331780,
      "ems": null
    },
    {
      "latitude": 39.192764,
      "longitude": -8.096028,
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
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703331783,
      "ems": null
    },
    {
      "latitude": 39.192169,
      "longitude": -8.094893,
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
      "heading": 123,
      "squawk": "3260",
      "timestamp": 1703331786,
      "ems": null
    },
    {
      "latitude": 39.191631,
      "longitude": -8.093872,
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
      "heading": 124,
      "squawk": "3260",
      "timestamp": 1703331789,
      "ems": null
    },
    {
      "latitude": 39.191116,
      "longitude": -8.092923,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703331792,
      "ems": null
    },
    {
      "latitude": 39.18956,
      "longitude": -8.090416,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 128,
      "squawk": "3260",
      "timestamp": 1703331800,
      "ems": null
    },
    {
      "latitude": 39.188965,
      "longitude": -8.08946,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 128,
      "squawk": "3260",
      "timestamp": 1703331804,
      "ems": null
    },
    {
      "latitude": 39.188324,
      "longitude": -8.088501,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 130,
      "squawk": "3260",
      "timestamp": 1703331807,
      "ems": null
    },
    {
      "latitude": 39.187859,
      "longitude": -8.087769,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 129,
      "squawk": "3260",
      "timestamp": 1703331809,
      "ems": null
    },
    {
      "latitude": 39.187317,
      "longitude": -8.086833,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 127,
      "squawk": "3260",
      "timestamp": 1703331812,
      "ems": null
    },
    {
      "latitude": 39.186882,
      "longitude": -8.085815,
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
      "heading": 116,
      "squawk": "3260",
      "timestamp": 1703331816,
      "ems": null
    },
    {
      "latitude": 39.186493,
      "longitude": -8.084803,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 112,
      "squawk": "3260",
      "timestamp": 1703331819,
      "ems": null
    },
    {
      "latitude": 39.186218,
      "longitude": -8.083788,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 110,
      "squawk": "3260",
      "timestamp": 1703331822,
      "ems": null
    },
    {
      "latitude": 39.185951,
      "longitude": -8.082825,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 108,
      "squawk": "3260",
      "timestamp": 1703331824,
      "ems": null
    },
    {
      "latitude": 39.185719,
      "longitude": -8.081787,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 101,
      "squawk": "3260",
      "timestamp": 1703331828,
      "ems": null
    },
    {
      "latitude": 39.185627,
      "longitude": -8.08075,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 95,
      "squawk": "3260",
      "timestamp": 1703331830,
      "ems": null
    },
    {
      "latitude": 39.185623,
      "longitude": -8.079549,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 90,
      "squawk": "3260",
      "timestamp": 1703331834,
      "ems": null
    },
    {
      "latitude": 39.185627,
      "longitude": -8.078491,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 89,
      "squawk": "3260",
      "timestamp": 1703331837,
      "ems": null
    },
    {
      "latitude": 39.185669,
      "longitude": -8.077518,
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
      "heading": 86,
      "squawk": "3260",
      "timestamp": 1703331839,
      "ems": null
    },
    {
      "latitude": 39.185719,
      "longitude": -8.076599,
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
      "heading": 86,
      "squawk": "3260",
      "timestamp": 1703331842,
      "ems": null
    },
    {
      "latitude": 39.185944,
      "longitude": -8.07531,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 74,
      "squawk": "3260",
      "timestamp": 1703331845,
      "ems": null
    },
    {
      "latitude": 39.186401,
      "longitude": -8.074235,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 63,
      "squawk": "3260",
      "timestamp": 1703331849,
      "ems": null
    },
    {
      "latitude": 39.186996,
      "longitude": -8.073279,
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
      "heading": 49,
      "squawk": "3260",
      "timestamp": 1703331852,
      "ems": null
    },
    {
      "latitude": 39.187626,
      "longitude": -8.072449,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 43,
      "squawk": "3260",
      "timestamp": 1703331855,
      "ems": null
    },
    {
      "latitude": 39.188,
      "longitude": -8.072021,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 38,
      "squawk": "3260",
      "timestamp": 1703331856,
      "ems": null
    },
    {
      "latitude": 39.189396,
      "longitude": -8.070862,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 30,
      "squawk": "3260",
      "timestamp": 1703331862,
      "ems": null
    },
    {
      "latitude": 39.190247,
      "longitude": -8.070294,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 27,
      "squawk": "3260",
      "timestamp": 1703331865,
      "ems": null
    },
    {
      "latitude": 39.19112,
      "longitude": -8.069763,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 27,
      "squawk": "3260",
      "timestamp": 1703331868,
      "ems": null
    },
    {
      "latitude": 39.191803,
      "longitude": -8.069339,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 26,
      "squawk": "3260",
      "timestamp": 1703331871,
      "ems": null
    },
    {
      "latitude": 39.192627,
      "longitude": -8.068801,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703331874,
      "ems": null
    },
    {
      "latitude": 39.193314,
      "longitude": -8.068383,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 25,
      "squawk": "3260",
      "timestamp": 1703331877,
      "ems": null
    },
    {
      "latitude": 39.194145,
      "longitude": -8.067932,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703331880,
      "ems": null
    },
    {
      "latitude": 39.19487,
      "longitude": -8.067488,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 23,
      "squawk": "3260",
      "timestamp": 1703331883,
      "ems": null
    },
    {
      "latitude": 39.19574,
      "longitude": -8.06701,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703331886,
      "ems": null
    },
    {
      "latitude": 39.196335,
      "longitude": -8.066651,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703331888,
      "ems": null
    },
    {
      "latitude": 39.196701,
      "longitude": -8.066413,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703331890,
      "ems": null
    },
    {
      "latitude": 39.19931,
      "longitude": -8.064941,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 23,
      "squawk": "3260",
      "timestamp": 1703331901,
      "ems": null
    }
  ],
};