import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20220403EDKBEDLN",
    callsign: "DEFCZ",
    name: "Cross Country To EDLN",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 3, 3, 8, 50).getTime(),
    arrival: new Date(2022, 3, 3, 9, 35).getTime(),
    singleEnginePistonTime: 45,
    picTime: 45,
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
      name: "Dusseldorf Monchengladbach Airport",
      code: "EDLN",
      position: {
        latitude: 51.23035,
        longitude: 6.504494
      },
    },
  },
  track: [
    {
      "latitude": 50.770103,
      "longitude": 7.157898,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 289,
      "squawk": "0",
      "timestamp": 1648976202,
      "ems": null
    },
    {
      "latitude": 50.770706,
      "longitude": 7.155663,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 292,
      "squawk": "0",
      "timestamp": 1648976208,
      "ems": null
    },
    {
      "latitude": 50.771408,
      "longitude": 7.152786,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 289,
      "squawk": "0",
      "timestamp": 1648976215,
      "ems": null
    },
    {
      "latitude": 50.772011,
      "longitude": 7.15004,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 287,
      "squawk": "0",
      "timestamp": 1648976222,
      "ems": null
    },
    {
      "latitude": 50.772152,
      "longitude": 7.1492,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 286,
      "squawk": "0",
      "timestamp": 1648976225,
      "ems": null
    },
    {
      "latitude": 50.772476,
      "longitude": 7.147598,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 285,
      "squawk": "0",
      "timestamp": 1648976228,
      "ems": null
    },
    {
      "latitude": 50.772629,
      "longitude": 7.146681,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 285,
      "squawk": "0",
      "timestamp": 1648976229,
      "ems": null
    },
    {
      "latitude": 50.77285,
      "longitude": 7.145081,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 282,
      "squawk": "0",
      "timestamp": 1648976233,
      "ems": null
    },
    {
      "latitude": 50.772995,
      "longitude": 7.143563,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 271,
      "squawk": "0",
      "timestamp": 1648976237,
      "ems": null
    },
    {
      "latitude": 50.772663,
      "longitude": 7.141418,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 249,
      "squawk": "0",
      "timestamp": 1648976241,
      "ems": null
    },
    {
      "latitude": 50.772079,
      "longitude": 7.139777,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 239,
      "squawk": "0",
      "timestamp": 1648976245,
      "ems": null
    },
    {
      "latitude": 50.771313,
      "longitude": 7.137833,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1648976249,
      "ems": null
    },
    {
      "latitude": 50.77071,
      "longitude": 7.136383,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1648976253,
      "ems": null
    },
    {
      "latitude": 50.769962,
      "longitude": 7.134628,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1648976257,
      "ems": null
    },
    {
      "latitude": 50.769173,
      "longitude": 7.132568,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1648976261,
      "ems": null
    },
    {
      "latitude": 50.76852,
      "longitude": 7.130432,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1648976265,
      "ems": null
    },
    {
      "latitude": 50.767822,
      "longitude": 7.128448,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1648976269,
      "ems": null
    },
    {
      "latitude": 50.7668,
      "longitude": 7.125702,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1648976275,
      "ems": null
    },
    {
      "latitude": 50.765682,
      "longitude": 7.122955,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1648976281,
      "ems": null
    },
    {
      "latitude": 50.764481,
      "longitude": 7.120106,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1648976287,
      "ems": null
    },
    {
      "latitude": 50.763821,
      "longitude": 7.118683,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1648976290,
      "ems": null
    },
    {
      "latitude": 50.763199,
      "longitude": 7.117359,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1648976293,
      "ems": null
    },
    {
      "latitude": 50.762558,
      "longitude": 7.115949,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1648976296,
      "ems": null
    },
    {
      "latitude": 50.761917,
      "longitude": 7.114464,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1648976299,
      "ems": null
    },
    {
      "latitude": 50.761307,
      "longitude": 7.11319,
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1648976302,
      "ems": null
    },
    {
      "latitude": 50.759811,
      "longitude": 7.110158,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1648976308,
      "ems": null
    },
    {
      "latitude": 50.758419,
      "longitude": 7.107162,
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1648976314,
      "ems": null
    },
    {
      "latitude": 50.757114,
      "longitude": 7.104416,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1648976320,
      "ems": null
    },
    {
      "latitude": 50.755486,
      "longitude": 7.101135,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1648976326,
      "ems": null
    },
    {
      "latitude": 50.754044,
      "longitude": 7.098281,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1648976332,
      "ems": null
    },
    {
      "latitude": 50.752441,
      "longitude": 7.095164,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1648976338,
      "ems": null
    },
    {
      "latitude": 50.751251,
      "longitude": 7.09212,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1648976343,
      "ems": null
    },
    {
      "latitude": 50.751068,
      "longitude": 7.090487,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1648976347,
      "ems": null
    },
    {
      "latitude": 50.751068,
      "longitude": 7.088557,
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1648976350,
      "ems": null
    },
    {
      "latitude": 50.751434,
      "longitude": 7.086639,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1648976352,
      "ems": null
    },
    {
      "latitude": 50.751995,
      "longitude": 7.085037,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1648976355,
      "ems": null
    },
    {
      "latitude": 50.75288,
      "longitude": 7.083511,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1648976358,
      "ems": null
    },
    {
      "latitude": 50.753815,
      "longitude": 7.082396,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1648976362,
      "ems": null
    },
    {
      "latitude": 50.754833,
      "longitude": 7.081451,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1648976365,
      "ems": null
    },
    {
      "latitude": 50.756012,
      "longitude": 7.08054,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1648976367,
      "ems": null
    },
    {
      "latitude": 50.757114,
      "longitude": 7.079697,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1648976370,
      "ems": null
    },
    {
      "latitude": 50.758186,
      "longitude": 7.078857,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1648976374,
      "ems": null
    },
    {
      "latitude": 50.759125,
      "longitude": 7.07809,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1648976376,
      "ems": null
    },
    {
      "latitude": 50.760139,
      "longitude": 7.077332,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1648976379,
      "ems": null
    },
    {
      "latitude": 50.761398,
      "longitude": 7.076569,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1648976382,
      "ems": null
    },
    {
      "latitude": 50.762516,
      "longitude": 7.076035,
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1648976385,
      "ems": null
    },
    {
      "latitude": 50.763657,
      "longitude": 7.075418,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1648976389,
      "ems": null
    },
    {
      "latitude": 50.764702,
      "longitude": 7.074814,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1648976392,
      "ems": null
    },
    {
      "latitude": 50.76582,
      "longitude": 7.074203,
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1648976394,
      "ems": null
    },
    {
      "latitude": 50.766937,
      "longitude": 7.073669,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1648976397,
      "ems": null
    },
    {
      "latitude": 50.768055,
      "longitude": 7.073212,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1648976400,
      "ems": null
    },
    {
      "latitude": 50.769127,
      "longitude": 7.072906,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1648976403,
      "ems": null
    },
    {
      "latitude": 50.770336,
      "longitude": 7.072525,
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1648976407,
      "ems": null
    },
    {
      "latitude": 50.771439,
      "longitude": 7.072226,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1648976409,
      "ems": null
    },
    {
      "latitude": 50.772572,
      "longitude": 7.071915,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1648976412,
      "ems": null
    },
    {
      "latitude": 50.773594,
      "longitude": 7.071686,
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1648976415,
      "ems": null
    },
    {
      "latitude": 50.774807,
      "longitude": 7.071304,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1648976418,
      "ems": null
    },
    {
      "latitude": 50.775879,
      "longitude": 7.070964,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1648976422,
      "ems": null
    },
    {
      "latitude": 50.778065,
      "longitude": 7.06955,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1648976427,
      "ems": null
    },
    {
      "latitude": 50.778996,
      "longitude": 7.068863,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1648976430,
      "ems": null
    },
    {
      "latitude": 50.780113,
      "longitude": 7.0681,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1648976434,
      "ems": null
    },
    {
      "latitude": 50.781143,
      "longitude": 7.067401,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1648976437,
      "ems": null
    },
    {
      "latitude": 50.781975,
      "longitude": 7.066803,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1648976440,
      "ems": null
    },
    {
      "latitude": 50.783047,
      "longitude": 7.065964,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1648976443,
      "ems": null
    },
    {
      "latitude": 50.784069,
      "longitude": 7.065201,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1648976446,
      "ems": null
    },
    {
      "latitude": 50.785034,
      "longitude": 7.064432,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1648976449,
      "ems": null
    },
    {
      "latitude": 50.786072,
      "longitude": 7.063751,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1648976452,
      "ems": null
    },
    {
      "latitude": 50.788212,
      "longitude": 7.062225,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1648976458,
      "ems": null
    },
    {
      "latitude": 50.790215,
      "longitude": 7.060699,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1648976464,
      "ems": null
    },
    {
      "latitude": 50.791191,
      "longitude": 7.059784,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1648976467,
      "ems": null
    },
    {
      "latitude": 50.792217,
      "longitude": 7.058792,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1648976469,
      "ems": null
    },
    {
      "latitude": 50.793228,
      "longitude": 7.057825,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1648976473,
      "ems": null
    },
    {
      "latitude": 50.795288,
      "longitude": 7.055969,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1648976479,
      "ems": null
    },
    {
      "latitude": 50.797531,
      "longitude": 7.054188,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1648976485,
      "ems": null
    },
    {
      "latitude": 50.79982,
      "longitude": 7.052703,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1648976491,
      "ems": null
    },
    {
      "latitude": 50.800922,
      "longitude": 7.052002,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1648976494,
      "ems": null
    },
    {
      "latitude": 50.802063,
      "longitude": 7.051144,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1648976497,
      "ems": null
    },
    {
      "latitude": 50.803253,
      "longitude": 7.050328,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1648976500,
      "ems": null
    },
    {
      "latitude": 50.804413,
      "longitude": 7.049561,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1648976503,
      "ems": null
    },
    {
      "latitude": 50.805405,
      "longitude": 7.048917,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1648976506,
      "ems": null
    },
    {
      "latitude": 50.807671,
      "longitude": 7.047501,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1648976512,
      "ems": null
    },
    {
      "latitude": 50.809937,
      "longitude": 7.046096,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1648976518,
      "ems": null
    },
    {
      "latitude": 50.812271,
      "longitude": 7.044686,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1648976524,
      "ems": null
    },
    {
      "latitude": 50.813492,
      "longitude": 7.043991,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1648976527,
      "ems": null
    },
    {
      "latitude": 50.81456,
      "longitude": 7.04335,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1648976530,
      "ems": null
    },
    {
      "latitude": 50.816711,
      "longitude": 7.042162,
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1648976536,
      "ems": null
    },
    {
      "latitude": 50.817993,
      "longitude": 7.041568,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1648976539,
      "ems": null
    },
    {
      "latitude": 50.819031,
      "longitude": 7.041092,
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1648976542,
      "ems": null
    },
    {
      "latitude": 50.820286,
      "longitude": 7.040482,
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1648976545,
      "ems": null
    },
    {
      "latitude": 50.821472,
      "longitude": 7.040009,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1648976548,
      "ems": null
    },
    {
      "latitude": 50.822662,
      "longitude": 7.03949,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1648976551,
      "ems": null
    },
    {
      "latitude": 50.824814,
      "longitude": 7.038451,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1648976556,
      "ems": null
    },
    {
      "latitude": 50.827084,
      "longitude": 7.036896,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1648976563,
      "ems": null
    },
    {
      "latitude": 50.82806,
      "longitude": 7.03598,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1648976566,
      "ems": null
    },
    {
      "latitude": 50.829071,
      "longitude": 7.034887,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1648976569,
      "ems": null
    },
    {
      "latitude": 50.829941,
      "longitude": 7.0337,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1648976572,
      "ems": null
    },
    {
      "latitude": 50.830853,
      "longitude": 7.032471,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1648976575,
      "ems": null
    },
    {
      "latitude": 50.831772,
      "longitude": 7.03125,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1648976578,
      "ems": null
    },
    {
      "latitude": 50.832642,
      "longitude": 7.030211,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1648976581,
      "ems": null
    },
    {
      "latitude": 50.833694,
      "longitude": 7.02932,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1648976584,
      "ems": null
    },
    {
      "latitude": 50.836533,
      "longitude": 7.027464,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1648976592,
      "ems": null
    },
    {
      "latitude": 50.838135,
      "longitude": 7.026648,
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1648976596,
      "ems": null
    },
    {
      "latitude": 50.839558,
      "longitude": 7.026062,
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1648976600,
      "ems": null
    },
    {
      "latitude": 50.840286,
      "longitude": 7.025831,
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1648976604,
      "ems": null
    },
    {
      "latitude": 50.842537,
      "longitude": 7.02507,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1648976608,
      "ems": null
    },
    {
      "latitude": 50.843472,
      "longitude": 7.024841,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1648976612,
      "ems": null
    },
    {
      "latitude": 50.845734,
      "longitude": 7.024198,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1648976616,
      "ems": null
    },
    {
      "latitude": 50.846123,
      "longitude": 7.024078,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1648976620,
      "ems": null
    },
    {
      "latitude": 50.850311,
      "longitude": 7.021971,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1648976628,
      "ems": null
    },
    {
      "latitude": 50.851685,
      "longitude": 7.02108,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1648976632,
      "ems": null
    },
    {
      "latitude": 50.852547,
      "longitude": 7.020569,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1648976636,
      "ems": null
    },
    {
      "latitude": 50.854202,
      "longitude": 7.019521,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1648976640,
      "ems": null
    },
    {
      "latitude": 50.855854,
      "longitude": 7.018661,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1648976644,
      "ems": null
    },
    {
      "latitude": 50.857342,
      "longitude": 7.017899,
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1648976648,
      "ems": null
    },
    {
      "latitude": 50.860382,
      "longitude": 7.016552,
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1648976656,
      "ems": null
    },
    {
      "latitude": 50.863174,
      "longitude": 7.014771,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1648976664,
      "ems": null
    },
    {
      "latitude": 50.86586,
      "longitude": 7.012939,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1648976672,
      "ems": null
    },
    {
      "latitude": 50.867256,
      "longitude": 7.011871,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1648976676,
      "ems": null
    },
    {
      "latitude": 50.868748,
      "longitude": 7.010803,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1648976680,
      "ems": null
    },
    {
      "latitude": 50.870911,
      "longitude": 7.009055,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1648976688,
      "ems": null
    },
    {
      "latitude": 50.873917,
      "longitude": 7.00676,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1648976695,
      "ems": null
    },
    {
      "latitude": 50.876011,
      "longitude": 7.00531,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1648976701,
      "ems": null
    },
    {
      "latitude": 50.87722,
      "longitude": 7.004547,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1648976704,
      "ems": null
    },
    {
      "latitude": 50.878372,
      "longitude": 7.003859,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1648976707,
      "ems": null
    },
    {
      "latitude": 50.880478,
      "longitude": 7.002522,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1648976713,
      "ems": null
    },
    {
      "latitude": 50.882767,
      "longitude": 7.000667,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1648976719,
      "ems": null
    },
    {
      "latitude": 50.884781,
      "longitude": 6.998885,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1648976725,
      "ems": null
    },
    {
      "latitude": 50.886948,
      "longitude": 6.99707,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1648976731,
      "ems": null
    },
    {
      "latitude": 50.887974,
      "longitude": 6.996307,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1648976734,
      "ems": null
    },
    {
      "latitude": 50.888992,
      "longitude": 6.99547,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1648976737,
      "ems": null
    },
    {
      "latitude": 50.891052,
      "longitude": 6.993911,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1648976743,
      "ems": null
    },
    {
      "latitude": 50.892117,
      "longitude": 6.993256,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1648976746,
      "ems": null
    },
    {
      "latitude": 50.893188,
      "longitude": 6.992645,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1648976749,
      "ems": null
    },
    {
      "latitude": 50.894306,
      "longitude": 6.991959,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1648976752,
      "ems": null
    },
    {
      "latitude": 50.89547,
      "longitude": 6.991272,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1648976755,
      "ems": null
    },
    {
      "latitude": 50.896492,
      "longitude": 6.990738,
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1648976758,
      "ems": null
    },
    {
      "latitude": 50.89761,
      "longitude": 6.990128,
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1648976761,
      "ems": null
    },
    {
      "latitude": 50.898819,
      "longitude": 6.989517,
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1648976764,
      "ems": null
    },
    {
      "latitude": 50.899937,
      "longitude": 6.989059,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1648976767,
      "ems": null
    },
    {
      "latitude": 50.900913,
      "longitude": 6.988602,
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1648976770,
      "ems": null
    },
    {
      "latitude": 50.903091,
      "longitude": 6.987156,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1648976776,
      "ems": null
    },
    {
      "latitude": 50.904079,
      "longitude": 6.986389,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1648976779,
      "ems": null
    },
    {
      "latitude": 50.90506,
      "longitude": 6.985597,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1648976782,
      "ems": null
    },
    {
      "latitude": 50.906036,
      "longitude": 6.984787,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1648976785,
      "ems": null
    },
    {
      "latitude": 50.907059,
      "longitude": 6.984024,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1648976788,
      "ems": null
    },
    {
      "latitude": 50.90799,
      "longitude": 6.983222,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1648976791,
      "ems": null
    },
    {
      "latitude": 50.909088,
      "longitude": 6.982405,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1648976794,
      "ems": null
    },
    {
      "latitude": 50.910133,
      "longitude": 6.981583,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1648976797,
      "ems": null
    },
    {
      "latitude": 50.911064,
      "longitude": 6.98082,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1648976800,
      "ems": null
    },
    {
      "latitude": 50.913116,
      "longitude": 6.979436,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1648976806,
      "ems": null
    },
    {
      "latitude": 50.915161,
      "longitude": 6.978073,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1648976812,
      "ems": null
    },
    {
      "latitude": 50.91721,
      "longitude": 6.9767,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1648976818,
      "ems": null
    },
    {
      "latitude": 50.918289,
      "longitude": 6.976021,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1648976821,
      "ems": null
    },
    {
      "latitude": 50.919388,
      "longitude": 6.975353,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1648976824,
      "ems": null
    },
    {
      "latitude": 50.920376,
      "longitude": 6.974792,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1648976827,
      "ems": null
    },
    {
      "latitude": 50.92247,
      "longitude": 6.973419,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1648976833,
      "ems": null
    },
    {
      "latitude": 50.924789,
      "longitude": 6.972087,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1648976839,
      "ems": null
    },
    {
      "latitude": 50.926937,
      "longitude": 6.970673,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1648976845,
      "ems": null
    },
    {
      "latitude": 50.929127,
      "longitude": 6.969147,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1648976851,
      "ems": null
    },
    {
      "latitude": 50.930237,
      "longitude": 6.968301,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1648976854,
      "ems": null
    },
    {
      "latitude": 50.93248,
      "longitude": 6.966668,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1648976861,
      "ems": null
    },
    {
      "latitude": 50.934479,
      "longitude": 6.965179,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1648976867,
      "ems": null
    },
    {
      "latitude": 50.936527,
      "longitude": 6.963654,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1648976873,
      "ems": null
    },
    {
      "latitude": 50.938854,
      "longitude": 6.961975,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1648976879,
      "ems": null
    },
    {
      "latitude": 50.941132,
      "longitude": 6.960284,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1648976885,
      "ems": null
    },
    {
      "latitude": 50.943466,
      "longitude": 6.958651,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1648976891,
      "ems": null
    },
    {
      "latitude": 50.945744,
      "longitude": 6.95694,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1648976897,
      "ems": null
    },
    {
      "latitude": 50.946716,
      "longitude": 6.956053,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1648976900,
      "ems": null
    },
    {
      "latitude": 50.947792,
      "longitude": 6.954956,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1648976903,
      "ems": null
    },
    {
      "latitude": 50.948868,
      "longitude": 6.953826,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1648976906,
      "ems": null
    },
    {
      "latitude": 50.951145,
      "longitude": 6.951904,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1648976912,
      "ems": null
    },
    {
      "latitude": 50.952301,
      "longitude": 6.951228,
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1648976915,
      "ems": null
    },
    {
      "latitude": 50.953518,
      "longitude": 6.950836,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1648976918,
      "ems": null
    },
    {
      "latitude": 50.954777,
      "longitude": 6.950531,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1648976921,
      "ems": null
    },
    {
      "latitude": 50.956146,
      "longitude": 6.950114,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1648976924,
      "ems": null
    },
    {
      "latitude": 50.957428,
      "longitude": 6.949844,
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1648976927,
      "ems": null
    },
    {
      "latitude": 50.958527,
      "longitude": 6.949595,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1648976930,
      "ems": null
    },
    {
      "latitude": 50.959759,
      "longitude": 6.949158,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1648976933,
      "ems": null
    },
    {
      "latitude": 50.960861,
      "longitude": 6.948555,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1648976936,
      "ems": null
    },
    {
      "latitude": 50.961899,
      "longitude": 6.947937,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1648976939,
      "ems": null
    },
    {
      "latitude": 50.963017,
      "longitude": 6.947174,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1648976942,
      "ems": null
    },
    {
      "latitude": 50.964134,
      "longitude": 6.946259,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1648976945,
      "ems": null
    },
    {
      "latitude": 50.965164,
      "longitude": 6.94529,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1648976948,
      "ems": null
    },
    {
      "latitude": 50.96608,
      "longitude": 6.944102,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1648976951,
      "ems": null
    },
    {
      "latitude": 50.966972,
      "longitude": 6.942673,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1648976954,
      "ems": null
    },
    {
      "latitude": 50.96767,
      "longitude": 6.941299,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648976957,
      "ems": null
    },
    {
      "latitude": 50.968369,
      "longitude": 6.939648,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648976960,
      "ems": null
    },
    {
      "latitude": 50.968975,
      "longitude": 6.938248,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648976963,
      "ems": null
    },
    {
      "latitude": 50.969719,
      "longitude": 6.936569,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648976966,
      "ems": null
    },
    {
      "latitude": 50.970428,
      "longitude": 6.934971,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648976969,
      "ems": null
    },
    {
      "latitude": 50.971069,
      "longitude": 6.933709,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1648976972,
      "ems": null
    },
    {
      "latitude": 50.971848,
      "longitude": 6.931928,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648976975,
      "ems": null
    },
    {
      "latitude": 50.972466,
      "longitude": 6.930466,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1648976978,
      "ems": null
    },
    {
      "latitude": 50.973072,
      "longitude": 6.928864,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1648976981,
      "ems": null
    },
    {
      "latitude": 50.973724,
      "longitude": 6.927177,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1648976984,
      "ems": null
    },
    {
      "latitude": 50.97496,
      "longitude": 6.924059,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1648976990,
      "ems": null
    },
    {
      "latitude": 50.976151,
      "longitude": 6.920941,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1648976996,
      "ems": null
    },
    {
      "latitude": 50.977386,
      "longitude": 6.917749,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1648977002,
      "ems": null
    },
    {
      "latitude": 50.97876,
      "longitude": 6.914409,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977008,
      "ems": null
    },
    {
      "latitude": 50.980179,
      "longitude": 6.911143,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977014,
      "ems": null
    },
    {
      "latitude": 50.981461,
      "longitude": 6.908025,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977020,
      "ems": null
    },
    {
      "latitude": 50.982941,
      "longitude": 6.904602,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977026,
      "ems": null
    },
    {
      "latitude": 50.984337,
      "longitude": 6.901321,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977032,
      "ems": null
    },
    {
      "latitude": 50.985687,
      "longitude": 6.898193,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977038,
      "ems": null
    },
    {
      "latitude": 50.987129,
      "longitude": 6.894836,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977044,
      "ems": null
    },
    {
      "latitude": 50.988419,
      "longitude": 6.891842,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977050,
      "ems": null
    },
    {
      "latitude": 50.989922,
      "longitude": 6.888428,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977056,
      "ems": null
    },
    {
      "latitude": 50.991165,
      "longitude": 6.885607,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977062,
      "ems": null
    },
    {
      "latitude": 50.992538,
      "longitude": 6.882712,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977068,
      "ems": null
    },
    {
      "latitude": 50.994049,
      "longitude": 6.879297,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977074,
      "ems": null
    },
    {
      "latitude": 50.995377,
      "longitude": 6.87618,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977080,
      "ems": null
    },
    {
      "latitude": 50.996674,
      "longitude": 6.873016,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1648977086,
      "ems": null
    },
    {
      "latitude": 50.997929,
      "longitude": 6.869812,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1648977092,
      "ems": null
    },
    {
      "latitude": 50.999268,
      "longitude": 6.866826,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648977098,
      "ems": null
    },
    {
      "latitude": 51.000584,
      "longitude": 6.864166,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1648977104,
      "ems": null
    },
    {
      "latitude": 51.001831,
      "longitude": 6.861778,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1648977110,
      "ems": null
    },
    {
      "latitude": 51.003479,
      "longitude": 6.858215,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977116,
      "ems": null
    },
    {
      "latitude": 51.004726,
      "longitude": 6.855316,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977122,
      "ems": null
    },
    {
      "latitude": 51.006218,
      "longitude": 6.852341,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1648977128,
      "ems": null
    },
    {
      "latitude": 51.007008,
      "longitude": 6.85112,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1648977131,
      "ems": null
    },
    {
      "latitude": 51.007847,
      "longitude": 6.849899,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1648977134,
      "ems": null
    },
    {
      "latitude": 51.009201,
      "longitude": 6.847303,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977140,
      "ems": null
    },
    {
      "latitude": 51.009842,
      "longitude": 6.845299,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1648977143,
      "ems": null
    },
    {
      "latitude": 51.010265,
      "longitude": 6.843643,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1648977146,
      "ems": null
    },
    {
      "latitude": 51.010731,
      "longitude": 6.841888,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1648977149,
      "ems": null
    },
    {
      "latitude": 51.011307,
      "longitude": 6.840103,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1648977152,
      "ems": null
    },
    {
      "latitude": 51.011894,
      "longitude": 6.838303,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1648977155,
      "ems": null
    },
    {
      "latitude": 51.012455,
      "longitude": 6.836624,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1648977158,
      "ems": null
    },
    {
      "latitude": 51.013,
      "longitude": 6.834981,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1648977161,
      "ems": null
    },
    {
      "latitude": 51.013596,
      "longitude": 6.83357,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1648977164,
      "ems": null
    },
    {
      "latitude": 51.014317,
      "longitude": 6.831818,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977167,
      "ems": null
    },
    {
      "latitude": 51.014874,
      "longitude": 6.830444,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1648977170,
      "ems": null
    },
    {
      "latitude": 51.015667,
      "longitude": 6.828537,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977173,
      "ems": null
    },
    {
      "latitude": 51.016457,
      "longitude": 6.82663,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1648977176,
      "ems": null
    },
    {
      "latitude": 51.01712,
      "longitude": 6.825034,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977179,
      "ems": null
    },
    {
      "latitude": 51.017902,
      "longitude": 6.823273,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977182,
      "ems": null
    },
    {
      "latitude": 51.018677,
      "longitude": 6.821545,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977185,
      "ems": null
    },
    {
      "latitude": 51.019436,
      "longitude": 6.819916,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648977188,
      "ems": null
    },
    {
      "latitude": 51.020184,
      "longitude": 6.818237,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648977191,
      "ems": null
    },
    {
      "latitude": 51.020966,
      "longitude": 6.81672,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1648977194,
      "ems": null
    },
    {
      "latitude": 51.021744,
      "longitude": 6.815235,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1648977197,
      "ems": null
    },
    {
      "latitude": 51.022602,
      "longitude": 6.813507,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1648977200,
      "ems": null
    },
    {
      "latitude": 51.024044,
      "longitude": 6.810455,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977206,
      "ems": null
    },
    {
      "latitude": 51.025543,
      "longitude": 6.807144,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977212,
      "ems": null
    },
    {
      "latitude": 51.026978,
      "longitude": 6.803894,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648977218,
      "ems": null
    },
    {
      "latitude": 51.028381,
      "longitude": 6.800982,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648977224,
      "ems": null
    },
    {
      "latitude": 51.029865,
      "longitude": 6.797714,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648977230,
      "ems": null
    },
    {
      "latitude": 51.031219,
      "longitude": 6.79497,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1648977236,
      "ems": null
    },
    {
      "latitude": 51.032612,
      "longitude": 6.791992,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648977242,
      "ems": null
    },
    {
      "latitude": 51.033588,
      "longitude": 6.789703,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977248,
      "ems": null
    },
    {
      "latitude": 51.035065,
      "longitude": 6.786284,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977254,
      "ems": null
    },
    {
      "latitude": 51.036942,
      "longitude": 6.782276,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1648977263,
      "ems": null
    },
    {
      "latitude": 51.038197,
      "longitude": 6.779709,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648977268,
      "ems": null
    },
    {
      "latitude": 51.03941,
      "longitude": 6.776962,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977275,
      "ems": null
    },
    {
      "latitude": 51.040512,
      "longitude": 6.774333,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1648977281,
      "ems": null
    },
    {
      "latitude": 51.041656,
      "longitude": 6.770993,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1648977287,
      "ems": null
    },
    {
      "latitude": 51.042114,
      "longitude": 6.769582,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1648977290,
      "ems": null
    },
    {
      "latitude": 51.042572,
      "longitude": 6.768098,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1648977292,
      "ems": null
    },
    {
      "latitude": 51.043213,
      "longitude": 6.766465,
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
      "squawk": "7000",
      "timestamp": 1648977296,
      "ems": null
    },
    {
      "latitude": 51.044388,
      "longitude": 6.763306,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1648977302,
      "ems": null
    },
    {
      "latitude": 51.045685,
      "longitude": 6.760303,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977308,
      "ems": null
    },
    {
      "latitude": 51.046188,
      "longitude": 6.759116,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977311,
      "ems": null
    },
    {
      "latitude": 51.046997,
      "longitude": 6.757507,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1648977314,
      "ems": null
    },
    {
      "latitude": 51.047695,
      "longitude": 6.756058,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1648977317,
      "ems": null
    },
    {
      "latitude": 51.048347,
      "longitude": 6.754684,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1648977320,
      "ems": null
    },
    {
      "latitude": 51.049091,
      "longitude": 6.753311,
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1648977323,
      "ems": null
    },
    {
      "latitude": 51.049835,
      "longitude": 6.751862,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1648977326,
      "ems": null
    },
    {
      "latitude": 51.050533,
      "longitude": 6.750565,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1648977329,
      "ems": null
    },
    {
      "latitude": 51.051865,
      "longitude": 6.747758,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977335,
      "ems": null
    },
    {
      "latitude": 51.053234,
      "longitude": 6.744843,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1648977341,
      "ems": null
    },
    {
      "latitude": 51.054611,
      "longitude": 6.742043,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1648977347,
      "ems": null
    },
    {
      "latitude": 51.056076,
      "longitude": 6.739073,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648977353,
      "ems": null
    },
    {
      "latitude": 51.057331,
      "longitude": 6.736298,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977359,
      "ems": null
    },
    {
      "latitude": 51.058594,
      "longitude": 6.733431,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977365,
      "ems": null
    },
    {
      "latitude": 51.060013,
      "longitude": 6.730314,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977371,
      "ems": null
    },
    {
      "latitude": 51.061386,
      "longitude": 6.727047,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977377,
      "ems": null
    },
    {
      "latitude": 51.062824,
      "longitude": 6.723938,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648977383,
      "ems": null
    },
    {
      "latitude": 51.064079,
      "longitude": 6.721191,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977389,
      "ems": null
    },
    {
      "latitude": 51.065552,
      "longitude": 6.717991,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977395,
      "ems": null
    },
    {
      "latitude": 51.066921,
      "longitude": 6.714859,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648977401,
      "ems": null
    },
    {
      "latitude": 51.068222,
      "longitude": 6.712036,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1648977407,
      "ems": null
    },
    {
      "latitude": 51.069805,
      "longitude": 6.708679,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977413,
      "ems": null
    },
    {
      "latitude": 51.071228,
      "longitude": 6.70552,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977419,
      "ems": null
    },
    {
      "latitude": 51.071621,
      "longitude": 6.704483,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1648977422,
      "ems": null
    },
    {
      "latitude": 51.072926,
      "longitude": 6.701279,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977428,
      "ems": null
    },
    {
      "latitude": 51.074387,
      "longitude": 6.69832,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1648977434,
      "ems": null
    },
    {
      "latitude": 51.075623,
      "longitude": 6.695499,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977440,
      "ems": null
    },
    {
      "latitude": 51.076881,
      "longitude": 6.692505,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977446,
      "ems": null
    },
    {
      "latitude": 51.077862,
      "longitude": 6.690063,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977452,
      "ems": null
    },
    {
      "latitude": 51.079208,
      "longitude": 6.686859,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977458,
      "ems": null
    },
    {
      "latitude": 51.080429,
      "longitude": 6.683993,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977464,
      "ems": null
    },
    {
      "latitude": 51.081772,
      "longitude": 6.680756,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977470,
      "ems": null
    },
    {
      "latitude": 51.083027,
      "longitude": 6.677704,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977476,
      "ems": null
    },
    {
      "latitude": 51.084236,
      "longitude": 6.674728,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977482,
      "ems": null
    },
    {
      "latitude": 51.085449,
      "longitude": 6.671829,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977488,
      "ems": null
    },
    {
      "latitude": 51.086746,
      "longitude": 6.669072,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1648977494,
      "ems": null
    },
    {
      "latitude": 51.087891,
      "longitude": 6.666548,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1648977500,
      "ems": null
    },
    {
      "latitude": 51.089172,
      "longitude": 6.663513,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648977506,
      "ems": null
    },
    {
      "latitude": 51.089962,
      "longitude": 6.661911,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1648977509,
      "ems": null
    },
    {
      "latitude": 51.09071,
      "longitude": 6.660461,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1648977512,
      "ems": null
    },
    {
      "latitude": 51.091499,
      "longitude": 6.658783,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1648977515,
      "ems": null
    },
    {
      "latitude": 51.093037,
      "longitude": 6.655579,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977521,
      "ems": null
    },
    {
      "latitude": 51.094162,
      "longitude": 6.652964,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977526,
      "ems": null
    },
    {
      "latitude": 51.095596,
      "longitude": 6.649857,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1648977532,
      "ems": null
    },
    {
      "latitude": 51.097,
      "longitude": 6.646951,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977539,
      "ems": null
    },
    {
      "latitude": 51.097412,
      "longitude": 6.645986,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977541,
      "ems": null
    },
    {
      "latitude": 51.098202,
      "longitude": 6.643982,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1648977545,
      "ems": null
    },
    {
      "latitude": 51.098808,
      "longitude": 6.64238,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1648977548,
      "ems": null
    },
    {
      "latitude": 51.099289,
      "longitude": 6.640938,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1648977550,
      "ems": null
    },
    {
      "latitude": 51.100479,
      "longitude": 6.637895,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977556,
      "ems": null
    },
    {
      "latitude": 51.101669,
      "longitude": 6.635,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977562,
      "ems": null
    },
    {
      "latitude": 51.103184,
      "longitude": 6.631622,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977569,
      "ems": null
    },
    {
      "latitude": 51.104462,
      "longitude": 6.62869,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977574,
      "ems": null
    },
    {
      "latitude": 51.105148,
      "longitude": 6.627057,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977578,
      "ems": null
    },
    {
      "latitude": 51.105835,
      "longitude": 6.625498,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977581,
      "ems": null
    },
    {
      "latitude": 51.106491,
      "longitude": 6.624069,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648977584,
      "ems": null
    },
    {
      "latitude": 51.107803,
      "longitude": 6.621119,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977590,
      "ems": null
    },
    {
      "latitude": 51.109142,
      "longitude": 6.618195,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977595,
      "ems": null
    },
    {
      "latitude": 51.110504,
      "longitude": 6.615031,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977602,
      "ems": null
    },
    {
      "latitude": 51.111843,
      "longitude": 6.612091,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648977608,
      "ems": null
    },
    {
      "latitude": 51.113102,
      "longitude": 6.609497,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648977613,
      "ems": null
    },
    {
      "latitude": 51.114395,
      "longitude": 6.606421,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1648977620,
      "ems": null
    },
    {
      "latitude": 51.11554,
      "longitude": 6.603451,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1648977626,
      "ems": null
    },
    {
      "latitude": 51.116638,
      "longitude": 6.600723,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977632,
      "ems": null
    },
    {
      "latitude": 51.117893,
      "longitude": 6.5979,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977638,
      "ems": null
    },
    {
      "latitude": 51.11911,
      "longitude": 6.595137,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977644,
      "ems": null
    },
    {
      "latitude": 51.12027,
      "longitude": 6.592331,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977650,
      "ems": null
    },
    {
      "latitude": 51.121399,
      "longitude": 6.58957,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1648977656,
      "ems": null
    },
    {
      "latitude": 51.122597,
      "longitude": 6.586456,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1648977662,
      "ems": null
    },
    {
      "latitude": 51.123688,
      "longitude": 6.583705,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1648977667,
      "ems": null
    },
    {
      "latitude": 51.125019,
      "longitude": 6.580658,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648977674,
      "ems": null
    },
    {
      "latitude": 51.126755,
      "longitude": 6.576876,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648977681,
      "ems": null
    },
    {
      "latitude": 51.127396,
      "longitude": 6.57554,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648977684,
      "ems": null
    },
    {
      "latitude": 51.128906,
      "longitude": 6.572125,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977690,
      "ems": null
    },
    {
      "latitude": 51.130093,
      "longitude": 6.569214,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977696,
      "ems": null
    },
    {
      "latitude": 51.131607,
      "longitude": 6.565667,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977702,
      "ems": null
    },
    {
      "latitude": 51.132977,
      "longitude": 6.562424,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1648977708,
      "ems": null
    },
    {
      "latitude": 51.133583,
      "longitude": 6.560745,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1648977711,
      "ems": null
    },
    {
      "latitude": 51.133987,
      "longitude": 6.559654,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1648977714,
      "ems": null
    },
    {
      "latitude": 51.13591,
      "longitude": 6.554794,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1648977721,
      "ems": null
    },
    {
      "latitude": 51.137356,
      "longitude": 6.550903,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1648977729,
      "ems": null
    },
    {
      "latitude": 51.139309,
      "longitude": 6.546173,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648977737,
      "ems": null
    },
    {
      "latitude": 51.141129,
      "longitude": 6.541987,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648977745,
      "ems": null
    },
    {
      "latitude": 51.142822,
      "longitude": 6.537459,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1648977753,
      "ems": null
    },
    {
      "latitude": 51.14336,
      "longitude": 6.535721,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1648977757,
      "ems": null
    },
    {
      "latitude": 51.144012,
      "longitude": 6.533451,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1648977761,
      "ems": null
    },
    {
      "latitude": 51.144245,
      "longitude": 6.531601,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1648977765,
      "ems": null
    },
    {
      "latitude": 51.14447,
      "longitude": 6.529442,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1648977769,
      "ems": null
    },
    {
      "latitude": 51.144756,
      "longitude": 6.527557,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1648977773,
      "ems": null
    },
    {
      "latitude": 51.145081,
      "longitude": 6.525803,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1648977777,
      "ems": null
    },
    {
      "latitude": 51.145477,
      "longitude": 6.523652,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1648977781,
      "ems": null
    },
    {
      "latitude": 51.145641,
      "longitude": 6.522903,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1648977783,
      "ems": null
    },
    {
      "latitude": 51.146107,
      "longitude": 6.520691,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1648977787,
      "ems": null
    },
    {
      "latitude": 51.146709,
      "longitude": 6.517792,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1648977793,
      "ems": null
    },
    {
      "latitude": 51.147129,
      "longitude": 6.515961,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1648977796,
      "ems": null
    },
    {
      "latitude": 51.147354,
      "longitude": 6.514893,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1648977798,
      "ems": null
    },
    {
      "latitude": 51.147858,
      "longitude": 6.512517,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1648977802,
      "ems": null
    },
    {
      "latitude": 51.148479,
      "longitude": 6.510468,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1648977806,
      "ems": null
    },
    {
      "latitude": 51.149368,
      "longitude": 6.508434,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1648977810,
      "ems": null
    },
    {
      "latitude": 51.150101,
      "longitude": 6.507173,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1648977812,
      "ems": null
    },
    {
      "latitude": 51.150513,
      "longitude": 6.506505,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1648977815,
      "ems": null
    },
    {
      "latitude": 51.151646,
      "longitude": 6.505356,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1648977818,
      "ems": null
    },
    {
      "latitude": 51.152481,
      "longitude": 6.50502,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1648977821,
      "ems": null
    },
    {
      "latitude": 51.154037,
      "longitude": 6.504945,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1648977825,
      "ems": null
    },
    {
      "latitude": 51.15686,
      "longitude": 6.50528,
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1648977832,
      "ems": null
    },
    {
      "latitude": 51.157978,
      "longitude": 6.505432,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1648977836,
      "ems": null
    },
    {
      "latitude": 51.159164,
      "longitude": 6.505539,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1648977840,
      "ems": null
    },
    {
      "latitude": 51.1604,
      "longitude": 6.505614,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1648977844,
      "ems": null
    },
    {
      "latitude": 51.161865,
      "longitude": 6.505762,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1648977848,
      "ems": null
    },
    {
      "latitude": 51.16301,
      "longitude": 6.505762,
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
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1648977852,
      "ems": null
    },
    {
      "latitude": 51.16452,
      "longitude": 6.505614,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1648977856,
      "ems": null
    },
    {
      "latitude": 51.165436,
      "longitude": 6.505539,
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1648977860,
      "ems": null
    },
    {
      "latitude": 51.167038,
      "longitude": 6.505391,
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1648977864,
      "ems": null
    },
    {
      "latitude": 51.167706,
      "longitude": 6.50528,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1648977868,
      "ems": null
    },
    {
      "latitude": 51.169373,
      "longitude": 6.50502,
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1648977872,
      "ems": null
    },
    {
      "latitude": 51.171021,
      "longitude": 6.504797,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1648977876,
      "ems": null
    },
    {
      "latitude": 51.172348,
      "longitude": 6.5045,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1648977880,
      "ems": null
    },
    {
      "latitude": 51.174408,
      "longitude": 6.503981,
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1648977886,
      "ems": null
    },
    {
      "latitude": 51.176331,
      "longitude": 6.503609,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1648977892,
      "ems": null
    },
    {
      "latitude": 51.178368,
      "longitude": 6.503143,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1648977897,
      "ems": null
    },
    {
      "latitude": 51.179398,
      "longitude": 6.502867,
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1648977901,
      "ems": null
    },
    {
      "latitude": 51.181438,
      "longitude": 6.50238,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1648977907,
      "ems": null
    },
    {
      "latitude": 51.183517,
      "longitude": 6.501902,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1648977912,
      "ems": null
    },
    {
      "latitude": 51.185627,
      "longitude": 6.501389,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1648977918,
      "ems": null
    },
    {
      "latitude": 51.187817,
      "longitude": 6.500854,
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1648977925,
      "ems": null
    },
    {
      "latitude": 51.189194,
      "longitude": 6.500417,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1648977930,
      "ems": null
    },
    {
      "latitude": 51.192261,
      "longitude": 6.499601,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1648977936,
      "ems": null
    },
    {
      "latitude": 51.193401,
      "longitude": 6.499481,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1648977940,
      "ems": null
    },
    {
      "latitude": 51.195591,
      "longitude": 6.50032,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1648977944,
      "ems": null
    },
    {
      "latitude": 51.196838,
      "longitude": 6.50116,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1648977948,
      "ems": null
    },
    {
      "latitude": 51.197433,
      "longitude": 6.501605,
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1648977950,
      "ems": null
    },
    {
      "latitude": 51.198662,
      "longitude": 6.50238,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1648977953,
      "ems": null
    },
    {
      "latitude": 51.199688,
      "longitude": 6.502991,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1648977956,
      "ems": null
    },
    {
      "latitude": 51.201279,
      "longitude": 6.503758,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1648977960,
      "ems": null
    },
    {
      "latitude": 51.202526,
      "longitude": 6.504288,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1648977962,
      "ems": null
    },
    {
      "latitude": 51.202744,
      "longitude": 6.504352,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1648977965,
      "ems": null
    },
    {
      "latitude": 51.204853,
      "longitude": 6.50528,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1648977968,
      "ems": null
    },
    {
      "latitude": 51.205856,
      "longitude": 6.505614,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1648977971,
      "ems": null
    },
    {
      "latitude": 51.207779,
      "longitude": 6.506356,
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1648977977,
      "ems": null
    },
    {
      "latitude": 51.209702,
      "longitude": 6.50695,
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1648977981,
      "ems": null
    },
    {
      "latitude": 51.210846,
      "longitude": 6.507395,
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1648977984,
      "ems": null
    },
    {
      "latitude": 51.211395,
      "longitude": 6.507544,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1648977986,
      "ems": null
    },
    {
      "latitude": 51.212677,
      "longitude": 6.507989,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1648977990,
      "ems": null
    },
    {
      "latitude": 51.214279,
      "longitude": 6.50836,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1648977993,
      "ems": null
    },
    {
      "latitude": 51.215332,
      "longitude": 6.508657,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1648977996,
      "ems": null
    },
    {
      "latitude": 51.216522,
      "longitude": 6.50888,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1648977999,
      "ems": null
    },
    {
      "latitude": 51.217346,
      "longitude": 6.508954,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1648978001,
      "ems": null
    },
    {
      "latitude": 51.217941,
      "longitude": 6.509028,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1648978002,
      "ems": null
    },
    {
      "latitude": 51.219086,
      "longitude": 6.508731,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1648978006,
      "ems": null
    },
    {
      "latitude": 51.220078,
      "longitude": 6.508102,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1648978009,
      "ems": null
    },
    {
      "latitude": 51.220642,
      "longitude": 6.507469,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1648978012,
      "ems": null
    },
    {
      "latitude": 51.221474,
      "longitude": 6.506042,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1648978015,
      "ems": null
    },
    {
      "latitude": 51.221924,
      "longitude": 6.504871,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1648978018,
      "ems": null
    },
    {
      "latitude": 51.22245,
      "longitude": 6.503448,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1648978021,
      "ems": null
    },
    {
      "latitude": 51.222656,
      "longitude": 6.502125,
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1648978024,
      "ems": null
    },
    {
      "latitude": 51.222702,
      "longitude": 6.501234,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1648978025,
      "ems": null
    },
    {
      "latitude": 51.222061,
      "longitude": 6.498858,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1648978030,
      "ems": null
    },
    {
      "latitude": 51.22142,
      "longitude": 6.49678,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1648978034,
      "ems": null
    },
    {
      "latitude": 51.221752,
      "longitude": 6.494751,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648978038,
      "ems": null
    },
    {
      "latitude": 51.223148,
      "longitude": 6.49353,
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1648978042,
      "ems": null
    },
    {
      "latitude": 51.224533,
      "longitude": 6.494182,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1648978046,
      "ems": null
    },
    {
      "latitude": 51.225815,
      "longitude": 6.496186,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1648978050,
      "ems": null
    },
    {
      "latitude": 51.227051,
      "longitude": 6.498116,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1648978054,
      "ems": null
    },
    {
      "latitude": 51.227875,
      "longitude": 6.499527,
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
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1648978056,
      "ems": null
    },
    {
      "latitude": 51.228745,
      "longitude": 6.501011,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1648978059,
      "ems": null
    },
    {
      "latitude": 51.229527,
      "longitude": 6.502457,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1648978063,
      "ems": null
    },
    {
      "latitude": 51.230225,
      "longitude": 6.503754,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1648978065,
      "ems": null
    },
    {
      "latitude": 51.231125,
      "longitude": 6.505242,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1648978068,
      "ems": null
    },
    {
      "latitude": 51.231949,
      "longitude": 6.506729,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1648978071,
      "ems": null
    },
    {
      "latitude": 51.232971,
      "longitude": 6.508484,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1648978075,
      "ems": null
    },
    {
      "latitude": 51.234741,
      "longitude": 6.511459,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1648978081,
      "ems": null
    },
    {
      "latitude": 51.236664,
      "longitude": 6.514447,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1648978087,
      "ems": null
    },
    {
      "latitude": 51.237488,
      "longitude": 6.515656,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1648978089,
      "ems": null
    },
    {
      "latitude": 51.238373,
      "longitude": 6.516953,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1648978093,
      "ems": null
    },
    {
      "latitude": 51.239815,
      "longitude": 6.520386,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1648978099,
      "ems": null
    },
    {
      "latitude": 51.240047,
      "longitude": 6.522293,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1648978102,
      "ems": null
    },
    {
      "latitude": 51.240002,
      "longitude": 6.523743,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1648978104,
      "ems": null
    },
    {
      "latitude": 51.239582,
      "longitude": 6.526184,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1648978107,
      "ems": null
    },
    {
      "latitude": 51.23893,
      "longitude": 6.528397,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1648978110,
      "ems": null
    },
    {
      "latitude": 51.237999,
      "longitude": 6.530228,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1648978114,
      "ems": null
    },
    {
      "latitude": 51.237396,
      "longitude": 6.531372,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1648978116,
      "ems": null
    },
    {
      "latitude": 51.236324,
      "longitude": 6.533432,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1648978119,
      "ems": null
    },
    {
      "latitude": 51.235565,
      "longitude": 6.535009,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1648978123,
      "ems": null
    },
    {
      "latitude": 51.234741,
      "longitude": 6.536865,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1648978126,
      "ems": null
    },
    {
      "latitude": 51.233952,
      "longitude": 6.538544,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1648978129,
      "ems": null
    },
    {
      "latitude": 51.233204,
      "longitude": 6.540222,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1648978132,
      "ems": null
    },
    {
      "latitude": 51.232407,
      "longitude": 6.541839,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1648978135,
      "ems": null
    },
    {
      "latitude": 51.231716,
      "longitude": 6.543274,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1648978138,
      "ems": null
    },
    {
      "latitude": 51.230988,
      "longitude": 6.544808,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1648978141,
      "ems": null
    },
    {
      "latitude": 51.229385,
      "longitude": 6.547926,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1648978147,
      "ems": null
    },
    {
      "latitude": 51.227875,
      "longitude": 6.550598,
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1648978153,
      "ems": null
    },
    {
      "latitude": 51.227051,
      "longitude": 6.551934,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1648978156,
      "ems": null
    },
    {
      "latitude": 51.226128,
      "longitude": 6.553421,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1648978159,
      "ems": null
    },
    {
      "latitude": 51.225266,
      "longitude": 6.554681,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1648978162,
      "ems": null
    },
    {
      "latitude": 51.224396,
      "longitude": 6.556091,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1648978165,
      "ems": null
    },
    {
      "latitude": 51.223572,
      "longitude": 6.557353,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1648978168,
      "ems": null
    },
    {
      "latitude": 51.222591,
      "longitude": 6.558685,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1648978171,
      "ems": null
    },
    {
      "latitude": 51.221466,
      "longitude": 6.559506,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1648978174,
      "ems": null
    },
    {
      "latitude": 51.22031,
      "longitude": 6.55983,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1648978177,
      "ems": null
    },
    {
      "latitude": 51.218868,
      "longitude": 6.559448,
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1648978180,
      "ems": null
    },
    {
      "latitude": 51.217758,
      "longitude": 6.558615,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1648978183,
      "ems": null
    },
    {
      "latitude": 51.216797,
      "longitude": 6.557427,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1648978186,
      "ems": null
    },
    {
      "latitude": 51.215839,
      "longitude": 6.555862,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1648978189,
      "ems": null
    },
    {
      "latitude": 51.215103,
      "longitude": 6.554458,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1648978192,
      "ems": null
    },
    {
      "latitude": 51.214397,
      "longitude": 6.55304,
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1648978195,
      "ems": null
    },
    {
      "latitude": 51.213684,
      "longitude": 6.551341,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1648978198,
      "ems": null
    },
    {
      "latitude": 51.213181,
      "longitude": 6.550004,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1648978201,
      "ems": null
    },
    {
      "latitude": 51.212585,
      "longitude": 6.548297,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1648978204,
      "ems": null
    },
    {
      "latitude": 51.212311,
      "longitude": 6.546515,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1648978207,
      "ems": null
    },
    {
      "latitude": 51.212257,
      "longitude": 6.544952,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1648978210,
      "ems": null
    },
    {
      "latitude": 51.212311,
      "longitude": 6.543175,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1648978213,
      "ems": null
    },
    {
      "latitude": 51.21249,
      "longitude": 6.541748,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1648978216,
      "ems": null
    },
    {
      "latitude": 51.212814,
      "longitude": 6.540222,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1648978219,
      "ems": null
    },
    {
      "latitude": 51.213318,
      "longitude": 6.538795,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1648978222,
      "ems": null
    },
    {
      "latitude": 51.213867,
      "longitude": 6.537385,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1648978225,
      "ems": null
    },
    {
      "latitude": 51.214306,
      "longitude": 6.536407,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1648978228,
      "ems": null
    },
    {
      "latitude": 51.214909,
      "longitude": 6.53511,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1648978231,
      "ems": null
    },
    {
      "latitude": 51.215424,
      "longitude": 6.534044,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1648978234,
      "ems": null
    },
    {
      "latitude": 51.215935,
      "longitude": 6.533051,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1648978237,
      "ems": null
    },
    {
      "latitude": 51.2164,
      "longitude": 6.532135,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1648978240,
      "ems": null
    },
    {
      "latitude": 51.21698,
      "longitude": 6.531075,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1648978243,
      "ems": null
    },
    {
      "latitude": 51.217438,
      "longitude": 6.53011,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1648978246,
      "ems": null
    },
    {
      "latitude": 51.217941,
      "longitude": 6.529145,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1648978249,
      "ems": null
    },
    {
      "latitude": 51.218403,
      "longitude": 6.528091,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1648978252,
      "ems": null
    },
    {
      "latitude": 51.218948,
      "longitude": 6.527141,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1648978255,
      "ems": null
    },
    {
      "latitude": 51.219727,
      "longitude": 6.525434,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1648978261,
      "ems": null
    },
    {
      "latitude": 51.220779,
      "longitude": 6.523429,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1648978267,
      "ems": null
    },
    {
      "latitude": 51.221695,
      "longitude": 6.521574,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1648978273,
      "ems": null
    },
    {
      "latitude": 51.222794,
      "longitude": 6.519495,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1648978279,
      "ems": null
    },
    {
      "latitude": 51.223801,
      "longitude": 6.517563,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1648978285,
      "ems": null
    },
    {
      "latitude": 51.224777,
      "longitude": 6.515579,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1648978291,
      "ems": null
    },
    {
      "latitude": 51.225662,
      "longitude": 6.513901,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1648978297,
      "ems": null
    }
  ]
};
