import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20230127EPLLEPLL",
    callsign: "BNI6L",
    name: "CPL Skill test: failed",
    description: "",
  },
  pilotLog: {
    departure: new Date(2023, 0, 27, 11, 47).getTime(),
    arrival: new Date(2023, 0, 27, 12, 50).getTime(),
    singleEnginePistonTime: 0,
    multiEnginePistonTime: 63,
    picTime: 0,
    dualTime: 63,
    ifrTime: 0,
    landings: {
      day: 3,
      night: 0,
    },
  },
  aircraft: {
    model: {
      code: "P06T",
      text: "Tecnam P-2006T",
    },
    identification: {
      modes: "48B048",
      registration: "SP-MEL",
      serialNo: "N/A",
    },
  },
  airport: {
    destination: {
      name: "Lodz Wladyslaw Reymont Airport",
      code: "EPLL",
      position: {
        latitude: 51.721882,
        longitude: 19.39813,
      },
    },
    origin: {
      name: "Lodz Wladyslaw Reymont Airport",
      code: "EPLL",
      position: {
        latitude: 51.721882,
        longitude: 19.39813,
      },
    },
  },
  track: [
    {
      "latitude": 51.716415,
      "longitude": 19.373474,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 250,
      "squawk": "0",
      "timestamp": 1674820836,
      "ems": null
    },
    {
      "latitude": 51.715622,
      "longitude": 19.36949,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 253,
      "squawk": "0",
      "timestamp": 1674820842,
      "ems": null
    },
    {
      "latitude": 51.71489,
      "longitude": 19.365259,
      "altitude": {
        "feet": 850,
        "meters": 259
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 254,
      "squawk": "0",
      "timestamp": 1674820849,
      "ems": null
    },
    {
      "latitude": 51.714603,
      "longitude": 19.363403,
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
        "fpm": 1472,
        "ms": 7.5
      },
      "heading": 256,
      "squawk": "0",
      "timestamp": 1674820851,
      "ems": null
    },
    {
      "latitude": 51.713791,
      "longitude": 19.359247,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 248,
      "squawk": "0",
      "timestamp": 1674820857,
      "ems": null
    },
    {
      "latitude": 51.713104,
      "longitude": 19.357019,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 240,
      "squawk": "0",
      "timestamp": 1674820860,
      "ems": null
    },
    {
      "latitude": 51.712227,
      "longitude": 19.355164,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 232,
      "squawk": "0",
      "timestamp": 1674820863,
      "ems": null
    },
    {
      "latitude": 51.710972,
      "longitude": 19.353333,
      "altitude": {
        "feet": 1075,
        "meters": 328
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 218,
      "squawk": "0",
      "timestamp": 1674820867,
      "ems": null
    },
    {
      "latitude": 51.709667,
      "longitude": 19.352036,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 208,
      "squawk": "0",
      "timestamp": 1674820870,
      "ems": null
    },
    {
      "latitude": 51.708298,
      "longitude": 19.351229,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 199,
      "squawk": "0",
      "timestamp": 1674820873,
      "ems": null
    },
    {
      "latitude": 51.706779,
      "longitude": 19.350586,
      "altitude": {
        "feet": 1175,
        "meters": 358
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1674820876,
      "ems": null
    },
    {
      "latitude": 51.705292,
      "longitude": 19.350281,
      "altitude": {
        "feet": 1225,
        "meters": 373
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1674820879,
      "ems": null
    },
    {
      "latitude": 51.7038,
      "longitude": 19.350281,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1674820882,
      "ems": null
    },
    {
      "latitude": 51.702484,
      "longitude": 19.350487,
      "altitude": {
        "feet": 1325,
        "meters": 404
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1674820884,
      "ems": null
    },
    {
      "latitude": 51.700928,
      "longitude": 19.351229,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1674820888,
      "ems": null
    },
    {
      "latitude": 51.699829,
      "longitude": 19.352119,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1674820890,
      "ems": null
    },
    {
      "latitude": 51.698593,
      "longitude": 19.353975,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1674820894,
      "ems": null
    },
    {
      "latitude": 51.697842,
      "longitude": 19.355698,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1674820897,
      "ems": null
    },
    {
      "latitude": 51.697311,
      "longitude": 19.357761,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1674820899,
      "ems": null
    },
    {
      "latitude": 51.697052,
      "longitude": 19.360199,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1674820902,
      "ems": null
    },
    {
      "latitude": 51.69722,
      "longitude": 19.363106,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1674820906,
      "ems": null
    },
    {
      "latitude": 51.697472,
      "longitude": 19.364777,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1674820908,
      "ems": null
    },
    {
      "latitude": 51.697891,
      "longitude": 19.367676,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1674820912,
      "ems": null
    },
    {
      "latitude": 51.698181,
      "longitude": 19.37038,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1674820915,
      "ems": null
    },
    {
      "latitude": 51.698402,
      "longitude": 19.372482,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1674820917,
      "ems": null
    },
    {
      "latitude": 51.698685,
      "longitude": 19.375429,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1674820921,
      "ems": null
    },
    {
      "latitude": 51.698914,
      "longitude": 19.377804,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1674820924,
      "ems": null
    },
    {
      "latitude": 51.699142,
      "longitude": 19.380402,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1674820927,
      "ems": null
    },
    {
      "latitude": 51.699371,
      "longitude": 19.383148,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1674820930,
      "ems": null
    },
    {
      "latitude": 51.6996,
      "longitude": 19.385525,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1674820933,
      "ems": null
    },
    {
      "latitude": 51.700077,
      "longitude": 19.390717,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1674820939,
      "ems": null
    },
    {
      "latitude": 51.700588,
      "longitude": 19.395981,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1674820945,
      "ems": null
    },
    {
      "latitude": 51.700653,
      "longitude": 19.397995,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1674820948,
      "ems": null
    },
    {
      "latitude": 51.700588,
      "longitude": 19.400558,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1674820950,
      "ems": null
    },
    {
      "latitude": 51.700195,
      "longitude": 19.403118,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1674820953,
      "ems": null
    },
    {
      "latitude": 51.699417,
      "longitude": 19.406012,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "timestamp": 1674820957,
      "ems": null
    },
    {
      "latitude": 51.698639,
      "longitude": 19.407795,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1674820960,
      "ems": null
    },
    {
      "latitude": 51.698044,
      "longitude": 19.408907,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1674820962,
      "ems": null
    },
    {
      "latitude": 51.696354,
      "longitude": 19.410934,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1674820966,
      "ems": null
    },
    {
      "latitude": 51.694885,
      "longitude": 19.411951,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1674820969,
      "ems": null
    },
    {
      "latitude": 51.693329,
      "longitude": 19.412537,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1674820972,
      "ems": null
    },
    {
      "latitude": 51.692348,
      "longitude": 19.412613,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1674820974,
      "ems": null
    },
    {
      "latitude": 51.690907,
      "longitude": 19.412537,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1674820978,
      "ems": null
    },
    {
      "latitude": 51.688766,
      "longitude": 19.411469,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1674820981,
      "ems": null
    },
    {
      "latitude": 51.688248,
      "longitude": 19.410986,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1674820983,
      "ems": null
    },
    {
      "latitude": 51.686855,
      "longitude": 19.409256,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1674820986,
      "ems": null
    },
    {
      "latitude": 51.685501,
      "longitude": 19.406309,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1674820990,
      "ems": null
    },
    {
      "latitude": 51.684906,
      "longitude": 19.404009,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1674820993,
      "ems": null
    },
    {
      "latitude": 51.684574,
      "longitude": 19.401703,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1674820996,
      "ems": null
    },
    {
      "latitude": 51.684574,
      "longitude": 19.39949,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1674820999,
      "ems": null
    },
    {
      "latitude": 51.684814,
      "longitude": 19.396881,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1674821002,
      "ems": null
    },
    {
      "latitude": 51.685413,
      "longitude": 19.394531,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1674821005,
      "ems": null
    },
    {
      "latitude": 51.686096,
      "longitude": 19.392799,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1674821008,
      "ems": null
    },
    {
      "latitude": 51.686996,
      "longitude": 19.390793,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1674821011,
      "ems": null
    },
    {
      "latitude": 51.687836,
      "longitude": 19.389088,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1674821014,
      "ems": null
    },
    {
      "latitude": 51.688717,
      "longitude": 19.387283,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "squawk": "7000",
      "timestamp": 1674821017,
      "ems": null
    },
    {
      "latitude": 51.689484,
      "longitude": 19.385895,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1674821020,
      "ems": null
    },
    {
      "latitude": 51.690536,
      "longitude": 19.384039,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1674821023,
      "ems": null
    },
    {
      "latitude": 51.691452,
      "longitude": 19.382406,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1674821026,
      "ems": null
    },
    {
      "latitude": 51.692413,
      "longitude": 19.381071,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1674821029,
      "ems": null
    },
    {
      "latitude": 51.693558,
      "longitude": 19.37966,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1674821032,
      "ems": null
    },
    {
      "latitude": 51.69429,
      "longitude": 19.378918,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1674821034,
      "ems": null
    },
    {
      "latitude": 51.695892,
      "longitude": 19.377285,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "timestamp": 1674821038,
      "ems": null
    },
    {
      "latitude": 51.696991,
      "longitude": 19.376171,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1674821041,
      "ems": null
    },
    {
      "latitude": 51.698135,
      "longitude": 19.375057,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "timestamp": 1674821044,
      "ems": null
    },
    {
      "latitude": 51.699287,
      "longitude": 19.373932,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1674821047,
      "ems": null
    },
    {
      "latitude": 51.700588,
      "longitude": 19.372711,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1674821051,
      "ems": null
    },
    {
      "latitude": 51.70166,
      "longitude": 19.371948,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1674821053,
      "ems": null
    },
    {
      "latitude": 51.703079,
      "longitude": 19.371643,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1674821056,
      "ems": null
    },
    {
      "latitude": 51.704315,
      "longitude": 19.372559,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1674821060,
      "ems": null
    },
    {
      "latitude": 51.705059,
      "longitude": 19.37439,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "squawk": "7000",
      "timestamp": 1674821063,
      "ems": null
    },
    {
      "latitude": 51.705059,
      "longitude": 19.376526,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1674821065,
      "ems": null
    },
    {
      "latitude": 51.704361,
      "longitude": 19.378399,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1674821068,
      "ems": null
    },
    {
      "latitude": 51.703079,
      "longitude": 19.379585,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1674821071,
      "ems": null
    },
    {
      "latitude": 51.701473,
      "longitude": 19.379578,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1674821074,
      "ems": null
    },
    {
      "latitude": 51.700104,
      "longitude": 19.37825,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1674821077,
      "ems": null
    },
    {
      "latitude": 51.699326,
      "longitude": 19.376543,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1674821080,
      "ems": null
    },
    {
      "latitude": 51.699005,
      "longitude": 19.374237,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1674821083,
      "ems": null
    },
    {
      "latitude": 51.69952,
      "longitude": 19.371109,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1674821086,
      "ems": null
    },
    {
      "latitude": 51.700638,
      "longitude": 19.369202,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1674821090,
      "ems": null
    },
    {
      "latitude": 51.702267,
      "longitude": 19.368591,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1674821093,
      "ems": null
    },
    {
      "latitude": 51.703812,
      "longitude": 19.369268,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1674821096,
      "ems": null
    },
    {
      "latitude": 51.704819,
      "longitude": 19.370827,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1674821098,
      "ems": null
    },
    {
      "latitude": 51.70546,
      "longitude": 19.37298,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1674821101,
      "ems": null
    },
    {
      "latitude": 51.705826,
      "longitude": 19.375355,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1674821104,
      "ems": null
    },
    {
      "latitude": 51.706177,
      "longitude": 19.377594,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1674821108,
      "ems": null
    },
    {
      "latitude": 51.706501,
      "longitude": 19.379654,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1674821111,
      "ems": null
    },
    {
      "latitude": 51.706734,
      "longitude": 19.38118,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1674821113,
      "ems": null
    },
    {
      "latitude": 51.707108,
      "longitude": 19.383392,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1674821117,
      "ems": null
    },
    {
      "latitude": 51.707294,
      "longitude": 19.385071,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1674821119,
      "ems": null
    },
    {
      "latitude": 51.707565,
      "longitude": 19.386934,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1674821123,
      "ems": null
    },
    {
      "latitude": 51.707748,
      "longitude": 19.388641,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1674821126,
      "ems": null
    },
    {
      "latitude": 51.707886,
      "longitude": 19.390053,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1674821128,
      "ems": null
    },
    {
      "latitude": 51.708023,
      "longitude": 19.391909,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1674821132,
      "ems": null
    },
    {
      "latitude": 51.708206,
      "longitude": 19.393541,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1674821135,
      "ems": null
    },
    {
      "latitude": 51.708363,
      "longitude": 19.395294,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1674821138,
      "ems": null
    },
    {
      "latitude": 51.708527,
      "longitude": 19.39703,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1674821141,
      "ems": null
    },
    {
      "latitude": 51.708645,
      "longitude": 19.398804,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1674821144,
      "ems": null
    },
    {
      "latitude": 51.708801,
      "longitude": 19.400297,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1674821146,
      "ems": null
    },
    {
      "latitude": 51.709248,
      "longitude": 19.403992,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1674821153,
      "ems": null
    },
    {
      "latitude": 51.709488,
      "longitude": 19.405642,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1674821156,
      "ems": null
    },
    {
      "latitude": 51.709946,
      "longitude": 19.408981,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1674821162,
      "ems": null
    },
    {
      "latitude": 51.710266,
      "longitude": 19.410763,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1674821165,
      "ems": null
    },
    {
      "latitude": 51.710724,
      "longitude": 19.41403,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1674821170,
      "ems": null
    },
    {
      "latitude": 51.711063,
      "longitude": 19.416046,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1674821174,
      "ems": null
    },
    {
      "latitude": 51.711342,
      "longitude": 19.417725,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "squawk": "7000",
      "timestamp": 1674821177,
      "ems": null
    },
    {
      "latitude": 51.711639,
      "longitude": 19.419523,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1674821180,
      "ems": null
    },
    {
      "latitude": 51.712227,
      "longitude": 19.423065,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1674821186,
      "ems": null
    },
    {
      "latitude": 51.712784,
      "longitude": 19.426426,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1674821192,
      "ems": null
    },
    {
      "latitude": 51.713345,
      "longitude": 19.429855,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1674821198,
      "ems": null
    },
    {
      "latitude": 51.713902,
      "longitude": 19.433594,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1674821204,
      "ems": null
    },
    {
      "latitude": 51.714386,
      "longitude": 19.437561,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1674821210,
      "ems": null
    },
    {
      "latitude": 51.714432,
      "longitude": 19.43964,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1674821213,
      "ems": null
    },
    {
      "latitude": 51.714157,
      "longitude": 19.441792,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1674821216,
      "ems": null
    },
    {
      "latitude": 51.713486,
      "longitude": 19.44397,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1674821219,
      "ems": null
    },
    {
      "latitude": 51.712692,
      "longitude": 19.445503,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1674821222,
      "ems": null
    },
    {
      "latitude": 51.711437,
      "longitude": 19.446945,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1674821225,
      "ems": null
    },
    {
      "latitude": 51.710087,
      "longitude": 19.447861,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1674821228,
      "ems": null
    },
    {
      "latitude": 51.708893,
      "longitude": 19.448101,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1674821231,
      "ems": null
    },
    {
      "latitude": 51.707294,
      "longitude": 19.447937,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1674821234,
      "ems": null
    },
    {
      "latitude": 51.706787,
      "longitude": 19.447731,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1674821235,
      "ems": null
    },
    {
      "latitude": 51.704872,
      "longitude": 19.446182,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1674821239,
      "ems": null
    },
    {
      "latitude": 51.703629,
      "longitude": 19.444168,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1674821243,
      "ems": null
    },
    {
      "latitude": 51.702732,
      "longitude": 19.441299,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1674821247,
      "ems": null
    },
    {
      "latitude": 51.702438,
      "longitude": 19.438377,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1674821251,
      "ems": null
    },
    {
      "latitude": 51.702682,
      "longitude": 19.435349,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1674821255,
      "ems": null
    },
    {
      "latitude": 51.703476,
      "longitude": 19.432526,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "squawk": "7000",
      "timestamp": 1674821259,
      "ems": null
    },
    {
      "latitude": 51.704681,
      "longitude": 19.430361,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1674821263,
      "ems": null
    },
    {
      "latitude": 51.706268,
      "longitude": 19.42894,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1674821267,
      "ems": null
    },
    {
      "latitude": 51.708252,
      "longitude": 19.428654,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1674821271,
      "ems": null
    },
    {
      "latitude": 51.709713,
      "longitude": 19.429626,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1674821275,
      "ems": null
    },
    {
      "latitude": 51.710587,
      "longitude": 19.431028,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1674821277,
      "ems": null
    },
    {
      "latitude": 51.711109,
      "longitude": 19.432907,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1674821281,
      "ems": null
    },
    {
      "latitude": 51.711411,
      "longitude": 19.43474,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1674821284,
      "ems": null
    },
    {
      "latitude": 51.711761,
      "longitude": 19.436646,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1674821287,
      "ems": null
    },
    {
      "latitude": 51.71209,
      "longitude": 19.437943,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1674821289,
      "ems": null
    },
    {
      "latitude": 51.712692,
      "longitude": 19.439566,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1674821292,
      "ems": null
    },
    {
      "latitude": 51.713203,
      "longitude": 19.440384,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1674821294,
      "ems": null
    },
    {
      "latitude": 51.714111,
      "longitude": 19.441273,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1674821298,
      "ems": null
    },
    {
      "latitude": 51.715206,
      "longitude": 19.441757,
      "altitude": {
        "feet": 1325,
        "meters": 404
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1674821301,
      "ems": null
    },
    {
      "latitude": 51.716125,
      "longitude": 19.441792,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1674821303,
      "ems": null
    },
    {
      "latitude": 51.7173,
      "longitude": 19.441605,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1674821306,
      "ems": null
    },
    {
      "latitude": 51.718605,
      "longitude": 19.441299,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1674821310,
      "ems": null
    },
    {
      "latitude": 51.719723,
      "longitude": 19.440994,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1674821313,
      "ems": null
    },
    {
      "latitude": 51.720699,
      "longitude": 19.440765,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1674821315,
      "ems": null
    },
    {
      "latitude": 51.721985,
      "longitude": 19.440382,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1674821319,
      "ems": null
    },
    {
      "latitude": 51.723038,
      "longitude": 19.440084,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1674821322,
      "ems": null
    },
    {
      "latitude": 51.724228,
      "longitude": 19.439789,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1674821324,
      "ems": null
    },
    {
      "latitude": 51.725029,
      "longitude": 19.439545,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1674821327,
      "ems": null
    },
    {
      "latitude": 51.726238,
      "longitude": 19.439087,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1674821330,
      "ems": null
    },
    {
      "latitude": 51.727478,
      "longitude": 19.437933,
      "altitude": {
        "feet": 975,
        "meters": 297
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1674821334,
      "ems": null
    },
    {
      "latitude": 51.728165,
      "longitude": 19.436819,
      "altitude": {
        "feet": 950,
        "meters": 290
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1674821337,
      "ems": null
    },
    {
      "latitude": 51.728752,
      "longitude": 19.434891,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1674821340,
      "ems": null
    },
    {
      "latitude": 51.728939,
      "longitude": 19.433975,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1674821342,
      "ems": null
    },
    {
      "latitude": 51.728939,
      "longitude": 19.431305,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1674821346,
      "ems": null
    },
    {
      "latitude": 51.728714,
      "longitude": 19.429693,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1674821349,
      "ems": null
    },
    {
      "latitude": 51.728287,
      "longitude": 19.427643,
      "altitude": {
        "feet": 775,
        "meters": 236
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674821352,
      "ems": null
    },
    {
      "latitude": 51.727871,
      "longitude": 19.425812,
      "altitude": {
        "feet": 750,
        "meters": 229
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674821355,
      "ems": null
    },
    {
      "latitude": 51.727524,
      "longitude": 19.424051,
      "altitude": {
        "feet": 750,
        "meters": 229
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1674821358,
      "ems": null
    },
    {
      "latitude": 51.727169,
      "longitude": 19.422531,
      "altitude": {
        "feet": 725,
        "meters": 221
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
      "squawk": "7000",
      "timestamp": 1674821360,
      "ems": null
    },
    {
      "latitude": 51.726753,
      "longitude": 19.420319,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1674821364,
      "ems": null
    },
    {
      "latitude": 51.726379,
      "longitude": 19.418707,
      "altitude": {
        "feet": 675,
        "meters": 206
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674821366,
      "ems": null
    },
    {
      "latitude": 51.726013,
      "longitude": 19.417072,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1674821369,
      "ems": null
    },
    {
      "latitude": 51.72554,
      "longitude": 19.415131,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674821373,
      "ems": null
    },
    {
      "latitude": 51.724796,
      "longitude": 19.411621,
      "altitude": {
        "feet": 525,
        "meters": 160
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674821379,
      "ems": null
    },
    {
      "latitude": 51.723816,
      "longitude": 19.407051,
      "altitude": {
        "feet": 475,
        "meters": 145
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674821387,
      "ems": null
    },
    {
      "latitude": 51.719604,
      "longitude": 19.387455,
      "altitude": {
        "feet": 525,
        "meters": 160
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1674821427,
      "ems": null
    },
    {
      "latitude": 51.718552,
      "longitude": 19.382704,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674821433,
      "ems": null
    },
    {
      "latitude": 51.717674,
      "longitude": 19.379044,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674821439,
      "ems": null
    },
    {
      "latitude": 51.716743,
      "longitude": 19.375153,
      "altitude": {
        "feet": 725,
        "meters": 221
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674821445,
      "ems": null
    },
    {
      "latitude": 51.715851,
      "longitude": 19.371124,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674821451,
      "ems": null
    },
    {
      "latitude": 51.714973,
      "longitude": 19.366913,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1674821457,
      "ems": null
    },
    {
      "latitude": 51.71402,
      "longitude": 19.362289,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1674821463,
      "ems": null
    },
    {
      "latitude": 51.712971,
      "longitude": 19.358368,
      "altitude": {
        "feet": 1050,
        "meters": 320
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1674821469,
      "ems": null
    },
    {
      "latitude": 51.712143,
      "longitude": 19.356426,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1674821472,
      "ems": null
    },
    {
      "latitude": 51.711391,
      "longitude": 19.354935,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1674821475,
      "ems": null
    },
    {
      "latitude": 51.710087,
      "longitude": 19.353104,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1674821479,
      "ems": null
    },
    {
      "latitude": 51.708691,
      "longitude": 19.35173,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1674821482,
      "ems": null
    },
    {
      "latitude": 51.707611,
      "longitude": 19.350859,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1674821484,
      "ems": null
    },
    {
      "latitude": 51.706036,
      "longitude": 19.349976,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1674821488,
      "ems": null
    },
    {
      "latitude": 51.704685,
      "longitude": 19.349594,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1674821490,
      "ems": null
    },
    {
      "latitude": 51.703217,
      "longitude": 19.349522,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1674821493,
      "ems": null
    },
    {
      "latitude": 51.701706,
      "longitude": 19.349899,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1674821497,
      "ems": null
    },
    {
      "latitude": 51.700562,
      "longitude": 19.350636,
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1674821499,
      "ems": null
    },
    {
      "latitude": 51.699287,
      "longitude": 19.352036,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1674821502,
      "ems": null
    },
    {
      "latitude": 51.698364,
      "longitude": 19.353975,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1674821506,
      "ems": null
    },
    {
      "latitude": 51.697678,
      "longitude": 19.356501,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1674821509,
      "ems": null
    },
    {
      "latitude": 51.697422,
      "longitude": 19.358826,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1674821512,
      "ems": null
    },
    {
      "latitude": 51.697422,
      "longitude": 19.361343,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1674821515,
      "ems": null
    },
    {
      "latitude": 51.697659,
      "longitude": 19.363708,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1674821517,
      "ems": null
    },
    {
      "latitude": 51.698074,
      "longitude": 19.366226,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1674821520,
      "ems": null
    },
    {
      "latitude": 51.698593,
      "longitude": 19.368971,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1674821524,
      "ems": null
    },
    {
      "latitude": 51.699005,
      "longitude": 19.371271,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1674821526,
      "ems": null
    },
    {
      "latitude": 51.699379,
      "longitude": 19.373322,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1674821529,
      "ems": null
    },
    {
      "latitude": 51.699986,
      "longitude": 19.376297,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1674821533,
      "ems": null
    },
    {
      "latitude": 51.700405,
      "longitude": 19.378586,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1674821536,
      "ems": null
    },
    {
      "latitude": 51.70079,
      "longitude": 19.380625,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1674821539,
      "ems": null
    },
    {
      "latitude": 51.701294,
      "longitude": 19.383223,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1674821542,
      "ems": null
    },
    {
      "latitude": 51.701706,
      "longitude": 19.38545,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1674821545,
      "ems": null
    },
    {
      "latitude": 51.702072,
      "longitude": 19.387381,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1674821548,
      "ems": null
    },
    {
      "latitude": 51.702942,
      "longitude": 19.392057,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1674821554,
      "ems": null
    },
    {
      "latitude": 51.7038,
      "longitude": 19.396362,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1674821560,
      "ems": null
    },
    {
      "latitude": 51.704453,
      "longitude": 19.399776,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1674821565,
      "ems": null
    },
    {
      "latitude": 51.705505,
      "longitude": 19.404751,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1674821571,
      "ems": null
    },
    {
      "latitude": 51.706512,
      "longitude": 19.409576,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1674821578,
      "ems": null
    },
    {
      "latitude": 51.707428,
      "longitude": 19.413881,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1674821584,
      "ems": null
    },
    {
      "latitude": 51.708225,
      "longitude": 19.418488,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1674821590,
      "ems": null
    },
    {
      "latitude": 51.708939,
      "longitude": 19.422491,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1674821596,
      "ems": null
    },
    {
      "latitude": 51.709717,
      "longitude": 19.426872,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1674821602,
      "ems": null
    },
    {
      "latitude": 51.709991,
      "longitude": 19.428654,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1674821605,
      "ems": null
    },
    {
      "latitude": 51.710541,
      "longitude": 19.432068,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1674821611,
      "ems": null
    },
    {
      "latitude": 51.711063,
      "longitude": 19.435577,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1674821616,
      "ems": null
    },
    {
      "latitude": 51.71167,
      "longitude": 19.439697,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1674821623,
      "ems": null
    },
    {
      "latitude": 51.712097,
      "longitude": 19.441422,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1674821626,
      "ems": null
    },
    {
      "latitude": 51.712646,
      "longitude": 19.442757,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1674821629,
      "ems": null
    },
    {
      "latitude": 51.713531,
      "longitude": 19.44397,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1674821632,
      "ems": null
    },
    {
      "latitude": 51.714695,
      "longitude": 19.444885,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1674821636,
      "ems": null
    },
    {
      "latitude": 51.715805,
      "longitude": 19.445282,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1674821639,
      "ems": null
    },
    {
      "latitude": 51.71693,
      "longitude": 19.445343,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1674821641,
      "ems": null
    },
    {
      "latitude": 51.717999,
      "longitude": 19.445267,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1674821644,
      "ems": null
    },
    {
      "latitude": 51.719257,
      "longitude": 19.445038,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1674821647,
      "ems": null
    },
    {
      "latitude": 51.720329,
      "longitude": 19.444809,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1674821650,
      "ems": null
    },
    {
      "latitude": 51.721539,
      "longitude": 19.444656,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1674821653,
      "ems": null
    },
    {
      "latitude": 51.722626,
      "longitude": 19.444464,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1674821656,
      "ems": null
    },
    {
      "latitude": 51.723866,
      "longitude": 19.444275,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1674821660,
      "ems": null
    },
    {
      "latitude": 51.724983,
      "longitude": 19.444046,
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1674821663,
      "ems": null
    },
    {
      "latitude": 51.726101,
      "longitude": 19.443741,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1674821666,
      "ems": null
    },
    {
      "latitude": 51.726974,
      "longitude": 19.443203,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1674821668,
      "ems": null
    },
    {
      "latitude": 51.728119,
      "longitude": 19.44194,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1674821672,
      "ems": null
    },
    {
      "latitude": 51.728897,
      "longitude": 19.440531,
      "altitude": {
        "feet": 975,
        "meters": 297
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1674821675,
      "ems": null
    },
    {
      "latitude": 51.729359,
      "longitude": 19.439316,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1674821677,
      "ems": null
    },
    {
      "latitude": 51.729813,
      "longitude": 19.436893,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1674821681,
      "ems": null
    },
    {
      "latitude": 51.729824,
      "longitude": 19.434891,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1674821684,
      "ems": null
    },
    {
      "latitude": 51.7295,
      "longitude": 19.432983,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1674821687,
      "ems": null
    },
    {
      "latitude": 51.72908,
      "longitude": 19.431028,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1674821690,
      "ems": null
    },
    {
      "latitude": 51.728714,
      "longitude": 19.429247,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1674821693,
      "ems": null
    },
    {
      "latitude": 51.728256,
      "longitude": 19.427317,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674821696,
      "ems": null
    },
    {
      "latitude": 51.727844,
      "longitude": 19.425386,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674821699,
      "ems": null
    },
    {
      "latitude": 51.727451,
      "longitude": 19.423447,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1674821702,
      "ems": null
    },
    {
      "latitude": 51.72702,
      "longitude": 19.421379,
      "altitude": {
        "feet": 750,
        "meters": 229
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674821705,
      "ems": null
    },
    {
      "latitude": 51.726704,
      "longitude": 19.419937,
      "altitude": {
        "feet": 725,
        "meters": 221
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674821707,
      "ems": null
    },
    {
      "latitude": 51.726192,
      "longitude": 19.417725,
      "altitude": {
        "feet": 675,
        "meters": 206
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674821711,
      "ems": null
    },
    {
      "latitude": 51.725727,
      "longitude": 19.415588,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674821714,
      "ems": null
    },
    {
      "latitude": 51.725006,
      "longitude": 19.41247,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1674821719,
      "ems": null
    },
    {
      "latitude": 51.724182,
      "longitude": 19.408686,
      "altitude": {
        "feet": 525,
        "meters": 160
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674821726,
      "ems": null
    },
    {
      "latitude": 51.7234,
      "longitude": 19.405136,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674821732,
      "ems": null
    },
    {
      "latitude": 51.722717,
      "longitude": 19.40193,
      "altitude": {
        "feet": 550,
        "meters": 168
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674821737,
      "ems": null
    },
    {
      "latitude": 51.721909,
      "longitude": 19.398041,
      "altitude": {
        "feet": 650,
        "meters": 198
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1674821743,
      "ems": null
    },
    {
      "latitude": 51.721115,
      "longitude": 19.393764,
      "altitude": {
        "feet": 675,
        "meters": 206
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1674821750,
      "ems": null
    },
    {
      "latitude": 51.72052,
      "longitude": 19.390869,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674821756,
      "ems": null
    },
    {
      "latitude": 51.719536,
      "longitude": 19.386597,
      "altitude": {
        "feet": 775,
        "meters": 236
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674821763,
      "ems": null
    },
    {
      "latitude": 51.718792,
      "longitude": 19.383545,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674821768,
      "ems": null
    },
    {
      "latitude": 51.717953,
      "longitude": 19.379654,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674821774,
      "ems": null
    },
    {
      "latitude": 51.717133,
      "longitude": 19.375727,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1674821780,
      "ems": null
    },
    {
      "latitude": 51.716309,
      "longitude": 19.371792,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1674821786,
      "ems": null
    },
    {
      "latitude": 51.715439,
      "longitude": 19.367634,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1674821792,
      "ems": null
    },
    {
      "latitude": 51.714615,
      "longitude": 19.363403,
      "altitude": {
        "feet": 975,
        "meters": 297
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1674821799,
      "ems": null
    },
    {
      "latitude": 51.714249,
      "longitude": 19.361547,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1674821802,
      "ems": null
    },
    {
      "latitude": 51.713531,
      "longitude": 19.357758,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1674821807,
      "ems": null
    },
    {
      "latitude": 51.712875,
      "longitude": 19.355536,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1674821811,
      "ems": null
    },
    {
      "latitude": 51.712143,
      "longitude": 19.353754,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1674821814,
      "ems": null
    },
    {
      "latitude": 51.711365,
      "longitude": 19.352343,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1674821817,
      "ems": null
    },
    {
      "latitude": 51.710312,
      "longitude": 19.350933,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1674821820,
      "ems": null
    },
    {
      "latitude": 51.709202,
      "longitude": 19.34967,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1674821823,
      "ems": null
    },
    {
      "latitude": 51.708023,
      "longitude": 19.348705,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1674821826,
      "ems": null
    },
    {
      "latitude": 51.70697,
      "longitude": 19.348112,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1674821829,
      "ems": null
    },
    {
      "latitude": 51.705688,
      "longitude": 19.347666,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1674821832,
      "ems": null
    },
    {
      "latitude": 51.704453,
      "longitude": 19.347382,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1674821835,
      "ems": null
    },
    {
      "latitude": 51.703125,
      "longitude": 19.347443,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1674821838,
      "ems": null
    },
    {
      "latitude": 51.701939,
      "longitude": 19.34761,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1674821841,
      "ems": null
    },
    {
      "latitude": 51.700607,
      "longitude": 19.348112,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1674821844,
      "ems": null
    },
    {
      "latitude": 51.699463,
      "longitude": 19.348631,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1674821847,
      "ems": null
    },
    {
      "latitude": 51.698273,
      "longitude": 19.349522,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1674821850,
      "ems": null
    },
    {
      "latitude": 51.697174,
      "longitude": 19.35071,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1674821853,
      "ems": null
    },
    {
      "latitude": 51.696167,
      "longitude": 19.352417,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1674821856,
      "ems": null
    },
    {
      "latitude": 51.695515,
      "longitude": 19.354172,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1674821859,
      "ems": null
    },
    {
      "latitude": 51.695145,
      "longitude": 19.356155,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "squawk": "7000",
      "timestamp": 1674821862,
      "ems": null
    },
    {
      "latitude": 51.695114,
      "longitude": 19.358282,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1674821865,
      "ems": null
    },
    {
      "latitude": 51.69519,
      "longitude": 19.360504,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1674821868,
      "ems": null
    },
    {
      "latitude": 51.695389,
      "longitude": 19.362885,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1674821871,
      "ems": null
    },
    {
      "latitude": 51.695618,
      "longitude": 19.36511,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1674821874,
      "ems": null
    },
    {
      "latitude": 51.695847,
      "longitude": 19.367413,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1674821877,
      "ems": null
    },
    {
      "latitude": 51.696075,
      "longitude": 19.369713,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1674821880,
      "ems": null
    },
    {
      "latitude": 51.696259,
      "longitude": 19.371948,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1674821883,
      "ems": null
    },
    {
      "latitude": 51.696445,
      "longitude": 19.374084,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1674821886,
      "ems": null
    },
    {
      "latitude": 51.696671,
      "longitude": 19.37632,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1674821889,
      "ems": null
    },
    {
      "latitude": 51.696991,
      "longitude": 19.37862,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1674821892,
      "ems": null
    },
    {
      "latitude": 51.697357,
      "longitude": 19.380699,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1674821895,
      "ems": null
    },
    {
      "latitude": 51.697678,
      "longitude": 19.382555,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1674821898,
      "ems": null
    },
    {
      "latitude": 51.69809,
      "longitude": 19.385153,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1674821901,
      "ems": null
    },
    {
      "latitude": 51.69841,
      "longitude": 19.387157,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1674821904,
      "ems": null
    },
    {
      "latitude": 51.698776,
      "longitude": 19.389236,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1674821907,
      "ems": null
    },
    {
      "latitude": 51.699188,
      "longitude": 19.391315,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1674821910,
      "ems": null
    },
    {
      "latitude": 51.699554,
      "longitude": 19.393318,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1674821913,
      "ems": null
    },
    {
      "latitude": 51.700077,
      "longitude": 19.395676,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1674821917,
      "ems": null
    },
    {
      "latitude": 51.700542,
      "longitude": 19.397888,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1674821920,
      "ems": null
    },
    {
      "latitude": 51.700962,
      "longitude": 19.399796,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1674821923,
      "ems": null
    },
    {
      "latitude": 51.701569,
      "longitude": 19.403488,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1674821928,
      "ems": null
    },
    {
      "latitude": 51.702171,
      "longitude": 19.40773,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1674821934,
      "ems": null
    },
    {
      "latitude": 51.702896,
      "longitude": 19.412323,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1674821941,
      "ems": null
    },
    {
      "latitude": 51.70385,
      "longitude": 19.41803,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1674821949,
      "ems": null
    },
    {
      "latitude": 51.704315,
      "longitude": 19.421005,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1674821953,
      "ems": null
    },
    {
      "latitude": 51.705002,
      "longitude": 19.42561,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1674821959,
      "ems": null
    },
    {
      "latitude": 51.705597,
      "longitude": 19.429989,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1674821965,
      "ems": null
    },
    {
      "latitude": 51.706146,
      "longitude": 19.434147,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1674821971,
      "ems": null
    },
    {
      "latitude": 51.707062,
      "longitude": 19.437027,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1674821977,
      "ems": null
    },
    {
      "latitude": 51.708984,
      "longitude": 19.439491,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1674821981,
      "ems": null
    },
    {
      "latitude": 51.710457,
      "longitude": 19.440308,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "timestamp": 1674821985,
      "ems": null
    },
    {
      "latitude": 51.712418,
      "longitude": 19.440754,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1674821989,
      "ems": null
    },
    {
      "latitude": 51.71381,
      "longitude": 19.440765,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1674821993,
      "ems": null
    },
    {
      "latitude": 51.716278,
      "longitude": 19.440384,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1674821997,
      "ems": null
    },
    {
      "latitude": 51.717819,
      "longitude": 19.440084,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1674822001,
      "ems": null
    },
    {
      "latitude": 51.719349,
      "longitude": 19.43985,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1674822005,
      "ems": null
    },
    {
      "latitude": 51.72163,
      "longitude": 19.439316,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1674822010,
      "ems": null
    },
    {
      "latitude": 51.723167,
      "longitude": 19.438782,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1674822014,
      "ems": null
    },
    {
      "latitude": 51.724686,
      "longitude": 19.43771,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1674822018,
      "ems": null
    },
    {
      "latitude": 51.726288,
      "longitude": 19.43573,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1674822022,
      "ems": null
    },
    {
      "latitude": 51.727123,
      "longitude": 19.434204,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1674822025,
      "ems": null
    },
    {
      "latitude": 51.727821,
      "longitude": 19.43222,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1674822028,
      "ems": null
    },
    {
      "latitude": 51.728104,
      "longitude": 19.430313,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1674822031,
      "ems": null
    },
    {
      "latitude": 51.728119,
      "longitude": 19.428282,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1674822034,
      "ems": null
    },
    {
      "latitude": 51.727871,
      "longitude": 19.425812,
      "altitude": {
        "feet": 975,
        "meters": 297
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1674822038,
      "ems": null
    },
    {
      "latitude": 51.727543,
      "longitude": 19.423828,
      "altitude": {
        "feet": 925,
        "meters": 282
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1674822040,
      "ems": null
    },
    {
      "latitude": 51.727077,
      "longitude": 19.421692,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674822044,
      "ems": null
    },
    {
      "latitude": 51.726654,
      "longitude": 19.419893,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674822046,
      "ems": null
    },
    {
      "latitude": 51.726196,
      "longitude": 19.417816,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674822050,
      "ems": null
    },
    {
      "latitude": 51.725868,
      "longitude": 19.41658,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674822051,
      "ems": null
    },
    {
      "latitude": 51.725555,
      "longitude": 19.414921,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1674822054,
      "ems": null
    },
    {
      "latitude": 51.725124,
      "longitude": 19.412994,
      "altitude": {
        "feet": 675,
        "meters": 206
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674822057,
      "ems": null
    },
    {
      "latitude": 51.724518,
      "longitude": 19.410172,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674822061,
      "ems": null
    },
    {
      "latitude": 51.724144,
      "longitude": 19.408493,
      "altitude": {
        "feet": 550,
        "meters": 168
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674822064,
      "ems": null
    },
    {
      "latitude": 51.723354,
      "longitude": 19.404526,
      "altitude": {
        "feet": 525,
        "meters": 160
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
      "squawk": "7000",
      "timestamp": 1674822070,
      "ems": null
    },
    {
      "latitude": 51.722656,
      "longitude": 19.400787,
      "altitude": {
        "feet": 575,
        "meters": 175
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1674822076,
      "ems": null
    },
    {
      "latitude": 51.721909,
      "longitude": 19.396896,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1674822082,
      "ems": null
    },
    {
      "latitude": 51.721436,
      "longitude": 19.394804,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674822086,
      "ems": null
    },
    {
      "latitude": 51.720047,
      "longitude": 19.388885,
      "altitude": {
        "feet": 675,
        "meters": 206
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674822096,
      "ems": null
    },
    {
      "latitude": 51.719009,
      "longitude": 19.384634,
      "altitude": {
        "feet": 725,
        "meters": 221
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1674822104,
      "ems": null
    },
    {
      "latitude": 51.718002,
      "longitude": 19.380255,
      "altitude": {
        "feet": 775,
        "meters": 236
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674822112,
      "ems": null
    },
    {
      "latitude": 51.717041,
      "longitude": 19.375948,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674822120,
      "ems": null
    },
    {
      "latitude": 51.715813,
      "longitude": 19.370956,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1674822128,
      "ems": null
    },
    {
      "latitude": 51.714478,
      "longitude": 19.364962,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1674822137,
      "ems": null
    },
    {
      "latitude": 51.71339,
      "longitude": 19.359589,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1674822145,
      "ems": null
    },
    {
      "latitude": 51.71228,
      "longitude": 19.354792,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1674822153,
      "ems": null
    },
    {
      "latitude": 51.711437,
      "longitude": 19.352341,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1674822157,
      "ems": null
    },
    {
      "latitude": 51.710403,
      "longitude": 19.350117,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1674822161,
      "ems": null
    },
    {
      "latitude": 51.708984,
      "longitude": 19.348112,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1674822165,
      "ems": null
    },
    {
      "latitude": 51.707897,
      "longitude": 19.347076,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1674822169,
      "ems": null
    },
    {
      "latitude": 51.705849,
      "longitude": 19.346008,
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1674822173,
      "ems": null
    },
    {
      "latitude": 51.704174,
      "longitude": 19.345779,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1674822177,
      "ems": null
    },
    {
      "latitude": 51.702732,
      "longitude": 19.346008,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1674822181,
      "ems": null
    },
    {
      "latitude": 51.700962,
      "longitude": 19.346848,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1674822185,
      "ems": null
    },
    {
      "latitude": 51.699566,
      "longitude": 19.347916,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1674822189,
      "ems": null
    },
    {
      "latitude": 51.697937,
      "longitude": 19.34967,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1674822193,
      "ems": null
    },
    {
      "latitude": 51.697052,
      "longitude": 19.351196,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1674822197,
      "ems": null
    },
    {
      "latitude": 51.696026,
      "longitude": 19.354019,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1674822202,
      "ems": null
    },
    {
      "latitude": 51.695572,
      "longitude": 19.357317,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1674822206,
      "ems": null
    },
    {
      "latitude": 51.69561,
      "longitude": 19.359665,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1674822210,
      "ems": null
    },
    {
      "latitude": 51.695755,
      "longitude": 19.361622,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1674822212,
      "ems": null
    },
    {
      "latitude": 51.696167,
      "longitude": 19.363937,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1674822216,
      "ems": null
    },
    {
      "latitude": 51.696632,
      "longitude": 19.366074,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1674822219,
      "ems": null
    },
    {
      "latitude": 51.697098,
      "longitude": 19.368134,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1674822222,
      "ems": null
    },
    {
      "latitude": 51.697495,
      "longitude": 19.370085,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1674822224,
      "ems": null
    },
    {
      "latitude": 51.697983,
      "longitude": 19.37233,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1674822227,
      "ems": null
    },
    {
      "latitude": 51.698448,
      "longitude": 19.374771,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1674822231,
      "ems": null
    },
    {
      "latitude": 51.698635,
      "longitude": 19.375534,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1674822232,
      "ems": null
    },
    {
      "latitude": 51.699238,
      "longitude": 19.378891,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1674822236,
      "ems": null
    },
    {
      "latitude": 51.699657,
      "longitude": 19.381485,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1674822240,
      "ems": null
    },
    {
      "latitude": 51.700012,
      "longitude": 19.383669,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1674822242,
      "ems": null
    },
    {
      "latitude": 51.700333,
      "longitude": 19.385895,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1674822245,
      "ems": null
    },
    {
      "latitude": 51.700607,
      "longitude": 19.388123,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1674822249,
      "ems": null
    },
    {
      "latitude": 51.700916,
      "longitude": 19.390488,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1674822252,
      "ems": null
    },
    {
      "latitude": 51.701195,
      "longitude": 19.392548,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1674822254,
      "ems": null
    },
    {
      "latitude": 51.701519,
      "longitude": 19.395142,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1674822258,
      "ems": null
    },
    {
      "latitude": 51.701847,
      "longitude": 19.39743,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1674822261,
      "ems": null
    },
    {
      "latitude": 51.702484,
      "longitude": 19.401188,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1674822266,
      "ems": null
    },
    {
      "latitude": 51.7034,
      "longitude": 19.406086,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1674822272,
      "ems": null
    },
    {
      "latitude": 51.703857,
      "longitude": 19.408537,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1674822276,
      "ems": null
    },
    {
      "latitude": 51.704315,
      "longitude": 19.410763,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1674822279,
      "ems": null
    },
    {
      "latitude": 51.704639,
      "longitude": 19.412308,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1674822281,
      "ems": null
    },
    {
      "latitude": 51.705231,
      "longitude": 19.41507,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1674822285,
      "ems": null
    },
    {
      "latitude": 51.705734,
      "longitude": 19.41737,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1674822288,
      "ems": null
    },
    {
      "latitude": 51.706177,
      "longitude": 19.419708,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1674822291,
      "ems": null
    },
    {
      "latitude": 51.707016,
      "longitude": 19.4242,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1674822297,
      "ems": null
    },
    {
      "latitude": 51.70776,
      "longitude": 19.428558,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1674822303,
      "ems": null
    },
    {
      "latitude": 51.708504,
      "longitude": 19.432526,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1674822309,
      "ems": null
    },
    {
      "latitude": 51.709671,
      "longitude": 19.436596,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1674822314,
      "ems": null
    },
    {
      "latitude": 51.710785,
      "longitude": 19.438782,
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1674822318,
      "ems": null
    },
    {
      "latitude": 51.711594,
      "longitude": 19.439936,
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1674822321,
      "ems": null
    },
    {
      "latitude": 51.71315,
      "longitude": 19.441198,
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1674822324,
      "ems": null
    },
    {
      "latitude": 51.714554,
      "longitude": 19.441757,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1674822327,
      "ems": null
    },
    {
      "latitude": 51.71595,
      "longitude": 19.44191,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1674822330,
      "ems": null
    },
    {
      "latitude": 51.717396,
      "longitude": 19.441986,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1674822333,
      "ems": null
    },
    {
      "latitude": 51.718838,
      "longitude": 19.442139,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1674822336,
      "ems": null
    },
    {
      "latitude": 51.720375,
      "longitude": 19.442215,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1674822339,
      "ems": null
    },
    {
      "latitude": 51.721676,
      "longitude": 19.442291,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1674822342,
      "ems": null
    },
    {
      "latitude": 51.723076,
      "longitude": 19.442368,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1674822346,
      "ems": null
    },
    {
      "latitude": 51.724503,
      "longitude": 19.442387,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1674822349,
      "ems": null
    },
    {
      "latitude": 51.72583,
      "longitude": 19.442461,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1674822352,
      "ems": null
    },
    {
      "latitude": 51.726986,
      "longitude": 19.442291,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1674822354,
      "ems": null
    },
    {
      "latitude": 51.728195,
      "longitude": 19.441681,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1674822357,
      "ems": null
    },
    {
      "latitude": 51.729263,
      "longitude": 19.440531,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1674822361,
      "ems": null
    },
    {
      "latitude": 51.730198,
      "longitude": 19.438705,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1674822364,
      "ems": null
    },
    {
      "latitude": 51.730663,
      "longitude": 19.436722,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1674822367,
      "ems": null
    },
    {
      "latitude": 51.730801,
      "longitude": 19.434357,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1674822370,
      "ems": null
    },
    {
      "latitude": 51.730637,
      "longitude": 19.432217,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1674822373,
      "ems": null
    },
    {
      "latitude": 51.730244,
      "longitude": 19.430161,
      "altitude": {
        "feet": 1175,
        "meters": 358
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674822376,
      "ems": null
    },
    {
      "latitude": 51.72963,
      "longitude": 19.428207,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1674822379,
      "ems": null
    },
    {
      "latitude": 51.728848,
      "longitude": 19.426193,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1674822382,
      "ems": null
    },
    {
      "latitude": 51.728195,
      "longitude": 19.424362,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1674822384,
      "ems": null
    },
    {
      "latitude": 51.727524,
      "longitude": 19.42227,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1674822388,
      "ems": null
    },
    {
      "latitude": 51.726929,
      "longitude": 19.420191,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1674822391,
      "ems": null
    },
    {
      "latitude": 51.726288,
      "longitude": 19.417877,
      "altitude": {
        "feet": 875,
        "meters": 267
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1674822394,
      "ems": null
    },
    {
      "latitude": 51.725784,
      "longitude": 19.415663,
      "altitude": {
        "feet": 825,
        "meters": 251
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1674822397,
      "ems": null
    },
    {
      "latitude": 51.725281,
      "longitude": 19.413509,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674822400,
      "ems": null
    },
    {
      "latitude": 51.724983,
      "longitude": 19.412231,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674822402,
      "ems": null
    },
    {
      "latitude": 51.723953,
      "longitude": 19.407497,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674822409,
      "ems": null
    },
    {
      "latitude": 51.723541,
      "longitude": 19.405746,
      "altitude": {
        "feet": 550,
        "meters": 168
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674822411,
      "ems": null
    },
    {
      "latitude": 51.723259,
      "longitude": 19.404526,
      "altitude": {
        "feet": 525,
        "meters": 160
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674822413,
      "ems": null
    },
    {
      "latitude": 51.718231,
      "longitude": 19.381332,
      "altitude": {
        "feet": 525,
        "meters": 160
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1674822454,
      "ems": null
    },
    {
      "latitude": 51.717396,
      "longitude": 19.376907,
      "altitude": {
        "feet": 625,
        "meters": 191
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1674822460,
      "ems": null
    },
    {
      "latitude": 51.716602,
      "longitude": 19.37294,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1674822466,
      "ems": null
    },
    {
      "latitude": 51.715759,
      "longitude": 19.368748,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1674822472,
      "ems": null
    },
    {
      "latitude": 51.714981,
      "longitude": 19.36422,
      "altitude": {
        "feet": 850,
        "meters": 259
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1674822479,
      "ems": null
    },
    {
      "latitude": 51.714138,
      "longitude": 19.359665,
      "altitude": {
        "feet": 950,
        "meters": 290
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1674822484,
      "ems": null
    },
    {
      "latitude": 51.712967,
      "longitude": 19.355238,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1674822491,
      "ems": null
    },
    {
      "latitude": 51.712135,
      "longitude": 19.353104,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1674822494,
      "ems": null
    },
    {
      "latitude": 51.711296,
      "longitude": 19.351501,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1674822496,
      "ems": null
    },
    {
      "latitude": 51.710083,
      "longitude": 19.349596,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1674822499,
      "ems": null
    },
    {
      "latitude": 51.708828,
      "longitude": 19.348068,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1674822503,
      "ems": null
    },
    {
      "latitude": 51.707573,
      "longitude": 19.347,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1674822505,
      "ems": null
    },
    {
      "latitude": 51.706192,
      "longitude": 19.346033,
      "altitude": {
        "feet": 1325,
        "meters": 404
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1674822508,
      "ems": null
    },
    {
      "latitude": 51.704681,
      "longitude": 19.345366,
      "altitude": {
        "feet": 1375,
        "meters": 419
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1674822511,
      "ems": null
    },
    {
      "latitude": 51.703079,
      "longitude": 19.345068,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1674822514,
      "ems": null
    },
    {
      "latitude": 51.70166,
      "longitude": 19.345142,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1674822517,
      "ems": null
    },
    {
      "latitude": 51.699829,
      "longitude": 19.345587,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1674822521,
      "ems": null
    },
    {
      "latitude": 51.698318,
      "longitude": 19.346552,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1674822524,
      "ems": null
    },
    {
      "latitude": 51.696911,
      "longitude": 19.347992,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1674822527,
      "ems": null
    },
    {
      "latitude": 51.695934,
      "longitude": 19.349518,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1674822529,
      "ems": null
    },
    {
      "latitude": 51.694958,
      "longitude": 19.351959,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1674822533,
      "ems": null
    },
    {
      "latitude": 51.694382,
      "longitude": 19.354347,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1674822536,
      "ems": null
    },
    {
      "latitude": 51.694118,
      "longitude": 19.357071,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1674822539,
      "ems": null
    },
    {
      "latitude": 51.694107,
      "longitude": 19.359692,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1674822542,
      "ems": null
    },
    {
      "latitude": 51.694336,
      "longitude": 19.361994,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1674822544,
      "ems": null
    },
    {
      "latitude": 51.694862,
      "longitude": 19.364777,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1674822548,
      "ems": null
    },
    {
      "latitude": 51.695515,
      "longitude": 19.367371,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1674822551,
      "ems": null
    },
    {
      "latitude": 51.696075,
      "longitude": 19.369415,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1674822554,
      "ems": null
    },
    {
      "latitude": 51.696762,
      "longitude": 19.372385,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1674822557,
      "ems": null
    },
    {
      "latitude": 51.69722,
      "longitude": 19.37439,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1674822559,
      "ems": null
    },
    {
      "latitude": 51.69775,
      "longitude": 19.376755,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1674822562,
      "ems": null
    },
    {
      "latitude": 51.698273,
      "longitude": 19.379066,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1674822565,
      "ems": null
    },
    {
      "latitude": 51.698868,
      "longitude": 19.381962,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1674822569,
      "ems": null
    },
    {
      "latitude": 51.699333,
      "longitude": 19.384384,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1674822572,
      "ems": null
    },
    {
      "latitude": 51.69989,
      "longitude": 19.386978,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1674822575,
      "ems": null
    },
    {
      "latitude": 51.700729,
      "longitude": 19.391403,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1674822581,
      "ems": null
    },
    {
      "latitude": 51.701111,
      "longitude": 19.393541,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1674822584,
      "ems": null
    },
    {
      "latitude": 51.701569,
      "longitude": 19.395844,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1674822587,
      "ems": null
    },
    {
      "latitude": 51.702209,
      "longitude": 19.4,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1674822593,
      "ems": null
    },
    {
      "latitude": 51.702545,
      "longitude": 19.402466,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1674822596,
      "ems": null
    },
    {
      "latitude": 51.702805,
      "longitude": 19.404676,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1674822599,
      "ems": null
    },
    {
      "latitude": 51.703056,
      "longitude": 19.406967,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1674822602,
      "ems": null
    },
    {
      "latitude": 51.703308,
      "longitude": 19.409279,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1674822605,
      "ems": null
    },
    {
      "latitude": 51.703537,
      "longitude": 19.411432,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1674822608,
      "ems": null
    },
    {
      "latitude": 51.703766,
      "longitude": 19.413956,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1674822611,
      "ems": null
    },
    {
      "latitude": 51.703896,
      "longitude": 19.415054,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1674822613,
      "ems": null
    },
    {
      "latitude": 51.704224,
      "longitude": 19.418037,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1674822617,
      "ems": null
    },
    {
      "latitude": 51.704636,
      "longitude": 19.422714,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1674822623,
      "ems": null
    },
    {
      "latitude": 51.705048,
      "longitude": 19.42754,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1674822629,
      "ems": null
    },
    {
      "latitude": 51.705338,
      "longitude": 19.430923,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1674822634,
      "ems": null
    },
    {
      "latitude": 51.705826,
      "longitude": 19.436003,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1674822641,
      "ems": null
    },
    {
      "latitude": 51.706596,
      "longitude": 19.438858,
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1674822646,
      "ems": null
    },
    {
      "latitude": 51.708069,
      "longitude": 19.440975,
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
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1674822651,
      "ems": null
    },
    {
      "latitude": 51.709167,
      "longitude": 19.441717,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1674822654,
      "ems": null
    },
    {
      "latitude": 51.71032,
      "longitude": 19.442062,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1674822656,
      "ems": null
    },
    {
      "latitude": 51.711624,
      "longitude": 19.442291,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1674822660,
      "ems": null
    },
    {
      "latitude": 51.712879,
      "longitude": 19.442368,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1674822663,
      "ems": null
    },
    {
      "latitude": 51.714138,
      "longitude": 19.442291,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1674822666,
      "ems": null
    },
    {
      "latitude": 51.715393,
      "longitude": 19.442215,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1674822669,
      "ems": null
    },
    {
      "latitude": 51.716602,
      "longitude": 19.442139,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1674822672,
      "ems": null
    },
    {
      "latitude": 51.717861,
      "longitude": 19.441986,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1674822675,
      "ems": null
    },
    {
      "latitude": 51.719193,
      "longitude": 19.441792,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1674822678,
      "ems": null
    },
    {
      "latitude": 51.720291,
      "longitude": 19.44157,
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1674822681,
      "ems": null
    },
    {
      "latitude": 51.72163,
      "longitude": 19.441223,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1674822684,
      "ems": null
    },
    {
      "latitude": 51.722889,
      "longitude": 19.440994,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1674822687,
      "ems": null
    },
    {
      "latitude": 51.724144,
      "longitude": 19.440613,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1674822690,
      "ems": null
    },
    {
      "latitude": 51.725449,
      "longitude": 19.440155,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1674822693,
      "ems": null
    },
    {
      "latitude": 51.726425,
      "longitude": 19.439545,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1674822695,
      "ems": null
    },
    {
      "latitude": 51.727661,
      "longitude": 19.438154,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1674822699,
      "ems": null
    },
    {
      "latitude": 51.728485,
      "longitude": 19.436522,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1674822702,
      "ems": null
    },
    {
      "latitude": 51.728985,
      "longitude": 19.43428,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1674822705,
      "ems": null
    },
    {
      "latitude": 51.72908,
      "longitude": 19.432661,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1674822707,
      "ems": null
    },
    {
      "latitude": 51.728848,
      "longitude": 19.430084,
      "altitude": {
        "feet": 975,
        "meters": 297
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1674822711,
      "ems": null
    },
    {
      "latitude": 51.728519,
      "longitude": 19.428329,
      "altitude": {
        "feet": 925,
        "meters": 282
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1674822714,
      "ems": null
    },
    {
      "latitude": 51.728119,
      "longitude": 19.426352,
      "altitude": {
        "feet": 875,
        "meters": 267
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1674822716,
      "ems": null
    },
    {
      "latitude": 51.727661,
      "longitude": 19.424274,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1674822720,
      "ems": null
    },
    {
      "latitude": 51.727264,
      "longitude": 19.422302,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1674822723,
      "ems": null
    },
    {
      "latitude": 51.726891,
      "longitude": 19.420395,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674822726,
      "ems": null
    },
    {
      "latitude": 51.726425,
      "longitude": 19.418484,
      "altitude": {
        "feet": 675,
        "meters": 206
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674822729,
      "ems": null
    },
    {
      "latitude": 51.726151,
      "longitude": 19.417221,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674822731,
      "ems": null
    },
    {
      "latitude": 51.72559,
      "longitude": 19.415054,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1674822734,
      "ems": null
    },
    {
      "latitude": 51.72496,
      "longitude": 19.412395,
      "altitude": {
        "feet": 575,
        "meters": 175
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674822738,
      "ems": null
    },
    {
      "latitude": 51.724518,
      "longitude": 19.410324,
      "altitude": {
        "feet": 550,
        "meters": 168
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674822741,
      "ems": null
    },
    {
      "latitude": 51.719147,
      "longitude": 19.385599,
      "altitude": {
        "feet": 550,
        "meters": 168
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1674822784,
      "ems": null
    },
    {
      "latitude": 51.718323,
      "longitude": 19.382036,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1674822790,
      "ems": null
    },
    {
      "latitude": 51.717396,
      "longitude": 19.378281,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1674822796,
      "ems": null
    },
    {
      "latitude": 51.716511,
      "longitude": 19.374619,
      "altitude": {
        "feet": 825,
        "meters": 251
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1674822802,
      "ems": null
    },
    {
      "latitude": 51.715576,
      "longitude": 19.370901,
      "altitude": {
        "feet": 925,
        "meters": 282
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1674822808,
      "ems": null
    },
    {
      "latitude": 51.714603,
      "longitude": 19.366989,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1674822813,
      "ems": null
    },
    {
      "latitude": 51.713577,
      "longitude": 19.362717,
      "altitude": {
        "feet": 1075,
        "meters": 328
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674822820,
      "ems": null
    },
    {
      "latitude": 51.712601,
      "longitude": 19.358521,
      "altitude": {
        "feet": 1175,
        "meters": 358
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1674822826,
      "ems": null
    },
    {
      "latitude": 51.712051,
      "longitude": 19.355757,
      "altitude": {
        "feet": 1225,
        "meters": 373
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1674822832,
      "ems": null
    },
    {
      "latitude": 51.711529,
      "longitude": 19.351883,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1674822835,
      "ems": null
    },
    {
      "latitude": 51.711342,
      "longitude": 19.349747,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1674822838,
      "ems": null
    },
    {
      "latitude": 51.711273,
      "longitude": 19.347443,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1674822841,
      "ems": null
    },
    {
      "latitude": 51.711411,
      "longitude": 19.345217,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1674822844,
      "ems": null
    },
    {
      "latitude": 51.711777,
      "longitude": 19.34284,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1674822847,
      "ems": null
    },
    {
      "latitude": 51.712227,
      "longitude": 19.34082,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1674822850,
      "ems": null
    },
    {
      "latitude": 51.71283,
      "longitude": 19.338907,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1674822853,
      "ems": null
    },
    {
      "latitude": 51.713654,
      "longitude": 19.336903,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1674822856,
      "ems": null
    },
    {
      "latitude": 51.714649,
      "longitude": 19.335251,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1674822859,
      "ems": null
    },
    {
      "latitude": 51.715714,
      "longitude": 19.334007,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1674822862,
      "ems": null
    },
    {
      "latitude": 51.716976,
      "longitude": 19.332962,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1674822865,
      "ems": null
    },
    {
      "latitude": 51.718048,
      "longitude": 19.332352,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1674822868,
      "ems": null
    },
    {
      "latitude": 51.719723,
      "longitude": 19.332123,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1674822871,
      "ems": null
    },
    {
      "latitude": 51.721069,
      "longitude": 19.332523,
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1674822874,
      "ems": null
    },
    {
      "latitude": 51.72226,
      "longitude": 19.33334,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1674822877,
      "ems": null
    },
    {
      "latitude": 51.723446,
      "longitude": 19.334641,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1674822880,
      "ems": null
    },
    {
      "latitude": 51.72464,
      "longitude": 19.336086,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1674822883,
      "ems": null
    },
    {
      "latitude": 51.725914,
      "longitude": 19.337311,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1674822886,
      "ems": null
    },
    {
      "latitude": 51.727219,
      "longitude": 19.338455,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1674822889,
      "ems": null
    },
    {
      "latitude": 51.728622,
      "longitude": 19.3395,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1674822892,
      "ems": null
    },
    {
      "latitude": 51.729965,
      "longitude": 19.340439,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1674822895,
      "ems": null
    },
    {
      "latitude": 51.731316,
      "longitude": 19.341507,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1674822898,
      "ems": null
    },
    {
      "latitude": 51.732697,
      "longitude": 19.342396,
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1674822901,
      "ems": null
    },
    {
      "latitude": 51.734253,
      "longitude": 19.343435,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1674822904,
      "ems": null
    },
    {
      "latitude": 51.735672,
      "longitude": 19.344326,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1674822907,
      "ems": null
    },
    {
      "latitude": 51.7369,
      "longitude": 19.345093,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1674822910,
      "ems": null
    },
    {
      "latitude": 51.738464,
      "longitude": 19.345959,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1674822913,
      "ems": null
    },
    {
      "latitude": 51.739834,
      "longitude": 19.346695,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1674822916,
      "ems": null
    },
    {
      "latitude": 51.741276,
      "longitude": 19.347305,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1674822919,
      "ems": null
    },
    {
      "latitude": 51.74231,
      "longitude": 19.347517,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1674822921,
      "ems": null
    },
    {
      "latitude": 51.743744,
      "longitude": 19.34761,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1674822924,
      "ems": null
    },
    {
      "latitude": 51.744278,
      "longitude": 19.347517,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1674822926,
      "ems": null
    },
    {
      "latitude": 51.746677,
      "longitude": 19.346771,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1674822931,
      "ems": null
    },
    {
      "latitude": 51.748627,
      "longitude": 19.34581,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1674822935,
      "ems": null
    },
    {
      "latitude": 51.749954,
      "longitude": 19.345142,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1674822938,
      "ems": null
    },
    {
      "latitude": 51.751511,
      "longitude": 19.344475,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1674822940,
      "ems": null
    },
    {
      "latitude": 51.753021,
      "longitude": 19.343731,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1674822944,
      "ems": null
    },
    {
      "latitude": 51.754257,
      "longitude": 19.343063,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1674822946,
      "ems": null
    },
    {
      "latitude": 51.755707,
      "longitude": 19.342041,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1674822949,
      "ems": null
    },
    {
      "latitude": 51.757103,
      "longitude": 19.340897,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1674822953,
      "ems": null
    },
    {
      "latitude": 51.758331,
      "longitude": 19.339798,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1674822955,
      "ems": null
    },
    {
      "latitude": 51.759712,
      "longitude": 19.338531,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1674822959,
      "ems": null
    },
    {
      "latitude": 51.760921,
      "longitude": 19.337387,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1674822962,
      "ems": null
    },
    {
      "latitude": 51.762177,
      "longitude": 19.336319,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1674822965,
      "ems": null
    },
    {
      "latitude": 51.763203,
      "longitude": 19.335327,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1674822967,
      "ems": null
    },
    {
      "latitude": 51.764553,
      "longitude": 19.33403,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1674822971,
      "ems": null
    },
    {
      "latitude": 51.765747,
      "longitude": 19.332893,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1674822974,
      "ems": null
    },
    {
      "latitude": 51.7668,
      "longitude": 19.331854,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1674822977,
      "ems": null
    },
    {
      "latitude": 51.767902,
      "longitude": 19.330826,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1674822980,
      "ems": null
    },
    {
      "latitude": 51.770187,
      "longitude": 19.328588,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1674822986,
      "ems": null
    },
    {
      "latitude": 51.772522,
      "longitude": 19.326139,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1674822992,
      "ems": null
    },
    {
      "latitude": 51.774628,
      "longitude": 19.32406,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "timestamp": 1674822998,
      "ems": null
    },
    {
      "latitude": 51.777073,
      "longitude": 19.321671,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1674823004,
      "ems": null
    },
    {
      "latitude": 51.779388,
      "longitude": 19.319384,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1674823010,
      "ems": null
    },
    {
      "latitude": 51.781815,
      "longitude": 19.316935,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1674823016,
      "ems": null
    },
    {
      "latitude": 51.784241,
      "longitude": 19.314484,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "squawk": "7000",
      "timestamp": 1674823022,
      "ems": null
    },
    {
      "latitude": 51.786663,
      "longitude": 19.311981,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1674823028,
      "ems": null
    },
    {
      "latitude": 51.789185,
      "longitude": 19.309362,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1674823034,
      "ems": null
    },
    {
      "latitude": 51.791656,
      "longitude": 19.306913,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1674823040,
      "ems": null
    },
    {
      "latitude": 51.794037,
      "longitude": 19.304462,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1674823046,
      "ems": null
    },
    {
      "latitude": 51.796463,
      "longitude": 19.302013,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1674823052,
      "ems": null
    },
    {
      "latitude": 51.798954,
      "longitude": 19.299469,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1674823058,
      "ems": null
    },
    {
      "latitude": 51.801407,
      "longitude": 19.296743,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1674823064,
      "ems": null
    },
    {
      "latitude": 51.802586,
      "longitude": 19.295273,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1674823067,
      "ems": null
    },
    {
      "latitude": 51.803833,
      "longitude": 19.29355,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1674823070,
      "ems": null
    },
    {
      "latitude": 51.805069,
      "longitude": 19.291843,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1674823073,
      "ems": null
    },
    {
      "latitude": 51.806309,
      "longitude": 19.290009,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1674823076,
      "ems": null
    },
    {
      "latitude": 51.807381,
      "longitude": 19.28833,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1674823079,
      "ems": null
    },
    {
      "latitude": 51.808544,
      "longitude": 19.286652,
      "altitude": {
        "feet": 1375,
        "meters": 419
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1674823082,
      "ems": null
    },
    {
      "latitude": 51.811104,
      "longitude": 19.284134,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1674823088,
      "ems": null
    },
    {
      "latitude": 51.812595,
      "longitude": 19.283524,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1674823092,
      "ems": null
    },
    {
      "latitude": 51.813896,
      "longitude": 19.283676,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1674823095,
      "ems": null
    },
    {
      "latitude": 51.814911,
      "longitude": 19.284199,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1674823097,
      "ems": null
    },
    {
      "latitude": 51.816055,
      "longitude": 19.28546,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1674823101,
      "ems": null
    },
    {
      "latitude": 51.816738,
      "longitude": 19.286804,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1674823103,
      "ems": null
    },
    {
      "latitude": 51.817249,
      "longitude": 19.288788,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1674823107,
      "ems": null
    },
    {
      "latitude": 51.81752,
      "longitude": 19.290804,
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1674823110,
      "ems": null
    },
    {
      "latitude": 51.817436,
      "longitude": 19.292755,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1674823113,
      "ems": null
    },
    {
      "latitude": 51.817108,
      "longitude": 19.294962,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1674823116,
      "ems": null
    },
    {
      "latitude": 51.816559,
      "longitude": 19.29652,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1674823119,
      "ems": null
    },
    {
      "latitude": 51.815598,
      "longitude": 19.298227,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1674823122,
      "ems": null
    },
    {
      "latitude": 51.814644,
      "longitude": 19.299316,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1674823125,
      "ems": null
    },
    {
      "latitude": 51.813293,
      "longitude": 19.300308,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1674823128,
      "ems": null
    },
    {
      "latitude": 51.812035,
      "longitude": 19.300919,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1674823131,
      "ems": null
    },
    {
      "latitude": 51.81078,
      "longitude": 19.3013,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1674823134,
      "ems": null
    },
    {
      "latitude": 51.809196,
      "longitude": 19.301682,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1674823137,
      "ems": null
    },
    {
      "latitude": 51.807861,
      "longitude": 19.302088,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1674823140,
      "ems": null
    },
    {
      "latitude": 51.806534,
      "longitude": 19.302607,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1674823143,
      "ems": null
    },
    {
      "latitude": 51.805206,
      "longitude": 19.303276,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1674823146,
      "ems": null
    },
    {
      "latitude": 51.803787,
      "longitude": 19.304018,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1674823149,
      "ems": null
    },
    {
      "latitude": 51.80254,
      "longitude": 19.304733,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1674823152,
      "ems": null
    },
    {
      "latitude": 51.801235,
      "longitude": 19.305496,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1674823155,
      "ems": null
    },
    {
      "latitude": 51.79863,
      "longitude": 19.307251,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1674823161,
      "ems": null
    },
    {
      "latitude": 51.797379,
      "longitude": 19.308025,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1674823164,
      "ems": null
    },
    {
      "latitude": 51.796021,
      "longitude": 19.308929,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1674823167,
      "ems": null
    },
    {
      "latitude": 51.794769,
      "longitude": 19.309734,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1674823170,
      "ems": null
    },
    {
      "latitude": 51.793442,
      "longitude": 19.310625,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1674823173,
      "ems": null
    },
    {
      "latitude": 51.792019,
      "longitude": 19.3116,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1674823176,
      "ems": null
    },
    {
      "latitude": 51.790806,
      "longitude": 19.312439,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1674823179,
      "ems": null
    },
    {
      "latitude": 51.788109,
      "longitude": 19.314423,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1674823185,
      "ems": null
    },
    {
      "latitude": 51.785454,
      "longitude": 19.316406,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1674823191,
      "ems": null
    },
    {
      "latitude": 51.782848,
      "longitude": 19.318466,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1674823197,
      "ems": null
    },
    {
      "latitude": 51.781452,
      "longitude": 19.319687,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1674823200,
      "ems": null
    },
    {
      "latitude": 51.780193,
      "longitude": 19.320831,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1674823203,
      "ems": null
    },
    {
      "latitude": 51.778843,
      "longitude": 19.322128,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1674823207,
      "ems": null
    },
    {
      "latitude": 51.777512,
      "longitude": 19.323467,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1674823210,
      "ems": null
    },
    {
      "latitude": 51.776237,
      "longitude": 19.324799,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1674823213,
      "ems": null
    },
    {
      "latitude": 51.775166,
      "longitude": 19.325943,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1674823215,
      "ems": null
    },
    {
      "latitude": 51.773956,
      "longitude": 19.32724,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1674823218,
      "ems": null
    },
    {
      "latitude": 51.772522,
      "longitude": 19.328812,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1674823222,
      "ems": null
    },
    {
      "latitude": 51.771286,
      "longitude": 19.330147,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1674823225,
      "ems": null
    },
    {
      "latitude": 51.770096,
      "longitude": 19.331484,
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1674823228,
      "ems": null
    },
    {
      "latitude": 51.76907,
      "longitude": 19.332809,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1674823230,
      "ems": null
    },
    {
      "latitude": 51.767765,
      "longitude": 19.334412,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1674823234,
      "ems": null
    },
    {
      "latitude": 51.766647,
      "longitude": 19.335938,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1674823237,
      "ems": null
    },
    {
      "latitude": 51.765472,
      "longitude": 19.33757,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1674823240,
      "ems": null
    },
    {
      "latitude": 51.764412,
      "longitude": 19.339066,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1674823243,
      "ems": null
    },
    {
      "latitude": 51.763367,
      "longitude": 19.340689,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1674823246,
      "ems": null
    },
    {
      "latitude": 51.762268,
      "longitude": 19.342321,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1674823249,
      "ems": null
    },
    {
      "latitude": 51.761215,
      "longitude": 19.344028,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1674823252,
      "ems": null
    },
    {
      "latitude": 51.760082,
      "longitude": 19.345703,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1674823255,
      "ems": null
    },
    {
      "latitude": 51.758965,
      "longitude": 19.347382,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "squawk": "7000",
      "timestamp": 1674823258,
      "ems": null
    },
    {
      "latitude": 51.757828,
      "longitude": 19.349077,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1674823261,
      "ems": null
    },
    {
      "latitude": 51.756779,
      "longitude": 19.350662,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1674823264,
      "ems": null
    },
    {
      "latitude": 51.754589,
      "longitude": 19.354019,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1674823270,
      "ems": null
    },
    {
      "latitude": 51.752449,
      "longitude": 19.357224,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1674823276,
      "ems": null
    },
    {
      "latitude": 51.750122,
      "longitude": 19.360657,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1674823282,
      "ems": null
    },
    {
      "latitude": 51.747608,
      "longitude": 19.363861,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1674823288,
      "ems": null
    },
    {
      "latitude": 51.746395,
      "longitude": 19.365005,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1674823291,
      "ems": null
    },
    {
      "latitude": 51.744232,
      "longitude": 19.368673,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1674823297,
      "ems": null
    },
    {
      "latitude": 51.74382,
      "longitude": 19.370678,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1674823300,
      "ems": null
    },
    {
      "latitude": 51.743729,
      "longitude": 19.372906,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1674823303,
      "ems": null
    },
    {
      "latitude": 51.744095,
      "longitude": 19.37528,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1674823306,
      "ems": null
    },
    {
      "latitude": 51.74472,
      "longitude": 19.377136,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1674823309,
      "ems": null
    },
    {
      "latitude": 51.745697,
      "longitude": 19.378695,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1674823312,
      "ems": null
    },
    {
      "latitude": 51.746861,
      "longitude": 19.37973,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1674823315,
      "ems": null
    },
    {
      "latitude": 51.748215,
      "longitude": 19.380402,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1674823318,
      "ems": null
    },
    {
      "latitude": 51.749588,
      "longitude": 19.380625,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1674823321,
      "ems": null
    },
    {
      "latitude": 51.750912,
      "longitude": 19.380264,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1674823324,
      "ems": null
    },
    {
      "latitude": 51.752243,
      "longitude": 19.379436,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1674823327,
      "ems": null
    },
    {
      "latitude": 51.753471,
      "longitude": 19.378128,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1674823330,
      "ems": null
    },
    {
      "latitude": 51.754486,
      "longitude": 19.376245,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1674823333,
      "ems": null
    },
    {
      "latitude": 51.75515,
      "longitude": 19.374466,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1674823336,
      "ems": null
    },
    {
      "latitude": 51.75563,
      "longitude": 19.372236,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1674823339,
      "ems": null
    },
    {
      "latitude": 51.755768,
      "longitude": 19.369787,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1674823343,
      "ems": null
    },
    {
      "latitude": 51.755661,
      "longitude": 19.367828,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1674823345,
      "ems": null
    },
    {
      "latitude": 51.755287,
      "longitude": 19.365463,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1674823348,
      "ems": null
    },
    {
      "latitude": 51.754635,
      "longitude": 19.363403,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1674823351,
      "ems": null
    },
    {
      "latitude": 51.753704,
      "longitude": 19.36142,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1674823354,
      "ems": null
    },
    {
      "latitude": 51.752682,
      "longitude": 19.359818,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1674823357,
      "ems": null
    },
    {
      "latitude": 51.751373,
      "longitude": 19.358578,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1674823361,
      "ems": null
    },
    {
      "latitude": 51.75,
      "longitude": 19.357761,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1674823364,
      "ems": null
    },
    {
      "latitude": 51.748493,
      "longitude": 19.357452,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1674823367,
      "ems": null
    },
    {
      "latitude": 51.747189,
      "longitude": 19.357605,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1674823369,
      "ems": null
    },
    {
      "latitude": 51.745792,
      "longitude": 19.358139,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1674823372,
      "ems": null
    },
    {
      "latitude": 51.744461,
      "longitude": 19.359024,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1674823375,
      "ems": null
    },
    {
      "latitude": 51.743137,
      "longitude": 19.360046,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1674823378,
      "ems": null
    },
    {
      "latitude": 51.741898,
      "longitude": 19.361176,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1674823381,
      "ems": null
    },
    {
      "latitude": 51.740532,
      "longitude": 19.362411,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1674823385,
      "ems": null
    },
    {
      "latitude": 51.739243,
      "longitude": 19.363701,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1674823388,
      "ems": null
    },
    {
      "latitude": 51.738052,
      "longitude": 19.364962,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1674823391,
      "ems": null
    },
    {
      "latitude": 51.737,
      "longitude": 19.366076,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "squawk": "7000",
      "timestamp": 1674823393,
      "ems": null
    },
    {
      "latitude": 51.735783,
      "longitude": 19.367371,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1674823397,
      "ems": null
    },
    {
      "latitude": 51.734573,
      "longitude": 19.368896,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1674823400,
      "ems": null
    },
    {
      "latitude": 51.733521,
      "longitude": 19.370529,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1674823403,
      "ems": null
    },
    {
      "latitude": 51.732712,
      "longitude": 19.372253,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1674823406,
      "ems": null
    },
    {
      "latitude": 51.732101,
      "longitude": 19.374315,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1674823409,
      "ems": null
    },
    {
      "latitude": 51.731689,
      "longitude": 19.376394,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1674823412,
      "ems": null
    },
    {
      "latitude": 51.731594,
      "longitude": 19.378357,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1674823414,
      "ems": null
    },
    {
      "latitude": 51.731735,
      "longitude": 19.380774,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1674823418,
      "ems": null
    },
    {
      "latitude": 51.732056,
      "longitude": 19.382927,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1674823421,
      "ems": null
    },
    {
      "latitude": 51.732468,
      "longitude": 19.385078,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1674823424,
      "ems": null
    },
    {
      "latitude": 51.73288,
      "longitude": 19.38686,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1674823427,
      "ems": null
    },
    {
      "latitude": 51.733364,
      "longitude": 19.388962,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1674823430,
      "ems": null
    },
    {
      "latitude": 51.733795,
      "longitude": 19.390646,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1674823432,
      "ems": null
    },
    {
      "latitude": 51.734341,
      "longitude": 19.392471,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1674823435,
      "ems": null
    },
    {
      "latitude": 51.734806,
      "longitude": 19.39415,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1674823439,
      "ems": null
    },
    {
      "latitude": 51.735306,
      "longitude": 19.395695,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1674823441,
      "ems": null
    },
    {
      "latitude": 51.735924,
      "longitude": 19.397659,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1674823445,
      "ems": null
    },
    {
      "latitude": 51.73645,
      "longitude": 19.399258,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1674823448,
      "ems": null
    },
    {
      "latitude": 51.736992,
      "longitude": 19.40094,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1674823451,
      "ems": null
    },
    {
      "latitude": 51.737507,
      "longitude": 19.402542,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1674823454,
      "ems": null
    },
    {
      "latitude": 51.738064,
      "longitude": 19.404221,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1674823457,
      "ems": null
    },
    {
      "latitude": 51.738602,
      "longitude": 19.405865,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1674823460,
      "ems": null
    },
    {
      "latitude": 51.739182,
      "longitude": 19.407349,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1674823463,
      "ems": null
    },
    {
      "latitude": 51.740204,
      "longitude": 19.410837,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1674823469,
      "ems": null
    },
    {
      "latitude": 51.740433,
      "longitude": 19.412842,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1674823472,
      "ems": null
    },
    {
      "latitude": 51.740391,
      "longitude": 19.41452,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1674823475,
      "ems": null
    },
    {
      "latitude": 51.740067,
      "longitude": 19.416479,
      "altitude": {
        "feet": 1325,
        "meters": 404
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1674823478,
      "ems": null
    },
    {
      "latitude": 51.739517,
      "longitude": 19.418335,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1674823481,
      "ems": null
    },
    {
      "latitude": 51.738785,
      "longitude": 19.419968,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1674823484,
      "ems": null
    },
    {
      "latitude": 51.737831,
      "longitude": 19.421539,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1674823487,
      "ems": null
    },
    {
      "latitude": 51.736862,
      "longitude": 19.422714,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1674823490,
      "ems": null
    },
    {
      "latitude": 51.735691,
      "longitude": 19.423828,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1674823493,
      "ems": null
    },
    {
      "latitude": 51.734482,
      "longitude": 19.424868,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1674823496,
      "ems": null
    },
    {
      "latitude": 51.733429,
      "longitude": 19.425758,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1674823499,
      "ems": null
    },
    {
      "latitude": 51.732292,
      "longitude": 19.426727,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1674823502,
      "ems": null
    },
    {
      "latitude": 51.731033,
      "longitude": 19.427338,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1674823505,
      "ems": null
    },
    {
      "latitude": 51.729916,
      "longitude": 19.427338,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1674823508,
      "ems": null
    },
    {
      "latitude": 51.72876,
      "longitude": 19.426723,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1674823511,
      "ems": null
    },
    {
      "latitude": 51.728428,
      "longitude": 19.426422,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1674823512,
      "ems": null
    },
    {
      "latitude": 51.727295,
      "longitude": 19.424644,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1674823516,
      "ems": null
    },
    {
      "latitude": 51.726471,
      "longitude": 19.421768,
      "altitude": {
        "feet": 850,
        "meters": 259
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674823520,
      "ems": null
    },
    {
      "latitude": 51.726101,
      "longitude": 19.419861,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1674823523,
      "ems": null
    },
    {
      "latitude": 51.725784,
      "longitude": 19.417816,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1674823527,
      "ems": null
    },
    {
      "latitude": 51.725681,
      "longitude": 19.416962,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1674823528,
      "ems": null
    },
    {
      "latitude": 51.725357,
      "longitude": 19.414978,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1674823531,
      "ems": null
    },
    {
      "latitude": 51.724842,
      "longitude": 19.412155,
      "altitude": {
        "feet": 650,
        "meters": 198
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1674823536,
      "ems": null
    },
    {
      "latitude": 51.724518,
      "longitude": 19.410477,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674823539,
      "ems": null
    },
    {
      "latitude": 51.724098,
      "longitude": 19.408569,
      "altitude": {
        "feet": 550,
        "meters": 168
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1674823542,
      "ems": null
    },
    {
      "latitude": 51.723774,
      "longitude": 19.407043,
      "altitude": {
        "feet": 525,
        "meters": 160
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1674823544,
      "ems": null
    }
  ],
};
