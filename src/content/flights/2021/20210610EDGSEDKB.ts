import { Flight } from "../../../types/Flight";

export const flight: Flight = {
  identification: {
    id: "20210610EDGSEDKB",
    callsign: "DEFCZ",
    name: "PPL Check ride",
    description: "(second leg) I passed!",
  },
  pilotLog: {
    departure: new Date(2021, 5, 10, 10, 28).getTime(),
    arrival: new Date(2021, 5, 10, 11, 42).getTime(),
    singleEnginePistonTime: 74,
    picTime: 0,
    dualTime: 74,
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
      registration: "PH-IOT",
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
      "latitude": 50.733654,
      "longitude": 8.041534,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1623321087,
      "ems": null
    },
    {
      "latitude": 50.730835,
      "longitude": 8.03212,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1623321107,
      "ems": null
    },
    {
      "latitude": 50.72723,
      "longitude": 8.02681,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 221,
      "squawk": "4451",
      "timestamp": 1623321121,
      "ems": null
    },
    {
      "latitude": 50.724884,
      "longitude": 8.024028,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 214,
      "squawk": "4451",
      "timestamp": 1623321130,
      "ems": null
    },
    {
      "latitude": 50.721596,
      "longitude": 8.020554,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 214,
      "squawk": "4451",
      "timestamp": 1623321140,
      "ems": null
    },
    {
      "latitude": 50.718384,
      "longitude": 8.017349,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 210,
      "squawk": "4451",
      "timestamp": 1623321149,
      "ems": null
    },
    {
      "latitude": 50.712158,
      "longitude": 8.012225,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1623321166,
      "ems": null
    },
    {
      "latitude": 50.706093,
      "longitude": 8.008118,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1623321182,
      "ems": null
    },
    {
      "latitude": 50.699345,
      "longitude": 8.007507,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 181,
      "squawk": "4451",
      "timestamp": 1623321197,
      "ems": null
    },
    {
      "latitude": 50.695953,
      "longitude": 8.007474,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 180,
      "squawk": "4451",
      "timestamp": 1623321204,
      "ems": null
    },
    {
      "latitude": 50.692795,
      "longitude": 8.007697,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 176,
      "squawk": "4451",
      "timestamp": 1623321211,
      "ems": null
    },
    {
      "latitude": 50.679382,
      "longitude": 8.006138,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 206,
      "squawk": "4451",
      "timestamp": 1623321242,
      "ems": null
    },
    {
      "latitude": 50.66629,
      "longitude": 7.99196,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 213,
      "squawk": "4451",
      "timestamp": 1623321280,
      "ems": null
    },
    {
      "latitude": 50.664963,
      "longitude": 7.990674,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 211,
      "squawk": "4451",
      "timestamp": 1623321284,
      "ems": null
    },
    {
      "latitude": 50.662125,
      "longitude": 7.988145,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1623321292,
      "ems": null
    },
    {
      "latitude": 50.657726,
      "longitude": 7.984537,
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
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1623321304,
      "ems": null
    },
    {
      "latitude": 50.652885,
      "longitude": 7.980306,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1623321316,
      "ems": null
    },
    {
      "latitude": 50.647293,
      "longitude": 7.975641,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1623321331,
      "ems": null
    },
    {
      "latitude": 50.640968,
      "longitude": 7.970136,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 211,
      "squawk": "4451",
      "timestamp": 1623321348,
      "ems": null
    },
    {
      "latitude": 50.638733,
      "longitude": 7.967983,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 210,
      "squawk": "4451",
      "timestamp": 1623321355,
      "ems": null
    },
    {
      "latitude": 50.630959,
      "longitude": 7.960114,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 213,
      "squawk": "4451",
      "timestamp": 1623321376,
      "ems": null
    },
    {
      "latitude": 50.625374,
      "longitude": 7.95425,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 217,
      "squawk": "4451",
      "timestamp": 1623321392,
      "ems": null
    },
    {
      "latitude": 50.622437,
      "longitude": 7.950632,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 217,
      "squawk": "4451",
      "timestamp": 1623321400,
      "ems": null
    },
    {
      "latitude": 50.61795,
      "longitude": 7.94485,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 220,
      "squawk": "4451",
      "timestamp": 1623321413,
      "ems": null
    },
    {
      "latitude": 50.613785,
      "longitude": 7.939068,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 222,
      "squawk": "4451",
      "timestamp": 1623321425,
      "ems": null
    },
    {
      "latitude": 50.610809,
      "longitude": 7.934659,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 224,
      "squawk": "4451",
      "timestamp": 1623321434,
      "ems": null
    },
    {
      "latitude": 50.608841,
      "longitude": 7.931984,
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
      "heading": 216,
      "squawk": "4451",
      "timestamp": 1623321440,
      "ems": null
    },
    {
      "latitude": 50.602798,
      "longitude": 7.928949,
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
      "heading": 181,
      "squawk": "4451",
      "timestamp": 1623321455,
      "ems": null
    },
    {
      "latitude": 50.598953,
      "longitude": 7.929455,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 175,
      "squawk": "4451",
      "timestamp": 1623321464,
      "ems": null
    },
    {
      "latitude": 50.596512,
      "longitude": 7.929457,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 181,
      "squawk": "4451",
      "timestamp": 1623321470,
      "ems": null
    },
    {
      "latitude": 50.595066,
      "longitude": 7.929382,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 182,
      "squawk": "4451",
      "timestamp": 1623321473,
      "ems": null
    },
    {
      "latitude": 50.593781,
      "longitude": 7.929382,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 181,
      "squawk": "4451",
      "timestamp": 1623321476,
      "ems": null
    },
    {
      "latitude": 50.591576,
      "longitude": 7.929457,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1623321481,
      "ems": null
    },
    {
      "latitude": 50.588642,
      "longitude": 7.929531,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 179,
      "squawk": "4451",
      "timestamp": 1623321487,
      "ems": null
    },
    {
      "latitude": 50.585907,
      "longitude": 7.929599,
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
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1623321494,
      "ems": null
    },
    {
      "latitude": 50.583149,
      "longitude": 7.929679,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 180,
      "squawk": "4451",
      "timestamp": 1623321500,
      "ems": null
    },
    {
      "latitude": 50.57959,
      "longitude": 7.929021,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1623321508,
      "ems": null
    },
    {
      "latitude": 50.577423,
      "longitude": 7.926858,
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
      "heading": 219,
      "squawk": "4451",
      "timestamp": 1623321515,
      "ems": null
    },
    {
      "latitude": 50.576294,
      "longitude": 7.925407,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 219,
      "squawk": "4451",
      "timestamp": 1623321518,
      "ems": null
    },
    {
      "latitude": 50.572311,
      "longitude": 7.92042,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "squawk": "4451",
      "timestamp": 1623321530,
      "ems": null
    },
    {
      "latitude": 50.57135,
      "longitude": 7.919191,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 219,
      "squawk": "4451",
      "timestamp": 1623321533,
      "ems": null
    },
    {
      "latitude": 50.565647,
      "longitude": 7.911492,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 220,
      "squawk": "4451",
      "timestamp": 1623321551,
      "ems": null
    },
    {
      "latitude": 50.56279,
      "longitude": 7.90741,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 224,
      "squawk": "4451",
      "timestamp": 1623321560,
      "ems": null
    },
    {
      "latitude": 50.558338,
      "longitude": 7.900655,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 227,
      "squawk": "4451",
      "timestamp": 1623321575,
      "ems": null
    },
    {
      "latitude": 50.557526,
      "longitude": 7.899314,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623321578,
      "ems": null
    },
    {
      "latitude": 50.555695,
      "longitude": 7.896568,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 223,
      "squawk": "4451",
      "timestamp": 1623321584,
      "ems": null
    },
    {
      "latitude": 50.553867,
      "longitude": 7.893825,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623321590,
      "ems": null
    },
    {
      "latitude": 50.550842,
      "longitude": 7.887822,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 233,
      "squawk": "4451",
      "timestamp": 1623321601,
      "ems": null
    },
    {
      "latitude": 50.548981,
      "longitude": 7.884175,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 230,
      "squawk": "4451",
      "timestamp": 1623321608,
      "ems": null
    },
    {
      "latitude": 50.54805,
      "longitude": 7.882546,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 227,
      "squawk": "4451",
      "timestamp": 1623321611,
      "ems": null
    },
    {
      "latitude": 50.546356,
      "longitude": 7.879799,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623321617,
      "ems": null
    },
    {
      "latitude": 50.544434,
      "longitude": 7.876691,
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
      "heading": 226,
      "squawk": "4451",
      "timestamp": 1623321623,
      "ems": null
    },
    {
      "latitude": 50.542648,
      "longitude": 7.873931,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 223,
      "squawk": "4451",
      "timestamp": 1623321629,
      "ems": null
    },
    {
      "latitude": 50.540043,
      "longitude": 7.869923,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623321638,
      "ems": null
    },
    {
      "latitude": 50.537567,
      "longitude": 7.865922,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623321647,
      "ems": null
    },
    {
      "latitude": 50.5359,
      "longitude": 7.863242,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623321653,
      "ems": null
    },
    {
      "latitude": 50.534039,
      "longitude": 7.860347,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 223,
      "squawk": "4451",
      "timestamp": 1623321659,
      "ems": null
    },
    {
      "latitude": 50.532349,
      "longitude": 7.857754,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623321665,
      "ems": null
    },
    {
      "latitude": 50.53064,
      "longitude": 7.855002,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623321671,
      "ems": null
    },
    {
      "latitude": 50.528732,
      "longitude": 7.851972,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623321677,
      "ems": null
    },
    {
      "latitude": 50.527039,
      "longitude": 7.849442,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 221,
      "squawk": "4451",
      "timestamp": 1623321683,
      "ems": null
    },
    {
      "latitude": 50.525253,
      "longitude": 7.846912,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 220,
      "squawk": "4451",
      "timestamp": 1623321689,
      "ems": null
    },
    {
      "latitude": 50.523422,
      "longitude": 7.844527,
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
      "heading": 220,
      "squawk": "4451",
      "timestamp": 1623321695,
      "ems": null
    },
    {
      "latitude": 50.521454,
      "longitude": 7.841564,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623321701,
      "ems": null
    },
    {
      "latitude": 50.517975,
      "longitude": 7.83585,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623321713,
      "ems": null
    },
    {
      "latitude": 50.515457,
      "longitude": 7.831879,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 226,
      "squawk": "4451",
      "timestamp": 1623321722,
      "ems": null
    },
    {
      "latitude": 50.513088,
      "longitude": 7.827833,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 227,
      "squawk": "4451",
      "timestamp": 1623321731,
      "ems": null
    },
    {
      "latitude": 50.511475,
      "longitude": 7.825085,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 226,
      "squawk": "4451",
      "timestamp": 1623321737,
      "ems": null
    },
    {
      "latitude": 50.508957,
      "longitude": 7.820965,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623321746,
      "ems": null
    },
    {
      "latitude": 50.506245,
      "longitude": 7.816624,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623321755,
      "ems": null
    },
    {
      "latitude": 50.504524,
      "longitude": 7.813729,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 227,
      "squawk": "4451",
      "timestamp": 1623321761,
      "ems": null
    },
    {
      "latitude": 50.502869,
      "longitude": 7.810773,
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
      "heading": 230,
      "squawk": "4451",
      "timestamp": 1623321767,
      "ems": null
    },
    {
      "latitude": 50.502102,
      "longitude": 7.809275,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 230,
      "squawk": "4451",
      "timestamp": 1623321770,
      "ems": null
    },
    {
      "latitude": 50.501266,
      "longitude": 7.807665,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 231,
      "squawk": "4451",
      "timestamp": 1623321773,
      "ems": null
    },
    {
      "latitude": 50.500443,
      "longitude": 7.806075,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 231,
      "squawk": "4451",
      "timestamp": 1623321776,
      "ems": null
    },
    {
      "latitude": 50.498795,
      "longitude": 7.802895,
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
      "heading": 230,
      "squawk": "4451",
      "timestamp": 1623321782,
      "ems": null
    },
    {
      "latitude": 50.496422,
      "longitude": 7.798289,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1623321791,
      "ems": null
    },
    {
      "latitude": 50.494514,
      "longitude": 7.795022,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 227,
      "squawk": "4451",
      "timestamp": 1623321798,
      "ems": null
    },
    {
      "latitude": 50.491207,
      "longitude": 7.788639,
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
      "heading": 232,
      "squawk": "4451",
      "timestamp": 1623321810,
      "ems": null
    },
    {
      "latitude": 50.489502,
      "longitude": 7.785187,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 231,
      "squawk": "4451",
      "timestamp": 1623321815,
      "ems": null
    },
    {
      "latitude": 50.487114,
      "longitude": 7.779731,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 237,
      "squawk": "4451",
      "timestamp": 1623321824,
      "ems": null
    },
    {
      "latitude": 50.486389,
      "longitude": 7.777959,
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
      "heading": 238,
      "squawk": "4451",
      "timestamp": 1623321827,
      "ems": null
    },
    {
      "latitude": 50.485062,
      "longitude": 7.774273,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1623321834,
      "ems": null
    },
    {
      "latitude": 50.483669,
      "longitude": 7.769635,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1623321841,
      "ems": null
    },
    {
      "latitude": 50.48085,
      "longitude": 7.762419,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 234,
      "squawk": "4451",
      "timestamp": 1623321854,
      "ems": null
    },
    {
      "latitude": 50.476498,
      "longitude": 7.753156,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 234,
      "squawk": "4451",
      "timestamp": 1623321873,
      "ems": null
    },
    {
      "latitude": 50.475861,
      "longitude": 7.751722,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "squawk": "4451",
      "timestamp": 1623321875,
      "ems": null
    },
    {
      "latitude": 50.473518,
      "longitude": 7.747143,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 233,
      "squawk": "4451",
      "timestamp": 1623321885,
      "ems": null
    },
    {
      "latitude": 50.472198,
      "longitude": 7.743844,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1623321891,
      "ems": null
    },
    {
      "latitude": 50.471649,
      "longitude": 7.742253,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1623321894,
      "ems": null
    },
    {
      "latitude": 50.471054,
      "longitude": 7.740591,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1623321897,
      "ems": null
    },
    {
      "latitude": 50.469864,
      "longitude": 7.737049,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1623321903,
      "ems": null
    },
    {
      "latitude": 50.468678,
      "longitude": 7.733262,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1623321909,
      "ems": null
    },
    {
      "latitude": 50.464535,
      "longitude": 7.719306,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1623321930,
      "ems": null
    },
    {
      "latitude": 50.463364,
      "longitude": 7.715293,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1623321936,
      "ems": null
    },
    {
      "latitude": 50.462128,
      "longitude": 7.71139,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1623321942,
      "ems": null
    },
    {
      "latitude": 50.460938,
      "longitude": 7.707632,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1623321948,
      "ems": null
    },
    {
      "latitude": 50.459694,
      "longitude": 7.704014,
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
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1623321954,
      "ems": null
    },
    {
      "latitude": 50.45853,
      "longitude": 7.700303,
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
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1623321960,
      "ems": null
    },
    {
      "latitude": 50.457367,
      "longitude": 7.696294,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1623321966,
      "ems": null
    },
    {
      "latitude": 50.455269,
      "longitude": 7.688871,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1623321978,
      "ems": null
    },
    {
      "latitude": 50.454155,
      "longitude": 7.684937,
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
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1623321984,
      "ems": null
    },
    {
      "latitude": 50.452152,
      "longitude": 7.677217,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1623321996,
      "ems": null
    },
    {
      "latitude": 50.451126,
      "longitude": 7.673579,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1623322002,
      "ems": null
    },
    {
      "latitude": 50.450058,
      "longitude": 7.669868,
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
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1623322008,
      "ems": null
    },
    {
      "latitude": 50.448986,
      "longitude": 7.666156,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 248,
      "squawk": "4451",
      "timestamp": 1623322014,
      "ems": null
    },
    {
      "latitude": 50.447914,
      "longitude": 7.661034,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1623322022,
      "ems": null
    },
    {
      "latitude": 50.447525,
      "longitude": 7.659133,
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
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1623322025,
      "ems": null
    },
    {
      "latitude": 50.447159,
      "longitude": 7.657471,
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
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1623322027,
      "ems": null
    },
    {
      "latitude": 50.44693,
      "longitude": 7.656386,
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
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1623322029,
      "ems": null
    },
    {
      "latitude": 50.446152,
      "longitude": 7.6527,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1623322034,
      "ems": null
    },
    {
      "latitude": 50.445236,
      "longitude": 7.648436,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1623322041,
      "ems": null
    },
    {
      "latitude": 50.444469,
      "longitude": 7.644629,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1623322047,
      "ems": null
    },
    {
      "latitude": 50.443634,
      "longitude": 7.640769,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1623322053,
      "ems": null
    },
    {
      "latitude": 50.442421,
      "longitude": 7.634904,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1623322062,
      "ems": null
    },
    {
      "latitude": 50.441631,
      "longitude": 7.631118,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1623322068,
      "ems": null
    },
    {
      "latitude": 50.440933,
      "longitude": 7.627258,
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
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1623322074,
      "ems": null
    },
    {
      "latitude": 50.440201,
      "longitude": 7.623427,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "timestamp": 1623322080,
      "ems": null
    },
    {
      "latitude": 50.439117,
      "longitude": 7.61798,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1623322089,
      "ems": null
    },
    {
      "latitude": 50.438374,
      "longitude": 7.613971,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1623322095,
      "ems": null
    },
    {
      "latitude": 50.437908,
      "longitude": 7.609591,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1623322101,
      "ems": null
    },
    {
      "latitude": 50.437683,
      "longitude": 7.607526,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1623322104,
      "ems": null
    },
    {
      "latitude": 50.437534,
      "longitude": 7.605286,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1623322107,
      "ems": null
    },
    {
      "latitude": 50.437443,
      "longitude": 7.603133,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1623322110,
      "ems": null
    },
    {
      "latitude": 50.43718,
      "longitude": 7.59907,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1623322116,
      "ems": null
    },
    {
      "latitude": 50.437023,
      "longitude": 7.597194,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1623322119,
      "ems": null
    },
    {
      "latitude": 50.436695,
      "longitude": 7.590885,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623322128,
      "ems": null
    },
    {
      "latitude": 50.436649,
      "longitude": 7.590588,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623322129,
      "ems": null
    },
    {
      "latitude": 50.436604,
      "longitude": 7.588806,
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623322131,
      "ems": null
    },
    {
      "latitude": 50.436493,
      "longitude": 7.58671,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623322134,
      "ems": null
    },
    {
      "latitude": 50.43623,
      "longitude": 7.582497,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1623322140,
      "ems": null
    },
    {
      "latitude": 50.435905,
      "longitude": 7.578413,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1623322146,
      "ems": null
    },
    {
      "latitude": 50.43544,
      "longitude": 7.574278,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1623322152,
      "ems": null
    },
    {
      "latitude": 50.435207,
      "longitude": 7.572178,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1623322155,
      "ems": null
    },
    {
      "latitude": 50.435028,
      "longitude": 7.57023,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1623322158,
      "ems": null
    },
    {
      "latitude": 50.434834,
      "longitude": 7.568095,
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1623322161,
      "ems": null
    },
    {
      "latitude": 50.434021,
      "longitude": 7.560184,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1623322173,
      "ems": null
    },
    {
      "latitude": 50.433197,
      "longitude": 7.552161,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1623322185,
      "ems": null
    },
    {
      "latitude": 50.432877,
      "longitude": 7.548258,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1623322191,
      "ems": null
    },
    {
      "latitude": 50.43219,
      "longitude": 7.540741,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1623322203,
      "ems": null
    },
    {
      "latitude": 50.431808,
      "longitude": 7.536844,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1623322209,
      "ems": null
    },
    {
      "latitude": 50.430832,
      "longitude": 7.5266,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1623322225,
      "ems": null
    },
    {
      "latitude": 50.430504,
      "longitude": 7.522814,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1623322231,
      "ems": null
    },
    {
      "latitude": 50.430038,
      "longitude": 7.515516,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1623322242,
      "ems": null
    },
    {
      "latitude": 50.429626,
      "longitude": 7.51154,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1623322248,
      "ems": null
    },
    {
      "latitude": 50.429153,
      "longitude": 7.507299,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1623322254,
      "ems": null
    },
    {
      "latitude": 50.428665,
      "longitude": 7.502722,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1623322261,
      "ems": null
    },
    {
      "latitude": 50.42775,
      "longitude": 7.493977,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1623322274,
      "ems": null
    },
    {
      "latitude": 50.4272,
      "longitude": 7.486515,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1623322285,
      "ems": null
    },
    {
      "latitude": 50.426826,
      "longitude": 7.480724,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1623322294,
      "ems": null
    },
    {
      "latitude": 50.426735,
      "longitude": 7.475974,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1623322300,
      "ems": null
    },
    {
      "latitude": 50.426514,
      "longitude": 7.47157,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1623322306,
      "ems": null
    },
    {
      "latitude": 50.426285,
      "longitude": 7.467306,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1623322312,
      "ems": null
    },
    {
      "latitude": 50.425991,
      "longitude": 7.463206,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1623322319,
      "ems": null
    },
    {
      "latitude": 50.425617,
      "longitude": 7.45749,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1623322327,
      "ems": null
    },
    {
      "latitude": 50.425369,
      "longitude": 7.451766,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623322336,
      "ems": null
    },
    {
      "latitude": 50.425152,
      "longitude": 7.446578,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1623322345,
      "ems": null
    },
    {
      "latitude": 50.424873,
      "longitude": 7.442569,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1623322351,
      "ems": null
    },
    {
      "latitude": 50.424545,
      "longitude": 7.438487,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1623322357,
      "ems": null
    },
    {
      "latitude": 50.424225,
      "longitude": 7.434564,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1623322363,
      "ems": null
    },
    {
      "latitude": 50.423996,
      "longitude": 7.430372,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 265,
      "squawk": "4451",
      "timestamp": 1623322369,
      "ems": null
    },
    {
      "latitude": 50.423756,
      "longitude": 7.42609,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1623322376,
      "ems": null
    },
    {
      "latitude": 50.423447,
      "longitude": 7.422349,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1623322382,
      "ems": null
    },
    {
      "latitude": 50.42244,
      "longitude": 7.411146,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1623322399,
      "ems": null
    },
    {
      "latitude": 50.421936,
      "longitude": 7.406447,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1623322407,
      "ems": null
    },
    {
      "latitude": 50.42152,
      "longitude": 7.402261,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1623322414,
      "ems": null
    },
    {
      "latitude": 50.421204,
      "longitude": 7.398714,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1623322420,
      "ems": null
    },
    {
      "latitude": 50.420822,
      "longitude": 7.394764,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1623322426,
      "ems": null
    },
    {
      "latitude": 50.420498,
      "longitude": 7.39083,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1623322433,
      "ems": null
    },
    {
      "latitude": 50.420216,
      "longitude": 7.386672,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 265,
      "squawk": "4451",
      "timestamp": 1623322440,
      "ems": null
    },
    {
      "latitude": 50.420151,
      "longitude": 7.384692,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623322443,
      "ems": null
    },
    {
      "latitude": 50.420105,
      "longitude": 7.383752,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623322445,
      "ems": null
    },
    {
      "latitude": 50.420078,
      "longitude": 7.38311,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623322446,
      "ems": null
    },
    {
      "latitude": 50.419937,
      "longitude": 7.380437,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623322450,
      "ems": null
    },
    {
      "latitude": 50.419891,
      "longitude": 7.378655,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1623322453,
      "ems": null
    },
    {
      "latitude": 50.419846,
      "longitude": 7.376503,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1623322457,
      "ems": null
    },
    {
      "latitude": 50.41983,
      "longitude": 7.375802,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1623322458,
      "ems": null
    },
    {
      "latitude": 50.419556,
      "longitude": 7.371465,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1623322465,
      "ems": null
    },
    {
      "latitude": 50.419327,
      "longitude": 7.367634,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1623322471,
      "ems": null
    },
    {
      "latitude": 50.419426,
      "longitude": 7.366185,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1623322473,
      "ems": null
    },
    {
      "latitude": 50.419464,
      "longitude": 7.365249,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "squawk": "4451",
      "timestamp": 1623322475,
      "ems": null
    },
    {
      "latitude": 50.419518,
      "longitude": 7.364403,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 276,
      "squawk": "4451",
      "timestamp": 1623322476,
      "ems": null
    },
    {
      "latitude": 50.419613,
      "longitude": 7.363141,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 276,
      "squawk": "4451",
      "timestamp": 1623322478,
      "ems": null
    },
    {
      "latitude": 50.419704,
      "longitude": 7.360469,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1623322482,
      "ems": null
    },
    {
      "latitude": 50.419876,
      "longitude": 7.354624,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1623322491,
      "ems": null
    },
    {
      "latitude": 50.419891,
      "longitude": 7.350596,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1623322497,
      "ems": null
    },
    {
      "latitude": 50.419846,
      "longitude": 7.346736,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1623322503,
      "ems": null
    },
    {
      "latitude": 50.419846,
      "longitude": 7.345399,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1623322505,
      "ems": null
    },
    {
      "latitude": 50.419796,
      "longitude": 7.343841,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1623322507,
      "ems": null
    },
    {
      "latitude": 50.419785,
      "longitude": 7.343565,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1623322508,
      "ems": null
    },
    {
      "latitude": 50.41975,
      "longitude": 7.342802,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623322509,
      "ems": null
    },
    {
      "latitude": 50.419704,
      "longitude": 7.341762,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623322510,
      "ems": null
    },
    {
      "latitude": 50.419659,
      "longitude": 7.340871,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623322512,
      "ems": null
    },
    {
      "latitude": 50.419464,
      "longitude": 7.337132,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1623322518,
      "ems": null
    },
    {
      "latitude": 50.41938,
      "longitude": 7.335972,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1623322519,
      "ems": null
    },
    {
      "latitude": 50.419193,
      "longitude": 7.333597,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1623322523,
      "ems": null
    },
    {
      "latitude": 50.419147,
      "longitude": 7.332929,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1623322524,
      "ems": null
    },
    {
      "latitude": 50.418961,
      "longitude": 7.328475,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623322531,
      "ems": null
    },
    {
      "latitude": 50.418777,
      "longitude": 7.322821,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1623322539,
      "ems": null
    },
    {
      "latitude": 50.418732,
      "longitude": 7.320075,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1623322543,
      "ems": null
    },
    {
      "latitude": 50.418682,
      "longitude": 7.317785,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1623322547,
      "ems": null
    },
    {
      "latitude": 50.418354,
      "longitude": 7.309175,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623322560,
      "ems": null
    },
    {
      "latitude": 50.418076,
      "longitude": 7.303755,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 265,
      "squawk": "4451",
      "timestamp": 1623322571,
      "ems": null
    },
    {
      "latitude": 50.417934,
      "longitude": 7.301083,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 265,
      "squawk": "4451",
      "timestamp": 1623322577,
      "ems": null
    },
    {
      "latitude": 50.417862,
      "longitude": 7.299042,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1623322582,
      "ems": null
    },
    {
      "latitude": 50.417816,
      "longitude": 7.297235,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1623322588,
      "ems": null
    },
    {
      "latitude": 50.417843,
      "longitude": 7.295813,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -2368,
        "ms": -12
      },
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1623322591,
      "ems": null
    },
    {
      "latitude": 50.417862,
      "longitude": 7.295572,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -2688,
        "ms": -13.7
      },
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1623322592,
      "ems": null
    },
    {
      "latitude": 50.417862,
      "longitude": 7.294849,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -2752,
        "ms": -14
      },
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1623322593,
      "ems": null
    },
    {
      "latitude": 50.417934,
      "longitude": 7.294031,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -1600,
        "ms": -8.1
      },
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1623322595,
      "ems": null
    },
    {
      "latitude": 50.417984,
      "longitude": 7.291953,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1623322598,
      "ems": null
    },
    {
      "latitude": 50.418045,
      "longitude": 7.290224,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1623322601,
      "ems": null
    },
    {
      "latitude": 50.418076,
      "longitude": 7.289577,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1623322602,
      "ems": null
    },
    {
      "latitude": 50.418121,
      "longitude": 7.288464,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1623322604,
      "ems": null
    },
    {
      "latitude": 50.418217,
      "longitude": 7.285197,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1623322610,
      "ems": null
    },
    {
      "latitude": 50.418262,
      "longitude": 7.283638,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1623322613,
      "ems": null
    },
    {
      "latitude": 50.418262,
      "longitude": 7.280076,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1623322620,
      "ems": null
    },
    {
      "latitude": 50.418076,
      "longitude": 7.26946,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1623322640,
      "ems": null
    },
    {
      "latitude": 50.417984,
      "longitude": 7.264412,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1623322649,
      "ems": null
    },
    {
      "latitude": 50.41803,
      "longitude": 7.261147,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1623322656,
      "ems": null
    },
    {
      "latitude": 50.418121,
      "longitude": 7.258697,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1623322662,
      "ems": null
    },
    {
      "latitude": 50.418182,
      "longitude": 7.256325,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1623322669,
      "ems": null
    },
    {
      "latitude": 50.418167,
      "longitude": 7.253575,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1623322676,
      "ems": null
    },
    {
      "latitude": 50.418274,
      "longitude": 7.250615,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1623322683,
      "ems": null
    },
    {
      "latitude": 50.418354,
      "longitude": 7.247636,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1623322689,
      "ems": null
    },
    {
      "latitude": 50.418587,
      "longitude": 7.24385,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 276,
      "squawk": "4451",
      "timestamp": 1623322697,
      "ems": null
    },
    {
      "latitude": 50.419006,
      "longitude": 7.237894,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 276,
      "squawk": "4451",
      "timestamp": 1623322707,
      "ems": null
    },
    {
      "latitude": 50.419144,
      "longitude": 7.236159,
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
      "heading": 277,
      "squawk": "4451",
      "timestamp": 1623322710,
      "ems": null
    },
    {
      "latitude": 50.419285,
      "longitude": 7.234497,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 278,
      "squawk": "4451",
      "timestamp": 1623322713,
      "ems": null
    },
    {
      "latitude": 50.419472,
      "longitude": 7.232567,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 277,
      "squawk": "4451",
      "timestamp": 1623322716,
      "ems": null
    },
    {
      "latitude": 50.419785,
      "longitude": 7.229293,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1623322722,
      "ems": null
    },
    {
      "latitude": 50.420216,
      "longitude": 7.226183,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 283,
      "squawk": "4451",
      "timestamp": 1623322728,
      "ems": null
    },
    {
      "latitude": 50.420731,
      "longitude": 7.223436,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1623322734,
      "ems": null
    },
    {
      "latitude": 50.421295,
      "longitude": 7.220764,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1623322740,
      "ems": null
    },
    {
      "latitude": 50.421295,
      "longitude": 7.21809,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1623322746,
      "ems": null
    },
    {
      "latitude": 50.421009,
      "longitude": 7.217201,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1623322748,
      "ems": null
    },
    {
      "latitude": 50.420288,
      "longitude": 7.215849,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 223,
      "squawk": "4451",
      "timestamp": 1623322752,
      "ems": null
    },
    {
      "latitude": 50.419052,
      "longitude": 7.214548,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 210,
      "squawk": "4451",
      "timestamp": 1623322757,
      "ems": null
    },
    {
      "latitude": 50.418732,
      "longitude": 7.214259,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 210,
      "squawk": "4451",
      "timestamp": 1623322758,
      "ems": null
    },
    {
      "latitude": 50.417999,
      "longitude": 7.213681,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "4451",
      "timestamp": 1623322761,
      "ems": null
    },
    {
      "latitude": 50.415207,
      "longitude": 7.21144,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 205,
      "squawk": "4451",
      "timestamp": 1623322769,
      "ems": null
    },
    {
      "latitude": 50.414795,
      "longitude": 7.211079,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 206,
      "squawk": "4451",
      "timestamp": 1623322770,
      "ems": null
    },
    {
      "latitude": 50.413887,
      "longitude": 7.210371,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 207,
      "squawk": "4451",
      "timestamp": 1623322773,
      "ems": null
    },
    {
      "latitude": 50.412209,
      "longitude": 7.20911,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 205,
      "squawk": "4451",
      "timestamp": 1623322779,
      "ems": null
    },
    {
      "latitude": 50.41114,
      "longitude": 7.208367,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1623322782,
      "ems": null
    },
    {
      "latitude": 50.410446,
      "longitude": 7.207899,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1623322784,
      "ems": null
    },
    {
      "latitude": 50.409325,
      "longitude": 7.20718,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1623322787,
      "ems": null
    },
    {
      "latitude": 50.406509,
      "longitude": 7.201827,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1623322799,
      "ems": null
    },
    {
      "latitude": 50.406372,
      "longitude": 7.19937,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1623322803,
      "ems": null
    },
    {
      "latitude": 50.407013,
      "longitude": 7.195828,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 289,
      "squawk": "4451",
      "timestamp": 1623322809,
      "ems": null
    },
    {
      "latitude": 50.40802,
      "longitude": 7.193877,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 313,
      "squawk": "4451",
      "timestamp": 1623322813,
      "ems": null
    },
    {
      "latitude": 50.40889,
      "longitude": 7.19272,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1623322815,
      "ems": null
    },
    {
      "latitude": 50.409557,
      "longitude": 7.192111,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1623322817,
      "ems": null
    },
    {
      "latitude": 50.410721,
      "longitude": 7.191368,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1623322820,
      "ems": null
    },
    {
      "latitude": 50.411091,
      "longitude": 7.191294,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1623322822,
      "ems": null
    },
    {
      "latitude": 50.412209,
      "longitude": 7.191145,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1623322824,
      "ems": null
    },
    {
      "latitude": 50.41328,
      "longitude": 7.191294,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1623322827,
      "ems": null
    },
    {
      "latitude": 50.41449,
      "longitude": 7.191591,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1623322830,
      "ems": null
    },
    {
      "latitude": 50.415253,
      "longitude": 7.191781,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1623322832,
      "ems": null
    },
    {
      "latitude": 50.416447,
      "longitude": 7.192037,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1623322835,
      "ems": null
    },
    {
      "latitude": 50.417633,
      "longitude": 7.192358,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1623322839,
      "ems": null
    },
    {
      "latitude": 50.417999,
      "longitude": 7.192431,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1623322840,
      "ems": null
    },
    {
      "latitude": 50.418682,
      "longitude": 7.192556,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1623322841,
      "ems": null
    },
    {
      "latitude": 50.419098,
      "longitude": 7.19272,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1623322842,
      "ems": null
    },
    {
      "latitude": 50.420197,
      "longitude": 7.193009,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1623322845,
      "ems": null
    },
    {
      "latitude": 50.420929,
      "longitude": 7.193226,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1623322847,
      "ems": null
    },
    {
      "latitude": 50.422264,
      "longitude": 7.193744,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 12,
      "squawk": "4451",
      "timestamp": 1623322851,
      "ems": null
    },
    {
      "latitude": 50.423569,
      "longitude": 7.193966,
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
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1623322854,
      "ems": null
    },
    {
      "latitude": 50.42569,
      "longitude": 7.191636,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1623322860,
      "ems": null
    },
    {
      "latitude": 50.42585,
      "longitude": 7.190329,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1623322862,
      "ems": null
    },
    {
      "latitude": 50.42585,
      "longitude": 7.189438,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1623322863,
      "ems": null
    },
    {
      "latitude": 50.422775,
      "longitude": 7.185504,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 186,
      "squawk": "4451",
      "timestamp": 1623322872,
      "ems": null
    },
    {
      "latitude": 50.421387,
      "longitude": 7.185998,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1623322876,
      "ems": null
    },
    {
      "latitude": 50.420609,
      "longitude": 7.186865,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "squawk": "4451",
      "timestamp": 1623322878,
      "ems": null
    },
    {
      "latitude": 50.419647,
      "longitude": 7.189106,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1623322881,
      "ems": null
    },
    {
      "latitude": 50.419556,
      "longitude": 7.189684,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 107,
      "squawk": "4451",
      "timestamp": 1623322882,
      "ems": null
    },
    {
      "latitude": 50.422119,
      "longitude": 7.195828,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 26,
      "squawk": "4451",
      "timestamp": 1623322894,
      "ems": null
    },
    {
      "latitude": 50.423428,
      "longitude": 7.196193,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1623322897,
      "ems": null
    },
    {
      "latitude": 50.424866,
      "longitude": 7.196551,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1623322900,
      "ems": null
    },
    {
      "latitude": 50.427387,
      "longitude": 7.197158,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1623322905,
      "ems": null
    },
    {
      "latitude": 50.428253,
      "longitude": 7.197418,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1623322908,
      "ems": null
    },
    {
      "latitude": 50.428642,
      "longitude": 7.19753,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1623322909,
      "ems": null
    },
    {
      "latitude": 50.429489,
      "longitude": 7.19778,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1623322911,
      "ems": null
    },
    {
      "latitude": 50.430691,
      "longitude": 7.198123,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1623322914,
      "ems": null
    },
    {
      "latitude": 50.432598,
      "longitude": 7.200202,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 58,
      "squawk": "4451",
      "timestamp": 1623322920,
      "ems": null
    },
    {
      "latitude": 50.432785,
      "longitude": 7.202206,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 90,
      "squawk": "4451",
      "timestamp": 1623322923,
      "ems": null
    },
    {
      "latitude": 50.432648,
      "longitude": 7.202911,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1623322924,
      "ems": null
    },
    {
      "latitude": 50.432281,
      "longitude": 7.204212,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1623322926,
      "ems": null
    },
    {
      "latitude": 50.431065,
      "longitude": 7.20577,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1623322929,
      "ems": null
    },
    {
      "latitude": 50.429535,
      "longitude": 7.206308,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 175,
      "squawk": "4451",
      "timestamp": 1623322933,
      "ems": null
    },
    {
      "latitude": 50.427803,
      "longitude": 7.205621,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 175,
      "squawk": "4451",
      "timestamp": 1623322937,
      "ems": null
    },
    {
      "latitude": 50.426781,
      "longitude": 7.204433,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 224,
      "squawk": "4451",
      "timestamp": 1623322939,
      "ems": null
    },
    {
      "latitude": 50.426083,
      "longitude": 7.201167,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 210,
      "squawk": "4451",
      "timestamp": 1623322944,
      "ems": null
    },
    {
      "latitude": 50.426468,
      "longitude": 7.199659,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 224,
      "squawk": "4451",
      "timestamp": 1623322947,
      "ems": null
    },
    {
      "latitude": 50.427387,
      "longitude": 7.198494,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1623322950,
      "ems": null
    },
    {
      "latitude": 50.428894,
      "longitude": 7.198213,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1623322954,
      "ems": null
    },
    {
      "latitude": 50.429993,
      "longitude": 7.198569,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1623322956,
      "ems": null
    },
    {
      "latitude": 50.431458,
      "longitude": 7.19908,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 12,
      "squawk": "4451",
      "timestamp": 1623322960,
      "ems": null
    },
    {
      "latitude": 50.432602,
      "longitude": 7.199514,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1623322963,
      "ems": null
    },
    {
      "latitude": 50.433392,
      "longitude": 7.199831,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 16,
      "squawk": "4451",
      "timestamp": 1623322965,
      "ems": null
    },
    {
      "latitude": 50.433746,
      "longitude": 7.20002,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1623322966,
      "ems": null
    },
    {
      "latitude": 50.434433,
      "longitude": 7.200237,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 13,
      "squawk": "4451",
      "timestamp": 1623322968,
      "ems": null
    },
    {
      "latitude": 50.436081,
      "longitude": 7.200671,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1623322972,
      "ems": null
    },
    {
      "latitude": 50.436859,
      "longitude": 7.200743,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1623322974,
      "ems": null
    },
    {
      "latitude": 50.437225,
      "longitude": 7.200815,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1623322975,
      "ems": null
    },
    {
      "latitude": 50.439102,
      "longitude": 7.20096,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1623322980,
      "ems": null
    },
    {
      "latitude": 50.441391,
      "longitude": 7.201249,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1623322985,
      "ems": null
    },
    {
      "latitude": 50.442749,
      "longitude": 7.20139,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1623322989,
      "ems": null
    },
    {
      "latitude": 50.444099,
      "longitude": 7.201538,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1623322992,
      "ems": null
    },
    {
      "latitude": 50.446198,
      "longitude": 7.201827,
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
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1623322998,
      "ems": null
    },
    {
      "latitude": 50.450058,
      "longitude": 7.202503,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1623323008,
      "ems": null
    },
    {
      "latitude": 50.451004,
      "longitude": 7.2032,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 26,
      "squawk": "4451",
      "timestamp": 1623323010,
      "ems": null
    },
    {
      "latitude": 50.45192,
      "longitude": 7.204285,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1623323013,
      "ems": null
    },
    {
      "latitude": 50.452106,
      "longitude": 7.204582,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1623323014,
      "ems": null
    },
    {
      "latitude": 50.452789,
      "longitude": 7.20573,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 51,
      "squawk": "4451",
      "timestamp": 1623323016,
      "ems": null
    },
    {
      "latitude": 50.453568,
      "longitude": 7.207826,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 63,
      "squawk": "4451",
      "timestamp": 1623323019,
      "ems": null
    },
    {
      "latitude": 50.453968,
      "longitude": 7.210075,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 76,
      "squawk": "4451",
      "timestamp": 1623323023,
      "ems": null
    },
    {
      "latitude": 50.453979,
      "longitude": 7.214042,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 97,
      "squawk": "4451",
      "timestamp": 1623323028,
      "ems": null
    },
    {
      "latitude": 50.452755,
      "longitude": 7.218389,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "squawk": "4451",
      "timestamp": 1623323035,
      "ems": null
    },
    {
      "latitude": 50.45192,
      "longitude": 7.219969,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 132,
      "squawk": "4451",
      "timestamp": 1623323037,
      "ems": null
    },
    {
      "latitude": 50.450943,
      "longitude": 7.221284,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1623323040,
      "ems": null
    },
    {
      "latitude": 50.448303,
      "longitude": 7.223222,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1623323046,
      "ems": null
    },
    {
      "latitude": 50.447845,
      "longitude": 7.223438,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1623323047,
      "ems": null
    },
    {
      "latitude": 50.446381,
      "longitude": 7.223659,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 176,
      "squawk": "4451",
      "timestamp": 1623323050,
      "ems": null
    },
    {
      "latitude": 50.444046,
      "longitude": 7.223583,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 180,
      "squawk": "4451",
      "timestamp": 1623323055,
      "ems": null
    },
    {
      "latitude": 50.442375,
      "longitude": 7.223511,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 181,
      "squawk": "4451",
      "timestamp": 1623323058,
      "ems": null
    },
    {
      "latitude": 50.441162,
      "longitude": 7.223511,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 181,
      "squawk": "4451",
      "timestamp": 1623323061,
      "ems": null
    },
    {
      "latitude": 50.438091,
      "longitude": 7.223585,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 177,
      "squawk": "4451",
      "timestamp": 1623323067,
      "ems": null
    },
    {
      "latitude": 50.436741,
      "longitude": 7.223659,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1623323070,
      "ems": null
    },
    {
      "latitude": 50.435257,
      "longitude": 7.223655,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 180,
      "squawk": "4451",
      "timestamp": 1623323073,
      "ems": null
    },
    {
      "latitude": 50.432373,
      "longitude": 7.223583,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 182,
      "squawk": "4451",
      "timestamp": 1623323079,
      "ems": null
    },
    {
      "latitude": 50.432133,
      "longitude": 7.223511,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 182,
      "squawk": "4451",
      "timestamp": 1623323080,
      "ems": null
    },
    {
      "latitude": 50.429123,
      "longitude": 7.223222,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 184,
      "squawk": "4451",
      "timestamp": 1623323086,
      "ems": null
    },
    {
      "latitude": 50.428024,
      "longitude": 7.223005,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 186,
      "squawk": "4451",
      "timestamp": 1623323088,
      "ems": null
    },
    {
      "latitude": 50.426781,
      "longitude": 7.222546,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1623323091,
      "ems": null
    },
    {
      "latitude": 50.425369,
      "longitude": 7.22127,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 215,
      "squawk": "4451",
      "timestamp": 1623323095,
      "ems": null
    },
    {
      "latitude": 50.424545,
      "longitude": 7.220022,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623323097,
      "ems": null
    },
    {
      "latitude": 50.424408,
      "longitude": 7.219725,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 228,
      "squawk": "4451",
      "timestamp": 1623323098,
      "ems": null
    },
    {
      "latitude": 50.423676,
      "longitude": 7.210573,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1623323112,
      "ems": null
    },
    {
      "latitude": 50.425011,
      "longitude": 7.205101,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1623323122,
      "ems": null
    },
    {
      "latitude": 50.425476,
      "longitude": 7.203617,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1623323124,
      "ems": null
    },
    {
      "latitude": 50.425552,
      "longitude": 7.203273,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1623323125,
      "ems": null
    },
    {
      "latitude": 50.42688,
      "longitude": 7.198503,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "timestamp": 1623323133,
      "ems": null
    },
    {
      "latitude": 50.427887,
      "longitude": 7.195178,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1623323139,
      "ems": null
    },
    {
      "latitude": 50.42897,
      "longitude": 7.191813,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1623323146,
      "ems": null
    },
    {
      "latitude": 50.429489,
      "longitude": 7.190407,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1623323149,
      "ems": null
    },
    {
      "latitude": 50.429901,
      "longitude": 7.189395,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1623323151,
      "ems": null
    },
    {
      "latitude": 50.429993,
      "longitude": 7.189141,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1623323152,
      "ems": null
    },
    {
      "latitude": 50.430504,
      "longitude": 7.188028,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1623323154,
      "ems": null
    },
    {
      "latitude": 50.430599,
      "longitude": 7.187731,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1623323155,
      "ems": null
    },
    {
      "latitude": 50.431065,
      "longitude": 7.186692,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1623323157,
      "ems": null
    },
    {
      "latitude": 50.431641,
      "longitude": 7.185348,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1623323160,
      "ems": null
    },
    {
      "latitude": 50.43219,
      "longitude": 7.183974,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1623323163,
      "ems": null
    },
    {
      "latitude": 50.432739,
      "longitude": 7.182745,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1623323166,
      "ems": null
    },
    {
      "latitude": 50.432926,
      "longitude": 7.182312,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1623323167,
      "ems": null
    },
    {
      "latitude": 50.433426,
      "longitude": 7.181372,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 307,
      "squawk": "4451",
      "timestamp": 1623323169,
      "ems": null
    },
    {
      "latitude": 50.434135,
      "longitude": 7.179936,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 309,
      "squawk": "4451",
      "timestamp": 1623323173,
      "ems": null
    },
    {
      "latitude": 50.435349,
      "longitude": 7.177614,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1623323179,
      "ems": null
    },
    {
      "latitude": 50.43586,
      "longitude": 7.176671,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 309,
      "squawk": "4451",
      "timestamp": 1623323181,
      "ems": null
    },
    {
      "latitude": 50.437225,
      "longitude": 7.174361,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 314,
      "squawk": "4451",
      "timestamp": 1623323188,
      "ems": null
    },
    {
      "latitude": 50.438419,
      "longitude": 7.172736,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1623323193,
      "ems": null
    },
    {
      "latitude": 50.439148,
      "longitude": 7.171543,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1623323197,
      "ems": null
    },
    {
      "latitude": 50.439674,
      "longitude": 7.170658,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 313,
      "squawk": "4451",
      "timestamp": 1623323199,
      "ems": null
    },
    {
      "latitude": 50.440189,
      "longitude": 7.169544,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1623323202,
      "ems": null
    },
    {
      "latitude": 50.440605,
      "longitude": 7.168208,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1623323205,
      "ems": null
    },
    {
      "latitude": 50.440792,
      "longitude": 7.166501,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1623323209,
      "ems": null
    },
    {
      "latitude": 50.440887,
      "longitude": 7.164719,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1623323212,
      "ems": null
    },
    {
      "latitude": 50.440887,
      "longitude": 7.163592,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1623323214,
      "ems": null
    },
    {
      "latitude": 50.440704,
      "longitude": 7.160195,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1623323221,
      "ems": null
    },
    {
      "latitude": 50.440475,
      "longitude": 7.157231,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1623323227,
      "ems": null
    },
    {
      "latitude": 50.440372,
      "longitude": 7.155737,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1623323229,
      "ems": null
    },
    {
      "latitude": 50.440247,
      "longitude": 7.154196,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 265,
      "squawk": "4451",
      "timestamp": 1623323233,
      "ems": null
    },
    {
      "latitude": 50.440235,
      "longitude": 7.152768,
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
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1623323235,
      "ems": null
    },
    {
      "latitude": 50.440201,
      "longitude": 7.151088,
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
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1623323239,
      "ems": null
    },
    {
      "latitude": 50.440189,
      "longitude": 7.147645,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1623323245,
      "ems": null
    },
    {
      "latitude": 50.440292,
      "longitude": 7.145956,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1623323248,
      "ems": null
    },
    {
      "latitude": 50.440384,
      "longitude": 7.144583,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 277,
      "squawk": "4451",
      "timestamp": 1623323251,
      "ems": null
    },
    {
      "latitude": 50.440567,
      "longitude": 7.142992,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1623323254,
      "ems": null
    },
    {
      "latitude": 50.440838,
      "longitude": 7.141559,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1623323257,
      "ems": null
    },
    {
      "latitude": 50.441208,
      "longitude": 7.140101,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1623323260,
      "ems": null
    },
    {
      "latitude": 50.441723,
      "longitude": 7.138738,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1623323263,
      "ems": null
    },
    {
      "latitude": 50.442444,
      "longitude": 7.137644,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1623323265,
      "ems": null
    },
    {
      "latitude": 50.443451,
      "longitude": 7.136921,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1623323269,
      "ems": null
    },
    {
      "latitude": 50.445511,
      "longitude": 7.136632,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1623323274,
      "ems": null
    },
    {
      "latitude": 50.447937,
      "longitude": 7.136993,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1623323281,
      "ems": null
    },
    {
      "latitude": 50.449127,
      "longitude": 7.137138,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 3,
      "squawk": "4451",
      "timestamp": 1623323284,
      "ems": null
    },
    {
      "latitude": 50.450089,
      "longitude": 7.13721,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1623323286,
      "ems": null
    },
    {
      "latitude": 50.451641,
      "longitude": 7.137328,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 3,
      "squawk": "4451",
      "timestamp": 1623323290,
      "ems": null
    },
    {
      "latitude": 50.452835,
      "longitude": 7.137427,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1623323293,
      "ems": null
    },
    {
      "latitude": 50.453979,
      "longitude": 7.137499,
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
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1623323295,
      "ems": null
    },
    {
      "latitude": 50.455502,
      "longitude": 7.137624,
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
      "heading": 3,
      "squawk": "4451",
      "timestamp": 1623323299,
      "ems": null
    },
    {
      "latitude": 50.458099,
      "longitude": 7.137933,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 3,
      "squawk": "4451",
      "timestamp": 1623323305,
      "ems": null
    },
    {
      "latitude": 50.460625,
      "longitude": 7.13807,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1623323310,
      "ems": null
    },
    {
      "latitude": 50.463184,
      "longitude": 7.138441,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1623323317,
      "ems": null
    },
    {
      "latitude": 50.46542,
      "longitude": 7.139035,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 13,
      "squawk": "4451",
      "timestamp": 1623323322,
      "ems": null
    },
    {
      "latitude": 50.466721,
      "longitude": 7.139703,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1623323326,
      "ems": null
    },
    {
      "latitude": 50.467793,
      "longitude": 7.140594,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 27,
      "squawk": "4451",
      "timestamp": 1623323329,
      "ems": null
    },
    {
      "latitude": 50.469818,
      "longitude": 7.14227,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1623323335,
      "ems": null
    },
    {
      "latitude": 50.471924,
      "longitude": 7.144077,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 29,
      "squawk": "4451",
      "timestamp": 1623323341,
      "ems": null
    },
    {
      "latitude": 50.472961,
      "longitude": 7.144973,
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
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1623323344,
      "ems": null
    },
    {
      "latitude": 50.474075,
      "longitude": 7.145956,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1623323347,
      "ems": null
    },
    {
      "latitude": 50.475037,
      "longitude": 7.146751,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 29,
      "squawk": "4451",
      "timestamp": 1623323350,
      "ems": null
    },
    {
      "latitude": 50.476089,
      "longitude": 7.147763,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 31,
      "squawk": "4451",
      "timestamp": 1623323353,
      "ems": null
    },
    {
      "latitude": 50.478195,
      "longitude": 7.149786,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 32,
      "squawk": "4451",
      "timestamp": 1623323359,
      "ems": null
    },
    {
      "latitude": 50.479942,
      "longitude": 7.15158,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 33,
      "squawk": "4451",
      "timestamp": 1623323365,
      "ems": null
    },
    {
      "latitude": 50.481106,
      "longitude": 7.152842,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 33,
      "squawk": "4451",
      "timestamp": 1623323368,
      "ems": null
    },
    {
      "latitude": 50.482773,
      "longitude": 7.154557,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 34,
      "squawk": "4451",
      "timestamp": 1623323373,
      "ems": null
    },
    {
      "latitude": 50.48497,
      "longitude": 7.157087,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 36,
      "squawk": "4451",
      "timestamp": 1623323380,
      "ems": null
    },
    {
      "latitude": 50.487762,
      "longitude": 7.15982,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 29,
      "squawk": "4451",
      "timestamp": 1623323389,
      "ems": null
    },
    {
      "latitude": 50.488834,
      "longitude": 7.16071,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 27,
      "squawk": "4451",
      "timestamp": 1623323392,
      "ems": null
    },
    {
      "latitude": 50.489731,
      "longitude": 7.161351,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 24,
      "squawk": "4451",
      "timestamp": 1623323394,
      "ems": null
    },
    {
      "latitude": 50.491024,
      "longitude": 7.16227,
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
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1623323398,
      "ems": null
    },
    {
      "latitude": 50.492111,
      "longitude": 7.162941,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1623323401,
      "ems": null
    },
    {
      "latitude": 50.493256,
      "longitude": 7.163592,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1623323404,
      "ems": null
    },
    {
      "latitude": 50.494446,
      "longitude": 7.16417,
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
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1623323407,
      "ems": null
    },
    {
      "latitude": 50.496826,
      "longitude": 7.165182,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1623323413,
      "ems": null
    },
    {
      "latitude": 50.498016,
      "longitude": 7.16576,
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
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1623323416,
      "ems": null
    },
    {
      "latitude": 50.49931,
      "longitude": 7.166352,
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
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1623323419,
      "ems": null
    },
    {
      "latitude": 50.50145,
      "longitude": 7.167688,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1623323425,
      "ems": null
    },
    {
      "latitude": 50.503593,
      "longitude": 7.16947,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 29,
      "squawk": "4451",
      "timestamp": 1623323431,
      "ems": null
    },
    {
      "latitude": 50.504929,
      "longitude": 7.170603,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1623323434,
      "ems": null
    },
    {
      "latitude": 50.505779,
      "longitude": 7.1714,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 29,
      "squawk": "4451",
      "timestamp": 1623323437,
      "ems": null
    },
    {
      "latitude": 50.506897,
      "longitude": 7.172439,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 32,
      "squawk": "4451",
      "timestamp": 1623323440,
      "ems": null
    },
    {
      "latitude": 50.507996,
      "longitude": 7.173566,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 33,
      "squawk": "4451",
      "timestamp": 1623323443,
      "ems": null
    },
    {
      "latitude": 50.508152,
      "longitude": 7.173775,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 33,
      "squawk": "4451",
      "timestamp": 1623323444,
      "ems": null
    },
    {
      "latitude": 50.510101,
      "longitude": 7.175735,
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
      "heading": 32,
      "squawk": "4451",
      "timestamp": 1623323449,
      "ems": null
    },
    {
      "latitude": 50.511932,
      "longitude": 7.177686,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 34,
      "squawk": "4451",
      "timestamp": 1623323455,
      "ems": null
    },
    {
      "latitude": 50.513229,
      "longitude": 7.17912,
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
      "heading": 36,
      "squawk": "4451",
      "timestamp": 1623323459,
      "ems": null
    },
    {
      "latitude": 50.515045,
      "longitude": 7.181199,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 35,
      "squawk": "4451",
      "timestamp": 1623323464,
      "ems": null
    },
    {
      "latitude": 50.515976,
      "longitude": 7.182312,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1623323467,
      "ems": null
    },
    {
      "latitude": 50.516968,
      "longitude": 7.183613,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1623323470,
      "ems": null
    },
    {
      "latitude": 50.517883,
      "longitude": 7.184842,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1623323473,
      "ems": null
    },
    {
      "latitude": 50.519745,
      "longitude": 7.187285,
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
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1623323479,
      "ems": null
    },
    {
      "latitude": 50.521793,
      "longitude": 7.189809,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4451",
      "timestamp": 1623323485,
      "ems": null
    },
    {
      "latitude": 50.524727,
      "longitude": 7.192779,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 31,
      "squawk": "4451",
      "timestamp": 1623323494,
      "ems": null
    },
    {
      "latitude": 50.525665,
      "longitude": 7.19366,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 31,
      "squawk": "4451",
      "timestamp": 1623323497,
      "ems": null
    },
    {
      "latitude": 50.528732,
      "longitude": 7.19684,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 34,
      "squawk": "4451",
      "timestamp": 1623323506,
      "ems": null
    },
    {
      "latitude": 50.53064,
      "longitude": 7.199014,
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
      "heading": 35,
      "squawk": "4451",
      "timestamp": 1623323512,
      "ems": null
    },
    {
      "latitude": 50.532825,
      "longitude": 7.201315,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 33,
      "squawk": "4451",
      "timestamp": 1623323518,
      "ems": null
    },
    {
      "latitude": 50.534912,
      "longitude": 7.203562,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 33,
      "squawk": "4451",
      "timestamp": 1623323524,
      "ems": null
    },
    {
      "latitude": 50.537064,
      "longitude": 7.205875,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 33,
      "squawk": "4451",
      "timestamp": 1623323530,
      "ems": null
    },
    {
      "latitude": 50.538364,
      "longitude": 7.207031,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 27,
      "squawk": "4451",
      "timestamp": 1623323533,
      "ems": null
    },
    {
      "latitude": 50.539536,
      "longitude": 7.207826,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1623323536,
      "ems": null
    },
    {
      "latitude": 50.539764,
      "longitude": 7.207971,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1623323537,
      "ems": null
    },
    {
      "latitude": 50.540817,
      "longitude": 7.208549,
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
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1623323539,
      "ems": null
    },
    {
      "latitude": 50.542099,
      "longitude": 7.209127,
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
      "heading": 13,
      "squawk": "4451",
      "timestamp": 1623323542,
      "ems": null
    },
    {
      "latitude": 50.543301,
      "longitude": 7.209481,
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
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1623323545,
      "ems": null
    },
    {
      "latitude": 50.550564,
      "longitude": 7.212227,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1623323564,
      "ems": null
    },
    {
      "latitude": 50.55368,
      "longitude": 7.213341,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1623323572,
      "ems": null
    },
    {
      "latitude": 50.557407,
      "longitude": 7.214009,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1623323582,
      "ems": null
    },
    {
      "latitude": 50.563457,
      "longitude": 7.2149,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1623323598,
      "ems": null
    },
    {
      "latitude": 50.566681,
      "longitude": 7.215415,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1623323605,
      "ems": null
    },
    {
      "latitude": 50.567974,
      "longitude": 7.215716,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1623323609,
      "ems": null
    },
    {
      "latitude": 50.570297,
      "longitude": 7.2165,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1623323615,
      "ems": null
    },
    {
      "latitude": 50.571213,
      "longitude": 7.216789,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1623323617,
      "ems": null
    },
    {
      "latitude": 50.572491,
      "longitude": 7.217201,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1623323621,
      "ems": null
    },
    {
      "latitude": 50.574738,
      "longitude": 7.217656,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1623323627,
      "ems": null
    },
    {
      "latitude": 50.582359,
      "longitude": 7.217943,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1623323647,
      "ems": null
    },
    {
      "latitude": 50.583569,
      "longitude": 7.217943,
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
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1623323651,
      "ems": null
    },
    {
      "latitude": 50.587784,
      "longitude": 7.218451,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1623323662,
      "ems": null
    },
    {
      "latitude": 50.590805,
      "longitude": 7.218524,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1623323671,
      "ems": null
    },
    {
      "latitude": 50.592865,
      "longitude": 7.218524,
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
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1623323678,
      "ems": null
    },
    {
      "latitude": 50.594971,
      "longitude": 7.218379,
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1623323684,
      "ems": null
    },
    {
      "latitude": 50.59586,
      "longitude": 7.218315,
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1623323686,
      "ems": null
    },
    {
      "latitude": 50.598038,
      "longitude": 7.218235,
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
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1623323692,
      "ems": null
    },
    {
      "latitude": 50.601398,
      "longitude": 7.218166,
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
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1623323701,
      "ems": null
    },
    {
      "latitude": 50.603912,
      "longitude": 7.218092,
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
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1623323708,
      "ems": null
    },
    {
      "latitude": 50.60638,
      "longitude": 7.218018,
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
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1623323714,
      "ems": null
    },
    {
      "latitude": 50.609962,
      "longitude": 7.217943,
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1623323723,
      "ems": null
    },
    {
      "latitude": 50.614746,
      "longitude": 7.217729,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1623323735,
      "ems": null
    },
    {
      "latitude": 50.617271,
      "longitude": 7.217721,
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
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1623323741,
      "ems": null
    },
    {
      "latitude": 50.622162,
      "longitude": 7.218018,
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
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1623323753,
      "ems": null
    },
    {
      "latitude": 50.625557,
      "longitude": 7.21824,
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
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1623323761,
      "ems": null
    },
    {
      "latitude": 50.627014,
      "longitude": 7.217945,
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1623323765,
      "ems": null
    },
    {
      "latitude": 50.629303,
      "longitude": 7.21715,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1623323771,
      "ems": null
    },
    {
      "latitude": 50.630585,
      "longitude": 7.216717,
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
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1623323775,
      "ems": null
    },
    {
      "latitude": 50.632866,
      "longitude": 7.215791,
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
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1623323780,
      "ems": null
    },
    {
      "latitude": 50.635288,
      "longitude": 7.214974,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1623323786,
      "ems": null
    },
    {
      "latitude": 50.637848,
      "longitude": 7.214158,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1623323792,
      "ems": null
    },
    {
      "latitude": 50.64027,
      "longitude": 7.213341,
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1623323798,
      "ems": null
    },
    {
      "latitude": 50.642784,
      "longitude": 7.212079,
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
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1623323804,
      "ems": null
    },
    {
      "latitude": 50.645065,
      "longitude": 7.21052,
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
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1623323810,
      "ems": null
    },
    {
      "latitude": 50.647205,
      "longitude": 7.208887,
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
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1623323816,
      "ems": null
    },
    {
      "latitude": 50.649445,
      "longitude": 7.207104,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1623323822,
      "ems": null
    },
    {
      "latitude": 50.650497,
      "longitude": 7.206308,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1623323825,
      "ems": null
    },
    {
      "latitude": 50.651535,
      "longitude": 7.205472,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1623323828,
      "ems": null
    },
    {
      "latitude": 50.652607,
      "longitude": 7.204507,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1623323831,
      "ems": null
    },
    {
      "latitude": 50.65448,
      "longitude": 7.202984,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1623323837,
      "ems": null
    },
    {
      "latitude": 50.656517,
      "longitude": 7.201241,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1623323843,
      "ems": null
    },
    {
      "latitude": 50.6586,
      "longitude": 7.199514,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1623323849,
      "ems": null
    },
    {
      "latitude": 50.66185,
      "longitude": 7.197924,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1623323858,
      "ems": null
    },
    {
      "latitude": 50.663128,
      "longitude": 7.198049,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1623323861,
      "ems": null
    },
    {
      "latitude": 50.664139,
      "longitude": 7.198503,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1623323864,
      "ems": null
    },
    {
      "latitude": 50.665695,
      "longitude": 7.199225,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1623323868,
      "ems": null
    },
    {
      "latitude": 50.666386,
      "longitude": 7.19946,
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1623323870,
      "ems": null
    },
    {
      "latitude": 50.667526,
      "longitude": 7.199803,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1623323873,
      "ems": null
    },
    {
      "latitude": 50.671051,
      "longitude": 7.200526,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1623323882,
      "ems": null
    },
    {
      "latitude": 50.674667,
      "longitude": 7.20087,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1623323891,
      "ems": null
    },
    {
      "latitude": 50.677094,
      "longitude": 7.201093,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1623323897,
      "ems": null
    },
    {
      "latitude": 50.678238,
      "longitude": 7.201167,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1623323900,
      "ems": null
    },
    {
      "latitude": 50.67942,
      "longitude": 7.201309,
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1623323903,
      "ems": null
    },
    {
      "latitude": 50.683235,
      "longitude": 7.201843,
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1623323912,
      "ems": null
    },
    {
      "latitude": 50.686981,
      "longitude": 7.202503,
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
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1623323921,
      "ems": null
    },
    {
      "latitude": 50.689243,
      "longitude": 7.202988,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1623323927,
      "ems": null
    },
    {
      "latitude": 50.69046,
      "longitude": 7.203246,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1623323930,
      "ems": null
    },
    {
      "latitude": 50.691559,
      "longitude": 7.203468,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1623323933,
      "ems": null
    },
    {
      "latitude": 50.69371,
      "longitude": 7.203988,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1623323939,
      "ems": null
    },
    {
      "latitude": 50.695854,
      "longitude": 7.204514,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1623323945,
      "ems": null
    },
    {
      "latitude": 50.698013,
      "longitude": 7.205101,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1623323951,
      "ems": null
    },
    {
      "latitude": 50.700211,
      "longitude": 7.205546,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1623323957,
      "ems": null
    },
    {
      "latitude": 50.702324,
      "longitude": 7.206039,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1623323963,
      "ems": null
    },
    {
      "latitude": 50.704372,
      "longitude": 7.206497,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1623323969,
      "ems": null
    },
    {
      "latitude": 50.706665,
      "longitude": 7.207254,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1623323975,
      "ems": null
    },
    {
      "latitude": 50.708176,
      "longitude": 7.207774,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1623323979,
      "ems": null
    },
    {
      "latitude": 50.710007,
      "longitude": 7.208293,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1623323984,
      "ems": null
    },
    {
      "latitude": 50.712334,
      "longitude": 7.209015,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1623323990,
      "ems": null
    },
    {
      "latitude": 50.714661,
      "longitude": 7.209702,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1623323996,
      "ems": null
    },
    {
      "latitude": 50.716965,
      "longitude": 7.210223,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1623324002,
      "ems": null
    },
    {
      "latitude": 50.720673,
      "longitude": 7.211114,
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1623324011,
      "ems": null
    },
    {
      "latitude": 50.722992,
      "longitude": 7.211838,
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1623324017,
      "ems": null
    },
    {
      "latitude": 50.725227,
      "longitude": 7.212524,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1623324023,
      "ems": null
    },
    {
      "latitude": 50.727997,
      "longitude": 7.213192,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1623324030,
      "ems": null
    },
    {
      "latitude": 50.731327,
      "longitude": 7.214127,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1623324038,
      "ems": null
    },
    {
      "latitude": 50.733536,
      "longitude": 7.214677,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1623324044,
      "ems": null
    },
    {
      "latitude": 50.734818,
      "longitude": 7.214966,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1623324047,
      "ems": null
    },
    {
      "latitude": 50.735275,
      "longitude": 7.215048,
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1623324048,
      "ems": null
    },
    {
      "latitude": 50.737518,
      "longitude": 7.2155,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1623324054,
      "ems": null
    },
    {
      "latitude": 50.740356,
      "longitude": 7.215958,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1623324062,
      "ems": null
    },
    {
      "latitude": 50.741547,
      "longitude": 7.216087,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1623324065,
      "ems": null
    },
    {
      "latitude": 50.74506,
      "longitude": 7.216721,
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1623324074,
      "ems": null
    },
    {
      "latitude": 50.747314,
      "longitude": 7.216979,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1623324080,
      "ems": null
    },
    {
      "latitude": 50.750271,
      "longitude": 7.216721,
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1623324089,
      "ems": null
    },
    {
      "latitude": 50.750599,
      "longitude": 7.216644,
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1623324090,
      "ems": null
    },
    {
      "latitude": 50.751617,
      "longitude": 7.216384,
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1623324092,
      "ems": null
    },
    {
      "latitude": 50.752647,
      "longitude": 7.215881,
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1623324096,
      "ems": null
    },
    {
      "latitude": 50.753624,
      "longitude": 7.215271,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1623324098,
      "ems": null
    },
    {
      "latitude": 50.755005,
      "longitude": 7.214232,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1623324103,
      "ems": null
    },
    {
      "latitude": 50.756371,
      "longitude": 7.213058,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1623324107,
      "ems": null
    },
    {
      "latitude": 50.75721,
      "longitude": 7.212143,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1623324111,
      "ems": null
    },
    {
      "latitude": 50.757954,
      "longitude": 7.211075,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1623324114,
      "ems": null
    },
    {
      "latitude": 50.758621,
      "longitude": 7.209778,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1623324117,
      "ems": null
    },
    {
      "latitude": 50.759491,
      "longitude": 7.206734,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1623324123,
      "ems": null
    },
    {
      "latitude": 50.759811,
      "longitude": 7.205398,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1623324125,
      "ems": null
    },
    {
      "latitude": 50.760002,
      "longitude": 7.204666,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1623324127,
      "ems": null
    },
    {
      "latitude": 50.760887,
      "longitude": 7.201767,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1623324133,
      "ems": null
    },
    {
      "latitude": 50.76123,
      "longitude": 7.200202,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1623324136,
      "ems": null
    },
    {
      "latitude": 50.761539,
      "longitude": 7.198715,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1623324139,
      "ems": null
    },
    {
      "latitude": 50.762516,
      "longitude": 7.194595,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1623324147,
      "ems": null
    },
    {
      "latitude": 50.763958,
      "longitude": 7.188263,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1623324158,
      "ems": null
    },
    {
      "latitude": 50.764206,
      "longitude": 7.187434,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1623324160,
      "ems": null
    },
    {
      "latitude": 50.765167,
      "longitude": 7.183914,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1623324166,
      "ems": null
    },
    {
      "latitude": 50.766083,
      "longitude": 7.179565,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1623324173,
      "ems": null
    },
    {
      "latitude": 50.767136,
      "longitude": 7.17474,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1623324181,
      "ems": null
    },
    {
      "latitude": 50.768097,
      "longitude": 7.171029,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1623324189,
      "ems": null
    },
    {
      "latitude": 50.767868,
      "longitude": 7.166901,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1623324196,
      "ems": null
    },
    {
      "latitude": 50.76759,
      "longitude": 7.166138,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1623324198,
      "ems": null
    },
    {
      "latitude": 50.767357,
      "longitude": 7.165451,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1623324199,
      "ems": null
    },
    {
      "latitude": 50.767033,
      "longitude": 7.164841,
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1623324201,
      "ems": null
    },
    {
      "latitude": 50.764099,
      "longitude": 7.162094,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1623324211,
      "ems": null
    },
    {
      "latitude": 50.763447,
      "longitude": 7.16156,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1623324213,
      "ems": null
    },
    {
      "latitude": 50.762878,
      "longitude": 7.161156,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1623324214,
      "ems": null
    },
    {
      "latitude": 50.757843,
      "longitude": 7.161973,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1623324228,
      "ems": null
    },
    {
      "latitude": 50.756416,
      "longitude": 7.163925,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1623324234,
      "ems": null
    },
    {
      "latitude": 50.755005,
      "longitude": 7.166798,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1623324241,
      "ems": null
    },
    {
      "latitude": 50.754181,
      "longitude": 7.169247,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1623324245,
      "ems": null
    },
    {
      "latitude": 50.753403,
      "longitude": 7.171548,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1623324250,
      "ems": null
    },
    {
      "latitude": 50.753082,
      "longitude": 7.172439,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1623324252,
      "ems": null
    },
    {
      "latitude": 50.752625,
      "longitude": 7.17385,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1623324255,
      "ems": null
    },
    {
      "latitude": 50.752415,
      "longitude": 7.177277,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1623324261,
      "ems": null
    },
    {
      "latitude": 50.752552,
      "longitude": 7.178192,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1623324262,
      "ems": null
    },
    {
      "latitude": 50.752785,
      "longitude": 7.178955,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1623324264,
      "ems": null
    },
    {
      "latitude": 50.754684,
      "longitude": 7.18246,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1623324273,
      "ems": null
    },
    {
      "latitude": 50.755066,
      "longitude": 7.182922,
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
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1623324274,
      "ems": null
    },
    {
      "latitude": 50.755764,
      "longitude": 7.183914,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1623324277,
      "ems": null
    },
    {
      "latitude": 50.757385,
      "longitude": 7.186543,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1623324285,
      "ems": null
    },
    {
      "latitude": 50.757767,
      "longitude": 7.187271,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1623324287,
      "ems": null
    },
    {
      "latitude": 50.757954,
      "longitude": 7.187653,
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
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1623324288,
      "ems": null
    },
    {
      "latitude": 50.760727,
      "longitude": 7.189809,
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
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1623324300,
      "ems": null
    },
    {
      "latitude": 50.762188,
      "longitude": 7.188644,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1623324306,
      "ems": null
    },
    {
      "latitude": 50.764984,
      "longitude": 7.18157,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1623324324,
      "ems": null
    },
    {
      "latitude": 50.765442,
      "longitude": 7.178823,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1623324330,
      "ems": null
    },
    {
      "latitude": 50.766037,
      "longitude": 7.176076,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1623324335,
      "ems": null
    },
    {
      "latitude": 50.766403,
      "longitude": 7.174666,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1623324339,
      "ems": null
    },
    {
      "latitude": 50.766678,
      "longitude": 7.173404,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1623324342,
      "ems": null
    },
    {
      "latitude": 50.766998,
      "longitude": 7.171994,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1623324345,
      "ems": null
    },
    {
      "latitude": 50.767635,
      "longitude": 7.168808,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1623324351,
      "ems": null
    },
    {
      "latitude": 50.767731,
      "longitude": 7.167243,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1623324354,
      "ems": null
    },
    {
      "latitude": 50.767776,
      "longitude": 7.165604,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1623324357,
      "ems": null
    },
    {
      "latitude": 50.767914,
      "longitude": 7.164078,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1623324360,
      "ems": null
    },
    {
      "latitude": 50.768417,
      "longitude": 7.160859,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1623324366,
      "ems": null
    },
    {
      "latitude": 50.769077,
      "longitude": 7.157364,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "timestamp": 1623324372,
      "ems": null
    },
    {
      "latitude": 50.769779,
      "longitude": 7.154007,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1623324378,
      "ems": null
    },
    {
      "latitude": 50.770103,
      "longitude": 7.152481,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1623324381,
      "ems": null
    },
    {
      "latitude": 50.770756,
      "longitude": 7.149353,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1623324387,
      "ems": null
    },
    {
      "latitude": 50.771118,
      "longitude": 7.14772,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1623324390,
      "ems": null
    },
    {
      "latitude": 50.771732,
      "longitude": 7.144623,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1623324396,
      "ems": null
    },
    {
      "latitude": 50.771965,
      "longitude": 7.14119,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1623324402,
      "ems": null
    },
    {
      "latitude": 50.7715,
      "longitude": 7.139511,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1623324405,
      "ems": null
    },
    {
      "latitude": 50.770844,
      "longitude": 7.138367,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1623324408,
      "ems": null
    },
    {
      "latitude": 50.770058,
      "longitude": 7.137527,
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1623324411,
      "ems": null
    },
    {
      "latitude": 50.769127,
      "longitude": 7.136917,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1623324414,
      "ems": null
    },
    {
      "latitude": 50.76796,
      "longitude": 7.136288,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1623324417,
      "ems": null
    },
    {
      "latitude": 50.76709,
      "longitude": 7.135917,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1623324420,
      "ems": null
    },
    {
      "latitude": 50.765442,
      "longitude": 7.135472,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1623324425,
      "ems": null
    },
    {
      "latitude": 50.764843,
      "longitude": 7.135315,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1623324426,
      "ems": null
    },
    {
      "latitude": 50.763771,
      "longitude": 7.135239,
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
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1623324429,
      "ems": null
    },
    {
      "latitude": 50.762741,
      "longitude": 7.135249,
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
        "fpm": 1536,
        "ms": 7.8
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1623324432,
      "ems": null
    },
    {
      "latitude": 50.761074,
      "longitude": 7.135315,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1623324437,
      "ems": null
    },
    {
      "latitude": 50.760727,
      "longitude": 7.135397,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1623324438,
      "ems": null
    },
    {
      "latitude": 50.759674,
      "longitude": 7.13562,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1623324441,
      "ems": null
    },
    {
      "latitude": 50.757767,
      "longitude": 7.13623,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1623324447,
      "ems": null
    },
    {
      "latitude": 50.755783,
      "longitude": 7.137179,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1623324453,
      "ems": null
    },
    {
      "latitude": 50.754959,
      "longitude": 7.137624,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1623324456,
      "ems": null
    },
    {
      "latitude": 50.753902,
      "longitude": 7.13829,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1623324459,
      "ems": null
    },
    {
      "latitude": 50.753128,
      "longitude": 7.139183,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1623324462,
      "ems": null
    },
    {
      "latitude": 50.751938,
      "longitude": 7.142227,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1623324468,
      "ems": null
    },
    {
      "latitude": 50.751526,
      "longitude": 7.143785,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1623324471,
      "ems": null
    },
    {
      "latitude": 50.751205,
      "longitude": 7.145493,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1623324474,
      "ems": null
    },
    {
      "latitude": 50.750877,
      "longitude": 7.147369,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1623324477,
      "ems": null
    },
    {
      "latitude": 50.750599,
      "longitude": 7.149124,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1623324480,
      "ems": null
    },
    {
      "latitude": 50.75032,
      "longitude": 7.150955,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1623324483,
      "ems": null
    },
    {
      "latitude": 50.750107,
      "longitude": 7.152471,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1623324486,
      "ems": null
    },
    {
      "latitude": 50.749969,
      "longitude": 7.153436,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1623324487,
      "ems": null
    },
    {
      "latitude": 50.74976,
      "longitude": 7.154541,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1623324489,
      "ems": null
    },
    {
      "latitude": 50.749573,
      "longitude": 7.156067,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1623324492,
      "ems": null
    },
    {
      "latitude": 50.749283,
      "longitude": 7.158038,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1623324495,
      "ems": null
    },
    {
      "latitude": 50.748783,
      "longitude": 7.161331,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1623324501,
      "ems": null
    },
    {
      "latitude": 50.748596,
      "longitude": 7.163086,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1623324504,
      "ems": null
    },
    {
      "latitude": 50.748409,
      "longitude": 7.164841,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1623324507,
      "ems": null
    },
    {
      "latitude": 50.74799,
      "longitude": 7.168655,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1623324513,
      "ems": null
    },
    {
      "latitude": 50.747711,
      "longitude": 7.172012,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1623324519,
      "ems": null
    },
    {
      "latitude": 50.74791,
      "longitude": 7.174221,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1623324522,
      "ems": null
    },
    {
      "latitude": 50.74892,
      "longitude": 7.177734,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1623324528,
      "ems": null
    },
    {
      "latitude": 50.749805,
      "longitude": 7.17926,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1623324531,
      "ems": null
    },
    {
      "latitude": 50.750736,
      "longitude": 7.180405,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1623324534,
      "ems": null
    },
    {
      "latitude": 50.751846,
      "longitude": 7.181273,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1623324537,
      "ems": null
    },
    {
      "latitude": 50.753036,
      "longitude": 7.182164,
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
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1623324540,
      "ems": null
    },
    {
      "latitude": 50.755463,
      "longitude": 7.184168,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1623324546,
      "ems": null
    },
    {
      "latitude": 50.75679,
      "longitude": 7.185364,
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
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1623324549,
      "ems": null
    },
    {
      "latitude": 50.757614,
      "longitude": 7.186246,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1623324552,
      "ems": null
    },
    {
      "latitude": 50.758976,
      "longitude": 7.187653,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1623324555,
      "ems": null
    },
    {
      "latitude": 50.759811,
      "longitude": 7.188473,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1623324558,
      "ems": null
    },
    {
      "latitude": 50.76091,
      "longitude": 7.189364,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1623324561,
      "ems": null
    },
    {
      "latitude": 50.763565,
      "longitude": 7.189216,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1623324568,
      "ems": null
    },
    {
      "latitude": 50.764332,
      "longitude": 7.188187,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1623324571,
      "ems": null
    },
    {
      "latitude": 50.765263,
      "longitude": 7.185516,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1623324576,
      "ems": null
    },
    {
      "latitude": 50.76638,
      "longitude": 7.182388,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1623324582,
      "ems": null
    },
    {
      "latitude": 50.7668,
      "longitude": 7.180939,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1623324585,
      "ems": null
    },
    {
      "latitude": 50.767216,
      "longitude": 7.179718,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1623324588,
      "ems": null
    },
    {
      "latitude": 50.767776,
      "longitude": 7.178116,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1623324591,
      "ems": null
    },
    {
      "latitude": 50.768242,
      "longitude": 7.176743,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1623324594,
      "ems": null
    },
    {
      "latitude": 50.768661,
      "longitude": 7.175369,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1623324597,
      "ems": null
    },
    {
      "latitude": 50.768707,
      "longitude": 7.17514,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1623324598,
      "ems": null
    },
    {
      "latitude": 50.769104,
      "longitude": 7.173924,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1623324600,
      "ems": null
    },
    {
      "latitude": 50.769825,
      "longitude": 7.170639,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1623324606,
      "ems": null
    },
    {
      "latitude": 50.770065,
      "longitude": 7.169247,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1623324609,
      "ems": null
    },
    {
      "latitude": 50.769882,
      "longitude": 7.165833,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1623324616,
      "ems": null
    },
    {
      "latitude": 50.769451,
      "longitude": 7.164841,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1623324618,
      "ems": null
    },
    {
      "latitude": 50.768738,
      "longitude": 7.163754,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1623324621,
      "ems": null
    },
    {
      "latitude": 50.7668,
      "longitude": 7.162247,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1623324628,
      "ems": null
    },
    {
      "latitude": 50.763336,
      "longitude": 7.160488,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1623324639,
      "ems": null
    },
    {
      "latitude": 50.762421,
      "longitude": 7.16011,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1623324642,
      "ems": null
    },
    {
      "latitude": 50.761459,
      "longitude": 7.159894,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1623324645,
      "ems": null
    },
    {
      "latitude": 50.76123,
      "longitude": 7.159894,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1623324646,
      "ems": null
    },
    {
      "latitude": 50.758511,
      "longitude": 7.161026,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1623324654,
      "ems": null
    },
    {
      "latitude": 50.757614,
      "longitude": 7.162195,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1623324657,
      "ems": null
    },
    {
      "latitude": 50.756927,
      "longitude": 7.163544,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1623324660,
      "ems": null
    },
    {
      "latitude": 50.756092,
      "longitude": 7.165909,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1623324665,
      "ems": null
    },
    {
      "latitude": 50.755951,
      "longitude": 7.166367,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1623324666,
      "ems": null
    },
    {
      "latitude": 50.754913,
      "longitude": 7.169173,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1623324672,
      "ems": null
    },
    {
      "latitude": 50.754414,
      "longitude": 7.170792,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1623324675,
      "ems": null
    },
    {
      "latitude": 50.753906,
      "longitude": 7.172216,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1623324678,
      "ems": null
    },
    {
      "latitude": 50.753345,
      "longitude": 7.173767,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1623324682,
      "ems": null
    },
    {
      "latitude": 50.752945,
      "longitude": 7.174963,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1623324684,
      "ems": null
    },
    {
      "latitude": 50.752441,
      "longitude": 7.176373,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1623324687,
      "ems": null
    },
    {
      "latitude": 50.751995,
      "longitude": 7.177963,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1623324690,
      "ems": null
    },
    {
      "latitude": 50.751068,
      "longitude": 7.18105,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1623324696,
      "ems": null
    },
    {
      "latitude": 50.750923,
      "longitude": 7.182846,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1623324700,
      "ems": null
    },
    {
      "latitude": 50.750977,
      "longitude": 7.184168,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1623324702,
      "ems": null
    },
    {
      "latitude": 50.751019,
      "longitude": 7.184448,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1623324703,
      "ems": null
    },
    {
      "latitude": 50.751251,
      "longitude": 7.185364,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1623324705,
      "ems": null
    },
    {
      "latitude": 50.752647,
      "longitude": 7.187881,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1623324711,
      "ems": null
    },
    {
      "latitude": 50.753586,
      "longitude": 7.188844,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1623324715,
      "ems": null
    },
    {
      "latitude": 50.75423,
      "longitude": 7.189484,
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
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1623324717,
      "ems": null
    },
    {
      "latitude": 50.754929,
      "longitude": 7.190399,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1623324720,
      "ems": null
    },
    {
      "latitude": 50.755692,
      "longitude": 7.191517,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1623324723,
      "ems": null
    },
    {
      "latitude": 50.757065,
      "longitude": 7.193447,
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1623324729,
      "ems": null
    },
    {
      "latitude": 50.757751,
      "longitude": 7.194263,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1623324732,
      "ems": null
    },
    {
      "latitude": 50.758667,
      "longitude": 7.195006,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1623324735,
      "ems": null
    },
    {
      "latitude": 50.759537,
      "longitude": 7.195282,
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1623324739,
      "ems": null
    },
    {
      "latitude": 50.760361,
      "longitude": 7.195006,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1623324741,
      "ems": null
    },
    {
      "latitude": 50.76112,
      "longitude": 7.194214,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1623324745,
      "ems": null
    },
    {
      "latitude": 50.761631,
      "longitude": 7.193069,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1623324748,
      "ems": null
    },
    {
      "latitude": 50.762051,
      "longitude": 7.191925,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1623324750,
      "ems": null
    },
    {
      "latitude": 50.762604,
      "longitude": 7.1907,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1623324754,
      "ems": null
    },
    {
      "latitude": 50.762981,
      "longitude": 7.189789,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1623324756,
      "ems": null
    },
    {
      "latitude": 50.763538,
      "longitude": 7.18811,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1623324760,
      "ems": null
    },
    {
      "latitude": 50.763794,
      "longitude": 7.187137,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1623324762,
      "ems": null
    },
    {
      "latitude": 50.764114,
      "longitude": 7.185652,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1623324765,
      "ems": null
    },
    {
      "latitude": 50.764145,
      "longitude": 7.18544,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1623324766,
      "ems": null
    },
    {
      "latitude": 50.764656,
      "longitude": 7.183075,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1623324772,
      "ems": null
    },
    {
      "latitude": 50.765263,
      "longitude": 7.180634,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1623324777,
      "ems": null
    },
    {
      "latitude": 50.765354,
      "longitude": 7.180328,
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
      "timestamp": 1623324778,
      "ems": null
    },
    {
      "latitude": 50.765533,
      "longitude": 7.179491,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1623324780,
      "ems": null
    },
    {
      "latitude": 50.765633,
      "longitude": 7.179031,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1623324781,
      "ems": null
    },
    {
      "latitude": 50.765854,
      "longitude": 7.177784,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1623324784,
      "ems": null
    },
    {
      "latitude": 50.765991,
      "longitude": 7.176893,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1623324786,
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
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1623324792,
      "ems": null
    },
    {
      "latitude": 50.766724,
      "longitude": 7.173256,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1623324795,
      "ems": null
    },
    {
      "latitude": 50.767548,
      "longitude": 7.169544,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1623324803,
      "ems": null
    },
    {
      "latitude": 50.769825,
      "longitude": 7.158356,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1623324828,
      "ems": null
    },
    {
      "latitude": 50.770477,
      "longitude": 7.155514,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1623324834,
      "ems": null
    },
    {
      "latitude": 50.771126,
      "longitude": 7.152481,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1623324840,
      "ems": null
    },
    {
      "latitude": 50.771759,
      "longitude": 7.149427,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1623324847,
      "ems": null
    },
    {
      "latitude": 50.772354,
      "longitude": 7.146755,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1623324852,
      "ems": null
    },
    {
      "latitude": 50.772903,
      "longitude": 7.144083,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1623324858,
      "ems": null
    },
    {
      "latitude": 50.773361,
      "longitude": 7.141266,
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1623324865,
      "ems": null
    },
    {
      "latitude": 50.773361,
      "longitude": 7.13974,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1623324868,
      "ems": null
    },
    {
      "latitude": 50.772995,
      "longitude": 7.138292,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1623324871,
      "ems": null
    },
    {
      "latitude": 50.770943,
      "longitude": 7.136078,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1623324878,
      "ems": null
    },
    {
      "latitude": 50.770157,
      "longitude": 7.135843,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1623324880,
      "ems": null
    },
    {
      "latitude": 50.767776,
      "longitude": 7.135695,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1623324886,
      "ems": null
    },
    {
      "latitude": 50.766357,
      "longitude": 7.13562,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1623324889,
      "ems": null
    },
    {
      "latitude": 50.763958,
      "longitude": 7.13562,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1623324895,
      "ems": null
    },
    {
      "latitude": 50.762878,
      "longitude": 7.135695,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1623324898,
      "ems": null
    },
    {
      "latitude": 50.760452,
      "longitude": 7.136065,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1623324904,
      "ems": null
    },
    {
      "latitude": 50.757908,
      "longitude": 7.136612,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1623324910,
      "ems": null
    },
    {
      "latitude": 50.756695,
      "longitude": 7.136993,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1623324913,
      "ems": null
    },
    {
      "latitude": 50.755627,
      "longitude": 7.137375,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1623324916,
      "ems": null
    },
    {
      "latitude": 50.75441,
      "longitude": 7.137773,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1623324919,
      "ems": null
    },
    {
      "latitude": 50.753128,
      "longitude": 7.138515,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1623324922,
      "ems": null
    },
    {
      "latitude": 50.752167,
      "longitude": 7.139406,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1623324925,
      "ems": null
    },
    {
      "latitude": 50.751297,
      "longitude": 7.141037,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1623324928,
      "ems": null
    },
    {
      "latitude": 50.75069,
      "longitude": 7.142792,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1623324931,
      "ems": null
    },
    {
      "latitude": 50.750366,
      "longitude": 7.145004,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1623324934,
      "ems": null
    },
    {
      "latitude": 50.750198,
      "longitude": 7.146829,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1623324937,
      "ems": null
    },
    {
      "latitude": 50.749969,
      "longitude": 7.149056,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1623324940,
      "ems": null
    },
    {
      "latitude": 50.749832,
      "longitude": 7.150764,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1623324943,
      "ems": null
    },
    {
      "latitude": 50.749649,
      "longitude": 7.152619,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1623324946,
      "ems": null
    },
    {
      "latitude": 50.749237,
      "longitude": 7.156182,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1623324952,
      "ems": null
    },
    {
      "latitude": 50.74892,
      "longitude": 7.158127,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1623324955,
      "ems": null
    },
    {
      "latitude": 50.748642,
      "longitude": 7.159894,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1623324958,
      "ems": null
    },
    {
      "latitude": 50.748505,
      "longitude": 7.160721,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1623324960,
      "ems": null
    },
    {
      "latitude": 50.748409,
      "longitude": 7.161255,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1623324961,
      "ems": null
    },
    {
      "latitude": 50.74799,
      "longitude": 7.163696,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1623324966,
      "ems": null
    },
    {
      "latitude": 50.747852,
      "longitude": 7.164383,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1623324967,
      "ems": null
    },
    {
      "latitude": 50.747524,
      "longitude": 7.16629,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1623324970,
      "ems": null
    },
    {
      "latitude": 50.747154,
      "longitude": 7.168121,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1623324974,
      "ems": null
    },
    {
      "latitude": 50.746674,
      "longitude": 7.174518,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1623324985,
      "ems": null
    },
    {
      "latitude": 50.747314,
      "longitude": 7.177561,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1623324991,
      "ems": null
    },
    {
      "latitude": 50.748093,
      "longitude": 7.180604,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1623324997,
      "ems": null
    },
    {
      "latitude": 50.74855,
      "longitude": 7.183425,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1623325003,
      "ems": null
    },
    {
      "latitude": 50.74897,
      "longitude": 7.186813,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1623325009,
      "ems": null
    },
    {
      "latitude": 50.74934,
      "longitude": 7.189865,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1623325015,
      "ems": null
    },
    {
      "latitude": 50.750565,
      "longitude": 7.195748,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1623325028,
      "ems": null
    },
    {
      "latitude": 50.750832,
      "longitude": 7.196274,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1623325029,
      "ems": null
    },
    {
      "latitude": 50.751621,
      "longitude": 7.197495,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1623325033,
      "ems": null
    },
    {
      "latitude": 50.752396,
      "longitude": 7.198272,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1623325036,
      "ems": null
    },
    {
      "latitude": 50.753448,
      "longitude": 7.198792,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1623325039,
      "ems": null
    },
    {
      "latitude": 50.754414,
      "longitude": 7.198944,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1623325042,
      "ems": null
    },
    {
      "latitude": 50.756104,
      "longitude": 7.199014,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1623325047,
      "ems": null
    },
    {
      "latitude": 50.75647,
      "longitude": 7.19894,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1623325049,
      "ems": null
    },
    {
      "latitude": 50.757301,
      "longitude": 7.198868,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1623325051,
      "ems": null
    },
    {
      "latitude": 50.758438,
      "longitude": 7.198717,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1623325054,
      "ems": null
    },
    {
      "latitude": 50.759209,
      "longitude": 7.198563,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1623325057,
      "ems": null
    },
    {
      "latitude": 50.759537,
      "longitude": 7.198486,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1623325058,
      "ems": null
    },
    {
      "latitude": 50.760269,
      "longitude": 7.198198,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1623325060,
      "ems": null
    },
    {
      "latitude": 50.760864,
      "longitude": 7.197678,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1623325063,
      "ems": null
    },
    {
      "latitude": 50.762375,
      "longitude": 7.193966,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1623325072,
      "ems": null
    },
    {
      "latitude": 50.762608,
      "longitude": 7.192612,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1623325075,
      "ems": null
    },
    {
      "latitude": 50.762794,
      "longitude": 7.19162,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1623325077,
      "ems": null
    },
    {
      "latitude": 50.762886,
      "longitude": 7.191086,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1623325078,
      "ems": null
    },
    {
      "latitude": 50.763119,
      "longitude": 7.190018,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1623325081,
      "ems": null
    },
    {
      "latitude": 50.76329,
      "longitude": 7.189216,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1623325083,
      "ems": null
    },
    {
      "latitude": 50.763771,
      "longitude": 7.187271,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1623325087,
      "ems": null
    },
    {
      "latitude": 50.7659,
      "longitude": 7.176893,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1623325111,
      "ems": null
    },
    {
      "latitude": 50.766567,
      "longitude": 7.173843,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1623325117,
      "ems": null
    },
    {
      "latitude": 50.767216,
      "longitude": 7.170944,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1623325123,
      "ems": null
    }
  ],
};
