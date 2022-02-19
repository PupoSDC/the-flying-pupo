import { Flight } from "../../../types/Flight";

export const flight: Flight = {
  identification: {
    id: "20210506EDGSEDKB",
    callsign: "DEFCZ",
    name: "PPL Pre check-ride",
    description: "Cross country to EDKB",
  },
  pilotLog: {
    departure: new Date(2021, 4, 6, 11, 29).getTime(),
    arrival: new Date(2021, 4, 6, 12, 19).getTime(),
    singleEnginePistonTime: 50,
    picTime: 0,
    dualTime: 50,
    landings: {
      day: 3,
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
      name: "Siegen Siegerland Airport",
      code: "EDGS",
      position: {
        latitude: 50.707699,
        longitude: 8.08297,
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
      "latitude": 50.717422,
      "longitude": 8.063742,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 310,
      "squawk": "0",
      "timestamp": 1620301094,
      "ems": null
    },
    {
      "latitude": 50.719547,
      "longitude": 8.059692,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 307,
      "squawk": "0",
      "timestamp": 1620301105,
      "ems": null
    },
    {
      "latitude": 50.722202,
      "longitude": 8.05336,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 300,
      "squawk": "0",
      "timestamp": 1620301121,
      "ems": null
    },
    {
      "latitude": 50.724434,
      "longitude": 8.046265,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 295,
      "squawk": "0",
      "timestamp": 1620301136,
      "ems": null
    },
    {
      "latitude": 50.725983,
      "longitude": 8.041324,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1620301147,
      "ems": null
    },
    {
      "latitude": 50.727509,
      "longitude": 8.035812,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1620301157,
      "ems": null
    },
    {
      "latitude": 50.728996,
      "longitude": 8.030167,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1620301168,
      "ems": null
    },
    {
      "latitude": 50.732712,
      "longitude": 8.013561,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1620301195,
      "ems": null
    },
    {
      "latitude": 50.734222,
      "longitude": 8.002649,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1620301211,
      "ems": null
    },
    {
      "latitude": 50.734863,
      "longitude": 7.994995,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1620301222,
      "ems": null
    },
    {
      "latitude": 50.735142,
      "longitude": 7.987595,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1620301232,
      "ems": null
    },
    {
      "latitude": 50.735367,
      "longitude": 7.979489,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1620301243,
      "ems": null
    },
    {
      "latitude": 50.737839,
      "longitude": 7.955363,
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1620301277,
      "ems": null
    },
    {
      "latitude": 50.738388,
      "longitude": 7.950984,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1620301283,
      "ems": null
    },
    {
      "latitude": 50.739285,
      "longitude": 7.944412,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1620301292,
      "ems": null
    },
    {
      "latitude": 50.739761,
      "longitude": 7.940591,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1620301298,
      "ems": null
    },
    {
      "latitude": 50.742325,
      "longitude": 7.924409,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1620301322,
      "ems": null
    },
    {
      "latitude": 50.742779,
      "longitude": 7.922516,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1620301325,
      "ems": null
    },
    {
      "latitude": 50.745483,
      "longitude": 7.910453,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1620301343,
      "ems": null
    },
    {
      "latitude": 50.745758,
      "longitude": 7.908375,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1620301346,
      "ems": null
    },
    {
      "latitude": 50.748367,
      "longitude": 7.893602,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1620301370,
      "ems": null
    },
    {
      "latitude": 50.750565,
      "longitude": 7.884249,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1620301385,
      "ems": null
    },
    {
      "latitude": 50.751995,
      "longitude": 7.878036,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1620301395,
      "ems": null
    },
    {
      "latitude": 50.753113,
      "longitude": 7.873001,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1620301402,
      "ems": null
    },
    {
      "latitude": 50.75423,
      "longitude": 7.867279,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1620301411,
      "ems": null
    },
    {
      "latitude": 50.754868,
      "longitude": 7.863984,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1620301416,
      "ems": null
    },
    {
      "latitude": 50.7556,
      "longitude": 7.85953,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1620301423,
      "ems": null
    },
    {
      "latitude": 50.756195,
      "longitude": 7.855522,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1620301429,
      "ems": null
    },
    {
      "latitude": 50.756744,
      "longitude": 7.844467,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1620301445,
      "ems": null
    },
    {
      "latitude": 50.757301,
      "longitude": 7.837524,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1620301455,
      "ems": null
    },
    {
      "latitude": 50.758373,
      "longitude": 7.827454,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1620301470,
      "ems": null
    },
    {
      "latitude": 50.75935,
      "longitude": 7.819672,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1620301481,
      "ems": null
    },
    {
      "latitude": 50.759903,
      "longitude": 7.814546,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1620301489,
      "ems": null
    },
    {
      "latitude": 50.760235,
      "longitude": 7.810593,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1620301494,
      "ems": null
    },
    {
      "latitude": 50.760818,
      "longitude": 7.804227,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1620301504,
      "ems": null
    },
    {
      "latitude": 50.761677,
      "longitude": 7.793579,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1620301519,
      "ems": null
    },
    {
      "latitude": 50.761955,
      "longitude": 7.789459,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1620301525,
      "ems": null
    },
    {
      "latitude": 50.762375,
      "longitude": 7.785263,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1620301531,
      "ems": null
    },
    {
      "latitude": 50.762886,
      "longitude": 7.781219,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1620301536,
      "ems": null
    },
    {
      "latitude": 50.763382,
      "longitude": 7.776613,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1620301543,
      "ems": null
    },
    {
      "latitude": 50.763771,
      "longitude": 7.772827,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1620301548,
      "ems": null
    },
    {
      "latitude": 50.764751,
      "longitude": 7.76413,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1620301561,
      "ems": null
    },
    {
      "latitude": 50.765263,
      "longitude": 7.760315,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1620301567,
      "ems": null
    },
    {
      "latitude": 50.766357,
      "longitude": 7.751671,
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1620301579,
      "ems": null
    },
    {
      "latitude": 50.766861,
      "longitude": 7.74744,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1620301585,
      "ems": null
    },
    {
      "latitude": 50.767265,
      "longitude": 7.743835,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1620301590,
      "ems": null
    },
    {
      "latitude": 50.767776,
      "longitude": 7.739029,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1620301597,
      "ems": null
    },
    {
      "latitude": 50.768188,
      "longitude": 7.734969,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1620301603,
      "ems": null
    },
    {
      "latitude": 50.768509,
      "longitude": 7.731554,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1620301608,
      "ems": null
    },
    {
      "latitude": 50.768986,
      "longitude": 7.726746,
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1620301615,
      "ems": null
    },
    {
      "latitude": 50.76936,
      "longitude": 7.722397,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1620301622,
      "ems": null
    },
    {
      "latitude": 50.769699,
      "longitude": 7.718341,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1620301628,
      "ems": null
    },
    {
      "latitude": 50.770477,
      "longitude": 7.71218,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1620301637,
      "ems": null
    },
    {
      "latitude": 50.771072,
      "longitude": 7.707874,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1620301643,
      "ems": null
    },
    {
      "latitude": 50.771805,
      "longitude": 7.701564,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1620301652,
      "ems": null
    },
    {
      "latitude": 50.772354,
      "longitude": 7.697333,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1620301658,
      "ems": null
    },
    {
      "latitude": 50.773407,
      "longitude": 7.690875,
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1620301667,
      "ems": null
    },
    {
      "latitude": 50.774014,
      "longitude": 7.686768,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1620301673,
      "ems": null
    },
    {
      "latitude": 50.77457,
      "longitude": 7.682648,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1620301678,
      "ems": null
    },
    {
      "latitude": 50.77504,
      "longitude": 7.678833,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1620301684,
      "ems": null
    },
    {
      "latitude": 50.775688,
      "longitude": 7.673874,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1620301691,
      "ems": null
    },
    {
      "latitude": 50.776245,
      "longitude": 7.669793,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1620301697,
      "ems": null
    },
    {
      "latitude": 50.777435,
      "longitude": 7.661702,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1620301708,
      "ems": null
    },
    {
      "latitude": 50.778065,
      "longitude": 7.654877,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1620301717,
      "ems": null
    },
    {
      "latitude": 50.778488,
      "longitude": 7.650047,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1620301724,
      "ems": null
    },
    {
      "latitude": 50.779083,
      "longitude": 7.644109,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1620301733,
      "ems": null
    },
    {
      "latitude": 50.779507,
      "longitude": 7.639999,
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1620301738,
      "ems": null
    },
    {
      "latitude": 50.779926,
      "longitude": 7.635193,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1620301745,
      "ems": null
    },
    {
      "latitude": 50.779861,
      "longitude": 7.633049,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1620301748,
      "ems": null
    },
    {
      "latitude": 50.77977,
      "longitude": 7.63097,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1620301751,
      "ems": null
    },
    {
      "latitude": 50.779175,
      "longitude": 7.622581,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1620301763,
      "ems": null
    },
    {
      "latitude": 50.778252,
      "longitude": 7.606735,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1620301784,
      "ems": null
    },
    {
      "latitude": 50.778076,
      "longitude": 7.600535,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1620301793,
      "ems": null
    },
    {
      "latitude": 50.777924,
      "longitude": 7.595901,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1620301799,
      "ems": null
    },
    {
      "latitude": 50.777786,
      "longitude": 7.590103,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1620301807,
      "ems": null
    },
    {
      "latitude": 50.777985,
      "longitude": 7.582422,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1620301818,
      "ems": null
    },
    {
      "latitude": 50.779129,
      "longitude": 7.57448,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1620301829,
      "ems": null
    },
    {
      "latitude": 50.777252,
      "longitude": 7.56817,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1620301840,
      "ems": null
    },
    {
      "latitude": 50.777069,
      "longitude": 7.567799,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1620301841,
      "ems": null
    },
    {
      "latitude": 50.776249,
      "longitude": 7.566376,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1620301844,
      "ems": null
    },
    {
      "latitude": 50.775085,
      "longitude": 7.564545,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1620301847,
      "ems": null
    },
    {
      "latitude": 50.774506,
      "longitude": 7.563642,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1620301849,
      "ems": null
    },
    {
      "latitude": 50.774155,
      "longitude": 7.563171,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1620301850,
      "ems": null
    },
    {
      "latitude": 50.773315,
      "longitude": 7.561951,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1620301853,
      "ems": null
    },
    {
      "latitude": 50.77272,
      "longitude": 7.561043,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1620301855,
      "ems": null
    },
    {
      "latitude": 50.769791,
      "longitude": 7.55362,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1620301868,
      "ems": null
    },
    {
      "latitude": 50.768097,
      "longitude": 7.54783,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1620301877,
      "ems": null
    },
    {
      "latitude": 50.766907,
      "longitude": 7.543822,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1620301883,
      "ems": null
    },
    {
      "latitude": 50.764565,
      "longitude": 7.536163,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1620301895,
      "ems": null
    },
    {
      "latitude": 50.762005,
      "longitude": 7.529068,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1620301907,
      "ems": null
    },
    {
      "latitude": 50.760727,
      "longitude": 7.52556,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1620301913,
      "ems": null
    },
    {
      "latitude": 50.759583,
      "longitude": 7.521973,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1620301919,
      "ems": null
    },
    {
      "latitude": 50.756279,
      "longitude": 7.511749,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1620301937,
      "ems": null
    },
    {
      "latitude": 50.755188,
      "longitude": 7.508116,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1620301943,
      "ems": null
    },
    {
      "latitude": 50.754135,
      "longitude": 7.504578,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1620301949,
      "ems": null
    },
    {
      "latitude": 50.753036,
      "longitude": 7.501213,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1620301955,
      "ems": null
    },
    {
      "latitude": 50.751389,
      "longitude": 7.495728,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1620301965,
      "ems": null
    },
    {
      "latitude": 50.75029,
      "longitude": 7.492305,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1620301971,
      "ems": null
    },
    {
      "latitude": 50.749153,
      "longitude": 7.488861,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "squawk": "7000",
      "timestamp": 1620301977,
      "ems": null
    },
    {
      "latitude": 50.748138,
      "longitude": 7.485698,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1620301983,
      "ems": null
    },
    {
      "latitude": 50.747452,
      "longitude": 7.483842,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1620301986,
      "ems": null
    },
    {
      "latitude": 50.746872,
      "longitude": 7.482529,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1620301989,
      "ems": null
    },
    {
      "latitude": 50.745384,
      "longitude": 7.479095,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1620301995,
      "ems": null
    },
    {
      "latitude": 50.744888,
      "longitude": 7.477978,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1620301997,
      "ems": null
    },
    {
      "latitude": 50.744614,
      "longitude": 7.477458,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1620301998,
      "ems": null
    },
    {
      "latitude": 50.743382,
      "longitude": 7.47406,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1620302004,
      "ems": null
    },
    {
      "latitude": 50.742325,
      "longitude": 7.470778,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1620302010,
      "ems": null
    },
    {
      "latitude": 50.74173,
      "longitude": 7.468773,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1620302013,
      "ems": null
    },
    {
      "latitude": 50.740776,
      "longitude": 7.465897,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1620302018,
      "ems": null
    },
    {
      "latitude": 50.73999,
      "longitude": 7.463502,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1620302022,
      "ems": null
    },
    {
      "latitude": 50.739578,
      "longitude": 7.462315,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1620302024,
      "ems": null
    },
    {
      "latitude": 50.739395,
      "longitude": 7.461721,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1620302025,
      "ems": null
    },
    {
      "latitude": 50.737797,
      "longitude": 7.457352,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1620302033,
      "ems": null
    },
    {
      "latitude": 50.736679,
      "longitude": 7.454071,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1620302039,
      "ems": null
    },
    {
      "latitude": 50.734909,
      "longitude": 7.448959,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1620302048,
      "ems": null
    },
    {
      "latitude": 50.733513,
      "longitude": 7.444763,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1620302056,
      "ems": null
    },
    {
      "latitude": 50.732536,
      "longitude": 7.441635,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1620302061,
      "ems": null
    },
    {
      "latitude": 50.732162,
      "longitude": 7.440338,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1620302063,
      "ems": null
    },
    {
      "latitude": 50.730881,
      "longitude": 7.436111,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1620302070,
      "ems": null
    },
    {
      "latitude": 50.729881,
      "longitude": 7.433014,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1620302075,
      "ems": null
    },
    {
      "latitude": 50.728592,
      "longitude": 7.429059,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1620302082,
      "ems": null
    },
    {
      "latitude": 50.727356,
      "longitude": 7.425496,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1620302088,
      "ems": null
    },
    {
      "latitude": 50.726112,
      "longitude": 7.421799,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1620302094,
      "ems": null
    },
    {
      "latitude": 50.724899,
      "longitude": 7.418365,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1620302099,
      "ems": null
    },
    {
      "latitude": 50.723099,
      "longitude": 7.412654,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1620302109,
      "ems": null
    },
    {
      "latitude": 50.72192,
      "longitude": 7.408829,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1620302115,
      "ems": null
    },
    {
      "latitude": 50.7202,
      "longitude": 7.402954,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1620302124,
      "ems": null
    },
    {
      "latitude": 50.719734,
      "longitude": 7.401352,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1620302127,
      "ems": null
    },
    {
      "latitude": 50.719528,
      "longitude": 7.400628,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1620302128,
      "ems": null
    },
    {
      "latitude": 50.718292,
      "longitude": 7.396927,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1620302134,
      "ems": null
    },
    {
      "latitude": 50.716755,
      "longitude": 7.39212,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1620302142,
      "ems": null
    },
    {
      "latitude": 50.715637,
      "longitude": 7.388306,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1620302148,
      "ems": null
    },
    {
      "latitude": 50.714615,
      "longitude": 7.38472,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1620302154,
      "ems": null
    },
    {
      "latitude": 50.712982,
      "longitude": 7.378878,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1620302163,
      "ems": null
    },
    {
      "latitude": 50.712051,
      "longitude": 7.375336,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1620302169,
      "ems": null
    },
    {
      "latitude": 50.710518,
      "longitude": 7.369766,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1620302177,
      "ems": null
    },
    {
      "latitude": 50.709492,
      "longitude": 7.365875,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1620302184,
      "ems": null
    },
    {
      "latitude": 50.708515,
      "longitude": 7.362061,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1620302190,
      "ems": null
    },
    {
      "latitude": 50.707352,
      "longitude": 7.357648,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1620302197,
      "ems": null
    },
    {
      "latitude": 50.706234,
      "longitude": 7.35321,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1620302205,
      "ems": null
    },
    {
      "latitude": 50.705303,
      "longitude": 7.349396,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1620302211,
      "ems": null
    },
    {
      "latitude": 50.704559,
      "longitude": 7.34581,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1620302217,
      "ems": null
    },
    {
      "latitude": 50.703735,
      "longitude": 7.341762,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1620302223,
      "ems": null
    },
    {
      "latitude": 50.703396,
      "longitude": 7.339783,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1620302226,
      "ems": null
    },
    {
      "latitude": 50.703186,
      "longitude": 7.338645,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1620302228,
      "ems": null
    },
    {
      "latitude": 50.703114,
      "longitude": 7.338028,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1620302229,
      "ems": null
    },
    {
      "latitude": 50.703022,
      "longitude": 7.337723,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1620302230,
      "ems": null
    },
    {
      "latitude": 50.702957,
      "longitude": 7.33716,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1620302231,
      "ems": null
    },
    {
      "latitude": 50.702682,
      "longitude": 7.335378,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1620302234,
      "ems": null
    },
    {
      "latitude": 50.702499,
      "longitude": 7.334339,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1620302235,
      "ems": null
    },
    {
      "latitude": 50.701675,
      "longitude": 7.330405,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1620302241,
      "ems": null
    },
    {
      "latitude": 50.700928,
      "longitude": 7.326431,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1620302247,
      "ems": null
    },
    {
      "latitude": 50.700211,
      "longitude": 7.322313,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1620302253,
      "ems": null
    },
    {
      "latitude": 50.699764,
      "longitude": 7.318497,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1620302259,
      "ems": null
    },
    {
      "latitude": 50.699387,
      "longitude": 7.315039,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1620302264,
      "ems": null
    },
    {
      "latitude": 50.699066,
      "longitude": 7.31244,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1620302269,
      "ems": null
    },
    {
      "latitude": 50.698692,
      "longitude": 7.308655,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1620302274,
      "ems": null
    },
    {
      "latitude": 50.698425,
      "longitude": 7.306502,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1620302278,
      "ems": null
    },
    {
      "latitude": 50.698318,
      "longitude": 7.305756,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1620302279,
      "ems": null
    },
    {
      "latitude": 50.698196,
      "longitude": 7.304498,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1620302281,
      "ems": null
    },
    {
      "latitude": 50.69762,
      "longitude": 7.299271,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1620302289,
      "ems": null
    },
    {
      "latitude": 50.697201,
      "longitude": 7.295151,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1620302295,
      "ems": null
    },
    {
      "latitude": 50.697109,
      "longitude": 7.291031,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1620302302,
      "ems": null
    },
    {
      "latitude": 50.697109,
      "longitude": 7.289047,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1620302305,
      "ems": null
    },
    {
      "latitude": 50.697235,
      "longitude": 7.287202,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1620302308,
      "ems": null
    },
    {
      "latitude": 50.697575,
      "longitude": 7.285385,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1620302311,
      "ems": null
    },
    {
      "latitude": 50.698692,
      "longitude": 7.281952,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1620302317,
      "ems": null
    },
    {
      "latitude": 50.699112,
      "longitude": 7.280818,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1620302319,
      "ems": null
    },
    {
      "latitude": 50.699623,
      "longitude": 7.279739,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1620302321,
      "ems": null
    },
    {
      "latitude": 50.699936,
      "longitude": 7.279036,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1620302322,
      "ems": null
    },
    {
      "latitude": 50.700043,
      "longitude": 7.278824,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1620302323,
      "ems": null
    },
    {
      "latitude": 50.700577,
      "longitude": 7.277774,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1620302325,
      "ems": null
    },
    {
      "latitude": 50.703209,
      "longitude": 7.272873,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1620302335,
      "ems": null
    },
    {
      "latitude": 50.703918,
      "longitude": 7.271613,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1620302337,
      "ems": null
    },
    {
      "latitude": 50.704231,
      "longitude": 7.271042,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1620302338,
      "ems": null
    },
    {
      "latitude": 50.705162,
      "longitude": 7.269669,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1620302341,
      "ems": null
    },
    {
      "latitude": 50.705795,
      "longitude": 7.268792,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1620302343,
      "ems": null
    },
    {
      "latitude": 50.706345,
      "longitude": 7.268124,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1620302345,
      "ems": null
    },
    {
      "latitude": 50.707306,
      "longitude": 7.266617,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1620302348,
      "ems": null
    },
    {
      "latitude": 50.707672,
      "longitude": 7.265897,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1620302350,
      "ems": null
    },
    {
      "latitude": 50.709167,
      "longitude": 7.263031,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1620302356,
      "ems": null
    },
    {
      "latitude": 50.710693,
      "longitude": 7.260181,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1620302362,
      "ems": null
    },
    {
      "latitude": 50.72411,
      "longitude": 7.234268,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1620302414,
      "ems": null
    },
    {
      "latitude": 50.725971,
      "longitude": 7.231445,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1620302420,
      "ems": null
    },
    {
      "latitude": 50.728226,
      "longitude": 7.228113,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1620302427,
      "ems": null
    },
    {
      "latitude": 50.729279,
      "longitude": 7.226703,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1620302430,
      "ems": null
    },
    {
      "latitude": 50.730286,
      "longitude": 7.225441,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1620302433,
      "ems": null
    },
    {
      "latitude": 50.731606,
      "longitude": 7.22374,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1620302437,
      "ems": null
    },
    {
      "latitude": 50.7323,
      "longitude": 7.222843,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1620302439,
      "ems": null
    },
    {
      "latitude": 50.73262,
      "longitude": 7.222397,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1620302440,
      "ems": null
    },
    {
      "latitude": 50.733765,
      "longitude": 7.220987,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1620302443,
      "ems": null
    },
    {
      "latitude": 50.736877,
      "longitude": 7.217052,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1620302452,
      "ems": null
    },
    {
      "latitude": 50.738892,
      "longitude": 7.21438,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1620302458,
      "ems": null
    },
    {
      "latitude": 50.741089,
      "longitude": 7.211411,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1620302464,
      "ems": null
    },
    {
      "latitude": 50.743652,
      "longitude": 7.207774,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1620302472,
      "ems": null
    },
    {
      "latitude": 50.74585,
      "longitude": 7.204582,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1620302479,
      "ems": null
    },
    {
      "latitude": 50.748131,
      "longitude": 7.202225,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "timestamp": 1620302485,
      "ems": null
    },
    {
      "latitude": 50.748962,
      "longitude": 7.201686,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1620302487,
      "ems": null
    },
    {
      "latitude": 50.749386,
      "longitude": 7.201385,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1620302488,
      "ems": null
    },
    {
      "latitude": 50.751526,
      "longitude": 7.199979,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1620302493,
      "ems": null
    },
    {
      "latitude": 50.751755,
      "longitude": 7.199831,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1620302494,
      "ems": null
    },
    {
      "latitude": 50.752506,
      "longitude": 7.199326,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "timestamp": 1620302496,
      "ems": null
    },
    {
      "latitude": 50.75288,
      "longitude": 7.19902,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1620302497,
      "ems": null
    },
    {
      "latitude": 50.753811,
      "longitude": 7.198334,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1620302499,
      "ems": null
    },
    {
      "latitude": 50.755161,
      "longitude": 7.197418,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1620302503,
      "ems": null
    },
    {
      "latitude": 50.756092,
      "longitude": 7.196808,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1620302505,
      "ems": null
    },
    {
      "latitude": 50.756325,
      "longitude": 7.196655,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1620302506,
      "ems": null
    },
    {
      "latitude": 50.757301,
      "longitude": 7.195969,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1620302508,
      "ems": null
    },
    {
      "latitude": 50.758255,
      "longitude": 7.195302,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1620302511,
      "ems": null
    },
    {
      "latitude": 50.759537,
      "longitude": 7.194214,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1620302514,
      "ems": null
    },
    {
      "latitude": 50.760635,
      "longitude": 7.19315,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1620302517,
      "ems": null
    },
    {
      "latitude": 50.761734,
      "longitude": 7.19174,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1620302521,
      "ems": null
    },
    {
      "latitude": 50.762512,
      "longitude": 7.190552,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1620302523,
      "ems": null
    },
    {
      "latitude": 50.763931,
      "longitude": 7.187137,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1620302530,
      "ems": null
    },
    {
      "latitude": 50.764389,
      "longitude": 7.185652,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1620302532,
      "ems": null
    },
    {
      "latitude": 50.765305,
      "longitude": 7.181941,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1620302538,
      "ems": null
    },
    {
      "latitude": 50.765354,
      "longitude": 7.181625,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1620302539,
      "ems": null
    },
    {
      "latitude": 50.765682,
      "longitude": 7.179718,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1620302542,
      "ems": null
    },
    {
      "latitude": 50.765991,
      "longitude": 7.177858,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1620302545,
      "ems": null
    },
    {
      "latitude": 50.766613,
      "longitude": 7.174301,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1620302551,
      "ems": null
    },
    {
      "latitude": 50.766907,
      "longitude": 7.172662,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1620302554,
      "ems": null
    },
    {
      "latitude": 50.767914,
      "longitude": 7.168059,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1620302562,
      "ems": null
    },
    {
      "latitude": 50.76852,
      "longitude": 7.164688,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1620302570,
      "ems": null
    },
    {
      "latitude": 50.768429,
      "longitude": 7.162399,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1620302575,
      "ems": null
    },
    {
      "latitude": 50.767731,
      "longitude": 7.159968,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1620302580,
      "ems": null
    },
    {
      "latitude": 50.76741,
      "longitude": 7.1593,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1620302581,
      "ems": null
    },
    {
      "latitude": 50.764099,
      "longitude": 7.154999,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1620302595,
      "ems": null
    },
    {
      "latitude": 50.763584,
      "longitude": 7.154617,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1620302596,
      "ems": null
    },
    {
      "latitude": 50.762562,
      "longitude": 7.154007,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1620302599,
      "ems": null
    },
    {
      "latitude": 50.761734,
      "longitude": 7.153881,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1620302602,
      "ems": null
    },
    {
      "latitude": 50.758118,
      "longitude": 7.156702,
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1620302613,
      "ems": null
    },
    {
      "latitude": 50.757339,
      "longitude": 7.158558,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1620302617,
      "ems": null
    },
    {
      "latitude": 50.756882,
      "longitude": 7.160187,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1620302620,
      "ems": null
    },
    {
      "latitude": 50.756516,
      "longitude": 7.16175,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1620302623,
      "ems": null
    },
    {
      "latitude": 50.756138,
      "longitude": 7.163467,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1620302626,
      "ems": null
    },
    {
      "latitude": 50.755508,
      "longitude": 7.166649,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1620302632,
      "ems": null
    },
    {
      "latitude": 50.755188,
      "longitude": 7.168431,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1620302635,
      "ems": null
    },
    {
      "latitude": 50.754974,
      "longitude": 7.170105,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1620302638,
      "ems": null
    },
    {
      "latitude": 50.754929,
      "longitude": 7.172012,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1620302641,
      "ems": null
    },
    {
      "latitude": 50.75502,
      "longitude": 7.173309,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1620302643,
      "ems": null
    },
    {
      "latitude": 50.755112,
      "longitude": 7.17392,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1620302644,
      "ems": null
    },
    {
      "latitude": 50.755508,
      "longitude": 7.17526,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1620302647,
      "ems": null
    },
    {
      "latitude": 50.756287,
      "longitude": 7.176893,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1620302650,
      "ems": null
    },
    {
      "latitude": 50.756977,
      "longitude": 7.177811,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1620302653,
      "ems": null
    },
    {
      "latitude": 50.757935,
      "longitude": 7.178675,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1620302656,
      "ems": null
    },
    {
      "latitude": 50.758652,
      "longitude": 7.179337,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1620302659,
      "ems": null
    },
    {
      "latitude": 50.759628,
      "longitude": 7.180252,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1620302662,
      "ems": null
    },
    {
      "latitude": 50.76059,
      "longitude": 7.18105,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1620302665,
      "ems": null
    },
    {
      "latitude": 50.761185,
      "longitude": 7.181496,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1620302667,
      "ems": null
    },
    {
      "latitude": 50.761539,
      "longitude": 7.181702,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1620302668,
      "ems": null
    },
    {
      "latitude": 50.762329,
      "longitude": 7.182238,
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1620302671,
      "ems": null
    },
    {
      "latitude": 50.763351,
      "longitude": 7.18277,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1620302674,
      "ems": null
    },
    {
      "latitude": 50.763794,
      "longitude": 7.182832,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1620302676,
      "ems": null
    },
    {
      "latitude": 50.764984,
      "longitude": 7.182238,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1620302680,
      "ems": null
    },
    {
      "latitude": 50.765488,
      "longitude": 7.181273,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1620302683,
      "ems": null
    },
    {
      "latitude": 50.765682,
      "longitude": 7.179947,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1620302686,
      "ems": null
    },
    {
      "latitude": 50.765717,
      "longitude": 7.178452,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1620302689,
      "ems": null
    },
    {
      "latitude": 50.765717,
      "longitude": 7.178155,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1620302690,
      "ems": null
    },
    {
      "latitude": 50.766037,
      "longitude": 7.176151,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1620302694,
      "ems": null
    },
    {
      "latitude": 50.766403,
      "longitude": 7.17474,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1620302698,
      "ems": null
    },
    {
      "latitude": 50.766613,
      "longitude": 7.173843,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1620302700,
      "ems": null
    },
    {
      "latitude": 50.767124,
      "longitude": 7.171555,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1620302705,
      "ems": null
    },
    {
      "latitude": 50.767319,
      "longitude": 7.170583,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1620302707,
      "ems": null
    },
    {
      "latitude": 50.767448,
      "longitude": 7.169952,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1620302709,
      "ems": null
    },
    {
      "latitude": 50.769638,
      "longitude": 7.159882,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1620302736,
      "ems": null
    },
    {
      "latitude": 50.770569,
      "longitude": 7.15538,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1620302746,
      "ems": null
    },
    {
      "latitude": 50.771034,
      "longitude": 7.153015,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1620302752,
      "ems": null
    },
    {
      "latitude": 50.77153,
      "longitude": 7.150169,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1620302758,
      "ems": null
    },
    {
      "latitude": 50.772011,
      "longitude": 7.147598,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1620302764,
      "ems": null
    },
    {
      "latitude": 50.772491,
      "longitude": 7.14527,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1620302770,
      "ems": null
    },
    {
      "latitude": 50.772896,
      "longitude": 7.142715,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1620302776,
      "ems": null
    },
    {
      "latitude": 50.772942,
      "longitude": 7.142029,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1620302778,
      "ems": null
    },
    {
      "latitude": 50.772034,
      "longitude": 7.138515,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1620302785,
      "ems": null
    },
    {
      "latitude": 50.771034,
      "longitude": 7.137375,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1620302789,
      "ems": null
    },
    {
      "latitude": 50.770012,
      "longitude": 7.136765,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1620302792,
      "ems": null
    },
    {
      "latitude": 50.767776,
      "longitude": 7.136288,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1620302798,
      "ems": null
    },
    {
      "latitude": 50.766705,
      "longitude": 7.136154,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1620302800,
      "ems": null
    },
    {
      "latitude": 50.764656,
      "longitude": 7.135925,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1620302806,
      "ems": null
    },
    {
      "latitude": 50.763027,
      "longitude": 7.135773,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1620302810,
      "ems": null
    },
    {
      "latitude": 50.762096,
      "longitude": 7.135544,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1620302813,
      "ems": null
    },
    {
      "latitude": 50.760792,
      "longitude": 7.135468,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1620302816,
      "ems": null
    },
    {
      "latitude": 50.759628,
      "longitude": 7.135546,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1620302819,
      "ems": null
    },
    {
      "latitude": 50.757614,
      "longitude": 7.135991,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1620302825,
      "ems": null
    },
    {
      "latitude": 50.755207,
      "longitude": 7.136917,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1620302831,
      "ems": null
    },
    {
      "latitude": 50.75267,
      "longitude": 7.138218,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1620302837,
      "ems": null
    },
    {
      "latitude": 50.751717,
      "longitude": 7.139206,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1620302840,
      "ems": null
    },
    {
      "latitude": 50.750179,
      "longitude": 7.142563,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1620302846,
      "ems": null
    },
    {
      "latitude": 50.749851,
      "longitude": 7.144623,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1620302849,
      "ems": null
    },
    {
      "latitude": 50.749466,
      "longitude": 7.148537,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1620302855,
      "ems": null
    },
    {
      "latitude": 50.749294,
      "longitude": 7.150345,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1620302858,
      "ems": null
    },
    {
      "latitude": 50.749062,
      "longitude": 7.152176,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1620302861,
      "ems": null
    },
    {
      "latitude": 50.748829,
      "longitude": 7.153931,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1620302864,
      "ems": null
    },
    {
      "latitude": 50.748596,
      "longitude": 7.155838,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1620302867,
      "ems": null
    },
    {
      "latitude": 50.748409,
      "longitude": 7.157516,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1620302870,
      "ems": null
    },
    {
      "latitude": 50.748131,
      "longitude": 7.160873,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1620302876,
      "ems": null
    },
    {
      "latitude": 50.747589,
      "longitude": 7.16561,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1620302885,
      "ems": null
    },
    {
      "latitude": 50.747059,
      "longitude": 7.169037,
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1620302891,
      "ems": null
    },
    {
      "latitude": 50.746639,
      "longitude": 7.172394,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1620302897,
      "ems": null
    },
    {
      "latitude": 50.746765,
      "longitude": 7.17385,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1620302900,
      "ems": null
    },
    {
      "latitude": 50.746948,
      "longitude": 7.175111,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1620302903,
      "ems": null
    },
    {
      "latitude": 50.747223,
      "longitude": 7.176744,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1620302906,
      "ems": null
    },
    {
      "latitude": 50.747681,
      "longitude": 7.179862,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1620302912,
      "ems": null
    },
    {
      "latitude": 50.748093,
      "longitude": 7.183203,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1620302918,
      "ems": null
    },
    {
      "latitude": 50.748871,
      "longitude": 7.189735,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1620302930,
      "ems": null
    },
    {
      "latitude": 50.749008,
      "longitude": 7.191591,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1620302933,
      "ems": null
    },
    {
      "latitude": 50.750225,
      "longitude": 7.197342,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1620302945,
      "ems": null
    },
    {
      "latitude": 50.751572,
      "longitude": 7.199682,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1620302951,
      "ems": null
    },
    {
      "latitude": 50.753204,
      "longitude": 7.201385,
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1620302957,
      "ems": null
    },
    {
      "latitude": 50.754135,
      "longitude": 7.201983,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1620302960,
      "ems": null
    },
    {
      "latitude": 50.75502,
      "longitude": 7.202377,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1620302963,
      "ems": null
    },
    {
      "latitude": 50.756836,
      "longitude": 7.202206,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1620302969,
      "ems": null
    },
    {
      "latitude": 50.757675,
      "longitude": 7.201767,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1620302972,
      "ems": null
    },
    {
      "latitude": 50.758652,
      "longitude": 7.201004,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1620302975,
      "ems": null
    },
    {
      "latitude": 50.759308,
      "longitude": 7.200425,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1620302978,
      "ems": null
    },
    {
      "latitude": 50.759903,
      "longitude": 7.199757,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1620302980,
      "ems": null
    },
    {
      "latitude": 50.760315,
      "longitude": 7.199237,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1620302982,
      "ems": null
    },
    {
      "latitude": 50.761353,
      "longitude": 7.197876,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1620302987,
      "ems": null
    },
    {
      "latitude": 50.761864,
      "longitude": 7.196732,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1620302990,
      "ems": null
    },
    {
      "latitude": 50.762283,
      "longitude": 7.194061,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1620302996,
      "ems": null
    },
    {
      "latitude": 50.763016,
      "longitude": 7.190403,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1620303004,
      "ems": null
    },
    {
      "latitude": 50.763428,
      "longitude": 7.18877,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1620303008,
      "ems": null
    },
    {
      "latitude": 50.763725,
      "longitude": 7.187424,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1620303011,
      "ems": null
    },
    {
      "latitude": 50.764004,
      "longitude": 7.186127,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1620303014,
      "ems": null
    },
    {
      "latitude": 50.764252,
      "longitude": 7.184762,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1620303017,
      "ems": null
    },
    {
      "latitude": 50.764332,
      "longitude": 7.184372,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1620303018,
      "ems": null
    },
    {
      "latitude": 50.764435,
      "longitude": 7.183871,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1620303019,
      "ems": null
    },
    {
      "latitude": 50.765121,
      "longitude": 7.180786,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1620303026,
      "ems": null
    },
    {
      "latitude": 50.766052,
      "longitude": 7.176361,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1620303036,
      "ems": null
    },
    {
      "latitude": 50.767033,
      "longitude": 7.17186,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1620303046,
      "ems": null
    },
    {
      "latitude": 50.770569,
      "longitude": 7.155228,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1620303086,
      "ems": null
    },
    {
      "latitude": 50.771034,
      "longitude": 7.153015,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1620303091,
      "ems": null
    },
    {
      "latitude": 50.77153,
      "longitude": 7.150244,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1620303098,
      "ems": null
    },
    {
      "latitude": 50.772152,
      "longitude": 7.145844,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1620303107,
      "ems": null
    },
    {
      "latitude": 50.772663,
      "longitude": 7.143173,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1620303113,
      "ems": null
    },
    {
      "latitude": 50.772942,
      "longitude": 7.141418,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1620303117,
      "ems": null
    },
    {
      "latitude": 50.772942,
      "longitude": 7.140503,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1620303119,
      "ems": null
    },
    {
      "latitude": 50.772629,
      "longitude": 7.139109,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1620303122,
      "ems": null
    },
    {
      "latitude": 50.771034,
      "longitude": 7.137527,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1620303128,
      "ems": null
    },
    {
      "latitude": 50.770058,
      "longitude": 7.137222,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1620303131,
      "ems": null
    },
    {
      "latitude": 50.768845,
      "longitude": 7.136841,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1620303135,
      "ems": null
    },
    {
      "latitude": 50.767963,
      "longitude": 7.136612,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1620303137,
      "ems": null
    },
    {
      "latitude": 50.767033,
      "longitude": 7.13623,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1620303140,
      "ems": null
    },
    {
      "latitude": 50.766037,
      "longitude": 7.135843,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1620303143,
      "ems": null
    },
    {
      "latitude": 50.76503,
      "longitude": 7.13562,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1620303146,
      "ems": null
    },
    {
      "latitude": 50.764099,
      "longitude": 7.135544,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1620303149,
      "ems": null
    },
    {
      "latitude": 50.763821,
      "longitude": 7.135544,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1620303150,
      "ems": null
    },
    {
      "latitude": 50.763027,
      "longitude": 7.135468,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1620303152,
      "ems": null
    },
    {
      "latitude": 50.76265,
      "longitude": 7.135472,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1620303153,
      "ems": null
    },
    {
      "latitude": 50.759628,
      "longitude": 7.136065,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1620303162,
      "ems": null
    },
    {
      "latitude": 50.75758,
      "longitude": 7.136841,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1620303167,
      "ems": null
    },
    {
      "latitude": 50.756371,
      "longitude": 7.137146,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1620303170,
      "ems": null
    },
    {
      "latitude": 50.755142,
      "longitude": 7.13755,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1620303173,
      "ems": null
    },
    {
      "latitude": 50.753998,
      "longitude": 7.137985,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1620303176,
      "ems": null
    },
    {
      "latitude": 50.753765,
      "longitude": 7.138138,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1620303177,
      "ems": null
    },
    {
      "latitude": 50.753017,
      "longitude": 7.138748,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1620303179,
      "ems": null
    },
    {
      "latitude": 50.752716,
      "longitude": 7.139109,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1620303180,
      "ems": null
    },
    {
      "latitude": 50.752075,
      "longitude": 7.140223,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1620303182,
      "ems": null
    },
    {
      "latitude": 50.751984,
      "longitude": 7.140445,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1620303183,
      "ems": null
    },
    {
      "latitude": 50.751526,
      "longitude": 7.142004,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1620303185,
      "ems": null
    },
    {
      "latitude": 50.751484,
      "longitude": 7.142258,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1620303186,
      "ems": null
    },
    {
      "latitude": 50.751297,
      "longitude": 7.143784,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1620303188,
      "ems": null
    },
    {
      "latitude": 50.751068,
      "longitude": 7.146013,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1620303192,
      "ems": null
    },
    {
      "latitude": 50.750885,
      "longitude": 7.147497,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1620303194,
      "ems": null
    },
    {
      "latitude": 50.750599,
      "longitude": 7.149429,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1620303197,
      "ems": null
    },
    {
      "latitude": 50.750553,
      "longitude": 7.149658,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1620303198,
      "ems": null
    },
    {
      "latitude": 50.750244,
      "longitude": 7.151061,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1620303200,
      "ems": null
    },
    {
      "latitude": 50.749924,
      "longitude": 7.152693,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1620303203,
      "ems": null
    },
    {
      "latitude": 50.74976,
      "longitude": 7.153397,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1620303205,
      "ems": null
    },
    {
      "latitude": 50.749435,
      "longitude": 7.154999,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1620303208,
      "ems": null
    },
    {
      "latitude": 50.748783,
      "longitude": 7.159576,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1620303216,
      "ems": null
    },
    {
      "latitude": 50.748367,
      "longitude": 7.162789,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1620303222,
      "ems": null
    },
    {
      "latitude": 50.74799,
      "longitude": 7.165527,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1620303227,
      "ems": null
    },
    {
      "latitude": 50.747711,
      "longitude": 7.167587,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1620303231,
      "ems": null
    },
    {
      "latitude": 50.747543,
      "longitude": 7.168876,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1620303234,
      "ems": null
    },
    {
      "latitude": 50.74736,
      "longitude": 7.170732,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1620303237,
      "ems": null
    },
    {
      "latitude": 50.74736,
      "longitude": 7.172142,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1620303240,
      "ems": null
    },
    {
      "latitude": 50.747543,
      "longitude": 7.173627,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1620303242,
      "ems": null
    },
    {
      "latitude": 50.747589,
      "longitude": 7.173924,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1620303243,
      "ems": null
    },
    {
      "latitude": 50.747807,
      "longitude": 7.175522,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1620303246,
      "ems": null
    },
    {
      "latitude": 50.747944,
      "longitude": 7.17659,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1620303248,
      "ems": null
    },
    {
      "latitude": 50.74799,
      "longitude": 7.177124,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1620303249,
      "ems": null
    },
    {
      "latitude": 50.748039,
      "longitude": 7.177429,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1620303250,
      "ems": null
    },
    {
      "latitude": 50.748138,
      "longitude": 7.178304,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1620303252,
      "ems": null
    },
    {
      "latitude": 50.748363,
      "longitude": 7.180252,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1620303255,
      "ems": null
    },
    {
      "latitude": 50.748455,
      "longitude": 7.18132,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1620303257,
      "ems": null
    },
    {
      "latitude": 50.74855,
      "longitude": 7.181867,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1620303258,
      "ems": null
    },
    {
      "latitude": 50.748779,
      "longitude": 7.183425,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1620303261,
      "ems": null
    },
    {
      "latitude": 50.749008,
      "longitude": 7.184539,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1620303263,
      "ems": null
    },
    {
      "latitude": 50.749107,
      "longitude": 7.185135,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1620303265,
      "ems": null
    },
    {
      "latitude": 50.749249,
      "longitude": 7.18605,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1620303266,
      "ems": null
    },
    {
      "latitude": 50.74934,
      "longitude": 7.186432,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1620303267,
      "ems": null
    },
    {
      "latitude": 50.749619,
      "longitude": 7.188034,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1620303270,
      "ems": null
    },
    {
      "latitude": 50.749878,
      "longitude": 7.189364,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1620303273,
      "ems": null
    },
    {
      "latitude": 50.750271,
      "longitude": 7.190857,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1620303275,
      "ems": null
    },
    {
      "latitude": 50.75069,
      "longitude": 7.19223,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1620303278,
      "ems": null
    },
    {
      "latitude": 50.750931,
      "longitude": 7.192927,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1620303280,
      "ems": null
    },
    {
      "latitude": 50.751846,
      "longitude": 7.194709,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1620303284,
      "ems": null
    },
    {
      "latitude": 50.752228,
      "longitude": 7.195129,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1620303286,
      "ems": null
    },
    {
      "latitude": 50.752625,
      "longitude": 7.1956,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1620303287,
      "ems": null
    },
    {
      "latitude": 50.754089,
      "longitude": 7.196565,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1620303292,
      "ems": null
    },
    {
      "latitude": 50.754879,
      "longitude": 7.19696,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1620303294,
      "ems": null
    },
    {
      "latitude": 50.7556,
      "longitude": 7.197307,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1620303297,
      "ems": null
    },
    {
      "latitude": 50.75592,
      "longitude": 7.197455,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1620303298,
      "ems": null
    },
    {
      "latitude": 50.756699,
      "longitude": 7.197826,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1620303301,
      "ems": null
    },
    {
      "latitude": 50.757767,
      "longitude": 7.198181,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1620303304,
      "ems": null
    },
    {
      "latitude": 50.758484,
      "longitude": 7.198272,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1620303307,
      "ems": null
    },
    {
      "latitude": 50.758987,
      "longitude": 7.198272,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1620303308,
      "ems": null
    },
    {
      "latitude": 50.759441,
      "longitude": 7.198257,
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1620303310,
      "ems": null
    },
    {
      "latitude": 50.760422,
      "longitude": 7.197876,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1620303313,
      "ems": null
    },
    {
      "latitude": 50.762051,
      "longitude": 7.194672,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1620303322,
      "ems": null
    },
    {
      "latitude": 50.762283,
      "longitude": 7.193146,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1620303325,
      "ems": null
    },
    {
      "latitude": 50.76265,
      "longitude": 7.191665,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1620303328,
      "ems": null
    },
    {
      "latitude": 50.763016,
      "longitude": 7.190181,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1620303331,
      "ems": null
    },
    {
      "latitude": 50.763245,
      "longitude": 7.18929,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1620303333,
      "ems": null
    },
    {
      "latitude": 50.763611,
      "longitude": 7.187731,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1620303336,
      "ems": null
    },
    {
      "latitude": 50.76384,
      "longitude": 7.186914,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1620303338,
      "ems": null
    },
    {
      "latitude": 50.764526,
      "longitude": 7.183871,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1620303345,
      "ems": null
    },
    {
      "latitude": 50.764984,
      "longitude": 7.181792,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1620303350,
      "ems": null
    },
    {
      "latitude": 50.765305,
      "longitude": 7.180456,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1620303353,
      "ems": null
    },
    {
      "latitude": 50.765682,
      "longitude": 7.178497,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1620303357,
      "ems": null
    },
    {
      "latitude": 50.766632,
      "longitude": 7.17385,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1620303367,
      "ems": null
    },
    {
      "latitude": 50.767319,
      "longitude": 7.170583,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1620303374,
      "ems": null
    }
  ],
};
    