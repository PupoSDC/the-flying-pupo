import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20231116EGPKEGPK",
    callsign: "RYR918",
    name: "RYR Base Training",
    description: "",
  },
  pilotLog: {
    departure: new Date(2023, 10, 16, 10, 24).getTime(),
    arrival: new Date(2023, 10, 16, 11, 24).getTime(),
    singleEnginePistonTime: 0,
    multiEnginePistonTime: 0,
    multiPilotTime: 60,
    picTime: 0,
    dualTime: 60,
    ifrTime: 0,
    nightTime: 0,
    landings: {
      day: 6,
      night: 0,
    },
  },
  aircraft: {
    model: {
      code: "B738",
      text: "Boeing 737-8AS",
    },
    identification: {
      modes: "4CA736",
      registration: "EI-EBM",
      serialNo: "N/A",
    },
  },
  airport: {
    destination: {
      name: "Glasgow Prestwick Airport",
      code: "EGPK",
      position: {
        latitude: 55.509441,
        longitude: -4.58666,
      },
    },
    origin: {
      name: "Glasgow Prestwick Airport",
      code: "EGPK",
      position: {
        latitude: 55.509441,
        longitude: -4.58666,
      },
    },
  },
  track: [
    {
      "latitude": 55.511681,
      "longitude": -4.601126,
      "altitude": {
        "feet": 50,
        "meters": 15
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
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700130461,
      "ems": null
    },
    {
      "latitude": 55.508789,
      "longitude": -4.592868,
      "altitude": {
        "feet": 125,
        "meters": 38
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 1984,
        "ms": 10.1
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700130470,
      "ems": null
    },
    {
      "latitude": 55.506516,
      "longitude": -4.586191,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 2496,
        "ms": 12.7
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700130477,
      "ems": null
    },
    {
      "latitude": 55.503525,
      "longitude": -4.576971,
      "altitude": {
        "feet": 850,
        "meters": 259
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 2752,
        "ms": 14
      },
      "heading": 119,
      "squawk": "4502",
      "timestamp": 1700130486,
      "ems": null
    },
    {
      "latitude": 55.500595,
      "longitude": -4.567649,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": 2112,
        "ms": 10.7
      },
      "heading": 118,
      "squawk": "4502",
      "timestamp": 1700130495,
      "ems": null
    },
    {
      "latitude": 55.497715,
      "longitude": -4.557953,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": 1664,
        "ms": 8.5
      },
      "heading": 117,
      "squawk": "4502",
      "timestamp": 1700130504,
      "ems": null
    },
    {
      "latitude": 55.49469,
      "longitude": -4.547591,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 116,
      "squawk": "4502",
      "timestamp": 1700130513,
      "ems": null
    },
    {
      "latitude": 55.491806,
      "longitude": -4.537437,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 294.5,
        "kts": 159,
        "mph": 183
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 116,
      "squawk": "4502",
      "timestamp": 1700130522,
      "ems": null
    },
    {
      "latitude": 55.488174,
      "longitude": -4.527054,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 127,
      "squawk": "4502",
      "timestamp": 1700130531,
      "ems": null
    },
    {
      "latitude": 55.486771,
      "longitude": -4.524453,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 134,
      "squawk": "4502",
      "timestamp": 1700130534,
      "ems": null
    },
    {
      "latitude": 55.484711,
      "longitude": -4.521873,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 147,
      "squawk": "4502",
      "timestamp": 1700130537,
      "ems": null
    },
    {
      "latitude": 55.483051,
      "longitude": -4.520187,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 152,
      "squawk": "4502",
      "timestamp": 1700130540,
      "ems": null
    },
    {
      "latitude": 55.480911,
      "longitude": -4.518814,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 161,
      "squawk": "4502",
      "timestamp": 1700130543,
      "ems": null
    },
    {
      "latitude": 55.478584,
      "longitude": -4.518042,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 168,
      "squawk": "4502",
      "timestamp": 1700130546,
      "ems": null
    },
    {
      "latitude": 55.476395,
      "longitude": -4.517784,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 178,
      "squawk": "4502",
      "timestamp": 1700130549,
      "ems": null
    },
    {
      "latitude": 55.474068,
      "longitude": -4.518299,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 187,
      "squawk": "4502",
      "timestamp": 1700130552,
      "ems": null
    },
    {
      "latitude": 55.471939,
      "longitude": -4.519293,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 197,
      "squawk": "4502",
      "timestamp": 1700130555,
      "ems": null
    },
    {
      "latitude": 55.469925,
      "longitude": -4.520788,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 204,
      "squawk": "4502",
      "timestamp": 1700130558,
      "ems": null
    },
    {
      "latitude": 55.467876,
      "longitude": -4.522934,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 210,
      "squawk": "4502",
      "timestamp": 1700130561,
      "ems": null
    },
    {
      "latitude": 55.46608,
      "longitude": -4.525535,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 220,
      "squawk": "4502",
      "timestamp": 1700130564,
      "ems": null
    },
    {
      "latitude": 55.464523,
      "longitude": -4.528448,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 228,
      "squawk": "4502",
      "timestamp": 1700130567,
      "ems": null
    },
    {
      "latitude": 55.463268,
      "longitude": -4.531775,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 238,
      "squawk": "4502",
      "timestamp": 1700130570,
      "ems": null
    },
    {
      "latitude": 55.462234,
      "longitude": -4.535439,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 245,
      "squawk": "4502",
      "timestamp": 1700130573,
      "ems": null
    },
    {
      "latitude": 55.461498,
      "longitude": -4.539928,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 257,
      "squawk": "4502",
      "timestamp": 1700130576,
      "ems": null
    },
    {
      "latitude": 55.461182,
      "longitude": -4.544178,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 265,
      "squawk": "4502",
      "timestamp": 1700130579,
      "ems": null
    },
    {
      "latitude": 55.461227,
      "longitude": -4.548256,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 273,
      "squawk": "4502",
      "timestamp": 1700130582,
      "ems": null
    },
    {
      "latitude": 55.461594,
      "longitude": -4.552168,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 282,
      "squawk": "4502",
      "timestamp": 1700130585,
      "ems": null
    },
    {
      "latitude": 55.462383,
      "longitude": -4.556494,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 289,
      "squawk": "4502",
      "timestamp": 1700130589,
      "ems": null
    },
    {
      "latitude": 55.463314,
      "longitude": -4.560356,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 293,
      "squawk": "4502",
      "timestamp": 1700130591,
      "ems": null
    },
    {
      "latitude": 55.464291,
      "longitude": -4.564047,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700130594,
      "ems": null
    },
    {
      "latitude": 55.465347,
      "longitude": -4.567899,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700130598,
      "ems": null
    },
    {
      "latitude": 55.4664,
      "longitude": -4.571727,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700130601,
      "ems": null
    },
    {
      "latitude": 55.467365,
      "longitude": -4.575291,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700130604,
      "ems": null
    },
    {
      "latitude": 55.468414,
      "longitude": -4.579051,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700130606,
      "ems": null
    },
    {
      "latitude": 55.469421,
      "longitude": -4.58288,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700130609,
      "ems": null
    },
    {
      "latitude": 55.47039,
      "longitude": -4.586964,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 320.4,
        "kts": 173,
        "mph": 199.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 291,
      "squawk": "4502",
      "timestamp": 1700130612,
      "ems": null
    },
    {
      "latitude": 55.471226,
      "longitude": -4.591169,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 320.4,
        "kts": 173,
        "mph": 199.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 288,
      "squawk": "4502",
      "timestamp": 1700130616,
      "ems": null
    },
    {
      "latitude": 55.47253,
      "longitude": -4.599066,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 285,
      "squawk": "4502",
      "timestamp": 1700130622,
      "ems": null
    },
    {
      "latitude": 55.473137,
      "longitude": -4.6031,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 285,
      "squawk": "4502",
      "timestamp": 1700130624,
      "ems": null
    },
    {
      "latitude": 55.473816,
      "longitude": -4.60735,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 285,
      "squawk": "4502",
      "timestamp": 1700130628,
      "ems": null
    },
    {
      "latitude": 55.474411,
      "longitude": -4.611261,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 285,
      "squawk": "4502",
      "timestamp": 1700130631,
      "ems": null
    },
    {
      "latitude": 55.475098,
      "longitude": -4.615756,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 285,
      "squawk": "4502",
      "timestamp": 1700130634,
      "ems": null
    },
    {
      "latitude": 55.475647,
      "longitude": -4.619418,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 284,
      "squawk": "4502",
      "timestamp": 1700130637,
      "ems": null
    },
    {
      "latitude": 55.476334,
      "longitude": -4.623912,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 284,
      "squawk": "4502",
      "timestamp": 1700130640,
      "ems": null
    },
    {
      "latitude": 55.476906,
      "longitude": -4.627905,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 284,
      "squawk": "4502",
      "timestamp": 1700130643,
      "ems": null
    },
    {
      "latitude": 55.478817,
      "longitude": -4.640265,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 284,
      "squawk": "4502",
      "timestamp": 1700130652,
      "ems": null
    },
    {
      "latitude": 55.480591,
      "longitude": -4.652211,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 284,
      "squawk": "4502",
      "timestamp": 1700130661,
      "ems": null
    },
    {
      "latitude": 55.482399,
      "longitude": -4.664383,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 285,
      "squawk": "4502",
      "timestamp": 1700130670,
      "ems": null
    },
    {
      "latitude": 55.484024,
      "longitude": -4.672435,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 290,
      "squawk": "4502",
      "timestamp": 1700130676,
      "ems": null
    },
    {
      "latitude": 55.484959,
      "longitude": -4.676228,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 294,
      "squawk": "4502",
      "timestamp": 1700130679,
      "ems": null
    },
    {
      "latitude": 55.485901,
      "longitude": -4.679677,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700130682,
      "ems": null
    },
    {
      "latitude": 55.487007,
      "longitude": -4.683695,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700130685,
      "ems": null
    },
    {
      "latitude": 55.488033,
      "longitude": -4.687386,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700130688,
      "ems": null
    },
    {
      "latitude": 55.48901,
      "longitude": -4.69099,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700130691,
      "ems": null
    },
    {
      "latitude": 55.490158,
      "longitude": -4.69524,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700130694,
      "ems": null
    },
    {
      "latitude": 55.490967,
      "longitude": -4.698372,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700130697,
      "ems": null
    },
    {
      "latitude": 55.492126,
      "longitude": -4.702731,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700130700,
      "ems": null
    },
    {
      "latitude": 55.495014,
      "longitude": -4.713736,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700130709,
      "ems": null
    },
    {
      "latitude": 55.498306,
      "longitude": -4.725536,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 296,
      "squawk": "4502",
      "timestamp": 1700130719,
      "ems": null
    },
    {
      "latitude": 55.501419,
      "longitude": -4.736356,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 296,
      "squawk": "4502",
      "timestamp": 1700130727,
      "ems": null
    },
    {
      "latitude": 55.504513,
      "longitude": -4.747038,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 292.6,
        "kts": 158,
        "mph": 181.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 297,
      "squawk": "4502",
      "timestamp": 1700130737,
      "ems": null
    },
    {
      "latitude": 55.507553,
      "longitude": -4.75733,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 297,
      "squawk": "4502",
      "timestamp": 1700130746,
      "ems": null
    },
    {
      "latitude": 55.509888,
      "longitude": -4.763822,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 305,
      "squawk": "4502",
      "timestamp": 1700130752,
      "ems": null
    },
    {
      "latitude": 55.511261,
      "longitude": -4.766568,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 312,
      "squawk": "4502",
      "timestamp": 1700130755,
      "ems": null
    },
    {
      "latitude": 55.512939,
      "longitude": -4.769096,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 321,
      "squawk": "4502",
      "timestamp": 1700130758,
      "ems": null
    },
    {
      "latitude": 55.51466,
      "longitude": -4.770899,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 279.7,
        "kts": 151,
        "mph": 173.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 329,
      "squawk": "4502",
      "timestamp": 1700130761,
      "ems": null
    },
    {
      "latitude": 55.516941,
      "longitude": -4.77253,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 337,
      "squawk": "4502",
      "timestamp": 1700130764,
      "ems": null
    },
    {
      "latitude": 55.518814,
      "longitude": -4.773476,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 346,
      "squawk": "4502",
      "timestamp": 1700130767,
      "ems": null
    },
    {
      "latitude": 55.520966,
      "longitude": -4.774059,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 353,
      "squawk": "4502",
      "timestamp": 1700130770,
      "ems": null
    },
    {
      "latitude": 55.522842,
      "longitude": -4.774142,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 357,
      "squawk": "4502",
      "timestamp": 1700130773,
      "ems": null
    },
    {
      "latitude": 55.524902,
      "longitude": -4.773809,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 5,
      "squawk": "4502",
      "timestamp": 1700130776,
      "ems": null
    },
    {
      "latitude": 55.526997,
      "longitude": -4.772959,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 12,
      "squawk": "4502",
      "timestamp": 1700130779,
      "ems": null
    },
    {
      "latitude": 55.528885,
      "longitude": -4.771645,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 21,
      "squawk": "4502",
      "timestamp": 1700130782,
      "ems": null
    },
    {
      "latitude": 55.530807,
      "longitude": -4.769648,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 32,
      "squawk": "4502",
      "timestamp": 1700130785,
      "ems": null
    },
    {
      "latitude": 55.532352,
      "longitude": -4.767466,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 40,
      "squawk": "4502",
      "timestamp": 1700130788,
      "ems": null
    },
    {
      "latitude": 55.533749,
      "longitude": -4.764719,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 48,
      "squawk": "4502",
      "timestamp": 1700130791,
      "ems": null
    },
    {
      "latitude": 55.534912,
      "longitude": -4.761801,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 56,
      "squawk": "4502",
      "timestamp": 1700130794,
      "ems": null
    },
    {
      "latitude": 55.535843,
      "longitude": -4.758711,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 63,
      "squawk": "4502",
      "timestamp": 1700130797,
      "ems": null
    },
    {
      "latitude": 55.536633,
      "longitude": -4.755535,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 66,
      "squawk": "4502",
      "timestamp": 1700130800,
      "ems": null
    },
    {
      "latitude": 55.537426,
      "longitude": -4.752102,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 68,
      "squawk": "4502",
      "timestamp": 1700130803,
      "ems": null
    },
    {
      "latitude": 55.538177,
      "longitude": -4.748674,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 68,
      "squawk": "4502",
      "timestamp": 1700130807,
      "ems": null
    },
    {
      "latitude": 55.538914,
      "longitude": -4.745321,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 68,
      "squawk": "4502",
      "timestamp": 1700130810,
      "ems": null
    },
    {
      "latitude": 55.53952,
      "longitude": -4.742489,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 69,
      "squawk": "4502",
      "timestamp": 1700130812,
      "ems": null
    },
    {
      "latitude": 55.540173,
      "longitude": -4.739313,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 69,
      "squawk": "4502",
      "timestamp": 1700130815,
      "ems": null
    },
    {
      "latitude": 55.540871,
      "longitude": -4.735966,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 70,
      "squawk": "4502",
      "timestamp": 1700130819,
      "ems": null
    },
    {
      "latitude": 55.541428,
      "longitude": -4.733133,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 71,
      "squawk": "4502",
      "timestamp": 1700130821,
      "ems": null
    },
    {
      "latitude": 55.542034,
      "longitude": -4.730043,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 71,
      "squawk": "4502",
      "timestamp": 1700130824,
      "ems": null
    },
    {
      "latitude": 55.542591,
      "longitude": -4.727039,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 72,
      "squawk": "4502",
      "timestamp": 1700130828,
      "ems": null
    },
    {
      "latitude": 55.543076,
      "longitude": -4.724038,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 73,
      "squawk": "4502",
      "timestamp": 1700130830,
      "ems": null
    },
    {
      "latitude": 55.543617,
      "longitude": -4.720945,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 73,
      "squawk": "4502",
      "timestamp": 1700130833,
      "ems": null
    },
    {
      "latitude": 55.543945,
      "longitude": -4.718878,
      "altitude": {
        "feet": 1325,
        "meters": 404
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 76,
      "squawk": "4502",
      "timestamp": 1700130836,
      "ems": null
    },
    {
      "latitude": 55.544594,
      "longitude": -4.712105,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 82,
      "squawk": "4502",
      "timestamp": 1700130842,
      "ems": null
    },
    {
      "latitude": 55.544685,
      "longitude": -4.708328,
      "altitude": {
        "feet": 1225,
        "meters": 373
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 86,
      "squawk": "4502",
      "timestamp": 1700130845,
      "ems": null
    },
    {
      "latitude": 55.544685,
      "longitude": -4.705067,
      "altitude": {
        "feet": 1175,
        "meters": 358
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 90,
      "squawk": "4502",
      "timestamp": 1700130848,
      "ems": null
    },
    {
      "latitude": 55.544548,
      "longitude": -4.701805,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 93,
      "squawk": "4502",
      "timestamp": 1700130851,
      "ems": null
    },
    {
      "latitude": 55.54422,
      "longitude": -4.698236,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 100,
      "squawk": "4502",
      "timestamp": 1700130855,
      "ems": null
    },
    {
      "latitude": 55.543808,
      "longitude": -4.695157,
      "altitude": {
        "feet": 1075,
        "meters": 328
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 104,
      "squawk": "4502",
      "timestamp": 1700130857,
      "ems": null
    },
    {
      "latitude": 55.543289,
      "longitude": -4.692621,
      "altitude": {
        "feet": 1050,
        "meters": 320
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 107,
      "squawk": "4502",
      "timestamp": 1700130860,
      "ems": null
    },
    {
      "latitude": 55.542545,
      "longitude": -4.689531,
      "altitude": {
        "feet": 1025,
        "meters": 312
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 115,
      "squawk": "4502",
      "timestamp": 1700130863,
      "ems": null
    },
    {
      "latitude": 55.541615,
      "longitude": -4.686699,
      "altitude": {
        "feet": 975,
        "meters": 297
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700130866,
      "ems": null
    },
    {
      "latitude": 55.540604,
      "longitude": -4.683921,
      "altitude": {
        "feet": 950,
        "meters": 290
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 123,
      "squawk": "4502",
      "timestamp": 1700130869,
      "ems": null
    },
    {
      "latitude": 55.539566,
      "longitude": -4.681206,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 123,
      "squawk": "4502",
      "timestamp": 1700130873,
      "ems": null
    },
    {
      "latitude": 55.538635,
      "longitude": -4.678595,
      "altitude": {
        "feet": 875,
        "meters": 267
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 122,
      "squawk": "4502",
      "timestamp": 1700130876,
      "ems": null
    },
    {
      "latitude": 55.537704,
      "longitude": -4.67597,
      "altitude": {
        "feet": 850,
        "meters": 259
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700130878,
      "ems": null
    },
    {
      "latitude": 55.536819,
      "longitude": -4.673481,
      "altitude": {
        "feet": 825,
        "meters": 251
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700130881,
      "ems": null
    },
    {
      "latitude": 55.535843,
      "longitude": -4.670604,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700130885,
      "ems": null
    },
    {
      "latitude": 55.534912,
      "longitude": -4.667902,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700130888,
      "ems": null
    },
    {
      "latitude": 55.533981,
      "longitude": -4.665241,
      "altitude": {
        "feet": 750,
        "meters": 229
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700130891,
      "ems": null
    },
    {
      "latitude": 55.533142,
      "longitude": -4.662864,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700130893,
      "ems": null
    },
    {
      "latitude": 55.530258,
      "longitude": -4.654375,
      "altitude": {
        "feet": 625,
        "meters": 191
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700130903,
      "ems": null
    },
    {
      "latitude": 55.527557,
      "longitude": -4.646468,
      "altitude": {
        "feet": 550,
        "meters": 168
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700130912,
      "ems": null
    },
    {
      "latitude": 55.524578,
      "longitude": -4.63829,
      "altitude": {
        "feet": 475,
        "meters": 145
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 122,
      "squawk": "4502",
      "timestamp": 1700130921,
      "ems": null
    },
    {
      "latitude": 55.521744,
      "longitude": -4.630238,
      "altitude": {
        "feet": 350,
        "meters": 107
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700130930,
      "ems": null
    },
    {
      "latitude": 55.518997,
      "longitude": -4.622248,
      "altitude": {
        "feet": 225,
        "meters": 69
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 122,
      "squawk": "4502",
      "timestamp": 1700130938,
      "ems": null
    },
    {
      "latitude": 55.516434,
      "longitude": -4.614923,
      "altitude": {
        "feet": 125,
        "meters": 38
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700130946,
      "ems": null
    },
    {
      "latitude": 55.51387,
      "longitude": -4.607391,
      "altitude": {
        "feet": 25,
        "meters": 8
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700130955,
      "ems": null
    },
    {
      "latitude": 55.511589,
      "longitude": -4.600868,
      "altitude": {
        "feet": 25,
        "meters": 8
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700130962,
      "ems": null
    },
    {
      "latitude": 55.508011,
      "longitude": -4.590538,
      "altitude": {
        "feet": 50,
        "meters": 15
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700130973,
      "ems": null
    },
    {
      "latitude": 55.504513,
      "longitude": -4.580612,
      "altitude": {
        "feet": 350,
        "meters": 107
      },
      "speed": {
        "kmh": 290.8,
        "kts": 157,
        "mph": 180.7
      },
      "verticalSpeed": {
        "fpm": 2752,
        "ms": 14
      },
      "heading": 122,
      "squawk": "4502",
      "timestamp": 1700130982,
      "ems": null
    },
    {
      "latitude": 55.500961,
      "longitude": -4.570895,
      "altitude": {
        "feet": 850,
        "meters": 259
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": 2688,
        "ms": 13.7
      },
      "heading": 123,
      "squawk": "4502",
      "timestamp": 1700130991,
      "ems": null
    },
    {
      "latitude": 55.497482,
      "longitude": -4.561729,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": 2752,
        "ms": 14
      },
      "heading": 123,
      "squawk": "4502",
      "timestamp": 1700131000,
      "ems": null
    },
    {
      "latitude": 55.494095,
      "longitude": -4.552085,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": 1856,
        "ms": 9.4
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700131009,
      "ems": null
    },
    {
      "latitude": 55.490501,
      "longitude": -4.541731,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 305.6,
        "kts": 165,
        "mph": 189.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 122,
      "squawk": "4502",
      "timestamp": 1700131018,
      "ems": null
    },
    {
      "latitude": 55.487194,
      "longitude": -4.531088,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 115,
      "squawk": "4502",
      "timestamp": 1700131027,
      "ems": null
    },
    {
      "latitude": 55.486496,
      "longitude": -4.527311,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 109,
      "squawk": "4502",
      "timestamp": 1700131030,
      "ems": null
    },
    {
      "latitude": 55.486031,
      "longitude": -4.523277,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 100,
      "squawk": "4502",
      "timestamp": 1700131033,
      "ems": null
    },
    {
      "latitude": 55.485939,
      "longitude": -4.518986,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 88,
      "squawk": "4502",
      "timestamp": 1700131036,
      "ems": null
    },
    {
      "latitude": 55.486267,
      "longitude": -4.514549,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 80,
      "squawk": "4502",
      "timestamp": 1700131039,
      "ems": null
    },
    {
      "latitude": 55.486908,
      "longitude": -4.510387,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 71,
      "squawk": "4502",
      "timestamp": 1700131043,
      "ems": null
    },
    {
      "latitude": 55.487823,
      "longitude": -4.506891,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 66,
      "squawk": "4502",
      "timestamp": 1700131045,
      "ems": null
    },
    {
      "latitude": 55.489056,
      "longitude": -4.503365,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 55,
      "squawk": "4502",
      "timestamp": 1700131048,
      "ems": null
    },
    {
      "latitude": 55.490688,
      "longitude": -4.500017,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 47,
      "squawk": "4502",
      "timestamp": 1700131052,
      "ems": null
    },
    {
      "latitude": 55.492218,
      "longitude": -4.497653,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 43,
      "squawk": "4502",
      "timestamp": 1700131054,
      "ems": null
    },
    {
      "latitude": 55.494186,
      "longitude": -4.495323,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 31,
      "squawk": "4502",
      "timestamp": 1700131057,
      "ems": null
    },
    {
      "latitude": 55.496365,
      "longitude": -4.493494,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 22,
      "squawk": "4502",
      "timestamp": 1700131060,
      "ems": null
    },
    {
      "latitude": 55.4986,
      "longitude": -4.492207,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 17,
      "squawk": "4502",
      "timestamp": 1700131063,
      "ems": null
    },
    {
      "latitude": 55.500961,
      "longitude": -4.491577,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 5,
      "squawk": "4502",
      "timestamp": 1700131066,
      "ems": null
    },
    {
      "latitude": 55.503296,
      "longitude": -4.491577,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 357,
      "squawk": "4502",
      "timestamp": 1700131069,
      "ems": null
    },
    {
      "latitude": 55.505859,
      "longitude": -4.492243,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 349,
      "squawk": "4502",
      "timestamp": 1700131073,
      "ems": null
    },
    {
      "latitude": 55.508148,
      "longitude": -4.493492,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 340,
      "squawk": "4502",
      "timestamp": 1700131076,
      "ems": null
    },
    {
      "latitude": 55.509933,
      "longitude": -4.494989,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 332,
      "squawk": "4502",
      "timestamp": 1700131078,
      "ems": null
    },
    {
      "latitude": 55.511948,
      "longitude": -4.49732,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "4502",
      "timestamp": 1700131081,
      "ems": null
    },
    {
      "latitude": 55.513775,
      "longitude": -4.500189,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 315,
      "squawk": "4502",
      "timestamp": 1700131084,
      "ems": null
    },
    {
      "latitude": 55.515518,
      "longitude": -4.503645,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 310,
      "squawk": "4502",
      "timestamp": 1700131088,
      "ems": null
    },
    {
      "latitude": 55.516846,
      "longitude": -4.506975,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 305,
      "squawk": "4502",
      "timestamp": 1700131091,
      "ems": null
    },
    {
      "latitude": 55.518127,
      "longitude": -4.51047,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 303,
      "squawk": "4502",
      "timestamp": 1700131094,
      "ems": null
    },
    {
      "latitude": 55.519318,
      "longitude": -4.513716,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 302,
      "squawk": "4502",
      "timestamp": 1700131097,
      "ems": null
    },
    {
      "latitude": 55.520527,
      "longitude": -4.517012,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700131100,
      "ems": null
    },
    {
      "latitude": 55.521782,
      "longitude": -4.520702,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700131103,
      "ems": null
    },
    {
      "latitude": 55.522934,
      "longitude": -4.52412,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700131106,
      "ems": null
    },
    {
      "latitude": 55.524078,
      "longitude": -4.527616,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700131108,
      "ems": null
    },
    {
      "latitude": 55.525414,
      "longitude": -4.531431,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700131112,
      "ems": null
    },
    {
      "latitude": 55.526688,
      "longitude": -4.534857,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 303,
      "squawk": "4502",
      "timestamp": 1700131115,
      "ems": null
    },
    {
      "latitude": 55.529697,
      "longitude": -4.541559,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 310,
      "squawk": "4502",
      "timestamp": 1700131121,
      "ems": null
    },
    {
      "latitude": 55.531357,
      "longitude": -4.544928,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 310,
      "squawk": "4502",
      "timestamp": 1700131124,
      "ems": null
    },
    {
      "latitude": 55.532867,
      "longitude": -4.548007,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 320.4,
        "kts": 173,
        "mph": 199.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 310,
      "squawk": "4502",
      "timestamp": 1700131127,
      "ems": null
    },
    {
      "latitude": 55.534424,
      "longitude": -4.551086,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 320.4,
        "kts": 173,
        "mph": 199.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 311,
      "squawk": "4502",
      "timestamp": 1700131130,
      "ems": null
    },
    {
      "latitude": 55.536121,
      "longitude": -4.554691,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 320.4,
        "kts": 173,
        "mph": 199.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 310,
      "squawk": "4502",
      "timestamp": 1700131133,
      "ems": null
    },
    {
      "latitude": 55.537628,
      "longitude": -4.557828,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 320.4,
        "kts": 173,
        "mph": 199.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 310,
      "squawk": "4502",
      "timestamp": 1700131136,
      "ems": null
    },
    {
      "latitude": 55.539101,
      "longitude": -4.560871,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 310,
      "squawk": "4502",
      "timestamp": 1700131139,
      "ems": null
    },
    {
      "latitude": 55.540638,
      "longitude": -4.564133,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 309,
      "squawk": "4502",
      "timestamp": 1700131142,
      "ems": null
    },
    {
      "latitude": 55.542297,
      "longitude": -4.567649,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 309,
      "squawk": "4502",
      "timestamp": 1700131145,
      "ems": null
    },
    {
      "latitude": 55.546783,
      "longitude": -4.577137,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 309,
      "squawk": "4502",
      "timestamp": 1700131154,
      "ems": null
    },
    {
      "latitude": 55.551453,
      "longitude": -4.587208,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 308,
      "squawk": "4502",
      "timestamp": 1700131163,
      "ems": null
    },
    {
      "latitude": 55.554462,
      "longitude": -4.59383,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 308,
      "squawk": "4502",
      "timestamp": 1700131169,
      "ems": null
    },
    {
      "latitude": 55.558838,
      "longitude": -4.603443,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 308,
      "squawk": "4502",
      "timestamp": 1700131178,
      "ems": null
    },
    {
      "latitude": 55.563583,
      "longitude": -4.614008,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 320.4,
        "kts": 173,
        "mph": 199.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 308,
      "squawk": "4502",
      "timestamp": 1700131188,
      "ems": null
    },
    {
      "latitude": 55.567776,
      "longitude": -4.623442,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 307,
      "squawk": "4502",
      "timestamp": 1700131196,
      "ems": null
    },
    {
      "latitude": 55.572281,
      "longitude": -4.633817,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 307,
      "squawk": "4502",
      "timestamp": 1700131206,
      "ems": null
    },
    {
      "latitude": 55.57663,
      "longitude": -4.643305,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 312,
      "squawk": "4502",
      "timestamp": 1700131214,
      "ems": null
    },
    {
      "latitude": 55.578484,
      "longitude": -4.646273,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 319,
      "squawk": "4502",
      "timestamp": 1700131217,
      "ems": null
    },
    {
      "latitude": 55.580612,
      "longitude": -4.648715,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 328,
      "squawk": "4502",
      "timestamp": 1700131221,
      "ems": null
    },
    {
      "latitude": 55.582581,
      "longitude": -4.650463,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 335,
      "squawk": "4502",
      "timestamp": 1700131223,
      "ems": null
    },
    {
      "latitude": 55.584961,
      "longitude": -4.651794,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 342,
      "squawk": "4502",
      "timestamp": 1700131227,
      "ems": null
    },
    {
      "latitude": 55.58725,
      "longitude": -4.652544,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 350,
      "squawk": "4502",
      "timestamp": 1700131230,
      "ems": null
    },
    {
      "latitude": 55.589447,
      "longitude": -4.652793,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 357,
      "squawk": "4502",
      "timestamp": 1700131233,
      "ems": null
    },
    {
      "latitude": 55.591736,
      "longitude": -4.65246,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 6,
      "squawk": "4502",
      "timestamp": 1700131236,
      "ems": null
    },
    {
      "latitude": 55.594116,
      "longitude": -4.651545,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 13,
      "squawk": "4502",
      "timestamp": 1700131239,
      "ems": null
    },
    {
      "latitude": 55.596081,
      "longitude": -4.650135,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 23,
      "squawk": "4502",
      "timestamp": 1700131241,
      "ems": null
    },
    {
      "latitude": 55.598236,
      "longitude": -4.648049,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 31,
      "squawk": "4502",
      "timestamp": 1700131245,
      "ems": null
    },
    {
      "latitude": 55.600178,
      "longitude": -4.645157,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 40,
      "squawk": "4502",
      "timestamp": 1700131248,
      "ems": null
    },
    {
      "latitude": 55.601578,
      "longitude": -4.642473,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 49,
      "squawk": "4502",
      "timestamp": 1700131251,
      "ems": null
    },
    {
      "latitude": 55.602859,
      "longitude": -4.639143,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 58,
      "squawk": "4502",
      "timestamp": 1700131254,
      "ems": null
    },
    {
      "latitude": 55.603729,
      "longitude": -4.635481,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 68,
      "squawk": "4502",
      "timestamp": 1700131257,
      "ems": null
    },
    {
      "latitude": 55.604324,
      "longitude": -4.63132,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 78,
      "squawk": "4502",
      "timestamp": 1700131260,
      "ems": null
    },
    {
      "latitude": 55.604412,
      "longitude": -4.62739,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 87,
      "squawk": "4502",
      "timestamp": 1700131263,
      "ems": null
    },
    {
      "latitude": 55.604233,
      "longitude": -4.623497,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 100,
      "squawk": "4502",
      "timestamp": 1700131266,
      "ems": null
    },
    {
      "latitude": 55.603638,
      "longitude": -4.619668,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 105,
      "squawk": "4502",
      "timestamp": 1700131269,
      "ems": null
    },
    {
      "latitude": 55.602783,
      "longitude": -4.616146,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 294.5,
        "kts": 159,
        "mph": 183
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 114,
      "squawk": "4502",
      "timestamp": 1700131272,
      "ems": null
    },
    {
      "latitude": 55.601669,
      "longitude": -4.612926,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 290.8,
        "kts": 157,
        "mph": 180.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 123,
      "squawk": "4502",
      "timestamp": 1700131275,
      "ems": null
    },
    {
      "latitude": 55.600269,
      "longitude": -4.610138,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 290.8,
        "kts": 157,
        "mph": 180.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 132,
      "squawk": "4502",
      "timestamp": 1700131278,
      "ems": null
    },
    {
      "latitude": 55.598282,
      "longitude": -4.60735,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 290.8,
        "kts": 157,
        "mph": 180.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 144,
      "squawk": "4502",
      "timestamp": 1700131281,
      "ems": null
    },
    {
      "latitude": 55.596687,
      "longitude": -4.605675,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 292.6,
        "kts": 158,
        "mph": 181.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 150,
      "squawk": "4502",
      "timestamp": 1700131284,
      "ems": null
    },
    {
      "latitude": 55.594574,
      "longitude": -4.604187,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 294.5,
        "kts": 159,
        "mph": 183
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 160,
      "squawk": "4502",
      "timestamp": 1700131287,
      "ems": null
    },
    {
      "latitude": 55.592377,
      "longitude": -4.603355,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 169,
      "squawk": "4502",
      "timestamp": 1700131290,
      "ems": null
    },
    {
      "latitude": 55.590134,
      "longitude": -4.603188,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 178,
      "squawk": "4502",
      "timestamp": 1700131293,
      "ems": null
    },
    {
      "latitude": 55.587749,
      "longitude": -4.603615,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 190,
      "squawk": "4502",
      "timestamp": 1700131296,
      "ems": null
    },
    {
      "latitude": 55.585648,
      "longitude": -4.604686,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 294.5,
        "kts": 159,
        "mph": 183
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 199,
      "squawk": "4502",
      "timestamp": 1700131299,
      "ems": null
    },
    {
      "latitude": 55.583679,
      "longitude": -4.606184,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 294.5,
        "kts": 159,
        "mph": 183
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 203,
      "squawk": "4502",
      "timestamp": 1700131302,
      "ems": null
    },
    {
      "latitude": 55.58165,
      "longitude": -4.608421,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 213,
      "squawk": "4502",
      "timestamp": 1700131305,
      "ems": null
    },
    {
      "latitude": 55.580017,
      "longitude": -4.610846,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 218,
      "squawk": "4502",
      "timestamp": 1700131308,
      "ems": null
    },
    {
      "latitude": 55.578552,
      "longitude": -4.613509,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 226,
      "squawk": "4502",
      "timestamp": 1700131311,
      "ems": null
    },
    {
      "latitude": 55.577225,
      "longitude": -4.616838,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 235,
      "squawk": "4502",
      "timestamp": 1700131314,
      "ems": null
    },
    {
      "latitude": 55.576202,
      "longitude": -4.619837,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 240,
      "squawk": "4502",
      "timestamp": 1700131317,
      "ems": null
    },
    {
      "latitude": 55.575226,
      "longitude": -4.6243,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 249,
      "squawk": "4502",
      "timestamp": 1700131320,
      "ems": null
    },
    {
      "latitude": 55.57476,
      "longitude": -4.627647,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 257,
      "squawk": "4502",
      "timestamp": 1700131323,
      "ems": null
    },
    {
      "latitude": 55.574478,
      "longitude": -4.631653,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 264,
      "squawk": "4502",
      "timestamp": 1700131326,
      "ems": null
    },
    {
      "latitude": 55.574524,
      "longitude": -4.635898,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "4502",
      "timestamp": 1700131329,
      "ems": null
    },
    {
      "latitude": 55.57489,
      "longitude": -4.639893,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 280,
      "squawk": "4502",
      "timestamp": 1700131332,
      "ems": null
    },
    {
      "latitude": 55.57555,
      "longitude": -4.643612,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 288,
      "squawk": "4502",
      "timestamp": 1700131336,
      "ems": null
    },
    {
      "latitude": 55.576447,
      "longitude": -4.6473,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 294,
      "squawk": "4502",
      "timestamp": 1700131339,
      "ems": null
    },
    {
      "latitude": 55.577507,
      "longitude": -4.65065,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 299,
      "squawk": "4502",
      "timestamp": 1700131342,
      "ems": null
    },
    {
      "latitude": 55.578625,
      "longitude": -4.654083,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700131344,
      "ems": null
    },
    {
      "latitude": 55.57988,
      "longitude": -4.657787,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700131348,
      "ems": null
    },
    {
      "latitude": 55.580978,
      "longitude": -4.661033,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700131351,
      "ems": null
    },
    {
      "latitude": 55.582031,
      "longitude": -4.664279,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700131353,
      "ems": null
    },
    {
      "latitude": 55.583187,
      "longitude": -4.667559,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 290.8,
        "kts": 157,
        "mph": 180.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700131356,
      "ems": null
    },
    {
      "latitude": 55.58432,
      "longitude": -4.670937,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700131359,
      "ems": null
    },
    {
      "latitude": 55.585419,
      "longitude": -4.673996,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700131362,
      "ems": null
    },
    {
      "latitude": 55.586491,
      "longitude": -4.677601,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 298,
      "squawk": "4502",
      "timestamp": 1700131366,
      "ems": null
    },
    {
      "latitude": 55.588028,
      "longitude": -4.684124,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 289,
      "squawk": "4502",
      "timestamp": 1700131372,
      "ems": null
    },
    {
      "latitude": 55.588486,
      "longitude": -4.68775,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 283,
      "squawk": "4502",
      "timestamp": 1700131375,
      "ems": null
    },
    {
      "latitude": 55.588726,
      "longitude": -4.69142,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 276,
      "squawk": "4502",
      "timestamp": 1700131378,
      "ems": null
    },
    {
      "latitude": 55.588669,
      "longitude": -4.694741,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 267,
      "squawk": "4502",
      "timestamp": 1700131381,
      "ems": null
    },
    {
      "latitude": 55.588261,
      "longitude": -4.698372,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 259,
      "squawk": "4502",
      "timestamp": 1700131384,
      "ems": null
    },
    {
      "latitude": 55.587708,
      "longitude": -4.701483,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 251,
      "squawk": "4502",
      "timestamp": 1700131387,
      "ems": null
    },
    {
      "latitude": 55.586864,
      "longitude": -4.704552,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 243,
      "squawk": "4502",
      "timestamp": 1700131390,
      "ems": null
    },
    {
      "latitude": 55.585747,
      "longitude": -4.707556,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 236,
      "squawk": "4502",
      "timestamp": 1700131393,
      "ems": null
    },
    {
      "latitude": 55.584583,
      "longitude": -4.709873,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 227,
      "squawk": "4502",
      "timestamp": 1700131396,
      "ems": null
    },
    {
      "latitude": 55.583046,
      "longitude": -4.712191,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 219,
      "squawk": "4502",
      "timestamp": 1700131399,
      "ems": null
    },
    {
      "latitude": 55.581371,
      "longitude": -4.713993,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 212,
      "squawk": "4502",
      "timestamp": 1700131402,
      "ems": null
    },
    {
      "latitude": 55.579559,
      "longitude": -4.715549,
      "altitude": {
        "feet": 1375,
        "meters": 419
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 204,
      "squawk": "4502",
      "timestamp": 1700131405,
      "ems": null
    },
    {
      "latitude": 55.577682,
      "longitude": -4.716797,
      "altitude": {
        "feet": 1375,
        "meters": 419
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 201,
      "squawk": "4502",
      "timestamp": 1700131408,
      "ems": null
    },
    {
      "latitude": 55.575897,
      "longitude": -4.718045,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 200,
      "squawk": "4502",
      "timestamp": 1700131411,
      "ems": null
    },
    {
      "latitude": 55.574295,
      "longitude": -4.719044,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 200,
      "squawk": "4502",
      "timestamp": 1700131414,
      "ems": null
    },
    {
      "latitude": 55.572525,
      "longitude": -4.720173,
      "altitude": {
        "feet": 1325,
        "meters": 404
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 199,
      "squawk": "4502",
      "timestamp": 1700131417,
      "ems": null
    },
    {
      "latitude": 55.570679,
      "longitude": -4.721208,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 197,
      "squawk": "4502",
      "timestamp": 1700131420,
      "ems": null
    },
    {
      "latitude": 55.568707,
      "longitude": -4.721975,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 191,
      "squawk": "4502",
      "timestamp": 1700131423,
      "ems": null
    },
    {
      "latitude": 55.56694,
      "longitude": -4.722319,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 184,
      "squawk": "4502",
      "timestamp": 1700131426,
      "ems": null
    },
    {
      "latitude": 55.565048,
      "longitude": -4.72229,
      "altitude": {
        "feet": 1225,
        "meters": 373
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 179,
      "squawk": "4502",
      "timestamp": 1700131429,
      "ems": null
    },
    {
      "latitude": 55.563126,
      "longitude": -4.721791,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 169,
      "squawk": "4502",
      "timestamp": 1700131432,
      "ems": null
    },
    {
      "latitude": 55.561752,
      "longitude": -4.721125,
      "altitude": {
        "feet": 1175,
        "meters": 358
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 164,
      "squawk": "4502",
      "timestamp": 1700131435,
      "ems": null
    },
    {
      "latitude": 55.559784,
      "longitude": -4.719627,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 155,
      "squawk": "4502",
      "timestamp": 1700131438,
      "ems": null
    },
    {
      "latitude": 55.558002,
      "longitude": -4.717941,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 150,
      "squawk": "4502",
      "timestamp": 1700131442,
      "ems": null
    },
    {
      "latitude": 55.556652,
      "longitude": -4.716311,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 145,
      "squawk": "4502",
      "timestamp": 1700131444,
      "ems": null
    },
    {
      "latitude": 55.555439,
      "longitude": -4.71468,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 142,
      "squawk": "4502",
      "timestamp": 1700131447,
      "ems": null
    },
    {
      "latitude": 55.553833,
      "longitude": -4.712219,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 138,
      "squawk": "4502",
      "timestamp": 1700131450,
      "ems": null
    },
    {
      "latitude": 55.552551,
      "longitude": -4.709972,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 135,
      "squawk": "4502",
      "timestamp": 1700131453,
      "ems": null
    },
    {
      "latitude": 55.551315,
      "longitude": -4.707725,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 132,
      "squawk": "4502",
      "timestamp": 1700131456,
      "ems": null
    },
    {
      "latitude": 55.550411,
      "longitude": -4.705839,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 131,
      "squawk": "4502",
      "timestamp": 1700131459,
      "ems": null
    },
    {
      "latitude": 55.549072,
      "longitude": -4.703064,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 129,
      "squawk": "4502",
      "timestamp": 1700131462,
      "ems": null
    },
    {
      "latitude": 55.547897,
      "longitude": -4.700432,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 129,
      "squawk": "4502",
      "timestamp": 1700131465,
      "ems": null
    },
    {
      "latitude": 55.546688,
      "longitude": -4.697771,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 128,
      "squawk": "4502",
      "timestamp": 1700131469,
      "ems": null
    },
    {
      "latitude": 55.545712,
      "longitude": -4.695454,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 126,
      "squawk": "4502",
      "timestamp": 1700131472,
      "ems": null
    },
    {
      "latitude": 55.544685,
      "longitude": -4.692965,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 125,
      "squawk": "4502",
      "timestamp": 1700131474,
      "ems": null
    },
    {
      "latitude": 55.543804,
      "longitude": -4.690733,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 125,
      "squawk": "4502",
      "timestamp": 1700131477,
      "ems": null
    },
    {
      "latitude": 55.54248,
      "longitude": -4.687334,
      "altitude": {
        "feet": 1075,
        "meters": 328
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 124,
      "squawk": "4502",
      "timestamp": 1700131481,
      "ems": null
    },
    {
      "latitude": 55.541519,
      "longitude": -4.68492,
      "altitude": {
        "feet": 1050,
        "meters": 320
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 124,
      "squawk": "4502",
      "timestamp": 1700131484,
      "ems": null
    },
    {
      "latitude": 55.540512,
      "longitude": -4.682257,
      "altitude": {
        "feet": 1050,
        "meters": 320
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 124,
      "squawk": "4502",
      "timestamp": 1700131487,
      "ems": null
    },
    {
      "latitude": 55.53952,
      "longitude": -4.679661,
      "altitude": {
        "feet": 1025,
        "meters": 312
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 123,
      "squawk": "4502",
      "timestamp": 1700131490,
      "ems": null
    },
    {
      "latitude": 55.538494,
      "longitude": -4.676914,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 123,
      "squawk": "4502",
      "timestamp": 1700131493,
      "ems": null
    },
    {
      "latitude": 55.537537,
      "longitude": -4.674266,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 122,
      "squawk": "4502",
      "timestamp": 1700131495,
      "ems": null
    },
    {
      "latitude": 55.5364,
      "longitude": -4.671164,
      "altitude": {
        "feet": 975,
        "meters": 297
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 122,
      "squawk": "4502",
      "timestamp": 1700131499,
      "ems": null
    },
    {
      "latitude": 55.533417,
      "longitude": -4.662864,
      "altitude": {
        "feet": 850,
        "meters": 259
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 122,
      "squawk": "4502",
      "timestamp": 1700131508,
      "ems": null
    },
    {
      "latitude": 55.530304,
      "longitude": -4.654427,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 122,
      "squawk": "4502",
      "timestamp": 1700131517,
      "ems": null
    },
    {
      "latitude": 55.527237,
      "longitude": -4.645885,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 122,
      "squawk": "4502",
      "timestamp": 1700131526,
      "ems": null
    },
    {
      "latitude": 55.524296,
      "longitude": -4.637346,
      "altitude": {
        "feet": 450,
        "meters": 137
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700131535,
      "ems": null
    },
    {
      "latitude": 55.521225,
      "longitude": -4.628763,
      "altitude": {
        "feet": 325,
        "meters": 99
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700131544,
      "ems": null
    },
    {
      "latitude": 55.518539,
      "longitude": -4.620833,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700131553,
      "ems": null
    },
    {
      "latitude": 55.515358,
      "longitude": -4.611855,
      "altitude": {
        "feet": 75,
        "meters": 23
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700131562,
      "ems": null
    },
    {
      "latitude": 55.512707,
      "longitude": -4.604044,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700131570,
      "ems": null
    },
    {
      "latitude": 55.509659,
      "longitude": -4.595365,
      "altitude": {
        "feet": 50,
        "meters": 15
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700131580,
      "ems": null
    },
    {
      "latitude": 55.506001,
      "longitude": -4.584904,
      "altitude": {
        "feet": 250,
        "meters": 76
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": 3136,
        "ms": 15.9
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700131590,
      "ems": null
    },
    {
      "latitude": 55.502789,
      "longitude": -4.576063,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": 3072,
        "ms": 15.6
      },
      "heading": 122,
      "squawk": "4502",
      "timestamp": 1700131598,
      "ems": null
    },
    {
      "latitude": 55.499393,
      "longitude": -4.566708,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 2816,
        "ms": 14.3
      },
      "heading": 122,
      "squawk": "4502",
      "timestamp": 1700131608,
      "ems": null
    },
    {
      "latitude": 55.496292,
      "longitude": -4.557412,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": 2624,
        "ms": 13.3
      },
      "heading": 118,
      "squawk": "4502",
      "timestamp": 1700131617,
      "ems": null
    },
    {
      "latitude": 55.493179,
      "longitude": -4.547424,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 118,
      "squawk": "4502",
      "timestamp": 1700131625,
      "ems": null
    },
    {
      "latitude": 55.489708,
      "longitude": -4.536409,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 117,
      "squawk": "4502",
      "timestamp": 1700131635,
      "ems": null
    },
    {
      "latitude": 55.488831,
      "longitude": -4.532277,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 110,
      "squawk": "4502",
      "timestamp": 1700131638,
      "ems": null
    },
    {
      "latitude": 55.488281,
      "longitude": -4.528115,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 101,
      "squawk": "4502",
      "timestamp": 1700131641,
      "ems": null
    },
    {
      "latitude": 55.488098,
      "longitude": -4.523953,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 93,
      "squawk": "4502",
      "timestamp": 1700131644,
      "ems": null
    },
    {
      "latitude": 55.488235,
      "longitude": -4.520208,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 85,
      "squawk": "4502",
      "timestamp": 1700131647,
      "ems": null
    },
    {
      "latitude": 55.488785,
      "longitude": -4.515631,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 75,
      "squawk": "4502",
      "timestamp": 1700131650,
      "ems": null
    },
    {
      "latitude": 55.489571,
      "longitude": -4.511604,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 70,
      "squawk": "4502",
      "timestamp": 1700131653,
      "ems": null
    },
    {
      "latitude": 55.490639,
      "longitude": -4.507999,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 59,
      "squawk": "4502",
      "timestamp": 1700131656,
      "ems": null
    },
    {
      "latitude": 55.492085,
      "longitude": -4.50448,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 53,
      "squawk": "4502",
      "timestamp": 1700131659,
      "ems": null
    },
    {
      "latitude": 55.493668,
      "longitude": -4.501562,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 45,
      "squawk": "4502",
      "timestamp": 1700131662,
      "ems": null
    },
    {
      "latitude": 55.495667,
      "longitude": -4.498816,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 37,
      "squawk": "4502",
      "timestamp": 1700131665,
      "ems": null
    },
    {
      "latitude": 55.497528,
      "longitude": -4.496927,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 28,
      "squawk": "4502",
      "timestamp": 1700131668,
      "ems": null
    },
    {
      "latitude": 55.499718,
      "longitude": -4.495382,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 20,
      "squawk": "4502",
      "timestamp": 1700131671,
      "ems": null
    },
    {
      "latitude": 55.502014,
      "longitude": -4.494407,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 320.4,
        "kts": 173,
        "mph": 199.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 11,
      "squawk": "4502",
      "timestamp": 1700131674,
      "ems": null
    },
    {
      "latitude": 55.504559,
      "longitude": -4.494181,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 320.4,
        "kts": 173,
        "mph": 199.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 2,
      "squawk": "4502",
      "timestamp": 1700131677,
      "ems": null
    },
    {
      "latitude": 55.506981,
      "longitude": -4.494524,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 353,
      "squawk": "4502",
      "timestamp": 1700131680,
      "ems": null
    },
    {
      "latitude": 55.509354,
      "longitude": -4.49564,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "4502",
      "timestamp": 1700131683,
      "ems": null
    },
    {
      "latitude": 55.511356,
      "longitude": -4.497185,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 335,
      "squawk": "4502",
      "timestamp": 1700131686,
      "ems": null
    },
    {
      "latitude": 55.513359,
      "longitude": -4.499416,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 326,
      "squawk": "4502",
      "timestamp": 1700131689,
      "ems": null
    },
    {
      "latitude": 55.515221,
      "longitude": -4.502249,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 315,
      "squawk": "4502",
      "timestamp": 1700131692,
      "ems": null
    },
    {
      "latitude": 55.516708,
      "longitude": -4.505227,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 311,
      "squawk": "4502",
      "timestamp": 1700131695,
      "ems": null
    },
    {
      "latitude": 55.518265,
      "longitude": -4.508639,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 308,
      "squawk": "4502",
      "timestamp": 1700131698,
      "ems": null
    },
    {
      "latitude": 55.519642,
      "longitude": -4.51169,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 307,
      "squawk": "4502",
      "timestamp": 1700131701,
      "ems": null
    },
    {
      "latitude": 55.521038,
      "longitude": -4.515038,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 306,
      "squawk": "4502",
      "timestamp": 1700131704,
      "ems": null
    },
    {
      "latitude": 55.522247,
      "longitude": -4.518127,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 306,
      "squawk": "4502",
      "timestamp": 1700131707,
      "ems": null
    },
    {
      "latitude": 55.523621,
      "longitude": -4.52154,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 305,
      "squawk": "4502",
      "timestamp": 1700131710,
      "ems": null
    },
    {
      "latitude": 55.524902,
      "longitude": -4.524736,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 305.6,
        "kts": 165,
        "mph": 189.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 305,
      "squawk": "4502",
      "timestamp": 1700131713,
      "ems": null
    },
    {
      "latitude": 55.526184,
      "longitude": -4.527948,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 304,
      "squawk": "4502",
      "timestamp": 1700131716,
      "ems": null
    },
    {
      "latitude": 55.527466,
      "longitude": -4.531278,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 304,
      "squawk": "4502",
      "timestamp": 1700131719,
      "ems": null
    },
    {
      "latitude": 55.528793,
      "longitude": -4.53469,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 303,
      "squawk": "4502",
      "timestamp": 1700131722,
      "ems": null
    },
    {
      "latitude": 55.530212,
      "longitude": -4.538519,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 305.6,
        "kts": 165,
        "mph": 189.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 303,
      "squawk": "4502",
      "timestamp": 1700131725,
      "ems": null
    },
    {
      "latitude": 55.534027,
      "longitude": -4.548855,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 302,
      "squawk": "4502",
      "timestamp": 1700131735,
      "ems": null
    },
    {
      "latitude": 55.537674,
      "longitude": -4.55891,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 302,
      "squawk": "4502",
      "timestamp": 1700131743,
      "ems": null
    },
    {
      "latitude": 55.54166,
      "longitude": -4.569368,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 303,
      "squawk": "4502",
      "timestamp": 1700131752,
      "ems": null
    },
    {
      "latitude": 55.54557,
      "longitude": -4.580097,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 302,
      "squawk": "4502",
      "timestamp": 1700131762,
      "ems": null
    },
    {
      "latitude": 55.549347,
      "longitude": -4.590538,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 302,
      "squawk": "4502",
      "timestamp": 1700131771,
      "ems": null
    },
    {
      "latitude": 55.553101,
      "longitude": -4.601191,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 320.4,
        "kts": 173,
        "mph": 199.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700131779,
      "ems": null
    },
    {
      "latitude": 55.556808,
      "longitude": -4.61201,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700131788,
      "ems": null
    },
    {
      "latitude": 55.560425,
      "longitude": -4.622331,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 294.5,
        "kts": 159,
        "mph": 183
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700131798,
      "ems": null
    },
    {
      "latitude": 55.56382,
      "longitude": -4.632111,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700131806,
      "ems": null
    },
    {
      "latitude": 55.565868,
      "longitude": -4.639235,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 294,
      "squawk": "4502",
      "timestamp": 1700131813,
      "ems": null
    },
    {
      "latitude": 55.566513,
      "longitude": -4.642972,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 287,
      "squawk": "4502",
      "timestamp": 1700131816,
      "ems": null
    },
    {
      "latitude": 55.566891,
      "longitude": -4.646702,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 280,
      "squawk": "4502",
      "timestamp": 1700131819,
      "ems": null
    },
    {
      "latitude": 55.566971,
      "longitude": -4.650463,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 272,
      "squawk": "4502",
      "timestamp": 1700131822,
      "ems": null
    },
    {
      "latitude": 55.566788,
      "longitude": -4.653625,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 262,
      "squawk": "4502",
      "timestamp": 1700131825,
      "ems": null
    },
    {
      "latitude": 55.566193,
      "longitude": -4.657371,
      "altitude": {
        "feet": 1475,
        "meters": 450
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 252,
      "squawk": "4502",
      "timestamp": 1700131828,
      "ems": null
    },
    {
      "latitude": 55.565357,
      "longitude": -4.660692,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 245,
      "squawk": "4502",
      "timestamp": 1700131831,
      "ems": null
    },
    {
      "latitude": 55.564194,
      "longitude": -4.663782,
      "altitude": {
        "feet": 1475,
        "meters": 450
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 237,
      "squawk": "4502",
      "timestamp": 1700131834,
      "ems": null
    },
    {
      "latitude": 55.562981,
      "longitude": -4.666443,
      "altitude": {
        "feet": 1475,
        "meters": 450
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 228,
      "squawk": "4502",
      "timestamp": 1700131837,
      "ems": null
    },
    {
      "latitude": 55.561478,
      "longitude": -4.66894,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 223,
      "squawk": "4502",
      "timestamp": 1700131840,
      "ems": null
    },
    {
      "latitude": 55.559967,
      "longitude": -4.670937,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 217,
      "squawk": "4502",
      "timestamp": 1700131843,
      "ems": null
    },
    {
      "latitude": 55.558372,
      "longitude": -4.672794,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 213,
      "squawk": "4502",
      "timestamp": 1700131846,
      "ems": null
    },
    {
      "latitude": 55.556652,
      "longitude": -4.674597,
      "altitude": {
        "feet": 1375,
        "meters": 419
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 211,
      "squawk": "4502",
      "timestamp": 1700131849,
      "ems": null
    },
    {
      "latitude": 55.555023,
      "longitude": -4.676264,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 209,
      "squawk": "4502",
      "timestamp": 1700131852,
      "ems": null
    },
    {
      "latitude": 55.552975,
      "longitude": -4.677944,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 203,
      "squawk": "4502",
      "timestamp": 1700131855,
      "ems": null
    },
    {
      "latitude": 55.551041,
      "longitude": -4.67901,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 196,
      "squawk": "4502",
      "timestamp": 1700131858,
      "ems": null
    },
    {
      "latitude": 55.549164,
      "longitude": -4.679593,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 188,
      "squawk": "4502",
      "timestamp": 1700131861,
      "ems": null
    },
    {
      "latitude": 55.54715,
      "longitude": -4.679677,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 181,
      "squawk": "4502",
      "timestamp": 1700131864,
      "ems": null
    },
    {
      "latitude": 55.545273,
      "longitude": -4.679344,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 172,
      "squawk": "4502",
      "timestamp": 1700131867,
      "ems": null
    },
    {
      "latitude": 55.543259,
      "longitude": -4.678511,
      "altitude": {
        "feet": 1075,
        "meters": 328
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 165,
      "squawk": "4502",
      "timestamp": 1700131870,
      "ems": null
    },
    {
      "latitude": 55.541428,
      "longitude": -4.677258,
      "altitude": {
        "feet": 1050,
        "meters": 320
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 158,
      "squawk": "4502",
      "timestamp": 1700131874,
      "ems": null
    },
    {
      "latitude": 55.539753,
      "longitude": -4.675713,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 150,
      "squawk": "4502",
      "timestamp": 1700131876,
      "ems": null
    },
    {
      "latitude": 55.538261,
      "longitude": -4.673824,
      "altitude": {
        "feet": 975,
        "meters": 297
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 143,
      "squawk": "4502",
      "timestamp": 1700131879,
      "ems": null
    },
    {
      "latitude": 55.536819,
      "longitude": -4.671593,
      "altitude": {
        "feet": 925,
        "meters": 282
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 136,
      "squawk": "4502",
      "timestamp": 1700131882,
      "ems": null
    },
    {
      "latitude": 55.535614,
      "longitude": -4.669023,
      "altitude": {
        "feet": 875,
        "meters": 267
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 129,
      "squawk": "4502",
      "timestamp": 1700131885,
      "ems": null
    },
    {
      "latitude": 55.534515,
      "longitude": -4.666359,
      "altitude": {
        "feet": 825,
        "meters": 251
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 126,
      "squawk": "4502",
      "timestamp": 1700131888,
      "ems": null
    },
    {
      "latitude": 55.533417,
      "longitude": -4.663446,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 123,
      "squawk": "4502",
      "timestamp": 1700131891,
      "ems": null
    },
    {
      "latitude": 55.532455,
      "longitude": -4.660783,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 122,
      "squawk": "4502",
      "timestamp": 1700131894,
      "ems": null
    },
    {
      "latitude": 55.531448,
      "longitude": -4.65787,
      "altitude": {
        "feet": 750,
        "meters": 229
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700131897,
      "ems": null
    },
    {
      "latitude": 55.530396,
      "longitude": -4.654791,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700131901,
      "ems": null
    },
    {
      "latitude": 55.52948,
      "longitude": -4.652127,
      "altitude": {
        "feet": 675,
        "meters": 206
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700131904,
      "ems": null
    },
    {
      "latitude": 55.52858,
      "longitude": -4.649534,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700131907,
      "ems": null
    },
    {
      "latitude": 55.527695,
      "longitude": -4.646801,
      "altitude": {
        "feet": 575,
        "meters": 175
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700131910,
      "ems": null
    },
    {
      "latitude": 55.526672,
      "longitude": -4.644041,
      "altitude": {
        "feet": 525,
        "meters": 160
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 122,
      "squawk": "4502",
      "timestamp": 1700131913,
      "ems": null
    },
    {
      "latitude": 55.525692,
      "longitude": -4.64138,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 123,
      "squawk": "4502",
      "timestamp": 1700131916,
      "ems": null
    },
    {
      "latitude": 55.5229,
      "longitude": -4.633484,
      "altitude": {
        "feet": 375,
        "meters": 114
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700131924,
      "ems": null
    },
    {
      "latitude": 55.520016,
      "longitude": -4.625072,
      "altitude": {
        "feet": 250,
        "meters": 76
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700131934,
      "ems": null
    },
    {
      "latitude": 55.51712,
      "longitude": -4.616755,
      "altitude": {
        "feet": 150,
        "meters": 46
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700131943,
      "ems": null
    },
    {
      "latitude": 55.514149,
      "longitude": -4.60825,
      "altitude": {
        "feet": 25,
        "meters": 8
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700131952,
      "ems": null
    },
    {
      "latitude": 55.511635,
      "longitude": -4.600954,
      "altitude": {
        "feet": 25,
        "meters": 8
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700131960,
      "ems": null
    },
    {
      "latitude": 55.508144,
      "longitude": -4.590826,
      "altitude": {
        "feet": 75,
        "meters": 23
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700131970,
      "ems": null
    },
    {
      "latitude": 55.50499,
      "longitude": -4.581715,
      "altitude": {
        "feet": 475,
        "meters": 145
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": 3264,
        "ms": 16.6
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700131979,
      "ems": null
    },
    {
      "latitude": 55.50174,
      "longitude": -4.572476,
      "altitude": {
        "feet": 925,
        "meters": 282
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 2688,
        "ms": 13.7
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700131988,
      "ems": null
    },
    {
      "latitude": 55.498672,
      "longitude": -4.563321,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": 2752,
        "ms": 14
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700131997,
      "ems": null
    },
    {
      "latitude": 55.495605,
      "longitude": -4.55375,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": 2240,
        "ms": 11.4
      },
      "heading": 119,
      "squawk": "4502",
      "timestamp": 1700132006,
      "ems": null
    },
    {
      "latitude": 55.492363,
      "longitude": -4.543619,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 292.6,
        "kts": 158,
        "mph": 181.8
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 119,
      "squawk": "4502",
      "timestamp": 1700132015,
      "ems": null
    },
    {
      "latitude": 55.489014,
      "longitude": -4.533109,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 119,
      "squawk": "4502",
      "timestamp": 1700132024,
      "ems": null
    },
    {
      "latitude": 55.485332,
      "longitude": -4.52199,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700132033,
      "ems": null
    },
    {
      "latitude": 55.483006,
      "longitude": -4.515123,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700132039,
      "ems": null
    },
    {
      "latitude": 55.47942,
      "longitude": -4.504395,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700132048,
      "ems": null
    },
    {
      "latitude": 55.475697,
      "longitude": -4.493408,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700132058,
      "ems": null
    },
    {
      "latitude": 55.472298,
      "longitude": -4.483023,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 119,
      "squawk": "4502",
      "timestamp": 1700132066,
      "ems": null
    },
    {
      "latitude": 55.468643,
      "longitude": -4.471935,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700132076,
      "ems": null
    },
    {
      "latitude": 55.466034,
      "longitude": -4.46561,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 131,
      "squawk": "4502",
      "timestamp": 1700132081,
      "ems": null
    },
    {
      "latitude": 55.464664,
      "longitude": -4.463367,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 137,
      "squawk": "4502",
      "timestamp": 1700132084,
      "ems": null
    },
    {
      "latitude": 55.462196,
      "longitude": -4.460449,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 149,
      "squawk": "4502",
      "timestamp": 1700132088,
      "ems": null
    },
    {
      "latitude": 55.460083,
      "longitude": -4.458868,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 158,
      "squawk": "4502",
      "timestamp": 1700132091,
      "ems": null
    },
    {
      "latitude": 55.457794,
      "longitude": -4.457786,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 305.6,
        "kts": 165,
        "mph": 189.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 167,
      "squawk": "4502",
      "timestamp": 1700132094,
      "ems": null
    },
    {
      "latitude": 55.455914,
      "longitude": -4.457445,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 176,
      "squawk": "4502",
      "timestamp": 1700132097,
      "ems": null
    },
    {
      "latitude": 55.453262,
      "longitude": -4.457619,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 184,
      "squawk": "4502",
      "timestamp": 1700132100,
      "ems": null
    },
    {
      "latitude": 55.451294,
      "longitude": -4.458285,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 190,
      "squawk": "4502",
      "timestamp": 1700132102,
      "ems": null
    },
    {
      "latitude": 55.449005,
      "longitude": -4.459617,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 198,
      "squawk": "4502",
      "timestamp": 1700132106,
      "ems": null
    },
    {
      "latitude": 55.446926,
      "longitude": -4.461565,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 208,
      "squawk": "4502",
      "timestamp": 1700132109,
      "ems": null
    },
    {
      "latitude": 55.445206,
      "longitude": -4.463797,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 217,
      "squawk": "4502",
      "timestamp": 1700132112,
      "ems": null
    },
    {
      "latitude": 55.443527,
      "longitude": -4.466774,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 226,
      "squawk": "4502",
      "timestamp": 1700132115,
      "ems": null
    },
    {
      "latitude": 55.442413,
      "longitude": -4.469521,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 235,
      "squawk": "4502",
      "timestamp": 1700132117,
      "ems": null
    },
    {
      "latitude": 55.441223,
      "longitude": -4.473455,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 244,
      "squawk": "4502",
      "timestamp": 1700132121,
      "ems": null
    },
    {
      "latitude": 55.440536,
      "longitude": -4.477171,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 253,
      "squawk": "4502",
      "timestamp": 1700132124,
      "ems": null
    },
    {
      "latitude": 55.44017,
      "longitude": -4.48121,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 261,
      "squawk": "4502",
      "timestamp": 1700132127,
      "ems": null
    },
    {
      "latitude": 55.44017,
      "longitude": -4.485088,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 270,
      "squawk": "4502",
      "timestamp": 1700132130,
      "ems": null
    },
    {
      "latitude": 55.440502,
      "longitude": -4.488997,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 279,
      "squawk": "4502",
      "timestamp": 1700132133,
      "ems": null
    },
    {
      "latitude": 55.441086,
      "longitude": -4.492519,
      "altitude": {
        "feet": 1925,
        "meters": 587
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 287,
      "squawk": "4502",
      "timestamp": 1700132136,
      "ems": null
    },
    {
      "latitude": 55.441994,
      "longitude": -4.496155,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 293,
      "squawk": "4502",
      "timestamp": 1700132139,
      "ems": null
    },
    {
      "latitude": 55.443157,
      "longitude": -4.500233,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 305.6,
        "kts": 165,
        "mph": 189.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 296,
      "squawk": "4502",
      "timestamp": 1700132142,
      "ems": null
    },
    {
      "latitude": 55.444088,
      "longitude": -4.503365,
      "altitude": {
        "feet": 1925,
        "meters": 587
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 297,
      "squawk": "4502",
      "timestamp": 1700132145,
      "ems": null
    },
    {
      "latitude": 55.445251,
      "longitude": -4.507225,
      "altitude": {
        "feet": 1925,
        "meters": 587
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 297,
      "squawk": "4502",
      "timestamp": 1700132148,
      "ems": null
    },
    {
      "latitude": 55.446182,
      "longitude": -4.510489,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 297,
      "squawk": "4502",
      "timestamp": 1700132151,
      "ems": null
    },
    {
      "latitude": 55.447357,
      "longitude": -4.514382,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 297,
      "squawk": "4502",
      "timestamp": 1700132154,
      "ems": null
    },
    {
      "latitude": 55.448322,
      "longitude": -4.517784,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 297,
      "squawk": "4502",
      "timestamp": 1700132157,
      "ems": null
    },
    {
      "latitude": 55.449371,
      "longitude": -4.52129,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 297,
      "squawk": "4502",
      "timestamp": 1700132160,
      "ems": null
    },
    {
      "latitude": 55.450325,
      "longitude": -4.524393,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 297,
      "squawk": "4502",
      "timestamp": 1700132163,
      "ems": null
    },
    {
      "latitude": 55.451385,
      "longitude": -4.527865,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 298,
      "squawk": "4502",
      "timestamp": 1700132166,
      "ems": null
    },
    {
      "latitude": 55.452484,
      "longitude": -4.531444,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 298,
      "squawk": "4502",
      "timestamp": 1700132169,
      "ems": null
    },
    {
      "latitude": 55.455818,
      "longitude": -4.541903,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 294.5,
        "kts": 159,
        "mph": 183
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 299,
      "squawk": "4502",
      "timestamp": 1700132178,
      "ems": null
    },
    {
      "latitude": 55.459217,
      "longitude": -4.55246,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 299,
      "squawk": "4502",
      "timestamp": 1700132187,
      "ems": null
    },
    {
      "latitude": 55.462429,
      "longitude": -4.562416,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 299,
      "squawk": "4502",
      "timestamp": 1700132196,
      "ems": null
    },
    {
      "latitude": 55.465687,
      "longitude": -4.572802,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 298,
      "squawk": "4502",
      "timestamp": 1700132205,
      "ems": null
    },
    {
      "latitude": 55.46862,
      "longitude": -4.582758,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 297,
      "squawk": "4502",
      "timestamp": 1700132214,
      "ems": null
    },
    {
      "latitude": 55.470886,
      "longitude": -4.59087,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 296,
      "squawk": "4502",
      "timestamp": 1700132220,
      "ems": null
    },
    {
      "latitude": 55.473862,
      "longitude": -4.60144,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 296,
      "squawk": "4502",
      "timestamp": 1700132229,
      "ems": null
    },
    {
      "latitude": 55.476837,
      "longitude": -4.612427,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 305.6,
        "kts": 165,
        "mph": 189.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700132238,
      "ems": null
    },
    {
      "latitude": 55.480072,
      "longitude": -4.623356,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 299,
      "squawk": "4502",
      "timestamp": 1700132248,
      "ems": null
    },
    {
      "latitude": 55.483425,
      "longitude": -4.633913,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 299,
      "squawk": "4502",
      "timestamp": 1700132256,
      "ems": null
    },
    {
      "latitude": 55.485718,
      "longitude": -4.640975,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700132262,
      "ems": null
    },
    {
      "latitude": 55.486916,
      "longitude": -4.644556,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700132265,
      "ems": null
    },
    {
      "latitude": 55.488079,
      "longitude": -4.648161,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 305.6,
        "kts": 165,
        "mph": 189.9
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700132268,
      "ems": null
    },
    {
      "latitude": 55.489243,
      "longitude": -4.651594,
      "altitude": {
        "feet": 2075,
        "meters": 632
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700132271,
      "ems": null
    },
    {
      "latitude": 55.492596,
      "longitude": -4.661722,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 294.5,
        "kts": 159,
        "mph": 183
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700132281,
      "ems": null
    },
    {
      "latitude": 55.496109,
      "longitude": -4.672352,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700132290,
      "ems": null
    },
    {
      "latitude": 55.499485,
      "longitude": -4.682407,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 294.5,
        "kts": 159,
        "mph": 183
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 302,
      "squawk": "4502",
      "timestamp": 1700132299,
      "ems": null
    },
    {
      "latitude": 55.500824,
      "longitude": -4.685503,
      "altitude": {
        "feet": 1875,
        "meters": 572
      },
      "speed": {
        "kmh": 290.8,
        "kts": 157,
        "mph": 180.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 307,
      "squawk": "4502",
      "timestamp": 1700132302,
      "ems": null
    },
    {
      "latitude": 55.502151,
      "longitude": -4.688083,
      "altitude": {
        "feet": 1850,
        "meters": 564
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 313,
      "squawk": "4502",
      "timestamp": 1700132305,
      "ems": null
    },
    {
      "latitude": 55.503906,
      "longitude": -4.690733,
      "altitude": {
        "feet": 1825,
        "meters": 556
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 319,
      "squawk": "4502",
      "timestamp": 1700132308,
      "ems": null
    },
    {
      "latitude": 55.505585,
      "longitude": -4.692793,
      "altitude": {
        "feet": 1775,
        "meters": 541
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 325,
      "squawk": "4502",
      "timestamp": 1700132311,
      "ems": null
    },
    {
      "latitude": 55.50737,
      "longitude": -4.694491,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 331,
      "squawk": "4502",
      "timestamp": 1700132314,
      "ems": null
    },
    {
      "latitude": 55.509521,
      "longitude": -4.69599,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 279.7,
        "kts": 151,
        "mph": 173.8
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 338,
      "squawk": "4502",
      "timestamp": 1700132317,
      "ems": null
    },
    {
      "latitude": 55.511681,
      "longitude": -4.696999,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 347,
      "squawk": "4502",
      "timestamp": 1700132320,
      "ems": null
    },
    {
      "latitude": 55.513687,
      "longitude": -4.697487,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 351,
      "squawk": "4502",
      "timestamp": 1700132323,
      "ems": null
    },
    {
      "latitude": 55.515778,
      "longitude": -4.697599,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 357,
      "squawk": "4502",
      "timestamp": 1700132326,
      "ems": null
    },
    {
      "latitude": 55.51778,
      "longitude": -4.697342,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 3,
      "squawk": "4502",
      "timestamp": 1700132329,
      "ems": null
    },
    {
      "latitude": 55.519733,
      "longitude": -4.696741,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 9,
      "squawk": "4502",
      "timestamp": 1700132332,
      "ems": null
    },
    {
      "latitude": 55.521782,
      "longitude": -4.695883,
      "altitude": {
        "feet": 1325,
        "meters": 404
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 13,
      "squawk": "4502",
      "timestamp": 1700132335,
      "ems": null
    },
    {
      "latitude": 55.523739,
      "longitude": -4.695024,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 14,
      "squawk": "4502",
      "timestamp": 1700132338,
      "ems": null
    },
    {
      "latitude": 55.525646,
      "longitude": -4.693995,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 17,
      "squawk": "4502",
      "timestamp": 1700132341,
      "ems": null
    },
    {
      "latitude": 55.527462,
      "longitude": -4.692621,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 21,
      "squawk": "4502",
      "timestamp": 1700132344,
      "ems": null
    },
    {
      "latitude": 55.529114,
      "longitude": -4.690996,
      "altitude": {
        "feet": 1075,
        "meters": 328
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 31,
      "squawk": "4502",
      "timestamp": 1700132347,
      "ems": null
    },
    {
      "latitude": 55.530769,
      "longitude": -4.688587,
      "altitude": {
        "feet": 975,
        "meters": 297
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 43,
      "squawk": "4502",
      "timestamp": 1700132350,
      "ems": null
    },
    {
      "latitude": 55.532024,
      "longitude": -4.686012,
      "altitude": {
        "feet": 925,
        "meters": 282
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 51,
      "squawk": "4502",
      "timestamp": 1700132353,
      "ems": null
    },
    {
      "latitude": 55.533096,
      "longitude": -4.683008,
      "altitude": {
        "feet": 875,
        "meters": 267
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 59,
      "squawk": "4502",
      "timestamp": 1700132356,
      "ems": null
    },
    {
      "latitude": 55.533829,
      "longitude": -4.679926,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 70,
      "squawk": "4502",
      "timestamp": 1700132359,
      "ems": null
    },
    {
      "latitude": 55.534332,
      "longitude": -4.676764,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 77,
      "squawk": "4502",
      "timestamp": 1700132362,
      "ems": null
    },
    {
      "latitude": 55.534515,
      "longitude": -4.673767,
      "altitude": {
        "feet": 750,
        "meters": 229
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 82,
      "squawk": "4502",
      "timestamp": 1700132365,
      "ems": null
    },
    {
      "latitude": 55.534424,
      "longitude": -4.670438,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 93,
      "squawk": "4502",
      "timestamp": 1700132368,
      "ems": null
    },
    {
      "latitude": 55.534119,
      "longitude": -4.667387,
      "altitude": {
        "feet": 675,
        "meters": 206
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 99,
      "squawk": "4502",
      "timestamp": 1700132371,
      "ems": null
    },
    {
      "latitude": 55.533607,
      "longitude": -4.664469,
      "altitude": {
        "feet": 650,
        "meters": 198
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 110,
      "squawk": "4502",
      "timestamp": 1700132374,
      "ems": null
    },
    {
      "latitude": 55.532722,
      "longitude": -4.661551,
      "altitude": {
        "feet": 625,
        "meters": 191
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 119,
      "squawk": "4502",
      "timestamp": 1700132377,
      "ems": null
    },
    {
      "latitude": 55.531746,
      "longitude": -4.659061,
      "altitude": {
        "feet": 575,
        "meters": 175
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 124,
      "squawk": "4502",
      "timestamp": 1700132380,
      "ems": null
    },
    {
      "latitude": 55.530807,
      "longitude": -4.656538,
      "altitude": {
        "feet": 550,
        "meters": 168
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 124,
      "squawk": "4502",
      "timestamp": 1700132383,
      "ems": null
    },
    {
      "latitude": 55.5298,
      "longitude": -4.653792,
      "altitude": {
        "feet": 550,
        "meters": 168
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
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700132386,
      "ems": null
    },
    {
      "latitude": 55.528885,
      "longitude": -4.650962,
      "altitude": {
        "feet": 525,
        "meters": 160
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 119,
      "squawk": "4502",
      "timestamp": 1700132389,
      "ems": null
    },
    {
      "latitude": 55.528069,
      "longitude": -4.648333,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 119,
      "squawk": "4502",
      "timestamp": 1700132392,
      "ems": null
    },
    {
      "latitude": 55.527145,
      "longitude": -4.645469,
      "altitude": {
        "feet": 475,
        "meters": 145
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
      "heading": 119,
      "squawk": "4502",
      "timestamp": 1700132395,
      "ems": null
    },
    {
      "latitude": 55.526184,
      "longitude": -4.642639,
      "altitude": {
        "feet": 475,
        "meters": 145
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700132398,
      "ems": null
    },
    {
      "latitude": 55.525414,
      "longitude": -4.64035,
      "altitude": {
        "feet": 450,
        "meters": 137
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700132401,
      "ems": null
    },
    {
      "latitude": 55.522293,
      "longitude": -4.631653,
      "altitude": {
        "feet": 325,
        "meters": 99
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 122,
      "squawk": "4502",
      "timestamp": 1700132411,
      "ems": null
    },
    {
      "latitude": 55.519501,
      "longitude": -4.623699,
      "altitude": {
        "feet": 225,
        "meters": 69
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700132419,
      "ems": null
    },
    {
      "latitude": 55.516479,
      "longitude": -4.614923,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700132429,
      "ems": null
    },
    {
      "latitude": 55.513916,
      "longitude": -4.607599,
      "altitude": {
        "feet": 25,
        "meters": 8
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700132437,
      "ems": null
    },
    {
      "latitude": 55.510849,
      "longitude": -4.598777,
      "altitude": {
        "feet": 50,
        "meters": 15
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
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700132447,
      "ems": null
    },
    {
      "latitude": 55.508003,
      "longitude": -4.590483,
      "altitude": {
        "feet": 75,
        "meters": 23
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700132456,
      "ems": null
    },
    {
      "latitude": 55.504623,
      "longitude": -4.580633,
      "altitude": {
        "feet": 575,
        "meters": 175
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 3264,
        "ms": 16.6
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700132465,
      "ems": null
    },
    {
      "latitude": 55.501328,
      "longitude": -4.571394,
      "altitude": {
        "feet": 1025,
        "meters": 312
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": 2560,
        "ms": 13
      },
      "heading": 122,
      "squawk": "4502",
      "timestamp": 1700132475,
      "ems": null
    },
    {
      "latitude": 55.497803,
      "longitude": -4.561823,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": 2560,
        "ms": 13
      },
      "heading": 123,
      "squawk": "4502",
      "timestamp": 1700132484,
      "ems": null
    },
    {
      "latitude": 55.494186,
      "longitude": -4.552002,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 123,
      "squawk": "4502",
      "timestamp": 1700132493,
      "ems": null
    },
    {
      "latitude": 55.490219,
      "longitude": -4.541645,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 124,
      "squawk": "4502",
      "timestamp": 1700132502,
      "ems": null
    },
    {
      "latitude": 55.488785,
      "longitude": -4.538685,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 305.6,
        "kts": 165,
        "mph": 189.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 129,
      "squawk": "4502",
      "timestamp": 1700132505,
      "ems": null
    },
    {
      "latitude": 55.48732,
      "longitude": -4.536355,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 305.6,
        "kts": 165,
        "mph": 189.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "4502",
      "timestamp": 1700132508,
      "ems": null
    },
    {
      "latitude": 55.485031,
      "longitude": -4.533941,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 152,
      "squawk": "4502",
      "timestamp": 1700132511,
      "ems": null
    },
    {
      "latitude": 55.482925,
      "longitude": -4.532526,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 162,
      "squawk": "4502",
      "timestamp": 1700132514,
      "ems": null
    },
    {
      "latitude": 55.480911,
      "longitude": -4.531694,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 166,
      "squawk": "4502",
      "timestamp": 1700132517,
      "ems": null
    },
    {
      "latitude": 55.47863,
      "longitude": -4.531345,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 176,
      "squawk": "4502",
      "timestamp": 1700132520,
      "ems": null
    },
    {
      "latitude": 55.476288,
      "longitude": -4.531694,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 188,
      "squawk": "4502",
      "timestamp": 1700132523,
      "ems": null
    },
    {
      "latitude": 55.474274,
      "longitude": -4.532609,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 194,
      "squawk": "4502",
      "timestamp": 1700132526,
      "ems": null
    },
    {
      "latitude": 55.471878,
      "longitude": -4.534349,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 305.6,
        "kts": 165,
        "mph": 189.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "4502",
      "timestamp": 1700132529,
      "ems": null
    },
    {
      "latitude": 55.470112,
      "longitude": -4.536324,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 212,
      "squawk": "4502",
      "timestamp": 1700132532,
      "ems": null
    },
    {
      "latitude": 55.468342,
      "longitude": -4.538984,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 305.6,
        "kts": 165,
        "mph": 189.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 221,
      "squawk": "4502",
      "timestamp": 1700132535,
      "ems": null
    },
    {
      "latitude": 55.46685,
      "longitude": -4.542246,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 233,
      "squawk": "4502",
      "timestamp": 1700132538,
      "ems": null
    },
    {
      "latitude": 55.465668,
      "longitude": -4.54576,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 242,
      "squawk": "4502",
      "timestamp": 1700132541,
      "ems": null
    },
    {
      "latitude": 55.464851,
      "longitude": -4.54937,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 251,
      "squawk": "4502",
      "timestamp": 1700132544,
      "ems": null
    },
    {
      "latitude": 55.464386,
      "longitude": -4.553417,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 258,
      "squawk": "4502",
      "timestamp": 1700132547,
      "ems": null
    },
    {
      "latitude": 55.464245,
      "longitude": -4.557438,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 270,
      "squawk": "4502",
      "timestamp": 1700132550,
      "ems": null
    },
    {
      "latitude": 55.464523,
      "longitude": -4.561989,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 279,
      "squawk": "4502",
      "timestamp": 1700132553,
      "ems": null
    },
    {
      "latitude": 55.465176,
      "longitude": -4.566021,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 288,
      "squawk": "4502",
      "timestamp": 1700132556,
      "ems": null
    },
    {
      "latitude": 55.466171,
      "longitude": -4.569896,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700132559,
      "ems": null
    },
    {
      "latitude": 55.467407,
      "longitude": -4.573558,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700132562,
      "ems": null
    },
    {
      "latitude": 55.46862,
      "longitude": -4.576836,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 314.8,
        "kts": 170,
        "mph": 195.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 302,
      "squawk": "4502",
      "timestamp": 1700132565,
      "ems": null
    },
    {
      "latitude": 55.46983,
      "longitude": -4.580355,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 313,
        "kts": 169,
        "mph": 194.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700132569,
      "ems": null
    },
    {
      "latitude": 55.47118,
      "longitude": -4.584217,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700132572,
      "ems": null
    },
    {
      "latitude": 55.472351,
      "longitude": -4.587874,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 299,
      "squawk": "4502",
      "timestamp": 1700132575,
      "ems": null
    },
    {
      "latitude": 55.473495,
      "longitude": -4.59137,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 299,
      "squawk": "4502",
      "timestamp": 1700132578,
      "ems": null
    },
    {
      "latitude": 55.47464,
      "longitude": -4.594865,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 299,
      "squawk": "4502",
      "timestamp": 1700132581,
      "ems": null
    },
    {
      "latitude": 55.475788,
      "longitude": -4.598551,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 299,
      "squawk": "4502",
      "timestamp": 1700132584,
      "ems": null
    },
    {
      "latitude": 55.476955,
      "longitude": -4.602156,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 299,
      "squawk": "4502",
      "timestamp": 1700132587,
      "ems": null
    },
    {
      "latitude": 55.48035,
      "longitude": -4.612799,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 299,
      "squawk": "4502",
      "timestamp": 1700132596,
      "ems": null
    },
    {
      "latitude": 55.483704,
      "longitude": -4.62333,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 299,
      "squawk": "4502",
      "timestamp": 1700132605,
      "ems": null
    },
    {
      "latitude": 55.487183,
      "longitude": -4.633983,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700132614,
      "ems": null
    },
    {
      "latitude": 55.491028,
      "longitude": -4.644803,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 305.6,
        "kts": 165,
        "mph": 189.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 302,
      "squawk": "4502",
      "timestamp": 1700132623,
      "ems": null
    },
    {
      "latitude": 55.494457,
      "longitude": -4.654942,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700132632,
      "ems": null
    },
    {
      "latitude": 55.498077,
      "longitude": -4.665777,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700132641,
      "ems": null
    },
    {
      "latitude": 55.501534,
      "longitude": -4.675884,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 290.8,
        "kts": 157,
        "mph": 180.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700132650,
      "ems": null
    },
    {
      "latitude": 55.504837,
      "longitude": -4.685068,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 302,
      "squawk": "4502",
      "timestamp": 1700132659,
      "ems": null
    },
    {
      "latitude": 55.506088,
      "longitude": -4.688332,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 305,
      "squawk": "4502",
      "timestamp": 1700132662,
      "ems": null
    },
    {
      "latitude": 55.507584,
      "longitude": -4.691505,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 311,
      "squawk": "4502",
      "timestamp": 1700132665,
      "ems": null
    },
    {
      "latitude": 55.509155,
      "longitude": -4.693909,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 322,
      "squawk": "4502",
      "timestamp": 1700132668,
      "ems": null
    },
    {
      "latitude": 55.510937,
      "longitude": -4.695883,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 329,
      "squawk": "4502",
      "timestamp": 1700132671,
      "ems": null
    },
    {
      "latitude": 55.512985,
      "longitude": -4.697428,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 338,
      "squawk": "4502",
      "timestamp": 1700132674,
      "ems": null
    },
    {
      "latitude": 55.514969,
      "longitude": -4.698403,
      "altitude": {
        "feet": 1475,
        "meters": 450
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 345,
      "squawk": "4502",
      "timestamp": 1700132677,
      "ems": null
    },
    {
      "latitude": 55.517075,
      "longitude": -4.698903,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 353,
      "squawk": "4502",
      "timestamp": 1700132680,
      "ems": null
    },
    {
      "latitude": 55.519222,
      "longitude": -4.698887,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 3,
      "squawk": "4502",
      "timestamp": 1700132683,
      "ems": null
    },
    {
      "latitude": 55.521332,
      "longitude": -4.698236,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 12,
      "squawk": "4502",
      "timestamp": 1700132686,
      "ems": null
    },
    {
      "latitude": 55.523319,
      "longitude": -4.697084,
      "altitude": {
        "feet": 1325,
        "meters": 404
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 17,
      "squawk": "4502",
      "timestamp": 1700132689,
      "ems": null
    },
    {
      "latitude": 55.52536,
      "longitude": -4.695407,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 27,
      "squawk": "4502",
      "timestamp": 1700132692,
      "ems": null
    },
    {
      "latitude": 55.527184,
      "longitude": -4.693394,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 30,
      "squawk": "4502",
      "timestamp": 1700132696,
      "ems": null
    },
    {
      "latitude": 55.528885,
      "longitude": -4.691495,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 34,
      "squawk": "4502",
      "timestamp": 1700132699,
      "ems": null
    },
    {
      "latitude": 55.530258,
      "longitude": -4.689248,
      "altitude": {
        "feet": 1225,
        "meters": 373
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 44,
      "squawk": "4502",
      "timestamp": 1700132701,
      "ems": null
    },
    {
      "latitude": 55.53154,
      "longitude": -4.686584,
      "altitude": {
        "feet": 1175,
        "meters": 358
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 50,
      "squawk": "4502",
      "timestamp": 1700132704,
      "ems": null
    },
    {
      "latitude": 55.532593,
      "longitude": -4.683588,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 58,
      "squawk": "4502",
      "timestamp": 1700132707,
      "ems": null
    },
    {
      "latitude": 55.533421,
      "longitude": -4.680519,
      "altitude": {
        "feet": 1050,
        "meters": 320
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 66,
      "squawk": "4502",
      "timestamp": 1700132710,
      "ems": null
    },
    {
      "latitude": 55.534027,
      "longitude": -4.677258,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -1408,
        "ms": -7.2
      },
      "heading": 72,
      "squawk": "4502",
      "timestamp": 1700132713,
      "ems": null
    },
    {
      "latitude": 55.534378,
      "longitude": -4.6741,
      "altitude": {
        "feet": 925,
        "meters": 282
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 79,
      "squawk": "4502",
      "timestamp": 1700132716,
      "ems": null
    },
    {
      "latitude": 55.534561,
      "longitude": -4.670937,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 86,
      "squawk": "4502",
      "timestamp": 1700132719,
      "ems": null
    },
    {
      "latitude": 55.534351,
      "longitude": -4.667215,
      "altitude": {
        "feet": 825,
        "meters": 251
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 98,
      "squawk": "4502",
      "timestamp": 1700132723,
      "ems": null
    },
    {
      "latitude": 55.533886,
      "longitude": -4.664469,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 109,
      "squawk": "4502",
      "timestamp": 1700132725,
      "ems": null
    },
    {
      "latitude": 55.533051,
      "longitude": -4.661293,
      "altitude": {
        "feet": 750,
        "meters": 229
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 116,
      "squawk": "4502",
      "timestamp": 1700132728,
      "ems": null
    },
    {
      "latitude": 55.532089,
      "longitude": -4.658786,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 124,
      "squawk": "4502",
      "timestamp": 1700132731,
      "ems": null
    },
    {
      "latitude": 55.530907,
      "longitude": -4.656143,
      "altitude": {
        "feet": 675,
        "meters": 206
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 127,
      "squawk": "4502",
      "timestamp": 1700132735,
      "ems": null
    },
    {
      "latitude": 55.529884,
      "longitude": -4.653654,
      "altitude": {
        "feet": 650,
        "meters": 198
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 126,
      "squawk": "4502",
      "timestamp": 1700132737,
      "ems": null
    },
    {
      "latitude": 55.528858,
      "longitude": -4.650908,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 123,
      "squawk": "4502",
      "timestamp": 1700132740,
      "ems": null
    },
    {
      "latitude": 55.527836,
      "longitude": -4.647989,
      "altitude": {
        "feet": 575,
        "meters": 175
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700132744,
      "ems": null
    },
    {
      "latitude": 55.526871,
      "longitude": -4.645219,
      "altitude": {
        "feet": 525,
        "meters": 160
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700132747,
      "ems": null
    },
    {
      "latitude": 55.52602,
      "longitude": -4.642496,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 119,
      "squawk": "4502",
      "timestamp": 1700132750,
      "ems": null
    },
    {
      "latitude": 55.525269,
      "longitude": -4.640142,
      "altitude": {
        "feet": 475,
        "meters": 145
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 119,
      "squawk": "4502",
      "timestamp": 1700132752,
      "ems": null
    },
    {
      "latitude": 55.524345,
      "longitude": -4.637346,
      "altitude": {
        "feet": 425,
        "meters": 130
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
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700132756,
      "ems": null
    },
    {
      "latitude": 55.523365,
      "longitude": -4.634514,
      "altitude": {
        "feet": 375,
        "meters": 114
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700132759,
      "ems": null
    },
    {
      "latitude": 55.520325,
      "longitude": -4.626243,
      "altitude": {
        "feet": 275,
        "meters": 84
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700132768,
      "ems": null
    },
    {
      "latitude": 55.517624,
      "longitude": -4.618336,
      "altitude": {
        "feet": 175,
        "meters": 53
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700132777,
      "ems": null
    },
    {
      "latitude": 55.514877,
      "longitude": -4.610346,
      "altitude": {
        "feet": 75,
        "meters": 23
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700132786,
      "ems": null
    },
    {
      "latitude": 55.512753,
      "longitude": -4.604216,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700132792,
      "ems": null
    },
    {
      "latitude": 55.511868,
      "longitude": -4.601555,
      "altitude": {
        "feet": 25,
        "meters": 8
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700132799,
      "ems": null
    },
    {
      "latitude": 55.508331,
      "longitude": -4.591453,
      "altitude": {
        "feet": 25,
        "meters": 8
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700132806,
      "ems": null
    },
    {
      "latitude": 55.504623,
      "longitude": -4.5808,
      "altitude": {
        "feet": 475,
        "meters": 145
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 3584,
        "ms": 18.2
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700132816,
      "ems": null
    },
    {
      "latitude": 55.501602,
      "longitude": -4.571478,
      "altitude": {
        "feet": 950,
        "meters": 290
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": 2688,
        "ms": 13.7
      },
      "heading": 119,
      "squawk": "4502",
      "timestamp": 1700132825,
      "ems": null
    },
    {
      "latitude": 55.498352,
      "longitude": -4.561656,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": 3136,
        "ms": 15.9
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700132835,
      "ems": null
    },
    {
      "latitude": 55.494873,
      "longitude": -4.551503,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700132844,
      "ems": null
    },
    {
      "latitude": 55.49144,
      "longitude": -4.541515,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700132853,
      "ems": null
    },
    {
      "latitude": 55.487427,
      "longitude": -4.530745,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 126,
      "squawk": "4502",
      "timestamp": 1700132862,
      "ems": null
    },
    {
      "latitude": 55.485855,
      "longitude": -4.527616,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 309.3,
        "kts": 167,
        "mph": 192.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 132,
      "squawk": "4502",
      "timestamp": 1700132865,
      "ems": null
    },
    {
      "latitude": 55.484215,
      "longitude": -4.52508,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 142,
      "squawk": "4502",
      "timestamp": 1700132868,
      "ems": null
    },
    {
      "latitude": 55.482285,
      "longitude": -4.522955,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 150,
      "squawk": "4502",
      "timestamp": 1700132871,
      "ems": null
    },
    {
      "latitude": 55.480118,
      "longitude": -4.521303,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 160,
      "squawk": "4502",
      "timestamp": 1700132874,
      "ems": null
    },
    {
      "latitude": 55.477837,
      "longitude": -4.520273,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 169,
      "squawk": "4502",
      "timestamp": 1700132877,
      "ems": null
    },
    {
      "latitude": 55.475693,
      "longitude": -4.519958,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 178,
      "squawk": "4502",
      "timestamp": 1700132880,
      "ems": null
    },
    {
      "latitude": 55.473415,
      "longitude": -4.520273,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 186,
      "squawk": "4502",
      "timestamp": 1700132883,
      "ems": null
    },
    {
      "latitude": 55.471115,
      "longitude": -4.521124,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 194,
      "squawk": "4502",
      "timestamp": 1700132886,
      "ems": null
    },
    {
      "latitude": 55.468948,
      "longitude": -4.522591,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 203,
      "squawk": "4502",
      "timestamp": 1700132889,
      "ems": null
    },
    {
      "latitude": 55.467087,
      "longitude": -4.524536,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 212,
      "squawk": "4502",
      "timestamp": 1700132892,
      "ems": null
    },
    {
      "latitude": 55.465302,
      "longitude": -4.527033,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 219,
      "squawk": "4502",
      "timestamp": 1700132895,
      "ems": null
    },
    {
      "latitude": 55.463825,
      "longitude": -4.529715,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 227,
      "squawk": "4502",
      "timestamp": 1700132898,
      "ems": null
    },
    {
      "latitude": 55.462521,
      "longitude": -4.53289,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 235,
      "squawk": "4502",
      "timestamp": 1700132901,
      "ems": null
    },
    {
      "latitude": 55.461357,
      "longitude": -4.536839,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 243,
      "squawk": "4502",
      "timestamp": 1700132905,
      "ems": null
    },
    {
      "latitude": 55.460632,
      "longitude": -4.540184,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 249,
      "squawk": "4502",
      "timestamp": 1700132907,
      "ems": null
    },
    {
      "latitude": 55.459991,
      "longitude": -4.543929,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 254,
      "squawk": "4502",
      "timestamp": 1700132910,
      "ems": null
    },
    {
      "latitude": 55.459534,
      "longitude": -4.547841,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 259,
      "squawk": "4502",
      "timestamp": 1700132913,
      "ems": null
    },
    {
      "latitude": 55.459213,
      "longitude": -4.551919,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 262,
      "squawk": "4502",
      "timestamp": 1700132916,
      "ems": null
    },
    {
      "latitude": 55.45903,
      "longitude": -4.556065,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 266,
      "squawk": "4502",
      "timestamp": 1700132919,
      "ems": null
    },
    {
      "latitude": 55.458984,
      "longitude": -4.560099,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 269,
      "squawk": "4502",
      "timestamp": 1700132922,
      "ems": null
    },
    {
      "latitude": 55.459126,
      "longitude": -4.564133,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 274,
      "squawk": "4502",
      "timestamp": 1700132926,
      "ems": null
    },
    {
      "latitude": 55.459442,
      "longitude": -4.567982,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 278,
      "squawk": "4502",
      "timestamp": 1700132929,
      "ems": null
    },
    {
      "latitude": 55.459854,
      "longitude": -4.571811,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 281,
      "squawk": "4502",
      "timestamp": 1700132931,
      "ems": null
    },
    {
      "latitude": 55.460289,
      "longitude": -4.575548,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 281,
      "squawk": "4502",
      "timestamp": 1700132934,
      "ems": null
    },
    {
      "latitude": 55.460709,
      "longitude": -4.579668,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 280,
      "squawk": "4502",
      "timestamp": 1700132938,
      "ems": null
    },
    {
      "latitude": 55.461174,
      "longitude": -4.583702,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 281,
      "squawk": "4502",
      "timestamp": 1700132941,
      "ems": null
    },
    {
      "latitude": 55.461639,
      "longitude": -4.587736,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 281,
      "squawk": "4502",
      "timestamp": 1700132944,
      "ems": null
    },
    {
      "latitude": 55.462105,
      "longitude": -4.591684,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 281,
      "squawk": "4502",
      "timestamp": 1700132947,
      "ems": null
    },
    {
      "latitude": 55.462521,
      "longitude": -4.595375,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 281,
      "squawk": "4502",
      "timestamp": 1700132950,
      "ems": null
    },
    {
      "latitude": 55.463058,
      "longitude": -4.599526,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 283,
      "squawk": "4502",
      "timestamp": 1700132953,
      "ems": null
    },
    {
      "latitude": 55.463688,
      "longitude": -4.603186,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 286,
      "squawk": "4502",
      "timestamp": 1700132956,
      "ems": null
    },
    {
      "latitude": 55.464478,
      "longitude": -4.606533,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 292,
      "squawk": "4502",
      "timestamp": 1700132959,
      "ems": null
    },
    {
      "latitude": 55.465595,
      "longitude": -4.61031,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 305.6,
        "kts": 165,
        "mph": 189.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 298,
      "squawk": "4502",
      "timestamp": 1700132962,
      "ems": null
    },
    {
      "latitude": 55.466858,
      "longitude": -4.614258,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 298,
      "squawk": "4502",
      "timestamp": 1700132965,
      "ems": null
    },
    {
      "latitude": 55.467773,
      "longitude": -4.617337,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 298,
      "squawk": "4502",
      "timestamp": 1700132968,
      "ems": null
    },
    {
      "latitude": 55.468994,
      "longitude": -4.621382,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 297,
      "squawk": "4502",
      "timestamp": 1700132971,
      "ems": null
    },
    {
      "latitude": 55.470112,
      "longitude": -4.624987,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 298,
      "squawk": "4502",
      "timestamp": 1700132974,
      "ems": null
    },
    {
      "latitude": 55.471207,
      "longitude": -4.628573,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 305.6,
        "kts": 165,
        "mph": 189.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 297,
      "squawk": "4502",
      "timestamp": 1700132977,
      "ems": null
    },
    {
      "latitude": 55.47216,
      "longitude": -4.632025,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 296,
      "squawk": "4502",
      "timestamp": 1700132980,
      "ems": null
    },
    {
      "latitude": 55.473137,
      "longitude": -4.63563,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 294,
      "squawk": "4502",
      "timestamp": 1700132983,
      "ems": null
    },
    {
      "latitude": 55.474068,
      "longitude": -4.639235,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 294,
      "squawk": "4502",
      "timestamp": 1700132986,
      "ems": null
    },
    {
      "latitude": 55.47686,
      "longitude": -4.649963,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 294.5,
        "kts": 159,
        "mph": 183
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700132995,
      "ems": null
    },
    {
      "latitude": 55.478767,
      "longitude": -4.65683,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700133001,
      "ems": null
    },
    {
      "latitude": 55.481888,
      "longitude": -4.66773,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 296,
      "squawk": "4502",
      "timestamp": 1700133010,
      "ems": null
    },
    {
      "latitude": 55.48494,
      "longitude": -4.678095,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 297,
      "squawk": "4502",
      "timestamp": 1700133019,
      "ems": null
    },
    {
      "latitude": 55.488079,
      "longitude": -4.688673,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 300,
        "kts": 162,
        "mph": 186.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 298,
      "squawk": "4502",
      "timestamp": 1700133028,
      "ems": null
    },
    {
      "latitude": 55.491486,
      "longitude": -4.699235,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700133038,
      "ems": null
    },
    {
      "latitude": 55.49263,
      "longitude": -4.702481,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700133041,
      "ems": null
    },
    {
      "latitude": 55.493618,
      "longitude": -4.705324,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 302,
      "squawk": "4502",
      "timestamp": 1700133043,
      "ems": null
    },
    {
      "latitude": 55.494877,
      "longitude": -4.708586,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 305,
      "squawk": "4502",
      "timestamp": 1700133047,
      "ems": null
    },
    {
      "latitude": 55.496273,
      "longitude": -4.711418,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 311,
      "squawk": "4502",
      "timestamp": 1700133049,
      "ems": null
    },
    {
      "latitude": 55.497849,
      "longitude": -4.713884,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 320,
      "squawk": "4502",
      "timestamp": 1700133052,
      "ems": null
    },
    {
      "latitude": 55.499313,
      "longitude": -4.715631,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 324,
      "squawk": "4502",
      "timestamp": 1700133055,
      "ems": null
    },
    {
      "latitude": 55.501602,
      "longitude": -4.717629,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 335,
      "squawk": "4502",
      "timestamp": 1700133059,
      "ems": null
    },
    {
      "latitude": 55.503708,
      "longitude": -4.718794,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 343,
      "squawk": "4502",
      "timestamp": 1700133062,
      "ems": null
    },
    {
      "latitude": 55.505997,
      "longitude": -4.719377,
      "altitude": {
        "feet": 1475,
        "meters": 450
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 351,
      "squawk": "4502",
      "timestamp": 1700133065,
      "ems": null
    },
    {
      "latitude": 55.508011,
      "longitude": -4.71946,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 359,
      "squawk": "4502",
      "timestamp": 1700133068,
      "ems": null
    },
    {
      "latitude": 55.51038,
      "longitude": -4.718885,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 7,
      "squawk": "4502",
      "timestamp": 1700133071,
      "ems": null
    },
    {
      "latitude": 55.512177,
      "longitude": -4.718045,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 15,
      "squawk": "4502",
      "timestamp": 1700133074,
      "ems": null
    },
    {
      "latitude": 55.514145,
      "longitude": -4.71663,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 23,
      "squawk": "4502",
      "timestamp": 1700133077,
      "ems": null
    },
    {
      "latitude": 55.516151,
      "longitude": -4.71468,
      "altitude": {
        "feet": 1375,
        "meters": 419
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 28,
      "squawk": "4502",
      "timestamp": 1700133080,
      "ems": null
    },
    {
      "latitude": 55.518059,
      "longitude": -4.71262,
      "altitude": {
        "feet": 1375,
        "meters": 419
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 32,
      "squawk": "4502",
      "timestamp": 1700133083,
      "ems": null
    },
    {
      "latitude": 55.519821,
      "longitude": -4.710555,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 279.7,
        "kts": 151,
        "mph": 173.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 34,
      "squawk": "4502",
      "timestamp": 1700133086,
      "ems": null
    },
    {
      "latitude": 55.521332,
      "longitude": -4.708641,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 34,
      "squawk": "4502",
      "timestamp": 1700133089,
      "ems": null
    },
    {
      "latitude": 55.523178,
      "longitude": -4.706354,
      "altitude": {
        "feet": 1325,
        "meters": 404
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 35,
      "squawk": "4502",
      "timestamp": 1700133092,
      "ems": null
    },
    {
      "latitude": 55.524857,
      "longitude": -4.704208,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 36,
      "squawk": "4502",
      "timestamp": 1700133095,
      "ems": null
    },
    {
      "latitude": 55.526505,
      "longitude": -4.701899,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 37,
      "squawk": "4502",
      "timestamp": 1700133098,
      "ems": null
    },
    {
      "latitude": 55.527882,
      "longitude": -4.700089,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 37,
      "squawk": "4502",
      "timestamp": 1700133101,
      "ems": null
    },
    {
      "latitude": 55.529526,
      "longitude": -4.697654,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 39,
      "squawk": "4502",
      "timestamp": 1700133104,
      "ems": null
    },
    {
      "latitude": 55.531128,
      "longitude": -4.694908,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 46,
      "squawk": "4502",
      "timestamp": 1700133107,
      "ems": null
    },
    {
      "latitude": 55.532257,
      "longitude": -4.692278,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 52,
      "squawk": "4502",
      "timestamp": 1700133110,
      "ems": null
    },
    {
      "latitude": 55.533234,
      "longitude": -4.689188,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 62,
      "squawk": "4502",
      "timestamp": 1700133113,
      "ems": null
    },
    {
      "latitude": 55.534027,
      "longitude": -4.685669,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 70,
      "squawk": "4502",
      "timestamp": 1700133116,
      "ems": null
    },
    {
      "latitude": 55.534515,
      "longitude": -4.682257,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 77,
      "squawk": "4502",
      "timestamp": 1700133119,
      "ems": null
    },
    {
      "latitude": 55.534744,
      "longitude": -4.679427,
      "altitude": {
        "feet": 1050,
        "meters": 320
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 82,
      "squawk": "4502",
      "timestamp": 1700133122,
      "ems": null
    },
    {
      "latitude": 55.534836,
      "longitude": -4.675682,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 88,
      "squawk": "4502",
      "timestamp": 1700133125,
      "ems": null
    },
    {
      "latitude": 55.534725,
      "longitude": -4.672279,
      "altitude": {
        "feet": 950,
        "meters": 290
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 92,
      "squawk": "4502",
      "timestamp": 1700133128,
      "ems": null
    },
    {
      "latitude": 55.534397,
      "longitude": -4.669275,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 99,
      "squawk": "4502",
      "timestamp": 1700133131,
      "ems": null
    },
    {
      "latitude": 55.533783,
      "longitude": -4.665777,
      "altitude": {
        "feet": 825,
        "meters": 251
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 109,
      "squawk": "4502",
      "timestamp": 1700133134,
      "ems": null
    },
    {
      "latitude": 55.532955,
      "longitude": -4.66301,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 117,
      "squawk": "4502",
      "timestamp": 1700133137,
      "ems": null
    },
    {
      "latitude": 55.53207,
      "longitude": -4.660263,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700133140,
      "ems": null
    },
    {
      "latitude": 55.531036,
      "longitude": -4.657537,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 122,
      "squawk": "4502",
      "timestamp": 1700133143,
      "ems": null
    },
    {
      "latitude": 55.530029,
      "longitude": -4.654541,
      "altitude": {
        "feet": 675,
        "meters": 206
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700133146,
      "ems": null
    },
    {
      "latitude": 55.529186,
      "longitude": -4.652109,
      "altitude": {
        "feet": 625,
        "meters": 191
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700133149,
      "ems": null
    },
    {
      "latitude": 55.528206,
      "longitude": -4.649277,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700133152,
      "ems": null
    },
    {
      "latitude": 55.527328,
      "longitude": -4.646634,
      "altitude": {
        "feet": 550,
        "meters": 168
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 119,
      "squawk": "4502",
      "timestamp": 1700133155,
      "ems": null
    },
    {
      "latitude": 55.526485,
      "longitude": -4.643955,
      "altitude": {
        "feet": 525,
        "meters": 160
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700133158,
      "ems": null
    },
    {
      "latitude": 55.525555,
      "longitude": -4.641209,
      "altitude": {
        "feet": 475,
        "meters": 145
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700133161,
      "ems": null
    },
    {
      "latitude": 55.522659,
      "longitude": -4.632568,
      "altitude": {
        "feet": 550,
        "meters": 168
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 2240,
        "ms": 11.4
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700133171,
      "ems": null
    },
    {
      "latitude": 55.519913,
      "longitude": -4.623996,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 2368,
        "ms": 12
      },
      "heading": 119,
      "squawk": "4502",
      "timestamp": 1700133179,
      "ems": null
    },
    {
      "latitude": 55.516891,
      "longitude": -4.614424,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": 1536,
        "ms": 7.8
      },
      "heading": 119,
      "squawk": "4502",
      "timestamp": 1700133188,
      "ems": null
    },
    {
      "latitude": 55.513359,
      "longitude": -4.603443,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 326,
        "kts": 176,
        "mph": 202.5
      },
      "verticalSpeed": {
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 119,
      "squawk": "4502",
      "timestamp": 1700133198,
      "ems": null
    },
    {
      "latitude": 55.509445,
      "longitude": -4.591427,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 357.4,
        "kts": 193,
        "mph": 222.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700133207,
      "ems": null
    },
    {
      "latitude": 55.505302,
      "longitude": -4.578981,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 364.8,
        "kts": 197,
        "mph": 226.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700133216,
      "ems": null
    },
    {
      "latitude": 55.50087,
      "longitude": -4.565985,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 372.3,
        "kts": 201,
        "mph": 231.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700133225,
      "ems": null
    },
    {
      "latitude": 55.496552,
      "longitude": -4.553404,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 374.1,
        "kts": 202,
        "mph": 232.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700133234,
      "ems": null
    },
    {
      "latitude": 55.493179,
      "longitude": -4.545094,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 374.1,
        "kts": 202,
        "mph": 232.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 127,
      "squawk": "4502",
      "timestamp": 1700133240,
      "ems": null
    },
    {
      "latitude": 55.491337,
      "longitude": -4.541645,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 370.4,
        "kts": 200,
        "mph": 230.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 135,
      "squawk": "4502",
      "timestamp": 1700133243,
      "ems": null
    },
    {
      "latitude": 55.489151,
      "longitude": -4.538519,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 366.7,
        "kts": 198,
        "mph": 227.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 140,
      "squawk": "4502",
      "timestamp": 1700133246,
      "ems": null
    },
    {
      "latitude": 55.486961,
      "longitude": -4.53598,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 364.8,
        "kts": 197,
        "mph": 226.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 147,
      "squawk": "4502",
      "timestamp": 1700133249,
      "ems": null
    },
    {
      "latitude": 55.484253,
      "longitude": -4.533691,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 363,
        "kts": 196,
        "mph": 225.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 156,
      "squawk": "4502",
      "timestamp": 1700133252,
      "ems": null
    },
    {
      "latitude": 55.481964,
      "longitude": -4.53236,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 363,
        "kts": 196,
        "mph": 225.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 161,
      "squawk": "4502",
      "timestamp": 1700133255,
      "ems": null
    },
    {
      "latitude": 55.478851,
      "longitude": -4.531195,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 359.3,
        "kts": 194,
        "mph": 223.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 171,
      "squawk": "4502",
      "timestamp": 1700133258,
      "ems": null
    },
    {
      "latitude": 55.476151,
      "longitude": -4.530861,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 359.3,
        "kts": 194,
        "mph": 223.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 177,
      "squawk": "4502",
      "timestamp": 1700133261,
      "ems": null
    },
    {
      "latitude": 55.473679,
      "longitude": -4.531111,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 357.4,
        "kts": 193,
        "mph": 222.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 185,
      "squawk": "4502",
      "timestamp": 1700133264,
      "ems": null
    },
    {
      "latitude": 55.470993,
      "longitude": -4.531946,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 357.4,
        "kts": 193,
        "mph": 222.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 192,
      "squawk": "4502",
      "timestamp": 1700133267,
      "ems": null
    },
    {
      "latitude": 55.468296,
      "longitude": -4.533405,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 359.3,
        "kts": 194,
        "mph": 223.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 199,
      "squawk": "4502",
      "timestamp": 1700133271,
      "ems": null
    },
    {
      "latitude": 55.465733,
      "longitude": -4.535465,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 359.3,
        "kts": 194,
        "mph": 223.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "4502",
      "timestamp": 1700133274,
      "ems": null
    },
    {
      "latitude": 55.463837,
      "longitude": -4.537603,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 359.3,
        "kts": 194,
        "mph": 223.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "4502",
      "timestamp": 1700133276,
      "ems": null
    },
    {
      "latitude": 55.461639,
      "longitude": -4.540599,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 361.1,
        "kts": 195,
        "mph": 224.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 218,
      "squawk": "4502",
      "timestamp": 1700133279,
      "ems": null
    },
    {
      "latitude": 55.459728,
      "longitude": -4.543962,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 363,
        "kts": 196,
        "mph": 225.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 227,
      "squawk": "4502",
      "timestamp": 1700133282,
      "ems": null
    },
    {
      "latitude": 55.458023,
      "longitude": -4.547841,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 363,
        "kts": 196,
        "mph": 225.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 234,
      "squawk": "4502",
      "timestamp": 1700133285,
      "ems": null
    },
    {
      "latitude": 55.456657,
      "longitude": -4.551859,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 363,
        "kts": 196,
        "mph": 225.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 241,
      "squawk": "4502",
      "timestamp": 1700133288,
      "ems": null
    },
    {
      "latitude": 55.45554,
      "longitude": -4.556408,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 364.8,
        "kts": 197,
        "mph": 226.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 248,
      "squawk": "4502",
      "timestamp": 1700133291,
      "ems": null
    },
    {
      "latitude": 55.4547,
      "longitude": -4.561386,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 366.7,
        "kts": 198,
        "mph": 227.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 255,
      "squawk": "4502",
      "timestamp": 1700133295,
      "ems": null
    },
    {
      "latitude": 55.454281,
      "longitude": -4.566021,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 366.7,
        "kts": 198,
        "mph": 227.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 262,
      "squawk": "4502",
      "timestamp": 1700133297,
      "ems": null
    },
    {
      "latitude": 55.454132,
      "longitude": -4.570895,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 368.5,
        "kts": 199,
        "mph": 229
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 269,
      "squawk": "4502",
      "timestamp": 1700133300,
      "ems": null
    },
    {
      "latitude": 55.454376,
      "longitude": -4.575634,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 368.5,
        "kts": 199,
        "mph": 229
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 276,
      "squawk": "4502",
      "timestamp": 1700133303,
      "ems": null
    },
    {
      "latitude": 55.454956,
      "longitude": -4.580633,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 368.5,
        "kts": 199,
        "mph": 229
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 283,
      "squawk": "4502",
      "timestamp": 1700133307,
      "ems": null
    },
    {
      "latitude": 55.455818,
      "longitude": -4.585161,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 366.7,
        "kts": 198,
        "mph": 227.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 289,
      "squawk": "4502",
      "timestamp": 1700133310,
      "ems": null
    },
    {
      "latitude": 55.45697,
      "longitude": -4.589455,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 366.7,
        "kts": 198,
        "mph": 227.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 295,
      "squawk": "4502",
      "timestamp": 1700133312,
      "ems": null
    },
    {
      "latitude": 55.458252,
      "longitude": -4.593783,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 364.8,
        "kts": 197,
        "mph": 226.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 298,
      "squawk": "4502",
      "timestamp": 1700133315,
      "ems": null
    },
    {
      "latitude": 55.459591,
      "longitude": -4.597778,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 359.3,
        "kts": 194,
        "mph": 223.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700133318,
      "ems": null
    },
    {
      "latitude": 55.46109,
      "longitude": -4.602106,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 353.7,
        "kts": 191,
        "mph": 219.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700133322,
      "ems": null
    },
    {
      "latitude": 55.462288,
      "longitude": -4.605675,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 346.3,
        "kts": 187,
        "mph": 215.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700133324,
      "ems": null
    },
    {
      "latitude": 55.463734,
      "longitude": -4.609795,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 340.8,
        "kts": 184,
        "mph": 211.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700133328,
      "ems": null
    },
    {
      "latitude": 55.46513,
      "longitude": -4.613829,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 335.2,
        "kts": 181,
        "mph": 208.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700133331,
      "ems": null
    },
    {
      "latitude": 55.466248,
      "longitude": -4.61709,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 329.7,
        "kts": 178,
        "mph": 204.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700133334,
      "ems": null
    },
    {
      "latitude": 55.467457,
      "longitude": -4.620609,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 322.2,
        "kts": 174,
        "mph": 200.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700133336,
      "ems": null
    },
    {
      "latitude": 55.468826,
      "longitude": -4.624661,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 318.5,
        "kts": 172,
        "mph": 197.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700133340,
      "ems": null
    },
    {
      "latitude": 55.470062,
      "longitude": -4.628241,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 316.7,
        "kts": 171,
        "mph": 196.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700133343,
      "ems": null
    },
    {
      "latitude": 55.473633,
      "longitude": -4.638727,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 307.4,
        "kts": 166,
        "mph": 191
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700133352,
      "ems": null
    },
    {
      "latitude": 55.477158,
      "longitude": -4.649131,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700133361,
      "ems": null
    },
    {
      "latitude": 55.480682,
      "longitude": -4.659618,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700133370,
      "ems": null
    },
    {
      "latitude": 55.484169,
      "longitude": -4.669876,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 294.5,
        "kts": 159,
        "mph": 183
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 301,
      "squawk": "4502",
      "timestamp": 1700133379,
      "ems": null
    },
    {
      "latitude": 55.487473,
      "longitude": -4.679146,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 302,
      "squawk": "4502",
      "timestamp": 1700133388,
      "ems": null
    },
    {
      "latitude": 55.490871,
      "longitude": -4.688416,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 303,
      "squawk": "4502",
      "timestamp": 1700133397,
      "ems": null
    },
    {
      "latitude": 55.494457,
      "longitude": -4.697342,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 307,
      "squawk": "4502",
      "timestamp": 1700133406,
      "ems": null
    },
    {
      "latitude": 55.495899,
      "longitude": -4.699831,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 313,
      "squawk": "4502",
      "timestamp": 1700133409,
      "ems": null
    },
    {
      "latitude": 55.497574,
      "longitude": -4.702065,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 323,
      "squawk": "4502",
      "timestamp": 1700133412,
      "ems": null
    },
    {
      "latitude": 55.499268,
      "longitude": -4.703563,
      "altitude": {
        "feet": 1475,
        "meters": 450
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 334,
      "squawk": "4502",
      "timestamp": 1700133415,
      "ems": null
    },
    {
      "latitude": 55.501328,
      "longitude": -4.704562,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 344,
      "squawk": "4502",
      "timestamp": 1700133418,
      "ems": null
    },
    {
      "latitude": 55.503254,
      "longitude": -4.704981,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 354,
      "squawk": "4502",
      "timestamp": 1700133421,
      "ems": null
    },
    {
      "latitude": 55.505402,
      "longitude": -4.704812,
      "altitude": {
        "feet": 1375,
        "meters": 419
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 5,
      "squawk": "4502",
      "timestamp": 1700133424,
      "ems": null
    },
    {
      "latitude": 55.507305,
      "longitude": -4.704123,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 10,
      "squawk": "4502",
      "timestamp": 1700133427,
      "ems": null
    },
    {
      "latitude": 55.509445,
      "longitude": -4.703007,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 16,
      "squawk": "4502",
      "timestamp": 1700133430,
      "ems": null
    },
    {
      "latitude": 55.511494,
      "longitude": -4.701719,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 20,
      "squawk": "4502",
      "timestamp": 1700133433,
      "ems": null
    },
    {
      "latitude": 55.513321,
      "longitude": -4.700484,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 21,
      "squawk": "4502",
      "timestamp": 1700133436,
      "ems": null
    },
    {
      "latitude": 55.515244,
      "longitude": -4.699152,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 21,
      "squawk": "4502",
      "timestamp": 1700133439,
      "ems": null
    },
    {
      "latitude": 55.516983,
      "longitude": -4.697904,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 22,
      "squawk": "4502",
      "timestamp": 1700133442,
      "ems": null
    },
    {
      "latitude": 55.518906,
      "longitude": -4.696405,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 23,
      "squawk": "4502",
      "timestamp": 1700133445,
      "ems": null
    },
    {
      "latitude": 55.520691,
      "longitude": -4.694991,
      "altitude": {
        "feet": 1225,
        "meters": 373
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 24,
      "squawk": "4502",
      "timestamp": 1700133448,
      "ems": null
    },
    {
      "latitude": 55.522575,
      "longitude": -4.69348,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 25,
      "squawk": "4502",
      "timestamp": 1700133451,
      "ems": null
    },
    {
      "latitude": 55.524391,
      "longitude": -4.691849,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 27,
      "squawk": "4502",
      "timestamp": 1700133454,
      "ems": null
    },
    {
      "latitude": 55.525909,
      "longitude": -4.690413,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 27,
      "squawk": "4502",
      "timestamp": 1700133457,
      "ems": null
    },
    {
      "latitude": 55.527882,
      "longitude": -4.688072,
      "altitude": {
        "feet": 1050,
        "meters": 320
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 35,
      "squawk": "4502",
      "timestamp": 1700133461,
      "ems": null
    },
    {
      "latitude": 55.529278,
      "longitude": -4.685669,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 46,
      "squawk": "4502",
      "timestamp": 1700133464,
      "ems": null
    },
    {
      "latitude": 55.530441,
      "longitude": -4.682837,
      "altitude": {
        "feet": 950,
        "meters": 290
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 52,
      "squawk": "4502",
      "timestamp": 1700133467,
      "ems": null
    },
    {
      "latitude": 55.531265,
      "longitude": -4.680092,
      "altitude": {
        "feet": 925,
        "meters": 282
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 65,
      "squawk": "4502",
      "timestamp": 1700133469,
      "ems": null
    },
    {
      "latitude": 55.531887,
      "longitude": -4.676485,
      "altitude": {
        "feet": 875,
        "meters": 267
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 75,
      "squawk": "4502",
      "timestamp": 1700133473,
      "ems": null
    },
    {
      "latitude": 55.532166,
      "longitude": -4.672966,
      "altitude": {
        "feet": 850,
        "meters": 259
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 85,
      "squawk": "4502",
      "timestamp": 1700133476,
      "ems": null
    },
    {
      "latitude": 55.532089,
      "longitude": -4.669855,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 92,
      "squawk": "4502",
      "timestamp": 1700133478,
      "ems": null
    },
    {
      "latitude": 55.531769,
      "longitude": -4.666359,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 99,
      "squawk": "4502",
      "timestamp": 1700133482,
      "ems": null
    },
    {
      "latitude": 55.531372,
      "longitude": -4.663353,
      "altitude": {
        "feet": 750,
        "meters": 229
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 103,
      "squawk": "4502",
      "timestamp": 1700133484,
      "ems": null
    },
    {
      "latitude": 55.530861,
      "longitude": -4.660091,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 106,
      "squawk": "4502",
      "timestamp": 1700133488,
      "ems": null
    },
    {
      "latitude": 55.530304,
      "longitude": -4.657121,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 108,
      "squawk": "4502",
      "timestamp": 1700133490,
      "ems": null
    },
    {
      "latitude": 55.529617,
      "longitude": -4.653958,
      "altitude": {
        "feet": 650,
        "meters": 198
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 111,
      "squawk": "4502",
      "timestamp": 1700133494,
      "ems": null
    },
    {
      "latitude": 55.528839,
      "longitude": -4.651045,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 114,
      "squawk": "4502",
      "timestamp": 1700133497,
      "ems": null
    },
    {
      "latitude": 55.528069,
      "longitude": -4.648418,
      "altitude": {
        "feet": 575,
        "meters": 175
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 117,
      "squawk": "4502",
      "timestamp": 1700133499,
      "ems": null
    },
    {
      "latitude": 55.527184,
      "longitude": -4.645586,
      "altitude": {
        "feet": 525,
        "meters": 160
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 118,
      "squawk": "4502",
      "timestamp": 1700133502,
      "ems": null
    },
    {
      "latitude": 55.526276,
      "longitude": -4.642889,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 119,
      "squawk": "4502",
      "timestamp": 1700133506,
      "ems": null
    },
    {
      "latitude": 55.525368,
      "longitude": -4.640265,
      "altitude": {
        "feet": 450,
        "meters": 137
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700133508,
      "ems": null
    },
    {
      "latitude": 55.524296,
      "longitude": -4.637432,
      "altitude": {
        "feet": 425,
        "meters": 130
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 123,
      "squawk": "4502",
      "timestamp": 1700133512,
      "ems": null
    },
    {
      "latitude": 55.5233,
      "longitude": -4.634732,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 123,
      "squawk": "4502",
      "timestamp": 1700133515,
      "ems": null
    },
    {
      "latitude": 55.522388,
      "longitude": -4.632282,
      "altitude": {
        "feet": 350,
        "meters": 107
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 122,
      "squawk": "4502",
      "timestamp": 1700133517,
      "ems": null
    },
    {
      "latitude": 55.521469,
      "longitude": -4.629572,
      "altitude": {
        "feet": 325,
        "meters": 99
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700133520,
      "ems": null
    },
    {
      "latitude": 55.520992,
      "longitude": -4.628162,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700133522,
      "ems": null
    },
    {
      "latitude": 55.519733,
      "longitude": -4.624557,
      "altitude": {
        "feet": 250,
        "meters": 76
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700133526,
      "ems": null
    },
    {
      "latitude": 55.517578,
      "longitude": -4.618253,
      "altitude": {
        "feet": 175,
        "meters": 53
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700133533,
      "ems": null
    },
    {
      "latitude": 55.51474,
      "longitude": -4.610013,
      "altitude": {
        "feet": 50,
        "meters": 15
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700133543,
      "ems": null
    },
    {
      "latitude": 55.512566,
      "longitude": -4.603615,
      "altitude": {
        "feet": 25,
        "meters": 8
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 121,
      "squawk": "4502",
      "timestamp": 1700133550,
      "ems": null
    },
    {
      "latitude": 55.5103,
      "longitude": -4.597113,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700133559,
      "ems": null
    },
    {
      "latitude": 55.508911,
      "longitude": -4.593143,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700133566,
      "ems": null
    },
    {
      "latitude": 55.507668,
      "longitude": -4.589518,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700133574,
      "ems": null
    },
    {
      "latitude": 55.506763,
      "longitude": -4.586917,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700133580,
      "ems": null
    },
    {
      "latitude": 55.505898,
      "longitude": -4.584367,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700133587,
      "ems": null
    },
    {
      "latitude": 55.505093,
      "longitude": -4.582071,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 70.4,
        "kts": 38,
        "mph": 43.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 123,
      "squawk": "4502",
      "timestamp": 1700133595,
      "ems": null
    },
    {
      "latitude": 55.504467,
      "longitude": -4.58029,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 48.2,
        "kts": 26,
        "mph": 29.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700133603,
      "ems": null
    },
    {
      "latitude": 55.504128,
      "longitude": -4.579282,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 25.9,
        "kts": 14,
        "mph": 16.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 120,
      "squawk": "4502",
      "timestamp": 1700133611,
      "ems": null
    },
    {
      "latitude": 55.503799,
      "longitude": -4.578948,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 20.4,
        "kts": 11,
        "mph": 12.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 171,
      "squawk": "4502",
      "timestamp": 1700133618,
      "ems": null
    },
    {
      "latitude": 55.502918,
      "longitude": -4.579593,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 205,
      "squawk": "4502",
      "timestamp": 1700133635,
      "ems": null
    },
    {
      "latitude": 55.502758,
      "longitude": -4.580009,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 247,
      "squawk": "4502",
      "timestamp": 1700133640,
      "ems": null
    },
    {
      "latitude": 55.502766,
      "longitude": -4.580355,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 25.9,
        "kts": 14,
        "mph": 16.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 275,
      "squawk": "4502",
      "timestamp": 1700133644,
      "ems": null
    },
    {
      "latitude": 55.502827,
      "longitude": -4.580591,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 27.8,
        "kts": 15,
        "mph": 17.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 292,
      "squawk": "4502",
      "timestamp": 1700133646,
      "ems": null
    },
    {
      "latitude": 55.50301,
      "longitude": -4.581174,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700133650,
      "ems": null
    },
    {
      "latitude": 55.503139,
      "longitude": -4.581535,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700133653,
      "ems": null
    },
    {
      "latitude": 55.503399,
      "longitude": -4.582298,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 44.4,
        "kts": 24,
        "mph": 27.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700133657,
      "ems": null
    },
    {
      "latitude": 55.503525,
      "longitude": -4.582651,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700133659,
      "ems": null
    },
    {
      "latitude": 55.503685,
      "longitude": -4.583109,
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
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700133662,
      "ems": null
    },
    {
      "latitude": 55.503929,
      "longitude": -4.583788,
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
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700133665,
      "ems": null
    },
    {
      "latitude": 55.504025,
      "longitude": -4.584067,
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
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700133667,
      "ems": null
    },
    {
      "latitude": 55.504139,
      "longitude": -4.584389,
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
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700133668,
      "ems": null
    },
    {
      "latitude": 55.504234,
      "longitude": -4.58467,
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
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700133670,
      "ems": null
    },
    {
      "latitude": 55.504337,
      "longitude": -4.584961,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 300,
      "squawk": "4502",
      "timestamp": 1700133671,
      "ems": null
    },
    {
      "latitude": 55.505379,
      "longitude": -4.588249,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 292,
      "squawk": "4502",
      "timestamp": 1700133687,
      "ems": null
    },
    {
      "latitude": 55.505444,
      "longitude": -4.58853,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 292,
      "squawk": "4502",
      "timestamp": 1700133688,
      "ems": null
    }
  ]
};
