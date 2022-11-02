import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20221001EPLLEPLL",
    callsign: "BNI6D",
    name: "MEP class 2",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 9, 1, 9, 57).getTime(),
    arrival: new Date(2022, 9, 1, 11, 50).getTime(),
    singleEnginePistonTime: 0,
    multiEnginePistonTime: 113,
    picTime: 0,
    dualTime: 113,
    landings: {
      day: 6,
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
      registration: "SP-SID",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      name: "Lodz Wladyslaw Reymont Airport",
      code: "EPLL",
      position: {
        latitude: 51.721882,
        longitude: 19.39813,
      },
    },
    destination: {
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
      "latitude": 51.718929,
      "longitude": 19.384384,
      "altitude": {
        "feet": 850,
        "meters": 259
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 254,
      "squawk": "0",
      "timestamp": 1664618886,
      "ems": null
    },
    {
      "latitude": 51.717999,
      "longitude": 19.379501,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 253,
      "squawk": "0",
      "timestamp": 1664618895,
      "ems": null
    },
    {
      "latitude": 51.716766,
      "longitude": 19.373871,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 250,
      "squawk": "0",
      "timestamp": 1664618904,
      "ems": null
    },
    {
      "latitude": 51.716171,
      "longitude": 19.371643,
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
      "heading": 247,
      "squawk": "0",
      "timestamp": 1664618908,
      "ems": null
    },
    {
      "latitude": 51.715252,
      "longitude": 19.368362,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 244,
      "squawk": "0",
      "timestamp": 1664618913,
      "ems": null
    },
    {
      "latitude": 51.714649,
      "longitude": 19.366379,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 244,
      "squawk": "0",
      "timestamp": 1664618917,
      "ems": null
    },
    {
      "latitude": 51.713654,
      "longitude": 19.36281,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 246,
      "squawk": "0",
      "timestamp": 1664618921,
      "ems": null
    },
    {
      "latitude": 51.711868,
      "longitude": 19.356796,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 238,
      "squawk": "0",
      "timestamp": 1664618930,
      "ems": null
    },
    {
      "latitude": 51.710644,
      "longitude": 19.354324,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1664618934,
      "ems": null
    },
    {
      "latitude": 51.70903,
      "longitude": 19.352268,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1664618938,
      "ems": null
    },
    {
      "latitude": 51.70697,
      "longitude": 19.350338,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1664618943,
      "ems": null
    },
    {
      "latitude": 51.705185,
      "longitude": 19.349298,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1664618947,
      "ems": null
    },
    {
      "latitude": 51.702869,
      "longitude": 19.348755,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664618952,
      "ems": null
    },
    {
      "latitude": 51.701241,
      "longitude": 19.348907,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664618956,
      "ems": null
    },
    {
      "latitude": 51.699333,
      "longitude": 19.34967,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664618960,
      "ems": null
    },
    {
      "latitude": 51.697704,
      "longitude": 19.350891,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1664618964,
      "ems": null
    },
    {
      "latitude": 51.696308,
      "longitude": 19.352417,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1664618968,
      "ems": null
    },
    {
      "latitude": 51.694584,
      "longitude": 19.354935,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1664618973,
      "ems": null
    },
    {
      "latitude": 51.693558,
      "longitude": 19.356871,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664618977,
      "ems": null
    },
    {
      "latitude": 51.692535,
      "longitude": 19.359436,
      "altitude": {
        "feet": 1875,
        "meters": 572
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664618981,
      "ems": null
    },
    {
      "latitude": 51.691418,
      "longitude": 19.362259,
      "altitude": {
        "feet": 1925,
        "meters": 587
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664618985,
      "ems": null
    },
    {
      "latitude": 51.690582,
      "longitude": 19.364471,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664618988,
      "ems": null
    },
    {
      "latitude": 51.689884,
      "longitude": 19.366379,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664618992,
      "ems": null
    },
    {
      "latitude": 51.689392,
      "longitude": 19.367783,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664618994,
      "ems": null
    },
    {
      "latitude": 51.688705,
      "longitude": 19.369862,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664618997,
      "ems": null
    },
    {
      "latitude": 51.688301,
      "longitude": 19.371109,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664618999,
      "ems": null
    },
    {
      "latitude": 51.687469,
      "longitude": 19.373648,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664619004,
      "ems": null
    },
    {
      "latitude": 51.686111,
      "longitude": 19.377747,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664619010,
      "ems": null
    },
    {
      "latitude": 51.685555,
      "longitude": 19.379654,
      "altitude": {
        "feet": 2350,
        "meters": 716
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664619013,
      "ems": null
    },
    {
      "latitude": 51.685135,
      "longitude": 19.380922,
      "altitude": {
        "feet": 2375,
        "meters": 724
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664619015,
      "ems": null
    },
    {
      "latitude": 51.684357,
      "longitude": 19.38352,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664619019,
      "ems": null
    },
    {
      "latitude": 51.683411,
      "longitude": 19.386597,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664619024,
      "ems": null
    },
    {
      "latitude": 51.682205,
      "longitude": 19.390646,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664619030,
      "ems": null
    },
    {
      "latitude": 51.680664,
      "longitude": 19.395523,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664619039,
      "ems": null
    },
    {
      "latitude": 51.678589,
      "longitude": 19.401855,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664619049,
      "ems": null
    },
    {
      "latitude": 51.677399,
      "longitude": 19.40527,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664619054,
      "ems": null
    },
    {
      "latitude": 51.676708,
      "longitude": 19.406967,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664619057,
      "ems": null
    },
    {
      "latitude": 51.675266,
      "longitude": 19.410858,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664619064,
      "ems": null
    },
    {
      "latitude": 51.674011,
      "longitude": 19.414623,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664619069,
      "ems": null
    },
    {
      "latitude": 51.672657,
      "longitude": 19.41864,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664619076,
      "ems": null
    },
    {
      "latitude": 51.670944,
      "longitude": 19.424051,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664619084,
      "ems": null
    },
    {
      "latitude": 51.670006,
      "longitude": 19.427261,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664619088,
      "ems": null
    },
    {
      "latitude": 51.669586,
      "longitude": 19.428635,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664619090,
      "ems": null
    },
    {
      "latitude": 51.668198,
      "longitude": 19.433552,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664619097,
      "ems": null
    },
    {
      "latitude": 51.667679,
      "longitude": 19.435654,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664619100,
      "ems": null
    },
    {
      "latitude": 51.667118,
      "longitude": 19.437866,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664619103,
      "ems": null
    },
    {
      "latitude": 51.66655,
      "longitude": 19.440159,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664619106,
      "ems": null
    },
    {
      "latitude": 51.666,
      "longitude": 19.442535,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664619109,
      "ems": null
    },
    {
      "latitude": 51.665676,
      "longitude": 19.44397,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664619111,
      "ems": null
    },
    {
      "latitude": 51.664993,
      "longitude": 19.446989,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664619116,
      "ems": null
    },
    {
      "latitude": 51.664261,
      "longitude": 19.450848,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664619120,
      "ems": null
    },
    {
      "latitude": 51.663712,
      "longitude": 19.453817,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664619124,
      "ems": null
    },
    {
      "latitude": 51.663254,
      "longitude": 19.456406,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664619127,
      "ems": null
    },
    {
      "latitude": 51.662201,
      "longitude": 19.461092,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664619133,
      "ems": null
    },
    {
      "latitude": 51.661533,
      "longitude": 19.46312,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "squawk": "7000",
      "timestamp": 1664619136,
      "ems": null
    },
    {
      "latitude": 51.660782,
      "longitude": 19.465101,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664619139,
      "ems": null
    },
    {
      "latitude": 51.660004,
      "longitude": 19.467106,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664619142,
      "ems": null
    },
    {
      "latitude": 51.659206,
      "longitude": 19.469223,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664619145,
      "ems": null
    },
    {
      "latitude": 51.658447,
      "longitude": 19.471336,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664619148,
      "ems": null
    },
    {
      "latitude": 51.657856,
      "longitude": 19.473038,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664619151,
      "ems": null
    },
    {
      "latitude": 51.656925,
      "longitude": 19.475555,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664619154,
      "ems": null
    },
    {
      "latitude": 51.656178,
      "longitude": 19.477539,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664619157,
      "ems": null
    },
    {
      "latitude": 51.655342,
      "longitude": 19.479752,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664619160,
      "ems": null
    },
    {
      "latitude": 51.653961,
      "longitude": 19.483288,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664619165,
      "ems": null
    },
    {
      "latitude": 51.65181,
      "longitude": 19.488781,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664619174,
      "ems": null
    },
    {
      "latitude": 51.649475,
      "longitude": 19.494572,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664619181,
      "ems": null
    },
    {
      "latitude": 51.648239,
      "longitude": 19.497688,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664619187,
      "ems": null
    },
    {
      "latitude": 51.646587,
      "longitude": 19.501801,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664619192,
      "ems": null
    },
    {
      "latitude": 51.644485,
      "longitude": 19.507191,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664619199,
      "ems": null
    },
    {
      "latitude": 51.642864,
      "longitude": 19.511795,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664619205,
      "ems": null
    },
    {
      "latitude": 51.642334,
      "longitude": 19.514168,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664619208,
      "ems": null
    },
    {
      "latitude": 51.641968,
      "longitude": 19.516321,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664619211,
      "ems": null
    },
    {
      "latitude": 51.641693,
      "longitude": 19.5184,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664619215,
      "ems": null
    },
    {
      "latitude": 51.641422,
      "longitude": 19.521942,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664619217,
      "ems": null
    },
    {
      "latitude": 51.641281,
      "longitude": 19.524612,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664619220,
      "ems": null
    },
    {
      "latitude": 51.64119,
      "longitude": 19.527283,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664619223,
      "ems": null
    },
    {
      "latitude": 51.641144,
      "longitude": 19.5298,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664619227,
      "ems": null
    },
    {
      "latitude": 51.641048,
      "longitude": 19.532623,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664619229,
      "ems": null
    },
    {
      "latitude": 51.641052,
      "longitude": 19.535547,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664619233,
      "ems": null
    },
    {
      "latitude": 51.641052,
      "longitude": 19.537848,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664619236,
      "ems": null
    },
    {
      "latitude": 51.641048,
      "longitude": 19.5401,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664619238,
      "ems": null
    },
    {
      "latitude": 51.641006,
      "longitude": 19.543268,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664619241,
      "ems": null
    },
    {
      "latitude": 51.641003,
      "longitude": 19.545441,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664619244,
      "ems": null
    },
    {
      "latitude": 51.641003,
      "longitude": 19.547806,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664619247,
      "ems": null
    },
    {
      "latitude": 51.641052,
      "longitude": 19.553364,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1664619253,
      "ems": null
    },
    {
      "latitude": 51.641098,
      "longitude": 19.558559,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1664619259,
      "ems": null
    },
    {
      "latitude": 51.64119,
      "longitude": 19.565735,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664619268,
      "ems": null
    },
    {
      "latitude": 51.641376,
      "longitude": 19.571762,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664619275,
      "ems": null
    },
    {
      "latitude": 51.641464,
      "longitude": 19.57682,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664619280,
      "ems": null
    },
    {
      "latitude": 51.641281,
      "longitude": 19.581757,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664619287,
      "ems": null
    },
    {
      "latitude": 51.64119,
      "longitude": 19.584122,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664619290,
      "ems": null
    },
    {
      "latitude": 51.641144,
      "longitude": 19.5858,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664619292,
      "ems": null
    },
    {
      "latitude": 51.641006,
      "longitude": 19.588846,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664619296,
      "ems": null
    },
    {
      "latitude": 51.640862,
      "longitude": 19.590912,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1664619299,
      "ems": null
    },
    {
      "latitude": 51.640686,
      "longitude": 19.593077,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664619302,
      "ems": null
    },
    {
      "latitude": 51.640549,
      "longitude": 19.594784,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664619304,
      "ems": null
    },
    {
      "latitude": 51.640213,
      "longitude": 19.597397,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664619309,
      "ems": null
    },
    {
      "latitude": 51.639885,
      "longitude": 19.599991,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664619313,
      "ems": null
    },
    {
      "latitude": 51.639542,
      "longitude": 19.602356,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664619317,
      "ems": null
    },
    {
      "latitude": 51.639095,
      "longitude": 19.605026,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664619321,
      "ems": null
    },
    {
      "latitude": 51.638676,
      "longitude": 19.607391,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664619325,
      "ems": null
    },
    {
      "latitude": 51.638256,
      "longitude": 19.60968,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664619329,
      "ems": null
    },
    {
      "latitude": 51.637848,
      "longitude": 19.611933,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664619332,
      "ems": null
    },
    {
      "latitude": 51.637745,
      "longitude": 19.612656,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664619335,
      "ems": null
    },
    {
      "latitude": 51.637482,
      "longitude": 19.614084,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664619335,
      "ems": null
    },
    {
      "latitude": 51.636612,
      "longitude": 19.61891,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664619343,
      "ems": null
    },
    {
      "latitude": 51.636162,
      "longitude": 19.620972,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664619347,
      "ems": null
    },
    {
      "latitude": 51.635422,
      "longitude": 19.623735,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664619351,
      "ems": null
    },
    {
      "latitude": 51.635101,
      "longitude": 19.625145,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664619355,
      "ems": null
    },
    {
      "latitude": 51.633865,
      "longitude": 19.629971,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664619362,
      "ems": null
    },
    {
      "latitude": 51.633041,
      "longitude": 19.633026,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664619367,
      "ems": null
    },
    {
      "latitude": 51.632446,
      "longitude": 19.635166,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664619371,
      "ems": null
    },
    {
      "latitude": 51.631832,
      "longitude": 19.636993,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664619374,
      "ems": null
    },
    {
      "latitude": 51.631256,
      "longitude": 19.638655,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664619377,
      "ems": null
    },
    {
      "latitude": 51.630707,
      "longitude": 19.640141,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664619380,
      "ems": null
    },
    {
      "latitude": 51.630249,
      "longitude": 19.641401,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664619383,
      "ems": null
    },
    {
      "latitude": 51.629059,
      "longitude": 19.644892,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664619389,
      "ems": null
    },
    {
      "latitude": 51.628098,
      "longitude": 19.64786,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664619395,
      "ems": null
    },
    {
      "latitude": 51.627037,
      "longitude": 19.650726,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664619400,
      "ems": null
    },
    {
      "latitude": 51.625626,
      "longitude": 19.654318,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664619408,
      "ems": null
    },
    {
      "latitude": 51.623917,
      "longitude": 19.659119,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664619416,
      "ems": null
    },
    {
      "latitude": 51.622753,
      "longitude": 19.662323,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664619422,
      "ems": null
    },
    {
      "latitude": 51.621868,
      "longitude": 19.664764,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664619427,
      "ems": null
    },
    {
      "latitude": 51.620052,
      "longitude": 19.668808,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664619435,
      "ems": null
    },
    {
      "latitude": 51.619217,
      "longitude": 19.670258,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1664619438,
      "ems": null
    },
    {
      "latitude": 51.618393,
      "longitude": 19.671392,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1664619440,
      "ems": null
    },
    {
      "latitude": 51.617493,
      "longitude": 19.67247,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664619443,
      "ems": null
    },
    {
      "latitude": 51.616608,
      "longitude": 19.673544,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1664619446,
      "ems": null
    },
    {
      "latitude": 51.615631,
      "longitude": 19.67453,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1664619450,
      "ems": null
    },
    {
      "latitude": 51.614685,
      "longitude": 19.6754,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1664619452,
      "ems": null
    },
    {
      "latitude": 51.613632,
      "longitude": 19.676365,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1664619455,
      "ems": null
    },
    {
      "latitude": 51.612671,
      "longitude": 19.677107,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664619458,
      "ems": null
    },
    {
      "latitude": 51.611755,
      "longitude": 19.677776,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1664619461,
      "ems": null
    },
    {
      "latitude": 51.610416,
      "longitude": 19.67865,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664619465,
      "ems": null
    },
    {
      "latitude": 51.609421,
      "longitude": 19.67926,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664619467,
      "ems": null
    },
    {
      "latitude": 51.608231,
      "longitude": 19.679794,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664619471,
      "ems": null
    },
    {
      "latitude": 51.607224,
      "longitude": 19.680225,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664619474,
      "ems": null
    },
    {
      "latitude": 51.606216,
      "longitude": 19.680523,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664619476,
      "ems": null
    },
    {
      "latitude": 51.605255,
      "longitude": 19.680744,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664619479,
      "ems": null
    },
    {
      "latitude": 51.603947,
      "longitude": 19.680939,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664619483,
      "ems": null
    },
    {
      "latitude": 51.602829,
      "longitude": 19.681091,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1664619486,
      "ems": null
    },
    {
      "latitude": 51.601593,
      "longitude": 19.681265,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664619489,
      "ems": null
    },
    {
      "latitude": 51.600594,
      "longitude": 19.681625,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664619492,
      "ems": null
    },
    {
      "latitude": 51.598434,
      "longitude": 19.683121,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664619498,
      "ems": null
    },
    {
      "latitude": 51.597427,
      "longitude": 19.683863,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1664619501,
      "ems": null
    },
    {
      "latitude": 51.5965,
      "longitude": 19.684525,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664619504,
      "ems": null
    },
    {
      "latitude": 51.595459,
      "longitude": 19.6852,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664619507,
      "ems": null
    },
    {
      "latitude": 51.594452,
      "longitude": 19.685822,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664619510,
      "ems": null
    },
    {
      "latitude": 51.593426,
      "longitude": 19.686508,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664619513,
      "ems": null
    },
    {
      "latitude": 51.592209,
      "longitude": 19.687351,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664619516,
      "ems": null
    },
    {
      "latitude": 51.591248,
      "longitude": 19.687946,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664619519,
      "ems": null
    },
    {
      "latitude": 51.589191,
      "longitude": 19.689026,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664619525,
      "ems": null
    },
    {
      "latitude": 51.58812,
      "longitude": 19.689407,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664619528,
      "ems": null
    },
    {
      "latitude": 51.587234,
      "longitude": 19.689789,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664619530,
      "ems": null
    },
    {
      "latitude": 51.585884,
      "longitude": 19.690247,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664619534,
      "ems": null
    },
    {
      "latitude": 51.584839,
      "longitude": 19.690619,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664619537,
      "ems": null
    },
    {
      "latitude": 51.583786,
      "longitude": 19.690914,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664619540,
      "ems": null
    },
    {
      "latitude": 51.582642,
      "longitude": 19.691286,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664619543,
      "ems": null
    },
    {
      "latitude": 51.5816,
      "longitude": 19.69162,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664619546,
      "ems": null
    },
    {
      "latitude": 51.580719,
      "longitude": 19.691805,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664619549,
      "ems": null
    },
    {
      "latitude": 51.579391,
      "longitude": 19.692177,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664619552,
      "ems": null
    },
    {
      "latitude": 51.577179,
      "longitude": 19.692841,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664619558,
      "ems": null
    },
    {
      "latitude": 51.575085,
      "longitude": 19.693527,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664619564,
      "ems": null
    },
    {
      "latitude": 51.572197,
      "longitude": 19.695282,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1664619572,
      "ems": null
    },
    {
      "latitude": 51.571362,
      "longitude": 19.696045,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1664619575,
      "ems": null
    },
    {
      "latitude": 51.570103,
      "longitude": 19.697189,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1664619579,
      "ems": null
    },
    {
      "latitude": 51.568909,
      "longitude": 19.698114,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664619582,
      "ems": null
    },
    {
      "latitude": 51.567902,
      "longitude": 19.698858,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1664619585,
      "ems": null
    },
    {
      "latitude": 51.56694,
      "longitude": 19.699526,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664619588,
      "ems": null
    },
    {
      "latitude": 51.566193,
      "longitude": 19.700089,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664619590,
      "ems": null
    },
    {
      "latitude": 51.564938,
      "longitude": 19.701004,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664619594,
      "ems": null
    },
    {
      "latitude": 51.563873,
      "longitude": 19.701752,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1664619597,
      "ems": null
    },
    {
      "latitude": 51.561817,
      "longitude": 19.703369,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664619603,
      "ems": null
    },
    {
      "latitude": 51.559799,
      "longitude": 19.705168,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1664619609,
      "ems": null
    },
    {
      "latitude": 51.557831,
      "longitude": 19.7068,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1664619615,
      "ems": null
    },
    {
      "latitude": 51.555862,
      "longitude": 19.708359,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664619621,
      "ems": null
    },
    {
      "latitude": 51.553902,
      "longitude": 19.709778,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664619627,
      "ems": null
    },
    {
      "latitude": 51.552879,
      "longitude": 19.710388,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664619630,
      "ems": null
    },
    {
      "latitude": 51.552017,
      "longitude": 19.710882,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664619633,
      "ems": null
    },
    {
      "latitude": 51.550827,
      "longitude": 19.711552,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664619636,
      "ems": null
    },
    {
      "latitude": 51.550598,
      "longitude": 19.711626,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664619637,
      "ems": null
    },
    {
      "latitude": 51.5495,
      "longitude": 19.712145,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664619640,
      "ems": null
    },
    {
      "latitude": 51.548504,
      "longitude": 19.712524,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664619643,
      "ems": null
    },
    {
      "latitude": 51.547527,
      "longitude": 19.71283,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664619646,
      "ems": null
    },
    {
      "latitude": 51.546799,
      "longitude": 19.713036,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664619648,
      "ems": null
    },
    {
      "latitude": 51.54538,
      "longitude": 19.713408,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664619652,
      "ems": null
    },
    {
      "latitude": 51.544327,
      "longitude": 19.713703,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664619655,
      "ems": null
    },
    {
      "latitude": 51.543289,
      "longitude": 19.714127,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664619658,
      "ems": null
    },
    {
      "latitude": 51.542221,
      "longitude": 19.71452,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664619661,
      "ems": null
    },
    {
      "latitude": 51.54007,
      "longitude": 19.715485,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664619667,
      "ems": null
    },
    {
      "latitude": 51.537918,
      "longitude": 19.71645,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664619673,
      "ems": null
    },
    {
      "latitude": 51.535721,
      "longitude": 19.717194,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664619681,
      "ems": null
    },
    {
      "latitude": 51.532768,
      "longitude": 19.718475,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664619688,
      "ems": null
    },
    {
      "latitude": 51.530582,
      "longitude": 19.719467,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664619694,
      "ems": null
    },
    {
      "latitude": 51.52858,
      "longitude": 19.72023,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664619700,
      "ems": null
    },
    {
      "latitude": 51.526382,
      "longitude": 19.721052,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664619706,
      "ems": null
    },
    {
      "latitude": 51.525146,
      "longitude": 19.721424,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664619709,
      "ems": null
    },
    {
      "latitude": 51.524002,
      "longitude": 19.721647,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664619712,
      "ems": null
    },
    {
      "latitude": 51.523041,
      "longitude": 19.721869,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664619715,
      "ems": null
    },
    {
      "latitude": 51.521851,
      "longitude": 19.722166,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664619718,
      "ems": null
    },
    {
      "latitude": 51.520805,
      "longitude": 19.722366,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664619721,
      "ems": null
    },
    {
      "latitude": 51.519733,
      "longitude": 19.722672,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664619724,
      "ems": null
    },
    {
      "latitude": 51.517685,
      "longitude": 19.723587,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664619730,
      "ems": null
    },
    {
      "latitude": 51.516586,
      "longitude": 19.724319,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1664619733,
      "ems": null
    },
    {
      "latitude": 51.515671,
      "longitude": 19.72521,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1664619736,
      "ems": null
    },
    {
      "latitude": 51.514893,
      "longitude": 19.726101,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1664619739,
      "ems": null
    },
    {
      "latitude": 51.514103,
      "longitude": 19.727402,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1664619742,
      "ems": null
    },
    {
      "latitude": 51.513336,
      "longitude": 19.729071,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664619745,
      "ems": null
    },
    {
      "latitude": 51.512787,
      "longitude": 19.730406,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664619748,
      "ems": null
    },
    {
      "latitude": 51.512146,
      "longitude": 19.732132,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664619751,
      "ems": null
    },
    {
      "latitude": 51.511635,
      "longitude": 19.733505,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664619754,
      "ems": null
    },
    {
      "latitude": 51.510956,
      "longitude": 19.73538,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664619757,
      "ems": null
    },
    {
      "latitude": 51.510891,
      "longitude": 19.735641,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664619760,
      "ems": null
    },
    {
      "latitude": 51.509865,
      "longitude": 19.738617,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664619763,
      "ems": null
    },
    {
      "latitude": 51.509354,
      "longitude": 19.740353,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664619766,
      "ems": null
    },
    {
      "latitude": 51.50885,
      "longitude": 19.74206,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664619769,
      "ems": null
    },
    {
      "latitude": 51.508327,
      "longitude": 19.743805,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664619772,
      "ems": null
    },
    {
      "latitude": 51.507816,
      "longitude": 19.745255,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664619775,
      "ems": null
    },
    {
      "latitude": 51.506699,
      "longitude": 19.748816,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664619781,
      "ems": null
    },
    {
      "latitude": 51.505646,
      "longitude": 19.752081,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664619787,
      "ems": null
    },
    {
      "latitude": 51.504456,
      "longitude": 19.755348,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664619793,
      "ems": null
    },
    {
      "latitude": 51.503998,
      "longitude": 19.756622,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664619796,
      "ems": null
    },
    {
      "latitude": 51.503208,
      "longitude": 19.758606,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664619800,
      "ems": null
    },
    {
      "latitude": 51.502579,
      "longitude": 19.760099,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664619802,
      "ems": null
    },
    {
      "latitude": 51.501938,
      "longitude": 19.761658,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664619805,
      "ems": null
    },
    {
      "latitude": 51.501389,
      "longitude": 19.76292,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664619808,
      "ems": null
    },
    {
      "latitude": 51.500786,
      "longitude": 19.764404,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664619811,
      "ems": null
    },
    {
      "latitude": 51.499996,
      "longitude": 19.766235,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664619815,
      "ems": null
    },
    {
      "latitude": 51.499283,
      "longitude": 19.767744,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664619818,
      "ems": null
    },
    {
      "latitude": 51.498688,
      "longitude": 19.769156,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664619820,
      "ems": null
    },
    {
      "latitude": 51.497948,
      "longitude": 19.77066,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664619824,
      "ems": null
    },
    {
      "latitude": 51.497314,
      "longitude": 19.771976,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664619826,
      "ems": null
    },
    {
      "latitude": 51.49649,
      "longitude": 19.77346,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1664619829,
      "ems": null
    },
    {
      "latitude": 51.495712,
      "longitude": 19.774933,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1664619833,
      "ems": null
    },
    {
      "latitude": 51.494888,
      "longitude": 19.776281,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1664619836,
      "ems": null
    },
    {
      "latitude": 51.494175,
      "longitude": 19.777374,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1664619838,
      "ems": null
    },
    {
      "latitude": 51.493561,
      "longitude": 19.77836,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1664619840,
      "ems": null
    },
    {
      "latitude": 51.492409,
      "longitude": 19.779816,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664619844,
      "ems": null
    },
    {
      "latitude": 51.491943,
      "longitude": 19.780426,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1664619848,
      "ems": null
    },
    {
      "latitude": 51.490452,
      "longitude": 19.782639,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664619852,
      "ems": null
    },
    {
      "latitude": 51.489716,
      "longitude": 19.783705,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664619855,
      "ems": null
    },
    {
      "latitude": 51.488708,
      "longitude": 19.785189,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1664619857,
      "ems": null
    },
    {
      "latitude": 51.487614,
      "longitude": 19.786606,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664619861,
      "ems": null
    },
    {
      "latitude": 51.48674,
      "longitude": 19.787714,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664619864,
      "ems": null
    },
    {
      "latitude": 51.485798,
      "longitude": 19.788895,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664619867,
      "ems": null
    },
    {
      "latitude": 51.483982,
      "longitude": 19.791412,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1664619873,
      "ems": null
    },
    {
      "latitude": 51.482445,
      "longitude": 19.793854,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664619878,
      "ems": null
    },
    {
      "latitude": 51.480724,
      "longitude": 19.796371,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1664619885,
      "ems": null
    },
    {
      "latitude": 51.478958,
      "longitude": 19.798847,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1664619891,
      "ems": null
    },
    {
      "latitude": 51.478256,
      "longitude": 19.800186,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1664619894,
      "ems": null
    },
    {
      "latitude": 51.477493,
      "longitude": 19.801817,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664619897,
      "ems": null
    },
    {
      "latitude": 51.476761,
      "longitude": 19.803524,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664619900,
      "ems": null
    },
    {
      "latitude": 51.476162,
      "longitude": 19.805145,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664619903,
      "ems": null
    },
    {
      "latitude": 51.475433,
      "longitude": 19.807161,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664619906,
      "ems": null
    },
    {
      "latitude": 51.474792,
      "longitude": 19.808943,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664619909,
      "ems": null
    },
    {
      "latitude": 51.474197,
      "longitude": 19.81065,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664619912,
      "ems": null
    },
    {
      "latitude": 51.473694,
      "longitude": 19.812136,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664619914,
      "ems": null
    },
    {
      "latitude": 51.473099,
      "longitude": 19.814066,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664619918,
      "ems": null
    },
    {
      "latitude": 51.472412,
      "longitude": 19.816071,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664619921,
      "ems": null
    },
    {
      "latitude": 51.471832,
      "longitude": 19.817505,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664619924,
      "ems": null
    },
    {
      "latitude": 51.470341,
      "longitude": 19.821243,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664619930,
      "ems": null
    },
    {
      "latitude": 51.468933,
      "longitude": 19.824532,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664619936,
      "ems": null
    },
    {
      "latitude": 51.468201,
      "longitude": 19.826279,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664619939,
      "ems": null
    },
    {
      "latitude": 51.467457,
      "longitude": 19.828033,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664619942,
      "ems": null
    },
    {
      "latitude": 51.466709,
      "longitude": 19.829712,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664619945,
      "ems": null
    },
    {
      "latitude": 51.465958,
      "longitude": 19.831585,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664619948,
      "ems": null
    },
    {
      "latitude": 51.464447,
      "longitude": 19.835369,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "squawk": "7000",
      "timestamp": 1664619954,
      "ems": null
    },
    {
      "latitude": 51.463127,
      "longitude": 19.839172,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664619960,
      "ems": null
    },
    {
      "latitude": 51.462429,
      "longitude": 19.841309,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664619963,
      "ems": null
    },
    {
      "latitude": 51.461838,
      "longitude": 19.843462,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664619966,
      "ems": null
    },
    {
      "latitude": 51.461243,
      "longitude": 19.845539,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664619969,
      "ems": null
    },
    {
      "latitude": 51.460693,
      "longitude": 19.847618,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664619972,
      "ems": null
    },
    {
      "latitude": 51.460007,
      "longitude": 19.849777,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664619975,
      "ems": null
    },
    {
      "latitude": 51.458611,
      "longitude": 19.853821,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664619981,
      "ems": null
    },
    {
      "latitude": 51.457123,
      "longitude": 19.857788,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664619987,
      "ems": null
    },
    {
      "latitude": 51.455772,
      "longitude": 19.861526,
      "altitude": {
        "feet": 3175,
        "meters": 968
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664619993,
      "ems": null
    },
    {
      "latitude": 51.455025,
      "longitude": 19.863815,
      "altitude": {
        "feet": 3175,
        "meters": 968
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664619996,
      "ems": null
    },
    {
      "latitude": 51.45433,
      "longitude": 19.865805,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664619999,
      "ems": null
    },
    {
      "latitude": 51.453552,
      "longitude": 19.867958,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664620002,
      "ems": null
    },
    {
      "latitude": 51.451954,
      "longitude": 19.872284,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664620008,
      "ems": null
    },
    {
      "latitude": 51.450485,
      "longitude": 19.876495,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "timestamp": 1664620014,
      "ems": null
    },
    {
      "latitude": 51.44902,
      "longitude": 19.880726,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "squawk": "7000",
      "timestamp": 1664620020,
      "ems": null
    },
    {
      "latitude": 51.447437,
      "longitude": 19.88472,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664620026,
      "ems": null
    },
    {
      "latitude": 51.445808,
      "longitude": 19.888992,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664620032,
      "ems": null
    },
    {
      "latitude": 51.444134,
      "longitude": 19.893036,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664620038,
      "ems": null
    },
    {
      "latitude": 51.443298,
      "longitude": 19.894978,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664620042,
      "ems": null
    },
    {
      "latitude": 51.442459,
      "longitude": 19.896927,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664620044,
      "ems": null
    },
    {
      "latitude": 51.441574,
      "longitude": 19.898987,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664620047,
      "ems": null
    },
    {
      "latitude": 51.439819,
      "longitude": 19.903143,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664620053,
      "ems": null
    },
    {
      "latitude": 51.438126,
      "longitude": 19.907375,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664620060,
      "ems": null
    },
    {
      "latitude": 51.436451,
      "longitude": 19.911575,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664620066,
      "ems": null
    },
    {
      "latitude": 51.434875,
      "longitude": 19.915541,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664620071,
      "ems": null
    },
    {
      "latitude": 51.432861,
      "longitude": 19.91955,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1664620077,
      "ems": null
    },
    {
      "latitude": 51.43161,
      "longitude": 19.921112,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664620081,
      "ems": null
    },
    {
      "latitude": 51.430252,
      "longitude": 19.922443,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1664620084,
      "ems": null
    },
    {
      "latitude": 51.429005,
      "longitude": 19.923172,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664620086,
      "ems": null
    },
    {
      "latitude": 51.427513,
      "longitude": 19.923706,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664620089,
      "ems": null
    },
    {
      "latitude": 51.426086,
      "longitude": 19.923855,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664620093,
      "ems": null
    },
    {
      "latitude": 51.42458,
      "longitude": 19.92363,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1664620095,
      "ems": null
    },
    {
      "latitude": 51.423092,
      "longitude": 19.923019,
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1664620099,
      "ems": null
    },
    {
      "latitude": 51.421692,
      "longitude": 19.922073,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1664620102,
      "ems": null
    },
    {
      "latitude": 51.420547,
      "longitude": 19.920885,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1664620104,
      "ems": null
    },
    {
      "latitude": 51.419449,
      "longitude": 19.919401,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1664620107,
      "ems": null
    },
    {
      "latitude": 51.41853,
      "longitude": 19.917755,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1664620111,
      "ems": null
    },
    {
      "latitude": 51.417618,
      "longitude": 19.915689,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1664620114,
      "ems": null
    },
    {
      "latitude": 51.416901,
      "longitude": 19.913483,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1664620117,
      "ems": null
    },
    {
      "latitude": 51.416473,
      "longitude": 19.911383,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664620120,
      "ems": null
    },
    {
      "latitude": 51.416248,
      "longitude": 19.908981,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1664620123,
      "ems": null
    },
    {
      "latitude": 51.41634,
      "longitude": 19.906693,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1664620126,
      "ems": null
    },
    {
      "latitude": 51.416656,
      "longitude": 19.904629,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664620129,
      "ems": null
    },
    {
      "latitude": 51.417252,
      "longitude": 19.902475,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664620131,
      "ems": null
    },
    {
      "latitude": 51.41803,
      "longitude": 19.900471,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664620135,
      "ems": null
    },
    {
      "latitude": 51.418949,
      "longitude": 19.898529,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664620138,
      "ems": null
    },
    {
      "latitude": 51.419907,
      "longitude": 19.896538,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664620141,
      "ems": null
    },
    {
      "latitude": 51.420811,
      "longitude": 19.894638,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664620144,
      "ems": null
    },
    {
      "latitude": 51.421738,
      "longitude": 19.892677,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664620147,
      "ems": null
    },
    {
      "latitude": 51.422626,
      "longitude": 19.890823,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664620150,
      "ems": null
    },
    {
      "latitude": 51.423603,
      "longitude": 19.888763,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664620153,
      "ems": null
    },
    {
      "latitude": 51.42453,
      "longitude": 19.886961,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664620156,
      "ems": null
    },
    {
      "latitude": 51.425537,
      "longitude": 19.884956,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664620159,
      "ems": null
    },
    {
      "latitude": 51.426407,
      "longitude": 19.883175,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664620162,
      "ems": null
    },
    {
      "latitude": 51.428211,
      "longitude": 19.879456,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664620168,
      "ems": null
    },
    {
      "latitude": 51.430168,
      "longitude": 19.875641,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664620174,
      "ems": null
    },
    {
      "latitude": 51.432037,
      "longitude": 19.871967,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664620180,
      "ems": null
    },
    {
      "latitude": 51.434032,
      "longitude": 19.868317,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664620186,
      "ems": null
    },
    {
      "latitude": 51.43515,
      "longitude": 19.866486,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664620189,
      "ems": null
    },
    {
      "latitude": 51.436249,
      "longitude": 19.864765,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664620192,
      "ems": null
    },
    {
      "latitude": 51.437244,
      "longitude": 19.863129,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664620195,
      "ems": null
    },
    {
      "latitude": 51.438267,
      "longitude": 19.861603,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "squawk": "7000",
      "timestamp": 1664620198,
      "ems": null
    },
    {
      "latitude": 51.43943,
      "longitude": 19.859848,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664620201,
      "ems": null
    },
    {
      "latitude": 51.440502,
      "longitude": 19.858322,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664620204,
      "ems": null
    },
    {
      "latitude": 51.441666,
      "longitude": 19.856567,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664620207,
      "ems": null
    },
    {
      "latitude": 51.442783,
      "longitude": 19.854889,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664620210,
      "ems": null
    },
    {
      "latitude": 51.443901,
      "longitude": 19.853134,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664620213,
      "ems": null
    },
    {
      "latitude": 51.445908,
      "longitude": 19.850067,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664620219,
      "ems": null
    },
    {
      "latitude": 51.448151,
      "longitude": 19.846579,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664620225,
      "ems": null
    },
    {
      "latitude": 51.450211,
      "longitude": 19.843388,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664620231,
      "ems": null
    },
    {
      "latitude": 51.452362,
      "longitude": 19.840418,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664620237,
      "ems": null
    },
    {
      "latitude": 51.454609,
      "longitude": 19.837265,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664620243,
      "ems": null
    },
    {
      "latitude": 51.455612,
      "longitude": 19.836039,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664620246,
      "ems": null
    },
    {
      "latitude": 51.456657,
      "longitude": 19.834747,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664620249,
      "ems": null
    },
    {
      "latitude": 51.457672,
      "longitude": 19.833588,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664620252,
      "ems": null
    },
    {
      "latitude": 51.458679,
      "longitude": 19.832401,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1664620255,
      "ems": null
    },
    {
      "latitude": 51.459637,
      "longitude": 19.831467,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1664620258,
      "ems": null
    },
    {
      "latitude": 51.4608,
      "longitude": 19.830246,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1664620261,
      "ems": null
    },
    {
      "latitude": 51.462708,
      "longitude": 19.82811,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664620267,
      "ems": null
    },
    {
      "latitude": 51.464584,
      "longitude": 19.826092,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1664620274,
      "ems": null
    },
    {
      "latitude": 51.466461,
      "longitude": 19.824236,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1664620279,
      "ems": null
    },
    {
      "latitude": 51.467148,
      "longitude": 19.823641,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1664620282,
      "ems": null
    },
    {
      "latitude": 51.468567,
      "longitude": 19.822454,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1664620284,
      "ems": null
    },
    {
      "latitude": 51.469875,
      "longitude": 19.821396,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "timestamp": 1664620288,
      "ems": null
    },
    {
      "latitude": 51.47076,
      "longitude": 19.820786,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664620290,
      "ems": null
    },
    {
      "latitude": 51.472046,
      "longitude": 19.819929,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "timestamp": 1664620294,
      "ems": null
    },
    {
      "latitude": 51.473042,
      "longitude": 19.81926,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1664620297,
      "ems": null
    },
    {
      "latitude": 51.474152,
      "longitude": 19.818296,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1664620300,
      "ems": null
    },
    {
      "latitude": 51.476395,
      "longitude": 19.816143,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1664620306,
      "ems": null
    },
    {
      "latitude": 51.477219,
      "longitude": 19.815252,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "timestamp": 1664620308,
      "ems": null
    },
    {
      "latitude": 51.478397,
      "longitude": 19.813919,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664620312,
      "ems": null
    },
    {
      "latitude": 51.479465,
      "longitude": 19.812546,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664620315,
      "ems": null
    },
    {
      "latitude": 51.479828,
      "longitude": 19.812136,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664620316,
      "ems": null
    },
    {
      "latitude": 51.481201,
      "longitude": 19.810577,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664620320,
      "ems": null
    },
    {
      "latitude": 51.482941,
      "longitude": 19.808424,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664620324,
      "ems": null
    },
    {
      "latitude": 51.484215,
      "longitude": 19.806976,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664620327,
      "ems": null
    },
    {
      "latitude": 51.485378,
      "longitude": 19.805603,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664620330,
      "ems": null
    },
    {
      "latitude": 51.486465,
      "longitude": 19.804193,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664620333,
      "ems": null
    },
    {
      "latitude": 51.488777,
      "longitude": 19.801178,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664620339,
      "ems": null
    },
    {
      "latitude": 51.489895,
      "longitude": 19.799576,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664620342,
      "ems": null
    },
    {
      "latitude": 51.490768,
      "longitude": 19.79818,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664620345,
      "ems": null
    },
    {
      "latitude": 51.491989,
      "longitude": 19.796066,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664620348,
      "ems": null
    },
    {
      "latitude": 51.492828,
      "longitude": 19.79454,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664620351,
      "ems": null
    },
    {
      "latitude": 51.493618,
      "longitude": 19.793091,
      "altitude": {
        "feet": 3075,
        "meters": 937
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664620353,
      "ems": null
    },
    {
      "latitude": 51.494888,
      "longitude": 19.791128,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664620357,
      "ems": null
    },
    {
      "latitude": 51.497761,
      "longitude": 19.788361,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664620364,
      "ems": null
    },
    {
      "latitude": 51.499157,
      "longitude": 19.787521,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1664620367,
      "ems": null
    },
    {
      "latitude": 51.500656,
      "longitude": 19.786823,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1664620370,
      "ems": null
    },
    {
      "latitude": 51.501984,
      "longitude": 19.786228,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1664620373,
      "ems": null
    },
    {
      "latitude": 51.503487,
      "longitude": 19.785614,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1664620376,
      "ems": null
    },
    {
      "latitude": 51.504883,
      "longitude": 19.785004,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1664620379,
      "ems": null
    },
    {
      "latitude": 51.505768,
      "longitude": 19.784622,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1664620381,
      "ems": null
    },
    {
      "latitude": 51.507614,
      "longitude": 19.78363,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1664620385,
      "ems": null
    },
    {
      "latitude": 51.50885,
      "longitude": 19.782963,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1664620388,
      "ems": null
    },
    {
      "latitude": 51.512146,
      "longitude": 19.780958,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1664620394,
      "ems": null
    },
    {
      "latitude": 51.514751,
      "longitude": 19.779129,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664620400,
      "ems": null
    },
    {
      "latitude": 51.516056,
      "longitude": 19.778214,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1664620403,
      "ems": null
    },
    {
      "latitude": 51.517315,
      "longitude": 19.777222,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1664620406,
      "ems": null
    },
    {
      "latitude": 51.51857,
      "longitude": 19.776306,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664620409,
      "ems": null
    },
    {
      "latitude": 51.519268,
      "longitude": 19.775696,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664620411,
      "ems": null
    },
    {
      "latitude": 51.520805,
      "longitude": 19.774475,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664620415,
      "ems": null
    },
    {
      "latitude": 51.522667,
      "longitude": 19.772873,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1664620420,
      "ems": null
    },
    {
      "latitude": 51.524872,
      "longitude": 19.770937,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1664620425,
      "ems": null
    },
    {
      "latitude": 51.52597,
      "longitude": 19.769897,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1664620429,
      "ems": null
    },
    {
      "latitude": 51.528301,
      "longitude": 19.767914,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1664620435,
      "ems": null
    },
    {
      "latitude": 51.530365,
      "longitude": 19.765963,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "timestamp": 1664620441,
      "ems": null
    },
    {
      "latitude": 51.532333,
      "longitude": 19.764107,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "timestamp": 1664620446,
      "ems": null
    },
    {
      "latitude": 51.533936,
      "longitude": 19.762623,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "timestamp": 1664620451,
      "ems": null
    },
    {
      "latitude": 51.536678,
      "longitude": 19.759903,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1664620459,
      "ems": null
    },
    {
      "latitude": 51.538727,
      "longitude": 19.758224,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1664620465,
      "ems": null
    },
    {
      "latitude": 51.541569,
      "longitude": 19.755936,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1664620471,
      "ems": null
    },
    {
      "latitude": 51.543915,
      "longitude": 19.753937,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1664620478,
      "ems": null
    },
    {
      "latitude": 51.546127,
      "longitude": 19.751816,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1664620484,
      "ems": null
    },
    {
      "latitude": 51.548737,
      "longitude": 19.749069,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1664620492,
      "ems": null
    },
    {
      "latitude": 51.549637,
      "longitude": 19.748148,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1664620495,
      "ems": null
    },
    {
      "latitude": 51.550644,
      "longitude": 19.747009,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1664620498,
      "ems": null
    },
    {
      "latitude": 51.553116,
      "longitude": 19.744659,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "timestamp": 1664620505,
      "ems": null
    },
    {
      "latitude": 51.555496,
      "longitude": 19.742729,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664620511,
      "ems": null
    },
    {
      "latitude": 51.556549,
      "longitude": 19.741838,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "timestamp": 1664620514,
      "ems": null
    },
    {
      "latitude": 51.557831,
      "longitude": 19.740799,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "timestamp": 1664620517,
      "ems": null
    },
    {
      "latitude": 51.559021,
      "longitude": 19.739983,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1664620520,
      "ems": null
    },
    {
      "latitude": 51.560211,
      "longitude": 19.739166,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664620523,
      "ems": null
    },
    {
      "latitude": 51.561443,
      "longitude": 19.738388,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1664620526,
      "ems": null
    },
    {
      "latitude": 51.562637,
      "longitude": 19.737606,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1664620529,
      "ems": null
    },
    {
      "latitude": 51.564102,
      "longitude": 19.73679,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1664620532,
      "ems": null
    },
    {
      "latitude": 51.565216,
      "longitude": 19.736023,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1664620535,
      "ems": null
    },
    {
      "latitude": 51.567673,
      "longitude": 19.734341,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1664620541,
      "ems": null
    },
    {
      "latitude": 51.569778,
      "longitude": 19.732708,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1664620546,
      "ems": null
    },
    {
      "latitude": 51.571289,
      "longitude": 19.731371,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1664620550,
      "ems": null
    },
    {
      "latitude": 51.572247,
      "longitude": 19.730377,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "timestamp": 1664620553,
      "ems": null
    },
    {
      "latitude": 51.573395,
      "longitude": 19.729366,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1664620556,
      "ems": null
    },
    {
      "latitude": 51.574539,
      "longitude": 19.728252,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1664620559,
      "ems": null
    },
    {
      "latitude": 51.575592,
      "longitude": 19.727289,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1664620562,
      "ems": null
    },
    {
      "latitude": 51.576553,
      "longitude": 19.726398,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1664620565,
      "ems": null
    },
    {
      "latitude": 51.578934,
      "longitude": 19.724468,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664620571,
      "ems": null
    },
    {
      "latitude": 51.581135,
      "longitude": 19.723053,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1664620577,
      "ems": null
    },
    {
      "latitude": 51.582485,
      "longitude": 19.722137,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1664620580,
      "ems": null
    },
    {
      "latitude": 51.583183,
      "longitude": 19.721603,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1664620582,
      "ems": null
    },
    {
      "latitude": 51.584488,
      "longitude": 19.720764,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1664620585,
      "ems": null
    },
    {
      "latitude": 51.585884,
      "longitude": 19.719849,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664620589,
      "ems": null
    },
    {
      "latitude": 51.587189,
      "longitude": 19.718933,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664620592,
      "ems": null
    },
    {
      "latitude": 51.590122,
      "longitude": 19.716949,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1664620601,
      "ems": null
    },
    {
      "latitude": 51.593948,
      "longitude": 19.714817,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1664620609,
      "ems": null
    },
    {
      "latitude": 51.596832,
      "longitude": 19.713036,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1664620617,
      "ems": null
    },
    {
      "latitude": 51.60054,
      "longitude": 19.710363,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1664620626,
      "ems": null
    },
    {
      "latitude": 51.602085,
      "longitude": 19.709167,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664620630,
      "ems": null
    },
    {
      "latitude": 51.603622,
      "longitude": 19.70787,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1664620634,
      "ems": null
    },
    {
      "latitude": 51.605118,
      "longitude": 19.706503,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1664620638,
      "ems": null
    },
    {
      "latitude": 51.607254,
      "longitude": 19.704742,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1664620644,
      "ems": null
    },
    {
      "latitude": 51.610153,
      "longitude": 19.702717,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664620651,
      "ems": null
    },
    {
      "latitude": 51.612671,
      "longitude": 19.700861,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1664620657,
      "ems": null
    },
    {
      "latitude": 51.614868,
      "longitude": 19.699303,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664620663,
      "ems": null
    },
    {
      "latitude": 51.615692,
      "longitude": 19.698709,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664620665,
      "ems": null
    },
    {
      "latitude": 51.618752,
      "longitude": 19.696579,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1664620673,
      "ems": null
    },
    {
      "latitude": 51.62178,
      "longitude": 19.694256,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "squawk": "7000",
      "timestamp": 1664620681,
      "ems": null
    },
    {
      "latitude": 51.624207,
      "longitude": 19.692326,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "timestamp": 1664620687,
      "ems": null
    },
    {
      "latitude": 51.626198,
      "longitude": 19.69101,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1664620692,
      "ems": null
    },
    {
      "latitude": 51.629105,
      "longitude": 19.689281,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1664620699,
      "ems": null
    },
    {
      "latitude": 51.630936,
      "longitude": 19.688316,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "squawk": "7000",
      "timestamp": 1664620704,
      "ems": null
    },
    {
      "latitude": 51.632671,
      "longitude": 19.687347,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1664620708,
      "ems": null
    },
    {
      "latitude": 51.634205,
      "longitude": 19.686356,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1664620712,
      "ems": null
    },
    {
      "latitude": 51.638165,
      "longitude": 19.68399,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1664620721,
      "ems": null
    },
    {
      "latitude": 51.640816,
      "longitude": 19.682007,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1664620728,
      "ems": null
    },
    {
      "latitude": 51.641747,
      "longitude": 19.681091,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1664620731,
      "ems": null
    },
    {
      "latitude": 51.643375,
      "longitude": 19.679337,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1664620735,
      "ems": null
    },
    {
      "latitude": 51.64426,
      "longitude": 19.678574,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1664620738,
      "ems": null
    },
    {
      "latitude": 51.646683,
      "longitude": 19.677353,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1664620744,
      "ems": null
    },
    {
      "latitude": 51.648079,
      "longitude": 19.677277,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1664620747,
      "ems": null
    },
    {
      "latitude": 51.649612,
      "longitude": 19.677404,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1664620750,
      "ems": null
    },
    {
      "latitude": 51.651199,
      "longitude": 19.677887,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1664620754,
      "ems": null
    },
    {
      "latitude": 51.652733,
      "longitude": 19.678497,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1664620758,
      "ems": null
    },
    {
      "latitude": 51.654594,
      "longitude": 19.679413,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1664620762,
      "ems": null
    },
    {
      "latitude": 51.655838,
      "longitude": 19.680151,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1664620766,
      "ems": null
    },
    {
      "latitude": 51.65604,
      "longitude": 19.680252,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1664620766,
      "ems": null
    },
    {
      "latitude": 51.657715,
      "longitude": 19.681778,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "squawk": "7000",
      "timestamp": 1664620770,
      "ems": null
    },
    {
      "latitude": 51.658413,
      "longitude": 19.682617,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "squawk": "7000",
      "timestamp": 1664620772,
      "ems": null
    },
    {
      "latitude": 51.659389,
      "longitude": 19.684143,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1664620775,
      "ems": null
    },
    {
      "latitude": 51.66037,
      "longitude": 19.686279,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1664620779,
      "ems": null
    },
    {
      "latitude": 51.660973,
      "longitude": 19.68811,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1664620782,
      "ems": null
    },
    {
      "latitude": 51.661114,
      "longitude": 19.688797,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1664620784,
      "ems": null
    },
    {
      "latitude": 51.66156,
      "longitude": 19.691212,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1664620787,
      "ems": null
    },
    {
      "latitude": 51.661903,
      "longitude": 19.694138,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1664620791,
      "ems": null
    },
    {
      "latitude": 51.662018,
      "longitude": 19.696112,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664620794,
      "ems": null
    },
    {
      "latitude": 51.662045,
      "longitude": 19.699173,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664620799,
      "ems": null
    },
    {
      "latitude": 51.661903,
      "longitude": 19.701843,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664620803,
      "ems": null
    },
    {
      "latitude": 51.661716,
      "longitude": 19.704208,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664620806,
      "ems": null
    },
    {
      "latitude": 51.661484,
      "longitude": 19.706116,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664620809,
      "ems": null
    },
    {
      "latitude": 51.661205,
      "longitude": 19.70787,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664620812,
      "ems": null
    },
    {
      "latitude": 51.660648,
      "longitude": 19.710083,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664620816,
      "ems": null
    },
    {
      "latitude": 51.660187,
      "longitude": 19.711403,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664620818,
      "ems": null
    },
    {
      "latitude": 51.659298,
      "longitude": 19.713287,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1664620822,
      "ems": null
    },
    {
      "latitude": 51.658676,
      "longitude": 19.714594,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664620824,
      "ems": null
    },
    {
      "latitude": 51.658321,
      "longitude": 19.7155,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664620827,
      "ems": null
    },
    {
      "latitude": 51.657898,
      "longitude": 19.716524,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664620828,
      "ems": null
    },
    {
      "latitude": 51.656784,
      "longitude": 19.719162,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664620833,
      "ems": null
    },
    {
      "latitude": 51.655525,
      "longitude": 19.721832,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664620838,
      "ems": null
    },
    {
      "latitude": 51.654373,
      "longitude": 19.723724,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "timestamp": 1664620842,
      "ems": null
    },
    {
      "latitude": 51.653011,
      "longitude": 19.725342,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1664620846,
      "ems": null
    },
    {
      "latitude": 51.65181,
      "longitude": 19.726545,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1664620850,
      "ems": null
    },
    {
      "latitude": 51.650208,
      "longitude": 19.728031,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1664620854,
      "ems": null
    },
    {
      "latitude": 51.649475,
      "longitude": 19.728699,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1664620856,
      "ems": null
    },
    {
      "latitude": 51.648285,
      "longitude": 19.729813,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1664620860,
      "ems": null
    },
    {
      "latitude": 51.647053,
      "longitude": 19.730911,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1664620864,
      "ems": null
    },
    {
      "latitude": 51.645493,
      "longitude": 19.732113,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664620868,
      "ems": null
    },
    {
      "latitude": 51.644394,
      "longitude": 19.732855,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1664620871,
      "ems": null
    },
    {
      "latitude": 51.643524,
      "longitude": 19.73345,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1664620873,
      "ems": null
    },
    {
      "latitude": 51.642025,
      "longitude": 19.734497,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664620877,
      "ems": null
    },
    {
      "latitude": 51.640915,
      "longitude": 19.735306,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1664620879,
      "ems": null
    },
    {
      "latitude": 51.639908,
      "longitude": 19.736048,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664620883,
      "ems": null
    },
    {
      "latitude": 51.637344,
      "longitude": 19.737755,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664620888,
      "ems": null
    },
    {
      "latitude": 51.635971,
      "longitude": 19.73872,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664620891,
      "ems": null
    },
    {
      "latitude": 51.633881,
      "longitude": 19.740219,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664620897,
      "ems": null
    },
    {
      "latitude": 51.629272,
      "longitude": 19.743347,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664620907,
      "ems": null
    },
    {
      "latitude": 51.626896,
      "longitude": 19.744873,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664620912,
      "ems": null
    },
    {
      "latitude": 51.623032,
      "longitude": 19.747696,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664620921,
      "ems": null
    },
    {
      "latitude": 51.619354,
      "longitude": 19.750597,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664620929,
      "ems": null
    },
    {
      "latitude": 51.616936,
      "longitude": 19.752579,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1664620934,
      "ems": null
    },
    {
      "latitude": 51.614887,
      "longitude": 19.754333,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1664620939,
      "ems": null
    },
    {
      "latitude": 51.613586,
      "longitude": 19.755497,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1664620942,
      "ems": null
    },
    {
      "latitude": 51.612442,
      "longitude": 19.756462,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1664620944,
      "ems": null
    },
    {
      "latitude": 51.609512,
      "longitude": 19.758837,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664620951,
      "ems": null
    },
    {
      "latitude": 51.606461,
      "longitude": 19.761047,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664620957,
      "ems": null
    },
    {
      "latitude": 51.605026,
      "longitude": 19.761806,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664620960,
      "ems": null
    },
    {
      "latitude": 51.603745,
      "longitude": 19.762474,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664620962,
      "ems": null
    },
    {
      "latitude": 51.601959,
      "longitude": 19.76329,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664620966,
      "ems": null
    },
    {
      "latitude": 51.600548,
      "longitude": 19.763947,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664620969,
      "ems": null
    },
    {
      "latitude": 51.59906,
      "longitude": 19.764633,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664620972,
      "ems": null
    },
    {
      "latitude": 51.59771,
      "longitude": 19.765244,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664620975,
      "ems": null
    },
    {
      "latitude": 51.5961,
      "longitude": 19.76626,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664620978,
      "ems": null
    },
    {
      "latitude": 51.593567,
      "longitude": 19.76799,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664620983,
      "ems": null
    },
    {
      "latitude": 51.592403,
      "longitude": 19.768677,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664620986,
      "ems": null
    },
    {
      "latitude": 51.590195,
      "longitude": 19.769379,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664620990,
      "ems": null
    },
    {
      "latitude": 51.586628,
      "longitude": 19.769211,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664620997,
      "ems": null
    },
    {
      "latitude": 51.58514,
      "longitude": 19.768829,
      "altitude": {
        "feet": 3175,
        "meters": 968
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1664621000,
      "ems": null
    },
    {
      "latitude": 51.583969,
      "longitude": 19.768339,
      "altitude": {
        "feet": 3175,
        "meters": 968
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1664621003,
      "ems": null
    },
    {
      "latitude": 51.58287,
      "longitude": 19.767818,
      "altitude": {
        "feet": 3175,
        "meters": 968
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1664621006,
      "ems": null
    },
    {
      "latitude": 51.581406,
      "longitude": 19.767076,
      "altitude": {
        "feet": 3175,
        "meters": 968
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
      "squawk": "7000",
      "timestamp": 1664621009,
      "ems": null
    },
    {
      "latitude": 51.579647,
      "longitude": 19.765854,
      "altitude": {
        "feet": 3175,
        "meters": 968
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
      "squawk": "7000",
      "timestamp": 1664621012,
      "ems": null
    },
    {
      "latitude": 51.57843,
      "longitude": 19.764702,
      "altitude": {
        "feet": 3175,
        "meters": 968
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1664621015,
      "ems": null
    },
    {
      "latitude": 51.577194,
      "longitude": 19.763439,
      "altitude": {
        "feet": 3175,
        "meters": 968
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1664621018,
      "ems": null
    },
    {
      "latitude": 51.576202,
      "longitude": 19.762268,
      "altitude": {
        "feet": 3175,
        "meters": 968
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1664621021,
      "ems": null
    },
    {
      "latitude": 51.574295,
      "longitude": 19.759369,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1664621026,
      "ems": null
    },
    {
      "latitude": 51.57336,
      "longitude": 19.757462,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1664621030,
      "ems": null
    },
    {
      "latitude": 51.572197,
      "longitude": 19.754028,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664621034,
      "ems": null
    },
    {
      "latitude": 51.571655,
      "longitude": 19.750374,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1664621038,
      "ems": null
    },
    {
      "latitude": 51.571609,
      "longitude": 19.747257,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1664621042,
      "ems": null
    },
    {
      "latitude": 51.571964,
      "longitude": 19.743118,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1664621047,
      "ems": null
    },
    {
      "latitude": 51.572479,
      "longitude": 19.740353,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664621051,
      "ems": null
    },
    {
      "latitude": 51.573395,
      "longitude": 19.736715,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664621055,
      "ems": null
    },
    {
      "latitude": 51.574768,
      "longitude": 19.733599,
      "altitude": {
        "feet": 3150,
        "meters": 960
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664621059,
      "ems": null
    },
    {
      "latitude": 51.576107,
      "longitude": 19.731674,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664621063,
      "ems": null
    },
    {
      "latitude": 51.577553,
      "longitude": 19.730148,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1664621065,
      "ems": null
    },
    {
      "latitude": 51.578949,
      "longitude": 19.728775,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664621069,
      "ems": null
    },
    {
      "latitude": 51.580254,
      "longitude": 19.727097,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664621071,
      "ems": null
    },
    {
      "latitude": 51.58136,
      "longitude": 19.72558,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664621074,
      "ems": null
    },
    {
      "latitude": 51.582813,
      "longitude": 19.723816,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664621078,
      "ems": null
    },
    {
      "latitude": 51.584061,
      "longitude": 19.722166,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664621080,
      "ems": null
    },
    {
      "latitude": 51.585373,
      "longitude": 19.720535,
      "altitude": {
        "feet": 3075,
        "meters": 937
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664621083,
      "ems": null
    },
    {
      "latitude": 51.586678,
      "longitude": 19.718857,
      "altitude": {
        "feet": 3075,
        "meters": 937
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664621086,
      "ems": null
    },
    {
      "latitude": 51.589645,
      "longitude": 19.715115,
      "altitude": {
        "feet": 3075,
        "meters": 937
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664621093,
      "ems": null
    },
    {
      "latitude": 51.590305,
      "longitude": 19.714279,
      "altitude": {
        "feet": 3075,
        "meters": 937
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664621095,
      "ems": null
    },
    {
      "latitude": 51.593845,
      "longitude": 19.709702,
      "altitude": {
        "feet": 3075,
        "meters": 937
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664621102,
      "ems": null
    },
    {
      "latitude": 51.596359,
      "longitude": 19.70665,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664621108,
      "ems": null
    },
    {
      "latitude": 51.597748,
      "longitude": 19.704945,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664621113,
      "ems": null
    },
    {
      "latitude": 51.602463,
      "longitude": 19.698933,
      "altitude": {
        "feet": 3075,
        "meters": 937
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664621122,
      "ems": null
    },
    {
      "latitude": 51.605671,
      "longitude": 19.693985,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664621130,
      "ems": null
    },
    {
      "latitude": 51.606785,
      "longitude": 19.691696,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664621134,
      "ems": null
    },
    {
      "latitude": 51.608322,
      "longitude": 19.688316,
      "altitude": {
        "feet": 3075,
        "meters": 937
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664621138,
      "ems": null
    },
    {
      "latitude": 51.609467,
      "longitude": 19.685942,
      "altitude": {
        "feet": 3075,
        "meters": 937
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664621142,
      "ems": null
    },
    {
      "latitude": 51.610977,
      "longitude": 19.682674,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664621146,
      "ems": null
    },
    {
      "latitude": 51.61235,
      "longitude": 19.679632,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664621150,
      "ems": null
    },
    {
      "latitude": 51.613449,
      "longitude": 19.67733,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664621154,
      "ems": null
    },
    {
      "latitude": 51.615864,
      "longitude": 19.672318,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664621163,
      "ems": null
    },
    {
      "latitude": 51.619171,
      "longitude": 19.66507,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664621171,
      "ems": null
    },
    {
      "latitude": 51.620132,
      "longitude": 19.662558,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664621174,
      "ems": null
    },
    {
      "latitude": 51.620636,
      "longitude": 19.661222,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664621177,
      "ems": null
    },
    {
      "latitude": 51.622284,
      "longitude": 19.656841,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664621182,
      "ems": null
    },
    {
      "latitude": 51.622742,
      "longitude": 19.655655,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664621186,
      "ems": null
    },
    {
      "latitude": 51.624756,
      "longitude": 19.650192,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664621190,
      "ems": null
    },
    {
      "latitude": 51.625778,
      "longitude": 19.647522,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664621194,
      "ems": null
    },
    {
      "latitude": 51.628189,
      "longitude": 19.641106,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664621203,
      "ems": null
    },
    {
      "latitude": 51.630436,
      "longitude": 19.635544,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664621210,
      "ems": null
    },
    {
      "latitude": 51.632111,
      "longitude": 19.631271,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664621216,
      "ems": null
    },
    {
      "latitude": 51.633785,
      "longitude": 19.626999,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664621222,
      "ems": null
    },
    {
      "latitude": 51.636154,
      "longitude": 19.62084,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664621230,
      "ems": null
    },
    {
      "latitude": 51.638397,
      "longitude": 19.615273,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664621237,
      "ems": null
    },
    {
      "latitude": 51.639954,
      "longitude": 19.611338,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664621243,
      "ems": null
    },
    {
      "latitude": 51.641792,
      "longitude": 19.606781,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664621249,
      "ems": null
    },
    {
      "latitude": 51.643387,
      "longitude": 19.602133,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664621255,
      "ems": null
    },
    {
      "latitude": 51.643795,
      "longitude": 19.600677,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664621257,
      "ems": null
    },
    {
      "latitude": 51.644539,
      "longitude": 19.597626,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664621261,
      "ems": null
    },
    {
      "latitude": 51.6451,
      "longitude": 19.595032,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664621264,
      "ems": null
    },
    {
      "latitude": 51.645237,
      "longitude": 19.594193,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664621265,
      "ems": null
    },
    {
      "latitude": 51.645798,
      "longitude": 19.590912,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664621269,
      "ems": null
    },
    {
      "latitude": 51.646309,
      "longitude": 19.587479,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664621273,
      "ems": null
    },
    {
      "latitude": 51.646729,
      "longitude": 19.584763,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664621277,
      "ems": null
    },
    {
      "latitude": 51.647232,
      "longitude": 19.581646,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664621281,
      "ems": null
    },
    {
      "latitude": 51.647892,
      "longitude": 19.577789,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664621285,
      "ems": null
    },
    {
      "latitude": 51.648499,
      "longitude": 19.574509,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664621289,
      "ems": null
    },
    {
      "latitude": 51.649796,
      "longitude": 19.566799,
      "altitude": {
        "feet": 2850,
        "meters": 869
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1664621298,
      "ems": null
    },
    {
      "latitude": 51.650894,
      "longitude": 19.558857,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1664621307,
      "ems": null
    },
    {
      "latitude": 51.651665,
      "longitude": 19.553528,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1664621313,
      "ems": null
    },
    {
      "latitude": 51.652267,
      "longitude": 19.548315,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664621318,
      "ems": null
    },
    {
      "latitude": 51.652313,
      "longitude": 19.545717,
      "altitude": {
        "feet": 2650,
        "meters": 808
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664621321,
      "ems": null
    },
    {
      "latitude": 51.652222,
      "longitude": 19.542618,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1664621325,
      "ems": null
    },
    {
      "latitude": 51.651947,
      "longitude": 19.539631,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1664621329,
      "ems": null
    },
    {
      "latitude": 51.651524,
      "longitude": 19.536209,
      "altitude": {
        "feet": 2575,
        "meters": 785
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1664621333,
      "ems": null
    },
    {
      "latitude": 51.651104,
      "longitude": 19.532852,
      "altitude": {
        "feet": 2525,
        "meters": 770
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1664621337,
      "ems": null
    },
    {
      "latitude": 51.65078,
      "longitude": 19.530334,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1664621340,
      "ems": null
    },
    {
      "latitude": 51.650482,
      "longitude": 19.528273,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1664621342,
      "ems": null
    },
    {
      "latitude": 51.650162,
      "longitude": 19.5256,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1664621345,
      "ems": null
    },
    {
      "latitude": 51.649895,
      "longitude": 19.52301,
      "altitude": {
        "feet": 2350,
        "meters": 716
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1664621348,
      "ems": null
    },
    {
      "latitude": 51.649567,
      "longitude": 19.520416,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1664621352,
      "ems": null
    },
    {
      "latitude": 51.649288,
      "longitude": 19.517899,
      "altitude": {
        "feet": 2275,
        "meters": 693
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1664621355,
      "ems": null
    },
    {
      "latitude": 51.648869,
      "longitude": 19.513397,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1664621360,
      "ems": null
    },
    {
      "latitude": 51.648312,
      "longitude": 19.508514,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1664621367,
      "ems": null
    },
    {
      "latitude": 51.647507,
      "longitude": 19.501698,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1664621377,
      "ems": null
    },
    {
      "latitude": 51.646866,
      "longitude": 19.495611,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1664621385,
      "ems": null
    },
    {
      "latitude": 51.64645,
      "longitude": 19.49173,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1664621390,
      "ems": null
    },
    {
      "latitude": 51.64603,
      "longitude": 19.487762,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1664621397,
      "ems": null
    },
    {
      "latitude": 51.645905,
      "longitude": 19.485886,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1664621400,
      "ems": null
    },
    {
      "latitude": 51.645859,
      "longitude": 19.484253,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1664621403,
      "ems": null
    },
    {
      "latitude": 51.64603,
      "longitude": 19.482269,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1664621406,
      "ems": null
    },
    {
      "latitude": 51.646179,
      "longitude": 19.481358,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664621408,
      "ems": null
    },
    {
      "latitude": 51.646866,
      "longitude": 19.478909,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664621412,
      "ems": null
    },
    {
      "latitude": 51.647507,
      "longitude": 19.47735,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664621415,
      "ems": null
    },
    {
      "latitude": 51.648266,
      "longitude": 19.475784,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664621418,
      "ems": null
    },
    {
      "latitude": 51.649197,
      "longitude": 19.474106,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664621421,
      "ems": null
    },
    {
      "latitude": 51.650024,
      "longitude": 19.472895,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664621424,
      "ems": null
    },
    {
      "latitude": 51.651199,
      "longitude": 19.471283,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664621427,
      "ems": null
    },
    {
      "latitude": 51.651756,
      "longitude": 19.470749,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1664621429,
      "ems": null
    },
    {
      "latitude": 51.654179,
      "longitude": 19.468918,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1664621434,
      "ems": null
    },
    {
      "latitude": 51.65604,
      "longitude": 19.467773,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1664621438,
      "ems": null
    },
    {
      "latitude": 51.657898,
      "longitude": 19.46666,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1664621442,
      "ems": null
    },
    {
      "latitude": 51.659317,
      "longitude": 19.465769,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1664621445,
      "ems": null
    },
    {
      "latitude": 51.660461,
      "longitude": 19.465027,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664621448,
      "ems": null
    },
    {
      "latitude": 51.662109,
      "longitude": 19.463764,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1664621451,
      "ems": null
    },
    {
      "latitude": 51.663208,
      "longitude": 19.462891,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1664621453,
      "ems": null
    },
    {
      "latitude": 51.664902,
      "longitude": 19.461613,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664621457,
      "ems": null
    },
    {
      "latitude": 51.666328,
      "longitude": 19.460449,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664621460,
      "ems": null
    },
    {
      "latitude": 51.667725,
      "longitude": 19.459305,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1664621463,
      "ems": null
    },
    {
      "latitude": 51.669159,
      "longitude": 19.45805,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1664621466,
      "ems": null
    },
    {
      "latitude": 51.669846,
      "longitude": 19.457529,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1664621467,
      "ems": null
    },
    {
      "latitude": 51.671074,
      "longitude": 19.456329,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1664621472,
      "ems": null
    },
    {
      "latitude": 51.675449,
      "longitude": 19.452896,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664621480,
      "ems": null
    },
    {
      "latitude": 51.678635,
      "longitude": 19.450552,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1664621486,
      "ems": null
    },
    {
      "latitude": 51.681877,
      "longitude": 19.447937,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1664621493,
      "ems": null
    },
    {
      "latitude": 51.684723,
      "longitude": 19.445354,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1664621499,
      "ems": null
    },
    {
      "latitude": 51.688705,
      "longitude": 19.441717,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1664621508,
      "ems": null
    },
    {
      "latitude": 51.690536,
      "longitude": 19.44001,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1664621512,
      "ems": null
    },
    {
      "latitude": 51.692303,
      "longitude": 19.438171,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1664621516,
      "ems": null
    },
    {
      "latitude": 51.69426,
      "longitude": 19.435959,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664621520,
      "ems": null
    },
    {
      "latitude": 51.695892,
      "longitude": 19.433626,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664621524,
      "ems": null
    },
    {
      "latitude": 51.697266,
      "longitude": 19.43088,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664621528,
      "ems": null
    },
    {
      "latitude": 51.698261,
      "longitude": 19.427795,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664621532,
      "ems": null
    },
    {
      "latitude": 51.698639,
      "longitude": 19.424644,
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664621536,
      "ems": null
    },
    {
      "latitude": 51.698456,
      "longitude": 19.421749,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1664621540,
      "ems": null
    },
    {
      "latitude": 51.697723,
      "longitude": 19.418928,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1664621544,
      "ems": null
    },
    {
      "latitude": 51.697144,
      "longitude": 19.417725,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1664621546,
      "ems": null
    },
    {
      "latitude": 51.695889,
      "longitude": 19.416046,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1664621550,
      "ems": null
    },
    {
      "latitude": 51.693932,
      "longitude": 19.414902,
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1664621554,
      "ems": null
    },
    {
      "latitude": 51.692303,
      "longitude": 19.414825,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664621558,
      "ems": null
    },
    {
      "latitude": 51.690441,
      "longitude": 19.41597,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664621562,
      "ems": null
    },
    {
      "latitude": 51.689137,
      "longitude": 19.417953,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1664621566,
      "ems": null
    },
    {
      "latitude": 51.688431,
      "longitude": 19.419819,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664621570,
      "ems": null
    },
    {
      "latitude": 51.687973,
      "longitude": 19.423523,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664621574,
      "ems": null
    },
    {
      "latitude": 51.688393,
      "longitude": 19.426422,
      "altitude": {
        "feet": 1925,
        "meters": 587
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664621578,
      "ems": null
    },
    {
      "latitude": 51.689255,
      "longitude": 19.428505,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1664621580,
      "ems": null
    },
    {
      "latitude": 51.689987,
      "longitude": 19.429768,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1664621583,
      "ems": null
    },
    {
      "latitude": 51.691696,
      "longitude": 19.431686,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1664621586,
      "ems": null
    },
    {
      "latitude": 51.693001,
      "longitude": 19.433136,
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1664621589,
      "ems": null
    },
    {
      "latitude": 51.693695,
      "longitude": 19.433775,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1664621591,
      "ems": null
    },
    {
      "latitude": 51.69561,
      "longitude": 19.435577,
      "altitude": {
        "feet": 1925,
        "meters": 587
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1664621595,
      "ems": null
    },
    {
      "latitude": 51.696865,
      "longitude": 19.436722,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1664621599,
      "ems": null
    },
    {
      "latitude": 51.698772,
      "longitude": 19.438324,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1664621603,
      "ems": null
    },
    {
      "latitude": 51.700405,
      "longitude": 19.439774,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1664621607,
      "ems": null
    },
    {
      "latitude": 51.701935,
      "longitude": 19.44105,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1664621611,
      "ems": null
    },
    {
      "latitude": 51.70385,
      "longitude": 19.442673,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1664621615,
      "ems": null
    },
    {
      "latitude": 51.706238,
      "longitude": 19.444836,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1664621623,
      "ems": null
    },
    {
      "latitude": 51.707153,
      "longitude": 19.445801,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1664621627,
      "ems": null
    },
    {
      "latitude": 51.70948,
      "longitude": 19.448318,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1664621631,
      "ems": null
    },
    {
      "latitude": 51.713242,
      "longitude": 19.45122,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1664621640,
      "ems": null
    },
    {
      "latitude": 51.71489,
      "longitude": 19.451368,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1664621644,
      "ems": null
    },
    {
      "latitude": 51.716309,
      "longitude": 19.450922,
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1664621648,
      "ems": null
    },
    {
      "latitude": 51.718048,
      "longitude": 19.44981,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1664621652,
      "ems": null
    },
    {
      "latitude": 51.720188,
      "longitude": 19.448242,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1664621657,
      "ems": null
    },
    {
      "latitude": 51.721848,
      "longitude": 19.447063,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664621661,
      "ems": null
    },
    {
      "latitude": 51.723358,
      "longitude": 19.446024,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1664621665,
      "ems": null
    },
    {
      "latitude": 51.725372,
      "longitude": 19.44491,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1664621669,
      "ems": null
    },
    {
      "latitude": 51.726753,
      "longitude": 19.444122,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1664621673,
      "ems": null
    },
    {
      "latitude": 51.728348,
      "longitude": 19.443129,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1664621677,
      "ems": null
    },
    {
      "latitude": 51.72945,
      "longitude": 19.441833,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664621681,
      "ems": null
    },
    {
      "latitude": 51.730568,
      "longitude": 19.437866,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1664621686,
      "ems": null
    },
    {
      "latitude": 51.730316,
      "longitude": 19.435038,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664621690,
      "ems": null
    },
    {
      "latitude": 51.729778,
      "longitude": 19.432907,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664621694,
      "ems": null
    },
    {
      "latitude": 51.729172,
      "longitude": 19.429914,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664621698,
      "ems": null
    },
    {
      "latitude": 51.728706,
      "longitude": 19.427719,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664621702,
      "ems": null
    },
    {
      "latitude": 51.727962,
      "longitude": 19.424591,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664621707,
      "ems": null
    },
    {
      "latitude": 51.727524,
      "longitude": 19.422419,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664621712,
      "ems": null
    },
    {
      "latitude": 51.726837,
      "longitude": 19.419449,
      "altitude": {
        "feet": 1175,
        "meters": 358
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664621717,
      "ems": null
    },
    {
      "latitude": 51.726192,
      "longitude": 19.417114,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1664621721,
      "ems": null
    },
    {
      "latitude": 51.725216,
      "longitude": 19.412994,
      "altitude": {
        "feet": 950,
        "meters": 290
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664621729,
      "ems": null
    },
    {
      "latitude": 51.724239,
      "longitude": 19.408646,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664621737,
      "ems": null
    },
    {
      "latitude": 51.723724,
      "longitude": 19.406458,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664621741,
      "ems": null
    },
    {
      "latitude": 51.722935,
      "longitude": 19.402847,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664621749,
      "ems": null
    },
    {
      "latitude": 51.717682,
      "longitude": 19.378918,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664621793,
      "ems": null
    },
    {
      "latitude": 51.716721,
      "longitude": 19.374092,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664621801,
      "ems": null
    },
    {
      "latitude": 51.7164,
      "longitude": 19.372089,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1664621805,
      "ems": null
    },
    {
      "latitude": 51.716183,
      "longitude": 19.369507,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1664621809,
      "ems": null
    },
    {
      "latitude": 51.715897,
      "longitude": 19.367264,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1664621813,
      "ems": null
    },
    {
      "latitude": 51.715485,
      "longitude": 19.364145,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1664621818,
      "ems": null
    },
    {
      "latitude": 51.715164,
      "longitude": 19.361919,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1664621822,
      "ems": null
    },
    {
      "latitude": 51.714523,
      "longitude": 19.357317,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1664621830,
      "ems": null
    },
    {
      "latitude": 51.713791,
      "longitude": 19.353085,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664621838,
      "ems": null
    },
    {
      "latitude": 51.713253,
      "longitude": 19.350128,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664621842,
      "ems": null
    },
    {
      "latitude": 51.712921,
      "longitude": 19.348482,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664621845,
      "ems": null
    },
    {
      "latitude": 51.712509,
      "longitude": 19.346478,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664621849,
      "ems": null
    },
    {
      "latitude": 51.712097,
      "longitude": 19.344624,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664621853,
      "ems": null
    },
    {
      "latitude": 51.711716,
      "longitude": 19.342651,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664621857,
      "ems": null
    },
    {
      "latitude": 51.710953,
      "longitude": 19.339649,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664621861,
      "ems": null
    },
    {
      "latitude": 51.709854,
      "longitude": 19.334564,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664621870,
      "ems": null
    },
    {
      "latitude": 51.708618,
      "longitude": 19.329405,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1664621878,
      "ems": null
    },
    {
      "latitude": 51.708572,
      "longitude": 19.329107,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1664621879,
      "ems": null
    },
    {
      "latitude": 51.706779,
      "longitude": 19.32251,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1664621890,
      "ems": null
    },
    {
      "latitude": 51.705338,
      "longitude": 19.316406,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664621900,
      "ems": null
    },
    {
      "latitude": 51.704033,
      "longitude": 19.310226,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664621910,
      "ems": null
    },
    {
      "latitude": 51.703384,
      "longitude": 19.307404,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1664621915,
      "ems": null
    },
    {
      "latitude": 51.702164,
      "longitude": 19.305058,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1664621920,
      "ems": null
    },
    {
      "latitude": 51.700821,
      "longitude": 19.30336,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1664621925,
      "ems": null
    },
    {
      "latitude": 51.698868,
      "longitude": 19.301605,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1664621931,
      "ems": null
    },
    {
      "latitude": 51.697144,
      "longitude": 19.30069,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664621936,
      "ems": null
    },
    {
      "latitude": 51.695236,
      "longitude": 19.300461,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664621941,
      "ems": null
    },
    {
      "latitude": 51.693329,
      "longitude": 19.3009,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664621946,
      "ems": null
    },
    {
      "latitude": 51.692444,
      "longitude": 19.301224,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664621950,
      "ems": null
    },
    {
      "latitude": 51.690399,
      "longitude": 19.30179,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664621955,
      "ems": null
    },
    {
      "latitude": 51.688671,
      "longitude": 19.302521,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664621959,
      "ems": null
    },
    {
      "latitude": 51.687424,
      "longitude": 19.303053,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664621963,
      "ems": null
    },
    {
      "latitude": 51.685959,
      "longitude": 19.303795,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664621967,
      "ems": null
    },
    {
      "latitude": 51.684341,
      "longitude": 19.305496,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1664621972,
      "ems": null
    },
    {
      "latitude": 51.683365,
      "longitude": 19.307022,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664621977,
      "ems": null
    },
    {
      "latitude": 51.682526,
      "longitude": 19.309006,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664621981,
      "ems": null
    },
    {
      "latitude": 51.681702,
      "longitude": 19.312407,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664621986,
      "ems": null
    },
    {
      "latitude": 51.681503,
      "longitude": 19.31572,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664621991,
      "ems": null
    },
    {
      "latitude": 51.681793,
      "longitude": 19.319235,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1664621996,
      "ems": null
    },
    {
      "latitude": 51.682247,
      "longitude": 19.321899,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664622000,
      "ems": null
    },
    {
      "latitude": 51.682667,
      "longitude": 19.324417,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664622004,
      "ems": null
    },
    {
      "latitude": 51.682945,
      "longitude": 19.326553,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1664622008,
      "ems": null
    },
    {
      "latitude": 51.683224,
      "longitude": 19.328842,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664622012,
      "ems": null
    },
    {
      "latitude": 51.683739,
      "longitude": 19.332123,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664622016,
      "ems": null
    },
    {
      "latitude": 51.684082,
      "longitude": 19.334528,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664622020,
      "ems": null
    },
    {
      "latitude": 51.684902,
      "longitude": 19.339371,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664622028,
      "ems": null
    },
    {
      "latitude": 51.685505,
      "longitude": 19.343948,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1664622037,
      "ems": null
    },
    {
      "latitude": 51.686508,
      "longitude": 19.350487,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664622045,
      "ems": null
    },
    {
      "latitude": 51.687424,
      "longitude": 19.356203,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664622053,
      "ems": null
    },
    {
      "latitude": 51.688568,
      "longitude": 19.362141,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "timestamp": 1664622062,
      "ems": null
    },
    {
      "latitude": 51.689182,
      "longitude": 19.365082,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664622066,
      "ems": null
    },
    {
      "latitude": 51.689758,
      "longitude": 19.367634,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664622070,
      "ems": null
    },
    {
      "latitude": 51.690533,
      "longitude": 19.370804,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664622075,
      "ems": null
    },
    {
      "latitude": 51.691269,
      "longitude": 19.373943,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1664622079,
      "ems": null
    },
    {
      "latitude": 51.691746,
      "longitude": 19.375992,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1664622083,
      "ems": null
    },
    {
      "latitude": 51.692444,
      "longitude": 19.379044,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664622087,
      "ems": null
    },
    {
      "latitude": 51.693787,
      "longitude": 19.385302,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664622096,
      "ems": null
    },
    {
      "latitude": 51.694839,
      "longitude": 19.391462,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664622104,
      "ems": null
    },
    {
      "latitude": 51.695206,
      "longitude": 19.394358,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1664622108,
      "ems": null
    },
    {
      "latitude": 51.69561,
      "longitude": 19.397202,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664622112,
      "ems": null
    },
    {
      "latitude": 51.697128,
      "longitude": 19.404528,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "timestamp": 1664622122,
      "ems": null
    },
    {
      "latitude": 51.698502,
      "longitude": 19.411209,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664622131,
      "ems": null
    },
    {
      "latitude": 51.6991,
      "longitude": 19.414063,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664622135,
      "ems": null
    },
    {
      "latitude": 51.699936,
      "longitude": 19.417953,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664622140,
      "ems": null
    },
    {
      "latitude": 51.700928,
      "longitude": 19.422789,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "timestamp": 1664622147,
      "ems": null
    },
    {
      "latitude": 51.702072,
      "longitude": 19.429321,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664622156,
      "ems": null
    },
    {
      "latitude": 51.703217,
      "longitude": 19.435408,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664622164,
      "ems": null
    },
    {
      "latitude": 51.704082,
      "longitude": 19.440842,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664622172,
      "ems": null
    },
    {
      "latitude": 51.705093,
      "longitude": 19.446915,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664622180,
      "ems": null
    },
    {
      "latitude": 51.706642,
      "longitude": 19.452591,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1664622188,
      "ems": null
    },
    {
      "latitude": 51.707897,
      "longitude": 19.455032,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1664622192,
      "ems": null
    },
    {
      "latitude": 51.709259,
      "longitude": 19.456787,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1664622196,
      "ems": null
    },
    {
      "latitude": 51.710541,
      "longitude": 19.457901,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1664622199,
      "ems": null
    },
    {
      "latitude": 51.712097,
      "longitude": 19.458569,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1664622202,
      "ems": null
    },
    {
      "latitude": 51.71283,
      "longitude": 19.458717,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1664622203,
      "ems": null
    },
    {
      "latitude": 51.715206,
      "longitude": 19.458542,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1664622208,
      "ems": null
    },
    {
      "latitude": 51.717022,
      "longitude": 19.457855,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1664622212,
      "ems": null
    },
    {
      "latitude": 51.719467,
      "longitude": 19.456341,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664622216,
      "ems": null
    },
    {
      "latitude": 51.720932,
      "longitude": 19.455303,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664622220,
      "ems": null
    },
    {
      "latitude": 51.72261,
      "longitude": 19.454117,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664622224,
      "ems": null
    },
    {
      "latitude": 51.724705,
      "longitude": 19.452591,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1664622228,
      "ems": null
    },
    {
      "latitude": 51.726471,
      "longitude": 19.451065,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1664622232,
      "ems": null
    },
    {
      "latitude": 51.728287,
      "longitude": 19.449005,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664622236,
      "ems": null
    },
    {
      "latitude": 51.729267,
      "longitude": 19.447403,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664622240,
      "ems": null
    },
    {
      "latitude": 51.730545,
      "longitude": 19.444464,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664622244,
      "ems": null
    },
    {
      "latitude": 51.731129,
      "longitude": 19.441147,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1664622248,
      "ems": null
    },
    {
      "latitude": 51.731003,
      "longitude": 19.438601,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1664622252,
      "ems": null
    },
    {
      "latitude": 51.730896,
      "longitude": 19.437714,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664622256,
      "ems": null
    },
    {
      "latitude": 51.730011,
      "longitude": 19.43367,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664622260,
      "ems": null
    },
    {
      "latitude": 51.729538,
      "longitude": 19.431696,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664622264,
      "ems": null
    },
    {
      "latitude": 51.728985,
      "longitude": 19.429016,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664622268,
      "ems": null
    },
    {
      "latitude": 51.728394,
      "longitude": 19.426575,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664622272,
      "ems": null
    },
    {
      "latitude": 51.727844,
      "longitude": 19.424051,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664622276,
      "ems": null
    },
    {
      "latitude": 51.727249,
      "longitude": 19.421749,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664622280,
      "ems": null
    },
    {
      "latitude": 51.725822,
      "longitude": 19.415588,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664622289,
      "ems": null
    },
    {
      "latitude": 51.724594,
      "longitude": 19.410467,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664622297,
      "ems": null
    },
    {
      "latitude": 51.723404,
      "longitude": 19.405195,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664622306,
      "ems": null
    },
    {
      "latitude": 51.722282,
      "longitude": 19.399643,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664622314,
      "ems": null
    },
    {
      "latitude": 51.721165,
      "longitude": 19.394073,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664622323,
      "ems": null
    },
    {
      "latitude": 51.72028,
      "longitude": 19.389954,
      "altitude": {
        "feet": 725,
        "meters": 221
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664622330,
      "ems": null
    },
    {
      "latitude": 51.719376,
      "longitude": 19.384857,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664622340,
      "ems": null
    },
    {
      "latitude": 51.718826,
      "longitude": 19.381516,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664622346,
      "ems": null
    },
    {
      "latitude": 51.717636,
      "longitude": 19.375652,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664622356,
      "ems": null
    },
    {
      "latitude": 51.717316,
      "longitude": 19.37439,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664622361,
      "ems": null
    },
    {
      "latitude": 51.716309,
      "longitude": 19.370234,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664622366,
      "ems": null
    },
    {
      "latitude": 51.715347,
      "longitude": 19.3647,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664622377,
      "ems": null
    },
    {
      "latitude": 51.714882,
      "longitude": 19.361649,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664622382,
      "ems": null
    },
    {
      "latitude": 51.714478,
      "longitude": 19.359543,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664622386,
      "ems": null
    },
    {
      "latitude": 51.713531,
      "longitude": 19.355698,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1664622394,
      "ems": null
    },
    {
      "latitude": 51.712738,
      "longitude": 19.353233,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1664622399,
      "ems": null
    },
    {
      "latitude": 51.71204,
      "longitude": 19.35112,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1664622403,
      "ems": null
    },
    {
      "latitude": 51.711456,
      "longitude": 19.349298,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1664622407,
      "ems": null
    },
    {
      "latitude": 51.710724,
      "longitude": 19.346478,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664622412,
      "ems": null
    },
    {
      "latitude": 51.7099,
      "longitude": 19.342117,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664622421,
      "ems": null
    },
    {
      "latitude": 51.70948,
      "longitude": 19.339905,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664622425,
      "ems": null
    },
    {
      "latitude": 51.708847,
      "longitude": 19.336977,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664622430,
      "ems": null
    },
    {
      "latitude": 51.708317,
      "longitude": 19.334106,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664622435,
      "ems": null
    },
    {
      "latitude": 51.707245,
      "longitude": 19.328537,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664622444,
      "ems": null
    },
    {
      "latitude": 51.706642,
      "longitude": 19.325485,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664622449,
      "ems": null
    },
    {
      "latitude": 51.705246,
      "longitude": 19.31839,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664622460,
      "ems": null
    },
    {
      "latitude": 51.704681,
      "longitude": 19.315302,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664622465,
      "ems": null
    },
    {
      "latitude": 51.703308,
      "longitude": 19.308397,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664622476,
      "ems": null
    },
    {
      "latitude": 51.702667,
      "longitude": 19.305353,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664622481,
      "ems": null
    },
    {
      "latitude": 51.701195,
      "longitude": 19.299164,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664622492,
      "ems": null
    },
    {
      "latitude": 51.700012,
      "longitude": 19.296446,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1664622497,
      "ems": null
    },
    {
      "latitude": 51.698639,
      "longitude": 19.294367,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1664622502,
      "ems": null
    },
    {
      "latitude": 51.696808,
      "longitude": 19.292585,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1664622508,
      "ems": null
    },
    {
      "latitude": 51.695068,
      "longitude": 19.29162,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1664622513,
      "ems": null
    },
    {
      "latitude": 51.693329,
      "longitude": 19.290924,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1664622518,
      "ems": null
    },
    {
      "latitude": 51.69207,
      "longitude": 19.290619,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664622522,
      "ems": null
    },
    {
      "latitude": 51.690907,
      "longitude": 19.290619,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1664622526,
      "ems": null
    },
    {
      "latitude": 51.68898,
      "longitude": 19.291473,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664622531,
      "ems": null
    },
    {
      "latitude": 51.687508,
      "longitude": 19.292603,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1664622535,
      "ems": null
    },
    {
      "latitude": 51.686371,
      "longitude": 19.293922,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1664622539,
      "ems": null
    },
    {
      "latitude": 51.684994,
      "longitude": 19.296112,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1664622544,
      "ems": null
    },
    {
      "latitude": 51.683784,
      "longitude": 19.298935,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664622549,
      "ems": null
    },
    {
      "latitude": 51.683224,
      "longitude": 19.30069,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664622553,
      "ems": null
    },
    {
      "latitude": 51.682667,
      "longitude": 19.303055,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664622557,
      "ems": null
    },
    {
      "latitude": 51.682388,
      "longitude": 19.305502,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664622561,
      "ems": null
    },
    {
      "latitude": 51.682251,
      "longitude": 19.308323,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664622565,
      "ems": null
    },
    {
      "latitude": 51.682388,
      "longitude": 19.311066,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1664622569,
      "ems": null
    },
    {
      "latitude": 51.682709,
      "longitude": 19.313816,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664622573,
      "ems": null
    },
    {
      "latitude": 51.68335,
      "longitude": 19.31686,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664622577,
      "ems": null
    },
    {
      "latitude": 51.683899,
      "longitude": 19.31916,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1664622581,
      "ems": null
    },
    {
      "latitude": 51.684624,
      "longitude": 19.321976,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664622585,
      "ems": null
    },
    {
      "latitude": 51.685413,
      "longitude": 19.325027,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1664622589,
      "ems": null
    },
    {
      "latitude": 51.686005,
      "longitude": 19.327549,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664622593,
      "ems": null
    },
    {
      "latitude": 51.686718,
      "longitude": 19.33075,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664622597,
      "ems": null
    },
    {
      "latitude": 51.687195,
      "longitude": 19.332968,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664622601,
      "ems": null
    },
    {
      "latitude": 51.688156,
      "longitude": 19.337051,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664622606,
      "ems": null
    },
    {
      "latitude": 51.689804,
      "longitude": 19.343658,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1664622616,
      "ems": null
    },
    {
      "latitude": 51.691372,
      "longitude": 19.349136,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1664622624,
      "ems": null
    },
    {
      "latitude": 51.692165,
      "longitude": 19.351883,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1664622628,
      "ems": null
    },
    {
      "latitude": 51.693008,
      "longitude": 19.354645,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1664622632,
      "ems": null
    },
    {
      "latitude": 51.694725,
      "longitude": 19.360275,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1664622640,
      "ems": null
    },
    {
      "latitude": 51.69635,
      "longitude": 19.366299,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664622648,
      "ems": null
    },
    {
      "latitude": 51.697052,
      "longitude": 19.369278,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664622652,
      "ems": null
    },
    {
      "latitude": 51.697659,
      "longitude": 19.371948,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "timestamp": 1664622656,
      "ems": null
    },
    {
      "latitude": 51.698135,
      "longitude": 19.375504,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1664622660,
      "ems": null
    },
    {
      "latitude": 51.698307,
      "longitude": 19.377594,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1664622664,
      "ems": null
    },
    {
      "latitude": 51.698589,
      "longitude": 19.381256,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664622668,
      "ems": null
    },
    {
      "latitude": 51.698681,
      "longitude": 19.384842,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664622672,
      "ems": null
    },
    {
      "latitude": 51.698635,
      "longitude": 19.38797,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664622677,
      "ems": null
    },
    {
      "latitude": 51.698685,
      "longitude": 19.390944,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664622681,
      "ems": null
    },
    {
      "latitude": 51.699097,
      "longitude": 19.3951,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1664622686,
      "ems": null
    },
    {
      "latitude": 51.699463,
      "longitude": 19.397179,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664622690,
      "ems": null
    },
    {
      "latitude": 51.700241,
      "longitude": 19.400816,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664622694,
      "ems": null
    },
    {
      "latitude": 51.700836,
      "longitude": 19.404009,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664622698,
      "ems": null
    },
    {
      "latitude": 51.701431,
      "longitude": 19.407051,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664622702,
      "ems": null
    },
    {
      "latitude": 51.702034,
      "longitude": 19.410248,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664622706,
      "ems": null
    },
    {
      "latitude": 51.70253,
      "longitude": 19.412842,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "timestamp": 1664622710,
      "ems": null
    },
    {
      "latitude": 51.703617,
      "longitude": 19.419479,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664622719,
      "ems": null
    },
    {
      "latitude": 51.703995,
      "longitude": 19.422419,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1664622723,
      "ems": null
    },
    {
      "latitude": 51.704315,
      "longitude": 19.425312,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1664622727,
      "ems": null
    },
    {
      "latitude": 51.704681,
      "longitude": 19.428133,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1664622731,
      "ems": null
    },
    {
      "latitude": 51.704872,
      "longitude": 19.429703,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1664622735,
      "ems": null
    },
    {
      "latitude": 51.705429,
      "longitude": 19.433975,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1664622739,
      "ems": null
    },
    {
      "latitude": 51.706238,
      "longitude": 19.43964,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664622747,
      "ems": null
    },
    {
      "latitude": 51.707245,
      "longitude": 19.44595,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664622755,
      "ems": null
    },
    {
      "latitude": 51.708115,
      "longitude": 19.448547,
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1664622759,
      "ems": null
    },
    {
      "latitude": 51.709435,
      "longitude": 19.450836,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1664622763,
      "ems": null
    },
    {
      "latitude": 51.71125,
      "longitude": 19.452667,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1664622767,
      "ems": null
    },
    {
      "latitude": 51.713436,
      "longitude": 19.453583,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664622771,
      "ems": null
    },
    {
      "latitude": 51.71521,
      "longitude": 19.453522,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1664622775,
      "ems": null
    },
    {
      "latitude": 51.717773,
      "longitude": 19.452259,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1664622779,
      "ems": null
    },
    {
      "latitude": 51.719513,
      "longitude": 19.450996,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1664622783,
      "ems": null
    },
    {
      "latitude": 51.721344,
      "longitude": 19.449661,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1664622787,
      "ems": null
    },
    {
      "latitude": 51.721909,
      "longitude": 19.449234,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664622791,
      "ems": null
    },
    {
      "latitude": 51.725189,
      "longitude": 19.446915,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1664622796,
      "ems": null
    },
    {
      "latitude": 51.727589,
      "longitude": 19.444656,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664622801,
      "ems": null
    },
    {
      "latitude": 51.728989,
      "longitude": 19.442312,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664622806,
      "ems": null
    },
    {
      "latitude": 51.730179,
      "longitude": 19.438154,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664622812,
      "ems": null
    },
    {
      "latitude": 51.730225,
      "longitude": 19.43474,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1664622817,
      "ems": null
    },
    {
      "latitude": 51.729824,
      "longitude": 19.432068,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664622821,
      "ems": null
    },
    {
      "latitude": 51.729126,
      "longitude": 19.429321,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664622825,
      "ems": null
    },
    {
      "latitude": 51.728706,
      "longitude": 19.427795,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1664622829,
      "ems": null
    },
    {
      "latitude": 51.727634,
      "longitude": 19.424286,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1664622834,
      "ems": null
    },
    {
      "latitude": 51.726791,
      "longitude": 19.42071,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664622839,
      "ems": null
    },
    {
      "latitude": 51.726242,
      "longitude": 19.417742,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1664622844,
      "ems": null
    },
    {
      "latitude": 51.725029,
      "longitude": 19.412079,
      "altitude": {
        "feet": 925,
        "meters": 282
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1664622854,
      "ems": null
    },
    {
      "latitude": 51.723724,
      "longitude": 19.406607,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664622863,
      "ems": null
    },
    {
      "latitude": 51.723026,
      "longitude": 19.403381,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664622868,
      "ems": null
    },
    {
      "latitude": 51.722328,
      "longitude": 19.400024,
      "altitude": {
        "feet": 675,
        "meters": 206
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664622874,
      "ems": null
    },
    {
      "latitude": 51.717533,
      "longitude": 19.37706,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664622917,
      "ems": null
    },
    {
      "latitude": 51.7164,
      "longitude": 19.371271,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664622927,
      "ems": null
    },
    {
      "latitude": 51.71521,
      "longitude": 19.365631,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664622936,
      "ems": null
    },
    {
      "latitude": 51.714321,
      "longitude": 19.361954,
      "altitude": {
        "feet": 1225,
        "meters": 373
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664622942,
      "ems": null
    },
    {
      "latitude": 51.712784,
      "longitude": 19.355831,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1664622952,
      "ems": null
    },
    {
      "latitude": 51.712326,
      "longitude": 19.354717,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1664622956,
      "ems": null
    },
    {
      "latitude": 51.709991,
      "longitude": 19.351578,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1664622961,
      "ems": null
    },
    {
      "latitude": 51.708252,
      "longitude": 19.350264,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1664622966,
      "ems": null
    },
    {
      "latitude": 51.706741,
      "longitude": 19.349745,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1664622970,
      "ems": null
    },
    {
      "latitude": 51.70557,
      "longitude": 19.349747,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1664622974,
      "ems": null
    },
    {
      "latitude": 51.703354,
      "longitude": 19.350117,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664622979,
      "ems": null
    },
    {
      "latitude": 51.701195,
      "longitude": 19.350739,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664622983,
      "ems": null
    },
    {
      "latitude": 51.699509,
      "longitude": 19.351452,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664622987,
      "ems": null
    },
    {
      "latitude": 51.697937,
      "longitude": 19.352188,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664622991,
      "ems": null
    },
    {
      "latitude": 51.696213,
      "longitude": 19.35301,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664622995,
      "ems": null
    },
    {
      "latitude": 51.694885,
      "longitude": 19.353975,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1664622999,
      "ems": null
    },
    {
      "latitude": 51.6931,
      "longitude": 19.356277,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1664623004,
      "ems": null
    },
    {
      "latitude": 51.692139,
      "longitude": 19.358801,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664623008,
      "ems": null
    },
    {
      "latitude": 51.691746,
      "longitude": 19.361725,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664623012,
      "ems": null
    },
    {
      "latitude": 51.691864,
      "longitude": 19.365334,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1664623016,
      "ems": null
    },
    {
      "latitude": 51.69223,
      "longitude": 19.36808,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664623020,
      "ems": null
    },
    {
      "latitude": 51.693001,
      "longitude": 19.372253,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664623024,
      "ems": null
    },
    {
      "latitude": 51.693512,
      "longitude": 19.374695,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664623028,
      "ems": null
    },
    {
      "latitude": 51.693878,
      "longitude": 19.376245,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664623032,
      "ems": null
    },
    {
      "latitude": 51.694977,
      "longitude": 19.381071,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664623036,
      "ems": null
    },
    {
      "latitude": 51.695843,
      "longitude": 19.385071,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664623040,
      "ems": null
    },
    {
      "latitude": 51.696442,
      "longitude": 19.387751,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664623044,
      "ems": null
    },
    {
      "latitude": 51.697189,
      "longitude": 19.391022,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664623048,
      "ems": null
    },
    {
      "latitude": 51.698402,
      "longitude": 19.396667,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "timestamp": 1664623056,
      "ems": null
    },
    {
      "latitude": 51.699936,
      "longitude": 19.403839,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664623064,
      "ems": null
    },
    {
      "latitude": 51.701149,
      "longitude": 19.40979,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664623072,
      "ems": null
    },
    {
      "latitude": 51.702301,
      "longitude": 19.415737,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664623080,
      "ems": null
    },
    {
      "latitude": 51.703354,
      "longitude": 19.421453,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664623089,
      "ems": null
    },
    {
      "latitude": 51.704407,
      "longitude": 19.427837,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664623099,
      "ems": null
    },
    {
      "latitude": 51.705196,
      "longitude": 19.432526,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664623107,
      "ems": null
    },
    {
      "latitude": 51.706375,
      "longitude": 19.438229,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1664623116,
      "ems": null
    },
    {
      "latitude": 51.707245,
      "longitude": 19.440308,
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1664623120,
      "ems": null
    },
    {
      "latitude": 51.708435,
      "longitude": 19.442461,
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1664623124,
      "ems": null
    },
    {
      "latitude": 51.7099,
      "longitude": 19.444046,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1664623128,
      "ems": null
    },
    {
      "latitude": 51.711391,
      "longitude": 19.444962,
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1664623132,
      "ems": null
    },
    {
      "latitude": 51.713425,
      "longitude": 19.445282,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1664623136,
      "ems": null
    },
    {
      "latitude": 51.715027,
      "longitude": 19.444984,
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1664623140,
      "ems": null
    },
    {
      "latitude": 51.716629,
      "longitude": 19.444613,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1664623144,
      "ems": null
    },
    {
      "latitude": 51.719025,
      "longitude": 19.44397,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1664623149,
      "ems": null
    },
    {
      "latitude": 51.720795,
      "longitude": 19.443426,
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1664623153,
      "ems": null
    },
    {
      "latitude": 51.722488,
      "longitude": 19.442757,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1664623157,
      "ems": null
    },
    {
      "latitude": 51.724518,
      "longitude": 19.441986,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1664623161,
      "ems": null
    },
    {
      "latitude": 51.726151,
      "longitude": 19.441273,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1664623165,
      "ems": null
    },
    {
      "latitude": 51.727524,
      "longitude": 19.440308,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1664623169,
      "ems": null
    },
    {
      "latitude": 51.729034,
      "longitude": 19.438749,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664623173,
      "ems": null
    },
    {
      "latitude": 51.730103,
      "longitude": 19.436569,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664623177,
      "ems": null
    },
    {
      "latitude": 51.730522,
      "longitude": 19.434052,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664623181,
      "ems": null
    },
    {
      "latitude": 51.730087,
      "longitude": 19.430731,
      "altitude": {
        "feet": 1375,
        "meters": 419
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664623186,
      "ems": null
    },
    {
      "latitude": 51.729446,
      "longitude": 19.428875,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1664623190,
      "ems": null
    },
    {
      "latitude": 51.728577,
      "longitude": 19.426426,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1664623194,
      "ems": null
    },
    {
      "latitude": 51.727962,
      "longitude": 19.424438,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1664623198,
      "ems": null
    },
    {
      "latitude": 51.727203,
      "longitude": 19.421379,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664623203,
      "ems": null
    },
    {
      "latitude": 51.726566,
      "longitude": 19.418411,
      "altitude": {
        "feet": 1075,
        "meters": 328
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664623208,
      "ems": null
    },
    {
      "latitude": 51.726006,
      "longitude": 19.416046,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664623213,
      "ems": null
    },
    {
      "latitude": 51.725372,
      "longitude": 19.413733,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1664623217,
      "ems": null
    },
    {
      "latitude": 51.724777,
      "longitude": 19.411358,
      "altitude": {
        "feet": 875,
        "meters": 267
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664623221,
      "ems": null
    },
    {
      "latitude": 51.724331,
      "longitude": 19.409027,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664623226,
      "ems": null
    },
    {
      "latitude": 51.72377,
      "longitude": 19.406681,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664623231,
      "ems": null
    },
    {
      "latitude": 51.722763,
      "longitude": 19.402153,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664623241,
      "ems": null
    },
    {
      "latitude": 51.719742,
      "longitude": 19.387974,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664623270,
      "ems": null
    },
    {
      "latitude": 51.719101,
      "longitude": 19.384857,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664623275,
      "ems": null
    },
    {
      "latitude": 51.717583,
      "longitude": 19.378357,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664623286,
      "ems": null
    },
    {
      "latitude": 51.716278,
      "longitude": 19.37355,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1664623295,
      "ems": null
    },
    {
      "latitude": 51.715069,
      "longitude": 19.368362,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664623304,
      "ems": null
    },
    {
      "latitude": 51.714554,
      "longitude": 19.365692,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664623310,
      "ems": null
    },
    {
      "latitude": 51.713882,
      "longitude": 19.361696,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664623316,
      "ems": null
    },
    {
      "latitude": 51.71347,
      "longitude": 19.359247,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1664623320,
      "ems": null
    },
    {
      "latitude": 51.713158,
      "longitude": 19.3573,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1664623324,
      "ems": null
    },
    {
      "latitude": 51.712788,
      "longitude": 19.355164,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1664623328,
      "ems": null
    },
    {
      "latitude": 51.711807,
      "longitude": 19.349213,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664623338,
      "ems": null
    },
    {
      "latitude": 51.71069,
      "longitude": 19.343338,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1664623349,
      "ems": null
    },
    {
      "latitude": 51.709713,
      "longitude": 19.337387,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664623359,
      "ems": null
    },
    {
      "latitude": 51.708549,
      "longitude": 19.331436,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664623369,
      "ems": null
    },
    {
      "latitude": 51.707886,
      "longitude": 19.328291,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664623374,
      "ems": null
    },
    {
      "latitude": 51.707199,
      "longitude": 19.325409,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664623379,
      "ems": null
    },
    {
      "latitude": 51.706688,
      "longitude": 19.322968,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664623383,
      "ems": null
    },
    {
      "latitude": 51.705105,
      "longitude": 19.316101,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664623394,
      "ems": null
    },
    {
      "latitude": 51.703617,
      "longitude": 19.309998,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1664623404,
      "ems": null
    },
    {
      "latitude": 51.702824,
      "longitude": 19.307632,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1664623408,
      "ems": null
    },
    {
      "latitude": 51.701523,
      "longitude": 19.304537,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1664623415,
      "ems": null
    },
    {
      "latitude": 51.700264,
      "longitude": 19.302444,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1664623420,
      "ems": null
    },
    {
      "latitude": 51.698494,
      "longitude": 19.300232,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1664623425,
      "ems": null
    },
    {
      "latitude": 51.696945,
      "longitude": 19.298969,
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1664623430,
      "ems": null
    },
    {
      "latitude": 51.695572,
      "longitude": 19.298376,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664623434,
      "ems": null
    },
    {
      "latitude": 51.694061,
      "longitude": 19.298079,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1664623438,
      "ems": null
    },
    {
      "latitude": 51.692581,
      "longitude": 19.298248,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664623442,
      "ems": null
    },
    {
      "latitude": 51.691406,
      "longitude": 19.298748,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664623446,
      "ems": null
    },
    {
      "latitude": 51.690125,
      "longitude": 19.299786,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1664623450,
      "ems": null
    },
    {
      "latitude": 51.688797,
      "longitude": 19.301123,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1664623454,
      "ems": null
    },
    {
      "latitude": 51.687508,
      "longitude": 19.302444,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1664623458,
      "ems": null
    },
    {
      "latitude": 51.686554,
      "longitude": 19.303425,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1664623462,
      "ems": null
    },
    {
      "latitude": 51.685318,
      "longitude": 19.304686,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1664623466,
      "ems": null
    },
    {
      "latitude": 51.684311,
      "longitude": 19.305799,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1664623470,
      "ems": null
    },
    {
      "latitude": 51.682983,
      "longitude": 19.307507,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1664623474,
      "ems": null
    },
    {
      "latitude": 51.682014,
      "longitude": 19.308853,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664623478,
      "ems": null
    },
    {
      "latitude": 51.680943,
      "longitude": 19.310913,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1664623482,
      "ems": null
    },
    {
      "latitude": 51.680199,
      "longitude": 19.313202,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664623486,
      "ems": null
    },
    {
      "latitude": 51.679829,
      "longitude": 19.315796,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664623490,
      "ems": null
    },
    {
      "latitude": 51.679733,
      "longitude": 19.318237,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664623494,
      "ems": null
    },
    {
      "latitude": 51.679966,
      "longitude": 19.321747,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1664623499,
      "ems": null
    },
    {
      "latitude": 51.680573,
      "longitude": 19.325104,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664623504,
      "ems": null
    },
    {
      "latitude": 51.681198,
      "longitude": 19.327847,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664623508,
      "ems": null
    },
    {
      "latitude": 51.68169,
      "longitude": 19.330673,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664623512,
      "ems": null
    },
    {
      "latitude": 51.682251,
      "longitude": 19.33423,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664623517,
      "ems": null
    },
    {
      "latitude": 51.682846,
      "longitude": 19.337719,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664623522,
      "ems": null
    },
    {
      "latitude": 51.683319,
      "longitude": 19.340363,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664623526,
      "ems": null
    },
    {
      "latitude": 51.68425,
      "longitude": 19.345932,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664623534,
      "ems": null
    },
    {
      "latitude": 51.685272,
      "longitude": 19.351749,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664623542,
      "ems": null
    },
    {
      "latitude": 51.68639,
      "longitude": 19.357986,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664623550,
      "ems": null
    },
    {
      "latitude": 51.687195,
      "longitude": 19.361994,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664623559,
      "ems": null
    },
    {
      "latitude": 51.688858,
      "longitude": 19.369278,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1664623567,
      "ems": null
    },
    {
      "latitude": 51.689667,
      "longitude": 19.372089,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1664623571,
      "ems": null
    },
    {
      "latitude": 51.690582,
      "longitude": 19.374908,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1664623575,
      "ems": null
    },
    {
      "latitude": 51.691372,
      "longitude": 19.377365,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1664623579,
      "ems": null
    },
    {
      "latitude": 51.692551,
      "longitude": 19.381071,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1664623584,
      "ems": null
    },
    {
      "latitude": 51.694611,
      "longitude": 19.388197,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1664623594,
      "ems": null
    },
    {
      "latitude": 51.695206,
      "longitude": 19.390795,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664623598,
      "ems": null
    },
    {
      "latitude": 51.695709,
      "longitude": 19.39369,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664623602,
      "ems": null
    },
    {
      "latitude": 51.696167,
      "longitude": 19.396591,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664623606,
      "ems": null
    },
    {
      "latitude": 51.696625,
      "longitude": 19.399481,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664623610,
      "ems": null
    },
    {
      "latitude": 51.697083,
      "longitude": 19.402746,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664623615,
      "ems": null
    },
    {
      "latitude": 51.698364,
      "longitude": 19.410912,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664623626,
      "ems": null
    },
    {
      "latitude": 51.699657,
      "longitude": 19.41864,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664623636,
      "ems": null
    },
    {
      "latitude": 51.700928,
      "longitude": 19.425535,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664623645,
      "ems": null
    },
    {
      "latitude": 51.702026,
      "longitude": 19.430954,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "timestamp": 1664623653,
      "ems": null
    },
    {
      "latitude": 51.703445,
      "longitude": 19.437933,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664623662,
      "ems": null
    },
    {
      "latitude": 51.704872,
      "longitude": 19.443893,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1664623670,
      "ems": null
    },
    {
      "latitude": 51.7061,
      "longitude": 19.446543,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1664623674,
      "ems": null
    },
    {
      "latitude": 51.707886,
      "longitude": 19.448994,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1664623679,
      "ems": null
    },
    {
      "latitude": 51.710403,
      "longitude": 19.450775,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1664623684,
      "ems": null
    },
    {
      "latitude": 51.713242,
      "longitude": 19.451666,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1664623690,
      "ems": null
    },
    {
      "latitude": 51.716324,
      "longitude": 19.451675,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1664623695,
      "ems": null
    },
    {
      "latitude": 51.719162,
      "longitude": 19.450989,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1664623701,
      "ems": null
    },
    {
      "latitude": 51.72126,
      "longitude": 19.449921,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1664623705,
      "ems": null
    },
    {
      "latitude": 51.722889,
      "longitude": 19.448776,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664623709,
      "ems": null
    },
    {
      "latitude": 51.724751,
      "longitude": 19.446945,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1664623713,
      "ems": null
    },
    {
      "latitude": 51.726334,
      "longitude": 19.444984,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664623717,
      "ems": null
    },
    {
      "latitude": 51.727936,
      "longitude": 19.442312,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664623721,
      "ems": null
    },
    {
      "latitude": 51.728893,
      "longitude": 19.43985,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664623725,
      "ems": null
    },
    {
      "latitude": 51.729492,
      "longitude": 19.437042,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664623729,
      "ems": null
    },
    {
      "latitude": 51.729675,
      "longitude": 19.434591,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664623733,
      "ems": null
    },
    {
      "latitude": 51.729446,
      "longitude": 19.431622,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1664623737,
      "ems": null
    },
    {
      "latitude": 51.728848,
      "longitude": 19.428787,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664623741,
      "ems": null
    },
    {
      "latitude": 51.72821,
      "longitude": 19.426203,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664623745,
      "ems": null
    },
    {
      "latitude": 51.727753,
      "longitude": 19.424051,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664623749,
      "ems": null
    },
    {
      "latitude": 51.727219,
      "longitude": 19.421463,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664623753,
      "ems": null
    },
    {
      "latitude": 51.726608,
      "longitude": 19.418633,
      "altitude": {
        "feet": 1175,
        "meters": 358
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664623758,
      "ems": null
    },
    {
      "latitude": 51.725727,
      "longitude": 19.415207,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664623763,
      "ems": null
    },
    {
      "latitude": 51.725189,
      "longitude": 19.412991,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664623769,
      "ems": null
    },
    {
      "latitude": 51.723354,
      "longitude": 19.40506,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664623779,
      "ems": null
    },
    {
      "latitude": 51.722702,
      "longitude": 19.401932,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1664623784,
      "ems": null
    },
    {
      "latitude": 51.722095,
      "longitude": 19.398499,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664623790,
      "ems": null
    },
    {
      "latitude": 51.721252,
      "longitude": 19.394062,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664623797,
      "ems": null
    },
    {
      "latitude": 51.720383,
      "longitude": 19.389978,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664623805,
      "ems": null
    },
    {
      "latitude": 51.720245,
      "longitude": 19.38946,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664623809,
      "ems": null
    },
    {
      "latitude": 51.719349,
      "longitude": 19.385223,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664623814,
      "ems": null
    },
    {
      "latitude": 51.718651,
      "longitude": 19.382324,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664623819,
      "ems": null
    },
    {
      "latitude": 51.718552,
      "longitude": 19.381887,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664623820,
      "ems": null
    },
    {
      "latitude": 51.717041,
      "longitude": 19.375057,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664623834,
      "ems": null
    },
    {
      "latitude": 51.715672,
      "longitude": 19.369125,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664623842,
      "ems": null
    },
    {
      "latitude": 51.714371,
      "longitude": 19.363251,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664623851,
      "ems": null
    },
    {
      "latitude": 51.713345,
      "longitude": 19.358521,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664623860,
      "ems": null
    },
    {
      "latitude": 51.711685,
      "longitude": 19.352194,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1664623870,
      "ems": null
    },
    {
      "latitude": 51.710632,
      "longitude": 19.349745,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1664623874,
      "ems": null
    },
    {
      "latitude": 51.709717,
      "longitude": 19.348186,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1664623878,
      "ems": null
    },
    {
      "latitude": 51.708572,
      "longitude": 19.346849,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1664623882,
      "ems": null
    },
    {
      "latitude": 51.706921,
      "longitude": 19.345856,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1664623886,
      "ems": null
    },
    {
      "latitude": 51.70546,
      "longitude": 19.345514,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664623890,
      "ems": null
    },
    {
      "latitude": 51.704178,
      "longitude": 19.345661,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664623894,
      "ems": null
    },
    {
      "latitude": 51.702576,
      "longitude": 19.346256,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664623898,
      "ems": null
    },
    {
      "latitude": 51.701019,
      "longitude": 19.346849,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664623902,
      "ems": null
    },
    {
      "latitude": 51.699287,
      "longitude": 19.34761,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664623907,
      "ems": null
    },
    {
      "latitude": 51.697517,
      "longitude": 19.34845,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664623912,
      "ems": null
    },
    {
      "latitude": 51.695618,
      "longitude": 19.349596,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664623918,
      "ems": null
    },
    {
      "latitude": 51.69397,
      "longitude": 19.35071,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664623922,
      "ems": null
    },
    {
      "latitude": 51.692722,
      "longitude": 19.351654,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664623926,
      "ems": null
    },
    {
      "latitude": 51.691513,
      "longitude": 19.352646,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1664623930,
      "ems": null
    },
    {
      "latitude": 51.690254,
      "longitude": 19.35379,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1664623934,
      "ems": null
    },
    {
      "latitude": 51.689117,
      "longitude": 19.355831,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664623938,
      "ems": null
    },
    {
      "latitude": 51.688438,
      "longitude": 19.357605,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664623942,
      "ems": null
    },
    {
      "latitude": 51.68779,
      "longitude": 19.359766,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664623946,
      "ems": null
    },
    {
      "latitude": 51.687469,
      "longitude": 19.36281,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664623950,
      "ems": null
    },
    {
      "latitude": 51.687424,
      "longitude": 19.364813,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1664623954,
      "ems": null
    },
    {
      "latitude": 51.687698,
      "longitude": 19.367783,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1664623958,
      "ems": null
    },
    {
      "latitude": 51.688068,
      "longitude": 19.369888,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664623962,
      "ems": null
    },
    {
      "latitude": 51.688717,
      "longitude": 19.372482,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1664623966,
      "ems": null
    },
    {
      "latitude": 51.689369,
      "longitude": 19.374924,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1664623970,
      "ems": null
    },
    {
      "latitude": 51.690022,
      "longitude": 19.37767,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664623974,
      "ems": null
    },
    {
      "latitude": 51.690674,
      "longitude": 19.380722,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664623978,
      "ems": null
    },
    {
      "latitude": 51.691185,
      "longitude": 19.383011,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664623982,
      "ems": null
    },
    {
      "latitude": 51.691696,
      "longitude": 19.385757,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664623986,
      "ems": null
    },
    {
      "latitude": 51.692917,
      "longitude": 19.391834,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664623995,
      "ems": null
    },
    {
      "latitude": 51.69421,
      "longitude": 19.397736,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664624003,
      "ems": null
    },
    {
      "latitude": 51.695236,
      "longitude": 19.402237,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664624011,
      "ems": null
    },
    {
      "latitude": 51.696445,
      "longitude": 19.407806,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664624019,
      "ems": null
    },
    {
      "latitude": 51.697517,
      "longitude": 19.412842,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664624027,
      "ems": null
    },
    {
      "latitude": 51.698639,
      "longitude": 19.418261,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664624035,
      "ems": null
    },
    {
      "latitude": 51.700497,
      "longitude": 19.426041,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1664624044,
      "ems": null
    },
    {
      "latitude": 51.701893,
      "longitude": 19.432449,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "squawk": "7000",
      "timestamp": 1664624053,
      "ems": null
    },
    {
      "latitude": 51.703125,
      "longitude": 19.437933,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664624061,
      "ems": null
    },
    {
      "latitude": 51.703987,
      "longitude": 19.440689,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1664624065,
      "ems": null
    },
    {
      "latitude": 51.705231,
      "longitude": 19.443352,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1664624069,
      "ems": null
    },
    {
      "latitude": 51.706596,
      "longitude": 19.445572,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1664624073,
      "ems": null
    },
    {
      "latitude": 51.708252,
      "longitude": 19.447657,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1664624077,
      "ems": null
    },
    {
      "latitude": 51.709621,
      "longitude": 19.449005,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1664624081,
      "ems": null
    },
    {
      "latitude": 51.711456,
      "longitude": 19.45018,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1664624085,
      "ems": null
    },
    {
      "latitude": 51.713299,
      "longitude": 19.45076,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1664624089,
      "ems": null
    },
    {
      "latitude": 51.715118,
      "longitude": 19.450775,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1664624093,
      "ems": null
    },
    {
      "latitude": 51.716995,
      "longitude": 19.450478,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1664624097,
      "ems": null
    },
    {
      "latitude": 51.719025,
      "longitude": 19.450073,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1664624101,
      "ems": null
    },
    {
      "latitude": 51.721397,
      "longitude": 19.449005,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1664624106,
      "ems": null
    },
    {
      "latitude": 51.723679,
      "longitude": 19.447174,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1664624110,
      "ems": null
    },
    {
      "latitude": 51.72496,
      "longitude": 19.445801,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1664624114,
      "ems": null
    },
    {
      "latitude": 51.7267,
      "longitude": 19.443722,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664624118,
      "ems": null
    },
    {
      "latitude": 51.727634,
      "longitude": 19.44191,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664624122,
      "ems": null
    },
    {
      "latitude": 51.728519,
      "longitude": 19.439163,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664624126,
      "ems": null
    },
    {
      "latitude": 51.729034,
      "longitude": 19.436298,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664624130,
      "ems": null
    },
    {
      "latitude": 51.729309,
      "longitude": 19.433107,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1664624134,
      "ems": null
    },
    {
      "latitude": 51.729172,
      "longitude": 19.430847,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1664624138,
      "ems": null
    },
    {
      "latitude": 51.728661,
      "longitude": 19.427948,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664624142,
      "ems": null
    },
    {
      "latitude": 51.728054,
      "longitude": 19.425354,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1664624147,
      "ems": null
    },
    {
      "latitude": 51.727341,
      "longitude": 19.422565,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664624151,
      "ems": null
    },
    {
      "latitude": 51.726746,
      "longitude": 19.419968,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664624155,
      "ems": null
    },
    {
      "latitude": 51.726379,
      "longitude": 19.417953,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664624159,
      "ems": null
    },
    {
      "latitude": 51.72583,
      "longitude": 19.415514,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664624163,
      "ems": null
    },
    {
      "latitude": 51.725357,
      "longitude": 19.413605,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1664624166,
      "ems": null
    },
    {
      "latitude": 51.724842,
      "longitude": 19.411621,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664624170,
      "ems": null
    },
    {
      "latitude": 51.724331,
      "longitude": 19.409256,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664624174,
      "ems": null
    },
    {
      "latitude": 51.723679,
      "longitude": 19.406281,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664624180,
      "ems": null
    },
    {
      "latitude": 51.722656,
      "longitude": 19.40155,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664624187,
      "ems": null
    },
    {
      "latitude": 51.718506,
      "longitude": 19.381516,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "timestamp": 1664624224,
      "ems": null
    },
    {
      "latitude": 51.717499,
      "longitude": 19.376097,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664624233,
      "ems": null
    },
    {
      "latitude": 51.717117,
      "longitude": 19.374008,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664624237,
      "ems": null
    },
    {
      "latitude": 51.715717,
      "longitude": 19.366379,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664624250,
      "ems": null
    },
    {
      "latitude": 51.714661,
      "longitude": 19.360582,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1664624260,
      "ems": null
    },
    {
      "latitude": 51.713345,
      "longitude": 19.354477,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1664624268,
      "ems": null
    },
    {
      "latitude": 51.712322,
      "longitude": 19.352493,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1664624272,
      "ems": null
    },
    {
      "latitude": 51.711155,
      "longitude": 19.351044,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1664624276,
      "ems": null
    },
    {
      "latitude": 51.709621,
      "longitude": 19.34967,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1664624280,
      "ems": null
    },
    {
      "latitude": 51.707897,
      "longitude": 19.348831,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664624284,
      "ems": null
    },
    {
      "latitude": 51.706501,
      "longitude": 19.34845,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1664624288,
      "ems": null
    },
    {
      "latitude": 51.704407,
      "longitude": 19.34845,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664624293,
      "ems": null
    },
    {
      "latitude": 51.702988,
      "longitude": 19.348705,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664624297,
      "ems": null
    },
    {
      "latitude": 51.700821,
      "longitude": 19.349213,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664624302,
      "ems": null
    },
    {
      "latitude": 51.699333,
      "longitude": 19.34967,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664624306,
      "ems": null
    },
    {
      "latitude": 51.697311,
      "longitude": 19.350487,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664624310,
      "ems": null
    },
    {
      "latitude": 51.695843,
      "longitude": 19.351273,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664624314,
      "ems": null
    },
    {
      "latitude": 51.69397,
      "longitude": 19.35264,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "squawk": "7000",
      "timestamp": 1664624318,
      "ems": null
    },
    {
      "latitude": 51.692551,
      "longitude": 19.354273,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664624322,
      "ems": null
    },
    {
      "latitude": 51.691223,
      "longitude": 19.356573,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664624326,
      "ems": null
    },
    {
      "latitude": 51.690125,
      "longitude": 19.359617,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664624330,
      "ems": null
    },
    {
      "latitude": 51.689556,
      "longitude": 19.362335,
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664624334,
      "ems": null
    },
    {
      "latitude": 51.689323,
      "longitude": 19.365921,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664624339,
      "ems": null
    },
    {
      "latitude": 51.689438,
      "longitude": 19.369268,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1664624343,
      "ems": null
    },
    {
      "latitude": 51.689743,
      "longitude": 19.373093,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664624347,
      "ems": null
    },
    {
      "latitude": 51.690117,
      "longitude": 19.376678,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1664624351,
      "ems": null
    },
    {
      "latitude": 51.690582,
      "longitude": 19.379425,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664624355,
      "ems": null
    },
    {
      "latitude": 51.691223,
      "longitude": 19.382406,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664624359,
      "ems": null
    },
    {
      "latitude": 51.692024,
      "longitude": 19.386292,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664624363,
      "ems": null
    },
    {
      "latitude": 51.692677,
      "longitude": 19.389191,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664624367,
      "ems": null
    },
    {
      "latitude": 51.69342,
      "longitude": 19.392353,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664624371,
      "ems": null
    },
    {
      "latitude": 51.69421,
      "longitude": 19.395905,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664624375,
      "ems": null
    },
    {
      "latitude": 51.694817,
      "longitude": 19.398575,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664624379,
      "ems": null
    },
    {
      "latitude": 51.696121,
      "longitude": 19.405212,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664624387,
      "ems": null
    },
    {
      "latitude": 51.697266,
      "longitude": 19.411283,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664624395,
      "ems": null
    },
    {
      "latitude": 51.698215,
      "longitude": 19.416733,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664624403,
      "ems": null
    },
    {
      "latitude": 51.698727,
      "longitude": 19.419708,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664624407,
      "ems": null
    },
    {
      "latitude": 51.699753,
      "longitude": 19.425812,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664624415,
      "ems": null
    },
    {
      "latitude": 51.70079,
      "longitude": 19.431696,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664624423,
      "ems": null
    },
    {
      "latitude": 51.701706,
      "longitude": 19.436264,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664624431,
      "ems": null
    },
    {
      "latitude": 51.702732,
      "longitude": 19.441299,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664624439,
      "ems": null
    },
    {
      "latitude": 51.703308,
      "longitude": 19.443945,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1664624443,
      "ems": null
    },
    {
      "latitude": 51.703987,
      "longitude": 19.446106,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "squawk": "7000",
      "timestamp": 1664624447,
      "ems": null
    },
    {
      "latitude": 51.704407,
      "longitude": 19.447098,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1664624448,
      "ems": null
    },
    {
      "latitude": 51.70546,
      "longitude": 19.449661,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1664624453,
      "ems": null
    },
    {
      "latitude": 51.706375,
      "longitude": 19.451517,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1664624457,
      "ems": null
    },
    {
      "latitude": 51.707527,
      "longitude": 19.454117,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1664624462,
      "ems": null
    },
    {
      "latitude": 51.708298,
      "longitude": 19.458643,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664624470,
      "ems": null
    },
    {
      "latitude": 51.708084,
      "longitude": 19.461517,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664624474,
      "ems": null
    },
    {
      "latitude": 51.707657,
      "longitude": 19.463245,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664624477,
      "ems": null
    },
    {
      "latitude": 51.707153,
      "longitude": 19.464722,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664624480,
      "ems": null
    },
    {
      "latitude": 51.706501,
      "longitude": 19.466019,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1664624483,
      "ems": null
    },
    {
      "latitude": 51.705872,
      "longitude": 19.466808,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664624486,
      "ems": null
    },
    {
      "latitude": 51.704594,
      "longitude": 19.468079,
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1664624490,
      "ems": null
    },
    {
      "latitude": 51.703476,
      "longitude": 19.468536,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664624494,
      "ems": null
    },
    {
      "latitude": 51.701935,
      "longitude": 19.46822,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1664624498,
      "ems": null
    },
    {
      "latitude": 51.701008,
      "longitude": 19.467545,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "squawk": "7000",
      "timestamp": 1664624501,
      "ems": null
    },
    {
      "latitude": 51.700195,
      "longitude": 19.46629,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1664624504,
      "ems": null
    },
    {
      "latitude": 51.699753,
      "longitude": 19.465408,
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1664624506,
      "ems": null
    },
    {
      "latitude": 51.699192,
      "longitude": 19.462891,
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664624510,
      "ems": null
    },
    {
      "latitude": 51.699146,
      "longitude": 19.460907,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664624514,
      "ems": null
    },
    {
      "latitude": 51.69952,
      "longitude": 19.457855,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664624518,
      "ems": null
    },
    {
      "latitude": 51.700123,
      "longitude": 19.455643,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664624522,
      "ems": null
    },
    {
      "latitude": 51.701103,
      "longitude": 19.453506,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664624526,
      "ems": null
    },
    {
      "latitude": 51.702171,
      "longitude": 19.451675,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664624530,
      "ems": null
    },
    {
      "latitude": 51.703663,
      "longitude": 19.449768,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1664624534,
      "ems": null
    },
    {
      "latitude": 51.705059,
      "longitude": 19.448624,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664624538,
      "ems": null
    },
    {
      "latitude": 51.706829,
      "longitude": 19.447708,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1664624542,
      "ems": null
    },
    {
      "latitude": 51.708549,
      "longitude": 19.447403,
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1664624546,
      "ems": null
    },
    {
      "latitude": 51.710587,
      "longitude": 19.447582,
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
      "squawk": "7000",
      "timestamp": 1664624550,
      "ems": null
    },
    {
      "latitude": 51.711761,
      "longitude": 19.44809,
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1664624554,
      "ems": null
    },
    {
      "latitude": 51.71423,
      "longitude": 19.449921,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1664624560,
      "ems": null
    },
    {
      "latitude": 51.715942,
      "longitude": 19.45211,
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1664624565,
      "ems": null
    },
    {
      "latitude": 51.716789,
      "longitude": 19.453888,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1664624569,
      "ems": null
    },
    {
      "latitude": 51.717487,
      "longitude": 19.4561,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1664624573,
      "ems": null
    },
    {
      "latitude": 51.718323,
      "longitude": 19.458197,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1664624577,
      "ems": null
    },
    {
      "latitude": 51.718651,
      "longitude": 19.458694,
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
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1664624578,
      "ems": null
    },
    {
      "latitude": 51.721756,
      "longitude": 19.460276,
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1664624586,
      "ems": null
    },
    {
      "latitude": 51.723816,
      "longitude": 19.459087,
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
      "timestamp": 1664624591,
      "ems": null
    },
    {
      "latitude": 51.725494,
      "longitude": 19.456711,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664624596,
      "ems": null
    },
    {
      "latitude": 51.726521,
      "longitude": 19.454956,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664624600,
      "ems": null
    },
    {
      "latitude": 51.727615,
      "longitude": 19.452703,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664624604,
      "ems": null
    },
    {
      "latitude": 51.728622,
      "longitude": 19.450403,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664624608,
      "ems": null
    },
    {
      "latitude": 51.72945,
      "longitude": 19.448013,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664624612,
      "ems": null
    },
    {
      "latitude": 51.730133,
      "longitude": 19.445133,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664624616,
      "ems": null
    },
    {
      "latitude": 51.730499,
      "longitude": 19.442387,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664624620,
      "ems": null
    },
    {
      "latitude": 51.730568,
      "longitude": 19.439392,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664624624,
      "ems": null
    },
    {
      "latitude": 51.730335,
      "longitude": 19.436798,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1664624628,
      "ems": null
    },
    {
      "latitude": 51.72987,
      "longitude": 19.433823,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664624632,
      "ems": null
    },
    {
      "latitude": 51.729401,
      "longitude": 19.4314,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664624636,
      "ems": null
    },
    {
      "latitude": 51.728893,
      "longitude": 19.429245,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664624640,
      "ems": null
    },
    {
      "latitude": 51.728394,
      "longitude": 19.427168,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664624644,
      "ems": null
    },
    {
      "latitude": 51.727821,
      "longitude": 19.424667,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664624648,
      "ems": null
    },
    {
      "latitude": 51.727386,
      "longitude": 19.422863,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664624652,
      "ems": null
    },
    {
      "latitude": 51.726799,
      "longitude": 19.42009,
      "altitude": {
        "feet": 1075,
        "meters": 328
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664624656,
      "ems": null
    },
    {
      "latitude": 51.726192,
      "longitude": 19.417572,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664624660,
      "ems": null
    },
    {
      "latitude": 51.725555,
      "longitude": 19.414995,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664624665,
      "ems": null
    },
    {
      "latitude": 51.723724,
      "longitude": 19.406532,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664624680,
      "ems": null
    },
    {
      "latitude": 51.722672,
      "longitude": 19.401707,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664624691,
      "ems": null
    },
    {
      "latitude": 51.723492,
      "longitude": 19.406071,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664624858,
      "ems": null
    },
    {
      "latitude": 51.72319,
      "longitude": 19.406643,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664624866,
      "ems": null
    }
  ]
};