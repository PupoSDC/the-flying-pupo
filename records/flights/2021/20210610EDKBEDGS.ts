import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20210610EDKBEDGS",
    callsign: "DEFCZ",
    name: "PPL Check ride",
    description: "(first leg) I passed!",
  },
  pilotLog: {
    departure: new Date(2021, 5, 10, 9, 47).getTime(),
    arrival: new Date(2021, 5, 10, 10, 28).getTime(),
    singleEnginePistonTime: 41,
    picTime: 0,
    dualTime: 41,
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
      name: "Bonn Hangelar",
      code: "EDKB",
      position: {
        latitude: 50.7690965,
        longitude: 7.1620958,
      },
    },
    destination: {
      name: "Siegen Siegerland Airport",
      code: "EDGS",
      position: {
        latitude: 50.707699,
        longitude: 8.08297,
      },
    },
  },
  track: [
    {
      "latitude": 50.771545,
      "longitude": 7.150345,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 286,
      "squawk": "0",
      "timestamp": 1623319063,
      "ems": null
    },
    {
      "latitude": 50.772293,
      "longitude": 7.14653,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 286,
      "squawk": "0",
      "timestamp": 1623319071,
      "ems": null
    },
    {
      "latitude": 50.772804,
      "longitude": 7.143707,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 284,
      "squawk": "0",
      "timestamp": 1623319077,
      "ems": null
    },
    {
      "latitude": 50.772858,
      "longitude": 7.140668,
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
      "heading": 258,
      "squawk": "0",
      "timestamp": 1623319084,
      "ems": null
    },
    {
      "latitude": 50.771484,
      "longitude": 7.136808,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 232,
      "squawk": "0",
      "timestamp": 1623319093,
      "ems": null
    },
    {
      "latitude": 50.76947,
      "longitude": 7.132503,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 234,
      "squawk": "0",
      "timestamp": 1623319102,
      "ems": null
    },
    {
      "latitude": 50.768829,
      "longitude": 7.131092,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 235,
      "squawk": "0",
      "timestamp": 1623319105,
      "ems": null
    },
    {
      "latitude": 50.766861,
      "longitude": 7.126415,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1623319114,
      "ems": null
    },
    {
      "latitude": 50.765121,
      "longitude": 7.121964,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1623319123,
      "ems": null
    },
    {
      "latitude": 50.763748,
      "longitude": 7.118398,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1623319130,
      "ems": null
    },
    {
      "latitude": 50.762283,
      "longitude": 7.114241,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1623319138,
      "ems": null
    },
    {
      "latitude": 50.761211,
      "longitude": 7.110977,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1623319144,
      "ems": null
    },
    {
      "latitude": 50.760727,
      "longitude": 7.109342,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1623319147,
      "ems": null
    },
    {
      "latitude": 50.758484,
      "longitude": 7.103032,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1623319159,
      "ems": null
    },
    {
      "latitude": 50.756927,
      "longitude": 7.098999,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1623319167,
      "ems": null
    },
    {
      "latitude": 50.756046,
      "longitude": 7.097168,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1623319171,
      "ems": null
    },
    {
      "latitude": 50.754272,
      "longitude": 7.094718,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1623319177,
      "ems": null
    },
    {
      "latitude": 50.753113,
      "longitude": 7.09404,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1623319180,
      "ems": null
    },
    {
      "latitude": 50.750786,
      "longitude": 7.094116,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1623319186,
      "ems": null
    },
    {
      "latitude": 50.749786,
      "longitude": 7.094867,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1623319189,
      "ems": null
    },
    {
      "latitude": 50.748779,
      "longitude": 7.095906,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1623319192,
      "ems": null
    },
    {
      "latitude": 50.746948,
      "longitude": 7.098727,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1623319198,
      "ems": null
    },
    {
      "latitude": 50.746082,
      "longitude": 7.100143,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1623319201,
      "ems": null
    },
    {
      "latitude": 50.745255,
      "longitude": 7.101399,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1623319204,
      "ems": null
    },
    {
      "latitude": 50.744358,
      "longitude": 7.102814,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1623319207,
      "ems": null
    },
    {
      "latitude": 50.74329,
      "longitude": 7.104645,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1623319211,
      "ems": null
    },
    {
      "latitude": 50.741428,
      "longitude": 7.108383,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1623319219,
      "ems": null
    },
    {
      "latitude": 50.740814,
      "longitude": 7.109936,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1623319222,
      "ems": null
    },
    {
      "latitude": 50.740311,
      "longitude": 7.111495,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1623319225,
      "ems": null
    },
    {
      "latitude": 50.74017,
      "longitude": 7.111969,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1623319226,
      "ems": null
    },
    {
      "latitude": 50.739845,
      "longitude": 7.113113,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1623319228,
      "ems": null
    },
    {
      "latitude": 50.737793,
      "longitude": 7.120996,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1623319242,
      "ems": null
    },
    {
      "latitude": 50.737656,
      "longitude": 7.121516,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1623319243,
      "ems": null
    },
    {
      "latitude": 50.737198,
      "longitude": 7.123223,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1623319246,
      "ems": null
    },
    {
      "latitude": 50.736099,
      "longitude": 7.126712,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1623319252,
      "ems": null
    },
    {
      "latitude": 50.734863,
      "longitude": 7.130203,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1623319258,
      "ems": null
    },
    {
      "latitude": 50.734268,
      "longitude": 7.13176,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1623319261,
      "ems": null
    },
    {
      "latitude": 50.733467,
      "longitude": 7.133636,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1623319264,
      "ems": null
    },
    {
      "latitude": 50.732803,
      "longitude": 7.135249,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1623319267,
      "ems": null
    },
    {
      "latitude": 50.732162,
      "longitude": 7.136765,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1623319270,
      "ems": null
    },
    {
      "latitude": 50.731838,
      "longitude": 7.137527,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1623319271,
      "ems": null
    },
    {
      "latitude": 50.731045,
      "longitude": 7.139282,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1623319274,
      "ems": null
    },
    {
      "latitude": 50.730652,
      "longitude": 7.140223,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1623319276,
      "ems": null
    },
    {
      "latitude": 50.729919,
      "longitude": 7.141781,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1623319279,
      "ems": null
    },
    {
      "latitude": 50.729603,
      "longitude": 7.14241,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1623319280,
      "ems": null
    },
    {
      "latitude": 50.729279,
      "longitude": 7.143192,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1623319282,
      "ems": null
    },
    {
      "latitude": 50.7285,
      "longitude": 7.144899,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1623319285,
      "ems": null
    },
    {
      "latitude": 50.727089,
      "longitude": 7.147827,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1623319291,
      "ems": null
    },
    {
      "latitude": 50.725479,
      "longitude": 7.151134,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1623319297,
      "ems": null
    },
    {
      "latitude": 50.724064,
      "longitude": 7.154236,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1623319303,
      "ems": null
    },
    {
      "latitude": 50.722458,
      "longitude": 7.157815,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 125,
      "squawk": "4451",
      "timestamp": 1623319309,
      "ems": null
    },
    {
      "latitude": 50.721085,
      "longitude": 7.161007,
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
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1623319315,
      "ems": null
    },
    {
      "latitude": 50.719482,
      "longitude": 7.164496,
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
      "heading": 125,
      "squawk": "4451",
      "timestamp": 1623319321,
      "ems": null
    },
    {
      "latitude": 50.71801,
      "longitude": 7.167969,
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
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1623319327,
      "ems": null
    },
    {
      "latitude": 50.71666,
      "longitude": 7.171326,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1623319333,
      "ems": null
    },
    {
      "latitude": 50.715263,
      "longitude": 7.174759,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1623319339,
      "ems": null
    },
    {
      "latitude": 50.713821,
      "longitude": 7.178421,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1623319345,
      "ems": null
    },
    {
      "latitude": 50.712479,
      "longitude": 7.181792,
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
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1623319351,
      "ems": null
    },
    {
      "latitude": 50.709167,
      "longitude": 7.189484,
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
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1623319365,
      "ems": null
    },
    {
      "latitude": 50.707676,
      "longitude": 7.193069,
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
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1623319371,
      "ems": null
    },
    {
      "latitude": 50.705246,
      "longitude": 7.198643,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 124,
      "squawk": "4451",
      "timestamp": 1623319380,
      "ems": null
    },
    {
      "latitude": 50.704044,
      "longitude": 7.201538,
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
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1623319385,
      "ems": null
    },
    {
      "latitude": 50.702362,
      "longitude": 7.205695,
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
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1623319392,
      "ems": null
    },
    {
      "latitude": 50.700974,
      "longitude": 7.209244,
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
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1623319398,
      "ems": null
    },
    {
      "latitude": 50.699341,
      "longitude": 7.213638,
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
      "heading": 113,
      "squawk": "4451",
      "timestamp": 1623319405,
      "ems": null
    },
    {
      "latitude": 50.698975,
      "longitude": 7.216087,
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
      "heading": 98,
      "squawk": "4451",
      "timestamp": 1623319408,
      "ems": null
    },
    {
      "latitude": 50.698975,
      "longitude": 7.21824,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 86,
      "squawk": "4451",
      "timestamp": 1623319411,
      "ems": null
    },
    {
      "latitude": 50.699753,
      "longitude": 7.222472,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 67,
      "squawk": "4451",
      "timestamp": 1623319417,
      "ems": null
    },
    {
      "latitude": 50.700577,
      "longitude": 7.226332,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 74,
      "squawk": "4451",
      "timestamp": 1623319423,
      "ems": null
    },
    {
      "latitude": 50.701019,
      "longitude": 7.228775,
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
      "heading": 73,
      "squawk": "4451",
      "timestamp": 1623319426,
      "ems": null
    },
    {
      "latitude": 50.701206,
      "longitude": 7.229691,
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
      "heading": 73,
      "squawk": "4451",
      "timestamp": 1623319428,
      "ems": null
    },
    {
      "latitude": 50.70163,
      "longitude": 7.232938,
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
      "heading": 80,
      "squawk": "4451",
      "timestamp": 1623319432,
      "ems": null
    },
    {
      "latitude": 50.701675,
      "longitude": 7.234126,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 85,
      "squawk": "4451",
      "timestamp": 1623319434,
      "ems": null
    },
    {
      "latitude": 50.701675,
      "longitude": 7.235091,
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
      "heading": 88,
      "squawk": "4451",
      "timestamp": 1623319435,
      "ems": null
    },
    {
      "latitude": 50.70158,
      "longitude": 7.237396,
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
      "heading": 95,
      "squawk": "4451",
      "timestamp": 1623319438,
      "ems": null
    },
    {
      "latitude": 50.701485,
      "longitude": 7.23938,
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
      "heading": 95,
      "squawk": "4451",
      "timestamp": 1623319441,
      "ems": null
    },
    {
      "latitude": 50.701309,
      "longitude": 7.241698,
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
      "heading": 95,
      "squawk": "4451",
      "timestamp": 1623319444,
      "ems": null
    },
    {
      "latitude": 50.701206,
      "longitude": 7.243042,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1623319446,
      "ems": null
    },
    {
      "latitude": 50.701065,
      "longitude": 7.245102,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1623319449,
      "ems": null
    },
    {
      "latitude": 50.700974,
      "longitude": 7.24617,
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
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1623319450,
      "ems": null
    },
    {
      "latitude": 50.700741,
      "longitude": 7.252045,
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
      "heading": 90,
      "squawk": "4451",
      "timestamp": 1623319458,
      "ems": null
    },
    {
      "latitude": 50.700741,
      "longitude": 7.252731,
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
      "heading": 88,
      "squawk": "4451",
      "timestamp": 1623319459,
      "ems": null
    },
    {
      "latitude": 50.700787,
      "longitude": 7.253876,
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
      "heading": 86,
      "squawk": "4451",
      "timestamp": 1623319461,
      "ems": null
    },
    {
      "latitude": 50.701263,
      "longitude": 7.257435,
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
      "heading": 77,
      "squawk": "4451",
      "timestamp": 1623319466,
      "ems": null
    },
    {
      "latitude": 50.701584,
      "longitude": 7.258919,
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
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623319468,
      "ems": null
    },
    {
      "latitude": 50.702091,
      "longitude": 7.261124,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623319471,
      "ems": null
    },
    {
      "latitude": 50.703022,
      "longitude": 7.265396,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623319477,
      "ems": null
    },
    {
      "latitude": 50.703487,
      "longitude": 7.267456,
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
      "heading": 71,
      "squawk": "4451",
      "timestamp": 1623319480,
      "ems": null
    },
    {
      "latitude": 50.703918,
      "longitude": 7.269386,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 71,
      "squawk": "4451",
      "timestamp": 1623319483,
      "ems": null
    },
    {
      "latitude": 50.704193,
      "longitude": 7.270796,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 72,
      "squawk": "4451",
      "timestamp": 1623319486,
      "ems": null
    },
    {
      "latitude": 50.704559,
      "longitude": 7.272568,
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
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623319488,
      "ems": null
    },
    {
      "latitude": 50.704697,
      "longitude": 7.273178,
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
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623319489,
      "ems": null
    },
    {
      "latitude": 50.705116,
      "longitude": 7.275009,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 71,
      "squawk": "4451",
      "timestamp": 1623319492,
      "ems": null
    },
    {
      "latitude": 50.706047,
      "longitude": 7.279129,
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
      "heading": 69,
      "squawk": "4451",
      "timestamp": 1623319499,
      "ems": null
    },
    {
      "latitude": 50.709137,
      "longitude": 7.292472,
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
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623319519,
      "ems": null
    },
    {
      "latitude": 50.711914,
      "longitude": 7.30484,
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
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623319537,
      "ems": null
    },
    {
      "latitude": 50.713852,
      "longitude": 7.313554,
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
      "heading": 67,
      "squawk": "4451",
      "timestamp": 1623319550,
      "ems": null
    },
    {
      "latitude": 50.714798,
      "longitude": 7.317123,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 66,
      "squawk": "4451",
      "timestamp": 1623319555,
      "ems": null
    },
    {
      "latitude": 50.71666,
      "longitude": 7.324295,
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
      "heading": 67,
      "squawk": "4451",
      "timestamp": 1623319566,
      "ems": null
    },
    {
      "latitude": 50.717331,
      "longitude": 7.326842,
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
      "heading": 67,
      "squawk": "4451",
      "timestamp": 1623319570,
      "ems": null
    },
    {
      "latitude": 50.717407,
      "longitude": 7.327118,
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
      "heading": 67,
      "squawk": "4451",
      "timestamp": 1623319571,
      "ems": null
    },
    {
      "latitude": 50.718803,
      "longitude": 7.332611,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 68,
      "squawk": "4451",
      "timestamp": 1623319579,
      "ems": null
    },
    {
      "latitude": 50.719711,
      "longitude": 7.336492,
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
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623319585,
      "ems": null
    },
    {
      "latitude": 50.721039,
      "longitude": 7.342148,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 68,
      "squawk": "4451",
      "timestamp": 1623319594,
      "ems": null
    },
    {
      "latitude": 50.722046,
      "longitude": 7.346142,
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
      "heading": 67,
      "squawk": "4451",
      "timestamp": 1623319600,
      "ems": null
    },
    {
      "latitude": 50.723694,
      "longitude": 7.352452,
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
      "heading": 68,
      "squawk": "4451",
      "timestamp": 1623319610,
      "ems": null
    },
    {
      "latitude": 50.72504,
      "longitude": 7.357941,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 69,
      "squawk": "4451",
      "timestamp": 1623319618,
      "ems": null
    },
    {
      "latitude": 50.726112,
      "longitude": 7.362137,
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
      "heading": 68,
      "squawk": "4451",
      "timestamp": 1623319625,
      "ems": null
    },
    {
      "latitude": 50.727646,
      "longitude": 7.368317,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 68,
      "squawk": "4451",
      "timestamp": 1623319634,
      "ems": null
    },
    {
      "latitude": 50.728672,
      "longitude": 7.372208,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 67,
      "squawk": "4451",
      "timestamp": 1623319640,
      "ems": null
    },
    {
      "latitude": 50.729603,
      "longitude": 7.375946,
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
      "heading": 67,
      "squawk": "4451",
      "timestamp": 1623319646,
      "ems": null
    },
    {
      "latitude": 50.730625,
      "longitude": 7.379913,
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
      "heading": 68,
      "squawk": "4451",
      "timestamp": 1623319652,
      "ems": null
    },
    {
      "latitude": 50.731606,
      "longitude": 7.383957,
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
      "heading": 69,
      "squawk": "4451",
      "timestamp": 1623319658,
      "ems": null
    },
    {
      "latitude": 50.733444,
      "longitude": 7.391943,
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
      "heading": 71,
      "squawk": "4451",
      "timestamp": 1623319670,
      "ems": null
    },
    {
      "latitude": 50.734222,
      "longitude": 7.395877,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 71,
      "squawk": "4451",
      "timestamp": 1623319676,
      "ems": null
    },
    {
      "latitude": 50.735138,
      "longitude": 7.400405,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 73,
      "squawk": "4451",
      "timestamp": 1623319682,
      "ems": null
    },
    {
      "latitude": 50.73547,
      "longitude": 7.402267,
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
      "heading": 74,
      "squawk": "4451",
      "timestamp": 1623319685,
      "ems": null
    },
    {
      "latitude": 50.736305,
      "longitude": 7.40654,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 71,
      "squawk": "4451",
      "timestamp": 1623319691,
      "ems": null
    },
    {
      "latitude": 50.737747,
      "longitude": 7.413248,
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
      "heading": 71,
      "squawk": "4451",
      "timestamp": 1623319700,
      "ems": null
    },
    {
      "latitude": 50.738632,
      "longitude": 7.41745,
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
      "heading": 71,
      "squawk": "4451",
      "timestamp": 1623319706,
      "ems": null
    },
    {
      "latitude": 50.739578,
      "longitude": 7.42171,
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
      "heading": 71,
      "squawk": "4451",
      "timestamp": 1623319712,
      "ems": null
    },
    {
      "latitude": 50.741684,
      "longitude": 7.432028,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 73,
      "squawk": "4451",
      "timestamp": 1623319727,
      "ems": null
    },
    {
      "latitude": 50.742737,
      "longitude": 7.438412,
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
      "heading": 73,
      "squawk": "4451",
      "timestamp": 1623319736,
      "ems": null
    },
    {
      "latitude": 50.744568,
      "longitude": 7.449844,
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
      "heading": 74,
      "squawk": "4451",
      "timestamp": 1623319752,
      "ems": null
    },
    {
      "latitude": 50.745529,
      "longitude": 7.455931,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 77,
      "squawk": "4451",
      "timestamp": 1623319760,
      "ems": null
    },
    {
      "latitude": 50.746124,
      "longitude": 7.46031,
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
      "heading": 78,
      "squawk": "4451",
      "timestamp": 1623319766,
      "ems": null
    },
    {
      "latitude": 50.746639,
      "longitude": 7.464447,
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
      "heading": 79,
      "squawk": "4451",
      "timestamp": 1623319772,
      "ems": null
    },
    {
      "latitude": 50.747177,
      "longitude": 7.468922,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 78,
      "squawk": "4451",
      "timestamp": 1623319778,
      "ems": null
    },
    {
      "latitude": 50.747665,
      "longitude": 7.473068,
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
      "heading": 79,
      "squawk": "4451",
      "timestamp": 1623319784,
      "ems": null
    },
    {
      "latitude": 50.748093,
      "longitude": 7.477161,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 80,
      "squawk": "4451",
      "timestamp": 1623319791,
      "ems": null
    },
    {
      "latitude": 50.748642,
      "longitude": 7.481021,
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
      "heading": 71,
      "squawk": "4451",
      "timestamp": 1623319797,
      "ems": null
    },
    {
      "latitude": 50.749741,
      "longitude": 7.484362,
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
      "heading": 60,
      "squawk": "4451",
      "timestamp": 1623319802,
      "ems": null
    },
    {
      "latitude": 50.749832,
      "longitude": 7.484584,
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
      "heading": 61,
      "squawk": "4451",
      "timestamp": 1623319803,
      "ems": null
    },
    {
      "latitude": 50.750427,
      "longitude": 7.486292,
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
      "heading": 62,
      "squawk": "4451",
      "timestamp": 1623319806,
      "ems": null
    },
    {
      "latitude": 50.750793,
      "longitude": 7.48748,
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
      "heading": 60,
      "squawk": "4451",
      "timestamp": 1623319808,
      "ems": null
    },
    {
      "latitude": 50.75148,
      "longitude": 7.489409,
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
      "heading": 61,
      "squawk": "4451",
      "timestamp": 1623319811,
      "ems": null
    },
    {
      "latitude": 50.752808,
      "longitude": 7.493269,
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
      "heading": 63,
      "squawk": "4451",
      "timestamp": 1623319818,
      "ems": null
    },
    {
      "latitude": 50.753159,
      "longitude": 7.494507,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 63,
      "squawk": "4451",
      "timestamp": 1623319820,
      "ems": null
    },
    {
      "latitude": 50.753345,
      "longitude": 7.495117,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 64,
      "squawk": "4451",
      "timestamp": 1623319821,
      "ems": null
    },
    {
      "latitude": 50.754181,
      "longitude": 7.497946,
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
      "heading": 65,
      "squawk": "4451",
      "timestamp": 1623319825,
      "ems": null
    },
    {
      "latitude": 50.754913,
      "longitude": 7.500545,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 66,
      "squawk": "4451",
      "timestamp": 1623319830,
      "ems": null
    },
    {
      "latitude": 50.755814,
      "longitude": 7.503967,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 68,
      "squawk": "4451",
      "timestamp": 1623319835,
      "ems": null
    },
    {
      "latitude": 50.756241,
      "longitude": 7.505815,
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
      "heading": 68,
      "squawk": "4451",
      "timestamp": 1623319838,
      "ems": null
    },
    {
      "latitude": 50.756744,
      "longitude": 7.508087,
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
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623319841,
      "ems": null
    },
    {
      "latitude": 50.757114,
      "longitude": 7.509918,
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
      "heading": 72,
      "squawk": "4451",
      "timestamp": 1623319844,
      "ems": null
    },
    {
      "latitude": 50.757534,
      "longitude": 7.512131,
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
      "heading": 74,
      "squawk": "4451",
      "timestamp": 1623319847,
      "ems": null
    },
    {
      "latitude": 50.758209,
      "longitude": 7.516059,
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
      "heading": 74,
      "squawk": "4451",
      "timestamp": 1623319853,
      "ems": null
    },
    {
      "latitude": 50.758255,
      "longitude": 7.516282,
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
      "heading": 74,
      "squawk": "4451",
      "timestamp": 1623319854,
      "ems": null
    },
    {
      "latitude": 50.758511,
      "longitude": 7.517853,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 75,
      "squawk": "4451",
      "timestamp": 1623319856,
      "ems": null
    },
    {
      "latitude": 50.75856,
      "longitude": 7.518234,
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
      "heading": 75,
      "squawk": "4451",
      "timestamp": 1623319857,
      "ems": null
    },
    {
      "latitude": 50.758884,
      "longitude": 7.520065,
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
      "heading": 74,
      "squawk": "4451",
      "timestamp": 1623319859,
      "ems": null
    },
    {
      "latitude": 50.758942,
      "longitude": 7.520364,
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
      "heading": 75,
      "squawk": "4451",
      "timestamp": 1623319860,
      "ems": null
    },
    {
      "latitude": 50.759262,
      "longitude": 7.522443,
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
      "heading": 75,
      "squawk": "4451",
      "timestamp": 1623319863,
      "ems": null
    },
    {
      "latitude": 50.759861,
      "longitude": 7.526474,
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
      "heading": 77,
      "squawk": "4451",
      "timestamp": 1623319868,
      "ems": null
    },
    {
      "latitude": 50.761955,
      "longitude": 7.534332,
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
      "heading": 58,
      "squawk": "4451",
      "timestamp": 1623319880,
      "ems": null
    },
    {
      "latitude": 50.76284,
      "longitude": 7.536697,
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
      "heading": 60,
      "squawk": "4451",
      "timestamp": 1623319884,
      "ems": null
    },
    {
      "latitude": 50.763519,
      "longitude": 7.538551,
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
      "heading": 60,
      "squawk": "4451",
      "timestamp": 1623319887,
      "ems": null
    },
    {
      "latitude": 50.76416,
      "longitude": 7.540555,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 62,
      "squawk": "4451",
      "timestamp": 1623319890,
      "ems": null
    },
    {
      "latitude": 50.764618,
      "longitude": 7.541817,
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
      "heading": 63,
      "squawk": "4451",
      "timestamp": 1623319892,
      "ems": null
    },
    {
      "latitude": 50.765442,
      "longitude": 7.54449,
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
      "heading": 63,
      "squawk": "4451",
      "timestamp": 1623319896,
      "ems": null
    },
    {
      "latitude": 50.767124,
      "longitude": 7.55043,
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
      "heading": 65,
      "squawk": "4451",
      "timestamp": 1623319904,
      "ems": null
    },
    {
      "latitude": 50.767822,
      "longitude": 7.554066,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 78,
      "squawk": "4451",
      "timestamp": 1623319910,
      "ems": null
    },
    {
      "latitude": 50.768234,
      "longitude": 7.559114,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 82,
      "squawk": "4451",
      "timestamp": 1623319917,
      "ems": null
    },
    {
      "latitude": 50.768555,
      "longitude": 7.565052,
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
      "heading": 84,
      "squawk": "4451",
      "timestamp": 1623319925,
      "ems": null
    },
    {
      "latitude": 50.7686,
      "longitude": 7.565794,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 82,
      "squawk": "4451",
      "timestamp": 1623319926,
      "ems": null
    },
    {
      "latitude": 50.768707,
      "longitude": 7.567215,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 83,
      "squawk": "4451",
      "timestamp": 1623319928,
      "ems": null
    },
    {
      "latitude": 50.768894,
      "longitude": 7.569809,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 84,
      "squawk": "4451",
      "timestamp": 1623319932,
      "ems": null
    },
    {
      "latitude": 50.76894,
      "longitude": 7.570877,
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
      "heading": 83,
      "squawk": "4451",
      "timestamp": 1623319934,
      "ems": null
    },
    {
      "latitude": 50.76936,
      "longitude": 7.577667,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 85,
      "squawk": "4451",
      "timestamp": 1623319944,
      "ems": null
    },
    {
      "latitude": 50.769653,
      "longitude": 7.582348,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 85,
      "squawk": "4451",
      "timestamp": 1623319950,
      "ems": null
    },
    {
      "latitude": 50.769836,
      "longitude": 7.586653,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 86,
      "squawk": "4451",
      "timestamp": 1623319957,
      "ems": null
    },
    {
      "latitude": 50.77002,
      "longitude": 7.590514,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 85,
      "squawk": "4451",
      "timestamp": 1623319962,
      "ems": null
    },
    {
      "latitude": 50.770294,
      "longitude": 7.596081,
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
      "heading": 85,
      "squawk": "4451",
      "timestamp": 1623319971,
      "ems": null
    },
    {
      "latitude": 50.770382,
      "longitude": 7.604294,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 87,
      "squawk": "4451",
      "timestamp": 1623319982,
      "ems": null
    },
    {
      "latitude": 50.770477,
      "longitude": 7.608719,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 89,
      "squawk": "4451",
      "timestamp": 1623319989,
      "ems": null
    },
    {
      "latitude": 50.770477,
      "longitude": 7.612635,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 89,
      "squawk": "4451",
      "timestamp": 1623319994,
      "ems": null
    },
    {
      "latitude": 50.77071,
      "longitude": 7.619324,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 83,
      "squawk": "4451",
      "timestamp": 1623320004,
      "ems": null
    },
    {
      "latitude": 50.770935,
      "longitude": 7.62325,
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
      "heading": 86,
      "squawk": "4451",
      "timestamp": 1623320010,
      "ems": null
    },
    {
      "latitude": 50.771034,
      "longitude": 7.627258,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 87,
      "squawk": "4451",
      "timestamp": 1623320016,
      "ems": null
    },
    {
      "latitude": 50.77121,
      "longitude": 7.631267,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 85,
      "squawk": "4451",
      "timestamp": 1623320022,
      "ems": null
    },
    {
      "latitude": 50.771358,
      "longitude": 7.633896,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 83,
      "squawk": "4451",
      "timestamp": 1623320026,
      "ems": null
    },
    {
      "latitude": 50.7715,
      "longitude": 7.635345,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 81,
      "squawk": "4451",
      "timestamp": 1623320028,
      "ems": null
    },
    {
      "latitude": 50.771896,
      "longitude": 7.637577,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 72,
      "squawk": "4451",
      "timestamp": 1623320031,
      "ems": null
    },
    {
      "latitude": 50.772263,
      "longitude": 7.638987,
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
      "heading": 65,
      "squawk": "4451",
      "timestamp": 1623320034,
      "ems": null
    },
    {
      "latitude": 50.772991,
      "longitude": 7.64122,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 62,
      "squawk": "4451",
      "timestamp": 1623320037,
      "ems": null
    },
    {
      "latitude": 50.773594,
      "longitude": 7.642975,
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
      "heading": 62,
      "squawk": "4451",
      "timestamp": 1623320040,
      "ems": null
    },
    {
      "latitude": 50.774059,
      "longitude": 7.644424,
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
      "heading": 62,
      "squawk": "4451",
      "timestamp": 1623320043,
      "ems": null
    },
    {
      "latitude": 50.774231,
      "longitude": 7.644926,
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
      "heading": 62,
      "squawk": "4451",
      "timestamp": 1623320044,
      "ems": null
    },
    {
      "latitude": 50.774643,
      "longitude": 7.646336,
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
      "heading": 63,
      "squawk": "4451",
      "timestamp": 1623320046,
      "ems": null
    },
    {
      "latitude": 50.774944,
      "longitude": 7.64801,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 66,
      "squawk": "4451",
      "timestamp": 1623320048,
      "ems": null
    },
    {
      "latitude": 50.77504,
      "longitude": 7.650681,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 66,
      "squawk": "4451",
      "timestamp": 1623320052,
      "ems": null
    },
    {
      "latitude": 50.773548,
      "longitude": 7.658997,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1623320064,
      "ems": null
    },
    {
      "latitude": 50.772476,
      "longitude": 7.666092,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1623320074,
      "ems": null
    },
    {
      "latitude": 50.772339,
      "longitude": 7.66716,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1623320076,
      "ems": null
    },
    {
      "latitude": 50.772217,
      "longitude": 7.667937,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1623320077,
      "ems": null
    },
    {
      "latitude": 50.771759,
      "longitude": 7.671575,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1623320082,
      "ems": null
    },
    {
      "latitude": 50.771667,
      "longitude": 7.672317,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1623320083,
      "ems": null
    },
    {
      "latitude": 50.771034,
      "longitude": 7.678223,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 98,
      "squawk": "4451",
      "timestamp": 1623320091,
      "ems": null
    },
    {
      "latitude": 50.770569,
      "longitude": 7.682648,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1623320097,
      "ems": null
    },
    {
      "latitude": 50.769699,
      "longitude": 7.688871,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1623320106,
      "ems": null
    },
    {
      "latitude": 50.768143,
      "longitude": 7.701416,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1623320124,
      "ems": null
    },
    {
      "latitude": 50.766705,
      "longitude": 7.711563,
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
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1623320139,
      "ems": null
    },
    {
      "latitude": 50.765579,
      "longitude": 7.718266,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1623320148,
      "ems": null
    },
    {
      "latitude": 50.764801,
      "longitude": 7.722275,
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
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1623320154,
      "ems": null
    },
    {
      "latitude": 50.763931,
      "longitude": 7.726878,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 107,
      "squawk": "4451",
      "timestamp": 1623320160,
      "ems": null
    },
    {
      "latitude": 50.763199,
      "longitude": 7.730886,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1623320166,
      "ems": null
    },
    {
      "latitude": 50.761864,
      "longitude": 7.739334,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1623320178,
      "ems": null
    },
    {
      "latitude": 50.761139,
      "longitude": 7.743431,
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
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1623320184,
      "ems": null
    },
    {
      "latitude": 50.760361,
      "longitude": 7.747811,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1623320190,
      "ems": null
    },
    {
      "latitude": 50.759724,
      "longitude": 7.75177,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1623320196,
      "ems": null
    },
    {
      "latitude": 50.759079,
      "longitude": 7.755902,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1623320202,
      "ems": null
    },
    {
      "latitude": 50.758118,
      "longitude": 7.762064,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1623320211,
      "ems": null
    },
    {
      "latitude": 50.757202,
      "longitude": 7.76815,
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
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1623320220,
      "ems": null
    },
    {
      "latitude": 50.756603,
      "longitude": 7.772446,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1623320226,
      "ems": null
    },
    {
      "latitude": 50.755764,
      "longitude": 7.780304,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 98,
      "squawk": "4451",
      "timestamp": 1623320238,
      "ems": null
    },
    {
      "latitude": 50.75502,
      "longitude": 7.788391,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1623320250,
      "ems": null
    },
    {
      "latitude": 50.754776,
      "longitude": 7.792128,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 95,
      "squawk": "4451",
      "timestamp": 1623320256,
      "ems": null
    },
    {
      "latitude": 50.754639,
      "longitude": 7.796062,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 92,
      "squawk": "4451",
      "timestamp": 1623320262,
      "ems": null
    },
    {
      "latitude": 50.754547,
      "longitude": 7.800219,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 92,
      "squawk": "4451",
      "timestamp": 1623320268,
      "ems": null
    },
    {
      "latitude": 50.754414,
      "longitude": 7.804108,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 92,
      "squawk": "4451",
      "timestamp": 1623320274,
      "ems": null
    },
    {
      "latitude": 50.754364,
      "longitude": 7.81024,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 88,
      "squawk": "4451",
      "timestamp": 1623320283,
      "ems": null
    },
    {
      "latitude": 50.75441,
      "longitude": 7.812244,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 87,
      "squawk": "4451",
      "timestamp": 1623320286,
      "ems": null
    },
    {
      "latitude": 50.754509,
      "longitude": 7.814178,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 86,
      "squawk": "4451",
      "timestamp": 1623320289,
      "ems": null
    },
    {
      "latitude": 50.744595,
      "longitude": 7.935257,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1623320481,
      "ems": null
    },
    {
      "latitude": 50.740215,
      "longitude": 7.946167,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1623320502,
      "ems": null
    },
    {
      "latitude": 50.73761,
      "longitude": 7.952805,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1623320513,
      "ems": null
    },
    {
      "latitude": 50.735748,
      "longitude": 7.95784,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1623320522,
      "ems": null
    },
    {
      "latitude": 50.734039,
      "longitude": 7.962712,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1623320530,
      "ems": null
    },
    {
      "latitude": 50.730469,
      "longitude": 7.972808,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1623320547,
      "ems": null
    },
    {
      "latitude": 50.727833,
      "longitude": 7.98027,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1623320559,
      "ems": null
    },
    {
      "latitude": 50.72625,
      "longitude": 7.985153,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1623320566,
      "ems": null
    },
    {
      "latitude": 50.723785,
      "longitude": 7.992401,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 118,
      "squawk": "4451",
      "timestamp": 1623320576,
      "ems": null
    },
    {
      "latitude": 50.721455,
      "longitude": 7.99881,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1623320586,
      "ems": null
    },
    {
      "latitude": 50.719688,
      "longitude": 8.003082,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1623320593,
      "ems": null
    },
    {
      "latitude": 50.718105,
      "longitude": 8.006897,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "squawk": "4451",
      "timestamp": 1623320598,
      "ems": null
    },
    {
      "latitude": 50.702602,
      "longitude": 8.028641,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1623320643,
      "ems": null
    },
    {
      "latitude": 50.700394,
      "longitude": 8.031155,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1623320650,
      "ems": null
    },
    {
      "latitude": 50.692703,
      "longitude": 8.04125,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 113,
      "squawk": "4451",
      "timestamp": 1623320673,
      "ems": null
    },
    {
      "latitude": 50.696686,
      "longitude": 8.058695,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623320699,
      "ems": null
    },
    {
      "latitude": 50.687893,
      "longitude": 8.0867,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 130,
      "squawk": "4451",
      "timestamp": 1623320745,
      "ems": null
    },
    {
      "latitude": 50.680489,
      "longitude": 8.102951,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1623320779,
      "ems": null
    },
    {
      "latitude": 50.678925,
      "longitude": 8.106648,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1623320787,
      "ems": null
    },
    {
      "latitude": 50.67672,
      "longitude": 8.112793,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1623320800,
      "ems": null
    },
    {
      "latitude": 50.680435,
      "longitude": 8.120678,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 32,
      "squawk": "4451",
      "timestamp": 1623320819,
      "ems": null
    },
    {
      "latitude": 50.689545,
      "longitude": 8.11912,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1623320853,
      "ems": null
    },
    {
      "latitude": 50.691662,
      "longitude": 8.115158,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1623320863,
      "ems": null
    },
    {
      "latitude": 50.692734,
      "longitude": 8.113174,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 307,
      "squawk": "4451",
      "timestamp": 1623320869,
      "ems": null
    },
    {
      "latitude": 50.695667,
      "longitude": 8.107376,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1623320884,
      "ems": null
    },
    {
      "latitude": 50.696686,
      "longitude": 8.105387,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1623320889,
      "ems": null
    },
    {
      "latitude": 50.698135,
      "longitude": 8.102112,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1623320898,
      "ems": null
    },
    {
      "latitude": 50.700413,
      "longitude": 8.097382,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1623320912,
      "ems": null
    }
  ],
};